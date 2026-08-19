import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { extname, join, relative, resolve, sep } from "node:path";

const runtimePackage = process.env.TR3C3_PLAYWRIGHT_PACKAGE ||
  "C:/Users/epedr/AppData/Local/OpenAI/Codex/runtimes/cua_node/ecfc0d9aa02807e3/bin/node_modules/playwright/package.json";
const pw = await import("playwright").catch(() => createRequire(runtimePackage)("playwright"));
const baseUrl = (process.env.TR3C3_AUDIT_BASE_URL || "http://127.0.0.1:4401").replace(/\/$/, "");
const environment = process.env.TR3C3_AUDIT_ENV || "production-preview";
const output = resolve(process.env.TR3C3_AUDIT_OUTPUT || "output/playwright/full-site-" + environment + ".json");
const browserNames = (process.env.TR3C3_AUDIT_BROWSERS || "chromium,chrome,edge,firefox,webkit").split(",").filter(Boolean);
const dist = resolve("dist");
const languages = ["es", "ca", "en", "fr", "de", "zh", "nl", "it"];
const issues = [];
if (!existsSync(dist)) throw new Error("dist/ no existe. Ejecuta npm run build.");
mkdirSync(resolve(output, ".."), { recursive: true });

const walk = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
  const file = join(dir, entry.name);
  return entry.isDirectory() ? walk(file) : [file];
});
const routeFor = (file) => {
  const rel = relative(dist, file).split(sep).join("/");
  if (rel === "index.html") return "/";
  if (rel === "404.html") return "/404.html";
  return "/" + rel.replace(/index\.html$/, "");
};
const classify = (route, redirect) => {
  if (redirect) return "redirect";
  if (route === "/404.html") return "error";
  if (/^\/(es|ca|en|fr|de|zh|nl|it)\/$/.test(route)) return "home";
  if (/\/carta\/$/.test(route)) return "menu-portal";
  if (/\/carta\/[^/]+\/$/.test(route)) return "menu-section";
  if (/\/contacto\/$/.test(route)) return "contact";
  if (/\/equipo\/$/.test(route)) return "team";
  if (/\/nosotros\/$/.test(route)) return "about";
  return "local-seo";
};
const pages = walk(dist).filter((file) => file.endsWith(".html")).map((file) => {
  const html = readFileSync(file, "utf8");
  const route = routeFor(file);
  const redirect = /http-equiv=["']refresh/i.test(html);
  const count = (regex) => (html.match(regex) || []).length;
  return {
    route,
    redirect,
    noindex: /name=["']robots["'][^>]*noindex/i.test(html),
    type: classify(route, redirect),
    language: html.match(/<html lang=["']([^"']+)/i)?.[1] || "",
    title: html.match(/<title>(.*?)<\/title>/is)?.[1] || "",
    controls: {
      links: count(/<a\b/gi), buttons: count(/<button\b/gi), forms: count(/<form\b/gi),
      fields: count(/<(input|textarea|select)\b/gi), images: count(/<img\b/gi),
      videos: count(/<video\b/gi), iframes: count(/<iframe\b/gi), details: count(/<details\b/gi),
    },
    externalLinks: [...html.matchAll(/<a\b[^>]*href=["'](https?:[^"']+)/gi)].map((match) => match[1].replaceAll("&amp;", "&")),
  };
});
const pageMap = new Map(pages.map((page) => [page.route, page]));
const totals = pages.reduce((result, page) => {
  for (const [key, value] of Object.entries(page.controls)) result[key] = (result[key] || 0) + value;
  return result;
}, {});
const inventory = {
  htmlDocuments: pages.length,
  indexable: pages.filter((page) => !page.redirect && !page.noindex).length,
  redirects: pages.filter((page) => page.redirect).length,
  noindex: pages.filter((page) => page.noindex).length,
  routeTypes: Object.fromEntries([...new Set(pages.map((page) => page.type))].map((type) => [type, pages.filter((page) => page.type === type).length])),
  languages: Object.fromEntries(languages.map((lang) => [lang, pages.filter((page) => page.route.startsWith("/" + lang + "/")).length])),
  controlOccurrences: totals,
  externalLinks: [...new Set(pages.flatMap((page) => page.externalLinks))].sort(),
  routes: pages,
};
const reportIssue = (code, severity, category, message, detail = {}) => {
  const candidate = { code, severity, category, environment, message, ...detail };
  const key = [code, candidate.browser, candidate.route, candidate.viewport, message].join("|");
  if (!issues.some((item) => item._key === key)) issues.push({ _key: key, ...candidate });
};
const normalizePath = (url) => {
  const parsed = new URL(url);
  let path = parsed.pathname;
  if (!extname(path) && !path.endsWith("/")) path += "/";
  return path;
};
const waitCss = async (page) => {
  await page.waitForFunction(() => [...document.querySelectorAll("link[data-deferred-stylesheet]")].every((link) => link.media === "all"), null, { timeout: 4000 }).catch(() => {});
  await page.waitForTimeout(80);
};
const chromePath = ["C:/Program Files/Google/Chrome/Application/chrome.exe", "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe"].find(existsSync);
const edgePath = ["C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe", "C:/Program Files/Microsoft/Edge/Application/msedge.exe"].find(existsSync);
const definitions = {
  chromium: [pw.chromium, {}],
  chrome: [pw.chromium, chromePath ? { executablePath: chromePath } : null],
  edge: [pw.chromium, edgePath ? { executablePath: edgePath } : null],
  firefox: [pw.firefox, {}],
  webkit: [pw.webkit, {}],
};
const launched = {};
const skippedBrowsers = [];
for (const name of browserNames) {
  const definition = definitions[name];
  if (!definition || definition[1] === null) {
    skippedBrowsers.push({ browser: name, reason: "Ejecutable no instalado" });
    continue;
  }
  try {
    launched[name] = await definition[0].launch({ headless: true, ...definition[1] });
  } catch (error) {
    skippedBrowsers.push({ browser: name, reason: error.message.split("\n")[0] });
  }
}
if (!launched.chromium) throw new Error("Chromium no pudo iniciarse.");

const auditPage = async (browser, browserName, route, viewport) => {
  const context = await browser.newContext({ viewport });
  const page = await context.newPage();
  const consoleErrors = [];
  const pageErrors = [];
  const failed = [];
  page.on("console", (message) => {
    if (message.type() === "error" && !/favicon|ERR_BLOCKED_BY_CLIENT/i.test(message.text())) consoleErrors.push(message.text().slice(0, 500));
  });
  page.on("pageerror", (error) => pageErrors.push(error.message.slice(0, 500)));
  page.on("requestfailed", (request) => {
    if (request.url().startsWith(baseUrl)) failed.push({ url: request.url(), error: request.failure()?.errorText });
  });
  let response;
  let navigationError = "";
  try {
    response = await page.goto(baseUrl + route, { waitUntil: "load", timeout: 30000 });
    await waitCss(page);
  } catch (error) {
    navigationError = error.message;
  }
  const data = navigationError ? null : await page.evaluate(() => {
    const visible = (element) => {
      const style = getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      return style.display !== "none" && style.visibility !== "hidden" && rect.width > 0 && rect.height > 0;
    };
    const name = (element) => {
      const ids = element.getAttribute("aria-labelledby");
      const labelText = element.labels ? [...element.labels].map((label) => label.textContent || "").join(" ") : "";
      const labelled = ids ? ids.split(/\s+/).map((id) => document.getElementById(id)?.textContent || "").join(" ") : "";
      return (element.getAttribute("aria-label") || labelled || labelText || element.getAttribute("title") ||
        element.textContent || element.querySelector("img")?.alt || "").replace(/\s+/g, " ").trim();
    };
    const ids = [...document.querySelectorAll("[id]")].map((element) => element.id).filter(Boolean);
    return {
      url: location.href,
      lang: document.documentElement.lang,
      title: document.title,
      main: Boolean(document.querySelector("main")) && visible(document.querySelector("main")),
      textLength: document.body.innerText.trim().length,
      h1: document.querySelectorAll("h1").length,
      overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 2,
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      duplicateIds: [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))],
      unnamed: [...document.querySelectorAll("a[href],button,input,select,textarea,summary,[role='button']")].filter(visible).filter((element) => !name(element)).map((element) => element.outerHTML.slice(0, 120)),
      unlabeled: [...document.querySelectorAll("input,select,textarea")].filter((field) => field.type !== "hidden" && visible(field) && !field.labels?.length && !field.getAttribute("aria-label") && !field.getAttribute("aria-labelledby")).map((field) => field.name || field.id),
      brokenImages: [...document.images].filter((image) => (image.loading !== "lazy" || image.getBoundingClientRect().top < innerHeight * 1.5) && image.complete && !image.naturalWidth).map((image) => image.currentSrc || image.src),
      missingAlt: [...document.images].filter((image) => !image.hasAttribute("alt")).map((image) => image.currentSrc || image.src),
      unsafeBlank: [...document.querySelectorAll("a[target='_blank']")].filter((link) => !/(^|\s)noopener(\s|$)/i.test(link.rel)).map((link) => link.href),
    };
  });
  const result = { browser: browserName, route, viewport: viewport.width + "x" + viewport.height, status: response?.status() || 0, navigationError, consoleErrors, pageErrors, failed, data };
  const known = pageMap.get(route);
  if (navigationError) reportIssue("NAVIGATION_FAILED", "high", "functional", navigationError, result);
  if (data && !known?.redirect) {
    if (!data.main || data.textLength < 20) reportIssue("MAIN_MISSING", "high", "functional", "Contenido principal ausente", result);
    if (!known?.noindex && data.h1 !== 1) reportIssue("H1_INVALID", "medium", "accessibility-seo", "H1=" + data.h1, result);
    if (!data.lang) reportIssue("LANG_MISSING", "medium", "accessibility", "html[lang] ausente", result);
    if (data.overflow) reportIssue("HORIZONTAL_OVERFLOW", "medium", "visual", "scrollWidth=" + data.scrollWidth + ", clientWidth=" + data.clientWidth, result);
    if (data.duplicateIds.length) reportIssue("DUPLICATE_IDS", "medium", "accessibility", data.duplicateIds.join(","), result);
    if (data.unnamed.length) reportIssue("UNNAMED_INTERACTIVE", "high", "accessibility", data.unnamed.join("|"), result);
    if (data.unlabeled.length) reportIssue("UNLABELED_FIELD", "high", "accessibility", data.unlabeled.join(","), result);
    if (data.brokenImages.length) reportIssue("BROKEN_IMAGE", "high", "functional-visual", data.brokenImages.join(","), result);
    if (data.missingAlt.length) reportIssue("MISSING_ALT", "medium", "accessibility", data.missingAlt.join(","), result);
    if (data.unsafeBlank.length) reportIssue("UNSAFE_BLANK", "medium", "security", data.unsafeBlank.join(","), result);
  }
  if (pageErrors.length) reportIssue("PAGE_ERROR", "high", "technical", pageErrors.join("|"), result);
  if (failed.length) reportIssue("INTERNAL_REQUEST_FAILED", "high", "technical", JSON.stringify(failed), result);
  if (consoleErrors.length) reportIssue("CONSOLE_ERROR", "medium", "technical", consoleErrors.join("|"), result);
  await context.close();
  return result;
};

const routeSweeps = [];
for (const viewport of [{ width: 390, height: 844 }, { width: 1366, height: 768 }]) {
  for (const page of pages) routeSweeps.push(await auditPage(launched.chromium, "chromium", page.route, viewport));
}
const representativeRoutes = ["/es/", "/de/", "/zh/", "/es/carta/", "/es/carta/desayunos-brunch/", "/es/carta/vinos/", "/es/contacto/", "/es/nosotros/", "/mejor-brunch-miami-platja/", "/404.html"];
const browserMatrix = [];
for (const [browserName, browser] of Object.entries(launched)) {
  for (const route of representativeRoutes) {
    for (const viewport of [{ width: 390, height: 844 }, { width: 1366, height: 768 }]) browserMatrix.push(await auditPage(browser, browserName, route, viewport));
  }
}
const sizes = [
  [320,568], [360,800], [375,812], [390,844], [414,896], [430,932],
  [667,375], [844,390], [932,430],
  [768,1024], [820,1180], [1024,768], [1280,800], [1366,768],
  [1440,900], [1920,1080], [2560,1080],
];
const responsiveRoutes = ["/es/", "/de/", "/zh/", "/es/carta/", "/de/carta/cafes-bebidas-cocteles/", "/es/contacto/", "/es/nosotros/", "/mejor-brunch-miami-platja/", "/404.html"];
const responsive = [];
for (const [width, height] of sizes) {
  const context = await launched.chromium.newContext({ viewport: { width, height } });
  const page = await context.newPage();
  for (const route of responsiveRoutes) {
    await page.goto(baseUrl + route, { waitUntil: "load", timeout: 30000 });
    await waitCss(page);
    const state = await page.evaluate(() => {
      const toggle = document.querySelector("[data-menu-toggle]");
      return {
        overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 2,
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        toggleVisible: Boolean(toggle && getComputedStyle(toggle).display !== "none" && toggle.getBoundingClientRect().width),
      };
    });
    const result = { route, viewport: width + "x" + height, ...state };
    responsive.push(result);
    if (state.overflow) reportIssue("RESPONSIVE_OVERFLOW", "medium", "visual", JSON.stringify(result), { browser: "chromium", route, viewport: result.viewport });
    if (state.toggleVisible !== (width <= 1020)) reportIssue("MENU_BREAKPOINT", "medium", "responsive", JSON.stringify(result), { browser: "chromium", route, viewport: result.viewport });
  }
  await context.close();
}

const interactions = {};
const assert = (condition, message) => { if (!condition) throw new Error(message); };
const test = async (name, fn) => {
  try { interactions[name] = { ok: true, ...(await fn()) }; }
  catch (error) {
    interactions[name] = { ok: false, error: error.message };
    reportIssue("INTERACTION_" + name.toUpperCase(), "high", "functional", error.message, { browser: "chromium", route: "interaction-suite" });
  }
};
await test("navigation_history", async () => {
  const context = await launched.chromium.newContext({ viewport: { width: 1366, height: 768 } });
  const page = await context.newPage();
  await page.goto(baseUrl + "/es/", { waitUntil: "load" });
  await page.locator(".tr-nav a[href='/es/carta/']").click();
  assert(normalizePath(page.url()) === "/es/carta/", "La carta no navega");
  await page.goBack({ waitUntil: "load" });
  assert(normalizePath(page.url()) === "/es/", "Historial atras incorrecto");
  await page.goForward({ waitUntil: "load" });
  await page.reload({ waitUntil: "load" });
  assert(normalizePath(page.url()) === "/es/carta/", "Historial adelante/recarga incorrecto");
  await page.locator(".tr-header .tr-logo").click();
  assert(normalizePath(page.url()) === "/es/", "El logo no vuelve a inicio");
  await context.close();
  return { operations: ["click", "back", "forward", "reload", "logo"] };
});
await test("mobile_menu_languages", async () => {
  const context = await launched.chromium.newContext({ viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto(baseUrl + "/es/carta/vinos/", { waitUntil: "load" });
  const toggle = page.locator("[data-menu-toggle]");
  const panel = page.locator("[data-mobile-menu]");
  const closedLabel = await toggle.getAttribute("aria-label");
  await toggle.click();
  assert(await toggle.getAttribute("aria-expanded") === "true", "aria-expanded no cambia");
  assert(await toggle.getAttribute("aria-label") !== closedLabel, "El nombre accesible no cambia a cerrar");
  assert(await panel.getAttribute("aria-hidden") === "false", "aria-hidden no cambia");
  assert(!(await panel.evaluate((element) => element.hasAttribute("inert"))), "El menu abierto conserva inert");
  const targets = await panel.locator("[data-language-link]").evaluateAll((links) => links.map((link) => {
    const rect = link.getBoundingClientRect();
    return { lang: link.dataset.language, href: link.getAttribute("href"), width: rect.width, height: rect.height };
  }));
  assert(targets.length === 8, "No aparecen 8 idiomas");
  for (const target of targets) assert(target.href === "/" + target.lang + "/carta/vinos/", "El idioma no preserva la ruta: " + JSON.stringify(target));
  await panel.locator("a").last().focus();
  for (const target of targets) assert(target.width >= 44 && target.height >= 44, "Objetivo tactil de idioma menor de 44px: " + JSON.stringify(target));
  await page.keyboard.press("Tab");
  assert(await page.evaluate(() => document.activeElement?.hasAttribute("data-menu-toggle")), "El foco escapa del menu");
  await page.keyboard.press("Escape");
  assert(await toggle.getAttribute("aria-expanded") === "false", "Escape no cierra");
  assert(await toggle.getAttribute("aria-label") === closedLabel, "El nombre accesible no vuelve a abrir");
  await toggle.focus();
  await page.keyboard.press("Enter");
  await panel.locator("[data-language='en']").click();
  assert(normalizePath(page.url()) === "/en/carta/vinos/", "Cambio de idioma incorrecto");
  await context.close();
  return { targets };
});
await test("mobile_menu_short_landscape", async () => {
  const context = await launched.chromium.newContext({ viewport: { width: 844, height: 390 }, isMobile: true, hasTouch: true });
  const page = await context.newPage();
  await page.goto(baseUrl + "/de/", { waitUntil: "load" });
  const toggle = page.locator("[data-menu-toggle]");
  const panel = page.locator("[data-mobile-menu]");
  await toggle.click();
  const state = await panel.evaluate((element) => {
    const rect = element.getBoundingClientRect();
    const style = getComputedStyle(element);
    return {
      top: rect.top,
      bottom: rect.bottom,
      viewportHeight: innerHeight,
      clientHeight: element.clientHeight,
      scrollHeight: element.scrollHeight,
      overflowY: style.overflowY,
    };
  });
  assert(state.top >= 0 && state.bottom <= state.viewportHeight + 1, "El menu sale del viewport horizontal: " + JSON.stringify(state));
  assert(state.scrollHeight <= state.clientHeight + 1 || ["auto", "scroll"].includes(state.overflowY), "El menu corto no permite scroll: " + JSON.stringify(state));
  await panel.evaluate((element) => { element.scrollTop = element.scrollHeight; });
  const lastLinkVisible = await panel.locator("a").last().evaluate((link) => {
    const linkRect = link.getBoundingClientRect();
    const panelRect = link.closest("[data-mobile-menu]").getBoundingClientRect();
    return linkRect.top >= panelRect.top && linkRect.bottom <= panelRect.bottom + 1;
  });
  assert(lastLinkVisible, "El ultimo enlace no es alcanzable en horizontal");
  await page.keyboard.press("Escape");
  assert(await toggle.getAttribute("aria-expanded") === "false", "Escape no cierra el menu horizontal");
  await context.close();
  return state;
});
await test("language_menu_escape_focus", async () => {
  const context = await launched.chromium.newContext({ viewport: { width: 1366, height: 768 } });
  const page = await context.newPage();
  await page.goto(baseUrl + "/de/carta/", { waitUntil: "load" });
  const details = page.locator("[data-language-menu]").first();
  const summary = details.locator("summary");
  await summary.focus();
  await page.keyboard.press("Enter");
  assert(await details.getAttribute("open") !== null, "El selector de idioma no abre");
  await page.keyboard.press("Escape");
  assert(await details.getAttribute("open") === null, "Escape no cierra el selector de idioma");
  assert(await summary.evaluate((element) => element === document.activeElement), "El foco no vuelve al selector de idioma");
  await context.close();
  return { restoredFocus: true };
});
await test("all_language_routes", async () => {
  const context = await launched.chromium.newContext({ viewport: { width: 1366, height: 768 } });
  const page = await context.newPage();
  const checked = [];
  for (const lang of languages) {
    await page.goto(baseUrl + "/" + lang + "/carta/desayunos-brunch/", { waitUntil: "load" });
    const hrefs = await page.locator("[data-language-menu] [data-language-link]").evaluateAll((links) => links.map((link) => link.getAttribute("href")));
    assert(hrefs.length === 8, lang + ": selector incompleto");
    hrefs.forEach((href, index) => assert(href === "/" + languages[index] + "/carta/desayunos-brunch/", lang + ": " + href));
    checked.push({ lang, htmlLang: await page.locator("html").getAttribute("lang") });
  }
  await context.close();
  return { checked };
});
await test("carousel", async () => {
  const context = await launched.chromium.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: "reduce" });
  const page = await context.newPage();
  await page.goto(baseUrl + "/es/", { waitUntil: "load" });
  await waitCss(page);
  const root = page.locator("[data-carousel]");
  await root.scrollIntoViewIfNeeded();
  await page.waitForFunction(() => document.querySelectorAll("[data-dots] button").length > 0);
  const track = root.locator("[data-track]");
  const state = async () => ({
    active: await page.locator("[data-dots] button[aria-current='true']").evaluate((dot) => [...dot.parentElement.children].indexOf(dot)),
    transform: await track.evaluate((element) => getComputedStyle(element).transform),
    clones: await track.locator("[data-clone='true']").count(),
  });
  const before = await state();
  assert(before.active === 0, "El carrusel no empieza en la primera reseña");
  assert(before.clones === 4, "El carrusel duplica más nodos de los necesarios: " + before.clones);
  await page.locator("[data-next]").click();
  await page.waitForTimeout(80);
  const afterNext = await state();
  assert(afterNext.active === 1, "La flecha siguiente no cambia de reseña");
  await page.locator("[data-dots] button").nth(3).click();
  await page.waitForTimeout(80);
  const afterDot = await state();
  assert(afterDot.active === 3, "Los puntos no navegan a la reseña pedida");
  assert(afterDot.transform !== "none", "El carrusel no usa transform");
  await context.close();
  return { before, afterNext, afterDot };
});
await test("map_form", async () => {
  const context = await launched.chromium.newContext({ viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto(baseUrl + "/es/contacto/", { waitUntil: "load" });
  assert(await page.locator("[data-map-facade]").count() === 1, "Falta la fachada del mapa");
  assert(await page.locator("iframe[src*='google.com/maps']").count() === 0, "El mapa carga demasiado pronto");
  await page.locator("[data-map-facade]").scrollIntoViewIfNeeded();
  await page.waitForFunction(() => document.querySelector("iframe[src*='google.com/maps']"), null, { timeout: 8000 });
  const form = page.locator("form");
  const fields = await form.locator("input,textarea,select").evaluateAll((elements) => elements.map((element) => ({ name: element.name, labels: element.labels?.length || 0 })));
  assert(fields.length === 3 && fields.every((field) => field.labels), "Formulario incompleto o sin labels: " + JSON.stringify(fields));
  assert((await form.getAttribute("action"))?.startsWith("mailto:"), "Action del formulario inesperada");
  await form.locator("input").first().fill("Auditoria TR3C3");
  await form.locator("input[type='email']").fill("qa@example.com");
  await form.locator("textarea").fill("Comprobacion funcional automatizada");
  assert(await form.evaluate((element) => element.checkValidity()), "El formulario rellenado no valida");
  await context.close();
  return { fields, delivery: "mailto-client" };
});
await test("footer_floating_keyboard", async () => {
  const context = await launched.chromium.newContext({ viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto(baseUrl + "/de/", { waitUntil: "load" });
  await page.keyboard.press("Tab");
  assert(String(await page.evaluate(() => document.activeElement?.className)).includes("skip-link"), "El primer foco no es el skip link");
  await page.keyboard.press("Enter");
  assert(await page.evaluate(() => document.activeElement?.id) === "main-content", "Skip link sin destino de foco");
  const floating = page.locator("[data-floating-actions]");
  await page.evaluate(() => scrollTo(0, Math.min(1200, document.body.scrollHeight / 2)));
  await page.waitForTimeout(250);
  assert(await floating.getAttribute("aria-hidden") === "false", "Acciones flotantes no aparecen");
  await page.locator("#site-footer").scrollIntoViewIfNeeded();
  await page.waitForTimeout(250);
  assert(await floating.getAttribute("aria-hidden") === "true", "Acciones flotantes invaden el footer");
  const details = page.locator("[data-footer-guides]");
  const before = await details.evaluate((element) => element.open);
  await details.locator("summary").click();
  assert(await details.evaluate((element) => element.open) !== before, "Acordeon del footer inerte");
  await context.close();
  return { footerGuidesInitialOpen: before };
});
await test("reduced_motion", async () => {
  const context = await launched.chromium.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: "reduce" });
  const page = await context.newPage();
  await page.goto(baseUrl + "/es/", { waitUntil: "load" });
  const state = await page.evaluate(() => ({
    preference: matchMedia("(prefers-reduced-motion: reduce)").matches,
    infinite: document.getAnimations().filter((animation) => animation.playState === "running" && animation.effect?.getTiming().iterations === Infinity).length,
    hiddenReveals: [...document.querySelectorAll("[data-reveal]")].filter((element) => !element.classList.contains("is-visible")).length,
  }));
  assert(state.preference && !state.infinite && !state.hiddenReveals, "Reduced motion no se respeta: " + JSON.stringify(state));
  await context.close();
  return state;
});

const noJavaScript = [];
{
  const context = await launched.chromium.newContext({ viewport: { width: 390, height: 844 }, javaScriptEnabled: false });
  const page = await context.newPage();
  for (const route of representativeRoutes.filter((route) => route !== "/404.html" && !pageMap.get(route)?.redirect)) {
    const response = await page.goto(baseUrl + route, { waitUntil: "load" });
    const state = await page.evaluate(() => ({
      main: Boolean(document.querySelector("main")),
      h1: document.querySelectorAll("h1").length,
      text: document.body.innerText.trim().length,
      overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 2,
    }));
    const result = { route, status: response?.status() || 0, ...state };
    noJavaScript.push(result);
    if (!state.main || state.h1 !== 1 || state.text < 20 || state.overflow) reportIssue("NO_JS_DEGRADATION", "high", "resilience", JSON.stringify(result), { browser: "chromium", route, viewport: "390x844" });
  }
  await context.close();
}

const runtime = {};
{
  const context = await launched.chromium.newContext({ viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  const client = await context.newCDPSession(page);
  await client.send("Network.enable");
  await client.send("Network.emulateNetworkConditions", { offline: false, latency: 150, downloadThroughput: 209715, uploadThroughput: 96000 });
  await client.send("Emulation.setCPUThrottlingRate", { rate: 4 });
  const start = Date.now();
  await page.goto(baseUrl + "/es/", { waitUntil: "load", timeout: 45000 });
  runtime.slowNetwork = { loadMs: Date.now() - start, h1: await page.locator("h1").count(), text: (await page.locator("body").innerText()).length };
  assert(runtime.slowNetwork.h1 === 1 && runtime.slowNetwork.text > 100, "La red lenta deja la portada vacia");
  await context.close();

  const memoryContext = await launched.chromium.newContext({ viewport: { width: 1366, height: 768 } });
  const memoryPage = await memoryContext.newPage();
  const memoryClient = await memoryContext.newCDPSession(memoryPage);
  await memoryClient.send("Performance.enable");
  const cycle = ["/es/", "/es/carta/", "/es/contacto/", "/de/", "/zh/carta/vinos/", "/es/"];
  await memoryPage.goto(baseUrl + cycle[0], { waitUntil: "load" });
  await memoryClient.send("HeapProfiler.collectGarbage").catch(() => {});
  const metric = (result, name) => result.metrics.find((entry) => entry.name === name)?.value || 0;
  const before = metric(await memoryClient.send("Performance.getMetrics"), "JSHeapUsedSize");
  for (const route of cycle.slice(1)) {
    await memoryPage.goto(baseUrl + route, { waitUntil: "load" });
    await memoryPage.evaluate(() => scrollTo(0, document.body.scrollHeight));
  }
  await memoryClient.send("HeapProfiler.collectGarbage").catch(() => {});
  const after = metric(await memoryClient.send("Performance.getMetrics"), "JSHeapUsedSize");
  await memoryPage.goto(baseUrl + "/es/", { waitUntil: "load" });
  const frames = await memoryPage.evaluate(() => new Promise((resolve) => {
    let count = 0;
    const started = performance.now();
    const tick = () => {
      count++;
      if (performance.now() - started >= 1000) resolve({ count, duration: performance.now() - started });
      else requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }));
  runtime.navigationCycles = cycle.length;
  runtime.heapBefore = before;
  runtime.heapAfter = after;
  runtime.heapDelta = after - before;
  runtime.approximateFps = Number((frames.count / (frames.duration / 1000)).toFixed(1));
  if (after - before > 20 * 1024 * 1024) reportIssue("MEMORY_GROWTH", "medium", "performance", "Heap delta=" + (after - before), { browser: "chromium", route: "navigation-cycle" });
  await memoryContext.close();
}

const invalidRoute = {};
{
  const context = await launched.chromium.newContext({ viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  const response = await page.goto(baseUrl + "/ruta-inexistente-auditoria-2026/", { waitUntil: "load" });
  invalidRoute.status = response?.status() || 0;
  invalidRoute.title = await page.title();
  invalidRoute.robots = await page.locator("meta[name='robots']").getAttribute("content").catch(() => null);
  if (invalidRoute.status !== 404) reportIssue("INVALID_ROUTE_NOT_404", "high", "functional-seo", "Estado=" + invalidRoute.status, { browser: "chromium", route: "/ruta-inexistente-auditoria-2026/" });
  await context.close();
}

const screenshots = [];
if (process.env.TR3C3_AUDIT_SCREENSHOTS !== "0") {
  const cases = [
    ["/es/",390,844,"home-es-mobile"], ["/de/",320,568,"home-de-320"],
    ["/es/carta/",1366,768,"menu-es-desktop"], ["/es/carta/vinos/",768,1024,"wine-es-tablet"],
    ["/es/contacto/",390,844,"contact-es-mobile"], ["/zh/",1366,768,"home-zh-desktop"],
    ["/mejor-brunch-miami-platja/",1366,768,"local-seo-desktop"], ["/404.html",390,844,"404-mobile"],
  ];
  for (const [route, width, height, name] of cases) {
    const context = await launched.chromium.newContext({ viewport: { width, height }, reducedMotion: "reduce" });
    const page = await context.newPage();
    await page.goto(baseUrl + route, { waitUntil: "load" });
    await waitCss(page);
    const file = resolve(output, "..", environment.replace(/[^a-z0-9.-]/gi, "-") + "-" + name + ".jpg");
    await page.screenshot({ path: file, type: "jpeg", quality: 76, fullPage: true, animations: "disabled" });
    screenshots.push({ route, viewport: width + "x" + height, file });
    await context.close();
  }
}

for (const browser of Object.values(launched)) await browser.close();
const cleanIssues = issues.map(({ _key, ...item }) => item);
const severityCounts = Object.fromEntries(["critical", "high", "medium", "low", "info"].map((severity) => [severity, cleanIssues.filter((item) => item.severity === severity).length]));
const report = {
  meta: { generatedAt: new Date().toISOString(), baseUrl, environment, requestedBrowsers: browserNames, launchedBrowsers: Object.keys(launched), skippedBrowsers, viewports: sizes },
  inventory,
  coverage: { routeSweepCases: routeSweeps.length, browserMatrixCases: browserMatrix.length, responsiveCases: responsive.length, noJavaScriptCases: noJavaScript.length, interactionCases: Object.keys(interactions).length, screenshots: screenshots.length },
  routeSweeps,
  browserMatrix,
  responsive,
  interactions,
  noJavaScript,
  runtime,
  invalidRoute,
  screenshots,
  issues: cleanIssues,
  summary: { passed: cleanIssues.every((item) => !["critical", "high", "medium"].includes(item.severity)), severityCounts, issueCount: cleanIssues.length },
};
writeFileSync(output, JSON.stringify(report, null, 2));
console.log(JSON.stringify({
  environment,
  output,
  inventory: { htmlDocuments: inventory.htmlDocuments, indexable: inventory.indexable, redirects: inventory.redirects, routeTypes: inventory.routeTypes },
  coverage: report.coverage,
  browsers: { launched: report.meta.launchedBrowsers, skipped: skippedBrowsers },
  interactions: Object.fromEntries(Object.entries(interactions).map(([name, value]) => [name, value.ok])),
  runtime,
  invalidRoute,
  summary: report.summary,
  issues: cleanIssues.slice(0, 30),
}, null, 2));
if (!report.summary.passed) process.exitCode = 1;

