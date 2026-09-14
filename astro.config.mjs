import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const redirectOnlyUrls = new Set([
  "https://trecemiami.com/",
  "https://trecemiami.com/404.html",
  "https://trecemiami.com/brunch-miami-platja/",
  "https://trecemiami.com/mejor-cafe-especialidad-miami-platja/",
  "https://trecemiami.com/mejores-cafeterias-miami-platja/",
  "https://trecemiami.com/cafeteria-premium-miami-platja/",
  "https://trecemiami.com/desayunos-miami-platja/",
  "https://trecemiami.com/donde-tomar-cafe-miami-platja/",
  "https://trecemiami.com/contacto/",
  "https://trecemiami.com/equipo/",
  "https://trecemiami.com/menu/",
  "https://trecemiami.com/nosotros/",
  "https://trecemiami.com/brunch/",
  "https://trecemiami.com/cafe/",
  "https://trecemiami.com/kitchen/",
]);

export default defineConfig({
  site: "https://trecemiami.com",
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
        !/\/equipo\//.test(page),
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
