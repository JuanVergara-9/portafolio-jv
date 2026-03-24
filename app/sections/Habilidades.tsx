"use client"

import { Globe, Code, Database, Smartphone } from "lucide-react"
import { motion } from "framer-motion"

const categories = [
  { title: "Frontend",      icon: Globe,      bg: "bg-blue-50 dark:bg-blue-900/20",    iconColor: "text-blue-600",   skills: ["TypeScript", "React", "Next.js", "Tailwind", "Vite", "Framer Motion"] },
  { title: "Backend",       icon: Code,       bg: "bg-blue-50 dark:bg-blue-900/20",    iconColor: "text-brand",      skills: ["Node.js", "Python", "Express", "REST APIs", "Microservicios", "JWT"] },
  { title: "Base de Datos", icon: Database,   bg: "bg-teal-50 dark:bg-teal-900/20",    iconColor: "text-teal-600",   skills: ["PostgreSQL", "Supabase", "MongoDB", "Redis", "Sequelize", "MySQL"] },
  { title: "Herramientas",  icon: Smartphone, bg: "bg-indigo-50 dark:bg-indigo-900/20",iconColor: "text-indigo-600", skills: ["Git", "Docker", "Postman", "Vercel", "Figma", "Railway"] },
]

export default function Habilidades() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 md:py-12">

      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h2 className="text-3xl md:text-4xl font-bold text-carbon dark:text-dm-text mb-2">Habilidades & Tecnologías</h2>
        <div className="w-14 h-1.5 bg-brand rounded-full mb-10" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            className="group bg-white dark:bg-dm-card p-7 rounded-[2rem] border-2 border-gray-100 dark:border-dm-border h-full transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            whileHover={{ y: -5, borderColor: "#cce5ff", boxShadow: "0 16px 32px rgba(0,123,255,0.08)" }}
          >
            <div className="text-center mb-5">
              <motion.div
                className={`w-14 h-14 mx-auto mb-3 rounded-2xl ${cat.bg} flex items-center justify-center`}
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <cat.icon className={`w-7 h-7 ${cat.iconColor}`} />
              </motion.div>
              <h3 className="text-base font-bold text-carbon dark:text-dm-text">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-1.5 justify-center">
              {cat.skills.map((skill) => (
                <motion.span
                  key={skill}
                  className="bg-gray-50 dark:bg-dm-muted text-gray-600 dark:text-dm-muted-text border border-gray-100 dark:border-dm-border px-2.5 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider cursor-default transition-colors duration-300"
                  whileHover={{ backgroundColor: "#eff6ff", color: "#007bff", borderColor: "#cce5ff" }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-8 bg-white dark:bg-dm-card rounded-[2rem] border-2 border-gray-100 dark:border-dm-border p-7 transition-colors duration-300"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
      >
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-dm-muted-text mb-4">También trabajo con</p>
        <div className="flex flex-wrap gap-2">
          {["Arquitectura de Microservicios", "WhatsApp Business API", "Gemini 2.5 Flash", "CI/CD", "Scrum / Agile", "UX Research", "Pitch Deck", "Modelo de Negocio"].map((skill) => (
            <span key={skill} className="bg-bone dark:bg-dm-muted text-gray-600 dark:text-dm-muted-text border border-gray-200 dark:border-dm-border px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors duration-300">
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
