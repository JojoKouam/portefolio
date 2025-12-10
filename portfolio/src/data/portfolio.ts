import { Layout, Smartphone, Globe, Database, Server, Code, PenTool } from "lucide-react";

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
    tools: ["Git / GitHub", "Figma", "VS Code", "Vercel"]
  }
];

export const PROJECTS = [
  {
    id: 1,
    title: "CinéMathé",
    category: "Fullstack Next.js",
    image: "/projects/cinemathe.png", // On s'occupera des images juste après
    description: "Application complète de réservation de cinéma. Gestion des sièges en temps réel, paiement simulé, dashboard administrateur et authentification sécurisée.",
    tech: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Tailwind"],
    link: "https://cinemathe-jodev.vercel.app/", // Ton lien Vercel
    github: "https://github.com/JojoKouam/movie", // Ton lien GitHub
  }, 
  {
    id: 2,
    title: "Post It",
    category: "Web App",
    image: "/projects/postit.png",
    description: "Outil de prise de notes intuitif. Fonctionnalités d'ajout, suppression et modification dynamique des notes.",
    tech: ["Vue.js", "JavaScript", "Tailwind CSS"],
    link: "https://postitjosee.vercel.app/",
    github: "#",
  },
  
  {
    id: 3,
    title: "FreeAds",
    category: "Laravel / Vue.js",
    image: "/projects/freeads.png",
    description: "Plateforme de petites annonces entre particuliers. Gestion complète des utilisateurs, CRUD des annonces et interface reactive.",
    tech: ["Laravel", "PHP", "Vue.js", "MySQL", "Tailwind"],
    link: "https://github.com/JojoKouam/movie", // Mets le lien si tu l'as, sinon laisse #
    github: "#", // Mets le lien GitHub
  },
  {
    id: 4,
    title: "Trello-Tech",
    category: "Mobile App",
    image: "/projects/trello.png",
    description: "Application mobile de gestion de tâches inspirée de Trello. Création de tableaux, listes et cartes avec une navigation fluide.",
    tech: ["React Native", "Expo", "API Rest"],
    link: "#",
    github: "#",
  },
 {
    id: 5, // Nouvel ID
    title: "Lipsy",
    category: "Social App / PHP",
    image: "/projects/lipsy.png", // N'oublie pas la capture !
    description: "Réseau social innovant basé sur la voix. Enregistrement et partage de notes vocales (60s), fil d'actualité audio, réactions et commentaires.",
    tech: ["PHP 8", "MySQL", "MVC", "JavaScript", "Bootstrap 5"],
    link: "https://p6-groupeb.com/josee/lipsy_voice/", // Mets le lien si tu l'as
    github: "#", // Mets le lien GitHub
  },

   {
    id: 6, // Nouvel ID
    title: "Chatbot",
    category: "Social App / PHP",
    image: "/projects/chatbot.png", // N'oublie pas la capture !
    description: "Chatbot sur des question immobilier.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    link: "https://chatbot-immo-jodev.netlify.app/", // Mets le lien si tu l'as
    github: "#", // Mets le lien GitHub
  },
  
];