import { writeFileSync } from "node:fs";
import { createRequire } from "node:module";

const runtimePlaywrightPackage =
  process.env.TR3C3_PLAYWRIGHT_PACKAGE ??
  "C:/Users/epedr/AppData/Local/OpenAI/Codex/runtimes/cua_node/ecfc0d9aa02807e3/bin/node_modules/playwright/package.json";
const playwright = await import("playwright").catch(() => createRequire(runtimePlaywrightPackage)("playwright"));
const { chromium } = playwright;

const baseUrl = process.env.TR3C3_QA_BASE_URL ?? "http://127.0.0.1:4321";
const output = process.env.TR3C3_RUNTIME_QA_OUTPUT ?? "SEO_RUNTIME_QA.json";
const executablePath = process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE;
const routes = ["/es/", "/es/carta/", "/es/contacto/", "/zh/", "/mejor-brunch-miami-platja/"];

const browser = await chromium.launch({ headless: true, executablePath });
const errors = [];
const results = [];

const noJsContext = await browser.newContext({
  javaScriptEnabled: false,
  viewport: { width: 375, height: 844 },
  isMobile: true,
  hasTouch: true,
});

for (const route of routes) {
  const page = await noJsContext.newPage();
  const response = await page.goto(baseUrl + route, { waitUntil: "load", timeout: 45_000 });
  const result = await page.evaluate(() => {
    const main = document.querySelector("main");
    const h1 = document.querySelectorAll("h1");
    const mainStyle = main ? getComputedStyle(main) : null;
    return {
      title: document.title,
      lang: document.documentElement.lang,
      mainTextLength: main?.textContent?.replace(/\s+/g, " ").trim().length ?? 0,
      mainVisible: Boolean(main && mainStyle?.display !== "none" && mainStyle?.visibility !== "hidden"),
      h1Count: h1.length,
      overflowX: document.documentElement.scrollWidth > document.documentElement.clientWidth,
      canonical: document.querySelector('link[rel="canonical"]')?.href ?? "",
      noJsFallback: Boolean(document.querySelector("noscript")),
    };
  });
  const record = { route, status: response?.status() ?? 0, ...result };
  results.push(record);
  if (record.status >= 400) errors.push(`${route}: HTTP ${record.status}`);
  if (!record.mainVisible || record.mainTextLength < 100) errors.push(`${route}: contenido principal no visible sin JS`);
  if (record.h1Count !== 1) errors.push(`${route}: ${record.h1Count} H1 sin JS`);
  if (record.overflowX) errors.push(`${route}: overflow horizontal sin JS`);
  if (!record.canonical) errors.push(`${route}: canonical ausente sin JS`);
  await page.close();
}
await noJsContext.close();

const context = await browser.newContext({ viewport: { width: 375, height: 844 }, isMobile: true, hasTouch: true });
const page = await context.newPage();
await page.goto(baseUrl + "/es/", { waitUntil: "domcontentloaded", timeout: 45_000 });
const initialMap = await page.locator("[data-map-facade]").evaluate((frame) => ({
  src: frame.getAttribute("src"),
  dataSrc: frame.getAttribute("data-src"),
  hasSrcdoc: frame.getAttribute("role") === "img",
}));
if (initialMap.src) errors.push("El mapa de la home se cargó antes de aproximarse al viewport");
if (!initialMap.dataSrc || !initialMap.hasSrcdoc) errors.push("El mapa diferido no conserva data-src/srcdoc");

await page.locator("[data-map-facade]").scrollIntoViewIfNeeded();
await page.waitForFunction(() => document.querySelector("iframe[src*='google.com/maps']"), null, { timeout: 10_000 });
const loadedMapSrc = await page.locator("iframe[src*='google.com/maps']").getAttribute("src");
if (!loadedMapSrc?.includes("google.com/maps")) errors.push("El mapa no se cargó al entrar en el viewport");
await context.close();

