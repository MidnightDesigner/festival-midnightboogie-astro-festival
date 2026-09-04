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
    image: "/images/archivo-2025.jpg",
    link: "/2025"
  },
  {
    year: 2024,
    title: "Midnight Boogie 2024",
    dates: "22-23 de noviembre, 2024",
    artists: ["Nine Below Zero", "Los Fulanos", "Haylen"],
    image: "/images/archivo-2024.jpg",
    link: "/2024"
  },
  {
    year: 2023,
    title: "Midnight Boogie 2023",
    dates: "24-25 de noviembre, 2023",
    artists: ["The Soulmates", "Vitoria Blues Band", "Local Groove"],
    image: "/images/archivo-2023.jpg",
    link: "/2023"
  }
];