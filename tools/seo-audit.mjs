import { existsSync, readFileSync, readdirSync } from "node:fs";
import { extname, join, relative, resolve, sep } from "node:path";

const dist = resolve("dist");
const siteOrigin = "https://trecemiami.com";
const languagePrefixes = new Set(["es", "ca", "en", "fr", "de", "zh", "nl", "it"]);
const errors = [];

if (!existsSync(dist)) {
  console.error("dist/ no existe. Ejecuta npm run build antes de la auditoría SEO.");
  process.exit(1);
}

const walk = (directory) => readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  const path = join(directory, entry.name);
  return entry.isDirectory() ? walk(path) : [path];
});

const files = walk(dist);
const htmlFiles = files.filter((file) => file.endsWith(".html"));
const decode = (value = "") => value
  .replaceAll("&amp;", "&")
  .replaceAll("&quot;", '"')
  .replaceAll("&#39;", "'")
  .replaceAll("&lt;", "<")
  .replaceAll("&gt;", ">");
const capture = (html, expression) => decode(html.match(expression)?.[1] ?? "");
const routeForFile = (file) => {
  const rel = relative(dist, file).split(sep).join("/");
  if (rel === "index.html") return "/";
  if (rel === "404.html") return "/404.html";
  return `/${rel.replace(/index\.html$/, "")}`;
};
const normalizePagePath = (href) => {
  const url = new URL(href, siteOrigin);
  let pathname = url.pathname;
  if (!extname(pathname) && !pathname.endsWith("/")) pathname += "/";
  return pathname;
};

const pages = new Map(htmlFiles.map((file) => {
  const html = readFileSync(file, "utf8");
  const route = routeForFile(file);
  const canonical = capture(html, /<link rel="canonical" href="([^"]+)"/i);
  const alternates = [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/gi)]
    .map((match) => ({ lang: match[1], href: decode(match[2]) }));
  return [route, {
    file,
    route,
    html,
    redirect: /http-equiv="refresh"/i.test(html),
    noindex: /<meta name="robots" content="[^"]*noindex/i.test(html),
    title: capture(html, /<title>(.*?)<\/title>/is),
    description: capture(html, /<meta name="description" content="([^"]*)"/i),
    canonical,
    lang: capture(html, /<html lang="([^"]+)"/i),
    h1: (html.match(/<h1(?:\s|>)/gi) ?? []).length,
    alternates,
  }];
}));

const indexable = [...pages.values()].filter((page) => !page.redirect && !page.noindex);
const duplicateCheck = (field, label) => {
  const grouped = new Map();
  for (const page of indexable) {
    const value = page[field];
    if (!grouped.has(value)) grouped.set(value, []);
    grouped.get(value).push(page.route);
  }
  for (const [value, routes] of grouped) {
    if (value && routes.length > 1) errors.push(`${label} duplicado (${routes.join(", ")}): ${value}`);
  }
};

duplicateCheck("title", "Title");
duplicateCheck("description", "Description");

