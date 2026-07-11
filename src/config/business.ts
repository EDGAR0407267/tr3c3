// Configuración central de negocio de TR3C3.
//
// Punto único de acceso a la identidad, contacto, ubicación y horarios del
// local. Reexporta y consolida las constantes existentes de `data/site.ts` y
// `data/location.ts` en un solo objeto `business`, para que cualquier página o
// componente pueda importar la información desde un mismo sitio.
//
// IMPORTANTE: no inventar datos. Los valores pendientes de confirmar viven como
// placeholders `undefined` (teléfono, Place ID, coordenadas) y deben rellenarse
// con la información oficial de Google Business Profile antes de publicar.

import {
  BUSINESS_ADDRESS,
  BUSINESS_ALTERNATE_NAMES,
  BUSINESS_COUNTRY,
  BUSINESS_DESCRIPTION,
  BUSINESS_MUNICIPALITY,
  BUSINESS_NAME,
  BUSINESS_SHORT_NAME,
  BUSINESS_TAGLINE,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  GEO_COORDINATES,
  GOOGLE_PLACE_ID,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  OPENING_HOURS,
  SEO_BUSINESS_NAME,
  SITE_URL,
  TIKTOK_URL,
} from "../data/site";
import {
  GOOGLE_MAPS_EMBED_URL,
  GOOGLE_MAPS_URL,
  HOURS_SUMMARY,
  LOCATION_ADDRESS_LINES,
} from "../data/location";

export const business = {
  // Identidad de marca
  businessName: BUSINESS_NAME,
  shortName: BUSINESS_SHORT_NAME,
  seoBusinessName: SEO_BUSINESS_NAME, // "TR3C3 Brunch"
  alternateNames: BUSINESS_ALTERNATE_NAMES,
  tagline: BUSINESS_TAGLINE, // "Specialty Coffee & Brunch"
  description: BUSINESS_DESCRIPTION,
  category: "Specialty Coffee & Brunch / Cafetería de especialidad / Brunch / Kitchen",
  priceRange: "€€", // Placeholder editable si se confirma otro rango.

  // Ubicación
  fullAddress: `${BUSINESS_ADDRESS.streetAddress}, ${BUSINESS_ADDRESS.postalCode} ${BUSINESS_ADDRESS.addressLocality}, ${BUSINESS_ADDRESS.addressRegion}, ${BUSINESS_COUNTRY}`,
  addressLines: LOCATION_ADDRESS_LINES,
  streetAddress: BUSINESS_ADDRESS.streetAddress,
  postalCode: BUSINESS_ADDRESS.postalCode,
  locality: BUSINESS_ADDRESS.addressLocality, // "Miami Platja"
  municipality: BUSINESS_MUNICIPALITY, // "Mont-roig del Camp"
  province: BUSINESS_ADDRESS.addressRegion, // "Tarragona"
  country: BUSINESS_COUNTRY, // "España"
  geo: GEO_COORDINATES, // undefined hasta confirmar coordenadas reales.

  // Contacto
  phone: CONTACT_PHONE, // undefined hasta confirmar el número real.
  email: CONTACT_EMAIL,

  // Enlaces
  url: SITE_URL,
  instagramUrl: INSTAGRAM_URL,
  instagramHandle: INSTAGRAM_HANDLE,
  tiktokUrl: TIKTOK_URL, // undefined hasta confirmar el perfil real.
  googleMapsUrl: GOOGLE_MAPS_URL,
  googleMapsEmbedUrl: GOOGLE_MAPS_EMBED_URL,
  googlePlaceId: GOOGLE_PLACE_ID, // undefined hasta confirmar el Place ID real.

  // Horarios
  openingHours: OPENING_HOURS,
  hoursSummary: HOURS_SUMMARY,
} as const;

export type Business = typeof business;

export default business;
