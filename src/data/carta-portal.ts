// Copy for the Carta landing page (portal / índice de cartas).
// This page is a visual gateway to the real menu sections — it never lists
// individual products or prices. All strings live here in the 8 project
// languages so the component stays free of hard-coded text.
import type { Language } from "../i18n/config";
import { tx, same, type LocalizedText } from "./food-menus/types";

export const localizeCarta = (text: LocalizedText, lang: Language) => text[lang];

export interface PortalMoment {
  /** Numeric time label, shared across languages (e.g. "09:00"). */
  time: string;
  /** Id of the real carta section this moment points to. */
  target: string;
  label: LocalizedText;
}

export interface CartaPortalCopy {
  hero: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    lead: LocalizedText;
    primaryCta: LocalizedText;
    scroll: LocalizedText;
    alt: LocalizedText;
  };
  intro: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    text: LocalizedText;
    aux: LocalizedText;
    word: LocalizedText;
  };
  moments: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    items: PortalMoment[];
  };
  directory: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    lead: LocalizedText;
  };
  pause: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    text: LocalizedText;
  };
  final: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    text: LocalizedText;
    hoursLabel: LocalizedText;
  };
  /** Vinos is not a food menu (no per-product page data), so its card copy lives here. */
  wineCard: {
    title: LocalizedText;
    kicker: LocalizedText;
    lead: LocalizedText;
    alt: LocalizedText;
  };
}

