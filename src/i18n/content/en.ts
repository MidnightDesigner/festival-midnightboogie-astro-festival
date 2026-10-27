import type { PageContent } from './types';
import artistasEn from './en.artistas';

const en: PageContent = {
  contacto: {
    heroTitle: "Let's Talk",
    heroSubtitle: "Do you have questions about tickets, are you press, or do you want to propose a collaboration? We're here to help.",
    infoTitle: "General Information",
    pressTitle: "Press & Sponsorships",
    locationsTitle: "Festival Locations",
    noteLabel: "NOTE:",
    noteText: "For artistic booking inquiries, please send a dossier or a link to your music to our information email (info@midnightboogie.net).",
    ubicaciones: [
      { nombre: "Sala Arkabia", direccion: "Postas 13-15, Vitoria-Gasteiz", evento: "Opening Concert · September" },
      { nombre: "Ttipia Taberna", direccion: "Zapatería 94, Vitoria-Gasteiz", evento: "After Party" },
      { nombre: "Helldorado", direccion: "Venta de la Estrella, 6 Pab. 44, Vitoria-Gasteiz", evento: "November Concerts · Friday & Saturday" },
      { nombre: "Creative Soul", direccion: "Pintor Pablo Uranga Kalea 22, Vitoria-Gasteiz", evento: "Family Workshop · Saturday November" }
    ]
  },
  entradas: {
    heroTitle: "Tickets",
    heroHighlight: "2026",
    heroSubtitle: "Secure your spot at the soulest concerts in Vitoria-Gasteiz.<br />Buy your tickets in advance or at the box office.",
    promoTitle: "Promotional Material",
    promoSubtitle: "Download our official flyers to share with friends or print.",
    downloadButton: "Download PDF",
    recommendedBadge: "Recommended",
    toastSuccess: "Link copied! Paste it on Instagram",
    copyFallback: "Could not copy the link. Please copy it manually: ",
    shareMessage: "Don't miss the Midnight Boogie Weekend 2026! 🎸 ",
    ticketNotice: "All buyers must be members. To purchase, you must identify yourself as a member.",
    ticketContact: "Questions about schedules, minors' access, or the organization? Write to webmaster@helldorado.net",
    flyers: {
      presentacion: { title: "Opening Flyer", description: "Opening concerts and first dates." },
      completo: { title: "Full Festival Flyer", description: "Full schedule, artists and event details." }
    },
    entradas: {
      "sabado-12-septiembre": { fecha: "Saturday, September 12", evento: "Opening Concert", artista: "Stone Foundation", lugar: "Sala Arkabia", precioAnticipada: "€15", precioTaquilla: "€18", linkTexto: "Buy at Arkabia" },
      "abono-weekend": { fecha: "Friday 27 - Saturday 28 November", evento: "Weekend Pass", artista: "Access to both concerts", lugar: "Helldorado", precioAnticipada: "€39", linkTexto: "Buy Pass" },
      "viernes-27-noviembre": { fecha: "Friday, November 27", evento: "Blues & Boogaloo Night", artista: "The Lazy Tones · Los Fulanos", lugar: "Helldorado", precioAnticipada: "€22", precioTaquilla: "€26", linkTexto: "Buy at Musikaze" },
      "sabado-28-noviembre": { fecha: "Saturday, November 28", evento: "Creative Workshop", artista: "Creative workshop for the little ones", lugar: "Creative Soul", precioAnticipada: "Free with registration", linkTexto: "Register at Fundación Vital website" },
      "sabado-28-noche": { fecha: "Saturday, November 28", evento: "Soul & R'n'R Night", artista: "Haylen · Nine Below Zero", lugar: "Helldorado", precioAnticipada: "€22", precioTaquilla: "€26", linkTexto: "Buy at Musikaze" }
    }
  },
  archivo: {
    heroTitle: "Archive",
    heroSubtitle: "Relive the history of Midnight Boogie",
    viewFlyer: "View flyer",
    comingSoon: "Coming soon",
    ctaTitle: "Do you have material from past editions?",
    ctaDescription: "We'd love to review your photo or video for the official festival archive.",
    ctaButton: "Contact the team",
    ediciones: {
      "Midnight Boogie 2025": { dates: "November 5, 27, 28 & 29, 2025", description: "2025 festival edition." },
      "Midnight Boogie 2024": { dates: "November 8 & 9, 2024", description: "2024 festival edition." },
      "Midnight Boogie 2023": { dates: "November 9, 10 & 11, 2023", description: "2023 festival edition." },
      "Midnight Boogie 2022": { dates: "December 2 & 3, 2022", description: "2022 festival edition." },
      "Midnight Boogie 2021 2º": { dates: "November 25, 26, 27 & 28, 2021", description: "Second 2021 festival edition." },
      "Midnight Boogie 2021 1º": { dates: "January 9, 2020", description: "First 2021 festival edition." },
      "Midnight Boogie 2019": { dates: "November 21, 22 & 23, 2019", description: "2019 festival edition." },
      "Midnight Boogie 2018": { dates: "November 22, 23 & 24, 2018", description: "2018 festival edition." },
      "Midnight Boogie 2017": { dates: "November 23, 24 & 25, 2017", description: "2017 festival edition." }
    }
  },
  programa: {
    heroTitle: "Schedule",
    heroHighlight: "2026",
    heroSubtitle: "Concerts at Sala Arkabia and Helldorado, workshops and after-parties.",
    promoTitle: "Promotional Material",
    promoSubtitle: "Download our official flyers to share with friends or print.",
    downloadButton: "Download PDF",
    recommendedBadge: "Recommended",
    toastSuccess: "Link copied! Paste it on Instagram",
    copyFallback: "Could not copy the link. Please copy it manually: ",
    shareMessage: "Don't miss the Midnight Boogie Weekend 2026! Soul, R&B and much more in Vitoria-Gasteiz. 🎸 ",
    flyers: {
      presentacion: { title: "Opening Flyer", description: "Opening concerts and first dates." },
      completo: { title: "Full Festival Flyer", description: "Full schedule, artists and event details." }
    },
    blocks: {
      presentacion: { dia: "Saturday 12", mes: "September", tag: "10th Edition Opening Concert" },
      viernes: { dia: "Friday 27", mes: "November", tag: "Midnight Boogie Weekend" },
      sabadoTaller: { dia: "Saturday 28", mes: "November", tag: "Family Activity" },
      sabadoNoche: { dia: "Saturday 28", mes: "November", tag: "Midnight Boogie Weekend" }
    },
    events: {
      "presentacion-20:00": {
        titulo: "Groove & Northern Soul Night",
        precio: "Single ticket: €15",
        linkTexto: "Buy tickets",
        lugar: "Sala Arkabia",
        direccion: "Postas 13-15, Vitoria-Gasteiz",
        horaSuffix: "h",
        artistas: [
          { origen: "UNITED KINGDOM", estilo: "Groove · Northern Soul · Funk" }
        ]
      },
      "presentacion-23:00": {
        titulo: "After Party",
        precio: "Free entry / Drink",
        lugar: "Ttipia Taberna",
        direccion: "Zapatería 94, Vitoria-Gasteiz",
        horaSuffix: "h",
        artistas: [
          { estilo: "DJ Set" },
          { estilo: "DJ Set" },
          { estilo: "DJ Set" }
        ]
      },
      "viernes-21:00": {
        titulo: "Blues & Boogaloo Night",
        precio: "€22 advance / €26 box office",
        linkTexto: "Buy at Musikaze",
        lugar: "Helldorado",
        direccion: "Venta de la Estrella, 6 Pab. 44",
        horaSuffix: "h",
        artistas: [
          { origen: "VALENCIA", estilo: "Blues & R&B" },
          { origen: "BARCELONA", estilo: "Boogaloo" },
          { origen: "FRANCE", estilo: "DJ - Selected Music" },
          { origen: "GASTEIZ", estilo: "DJ - Music Selection" }
        ]
      },
      "sabadoTaller-12:00": {
        titulo: "Creative Soul Workshop",
        descripcion: "Music workshop for the little ones. A classic in our programme: the Creative Soul music school will offer a highly educational improvisation and music experimentation workshop for kids.",
        precio: "Free with registration",
        linkTexto: "Register at Fundación Vital website",
        lugar: "Creative Soul",
        direccion: "Pintor Pablo Uranga Kalea 22",
        horaSuffix: "h"
      },
      "sabadoNoche-21:00": {
        titulo: "Soul & R'n'R Night",
        precio: "€22 advance / €26 box office",
        linkTexto: "Buy at Musikaze",
        lugar: "Helldorado",
        direccion: "Venta de la Estrella, 6 Pab. 44",
        horaSuffix: "h",
        artistas: [
          { origen: "FRANCE", estilo: "Soul, Blues, R'n'R" },
          { origen: "UNITED KINGDOM", estilo: "R&B, Pub Rock" },
          { origen: "FRANCE", estilo: "DJ - Selected Music" },
          { origen: "GASTEIZ", estilo: "DJ - Music Selection" }
        ]
      }
    },
    abono: {
      label: "Weekend Pass",
      precio: "€39",
      descripcion: "For both November concerts",
      linkTexto: "Buy pass"
    }
  },
  artistas: artistasEn
};

export default en;