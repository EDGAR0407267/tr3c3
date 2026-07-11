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
    id: "cafes",
    title: "Cafés",
    kicker: "Barra de café · Specialty",
    lead: "Café de especialidad tostado con intención, extraído al momento.",
    image: "/images/carta-cafes.webp",
    alt: "Selección de café, matcha y cold brew de TR3C3",
    items: [
      { name: "Espresso", description: "Cuerpo intenso y final dulce de nuestro blend de temporada.", price: "1,80 €" },
      { name: "Cortado", description: "Espresso y un velo de leche texturizada.", price: "2,00 €" },
      { name: "Flat White", description: "Doble ristretto y microespuma sedosa.", price: "2,80 €" },
      { name: "Cappuccino", description: "Equilibrio clásico de café, leche y espuma.", price: "2,60 €" },
      { name: "V60 · Filtrado", description: "Método manual para descubrir el origen del día.", price: "3,50 €" },
      { name: "Latte de especialidad", description: "Suave, cremoso y aromático.", price: "3,00 €" },
      { name: "Affogato", description: "Espresso sobre helado de vainilla artesano.", price: "4,20 €" },
    ],
  },
  {
    id: "cocteles",
    title: "Cócteles",
    kicker: "Coctelería · Tarde y noche",
    lead: "Aperitivos y combinados para alargar la sobremesa al atardecer.",
    image: "/images/carta-cocteles.webp",
    alt: "Barman preparando la selección de cócteles de TR3C3",
    items: [
      { name: "Spritz mediterráneo", description: "Aperitivo cítrico, cava y soda con naranja.", price: "8,50 €" },
      { name: "Negroni de la casa", description: "Gin, vermut rojo y bitter en equilibrio perfecto.", price: "9,00 €" },
      { name: "Gin Tonic botánico", description: "Gin premium, tónica artesana y hierbas frescas.", price: "9,50 €" },
      { name: "Mojito de hierbabuena", description: "Ron blanco, lima, menta y un toque de caña.", price: "8,00 €" },
      { name: "Aperol Sunset", description: "Aperol, prosecco y una rodaja de pomelo.", price: "8,50 €" },
      { name: "Margarita cítrica", description: "Tequila, triple seco y lima recién exprimida.", price: "9,00 €" },
    ],
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
    id: "entrantes",
    title: "Entrantes",
    kicker: "Para empezar · Compartir",
    lead: "Pequeños platos para abrir boca y compartir en el centro de la mesa.",
    image: "/images/brunch-table.webp",
    alt: "Mesa con entrantes mediterráneos en TR3C3",
    items: [
      { name: "Pan de masa madre con AOVE", description: "Tostado, con aceite de oliva virgen extra de la zona.", price: "4,00 €" },
      { name: "Hummus & crudités", description: "Cremoso, con vegetales de temporada y pan crujiente.", price: "6,50 €" },
      { name: "Croquetas caseras", description: "De jamón ibérico, cremosas por dentro.", price: "7,50 €" },
      { name: "Burrata con tomate", description: "Burrata fresca, tomate de colgar y albahaca.", price: "9,50 €" },
      { name: "Boquerones marinados", description: "En vinagre suave con ajo y perejil.", price: "6,00 €" },
      { name: "Tabla de quesos y embutidos", description: "Selección artesana con mermelada y frutos secos.", price: "12,50 €" },
    ],
  },
  {
    id: "principales",
    title: "Platos principales",
    kicker: "Cocina mediterránea · Mediodía",
    lead: "Cocina honesta con producto fresco para el plato fuerte del día.",
    image: "/images/tr3c3-hero.webp",
    alt: "Plato principal de la cocina de TR3C3",
    items: [
      { name: "Bowl mediterráneo", description: "Quinoa, hummus, vegetales asados y oliva kalamata.", price: "11,50 €" },
      { name: "Risotto de setas", description: "Cremoso, con parmesano y aceite de trufa.", price: "13,00 €" },
      { name: "Salmón a la plancha", description: "Con verduras de temporada y salsa cítrica.", price: "15,50 €" },
      { name: "Burger TR3C3", description: "Ternera, queso curado, cebolla caramelizada y patatas.", price: "13,50 €" },
      { name: "Pasta fresca del día", description: "Elaborada en casa con salsa de temporada.", price: "12,00 €" },
      { name: "Ensalada de burrata y aguacate", description: "Hojas verdes, tomate, aguacate y vinagreta.", price: "11,00 €" },
    ],
  },
  {
    id: "bolleria",
    title: "Bollería",
    kicker: "Horno · Cada mañana",
    lead: "Bollería artesana horneada cada mañana para acompañar el café.",
    image: "/images/croissant-coffee.webp",
    alt: "Bollería y café en TR3C3",
    items: [
      { name: "Croissant de mantequilla", description: "Hojaldrado, dorado y recién horneado.", price: "1,80 €" },
      { name: "Pain au chocolat", description: "Con chocolate negro fundente.", price: "2,20 €" },
      { name: "Caracola de pistacho", description: "Crema de pistacho y un toque de sal.", price: "3,00 €" },
      { name: "Banana bread", description: "Tierno, especiado y con nueces.", price: "3,20 €" },
      { name: "Cinnamon roll", description: "Canela, glaseado suave y masa esponjosa.", price: "3,50 €" },
      { name: "Tarta de queso", description: "Cremosa, horneada al estilo casero.", price: "4,00 €" },
    ],
  },
];

export const getCartaSection = (id: string) => cartaSections.find((s) => s.id === id);


