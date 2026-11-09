import type { PageContent } from './types';

const es: PageContent = {

  index: {
    viewProgram: "Ver Programa",
  },


  contacto: {
    heroTitle: "Hablemos",
    heroSubtitle: "¿Tienes dudas sobre las entradas, eres de la prensa o quieres proponer una colaboración?. Estamos aquí para ayudarte.",
    infoTitle: "Información General",
    pressTitle: "Prensa y Patrocinios",
    locationsTitle: "Ubicaciones del Festival",
    noteLabel: "NOTA:",
    noteText: "Para consultas sobre contrataciones artísticas, por favor envía un dossier o enlace a tu música a nuestro correo de información (info@midnightboogie.net).",
    ubicaciones: [
      { nombre: "Sala Arkabia", direccion: "Postas 13-15, Vitoria-Gasteiz", evento: "Concierto de Presentación · Septiembre" },
      { nombre: "Ttipia Taberna", direccion: "Zapatería 94, Vitoria-Gasteiz", evento: "Fiesta Posterior" },
      { nombre: "Helldorado", direccion: "Venta de la Estrella, 6 Pab. 44, Vitoria-Gasteiz", evento: "Conciertos de Noviembre · Viernes y Sábado" },
      { nombre: "Sala Arkabia", direccion: "Postas 13-15, Vitoria-Gasteiz", evento: "Taller Familiar · Sábado Noviembre" }
    ]
  },
    entradas: {
    heroTitle: "Entradas",
    heroHighlight: "2026",
    heroSubtitle: "Asegura tu lugar en los conciertos más soul de Vitoria-Gasteiz.<br />Compra tus entradas anticipadas o en taquilla.",
    promoTitle: "Material Promocional",
    promoSubtitle: "Descarga nuestros flyers oficiales para compartir con tus amigos o imprimir.",
    downloadButton: "Descargar PDF",
    recommendedBadge: "Recomendado",
    toastSuccess: "¡Enlace copiado! Pégalo en Instagram",
    copyFallback: "No se pudo copiar el enlace. Por favor, cópialo manualmente: ",
    shareMessage: "¡No te pierdas el Midnight Boogie Weekend 2026! 🎸 ",
    
    flyers: {
      presentacion: { title: "Flyer Presentación", description: "Conciertos de presentación y primeras fechas." },
      completo: { title: "Flyer Festival Completo", description: "Programación completa, artistas y detalles del evento." }
    },
    entradas: {
      "sabado-12-septiembre": { fecha: "Sábado 12 de Septiembre", evento: "Concierto de Presentación", artista: "Stone Foundation", lugar: "Sala Arkabia", precioAnticipada: "15€", precioTaquilla: "18€", linkTexto: "Comprar en Arkabia" },
      "abono-weekend": { fecha: "Viernes 27 - Sábado 28 Noviembre", evento: "Abono Weekend", artista: "Acceso a ambos conciertos", lugar: "Helldorado", precioAnticipada: "39€", linkTexto: "Comprar Abono" },
      "viernes-27-noviembre": { fecha: "Viernes 27 de Noviembre", evento: "Noche de Blues & Boogaloo", artista: "The Lazy Tones · Los Fulanos", lugar: "Helldorado", precioAnticipada: "22€", precioTaquilla: "26€", linkTexto: "Comprar en Musikaze" },
      "sabado-28-noviembre": {
        fecha: "Sábado 28 de Noviembre",
        evento: "¡La música también es cosa de txikis!",
        artista: "Taller de improvisación y experimentación (6-10 años)",
        lugar: "Sala Arkabia",
        precioAnticipada: "Gratis con inscripción",
        linkTexto: "Inscríbete ya"
      },
      "sabado-28-noche": { fecha: "Sábado 28 de Noviembre", evento: "Noche de Soul & R'n'R", artista: "Haylen · Nine Below Zero", lugar: "Helldorado", precioAnticipada: "22€", precioTaquilla: "26€", linkTexto: "Comprar en Musikaze" }
    }
  },
  
  archivo: {
    heroTitle: "Archivo",
    heroSubtitle: "Revive la historia del Midnight Boogie",
    viewFlyer: "Ver flyer",
    comingSoon: "Próximamente",
    ctaTitle: "¿Tienes material de ediciones pasadas?",
    ctaDescription: "Nos encantaría revisar tu foto o vídeo para el archivo oficial del festival.",
    ctaButton: "Contactar con el equipo"
  },
  programa: {
    heroTitle: "Programa",
    heroHighlight: "2026",
    heroSubtitle: "Conciertos en Sala Arkabia y Helldorado, talleres y fiestas posteriores.",
    promoTitle: "Material Promocional",
    promoSubtitle: "Descarga nuestros flyers oficiales para compartir con tus amigos o imprimir.",
    downloadButton: "Descargar PDF",
    recommendedBadge: "Recomendado",
    toastSuccess: "¡Enlace copiado! Pégalo en Instagram",
    copyFallback: "No se pudo copiar el enlace. Por favor, cópialo manualmente: ",
    shareMessage: "¡No te pierdas el Midnight Boogie Weekend 2026! Soul, R&B y mucho más en Vitoria-Gasteiz. 🎸 ",
    flyers: {
      presentacion: { title: "Flyer Presentación", description: "Conciertos de presentación y primeras fechas." },
      completo: { title: "Flyer Festival Completo", description: "Programación completa, artistas y detalles del evento." }
    },
    blocks: {
      presentacion: {
        dia: "Sábado 12",
        mes: "Septiembre",
        tag: "Concierto de Presentación 10ª Edición"
      },
      viernes: {
        dia: "Viernes 27",
        mes: "Noviembre",
        tag: "Midnight Boogie Weekend"
      },
      sabadoTaller: {
        dia: "Sábado 28",
        mes: "Noviembre",
        tag: "Actividad Familiar"
      },
      sabadoNoche: {
        dia: "Sábado 28",
        mes: "Noviembre",
        tag: "Midnight Boogie Weekend"
      }
    },
    events: {
      "presentacion-20:00": {
        titulo: "Noche de Groove & Northern Soul",
        precio: "Entrada única: 15€",
        linkTexto: "Comprar entradas",
        lugar: "Sala Arkabia",
        direccion: "Postas 13-15, Vitoria-Gasteiz",
        horaSuffix: "h",
        artistas: [
          { origen: "UNITED KINGDOM", estilo: "GROOVE · NORTHERN SOUL · FUNK" }
        ]
      },
      "presentacion-23:00": {
        titulo: "Fiesta Posterior",
        precio: "Entrada libre / Consumición",
        lugar: "Ttipia Taberna",
        direccion: "Zapatería 94, Vitoria-Gasteiz",
        horaSuffix: "h",
        artistas: [
          { estilo: "Sesión DJ" },
          { estilo: "Sesión DJ" },
          { estilo: "Sesión DJ" }
        ]
      },
      "viernes-21:00": {
        titulo: "Noche de Blues & Boogaloo",
        precio: "22€ Anticipada / 26€ Taquilla",
        linkTexto: "Comprar entrada",
        lugar: "Helldorado",
        direccion: "Venta de la Estrella, 6 Pab. 44",
        horaSuffix: "h",
        artistas: [
          { origen: "VALENCIA", estilo: "BLUES Y R&B" },
          { origen: "BARCELONA", estilo: "BOOGALOO" },
          { origen: "FRANCE", estilo: "DJ - Música seleccionada" },
          { origen: "GASTEIZ", estilo: "DJ - Música seleccionada" }
        ]
      },
      "sabadoTaller-12:00": {
        titulo: "Taller Musical Infantil",
        descripcion: "Taller musical para los más pequeños (edades 6 a 10 años). Dentro del Midnight Boogie Weekend, la escuela Creative Soul ofrecerá un taller muy didáctico de improvisación y experimentación musical para los peques. Plazas limitadas. Se ruega acudir con 10 minutos de antelación para no retrasar la actividad.",
        precio: "Gratis con inscripción",
        linkTexto: "Inscríbete ya",
        lugar: "Sala Arkabia",
        direccion: "Postas 13-15, Vitoria-Gasteiz",
        horaSuffix: "h"
      },
      "sabadoNoche-21:00": {
        titulo: "Noche de Soul & R'n'R",
        precio: "22€ Anticipada / 26€ Taquilla",
        linkTexto: "Comprar entrada",
        lugar: "Helldorado",
        direccion: "Venta de la Estrella, 6 Pab. 44",
        horaSuffix: "h",
        artistas: [
          { origen: "FRANCE", estilo: "SOUL, BLUES, R'N'R" },
          { origen: "UNITED KINGDOM", estilo: "R&B, PUB ROCK" },
          { origen: "FRANCE", estilo: "DJ - Música seleccionada" },
          { origen: "GASTEIZ", estilo: "DJ - Música seleccionada" }
        ]
      }
    },
    abono: {
      label: "Abono Weekend",
      precio: "39€",
      descripcion: "Para ambos conciertos de Noviembre",
      linkTexto: "Comprar abono"
    }
  },
  artistas: []
};


export default es;