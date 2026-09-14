const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const deviceCapabilities = navigator as Navigator & {
  deviceMemory?: number;
  connection?: { saveData?: boolean };
};
const conserveDecorativeMotion = prefersReducedMotion ||
  Boolean(deviceCapabilities.connection?.saveData) ||
  (deviceCapabilities.deviceMemory !== undefined && deviceCapabilities.deviceMemory <= 2) ||
  (navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency <= 2);

document.querySelectorAll<HTMLAnchorElement>("[data-language-link]").forEach((link) => {
  link.addEventListener("click", () => {
    const language = link.dataset.language;
    if (language) window.localStorage.setItem("tr3c3-language", language);
  });
});

const menuFocusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

const setMenu = (toggle: HTMLElement, menu: HTMLElement, open: boolean) => {
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? (toggle.dataset.labelClose ?? "") : (toggle.dataset.labelOpen ?? ""));
  menu.setAttribute("aria-hidden", String(!open));
  menu.toggleAttribute("inert", !open);
  menu.classList.toggle("is-open", open);
  document.documentElement.classList.toggle("menu-open", open);
  document.body.classList.toggle("menu-open", open);
  toggle.closest<HTMLElement>(".tr-header")?.classList.toggle("is-menu-open", open);
  document.dispatchEvent(new CustomEvent("tr3c3:menu-state", { detail: { open } }));
  if (open) {
    window.requestAnimationFrame(() => menu.querySelector<HTMLElement>(menuFocusableSelector)?.focus());
  }
};

const menuToggles = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-menu-toggle]"))
  .map((toggle) => {
    const menu = document.getElementById(toggle.getAttribute("aria-controls") ?? "");
    return menu ? { toggle, menu } : null;
  })
  .filter((pair): pair is { toggle: HTMLButtonElement; menu: HTMLElement } => pair !== null);

menuToggles.forEach(({ toggle, menu }) => {
  toggle.addEventListener("click", () => setMenu(toggle, menu, toggle.getAttribute("aria-expanded") !== "true"));
  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(toggle, menu, false)));
});
document.addEventListener("keydown", (event) => {
  const activePair = menuToggles.find(({ toggle }) => toggle.getAttribute("aria-expanded") === "true");
  if (!activePair) return;

  if (event.key === "Escape") {
    setMenu(activePair.toggle, activePair.menu, false);
    activePair.toggle.focus();
    return;
  }
  if (event.key !== "Tab") return;

  const focusable = [
    activePair.toggle,
    ...activePair.menu.querySelectorAll<HTMLElement>(menuFocusableSelector),
  ].filter((element) => element.getClientRects().length > 0);
  if (!focusable.length) return;
  const current = document.activeElement;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (!focusable.includes(current as HTMLElement)) {
    event.preventDefault();
    (event.shiftKey ? last : first).focus();
  } else if (event.shiftKey && current === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && current === last) {
    event.preventDefault();
    first.focus();
  }
});

const desktopMenuQuery = window.matchMedia("(min-width: 1101px)");
desktopMenuQuery.addEventListener("change", (event) => {
  if (!event.matches) return;
  menuToggles.forEach(({ toggle, menu }) => {
    if (toggle.getAttribute("aria-expanded") === "true") setMenu(toggle, menu, false);
  });
});
// Floating header (home): transparent over the hero, then pinned into a compact cream bar.
const floatingHeader = document.querySelector<HTMLElement>(".tr-header--floating");
if (floatingHeader) {
  let pinned = floatingHeader.classList.contains("is-pinned");
  let headerFrame = 0;

  const syncPinned = () => {
    headerFrame = 0;
    const nextPinned = window.scrollY > 56;
    if (nextPinned === pinned) return;
    pinned = nextPinned;
    floatingHeader.classList.toggle("is-pinned", pinned);
  };

  const queuePinnedSync = () => {
    if (!headerFrame) headerFrame = window.requestAnimationFrame(syncPinned);
  };

  window.addEventListener("scroll", queuePinnedSync, { passive: true });
  window.addEventListener("resize", queuePinnedSync, { passive: true });
}

const languageMenus = Array.from(document.querySelectorAll<HTMLDetailsElement>("[data-language-menu]"));

