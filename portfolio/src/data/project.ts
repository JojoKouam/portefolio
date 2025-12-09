import { Film, ShoppingCart, Smartphone } from "lucide-react";

export const PROJECTS = [
  {
    id: 1,
    title: "CinéMathé",
    description: "Application Fullstack de réservation de cinéma. Gestion temps réel, Dashboard Admin, Paiement simulé et Authentification.",
    tech: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "Tailwind", "NextAuth"],
    link: "https://movie-wine-theta.vercel.app", // Ton lien Vercel
    github: "https://github.com/JojoKouam/movie", // Ton repo
    image: "/projects/cinemathe.png", // On mettra une capture plus tard
    icon: Film,
    featured: true, // Pour le mettre en gros
  },
  {
    id: 2,
    title: "FreeAds",
    description: "Plateforme de petites annonces entre particuliers.",
    tech: ["Laravel", "Vue.js", "MySQL", "Tailwind"],
    link: "#",
    github: "#",
    icon: ShoppingCart,
    featured: false,
  },
  {
    id: 3,
    title: "Trello-Tech",
    description: "Application mobile de gestion de tâches inspirée de Trello.",
    tech: ["React Native", "Expo", "API Rest"],
    link: "#",
    github: "#",
    icon: Smartphone,
    featured: false,
  },
];

export const SKILLS = [
  "Next.js", "React", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "Tailwind CSS", "Git", "Docker"
];