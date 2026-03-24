"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

interface Props {
  onNavigate: (section: string) => void
}

export default function Inicio({ onNavigate }: Props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full py-12 px-6 text-center">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-light dark:bg-brand/10 rounded-full blur-[120px] opacity-30" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-light dark:bg-orange/10 rounded-full blur-[120px] opacity-25" />
      </div>

      <motion.div
        className="max-w-2xl w-full"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* Avatar */}
        <motion.div variants={item} transition={{ duration: 0.5 }} className="relative inline-block mb-8">
          <img
            src="/imagen_mia.jpg"
            alt="Foto de perfil de Juan Ignacio Vergara"
            className="w-28 h-28 md:w-36 md:h-36 rounded-full mx-auto object-cover border-4 border-white dark:border-dm-card shadow-2xl relative z-10"
          />
          <motion.div
            className="absolute inset-0 bg-brand rounded-full blur-xl opacity-20"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Status badge */}
        <motion.div variants={item} transition={{ duration: 0.5 }} className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 bg-white dark:bg-dm-card border border-gray-100 dark:border-dm-border shadow-sm px-4 py-1.5 rounded-full text-xs font-bold text-gray-500 dark:text-dm-muted-text">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Disponible para proyectos
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={item}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight text-carbon dark:text-dm-text leading-[1.1]"
        >
          Hola, soy{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-orange">
            Juan Ignacio
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={item}
          transition={{ duration: 0.5 }}
          className="text-lg md:text-xl text-gray-600 dark:text-dm-muted-text mb-10 leading-relaxed max-w-xl mx-auto"
        >
          Emprendedor y Desarrollador Full Stack. Transformo ideas complejas en{" "}
          <span className="font-semibold text-carbon dark:text-dm-text border-b-2 border-brand-light dark:border-brand/30">
            productos digitales
          </span>{" "}
          escalables y de alto impacto.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.button
            onClick={() => onNavigate("proyectos")}
            className="group w-full sm:w-auto bg-carbon dark:bg-dm-card dark:border dark:border-dm-border text-white px-10 py-4 rounded-2xl font-bold text-base shadow-xl shadow-gray-200 dark:shadow-none flex items-center justify-center"
            whileHover={{ scale: 1.03, backgroundColor: "#333" }}
            whileTap={{ scale: 0.97 }}
          >
            Explorar Proyectos
            <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
          <motion.button
            onClick={() => onNavigate("sobre-mi")}
            className="w-full sm:w-auto bg-white dark:bg-dm-card text-carbon dark:text-dm-text border-2 border-gray-100 dark:border-dm-border px-10 py-4 rounded-2xl font-bold text-base flex items-center justify-center"
            whileHover={{ borderColor: "#cce5ff", backgroundColor: "#eff6ff" }}
            whileTap={{ scale: 0.97 }}
          >
            Sobre mí
          </motion.button>
        </motion.div>

        {/* Socials */}
        <motion.div variants={stagger} className="flex justify-center space-x-8">
          {[
            { icon: Github,   href: "https://github.com/JuanVergara-9",                   label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/juan-ignacio-vergara/",  label: "LinkedIn" },
            { icon: Mail,     href: "mailto:juanvergara920@gmail.com",                    label: "Email" },
          ].map((social) => (
            <motion.div key={social.label} variants={item} transition={{ duration: 0.4 }}>
              <Link
                href={social.href}
                className="group flex flex-col items-center text-gray-400 dark:text-dm-muted-text"
                aria-label={social.label}
                target="_blank"
                rel="noreferrer"
              >
                <motion.div whileHover={{ scale: 1.2, color: "#007bff" }} transition={{ type: "spring", stiffness: 400 }}>
                  <social.icon className="w-6 h-6 mb-1" />
                </motion.div>
                <span className="text-[9px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity text-brand">
                  {social.label}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
