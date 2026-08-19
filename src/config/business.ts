/**
 * Única fuente de verdad para la entidad local de TR3C3.
 * No añadir datos comerciales sin confirmarlos en la web y en Google Business Profile.
 */

export const SITE_URL = "https://www.tr3c3.com";

export const BUSINESS_NAME = "TR3C3 Coffee & Brunch";
export const BUSINESS_SHORT_NAME = "TR3C3";
export const SEO_BUSINESS_NAME = "TR3C3 Brunch";
export const BUSINESS_TAGLINE = "Speciality Coffee, Brunch & Mediterranean Dining";
export const BUSINESS_ALTERNATE_NAMES = [
  "TR3C3",
  "TR3C3 Brunch",
  "TR3C3 Miami Platja",
  "TR3C3 Coffee and Brunch",
  "TRECE Brunch &Speciality Coffee",
] as const;
export const BUSINESS_DESCRIPTION =
  "Café de especialidad, desayunos, brunch, comida y cena mediterránea, cócteles y vinos en Miami Platja, Tarragona.";

export const BUSINESS_ADDRESS = {
  streetAddress: "Avinguda de Barcelona, 160",
  postalCode: "43892",
  addressLocality: "Miami Platja",
  addressRegion: "Tarragona",
  addressCountry: "ES",
} as const;
export const BUSINESS_FULL_ADDRESS =
  `${BUSINESS_ADDRESS.streetAddress}, ${BUSINESS_ADDRESS.postalCode} ${BUSINESS_ADDRESS.addressLocality}, ${BUSINESS_ADDRESS.addressRegion}`;
export const BUSINESS_COMPACT_ADDRESS =
  `${BUSINESS_ADDRESS.streetAddress} · ${BUSINESS_ADDRESS.postalCode} ${BUSINESS_ADDRESS.addressLocality}`;
export const BUSINESS_MUNICIPALITY = "Mont-roig del Camp";
export const BUSINESS_COUNTRY = "España";

export const CONTACT_EMAIL = "hola@tr3c3.com";
export const CONTACT_PHONE: string | undefined = "+34 877 91 52 61";
export const INSTAGRAM_URL: string | undefined = "https://www.instagram.com/trece.coffee.brunch/";
export const INSTAGRAM_HANDLE: string | undefined = INSTAGRAM_URL
  ? `@${INSTAGRAM_URL.replace(/\/+$/, "").split("/").pop()}`
  : undefined;
export const TIKTOK_URL: string | undefined = undefined;

export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/6R71tUa5TnFQnZVw5";
export const GOOGLE_PLACE_ID: string | undefined = undefined;
export const GEO_COORDINATES: { latitude: number; longitude: number } | undefined = {
  latitude: 41.0058021,
  longitude: 0.9350192,
};

const mapQuery = GEO_COORDINATES
  ? `${GEO_COORDINATES.latitude},${GEO_COORDINATES.longitude}`
  : `${BUSINESS_ADDRESS.streetAddress}, ${BUSINESS_ADDRESS.postalCode} ${BUSINESS_ADDRESS.addressLocality}, ${BUSINESS_ADDRESS.addressRegion}`;
export const GOOGLE_MAPS_EMBED_URL =
  `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=17&hl=es&output=embed`;

export const OPENING_HOURS = [
  { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "09:00", closes: "00:00" },
] as const;

// Confirmed kitchen service windows. Keep every schedule display and live status
// connected to this source instead of repeating times in page components.
export const SERVICE_HOURS = {
  breakfastBrunch: [
    { opens: "09:00", closes: "12:30" },
    { opens: "15:00", closes: "19:00" },
  ],
  lunchDinner: [
    { opens: "12:30", closes: "15:00" },
    { opens: "19:00", closes: "23:00" },
  ],
} as const;

export const BUSINESS_LANGUAGES = ["es", "ca", "en", "fr", "de", "zh-Hans", "nl", "it"] as const;
export const BUSINESS_CUISINES = [
  "Mediterranean",
  "Brunch",
  "Breakfast",
  "Specialty Coffee",
] as const;

// Pendientes de confirmación: se omiten del JSON-LD mientras no exista una fuente oficial.
export const PRICE_RANGE: string | undefined = undefined;
export const RESERVATION_URL: string | undefined = undefined;

export const LOCAL_GUIDES = [
  { href: "/mejor-brunch-miami-platja/", label: "Brunch en Miami Platja" },
  { href: "/mejor-cafeteria-especialidad-miami-platja/", label: "Café de especialidad en Miami Platja" },
  { href: "/mejor-restaurante-miami-platja/", label: "Restaurante en Miami Platja" },
  { href: "/brunch-tarragona/", label: "Brunch en Tarragona y Costa Daurada" },
  { href: "/cafeteria-especialidad-tarragona/", label: "Cafetería de especialidad en Tarragona" },
  { href: "/restaurante-miami-platja-costa-daurada/", label: "Dónde comer en la Costa Daurada" },
] as const;

export const business = {
  name: BUSINESS_NAME,
  shortName: BUSINESS_SHORT_NAME,
  alternateNames: BUSINESS_ALTERNATE_NAMES,
  tagline: BUSINESS_TAGLINE,
  description: BUSINESS_DESCRIPTION,
  url: SITE_URL,
  homePath: "/es/",
  menuPath: "/es/carta/",
  logoPath: "/icon-512.png",
  socialImagePath: "/brand/tr3c3-og.png",
  address: BUSINESS_ADDRESS,
  municipality: BUSINESS_MUNICIPALITY,
  country: BUSINESS_COUNTRY,
  geo: GEO_COORDINATES,
  phone: CONTACT_PHONE,
  email: CONTACT_EMAIL,
  instagramUrl: INSTAGRAM_URL,
  googleMapsUrl: GOOGLE_MAPS_URL,
  googleMapsEmbedUrl: GOOGLE_MAPS_EMBED_URL,
  openingHours: OPENING_HOURS,
  serviceHours: SERVICE_HOURS,
  languages: BUSINESS_LANGUAGES,
  cuisines: BUSINESS_CUISINES,
  priceRange: PRICE_RANGE,
  reservationUrl: RESERVATION_URL,
} as const;

export type Business = typeof business;

export default business;
