async (page) => {
  const routes = [
    "/es/",
    "/es/carta/",
    "/es/carta/vinos/",
    "/es/nosotros/",
    "/es/contacto/",
    "/en/contacto/",
    "/zh/nosotros/",
  ];
  const widths = [320, 375, 390, 430, 768, 1024, 1366, 1440];
  const results = [];

  for (const width of widths) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of routes) {
      await page.goto(`http://127.0.0.1:4321${route}`, {
        waitUntil: "networkidle",
      });

      const result = await page.evaluate(() => {
        const callButton = document.querySelector(".floating-call");
        const instagramLinks = [...document.querySelectorAll('a[href*="instagram.com"]')];
        const header = document.querySelector("[data-site-header]");

        return {
          route: location.pathname,
          lang: document.documentElement.lang,
          overflow: document.documentElement.scrollWidth - window.innerWidth,
          forms: document.forms.length,
          h1: Boolean(document.querySelector("h1")),
          callHref: callButton?.getAttribute("href") ?? null,
          callVisible: callButton
            ? getComputedStyle(callButton).display !== "none"
            : false,
          instagramValid:
            instagramLinks.length > 0 &&
            instagramLinks.every(
              (link) =>
                link.getAttribute("href") ===
                "https://www.instagram.com/trece.coffee.brunch/",
            ),
          headerVisible: header
            ? getComputedStyle(header).display !== "none"
            : false,
        };
      });

      results.push({ width, ...result });
    }
  }

  const failures = results.filter(
    (result) =>
      result.overflow > 0 ||
      result.forms !== 0 ||
      !result.h1 ||
      result.callHref !== "tel:+34877915261" ||
      !result.callVisible ||
      !result.instagramValid ||
      !result.headerVisible,
  );

  return {
    checks: results.length,
    widths,
    routes,
    failures,
  };
}
