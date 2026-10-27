import type { PageContent } from './types';
import artistasFr from './fr.artistas';

const fr: PageContent = {
  contacto: {
    heroTitle: "Parlons-en",
    heroSubtitle: "Vous avez des questions sur les billets, vous êtes journaliste, ou vous souhaitez proposer une collaboration ? Nous sommes là pour vous aider.",
    infoTitle: "Informations Générales",
    pressTitle: "Presse & Partenariats",
    locationsTitle: "Lieux du Festival",
    noteLabel: "NOTE :",
    noteText: "Pour toute demande de programmation artistique, merci d'envoyer un dossier ou un lien vers votre musique à notre adresse d'information (info@midnightboogie.net).",
    ubicaciones: [
      { nombre: "Sala Arkabia", direccion: "Postas 13-15, Vitoria-Gasteiz", evento: "Concert d'Ouverture · Septembre" },
      { nombre: "Ttipia Taberna", direccion: "Zapatería 94, Vitoria-Gasteiz", evento: "After Party" },
      { nombre: "Helldorado", direccion: "Venta de la Estrella, 6 Pab. 44, Vitoria-Gasteiz", evento: "Concerts de Novembre · Vendredi & Samedi" },
      { nombre: "Creative Soul", direccion: "Pintor Pablo Uranga Kalea 22, Vitoria-Gasteiz", evento: "Atelier Familial · Samedi Novembre" }
    ]
  },
  entradas: {
    heroTitle: "Billetterie",
    heroHighlight: "2026",
    heroSubtitle: "Réservez votre place pour les concerts les plus soul de Vitoria-Gasteiz.<br />Achetez vos billets en prévente ou sur place.",
    promoTitle: "Matériel Promotionnel",
    promoSubtitle: "Téléchargez nos flyers officiels pour les partager avec vos amis ou les imprimer.",
    downloadButton: "Télécharger le PDF",
    recommendedBadge: "Recommandé",
    toastSuccess: "Lien copié ! Collez-le sur Instagram",
    copyFallback: "Impossible de copier le lien. Merci de le copier manuellement : ",
    shareMessage: "Ne manquez pas le Midnight Boogie Weekend 2026 ! 🎸 ",
    ticketNotice: "Tous les acheteurs doivent être membres. Pour acheter, vous devez vous identifier en tant que membre.",
    ticketContact: "Des questions sur les horaires, l'accès des mineurs ou l'organisation ? Écrivez à webmaster@helldorado.net",
    flyers: {
      presentacion: { title: "Flyer d'Ouverture", description: "Concerts d'ouverture et premières dates." },
      completo: { title: "Flyer Festival Complet", description: "Programme complet, artistes et détails de l'événement." }
    },
    entradas: {
      "sabado-12-septiembre": { fecha: "Samedi 12 septembre", evento: "Concert d'Ouverture", artista: "Stone Foundation", lugar: "Sala Arkabia", precioAnticipada: "15€", precioTaquilla: "18€", linkTexto: "Acheter sur Arkabia" },
      "abono-weekend": { fecha: "Vendredi 27 - Samedi 28 Novembre", evento: "Pass Weekend", artista: "Accès aux deux concerts", lugar: "Helldorado", precioAnticipada: "39€", linkTexto: "Acheter le Pass" },
      "viernes-27-noviembre": { fecha: "Vendredi 27 novembre", evento: "Soirée Blues & Boogaloo", artista: "The Lazy Tones · Los Fulanos", lugar: "Helldorado", precioAnticipada: "22€", precioTaquilla: "26€", linkTexto: "Acheter sur Musikaze" },
      "sabado-28-noviembre": { fecha: "Samedi 28 novembre", evento: "Atelier Créatif", artista: "Atelier créatif pour les plus petits", lugar: "Creative Soul", precioAnticipada: "Gratuit sur inscription", linkTexto: "S'inscrire sur le site de Fundación Vital" },
      "sabado-28-noche": { fecha: "Samedi 28 novembre", evento: "Soirée Soul & R'n'R", artista: "Haylen · Nine Below Zero", lugar: "Helldorado", precioAnticipada: "22€", precioTaquilla: "26€", linkTexto: "Acheter sur Musikaze" }
    }
  },
  archivo: {
    heroTitle: "Archives",
    heroSubtitle: "Revivez l'histoire du Midnight Boogie",
    viewFlyer: "Voir le flyer",
    comingSoon: "Bientôt disponible",
    ctaTitle: "Vous avez du matériel des éditions passées ?",
    ctaDescription: "Nous serions ravis d'examiner votre photo ou vidéo pour l'archive officielle du festival.",
    ctaButton: "Contacter l'équipe",
    ediciones: {
      "Midnight Boogie 2025": { dates: "5, 27, 28 & 29 novembre 2025", description: "Édition 2025 du festival." },
      "Midnight Boogie 2024": { dates: "8 & 9 novembre 2024", description: "Édition 2024 du festival." },
      "Midnight Boogie 2023": { dates: "9, 10 & 11 novembre 2023", description: "Édition 2023 du festival." },
      "Midnight Boogie 2022": { dates: "2 & 3 décembre 2022", description: "Édition 2022 du festival." },
      "Midnight Boogie 2021 2º": { dates: "25, 26, 27 & 28 novembre 2021", description: "Deuxième édition 2021 du festival." },
      "Midnight Boogie 2021 1º": { dates: "9 janvier 2020", description: "Première édition 2021 du festival." },
      "Midnight Boogie 2019": { dates: "21, 22 & 23 novembre 2019", description: "Édition 2019 du festival." },
      "Midnight Boogie 2018": { dates: "22, 23 & 24 novembre 2018", description: "Édition 2018 du festival." },
      "Midnight Boogie 2017": { dates: "23, 24 & 25 novembre 2017", description: "Édition 2017 du festival." }
    }
  },
  programa: {
    heroTitle: "Programme",
    heroHighlight: "2026",
    heroSubtitle: "Concerts à la Sala Arkabia et à l'Helldorado, ateliers et after-parties.",
    promoTitle: "Matériel Promotionnel",
    promoSubtitle: "Téléchargez nos flyers officiels pour les partager avec vos amis ou les imprimer.",
    downloadButton: "Télécharger le PDF",
    recommendedBadge: "Recommandé",
    toastSuccess: "Lien copié ! Collez-le sur Instagram",
    copyFallback: "Impossible de copier le lien. Merci de le copier manuellement : ",
    shareMessage: "Ne manquez pas le Midnight Boogie Weekend 2026 ! Soul, R&B et bien plus à Vitoria-Gasteiz. 🎸 ",
    flyers: {
      presentacion: { title: "Flyer d'Ouverture", description: "Concerts d'ouverture et premières dates." },
      completo: { title: "Flyer Festival Complet", description: "Programme complet, artistes et détails de l'événement." }
    },
    blocks: {
      presentacion: { dia: "Samedi 12", mes: "Septembre", tag: "Concert d'Ouverture 10e Édition" },
      viernes: { dia: "Vendredi 27", mes: "Novembre", tag: "Midnight Boogie Weekend" },
      sabadoTaller: { dia: "Samedi 28", mes: "Novembre", tag: "Activité Familiale" },
      sabadoNoche: { dia: "Samedi 28", mes: "Novembre", tag: "Midnight Boogie Weekend" }
    },
    events: {
      "presentacion-20:00": {
        titulo: "Soirée Groove & Northern Soul",
        precio: "Billet unique : 15€",
        linkTexto: "Acheter des billets",
        lugar: "Sala Arkabia",
        direccion: "Postas 13-15, Vitoria-Gasteiz",
        horaSuffix: "h",
        artistas: [
          { origen: "ROYAUME-UNI", estilo: "Groove · Northern Soul · Funk" }
        ]
      },
      "presentacion-23:00": {
        titulo: "After Party",
        precio: "Entrée libre / Consommation",
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
        titulo: "Soirée Blues & Boogaloo",
        precio: "22€ prévente / 26€ sur place",
        linkTexto: "Acheter sur Musikaze",
        lugar: "Helldorado",
        direccion: "Venta de la Estrella, 6 Pab. 44",
        horaSuffix: "h",
        artistas: [
          { origen: "VALENCE", estilo: "Blues & R&B" },
          { origen: "BARCELONE", estilo: "Boogaloo" },
          { origen: "FRANCE", estilo: "DJ - Musique Sélectionnée" },
          { origen: "GASTEIZ", estilo: "DJ - Sélection Musicale" }
        ]
      },
      "sabadoTaller-12:00": {
        titulo: "Atelier Creative Soul",
      descripcion: "Atelier musical pour les plus petits (de 6 à 10 ans). Un classique de notre programmation : l'école de musique Creative Soul proposera un atelier très pédagogique d'improvisation et d'expérimentation musicale pour les enfants. Places limitées : 30. Merci d'arriver 10 minutes à l'avance pour ne pas retarder l'activité.",
        linkTexto: "S'inscrire sur le site de Fundación Vital",
        lugar: "Creative Soul",
        direccion: "Pintor Pablo Uranga Kalea 22",
        horaSuffix: "h"
      },
      "sabadoNoche-21:00": {
        titulo: "Soirée Soul & R'n'R",
        precio: "22€ prévente / 26€ sur place",
        linkTexto: "Acheter sur Musikaze",
        lugar: "Helldorado",
        direccion: "Venta de la Estrella, 6 Pab. 44",
        horaSuffix: "h",
        artistas: [
          { origen: "FRANCE", estilo: "Soul, Blues, R'n'R" },
          { origen: "ROYAUME-UNI", estilo: "R&B, Pub Rock" },
          { origen: "FRANCE", estilo: "DJ - Musique Sélectionnée" },
          { origen: "GASTEIZ", estilo: "DJ - Sélection Musicale" }
        ]
      }
    },
    abono: {
      label: "Pass Weekend",
      precio: "39€",
      descripcion: "Pour les deux concerts de novembre",
      linkTexto: "Acheter le pass"
    }
  },
  artistas: artistasFr
};

export default fr;