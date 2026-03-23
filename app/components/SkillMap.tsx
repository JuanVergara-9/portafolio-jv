"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

// ─── Types ────────────────────────────────────────────────────────────────────
type Skill = { id: string; label: string }

type SkillCategory = {
  id: string
  label: string
  bgClass: string
  textClass: string
  activeBg: string
  activeText: string
  borderClass: string
  skills: Skill[]
}

type CanvasNode = {
  id: string
  label: string
  sublabel: string
  x: number
  y: number
}

type Connection = { from: string; to: string }

type SkillInfo = {
  title: string
  description: string
  metric?: { value: string; label: string }
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const skillCategories: SkillCategory[] = [
  {
    id: "founder",
    label: "Fundador & Estrategia",
    bgClass: "bg-orange-subtle",
    textClass: "text-orange-dark",
    activeBg: "bg-orange",
    activeText: "text-white",
    borderClass: "border-orange-light",
    skills: [
      { id: "validacion", label: "Validación de Negocio" },
      { id: "pitch", label: "Pitch Deck" },
      { id: "monetizacion", label: "Monetización" },
    ],
  },
  {
    id: "engineering",
    label: "Ingeniería de Sistemas",
    bgClass: "bg-brand-subtle",
    textClass: "text-brand-dark",
    activeBg: "bg-brand",
    activeText: "text-white",
    borderClass: "border-brand-light",
    skills: [
      { id: "nodejs", label: "Node.js" },
      { id: "microservicios", label: "Microservicios" },
      { id: "escalabilidad", label: "Escalabilidad" },
    ],
  },
  {
    id: "ai",
    label: "IA & Integración",
    bgClass: "bg-violet-50",
    textClass: "text-violet-700",
    activeBg: "bg-violet-600",
    activeText: "text-white",
    borderClass: "border-violet-200",
    skills: [
      { id: "chatbot", label: "Chatbot WhatsApp (LLM)" },
      { id: "whatsapp-api", label: "API WhatsApp Business" },
    ],
  },
]

// Positions: x/y in viewBox 0–100 coords (also used as CSS % for node divs)
const nodes: CanvasNode[] = [
  { id: "miservicio",  label: "miservicio.ar", sublabel: "Platform",      x: 15, y: 42 },
  { id: "ai-chatbot",  label: "AI Chatbot",    sublabel: "v1.0",          x: 15, y: 75 },
  { id: "nodejs",      label: "Node.js",        sublabel: "Backend",       x: 50, y: 42 },
  { id: "postgres",    label: "PostgreSQL",     sublabel: "Database",      x: 82, y: 25 },
  { id: "whatsapp",   label: "WhatsApp API",   sublabel: "Business",      x: 50, y: 75 },
  { id: "llm",         label: "LLM (GPT-4)",   sublabel: "AI Engine",     x: 82, y: 75 },
  { id: "pitch-node",  label: "Pitch Deck",    sublabel: "Inversores",    x: 40, y: 12 },
]

const connections: Connection[] = [
  { from: "miservicio",  to: "nodejs"     },
  { from: "miservicio",  to: "ai-chatbot" },
  { from: "miservicio",  to: "pitch-node" },
  { from: "nodejs",      to: "postgres"   },
  { from: "nodejs",      to: "whatsapp"  },
  { from: "ai-chatbot",  to: "whatsapp"  },
  { from: "whatsapp",   to: "llm"        },
]

const skillToNodes: Record<string, string[]> = {
  validacion:      ["miservicio", "pitch-node"],
  pitch:           ["pitch-node", "miservicio"],
  monetizacion:    ["miservicio", "pitch-node"],
  nodejs:          ["nodejs", "postgres", "miservicio"],
  microservicios:  ["nodejs", "whatsapp", "ai-chatbot", "miservicio"],
  escalabilidad:   ["nodejs", "postgres", "miservicio"],
  chatbot:         ["ai-chatbot", "whatsapp", "llm"],
  "whatsapp-api":  ["whatsapp", "ai-chatbot", "llm"],
}

const skillInfo: Record<string, SkillInfo> = {
  validacion: {
    title: "Validación de Negocio Real",
    description: "Lideré la validación con usuarios reales en San Rafael, Mendoza. Más de 500 potenciales usuarios entrevistados antes del lanzamiento para iterar el modelo de negocio.",
    metric: { value: "+15k", label: "usuarios alcanzados" },
  },
  pitch: {
    title: "Pitch Deck para Inversores",
    description: "Diseñé y presenté el pitch deck completo ante inversores en eCommerce Day Startup Competition. Alcanzamos la instancia de Finalistas entre más de 80 startups.",
    metric: { value: "Finalista", label: "eCommerce Day" },
  },
  monetizacion: {
    title: "Estrategia de Monetización",
    description: "Modelo freemium → premium para proveedores, con comisiones por transacción. Participante de la aceleradora mc² para refinar el modelo y escalar.",
    metric: { value: "mc²", label: "Aceleradora" },
  },
  nodejs: {
    title: "Backend Node.js",
    description: "API REST escalable con Node.js + Express, desplegada en Railway. Arquitectura orientada a eventos con manejo robusto de errores y logging estructurado.",
    metric: { value: "Railway", label: "Cloud Deploy" },
  },
  microservicios: {
    title: "Arquitectura de Microservicios",
    description: "Servicios desacoplados: autenticación JWT, servicio de notificaciones (WhatsApp/Email), servicio de matching proveedor-cliente y colas de mensajes asíncronas.",
    metric: { value: "99.9%", label: "uptime" },
  },
  escalabilidad: {
    title: "Escalabilidad & Performance",
    description: "PostgreSQL con índices optimizados y Connection Pooling. Arquitectura que soporta crecimiento horizontal sin refactoring. +5k transacciones procesadas.",
    metric: { value: "+5k", label: "transacciones" },
  },
  chatbot: {
    title: "Chatbot IA vía WhatsApp",
    description: "Integración de LLMs (GPT-4 / Claude 3.5 Sonnet) con microservicios Node.js para respuestas asíncronas y contextuales 100% por WhatsApp. Agendamiento automático y gestión de leads.",
    metric: { value: "−70%", label: "tiempo de respuesta" },
  },
  "whatsapp-api": {
    title: "WhatsApp Business API",
    description: "Comunicación bidireccional via WhatsApp Business API: agendamiento automático de citas, respuestas a FAQs y gestión de leads con webhook Node.js en tiempo real.",
    metric: { value: "24/7", label: "atención automática" },
  },
}

// ─── SVG path between two nodes (cubic bezier) ────────────────────────────────
function buildPath(a: CanvasNode, b: CanvasNode): string {
  const mx = (a.x + b.x) / 2
  return `M ${a.x} ${a.y} C ${mx} ${a.y} ${mx} ${b.y} ${b.x} ${b.y}`
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function SkillMap() {
  const [activeId, setActiveId] = useState<string | null>(null)

  const toggle = (id: string) =>
    setActiveId((prev) => (prev === id ? null : id))

  const highlighted = activeId ? (skillToNodes[activeId] ?? []) : []
  const info = activeId ? skillInfo[activeId] : null

  const isConnActive = (c: Connection) =>
    highlighted.includes(c.from) && highlighted.includes(c.to)

  const nodeById = (id: string) => nodes.find((n) => n.id === id)!

  return (
    <div className="grid lg:grid-cols-5 gap-6">
      {/* ── Left Legend ── */}
      <div className="lg:col-span-2 space-y-3">
        {skillCategories.map((cat) => (
          <div
            key={cat.id}
            className="bg-white rounded-2xl border-2 border-gray-100 p-5"
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">
              {cat.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => {
                const isActive = activeId === skill.id
                return (
                  <motion.button
                    key={skill.id}
                    onClick={() => toggle(skill.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-pressed={isActive}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold border-2 transition-colors cursor-pointer ${
                      isActive
                        ? `${cat.activeBg} ${cat.activeText} border-transparent shadow-sm`
                        : `${cat.bgClass} ${cat.textClass} ${cat.borderClass} hover:opacity-80`
                    }`}
                  >
                    {skill.label}
                  </motion.button>
                )
              })}
            </div>
          </div>
        ))}

        {/* Mobile info panel */}
        <AnimatePresence mode="wait">
          {info && (
            <motion.div
              key={activeId}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="bg-white rounded-2xl border-2 border-brand-light p-5 shadow-sm">
                <p className="font-bold text-carbon text-sm mb-1">{info.title}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{info.description}</p>
                {info.metric && (
                  <div className="mt-3 inline-flex items-center gap-2 bg-orange-subtle border border-orange-light px-3 py-1.5 rounded-xl">
                    <span className="text-orange font-bold text-sm">{info.metric.value}</span>
                    <span className="text-gray-500 text-[10px] uppercase tracking-wide">{info.metric.label}</span>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Right Canvas (desktop only) ── */}
      <div className="hidden lg:block lg:col-span-3 relative bg-bone/60 rounded-2xl border-2 border-gray-100 overflow-hidden min-h-[320px]">
        {/* SVG connection lines — viewBox matches node x/y percentages */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
              <path d="M 0 0 L 6 3 L 0 6 z" fill="#007bff" fillOpacity="0.6" />
            </marker>
          </defs>
          {connections.map((conn) => {
            const a = nodeById(conn.from)
            const b = nodeById(conn.to)
            const active = isConnActive(conn)
            const dimmed = !!activeId && !active
            return (
              <motion.path
                key={`${conn.from}-${conn.to}`}
                d={buildPath(a, b)}
                fill="none"
                strokeWidth={active ? 0.7 : 0.4}
                strokeDasharray={active ? "none" : "2 2"}
                markerEnd={active ? "url(#arrowhead)" : undefined}
                animate={{
                  stroke: active ? "#007bff" : "#d1d5db",
                  opacity: dimmed ? 0.15 : 1,
                  strokeWidth: active ? 0.7 : 0.4,
                }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              />
            )
          })}
        </svg>

        {/* Canvas Nodes */}
        {nodes.map((node) => {
          const isHl = highlighted.includes(node.id)
          const isDim = !!activeId && !isHl
          return (
            <motion.div
              key={node.id}
              className="absolute"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: "translate(-50%, -50%)",
                zIndex: isHl ? 10 : 1,
              }}
              animate={{ scale: isHl ? 1.12 : 1, opacity: isDim ? 0.2 : 1 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
            >
              <div
                className={`px-2.5 py-1.5 rounded-xl text-[10px] font-bold border-2 shadow-sm whitespace-nowrap transition-colors ${
                  isHl
                    ? "bg-brand text-white border-brand shadow-brand-light/40"
                    : "bg-white text-gray-600 border-gray-200"
                }`}
              >
                <p>{node.label}</p>
                <p className={`text-[8px] font-normal ${isHl ? "text-blue-100" : "text-gray-400"}`}>
                  {node.sublabel}
                </p>
              </div>
            </motion.div>
          )
        })}

        {/* Floating Info Panel */}
        <AnimatePresence mode="wait">
          {info && (
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl border-2 border-brand-light shadow-xl p-4"
              role="status"
              aria-live="polite"
            >
              <p className="font-bold text-carbon text-sm mb-1">{info.title}</p>
              <p className="text-gray-600 text-xs leading-relaxed">{info.description}</p>
              {info.metric && (
                <div className="mt-2.5 inline-flex items-center gap-2 bg-orange-subtle border border-orange-light px-3 py-1.5 rounded-xl">
                  <span className="text-orange font-bold text-sm">{info.metric.value}</span>
                  <span className="text-gray-500 text-[10px] uppercase tracking-wide">{info.metric.label}</span>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty state hint */}
        <AnimatePresence>
          {!activeId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-4 left-0 right-0 flex justify-center"
            >
              <p className="text-[10px] text-gray-400 font-medium tracking-wide">
                ← Seleccioná una habilidad para ver cómo se conecta
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