const keyboardContext = await browser.newContext({ viewport: { width: 375, height: 844 }, isMobile: true, hasTouch: true });
const keyboardPage = await keyboardContext.newPage();
await keyboardPage.goto(baseUrl + "/es/", { waitUntil: "load", timeout: 45_000 });
await keyboardPage.keyboard.press("Tab");
const skipLinkFocused = await keyboardPage.locator(".skip-link").evaluate((link) => link === document.activeElement);
if (!skipLinkFocused) errors.push("El enlace para saltar al contenido no recibe el primer foco");

const menuToggle = keyboardPage.locator("[data-menu-toggle]");
await menuToggle.focus();
await keyboardPage.keyboard.press("Enter");
const mobileMenuOpened = (await menuToggle.getAttribute("aria-expanded")) === "true";
await keyboardPage.keyboard.press("Escape");
const mobileMenuClosed = (await menuToggle.getAttribute("aria-expanded")) === "false";
if (!mobileMenuOpened || !mobileMenuClosed) errors.push("El menú móvil no abre/cierra correctamente con teclado");

const languageSummary = keyboardPage.locator("[data-language-menu] summary");
await languageSummary.focus();
await keyboardPage.keyboard.press("Enter");
const languageMenuOpened = await keyboardPage.locator("[data-language-menu][open]").count();
const languageLinkCount = await keyboardPage.locator("[data-language-link]").count();
const languageHrefs = await keyboardPage.locator("[data-language-link]").evaluateAll((links) => [...new Set(links.map((link) => link.getAttribute("href")))]);
await keyboardPage.keyboard.press("Escape");
if (!languageMenuOpened || languageHrefs.length !== 8) errors.push("El selector de idioma no expone las ocho versiones con teclado");

const actionLinks = await keyboardPage.locator('a[href^="tel:"], a[href*="maps.app.goo.gl"], a[href*="instagram.com"], a[href$="/carta/"]').evaluateAll((links) =>
  links.map((link) => ({ href: link.getAttribute("href"), text: link.textContent?.replace(/\s+/g, " ").trim() })),
);
if (!actionLinks.some((link) => link.href?.startsWith("tel:+34"))) errors.push("No se encontró un enlace telefónico funcional");
if (!actionLinks.some((link) => link.href?.includes("maps.app.goo.gl"))) errors.push("No se encontró un enlace funcional a Google Maps");
if (!actionLinks.some((link) => link.href?.includes("instagram.com"))) errors.push("No se encontró un enlace funcional a Instagram");
if (!actionLinks.some((link) => link.href === "/es/carta/")) errors.push("No se encontró el enlace canónico a la carta");
await keyboardContext.close();

const notFoundPage = await browser.newPage();
const notFoundResponse = await notFoundPage.goto(baseUrl + "/ruta-inexistente-qa/", { waitUntil: "load", timeout: 45_000 });
const notFound = {
  status: notFoundResponse?.status() ?? 0,
};
if (notFound.status !== 404) errors.push(`404 real esperado, recibido ${notFound.status}`);
await notFoundPage.close();

const custom404Page = await browser.newPage();
const custom404Response = await custom404Page.goto(baseUrl + "/404.html", { waitUntil: "load", timeout: 45_000 });
const custom404 = {
  status: custom404Response?.status() ?? 0,
  robots: await custom404Page.locator('meta[name="robots"]').getAttribute("content").catch(() => null),
};
if (!custom404.robots?.includes("noindex")) errors.push("El documento 404 personalizado no incluye noindex");
await custom404Page.close();

await browser.close();

const keyboard = {
  skipLinkFocused,
  mobileMenuOpened,
  mobileMenuClosed,
  languageMenuOpened: Boolean(languageMenuOpened),
  languageLinkCount,
  uniqueLanguageTargets: languageHrefs.length,
  actionLinkCount: actionLinks.length,
};
const report = { checkedAt: new Date().toISOString(), baseUrl, noJavaScript: results, map: { initialMap, loadedMapSrc }, keyboard, notFound, custom404, errors };
writeFileSync(output, JSON.stringify(report, null, 2));
console.log(JSON.stringify({ noJavaScriptRoutes: results.length, mapDeferred: !initialMap.src && Boolean(loadedMapSrc), keyboard, notFound, custom404, errors }, null, 2));
if (errors.length) process.exitCode = 1;
