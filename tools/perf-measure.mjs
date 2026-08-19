import { writeFileSync } from "node:fs";
import { createRequire } from "node:module";

const runtimePlaywrightPackage =
  process.env.TR3C3_PLAYWRIGHT_PACKAGE ??
  "C:/Users/epedr/AppData/Local/OpenAI/Codex/runtimes/cua_node/ecfc0d9aa02807e3/bin/node_modules/playwright/package.json";
const playwright = await import("playwright").catch(() => createRequire(runtimePlaywrightPackage)("playwright"));
const { chromium } = playwright;

const baseUrl = process.env.TR3C3_AUDIT_BASE_URL ?? "http://127.0.0.1:4321";
const routes = [
  "/es/",
  "/es/carta/",
  "/es/carta/vinos/",
  "/es/contacto/",
  "/es/nosotros/",
  "/mejor-brunch-miami-platja/",
];
const output = process.env.TR3C3_AUDIT_OUTPUT ?? "tr3c3-performance-baseline.json";
const executablePath = process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE;

const vitalsScript = `
(() => {
  window.__tr3c3Vitals = { fcp: 0, lcp: 0, lcpInfo: "", cls: 0, longTasks: [] };
  try {
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === "first-contentful-paint") window.__tr3c3Vitals.fcp = entry.startTime;
      }
    }).observe({ type: "paint", buffered: true });
  } catch (error) {}
  try {
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const last = entries[entries.length - 1];
      if (!last) return;
      window.__tr3c3Vitals.lcp = last.startTime;
      const element = last.element;
      window.__tr3c3Vitals.lcpInfo = element
        ? element.tagName.toLowerCase() +
          (element.id ? "#" + element.id : "") +
          (element.className ? "." + String(element.className).trim().replace(/\\s+/g, ".") : "")
        : "";
    }).observe({ type: "largest-contentful-paint", buffered: true });
  } catch (error) {}
  try {
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) window.__tr3c3Vitals.cls += entry.value;
      }
    }).observe({ type: "layout-shift", buffered: true });
  } catch (error) {}
  try {
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        window.__tr3c3Vitals.longTasks.push({ start: entry.startTime, duration: entry.duration });
      }
    }).observe({ type: "longtask", buffered: true });
  } catch (error) {}
})();
`;

async function measureRoute(browser, route, mode) {
  const isMobile = mode === "mobile";
  const context = await browser.newContext({
    viewport: isMobile ? { width: 390, height: 844 } : { width: 1366, height: 900 },
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
    if (message.type() === "error" || message.type() === "warning") {
      consoleMessages.push({ type: message.type(), text: message.text().slice(0, 500) });
    }
  });
  page.on("requestfailed", (request) => {
    failedRequests.push({ url: request.url(), failure: request.failure()?.errorText ?? "failed" });
  });

  await page.addInitScript(vitalsScript);

  const client = await context.newCDPSession(page);
  await client.send("Network.enable");
  if (isMobile) {
    await client.send("Network.emulateNetworkConditions", {
      offline: false,
      latency: 150,
      downloadThroughput: (1.6 * 1024 * 1024) / 8,
      uploadThroughput: (750 * 1024) / 8,
    });
    await client.send("Emulation.setCPUThrottlingRate", { rate: 4 });
  }

  const start = Date.now();
  await page.goto(baseUrl + route, { waitUntil: "load", timeout: 45_000 });
  await page.waitForTimeout(isMobile ? 4_200 : 2_200);
  const elapsed = Date.now() - start;

  const data = await page.evaluate(() => {
    const navigation = performance.getEntriesByType("navigation")[0];
    const resources = performance.getEntriesByType("resource").map((resource) => ({
      name: resource.name,
      initiatorType: resource.initiatorType,
      transferSize: resource.transferSize || 0,
      encodedBodySize: resource.encodedBodySize || 0,
      decodedBodySize: resource.decodedBodySize || 0,
      duration: resource.duration || 0,
      startTime: resource.startTime || 0,
    }));
    const byType = resources.reduce((acc, resource) => {
      const key = resource.initiatorType || "other";
      acc[key] ??= { count: 0, transferSize: 0, encodedBodySize: 0 };
      acc[key].count += 1;
      acc[key].transferSize += resource.transferSize;
      acc[key].encodedBodySize += resource.encodedBodySize;
      return acc;
    }, {});
    const totalTransfer = resources.reduce(
      (sum, resource) => sum + (resource.transferSize || resource.encodedBodySize || 0),
      navigation?.transferSize || navigation?.encodedBodySize || 0,
    );
    const images = Array.from(document.images).map((image) => {
      const rect = image.getBoundingClientRect();
      return {
        currentSrc: image.currentSrc,
        loading: image.loading,
        complete: image.complete,
        naturalWidth: image.naturalWidth,
        naturalHeight: image.naturalHeight,
        displayWidth: Math.round(rect.width),
        displayHeight: Math.round(rect.height),
        aboveFold: rect.top < innerHeight,
      };
    });

    return {
      title: document.title,
      navigation: navigation
        ? {
            domContentLoaded: navigation.domContentLoadedEventEnd,
            load: navigation.loadEventEnd,
            responseEnd: navigation.responseEnd,
            transferSize: navigation.transferSize || 0,
            encodedBodySize: navigation.encodedBodySize || 0,
          }
        : null,
      vitals: window.__tr3c3Vitals,
      resourceCount: resources.length + 1,
      totalTransfer,
      byType,
      topResources: resources
        .sort((a, b) => (b.transferSize || b.encodedBodySize) - (a.transferSize || a.encodedBodySize))
        .slice(0, 12),
      images,
      overflow: {
        innerWidth,
        clientWidth: document.documentElement.clientWidth,
        scrollWidth: document.documentElement.scrollWidth,
        canScrollX: document.documentElement.scrollWidth > document.documentElement.clientWidth,
        bodyScrollWidth: document.body.scrollWidth,
      },
      domNodes: document.getElementsByTagName("*").length,
    };
  });

  await context.close();
  return { route, mode, elapsed, consoleMessages, failedRequests, ...data };
}

const browser = await chromium.launch({
  headless: true,
  executablePath,
});

const results = [];
for (const mode of ["mobile", "desktop"]) {
  for (const route of routes) {
    results.push(await measureRoute(browser, route, mode));
  }
}

await browser.close();
writeFileSync(output, JSON.stringify(results, null, 2));

console.log(JSON.stringify(results.map((result) => ({
  route: result.route,
  mode: result.mode,
  elapsed: result.elapsed,
  fcp: Math.round(result.vitals.fcp),
  lcp: Math.round(result.vitals.lcp),
  lcpInfo: result.vitals.lcpInfo,
  cls: Number(result.vitals.cls.toFixed(4)),
  longTasks: result.vitals.longTasks.length,
  longTaskTotal: Math.round(result.vitals.longTasks.reduce((sum, task) => sum + task.duration, 0)),
  resourceCount: result.resourceCount,
  totalTransferKB: Math.round(result.totalTransfer / 1024),
  domNodes: result.domNodes,
  overflowX: result.overflow.canScrollX,
  console: result.consoleMessages.length,
  failed: result.failedRequests.length,
  byType: result.byType,
})), null, 2));
