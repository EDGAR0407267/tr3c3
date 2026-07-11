export const menuCategories = [
  { id: "cafe", title: "Café de especialidad", items: [
    { name: "Espresso", description: "Intenso, equilibrado y extraído con precisión." },
    { name: "Flat white", description: "Doble espresso y leche sedosa en equilibrio." },
    { name: "V60", description: "Filtrado limpio para descubrir el origen del grano." },
  ]},
  { id: "frias", title: "Bebidas frías", items: [
    { name: "Cold Brew", description: "Extracción lenta, suave y naturalmente refrescante." },
    { name: "Espresso Tonic", description: "Café, burbuja fina y un final cítrico." },
    { name: "Limonada natural", description: "Hecha al momento con fruta fresca." },
  ]},
  { id: "matcha", title: "Matcha y especiales", items: [
    { name: "Matcha Latte", description: "Matcha ceremonial y leche cremosa." },
    { name: "Matcha Naranja", description: "Vegetal, cítrico y luminoso." },
    { name: "Chai Latte", description: "Especiado, reconfortante y sedoso." },
  ]},
  { id: "brunch", title: "Brunch", items: [
    { name: "Tostada TR3C3", description: "Aguacate, huevo poché, tomate cherry y semillas." },
    { name: "French Toast", description: "Pan brioche, fruta de temporada y crema de vainilla." },
    { name: "Huevos al gusto", description: "Con masa madre tostada y ensalada verde." },
  ]},
  { id: "dulces", title: "Dulces", items: [
    { name: "Croissant", description: "Hojaldrado, mantecoso y dorado cada mañana." },
    { name: "Banana Bread", description: "Tierno, especiado y con un toque de canela." },
    { name: "Tarta de temporada", description: "Cremosa y acompañada de fruta fresca." },
  ]},
  { id: "salados", title: "Platos salados", items: [
    { name: "Bowl Mediterráneo", description: "Quinoa, hummus, vegetales asados y oliva kalamata." },
    { name: "Sándwich Caprese", description: "Masa madre, mozzarella, tomate y albahaca." },
    { name: "Plato del día", description: "Cocina de casa con producto fresco." },
  ]},
  { id: "compartir", title: "Para compartir", items: [
    { name: "Tabla mediterránea", description: "Quesos artesanos, fruta seca y mermelada." },
    { name: "Hummus & pan", description: "Hummus cremoso, aceite de oliva y masa madre." },
    { name: "Aceitunas marinadas", description: "Hierbas mediterráneas, cítricos y tiempo." },
  ]},
] as const;


