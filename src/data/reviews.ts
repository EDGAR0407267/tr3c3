// =============================================================================
//  Reseñas de Google · TR3C3 Coffee & Brunch
// =============================================================================
//
//  Este archivo es la ÚNICA fuente de verdad de la sección "Lo que dicen de
//  TR3C3". Está pensado para editarse a mano: pega aquí las reseñas reales de
//  Google Maps y la sección se actualiza sola.
//
//  ⚠️  IMPORTANTE — HONESTIDAD DE DATOS
//  ---------------------------------------------------------------------------
//  · Las reseñas de abajo son EJEMPLOS de muestra (placeholder) para que la
//    sección se vea completa mientras no se peguen las reales. NO son reseñas
//    verificadas y NO deben publicarse como tales.
//  · Google Maps bloquea la extracción automática de reseñas (pantalla de
//    consentimiento), por eso no se han podido volcar de forma automática y
//    fiable. Sustitúyelas por las reseñas REALES visibles en la ficha de
//    Google (ver GOOGLE_REVIEWS_URL más abajo).
//  · Cuando pegues reseñas reales, pon `isSample: false` en cada una.
//  · No inventes valoración media ni número de reseñas: rellena GOOGLE_RATING
//    solo con los datos exactos que aparezcan HOY en Google.
//
//  Cómo añadir una reseña real (copiar/pegar y editar):
//    {
//      name: "Nombre real del cliente",   // tal y como aparece en Google
//      rating: 5,                          // de 1 a 5
//      text: "Texto real de la reseña.",
//      date: "Hace 2 meses",              // referencia temporal aproximada
//      source: "Google",
//      isSample: false,
//    }
// =============================================================================

export interface Review {
  /** Nombre del cliente tal y como aparece en Google. */
  name: string;
  /** Valoración de 1 a 5 estrellas. */
  rating: 1 | 2 | 3 | 4 | 5;
  /** Texto de la reseña. */
  text: string;
  /** Referencia temporal aproximada (ej. "Hace 3 meses"). Opcional. */
  date?: string;
  /** Fuente de la reseña. Por ahora siempre Google. */
  source?: "Google";
  /** true mientras sea un ejemplo de muestra; ponlo en false al pegar la real. */
  isSample?: boolean;
}

// Enlace directo a la ficha de Google Maps de TR3C3 (pestaña de reseñas).
// Es el enlace real facilitado por el negocio; se usa en el botón
// "Ver más reseñas en Google".
export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/TRECE+Brunch+%26+Coffee/@41.005541,0.9320732,744m/data=!3m1!1e3!4m8!3m7!1s0x12a1411bf041c905:0x7a5aacd33cfb311d!8m2!3d41.005541!4d0.9346481!9m1!1b1!16s%2Fg%2F11h64vkhsw";

// Valoración global de Google.
// ⚠️ Rellena SOLO con los valores exactos que aparezcan hoy en la ficha.
//    - average:  nota media como se muestra en España (coma decimal). Ej: "4,8"
//    - count:    número total de reseñas. Deja null si no lo confirmas.
//    - emitSchema: pon true SOLO cuando average y count sean reales y exactos;
//                  activa el schema.org AggregateRating. Con datos falsos, deja
//                  false (no publicar valoraciones inventadas).
export const GOOGLE_RATING = {
  average: "4,8",
  count: null as number | null,
  emitSchema: false,
};

// ---------------------------------------------------------------------------
//  Reseñas (EJEMPLOS de muestra — sustituir por las reales de Google).
// ---------------------------------------------------------------------------
export const reviews: Review[] = [
  {
    name: "Marina G.",
    rating: 5,
    text: "El mejor café de especialidad de la zona. El brunch es espectacular y el ambiente te invita a quedarte toda la mañana. Repetiremos seguro.",
    date: "Hace 2 meses",
    source: "Google",
    isSample: true,
  },
  {
    name: "Daniel R.",
    rating: 5,
    text: "Un rincón con muchísimo encanto en Miami Platja. Producto cuidado, presentación impecable y un trato cercano de verdad.",
    date: "Hace 3 meses",
    source: "Google",
    isSample: true,
  },
  {
    name: "Laura P.",
    rating: 5,
    text: "Volvemos cada finde. El flat white es perfecto y la cocina mediterránea no falla nunca. Se nota el mimo en cada detalle.",
    date: "Hace 1 mes",
    source: "Google",
    isSample: true,
  },
  {
    name: "Jordi M.",
    rating: 5,
    text: "Café excelente, tostadas y dulces caseros riquísimos y una terraza para desconectar. Justo lo que le faltaba al pueblo.",
    date: "Hace 4 meses",
    source: "Google",
    isSample: true,
  },
  {
    name: "Sofía L.",
    rating: 5,
    text: "Desayuno de 10. Todo fresco, bonito y con mucho gusto. El personal atentísimo. Una experiencia premium sin pretensiones.",
    date: "Hace 2 semanas",
    source: "Google",
    isSample: true,
  },
];

export default reviews;
