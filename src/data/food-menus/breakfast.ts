import { same, tx, type FoodMenuDefinition } from "./types";
import { SERVICE_HOURS } from "../../config/business";

const [morningService, afternoonService] = SERVICE_HOURS.breakfastBrunch;
const breakfastSchedule = `${morningService.opens}–${morningService.closes}`;
const afternoonSchedule = `${afternoonService.opens}–${afternoonService.closes}`;

export const breakfastMenu: FoodMenuDefinition = {
  id: "desayunos-brunch",
  title: tx("Desayunos y brunch", "Esmorzars i brunch", "Breakfast & brunch", "Petit-déjeuner & brunch", "Frühstück & Brunch", "早餐与早午餐", "Ontbijt & brunch", "Colazione & brunch"),
  kicker: tx("Mañana · Tarde", "Matí · Tarda", "Morning · Afternoon", "Matin · Après-midi", "Morgen · Nachmittag", "上午 · 下午", "Ochtend · Middag", "Mattina · Pomeriggio"),
  lead: tx("Sándwiches, tostadas de masa madre, dulces y bocados para disfrutar sin prisa.", "Entrepans, torrades de massa mare, dolços i mossegades per gaudir sense pressa.", "Sandwiches, sourdough toasts, sweets and bites to enjoy at your own pace.", "Sandwichs, tartines au levain, douceurs et petites bouchées à savourer sans hâte.", "Sandwiches, Sauerteigtoasts, Süßes und kleine Gerichte zum entspannten Genießen.", "三明治、酸面包吐司、甜点与小食，悠闲享用。", "Sandwiches, zuurdesemtoasts, zoetigheden en kleine gerechten om rustig van te genieten.", "Sandwich, toast di lievito madre, dolci e sfizi da gustare senza fretta."),
  schedule: tx(`${breakfastSchedule} y ${afternoonSchedule}`, `${breakfastSchedule} i ${afternoonSchedule}`, `${breakfastSchedule} and ${afternoonSchedule}`, `${breakfastSchedule} et ${afternoonSchedule}`, `${breakfastSchedule} und ${afternoonSchedule}`, `${breakfastSchedule}、${afternoonSchedule}`, `${breakfastSchedule} en ${afternoonSchedule}`, `${breakfastSchedule} e ${afternoonSchedule}`),
  image: "/images/brunch-table.webp",
  alt: tx("Mesa de desayunos y brunch de TR3C3", "Taula d'esmorzars i brunch de TR3C3", "TR3C3 breakfast and brunch table", "Table de petit-déjeuner et brunch de TR3C3", "Frühstücks- und Brunchtisch bei TR3C3", "TR3C3 早餐与早午餐餐桌", "Ontbijt- en brunchtafel van TR3C3", "Tavola per colazione e brunch di TR3C3"),
  categories: [
    {
      title: tx("Sándwiches", "Entrepans", "Sandwiches", "Sandwichs", "Sandwiches", "三明治", "Sandwiches", "Sandwich"),
      items: [
        {
          name: same("Green Bikini"), price: "11,90 €", badges: ["allDay"],
          description: tx("Espinacas, aguacate, queso edam, salsa pesto y mayonesa de espinacas.", "Espinacs, alvocat, formatge edam, salsa pesto i maionesa d'espinacs.", "Spinach, avocado, Edam cheese, pesto sauce and spinach mayonnaise.", "Épinards, avocat, edam, sauce pesto et mayonnaise aux épinards.", "Spinat, Avocado, Edamer, Pesto und Spinatmayonnaise.", "菠菜、牛油果、埃丹奶酪、青酱与菠菜蛋黄酱。", "Spinazie, avocado, edammer, pesto en spinaziemayonaise.", "Spinaci, avocado, formaggio edam, pesto e maionese agli spinaci."),
        },
        {
          name: same("Pulled Pork"), price: "11,90 €", badges: ["allDay"],
          description: tx("Carne de cerdo, edam, manzana asada y mayonesa de curry.", "Carn de porc, edam, poma rostida i maionesa de curri.", "Pulled pork, Edam, roasted apple and curry mayonnaise.", "Porc effiloché, edam, pomme rôtie et mayonnaise au curry.", "Pulled Pork, Edamer, Bratapfel und Currymayonnaise.", "手撕猪肉、埃丹奶酪、烤苹果与咖喱蛋黄酱。", "Pulled pork, edammer, geroosterde appel en currymayonaise.", "Maiale sfilacciato, edam, mela arrosto e maionese al curry."),
        },
        {
          name: tx("Trufado serrano", "Trufat serrà", "Serrano truffle", "Serrano truffé", "Serrano-Trüffel", "塞拉诺火腿松露三明治", "Serrano met truffel", "Serrano al tartufo"), price: "10,00 €",
          description: tx("Jamón serrano, edam y queso trufado.", "Pernil serrà, edam i formatge trufat.", "Serrano ham, Edam and truffle cheese.", "Jambon serrano, edam et fromage truffé.", "Serrano-Schinken, Edamer und Trüffelkäse.", "塞拉诺火腿、埃丹奶酪与松露奶酪。", "Serranoham, edammer en truffelkaas.", "Prosciutto serrano, edam e formaggio al tartufo."),
        },
        {
          name: tx("Trufado nórdico", "Trufat nòrdic", "Nordic truffle", "Nordique truffé", "Nordischer Trüffel", "北欧风味松露三明治", "Noords met truffel", "Nordico al tartufo"), price: "11,50 €",
          description: tx("Salmón, edam y queso trufado.", "Salmó, edam i formatge trufat.", "Salmon, Edam and truffle cheese.", "Saumon, edam et fromage truffé.", "Lachs, Edamer und Trüffelkäse.", "三文鱼、埃丹奶酪与松露奶酪。", "Zalm, edammer en truffelkaas.", "Salmone, edam e formaggio al tartufo."),
        },
        {
          name: same("Pastrami"), price: "14,90 €", badges: ["allDay"],
          description: tx("Pan payés, pastrami, edam, cebolla confitada, pepinillos y salsa TRECE.", "Pa de pagès, pastrami, edam, ceba confitada, cogombrets i salsa TRECE.", "Country bread, pastrami, Edam, confit onion, pickles and TRECE sauce.", "Pain de campagne, pastrami, edam, oignon confit, cornichons et sauce TRECE.", "Bauernbrot, Pastrami, Edamer, Zwiebelconfit, Gewürzgurken und TRECE-Sauce.", "乡村面包、熏牛肉、埃丹奶酪、油封洋葱、酸黄瓜与 TRECE 酱。", "Boerenbrood, pastrami, edammer, gekonfijte ui, augurk en TRECE-saus.", "Pane rustico, pastrami, edam, cipolla confit, cetriolini e salsa TRECE."),
        },
        {
          name: same("Supreme"), price: "7,90 €",
          description: tx("Croissant, queso brie, edam, jamón dulce, pepinillos, cebolla crujiente y salsa de mostaza.", "Croissant, formatge brie, edam, pernil dolç, cogombrets, ceba cruixent i salsa de mostassa.", "Croissant, Brie, Edam, cooked ham, pickles, crispy onion and mustard sauce.", "Croissant, brie, edam, jambon blanc, cornichons, oignon croustillant et sauce moutarde.", "Croissant, Brie, Edamer, Kochschinken, Gewürzgurken, Röstzwiebeln und Senfsauce.", "可颂、布里奶酪、埃丹奶酪、熟火腿、酸黄瓜、脆洋葱与芥末酱。", "Croissant, brie, edammer, gekookte ham, augurk, krokante ui en mosterdsaus.", "Croissant, brie, edam, prosciutto cotto, cetriolini, cipolla croccante e salsa alla senape."),
        },
        {
          name: tx("Bikini tradicional o serranito", "Bikini tradicional o serranito", "Classic bikini or serranito", "Bikini classique ou serranito", "Klassischer Bikini oder Serranito", "经典 Bikini 或 Serranito", "Klassieke bikini of serranito", "Bikini classico o serranito"), price: "5,00 €",
          description: tx("Pan polar con jamón y queso, o jamón serrano con brie.", "Pa polar amb pernil dolç i formatge, o pernil serrà amb brie.", "Soft flatbread with ham and cheese, or Serrano ham with Brie.", "Pain polaire au jambon et fromage, ou jambon serrano avec brie.", "Polarbröd mit Schinken und Käse oder Serrano-Schinken mit Brie.", "北欧软面包配火腿奶酪，或塞拉诺火腿配布里奶酪。", "Zacht platbrood met ham en kaas, of serranoham met brie.", "Pane polare con prosciutto e formaggio, oppure serrano con brie."),
        },
      ],
    },
    {
      title: tx("Pulgas y baguettinas", "Pulgues i baguetines", "Mini rolls & baguettes", "Petits pains & baguettes", "Mini-Brötchen & Baguettes", "迷你面包与法棍", "Mini-broodjes & baguettes", "Panini & baguette"),
      note: tx("Dos tamaños disponibles.", "Dues mides disponibles.", "Two sizes available.", "Deux tailles disponibles.", "In zwei Größen erhältlich.", "提供两种尺寸。", "Verkrijgbaar in twee maten.", "Disponibili in due formati."),
      items: [
        { name: tx("Ibérico", "Ibèric", "Iberian ham", "Ibérique", "Ibérico", "伊比利亚火腿", "Ibérico", "Ibérico"), price: "6,50 € / 10,50 €" },
        {
          name: tx("Embutido", "Embotit", "Deli filling", "Charcuterie", "Aufschnitt", "熟食夹馅", "Beleg", "Farcitura assortita"), price: "4,00 € / 7,00 €",
          description: tx("Queso, jamón serrano, jamón dulce o atún.", "Formatge, pernil serrà, pernil dolç o tonyina.", "Cheese, Serrano ham, cooked ham or tuna.", "Fromage, jambon serrano, jambon blanc ou thon.", "Käse, Serrano-Schinken, Kochschinken oder Thunfisch.", "奶酪、塞拉诺火腿、熟火腿或金枪鱼。", "Kaas, serranoham, gekookte ham of tonijn.", "Formaggio, prosciutto serrano, prosciutto cotto o tonno."),
        },
      ],
    },
    {
      title: tx("Bol de yogur", "Bol de iogurt", "Yogurt bowl", "Bol de yaourt", "Joghurt-Bowl", "酸奶碗", "Yoghurtbowl", "Bowl di yogurt"),
      items: [
        {
          name: tx("Bol de yogur", "Bol de iogurt", "Yogurt bowl", "Bol de yaourt", "Joghurt-Bowl", "酸奶碗", "Yoghurtbowl", "Bowl di yogurt"), price: "7,90 €",
          description: tx("Granola, fruta, mermelada y mantequilla de cacahuete.", "Granola, fruita, melmelada i mantega de cacauet.", "Granola, fruit, jam and peanut butter.", "Granola, fruits, confiture et beurre de cacahuète.", "Granola, Obst, Konfitüre und Erdnussbutter.", "格兰诺拉麦片、水果、果酱与花生酱。", "Granola, fruit, jam en pindakaas.", "Granola, frutta, confettura e burro di arachidi."),
        },
      ],
    },
    {
      title: tx("Tostada francesa", "Torrada francesa", "French toast", "Pain perdu", "French Toast", "法式吐司", "Wentelteefje", "French toast"),
      items: [
        {
          name: tx("Chocolate", "Xocolata", "Chocolate", "Chocolat", "Schokolade", "巧克力", "Chocolade", "Cioccolato"), price: "9,90 €",
          description: tx("Bomba de chocolate, almendras caramelizadas y helado de caramelo salado.", "Bomba de xocolata, ametlles caramel·litzades i gelat de caramel salat.", "Chocolate bomb, caramelised almonds and salted caramel ice cream.", "Bombe au chocolat, amandes caramélisées et glace au caramel salé.", "Schokoladenbombe, karamellisierte Mandeln und Salzkaramelleis.", "巧克力流心、焦糖杏仁与海盐焦糖冰淇淋。", "Chocoladebom, gekaramelliseerde amandelen en gezouten-karamelijs.", "Bomba al cioccolato, mandorle caramellate e gelato al caramello salato."),
        },
      ],
    },
    {
      title: tx("Tostadas de pan de masa madre", "Torrades de pa de massa mare", "Sourdough toasts", "Tartines au levain", "Sauerteigtoasts", "酸面包吐司", "Zuurdesemtoasts", "Toast di lievito madre"),
      items: [
        {
          name: same("Burrata"), price: "15,95 €", badges: ["allDay"],
          description: tx("Cremosos de aguacate, tomates cherry confitados, rúcula, aceitunas kalamata y mezcla de semillas.", "Cremosos d'alvocat, tomàquets cherry confitats, ruca, olives kalamata i barreja de llavors.", "Creamy avocado, confit cherry tomatoes, rocket, Kalamata olives and mixed seeds.", "Crémeux d'avocat, tomates cerises confites, roquette, olives Kalamata et mélange de graines.", "Avocadocreme, confierte Cherrytomaten, Rucola, Kalamata-Oliven und Saatenmix.", "牛油果酱、油封樱桃番茄、芝麻菜、卡拉马塔橄榄与混合籽。", "Avocadocrème, gekonfijte cherrytomaten, rucola, Kalamata-olijven en zadenmix.", "Crema di avocado, pomodorini confit, rucola, olive Kalamata e mix di semi."),
        },
        {
          name: tx("Ibérico al pesto", "Ibèric al pesto", "Ibérico with pesto", "Ibérique au pesto", "Ibérico mit Pesto", "伊比利亚火腿青酱吐司", "Ibérico met pesto", "Ibérico al pesto"), price: "11,95 €",
          description: tx("Tomate, salsa pesto y parmesano.", "Tomàquet, salsa pesto i parmesà.", "Tomato, pesto sauce and Parmesan.", "Tomate, sauce pesto et parmesan.", "Tomate, Pesto und Parmesan.", "番茄、青酱与帕玛森奶酪。", "Tomaat, pesto en Parmezaan.", "Pomodoro, pesto e parmigiano."),
        },
        {
          name: tx("Vegana", "Vegana", "Vegan", "Végane", "Vegan", "纯素", "Vegan", "Vegana"), price: "12,50 €", badges: ["allDay", "vegan"],
          description: tx("Hummus de boniato, hummus clásico, frutos secos, cebolla encurtida y cebollino.", "Hummus de moniato, hummus clàssic, fruita seca, ceba envinagrada i cibulet.", "Sweet potato hummus, classic hummus, nuts, pickled onion and chives.", "Houmous de patate douce, houmous classique, fruits à coque, oignon mariné et ciboulette.", "Süßkartoffel-Hummus, klassischer Hummus, Nüsse, eingelegte Zwiebel und Schnittlauch.", "红薯鹰嘴豆泥、经典鹰嘴豆泥、坚果、腌洋葱与细香葱。", "Zoete-aardappelhummus, klassieke hummus, noten, ingelegde ui en bieslook.", "Hummus di patata dolce, hummus classico, frutta secca, cipolla sottaceto ed erba cipollina."),
        },
        {
          name: tx("Aguacate y salmón", "Alvocat i salmó", "Avocado & salmon", "Avocat & saumon", "Avocado & Lachs", "牛油果与三文鱼", "Avocado & zalm", "Avocado & salmone"), price: "12,90 €",
          description: tx("Con huevo poché y espinacas.", "Amb ou poché i espinacs.", "With poached egg and spinach.", "Avec œuf poché et épinards.", "Mit pochiertem Ei und Spinat.", "配水波蛋与菠菜。", "Met gepocheerd ei en spinazie.", "Con uovo poché e spinaci."),
        },
        {
          name: same("English"), price: "12,90 €",
          description: tx("Pan brioche con huevo revuelto, bacon y parmesano.", "Pa brioix amb ou remenat, bacó i parmesà.", "Brioche with scrambled egg, bacon and Parmesan.", "Brioche avec œufs brouillés, bacon et parmesan.", "Brioche mit Rührei, Bacon und Parmesan.", "布里欧修面包配炒蛋、培根与帕玛森奶酪。", "Brioche met roerei, bacon en Parmezaan.", "Brioche con uova strapazzate, bacon e parmigiano."),
        },
        {
          name: same("Hummus"), price: "12,50 €",
          description: tx("Tomates cherry confitados y queso feta.", "Tomàquets cherry confitats i formatge feta.", "Confit cherry tomatoes and feta cheese.", "Tomates cerises confites et feta.", "Confierte Cherrytomaten und Feta.", "油封樱桃番茄与菲达奶酪。", "Gekonfijte cherrytomaten en feta.", "Pomodorini confit e feta."),
        },
        {
          name: tx("Dulce", "Dolça", "Sweet", "Sucrée", "Süß", "甜味", "Zoet", "Dolce"), price: "5,50 €",
          description: tx("Mantequilla y mermelada de fresa.", "Mantega i melmelada de maduixa.", "Butter and strawberry jam.", "Beurre et confiture de fraises.", "Butter und Erdbeerkonfitüre.", "黄油与草莓果酱。", "Boter en aardbeienjam.", "Burro e confettura di fragole."),
        },
        {
          name: tx("Embutido", "Embotit", "Deli topping", "Charcuterie", "Aufschnitt", "熟食配料", "Beleg", "Farcitura assortita"), price: "7,00 € / 10,50 €*",
          description: tx("Queso, jamón serrano, jamón dulce, atún o ibérico*.", "Formatge, pernil serrà, pernil dolç, tonyina o ibèric*.", "Cheese, Serrano ham, cooked ham, tuna or Ibérico ham*.", "Fromage, jambon serrano, jambon blanc, thon ou jambon ibérique*.", "Käse, Serrano-Schinken, Kochschinken, Thunfisch oder Ibérico-Schinken*.", "奶酪、塞拉诺火腿、熟火腿、金枪鱼或伊比利亚火腿*。", "Kaas, serranoham, gekookte ham, tonijn of Ibérico-ham*.", "Formaggio, prosciutto serrano, prosciutto cotto, tonno o jamón ibérico*."),
        },
      ],
    },
    {
      title: tx("Bollería del día", "Brioixeria del dia", "Pastry of the day", "Viennoiserie du jour", "Gebäck des Tages", "今日烘焙", "Gebak van de dag", "Dolce da forno del giorno"),
      note: tx("Consulta la oferta de hoy.", "Consulta l'oferta d'avui.", "Ask about today's selection.", "Demandez la sélection du jour.", "Frag nach der heutigen Auswahl.", "请咨询今日供应。", "Vraag naar het aanbod van vandaag.", "Chiedi la proposta di oggi."),
      items: [],
    },
    {
      title: tx("Dulces", "Dolços", "Sweets", "Desserts", "Süßes", "甜点", "Zoet", "Dolci"),
      note: tx("Acompáñalos con helado por +2,00 €: pistacho, vainilla, chocolate, turrón o caramelo salado.", "Acompanya'ls amb gelat per +2,00 €: festuc, vainilla, xocolata, torró o caramel salat.", "Add ice cream for +€2.00: pistachio, vanilla, chocolate, turrón or salted caramel.", "Ajoutez une glace pour +2,00 € : pistache, vanille, chocolat, touron ou caramel salé.", "Mit Eis für +2,00 €: Pistazie, Vanille, Schokolade, Turrón oder Salzkaramell.", "加 2.00 € 可配冰淇淋：开心果、香草、巧克力、图隆糖或海盐焦糖。", "Voeg ijs toe voor +€ 2,00: pistache, vanille, chocolade, turrón of gezouten karamel.", "Aggiungi il gelato per +2,00 €: pistacchio, vaniglia, cioccolato, torrone o caramello salato."),
      items: [
        { name: same("Carrot cake"), price: "4,00 €", badges: ["allDay"] },
        { name: same("Banana bread"), price: "4,00 €", badges: ["allDay"] },
        { name: same("Brownie"), price: "4,50 €", badges: ["allDay"] },
        {
          name: same("Cheesecake"), price: "6,50 €", badges: ["allDay"],
          description: tx("Con cremoso de membrillo.", "Amb cremós de codony.", "With creamy quince.", "Avec crémeux de coing.", "Mit cremiger Quitte.", "配绵密榅桲酱。", "Met romige kweepeer.", "Con cremoso di mela cotogna."),
        },
        {
          name: same("Energy balls"), price: "2,00 €",
          description: tx("Dátiles, frutos secos y cacao puro.", "Dàtils, fruita seca i cacau pur.", "Dates, nuts and pure cocoa.", "Dattes, fruits à coque et cacao pur.", "Datteln, Nüsse und reiner Kakao.", "椰枣、坚果与纯可可。", "Dadels, noten en pure cacao.", "Datteri, frutta secca e cacao puro."),
        },
      ],
    },
  ],
};

