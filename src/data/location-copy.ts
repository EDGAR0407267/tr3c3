import type { Language } from "../i18n/config";

export type LocationSectionCopy = {
  kicker: string;
  title: string;
  lead: string;
  phrase: string;
  directions: string;
  menu: string;
  hours: string;
  everyday: string;
  mapTitle: string;
  details: string[];
};

export const locationSectionCopy: Record<Language, LocationSectionCopy> = {
  es: { kicker: "Visítanos", title: "Te esperamos en Miami Platja", lead: "Café de especialidad, desayunos, brunch y cenas mediterráneas. Tu mesa en Miami Platja está lista desde la mañana hasta la noche.", phrase: "Del primer café a la última copa.", directions: "Cómo llegar", menu: "Ver carta", hours: "Horarios", everyday: "Lunes — Domingo", mapTitle: "Mapa de TR3C3 en Miami Platja", details: ["Café de especialidad", "Desayuno y brunch", "Cena mediterránea", "Terraza"] },
  ca: { kicker: "Visita’ns", title: "T’esperem a Miami Platja", lead: "Cafè d’especialitat, esmorzars, brunch i sopars mediterranis. La teva taula està a punt des del matí fins a la nit.", phrase: "Del primer cafè a l’última copa.", directions: "Com arribar", menu: "Veure carta", hours: "Horaris", everyday: "Dilluns — Diumenge", mapTitle: "Mapa de TR3C3 a Miami Platja", details: ["Cafè d’especialitat", "Esmorzar i brunch", "Sopar mediterrani", "Terrassa"] },
  en: { kicker: "Visit us", title: "We'll see you in Miami Platja", lead: "Specialty coffee, breakfast, brunch and Mediterranean dinner. Your table is ready from morning to night.", phrase: "From first coffee to last glass.", directions: "Get directions", menu: "View menu", hours: "Opening hours", everyday: "Monday — Sunday", mapTitle: "Map of TR3C3 in Miami Platja", details: ["Specialty coffee", "Breakfast and brunch", "Mediterranean dinner", "Terrace"] },
  fr: { kicker: "Venez nous voir", title: "Rendez-vous à Miami Platja", lead: "Café de spécialité, petit-déjeuner, brunch et dîner méditerranéen. Votre table vous attend du matin au soir.", phrase: "Du premier café au dernier verre.", directions: "Itinéraire", menu: "Voir la carte", hours: "Horaires", everyday: "Lundi — Dimanche", mapTitle: "Carte de TR3C3 à Miami Platja", details: ["Café de spécialité", "Petit-déjeuner et brunch", "Dîner méditerranéen", "Terrasse"] },
  de: { kicker: "Besuche uns", title: "Wir sehen uns in Miami Platja", lead: "Specialty Coffee, Frühstück, Brunch und mediterranes Abendessen. Dein Tisch ist vom Morgen bis zum Abend bereit.", phrase: "Vom ersten Kaffee bis zum letzten Glas.", directions: "Route öffnen", menu: "Karte ansehen", hours: "Öffnungszeiten", everyday: "Montag — Sonntag", mapTitle: "Karte von TR3C3 in Miami Platja", details: ["Specialty Coffee", "Frühstück und Brunch", "Mediterranes Abendessen", "Terrasse"] },
  zh: { kicker: "到店体验", title: "Miami Platja 见", lead: "精品咖啡、早餐、早午餐与地中海晚餐。从清晨到夜晚，你的餐桌已经准备好。", phrase: "从第一杯咖啡到最后一杯酒。", directions: "如何到达", menu: "查看菜单", hours: "营业时间", everyday: "周一 — 周日", mapTitle: "TR3C3 Miami Platja 地图", details: ["精品咖啡", "早餐与早午餐", "地中海晚餐", "露台"] },
  nl: { kicker: "Bezoek ons", title: "Tot ziens in Miami Platja", lead: "Specialty coffee, ontbijt, brunch en mediterraan diner. Je tafel staat van ochtend tot avond klaar.", phrase: "Van de eerste koffie tot het laatste glas.", directions: "Route", menu: "Bekijk menu", hours: "Openingstijden", everyday: "Maandag — Zondag", mapTitle: "Kaart van TR3C3 in Miami Platja", details: ["Specialty coffee", "Ontbijt en brunch", "Mediterraan diner", "Terras"] },
  it: { kicker: "Vieni a trovarci", title: "Ti aspettiamo a Miami Platja", lead: "Caffè specialty, colazione, brunch e cena mediterranea. Il tuo tavolo è pronto dal mattino alla sera.", phrase: "Dal primo caffè all’ultimo calice.", directions: "Come arrivare", menu: "Vedi il menu", hours: "Orari", everyday: "Lunedì — Domenica", mapTitle: "Mappa di TR3C3 a Miami Platja", details: ["Caffè specialty", "Colazione e brunch", "Cena mediterranea", "Terrazza"] },
};
