import { Layout, Smartphone, Globe, Database, Server, Code, PenTool } from "lucide-react";

export const HERO = {
  name: "Anabelle Josée Kouamé",
  role: "Développeuse Full Stack",
  description: "Développeuse passionnée par la création numérique. Curieuse et dynamique , j'aime comprendre et apprendre et  bâtir des projets web modernes",
};

export const SERVICES = [
  { title: "Web Development", desc: "Création de sites performants avec Next.js & React.", icon: Globe },
  { title: "Mobile App", desc: "Applications cross-platform avec React Native.", icon: Smartphone },
  { title: "Backend & API", desc: "Architecture solide avec Laravel ou Node.js.", icon: Server },
  { title: "Database", desc: "Gestion de données complexes (SQL & NoSQL).", icon: Database },
];
export const SKILLS = [
  { 
    category: "Front-End", 
    icon: Code,
    tools: ["React", "Next.js", "Vue.js", "Tailwind CSS", "JavaScript"]
  },
  { 
    category: "Back-End", 
    icon: Server,
    tools: ["Node.js", "Laravel", "PHP", "API REST"]
  },
  { 
    category: "Base de Données", 
    icon: Database,
    tools: ["PostgreSQL", "MySQL", "MongoDB", "Prisma"]
  },
  { 
    category: "Outils & Design", 
    icon: PenTool,
    tools: ["Git / GitHub", "Figma", "VS Code", "Linux"]
  }
];

export const PROJECTS = [
  {
    id: 1,
    title: "CinéMathé",
    category: "Fullstack Next.js",
    image: "/projects/cinemathe.png", 
    description: "Application complète de réservation de cinéma. Gestion des sièges en temps réel, paiement simulé, dashboard administrateur et authentification sécurisée.",
    tech: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Tailwind"],
    link: "https://cinemathe-jodev.vercel.app/", 
    github: "https://github.com/JojoKouam/movie", 
  }, 
  {
    id: 2,
    title: "Post It",
    category: "Web App/Vuejs",
    image: "/projects/postit.png",
    description: "Outil de prise de notes intuitif. Fonctionnalités d'ajout, suppression et modification dynamique des notes.",
    tech: ["Vue.js", "JavaScript", "Tailwind CSS"],
    link: "https://postitjosee.vercel.app/",
    github: "#",
  },
  
  {
    id: 3,
    title: "Showtime",
    category: "Nest.js",
    image: "/projects/show.jpeg",
    description: "Plateforme des annonces d'évenement.",
    tech: ["Nestjs", "MongoDB", "Tailwind"],
    link: "#", 
    github: "https://github.com/JojoKouam/", 
  },
//   {
//     id: 4,
//     title: "Trello-Tech",
//     category: "Mobile App",
//     image: "/projects/trello.png",
//     description: "Application mobile de gestion de tâches inspirée de Trello. Création de tableaux, listes et cartes avec une navigation fluide.",
//     tech: ["React Native", "Expo", "API Rest"],
//     link: "#",
//     github: "#",
//   },
 {
    id: 5, 
    title: "Lipsy",
    category: "Social App / PHP",
    image: "/projects/lipsy.png", 
    description: "Réseau social innovant basé sur la voix. Enregistrement et partage de notes vocales (60s), fil d'actualité audio, réactions et commentaires.",
    tech: ["PHP 8", "MySQL", "JavaScript", "Bootstrap 5"],
    link: "https://p6-groupeb.com/josee/lipsy_voice/", 
    github: "#", 
  },

   {
    id: 6, 
    title: "Chatbot",
    category: "WebApp",
    image: "/projects/chatbot.png", 
    description: "Chatbot sur des question immobilier.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    link: "https://chatbot-immo-jodev.netlify.app/",
    github: "#", 
  },
  
];