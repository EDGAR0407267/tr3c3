// Cartas por seccion para la pagina de carta (indice) y sus subpaginas.
// Contenido de muestra; precios y disponibilidad se confirman en el local.

export interface CartaItem {
  name: string;
  description: string;
  price: string;
}

export interface CartaSection {
  id: string;
  title: string;
  kicker: string;
  lead: string;
  image: string;
  alt: string;
  items: CartaItem[];
}

export interface Wine {
  /** Nombre del vino (protagonista). */
  name: string;
  /** Línea secundaria discreta: D.O./zona · uva o coupage. */
  note: string;
}

export interface WineCategory {
  id: string;
  title: string;
  wines: Wine[];
}

export const wineCategories: WineCategory[] = [
  {
    id: "tintos",
    title: "Tintos",
    wines: [
      { name: "Ramón Bilbao Tinto", note: "D.O.Ca. Rioja · Tempranillo" },
      { name: "Magnetic Tinto", note: "Catalunya · Garnacha tinta, Syrah" },
      { name: "Bàrbara Forés Tinto", note: "D.O. Terra Alta · Garnacha tinta, Cariñena, Syrah" },
      { name: "Montecillo Tinto Rioja", note: "D.O.Ca. Rioja · Tempranillo, Garnacha" },
      { name: "Sospechoso Tinto", note: "Vino de España · Tempranillo, Tinta de Toro" },
      { name: "Dido Tinto del Montsant", note: "D.O. Montsant · Garnacha, Syrah, Merlot, Cabernet Sauvignon" },
      { name: "GR-174", note: "D.O.Q. Priorat · Garnacha, Cariñena, Cabernet Sauvignon, Syrah, Merlot" },
      { name: "Les Terrasses", note: "D.O.Q. Priorat · Garnacha, Cariñena" },
      { name: "Pago de Carraovejas", note: "D.O. Ribera del Duero · Tinto Fino, Cabernet Sauvignon, Merlot" },
      { name: "Pago de Capellanes Joven", note: "D.O. Ribera del Duero · Tempranillo" },
      { name: "Pago de Capellanes Crianza", note: "D.O. Ribera del Duero · Tempranillo" },
      { name: "Finca Resalso", note: "D.O. Ribera del Duero · Tempranillo" },
    ],
  },
  {
    id: "blancos",
    title: "Blancos",
    wines: [
      { name: "Ramón Bilbao Blanco Verdejo", note: "D.O. Rueda · Verdejo" },
      { name: "O Luar do Sil", note: "D.O. Valdeorras · Godello" },
      { name: "Montecillo Blanco Rioja", note: "D.O.Ca. Rioja · Sauvignon Blanc, Viura, Tempranillo Blanco" },
      { name: "Mas Donís Blanco", note: "D.O. Montsant · Garnacha blanca, Macabeo" },
      { name: "Sospechoso Blanco", note: "Vino de España · Macabeo, Verdejo, Airén" },
      { name: "Enate Blanco", note: "D.O. Somontano · Chardonnay" },
      { name: "Murmuri Blanco", note: "D.O.Q. Priorat · Garnacha blanca, Macabeo" },
      { name: "El Perro Verde Verdejo", note: "D.O. Rueda · Verdejo" },
      { name: "Fenomenal Verdejo", note: "D.O. Rueda · Verdejo" },
      { name: "Ramón Bilbao Magnum Blanco", note: "D.O. Rueda · Verdejo" },
      { name: "Mar de Frades Blanco", note: "D.O. Rías Baixas · Albariño" },
    ],
  },
  {
    id: "rosados",
    title: "Rosados",
    wines: [
      { name: "Ramón Bilbao Rosado", note: "D.O.Ca. Rioja · Garnacha, Viura" },
      { name: "Sospechoso Rosado", note: "Vino de España · Bobal, Tempranillo" },
      { name: "Whispering Angel Rosado", note: "A.O.C. Côtes de Provence · Garnacha, Cinsault, Rolle, Syrah" },
      { name: "Torres de Casta Rosado", note: "D.O. Catalunya · Garnacha, Cariñena" },
      { name: "Cara Nord Rosado", note: "D.O. Conca de Barberà · Trepat" },
    ],
  },
  {
    id: "cava",
    title: "Cava",
    wines: [
      { name: "Roger de Flor", note: "D.O. Cava · Xarel·lo, Macabeo, Parellada" },
      { name: "Mô", note: "D.O. Cava · Macabeo, Xarel·lo, Parellada" },
      { name: "Agustí Torelló Mata Kripta", note: "Corpinnat / Penedès · Macabeo, Parellada, Xarel·lo" },
    ],
  },
  {
    id: "champagne",
    title: "Champagne",
    wines: [
      { name: "Moët Impérial", note: "A.O.C. Champagne · Pinot Noir, Pinot Meunier, Chardonnay" },
    ],
  },
];
export const cartaSections: CartaSection[] = [
  {
    id: "desayunos-brunch",
    title: "Desayunos y brunch",
    kicker: "Mañana · Tarde",
    lead: "Sándwiches, tostadas de masa madre, dulces y bocados para disfrutar sin prisa.",
    image: "/images/brunch-table.webp",
    alt: "Mesa de desayunos y brunch de TR3C3",
    items: [],
  },
  {
    id: "comida-cena",
    title: "Comida y cena",
    kicker: "Mediodía · Noche",
    lead: "Platitos para compartir, ensaladas, bocados, pinsas y proteínas con carácter.",
    image: "/images/kitchen-evening.webp",
    alt: "Servicio de comida y cena en TR3C3",
    items: [],
  },
  {
    id: "vinos",
    title: "Vinos",
    kicker: "Bodega · Selección premium",
    lead: "Una selección pensada para acompañar brunch, sobremesas y noches con carácter.",
    image: "/images/carta-vinos.webp",
    alt: "Botella de vino tinto servida en TR3C3",
    items: [],
  },
  {
    id: "bebidas-especiales",
    title: "Bebidas especiales",
    kicker: "Para tomar sin prisa",
    lead: "Matcha, café y combinaciones frías preparadas para alargar el momento.",
    image: "/images/carta-cocteles.webp",
    alt: "Selección de bebidas especiales frías de TR3C3",
    items: [],
  },
  {
    id: "cafes-bebidas-cocteles",
    title: "Cafés, bebidas y cócteles",
    kicker: "Barra · Todo el día",
    lead: "Café de especialidad, refrescos, zumos, cervezas, cócteles y aperitivos.",
    image: "/images/carta-cafes.webp",
    alt: "Café, bebidas y cócteles de la barra de TR3C3",
    items: [],
  },
];

export const getCartaSection = (id: string) => cartaSections.find((s) => s.id === id);


