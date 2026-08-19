import type { Language } from "../../i18n/config";

export type LocalizedText = Record<Language, string>;
export type MenuBadge = "allDay" | "vegetarian" | "vegan" | "new";

export interface FoodMenuItem {
  name: LocalizedText;
  description?: LocalizedText;
  price: string;
  badges?: MenuBadge[];
}

export interface FoodMenuCategory {
  title: LocalizedText;
  note?: LocalizedText;
  items: FoodMenuItem[];
}

export interface FoodMenuNotice {
  text: LocalizedText;
  price?: string;
}

export interface FoodMenuDefinition {
  id: "desayunos-brunch" | "comida-cena" | "bebidas-especiales" | "cafes-bebidas-cocteles";
  title: LocalizedText;
  kicker: LocalizedText;
  lead: LocalizedText;
  schedule?: LocalizedText;
  image: string;
  alt: LocalizedText;
  categories: FoodMenuCategory[];
  notices?: FoodMenuNotice[];
}

export const tx = (
  es: string,
  ca: string,
  en: string,
  fr: string,
  de: string,
  zh: string,
  nl: string,
  it: string,
): LocalizedText => ({ es, ca, en, fr, de, zh, nl, it });

export const same = (value: string): LocalizedText => tx(value, value, value, value, value, value, value, value);

