import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Smartphone } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Mi Portafolio</h1>
            <div className="hidden md:flex space-x-6">
              <a href="#inicio" className="hover:text-emerald-600 transition-colors">
                Inicio
              </a>
              <a href="#sobre-mi" className="hover:text-emerald-600 transition-colors">
                Sobre mí
              </a>
              <a href="#proyectos" className="hover:text-emerald-600 transition-colors">
                Proyectos
              </a>
              <a href="#habilidades" className="hover:text-emerald-600 transition-colors">
                Habilidades
              </a>
              <a href="#contacto" className="hover:text-emerald-600 transition-colors">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <img
              src="/imagen_mia.jpg?height=200&width=200"
              alt="Foto de perfil"
              className="w-32 h-32 rounded-full mx-auto mb-8 object-cover border-4 border-emerald-200"
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hola, soy <span className="text-emerald-600">Juan Ignacio Vergara</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Emprendedor y Desarrollador Full Stack apasionado por crear experiencias digitales increíbles
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#proyectos"
                className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-medium"
              >
                Ver mis proyectos
              </a>
              <a
                href="#contacto"
                className="border border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-medium"
              >
                Contáctame
              </a>
            </div>
            <div className="flex justify-center space-x-6 mt-8">
              <Link href="https://github.com/JuanVergara-9" className="text-gray-600 hover:text-emerald-600 transition-colors">
                <Github className="w-6 h-6" />
              </Link>
              <Link href="https://www.linkedin.com/in/juan-ignacio-vergara/" className="text-gray-600 hover:text-emerald-600 transition-colors">
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link href="mailto:juanvergara920@gmail.com" className="text-gray-600 hover:text-emerald-600 transition-colors">
                <Mail className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Sobre mí</h2>

            <p className="text-lg text-gray-700 mb-6">
              Soy un joven desarrollador de 22 años con mentalidad emprendedora, impulsado por el desafío de construir soluciones tecnológicas desde la idea hasta el producto final. Me apasiona crear plataformas digitales que escalen y generen impacto real en la sociedad.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              Me enfoco en escribir código limpio, desarrollar interfaces intuitivas y resolver desafíos técnicos con una visión práctica y orientada al usuario, combinando creatividad, lógica y perseverancia en cada proyecto.
            </p>

            <hr className="my-8 border-gray-300" />

            <div className="bg-white shadow-sm p-6 rounded-lg text-left md:text-center space-y-2">
              <p><strong>Ocupación:</strong> Estudiante de Ing en Sistema</p>
              <p><strong>Email:</strong> juanvergara920@gmail.com</p>
              <p><strong>Ubicación:</strong> Mendoza, Argentina</p>
              <p><strong>Disponibilidad:</strong> Disponible para proyectos</p>
            </div>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 hover:scale-105 transition-transform font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v6m0 0l3-3m-3 3l-3-3m0-9h6" />
              </svg>
              Descargar CV
            </a>

            <p className="italic text-gray-500 mt-6">
              Siempre abierto a nuevas ideas, desafíos y oportunidades para seguir creciendo 🚀
            </p>
          </div>
        </div>
      </section>



      {/* Projects Section */}
      <section id="proyectos" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Mis Proyectos</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
              {/* Proyecto 1 */}
              <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden border">
                <img
                  src="/miservicio.png"
                  alt="MiServicio"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">miservicio</h3>
                  <p className="text-gray-600 mb-4">
                    Plataforma que conecta personas con proveedores confiables de su zona. Incluye geolocalización, reseñas verificadas y perfiles profesionales.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">React</span>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Microservicios</span>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href="https://github.com/JuanVergara-9/miservicio-front-v2"
                      className="flex items-center bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </Link>
                    <Link
                      href="https://miservicio-demo.netlify.app/"
                      className="flex items-center border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Link>
                  </div>
                </div>
              </div>

              {/* Proyecto 2 */}
              <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden border">
                <img
                  src="/biblioteca.png"
                  alt="Bibliotheca"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Bibliotheca</h3>
                  <p className="text-gray-600 mb-4">
                    Aplicación web para explorar libros utilizando la API de Google Books. Permite guardar favoritos y navegar con una estética inspirada en el Renacimiento.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">React</span>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Google Books API</span>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href="https://github.com/JuanVergara-9/bookfinder"
                      className="flex items-center bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Código
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
              <div className="bg-white p-6 rounded-lg shadow-lg border">
                <h3 className="text-xl font-bold mb-2">Envíame un mensaje</h3>
                <p className="text-gray-600 mb-6">Completa el formulario y te responderé lo antes posible.</p>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre
                      </label>
                      <input
                        id="nombre"
                        type="text"
                        placeholder="Tu nombre"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="juanvergara920@gmail.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-1">
                      Asunto
                    </label>
                    <input
                      id="asunto"
                      type="text"
                      placeholder="Asunto del mensaje"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      placeholder="Escribe tu mensaje aquí..."
                      rows={5}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors font-medium"
                  >
                    Enviar mensaje
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
          <p className="text-gray-600">© 2025 Juan Ignacio Vergara. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
