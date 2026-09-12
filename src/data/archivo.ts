// src/data/archivo.ts

export interface PastEdition {
  year: number;
  title: string;
  dates: string;
  description: string; // Campo listo para el futuro CMS
  artists?: string[];  
  image?: string;
  imageBack?: string;
  link?: string; // Opcional: si no existe, la web muestra "Próximamente"
}

export const pastEditions: PastEdition[] = [
  {
    year: 2025,
    title: "Midnight Boogie 2025",
    dates: "28-29 de noviembre, 2025",
    description: "Edición del festival de 2025.",
    artists: ["Stone Foundation", "BEA GB", "SYL AL", "The Lazy Tones"],
    image: "/images/2025/2025.jpg",
    imageBack: "/images/2025/2025-02.jpg",
    // link eliminado temporalmente
  },
  {
    year: 2024,
    title: "Midnight Boogie 2024",
    dates: "22-23 de noviembre, 2024",
    description: "Edición del festival de 2024.",
    artists: ["Nine Below Zero", "Los Fulanos", "Haylen"],
    image: "/images/2024/2024.jpg",
    imageBack: "/images/2024/2024-2.jpg",
  },
  {
    year: 2023,
    title: "Midnight Boogie 2023",
    dates: "24-25 de noviembre, 2023",
    description: "Edición del festival de 2023.",
    artists: ["Artista 1", "Artista 2", "Artista 3"],
    image: "/images/2023/2023.jpg",
    imageBack: "/images/2023/2023-2.jpg",
  },
  {
    year: 2022,
    title: "Midnight Boogie 2022",
    dates: "25-26 de noviembre, 2022",
    description: "Edición del festival de 2022.",
    artists: ["Artista 1", "Artista 2", "Artista 3"],
    image: "/images/2022/2022.jpg",
    imageBack: "/images/2022/2022-2.jpg",

  },
  {
    year: 2021,
    title: "Midnight Boogie 2021",
    dates: "26-27 de noviembre, 2021",
    description: "Edición del festival de 2021.",
    artists: ["Artista 1", "Artista 2", "Artista 3"],
    image: "/images/2021/2021.jpg",
    imageBack: "/images/2021/2021-2.jpg",
  },
  {
    year: 2020,
    title: "Midnight Boogie 2020",
    dates: "27-28 de noviembre, 2020",
    description: "Edición del festival de 2020.",
    artists: ["Artista 1", "Artista 2", "Artista 3"],
    image: "/images/2020/2020.jpg"
  },
  {
    year: 2019,
    title: "Midnight Boogie 2019",
    dates: "22-23 de noviembre, 2019",
    description: "Edición del festival de 2019.",
    artists: ["Artista 1", "Artista 2", "Artista 3"],
    image: "/images/2019/2019.jpg",
    imageBack: "/images/2019/2019-1.jpg",
  },
  {
    year: 2018,
    title: "Midnight Boogie 2018",
    dates: "23-24 de noviembre, 2018",
    description: "Edición del festival de 20218.",
    artists: ["Artista 1", "Artista 2", "Artista 3"],
    image: "/images/2018/2018.jpg",
    imageBack: "/images/2018/2018-2.jpg",

  },
  {
    year: 2017,
    title: "Midnight Boogie 2017",
    dates: "24-25 de noviembre, 2017",
    description: "Edición del festival de 2017.",
    artists: ["Artista 1", "Artista 2", "Artista 3"],
    image: "/images/2017/2017.jpg"
  },
 
];