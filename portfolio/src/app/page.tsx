"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { HERO, PROJECTS, SERVICES, SKILLS } from "@/data/portfolio";
import { useForm, ValidationError } from '@formspree/react';

export default function Home() {
  const [state, handleSubmit] = useForm("mnneggnn");

  // 3. SI LE MESSAGE EST ENVOYÉ, AFFICHE ÇA À LA PLACE DU FORMULAIRE
  if (state.succeeded) {
      return (
        <main className="min-h-screen">
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tighter">
            JK<span className="text-purple-500">.</span>
          </h1>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
            <a href="#home" className="hover:text-white transition">Accueil</a>
            <a href="#about" className="hover:text-white transition">À propos</a>
            <a href="#projects" className="hover:text-white transition">Projets</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
          <a 
            href="#contact" 
            className="hidden md:block border border-purple-500 text-purple-400 px-5 py-2 rounded-full text-sm font-bold hover:bg-purple-500 hover:text-white transition"
          >
            Me contacter ↗
          </a>
        </div>
      </nav>

      {/*  HERO SECTION*/}
      <section id="home" className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-center flex flex-col items-center justify-center min-h-[80vh]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
            
            <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center overflow-hidden">
               <span className="text-3xl">👩‍💻</span> 
            </div>
          </div>

          <h2 className="text-gray-400 font-medium mb-4">Salut ! Je suis {HERO.name} 👋</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Développeuse <br />
            <span className="gradient-text">Full Stack & Mobile</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            {HERO.description}
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
            
            {/* Bouton Contact (Principal) */}
            <a href="#contact" className="gradient-bg px-8 py-3 rounded-full font-bold shadow-lg shadow-purple-500/20 hover:scale-105 transition-transform flex items-center gap-2 text-white">
              Me contacter <ArrowRight size={18} />
            </a>
            
            {/* Bouton CV (Secondaire) */}
            <a href="/cv.pdf" target="_blank" className="border border-gray-700 bg-white/5 text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition flex items-center gap-2">
              CV <Download size={18} />
            </a>

            {/* --- NOUVEAU : Les Réseaux Sociaux (Carrés) --- */}
            <div className="flex gap-3 ml-2">
              <a 
                href="https://linkedin.com/in/ton-profil" // Remplace par ton lien
                target="_blank"
                className="p-3 bg-white/10 border border-gray-700 rounded-xl hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white transition-all duration-300 group"
                title="LinkedIn"
              >
                <Linkedin size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
              
              <a 
                href="https://github.com/JojoKouam" 
                target="_blank"
                className="p-3 bg-white/10 border border-gray-700 rounded-xl hover:bg-white hover:border-white hover:text-black transition-all duration-300 group"
                title="GitHub"
              >
                <Github size={20} className="text-gray-400 group-hover:text-black transition-colors" />
              </a>
              <a 
              href="mailto:anabelle.kouame@epitech.eu" // 👈 Mets ton mail Epitech ici
              className="p-3 bg-white/10 border border-gray-700 rounded-xl hover:bg-white hover:border-white hover:text-black transition-all duration-300 group"
              title="Envoyer un email"
            >
              {/* Icône Mail (déjà importée de Lucide normalement) */}
              <Mail size={20} className="text-gray-400 group-hover:text-black transition-colors" />
            </a>
            </div>

          </div>
        </motion.div>
      </section>           
           <section id="contact" className="py-24 px-6 max-w-2xl mx-auto text-center">
             <div className="bg-green-500/10 border border-green-500 p-8 rounded-2xl">
               <h2 className="text-2xl font-bold text-green-500 mb-2">Message envoyé ! </h2>
               <p className="text-gray-300">Merci de m&apos;avoir contactée. Je vous répondrai très vite.</p>
               <button onClick={() => window.location.reload()} className="mt-4 text-sm underline text-gray-400">Envoyer un autre message</button>
             </div>
           </section>

 <footer className="py-8 text-center text-gray-600 text-sm border-t border-gray-800">
        <p>© 2025 Anabelle Kouamé. Tous droits réservés.</p>
        <div className="flex justify-center gap-4 mt-4">
          <Link href="#" className="hover:text-purple-400 transition"><Github size={20} /></Link>
          <Link href="#" className="hover:text-purple-400 transition"><Linkedin size={20} /></Link>
          <Link href="#" className="hover:text-purple-400 transition"><Mail size={20} /></Link>
        </div>
      </footer>        </main>
      );
  }
  return (
    <main className="min-h-screen">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tighter">
            JK<span className="text-purple-500">.</span>
          </h1>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
            <a href="#home" className="hover:text-white transition">Accueil</a>
            <a href="#about" className="hover:text-white transition">À propos</a>
            <a href="#projects" className="hover:text-white transition">Projets</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
          <a 
            href="#contact" 
            className="hidden md:block border border-purple-500 text-purple-400 px-5 py-2 rounded-full text-sm font-bold hover:bg-purple-500 hover:text-white transition"
          >
            Me contacter ↗
          </a>
        </div>
      </nav>

      {/*  HERO SECTION*/}
      <section id="home" className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-center flex flex-col items-center justify-center min-h-[80vh]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
            
            <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center overflow-hidden">
               <span className="text-3xl">👩‍💻</span> 
            </div>
          </div>

          <h2 className="text-gray-400 font-medium mb-4">Salut ! Je suis {HERO.name} 👋</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Développeuse <br />
            <span className="gradient-text">Full Stack Junior</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            {HERO.description}
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
            
            {/* Bouton Contact (Principal) */}
            <a href="#contact" className="gradient-bg px-8 py-3 rounded-full font-bold shadow-lg shadow-purple-500/20 hover:scale-105 transition-transform flex items-center gap-2 text-white">
              Me contacter <ArrowRight size={18} />
            </a>
            
            {/* Bouton CV (Secondaire) */}
            <a href="/cv.pdf" target="_blank" className="border border-gray-700 bg-white/5 text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition flex items-center gap-2">
              CV <Download size={18} />
            </a>

            {/* --- NOUVEAU : Les Réseaux Sociaux (Carrés) --- */}
            <div className="flex gap-3 ml-2">
              <a 
                href="https://linkedin.com/in/ton-profil" // Remplace par ton lien
                target="_blank"
                className="p-3 bg-white/10 border border-gray-700 rounded-xl hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white transition-all duration-300 group"
                title="LinkedIn"
              >
                <Linkedin size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
              
              <a 
                href="https://github.com/JojoKouam" 
                target="_blank"
                className="p-3 bg-white/10 border border-gray-700 rounded-xl hover:bg-white hover:border-white hover:text-black transition-all duration-300 group"
                title="GitHub"
              >
                <Github size={20} className="text-gray-400 group-hover:text-black transition-colors" />
              </a>
            </div>

<a 
              href="mailto:anabelle.kouame@epitech.eu" // 👈 Mets ton mail Epitech ici
              className="p-3 bg-white/10 border border-gray-700 rounded-xl hover:bg-white hover:border-white hover:text-black transition-all duration-300 group"
              title="Envoyer un mail à anabelle.kouame@epitech.eu"
            >
              {/* Icône Mail (déjà importée de Lucide normalement) */}
              <Mail size={20} className="text-gray-400 group-hover:text-black transition-colors" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* --- ABOUT SECTION (Split Image / Text) --- */}
      <section id="about" className="py-20 bg-[#0f0f1c]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Image à gauche (Placeholder) */}
           <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            
            className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-2xl overflow-hidden bg-gray-800 border border-gray-700 shadow-2xl"
          >
             <Image 
               src="/mee.png" 
               alt="Anabelle Josée Kouamé" 
               fill
               className="object-cover" 
               sizes="(max-width: 768px) 100vw, 50vw" 
             />
          </motion.div>

          {/* Texte à droite */}
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <span className="text-purple-400 font-bold tracking-widest text-sm">À PROPOS</span>
            <h2 className="text-3xl font-bold mt-2 mb-6">Un parcours analytique au service de la Tech.</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Venant du monde de l&apos;économie, j&apos;ai développé une rigueur et une capacité d&apos;analyse que j&apos;applique aujourd&apos;hui dans l&apos;architecture de mes applications.
              <br /><br />
              Je ne code pas juste pour coder : je cherche à résoudre des problèmes concrets avec des solutions élégantes et performantes.
            </p>

            {/* Cartes Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="p-4 bg-[#1a1a2e] rounded-xl border border-gray-800 text-center">
                <span className="block text-2xl font-bold text-white">5+</span>
                <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wide">Projets Académiques</span>
              </div>
              <div className="p-4 bg-[#1a1a2e] rounded-xl border border-gray-800 text-center">
                <span className="block text-2xl font-bold text-white">6 mois</span>
                <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wide">Formation WECODE</span>
              </div>
              <div className="p-4 bg-[#1a1a2e] rounded-xl border border-gray-800 text-center">
                <span className="block text-2xl font-bold text-white">3</span>
                <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wide">Stacks Maîtrisées</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- COMPÉTENCES --- */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-purple-400 font-bold tracking-widest text-sm">STACK TECHNIQUE</span>
          <h2 className="text-3xl font-bold mt-2">Mes Outils de Création</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1a1a2e] p-6 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition hover:-translate-y-2 duration-300 h-full"
            >
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-6 text-purple-400">
                <skill.icon size={24} />
              </div>
              <h3 className="font-bold text-lg mb-4 text-white">{skill.category}</h3>
              
              {/* Liste des technos sous forme de tags */}
              <div className="flex flex-wrap gap-2">
                {skill.tools.map((tool) => (
                  <span key={tool} className="text-xs font-mono bg-gray-900 text-gray-300 border border-gray-700 px-2 py-1 rounded">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- PROJETS (My Latest Work) --- */}
      <section id="projects" className="py-20 bg-[#0f0f1c]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-purple-400 font-bold tracking-widest text-sm">PORTFOLIO</span>
              <h2 className="text-3xl font-bold mt-2">Mes derniers projets</h2>
            </div>
            <Link href="https://github.com/JojoKouam" target="_blank" className="hidden md:flex items-center gap-2 text-sm hover:text-purple-400 transition">
              Voir tout sur GitHub <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group relative bg-[#1a1a2e] rounded-2xl overflow-hidden border border-gray-800">
                {/* Image Placeholder */}
                <div className="h-48 bg-gray-800 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                   {project.image ? (
                     <Image 
                       src={project.image}
                       alt={project.title}
                       fill
                       className="object-cover transition-opacity duration-300 group-hover:opacity-40"
                     />
                   ) : (
                     <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                        Aperçu {project.title}
                     </div>
                   )}
                   
                   {/* Overlay au survol */}
                   <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300 z-10">
                     {project.link !== "#" && (
                       <Link href={project.link} target="_blank" className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm hover:scale-105 transition">
                          Visiter
                       </Link>
                     )}
                     {project.github !== "#" && (
                       <Link href={project.github} target="_blank" className="bg-gray-900 text-white px-4 py-2 rounded-full font-bold text-sm hover:scale-105 transition border border-gray-700">
                          GitHub
                       </Link>
                     )}
                   </div>
                </div>
                
                <div className="p-6">
                  <span className="text-xs font-bold text-purple-400 uppercase">{project.category}</span>
                  <h3 className="text-xl font-bold mt-2 mb-2 group-hover:text-purple-400 transition">{project.title}</h3>
                  <p className="text-sm text-gray-400 line-clamp-2">{project.description}</p>

                  {/* <span className="text-xs font-bold text-purple-400 uppercase">{project.category}</span>
                  <h3 className="text-xl font-bold mt-2 mb-3 text-white group-hover:text-purple-400 transition">{project.title}</h3>
                  <p className="text-sm text-gray-400 line-clamp-2 mb-4">{project.description}</p> */}
                  
                  {/* 👇 AJOUTE CE BLOC POUR LES TAGS 👇 */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-gray-800 text-gray-300 rounded border border-gray-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT FORM --- */}
      {/* <section id="contact" className="py-24 px-6 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Travaillons ensemble !</h2>
        <p className="text-gray-400 mb-10">
          Vous avez un projet ou une opportunité ? N&apos;hésitez pas à m&apos;envoyer un message.
        </p>

         <form 
          action="https://formspree.io/f/xkgdqvbo" 
          method="POST"
          className="space-y-4 text-left"
        >
          <div className="grid md:grid-cols-2 gap-4"> */}
            {/* <div className="space-y-2">
              <label className="text-sm text-gray-400 ml-1">Nom</label>
              <input 
                type="text" 
                name="name" 
                required
                className="w-full bg-[#1a1a2e] border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition text-white" 
                placeholder="Votre nom" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400 ml-1">Email</label>
              <input 
                type="email" 
                name="email" 
                required
                className="w-full bg-[#1a1a2e] border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition text-white" 
                placeholder="votre@email.com" 
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm text-gray-400 ml-1">Message</label>
            <textarea 
              name="message" 
              rows={5} 
              required
              className="w-full bg-[#1a1a2e] border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition text-white" 
              placeholder="Bonjour, j'aimerais discuter de..."
            ></textarea>
          </div> */}

          {/* <button type="submit" className="w-full gradient-bg text-white font-bold py-4 rounded-xl hover:opacity-90 transition shadow-lg shadow-purple-500/20">
            Envoyer le message
          </button>
        </form> */}




<section id="contact" className="py-24 px-6 max-w-2xl mx-auto text-center">
        
<h2 className="text-3xl font-bold mb-4">Travaillons ensemble !</h2>
        <p className="text-gray-400 mb-10">
          Vous avez un projet ou une opportunité ? N&apos;hésitez pas à m&apos;envoyer un message.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-400 ml-1">Nom</label>
              <input 
                id="name"
                type="text" 
                name="name"
                placeholder="Votre nom"
                required
                className="w-full bg-[#1a1a2e] border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition text-white" // Tes classes CSS
              />
              <ValidationError prefix="Nom" field="name" errors={state.errors} />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm text-gray-400 ml-1">Email</label>
              <input 
                id="email"
                type="email" 
                name="email"
                placeholder="votre@email.com"
                required
                className="w-full bg-[#1a1a2e] border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition text-white" // Tes classes CSS
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm text-gray-400 ml-1">Message</label>
            <textarea 
              id="message"
              name="message"
              placeholder="Bonjour, j'aimerais discuter de..."
              rows={5}
              required
              className="w-full bg-[#1a1a2e] border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition text-white" // Tes classes CSS
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <button type="submit" disabled={state.submitting} className="w-full gradient-bg text-white font-bold py-4 rounded-xl hover:opacity-90 transition shadow-lg shadow-purple-500/20">
            {state.submitting ? "Envoi en cours..." : "Envoyer le message"}
          </button>
        </form>
      </section>







      {/* </section> */}

      {/* --- FOOTER --- */}
      <footer className="py-8 text-center text-gray-600 text-sm border-t border-gray-800">
        <p>© 2025 Anabelle Kouamé. Tous droits réservés.</p>
        <div className="flex justify-center gap-4 mt-4">
          <Link href="#" className="hover:text-purple-400 transition"><Github size={20} /></Link>
          <Link href="#" className="hover:text-purple-400 transition"><Linkedin size={20} /></Link>
          <Link href="#" className="hover:text-purple-400 transition"><Mail size={20} /></Link>
        </div>
      </footer>

    </main>
  );
}