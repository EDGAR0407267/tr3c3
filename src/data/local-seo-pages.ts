export type LocalSeoSlug =
  | "mejor-brunch-miami-platja"
  | "mejor-cafeteria-especialidad-miami-platja"
  | "mejor-restaurante-miami-platja"
  | "brunch-tarragona"
  | "cafeteria-especialidad-tarragona"
  | "restaurante-miami-platja-costa-daurada";

type ContentSection = { eyebrow: string; title: string; paragraphs: string[] };
type FaqItem = { question: string; answer: string };

export type LocalSeoPage = {
  title: string;
  description: string;
  h1: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  highlights: string[];
  sections: ContentSection[];
  faq: FaqItem[];
  related: LocalSeoSlug[];
  ctaTitle: string;
};

export const localSeoPages: Record<LocalSeoSlug, LocalSeoPage> = {
  "mejor-brunch-miami-platja": {
    title: "El mejor brunch en Miami Platja | TR3C3 Coffee & Brunch",
    description: "Vive el mejor brunch de Miami Platja en TR3C3: café de especialidad, desayunos cuidados y cocina mediterránea en un ambiente premium frente a la Costa Daurada.",
    h1: "El mejor brunch en Miami Platja, pensado para disfrutar sin prisa",
    intro: "Encontrar un brunch especial en Miami Platja es buscar algo más que una mesa bonita. Importan el café, la cocina, el ritmo del servicio y esa sensación de que el plan puede alargarse sin esfuerzo. TR3C3 Coffee & Brunch reúne todo eso en una propuesta contemporánea, cercana y mediterránea, perfecta tanto para una mañana tranquila como para ese encuentro que acaba convirtiéndose en sobremesa. Aquí el brunch no es una comida más: es un pequeño ritual.",
    heroImage: "/images/brunch-table.webp",
    heroAlt: "Mesa de brunch con café de especialidad y platos cuidados en TR3C3 Miami Platja",
    highlights: ["Café de especialidad", "Opciones dulces y saladas", "Ambiente mediterráneo", "Miami Platja"],
    sections: [
      { eyebrow: "La experiencia", title: "Qué hace inolvidable un buen brunch", paragraphs: [
        "Un brunch memorable no consiste en acumular platos. Empieza con una carta coherente, producto apetecible y combinaciones que funcionan a cualquier hora de la mañana. En TR3C3 unimos desayunos, opciones dulces, propuestas saladas y bebidas preparadas con criterio. El resultado es una experiencia flexible: puedes venir solo por un café y una pieza de bollería o sentarte a compartir una mesa completa con los tuyos.",
        "También cuenta el entorno. La luz, la música, la comodidad y un servicio atento cambian por completo la forma de vivir el brunch. TR3C3 nace con una estética cálida y premium, pero sin distancia ni rigidez. Es el espacio ideal para conversar, celebrar lo sencillo, arrancar un día de playa o regalarte una pausa con calma en pleno Miami Platja."
      ]},
      { eyebrow: "Café y cocina", title: "Un gran brunch empieza por una buena taza", paragraphs: [
        "El café de especialidad ocupa un lugar central en nuestra propuesta. Espresso, bebidas con leche, filtrados y opciones frías acompañan cada plato sin que el café sea nunca un detalle secundario. Cuidamos la molienda, la extracción y la textura para ofrecerte una taza equilibrada, tanto si dominas el mundo specialty como si simplemente quieres un café bien hecho.",
        "La cocina completa ese ritual con opciones reconocibles y cuidadas. Tostadas, huevos, platos frescos, bocados dulces y propuestas para compartir te permiten construir un brunch a tu medida. No disfrazamos el producto: lo presentamos con buen gusto en una carta que funciona para parejas, familias, grupos de amigos y viajeros que quieren descubrir una dirección gastronómica local con personalidad."
      ]},
      { eyebrow: "Plan local", title: "Brunch cerca del mar y de los mejores planes de la Costa Daurada", paragraphs: [
        "La ubicación en Miami Platja convierte a TR3C3 en un punto de encuentro cómodo para residentes y para quienes pasan unos días en la Costa Daurada. Puede ser tu primera parada antes de acercarte a las calas, el lugar donde recuperar energía tras una mañana activa o una mesa tranquila si llegas desde Mont-roig del Camp u Hospitalet de l’Infant.",
        "Quienes vienen desde Cambrils o recorren el litoral de Tarragona encuentran aquí una alternativa con identidad propia, lejos del desayuno rápido de siempre. TR3C3 quiere formar parte de la vida local y, a la vez, ser uno de esos lugares que un visitante guarda para volver. Todo se apoya en algo sencillo: producto cuidado, hospitalidad de verdad y un ambiente que encaja con el ritmo mediterráneo."
      ]},
      { eyebrow: "Antes de venir", title: "Cómo organizar tu visita a TR3C3", paragraphs: [
        "Consulta la carta para conocer las categorías disponibles y revisa la ubicación antes de salir. Si vienes en grupo, en fin de semana o en temporada alta, contacta con el local para confirmar disponibilidad. Los horarios pueden variar en fechas especiales, así que la información de nuestro Google Business Profile y de la página de contacto es siempre la referencia más fiable.",
        "No necesitamos proclamarnos a la fuerza como el mejor brunch de Miami Platja: preferimos demostrarlo. Nuestra ambición es concreta, convertirnos en una de las direcciones que se recomiendan por la calidad de la taza, el cuidado de los platos y la experiencia completa. La mejor manera de comprobarlo es sentarte, elegir sin prisa y dejar que la mañana encuentre su propio ritmo."
      ]},
    ],
    faq: [
      { question: "¿Dónde tomar el mejor brunch en Miami Platja?", answer: "TR3C3 Coffee & Brunch está en Avinguda de Barcelona, 160, en Miami Platja. Ofrece café de especialidad, desayunos y brunch en un espacio de inspiración mediterránea pensado para disfrutar sin prisa." },
      { question: "¿El brunch incluye opciones dulces y saladas?", answer: "Sí. La carta reúne categorías dulces y saladas, café, matcha y bebidas frías. La disponibilidad concreta puede cambiar, así que te recomendamos consultar la carta actual antes de tu visita." },
      { question: "¿Se puede ir solo a tomar café?", answer: "Claro. La experiencia también está pensada para una visita breve: espresso, bebidas con leche, filtrados u opciones frías que puedes disfrutar sin pedir un brunch completo." },
      { question: "¿TR3C3 está cerca de la playa?", answer: "TR3C3 se encuentra en Miami Platja, dentro del entorno costero de Mont-roig del Camp y la Costa Daurada. El enlace de ubicación te permite calcular la ruta exacta." },
      { question: "¿Conviene reservar para el brunch?", answer: "Para grupos, fines de semana y temporada alta es recomendable contactar antes con el local. La disponibilidad y el sistema de reservas se confirman directamente con TR3C3." },
    ],
    related: ["mejor-cafeteria-especialidad-miami-platja", "brunch-tarragona", "mejor-restaurante-miami-platja"],
    ctaTitle: "Tu próxima mañana perfecta en Miami Platja empieza aquí.",
  },
  "mejor-cafeteria-especialidad-miami-platja": {
    title: "La mejor cafetería de especialidad en Miami Platja | TR3C3",
    description: "Café de especialidad en Miami Platja: espresso, filtrados y bebidas cuidadas en TR3C3 Coffee & Brunch, la cafetería moderna que enamora en la Costa Daurada.",
    h1: "Café de especialidad en Miami Platja, con origen, criterio y mucho gusto",
    intro: "TR3C3 Coffee & Brunch nace para acercar la cultura del café de especialidad a Miami Platja de una forma clara, atractiva y nada intimidante. Cuidamos el grano, la receta y el servicio, pero también todo lo que rodea la taza: un espacio cómodo, una carta gastronómica que acompaña y un equipo capaz de recomendarte según tu gusto. Aquí, tomar café es un plan en sí mismo.",
    heroImage: "/images/specialty-coffee.webp",
    heroAlt: "Barista preparando café de especialidad en TR3C3 Coffee & Brunch Miami Platja",
    highlights: ["Grano seleccionado", "Extracción cuidada", "Métodos y bebidas frías", "Experiencia accesible"],
    sections: [
      { eyebrow: "El producto", title: "Qué significa realmente café de especialidad", paragraphs: [
        "Hablar de café de especialidad es mirar más allá de una etiqueta. El origen, la variedad, el proceso y el tueste marcan el perfil de cada taza. Después llega el trabajo diario: conservar bien el grano, ajustar la molienda, controlar la receta y buscar una extracción limpia. Cuando todo encaja, aparecen matices definidos y un equilibrio que no necesita esconderse tras un exceso de azúcar ni aromas artificiales.",
        "En TR3C3 traducimos ese cuidado en una experiencia fácil de disfrutar. No hace falta dominar el vocabulario técnico para pedir bien. Si prefieres un espresso intenso, una bebida cremosa con leche, un filtrado delicado o una opción fría, encontrarás la preparación perfecta para ti. Y nuestro equipo te lo explica sin convertir tu elección en una clase ni hacerte sentir fuera de lugar."
      ]},
      { eyebrow: "La preparación", title: "Del espresso al filtrado: tu café, como más te gusta", paragraphs: [
        "El espresso concentra aroma, textura y carácter en pocos sorbos, y para que brille necesita precisión y consistencia. Las bebidas con leche suman otro reto: mantener la identidad del café mientras logramos una textura sedosa y agradable. Los métodos filtrados invitan a una lectura más pausada del origen, con perfiles limpios que cambian según el café disponible y la receta elegida.",
        "Las bebidas frías amplían el repertorio durante los meses cálidos de Miami Platja. Cold brew, espresso tonic y combinaciones de temporada refrescan sin perder ni un gramo de criterio cafetero. La carta evoluciona, pero la idea se mantiene: cada bebida tiene sentido, está bien ejecutada y ofrece una alternativa real a quien busca algo diferente durante su estancia en la Costa Daurada."
      ]},
      { eyebrow: "El espacio", title: "Una cafetería premium que sigue siendo cercana", paragraphs: [
        "La calidad de una cafetería no termina en la barra. La acústica, la iluminación, las mesas y la forma de recibirte forman parte de la experiencia. TR3C3 combina una identidad visual cálida con un ambiente pensado para una pausa breve, una conversación larga o una sesión tranquila frente a tu bebida favorita. Premium, aquí, significa cuidar los detalles sin convertirlos nunca en una barrera.",
        "Esa combinación responde a públicos distintos: residentes que quieren sumar un buen café a su rutina, visitantes en busca de una recomendación local y personas que llegan desde Hospitalet de l’Infant, Mont-roig del Camp o Cambrils atraídas por la cultura specialty. La propuesta funciona cuando cada uno encuentra un motivo para volver, no solo una foto bonita."
      ]},
      { eyebrow: "Café local", title: "La nueva referencia cafetera de Miami Platja", paragraphs: [
        "Miami Platja tiene una relación natural con las terrazas, el mar y los momentos compartidos. TR3C3 suma una capa contemporánea a esa identidad: café con trazabilidad, recetas cuidadas y una carta que conecta la taza con desayunos, brunch y cocina mediterránea. No copiamos el lenguaje de una gran ciudad: construimos una cafetería coherente con su entorno y con su gente.",
        "Aspiramos a estar entre las cafeterías de especialidad más recomendadas de Miami Platja, y eso se sostiene con consistencia: formación, producto, equipo y escucha activa. Las reseñas honestas, las fotografías reales y una ficha de Google Business Profile actualizada ayudan a que quienes buscan buen café lleguen con información fiable y se vayan con ganas de repetir."
      ]},
    ],
    faq: [
      { question: "¿Qué café sirve TR3C3 Coffee & Brunch?", answer: "TR3C3 trabaja una propuesta de café de especialidad con espresso, bebidas con leche, filtrados y opciones frías. El origen concreto del grano puede variar según la selección disponible." },
      { question: "¿Hace falta saber de café para disfrutarlo?", answer: "Para nada. La carta está pensada tanto para aficionados al specialty coffee como para quien quiere descubrir una taza equilibrada y recibir una recomendación sencilla." },
      { question: "¿Hay métodos de café filtrado?", answer: "Sí, contemplamos métodos como V60 y otras preparaciones según disponibilidad. Consulta la carta actual o pregunta al equipo por el café del momento." },
      { question: "¿Hay bebidas de café frías?", answer: "Sí, la carta incluye una línea de bebidas frías y combinaciones de temporada perfectas para el clima de Miami Platja." },
      { question: "¿Dónde está esta cafetería de especialidad?", answer: "TR3C3 está en Avinguda de Barcelona, 160, 43892 Miami Platja, Tarragona. Desde la web puedes abrir la ruta exacta en Google Maps." },
    ],
    related: ["mejor-brunch-miami-platja", "cafeteria-especialidad-tarragona", "restaurante-miami-platja-costa-daurada"],
    ctaTitle: "Descubre tu próxima taza favorita en Miami Platja.",
  },
  "mejor-restaurante-miami-platja": {
    title: "El mejor restaurante en Miami Platja: café, brunch y cocina | TR3C3",
    description: "TR3C3 es la propuesta gastronómica que conquista Miami Platja: desayuna, toma brunch, come o disfruta de una cena informal con café de especialidad y cocina mediterránea.",
    h1: "Un restaurante en Miami Platja para cada momento del día",
    intro: "Elegir restaurante en Miami Platja depende muchas veces del momento: un desayuno temprano, un brunch relajado, una comida informal, una merienda o una mesa al caer el día. TR3C3 Coffee & Brunch te ofrece una experiencia que evoluciona con las horas y combina café de especialidad, cocina cuidada y una atmósfera mediterránea capaz de acompañar planes muy distintos. Un único sitio para todo lo que te apetezca.",
    heroImage: "/images/kitchen-evening.webp",
    heroAlt: "Mesa de cocina mediterránea en TR3C3 Coffee & Brunch, restaurante en Miami Platja",
    highlights: ["Desayunos y brunch", "Cocina mediterránea", "Platos para compartir", "Servicio todo el día"],
    sections: [
      { eyebrow: "Todo el día", title: "De la primera taza a una cena informal", paragraphs: [
        "El día puede empezar con espresso, bollería o un desayuno más completo. A media mañana, la propuesta se abre al brunch y a los platos que invitan a compartir. Más tarde llegan las opciones saladas, las bebidas frías y los momentos de sobremesa. Y cuando cae la noche, la luz y el ritmo cambian para recibir una experiencia más tranquila, con cocina informal y una selección de bebidas para alargar la conversación.",
        "Gracias a este enfoque, TR3C3 no se encierra en una sola categoría. Es cafetería de especialidad, espacio de brunch y restaurante contemporáneo, pero su identidad es la misma durante todo el día: producto reconocible, presentación cuidada y hospitalidad cercana. Quien entra por un café descubre la cocina; quien viene a comer termina con una bebida preparada en la barra."
      ]},
      { eyebrow: "La cocina", title: "Producto mediterráneo con una mirada actual", paragraphs: [
        "La cocina mediterránea brilla cuando respeta el ingrediente y evita complicaciones innecesarias. Verduras, pan, aceite de oliva, quesos, huevos, pescado y productos de temporada nos permiten crear platos apetecibles, frescos y fáciles de compartir. En TR3C3 partimos de esa familiaridad y la elevamos con una presentación contemporánea y combinaciones que encajan tanto en una comida ligera como en un plan más completo.",
        "La carta busca el equilibrio entre opciones reconocibles y pequeños giros de la casa. Platos salados, entrantes, bowls, tostadas y propuestas de temporada se adaptan a cualquier apetito. Y porque la confianza importa, comunicamos con claridad la disponibilidad, los alérgenos y las alternativas dietéticas. La experiencia premium empieza por una información honesta sobre lo que llega a tu mesa."
      ]},
      { eyebrow: "El ambiente", title: "Un espacio gastronómico para locales y visitantes", paragraphs: [
        "Miami Platja recibe perfiles muy distintos a lo largo del año: clientes que viven en la zona, familias que vuelven cada temporada, parejas de escapada y viajeros que recorren la Costa Daurada. TR3C3 está pensado para resultar especial sin ser excluyente: diseño cálido, atención profesional y una carta flexible para disfrutar tanto de una visita espontánea como de un encuentro planificado.",
        "La ubicación también lo convierte en punto de reunión para personas de Mont-roig del Camp y Hospitalet de l’Infant. Quienes llegan desde Cambrils u otros puntos de Tarragona pueden sumar TR3C3 a una ruta costera o gastronómica. No competimos a base de grandes declaraciones: nos ganamos un lugar en las recomendaciones locales con una experiencia consistente, visita tras visita."
      ]},
      { eyebrow: "Elegir bien", title: "Qué buscar cuando eliges dónde comer en Miami Platja", paragraphs: [
        "Una buena elección combina carta, ubicación, horario y ambiente. Antes de venir, comprueba si el momento del día encaja con lo que buscas, consulta la carta disponible y confirma horarios en fechas especiales. Si tienes alergias, necesidades concretas o vienes con grupo, avisar con antelación nos ayuda a orientarte mejor y a que tu experiencia sea redonda.",
        "TR3C3 aspira a ser una de las opciones gastronómicas de referencia de Miami Platja porque reúne varios motivos para volver: buen café, cocina versátil y un espacio con personalidad. La recomendación más valiosa siempre nace de una visita satisfactoria. Por eso nuestra prioridad es clara: producto, servicio y coherencia entre lo que prometemos y lo que encuentras al sentarte."
      ]},
    ],
    faq: [
      { question: "¿TR3C3 es cafetería o restaurante?", answer: "Es las dos cosas. TR3C3 combina café de especialidad, brunch y cocina mediterránea. La propuesta cambia a lo largo del día para que puedas desayunar, comer, merendar o disfrutar de una cena informal según horario y disponibilidad." },
      { question: "¿Se puede comer en TR3C3?", answer: "Sí. La carta incluye categorías saladas, entrantes y platos principales además de desayunos, brunch y bebidas. Consulta la carta actual para confirmar la oferta disponible." },
      { question: "¿Hay opciones para compartir?", answer: "Sí, la propuesta incluye platos y entrantes pensados para compartir. La selección concreta puede variar por temporada y disponibilidad de producto." },
      { question: "¿Dónde está TR3C3 en Miami Platja?", answer: "El local está en Avinguda de Barcelona, 160, 43892 Miami Platja, dentro del municipio de Mont-roig del Camp." },
      { question: "¿Cuál es el horario del restaurante?", answer: "El horario de trabajo publicado es de lunes a domingo de 09:00 a 00:00 seguido. Conviene confirmarlo para festivos o fechas especiales." },
    ],
    related: ["restaurante-miami-platja-costa-daurada", "mejor-brunch-miami-platja", "mejor-cafeteria-especialidad-miami-platja"],
    ctaTitle: "Café, cocina y una mesa para quedarte un poco más.",
  },
  "brunch-tarragona": {
    title: "Brunch en Tarragona y Costa Daurada | TR3C3 Miami Platja",
    description: "¿Buscas brunch en Tarragona? Descubre TR3C3 en Miami Platja: café de especialidad y brunch mediterráneo, la escapada gastronómica perfecta de la Costa Daurada.",
    h1: "Brunch en Tarragona: la escapada gastronómica que buscabas en Miami Platja",
    intro: "Si buscas brunch en Tarragona más allá del centro de la ciudad, la Costa Daurada te ofrece planes que combinan gastronomía, mar y tiempo sin prisas. TR3C3 Coffee & Brunch está en Miami Platja, dentro de la provincia de Tarragona, y te propone una parada con café de especialidad, cocina de brunch y una atmósfera mediterránea que convierte el desayuno tardío en lo mejor del viaje.",
    heroImage: "/images/brunch-table.webp",
    heroAlt: "Brunch con café de especialidad en TR3C3 Miami Platja, provincia de Tarragona",
    highlights: ["Provincia de Tarragona", "Costa Daurada", "Destino de brunch", "Cerca del Mediterráneo"],
    sections: [
      { eyebrow: "Destino costero", title: "Un brunch que se convierte en plan de Costa Daurada", paragraphs: [
        "La Costa Daurada invita a vivir el día de otra manera. Una mañana puede empezar cerca del mar, continuar alrededor de una mesa y terminar recorriendo calas o pueblos costeros. En ese contexto, el brunch no es solo una comida entre horas: es un plan completo. TR3C3 te ofrece un punto de partida cómodo en Miami Platja para combinar una experiencia gastronómica cuidada con el ritmo relajado del litoral tarraconense.",
        "La ubicación resulta especialmente práctica si te alojas en Mont-roig del Camp, Hospitalet de l’Infant u otros municipios próximos. También es una parada perfecta para quienes viajan por carretera entre Cambrils y el sur de la provincia. La ruta exacta se calcula desde cada punto, pero la propuesta tiene una vocación clara de destino, no de cafetería de paso."
      ]},
      { eyebrow: "La carta", title: "Café de especialidad y platos para construir tu brunch", paragraphs: [
        "TR3C3 reúne café, bebidas frías, opciones dulces y platos salados para que cada mesa encuentre su propia fórmula. Hay quien prefiere una tostada con café y quien convierte la visita en una comida completa con varios platos para compartir. Esa flexibilidad es parte del encanto del brunch y se adapta a parejas, familias, grupos de amigos o viajeros con ganas de probarlo todo.",
        "El café de especialidad aporta identidad a la experiencia. Un espresso bien ajustado, una bebida con leche equilibrada o un filtrado pueden cambiar la percepción de toda la mesa. En los meses más cálidos, las preparaciones frías son la alternativa natural. La selección puede variar, así que conviene consultar la carta vigente en lugar de dar por sentada una receta concreta."
      ]},
      { eyebrow: "Tarragona, con precisión", title: "TR3C3 está en Miami Platja, dentro de la provincia de Tarragona", paragraphs: [
        "Conviene situar bien el local. TR3C3 no está en el centro de Tarragona ciudad: se encuentra en Miami Platja, núcleo costero de Mont-roig del Camp, en la provincia de Tarragona. Esta precisión te ayuda a planificar la visita y evita confusiones. En muchas búsquedas de brunch en Tarragona, la intención abarca toda la provincia y los destinos de la Costa Daurada, no solo la capital.",
        "Esa ubicación nos permite ofrecerte algo distinto a un brunch urbano. Aquí el contexto es costero, con un ambiente que conecta con vacaciones, escapadas y vida local. Queremos atraer tanto a quienes ya están en Miami Platja como a quienes disfrutan desplazándose para descubrir una dirección nueva. El tiempo de viaje dependerá de tu origen: compruébalo siempre en el mapa."
      ]},
      { eyebrow: "Planificar la visita", title: "Cómo incluir TR3C3 en tu escapada por Tarragona", paragraphs: [
        "Puedes combinar el brunch con un paseo por Miami Platja, una visita a las calas del entorno o una ruta por otros puntos de la Costa Daurada. Si viajas en temporada alta, revisa tráfico, aparcamiento, horarios y disponibilidad antes de salir. Para grupos, contacta con antelación. Una planificación breve te permite disfrutar del plan sin convertir una mañana relajada en una carrera contra el reloj.",
        "TR3C3 quiere ser una de esas recomendaciones que circulan entre residentes y viajeros: un lugar al que llegas por el brunch y al que vuelves por el café, el ambiente y la atención. Esa reputación se construye con fotografías reales, reseñas verificadas e información local consistente. La web es la invitación; la experiencia en el local es lo que da sentido a tu búsqueda."
      ]},
    ],
    faq: [
      { question: "¿TR3C3 está en Tarragona ciudad?", answer: "No. TR3C3 está en Miami Platja, municipio de Mont-roig del Camp, dentro de la provincia de Tarragona y la Costa Daurada." },
      { question: "¿Merece la pena desplazarse para tomar brunch?", answer: "TR3C3 está pensado como una experiencia de café, brunch y ambiente mediterráneo. Si encaja con tu ruta por la Costa Daurada, será una de las mejores paradas de tu mañana o escapada costera." },
      { question: "¿Qué distancia hay desde Tarragona?", answer: "La distancia y el tiempo dependen del punto de salida y del tráfico. Te recomendamos abrir el enlace de Google Maps para calcular la ruta actualizada hasta Avinguda de Barcelona, 160, Miami Platja." },
      { question: "¿Hay café de especialidad en el brunch?", answer: "Sí. El café de especialidad es uno de los ejes de TR3C3 y acompaña a la perfección las opciones dulces y saladas de la carta." },
      { question: "¿Está abierto los fines de semana?", answer: "Sí. El horario de trabajo es de lunes a domingo de 09:00 a 00:00 seguido, también los fines de semana. Confirma siempre posibles cambios en festivos o temporada." },
    ],
    related: ["mejor-brunch-miami-platja", "cafeteria-especialidad-tarragona", "restaurante-miami-platja-costa-daurada"],
    ctaTitle: "Haz del brunch la mejor parada de tu ruta por Tarragona.",
  },
  "cafeteria-especialidad-tarragona": {
    title: "Cafetería de especialidad en Tarragona | TR3C3 Miami Platja",
    description: "TR3C3 Coffee & Brunch es la cafetería de especialidad que enamora en Miami Platja, provincia de Tarragona: espresso, filtrados, brunch y bebidas frías de autor.",
    h1: "La cafetería de especialidad de la provincia de Tarragona que estabas buscando",
    intro: "La cultura del café de especialidad también crece fuera de las capitales. TR3C3 Coffee & Brunch la lleva a Miami Platja, en la provincia de Tarragona: selección de grano, preparaciones cuidadas, bebidas frías y una experiencia que conecta la barra de café con el brunch y la cocina mediterránea. Una dirección imprescindible para residentes y viajeros que buscan una taza con más intención en la Costa Daurada.",
    heroImage: "/images/specialty-coffee.webp",
    heroAlt: "Café de especialidad preparado en TR3C3 Miami Platja, Tarragona",
    highlights: ["Miami Platja", "Provincia de Tarragona", "Cultura specialty", "Café y gastronomía"],
    sections: [
      { eyebrow: "Cultura cafetera", title: "El specialty coffee también pertenece a la costa", paragraphs: [
        "Durante años, el café de especialidad se asoció sobre todo a barrios concretos de grandes ciudades. Pero la calidad no depende del código postal. Una zona costera como Miami Platja puede ofrecer café con trazabilidad, recetas ajustadas y profesionales que entienden el producto. TR3C3 parte de esa convicción: que una buena taza forme parte natural del día a día local y de cualquier visita a la Costa Daurada.",
        "Evitamos convertir el specialty coffee en una moda inaccesible. La atención técnica es clave, pero debe traducirse en sabor, consistencia y una recomendación útil. Quien pide su primer filtrado necesita una explicación distinta a quien ya conoce procesos y orígenes. Una cafetería verdaderamente hospitalaria sabe atender a ambos sin perder rigor ni cercanía."
      ]},
      { eyebrow: "Del origen a la taza", title: "Trazabilidad, receta y servicio", paragraphs: [
        "El origen cuenta una parte de la historia: región, variedad, altitud y proceso influyen en el resultado. El tueste debe respetar ese potencial y la preparación diaria termina de definirlo. Ajustar la molienda, pesar la dosis, controlar tiempos y cuidar el agua son gestos menos visibles que una decoración bonita, pero deciden si el café mantiene equilibrio y claridad durante toda la jornada.",
        "El servicio completa la experiencia. Presentar el café de forma comprensible, preguntar por preferencias y reconocer cuándo una receta necesita corrección son señales de una barra seria. TR3C3 combina ese criterio con el ritmo relajado de Miami Platja. No queremos impresionarte con tecnicismos: queremos que disfrutes y entiendas por qué esa taza sabe diferente."
      ]},
      { eyebrow: "Más que café", title: "Brunch y cocina para acompañar la experiencia", paragraphs: [
        "Muchas visitas no terminan en la taza. Una pieza dulce, una tostada, unos huevos o un plato salado convierten el café en desayuno, brunch o comida informal. En TR3C3 integramos ambas dimensiones para que la barra y la cocina se refuercen entre sí. Así puedes compartir la visita con personas de intereses distintos sin renunciar a una identidad cafetera clara.",
        "La oferta de bebidas frías, matcha y combinaciones de temporada amplía las posibilidades. No todo el mundo toma espresso, y el clima de Tarragona invita a explorar recetas refrescantes. Lo importante es la coherencia: ingredientes reconocibles, presentaciones cuidadas y un equilibrio que no dependa solo de que la bebida sea fotogénica."
      ]},
      { eyebrow: "Provincia de Tarragona", title: "Tu parada cafetera entre Miami Platja y la Costa Daurada", paragraphs: [
        "TR3C3 está en Miami Platja, no en Tarragona ciudad. Su área natural incluye Mont-roig del Camp, Hospitalet de l’Infant y visitantes que se mueven por el litoral. Si viajas desde Cambrils u otros puntos de la provincia, es la parada ideal en una ruta costera. La ubicación exacta y el tiempo de trayecto conviene comprobarlos en el mapa antes de salir.",
        "Para reforzar esta presencia local, cuidamos al máximo la información online: mismo nombre, dirección y horario en la web y en Google Business Profile; fotografías reales; carta actualizada; y reseñas que describan experiencias auténticas. El posicionamiento como cafetería de especialidad en Tarragona se gana combinando esa consistencia digital con una operación que cumple cada día lo que la marca promete."
      ]},
    ],
    faq: [
      { question: "¿Dónde está TR3C3 Coffee & Brunch?", answer: "TR3C3 está en Avinguda de Barcelona, 160, 43892 Miami Platja, dentro del municipio de Mont-roig del Camp y la provincia de Tarragona." },
      { question: "¿TR3C3 es una cafetería de Tarragona ciudad?", answer: "No. Está en Miami Platja. La página se dirige a búsquedas provinciales y de Costa Daurada, indicando siempre la ubicación real para evitar confusiones." },
      { question: "¿Qué métodos de café ofrece?", answer: "La propuesta incluye espresso, bebidas con leche, filtrados y preparaciones frías. La selección concreta puede variar según carta, grano y temporada." },
      { question: "¿Se puede comer además de tomar café?", answer: "Sí. TR3C3 combina café de especialidad con desayunos, brunch y cocina mediterránea, así que la visita se adapta a distintos momentos del día." },
      { question: "¿Puedo comprar café en grano?", answer: "La venta de café en grano no está confirmada en la información actual. Te recomendamos consultar directamente con el equipo antes de desplazarte por este motivo." },
    ],
    related: ["mejor-cafeteria-especialidad-miami-platja", "brunch-tarragona", "mejor-restaurante-miami-platja"],
    ctaTitle: "Tu ruta por Tarragona merece una buena taza.",
  },
  "restaurante-miami-platja-costa-daurada": {
    title: "Dónde comer en Miami Platja y Costa Daurada | TR3C3",
    description: "Descubre dónde comer en Miami Platja: TR3C3 te ofrece café de especialidad, brunch y cocina mediterránea, la parada gastronómica imprescindible de la Costa Daurada.",
    h1: "Dónde comer en Miami Platja durante tu ruta por la Costa Daurada",
    intro: "Cuando visitas Miami Platja, elegir dónde comer forma parte del viaje. La ubicación, el horario y el tipo de experiencia importan tanto como la carta. TR3C3 Coffee & Brunch es la parada gastronómica versátil que buscan turistas y clientes locales: café de especialidad, brunch, cocina mediterránea y un ambiente cuidado que te acompaña desde la mañana hasta la noche.",
    heroImage: "/images/interior-cafe.webp",
    heroAlt: "Interior de TR3C3 Coffee & Brunch, restaurante en Miami Platja y la Costa Daurada",
    highlights: ["Plan para viajeros", "Cocina todo el día", "Ubicación en Miami Platja", "Ambiente premium"],
    sections: [
      { eyebrow: "Guía local", title: "Tu parada gastronómica flexible en Miami Platja", paragraphs: [
        "Los días de vacaciones no siguen horarios exactos. A veces apetece desayunar tarde; otras, comer algo ligero después de la playa o sentarse a compartir platos al caer la tarde. TR3C3 responde a esa flexibilidad con una propuesta que cambia de ritmo sin perder identidad. La carta conecta café, brunch y cocina para que una misma dirección encaje en cualquier momento del viaje.",
        "También es una ventaja para grupos con gustos distintos. Uno quiere café y dulce, otro un plato salado y otro una bebida fría. Un espacio que reúne todas esas posibilidades simplifica el plan sin caer en una carta sin criterio. El hilo conductor está siempre en el producto, la presentación y una estética mediterránea que hace de la pausa un pequeño placer."
      ]},
      { eyebrow: "Qué pedir", title: "Del desayuno a los platos para compartir", paragraphs: [
        "Por la mañana, el café de especialidad acompaña bollería, tostadas y opciones de desayuno. El brunch amplía la mesa con elaboraciones dulces y saladas, mientras la cocina incorpora entrantes, platos frescos y propuestas más completas. La disponibilidad cambia con la temporada, así que consultar la carta actual es la mejor forma de decidir antes de venir.",
        "Para una experiencia redonda, combina bebidas y cocina según el momento. Un filtrado acompaña una mañana tranquila; una bebida fría encaja con el calor del litoral; y una selección de platos compartidos es perfecta para una comida informal. Si tienes alergias o necesidades dietéticas, coméntaselo al equipo para recibir información actualizada sobre ingredientes y posibles adaptaciones."
      ]},
      { eyebrow: "Entorno", title: "Miami Platja, Mont-roig del Camp y el sur de la Costa Daurada", paragraphs: [
        "Miami Platja pertenece a Mont-roig del Camp y ocupa una posición inmejorable para explorar el sur de la Costa Daurada. Sus calas, playas y conexiones con Hospitalet de l’Infant hacen que muchos viajeros se muevan entre varios puntos durante el día. TR3C3 se suma a esa ruta como desayuno antes de salir, comida tras una mañana de mar o encuentro al regresar.",
        "Si te alojas en Cambrils o recorres la provincia de Tarragona, calcula el trayecto según tráfico y temporada. TR3C3 no pretende estar en todos esos municipios: es un destino concreto en Miami Platja que puede resultarte muy relevante. La precisión geográfica es parte de una recomendación local útil y creíble, y nosotros la cuidamos."
      ]},
      { eyebrow: "Consejos prácticos", title: "Cómo preparar tu visita en vacaciones o temporada alta", paragraphs: [
        "En verano, fines de semana y festivos, los tiempos de carretera y la ocupación cambian. Comprueba el horario, abre la ruta en Google Maps y contacta antes si vienes con grupo. La dirección es Avinguda de Barcelona, 160, en Miami Platja. Tenerla guardada te evita depender de búsquedas rápidas cuando ya estás en movimiento.",
        "Después de la visita, una reseña honesta ayuda a otros viajeros a decidir dónde comer en Miami Platja. Son especialmente útiles los comentarios que describen qué se pidió, cómo fue el servicio y en qué momento del día se visitó el local. Queremos crecer con recomendaciones reales, no con promesas grandilocuentes. Esa reputación local es la base más sólida para ser una referencia de la Costa Daurada."
      ]},
    ],
    faq: [
      { question: "¿Dónde comer en Miami Platja cerca de una ruta por la Costa Daurada?", answer: "TR3C3 está en Avinguda de Barcelona, 160, Miami Platja. Su propuesta combina café, brunch y cocina mediterránea, así que encaja en distintos momentos de una ruta costera." },
      { question: "¿TR3C3 sirve comidas además de brunch?", answer: "Sí. La carta contempla entrantes, platos salados y opciones para compartir, además de desayunos y brunch. Revisa la oferta actual antes de venir." },
      { question: "¿Es un sitio adecuado para turistas y familias?", answer: "Totalmente. La propuesta es flexible y está pensada para residentes y visitantes. Para grupos grandes, familias o necesidades concretas, conviene contactar previamente con el local." },
      { question: "¿Está cerca de Hospitalet de l’Infant?", answer: "TR3C3 se encuentra en Miami Platja, en el entorno de Mont-roig del Camp y Hospitalet de l’Infant. La distancia exacta depende del punto de salida; consúltala en Google Maps." },
      { question: "¿Se puede ir a cenar?", answer: "La planificación actual incluye servicio de noche. Como los horarios pueden cambiar por temporada o fechas especiales, confirma la disponibilidad antes de desplazarte." },
    ],
    related: ["mejor-restaurante-miami-platja", "mejor-brunch-miami-platja", "brunch-tarragona"],
    ctaTitle: "Guarda una mesa con sabor local en tu ruta por la costa.",
  },
};