const incoming = new Map();
for (const page of indexable) {
  if (!page.title) errors.push(`${page.route}: falta title`);
  if (!page.description) errors.push(`${page.route}: falta meta description`);
  if (!page.canonical?.startsWith(siteOrigin)) errors.push(`${page.route}: canonical ausente o no absoluto`);
  if (!page.lang) errors.push(`${page.route}: falta html[lang]`);
  if (page.h1 !== 1) errors.push(`${page.route}: H1=${page.h1}`);
  if (!/property="og:title"/.test(page.html) || !/name="twitter:card"/.test(page.html)) errors.push(`${page.route}: metadatos sociales incompletos`);
  if (/AggregateRating/.test(page.html)) errors.push(`${page.route}: AggregateRating autorreferencial no permitido`);
  if (/localhost|127\.0\.0\.1/.test(page.html)) errors.push(`${page.route}: URL de desarrollo publicada`);

  const firstSegment = page.route.split("/")[1];
  if (languagePrefixes.has(firstSegment)) {
    if (page.alternates.length !== 9) errors.push(`${page.route}: hreflang=${page.alternates.length}, esperado 9`);
    if (firstSegment === "zh" && page.lang !== "zh-Hans") errors.push(`${page.route}: lang chino debe ser zh-Hans`);
    for (const alternate of page.alternates) {
      if (alternate.lang === "x-default") continue;
      const targetPath = normalizePagePath(alternate.href);
      const target = pages.get(targetPath);
      if (!target || target.redirect || target.noindex) errors.push(`${page.route}: hreflang inválido ${alternate.href}`);
      else if (!target.alternates.some((item) => item.href === page.canonical)) errors.push(`${page.route}: hreflang no recíproco con ${targetPath}`);
    }
  }

  const scripts = [...page.html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gis)];
  if (scripts.length !== 1) errors.push(`${page.route}: scripts JSON-LD=${scripts.length}, esperado 1`);
  for (const script of scripts) {
    try {
      const data = JSON.parse(script[1]);
      const graph = Array.isArray(data["@graph"]) ? data["@graph"] : [];
      const restaurants = graph.filter((node) => [node["@type"]].flat().includes("Restaurant"));
      if (restaurants.length !== 1) errors.push(`${page.route}: entidades Restaurant=${restaurants.length}`);
      if (restaurants[0]?.priceRange) errors.push(`${page.route}: priceRange sin confirmar`);
    } catch (error) {
      errors.push(`${page.route}: JSON-LD inválido (${error.message})`);
    }
  }

  for (const match of page.html.matchAll(/<img\b[^>]*>/gi)) {
    const tag = match[0];
    if (!/\balt(?:=|\s|>)/i.test(tag)) errors.push(`${page.route}: imagen sin alt`);
    if (!/\bwidth=/i.test(tag) || !/\bheight=/i.test(tag)) errors.push(`${page.route}: imagen sin dimensiones`);
  }

  for (const match of page.html.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>/gi)) {
    const tag = match[0];
    const href = decode(match[1]);
    if (/^https?:/i.test(href)) {
      if (/target="_blank"/i.test(tag) && !/rel="[^"]*noopener/i.test(tag)) errors.push(`${page.route}: _blank sin noopener (${href})`);
      continue;
    }
    if (/^(#|mailto:|tel:|javascript:)/i.test(href)) continue;
    const targetPath = normalizePagePath(href);
    if (extname(targetPath)) {
      if (!existsSync(join(dist, targetPath.slice(1)))) errors.push(`${page.route}: recurso roto ${href}`);
      continue;
    }
    const target = pages.get(targetPath);
    if (!target) errors.push(`${page.route}: enlace interno roto ${href}`);
    else if (target.redirect) errors.push(`${page.route}: enlace interno pasa por redirección ${href}`);
    else incoming.set(targetPath, (incoming.get(targetPath) ?? 0) + 1);
  }
}

for (const page of indexable) {
  if (!incoming.has(page.route) && page.route !== "/es/") errors.push(`${page.route}: página huérfana`);
}

const sitemapFile = join(dist, "sitemap-0.xml");
const sitemapIndex = readFileSync(join(dist, "sitemap-index.xml"), "utf8");
const robots = readFileSync(join(dist, "robots.txt"), "utf8");
if (!sitemapIndex.includes("sitemap-0.xml")) errors.push("sitemap-index.xml no referencia sitemap-0.xml");
if (!robots.includes(`${siteOrigin}/sitemap-index.xml`)) errors.push("robots.txt no contiene el sitemap canónico");
const sitemap = readFileSync(sitemapFile, "utf8");
const sitemapUrls = new Set([...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => decode(match[1])));
for (const page of indexable) if (!sitemapUrls.has(page.canonical)) errors.push(`${page.route}: canonical ausente del sitemap`);
for (const url of sitemapUrls) {
  const route = normalizePagePath(url);
  const page = pages.get(route);
  if (!page || page.redirect || page.noindex) errors.push(`Sitemap contiene URL no indexable: ${url}`);
}
if (!sitemap.includes('hreflang="zh-Hans"')) errors.push("Sitemap sin alternancia zh-Hans");

if (!pages.get("/404.html")?.noindex) errors.push("404.html debe ser noindex");
if (!pages.get("/")?.noindex) errors.push("La raíz selectora debe ser noindex");

const summary = {
  html: pages.size,
  indexable: indexable.length,
  redirects: [...pages.values()].filter((page) => page.redirect).length,
  sitemapUrls: sitemapUrls.size,
  errors: errors.length,
};

console.log(JSON.stringify(summary, null, 2));
if (errors.length) {
  console.error(errors.slice(0, 100).join("\n"));
  process.exit(1);
}
