"use client"

import { Download } from "lucide-react"
import { motion } from "framer-motion"
import SkillMap from "../components/SkillMap"

function R({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

const cards = [
  {
    label: "Educación",
    value: "Ing. en Sistemas — 4° año",
    sub: "UTN",
  },
  {
    label: "Ubicación",
    value: "San Rafael, Mendoza",
    sub: "Argentina",
  },
  {
    label: "Rol",
    value: "Full Stack & IA",
    sub: "JavaScript / TS",
  },
  {
    label: "Idiomas",
    value: "Español (Nativo)",
    sub: "Inglés (Estudiando)",
  },
]

export default function SobreMi() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 md:py-12">

      {/* ── Título ── */}
      <R>
        <h2 className="text-3xl md:text-4xl font-bold text-carbon dark:text-dm-text mb-2">
          Sobre mí
        </h2>
        <div className="w-14 h-1.5 bg-brand rounded-full mb-8" />
      </R>

      {/* ── Copy principal ── */}
      <div className="grid md:grid-cols-2 gap-6 md:gap-10 mb-10">
        <R delay={0.05}>
          <p className="text-base text-gray-700 dark:text-dm-muted-text leading-relaxed">
            Desarrollador Full Stack de{" "}
            <span className="font-semibold text-carbon dark:text-dm-text">22 años</span>{" "}
            enfocado en la construcción de soluciones tecnológicas escalables que resuelven
            problemas reales. Con una fuerte mentalidad emprendedora, mi objetivo es
            transformar ideas complejas en{" "}
            <span className="font-semibold text-carbon dark:text-dm-text">
              productos digitales de alto impacto
            </span>
            .
          </p>
        </R>
        <R delay={0.1}>
          <p className="text-base text-gray-700 dark:text-dm-muted-text leading-relaxed">
            Como fundador y CEO de{" "}
            <span className="font-bold text-brand">miservicio</span>, he adquirido una
            visión integral del producto, desde la arquitectura del código hasta el modelo
            de negocio. Me especializo en el ecosistema{" "}
            <span className="font-bold text-brand">JavaScript / TypeScript</span>, con
            experiencia en arquitecturas de{" "}
            <span className="font-semibold text-carbon dark:text-dm-text">
              microservicios de alto rendimiento
            </span>
            .
          </p>
        </R>
      </div>

      {/* ── Cards de info rápida ── */}
      <R className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6" delay={0.12}>
        {cards.map((card) => (
          <motion.div
            key={card.label}
            className="bg-white dark:bg-dm-card p-4 rounded-2xl border border-gray-100 dark:border-dm-border shadow-sm transition-colors duration-300"
            whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(0,123,255,0.08)" }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <h4 className="font-bold text-carbon dark:text-dm-muted-text uppercase text-[9px] tracking-widest mb-1.5 opacity-40 dark:opacity-60">
              {card.label}
            </h4>
            <p className="text-sm font-bold text-carbon dark:text-dm-text leading-snug">
              {card.value}
            </p>
            {card.sub && (
              <p className="text-xs text-gray-400 dark:text-dm-muted-text mt-0.5">
                {card.sub}
              </p>
            )}
          </motion.div>
        ))}
      </R>

      {/* ── CV — justo debajo de las cards, encima del mapa ── */}
      <R className="flex justify-center my-8" delay={0.16}>
        <motion.a
          href="/CV_Juan_Vergara_1.pdf"
          target="_blank"
          rel="noreferrer"
          className={[
            "inline-flex items-center gap-3 px-8 py-3.5 rounded-2xl font-bold text-sm",
            "border border-gray-200 dark:border-gray-600",
            "bg-white dark:bg-transparent",
            "text-carbon dark:text-dm-text",
            "shadow-sm",
            "hover:bg-gray-50 dark:hover:bg-dm-card",
            "transition-all duration-300",
          ].join(" ")}
          whileHover={{ y: -2, boxShadow: "0 6px 20px rgba(0,123,255,0.10)" }}
          whileTap={{ scale: 0.97 }}
        >
          <Download className="w-4 h-4 text-brand" />
          Descargar CV
        </motion.a>
      </R>

      {/* ── Stack Map Interactivo ── */}
      <R delay={0.2}>
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-dm-muted-text mb-4">
          Stack Map Interactivo — tocá una habilidad para ver cómo se conecta con mis proyectos
        </p>
        <SkillMap />
      </R>

    </div>
  )
}
