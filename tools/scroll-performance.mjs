import { createRequire } from "node:module";
import { writeFileSync } from "node:fs";

const runtimePackage = process.env.TR3C3_PLAYWRIGHT_PACKAGE;
const playwright = await import("playwright").catch(() => {
  if (!runtimePackage) throw new Error("Define TR3C3_PLAYWRIGHT_PACKAGE para usar el runtime de Playwright.");
  return createRequire(runtimePackage)("playwright");
});
const { chromium } = playwright;

const baseUrl = (process.env.TR3C3_AUDIT_BASE_URL ?? "http://127.0.0.1:4321").replace(/\/$/, "");
const output = process.env.TR3C3_SCROLL_OUTPUT ?? "output/performance/scroll-performance.json";
const routes = (process.env.TR3C3_SCROLL_ROUTES ?? "/es/,/es/carta/vinos/").split(",").filter(Boolean);

const browser = await chromium.launch({ headless: true });
const results = [];

for (const route of routes) {
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();
  const client = await context.newCDPSession(page);
  await client.send("Performance.enable");
  await client.send("Emulation.setCPUThrottlingRate", { rate: 4 });

  await page.addInitScript(() => {
    window.__tr3c3ScrollLongTasks = [];
    try {
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          window.__tr3c3ScrollLongTasks.push({ start: entry.startTime, duration: entry.duration });
        }
      }).observe({ type: "longtask", buffered: true });
    } catch {
      // Long Tasks is not implemented in every engine.
    }
  });

  await page.goto(baseUrl + route, { waitUntil: "load", timeout: 45_000 });
  await page.waitForFunction(() =>
    [...document.querySelectorAll("link[data-deferred-stylesheet]")].every((link) => link.media === "all"),
  ).catch(() => {});
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(250);

  const metricMap = (payload) =>
    Object.fromEntries(payload.metrics.map(({ name, value }) => [name, value]));
  const before = metricMap(await client.send("Performance.getMetrics"));

  const frames = await page.evaluate(async () => {
    window.__tr3c3ScrollLongTasks.length = 0;
    const duration = 7_000;
    const started = performance.now();
    const maxScroll = Math.max(0, document.documentElement.scrollHeight - innerHeight);
    const samples = [];
    let previous = started;

    await new Promise((resolve) => {
      const tick = (now) => {
        samples.push(now - previous);
        previous = now;
        const elapsed = now - started;
        const cycle = Math.min(1, elapsed / duration);
        const progress = cycle <= .5 ? cycle * 2 : (1 - cycle) * 2;
        scrollTo(0, maxScroll * progress);
        if (elapsed < duration) requestAnimationFrame(tick);
        else resolve();
      };
      requestAnimationFrame(tick);
    });

    const sorted = [...samples].sort((a, b) => a - b);
    const percentile = (value) => sorted[Math.min(sorted.length - 1, Math.floor(sorted.length * value))] ?? 0;
    return {
      duration: performance.now() - started,
      frames: samples.length,
      averageFps: samples.length / ((performance.now() - started) / 1000),
      p95FrameMs: percentile(.95),
      p99FrameMs: percentile(.99),
      maxFrameMs: sorted.at(-1) ?? 0,
      framesOver32ms: samples.filter((value) => value > 32).length,
      framesOver50ms: samples.filter((value) => value > 50).length,
      longTasks: [...window.__tr3c3ScrollLongTasks],
    };
  });

  const after = metricMap(await client.send("Performance.getMetrics"));
  const delta = (name) => (after[name] ?? 0) - (before[name] ?? 0);
  results.push({
    route,
    ...frames,
    averageFps: Number(frames.averageFps.toFixed(1)),
    p95FrameMs: Number(frames.p95FrameMs.toFixed(1)),
    p99FrameMs: Number(frames.p99FrameMs.toFixed(1)),
    maxFrameMs: Number(frames.maxFrameMs.toFixed(1)),
    longTaskCount: frames.longTasks.length,
    longTaskTotalMs: Math.round(frames.longTasks.reduce((sum, task) => sum + task.duration, 0)),
    metrics: {
      layoutCount: delta("LayoutCount"),
      recalcStyleCount: delta("RecalcStyleCount"),
      layoutDurationMs: Math.round(delta("LayoutDuration") * 1000),
      recalcStyleDurationMs: Math.round(delta("RecalcStyleDuration") * 1000),
      scriptDurationMs: Math.round(delta("ScriptDuration") * 1000),
      taskDurationMs: Math.round(delta("TaskDuration") * 1000),
    },
  });
  await context.close();
}

await browser.close();
writeFileSync(output, JSON.stringify(results, null, 2));
console.log(JSON.stringify(results, null, 2));
