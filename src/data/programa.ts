interface ArtistaPrograma {
  nombre: string;
  origen?: string;
  estilo?: string;
  tipo?: 'artista' | 'dj';
}

interface EventoPrograma {
  hora: string;
  lugar: string;
  direccion?: string;
  titulo: string;
  descripcion?: string;
  artistas?: ArtistaPrograma[];
  precio: string;
  link?: string;
  linkTexto?: string;
}

interface BloquePrograma {
  dia: string;
  mes: string;
  tag: string;
  eventos: EventoPrograma[];
}

interface InfoAbono {
  precio: string;
  descripcion: string;
  link: string;
  linkTexto: string;
}

export interface Programa2026 {
  presentacion: BloquePrograma;
  viernes: BloquePrograma;
  sabadoTaller: BloquePrograma;
  sabadoNoche: BloquePrograma;
  abono: InfoAbono;
}

export const programa2026: Programa2026 = {
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
          { nombre: "Stone Foundation", origen: "UNITED KINGDOM", estilo: "GROOVE · NORTHERN SOUL · FUNK" }
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
          { nombre: "The Lazy Tones", origen: "VALENCIA", estilo: "BLUES Y R&B" },
          { nombre: "Los Fulanos", origen: "BARCELONA", estilo: "BOOGALOO" },
  { nombre: "Syl Al", origen: "FRANCE", estilo: "DJ - Música seleccionada", tipo: "dj" },
  { nombre: "Bea GB", origen: "GASTEIZ", estilo: "DJ - Música seleccionada", tipo: "dj" }
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
  lugar: "Sala Arkabia", // ⬅️ Nombre propio / marca (sin traducir)
  titulo: "¡La música también es cosa de txikis!",
  descripcion: "Dentro del Midnight Boogie Weekend, la escuela Creative Soul ofrecerá un taller de improvisación y experimentación musical para niños y niñas de 6 a 10 años.",
  precio: "Actividad gratuita con plazas limitadas. ¡Inscríbete ya!",
  link: "https://www.fundacionvital.eus/taller-musical-infantil-0",
  linkTexto: "Inscríbete ya"
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
          { nombre: "Haylen", origen: "FRANCE", estilo: "SOUL, BLUES, R'N'R" },
          { nombre: "Nine Below Zero", origen: "UNITED KINGDOM", estilo: "R&B, PUB ROCK" },
          { nombre: "Syl Al", origen: "FRANCE", estilo: "DJ - Música seleccionada", tipo: "dj" },
          { nombre: "Bea GB", origen: "GASTEIZ", estilo: "DJ - Música seleccionada", tipo: "dj" }
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