"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, Linkedin, Mail, Menu, X, Home, User, Briefcase, Layers, MessageSquare } from "lucide-react"
import Link from "next/link"

import Inicio      from "./sections/Inicio"
import SobreMi     from "./sections/SobreMi"
import Proyectos   from "./sections/Proyectos"
import Habilidades from "./sections/Habilidades"
import Contacto    from "./sections/Contacto"

// ─── Types ────────────────────────────────────────────────────────────────────
type Section = "inicio" | "sobre-mi" | "proyectos" | "habilidades" | "contacto"

// ─── Nav items ────────────────────────────────────────────────────────────────
const navItems: { id: Section; label: string; icon: React.ElementType }[] = [
  { id: "inicio",      label: "Inicio",      icon: Home },
  { id: "sobre-mi",    label: "Sobre mí",    icon: User },
  { id: "proyectos",   label: "Proyectos",   icon: Briefcase },
  { id: "habilidades", label: "Habilidades", icon: Layers },
]

// ─── Page transition variants (v12: no inline transition in variants) ────────
const pageVariants = {
  initial: { opacity: 0, y: 14 },
  enter:   { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -8 },
}

// ─── Section renderer ─────────────────────────────────────────────────────────
function renderSection(section: Section, onNavigate: (s: string) => void) {
  switch (section) {
    case "inicio":      return <Inicio onNavigate={onNavigate} />
    case "sobre-mi":    return <SobreMi />
    case "proyectos":   return <Proyectos />
    case "habilidades": return <Habilidades />
    case "contacto":    return <Contacto />
  }
}

