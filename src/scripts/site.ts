const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.querySelectorAll<HTMLAnchorElement>("[data-language-link]").forEach((link) => {
  link.addEventListener("click", () => {
    const language = link.dataset.language;
    if (language) window.localStorage.setItem("tr3c3-language", language);
  });
});

const setMenu = (toggle: HTMLElement, menu: HTMLElement, open: boolean) => {
  toggle.setAttribute("aria-expanded", String(open));
  menu.setAttribute("aria-hidden", String(!open));
  menu.toggleAttribute("inert", !open);
  menu.classList.toggle("is-open", open);
  document.documentElement.classList.toggle("menu-open", open);
  document.body.classList.toggle("menu-open", open);
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
  if (event.key === "Escape") menuToggles.forEach(({ toggle, menu }) => setMenu(toggle, menu, false));
});

window.addEventListener("resize", () => {
  if (window.matchMedia("(min-width: 1021px)").matches) {
    menuToggles.forEach(({ toggle, menu }) => setMenu(toggle, menu, false));
  }
}, { passive: true });
// Floating header (home): hidden over the hero on desktop, pinned once scrolled past it.
const floatingHeader = document.querySelector<HTMLElement>(".tr-header--floating");
if (floatingHeader) {
  const syncPinned = () => floatingHeader.classList.toggle("is-pinned", window.scrollY > window.innerHeight * 0.7);
  syncPinned();
  window.addEventListener("scroll", syncPinned, { passive: true });
  window.addEventListener("resize", syncPinned, { passive: true });
}

const languageMenus = Array.from(document.querySelectorAll<HTMLDetailsElement>("[data-language-menu]"));

const closeLanguageMenus = (except?: HTMLDetailsElement) => {
  languageMenus.forEach((menu) => {
    if (menu !== except) menu.open = false;
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
  if (!languageMenus.some((menu) => menu.contains(target))) closeLanguageMenus();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLanguageMenus();
});

// Smooth, restrained hero motion. The section boundary remains fixed.
const heroParallax = document.querySelector<HTMLElement>("[data-hero-parallax]");
const heroFrame = document.querySelector<HTMLElement>(".hero-cover__frame");
if (heroParallax && !prefersReducedMotion) {
  let targetOffset = Math.min(window.scrollY, window.innerHeight);
  let currentOffset = targetOffset;
  let frameId = 0;

  const renderHeroMotion = () => {
    currentOffset += (targetOffset - currentOffset) * 0.12;
    const progress = Math.min(currentOffset / Math.max(window.innerHeight, 1), 1);

    heroParallax.style.transform = `translate3d(0, ${currentOffset * 0.08}px, 0) scale(${1.08 + progress * 0.015})`;

    if (heroFrame) {
      heroFrame.style.transform = `translate3d(0, ${currentOffset * -0.018}px, 0)`;
      heroFrame.style.opacity = String(1 - progress * 0.06);
    }

    if (Math.abs(targetOffset - currentOffset) > 0.15) {
      frameId = window.requestAnimationFrame(renderHeroMotion);
    } else {
      currentOffset = targetOffset;
      frameId = 0;
    }
  };

  const queueHeroMotion = () => {
    targetOffset = Math.min(window.scrollY, window.innerHeight);
    if (!frameId) frameId = window.requestAnimationFrame(renderHeroMotion);
  };

  window.addEventListener("scroll", queueHeroMotion, { passive: true });
  window.addEventListener("resize", queueHeroMotion, { passive: true });
  renderHeroMotion();
}
const reveals = document.querySelectorAll<HTMLElement>("[data-reveal]");
if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  reveals.forEach((element) => element.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
  }), { rootMargin: "0px 0px -8% 0px" });
  reveals.forEach((element) => observer.observe(element));
}
