// src/data/archivo.ts

export interface PastEdition {
  year: number;
  title: string;
  dates: string;
  artists: string[];
  image?: string;
  link?: string;
}

export const pastEditions: PastEdition[] = [
  {
    year: 2025,
    title: "Midnight Boogie 2025",
    dates: "28-29 de noviembre, 2025",
    artists: ["Stone Foundation", "BEA GB", "SYL AL", "The Lazy Tones"],
    image: "/images/2025/2025.png",
    link: "/2025"
  },
  {
    year: 2024,
    title: "Midnight Boogie 2024",
    dates: "22-23 de noviembre, 2024",
    artists: ["Nine Below Zero", "Los Fulanos", "Haylen"],
    image: "/images/2024/2024.jpg",
    link: "/2024"
  },
  {
    year: 2023,
    title: "Midnight Boogie 2023",
    dates: "24-25 de noviembre, 2023",
    artists: ["Artista 1 (Editar)", "Artista 2 (Editar)", "Artista 3 (Editar)"], // ✏️ EDITAR AQUÍ
    image: "/images/2023/2023.jpg",
    link: "/2023"
  },
  {
    year: 2022,
    title: "Midnight Boogie 2022",
    dates: "25-26 de noviembre, 2022",
    artists: ["Artista 1 (Editar)", "Artista 2 (Editar)", "Artista 3 (Editar)"], // ✏️ EDITAR AQUÍ
    image: "/images/2022/2022.jpg",
    link: "/2022"
  },
  {
    year: 2021,
    title: "Midnight Boogie 2021",
    dates: "26-27 de noviembre, 2021",
    artists: ["Artista 1 (Editar)", "Artista 2 (Editar)", "Artista 3 (Editar)"], // ✏️ EDITAR AQUÍ
    image: "/images/2021/2021.jpg",
    link: "/2021"
  },
  {
    year: 2020,
    title: "Midnight Boogie 2020",
    dates: "27-28 de noviembre, 2020",
    artists: ["Artista 1 (Editar)", "Artista 2 (Editar)", "Artista 3 (Editar)"], // ✏️ EDITAR AQUÍ
    image: "/images/archivo-2020.jpg",
    link: "/2020"
  },
  {
    year: 2019,
    title: "Midnight Boogie 2019",
    dates: "22-23 de noviembre, 2019",
    artists: ["Artista 1 (Editar)", "Artista 2 (Editar)", "Artista 3 (Editar)"], // ✏️ EDITAR AQUÍ
    image: "/images/2019/2019.jpg",
    link: "/2019"
  },
  {
    year: 2018,
    title: "Midnight Boogie 2018",
    dates: "23-24 de noviembre, 2018",
    artists: ["Artista 1 (Editar)", "Artista 2 (Editar)", "Artista 3 (Editar)"], // ✏️ EDITAR AQUÍ
    image: "/images/2018/2018.jpg",
    link: "/2018"
  },
  {
    year: 2017,
    title: "Midnight Boogie 2017",
    dates: "24-25 de noviembre, 2017",
    artists: ["Artista 1 (Editar)", "Artista 2 (Editar)", "Artista 3 (Editar)"], // ✏️ EDITAR AQUÍ
    image: "/images/2017/2017.jpg",
    link: "/2017"
  },
  {
    year: 2016,
    title: "Midnight Boogie 2016",
    dates: "25-26 de noviembre, 2016",
    artists: ["Artista 1 (Editar)", "Artista 2 (Editar)", "Artista 3 (Editar)"], // ✏️ EDITAR AQUÍ
    image: "/images/archivo-2016.jpg",
    link: "/2016"
  }
];