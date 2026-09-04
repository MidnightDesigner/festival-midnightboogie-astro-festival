// src/data/entradas.ts

export interface Entrada {
  id: string;
  fecha: string;
  hora: string;
  evento: string;
  artista: string;
  lugar: string;
  precioAnticipada: string;
  precioTaquilla?: string; // Opcional (pon "?" al final si no siempre existe)
  link: string;
  linkTexto: string;
  estado: "Disponible" | "Últimas entradas" | "Agotado";
}

export const entradas2026: Entrada[] = [
  // ============================================
  // EVENTO 1: PRESENTACIÓN SEPTIEMBRE
  // ============================================
  {
    id: "sabado-12-septiembre",
    fecha: "Sábado 12 de Septiembre",
    hora: "20:00h",
    evento: "Concierto de Presentación",
    artista: "Stone Foundation",
    lugar: "Sala Arkabia, Vitoria-Gasteiz",
    precioAnticipada: "15€",
    precioTaquilla: "18€",
    link: "https://www.arkabia.eus",
    linkTexto: "Comprar en Arkabia",
    estado: "Disponible"
  },

  // ============================================
  // EVENTO 2: ABONO WEEKEND
  // ============================================
  {
    id: "abono-weekend",
    fecha: "Viernes 27 - Sábado 28 Noviembre",
    hora: "21:00h",
    evento: "Abono Weekend",
    artista: "Acceso a ambos conciertos",
    lugar: "Helldorado, Vitoria-Gasteiz",
    precioAnticipada: "39€",

    link: "https://www.musikaze.net/web/?menu=138&pagina=&item=62415&siteID=infiernodorado",
    linkTexto: "Comprar Abono",
    estado: "Disponible"
  },

  // ============================================
  // EVENTO 3: VIERNES 27 NOVIEMBRE
  // ============================================
  {
    id: "viernes-27-noviembre",
    fecha: "Viernes 27 de Noviembre",
    hora: "21:00h",
    evento: "Noche de Blues & Boogaloo",
    artista: "The Lazy Tones · Los Fulanos",
    lugar: "Helldorado, Vitoria-Gasteiz",
    precioAnticipada: "22€",
    precioTaquilla: "26€",
    link: "https://www.musikaze.net/web/?menu=138&pagina=&item=62415&siteID=infiernodorado",
    linkTexto: "Comprar en Musikaze",
    estado: "Disponible"
  },


  // ============================================
  // EVENTO 4: SÁBADO 28 NOVIEMBRE TALLER
  // ============================================
  {
    id: "sabado-28-noviembre",
    fecha: "Sábado 28 de Noviembre",
    hora: "12:00h",
    evento: "Taller Creativo",
    artista: "Taller creativo para los más pequeños",
    lugar: "Pintor Pablo Uranga Kalea 22",
    precioAnticipada: "Gratis con inscripción",
    link: "https://www.fundacionvital.eus/",
    linkTexto: "Inscribirse en Fundación Vital Fundazioa",
    estado: "Disponible"
  },




  // ============================================
  // EVENTO 4: SÁBADO 28 NOVIEMBRE NOCHE
  // ============================================
  {
    id: "sabado-28-noviembre",
    fecha: "Sábado 28 de Noviembre",
    hora: "21:00h",
    evento: "Noche de Soul & R'n'R",
    artista: "Haylen · Nine Below Zero ",
    lugar: "Helldorado, Vitoria-Gasteiz",
    precioAnticipada: "22€",
    precioTaquilla: "26€",
    link: "https://www.musikaze.net/web/?menu=138&pagina=&item=62415&siteID=infiernodorado",
    linkTexto: "Comprar en Musikaze",
    estado: "Disponible"
  }

  // ============================================
  // AÑADIR MÁS EVENTOS AQUÍ DEBAJO:
  // ============================================
  // Copia cualquiera de los bloques anteriores y cámbialo
];