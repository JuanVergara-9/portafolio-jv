"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function Contacto() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 md:py-12">

      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h2 className="text-3xl md:text-4xl font-bold text-carbon mb-2">{"¡Hablemos!"}</h2>
        <div className="w-14 h-1.5 bg-brand rounded-full mb-3" />
        <p className="text-gray-600 text-base mb-10 leading-relaxed">
          {"Siempre interesado en nuevas oportunidades y proyectos emocionantes. ¡No dudes en escribirme!"}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 items-start">

        {/* Contact links */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {[
            { icon: Mail,     label: "Email",    value: "juanvergara920@gmail.com",            href: "mailto:juanvergara920@gmail.com" },
            { icon: Github,   label: "GitHub",   value: "github.com/JuanVergara-9",            href: "https://github.com/JuanVergara-9" },
            { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/juan-ignacio-vergara", href: "https://www.linkedin.com/in/juan-ignacio-vergara" },
          ].map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center p-4 rounded-2xl border border-gray-100 group"
              whileHover={{ borderColor: "#cce5ff", backgroundColor: "#eff6ff", x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="w-11 h-11 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 group-hover:text-brand group-hover:bg-white transition-all shadow-sm shrink-0">
                <item.icon className="w-5 h-5" />
              </div>
              <div className="ml-4 overflow-hidden">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{item.label}</p>
                <p className="text-sm font-bold text-carbon truncate">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact form */}
        <motion.div
          className="bg-white p-7 rounded-[2rem] shadow-xl border border-gray-100 relative"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="absolute -top-5 -right-5 w-16 h-16 bg-blue-50 rounded-full -z-10" />
          <h3 className="text-xl font-bold mb-6 text-carbon">Envíame un mensaje</h3>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { id: "nombre", label: "Nombre", type: "text",  placeholder: "Tu nombre" },
                { id: "email",  label: "Email",  type: "email", placeholder: "tu@email.com" },
              ].map((f) => (
                <div key={f.id} className="space-y-1.5">
                  <label htmlFor={f.id} className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">{f.label}</label>
                  <input id={f.id} type={f.type} placeholder={f.placeholder} required
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand focus:bg-white transition-all text-sm" />
                </div>
              ))}
            </div>
            <div className="space-y-1.5">
              <label htmlFor="asunto" className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Asunto</label>
              <input id="asunto" type="text" placeholder="¿En qué puedo ayudarte?" required
                className="w-full px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand focus:bg-white transition-all text-sm" />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="mensaje" className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Mensaje</label>
              <textarea id="mensaje" placeholder="Escribe tu mensaje aquí..." rows={4} required
                className="w-full px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand focus:bg-white transition-all resize-none text-sm" />
            </div>
            <motion.button
              type="submit"
              className="w-full bg-orange text-white py-4 rounded-2xl font-bold text-base shadow-lg shadow-orange-light flex items-center justify-center group"
              whileHover={{ scale: 1.02, backgroundColor: "#e5610a" }}
              whileTap={{ scale: 0.98 }}
            >
              Enviar Mensaje
              <Mail className="ml-3 w-5 h-5 group-hover:scale-110 group-hover:rotate-6 transition-transform" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
