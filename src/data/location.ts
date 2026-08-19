import {
  BUSINESS_ADDRESS,
  BUSINESS_MUNICIPALITY,
  BUSINESS_NAME,
  GOOGLE_MAPS_EMBED_URL,
  GOOGLE_MAPS_URL,
  OPENING_HOURS,
} from "../config/business";

export const LOCATION_NAME = BUSINESS_NAME;
export const LOCATION_CONTEXT = "Miami Platja · Costa Daurada";
export const LOCATION_ADDRESS_LINES = [
  BUSINESS_ADDRESS.streetAddress,
  `${BUSINESS_ADDRESS.postalCode} ${BUSINESS_ADDRESS.addressLocality} · ${BUSINESS_MUNICIPALITY}`,
];

export { GOOGLE_MAPS_EMBED_URL, GOOGLE_MAPS_URL };

export const OPENING_HOURS_SCHEMA = OPENING_HOURS;
export const HOURS_SUMMARY = "Lun–dom 09:00–00:00 seguido";
export const WEEKDAY_HOURS = { label: "Lunes a domingo", time: "09:00–00:00" };
export const WEEKEND_HOURS = [
  { label: "Todo el día", time: "09:00–00:00", tone: "day" },
];
