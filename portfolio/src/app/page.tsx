"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { HERO, PROJECTS, SERVICES } from "@/data/portfolio";

export default function Home() {
  return (
    <main className="min-h-screen">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tighter">
            Ana<span className="text-purple-500">.</span>
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

      {/* --- HERO SECTION (Inspiré de William + Nova) --- */}
      <section id="home" className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-center flex flex-col items-center justify-center min-h-[80vh]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
             {/* Remplace par ta photo plus tard */}
            <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center overflow-hidden">
               <span className="text-3xl">👩‍💻</span> 
               {/* <Image src="/me.jpg" width={100} height={100} alt="Me" className="object-cover" /> */}
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

          <div className="flex gap-4 justify-center">
            <a href="#contact" className="gradient-bg text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition shadow-lg shadow-purple-500/20">
              Me contacter
            </a>
            <a href="/cv.pdf" target="_blank" className="border border-gray-700 bg-gray-900/50 text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition flex items-center gap-2">
              Mon CV <Download size={18} />
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
            // On s'assure que le conteneur est en position relative pour que l'image "fill" fonctionne
            className="relative h-[400px] w-full rounded-2xl overflow-hidden bg-gray-800 border border-gray-700"
          >
             <Image 
               src="/me.jpeg" 
               alt="Anabelle Josée Kouamé" 
               fill // 👈 Ça dit à l'image : "Prends toute la place disponible !"
               className="object-cover" // 👈 Ça dit : "Coupe ce qui dépasse pour remplir sans déformer"
               sizes="(max-width: 768px) 100vw, 50vw" // Optimisation pour mobile/desktop
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
                <span className="text-xs text-gray-500 uppercase">Projets</span>
              </div>
              <div className="p-4 bg-[#1a1a2e] rounded-xl border border-gray-800 text-center">
                <span className="block text-2xl font-bold text-white">1 an</span>
                <span className="text-xs text-gray-500 uppercase">Expérience</span>
              </div>
              <div className="p-4 bg-[#1a1a2e] rounded-xl border border-gray-800 text-center">
                <span className="block text-2xl font-bold text-white">3</span>
                <span className="text-xs text-gray-500 uppercase">Stacks</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICES (Les 4 cartes) --- */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-purple-400 font-bold tracking-widest text-sm">COMPÉTENCES</span>
          <h2 className="text-3xl font-bold mt-2">Ce que je peux faire</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1a1a2e] p-6 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition hover:-translate-y-2 duration-300"
            >
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4 text-purple-400">
                <service.icon size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-sm text-gray-400">{service.desc}</p>
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
                <div className="h-48 bg-gray-800 relative overflow-hidden">
                   {/* Mets tes images ici plus tard avec <Image /> */}
                   <div className="absolute inset-0 flex items-center justify-center text-gray-600 bg-gray-900">Aperçu {project.title}</div>
                   
                   {/* Overlay au survol */}
                   <div className="absolute inset-0 bg-purple-900/80 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                     <Link href={project.link} target="_blank" className="bg-white text-black px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                        Voir le projet
                     </Link>
                   </div>
                </div>
                
                <div className="p-6">
                  <span className="text-xs font-bold text-purple-400 uppercase">{project.category}</span>
                  <h3 className="text-xl font-bold mt-2 mb-2 group-hover:text-purple-400 transition">{project.title}</h3>
                  <p className="text-sm text-gray-400 line-clamp-2">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT FORM --- */}
      <section id="contact" className="py-24 px-6 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Travaillons ensemble !</h2>
        <p className="text-gray-400 mb-10">
          Vous avez un projet ou une opportunité ? N&apos;hésitez pas à m&apos;envoyer un message.
        </p>

        <form className="space-y-4 text-left">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-400 ml-1">Nom</label>
              <input type="text" className="w-full bg-[#1a1a2e] border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition" placeholder="Votre nom" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400 ml-1">Email</label>
              <input type="email" className="w-full bg-[#1a1a2e] border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition" placeholder="votre@email.com" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-400 ml-1">Message</label>
            <textarea rows={5} className="w-full bg-[#1a1a2e] border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition" placeholder="Bonjour, j'aimerais discuter de..."></textarea>
          </div>
          <button className="w-full gradient-bg text-white font-bold py-4 rounded-xl hover:opacity-90 transition">
            Envoyer le message
          </button>
        </form>
      </section>

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