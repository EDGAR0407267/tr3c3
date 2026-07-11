export const SITE_URL = "https://www.tr3c3.com";

export const BUSINESS_NAME = "TR3C3 Coffee & Brunch";
export const BUSINESS_SHORT_NAME = "TR3C3";
// Nombre comercial para SEO local (Google Business Profile, directorios, schema).
export const SEO_BUSINESS_NAME = "TR3C3 Brunch";
export const BUSINESS_TAGLINE = "Specialty Coffee & Brunch";
export const BUSINESS_ALTERNATE_NAMES = ["TR3C3 Brunch", "TR3C3 Miami Platja", "TR3C3", "TR3C3 Coffee and Brunch"];
export const BUSINESS_DESCRIPTION =
  "Café de especialidad, brunch, cocina mediterránea y ambiente premium en Miami Platja, Tarragona.";

export const BUSINESS_ADDRESS = {
  streetAddress: "Avinguda de Los Ángeles, 13",
  postalCode: "43892",
  addressLocality: "Miami Platja",
  addressRegion: "Tarragona",
  addressCountry: "ES",
} as const;

// Municipio y país en claro para copys, footer y datos estructurados.
export const BUSINESS_MUNICIPALITY = "Mont-roig del Camp";
export const BUSINESS_COUNTRY = "España";

export const CONTACT_EMAIL = "hola@tr3c3.com";

// TODO SEO: confirmar estos datos antes de publicar y mantenerlos idénticos
// en la web, Google Business Profile, directorios locales y redes sociales.
export const CONTACT_PHONE: string | undefined = "+34 877 91 52 61";
// Perfil oficial de TR3C3 / TRECE Brunch.
export const INSTAGRAM_URL: string | undefined = "https://www.instagram.com/trecebrunch/";
export const INSTAGRAM_HANDLE: string | undefined = INSTAGRAM_URL
  ? `@${INSTAGRAM_URL.replace(/\/+$/, "").split("/").pop()}`
  : undefined;
export const TIKTOK_URL: string | undefined = undefined;

// TODO SEO: rellenar con los datos reales de Google Business Profile.
// No inventar: dejar undefined hasta disponer del valor oficial.
export const GOOGLE_PLACE_ID: string | undefined = undefined;
// Coordenadas exactas del local (para `geo` en schema y para el embed del
// mapa). Extraídas de la ficha oficial de Google Maps de TRECE Brunch & Coffee
// (marcador !3d/!4d de la URL del negocio); no son inventadas.
export const GEO_COORDINATES: { latitude: number; longitude: number } | undefined = {
  latitude: 41.005541,
  longitude: 0.9346481,
};

// Horario de trabajo: lunes a domingo de 09:00 a 00:00 seguido (confirmado).
export const OPENING_HOURS = [
  { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "09:00", closes: "00:00" },
] as const;

export const LOCAL_GUIDES = [
  { href: "/mejor-brunch-miami-platja/", label: "Brunch en Miami Platja" },
  { href: "/mejor-cafeteria-especialidad-miami-platja/", label: "Café de especialidad en Miami Platja" },
  { href: "/mejor-restaurante-miami-platja/", label: "Restaurante en Miami Platja" },
  { href: "/brunch-tarragona/", label: "Brunch en Tarragona y Costa Daurada" },
  { href: "/cafeteria-especialidad-tarragona/", label: "Cafetería de especialidad en Tarragona" },
  { href: "/restaurante-miami-platja-costa-daurada/", label: "Dónde comer en la Costa Daurada" },
] as const;
