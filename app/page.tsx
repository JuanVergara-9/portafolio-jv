"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Smartphone } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">J</span>
              </div>
              <h1 className="text-xl font-bold tracking-tight text-gray-900">Vergara<span className="text-emerald-600">.dev</span></h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {[
                { name: "Inicio", href: "#inicio" },
                { name: "Sobre mí", href: "#sobre-mi" },
                { name: "Proyectos", href: "#proyectos" },
                { name: "Habilidades", href: "#habilidades" },
                { name: "Contacto", href: "#contacto" },
              ].map((item) => (
                <a 
                  key={item.name}
                  href={item.href} 
                  className="text-sm font-semibold text-gray-600 hover:text-emerald-600 transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full"></span>
                </a>
              ))}
              <a 
                href="#contacto" 
                className="bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100"
              >
                Contratar
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-emerald-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="relative inline-block mb-8">
              <img
                src="/imagen_mia.jpg?height=200&width=200"
                alt="Foto de perfil"
                className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-white shadow-2xl relative z-10"
              />
              <div className="absolute inset-0 bg-emerald-500 rounded-full blur-lg opacity-20 animate-pulse"></div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-gray-900">
              Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Juan Ignacio</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Emprendedor y Desarrollador Full Stack. Transformo ideas complejas en <span className="font-semibold text-gray-900">productos digitales</span> escalables y de alto impacto.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#proyectos"
                className="group relative bg-gray-900 text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition-all font-bold text-lg shadow-xl shadow-gray-200 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Explorar Proyectos
                  <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </a>
              <a
                href="#contacto"
                className="bg-white text-gray-900 border-2 border-gray-100 px-8 py-4 rounded-2xl hover:border-emerald-200 hover:bg-emerald-50/30 transition-all font-bold text-lg"
              >
                Hablemos
              </a>
            </div>

            <div className="flex justify-center space-x-8 mt-12">
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
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">{social.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-24 px-4 bg-gray-50/50">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Sobre mí</h2>
                <div className="w-16 h-1.5 bg-emerald-600 rounded-full"></div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Soy un desarrollador de 22 años con una fuerte mentalidad emprendedora. Mi enfoque principal es construir soluciones tecnológicas que no solo funcionen, sino que escalen y resuelvan problemas reales.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Me especializo en el ecosistema de <span className="font-bold text-emerald-600">JavaScript/TypeScript</span>, con experiencia en arquitecturas de microservicios y aplicaciones de alto rendimiento.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div>
                    <h4 className="font-bold text-gray-900 uppercase text-xs tracking-widest mb-2">Educación</h4>
                    <p className="text-sm text-gray-600">Ingeniería en Sistemas</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 uppercase text-xs tracking-widest mb-2">Ubicación</h4>
                    <p className="text-sm text-gray-600">Mendoza, Argentina</p>
                  </div>
                </div>

                <div className="pt-6">
                  <a
                    href="/cv.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 bg-white border-2 border-gray-100 text-gray-900 px-8 py-4 rounded-2xl hover:border-emerald-200 hover:bg-emerald-50/30 transition-all font-bold shadow-sm group"
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

              <div className="relative">
                <div className="absolute -inset-4 bg-emerald-100/50 rounded-3xl -rotate-3"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-gray-100 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                      <Code className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Desarrollo Full Stack</h4>
                      <p className="text-sm text-gray-500">Node.js, React, Next.js</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                      <Database className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Arquitectura de Datos</h4>
                      <p className="text-sm text-gray-500">PostgreSQL, MongoDB, Redis</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
                      <Smartphone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Mentalidad de Producto</h4>
                      <p className="text-sm text-gray-500">UX/UI, Estrategia, Escalabilidad</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Projects Section */}
      <section id="proyectos" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Proyectos Destacados</h2>
              <div className="w-20 h-1.5 bg-emerald-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 justify-items-center">
              {/* Proyecto 1 */}
              <div className="group w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden h-64">
                  <img
                    src="/miservicio.png"
                    alt="MiServicio"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-sm font-medium">Plataforma de Servicios</p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 tracking-tight">miservicio.ar</h3>
                    <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Validación Real</span>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Plataforma líder en San Rafael, Mendoza, que conecta personas con proveedores confiables. Actualmente en <span className="text-emerald-700 font-semibold">etapa de validación con usuarios reales</span>.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-500 bg-gray-50 p-2 rounded-lg border border-gray-100">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
                      Participante de la aceleradora <span className="font-bold text-gray-700 ml-1">mc^2</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 bg-gray-50 p-2 rounded-lg border border-gray-100">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                      Finalista <span className="font-bold text-gray-700 ml-1">eCommerce Day Startup Competition</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {["Next.js", "Node.js", "PostgreSQL", "Tailwind", "Supabase"].map((tech) => (
                      <span key={tech} className="bg-gray-50 text-gray-600 border border-gray-200 px-3 py-1 rounded-md text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Link
                      href="https://github.com/JuanVergara-9/miservicio-front-v2"
                      className="flex-1 flex items-center justify-center bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-all font-medium text-sm shadow-lg shadow-gray-200"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </Link>
                    <Link
                      href="https://miservicio.ar/"
                      className="flex-1 flex items-center justify-center bg-emerald-600 text-white px-6 py-3 rounded-xl hover:bg-emerald-700 transition-all font-medium text-sm shadow-lg shadow-emerald-100"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visitar Sitio
                    </Link>
                  </div>
                </div>
              </div>

              {/* Proyecto 2 */}
              <div className="group w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden h-64">
                  <img
                    src="/biblioteca.png"
                    alt="Bibliotheca"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-sm font-medium">Buscador de Libros</p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">Bibliotheca</h3>
                    <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Personal</span>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Explorador de literatura universal que utiliza la API de Google Books. Ofrece una experiencia de usuario inmersiva con una estética renacentista moderna, permitiendo gestionar colecciones personales y favoritos.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {["React", "TypeScript", "Google API", "Framer Motion"].map((tech) => (
                      <span key={tech} className="bg-gray-50 text-gray-600 border border-gray-200 px-3 py-1 rounded-md text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Link
                      href="https://github.com/JuanVergara-9/bookfinder"
                      className="w-full flex items-center justify-center bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-all font-medium text-sm shadow-lg shadow-gray-200"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Ver Repositorio
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Skills Section */}
      <section id="habilidades" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Habilidades & Tecnologías</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Frontend */}
              <div className="bg-white p-6 rounded-lg shadow-lg border">
                <div className="text-center mb-4">
                  <Globe className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
                  <h3 className="text-xl font-bold">Frontend</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">Vite</span>
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">HTML5</span>
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">CSS3</span>
                </div>
              </div>

              {/* Backend */}
              <div className="bg-white p-6 rounded-lg shadow-lg border">
                <div className="text-center mb-4">
                  <Code className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
                  <h3 className="text-xl font-bold">Backend</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">Python</span>
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">JWT</span>
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">Express</span>
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">REST APIs</span>
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">Microservicios</span>
                </div>
              </div>

              {/* Database */}
              <div className="bg-white p-6 rounded-lg shadow-lg border">
                <div className="text-center mb-4">
                  <Database className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
                  <h3 className="text-xl font-bold">Base de Datos</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">Supabase</span>
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">MongoDB</span>
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">Redis</span>
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">Sequelize</span>
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">MySQL</span>
                  
                </div>
              </div>

              {/* Tools */}
              <div className="bg-white p-6 rounded-lg shadow-lg border">
                <div className="text-center mb-4">
                  <Smartphone className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
                  <h3 className="text-xl font-bold">Herramientas</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">Git</span>
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">Docker</span>
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">Postman</span>
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">Netlify</span>
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">Vercel</span>
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">Figma</span>
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">Railway</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contáctame</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">{"¡Hablemos!"}</h3>
                <p className="text-lg text-gray-600 mb-8">
                  Estoy siempre interesado en nuevas oportunidades y proyectos emocionantes.
                  {"¡No dudes en contactarme!"}
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-emerald-600" />
                    <span>juanvergara920@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Github className="w-5 h-5 text-emerald-600" />
                    <span>github.com/JuanVergara-9</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin className="w-5 h-5 text-emerald-600" />
                    <span>linkedin.com/in/juan-ignacio-vergara</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Envíame un mensaje</h3>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="nombre" className="text-sm font-bold text-gray-700 ml-1">
                        Nombre
                      </label>
                      <input
                        id="nombre"
                        type="text"
                        placeholder="Tu nombre"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-gray-700 ml-1">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="asunto" className="text-sm font-bold text-gray-700 ml-1">
                      Asunto
                    </label>
                    <input
                      id="asunto"
                      type="text"
                      placeholder="¿En qué puedo ayudarte?"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="mensaje" className="text-sm font-bold text-gray-700 ml-1">
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      placeholder="Escribe tu mensaje detallado aquí..."
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 text-white py-4 rounded-xl hover:bg-emerald-700 transition-all font-bold text-lg shadow-lg shadow-emerald-100 flex items-center justify-center group"
                  >
                    Enviar Mensaje
                    <Mail className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">© 2026 Juan Ignacio Vergara. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
