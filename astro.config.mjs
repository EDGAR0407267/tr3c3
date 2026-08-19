import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const redirectOnlyUrls = new Set([
  "https://www.tr3c3.com/",
  "https://www.tr3c3.com/404.html",
  "https://www.tr3c3.com/brunch-miami-platja/",
  "https://www.tr3c3.com/mejor-cafe-especialidad-miami-platja/",
  "https://www.tr3c3.com/mejores-cafeterias-miami-platja/",
  "https://www.tr3c3.com/cafeteria-premium-miami-platja/",
  "https://www.tr3c3.com/desayunos-miami-platja/",
  "https://www.tr3c3.com/donde-tomar-cafe-miami-platja/",
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
  redirects: {
    "/cafe/": "/es/carta/",
    "/brunch/": "/es/carta/",
    "/kitchen/": "/es/carta/",
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !redirectOnlyUrls.has(page) &&
        !/\/(nosotros|equipo)\//.test(page),
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es",
          ca: "ca",
          en: "en",
          fr: "fr",
          de: "de",
          zh: "zh-Hans",
          nl: "nl",
          it: "it",
        },
      },
    }),
  ],
});
