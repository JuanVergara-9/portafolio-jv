"use client"

import { motion } from "framer-motion"
import { Globe, Code, Database, Wrench, Brain, Rocket, GitBranch, Search, Presentation, LayoutGrid, TrendingUp, type LucideIcon } from "lucide-react"
import {
  siTypescript, siReact, siNextdotjs, siTailwindcss, siVite, siFramer, siRedux,
  siNodedotjs, siPython, siExpress, siGraphql, siJsonwebtokens,
  siPostgresql, siSupabase, siMongodb, siRedis, siMysql, siApachekafka, siElasticsearch, siSequelize,
  siGit, siDocker, siPostman, siVercel, siFigma, siRailway, siGithubactions,
  type SimpleIcon,
} from "simple-icons"

// ─── Helpers ─────────────────────────────────────────────────────────────────

// Icons with pitch-black hex clash with dark cards — use currentColor for them
const DARK_HEX = new Set(["000000", "010101", "111111", "231f20"])

function TechLogo({ si }: { si: SimpleIcon }) {
  const fill = DARK_HEX.has(si.hex.toLowerCase()) ? "currentColor" : `#${si.hex}`
  return (
    <svg viewBox="0 0 24 24" className="w-3 h-3 shrink-0" aria-hidden="true">
      <path d={si.path} fill={fill} />
    </svg>
  )
}

function TechBadge({ name, si }: { name: string; si?: SimpleIcon }) {
  return (
    <motion.span
      className="flex items-center gap-1.5 bg-gray-50 dark:bg-dm-muted border border-gray-100 dark:border-dm-border text-gray-600 dark:text-dm-muted-text px-2.5 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider cursor-default select-none"
      whileHover={{ borderColor: "#007bff", color: "#007bff", backgroundColor: "#eff6ff" }}
      transition={{ duration: 0.15 }}
    >
      {si && <TechLogo si={si} />}
      {name}
    </motion.span>
  )
}

// ─── Category data ────────────────────────────────────────────────────────────

interface TechEntry { name: string; si?: SimpleIcon }
interface Category  { title: string; Icon: LucideIcon; iconBg: string; iconColor: string; items: TechEntry[] }

const categories: Category[] = [
  {
    title:     "Frontend",
    Icon:      Globe,
    iconBg:    "bg-blue-100 dark:bg-blue-900/20",
    iconColor: "text-brand",
    items: [
      { name: "TypeScript",     si: siTypescript },
      { name: "React",          si: siReact },
      { name: "Next.js",        si: siNextdotjs },
      { name: "Tailwind CSS",   si: siTailwindcss },
      { name: "Vite",           si: siVite },
      { name: "Framer Motion",  si: siFramer },
      { name: "Zustand" },
      { name: "Redux Toolkit",  si: siRedux },
    ],
  },
  {
    title:     "Backend",
    Icon:      Code,
    iconBg:    "bg-teal-100 dark:bg-teal-900/20",
    iconColor: "text-teal-600",
    items: [
      { name: "Node.js",        si: siNodedotjs },
      { name: "Python",         si: siPython },
      { name: "Express",        si: siExpress },
      { name: "REST APIs" },
      { name: "Microservicios" },
      { name: "GraphQL",        si: siGraphql },
      { name: "JWT",            si: siJsonwebtokens },
    ],
  },
  {
    title:     "Base de Datos",
    Icon:      Database,
    iconBg:    "bg-violet-100 dark:bg-violet-900/20",
    iconColor: "text-violet-600",
    items: [
      { name: "PostgreSQL",     si: siPostgresql },
      { name: "Supabase",       si: siSupabase },
      { name: "MongoDB",        si: siMongodb },
      { name: "Redis",          si: siRedis },
      { name: "MySQL",          si: siMysql },
      { name: "Sequelize",      si: siSequelize },
      { name: "Kafka",          si: siApachekafka },
      { name: "Elasticsearch",  si: siElasticsearch },
    ],
  },
  {
    title:     "Herramientas",
    Icon:      Wrench,
    iconBg:    "bg-orange-100 dark:bg-orange-900/20",
    iconColor: "text-orange",
    items: [
      { name: "Git",              si: siGit },
      { name: "Docker",           si: siDocker },
      { name: "GitHub Actions",   si: siGithubactions },
      { name: "Postman",          si: siPostman },
      { name: "Vercel",           si: siVercel },
      { name: "Figma",            si: siFigma },
      { name: "Railway",          si: siRailway },
    ],
  },
]

// ─── Strategy data ────────────────────────────────────────────────────────────

interface StrategyItem { Icon: LucideIcon; title: string; sub: string; iconBg: string; iconColor: string }

