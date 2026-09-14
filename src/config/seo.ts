import type { Language, PageKey } from "../i18n/config";

export type PageSchemaType = "WebPage" | "ContactPage" | "CollectionPage";
export type BreadcrumbItem = { name: string; href: string };

export const languageTagByCode: Record<Language, string> = {
  es: "es",
  ca: "ca",
  en: "en",
  fr: "fr",
  de: "de",
  zh: "zh-Hans",
  nl: "nl",
  it: "it",
};

export const ogLocaleByLanguage: Record<Language, string> = {
  es: "es_ES",
  ca: "ca_ES",
  en: "en_GB",
  fr: "fr_FR",
  de: "de_DE",
  zh: "zh_CN",
  nl: "nl_NL",
  it: "it_IT",
};

type PageSeoCopy = Record<PageKey, { title: string; description: string }>;

const seoCopy: Record<Language, PageSeoCopy> = {
  es: {
    home: { title: "TR3C3 | Café de especialidad, brunch y cena en Miami Platja", description: "Café de especialidad en Miami Platja, desayunos, brunch y cenas mediterráneas. Descubre TR3C3 desde el primer café hasta la última copa." },
    menu: { title: "Carta de brunch, cafés y cócteles en Miami Platja | TR3C3", description: "Consulta la carta de TR3C3 en Miami Platja: desayunos, brunch, comida, cena, café de especialidad, bebidas frías, cócteles y vinos." },
    essence: { title: "Nuestra esencia | Café, producto y hospitalidad TR3C3", description: "Descubre la esencia de TR3C3 en Miami Platja: café de especialidad, producto mediterráneo, técnica barista y una hospitalidad cálida y sin prisas." },
    contact: { title: "Ubicación, horario y contacto en Miami Platja | TR3C3", description: "Encuentra TR3C3 en Miami Platja, consulta el horario, llama al restaurante o abre la ruta exacta en Google Maps para venir a disfrutar del café y el brunch." },
  },
  ca: {
    home: { title: "TR3C3 | Cafè d’especialitat, brunch i sopar a Miami Platja", description: "Cafè d’especialitat a Miami Platja, esmorzars, brunch i sopars mediterranis. Descobreix TR3C3 des del primer cafè fins a l’última copa." },
    menu: { title: "Carta de brunch, cafès i còctels a Miami Platja | TR3C3", description: "Consulta la carta de TR3C3 a Miami Platja: esmorzars, brunch, dinar, sopar, cafè d'especialitat, begudes fredes, còctels i vins." },
    essence: { title: "La nostra essència | Cafè, producte i hospitalitat TR3C3", description: "Descobreix l'essència de TR3C3 a Miami Platja: cafè d'especialitat, producte mediterrani, tècnica barista i una hospitalitat càlida i sense presses." },
    contact: { title: "Ubicació, horari i contacte a Miami Platja | TR3C3", description: "Troba TR3C3 a Miami Platja, consulta l'horari, truca al restaurant o obre la ruta exacta a Google Maps per venir a gaudir del cafè i el brunch." },
  },
  en: {
    home: { title: "TR3C3 | Specialty coffee, brunch and dinner in Miami Platja", description: "Specialty coffee in Miami Platja, breakfast, brunch and Mediterranean dinner. Discover TR3C3 from the first coffee to the last glass." },
    menu: { title: "Brunch, coffee and cocktail menu in Miami Platja | TR3C3", description: "Explore the TR3C3 menu in Miami Platja: breakfast, brunch, lunch, dinner, specialty coffee, cold drinks, cocktails and wines." },
    essence: { title: "Our essence | Coffee, produce and hospitality at TR3C3", description: "Discover the essence of TR3C3 in Miami Platja: specialty coffee, Mediterranean produce, barista craft and warm, unhurried hospitality." },
    contact: { title: "Location, hours and contact in Miami Platja | TR3C3", description: "Find TR3C3 in Miami Platja, check opening hours, call the restaurant or open the exact Google Maps route for specialty coffee and brunch." },
  },
  fr: {
    home: { title: "TR3C3 | Café de spécialité, brunch et dîner à Miami Platja", description: "Café de spécialité à Miami Platja, petit-déjeuner, brunch et dîner méditerranéen. Découvrez TR3C3 du premier café au dernier verre." },
    menu: { title: "Carte brunch, cafés et cocktails à Miami Platja | TR3C3", description: "Découvrez la carte de TR3C3 à Miami Platja : petit-déjeuner, brunch, déjeuner, dîner, café de spécialité, boissons fraîches, cocktails et vins." },
    essence: { title: "Notre essence | Café, produit et hospitalité chez TR3C3", description: "Découvrez l'essence de TR3C3 à Miami Platja : café de spécialité, produit méditerranéen, savoir-faire barista et hospitalité chaleureuse." },
    contact: { title: "Adresse, horaires et contact à Miami Platja | TR3C3", description: "Trouvez TR3C3 à Miami Platja, consultez les horaires, appelez le restaurant ou ouvrez l'itinéraire exact dans Google Maps." },
  },
  de: {
    home: { title: "TR3C3 | Specialty Coffee, Brunch und Dinner in Miami Platja", description: "Specialty Coffee in Miami Platja, Frühstück, Brunch und mediterranes Abendessen. Entdecke TR3C3 vom ersten Kaffee bis zum letzten Glas." },
    menu: { title: "Brunch-, Kaffee- und Cocktailkarte in Miami Platja | TR3C3", description: "Entdecke die TR3C3 Karte in Miami Platja: Frühstück, Brunch, Mittagessen, Abendessen, Specialty Coffee, kalte Getränke, Cocktails und Wein." },
    essence: { title: "Unsere Essenz | Kaffee, Produkt und Gastlichkeit bei TR3C3", description: "Entdecke die Essenz von TR3C3 in Miami Platja: Specialty Coffee, mediterrane Produkte, Barista-Handwerk und herzliche Gastlichkeit." },
    contact: { title: "Adresse, Öffnungszeiten und Kontakt in Miami Platja | TR3C3", description: "Finde TR3C3 in Miami Platja, prüfe die Öffnungszeiten, rufe das Restaurant an oder öffne die genaue Route in Google Maps." },
  },
  zh: {
    home: { title: "TR3C3 | Miami Platja 精品咖啡、早午餐与晚餐", description: "Miami Platja 精品咖啡、早餐、早午餐与地中海晚餐。从第一杯咖啡到最后一杯酒，全天体验 TR3C3。" },
    menu: { title: "TR3C3 菜单 | Miami Platja 早午餐、咖啡与鸡尾酒", description: "查看 TR3C3 Miami Platja 菜单：早餐、早午餐、午餐、晚餐、精品咖啡、冷饮、鸡尾酒与葡萄酒。" },
    essence: { title: "我们的本质 | TR3C3 咖啡、食材与待客之道", description: "探索 Miami Platja TR3C3 的本质：精品咖啡、地中海食材、咖啡师技艺与温暖从容的待客体验。" },
    contact: { title: "TR3C3 Miami Platja | 地址、营业时间与联系方式", description: "查找 TR3C3 在 Miami Platja 的地址和营业时间，致电餐厅，或通过 Google 地图打开准确路线。" },
  },
  nl: {
    home: { title: "TR3C3 | Specialty coffee, brunch en diner in Miami Platja", description: "Specialty coffee in Miami Platja, ontbijt, brunch en mediterraan diner. Ontdek TR3C3 van de eerste koffie tot het laatste glas." },
    menu: { title: "Brunch-, koffie- en cocktailmenu in Miami Platja | TR3C3", description: "Bekijk het TR3C3-menu in Miami Platja: ontbijt, brunch, lunch, diner, specialty coffee, koude dranken, cocktails en wijn." },
    essence: { title: "Onze essentie | Koffie, product en gastvrijheid bij TR3C3", description: "Ontdek de essentie van TR3C3 in Miami Platja: specialty coffee, mediterrane producten, baristavakmanschap en warme gastvrijheid." },
    contact: { title: "Locatie, openingstijden en contact in Miami Platja | TR3C3", description: "Vind TR3C3 in Miami Platja, bekijk de openingstijden, bel het restaurant of open de exacte route in Google Maps." },
  },
  it: {
    home: { title: "TR3C3 | Caffè specialty, brunch e cena a Miami Platja", description: "Caffè specialty a Miami Platja, colazione, brunch e cena mediterranea. Scopri TR3C3 dal primo caffè all’ultimo calice." },
    menu: { title: "Menu brunch, caffè e cocktail a Miami Platja | TR3C3", description: "Scopri il menu TR3C3 a Miami Platja: colazione, brunch, pranzo, cena, caffè specialty, bevande fredde, cocktail e vini." },
    essence: { title: "La nostra essenza | Caffè, prodotto e ospitalità TR3C3", description: "Scopri l'essenza di TR3C3 a Miami Platja: caffè specialty, prodotto mediterraneo, tecnica barista e un'ospitalità calda e rilassata." },
    contact: { title: "Posizione, orari e contatti a Miami Platja | TR3C3", description: "Trova TR3C3 a Miami Platja, consulta gli orari, chiama il ristorante o apri il percorso esatto su Google Maps." },
  },
};

