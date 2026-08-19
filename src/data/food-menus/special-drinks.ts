import { same, tx, type FoodMenuDefinition } from "./types";

export const specialDrinksMenu: FoodMenuDefinition = {
  id: "bebidas-especiales",
  title: tx("Bebidas especiales", "Begudes especials", "Special drinks", "Boissons spéciales", "Besondere Getränke", "特色饮品", "Speciale dranken", "Bevande speciali"),
  kicker: tx("Para tomar sin prisa", "Per prendre sense pressa", "Made for slow sipping", "À savourer sans hâte", "Zum entspannten Genießen", "慢慢品味", "Om rustig van te genieten", "Da sorseggiare senza fretta"),
  lead: tx("Matcha, café y combinaciones frías preparadas para alargar el momento.", "Matcha, cafè i combinacions fredes preparades per allargar el moment.", "Matcha, coffee and chilled combinations made to make the moment last.", "Matcha, café et créations fraîches pour prolonger le moment.", "Matcha, Kaffee und kalte Kreationen für einen langen Genussmoment.", "抹茶、咖啡与冰爽创意组合，让悠闲时光更长久。", "Matcha, koffie en koude combinaties om het moment langer te laten duren.", "Matcha, caffè e creazioni fredde per prolungare il momento."),
  image: "/images/carta-cocteles.webp",
  alt: tx("Selección de bebidas especiales frías de TR3C3", "Selecció de begudes especials fredes de TR3C3", "TR3C3 chilled special drinks selection", "Sélection de boissons spéciales fraîches de TR3C3", "Auswahl kalter Spezialgetränke bei TR3C3", "TR3C3 冰爽特色饮品精选", "Selectie koude speciale dranken van TR3C3", "Selezione di bevande speciali fredde di TR3C3"),
  categories: [
    {
      title: tx("Especiales frías", "Especials fredes", "Chilled specials", "Spécialités fraîches", "Kalte Spezialitäten", "冰爽特调", "Koude specials", "Specialità fredde"),
      items: [
        {
          name: same("Orange matcha"), price: "6,50 €", badges: ["new"],
          description: tx("Zumo de naranja natural, matcha y agua con gas.", "Suc de taronja natural, matcha i aigua amb gas.", "Fresh orange juice, matcha and sparkling water.", "Jus d'orange frais, matcha et eau gazeuse.", "Frischer Orangensaft, Matcha und Mineralwasser.", "鲜榨橙汁、抹茶与气泡水。", "Vers sinaasappelsap, matcha en bruiswater.", "Succo d'arancia fresco, matcha e acqua frizzante."),
        },
        { name: same("Iced coffee"), price: "3,50 €" },
        { name: same("Iced chai latte"), price: "5,00 €" },
        {
          name: same("Iced matcha latte"), price: "5,50 €",
          description: tx("Maracuyá o mango.", "Maracujà o mango.", "Passion fruit or mango.", "Fruit de la passion ou mangue.", "Passionsfrucht oder Mango.", "百香果或芒果。", "Passievrucht of mango.", "Frutto della passione o mango."),
        },
        { name: same("Americano lemonade"), price: "6,50 €", badges: ["new"] },
        {
          name: same("Iced caramel macchiato"), price: "7,50 €",
          description: tx("Con topping de nata.", "Amb topping de nata.", "With whipped cream topping.", "Avec topping de crème fouettée.", "Mit Sahnetopping.", "配鲜奶油顶。", "Met slagroomtopping.", "Con topping di panna."),
        },
        { name: same("Iced coconut latte"), price: "6,50 €" },
        { name: same("Espresso tonic"), price: "5,50 €" },
      ],
    },
  ],
};