// Keep the persistent phone shortcut useful without covering footer content.
const floatingCall = document.querySelector<HTMLElement>("[data-floating-call]");
const siteFooter = document.querySelector<HTMLElement>("#site-footer");
if (floatingCall && siteFooter) {
  const setFooterOverlap = (overlaps: boolean) => {
    floatingCall.classList.toggle("is-footer-near", overlaps);
    floatingCall.toggleAttribute("inert", overlaps);
    floatingCall.setAttribute("aria-hidden", String(overlaps));
  };
  const footerObserver = new IntersectionObserver(([entry]) => setFooterOverlap(entry.isIntersecting), {
    rootMargin: "0px 0px 16px 0px",
  });
  footerObserver.observe(siteFooter);
}

const closeLanguageMenus = (except?: HTMLDetailsElement) => {
  languageMenus.forEach((menu) => {
    if (menu !== except && menu.open) menu.open = false;
  });
};

languageMenus.forEach((menu) => {
  menu.addEventListener("toggle", () => {
    if (menu.open) closeLanguageMenus(menu);
  });
});

document.addEventListener("pointerdown", (event) => {
  const target = event.target;
  if (!(target instanceof Node)) return;
  if (languageMenus.some((menu) => menu.open) && !languageMenus.some((menu) => menu.contains(target))) closeLanguageMenus();
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  const openMenu = languageMenus.find((menu) => menu.open);
  if (!openMenu) return;
  closeLanguageMenus();
  openMenu.querySelector<HTMLElement>("summary")?.focus();
});

// Infinite decorative motion runs only while its scene is visible and the page
// is foregrounded. One observer coordinates every loop on the page.
const loopMotionElements = Array.from(document.querySelectorAll<HTMLElement>("[data-loop-motion]"));
if (loopMotionElements.length && !conserveDecorativeMotion) {
  const visibleLoops = new Set<HTMLElement>();
  const syncLoopMotion = () => {
    const pageVisible = document.visibilityState === "visible";
    loopMotionElements.forEach((element) => {
      element.classList.toggle("is-motion-active", pageVisible && visibleLoops.has(element));
    });
  };

  if ("IntersectionObserver" in window) {
    const loopObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const element = entry.target as HTMLElement;
        if (entry.isIntersecting) visibleLoops.add(element);
        else visibleLoops.delete(element);
      });
      syncLoopMotion();
    }, { rootMargin: "10% 0px" });
    loopMotionElements.forEach((element) => loopObserver.observe(element));
  } else {
    loopMotionElements.forEach((element) => visibleLoops.add(element));
    syncLoopMotion();
  }

  document.addEventListener("visibilitychange", syncLoopMotion);
}
// Keep both the Google Maps request and its iframe browsing context out of the
// initial render. Once the facade is near, wait for scrolling to settle so the
// third-party iframe never competes with the user's active gesture.
const deferredMaps = document.querySelectorAll<HTMLElement>("[data-map-facade][data-src]");
const loadMap = (facade: HTMLElement) => {
  const source = facade.dataset.src;
  if (!source) return;
  const frame = document.createElement("iframe");
  frame.className = facade.className;
  frame.title = facade.dataset.title ?? "TR3C3 en Google Maps";
  frame.loading = "lazy";
  frame.setAttribute("referrerpolicy", facade.dataset.referrerpolicy ?? "no-referrer-when-downgrade");
  frame.allowFullscreen = facade.hasAttribute("data-allowfullscreen");
  frame.addEventListener("load", () => frame.classList.add("is-loaded"), { once: true });
  frame.src = source;
  facade.replaceWith(frame);
};
if (!deferredMaps.length) {
  // This route has no map, so there is nothing to observe or clean up.
} else if (!("IntersectionObserver" in window)) {
  deferredMaps.forEach(loadMap);
} else {
  let pendingMaps = deferredMaps.length;
  let mapIdleTimer = 0;
  const queuedMaps = new Set<HTMLElement>();
  const flushMaps = () => {
    mapIdleTimer = 0;
    queuedMaps.forEach((facade) => {
      loadMap(facade);
      queuedMaps.delete(facade);
      pendingMaps -= 1;
    });
    if (!pendingMaps) {
      mapObserver.disconnect();
      window.removeEventListener("scroll", scheduleMapLoad);
    }
  };
  const scheduleMapLoad = () => {
    window.clearTimeout(mapIdleTimer);
    mapIdleTimer = window.setTimeout(flushMaps, 220);
  };
  const mapObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    queuedMaps.add(entry.target as HTMLElement);
    mapObserver.unobserve(entry.target);
    scheduleMapLoad();
  }), { rootMargin: "80px 0px" });
  deferredMaps.forEach((frame) => mapObserver.observe(frame));
  window.addEventListener("scroll", scheduleMapLoad, { passive: true });
  document.addEventListener("astro:before-swap", () => {
    window.clearTimeout(mapIdleTimer);
    mapObserver.disconnect();
    window.removeEventListener("scroll", scheduleMapLoad);
  }, { once: true });
}

