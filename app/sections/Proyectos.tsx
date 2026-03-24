"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Github, ExternalLink, Zap, Bot, Code, Smartphone } from "lucide-react"
import { PhoneMockup, WhatsAppMockup } from "../components/Mockups"

// ─── Types ───────────────────────────────────────────────────────────────────
type ProjectId = "miservicio" | "chatbot" | "bibliotheca"

interface Metric   { value: string; label: string; sub: string; color: string }
interface Achievement { dot: string; text: React.ReactNode; orange?: boolean }
interface Project {
  id:           ProjectId
  icon:         string
  title:        string
  role:         string
  tagline:      string
  badges:       { label: string; cls: string }[]
  description:  string
  mockup?:      React.ReactNode
  imgSrc?:      string
  metrics?:     Metric[]
  achievements?: Achievement[]
  tech:         string[]
  github:       string
  live?:        string
  liveLabel?:   string
  liveCls?:     string
}

// ─── Project data ─────────────────────────────────────────────────────────────
const projects: Project[] = [
  {
    id:       "miservicio",
    icon:     "🏠",
    title:    "miservicio.ar",
    role:     "CEO & Fundador",
    tagline:  "Plataforma de servicios del hogar",
    badges: [
      { label: "⚡ AI-Powered",        cls: "bg-[#ff751f] text-white shadow-sm shadow-orange-200" },
      { label: "Fase 1 · Tracción Real", cls: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400" },
    ],
    description:
      "Plataforma que conecta clientes con trabajadores del hogar de confianza. Arquitectura de microservicios, modelo de negocio validado con pitch deck y Chatbot IA integrado en WhatsApp para atención 24/7.",
    mockup: <PhoneMockup />,
    metrics: [
      { value: "30",     label: "Usuarios",  sub: "19 Clientes · 11 Trabajadores", color: "bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800/40 text-blue-600 dark:text-blue-400" },
      { value: "3",      label: "Trabajos",  sub: "Completados en plataforma",      color: "bg-teal-50 dark:bg-teal-900/20 border-teal-100 dark:border-teal-800/40 text-teal-600 dark:text-teal-400" },
      { value: "Fase 1", label: "Estado",    sub: "Validación & Tracción real",     color: "bg-orange-50 dark:bg-orange-900/10 border-orange-100 dark:border-orange/20 text-orange-600 dark:text-orange-400" },
    ],
    achievements: [
      { dot: "bg-brand",    text: <>Participante de la aceleradora <strong>mc²</strong></> },
      { dot: "bg-blue-500", text: <>Finalista <strong>eCommerce Day Startup</strong></> },
      { dot: "bg-orange",   text: <>Chatbot IA en WhatsApp: <strong>atención 24/7</strong></>, orange: true },
    ],
    tech:      ["Next.js", "Node.js", "PostgreSQL", "Tailwind", "WhatsApp API"],
    github:    "https://github.com/JuanVergara-9/miservicio-front-v2",
    live:      "https://miservicio.ar/",
    liveLabel: "Ver Proyecto",
    liveCls:   "bg-[#ff751f] hover:bg-orange-dark shadow-lg shadow-orange-200",
  },
  {
    id:       "chatbot",
    icon:     "🤖",
    title:    "Chatbot AI WhatsApp",
    role:     "JV | AI · Servicios",
    tagline:  "Atención automatizada 24/7",
    badges: [
      { label: "⚡ AI POWERED (v1.0)", cls: "bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400" },
      { label: "100% WhatsApp",        cls: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400" },
    ],
    description:
      "Gemini 2.5 Flash con microservicios Node.js para respuestas asíncronas vía WhatsApp Business API. Maneja agendamiento, FAQs y gestión de leads sin intervención humana — reduciendo el tiempo de respuesta un 70%.",
    mockup: <WhatsAppMockup />,
    metrics: [
      { value: "−70%",  label: "Respuesta",  sub: "Tiempo de atención inicial",    color: "bg-violet-50 dark:bg-violet-900/20 border-violet-200 dark:border-violet-800/40 text-violet-600 dark:text-violet-400" },
      { value: "24/7",  label: "Disponible", sub: "Sin intervención humana",        color: "bg-violet-50 dark:bg-violet-900/20 border-violet-200 dark:border-violet-800/40 text-violet-600 dark:text-violet-400" },
      { value: "100%",  label: "WhatsApp",   sub: "Canal de comunicación",          color: "bg-violet-50 dark:bg-violet-900/20 border-violet-200 dark:border-violet-800/40 text-violet-600 dark:text-violet-400" },
    ],
    achievements: [
      { dot: "bg-violet-500", text: <>Agendamiento automático de citas</> },
      { dot: "bg-violet-400", text: <>Respuestas a FAQs en tiempo real</> },
      { dot: "bg-brand",      text: <>Webhook Node.js + procesamiento async</> },
    ],
    tech:      ["Node.js", "WhatsApp API", "Gemini 2.5 Flash", "Railway"],
    github:    "https://github.com/JuanVergara-9/miservicio-front-v2",
    live:      "https://miservicio.ar/",
    liveLabel: "Ver Demo",
    liveCls:   "bg-violet-600 hover:bg-violet-700",
  },
  {
    id:       "bibliotheca",
    icon:     "📚",
    title:    "Bibliotheca",
    role:     "Proyecto Personal",
    tagline:  "Explorador literario",
    badges: [
      { label: "Proyecto Personal", cls: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400" },
    ],
    description:
      "Nacido de una pasión por la literatura — de Cortázar a Benedetti. Explorador literario con estética renacentista moderna que integra la API de Google Books. Demuestra cómo una pasión personal se convierte en código de alto nivel.",
    imgSrc: "/biblioteca.png",
    tech:   ["React", "TypeScript", "Google Books API", "Framer Motion"],
    github: "https://github.com/JuanVergara-9/bookfinder",
  },
]

// ─── Compact selector card (left panel) ──────────────────────────────────────
function SelectorCard({ p, isActive, onClick }: { p: Project; isActive: boolean; onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      className={`relative w-full text-left p-4 rounded-2xl border-2 transition-colors duration-200 overflow-hidden ${
        isActive
          ? "border-brand/30 dark:border-brand/20"
          : "border-gray-100 dark:border-dm-border bg-white dark:bg-dm-card"
      }`}
      whileHover={{ x: 3 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 380, damping: 28 }}
    >
      {isActive && (
        <motion.div
          layoutId="proj-bg"
          className="absolute inset-0 bg-brand-subtle dark:bg-brand/10"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
      {isActive && (
        <motion.div
          layoutId="proj-bar"
          className="absolute left-0 top-3 bottom-3 w-[3px] bg-brand rounded-r-full"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
      <div className="relative z-10 pl-1">
        <span className="text-xl">{p.icon}</span>
        <p className={`text-sm font-bold mt-1.5 ${isActive ? "text-brand" : "text-carbon dark:text-dm-text"}`}>
          {p.title}
        </p>
        <p className="text-xs text-gray-400 dark:text-dm-muted-text mt-0.5 leading-snug">
          {p.tagline}
        </p>
      </div>
    </motion.button>
  )
}

// ─── Detail panel ─────────────────────────────────────────────────────────────
function DetailPanel({ p }: { p: Project }) {
  return (
    <div className="bg-white dark:bg-dm-card rounded-[2rem] border-2 border-gray-100 dark:border-dm-border overflow-hidden">

      {/* ── Top: header with mockup or image ── */}
      <div className="grid md:grid-cols-5 gap-0">

        {/* Left: info */}
        <div className="md:col-span-3 p-7 flex flex-col gap-4">
          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            {p.badges.map(b => (
              <span key={b.label} className={`text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider ${b.cls}`}>
                {b.label}
              </span>
            ))}
          </div>

          {/* Title */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-dm-muted-text">
              {p.role}
            </p>
            <h3 className="text-2xl font-bold text-carbon dark:text-dm-text tracking-tight mt-0.5">
              {p.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 dark:text-dm-muted-text leading-relaxed">
            {p.description}
          </p>

          {/* Metrics */}
          {p.metrics && (
            <div className="grid grid-cols-3 gap-2">
              {p.metrics.map(m => (
                <div key={m.label} className={`rounded-2xl p-3 border flex flex-col items-center text-center ${m.color}`}>
                  <p className="text-lg font-extrabold leading-none">{m.value}</p>
                  <p className="text-[8px] font-bold uppercase tracking-wider mt-1 opacity-70">{m.label}</p>
                  <p className="text-[8px] leading-tight mt-1 opacity-60">{m.sub}</p>
                </div>
              ))}
            </div>
          )}

          {/* Achievements */}
          {p.achievements && (
            <div className="space-y-1.5">
              {p.achievements.map((a, i) => (
                <div key={i} className={`flex items-center gap-2.5 text-xs text-gray-600 dark:text-dm-muted-text px-3 py-2 rounded-xl border ${
                  a.orange
                    ? "bg-orange-50 dark:bg-orange/5 border-orange-100 dark:border-orange/10"
                    : "bg-gray-50 dark:bg-dm-muted border-gray-100 dark:border-dm-border"
                }`}>
                  <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${a.dot}`} />
                  {a.text}
                </div>
              ))}
            </div>
          )}

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {p.tech.map(t => (
              <span key={t} className="bg-gray-50 dark:bg-dm-muted text-gray-500 dark:text-dm-muted-text border border-gray-100 dark:border-dm-border px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                {t}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex gap-3 mt-auto pt-1">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className="flex-1">
              <Link href={p.github} target="_blank" rel="noreferrer"
                className="flex items-center justify-center w-full bg-[#212121] dark:bg-dm-muted dark:border dark:border-dm-border text-white px-5 py-3 rounded-xl font-bold text-sm">
                <Github className="w-4 h-4 mr-2" /> Código
              </Link>
            </motion.div>
            {p.live && (
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className="flex-1">
                <Link href={p.live} target="_blank" rel="noreferrer"
                  className={`flex items-center justify-center w-full text-white px-5 py-3 rounded-xl font-bold text-sm transition-colors ${p.liveCls}`}>
                  <ExternalLink className="w-4 h-4 mr-2" /> {p.liveLabel}
                </Link>
              </motion.div>
            )}
          </div>
        </div>

        {/* Right: visual (mockup or image) */}
        <div className={`md:col-span-2 flex items-center justify-center min-h-48 ${
          p.imgSrc
            ? "overflow-hidden"
            : p.id === "miservicio"
              ? "bg-gradient-to-br from-orange-50 to-blue-50 dark:from-orange-900/10 dark:to-blue-900/10"
              : "bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-900/10 dark:to-violet-900/20"
        }`}>
          {p.imgSrc ? (
            <img src={p.imgSrc} alt={p.title}
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <div className="py-6">
              {p.mockup}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function Proyectos() {
  const [selected, setSelected] = useState<ProjectId>("miservicio")
  const current = projects.find(p => p.id === selected)!

  return (
    <div className="max-w-6xl mx-auto w-full px-6 py-8 md:py-10 flex flex-col gap-6">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-carbon dark:text-dm-text mb-2">
          Proyectos Destacados
        </h2>
        <div className="w-14 h-1.5 bg-brand rounded-full" />
      </motion.div>

      {/* Mobile: chip tabs */}
      <motion.div
        className="md:hidden flex gap-2 overflow-x-auto pb-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {projects.map(p => (
          <button
            key={p.id}
            onClick={() => setSelected(p.id)}
            className={`shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold border-2 transition-all ${
              selected === p.id
                ? "border-brand bg-brand-subtle dark:bg-brand/10 text-brand"
                : "border-gray-100 dark:border-dm-border text-gray-500 dark:text-dm-muted-text bg-white dark:bg-dm-card"
            }`}
          >
            <span>{p.icon}</span> {p.title}
          </button>
        ))}
      </motion.div>

      {/* Master-detail layout */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-5 items-start">

        {/* Left: project selector — desktop only */}
        <motion.div
          className="hidden md:flex flex-col gap-3 w-52 shrink-0"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {projects.map(p => (
            <SelectorCard
              key={p.id}
              p={p}
              isActive={selected === p.id}
              onClick={() => setSelected(p.id)}
            />
          ))}

          {/* Hint */}
          <p className="text-[9px] text-gray-300 dark:text-dm-border font-medium text-center mt-1 uppercase tracking-widest">
            Click para ver detalle
          </p>
        </motion.div>

        {/* Right: animated detail panel */}
        <div className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <DetailPanel p={current} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
