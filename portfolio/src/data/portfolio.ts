import { Layout, Smartphone, Globe, Database, Server, Code } from "lucide-react";

export const HERO = {
  name: "Anabelle Josée Kouamé",
  role: "Développeuse Full Stack",
  description: "J'ai troqué l'économie pour le code. Je conçois des applications web robustes et modernes avec une approche centrée sur la performance et l'expérience utilisateur.",
};

export const SERVICES = [
  { title: "Web Development", desc: "Création de sites performants avec Next.js & React.", icon: Globe },
  { title: "Mobile App", desc: "Applications cross-platform avec React Native.", icon: Smartphone },
  { title: "Backend & API", desc: "Architecture solide avec Laravel ou Node.js.", icon: Server },
  { title: "Database", desc: "Gestion de données complexes (SQL & NoSQL).", icon: Database },
];

export const PROJECTS = [
  {
    id: 1,
    title: "CinéMathé",
    category: "Fullstack Next.js",
    image: "/projects/cinemathe.png", // Mets ta capture ici plus tard
    description: "Clone de Pathé. Réservation en temps réel, Paiement, Admin Dashboard.",
    tech: ["Next.js 15", "PostgreSQL", "Prisma", "Tailwind"],
    link: "https://movie-wine-theta.vercel.app",
  },
  {
    id: 2,
    title: "FreeAds",
    category: "Laravel / Vue.js",
    image: "/projects/freeads.png",
    description: "Plateforme de petites annonces avec gestion complète utilisateurs.",
    tech: ["Laravel", "Vue.js", "MySQL"],
    link: "#",
  },
  {
    id: 3,
    title: "Trello-Tech",
    category: "Mobile",
    image: "/projects/trello.png",
    description: "Gestionnaire de tâches mobile inspiré de Trello.",
    tech: ["React Native", "Expo"],
    link: "#",
  },
];