// Smooth, restrained hero motion. One frame follows each native scroll update;
// there is no trailing interpolation competing with the user's gesture.
const heroParallax = document.querySelector<HTMLElement>("[data-hero-parallax]");
const heroFrame = document.querySelector<HTMLElement>(".hero-cinema__content");
if (heroParallax && !conserveDecorativeMotion) {
  const heroScene = heroParallax.closest<HTMLElement>(".hero-cinema");
  let heroInView = true;
  let targetOffset = 0;
  let frameId = 0;
  let layerTimer = 0;
  let parallaxObserver: IntersectionObserver | undefined;

  const releaseLayers = () => {
    window.clearTimeout(layerTimer);
    layerTimer = window.setTimeout(() => heroScene?.classList.remove("is-parallax-active"), 140);
  };
  const renderHeroMotion = () => {
    frameId = 0;
    if (!heroInView || document.visibilityState !== "visible") return;
    const progress = Math.min(targetOffset / Math.max(window.innerHeight, 1), 1);
    heroParallax.style.setProperty("--hero-parallax-y", `${targetOffset * .045}px`);
    if (heroFrame) {
      heroFrame.style.transform = `translate3d(0, ${targetOffset * -.018}px, 0)`;
      heroFrame.style.opacity = String(1 - progress * .06);
    }
    releaseLayers();
  };

  const queueHeroMotion = () => {
    if (!heroInView || document.visibilityState !== "visible") return;
    targetOffset = Math.min(window.scrollY, window.innerHeight);
    heroScene?.classList.add("is-parallax-active");
    if (!frameId) frameId = window.requestAnimationFrame(renderHeroMotion);
  };

  if (heroScene && "IntersectionObserver" in window) {
    parallaxObserver = new IntersectionObserver(([entry]) => {
      heroInView = entry.isIntersecting;
      if (!heroInView) {
        if (frameId) window.cancelAnimationFrame(frameId);
        frameId = 0;
        window.clearTimeout(layerTimer);
        heroScene.classList.remove("is-parallax-active");
        return;
      }
      queueHeroMotion();
    }, { rootMargin: "8% 0px" });
    parallaxObserver.observe(heroScene);
  }
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState !== "visible") {
      if (frameId) window.cancelAnimationFrame(frameId);
      frameId = 0;
      window.clearTimeout(layerTimer);
      heroScene?.classList.remove("is-parallax-active");
      return;
    }
    queueHeroMotion();
  });
  document.addEventListener("astro:before-swap", () => {
    if (frameId) window.cancelAnimationFrame(frameId);
    window.clearTimeout(layerTimer);
    parallaxObserver?.disconnect();
  }, { once: true });
  window.addEventListener("scroll", queueHeroMotion, { passive: true });
  window.addEventListener("resize", queueHeroMotion, { passive: true });
}
const reveals = document.querySelectorAll<HTMLElement>("[data-reveal]");
if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  reveals.forEach((element) => element.classList.add("is-visible"));
} else {
  let pendingReveals = reveals.length;
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("is-visible");
    observer.unobserve(entry.target);
    pendingReveals -= 1;
    if (!pendingReveals) observer.disconnect();
  }), { rootMargin: "0px 0px -8% 0px" });
  reveals.forEach((element) => observer.observe(element));
}
