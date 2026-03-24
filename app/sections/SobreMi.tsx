"use client"

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

export default function SobreMi() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 md:py-12">

      {/* Section title */}
      <R>
        <h2 className="text-3xl md:text-4xl font-bold text-carbon mb-2">Sobre mí</h2>
        <div className="w-14 h-1.5 bg-brand rounded-full mb-8" />
      </R>

      {/* Bio */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <R delay={0.05}>
          <p className="text-base text-gray-700 leading-relaxed">
            Soy un desarrollador de 22 años con mentalidad emprendedora. Construyo soluciones que no solo
            funcionan, sino que escalan. Fundé y dirijo{" "}
            <span className="font-bold text-brand">miservicio.ar</span>, lo que me dio una visión 360° del
            código al modelo de negocio.
          </p>
        </R>
        <R delay={0.1}>
          <p className="text-base text-gray-700 leading-relaxed">
            Me especializo en <span className="font-bold text-brand">JavaScript/TypeScript</span> con experiencia
            en arquitecturas de microservicios. Perfeccionando inglés para el{" "}
            <span className="font-semibold text-carbon">START Fellowship en Suiza</span> y una certificación en{" "}
            <span className="font-semibold text-carbon">Business Analytics</span>.
          </p>
        </R>
      </div>

      {/* Info cards */}
      <R className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10" delay={0.12}>
        {[
          { label: "Educación", value: "Ing. en Sistemas · 4° año", sub: "UTN" },
          { label: "Ubicación", value: "Mendoza, Argentina",         sub: "" },
          { label: "Foco",      value: "Full Stack + IA",            sub: "JavaScript/TS" },
          { label: "Meta 2026", value: "START Fellowship",           sub: "Suiza" },
        ].map((card) => (
          <motion.div
            key={card.label}
            className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm"
            whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(0,123,255,0.08)" }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <h4 className="font-bold text-carbon uppercase text-[9px] tracking-widest mb-1 opacity-40">
              {card.label}
            </h4>
            <p className="text-sm font-bold text-carbon">{card.value}</p>
            {card.sub && <p className="text-xs text-gray-400 mt-0.5">{card.sub}</p>}
          </motion.div>
        ))}
      </R>

      {/* Skill Map */}
      <R delay={0.15}>
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">
          Stack Map Interactivo — tocá una habilidad para ver cómo se conecta con mis proyectos
        </p>
        <SkillMap />
      </R>

      {/* CV */}
      <R className="mt-10" delay={0.2}>
        <motion.a
          href="/CV_Juan_Vergara_1.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 bg-white border-2 border-gray-100 text-carbon px-8 py-4 rounded-2xl font-bold shadow-sm"
          whileHover={{ borderColor: "#cce5ff", backgroundColor: "#eff6ff", y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v6m0 0l3-3m-3 3l-3-3m0-9h6" />
          </svg>
          Descargar CV
        </motion.a>
      </R>
    </div>
  )
}