export const breadcrumbLabels: Record<Language, { home: string; menu: string; essence: string; contact: string }> = {
  es: { home: "Inicio", menu: "Carta", essence: "Nuestra Esencia", contact: "Contacto y ubicación" },
  ca: { home: "Inici", menu: "Carta", essence: "La Nostra Essència", contact: "Contacte i ubicació" },
  en: { home: "Home", menu: "Menu", essence: "Our Essence", contact: "Contact and location" },
  fr: { home: "Accueil", menu: "Carte", essence: "Notre Essence", contact: "Contact et adresse" },
  de: { home: "Start", menu: "Karte", essence: "Unsere Essenz", contact: "Kontakt und Adresse" },
  zh: { home: "首页", menu: "菜单", essence: "我们的本质", contact: "联系与地址" },
  nl: { home: "Home", menu: "Menu", essence: "Onze Essentie", contact: "Contact en locatie" },
  it: { home: "Home", menu: "Menu", essence: "La Nostra Essenza", contact: "Contatti e posizione" },
};

export const getPageSeo = (lang: Language, page: PageKey) => seoCopy[lang][page];

export const getMenuSectionSeo = (lang: Language, sectionTitle: string, lead: string) => {
  const titles: Record<Language, string> = {
    es: `${sectionTitle} en Miami Platja | Carta TR3C3`,
    ca: `${sectionTitle} a Miami Platja | Carta TR3C3`,
    en: `${sectionTitle} in Miami Platja | TR3C3 Menu`,
    fr: `${sectionTitle} à Miami Platja | Carte TR3C3`,
    de: `${sectionTitle} in Miami Platja | TR3C3 Karte`,
    zh: `TR3C3 ${sectionTitle} | Miami Platja 菜单`,
    nl: `${sectionTitle} in Miami Platja | TR3C3 menu`,
    it: `${sectionTitle} a Miami Platja | Menu TR3C3`,
  };
  const suffixes: Record<Language, string> = {
    es: "Consulta la selección actual de TR3C3 en Miami Platja.",
    ca: "Consulta la selecció actual de TR3C3 a Miami Platja.",
    en: "Explore the current TR3C3 selection in Miami Platja.",
    fr: "Découvrez la sélection actuelle de TR3C3 à Miami Platja.",
    de: "Entdecke die aktuelle Auswahl von TR3C3 in Miami Platja.",
    zh: "查看 TR3C3 在 Miami Platja 的当前精选菜单。",
    nl: "Bekijk de actuele selectie van TR3C3 in Miami Platja.",
    it: "Scopri la selezione attuale di TR3C3 a Miami Platja.",
  };
  return { title: titles[lang], description: `${lead} ${suffixes[lang]}` };
};
