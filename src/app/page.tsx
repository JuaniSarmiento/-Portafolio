"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, ArrowDown, Code2, Brain, Server } from "lucide-react";
import ProjectGallery from "@/components/ProjectGallery";
import { voidImages, oraculoImages } from "@/data/projectImages";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-12">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-medium mb-8 gradient-text-minimal tracking-tight">
                Juani Sarmiento
              </h1>
              <div className="flex items-center justify-center gap-4 mb-8 flex-wrap">
                <Badge variant="secondary" className="bg-neutral-900 text-neutral-200 border-neutral-700 badge-minimal px-4 py-2 text-base">
                  <Code2 className="w-5 h-5 mr-2" />
                  Full Stack Developer
                </Badge>
                <Badge variant="secondary" className="bg-neutral-900 text-neutral-200 border-neutral-700 badge-minimal px-4 py-2 text-base">
                  <Brain className="w-5 h-5 mr-2" />
                  AI Specialist
                </Badge>
                <Badge variant="secondary" className="bg-neutral-900 text-neutral-200 border-neutral-700 badge-minimal px-4 py-2 text-base">
                  <Server className="w-5 h-5 mr-2" />
                  Backend Expert
                </Badge>
              </div>
            </div>

            <p className="text-xl md:text-2xl lg:text-3xl text-neutral-300 mb-16 max-w-4xl mx-auto leading-relaxed">
              Construyo <span className="text-white font-semibold">aplicaciones web inteligentes</span> y <span className="text-white font-semibold">escalables</span> que resuelven problemas reales.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-neutral-100 border-0 smooth-hover font-semibold text-lg px-8 py-4 h-auto"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Mis Proyectos
                <ArrowDown className="ml-3 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-neutral-600 text-neutral-200 hover:bg-neutral-800 hover:border-neutral-500 hover:text-white smooth-hover font-semibold text-lg px-8 py-4 h-auto"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-3 h-5 w-5" />
                Contactarme
              </Button>
            </div>

            <div className="flex justify-center gap-6">
              <motion.a
                href="https://github.com/JuaniSarmiento"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 transition-colors border border-neutral-700 hover:border-neutral-600 smooth-hover"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-6 h-6 text-neutral-300" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 transition-colors border border-neutral-700 hover:border-neutral-600 smooth-hover"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-6 h-6 text-neutral-300" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-neutral-400" />
        </motion.div>
      </section>

      {/* Proyectos Destacados */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 gradient-text-minimal">
              Proyectos Destacados
            </h2>
            <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Casos de estudio que demuestran mi expertise en backend engineering y machine learning
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* VOID E-Commerce */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-neutral-900 border-neutral-800 hover:border-neutral-700 transition-all duration-200 group glass glass-hover h-full">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-xl text-white group-hover:text-neutral-200 transition-colors">
                      VOID E-Commerce
                    </CardTitle>
                    <Badge className="bg-neutral-800 text-neutral-300 border-neutral-700">Backend Engineering</Badge>
                  </div>
                  <CardDescription className="text-neutral-400 text-base">
                    Arquitectura de microservicios completa para plataforma de e-commerce de alto rendimiento
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-400 mb-6 leading-relaxed text-sm">
                    <strong className="text-white">Mi rol:</strong> Responsable principal del backend. Desarrollé una plataforma completa de e-commerce 
                    con carrito de compras, checkout integrado con MercadoPago, dashboard administrativo y sistema de gestión de productos.
                  </p>
                  
                  <ProjectGallery images={voidImages} projectName="VOID E-Commerce" />
                  
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3 text-sm">Stack Tecnológico</h4>
                    <div className="flex flex-wrap gap-2">
                      {["FastAPI", "Docker", "MySQL", "MongoDB", "Celery", "Redis", "MercadoPago API"].map((tech) => (
                        <Badge key={tech} variant="outline" className="border-neutral-700 text-neutral-400 hover:border-neutral-600 smooth-hover text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3 text-sm">Features Implementados</h4>
                    <ul className="text-xs text-neutral-400 space-y-1">
                      <li>• Carrito de compras con gestión de stock</li>
                      <li>• Checkout completo con cálculo de envío</li>
                      <li>• Dashboard admin con métricas en tiempo real</li>
                      <li>• Integración completa con MercadoPago API</li>
                      <li>• Sistema de autenticación y roles de usuario</li>
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-neutral-700 text-neutral-300 hover:bg-neutral-800 smooth-hover"
                      onClick={() => window.open('https://github.com/Timba-SA/VOID-E-COMMERCE.git', '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Oráculo Futbolero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-neutral-900 border-neutral-800 hover:border-neutral-700 transition-all duration-200 group glass glass-hover h-full">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-xl text-white group-hover:text-neutral-200 transition-colors">
                      Oráculo Futbolero
                    </CardTitle>
                    <Badge className="bg-neutral-800 text-neutral-300 border-neutral-700">Machine Learning</Badge>
                  </div>
                  <CardDescription className="text-neutral-400 text-base">
                    Sistema de ML end-to-end con evaluación de modelo y visualización 3D interactiva
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-400 mb-6 leading-relaxed text-sm">
                    Sistema completo de predicciones deportivas que procesa datos históricos de equipos para generar 
                    análisis predictivos. Incluye interfaz de selección, cálculo de probabilidades en tiempo real 
                    y visualización de estadísticas con gráficos interactivos.
                  </p>
                  
                  <ProjectGallery images={oraculoImages} projectName="Oráculo Futbolero" />
                  
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3 text-sm">Stack Tecnológico</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "FastAPI", "Pandas", "Next.js", "Three.js", "Redis", "Scikit-learn"].map((tech) => (
                        <Badge key={tech} variant="outline" className="border-neutral-700 text-neutral-400 hover:border-neutral-600 smooth-hover text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3 text-sm">Features Técnicos</h4>
                    <ul className="text-xs text-neutral-400 space-y-1">
                      <li>• Procesamiento de <strong className="text-white">245,000+</strong> registros históricos</li>
                      <li>• Predicciones con porcentajes de probabilidad precisos</li>
                      <li>• Gráficos comparativos de estadísticas por equipo</li>
                      <li>• Dashboard con métricas de corners, tiros y posesión</li>
                      <li>• Sistema de análisis detallado post-predicción</li>
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-neutral-700 text-neutral-300 hover:bg-neutral-800 smooth-hover"
                      onClick={() => window.open('https://github.com/JuaniSarmiento/Proyecto-IA-de-Futbol.git', '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sobre Mí */}
      <section id="about" className="py-24 px-6 bg-neutral-950/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium gradient-text-minimal">
              Sobre Mí
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <div className="w-48 h-48 mx-auto md:mx-0 mb-8 md:mb-0 bg-neutral-800 rounded-2xl flex items-center justify-center text-4xl font-light smooth-hover hover:bg-neutral-700 transition-colors">
                JS
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-base text-neutral-300 leading-relaxed">
                A mis <strong className="text-white">19 años</strong> ya diseñé y desplegué aplicaciones completas que manejan 
                arquitecturas complejas y procesan miles de datos. Mi pasión por la tecnología va desde 
                la optimización de bases de datos hasta el entrenamiento de modelos de IA.
              </p>
              
              <p className="text-base text-neutral-300 leading-relaxed">
                Me especializo en <strong className="text-white">backend engineering</strong> y <strong className="text-white">machine learning</strong>, 
                siempre buscando la intersección entre rendimiento técnico y impacto real. Disfruto 
                enfrentando desafíos técnicos complejos y encontrando soluciones elegantes.
              </p>
              
              <p className="text-base text-neutral-300 leading-relaxed">
                Busco sumarme a <strong className="text-white">equipos dinámicos</strong> donde pueda contribuir con soluciones 
                técnicas sólidas y aprender de profesionales experimentados para crear productos de alto impacto.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 gradient-text-minimal">
              ¿Tenés una idea o desafío?
            </h2>
            <p className="text-lg md:text-xl text-neutral-300 mb-16 max-w-3xl mx-auto leading-relaxed">
              Hablemos sobre cómo puedo contribuir a tu próximo proyecto
            </p>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-neutral-100 smooth-hover font-semibold px-10 py-5 text-lg h-auto"
                onClick={() => window.location.href = 'mailto:juanisarmientoomartinez@gmail.com'}
              >
                <Mail className="mr-3 h-6 w-6" />
                juanisarmientoomartinez@gmail.com
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}