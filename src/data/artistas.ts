// src/data/artistas.ts
// ============================================
// FICHERO DE EDICIÓN DE ARTISTAS
// Para añadir un nuevo artista, copia el bloque
// { ... } y pégalo debajo del último.
// ============================================

export interface Artista {
  slug: string;
  nombre: string;
  origen: string;
  estilo: string;
  imagen: string;
  web?: string;
  video?: string;
  biografia: string[];
}

export const artistas2026: Artista[] = [
  {
    slug: "stone-foundation",
    nombre: "STONE FOUNDATION",
    origen: "UNITED KINGDOM",
    estilo: "GROOVE · NORTHERN SOUL · FUNK",
    imagen: "/images/2026/stone-foundation.jpg",
    web: "https://www.stonefoundation.co.uk",
    video: "https://www.youtube.com/watch?v=vO9_my5wPNg",
    biografia: [
      "Stone Foundation es una banda británica, de los Midlands, liderada por Neil Jones y Neil Sheasby. Su estilo es un legado de la subcultura del Northern Soul, mezclando estilos como el funk, el soul y el rhythm and blues. La banda mantiene actualmente una estrecha relación y colaboración con Paul Weller.",
      "Se fundó a principios de los 90. Neil Sheasby (bajista) y Neil Jones (vocalista), que estaban en otros grupos, se conocieron compartiendo escenario. Días después, quedaron para componer, creando algo propio con diferentes estilos y sonidos.",
      "En una primera fase grabaron: 'Happiness Was Here' (2003), 'In Our Time' (2005), 'Small Town Soul' (2008) y 'Away From The Grain' (2010). En 2015 produjeron 'A Life Unlimited'. Su éxito llamó la atención de Paul Weller, que produjo y tocó en el álbum 'Street Rituals' (2017), descrito como el 'álbum de soul del año' por la revista Blues & Soul.",
      "Desde 2018 han grabado 'Everybody, Anyone' (2018), 'Is Love Enough' (2020) y 'Outside Looking In' (2022). La banda ha girado por Reino Unido, Alemania, Francia, Italia, España, Japón y República Checa, entre otros.",
      "Entre los artistas con los que han colaborado destacan Paul Weller, Kathryn Williams, Durand Jones, Peter Capaldi, Mick Talbot, William Bell, Bettye LaVette y Andy Fairweather Low, además de contar con remixes de Dennis Bovell, Leo Zero y Opolopo."
    ]
  },
   {
    slug: "nine-below-zero",
    nombre: "NINE BELOW ZERO",
    origen: "UNITED KINGDOM",
    estilo: "R&B, PUB ROCK",
    imagen: "/images/2026/NBZ-4.jpg",
    web: "https://www.ninebelowzero.com",
    video: "https://www.youtube.com/watch?v=yNuzkZLzNMo&list=RDyNuzkZLzNMo&start_radio=1", 


// ⚠️ RECUERDA: Cambiar esto por la URL real de YouTube cuando la tengas
    biografia: [
      "La banda británica de R&B Nine Below Zero, considerada banda de culto por toda Europa, se fundó en Londres en 1977, justo en medio del boom del punk-rock en Inglaterra. Su inspiración, sin embargo, era bien distinta, con miras al blues de Chicago y con influencias de John Mayall, The Kinks y The Who. Guardaban, no obstante, una influencia del punk rock de aquellos años, con el extremadamente energético ataque a sus instrumentos en los directos de la banda.",
      "Considerados por la crítica los más directos rivales de Dr. Feelgood, la banda ha experimentado cambios en su formación, manteniendo no obstante sus dos frontmen: DENNIS GREAVES a la guitarra y voz (lideró también la mítica banda THE TRUTH) y MARK FELTHAM a la armónica y voz, que acompañó al gran RORY GALLAGHER durante 11 años, y que además tiene una grandiosa lista de colaboraciones en grabaciones de Roger Daltrey (The Who), Oasis, The Alarm, New Model Army, Manfred Mann, Nazareth...",
      "A los líderes y miembros fundadores les acompañan ANTHONY HARTY al bajo (The Style Council, The Truth, Specials, The Beat, Badfinger, Steve Marriott, Primitives...) y SONNY GREAVES a la batería.",
      "La banda ha estado presentando su magnífico último álbum '13 Shades of Blue' además de sus grandes clásicos. Además, se acaba de reeditar en España por el sello FOLC RECORDS su legendario 'Live At The Marque' de 1980, que cumple 45 años y que tendremos disponible en esta gira."
    ]
  },
  {
    slug: "los-fulanos",
    nombre: "LOS FULANOS",
    origen: "BARCELONA",
    estilo: "BOOGALOO",
    imagen: "/images/2026/los-fulanos-1.jpg",
    web: "https://www.facebook.com/losfulanosbcn", // ⚠️ RECUERDA: Añadir la web real cuando la tengas
    video: "https://www.youtube.com/watch?v=aR5SPAJr69A", // ⚠️ RECUERDA: Añadir la URL de YouTube cuando la tengas
    biografia: [
      "Después de 10 años de merecido descanso tras una intensa trayectoria por los escenarios de toda Europa, Los Fulanos, la banda más incendiaria del Latin Soul y el Boogaloo barcelonés, regresan a la carga con una formación arrolladora y la incorporación de Paquito Sex Machine a las voces, inyectando nueva energía, ritmo y elegancia a su sonido inconfundible.",
      "Decir Los Fulanos es decir Boogaloo, el género mestizo nacido en el Spanish Harlem a principios de los años sesenta, venerado en los circuitos del Acid Jazz y el Northern Soul, y apadrinado por DJs como Gilles Peterson o Masters at Work. Sin más argumento que el amor por el género, Los Fulanos regeneraron la escena Latin Soul barcelonesa —siguiendo la tradición de bandas como Dr. Calypso— con directos incendiarios en los que rendían homenaje a figuras como Ray Barretto, Joe Bataan o Pete Rodríguez.",
      "Su dinamita sonora se expandió rápidamente por todo el país y los llevó a colaborar con la discográfica Vampi Soul, donde grabaron una serie de singles y EPs (Arqueología EP 2006, Kiss 2007, Use It 2008). En ellos devolvieron joyas como 'Use It Before You Lose It' de Bobby Valentín, 'Soul Drummer' de Ray Barretto o 'Chance for Romance' de Héctor Rivera a su hábitat natural: las pistas de baile de todo el planeta.",
      "El reconocimiento como auténticos renovadores del Latin Soul los llevó a grabar un álbum junto a una de las figuras capitales del género, Joe Bataan. Con él registraron 'King of Latin Soul' (Vampi Soul, 2009) y fueron su banda oficial durante una exitosa gira europea.",
      "Tras años celebrando la edad dorada del Boogaloo, Los Fulanos dieron un paso más con su primer disco de temas propios, 'Si Esto Se Acaba Que Sea El Boogaloo' (Lovemonk, 2012), donde exploraron sus raíces afrolatinas y ampliaron su paleta sonora hacia la Salsa, el Soul y el Bolero. Su potente directo los llevó a festivales como Vic Fezensac (Francia), IlosaariRock (Finlandia), Actual (Logroño), Cultura Inquieta (Getafe), Pirineos Sur, Periferias (Huesca), Slap Festival (Zaragoza) o el BAM de Barcelona. Esa energía quedó plasmada en su álbum en vivo 'Live in Jamboree', que marcó el cierre de una etapa.",
      "Fieles a su esencia, la banda presenta un repertorio non-stop donde el sabor 100% Fulano de sus composiciones originales se entrelaza con los himnos inmortales de Barretto, Rodríguez y Bataan. ¡Ya es un hecho! 2025 marcó el gran reencuentro de Los Fulanos y vuelven a la carga. Are you ready for more?"
    ]
  },
  
  {
    slug: "the-lazy-tones",
    nombre: "THE LAZY TONES",
    origen: "VALENCIA",
    estilo: "BLUES Y R&B",
    imagen: "/images/2026/lazy-tones-1.jpg",
    web: "https://thelazytones.jimdofree.com/", // ⚠️ RECUERDA: Añadir la web real cuando la tengas
    video: "https://www.youtube.com/watch?v=42sS5ae9rTc", // ⚠️ RECUERDA: Añadir la URL de YouTube cuando la tengas
    biografia: [
      "Nacidos en Valencia y profundamente inspirados por el sonido de Chess Records, Lazy Tones recupera la esencia del blues eléctrico de Chicago, el jump blues y el rhythm & blues que dieron forma al rock & roll. Un sonido forjado por artistas como Muddy Waters, Howlin’ Wolf, Little Walter, o Willie Dixon, cuya música cambió para siempre la historia de la música popular.",
      "Su repertorio combina versiones cuidadosamente seleccionadas de los grandes clásicos del blues con composiciones propias que conservan el espíritu, la fuerza y la autenticidad de aquella época. Lejos de limitarse a reproducir el pasado, Lazy Tones aporta una personalidad propia, manteniendo vivo el lenguaje del blues con canciones originales que podrían haber sonado en un club del South Side de Chicago en los años cincuenta.",
      "Con músicos de amplia experiencia sobre los escenarios y festivales por todo el país, la banda ofrece un directo intenso, elegante y lleno de improvisación. Guitarras con carácter, armónica, una sólida sección rítmica y una puesta en escena cercana convierten cada concierto en un viaje a la edad de oro del blues, donde la tradición y la creatividad caminan de la mano.",
      "Porque el blues no pertenece al pasado. Sigue vivo cada vez que se toca con honestidad."
    ]
  },
 

   {
    slug: "haylen",
    nombre: "HAYLEN",
    origen: "FRANCE",
    estilo: "SOUL, BLUES, R'N'R",
    imagen: "/images/2026/haylen-2.jpg",
    web: "https://www.haylenofficial.com", // ⚠️ RECUERDA: Añadir la web real cuando la tengas
    video: "https://www.youtube.com/watch?v=CC6fkqEtswk", // ⚠️ RECUERDA: Añadir la URL de YouTube cuando la tengas
    biografia: [
      "Después de una gira de presentación de 5 fechas en España en enero de este año y con SOLD OUT en todas ellas, y de actuar en varios festivales de verano (Fisterra Experience, Motorbeach, Blues de Antequera, Semana Grande Bilbao...), volverá en Noviembre para continuar su gira por salas.",
      "Haylen tiene una voz poderosa y carismática, una verdadera rockera con tacones altos y una energía escénica magnética. Cantante, guitarrista, autora-compositora, encarna una feminidad libre y moderna, nutrida de influencias vintage y de una profunda ansia de vivir. Su universo mezcla con maestría Soul, Blues y Rock'n'Roll, con una estética auténtica, una modernidad comprometida y un amor sincero por el escenario.",
      "Después de recorrer Francia y Europa con su primer EP 'OUT OF LINE', Haylen se unió al elenco de 'FASHION FREAK SHOW' de Jean Paul Gaultier para una gira mundial y se convirtió en la artista principal del famoso cabaret 'CRAZY HORSE'. Entre 2023 y 2024 realiza dos giras de Zéniths por toda Francia como telonera de Dire Straits Experience, abre los conciertos en el Olympia para Chris Isaak, Post Modern Jukebox (en dos ocasiones), participa en el 120 aniversario de Harley Davidson, y también abre para Robert Cray en La Cigale o Asaf Avidan en Mogador. En abril, abre para una de sus ídolos, Imelda May, en La Traverse de Cléon.",
      "Gracias a estas experiencias, ha sabido imponerse como una artista imprescindible en los últimos años. Recientemente, ha lanzado 'Blue Wine', un álbum de 13 temas, dos de ellos en francés y uno compuesto por Darrel Higham (guitarrista y compositor de Imelda May). En él encontramos la esencia misma de su estilo: una mezcla entre la elegancia de los años 50 y 60 y una urgencia emocional muy actual. El álbum ha sido aclamado por la crítica, en particular por Rolling Stone Magazine, que le dedicó un reportaje de doble página en su número de febrero de 2023.",
      "En 2023 gana dos premios, entre ellos el Gran Premio del Jurado del Cahors Blues Festival. En 2025 actuará en el escenario principal, frente a una afluencia récord en la historia del Festival. Haylen cuenta con el apoyo de Gibson France y es embajadora de la marca estadounidense Klipsch.",
      "En 2025 se presenta y defiende sus canciones en varios festivales y clubes por toda Europa. En abril, se embarca en el Havila Blues Cruise que recorre los fiordos noruegos. En esta ocasión comparte escenario con grandes artistas noruegos reconocidos, y sus conciertos reciben elogios de la prensa local. Actúa en el Wine Festival en Portugal, la noche del sábado como cabeza de cartel junto a su banda original francesa, en la que participa Phil Almosnino a la guitarra (Johnny Hallyday, Les Wampas...).",
      "También se presenta en el Megève Blues Festival con su amigo Johnny Gallagher, donde interpretan dos canciones, entre ellas una versión de 'Tennessee Whiskey', cuya grabación en vídeo ha alcanzado miles de visualizaciones en YouTube. Gira en varias ocasiones por clubes y festivales de blues en toda España, ante un público que no deja de crecer.",
      "En julio de 2025 llega la consagración: cumple uno de sus mayores sueños, tocar en el mítico escenario del Ronnie Scott’s en Londres, junto a su amiga Aisha Khan, en una fecha que se agota por completo."
    ]
  },

    {
    slug: "syl-al",
    nombre: "SYL AL",
    origen: "FRANCE",
    estilo: "DJ - Música seleccionada",
    imagen: "/artistas/syl-al.jpg",
    web: "", // ✏️ Actualizar con la web real
    video: "", // ✏️ Actualizar con URL de YouTube
    biografia: [
      "Syl Al es un referente en la selección musical desde Francia, con una trayectoria dedicada a la excavación sonora y la promoción de los sonidos negros americanos más genuinos: Soul, Funk, Boogaloo y R&B.",
      "Conocido por su capacidad para leer la pista de baile y conectar generaciones a través de la música, sus sets son una masterclass de programación musical, equilibrando himnos clásicos con joyas ocultas de 45 revoluciones.",
      "Su presencia en el Midnight Boogie Weekend es un lujo para los amantes del vinilo, garantizando transiciones impecables y una atmósfera de club auténtico entre los conciertos en directo."
    ]
  },

  {
    slug: "bea-gb",
    nombre: "BEA GB",
    origen: "GASTEIZ",
    estilo: "DJ - Música seleccionada",
    imagen: "/images/2026/bea-gb.png",
    web: "",
    video: "",
    biografia: [
      "BEA GB es una DJ con sede en Vitoria-Gasteiz, reconocida por una selección musical única que conecta la tradición del Northern Soul y el Funk con las pistas de baile más exigentes.",
      "Sus sesiones son un viaje sonoro cuidadosamente curado, donde los vinilos raros y las ediciones limitadas cobran vida. Ha pinchado en algunas de las noches más memorables de la escena local y festivales del norte de España.",
      "En Midnight Boogie 2026, BEA GB será la encargada de calentar los motores el viernes y cerrar la noche del sábado con una sesión especial, asegurando que el groove no se detenga hasta el amanecer."
    ]
  },
 
];