const strategyItems: StrategyItem[] = [
  {
    Icon:      Brain,
    title:     "LLMs & Prompt Engineering",
    sub:       "Integración de modelos de lenguaje y orquestación de agentes IA",
    iconBg:    "bg-violet-100 dark:bg-violet-900/30",
    iconColor: "text-violet-600 dark:text-violet-400",
  },
  {
    Icon:      Rocket,
    title:     "Gestión de Producto & User Growth",
    sub:       "Estrategias de adquisición, activación y retención de usuarios",
    iconBg:    "bg-orange-100 dark:bg-orange-900/20",
    iconColor: "text-orange",
  },
  {
    Icon:      GitBranch,
    title:     "Scrum / Agile",
    sub:       "Sprints, retrospectivas y gestión incremental de proyectos",
    iconBg:    "bg-teal-100 dark:bg-teal-900/20",
    iconColor: "text-teal-600 dark:text-teal-400",
  },
  {
    Icon:      Search,
    title:     "UX Research",
    sub:       "Entrevistas, mapas de empatía y validación de hipótesis",
    iconBg:    "bg-blue-100 dark:bg-blue-900/20",
    iconColor: "text-brand",
  },
  {
    Icon:      Presentation,
    title:     "Pitch Deck",
    sub:       "Presentaciones para inversores: problema, solución, tracción y roadmap",
    iconBg:    "bg-pink-100 dark:bg-pink-900/20",
    iconColor: "text-pink-600 dark:text-pink-400",
  },
  {
    Icon:      LayoutGrid,
    title:     "Modelo de Negocio",
    sub:       "Business Model Canvas, propuesta de valor y segmentación",
    iconBg:    "bg-amber-100 dark:bg-amber-900/20",
    iconColor: "text-amber-600 dark:text-amber-500",
  },
  {
    Icon:      TrendingUp,
    title:     "Monetización & KPIs",
    sub:       "Diseño de revenue streams, métricas norte y dashboards de tracción",
    iconBg:    "bg-green-100 dark:bg-green-900/20",
    iconColor: "text-green-600 dark:text-green-400",
  },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function SkillCard({ cat, delay }: { cat: Category; delay: number }) {
  return (
    <motion.div
      className={[
        "bg-white dark:bg-dm-card rounded-[2rem] p-7 h-full flex flex-col gap-5",
        "border border-gray-100",
        // Subtle blue glow in dark mode
        "dark:border-brand/25 dark:shadow-[0_0_0_1px_rgba(0,123,255,0.15),0_0_24px_rgba(0,123,255,0.07)]",
        "transition-all duration-300",
      ].join(" ")}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      whileHover={{
        y: -4,
        boxShadow: "0 0 0 1px rgba(0,123,255,0.35), 0 0 32px rgba(0,123,255,0.14)",
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${cat.iconBg}`}>
          <cat.Icon className={`w-5 h-5 ${cat.iconColor}`} />
        </div>
        <h3 className="text-base font-bold text-carbon dark:text-dm-text">{cat.title}</h3>
      </div>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-1.5">
        {cat.items.map(item => (
          <TechBadge key={item.name} name={item.name} si={item.si} />
        ))}
      </div>
    </motion.div>
  )
}

function StrategyCard({ item, delay }: { item: StrategyItem; delay: number }) {
  return (
    <motion.div
      className="group flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-dm-card border border-gray-100 dark:border-dm-border hover:border-brand/30 dark:hover:border-brand/30 transition-colors duration-200"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      whileHover={{ y: -2 }}
    >
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${item.iconBg} group-hover:scale-110 transition-transform duration-200`}>
        <item.Icon className={`w-5 h-5 ${item.iconColor}`} />
      </div>
      <div>
        <p className="text-sm font-bold text-carbon dark:text-dm-text leading-snug">{item.title}</p>
        <p className="text-xs text-gray-500 dark:text-dm-muted-text mt-1 leading-relaxed">{item.sub}</p>
      </div>
    </motion.div>
  )
}

// ─── Main section ─────────────────────────────────────────────────────────────
export default function Habilidades() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 md:py-12">

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-carbon dark:text-dm-text mb-2">
          Habilidades & Tecnologías
        </h2>
        <div className="w-14 h-1.5 bg-brand rounded-full mb-10" />
      </motion.div>

      {/* 4 category cards */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-10">
        {categories.map((cat, i) => (
          <SkillCard key={cat.title} cat={cat} delay={i * 0.07} />
        ))}
      </div>

      {/* Strategy & Leadership panel */}
      <motion.div
        className="bg-gray-50 dark:bg-dm-surface rounded-[2rem] border border-gray-100 dark:border-dm-border p-7"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.32 }}
      >
        {/* Panel title */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-6 bg-brand rounded-full" />
          <h3 className="text-sm font-bold text-carbon dark:text-dm-text uppercase tracking-widest">
            Estrategia, Liderazgo & Nuevos Conocimientos
          </h3>
        </div>

        {/* Mosaic grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {strategyItems.map((item, i) => (
            <StrategyCard key={item.title} item={item} delay={0.35 + i * 0.06} />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
