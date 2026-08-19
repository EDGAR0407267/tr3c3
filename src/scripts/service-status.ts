const serviceStatusPanels = document.querySelectorAll<HTMLElement>("[data-service-status]");

const localMinutesInMiamiPlatja = () => {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Madrid",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? 0) % 24;
  const minute = Number(parts.find((part) => part.type === "minute")?.value ?? 0);
  return hour * 60 + minute;
};

const parseMinutes = (value: string | undefined) => {
  const [hour = "0", minute = "0"] = (value ?? "00:00").split(":");
  return Number(hour) * 60 + Number(minute);
};

const updateServiceStatus = (panel: HTMLElement) => {
  const message = panel.querySelector<HTMLElement>("[data-service-status-message]");
  if (!message) return;

  const now = localMinutesInMiamiPlatja();
  const breakfastStart = parseMinutes(panel.dataset.breakfastStart);
  const breakfastEnd = parseMinutes(panel.dataset.breakfastEnd);
  const middayEnd = parseMinutes(panel.dataset.middayEnd);
  const brunchEnd = parseMinutes(panel.dataset.brunchEnd);
  const dinnerEnd = parseMinutes(panel.dataset.dinnerEnd);
  const venueEnd = panel.dataset.venueEnd === "00:00" ? 24 * 60 : parseMinutes(panel.dataset.venueEnd);

  let state = "closed";
  let messageKey: keyof DOMStringMap = now < breakfastStart ? "closedBefore" : "closedAfter";
  let currentService: string | undefined;

  if (now >= breakfastStart && now < breakfastEnd) {
    state = "breakfast";
    messageKey = "breakfastNow";
    currentService = "breakfast";
  } else if (now >= breakfastEnd && now < middayEnd) {
    state = "midday";
    messageKey = "middayNow";
  } else if (now >= middayEnd && now < brunchEnd) {
    state = "brunch";
    messageKey = "brunchNow";
    currentService = "brunch";
  } else if (now >= brunchEnd && now < dinnerEnd) {
    state = "dinner";
    messageKey = "dinnerNow";
    currentService = "dinner";
  } else if (now >= dinnerEnd && now < venueEnd) {
    state = "kitchen-closed";
    messageKey = "kitchenClosed";
  }

  panel.dataset.state = state;
  message.textContent = panel.dataset[messageKey] ?? message.textContent;
  panel.querySelectorAll<HTMLElement>("[data-service-pill]").forEach((pill) => {
    pill.classList.toggle("is-current", pill.dataset.servicePill === currentService);
  });
};

if (serviceStatusPanels.length) {
  const controller = new AbortController();
  let updateTimer = 0;
  const updateAll = () => serviceStatusPanels.forEach(updateServiceStatus);
  const scheduleNextMinute = () => {
    window.clearTimeout(updateTimer);
    if (document.visibilityState !== "visible") return;
    const delay = 60_000 - (Date.now() % 60_000) + 50;
    updateTimer = window.setTimeout(() => {
      updateAll();
      scheduleNextMinute();
    }, delay);
  };
  const syncVisibility = () => {
    if (document.visibilityState === "visible") updateAll();
    scheduleNextMinute();
  };
  const cleanup = () => {
    window.clearTimeout(updateTimer);
    controller.abort();
  };

  updateAll();
  scheduleNextMinute();
  document.addEventListener("visibilitychange", syncVisibility, { signal: controller.signal });
  document.addEventListener("astro:before-swap", cleanup, { once: true, signal: controller.signal });
}
