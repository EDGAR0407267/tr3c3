import { writeFileSync } from "node:fs";
import { createRequire } from "node:module";

const runtimePlaywrightPackage =
  process.env.TR3C3_PLAYWRIGHT_PACKAGE ??
  "C:/Users/epedr/AppData/Local/OpenAI/Codex/runtimes/cua_node/ecfc0d9aa02807e3/bin/node_modules/playwright/package.json";
const playwright = await import("playwright").catch(() => createRequire(runtimePlaywrightPackage)("playwright"));
const { chromium } = playwright;

const baseUrl = process.env.TR3C3_QA_BASE_URL ?? "http://127.0.0.1:4321";
const output = process.env.TR3C3_QA_OUTPUT ?? "tr3c3-responsive-qa.json";
const executablePath = process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE;

const widths = [320, 360, 375, 390, 414, 430, 768, 1024, 1366, 1920];
const routes = ["/es/", "/es/carta/", "/es/contacto/", "/es/carta/vinos/", "/brunch-miami-platja/"];

function viewportFor(width) {
  if (width <= 430) return { width, height: 844 };
  if (width <= 768) return { width, height: 1024 };
  if (width <= 1024) return { width, height: 900 };
  return { width, height: 1080 };
}


async function inspectPage(browser, route, width) {
  const viewport = viewportFor(width);
  const isMobile = width <= 430;
  const context = await browser.newContext({
    viewport,
    isMobile,
    hasTouch: isMobile,
    deviceScaleFactor: isMobile ? 2 : 1,
    userAgent: isMobile
      ? "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"
      : undefined,
  });
  const page = await context.newPage();
  const consoleMessages = [];
  const failedRequests = [];

  page.on("console", (message) => {
    if (["error", "warning"].includes(message.type())) {
      consoleMessages.push({ type: message.type(), text: message.text().slice(0, 500) });
    }
  });
  page.on("requestfailed", (request) => {
    failedRequests.push({ url: request.url(), failure: request.failure()?.errorText ?? "failed" });
  });

  const response = await page.goto(baseUrl + route, { waitUntil: "load", timeout: 45_000 });
  await page.waitForTimeout(500);


  const pageHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  for (const y of [0, pageHeight * 0.33, pageHeight * 0.66, pageHeight]) {
    await page.evaluate((nextY) => window.scrollTo(0, nextY), y);
    await page.waitForTimeout(180);
  }

  await page.evaluate(async () => {
    const images = Array.from(document.images);
    images.forEach((image) => {
      image.loading = "eager";
    });
    await Promise.race([
      Promise.allSettled(images.map((image) => image.complete ? undefined : image.decode().catch(() => undefined))),
      new Promise((resolve) => setTimeout(resolve, 2_500)),
    ]);
  });

  const checks = await page.evaluate(() => {
    const visibleImages = Array.from(document.images).filter((image) => {
      const rect = image.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0;
    });
    const brokenImages = visibleImages
      .filter((image) => !image.complete || image.naturalWidth === 0 || image.naturalHeight === 0)
      .map((image) => image.currentSrc || image.src);
    const targetSelector = "a[href], button, summary";
    const crampedTargets = Array.from(document.querySelectorAll(targetSelector))
      .map((element) => {
        const rect = element.getBoundingClientRect();
        const style = getComputedStyle(element);
        return {
          label: (element.textContent || element.getAttribute("aria-label") || element.tagName).trim().slice(0, 80),
          width: Math.round(rect.width),
          height: Math.round(rect.height),
          display: style.display,
          visibility: style.visibility,
        };
      })
      .filter((target) => target.width > 0 && target.height > 0 && target.visibility !== "hidden")
      .filter((target) => target.width < 24 || target.height < 24)
      .slice(0, 8);

    return {
      title: document.title,
      overflowX: document.documentElement.scrollWidth > document.documentElement.clientWidth,
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
      bodyScrollWidth: document.body.scrollWidth,
      brokenImages,
      imageCount: visibleImages.length,
      linkCount: document.querySelectorAll("a[href]").length,
      crampedTargets,
      hasHeader: Boolean(document.querySelector(".tr-header, .hero-cover__bar")),
      hasMain: Boolean(document.querySelector("main")),
    };
  });

  const interaction = {};
  if (isMobile && route === "/es/") {
    const toggle = page.locator("[data-menu-toggle]").first();
    if (await toggle.count()) {
      try {
        await page.evaluate(() => window.scrollTo(0, Math.min(960, document.body.scrollHeight - innerHeight)));
        await page.waitForTimeout(350);
        await toggle.click({ timeout: 4_000 });
        interaction.mobileMenuOpened = (await toggle.getAttribute("aria-expanded")) === "true";
        interaction.mobileMenuVisible = await page.locator("#mobile-menu.is-open").count();
        await page.keyboard.press("Escape");
        interaction.mobileMenuClosed = (await toggle.getAttribute("aria-expanded")) === "false";
      } catch (error) {
        interaction.mobileMenuError = error instanceof Error ? error.message.slice(0, 500) : String(error);
      }
    }
  }

  if (!isMobile && route === "/es/carta/") {
    const summary = page.locator("[data-language-menu] summary").first();
    if (await summary.count()) {
      await summary.click();
      interaction.languageMenuOpened = await page.locator("[data-language-menu][open]").count();
      interaction.languageLinks = await page.locator("[data-language-link]").count();
    }
  }

  if (route === "/es/contacto/") {
    interaction.contactActions = await page.locator(".contact-action").evaluateAll((links) =>
      links.map((link) => ({
        text: link.textContent?.replace(/\s+/g, " ").trim().slice(0, 80),
        href: link.getAttribute("href"),
      })),
    );
  }


  await context.close();
  return {
    route,
    width,
    status: response?.status() ?? 0,
    consoleMessages,
    failedRequests,
    interaction,
    ...checks,
  };
}

const browser = await chromium.launch({ headless: true, executablePath });
const results = [];

for (const route of routes) {
  for (const width of widths) {
    results.push(await inspectPage(browser, route, width));
  }
}

await browser.close();

function actionableFailedRequests(result) {
  return result.failedRequests.filter(
    (request) => !((request.url.startsWith("https://www.google.com/maps/embed") || request.url.startsWith("https://maps.google.com/maps")) && request.failure === "net::ERR_ABORTED"),
  );
}

const summary = {
  checkedAt: new Date().toISOString(),
  baseUrl,
  widths,
  routes,
  totalChecks: results.length,
  failures: results.filter(
    (result) =>
      result.status >= 400 ||
      result.overflowX ||
      result.consoleMessages.length ||
      actionableFailedRequests(result).length ||
      result.brokenImages.length ||
      !result.hasHeader ||
      !result.hasMain,
  ),
  results,
};

writeFileSync(output, JSON.stringify(summary, null, 2));
console.log(JSON.stringify({
  totalChecks: summary.totalChecks,
  failureCount: summary.failures.length,
  failures: summary.failures.map((failure) => ({
    route: failure.route,
    width: failure.width,
    status: failure.status,
    overflowX: failure.overflowX,
    console: failure.consoleMessages.length,
    failedRequests: actionableFailedRequests(failure).length,
    brokenImages: failure.brokenImages.length,
    hasHeader: failure.hasHeader,
    hasMain: failure.hasMain,
  })),
}, null, 2));
