import type { Language } from "../../i18n/config";
import { breakfastMenu } from "./breakfast";
import { dinnerMenu } from "./dinner";
import { drinksMenu } from "./drinks";
import { specialDrinksMenu } from "./special-drinks";
import type { FoodMenuDefinition, LocalizedText } from "./types";

export type { FoodMenuDefinition, FoodMenuCategory, FoodMenuItem, MenuBadge } from "./types";
export { foodMenuUi } from "./ui";

export const foodMenus: FoodMenuDefinition[] = [
  breakfastMenu,
  dinnerMenu,
  specialDrinksMenu,
  drinksMenu,
];

export const getFoodMenu = (id: string) => foodMenus.find((menu) => menu.id === id);
export const localize = (text: LocalizedText, lang: Language) => text[lang];

