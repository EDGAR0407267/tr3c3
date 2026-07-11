import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const excludedFromSitemap = new Set([
  "https://www.tr3c3.com/",
  "https://www.tr3c3.com/brunch-miami-platja/",
  "https://www.tr3c3.com/mejor-cafe-especialidad-miami-platja/",
  "https://www.tr3c3.com/contacto/",
  "https://www.tr3c3.com/equipo/",
  "https://www.tr3c3.com/menu/",
  "https://www.tr3c3.com/nosotros/",
  "https://www.tr3c3.com/brunch/",
  "https://www.tr3c3.com/cafe/",
  "https://www.tr3c3.com/kitchen/",
]);

export default defineConfig({
  site: "https://www.tr3c3.com",
  output: "static",
  trailingSlash: "always",
  redirects: { "/cafe/": "/es/carta/", "/brunch/": "/es/carta/", "/kitchen/": "/es/carta/" },
  integrations: [
    sitemap({
      // Keep redirect-only routes (old "nosotros"/"equipo" → "nuestra-esencia") out of the sitemap.
      filter: (page) =>
        !excludedFromSitemap.has(page) &&
        !/\/(nosotros|equipo)\//.test(page),
    }),
  ],
});
