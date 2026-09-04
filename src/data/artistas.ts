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
    imagen: "/artistas/stone-foundation.jpg",
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
    slug: "bea-gb",
    nombre: "BEA GB",
    origen: "GASTEIZ",
    estilo: "DJ - Música seleccionada",
    imagen: "/artistas/bea-gb.png",
    web: "",
    video: "",
    biografia: [
      "BEA GB es una DJ con sede en Vitoria-Gasteiz, reconocida por una selección musical única que conecta la tradición del Northern Soul y el Funk con las pistas de baile más exigentes.",
      "Sus sesiones son un viaje sonoro cuidadosamente curado, donde los vinilos raros y las ediciones limitadas cobran vida. Ha pinchado en algunas de las noches más memorables de la escena local y festivales del norte de España.",
      "En Midnight Boogie 2026, BEA GB será la encargada de calentar los motores el viernes y cerrar la noche del sábado con una sesión especial, asegurando que el groove no se detenga hasta el amanecer."
    ]
  },
  {
    slug: "the-lazy-tones",
    nombre: "THE LAZY TONES",
    origen: "VALENCIA",
    estilo: "BLUES Y R&B",
    imagen: "/artistas/the-lazy-tones.jpg",
    web: "", // ✏️ Actualizar con la web real
    video: "", // ✏️ Actualizar con URL de YouTube
    biografia: [
      "The Lazy Tones son una de las formaciones más vibrantes y auténticas de la escena musical de Valencia. Con una propuesta que bebe directamente de las fuentes del Blues y el R&B clásico, la banda ha logrado forjar un sonido propio, enérgico y contundente.",
      "Sus directos son una explosión de honestidad musical, donde las guitarras punzantes, una sección rítmica sólida y unas voces con alma se combinan para transportar al público a los clubes de Chicago y Memphis de los años 60.",
      "Con varios trabajos discográficos a sus espaldas y una presencia constante en los mejores festivales de blues del estado, The Lazy Tones aterrizan en el Midnight Boogie para demostrar por qué son una de las bandas de R&B más respetadas del momento."
    ]
  },
  {
    slug: "los-fulanos",
    nombre: "LOS FULANOS",
    origen: "BARCELONA",
    estilo: "BOOGALOO",
    imagen: "/artistas/los-fulanos.jpg",
    web: "", // ✏️ Actualizar con la web real
    video: "", // ✏️ Actualizar con URL de YouTube
    biografia: [
      "Desde Barcelona, Los Fulanos rescatan el sonido más auténtico y bailable del Boogaloo y el Latin Soul. Su música es un homenaje directo a la escena neoyorquina de finales de los 60, donde el jazz, el mambo y el R&B se fusionaron en las calles del Spanish Harlem.",
      "Con una puesta en escena arrebatadora, metales potentes y ritmos que obligan a mover los pies, la banda ha sabido modernizar el género sin perder ni un ápice de su esencia clásica y festiva.",
      "Su paso por el Midnight Boogie promete ser una de las noches más calientes del fin de semana, trayendo el sabor latino y el groove inconfundible que solo el buen boogaloo puede ofrecer."
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
    slug: "haylen",
    nombre: "HAYLEN",
    origen: "FRANCE",
    estilo: "SOUL, BLUES, R'N'R",
    imagen: "/artistas/haylen.jpg",
    web: "", // ✏️ Actualizar con la web real
    video: "", // ✏️ Actualizar con URL de YouTube
    biografia: [
      "Haylen llega desde Francia con una propuesta que fusiona la crudeza del Blues, la elegancia del Soul y la energía desenfrenada del Rock 'n' Roll. La banda ha destacado en la escena europea por su sonido potente y su carisma escénico.",
      "Sus composiciones originales beben de las grandes leyendas del género, pero con un enfoque fresco y contemporáneo que los hace sonar actuales y urgentes. Las guitarras distorsionadas se entrelazan con melodías vocales cautivadoras.",
      "Su actuación en el Helldorado durante el sábado noche del Midnight Boogie será una de las citas ineludibles, prometiendo un directo de alta octanaje que dejará huella en el público."
    ]
  },
  {
    slug: "nine-below-zero",
    nombre: "NINE BELOW ZERO",
    origen: "UNITED KINGDOM",
    estilo: "R&B, PUBROCK",
    imagen: "/artistas/nine-below-zero.jpg",
    web: "https://www.ninebelowzero.com", // ✏️ Verificar URL
    video: "https://www.youtube.com/watch?v=example", // ✏️ Actualizar con URL de YouTube
    biografia: [
      "Leyendas vivas del R&B británico. Formados en Londres en 1977, Nine Below Zero emergieron de la escena Pub Rock con una energía arrolladora, liderados por la inconfundible armónica y voz de Dennis Greaves.",
      "Su álbum debut 'Live at the Marquee' (1980) es considerado un clásico de culto. A lo largo de su carrera, han compartido cartel con gigantes como The Who, Status Quo y Rory Gallagher, y han sido pioneros en mantener vivo el espíritu del blues eléctrico en el Reino Unido.",
      "Traer a Nine Below Zero al Midnight Boogie 2026 es un auténtico golpe sobre la mesa. Su directo es una clase magistral de cómo el R&B debe sonar: crudo, honesto y con una potencia que atraviesa el pecho."
    ]
  }
];