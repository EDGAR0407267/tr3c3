import { same, tx, type FoodMenuDefinition } from "./types";

export const drinksMenu: FoodMenuDefinition = {
  id: "cafes-bebidas-cocteles",
  title: tx("Cafés, bebidas y cócteles", "Cafès, begudes i còctels", "Coffee, drinks & cocktails", "Cafés, boissons & cocktails", "Kaffee, Getränke & Cocktails", "咖啡、饮品与鸡尾酒", "Koffie, dranken & cocktails", "Caffè, bevande & cocktail"),
  kicker: tx("Barra · Todo el día", "Barra · Tot el dia", "Bar · All day", "Bar · Toute la journée", "Bar · Ganztägig", "吧台 · 全天", "Bar · De hele dag", "Bar · Tutto il giorno"),
  lead: tx("Café de especialidad, refrescos, zumos, cervezas, cócteles y aperitivos.", "Cafè d'especialitat, refrescos, sucs, cerveses, còctels i aperitius.", "Specialty coffee, soft drinks, juices, beer, cocktails and aperitifs.", "Café de spécialité, sodas, jus, bières, cocktails et apéritifs.", "Specialty Coffee, Softdrinks, Säfte, Bier, Cocktails und Aperitifs.", "精品咖啡、软饮、果汁、啤酒、鸡尾酒与开胃酒。", "Specialty coffee, frisdrank, sap, bier, cocktails en aperitieven.", "Caffè specialty, bibite, succhi, birre, cocktail e aperitivi."),
  image: "/images/carta-cafes.webp",
  alt: tx("Café, bebidas y cócteles de la barra de TR3C3", "Cafè, begudes i còctels de la barra de TR3C3", "Coffee, drinks and cocktails from the TR3C3 bar", "Cafés, boissons et cocktails du bar TR3C3", "Kaffee, Getränke und Cocktails von der TR3C3-Bar", "TR3C3 吧台的咖啡、饮品与鸡尾酒", "Koffie, dranken en cocktails van de TR3C3-bar", "Caffè, bevande e cocktail del bar TR3C3"),
  categories: [
    {
      title: tx("Barra de especialidad", "Barra d'especialitat", "Specialty coffee bar", "Bar à café de spécialité", "Specialty-Coffee-Bar", "精品咖啡吧", "Specialty-koffiebar", "Banco specialty coffee"),
      items: [
        { name: tx("Espresso / doble", "Espresso / doble", "Espresso / double", "Espresso / double", "Espresso / doppelt", "浓缩 / 双份", "Espresso / dubbel", "Espresso / doppio"), price: "1,90 € / 2,30 €" },
        { name: tx("Cortado / doble", "Tallat / doble", "Cortado / double", "Cortado / double", "Cortado / doppelt", "玛奇朵 / 双份", "Cortado / dubbel", "Cortado / doppio"), price: "2,00 € / 2,80 €" },
        { name: same("Flat white"), price: "3,00 €" },
        { name: same("Latte / latte XL"), price: "2,50 € / 4,30 €" },
        { name: tx("Americano / filtro", "Americà / filtre", "Americano / filter", "Americano / filtre", "Americano / Filterkaffee", "美式 / 手冲", "Americano / filter", "Americano / filtro"), price: "2,40 € / 3,50 €" },
        { name: tx("Cappuccino / moka", "Cappuccino / moka", "Cappuccino / mocha", "Cappuccino / moka", "Cappuccino / Mokka", "卡布奇诺 / 摩卡", "Cappuccino / mokka", "Cappuccino / moka"), price: "2,60 € / 3,50 €", description: tx("Cappuccino con canela o cacao; moka con chocolate.", "Cappuccino amb canyella o cacau; moka amb xocolata.", "Cappuccino with cinnamon or cocoa; mocha with chocolate.", "Cappuccino à la cannelle ou au cacao ; moka au chocolat.", "Cappuccino mit Zimt oder Kakao; Mokka mit Schokolade.", "卡布奇诺可配肉桂或可可；摩卡配巧克力。", "Cappuccino met kaneel of cacao; mokka met chocolade.", "Cappuccino con cannella o cacao; moka al cioccolato.") },
        { name: same("Matcha / rooibos / chai"), price: "3,50 €", description: tx("Servidos con leche.", "Servits amb llet.", "Served with milk.", "Servis avec du lait.", "Mit Milch serviert.", "均以牛奶调制。", "Geserveerd met melk.", "Serviti con latte.") },
        { name: same("Iced coffee / latte"), price: "3,50 € / 3,80 €" },
        { name: same("Cold brew"), price: "3,00 €" },
        { name: tx("Batido de chocolate", "Batut de xocolata", "Chocolate shake", "Milk-shake au chocolat", "Schokoladen-Milkshake", "巧克力奶昔", "Chocoladeshake", "Frappè al cioccolato"), price: "3,00 €" },
        { name: tx("Tés e infusiones", "Tes i infusions", "Teas & infusions", "Thés & infusions", "Tee & Aufgüsse", "茶与花草茶", "Thee & infusies", "Tè e infusi"), price: "2,50 €" },
        { name: same("Affogato"), price: "4,80 €", description: tx("Espresso con una bola de helado de vainilla.", "Espresso amb una bola de gelat de vainilla.", "Espresso with a scoop of vanilla ice cream.", "Espresso avec une boule de glace vanille.", "Espresso mit einer Kugel Vanilleeis.", "浓缩咖啡配一球香草冰淇淋。", "Espresso met een bol vanille-ijs.", "Espresso con una pallina di gelato alla vaniglia.") },
      ],
    },
    {
      title: tx("Refrescos", "Refrescos", "Soft drinks", "Boissons fraîches", "Erfrischungsgetränke", "软饮", "Frisdrank", "Bibite"),
      items: [
        { name: tx("Agua", "Aigua", "Still water", "Eau plate", "Stilles Wasser", "矿泉水", "Plat water", "Acqua naturale"), price: "2,20 €" },
        { name: tx("Agua con gas", "Aigua amb gas", "Sparkling water", "Eau gazeuse", "Mineralwasser", "气泡水", "Bruiswater", "Acqua frizzante"), price: "2,90 €" },
        { name: tx("Refrescos", "Refrescos", "Soft drinks", "Sodas", "Softdrinks", "汽水", "Frisdrank", "Bibite"), price: "2,90 €" },
      ],
    },
    {
      title: tx("Zumos", "Sucs", "Juices", "Jus", "Säfte", "果汁", "Sappen", "Succhi"),
      items: [
        { name: tx("Zumos", "Sucs", "Juices", "Jus", "Säfte", "果汁", "Sappen", "Succhi"), price: "2,50 €", description: tx("Naranja, melocotón, piña o manzana.", "Taronja, préssec, pinya o poma.", "Orange, peach, pineapple or apple.", "Orange, pêche, ananas ou pomme.", "Orange, Pfirsich, Ananas oder Apfel.", "橙、桃、菠萝或苹果。", "Sinaasappel, perzik, ananas of appel.", "Arancia, pesca, ananas o mela.") },
        { name: tx("Naranja natural", "Taronja natural", "Fresh orange", "Orange pressée", "Frischer Orangensaft", "鲜榨橙汁", "Verse sinaasappel", "Spremuta d'arancia"), price: "4,00 €" },
        { name: tx("Limonada casera", "Llimonada casolana", "Homemade lemonade", "Citronnade maison", "Hausgemachte Limonade", "自制柠檬水", "Huisgemaakte limonade", "Limonata fatta in casa"), price: "5,00 €" },
      ],
    },
    {
      title: tx("Cervezas", "Cerveses", "Beer", "Bières", "Bier", "啤酒", "Bier", "Birre"),
      items: [
        { name: same("Mediana Alhambra Verde"), price: "3,20 €" },
        { name: same("Caña Alhambra 33 cl"), price: "3,00 €" },
        { name: tx("Champú", "Xampú", "Shandy", "Panaché", "Radler", "柠檬啤酒", "Shandy", "Radler"), price: "3,20 €" },
        { name: tx("Jarra", "Gerra", "Pitcher", "Pichet", "Krug", "啤酒壶", "Kan", "Caraffa"), price: "4,50 €" },
        { name: tx("Jarra de champú", "Gerra de xampú", "Shandy pitcher", "Pichet de panaché", "Radler-Krug", "柠檬啤酒壶", "Kan shandy", "Caraffa di radler"), price: "4,50 €" },
        { name: same("Coronita"), price: "3,80 €" },
      ],
    },
    {
      title: tx("Cócteles", "Còctels", "Cocktails", "Cocktails", "Cocktails", "鸡尾酒", "Cocktails", "Cocktail"),
      items: [
        { name: same("Mimosa"), price: "3,50 €", description: tx("Zumo de naranja y cava.", "Suc de taronja i cava.", "Orange juice and cava.", "Jus d'orange et cava.", "Orangensaft und Cava.", "橙汁与卡瓦起泡酒。", "Sinaasappelsap en cava.", "Succo d'arancia e cava.") },
        { name: same("Mai Tai"), price: "8,00 €", description: tx("Cóctel tropical con ron.", "Còctel tropical amb rom.", "Tropical rum cocktail.", "Cocktail tropical au rhum.", "Tropischer Cocktail mit Rum.", "热带朗姆鸡尾酒。", "Tropische cocktail met rum.", "Cocktail tropicale al rum.") },
        { name: tx("Piña colada", "Pinya colada", "Piña colada", "Piña colada", "Piña Colada", "椰林飘香", "Piña colada", "Piña colada"), price: "8,00 €", description: tx("Mezcla de ron, piña y coco.", "Barreja de rom, pinya i coco.", "Rum, pineapple and coconut.", "Rhum, ananas et coco.", "Rum, Ananas und Kokos.", "朗姆酒、菠萝与椰子。", "Rum, ananas en kokos.", "Rum, ananas e cocco.") },
        { name: same("Mojito"), price: "8,00 €", description: tx("Tradicional, fresa, fruta de la pasión o mango.", "Tradicional, maduixa, fruita de la passió o mango.", "Classic, strawberry, passion fruit or mango.", "Classique, fraise, fruit de la passion ou mangue.", "Klassisch, Erdbeere, Passionsfrucht oder Mango.", "经典、草莓、百香果或芒果。", "Klassiek, aardbei, passievrucht of mango.", "Classico, fragola, frutto della passione o mango.") },
        { name: same("Espresso Martini"), price: "7,00 €", description: tx("Nuestro cóctel de autor.", "El nostre còctel d'autor.", "Our signature cocktail.", "Notre cocktail signature.", "Unser Signature-Cocktail.", "我们的招牌鸡尾酒。", "Onze signature cocktail.", "Il nostro signature cocktail.") },
        { name: same("Margarita"), price: "8,00 €", description: tx("Base de tequila y ágave.", "Base de tequila i atzavara.", "Tequila and agave base.", "Base de tequila et d'agave.", "Auf Tequila- und Agavenbasis.", "以龙舌兰酒与龙舌兰糖浆调制。", "Op basis van tequila en agave.", "Base di tequila e agave.") },
        { name: same("Paloma"), price: "7,00 €", description: tx("Base de pomelo y tequila.", "Base d'aranja i tequila.", "Grapefruit and tequila base.", "Base de pamplemousse et tequila.", "Auf Grapefruit- und Tequilabasis.", "以西柚与龙舌兰酒调制。", "Op basis van grapefruit en tequila.", "Base di pompelmo e tequila.") },
        { name: same("Daiquiri"), price: "8,00 €", description: tx("Tradicional, fresa, fruta de la pasión o mango.", "Tradicional, maduixa, fruita de la passió o mango.", "Classic, strawberry, passion fruit or mango.", "Classique, fraise, fruit de la passion ou mangue.", "Klassisch, Erdbeere, Passionsfrucht oder Mango.", "经典、草莓、百香果或芒果。", "Klassiek, aardbei, passievrucht of mango.", "Classico, fragola, frutto della passione o mango.") },
      ],
    },
    {
      title: tx("Aperitivos", "Aperitius", "Aperitifs", "Apéritifs", "Aperitifs", "开胃酒", "Aperitieven", "Aperitivi"),
      items: [
        { name: same("Aperol Spritz"), price: "7,00 €" },
        { name: same("Hugo Spritz"), price: "7,00 €" },
        { name: tx("Vermut", "Vermut", "Vermouth", "Vermouth", "Wermut", "味美思", "Vermout", "Vermouth"), price: "3,80 €" },
        { name: tx("Sangría", "Sangria", "Sangria", "Sangria", "Sangria", "桑格利亚", "Sangria", "Sangria"), price: "18,00 €" },
        { name: tx("Sangría de cava", "Sangria de cava", "Cava sangria", "Sangria au cava", "Cava-Sangria", "卡瓦桑格利亚", "Cava-sangria", "Sangria al cava"), price: "22,00 €" },
      ],
    },
  ],
  notices: [
    {
      text: tx("Añade bebida de avena, sin lactosa o desnatada; extra de hielo; o sirope de caramelo, chocolate o vainilla.", "Afegeix beguda de civada, sense lactosa o desnatada; gel extra; o xarop de caramel, xocolata o vainilla.", "Add oat, lactose-free or skimmed milk; extra ice; or caramel, chocolate or vanilla syrup.", "Ajoutez une boisson à l'avoine, sans lactose ou écrémée ; des glaçons supplémentaires ; ou un sirop caramel, chocolat ou vanille.", "Haferdrink, laktosefreie oder entrahmte Milch; extra Eis; oder Karamell-, Schoko- oder Vanillesirup hinzufügen.", "可加燕麦奶、无乳糖奶或脱脂奶；额外冰块；或焦糖、巧克力、香草糖浆。", "Voeg haverdrink, lactosevrije of magere melk toe; extra ijs; of karamel-, chocolade- of vanillesiroop.", "Aggiungi bevanda d'avena, latte senza lattosio o scremato; ghiaccio extra; oppure sciroppo al caramello, cioccolato o vaniglia."),
      price: "+0,30 €",
    },
  ],
};