export const cartaPortalCopy: CartaPortalCopy = {
  hero: {
    eyebrow: tx(
      "La carta de TR3C3",
      "La carta de TR3C3",
      "The TR3C3 menu",
      "La carte TR3C3",
      "Die TR3C3 Karte",
      "TR3C3 菜单",
      "Het TR3C3 menu",
      "Il menu TR3C3",
    ),
    title: tx(
      "Una carta para cada momento del día.",
      "Una carta per a cada moment del dia.",
      "A menu for every moment of the day.",
      "Une carte pour chaque moment de la journée.",
      "Eine Karte für jeden Moment des Tages.",
      "为一天中的每个时刻，都备好一份菜单。",
      "Een kaart voor elk moment van de dag.",
      "Un menu per ogni momento della giornata.",
    ),
    lead: tx(
      "Desde el primer café hasta la última copa. Descubre nuestras cartas y elige cómo quieres disfrutar TR3C3.",
      "Des del primer cafè fins a l'última copa. Descobreix les nostres cartes i tria com vols gaudir de TR3C3.",
      "From the first coffee to the last drink. Explore our menus and choose how you want to enjoy TR3C3.",
      "Du premier café au dernier verre. Découvrez nos cartes et choisissez comment savourer TR3C3.",
      "Vom ersten Kaffee bis zum letzten Drink. Entdecke unsere Karten und wähle, wie du TR3C3 genießen möchtest.",
      "从清晨的第一杯咖啡到夜晚的最后一杯，浏览我们的菜单，选择属于你的 TR3C3 时光。",
      "Van de eerste koffie tot het laatste glas. Ontdek onze kaarten en kies hoe je van TR3C3 wilt genieten.",
      "Dal primo caffè all'ultimo bicchiere. Scopri i nostri menu e scegli come vivere TR3C3.",
    ),
    primaryCta: tx(
      "Explorar las cartas",
      "Explorar les cartes",
      "Explore the menus",
      "Explorer les cartes",
      "Karten entdecken",
      "浏览菜单",
      "Ontdek de kaarten",
      "Esplora i menu",
    ),
    scroll: tx(
      "Descubrir",
      "Descobrir",
      "Discover",
      "Découvrir",
      "Entdecken",
      "继续探索",
      "Ontdek",
      "Scopri",
    ),
    alt: tx(
      "Mesa de café de especialidad y brunch mediterráneo en TR3C3, Miami Platja",
      "Taula de cafè d'especialitat i brunch mediterrani a TR3C3, Miami Platja",
      "Specialty coffee and Mediterranean brunch table at TR3C3, Miami Platja",
      "Table de café de spécialité et brunch méditerranéen chez TR3C3, Miami Platja",
      "Tisch mit Specialty Coffee und mediterranem Brunch bei TR3C3, Miami Platja",
      "TR3C3 的精品咖啡与地中海早午餐餐桌，Miami Platja",
      "Tafel met specialty coffee en mediterrane brunch bij TR3C3, Miami Platja",
      "Tavolo con caffè specialty e brunch mediterraneo da TR3C3, Miami Platja",
    ),
  },
  intro: {
    eyebrow: tx(
      "De la mañana a la noche",
      "Del matí a la nit",
      "From morning to night",
      "Du matin au soir",
      "Von morgens bis abends",
      "从清晨到夜晚",
      "Van ochtend tot avond",
      "Dal mattino alla sera",
    ),
    title: tx(
      "Elige tu momento. Nosotros ponemos el resto.",
      "Tria el teu moment. Nosaltres posem la resta.",
      "Choose your moment. We'll bring the rest.",
      "Choisissez votre moment. On s'occupe du reste.",
      "Wähle deinen Moment. Um den Rest kümmern wir uns.",
      "选择你的时刻，其余的交给我们。",
      "Kies jouw moment. Wij zorgen voor de rest.",
      "Scegli il tuo momento. Al resto pensiamo noi.",
    ),
    text: tx(
      "Café de especialidad, desayunos, brunch, cocina mediterránea, bebidas, vinos y cócteles para disfrutar TR3C3 a cualquier hora.",
      "Cafè d'especialitat, esmorzars, brunch, cuina mediterrània, begudes, vins i còctels per gaudir de TR3C3 a qualsevol hora.",
      "Specialty coffee, breakfasts, brunch, Mediterranean cooking, drinks, wines and cocktails to enjoy TR3C3 at any hour.",
      "Café de spécialité, petits-déjeuners, brunch, cuisine méditerranéenne, boissons, vins et cocktails pour savourer TR3C3 à toute heure.",
      "Specialty Coffee, Frühstück, Brunch, mediterrane Küche, Getränke, Weine und Cocktails, um TR3C3 zu jeder Stunde zu genießen.",
      "精品咖啡、早餐、早午餐、地中海料理、饮品、葡萄酒与鸡尾酒，随时随地享受 TR3C3。",
      "Specialty coffee, ontbijt, brunch, mediterrane keuken, dranken, wijnen en cocktails om op elk uur van TR3C3 te genieten.",
      "Caffè specialty, colazioni, brunch, cucina mediterranea, bevande, vini e cocktail per vivere TR3C3 a qualsiasi ora.",
    ),
    aux: tx(
      "Los horarios y la disponibilidad pueden variar. Confírmalos en el local.",
      "Els horaris i la disponibilitat poden variar. Confirma'ls al local.",
      "Hours and availability may vary. Please confirm at the venue.",
      "Les horaires et la disponibilité peuvent varier. À confirmer sur place.",
      "Öffnungszeiten und Verfügbarkeit können variieren. Bitte vor Ort bestätigen.",
      "营业时间与供应情况可能有所变动，请以店内为准。",
      "Openingstijden en beschikbaarheid kunnen variëren. Bevestig ze in de zaak.",
      "Orari e disponibilità possono variare. Confermali nel locale.",
    ),
    word: same("TR3C3"),
  },
  moments: {
    eyebrow: tx(
      "Momentos del día",
      "Moments del dia",
      "Moments of the day",
      "Moments de la journée",
      "Momente des Tages",
      "一天中的时刻",
      "Momenten van de dag",
      "Momenti della giornata",
    ),
    title: tx(
      "¿Qué momento quieres disfrutar?",
      "Quin moment vols gaudir?",
      "Which moment would you like to enjoy?",
      "Quel moment voulez-vous savourer ?",
      "Welchen Moment möchtest du genießen?",
      "你想享受哪个时刻？",
      "Welk moment wil je beleven?",
      "Quale momento vuoi vivere?",
    ),
    items: [
      {
        time: "09:00",
        target: "desayunos-brunch",
        label: tx("Mañana", "Matí", "Morning", "Matin", "Morgen", "清晨", "Ochtend", "Mattina"),
      },
      {
        time: "12:30",
        target: "comida-cena",
        label: tx(
          "Brunch y comida",
          "Brunch i dinar",
          "Brunch & lunch",
          "Brunch & déjeuner",
          "Brunch & Mittag",
          "早午餐与午餐",
          "Brunch & lunch",
          "Brunch & pranzo",
        ),
      },
      {
        time: "17:00",
        target: "bebidas-especiales",
        label: tx("Tarde", "Tarda", "Afternoon", "Après-midi", "Nachmittag", "午后", "Middag", "Pomeriggio"),
      },
      {
        time: "20:00",
        target: "cafes-bebidas-cocteles",
        label: tx(
          "Cena y copas",
          "Sopar i copes",
          "Dinner & drinks",
          "Dîner & cocktails",
          "Abendessen & Drinks",
          "晚餐与小酌",
          "Diner & drankjes",
          "Cena & drink",
        ),
      },
    ],
  },
  directory: {
    eyebrow: tx(
      "Elige y explora",
      "Tria i explora",
      "Choose & explore",
      "Choisir & explorer",
      "Wählen & entdecken",
      "选择并探索",
      "Kies & ontdek",
      "Scegli & esplora",
    ),
    title: tx(
      "Todas nuestras cartas",
      "Totes les nostres cartes",
      "All our menus",
      "Toutes nos cartes",
      "Alle unsere Karten",
      "我们的全部菜单",
      "Al onze kaarten",
      "Tutti i nostri menu",
    ),
    lead: tx(
      "Elige la carta que quieres consultar y descubre todos los productos, opciones y precios disponibles.",
      "Tria la carta que vols consultar i descobreix tots els productes, opcions i preus disponibles.",
      "Choose the menu you'd like to browse and discover every product, option and price available.",
      "Choisissez la carte à consulter et découvrez tous les produits, options et prix disponibles.",
      "Wähle die Karte, die dich interessiert, und entdecke alle Produkte, Optionen und Preise.",
      "选择你想查看的菜单，探索所有可选的产品、搭配与价格。",
      "Kies de kaart die je wilt bekijken en ontdek alle producten, opties en prijzen.",
      "Scegli il menu che vuoi consultare e scopri tutti i prodotti, le opzioni e i prezzi disponibili.",
    ),
  },
  pause: {
    eyebrow: tx(
      "Cada hora tiene su carta",
      "Cada hora té la seva carta",
      "Every hour has its menu",
      "Chaque heure a sa carte",
      "Jede Stunde hat ihre Karte",
      "每个时刻都有专属菜单",
      "Elk uur heeft zijn kaart",
      "Ogni ora ha il suo menu",
    ),
    title: tx(
      "Empieza con café. Quédate hasta que caiga el sol.",
      "Comença amb cafè. Queda't fins que caigui el sol.",
      "Start with coffee. Stay until the sun goes down.",
      "Commencez par un café. Restez jusqu'au coucher du soleil.",
      "Beginne mit Kaffee. Bleib, bis die Sonne untergeht.",
      "以咖啡开场，一直待到日落时分。",
      "Begin met koffie. Blijf tot de zon ondergaat.",
      "Inizia con un caffè. Resta fino al tramonto.",
    ),
    text: tx(
      "Desayunos tranquilos, cocina mediterránea, algo dulce por la tarde y una selección de vinos y cócteles para terminar el día.",
      "Esmorzars tranquils, cuina mediterrània, alguna cosa dolça a la tarda i una selecció de vins i còctels per acabar el dia.",
      "Slow breakfasts, Mediterranean cooking, something sweet in the afternoon and a selection of wines and cocktails to end the day.",
      "Des petits-déjeuners tranquilles, une cuisine méditerranéenne, une douceur l'après-midi et une sélection de vins et cocktails pour finir la journée.",
      "Entspannte Frühstücke, mediterrane Küche, etwas Süßes am Nachmittag und eine Auswahl an Weinen und Cocktails zum Tagesausklang.",
      "悠闲的早餐、地中海料理、午后的甜点，以及一系列葡萄酒与鸡尾酒，为一天画上句点。",
      "Rustige ontbijten, mediterrane keuken, iets zoets in de middag en een selectie wijnen en cocktails om de dag af te sluiten.",
      "Colazioni tranquille, cucina mediterranea, qualcosa di dolce nel pomeriggio e una selezione di vini e cocktail per chiudere la giornata.",
    ),
  },
  final: {
    eyebrow: same("TR3C3 · Miami Platja"),
    title: tx(
      "¿Ya sabes qué te apetece?",
      "Ja saps què et ve de gust?",
      "Already know what you fancy?",
      "Vous savez déjà ce qui vous tente ?",
      "Weißt du schon, worauf du Lust hast?",
      "已经知道想吃点什么了吗？",
      "Weet je al waar je zin in hebt?",
      "Sai già cosa ti va?",
    ),
    text: tx(
      "Consulta nuestras cartas o ven a descubrirlas en persona, aquí en Miami Platja.",
      "Consulta les nostres cartes o vine a descobrir-les en persona, aquí a Miami Platja.",
      "Browse our menus or come and discover them in person, here in Miami Platja.",
      "Consultez nos cartes ou venez les découvrir sur place, ici à Miami Platja.",
      "Sieh dir unsere Karten an oder entdecke sie direkt bei uns in Miami Platja.",
      "浏览我们的菜单，或亲自来 Miami Platja 一探究竟。",
      "Bekijk onze kaarten of kom ze in het echt ontdekken, hier in Miami Platja.",
      "Consulta i nostri menu o vieni a scoprirli di persona, qui a Miami Platja.",
    ),
    hoursLabel: tx(
      "Todos los días",
      "Cada dia",
      "Every day",
      "Tous les jours",
      "Täglich",
      "每天",
      "Elke dag",
      "Ogni giorno",
    ),
  },
  wineCard: {
    title: tx("Vinos", "Vins", "Wines", "Vins", "Weine", "葡萄酒", "Wijnen", "Vini"),
    kicker: tx(
      "Bodega · Selección",
      "Celler · Selecció",
      "Cellar · Selection",
      "Cave · Sélection",
      "Weinkeller · Auswahl",
      "酒窖 · 精选",
      "Wijnkelder · Selectie",
      "Cantina · Selezione",
    ),
    lead: tx(
      "Una selección pensada para acompañar brunch, sobremesas y noches con carácter.",
      "Una selecció pensada per acompanyar brunch, sobretaules i nits amb caràcter.",
      "A selection designed for brunch, lingering tables and evenings with character.",
      "Une sélection pensée pour accompagner brunch, longues tables et soirées de caractère.",
      "Eine Auswahl für Brunch, lange Tischmomente und Abende mit Charakter.",
      "为早午餐、悠长的餐后时光与个性十足的夜晚精选而成。",
      "Een selectie voor brunch, lange tafelmomenten en avonden met karakter.",
      "Una selezione pensata per accompagnare brunch, tavolate lente e serate di carattere.",
    ),
    alt: tx(
      "Botella de vino tinto servida en TR3C3",
      "Ampolla de vi negre servida a TR3C3",
      "Bottle of red wine served at TR3C3",
      "Bouteille de vin rouge servie chez TR3C3",
      "Flasche Rotwein bei TR3C3 serviert",
      "TR3C3 供应的一瓶红葡萄酒",
      "Fles rode wijn geserveerd bij TR3C3",
      "Bottiglia di vino rosso servita da TR3C3",
    ),
  },
};
