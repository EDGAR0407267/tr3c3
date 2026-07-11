import { BUSINESS_ADDRESS, BUSINESS_MUNICIPALITY, BUSINESS_NAME, GEO_COORDINATES, OPENING_HOURS } from "./site";

export const LOCATION_NAME = BUSINESS_NAME;
export const LOCATION_CONTEXT = "Miami Platja · Costa Daurada";
export const LOCATION_ADDRESS_LINES = [
  BUSINESS_ADDRESS.streetAddress,
  `${BUSINESS_ADDRESS.postalCode} ${BUSINESS_ADDRESS.addressLocality} · ${BUSINESS_MUNICIPALITY}`,
];

const LOCATION_QUERY = `${BUSINESS_ADDRESS.streetAddress}, ${BUSINESS_ADDRESS.postalCode} ${BUSINESS_ADDRESS.addressLocality}, ${BUSINESS_ADDRESS.addressRegion}`;

// Enlace único de Google Maps que comparten TODOS los CTA de ubicación.
// Es el enlace corto oficial de la ficha real de TRECE Brunch & Coffee, así el
// botón "Cómo llegar" abre siempre la ficha exacta (no una búsqueda difusa).
export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/1ZB92otQrQxVWF1R9";

// Embed del mapa (sin API key). Se usa el host clásico `maps.google.com` con
// coordenadas reales del local: es la forma de incrustación más compatible y
// evita el redirect a la pantalla de consentimiento (consent.google.com) que
// bloquea el iframe (X-Frame-Options) cuando se usa `www.google.com/maps`.
// Fallback siempre disponible: el botón "Cómo llegar" enlaza a GOOGLE_MAPS_URL.
const EMBED_QUERY = GEO_COORDINATES
  ? `${GEO_COORDINATES.latitude},${GEO_COORDINATES.longitude}`
  : LOCATION_QUERY;
export const GOOGLE_MAPS_EMBED_URL =
  `https://maps.google.com/maps?q=${encodeURIComponent(EMBED_QUERY)}&z=17&hl=es&output=embed`;

export const OPENING_HOURS_SCHEMA = OPENING_HOURS;
export const HOURS_SUMMARY = "Lun–dom 09:00–00:00 seguido";

export const WEEKDAY_HOURS = { label: "Lunes a domingo", time: "09:00–00:00" };
export const WEEKEND_HOURS = [
  { label: "Todo el día", time: "09:00–00:00", tone: "day" },
];