// ─── Main Layout ──────────────────────────────────────────────────────────────
export default function Portfolio() {
  const [active, setActive]       = useState<Section>("inicio")
  const [mobileOpen, setMobileOpen] = useState(false)

  const navigate = (s: string) => {
    setActive(s as Section)
    setMobileOpen(false)
  }

  return (
    // Root: full viewport, NO global scroll
    <div className="h-screen w-screen overflow-hidden flex bg-bone/40 selection:bg-brand-light selection:text-carbon">

      {/* ═══════════════════ SIDEBAR (desktop) ═══════════════════ */}
      <aside className="hidden md:flex flex-col w-60 shrink-0 h-screen bg-white border-r border-gray-100 shadow-sm z-40">

        {/* Logo */}
        <div className="px-6 pt-7 pb-6 border-b border-gray-50">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-brand rounded-xl flex items-center justify-center shadow-md shadow-brand-light">
              <span className="text-white font-bold text-base">J</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-carbon">
              Vergara<span className="text-brand">.dev</span>
            </span>
          </div>
          {/* Status */}
          <div className="flex items-center gap-2 mt-4">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shrink-0" />
            <span className="text-[10px] text-gray-400 font-medium">Disponible para proyectos</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto" aria-label="Navegación principal">
          {navItems.map((item) => {
            const isActive = active === item.id
            return (
              <motion.button
                key={item.id}
                onClick={() => navigate(item.id)}
                aria-current={isActive ? "page" : undefined}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-colors relative ${
                  isActive
                    ? "text-brand"
                    : "text-gray-500 hover:text-carbon hover:bg-gray-50"
                }`}
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {/* Active pill */}
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active-bg"
                    className="absolute inset-0 bg-brand-subtle rounded-2xl border border-brand-light"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <item.icon className={`w-4 h-4 relative z-10 ${isActive ? "text-brand" : ""}`} />
                <span className="relative z-10">{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="sidebar-indicator"
                    className="ml-auto w-1.5 h-1.5 bg-brand rounded-full relative z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </motion.button>
            )
          })}
        </nav>

        {/* Bottom: CTA + socials */}
        <div className="px-4 pb-6 space-y-4 border-t border-gray-50 pt-5">
          <motion.button
            onClick={() => navigate("contacto")}
            className="w-full bg-orange text-white py-3 rounded-2xl font-bold text-sm shadow-lg shadow-orange-light flex items-center justify-center gap-2"
            whileHover={{ scale: 1.03, backgroundColor: "#e5610a" }}
            whileTap={{ scale: 0.97 }}
          >
            <MessageSquare className="w-4 h-4" />
            Hablemos
          </motion.button>

          <div className="flex justify-center gap-5">
            {[
              { icon: Github,   href: "https://github.com/JuanVergara-9",                   label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/juan-ignacio-vergara/",  label: "LinkedIn" },
              { icon: Mail,     href: "mailto:juanvergara920@gmail.com",                    label: "Email" },
            ].map((s) => (
              <motion.div key={s.label} whileHover={{ scale: 1.2, color: "#007bff" }} transition={{ type: "spring", stiffness: 400 }}>
                <Link href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="text-gray-400 hover:text-brand transition-colors">
                  <s.icon className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-[9px] text-gray-300 font-medium">© 2026 Juan I. Vergara</p>
        </div>
      </aside>

      {/* ═══════════════════ MOBILE HEADER ═══════════════════ */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 h-14 flex items-center justify-between px-5 shadow-sm">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center shadow-md shadow-brand-light">
            <span className="text-white font-bold text-sm">J</span>
          </div>
          <span className="font-bold text-carbon tracking-tight">Vergara<span className="text-brand">.dev</span></span>
        </div>
        <div className="flex items-center gap-3">
          <motion.button
            onClick={() => navigate("contacto")}
            className="bg-orange text-white px-4 py-1.5 rounded-xl text-xs font-bold shadow-sm"
            whileTap={{ scale: 0.95 }}
          >
            Hablemos
          </motion.button>
          <motion.button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            className="p-1.5 text-gray-600"
            whileTap={{ scale: 0.9 }}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
              className="absolute right-0 top-0 h-full w-72 bg-white shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-6 pt-16 pb-6 border-b border-gray-50">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Navegar</p>
              </div>
              <nav className="flex-1 px-3 py-5 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => navigate(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-sm font-bold transition-colors ${
                      active === item.id
                        ? "bg-brand-subtle text-brand border border-brand-light"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </button>
                ))}
              </nav>
              <div className="px-5 pb-8 space-y-3">
                {[
                  { icon: Github,   href: "https://github.com/JuanVergara-9",                  label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/juan-ignacio-vergara/", label: "LinkedIn" },
                  { icon: Mail,     href: "mailto:juanvergara920@gmail.com",                   label: "Email" },
                ].map((s) => (
                  <Link key={s.label} href={s.href} target="_blank" rel="noreferrer"
                    className="flex items-center gap-3 text-sm text-gray-600 font-medium hover:text-brand transition-colors">
                    <s.icon className="w-4 h-4" />
                    {s.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══════════════════ CONTENT AREA ═══════════════════ */}
      {/*
        - flex-1: ocupa todo el ancho restante
        - h-screen overflow-hidden: no scroll global
        - overflow-y-auto en el interior animado: scroll solo del contenido activo
      */}
      <main className="flex-1 h-screen overflow-hidden flex flex-col pt-14 md:pt-0" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={pageVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent"
          >
            {renderSection(active, navigate)}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* ═══════════════════ MOBILE BOTTOM TAB BAR ═══════════════════ */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-100 flex items-center justify-around px-2 py-2 shadow-lg">
        {navItems.map((item) => {
          const isActive = active === item.id
          return (
            <motion.button
              key={item.id}
              onClick={() => navigate(item.id)}
              className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-2xl transition-colors ${
                isActive ? "text-brand" : "text-gray-400"
              }`}
              whileTap={{ scale: 0.92 }}
            >
              {isActive && (
                <motion.div
                  layoutId="tab-active"
                  className="absolute inset-0 bg-brand-subtle rounded-2xl"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <item.icon className={`w-5 h-5 relative z-10 ${isActive ? "text-brand" : ""}`} />
              <span className={`text-[9px] font-bold relative z-10 ${isActive ? "text-brand" : "text-gray-400"}`}>
                {item.label}
              </span>
            </motion.button>
          )
        })}
        <motion.button
          onClick={() => navigate("contacto")}
          className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-2xl ${
            active === "contacto" ? "text-orange" : "text-gray-400"
          }`}
          whileTap={{ scale: 0.92 }}
        >
          <MessageSquare className="w-5 h-5 relative z-10" />
          <span className="text-[9px] font-bold relative z-10">Contacto</span>
        </motion.button>
      </div>
    </div>
  )
}
