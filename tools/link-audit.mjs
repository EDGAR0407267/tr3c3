// =============================================================================
//  Auditoría de enlaces · TR3C3 Coffee & Brunch
// =============================================================================
//
//  Comprobación estática (sin navegador ni servidor) sobre el sitio ya
//  construido en dist/. No añade dependencias: usa solo Node y complementa a
//  full-site-audit.mjs (que requiere Playwright y un preview en marcha).
//
//  Verifica, como mínimo, lo que pide el criterio de aceptación:
//   · Todas las rutas internas enlazadas existen en dist/ (sin 404).
//   · Las anclas (#id) apuntan a un id existente en la página destino.
//   · Todos los enlaces de Instagram son EXACTAMENTE la URL oficial.
//   · No queda ninguna referencia antigua de Instagram en src/ ni en dist/.
//   · Los enlaces externos tienen una estructura de URL válida.
//   · Cada <a target="_blank"> lleva rel con noopener (seguridad).
//   · tel:/mailto: tienen un formato razonable.
//
//  Uso:  npm run build && node tools/link-audit.mjs
// =============================================================================

import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join, relative, resolve, sep } from "node:path";

const dist = resolve("dist");
const siteOrigin = "https://www.tr3c3.com";
const OFFICIAL_INSTAGRAM = "https://www.instagram.com/trece.coffee.brunch/";
// Patrones de cuentas antiguas que NO deben aparecer en ningún archivo del sitio.
const LEGACY_INSTAGRAM = [/trecebrunch/i, /a13coffee/i];

const errors = [];
const warnings = [];
const fail = (message) => errors.push(message);
const warn = (message) => warnings.push(message);

if (!existsSync(dist)) {
  console.error("dist/ no existe. Ejecuta `npm run build` antes de la auditoría de enlaces.");
  process.exit(1);
}

// ---------------------------------------------------------------------------
//  Utilidades
// ---------------------------------------------------------------------------
const walk = (directory) => readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  const path = join(directory, entry.name);
  return entry.isDirectory() ? walk(path) : [path];
});
const decode = (value = "") => value
  .replaceAll("&amp;", "&").replaceAll("&quot;", '"').replaceAll("&#39;", "'")
  .replaceAll("&#x27;", "'").replaceAll("&lt;", "<").replaceAll("&gt;", ">");
const attr = (tag, name) => {
  const match = tag.match(new RegExp(`\\b${name}=("([^"]*)"|'([^']*)')`, "i"));
  return match ? decode(match[2] ?? match[3] ?? "") : undefined;
};
const routeForFile = (file) => {
  const rel = relative(dist, file).split(sep).join("/");
  if (rel === "index.html") return "/";
  if (rel === "404.html") return "/404.html";
  return `/${rel.replace(/index\.html$/, "")}`;
};
const normalizePath = (pathname) => {
  if (!pathname) return pathname;
  if (!extname(pathname) && !pathname.endsWith("/")) return `${pathname}/`;
  return pathname;
};

