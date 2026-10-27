import type { PageContent } from './types';
import artistasEu from './eu.artistas';

const eu: PageContent = {
  contacto: {
    heroTitle: "Hitz egin dezagun",
    heroSubtitle: "Sarrerei buruzko zalantzarik baduzu, prentsa zara edo lankidetzaren bat proposatu nahi duzu? Hemen gaude laguntzeko.",
    infoTitle: "Informazio orokorra",
    pressTitle: "Prentsa eta babesleak",
    locationsTitle: "Jaialdiaren kokapenak",
    noteLabel: "OHARRA:",
    noteText: "Kontratazio artistikoari buruzko kontsultak egiteko, bidali dosierra edo zure musikaren esteka gure helbide elektronikora.",
    ubicaciones: [
      { nombre: "Arkabia Aretoa", direccion: "Postas 13-15, Gasteiz", evento: "Aurkezpen-kontzertua · Iraila" },
      { nombre: "Ttipia Taberna", direccion: "Zapatería 94, Vitoria-Gasteiz", evento: "Ondorengo festa" },
      { nombre: "Helldorado", direccion: "Venta de la Estrella, 6, 44. pabiloia", evento: "Azaroko kontzertuak · Ostirala eta larunbata" },
      { nombre: "Creative Soul", direccion: "Pintor Pablo Uranga Kalea 22", evento: "Familia-tailerra · Larunbata, azaroa" }
    ]
  },
  entradas: {
    heroTitle: "Sarrerak",
    heroHighlight: "2026",
    heroSubtitle: "Zure lekua bermatu Vitoria-Gasteizko soul kontzerturik onenetan.<br />Erosi zure sarrerak aldez aurretik edo leihatilan.",
    promoTitle: "Sustapen Materiala",
    promoSubtitle: "Deskargatu gure flyer ofizialak zure lagunekin partekatzeko edo inprimatzeko.",
    downloadButton: "Deskargatu PDFa",
    recommendedBadge: "Gomendatua",
    toastSuccess: "Esteka kopiatuta! Itsatsi Instagram-en",
    copyFallback: "Ezinezkoa izan da esteka kopiatzea. Mesedez, kopiatu eskuz: ",
    shareMessage: "Ez galdu Midnight Boogie Weekend 2026! 🎸",
    ticketNotice: "Erosle guztiek bazkide izan behar dute. Erosteko, bazkide gisa identifikatu behar zara.",
    ticketContact: "Ordutegiei, adingabeen sarbideari edo antolaketari buruzko zalantzarik? Idatzi webmaster@helldorado.net helbidera",
    flyers: {
      presentacion: { title: "Aurkezpen Flyer", description: "Aurkezpen kontzertuak eta lehen hitzorduak." },
      completo: { title: "Jaialdiaren Flyer osoa", description: "Egitarau osoa, artistak eta ekitaldiaren xehetasunak." }
    },
    entradas: {
      "sabado-12-septiembre": { fecha: "Irailaren 12a, larunbata", evento: "Aurkezpen-kontzertua", artista: "Stone Foundation", lugar: "Arkabia Aretoa", precioAnticipada: "15 €", precioTaquilla: "18 €", linkTexto: "Erosi Sarrerak" },
      "abono-weekend": { fecha: "Azaroak 27, ostirala - Azaroak 28, larunbata", evento: "Asteburuko bonua", artista: "Bi kontzertuetarako sarbidea", lugar: "Helldorado", precioAnticipada: "39 €", linkTexto: "Erosi bonua" },
      "viernes-27-noviembre": { fecha: "Azaroak 27, ostirala", evento: "Blues eta Boogaloo gaua", artista: "The Lazy Tones · Los Fulanos", lugar: "Helldorado", precioAnticipada: "22 €", precioTaquilla: "26 €", linkTexto: "Erosi Musikazen" },
      "sabado-28-noviembre": { fecha: "Azaroak 28, larunbata", evento: "Sormen-tailerra", artista: "Haurrentzako sormen-tailerra", lugar: "Creative Soul", precioAnticipada: "Doan, izena emanda", linkTexto: "Eman izena Vital Fundazioaren webgunean" },
      "sabado-28-noche": { fecha: "Azaroak 28, larunbata", evento: "Soul eta R'n'R gaua", artista: "Haylen · Nine Below Zero", lugar: "Helldorado", precioAnticipada: "22 €", precioTaquilla: "26 €", linkTexto: "Erosi Musikazen" }
    }
  },
  archivo: {
    heroTitle: "Artxiboa",
    heroSubtitle: "Bizi ezazu Midnight Boogie-ren historia",
    viewFlyer: "Ikusi flyerra",
    comingSoon: "Laster",
    ctaTitle: "Edizio pasatuetako materialik baduzu?",
    ctaDescription: "Gustura aztertuko genuke zure argazkia edo bideoa jaialdiaren artxibo ofizialerako.",
    ctaButton: "Taldearekin harremanetan jarri"
  },
  programa: {
    heroTitle: "Egitaraua",
    heroHighlight: "2026",
    heroSubtitle: "Kontzertuak Arkabia Sala eta Helldorado-n, tailerrak eta ondorengo festak.",
    promoTitle: "Sustapen Materiala",
    promoSubtitle: "Deskargatu gure flyer ofizialak zure lagunekin partekatzeko edo inprimatzeko.",
    downloadButton: "Deskargatu PDFa",
    recommendedBadge: "Gomendatua",
    toastSuccess: "Esteka kopiatuta! Itsatsi Instagram-en",
    copyFallback: "Ezinezkoa izan da esteka kopiatzea. Mesedez, kopiatu eskuz: ",
    shareMessage: "Ez galdu Midnight Boogie Weekend 2026! 🎸",
    flyers: {
      presentacion: { title: "Aurkezpen Flyer", description: "Aurkezpen kontzertuak eta lehen hitzorduak." },
      completo: { title: "Jaialdiaren Flyer osoa", description: "Egitarau osoa, artistak eta ekitaldiaren xehetasunak." }
    },
   blocks: {
  presentacion: {
    dia: "12a, larunbata",
    mes: "Irailaren",
    tag: "10. edizioaren aurkezpen-kontzertua",
    orden: "mes-dia"
  },
  viernes: {
    dia: "27a, ostirala",
    mes: "Azaroaren",
    tag: "Midnight Boogie Weekend",
    orden: "mes-dia"
  },
  sabadoTaller: {
    dia: "28a, larunbata",
    mes: "Azaroaren",
    tag: "Familia jarduera",
    orden: "mes-dia"
  },
  sabadoNoche: {
    dia: "28a, larunbata",
    mes: "Azaroaren",
    tag: "Midnight Boogie Weekend",
    orden: "mes-dia"
  }
},
    events: {
      "presentacion-20:00": {
        titulo: "Groove & Northern Soul Gaua",
        precio: "Sarrera bakarra: 15 €",
        linkTexto: "Erosi Sarrerak",
        lugar: "Arkabia Aretoa",
        direccion: "Postas 13-15, Gasteiz",
        horaSuffix: "etan",
        artistas: [
          { origen: "ERRESUMA BATUA", estilo: "Groove · Northern Soul · Funk" }
        ]
      },
      "presentacion-23:00": {
        titulo: "Festa ondoren",
        precio: "Sarrera doan / Kontsumizioa barne",
        lugar: "Ttipia Taberna",
        direccion: "Zapatería 94, Vitoria-Gasteiz",
        horaSuffix: "etan",
        artistas: [
          { estilo: "DJ Set" },
          { estilo: "DJ Set" },
          { estilo: "DJ Set" }
        ]
      },
      "viernes-21:00": {
        titulo: "Blues eta Boogaloo Gaua",
        precio: "22 € aldez aurretik / 26 € leihatilan",
        linkTexto: "Erosi Musikazen",
        lugar: "Helldorado",
        direccion: "Venta de la Estrella, 6, 44. pabiloia",
        horaSuffix: "",
        artistas: [
          { origen: "VALENTZIA", estilo: "Blues eta R&B" },
          { origen: "BARTZELONA", estilo: "Boogaloo" },
          { origen: "FRANTZIA", estilo: "DJ - Hautatutako Musika" },
          { origen: "GASTEIZ", estilo: "DJ - Musika aukeraketa" }
        ]
      },
      "sabadoTaller-12:00": {
        titulo: "Creative Soul tailerra",
       descripcion: "Musika tailerra txikientzat (6-10 urte). Gure programan klasiko bat: Creative Soul musika eskolak inprobisazio eta esperimentazio musikaleko tailer oso hezigarria eskainiko die haurrei. Leku mugatuak: 30. Mesedez, etorri 10 minutu lehenago jarduera ez atzeratzeko.",
        precio: "Doan, izena emanda",
        linkTexto: "Eman izena Vital Fundazioaren webgunean",
        lugar: "Creative Soul",
        direccion: "Pintor Pablo Uranga Kalea 22",
        horaSuffix: "etan"
      },
      "sabadoNoche-21:00": {
        titulo: "Soul & R'n'R Gaua",
        precio: "22 € aldez aurretik / 26 € leihatilan",
        linkTexto: "Erosi Musikazen",
        lugar: "Helldorado",
        direccion: "Venta de la Estrella, 6, 44. pabiloia",
        horaSuffix: "",
        artistas: [
          { origen: "FRANTZIA", estilo: "Soul, Blues, R'n'R" },
          { origen: "ERRESUMA BATUA", estilo: "R&B, Pubrock" },
          { origen: "FRANTZIA", estilo: "DJ - Hautatutako Musika" },
          { origen: "GASTEIZ", estilo: "DJ - Musika aukeraketa" }
        ]
      }
    },
    abono: {
      label: "Asteburuko bonua",
      precio: "39 €",
      descripcion: "Azaroko bi kontzertuetarako",
      linkTexto: "Erosi bonua"
    }
  },
    artistas: artistasEu
};

export default eu;