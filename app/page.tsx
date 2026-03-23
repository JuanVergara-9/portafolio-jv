"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Smartphone, Menu, X, ChevronLeft, ChevronRight, Zap, Bot } from "lucide-react"
import { useState, useRef, useCallback } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import SkillMap from "./components/SkillMap"

// ─── Animation Variants ───────────────────────────────────────────────────────
// Variants without inline transition (v12 type-safe pattern)
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
}

// ─── Scroll-reveal wrapper ────────────────────────────────────────────────────
function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

// ─── Phone mockup ─────────────────────────────────────────────────────────────
function PhoneMockup() {
  return (
    <div className="relative mx-auto w-44 shrink-0">
      <div className="relative w-44 h-[340px] bg-carbon rounded-[2.5rem] border-4 border-gray-700 shadow-2xl overflow-hidden">
        {/* notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-carbon rounded-full z-20" />
        {/* screen */}
        <div className="absolute inset-0 bg-white overflow-hidden">
          {/* status bar */}
          <div className="bg-brand pt-6 pb-2 px-4 flex justify-between items-center">
            <span className="text-white text-[8px] font-bold">9:41</span>
            <span className="text-white text-[8px]">miservicio.ar</span>
            <span className="text-white text-[8px]">●●●</span>
          </div>
          {/* search bar */}
          <div className="px-3 py-2">
            <div className="bg-gray-100 rounded-xl px-3 py-1.5 flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-gray-400" />
              <span className="text-[8px] text-gray-400">Buscar servicio…</span>
            </div>
          </div>
          {/* categories */}
          <div className="px-3 mb-2">
            <p className="text-[7px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Categorías</p>
            <div className="flex gap-1.5 overflow-hidden">
              {["🔧 Plomería","⚡ Eléctrico","🧹 Limpieza"].map((c) => (
                <div key={c} className="bg-brand-subtle border border-brand-light rounded-lg px-1.5 py-1 shrink-0">
                  <span className="text-[7px] text-brand font-bold">{c}</span>
                </div>
              ))}
            </div>
          </div>
          {/* service cards */}
          <div className="px-3 space-y-2">
            {[
              { name: "Juan Pérez", svc: "Plomero", rating: "4.9", jobs: "127", badge: "Pro" },
              { name: "Carlos M.",  svc: "Electricista", rating: "4.8", jobs: "89", badge: null },
            ].map((p) => (
              <div key={p.name} className="bg-white border border-gray-100 rounded-2xl p-2 shadow-sm flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-subtle rounded-xl flex items-center justify-center text-brand text-[12px] font-bold shrink-0">
                  {p.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1">
                    <p className="text-[8px] font-bold text-carbon truncate">{p.name}</p>
                    {p.badge && (
                      <span className="bg-orange text-white text-[6px] font-bold px-1 rounded-full">{p.badge}</span>
                    )}
                  </div>
                  <p className="text-[7px] text-gray-400">{p.svc}</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="text-yellow-400 text-[7px]">★</span>
                    <span className="text-[7px] font-bold text-gray-600">{p.rating}</span>
                    <span className="text-[6px] text-gray-400">({p.jobs} trabajos)</span>
                  </div>
                </div>
                <div className="bg-brand rounded-lg px-1.5 py-1">
                  <span className="text-white text-[7px] font-bold">Contratar</span>
                </div>
              </div>
            ))}
          </div>
          {/* bottom nav */}
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-around py-2">
            {["🏠","🔍","📅","👤"].map((icon) => (
              <span key={icon} className="text-[14px]">{icon}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── WhatsApp mockup ──────────────────────────────────────────────────────────
function WhatsAppMockup() {
  const messages = [
    { from: "user", text: "Hola, necesito un plomero para mañana a las 10am" },
    { from: "bot",  text: "¡Hola! 👋 Soy el asistente de miservicio.\nEncontré 3 plomeros disponibles mañana. ¿Confirmás las 10:00 AM con Juan Pérez (⭐ 4.9)?" },
    { from: "user", text: "Sí, confirmá" },
    { from: "bot",  text: "✅ ¡Reserva confirmada!\nJuan Pérez llegará mañana a las 10:00 AM.\nTe enviaré un recordatorio 1h antes." },
  ]
  return (
    <div className="relative mx-auto w-44 shrink-0">
      <div className="relative w-44 h-[340px] bg-carbon rounded-[2.5rem] border-4 border-gray-700 shadow-2xl overflow-hidden">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-carbon rounded-full z-20" />
        <div className="absolute inset-0 bg-[#ECE5DD] flex flex-col overflow-hidden">
          {/* WA Header */}
          <div className="bg-[#128C7E] pt-6 pb-2 px-3 flex items-center gap-2">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-[10px]">🤖</div>
            <div>
              <p className="text-white text-[8px] font-bold">miservicio Bot</p>
              <p className="text-green-200 text-[6px]">en línea · powered by AI</p>
            </div>
          </div>
          {/* Messages */}
          <div className="flex-1 px-2 py-2 space-y-2 overflow-hidden">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`rounded-xl px-2.5 py-1.5 max-w-[85%] shadow-sm ${
                    m.from === "user"
                      ? "bg-[#DCF8C6] rounded-tr-none"
                      : "bg-white rounded-tl-none"
                  }`}
                >
                  {m.text.split("\n").map((line, j) => (
                    <p key={j} className="text-[7px] text-gray-800 leading-relaxed">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* WA input */}
          <div className="bg-[#F0F0F0] px-2 py-1.5 flex items-center gap-1">
            <div className="flex-1 bg-white rounded-full px-2 py-1">
              <p className="text-[6px] text-gray-400">Escribe un mensaje…</p>
            </div>
            <div className="w-5 h-5 bg-[#128C7E] rounded-full flex items-center justify-center">
              <span className="text-white text-[8px]">▶</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Bibliotheca carousel (kept for secondary projects)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [Autoplay()])
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const navItems = [
    { name: "Inicio",     href: "#inicio" },
    { name: "Sobre mí",   href: "#sobre-mi" },
    { name: "Proyectos",  href: "#proyectos" },
    { name: "Habilidades",href: "#habilidades" },
    { name: "Contacto",   href: "#contacto" },
  ]

  return (
    <div className="min-h-screen bg-white text-carbon selection:bg-brand-light selection:text-carbon">

      {/* ════════════════════════ NAVIGATION ════════════════════════ */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md py-3 shadow-sm border-b border-gray-100"
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center shadow-lg shadow-brand-light">
                <span className="text-white font-bold text-xl">J</span>
              </div>
              <h1 className="text-xl font-bold tracking-tight">Vergara<span className="text-brand">.dev</span></h1>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-bold text-gray-600 hover:text-brand transition-colors relative group"
                  whileHover={{ color: "#007bff" }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all group-hover:w-full rounded-full" />
                </motion.a>
              ))}
              <motion.a
                href="#contacto"
                className="bg-orange text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-orange-light"
                whileHover={{ scale: 1.04, backgroundColor: "#e5610a" }}
                whileTap={{ scale: 0.96 }}
              >
                Hablemos
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              className="md:hidden p-2 text-gray-600 hover:text-brand transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 overflow-hidden"
            >
              <div className="flex flex-col p-6 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lg font-bold text-gray-700 hover:text-brand transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="#contacto"
                  className="bg-orange text-white py-4 rounded-2xl text-center font-bold shadow-lg shadow-orange-light"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contratar
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ════════════════════════ HERO ════════════════════════ */}
      <section id="inicio" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
        {/* Background glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-brand-light rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-orange-light rounded-full blur-[120px]" />
        </div>

        <motion.div
          className="container mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-4xl mx-auto">
            {/* Avatar */}
            <motion.div variants={scaleIn} className="relative inline-block mb-10">
              <img
                src="/imagen_mia.jpg"
                alt="Foto de perfil de Juan Ignacio Vergara"
                className="w-32 h-32 md:w-44 md:h-44 rounded-full mx-auto object-cover border-4 border-white shadow-2xl relative z-10"
              />
              <motion.div
                className="absolute inset-0 bg-brand rounded-full blur-xl opacity-20"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-7xl font-extrabold mb-6 tracking-tight text-carbon leading-[1.1]"
            >
              Hola, soy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-orange">
                Juan Ignacio
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto px-4"
            >
              Emprendedor y Desarrollador Full Stack. Transformo ideas complejas en{" "}
              <span className="font-semibold text-carbon border-b-2 border-brand-light">
                productos digitales
              </span>{" "}
              escalables y de alto impacto.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center px-6"
            >
              <motion.a
                href="#proyectos"
                className="w-full sm:w-auto group relative bg-carbon text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-gray-200 overflow-hidden flex items-center justify-center"
                whileHover={{ scale: 1.03, backgroundColor: "#333" }}
                whileTap={{ scale: 0.97 }}
              >
                Explorar Proyectos
                <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#contacto"
                className="w-full sm:w-auto bg-white text-carbon border-2 border-gray-100 px-10 py-4 rounded-2xl font-bold text-lg flex items-center justify-center"
                whileHover={{ borderColor: "#cce5ff", backgroundColor: "#eff6ff" }}
                whileTap={{ scale: 0.97 }}
              >
                Hablemos
              </motion.a>
            </motion.div>

            {/* Socials */}
            <motion.div
              variants={staggerContainer}
              className="flex justify-center space-x-8 mt-16"
            >
              {[
                { icon: Github,   href: "https://github.com/JuanVergara-9",                  label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/juan-ignacio-vergara/",  label: "LinkedIn" },
                { icon: Mail,     href: "mailto:juanvergara920@gmail.com",                    label: "Email" },
              ].map((social) => (
                <motion.div key={social.label} variants={fadeUp}>
                  <Link
                    href={social.href}
                    className="group flex flex-col items-center text-gray-400"
                    aria-label={social.label}
                  >
                    <motion.div whileHover={{ scale: 1.2, color: "#007bff" }} transition={{ type: "spring", stiffness: 400 }}>
                      <social.icon className="w-7 h-7 mb-1" />
                    </motion.div>
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity hidden md:block text-brand">
                      {social.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════ SOBRE MÍ ════════════════════════ */}
      <section id="sobre-mi" className="py-24 px-6 bg-bone/50">
        <div className="container mx-auto max-w-6xl">

          {/* Section header */}
          <Reveal className="mb-4">
            <h2 className="text-3xl md:text-5xl font-bold text-carbon">Sobre mí</h2>
          </Reveal>
          <Reveal>
            <div className="w-16 h-1.5 bg-brand rounded-full mb-10" />
          </Reveal>

          {/* Bio text */}
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <Reveal delay={0.05}>
              <p className="text-lg text-gray-700 leading-relaxed">
                Soy un desarrollador de 22 años con mentalidad emprendedora. Construyo soluciones que no solo
                funcionan, sino que escalan. Fundé y dirijo{" "}
                <span className="font-bold text-brand">miservicio.ar</span>, lo que me dio una visión 360° que va
                del código al modelo de negocio.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-gray-700 leading-relaxed">
                Me especializo en el ecosistema de{" "}
                <span className="font-bold text-brand">JavaScript/TypeScript</span>, con experiencia en
                arquitecturas de microservicios. Perfeccionando mi inglés para participar del{" "}
                <span className="font-semibold text-carbon">START Fellowship en Suiza</span> y certificarme en{" "}
                <span className="font-semibold text-carbon">Business Analytics</span>.
              </p>
            </Reveal>
          </div>

          {/* Info cards row */}
          <Reveal className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
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
                <h4 className="font-bold text-carbon uppercase text-[9px] tracking-widest mb-1 opacity-40">{card.label}</h4>
                <p className="text-sm font-bold text-carbon">{card.value}</p>
                {card.sub && <p className="text-xs text-gray-400 mt-0.5">{card.sub}</p>}
              </motion.div>
            ))}
          </Reveal>

          {/* Skill Map */}
          <Reveal>
            <div className="mb-8">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                Stack Map Interactivo — tocá una habilidad para ver cómo se conecta con mis proyectos
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <SkillMap />
          </Reveal>

          {/* CV download */}
          <Reveal className="mt-10" delay={0.1}>
            <motion.a
              href="/CV_Juan_Vergara_1.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-white border-2 border-gray-100 text-carbon px-8 py-4 rounded-2xl font-bold shadow-sm group"
              whileHover={{ borderColor: "#cce5ff", backgroundColor: "#eff6ff", y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v6m0 0l3-3m-3 3l-3-3m0-9h6" />
              </svg>
              Descargar CV
            </motion.a>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════ PROYECTOS ════════════════════════ */}
      <section id="proyectos" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">

          <Reveal className="mb-4">
            <h2 className="text-3xl md:text-5xl font-bold text-carbon">Proyectos Destacados</h2>
          </Reveal>
          <Reveal>
            <div className="w-20 h-1.5 bg-brand rounded-full mb-16" />
          </Reveal>

          {/* Primary showcase — 2-col grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 items-stretch">

            {/* ── Card 1: miservicio.ar ── */}
            <Reveal delay={0.05} className="h-full">
              <motion.div
                className="group bg-white rounded-[2rem] border-2 border-gray-100 overflow-hidden h-full flex flex-col"
                whileHover={{ y: -6, borderColor: "#cce5ff", boxShadow: "0 24px 48px rgba(0,123,255,0.10)" }}
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
              >
                {/* Card header with image + phone mockup */}
                <div className="relative h-56 md:h-64 bg-gradient-to-br from-brand-subtle to-brand-light flex items-center justify-center gap-6 px-6 overflow-hidden">
                  <img
                    src="/miservicio.png"
                    alt="miservicio.ar dashboard"
                    className="absolute inset-0 w-full h-full object-cover object-top opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  />
                  <PhoneMockup />
                </div>

                <div className="p-8 flex flex-col flex-1">
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-brand-light text-brand-dark text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                      Validación Real
                    </span>
                    <span className="bg-orange-light text-orange-dark text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                      v3.0
                    </span>
                  </div>

                  {/* Title + role */}
                  <div className="mb-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">CEO & Fundador</p>
                    <h3 className="text-2xl font-bold text-carbon tracking-tight">miservicio.ar</h3>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    Plataforma de servicios de confianza. Lideré la estrategia completa: pitch deck,{" "}
                    <span className="font-semibold text-carbon">modelo de negocio y monetización</span>. Backend en
                    Node.js + PostgreSQL con arquitectura de microservicios.
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {[
                      { value: "+15k", label: "Usuarios" },
                      { value: "+5k",  label: "Transacciones" },
                      { value: "95%",  label: "Satisfacción" },
                    ].map((m) => (
                      <div key={m.label} className="bg-brand-subtle rounded-2xl p-3 text-center border border-brand-light">
                        <p className="text-lg font-extrabold text-brand">{m.value}</p>
                        <p className="text-[9px] font-bold uppercase tracking-wide text-gray-500 mt-0.5">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-xs text-gray-500 bg-gray-50 p-3 rounded-xl border border-gray-100">
                      <div className="w-2 h-2 bg-brand rounded-full mr-3 shrink-0" />
                      Participante de la aceleradora <span className="font-bold text-carbon ml-1">mc²</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500 bg-gray-50 p-3 rounded-xl border border-gray-100">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 shrink-0" />
                      Finalista <span className="font-bold text-carbon ml-1">eCommerce Day Startup</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500 bg-orange-subtle p-3 rounded-xl border border-orange-light">
                      <div className="w-2 h-2 bg-orange rounded-full mr-3 shrink-0" />
                      Chatbot IA en WhatsApp: <span className="font-bold text-carbon ml-1">atención 24/7</span>
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Next.js", "Node.js", "PostgreSQL", "Tailwind", "WhatsApp API"].map((tech) => (
                      <span key={tech} className="bg-gray-50 text-gray-500 border border-gray-100 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                      <Link href="https://github.com/JuanVergara-9/miservicio-front-v2"
                        className="flex items-center justify-center w-full bg-carbon text-white px-6 py-3.5 rounded-xl font-bold text-sm">
                        <Github className="w-4 h-4 mr-2" /> Código
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                      <Link href="https://miservicio.ar/"
                        className="flex items-center justify-center w-full bg-orange text-white px-6 py-3.5 rounded-xl font-bold text-sm">
                        <ExternalLink className="w-4 h-4 mr-2" /> Visitar Sitio
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </Reveal>

            {/* ── Card 2: AI Chatbot WhatsApp ── */}
            <Reveal delay={0.1} className="h-full">
              <motion.div
                className="group bg-white rounded-[2rem] border-2 border-gray-100 overflow-hidden h-full flex flex-col"
                whileHover={{ y: -6, borderColor: "#e9d5ff", boxShadow: "0 24px 48px rgba(139,92,246,0.10)" }}
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
              >
                {/* Card header */}
                <div className="relative h-56 md:h-64 bg-gradient-to-br from-violet-50 to-violet-100 flex items-center justify-center gap-6 px-6 overflow-hidden">
                  <WhatsAppMockup />
                </div>

                <div className="p-8 flex flex-col flex-1">
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-violet-100 text-violet-700 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                      <Zap className="w-2.5 h-2.5" /> AI POWERED (v1.0)
                    </span>
                    <span className="bg-orange-light text-orange-dark text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                      100% WhatsApp
                    </span>
                  </div>

                  {/* Title */}
                  <div className="mb-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">JV | AI · Servicios</p>
                    <h3 className="text-2xl font-bold text-carbon tracking-tight">Chatbot AI WhatsApp</h3>
                  </div>

                  <p className="text-gray-600 mb-5 leading-relaxed text-sm">
                    Integración de{" "}
                    <span className="font-semibold text-violet-700">Gemini 2.5 Flash</span> con microservicios
                    Node.js para respuestas asíncronas y contextuales. Opera{" "}
                    <span className="font-semibold text-carbon">100% vía WhatsApp</span>.
                  </p>

                  {/* Metrics — mirrors miservicio row */}
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {[
                      { value: "−70%", label: "Respuesta" },
                      { value: "24/7", label: "Disponible" },
                      { value: "100%", label: "WhatsApp" },
                    ].map((m) => (
                      <div key={m.label} className="bg-violet-50 rounded-2xl p-3 text-center border border-violet-200">
                        <p className="text-lg font-extrabold text-violet-600">{m.value}</p>
                        <p className="text-[9px] font-bold uppercase tracking-wide text-gray-500 mt-0.5">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-5">
                    {[
                      { icon: Bot,        text: "Agendamiento automático de citas",      color: "text-violet-600" },
                      { icon: Zap,        text: "Respuestas a FAQs en tiempo real",      color: "text-orange" },
                      { icon: Smartphone, text: "Gestión de leads 100% vía WhatsApp",    color: "text-brand" },
                      { icon: Code,       text: "Webhook Node.js + procesamiento async", color: "text-teal-600" },
                    ].map((f) => (
                      <div key={f.text} className="flex items-center gap-2.5 text-xs text-gray-600">
                        <f.icon className={`w-3.5 h-3.5 shrink-0 ${f.color}`} />
                        {f.text}
                      </div>
                    ))}
                  </div>

                  {/* Architecture note */}
                  <div className="bg-violet-50 border border-violet-200 rounded-2xl p-4 mb-6">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-violet-500 mb-1.5">Arquitectura</p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Gemini 2.5 Flash integrado con microservicios Node.js en Railway. WhatsApp Business API para comunicación bidireccional en tiempo real.
                    </p>
                    <div className="mt-2.5 inline-flex items-center gap-1.5 bg-white border border-violet-200 px-2.5 py-1 rounded-xl">
                      <span className="text-orange font-bold text-xs">−70%</span>
                      <span className="text-gray-400 text-[9px]">tiempo de respuesta inicial</span>
                    </div>
                  </div>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Node.js", "WhatsApp API", "Gemini 2.5 Flash", "Railway"].map((tech) => (
                      <span key={tech} className="bg-violet-50 text-violet-600 border border-violet-200 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 mt-auto">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                      <Link href="https://github.com/JuanVergara-9/miservicio-front-v2"
                        className="flex items-center justify-center w-full bg-carbon text-white px-6 py-3.5 rounded-xl font-bold text-sm">
                        <Github className="w-4 h-4 mr-2" /> Código
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                      <Link href="https://miservicio.ar/"
                        className="flex items-center justify-center w-full bg-violet-600 text-white px-6 py-3.5 rounded-xl font-bold text-sm">
                        <ExternalLink className="w-4 h-4 mr-2" /> Ver Demo
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          </div>

          {/* ── Secondary: Bibliotheca ── */}
          <Reveal delay={0.05}>
            <div className="border-t border-gray-100 pt-10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-6">También construí</p>
              <motion.div
                className="group bg-white rounded-[2rem] border-2 border-gray-100 overflow-hidden md:flex"
                whileHover={{ borderColor: "#cce5ff", boxShadow: "0 12px 32px rgba(0,123,255,0.07)" }}
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
              >
                <div className="md:w-72 h-52 md:h-auto bg-gray-50 overflow-hidden shrink-0">
                  <img
                    src="/biblioteca.png"
                    alt="Bibliotheca"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-carbon tracking-tight">Bibliotheca</h3>
                      <span className="bg-brand-light text-brand-dark text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">Proyecto Personal</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Herramienta nacida de una pasión genuina por la literatura — desde Cortázar hasta Benedetti. Va más allá del consumo de la API de Google Books: es un explorador literario con{" "}
                      <span className="font-semibold text-carbon">estética renacentista moderna</span> que demuestra cómo una pasión personal se traduce en código de alto nivel.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["React", "TypeScript", "Google Books API", "Framer Motion"].map((tech) => (
                        <div key={tech} className="flex items-center bg-gray-50 px-3 py-1.5 rounded-xl border border-gray-200">
                          <div className="w-1.5 h-1.5 bg-brand rounded-full mr-2" />
                          <span className="text-xs font-bold text-gray-700">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                      <Link href="https://github.com/JuanVergara-9/bookfinder"
                        className="flex items-center bg-carbon text-white px-6 py-3 rounded-xl font-bold text-sm">
                        <Github className="w-4 h-4 mr-2" /> Ver Repositorio
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════ HABILIDADES ════════════════════════ */}
      <section id="habilidades" className="py-24 px-6 bg-bone/50 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-carbon mb-4">Habilidades & Tecnologías</h2>
            <div className="w-20 h-1.5 bg-brand mx-auto rounded-full" />
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Frontend",       icon: Globe,      skills: ["TypeScript", "React", "Next.js", "Tailwind", "Vite", "Framer Motion"],    bg: "bg-brand-subtle",  iconColor: "text-brand" },
              { title: "Backend",        icon: Code,       skills: ["Node.js", "Python", "Express", "REST APIs", "Microservicios", "JWT"],      bg: "bg-blue-50",       iconColor: "text-blue-600" },
              { title: "Base de Datos",  icon: Database,   skills: ["PostgreSQL", "Supabase", "MongoDB", "Redis", "Sequelize", "MySQL"],        bg: "bg-teal-50",       iconColor: "text-teal-600" },
              { title: "Herramientas",   icon: Smartphone, skills: ["Git", "Docker", "Postman", "Vercel", "Figma", "Railway"],                  bg: "bg-indigo-50",     iconColor: "text-indigo-600" },
            ].map((cat, i) => (
              <Reveal key={cat.title} delay={i * 0.07}>
                <motion.div
                  className="group bg-white p-8 rounded-[2rem] border-2 border-gray-100 h-full"
                  whileHover={{ y: -6, borderColor: "#cce5ff", boxShadow: "0 16px 32px rgba(0,123,255,0.08)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <div className="text-center mb-6">
                    <motion.div
                      className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${cat.bg} flex items-center justify-center`}
                      whileHover={{ scale: 1.1, rotate: 3 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <cat.icon className={`w-8 h-8 ${cat.iconColor}`} />
                    </motion.div>
                    <h3 className="text-xl font-bold text-carbon">{cat.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {cat.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        className="bg-gray-50 text-gray-600 border border-gray-100 px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider cursor-default"
                        whileHover={{ backgroundColor: "#eff6ff", color: "#007bff", borderColor: "#cce5ff" }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════ CONTACTO ════════════════════════ */}
      <section id="contacto" className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Reveal>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-carbon">{"¡Hablemos!"}</h2>
                <div className="w-16 h-1.5 bg-brand rounded-full mb-8" />
                <p className="text-lg text-gray-600 leading-relaxed">
                  {"Siempre interesado en nuevas oportunidades y proyectos emocionantes. ¡No dudes en contactarme!"}
                </p>
              </Reveal>

              <div className="space-y-4">
                {[
                  { icon: Mail,     label: "Email",    value: "juanvergara920@gmail.com",         href: "mailto:juanvergara920@gmail.com" },
                  { icon: Github,   label: "GitHub",   value: "github.com/JuanVergara-9",         href: "https://github.com/JuanVergara-9" },
                  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/juan-ignacio-vergara", href: "https://www.linkedin.com/in/juan-ignacio-vergara" },
                ].map((item) => (
                  <Reveal key={item.label}>
                    <motion.a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center p-4 rounded-2xl border border-gray-100 group"
                      whileHover={{ borderColor: "#cce5ff", backgroundColor: "#eff6ff", x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 group-hover:text-brand group-hover:bg-white transition-all shadow-sm shrink-0">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div className="ml-4 overflow-hidden">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{item.label}</p>
                        <p className="text-sm md:text-base font-bold text-carbon truncate">{item.value}</p>
                      </div>
                    </motion.a>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal delay={0.1}>
              <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 relative">
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-brand-subtle rounded-full -z-10" />
                <h3 className="text-2xl font-bold mb-8 text-carbon">Envíame un mensaje</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      { id: "nombre", label: "Nombre", type: "text",  placeholder: "Tu nombre" },
                      { id: "email",  label: "Email",  type: "email", placeholder: "tu@email.com" },
                    ].map((field) => (
                      <div key={field.id} className="space-y-2">
                        <label htmlFor={field.id} className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
                          {field.label}
                        </label>
                        <input
                          id={field.id}
                          type={field.type}
                          placeholder={field.placeholder}
                          className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand focus:bg-white transition-all"
                          required
                        />
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="asunto" className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Asunto</label>
                    <input
                      id="asunto"
                      type="text"
                      placeholder="¿En qué puedo ayudarte?"
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand focus:bg-white transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="mensaje" className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Mensaje</label>
                    <textarea
                      id="mensaje"
                      placeholder="Escribe tu mensaje aquí..."
                      rows={4}
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand focus:bg-white transition-all resize-none"
                      required
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full bg-orange text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-orange-light flex items-center justify-center group"
                    whileHover={{ scale: 1.02, backgroundColor: "#e5610a" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Enviar Mensaje
                    <Mail className="ml-3 w-6 h-6 group-hover:scale-110 group-hover:rotate-6 transition-transform" />
                  </motion.button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════ FOOTER ════════════════════════ */}
      <footer className="bg-bone py-12 px-6 border-t border-gray-200">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center shadow-lg shadow-brand-subtle">
              <span className="text-white font-bold text-sm">J</span>
            </div>
            <h1 className="text-lg font-bold tracking-tight">Vergara<span className="text-brand">.dev</span></h1>
          </div>
          <p className="text-gray-400 text-sm font-medium">© 2026 Juan Ignacio Vergara. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
