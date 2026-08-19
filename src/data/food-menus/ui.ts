import type { Language } from "../../i18n/config";
import type { MenuBadge } from "./types";

export interface FoodMenuUiCopy {
  selectorLabel: string;
  menuEyebrow: string;
  cardCta: string;
  backToMenus: string;
  scheduleLabel: string;
  badges: Record<MenuBadge, string>;
  dietaryLegend: string;
  detailsLabel: string;
  indexSeal: string;
  indexFeatureKicker: string;
  indexFeatureTitle: string;
}

export const foodMenuUi: Record<Language, FoodMenuUiCopy> = {
  es: {
    selectorLabel: "Seleccionar carta", menuEyebrow: "Café de especialidad · Cocina mediterránea", cardCta: "Ver carta",
    backToMenus: "Todas las cartas", scheduleLabel: "Horario", dietaryLegend: "Indicadores de la carta", detailsLabel: "Detalles y suplementos",
    badges: { allDay: "Todo el día", vegetarian: "Vegetariano", vegan: "Vegano", new: "Nuevo" },
    indexSeal: "Specialty Coffee & Brunch · Miami Platja · Cocina fresca", indexFeatureKicker: "Algo frío · Algo dulce", indexFeatureTitle: "Una pausa hecha a tu manera.",
  },
  ca: {
    selectorLabel: "Selecciona la carta", menuEyebrow: "Cafè d'especialitat · Cuina mediterrània", cardCta: "Veure la carta",
    backToMenus: "Totes les cartes", scheduleLabel: "Horari", dietaryLegend: "Indicadors de la carta", detailsLabel: "Detalls i suplements",
    badges: { allDay: "Tot el dia", vegetarian: "Vegetarià", vegan: "Vegà", new: "Nou" },
    indexSeal: "Specialty Coffee & Brunch · Miami Platja · Cuina fresca", indexFeatureKicker: "Una cosa freda · Una cosa dolça", indexFeatureTitle: "Una pausa feta a la teva manera.",
  },
  en: {
    selectorLabel: "Choose a menu", menuEyebrow: "Specialty coffee · Mediterranean kitchen", cardCta: "View menu",
    backToMenus: "All menus", scheduleLabel: "Serving hours", dietaryLegend: "Menu indicators", detailsLabel: "Details and supplements",
    badges: { allDay: "All day", vegetarian: "Vegetarian", vegan: "Vegan", new: "New" },
    indexSeal: "Specialty Coffee & Brunch · Miami Platja · Fresh kitchen", indexFeatureKicker: "Something cold · Something sweet", indexFeatureTitle: "A pause, made your way.",
  },
  fr: {
    selectorLabel: "Choisir une carte", menuEyebrow: "Café de spécialité · Cuisine méditerranéenne", cardCta: "Voir la carte",
    backToMenus: "Toutes les cartes", scheduleLabel: "Horaires", dietaryLegend: "Indicateurs de la carte", detailsLabel: "Détails et suppléments",
    badges: { allDay: "Toute la journée", vegetarian: "Végétarien", vegan: "Végan", new: "Nouveau" },
    indexSeal: "Specialty Coffee & Brunch · Miami Platja · Cuisine fraîche", indexFeatureKicker: "Quelque chose de frais · Quelque chose de sucré", indexFeatureTitle: "Une pause à votre façon.",
  },
  de: {
    selectorLabel: "Karte auswählen", menuEyebrow: "Specialty Coffee · Mediterrane Küche", cardCta: "Karte ansehen",
    backToMenus: "Alle Karten", scheduleLabel: "Servierzeiten", dietaryLegend: "Kennzeichnungen", detailsLabel: "Details und Extras",
    badges: { allDay: "Ganztägig", vegetarian: "Vegetarisch", vegan: "Vegan", new: "Neu" },
    indexSeal: "Specialty Coffee & Brunch · Miami Platja · Frische Küche", indexFeatureKicker: "Etwas Kaltes · Etwas Süßes", indexFeatureTitle: "Eine Pause ganz nach deinem Geschmack.",
  },
  zh: {
    selectorLabel: "选择菜单", menuEyebrow: "精品咖啡 · 地中海料理", cardCta: "查看菜单",
    backToMenus: "全部菜单", scheduleLabel: "供应时间", dietaryLegend: "菜单标识", detailsLabel: "说明与加购",
    badges: { allDay: "全天供应", vegetarian: "素食", vegan: "纯素", new: "新品" },
    indexSeal: "精品咖啡与早午餐 · Miami Platja · 新鲜料理", indexFeatureKicker: "清凉饮品 · 甜蜜点心", indexFeatureTitle: "按你的方式，享受片刻悠闲。",
  },
  nl: {
    selectorLabel: "Kies een kaart", menuEyebrow: "Specialty coffee · Mediterrane keuken", cardCta: "Bekijk de kaart",
    backToMenus: "Alle kaarten", scheduleLabel: "Serveertijden", dietaryLegend: "Menu-aanduidingen", detailsLabel: "Details en supplementen",
    badges: { allDay: "De hele dag", vegetarian: "Vegetarisch", vegan: "Vegan", new: "Nieuw" },
    indexSeal: "Specialty Coffee & Brunch · Miami Platja · Verse keuken", indexFeatureKicker: "Iets kouds · Iets zoets", indexFeatureTitle: "Een pauze op jouw manier.",
  },
  it: {
    selectorLabel: "Scegli il menu", menuEyebrow: "Caffè specialty · Cucina mediterranea", cardCta: "Vedi il menu",
    backToMenus: "Tutti i menu", scheduleLabel: "Orari di servizio", dietaryLegend: "Indicatori del menu", detailsLabel: "Dettagli e supplementi",
    badges: { allDay: "Tutto il giorno", vegetarian: "Vegetariano", vegan: "Vegano", new: "Novità" },
    indexSeal: "Specialty Coffee & Brunch · Miami Platja · Cucina fresca", indexFeatureKicker: "Qualcosa di fresco · Qualcosa di dolce", indexFeatureTitle: "Una pausa fatta a modo tuo.",
  },
};

