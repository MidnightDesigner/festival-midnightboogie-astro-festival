export interface Entrada {
  id: string;
  fecha: string;
  hora: string;
  evento: string;
  artista: string;
  lugar: string;
  direccion?: string;
  precioAnticipada: string;
  precioTaquilla?: string;
  link: string;
  linkTexto: string;
  estado: "Disponibles" | "Últimas entradas" | "Entradas agotadas";
}

export const entradas2026: Entrada[] = [
  {
    id: "sabado-12-septiembre",
    fecha: "Sábado 12 de Septiembre",
    hora: "20:00h",
    evento: "Concierto de Presentación",
    artista: "Stone Foundation",
    lugar: "Sala Arkabia",
    direccion: "Postas 13-15, Vitoria-Gasteiz",
    precioAnticipada: "15€",
    precioTaquilla: "18€",
    link: "https://arkabia.eus/evento/stone-foundation/",
    linkTexto: "Comprar en Arkabia",
    estado: "Últimas entradas"
  },
  {
    id: "abono-weekend",
    fecha: "Viernes 27 - Sábado 28 Noviembre",
    hora: "21:00h",
    evento: "Abono Weekend",
    artista: "Acceso a ambos conciertos",
    lugar: "Helldorado",
    direccion: "Venta de la Estrella, 6, Pab. 44, Vitoria-Gasteiz",
    precioAnticipada: "39€",
    link: "https://www.musikaze.net/web/?menu=138&pagina=&item=62415&siteID=infiernodorado",
    linkTexto: "Comprar Abono",
    estado: "Disponibles"
  },
  {
    id: "viernes-27-noviembre",
    fecha: "Viernes 27 de Noviembre",
    hora: "21:00h",
    evento: "Noche de Blues & Boogaloo",
    artista: "The Lazy Tones · Los Fulanos",
    lugar: "Helldorado",
    direccion: "Venta de la Estrella, 6, Pab. 44, Vitoria-Gasteiz",
    precioAnticipada: "22€",
    precioTaquilla: "26€",
    link: "https://www.musikaze.net/web/?menu=138&pagina=&item=62415&siteID=infiernodorado",
    linkTexto: "Comprar en Musikaze",
    estado: "Disponibles"
  },
  {
    id: "sabado-28-noviembre",
    fecha: "Sábado 28 de Noviembre",
    hora: "12:00h",
    evento: "Taller Creativo",
    artista: "Taller creativo para los más pequeños",
    lugar: "Creative Soul",
    direccion: "Pintor Pablo Uranga Kalea 22, Vitoria-Gasteiz",
    precioAnticipada: "Gratis con inscripción",
    link: "https://www.fundacionvital.eus/taller-musical-infantil-creative-soul",
    linkTexto: "Inscribirse en Fundación Vital Fundazioa",
    estado: "Disponibles"
  },
  {
    id: "sabado-28-noche",
    fecha: "Sábado 28 de Noviembre",
    hora: "21:00h",
    evento: "Noche de Soul & R'n'R",
    artista: "Haylen · Nine Below Zero",
    lugar: "Helldorado",
    direccion: "Venta de la Estrella, 6, Pab. 44, Vitoria-Gasteiz",
    precioAnticipada: "22€",
    precioTaquilla: "26€",
    link: "https://www.musikaze.net/web/?menu=138&pagina=&item=62415&siteID=infiernodorado",
    linkTexto: "Comprar en Musikaze",
    estado: "Disponibles"
  }
];