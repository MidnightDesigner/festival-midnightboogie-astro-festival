// src/data/programa.ts

export const programa2026 = {
  presentacion: {
    dia: "Sábado 12",
    mes: "Septiembre 2026",
    tag: "Concierto de Presentación 10ª Edición",
    eventos: [
      {
        hora: "20:00",
        lugar: "Sala Arkabia",
        direccion: "Postas 13-15, Vitoria-Gasteiz",
        titulo: "Noche de Groove & Northern Soul",
        artistas: [
          { nombre: "Stone Foundation", origen: "UNITED KINGDOM", estilo: "Groove · Northern Soul · Funk" }
        ],
        precio: "Entrada única: 15€",
        link: "https://arkabia.eus/evento/stone-foundation/",
        linkTexto: "Comprar entradas"
      },
      {
        hora: "23:00",
        lugar: "Ttipia Taberna",
        direccion: "Zapatería 94, Vitoria-Gasteiz",
        titulo: "Fiesta Posterior",
        artistas: [
          { nombre: "DJ Mikel Gasteiz", estilo: "Sesión DJ" },
          { nombre: "DJ Chema Mítico", estilo: "Sesión DJ" },
          { nombre: "DJ Fernando Padilla", estilo: "Sesión DJ" }
        ],
        precio: "Entrada libre / Consumición"
      }
    ]
  },
  viernes: {
    dia: "Viernes 27",
    mes: "Noviembre 2026",
    tag: "Midnight Boogie Weekend",
    eventos: [
      {
        hora: "21:00",
        lugar: "Helldorado",
        direccion: "Venta de la Estrella, 6 Pab. 44",
        titulo: "Noche de Blues & Boogaloo",
        artistas: [
          { nombre: "The Lazy Tones", origen: "VALENCIA", estilo: "Blues y R&B" },
          { nombre: "Los Fulanos", origen: "BARCELONA", estilo: "Boogaloo" },
          { nombre: "Syl Al", origen: "FRANCE", estilo: "DJ - Música seleccionada" },
          { nombre: "Bea GB", origen: "GASTEIZ", estilo: "DJ - Música seleccionada" }
        ],
        precio: "22€ Anticipada / 26€ Taquilla",
                link: "https://www.musikaze.net/web/?menu=138&pagina=&item=62415&siteID=infiernodorado",
        linkTexto: "Comprar entrada"
      }
    ]
  },
  sabadoTaller: {
    dia: "Sábado 28",
    mes: "Noviembre 2026",
    tag: "Actividad Familiar",
    eventos: [
      {
        hora: "12:00",
        lugar: "Creative Soul",
        direccion: "Pintor Pablo Uranga Kalea 22",
        titulo: "Taller Creative Soul",
        descripcion: "Taller musical para los más pequeños. Un clásico en nuestra programación: la escuela de música Creative Soul ofrecerá un taller muy didáctico de improvisación y experimentación musical para los peques.",
        artistas: [],
        precio: "Gratis con inscripción",
        link: "https://www.fundacionvital.eus/taller-musical-infantil-creative-soul",
        linkTexto: "Inscripción en la web de Fundación Vital"
      }
    ]
  },
  sabadoNoche: {
    dia: "Sábado 28",
    mes: "Noviembre 2026",
    tag: "Midnight Boogie Weekend",
    eventos: [
      {
        hora: "21:00",
        lugar: "Helldorado",
        direccion: "Venta de la Estrella, 6 Pab. 44",
        titulo: "Noche de Soul & R'n'R",
        artistas: [
          { nombre: "Haylen", origen: "FRANCE", estilo: "Soul, Blues, R'n'R" },
          { nombre: "Nine Below Zero", origen: "UNITED KINGDOM", estilo: "R&B, Pubrock" },
          { nombre: "Syl Al", origen: "FRANCE", estilo: "DJ - Música seleccionada" },
          { nombre: "Bea GB", origen: "GASTEIZ", estilo: "DJ - Música seleccionada" }
        ],
        precio: "22€ Anticipada / 26€ Taquilla",
        link: "https://www.musikaze.net/web/?menu=138&pagina=&item=62415&siteID=infiernodorado",
        linkTexto: "Comprar entrada"
      }
    ]
  },
   abono: {
    precio: "39€",
    descripcion: "Para ambos conciertos de Noviembre",
    link: "https://www.musikaze.net/web/?menu=138&pagina=&item=62415&siteID=infiernodorado",
    linkTexto: "Comprar abono"
  }
};