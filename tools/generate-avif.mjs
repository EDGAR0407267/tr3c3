// Generate AVIF siblings for every WebP in public/images.
// AVIF averages ~30-40% smaller than the equivalent WebP here, cutting mobile
// image transfer and battery use without any visible quality change.
// Idempotent: only (re)encodes when the .avif is missing or older than its .webp.
// Re-run after adding or changing any image: `node tools/generate-avif.mjs`.
import { readdirSync, statSync, existsSync } from "node:fs";
import { join, extname } from "node:path";
import { createRequire } from "node:module";

const sharp = createRequire(import.meta.url)("sharp");

const ROOT = "public/images";
const QUALITY = 60; // visually equivalent to the source WebP, still clearly smaller
const EFFORT = 5; // one-time build cost; better compression than the default

const walk = (dir) => {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (extname(entry.name).toLowerCase() === ".webp") out.push(full);
  }
  return out;
};

const webpFiles = walk(ROOT);
let encoded = 0;
let skipped = 0;
let webpBytes = 0;
let avifBytes = 0;

for (const webp of webpFiles) {
  const avif = webp.replace(/\.webp$/i, ".avif");
  const webpStat = statSync(webp);
  webpBytes += webpStat.size;
  if (existsSync(avif) && statSync(avif).mtimeMs >= webpStat.mtimeMs) {
    avifBytes += statSync(avif).size;
    skipped += 1;
    continue;
  }
  await sharp(webp).avif({ quality: QUALITY, effort: EFFORT }).toFile(avif);
  avifBytes += statSync(avif).size;
  encoded += 1;
}

const kb = (n) => (n / 1024).toFixed(0);
console.log(`AVIF: ${encoded} encoded, ${skipped} up-to-date, ${webpFiles.length} total.`);
console.log(`WebP ${kb(webpBytes)} KB -> AVIF ${kb(avifBytes)} KB (${Math.round((1 - avifBytes / webpBytes) * 100)}% smaller).`);
