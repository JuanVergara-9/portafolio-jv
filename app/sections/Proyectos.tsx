"use client"

import Link from "next/link"
import { Github, ExternalLink, Zap, Bot, Code, Smartphone } from "lucide-react"
import { motion } from "framer-motion"
import { PhoneMockup, WhatsAppMockup } from "../components/Mockups"

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

export default function Proyectos() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 md:py-12">

      <R>
        <h2 className="text-3xl md:text-4xl font-bold text-carbon dark:text-dm-text mb-2">Proyectos Destacados</h2>
        <div className="w-14 h-1.5 bg-brand rounded-full mb-10" />
      </R>

      {/* ── Primary Cards ── */}
      <div className="grid md:grid-cols-2 gap-6 mb-10 items-stretch">

        {/* Card 1: miservicio */}
        <R delay={0.05} className="h-full">
          <motion.div
            className="group bg-white dark:bg-dm-card rounded-[2rem] border-2 border-gray-100 dark:border-dm-border overflow-hidden h-full flex flex-col relative transition-colors duration-300"
            whileHover={{ y: -5, borderColor: "#ffe0cc", boxShadow: "0 20px 48px rgba(255,117,31,0.14)" }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
          >
            <div className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 bg-[#ff751f] rounded-full blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity duration-500" />

            <div className="relative h-52 bg-gradient-to-br from-orange-50 to-blue-50 dark:from-orange-900/10 dark:to-blue-900/10 flex items-center justify-center overflow-hidden">
              <img src="/miservicio.png" alt="miservicio.ar" className="absolute inset-0 w-full h-full object-cover object-top opacity-15 group-hover:opacity-25 transition-opacity duration-500" />
              <PhoneMockup />
            </div>

            <div className="p-7 flex flex-col flex-1">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 bg-[#ff751f] text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md shadow-orange-200">
                  <Zap className="w-2.5 h-2.5" /> AI-Powered
                </span>
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  Validación Real · v3.0
                </span>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-dm-muted-text">CEO & Fundador</p>
              <h3 className="text-xl font-bold text-carbon dark:text-dm-text tracking-tight mb-2">miservicio.ar</h3>
              <p className="text-gray-600 dark:text-dm-muted-text mb-5 leading-relaxed text-sm">
                Plataforma de servicios de confianza. Pitch deck,{" "}
                <span className="font-semibold text-carbon dark:text-dm-text">modelo de negocio y monetización</span>.
                {" "}Backend Node.js + PostgreSQL con microservicios.
              </p>

              <div className="grid grid-cols-3 gap-2 mb-5">
                {[{ value: "+15k", label: "Usuarios" }, { value: "+5k", label: "Transacciones" }, { value: "95%", label: "Satisfacción" }].map((m) => (
                  <div key={m.label} className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-3 text-center border border-blue-100 dark:border-blue-900/40">
                    <p className="text-base font-extrabold text-blue-600 dark:text-blue-400">{m.value}</p>
                    <p className="text-[9px] font-bold uppercase tracking-wide text-gray-500 dark:text-dm-muted-text mt-0.5">{m.label}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-2 mb-5">
                {[
                  { dot: "bg-brand",    text: <>Participante de la aceleradora <strong>mc²</strong></>,           subtle: false },
                  { dot: "bg-blue-500", text: <>Finalista <strong>eCommerce Day Startup</strong></>,              subtle: false },
                  { dot: "bg-orange",   text: <>Chatbot IA en WhatsApp: <strong>atención 24/7</strong></>,        subtle: true  },
                ].map((a, i) => (
                  <div key={i} className={`flex items-center text-xs text-gray-500 dark:text-dm-muted-text p-2.5 rounded-xl border ${
                    a.subtle
                      ? "bg-orange-50 dark:bg-orange/5 border-orange-100 dark:border-orange/10"
                      : "bg-gray-50 dark:bg-dm-muted border-gray-100 dark:border-dm-border"
                  }`}>
                    <div className={`w-2 h-2 ${a.dot} rounded-full mr-3 shrink-0`} />
                    {a.text}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                {["Next.js", "Node.js", "PostgreSQL", "Tailwind", "WhatsApp API"].map((t) => (
                  <span key={t} className="bg-gray-50 dark:bg-dm-muted text-gray-500 dark:text-dm-muted-text border border-gray-100 dark:border-dm-border px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                  <Link href="https://github.com/JuanVergara-9/miservicio-front-v2"
                    className="flex items-center justify-center w-full bg-[#212121] dark:bg-dm-muted dark:border dark:border-dm-border text-white px-5 py-3 rounded-xl font-bold text-sm">
                    <Github className="w-4 h-4 mr-2" /> Código
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02, backgroundColor: "#e5610a" }} whileTap={{ scale: 0.97 }} className="flex-1">
                  <Link href="https://miservicio.ar/"
                    className="flex items-center justify-center w-full bg-[#ff751f] text-white px-5 py-3 rounded-xl font-bold text-sm shadow-lg shadow-orange-200 group">
                    <ExternalLink className="w-4 h-4 mr-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" /> Ver Proyecto
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </R>

        {/* Card 2: AI Chatbot */}
        <R delay={0.1} className="h-full">
          <motion.div
            className="group bg-white dark:bg-dm-card rounded-[2rem] border-2 border-gray-100 dark:border-dm-border overflow-hidden h-full flex flex-col transition-colors duration-300"
            whileHover={{ y: -5, borderColor: "#e9d5ff", boxShadow: "0 20px 40px rgba(139,92,246,0.10)" }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
          >
            <div className="relative h-52 bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-900/10 dark:to-violet-900/20 flex items-center justify-center overflow-hidden">
              <WhatsAppMockup />
            </div>

            <div className="p-7 flex flex-col flex-1">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                  <Zap className="w-2.5 h-2.5" /> AI POWERED (v1.0)
                </span>
                <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  100% WhatsApp
                </span>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-dm-muted-text">JV | AI · Servicios</p>
              <h3 className="text-xl font-bold text-carbon dark:text-dm-text tracking-tight mb-2">Chatbot AI WhatsApp</h3>
              <p className="text-gray-600 dark:text-dm-muted-text mb-5 leading-relaxed text-sm">
                <span className="font-semibold text-violet-700 dark:text-violet-400">Gemini 2.5 Flash</span> con microservicios Node.js para respuestas asíncronas. Opera{" "}
                <span className="font-semibold text-carbon dark:text-dm-text">100% vía WhatsApp</span>.
              </p>

              <div className="grid grid-cols-3 gap-2 mb-5">
                {[{ value: "−70%", label: "Respuesta" }, { value: "24/7", label: "Disponible" }, { value: "100%", label: "WhatsApp" }].map((m) => (
                  <div key={m.label} className="bg-violet-50 dark:bg-violet-900/20 rounded-2xl p-3 text-center border border-violet-200 dark:border-violet-900/40">
                    <p className="text-base font-extrabold text-violet-600 dark:text-violet-400">{m.value}</p>
                    <p className="text-[9px] font-bold uppercase tracking-wide text-gray-500 dark:text-dm-muted-text mt-0.5">{m.label}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-2 mb-5">
                {[
                  { icon: Bot,        color: "text-violet-600 dark:text-violet-400", text: "Agendamiento automático de citas" },
                  { icon: Zap,        color: "text-violet-500 dark:text-violet-400", text: "Respuestas a FAQs en tiempo real" },
                  { icon: Smartphone, color: "text-brand",                           text: "Gestión de leads 100% vía WhatsApp" },
                  { icon: Code,       color: "text-teal-600 dark:text-teal-400",     text: "Webhook Node.js + procesamiento async" },
                ].map((f) => (
                  <div key={f.text} className="flex items-center gap-2.5 text-xs text-gray-600 dark:text-dm-muted-text">
                    <f.icon className={`w-3.5 h-3.5 shrink-0 ${f.color}`} />
                    {f.text}
                  </div>
                ))}
              </div>

              <div className="bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-900/40 rounded-2xl p-4 mb-5">
                <p className="text-[9px] font-bold uppercase tracking-widest text-violet-500 dark:text-violet-400 mb-1.5">Arquitectura</p>
                <p className="text-xs text-gray-600 dark:text-dm-muted-text leading-relaxed">
                  Gemini 2.5 Flash + microservicios Node.js en Railway. WhatsApp Business API para comunicación bidireccional.
                </p>
                <div className="mt-2 inline-flex items-center gap-1.5 bg-white dark:bg-dm-muted border border-violet-200 dark:border-dm-border px-2.5 py-1 rounded-xl">
                  <span className="text-orange font-bold text-xs">−70%</span>
                  <span className="text-gray-400 dark:text-dm-muted-text text-[9px]">tiempo de respuesta inicial</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                {["Node.js", "WhatsApp API", "Gemini 2.5 Flash", "Railway"].map((t) => (
                  <span key={t} className="bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 border border-violet-200 dark:border-violet-900/40 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                  <Link href="https://github.com/JuanVergara-9/miservicio-front-v2"
                    className="flex items-center justify-center w-full bg-[#212121] dark:bg-dm-muted dark:border dark:border-dm-border text-white px-5 py-3 rounded-xl font-bold text-sm">
                    <Github className="w-4 h-4 mr-2" /> Código
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                  <Link href="https://miservicio.ar/"
                    className="flex items-center justify-center w-full bg-violet-600 text-white px-5 py-3 rounded-xl font-bold text-sm">
                    <ExternalLink className="w-4 h-4 mr-2" /> Ver Demo
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </R>
      </div>

      {/* ── Bibliotheca ── */}
      <R delay={0.15}>
        <div className="border-t border-gray-100 dark:border-dm-border pt-8">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-dm-muted-text mb-5">También construí</p>
          <motion.div
            className="group bg-white dark:bg-dm-card rounded-[2rem] border-2 border-gray-100 dark:border-dm-border overflow-hidden md:flex transition-colors duration-300"
            whileHover={{ borderColor: "#cce5ff", boxShadow: "0 10px 28px rgba(0,123,255,0.07)" }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
          >
            <div className="md:w-64 h-44 md:h-auto bg-gray-50 dark:bg-dm-muted overflow-hidden shrink-0">
              <img src="/biblioteca.png" alt="Bibliotheca" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold text-carbon dark:text-dm-text">Bibliotheca</h3>
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Proyecto Personal
                  </span>
                </div>
                <p className="text-gray-600 dark:text-dm-muted-text text-sm leading-relaxed mb-4">
                  Nacido de una pasión por la literatura — Cortázar a Benedetti. Explorador literario con{" "}
                  <span className="font-semibold text-carbon dark:text-dm-text">estética renacentista moderna</span>{" "}
                  que demuestra cómo una pasión personal se convierte en código de alto nivel.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React", "TypeScript", "Google Books API", "Framer Motion"].map((t) => (
                    <div key={t} className="flex items-center bg-gray-50 dark:bg-dm-muted px-3 py-1.5 rounded-xl border border-gray-200 dark:border-dm-border">
                      <div className="w-1.5 h-1.5 bg-brand rounded-full mr-2" />
                      <span className="text-xs font-bold text-gray-700 dark:text-dm-muted-text">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-5">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                  <Link href="https://github.com/JuanVergara-9/bookfinder"
                    className="flex items-center bg-[#212121] dark:bg-dm-muted dark:border dark:border-dm-border text-white px-6 py-3 rounded-xl font-bold text-sm">
                    <Github className="w-4 h-4 mr-2" /> Ver Repositorio
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </R>
    </div>
  )
}