// ---------------------------------------------------------------------------
//  Inventario de páginas construidas (rutas válidas + ids por página)
// ---------------------------------------------------------------------------
const htmlFiles = walk(dist).filter((file) => file.endsWith(".html"));
const validRoutes = new Set();
const idsByRoute = new Map();
const pages = htmlFiles.map((file) => {
  const html = readFileSync(file, "utf8");
  const route = routeForFile(file);
  validRoutes.add(route);
  const ids = new Set([...html.matchAll(/\sid=("([^"]*)"|'([^']*)')/gi)].map((m) => decode(m[2] ?? m[3] ?? "")));
  idsByRoute.set(route, ids);
  return { file, route, html };
});

// ---------------------------------------------------------------------------
//  Recorrido de todos los <a> del sitio construido
// ---------------------------------------------------------------------------
let internalChecked = 0;
let externalChecked = 0;
let instagramChecked = 0;
let anchorChecked = 0;

for (const page of pages) {
  // Ignoramos el contenido de <script>/<style>: su JS/CSS minificado puede
  // contener secuencias como `x<a?…` que no son etiquetas de anclaje reales.
  const markup = page.html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "");
  // `<a` seguido de espacio o `>` (una etiqueta real), nunca `<a?`.
  const anchors = markup.match(/<a(?=[\s>])[^>]*>/gis) || [];
  for (const tag of anchors) {
    const rawHref = attr(tag, "href");
    if (rawHref === undefined) {
      fail(`${page.route}: <a> sin atributo href → ${tag.slice(0, 90)}`);
      continue;
    }
    const href = rawHref.trim();
    const target = attr(tag, "target");
    const rel = (attr(tag, "rel") || "").toLowerCase();

    // Enlaces vacíos o placeholders inertes.
    if (href === "" || href === "#") {
      fail(`${page.route}: enlace vacío o placeholder (href="${href}") → ${tag.slice(0, 90)}`);
      continue;
    }
    if (/^javascript:/i.test(href)) {
      fail(`${page.route}: enlace javascript: innecesario → ${href}`);
      continue;
    }

    // Seguridad: cualquier target=_blank debe llevar noopener.
    if (target === "_blank" && !/\bnoopener\b/.test(rel)) {
      fail(`${page.route}: target="_blank" sin rel noopener → ${href}`);
    }

    if (/^mailto:/i.test(href)) {
      const address = href.slice(7).split("?")[0];
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(address)) fail(`${page.route}: mailto con formato inválido → ${href}`);
      continue;
    }
    if (/^tel:/i.test(href)) {
      const number = href.slice(4);
      if (!/^\+?[\d]{6,15}$/.test(number)) fail(`${page.route}: tel con formato inválido → ${href}`);
      continue;
    }

    // Enlaces externos.
    if (/^https?:\/\//i.test(href)) {
      externalChecked++;
      let url;
      try { url = new URL(href); } catch { fail(`${page.route}: URL externa malformada → ${href}`); continue; }

      if (/instagram\.com/i.test(url.hostname)) {
        instagramChecked++;
        if (href !== OFFICIAL_INSTAGRAM) {
          fail(`${page.route}: enlace de Instagram no oficial → "${href}" (esperado "${OFFICIAL_INSTAGRAM}")`);
        }
      }
      // Enlaces internos absolutos accidentales al propio dominio.
      if (url.origin === siteOrigin) {
        warn(`${page.route}: enlace absoluto al propio dominio (mejor relativo) → ${href}`);
      }
      continue;
    }

    // Enlace de ancla en la misma página.
    if (href.startsWith("#")) {
      anchorChecked++;
      const id = decode(href.slice(1));
      if (id && !idsByRoute.get(page.route)?.has(id)) {
        fail(`${page.route}: ancla #${id} sin destino en la página`);
      }
      continue;
    }

    // Enlace interno (relativo a la raíz o con ancla cruzada).
    if (href.startsWith("/")) {
      internalChecked++;
      const [pathPart, hashPart] = href.split("#");
      const targetPath = normalizePath(pathPart);
      if (!validRoutes.has(targetPath)) {
        fail(`${page.route}: enlace interno roto (404) → ${href} [ruta ${targetPath}]`);
        continue;
      }
      if (hashPart) {
        anchorChecked++;
        const targetIds = idsByRoute.get(targetPath);
        if (targetIds && !targetIds.has(decode(hashPart))) {
          fail(`${page.route}: ancla cruzada #${hashPart} inexistente en ${targetPath}`);
        }
      }
      continue;
    }

    // Cualquier otro esquema relativo inesperado.
    warn(`${page.route}: href no reconocido → ${href}`);
  }
}

// ---------------------------------------------------------------------------
//  Sin referencias antiguas de Instagram en el código fuente ni en dist/
// ---------------------------------------------------------------------------
const scanRoots = ["src", "public", "astro.config.mjs"].map((path) => resolve(path)).filter(existsSync);
const scanFiles = scanRoots.flatMap((root) => (statSync(root).isDirectory() ? walk(root) : [root]));

const legacyHits = [];
for (const file of [...scanFiles, ...htmlFiles]) {
  let content;
  try { content = readFileSync(file, "utf8"); } catch { continue; }
  for (const pattern of LEGACY_INSTAGRAM) {
    if (pattern.test(content)) legacyHits.push(`${relative(process.cwd(), file)} → ${pattern}`);
  }
}
if (legacyHits.length) {
  for (const hit of legacyHits) fail(`Referencia antigua de Instagram encontrada: ${hit}`);
}

// Al menos un enlace oficial de Instagram debe existir en el sitio construido.
if (instagramChecked === 0) fail("No se encontró ningún enlace de Instagram en dist/.");

// ---------------------------------------------------------------------------
//  Resultado
// ---------------------------------------------------------------------------
const summary = {
  htmlPages: pages.length,
  internalLinksChecked: internalChecked,
  externalLinksChecked: externalChecked,
  instagramLinksChecked: instagramChecked,
  anchorsChecked: anchorChecked,
  officialInstagram: OFFICIAL_INSTAGRAM,
  errors: errors.length,
  warnings: warnings.length,
};

console.log(JSON.stringify(summary, null, 2));
if (warnings.length) {
  console.log(`\n${warnings.length} aviso(s):`);
  for (const message of warnings) console.log(`  · ${message}`);
}
if (errors.length) {
  console.error(`\n${errors.length} error(es) de enlaces:`);
  for (const message of errors) console.error(`  ✗ ${message}`);
  process.exit(1);
}
console.log("\n✓ Auditoría de enlaces superada: sin enlaces rotos ni referencias antiguas de Instagram.");
