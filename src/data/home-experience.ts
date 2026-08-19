import type { Language } from "../i18n/config";

type CoffeePrinciple = {
  title: string;
  text: string;
};

type DayMoment = {
  label: string;
  title: string;
  text: string;
  cta: string;
  alt: string;
};

export type HomeExperienceCopy = {
  coffee: {
    kicker: string;
    title: string;
    lead: string;
    difference: string;
    quote: string;
    craftLine: string;
    coffeeLabel: string;
    milkLabel: string;
    coffeeAlt: string;
    milkAlt: string;
    cta: string;
    principles: CoffeePrinciple[];
  };
  day: {
    kicker: string;
    title: string;
    lead: string;
    statusLabel: string;
    breakfastNow: string;
    middayNow: string;
    brunchNow: string;
    dinnerNow: string;
    kitchenClosed: string;
    closedBefore: string;
    closedAfter: string;
    venueHoursLabel: string;
    breakfastService: string;
    brunchService: string;
    dinnerService: string;
    moments: [DayMoment, DayMoment, DayMoment];
  };
  menu: {
    kicker: string;
    title: string;
    lead: string;
    cta: string;
  };
};

export const homeExperienceCopy: Record<Language, HomeExperienceCopy> = {
  es: {
    coffee: {
      kicker: "Café de especialidad en Miami Platja",
      title: "El café no es un complemento. Es el comienzo.",
      lead: "Seleccionamos cafés con identidad, ajustamos cada extracción con precisión y tratamos cada taza como una receta. Del origen del grano a la textura de la leche, cada decisión tiene un motivo.",
      difference: "Frente a un café convencional, el café de especialidad busca trazabilidad, equilibrio y una lectura limpia de su aroma, dulzor, acidez y cuerpo.",
      quote: "Una buena taza no sucede por casualidad: se construye, variable a variable.",
      craftLine: "Espresso · Cappuccino · Latte · Filtro · Bebidas frías",
      coffeeLabel: "Origen & extracción",
      milkLabel: "Textura & temperatura",
      coffeeAlt: "Preparación de café de especialidad con una extracción precisa en TR3C3 Miami Platja",
      milkAlt: "Arte latte y leche texturizada por el barista de TR3C3",
      cta: "Conocer nuestro café",
      principles: [
        { title: "Origen", text: "Cafés de calidad seleccionados por su trazabilidad, carácter y perfil en taza." },
        { title: "Extracción", text: "Molienda, tiempo, temperatura y proporción ajustados para cada preparación." },
        { title: "Leche", text: "Texturizada con brillo, dulzor y la temperatura justa para una sensación cremosa." },
        { title: "Barista", text: "Técnica, criterio y consistencia detrás de cada espresso, latte o bebida fría." },
      ],
    },
    day: {
      kicker: "TR3C3 · Todo el día",
      title: "Una mesa para cada momento del día.",
      lead: "La luz, la carta y el ritmo evolucionan desde el primer café hasta la cena. Tres momentos distintos, unidos por el producto, el Mediterráneo y una hospitalidad sin prisa.",
      statusLabel: "Servicio ahora",
      breakfastNow: "Ahora servimos desayunos y brunch.",
      middayNow: "Ahora servimos nuestra carta de mediodía.",
      brunchNow: "Servicio de desayunos y brunch disponible.",
      dinnerNow: "Esta noche, cena en TR3C3.",
      kitchenClosed: "El local sigue abierto; la cocina ha finalizado por hoy.",
      closedBefore: "Estamos cerrados. El próximo servicio empieza hoy a las 09:00.",
      closedAfter: "Estamos cerrados. El próximo servicio empieza mañana a las 09:00.",
      venueHoursLabel: "Horario del local",
      breakfastService: "Desayuno",
      brunchService: "Brunch",
      dinnerService: "Cena",
      moments: [
        { label: "Desayuno", title: "La mañana empieza despacio.", text: "Café recién preparado, tostadas, dulces y desayunos hechos al momento con la calma que merece el primer momento del día.", cta: "Descubrir desayunos", alt: "Desayuno con café de especialidad y bollería servido con luz natural en TR3C3" },
        { label: "Brunch", title: "El punto de encuentro.", text: "Recetas creativas, producto fresco, propuestas dulces y saladas, matcha y bebidas frías para disfrutar sin mirar el reloj.", cta: "Ver la carta de brunch", alt: "Mesa de brunch con platos dulces y salados en TR3C3 Miami Platja" },
        { label: "Cena", title: "Cuando cae la tarde, cambia el ritmo.", text: "Platos para compartir, sabores mediterráneos, vinos y cócteles en una atmósfera más íntima. La noche tiene su propia carta.", cta: "Descubrir nuestras cenas", alt: "Mesa preparada para una cena mediterránea en TR3C3 Miami Platja" },
      ],
    },
    menu: { kicker: "Carta editorial", title: "Del primer café a la última copa.", lead: "Desayunos, brunch, platos para compartir, vinos y cócteles: una carta que cambia de ritmo contigo.", cta: "Descubrir la carta" },
  },
  ca: {
    coffee: {
      kicker: "Cafè d’especialitat a Miami Platja",
      title: "El cafè no és un complement. És el començament.",
      lead: "Seleccionem cafès amb identitat, ajustem cada extracció amb precisió i tractem cada tassa com una recepta. De l’origen del gra a la textura de la llet, cada decisió té un motiu.",
      difference: "Davant d’un cafè convencional, el cafè d’especialitat busca traçabilitat, equilibri i una lectura neta de l’aroma, la dolçor, l’acidesa i el cos.",
      quote: "Una bona tassa no passa per casualitat: es construeix, variable a variable.",
      craftLine: "Espresso · Cappuccino · Latte · Filtre · Begudes fredes",
      coffeeLabel: "Origen i extracció",
      milkLabel: "Textura i temperatura",
      coffeeAlt: "Preparació de cafè d’especialitat amb una extracció precisa a TR3C3 Miami Platja",
      milkAlt: "Latte art i llet texturitzada pel barista de TR3C3",
      cta: "Conèixer el nostre cafè",
      principles: [
        { title: "Origen", text: "Cafès de qualitat seleccionats per la seva traçabilitat, caràcter i perfil en tassa." },
        { title: "Extracció", text: "Mòlta, temps, temperatura i proporció ajustats per a cada preparació." },
        { title: "Llet", text: "Texturitzada amb brillantor, dolçor i la temperatura justa per a una sensació cremosa." },
        { title: "Barista", text: "Tècnica, criteri i consistència darrere de cada espresso, latte o beguda freda." },
      ],
    },
    day: {
      kicker: "TR3C3 · Tot el dia",
      title: "Una taula per a cada moment del dia.",
      lead: "La llum, la carta i el ritme evolucionen des del primer cafè fins al sopar. Tres moments diferents, units pel producte, la Mediterrània i una hospitalitat sense presses.",
      statusLabel: "Servei ara",
      breakfastNow: "Ara servim esmorzars i brunch.", middayNow: "Ara servim la nostra carta de migdia.", brunchNow: "Servei d’esmorzars i brunch disponible.", dinnerNow: "Aquesta nit, sopar a TR3C3.", kitchenClosed: "El local continua obert; la cuina ha finalitzat per avui.", closedBefore: "Som tancats. El pròxim servei comença avui a les 09:00.", closedAfter: "Som tancats. El pròxim servei comença demà a les 09:00.", venueHoursLabel: "Horari del local", breakfastService: "Esmorzar", brunchService: "Brunch", dinnerService: "Sopar",
      moments: [
        { label: "Esmorzar", title: "El matí comença a poc a poc.", text: "Cafè acabat de preparar, torrades, dolços i esmorzars fets al moment amb la calma que mereix el primer moment del dia.", cta: "Descobrir els esmorzars", alt: "Esmorzar amb cafè d’especialitat i brioixeria amb llum natural a TR3C3" },
        { label: "Brunch", title: "El punt de trobada.", text: "Receptes creatives, producte fresc, propostes dolces i salades, matcha i begudes fredes per gaudir sense mirar el rellotge.", cta: "Veure la carta de brunch", alt: "Taula de brunch amb plats dolços i salats a TR3C3 Miami Platja" },
        { label: "Sopar", title: "Quan cau la tarda, canvia el ritme.", text: "Plats per compartir, sabors mediterranis, vins i còctels en una atmosfera més íntima. La nit té la seva pròpia carta.", cta: "Descobrir els nostres sopars", alt: "Taula preparada per a un sopar mediterrani a TR3C3 Miami Platja" },
      ],
    },
    menu: { kicker: "Carta editorial", title: "Del primer cafè a l’última copa.", lead: "Esmorzars, brunch, plats per compartir, vins i còctels: una carta que canvia de ritme amb tu.", cta: "Descobrir la carta" },
  },
  en: {
    coffee: {
      kicker: "Specialty coffee in Miami Platja",
      title: "Coffee is not an extra. It is where everything begins.",
      lead: "We choose coffees with identity, dial in every extraction precisely and treat each cup as a recipe. From the origin of the bean to the texture of the milk, every decision has a purpose.",
      difference: "Unlike conventional coffee, specialty coffee values traceability, balance and a clear expression of aroma, sweetness, acidity and body.",
      quote: "A great cup never happens by chance. It is built, one variable at a time.",
      craftLine: "Espresso · Cappuccino · Latte · Filter · Cold drinks",
      coffeeLabel: "Origin & extraction",
      milkLabel: "Texture & temperature",
      coffeeAlt: "Precise specialty coffee extraction at TR3C3 in Miami Platja",
      milkAlt: "Latte art and carefully textured milk by a TR3C3 barista",
      cta: "Discover our coffee",
      principles: [
        { title: "Origin", text: "Quality coffees chosen for traceability, character and a distinctive cup profile." },
        { title: "Extraction", text: "Grind, time, temperature and ratio adjusted for every preparation." },
        { title: "Milk", text: "Textured for shine, sweetness and the right temperature for a creamy finish." },
        { title: "Barista", text: "Technique, judgement and consistency behind every espresso, latte and cold drink." },
      ],
    },
    day: {
      kicker: "TR3C3 · All day",
      title: "A table for every moment of the day.",
      lead: "The light, menu and pace evolve from the first coffee to dinner. Three distinct moments connected by produce, the Mediterranean and unhurried hospitality.",
      statusLabel: "Serving now", breakfastNow: "Breakfast and brunch are now being served.", middayNow: "Our midday menu is now being served.", brunchNow: "Breakfast and brunch service is available.", dinnerNow: "Tonight, dinner at TR3C3.", kitchenClosed: "The venue is still open; the kitchen has finished for today.", closedBefore: "We are closed. The next service starts today at 09:00.", closedAfter: "We are closed. The next service starts tomorrow at 09:00.", venueHoursLabel: "Venue hours", breakfastService: "Breakfast", brunchService: "Brunch", dinnerService: "Dinner",
      moments: [
        { label: "Breakfast", title: "The morning starts slowly.", text: "Freshly made coffee, toast, pastries and breakfasts prepared to order, with the calm the first moment of the day deserves.", cta: "Discover breakfast", alt: "Breakfast with specialty coffee and pastries in natural light at TR3C3" },
        { label: "Brunch", title: "The meeting point.", text: "Creative recipes, fresh produce, sweet and savoury plates, matcha and cold drinks to enjoy without watching the clock.", cta: "View the brunch menu", alt: "Brunch table with sweet and savoury plates at TR3C3 Miami Platja" },
        { label: "Dinner", title: "As evening falls, the pace changes.", text: "Sharing plates, Mediterranean flavours, wines and cocktails in a more intimate atmosphere. Night has a menu of its own.", cta: "Discover our dinners", alt: "Table set for Mediterranean dinner at TR3C3 Miami Platja" },
      ],
    },
    menu: { kicker: "Editorial menu", title: "From first coffee to last glass.", lead: "Breakfast, brunch, sharing plates, wines and cocktails: a menu that changes pace with you.", cta: "Discover the menu" },
  },
  fr: {
    coffee: {
      kicker: "Café de spécialité à Miami Platja", title: "Le café n’est pas un supplément. C’est le début.", lead: "Nous choisissons des cafés de caractère, réglons chaque extraction avec précision et traitons chaque tasse comme une recette. De l’origine du grain à la texture du lait, chaque décision a un sens.", difference: "À la différence d’un café conventionnel, le café de spécialité recherche la traçabilité, l’équilibre et une expression nette des arômes, de la douceur, de l’acidité et du corps.", quote: "Une grande tasse ne doit rien au hasard : elle se construit, variable après variable.", craftLine: "Espresso · Cappuccino · Latte · Filtre · Boissons froides", coffeeLabel: "Origine et extraction", milkLabel: "Texture et température", coffeeAlt: "Extraction précise d’un café de spécialité chez TR3C3 à Miami Platja", milkAlt: "Latte art et lait texturé par le barista de TR3C3", cta: "Découvrir notre café",
      principles: [
        { title: "Origine", text: "Des cafés de qualité choisis pour leur traçabilité, leur caractère et leur profil en tasse." }, { title: "Extraction", text: "Mouture, temps, température et ratio ajustés pour chaque préparation." }, { title: "Lait", text: "Texturé pour offrir brillance, douceur et température juste, avec un fini crémeux." }, { title: "Barista", text: "Technique, jugement et régularité derrière chaque espresso, latte ou boisson froide." },
      ],
    },
    day: {
      kicker: "TR3C3 · Toute la journée", title: "Une table pour chaque moment de la journée.", lead: "La lumière, la carte et le rythme évoluent du premier café jusqu’au dîner. Trois moments différents, unis par le produit, la Méditerranée et une hospitalité sans hâte.", statusLabel: "Service en cours", breakfastNow: "Nous servons actuellement le petit-déjeuner et le brunch.", middayNow: "Nous servons actuellement notre carte du midi.", brunchNow: "Le service petit-déjeuner et brunch est disponible.", dinnerNow: "Ce soir, dîner chez TR3C3.", kitchenClosed: "L’établissement reste ouvert ; la cuisine a terminé son service.", closedBefore: "Nous sommes fermés. Le prochain service commence aujourd’hui à 09:00.", closedAfter: "Nous sommes fermés. Le prochain service commence demain à 09:00.", venueHoursLabel: "Horaires", breakfastService: "Petit-déjeuner", brunchService: "Brunch", dinnerService: "Dîner",
      moments: [
        { label: "Petit-déjeuner", title: "La matinée commence doucement.", text: "Café fraîchement préparé, tartines, douceurs et petits-déjeuners minute, dans le calme que mérite le premier moment du jour.", cta: "Découvrir les petits-déjeuners", alt: "Petit-déjeuner avec café de spécialité et viennoiseries chez TR3C3" }, { label: "Brunch", title: "Le point de rencontre.", text: "Recettes créatives, produits frais, propositions sucrées et salées, matcha et boissons froides à savourer sans regarder l’heure.", cta: "Voir la carte du brunch", alt: "Table de brunch sucrée et salée chez TR3C3 Miami Platja" }, { label: "Dîner", title: "Le soir venu, le rythme change.", text: "Assiettes à partager, saveurs méditerranéennes, vins et cocktails dans une atmosphère plus intime. La nuit a sa propre carte.", cta: "Découvrir nos dîners", alt: "Table dressée pour un dîner méditerranéen chez TR3C3 Miami Platja" },
      ],
    },
    menu: { kicker: "Carte éditoriale", title: "Du premier café au dernier verre.", lead: "Petit-déjeuner, brunch, assiettes à partager, vins et cocktails : une carte qui change de rythme avec vous.", cta: "Découvrir la carte" },
  },
  de: {
    coffee: {
      kicker: "Specialty Coffee in Miami Platja", title: "Kaffee ist keine Nebensache. Er ist der Anfang.", lead: "Wir wählen charaktervolle Kaffees, stellen jede Extraktion präzise ein und behandeln jede Tasse wie ein Rezept. Vom Ursprung der Bohne bis zur Textur der Milch hat jede Entscheidung einen Grund.", difference: "Anders als konventioneller Kaffee steht Specialty Coffee für Rückverfolgbarkeit, Balance und ein klares Zusammenspiel von Aroma, Süße, Säure und Körper.", quote: "Eine besondere Tasse entsteht nicht zufällig. Sie wird Variable für Variable aufgebaut.", craftLine: "Espresso · Cappuccino · Latte · Filter · Kalte Getränke", coffeeLabel: "Herkunft & Extraktion", milkLabel: "Textur & Temperatur", coffeeAlt: "Präzise Specialty-Coffee-Extraktion bei TR3C3 in Miami Platja", milkAlt: "Latte Art und fein texturierte Milch von einem TR3C3-Barista", cta: "Unseren Kaffee entdecken",
      principles: [
        { title: "Herkunft", text: "Qualitätskaffees, gewählt nach Rückverfolgbarkeit, Charakter und Tassenprofil." }, { title: "Extraktion", text: "Mahlgrad, Zeit, Temperatur und Verhältnis für jede Zubereitung präzise abgestimmt." }, { title: "Milch", text: "Für Glanz, Süße und die richtige Temperatur fein texturiert." }, { title: "Barista", text: "Technik, Urteilsvermögen und Konstanz hinter jedem Espresso, Latte und Kaltgetränk." },
      ],
    },
    day: {
      kicker: "TR3C3 · Den ganzen Tag", title: "Ein Tisch für jeden Moment des Tages.", lead: "Licht, Karte und Rhythmus verändern sich vom ersten Kaffee bis zum Abendessen. Drei unterschiedliche Momente, verbunden durch Produkt, Mittelmeer und entspannte Gastfreundschaft.", statusLabel: "Jetzt im Service", breakfastNow: "Jetzt servieren wir Frühstück und Brunch.", middayNow: "Jetzt servieren wir unsere Mittagskarte.", brunchNow: "Frühstück und Brunch sind jetzt verfügbar.", dinnerNow: "Heute Abend: Dinner im TR3C3.", kitchenClosed: "Das Lokal ist noch geöffnet; die Küche ist für heute geschlossen.", closedBefore: "Wir haben geschlossen. Der nächste Service beginnt heute um 09:00 Uhr.", closedAfter: "Wir haben geschlossen. Der nächste Service beginnt morgen um 09:00 Uhr.", venueHoursLabel: "Öffnungszeiten", breakfastService: "Frühstück", brunchService: "Brunch", dinnerService: "Abendessen",
      moments: [
        { label: "Frühstück", title: "Der Morgen beginnt langsam.", text: "Frisch zubereiteter Kaffee, Toasts, Gebäck und Frühstück à la minute – mit der Ruhe, die der erste Moment des Tages verdient.", cta: "Frühstück entdecken", alt: "Frühstück mit Specialty Coffee und Gebäck im natürlichen Licht bei TR3C3" }, { label: "Brunch", title: "Der Treffpunkt.", text: "Kreative Rezepte, frische Produkte, Süßes und Herzhaftes, Matcha und kalte Getränke – ohne auf die Uhr zu schauen.", cta: "Brunchkarte ansehen", alt: "Brunchtisch mit süßen und herzhaften Gerichten bei TR3C3 Miami Platja" }, { label: "Abendessen", title: "Am Abend ändert sich der Rhythmus.", text: "Teller zum Teilen, mediterrane Aromen, Wein und Cocktails in einer intimeren Atmosphäre. Die Nacht hat ihre eigene Karte.", cta: "Unser Abendessen entdecken", alt: "Gedeckter Tisch für ein mediterranes Abendessen bei TR3C3 Miami Platja" },
      ],
    },
    menu: { kicker: "Editoriale Karte", title: "Vom ersten Kaffee bis zum letzten Glas.", lead: "Frühstück, Brunch, Teller zum Teilen, Wein und Cocktails: eine Karte, die ihren Rhythmus mit dir verändert.", cta: "Karte entdecken" },
  },
  zh: {
    coffee: {
      kicker: "Miami Platja 精品咖啡", title: "咖啡不是配角，而是一切的开始。", lead: "我们选择有个性的咖啡豆，精确调整每一次萃取，并像对待一道配方一样对待每杯咖啡。从产地到牛奶质感，每个决定都有原因。", difference: "精品咖啡不同于普通咖啡，它重视可追溯性、平衡，以及香气、甜感、酸度和醇厚度的清晰呈现。", quote: "好咖啡从不靠偶然，而是由每一个变量共同成就。", craftLine: "浓缩 · 卡布奇诺 · 拿铁 · 手冲 · 冷饮", coffeeLabel: "产地与萃取", milkLabel: "质感与温度", coffeeAlt: "TR3C3 Miami Platja 精准萃取精品咖啡", milkAlt: "TR3C3 咖啡师制作拉花与细腻奶泡", cta: "了解我们的咖啡",
      principles: [
        { title: "产地", text: "以可追溯性、个性和杯中风味为标准选择优质咖啡。" }, { title: "萃取", text: "为每种做法精确调整研磨、时间、温度和比例。" }, { title: "牛奶", text: "细腻打发，呈现光泽、甜感与恰到好处的温度。" }, { title: "咖啡师", text: "每杯浓缩、拿铁与冷饮背后都有技术、判断与稳定性。" },
      ],
    },
    day: {
      kicker: "TR3C3 · 全天体验", title: "一天中的每个时刻，都有一张合适的餐桌。", lead: "从第一杯咖啡到晚餐，光线、菜单与节奏不断变化。三个不同的时刻，由食材、地中海风味与从容待客相连。", statusLabel: "当前服务", breakfastNow: "现在供应早餐与早午餐。", middayNow: "现在供应午间菜单。", brunchNow: "早餐与早午餐服务现已开放。", dinnerNow: "今晚，在 TR3C3 享用晚餐。", kitchenClosed: "餐厅仍开放，今日厨房服务已结束。", closedBefore: "我们尚未营业，下一服务时段今天 09:00 开始。", closedAfter: "我们已结束营业，下一服务时段明天 09:00 开始。", venueHoursLabel: "营业时间", breakfastService: "早餐", brunchService: "早午餐", dinnerService: "晚餐",
      moments: [
        { label: "早餐", title: "让清晨慢慢开始。", text: "新鲜制作的咖啡、吐司、甜点与现点现做的早餐，给一天的第一个时刻应有的从容。", cta: "探索早餐", alt: "TR3C3 自然光下的精品咖啡与烘焙早餐" }, { label: "早午餐", title: "相聚的好地方。", text: "创意菜式、新鲜食材、甜咸选择、抹茶与冷饮，让你不必看时间地享受。", cta: "查看早午餐菜单", alt: "TR3C3 Miami Platja 甜咸菜式早午餐餐桌" }, { label: "晚餐", title: "傍晚降临，节奏随之改变。", text: "分享小盘、地中海风味、葡萄酒与鸡尾酒，营造更私密的氛围。夜晚有属于自己的菜单。", cta: "探索我们的晚餐", alt: "TR3C3 Miami Platja 地中海晚餐餐桌" },
      ],
    },
    menu: { kicker: "全天菜单", title: "从第一杯咖啡到最后一杯酒。", lead: "早餐、早午餐、分享菜、葡萄酒与鸡尾酒：一份随你改变节奏的菜单。", cta: "探索菜单" },
  },
  nl: {
    coffee: {
      kicker: "Specialty coffee in Miami Platja", title: "Koffie is geen extra. Het is het begin.", lead: "We kiezen koffie met karakter, stellen elke extractie precies af en behandelen elke kop als een recept. Van de herkomst van de boon tot de textuur van de melk: elke keuze heeft een reden.", difference: "Specialty coffee draait, anders dan gewone koffie, om traceerbaarheid, balans en een heldere uitdrukking van aroma, zoetheid, aciditeit en body.", quote: "Een bijzondere kop ontstaat niet toevallig. Hij wordt variabele voor variabele opgebouwd.", craftLine: "Espresso · Cappuccino · Latte · Filter · Koude dranken", coffeeLabel: "Herkomst & extractie", milkLabel: "Textuur & temperatuur", coffeeAlt: "Nauwkeurige specialty-coffee-extractie bij TR3C3 in Miami Platja", milkAlt: "Latte art en zorgvuldig opgeschuimde melk door een TR3C3-barista", cta: "Ontdek onze koffie",
      principles: [
        { title: "Herkomst", text: "Kwaliteitskoffie gekozen om traceerbaarheid, karakter en een eigen smaakprofiel." }, { title: "Extractie", text: "Maling, tijd, temperatuur en verhouding afgestemd op elke bereiding." }, { title: "Melk", text: "Opgeschuimd voor glans, zoetheid en de juiste temperatuur met een romige afdronk." }, { title: "Barista", text: "Techniek, inzicht en consistentie achter elke espresso, latte en koude drank." },
      ],
    },
    day: {
      kicker: "TR3C3 · De hele dag", title: "Een tafel voor elk moment van de dag.", lead: "Licht, menu en ritme veranderen van de eerste koffie tot het diner. Drie verschillende momenten, verbonden door product, de Middellandse Zee en gastvrijheid zonder haast.", statusLabel: "Nu geserveerd", breakfastNow: "We serveren nu ontbijt en brunch.", middayNow: "We serveren nu onze lunchkaart.", brunchNow: "Ontbijt en brunch zijn nu beschikbaar.", dinnerNow: "Vanavond: diner bij TR3C3.", kitchenClosed: "De zaak is nog open; de keuken is voor vandaag gesloten.", closedBefore: "We zijn gesloten. De volgende service begint vandaag om 09:00.", closedAfter: "We zijn gesloten. De volgende service begint morgen om 09:00.", venueHoursLabel: "Openingstijden", breakfastService: "Ontbijt", brunchService: "Brunch", dinnerService: "Diner",
      moments: [
        { label: "Ontbijt", title: "De ochtend begint rustig.", text: "Vers gezette koffie, toast, gebak en ontbijt dat à la minute wordt bereid, met de rust die het eerste moment van de dag verdient.", cta: "Ontdek het ontbijt", alt: "Ontbijt met specialty coffee en gebak in natuurlijk licht bij TR3C3" }, { label: "Brunch", title: "Het ontmoetingspunt.", text: "Creatieve recepten, verse producten, zoete en hartige gerechten, matcha en koude dranken om zonder klok van te genieten.", cta: "Bekijk het brunchmenu", alt: "Brunchtafel met zoete en hartige gerechten bij TR3C3 Miami Platja" }, { label: "Diner", title: "Als de avond valt, verandert het ritme.", text: "Gerechten om te delen, mediterrane smaken, wijn en cocktails in een intiemere sfeer. De avond heeft een eigen menu.", cta: "Ontdek onze diners", alt: "Tafel gedekt voor een mediterraan diner bij TR3C3 Miami Platja" },
      ],
    },
    menu: { kicker: "Editoriaal menu", title: "Van de eerste koffie tot het laatste glas.", lead: "Ontbijt, brunch, gerechten om te delen, wijn en cocktails: een menu dat met je mee van ritme verandert.", cta: "Ontdek het menu" },
  },
  it: {
    coffee: {
      kicker: "Caffè specialty a Miami Platja", title: "Il caffè non è un complemento. È l’inizio.", lead: "Scegliamo caffè con identità, regoliamo ogni estrazione con precisione e trattiamo ogni tazza come una ricetta. Dall’origine del chicco alla texture del latte, ogni decisione ha un motivo.", difference: "A differenza del caffè convenzionale, lo specialty cerca tracciabilità, equilibrio e una lettura pulita di aroma, dolcezza, acidità e corpo.", quote: "Una grande tazza non nasce per caso: si costruisce, variabile dopo variabile.", craftLine: "Espresso · Cappuccino · Latte · Filtro · Bevande fredde", coffeeLabel: "Origine ed estrazione", milkLabel: "Texture e temperatura", coffeeAlt: "Estrazione precisa di caffè specialty da TR3C3 a Miami Platja", milkAlt: "Latte art e latte texturizzato dal barista di TR3C3", cta: "Conoscere il nostro caffè",
      principles: [
        { title: "Origine", text: "Caffè di qualità scelti per tracciabilità, carattere e profilo in tazza." }, { title: "Estrazione", text: "Macinatura, tempo, temperatura e proporzione regolati per ogni preparazione." }, { title: "Latte", text: "Texturizzato per ottenere lucentezza, dolcezza e la temperatura giusta." }, { title: "Barista", text: "Tecnica, giudizio e costanza dietro ogni espresso, latte e bevanda fredda." },
      ],
    },
    day: {
      kicker: "TR3C3 · Tutto il giorno", title: "Un tavolo per ogni momento della giornata.", lead: "La luce, il menu e il ritmo evolvono dal primo caffè alla cena. Tre momenti diversi, uniti dal prodotto, dal Mediterraneo e da un’ospitalità senza fretta.", statusLabel: "Servizio attuale", breakfastNow: "Ora serviamo colazione e brunch.", middayNow: "Ora serviamo il menu di mezzogiorno.", brunchNow: "Il servizio colazione e brunch è disponibile.", dinnerNow: "Questa sera, cena da TR3C3.", kitchenClosed: "Il locale è ancora aperto; la cucina ha terminato il servizio.", closedBefore: "Siamo chiusi. Il prossimo servizio inizia oggi alle 09:00.", closedAfter: "Siamo chiusi. Il prossimo servizio inizia domani alle 09:00.", venueHoursLabel: "Orari del locale", breakfastService: "Colazione", brunchService: "Brunch", dinnerService: "Cena",
      moments: [
        { label: "Colazione", title: "La mattina inizia con calma.", text: "Caffè appena preparato, toast, dolci e colazioni espresse, con la tranquillità che merita il primo momento della giornata.", cta: "Scopri le colazioni", alt: "Colazione con caffè specialty e pasticceria nella luce naturale da TR3C3" }, { label: "Brunch", title: "Il punto d’incontro.", text: "Ricette creative, prodotti freschi, proposte dolci e salate, matcha e bevande fredde da gustare senza guardare l’orologio.", cta: "Vedi il menu brunch", alt: "Tavola brunch con piatti dolci e salati da TR3C3 Miami Platja" }, { label: "Cena", title: "Quando scende la sera, cambia il ritmo.", text: "Piatti da condividere, sapori mediterranei, vini e cocktail in un’atmosfera più intima. La notte ha un menu tutto suo.", cta: "Scopri le nostre cene", alt: "Tavolo preparato per una cena mediterranea da TR3C3 Miami Platja" },
      ],
    },
    menu: { kicker: "Menu editoriale", title: "Dal primo caffè all’ultimo calice.", lead: "Colazione, brunch, piatti da condividere, vini e cocktail: un menu che cambia ritmo con te.", cta: "Scopri il menu" },
  },
};
