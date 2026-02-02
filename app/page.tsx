"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Smartphone, Menu, X, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect, useCallback } from "react"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Embla for Projects
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay()])
  
  // Embla for Skills (mobile only)
  const [emblaSkillsRef] = useEmblaCarousel({ loop: true, align: 'center' }, [Autoplay()])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Sobre mí", href: "#sobre-mi" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Habilidades", href: "#habilidades" },
    { name: "Contacto", href: "#contacto" },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md py-3 shadow-sm border-b border-gray-100" : "bg-transparent py-5"}`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-200">
                <span className="text-white font-bold text-xl">J</span>
              </div>
              <h1 className="text-xl font-bold tracking-tight">Vergara<span className="text-emerald-600">.dev</span></h1>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a 
                  key={item.name}
                  href={item.href} 
                  className="text-sm font-bold text-gray-600 hover:text-emerald-600 transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full"></span>
                </a>
              ))}
              <a 
                href="#contacto" 
                className="bg-emerald-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100 active:scale-95"
              >
                Hablemos
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              title={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              className="md:hidden p-2 text-gray-600 hover:text-emerald-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="flex flex-col p-6 space-y-4">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                className="text-lg font-bold text-gray-700 hover:text-emerald-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#contacto" 
              className="bg-emerald-600 text-white py-4 rounded-2xl text-center font-bold shadow-lg shadow-emerald-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Contratar
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20">
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-emerald-300 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-300 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="relative inline-block mb-10">
              <img
                src="/imagen_mia.jpg"
                alt="Foto de perfil"
                className="w-32 h-32 md:w-44 md:h-44 rounded-full mx-auto object-cover border-4 border-white shadow-2xl relative z-10"
              />
              <div className="absolute inset-0 bg-emerald-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-extrabold mb-6 tracking-tight text-gray-900 leading-[1.1]">
              Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Juan Ignacio</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto px-4">
              Emprendedor y Desarrollador Full Stack. Transformo ideas complejas en <span className="font-semibold text-gray-900 border-b-2 border-emerald-200">productos digitales</span> escalables y de alto impacto.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-6">
              <a
                href="#proyectos"
                className="w-full sm:w-auto group relative bg-gray-900 text-white px-10 py-4 rounded-2xl hover:bg-gray-800 transition-all font-bold text-lg shadow-xl shadow-gray-200 overflow-hidden active:scale-95"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Explorar Proyectos
                  <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </a>
              <a
                href="#contacto"
                className="w-full sm:w-auto bg-white text-gray-900 border-2 border-gray-100 px-10 py-4 rounded-2xl hover:border-emerald-200 hover:bg-emerald-50/30 transition-all font-bold text-lg active:scale-95"
              >
                Hablemos
              </a>
            </div>

            <div className="flex justify-center space-x-8 mt-16">
              {[
                { icon: Github, href: "https://github.com/JuanVergara-9", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/juan-ignacio-vergara/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:juanvergara920@gmail.com", label: "Email" }
              ].map((social) => (
                <Link 
                  key={social.label}
                  href={social.href} 
                  className="group flex flex-col items-center text-gray-400 hover:text-emerald-600 transition-all"
                >
                  <social.icon className="w-7 h-7 mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">{social.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-24 px-6 bg-gray-50/50">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="space-y-6 order-2 md:order-1">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Sobre mí</h2>
                <div className="w-16 h-1.5 bg-emerald-600 rounded-full"></div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Soy un desarrollador de 22 años con una fuerte mentalidad emprendedora. Mi enfoque principal es construir soluciones tecnológicas que no solo funcionen, sino que escalen y resuelvan problemas reales.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Me especializo en el ecosistema de <span className="font-bold text-emerald-600">JavaScript/TypeScript</span>, con experiencia en arquitecturas de microservicios y aplicaciones de alto rendimiento.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                    <h4 className="font-bold text-gray-900 uppercase text-[10px] tracking-widest mb-1 opacity-50">Educación</h4>
                    <p className="text-sm font-semibold text-gray-700">Ingeniería en Sistemas</p>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                    <h4 className="font-bold text-gray-900 uppercase text-[10px] tracking-widest mb-1 opacity-50">Ubicación</h4>
                    <p className="text-sm font-semibold text-gray-700">Mendoza, Argentina</p>
                  </div>
                </div>

                <div className="pt-6">
                  <a
                    href="/CV_Juan_Vergara_1.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white border-2 border-gray-100 text-gray-900 px-8 py-4 rounded-2xl hover:border-emerald-200 hover:bg-emerald-50/30 transition-all font-bold shadow-sm group active:scale-95"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-600 group-hover:-translate-y-1 transition-transform" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v6m0 0l3-3m-3 3l-3-3m0-9h6" />
                    </svg>
                    Descargar CV
                  </a>
                </div>
              </div>

              <div className="relative order-1 md:order-2">
                <div className="absolute -inset-4 bg-emerald-100/50 rounded-[2rem] -rotate-2"></div>
                <div className="relative bg-white p-6 md:p-8 rounded-[2rem] shadow-xl border border-gray-100 space-y-6">
                  {[
                    { icon: Code, title: "Desarrollo Full Stack", desc: "Node.js, React, Next.js", color: "emerald" },
                    { icon: Database, title: "Arquitectura de Datos", desc: "PostgreSQL, MongoDB, Redis", color: "blue" },
                    { icon: Smartphone, title: "Mentalidad de Producto", desc: "UX/UI, Estrategia, Escalabilidad", color: "purple" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-${item.color}-50 rounded-xl flex items-center justify-center text-${item.color}-600 shrink-0`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm md:text-base">{item.title}</h4>
                        <p className="text-xs md:text-sm text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
              <div className="text-left">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Proyectos Destacados</h2>
                <div className="w-20 h-1.5 bg-emerald-600 rounded-full"></div>
              </div>
              <div className="flex gap-2">
                <button onClick={scrollPrev} aria-label="Proyecto anterior" title="Proyecto anterior" className="p-3 rounded-full border border-gray-200 hover:bg-emerald-50 hover:border-emerald-200 transition-all active:scale-90">
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>
                <button onClick={scrollNext} aria-label="Proyecto siguiente" title="Proyecto siguiente" className="p-3 rounded-full border border-gray-200 hover:bg-emerald-50 hover:border-emerald-200 transition-all active:scale-90">
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>
              </div>
            </div>
            
            <div className="overflow-hidden px-4" ref={emblaRef}>
              <div className="flex gap-6 -ml-4">
                {/* Proyecto 1 */}
                <div className="flex-[0_0_100%] md:flex-[0_0_calc(50%-0.75rem)] lg:flex-[0_0_calc(45%-0.75rem)] min-w-0 pl-4 shrink-0">
                  <div className="group h-full bg-white rounded-[2rem] overflow-hidden border-2 border-gray-100 hover:border-emerald-100 transition-all duration-500">
                    <div className="relative overflow-hidden h-56 md:h-64 bg-gray-50">
                      <img
                        src="/miservicio.png"
                        alt="miservicio.ar"
                        className="w-full h-full object-contain object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                        <p className="text-white text-sm font-medium">Plataforma de Servicios de Confianza</p>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 tracking-tight">miservicio.ar</h3>
                        <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">Validación Real</span>
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                        Plataforma creada en San Rafael, Mendoza, que conecta personas con proveedores confiables. Actualmente en <span className="text-emerald-700 font-semibold">etapa de validación con usuarios reales</span>.
                      </p>
                      
                      <div className="space-y-3 mb-8">
                        <div className="flex items-center text-xs md:text-sm text-gray-500 bg-gray-50 p-3 rounded-xl border border-gray-100">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 shrink-0"></div>
                          Participante de la aceleradora <span className="font-bold text-gray-700 ml-1">mc^2</span>
                        </div>
                        <div className="flex items-center text-xs md:text-sm text-gray-500 bg-gray-50 p-3 rounded-xl border border-gray-100">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 shrink-0"></div>
                          Finalista <span className="font-bold text-gray-700 ml-1">eCommerce Day Startup</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {["Next.js", "Node.js", "PostgreSQL", "Tailwind"].map((tech) => (
                          <span key={tech} className="bg-gray-50 text-gray-500 border border-gray-100 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                          href="https://github.com/JuanVergara-9/miservicio-front-v2"
                          className="flex-1 flex items-center justify-center bg-gray-900 text-white px-6 py-3.5 rounded-xl hover:bg-gray-800 transition-all font-bold text-sm active:scale-95"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Código
                        </Link>
                        <Link
                          href="https://miservicio.ar/"
                          className="flex-1 flex items-center justify-center bg-emerald-600 text-white px-6 py-3.5 rounded-xl hover:bg-emerald-700 transition-all font-bold text-sm active:scale-95"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Visitar Sitio
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Proyecto 2 */}
                <div className="flex-[0_0_100%] md:flex-[0_0_calc(50%-0.75rem)] lg:flex-[0_0_calc(45%-0.75rem)] min-w-0 pl-4 shrink-0">
                  <div className="group h-full bg-white rounded-[2rem] overflow-hidden border-2 border-gray-100 hover:border-emerald-100 transition-all duration-500">
                    <div className="relative overflow-hidden h-56 md:h-64 bg-gray-50">
                      <img
                        src="/biblioteca.png"
                        alt="Bibliotheca"
                        className="w-full h-full object-contain object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                        <p className="text-white text-sm font-medium">Buscador Literario Inteligente</p>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Bibliotheca</h3>
                        <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">Proyecto Personal</span>
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                        Explorador de literatura universal que utiliza la API de Google Books. Ofrece una experiencia de usuario inmersiva con una estética renacentista moderna.
                      </p>
                      
                      <div className="bg-gray-50 p-6 rounded-[1.5rem] border border-gray-100 mb-8">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Stack Tecnológico</h4>
                        <div className="flex flex-wrap gap-3">
                          {["React", "TypeScript", "Google API", "Framer Motion"].map((tech) => (
                            <div key={tech} className="flex items-center bg-white px-3 py-2 rounded-xl border border-gray-200">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                              <span className="text-xs font-bold text-gray-700">{tech}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Link
                          href="https://github.com/JuanVergara-9/bookfinder"
                          className="w-full flex items-center justify-center bg-gray-900 text-white px-6 py-4 rounded-xl hover:bg-gray-800 transition-all font-bold text-sm active:scale-95"
                        >
                          <Github className="w-5 h-5 mr-2" />
                          Ver Repositorio
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-24 px-6 bg-gray-50/50 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Habilidades & Tecnologías</h2>
              <div className="w-20 h-1.5 bg-emerald-600 mx-auto rounded-full"></div>
            </div>

            {/* Desktop Grid / Mobile Carousel */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Frontend", icon: Globe, skills: ["TypeScript", "React", "Next.js", "Tailwind", "Vite", "Framer Motion"], color: "emerald" },
                { title: "Backend", icon: Code, skills: ["Node.js", "Python", "Express", "REST APIs", "Microservicios", "JWT"], color: "blue" },
                { title: "Base de Datos", icon: Database, skills: ["PostgreSQL", "Supabase", "MongoDB", "Redis", "Sequelize", "MySQL"], color: "teal" },
                { title: "Herramientas", icon: Smartphone, skills: ["Git", "Docker", "Postman", "Vercel", "Figma", "Railway"], color: "indigo" }
              ].map((category) => (
                <div 
                  key={category.title}
                  className="group bg-white p-8 rounded-[2rem] border-2 border-gray-100 hover:border-emerald-100 transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-${category.color}-50 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                      <category.icon className={`w-8 h-8 text-${category.color}-600`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="bg-gray-50 text-gray-600 border border-gray-100 px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Carousel */}
            <div className="md:hidden overflow-hidden px-4" ref={emblaSkillsRef}>
              <div className="flex gap-4 -ml-4">
                {[
                  { title: "Frontend", icon: Globe, skills: ["TypeScript", "React", "Next.js", "Tailwind"], color: "emerald" },
                  { title: "Backend", icon: Code, skills: ["Node.js", "Python", "Express", "REST APIs"], color: "blue" },
                  { title: "Base de Datos", icon: Database, skills: ["PostgreSQL", "Supabase", "MongoDB", "Redis"], color: "teal" },
                  { title: "Herramientas", icon: Smartphone, skills: ["Git", "Docker", "Postman", "Vercel"], color: "indigo" }
                ].map((category) => (
                  <div key={category.title} className="flex-[0_0_100%] min-w-0 pl-4 shrink-0">
                    <div className="bg-white p-8 rounded-[2rem] border-2 border-gray-100 h-full">
                      <div className="text-center mb-6">
                        <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-${category.color}-50 flex items-center justify-center`}>
                          <category.icon className={`w-8 h-8 text-${category.color}-600`} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {category.skills.map((skill) => (
                          <span key={skill} className="bg-gray-50 text-gray-600 border border-gray-100 px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">{"¡Hablemos!"}</h2>
                  <div className="w-16 h-1.5 bg-emerald-600 rounded-full mb-8"></div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Estoy siempre interesado en nuevas oportunidades y proyectos emocionantes.
                    {"¡No dudes en contactarme!"}
                  </p>
                </div>
                
                <div className="space-y-6">
                  {[
                    { icon: Mail, label: "Email", value: "juanvergara920@gmail.com", href: "mailto:juanvergara920@gmail.com" },
                    { icon: Github, label: "GitHub", value: "github.com/JuanVergara-9", href: "https://github.com/JuanVergara-9" },
                    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/juan-ignacio-vergara", href: "https://www.linkedin.com/in/juan-ignacio-vergara" }
                  ].map((item, i) => (
                    <a 
                      key={i}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center p-4 rounded-2xl border border-gray-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all group"
                    >
                      <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 group-hover:text-emerald-600 group-hover:bg-white transition-all shadow-sm shrink-0">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div className="ml-4 overflow-hidden">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{item.label}</p>
                        <p className="text-sm md:text-base font-bold text-gray-700 truncate">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 relative">
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-emerald-50 rounded-full -z-10"></div>
                <h3 className="text-2xl font-bold mb-8 text-gray-900">Envíame un mensaje</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="nombre" className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
                        Nombre
                      </label>
                      <input
                        id="nombre"
                        type="text"
                        placeholder="Tu nombre"
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:bg-white transition-all"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:bg-white transition-all"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="asunto" className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
                      Asunto
                    </label>
                    <input
                      id="asunto"
                      type="text"
                      placeholder="¿En qué puedo ayudarte?"
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:bg-white transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="mensaje" className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      placeholder="Escribe tu mensaje detallado aquí..."
                      rows={4}
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:bg-white transition-all resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 text-white py-5 rounded-2xl hover:bg-emerald-700 transition-all font-bold text-lg shadow-xl shadow-emerald-100 flex items-center justify-center group active:scale-[0.98]"
                  >
                    Enviar Mensaje
                    <Mail className="ml-3 w-6 h-6 group-hover:scale-110 group-hover:rotate-6 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 px-6 border-t border-gray-100">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-100">
              <span className="text-white font-bold text-sm">J</span>
            </div>
            <h1 className="text-lg font-bold tracking-tight">Vergara<span className="text-emerald-600">.dev</span></h1>
          </div>
          <p className="text-gray-400 text-sm font-medium">© 2026 Juan Ignacio Vergara. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
