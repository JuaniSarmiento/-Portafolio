"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, ArrowDown, Code2, Brain, Server, Award, Calendar, Clock } from "lucide-react";
import ProjectGallery from "@/components/ProjectGallery";
import { voidImages, oraculoImages } from "@/data/projectImages";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-blue-900/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-12">
              <motion.h1 
                className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 gradient-text-hero tracking-tight"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Juani Sarmiento
              </motion.h1>
              <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
                <Badge variant="secondary" className="bg-gradient-to-r from-purple-600/20 to-purple-500/20 text-purple-200 border-purple-500/30 badge-glow px-5 py-2.5 text-base font-semibold">
                  <Code2 className="w-5 h-5 mr-2" />
                  Backend Developer
                </Badge>
                <Badge variant="secondary" className="bg-gradient-to-r from-blue-600/20 to-blue-500/20 text-blue-200 border-blue-500/30 badge-glow px-5 py-2.5 text-base font-semibold">
                  <Brain className="w-5 h-5 mr-2" />
                  AI Specialist
                </Badge>
                <Badge variant="secondary" className="bg-gradient-to-r from-green-600/20 to-green-500/20 text-green-200 border-green-500/30 badge-glow px-5 py-2.5 text-base font-semibold">
                  <Server className="w-5 h-5 mr-2" />
                  Backend Architect
                </Badge>
              </div>
            </div>

            <p className="text-xl md:text-2xl lg:text-3xl text-neutral-200 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
              Diseño y construyo <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-bold">sistemas escalables</span> y <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 font-bold">soluciones inteligentes</span> que transforman ideas en realidad.
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
                className="bg-white text-black hover:bg-neutral-100 border-0 smooth-hover font-semibold text-lg px-8 py-4 h-auto"
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
                href="https://www.linkedin.com/in/juan-ignacio-sarmiento-b717631b5/"
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
      <section id="projects" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text-hero">
              Proyectos Destacados
            </h2>
            <p className="text-xl md:text-2xl text-neutral-300 max-w-4xl mx-auto leading-relaxed">
              Arquitecturas complejas y sistemas de alta performance que demuestran expertise técnico real
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* ORION - Piloto Automático IA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-purple-950/50 to-neutral-900 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group glass glass-hover h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-2xl text-white group-hover:text-purple-200 transition-colors font-bold">
                      ORION - Piloto Automático IA
                    </CardTitle>
                    <Badge className="bg-purple-600/30 text-purple-200 border-purple-500/50 font-semibold">AI + Microservices</Badge>
                  </div>
                  <CardDescription className="text-neutral-300 text-base font-medium">
                    Sistema de IA end-to-end para e-commerce: automatiza +90% de consultas post-venta con arquitectura de 5 microservicios
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-neutral-200 mb-6 leading-relaxed text-sm">
                    <strong className="text-purple-300">Arquitecto Principal:</strong> Diseñé y desarrollé desde cero un sistema de IA completo que automatiza operaciones post-venta con 97.8% de precisión usando NLP (spaCy + Regex) y arquitectura de microservicios orquestados con Docker.
                  </p>
                  
                  <div className="mb-6 bg-black/30 rounded-lg p-4 border border-purple-500/20">
                    <h4 className="text-purple-300 font-semibold mb-3 text-sm flex items-center">
                      <Brain className="w-4 h-4 mr-2" />
                      Stack Tecnológico
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "FastAPI", "Docker Compose", "spaCy (NLP)", "MongoDB", "Regex", "Pydantic", "HTTPX", "GitHub Actions"].map((tech) => (
                        <Badge key={tech} variant="outline" className="border-purple-500/40 text-purple-200 hover:border-purple-400 hover:bg-purple-500/10 smooth-hover text-xs font-medium">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 text-sm">Logros Clave</h4>
                    <ul className="text-xs text-neutral-300 space-y-2">
                      <li className="flex items-start"><span className="text-purple-400 mr-2 font-bold">•</span><span><strong className="text-white">Arquitectura de 5 Microservicios:</strong> API Gateway, NLU Service, Business Logic, Integrations, Database</span></li>
                      <li className="flex items-start"><span className="text-purple-400 mr-2 font-bold">•</span><span><strong className="text-white">Motor NLP:</strong> 97.8% de precisión en clasificación de intenciones y extracción de entidades</span></li>
                      <li className="flex items-start"><span className="text-purple-400 mr-2 font-bold">•</span><span><strong className="text-white">Sistema de Escalada:</strong> Alertas automáticas vía SMTP y tracking de conversaciones fallidas</span></li>
                      <li className="flex items-start"><span className="text-purple-400 mr-2 font-bold">•</span><span><strong className="text-white">CI/CD Completo:</strong> Pipeline automatizado con tests E2E (100% uptime bajo estrés)</span></li>
                      <li className="flex items-start"><span className="text-purple-400 mr-2 font-bold">•</span><span><strong className="text-white">Dashboard en Tiempo Real:</strong> Panel de control con Jinja2 para auditoría de conversaciones</span></li>
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      className="bg-purple-600/20 border border-purple-500/50 text-purple-200 hover:bg-purple-600/30 hover:border-purple-400 smooth-hover font-semibold"
                      onClick={() => window.open('https://github.com/JuaniSarmiento/Orion.git', '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Ver Código
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* ConectarProfesionales - Marketplace Backend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-blue-950/50 to-neutral-900 border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group glass glass-hover h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-2xl text-white group-hover:text-blue-200 transition-colors font-bold">
                      ConectarProfesionales
                    </CardTitle>
                    <Badge className="bg-blue-600/30 text-blue-200 border-blue-500/50 font-semibold">Backend + GIS</Badge>
                  </div>
                  <CardDescription className="text-neutral-300 text-base font-medium">
                    API RESTful headless para marketplace: motor geoespacial (PostGIS), pagos con escrow y sistema KYC completo
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-neutral-200 mb-6 leading-relaxed text-sm">
                    <strong className="text-blue-300">Arquitecto Backend:</strong> Desarrollé la API completa de un marketplace headless conectando clientes con profesionales. Implementé búsqueda geoespacial con PostGIS, sistema de pagos con escrow (MercadoPago) y workflow KYC con validación de identidad.
                  </p>
                  
                  <div className="mb-6 bg-black/30 rounded-lg p-4 border border-blue-500/20">
                    <h4 className="text-blue-300 font-semibold mb-3 text-sm flex items-center">
                      <Server className="w-4 h-4 mr-2" />
                      Stack Tecnológico
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["FastAPI (Async)", "PostgreSQL", "PostGIS", "SQLAlchemy", "GeoAlchemy2", "MercadoPago SDK", "Firebase", "JWT + OAuth2", "Docker", "Pytest"].map((tech) => (
                        <Badge key={tech} variant="outline" className="border-blue-500/40 text-blue-200 hover:border-blue-400 hover:bg-blue-500/10 smooth-hover text-xs font-medium">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 text-sm">Logros Clave</h4>
                    <ul className="text-xs text-neutral-300 space-y-2">
                      <li className="flex items-start"><span className="text-blue-400 mr-2 font-bold">•</span><span><strong className="text-white">Motor Geoespacial:</strong> Búsquedas con PostGIS (ST_DWithin) para matchear clientes/profesionales por ubicación</span></li>
                      <li className="flex items-start"><span className="text-blue-400 mr-2 font-bold">•</span><span><strong className="text-white">Sistema de Pagos con Escrow:</strong> Integración completa con MercadoPago (Webhooks + Payouts)</span></li>
                      <li className="flex items-start"><span className="text-blue-400 mr-2 font-bold">•</span><span><strong className="text-white">Autenticación + RBAC:</strong> JWT, OAuth2, bcrypt y sistema de roles (Admin/Profesional/Cliente)</span></li>
                      <li className="flex items-start"><span className="text-blue-400 mr-2 font-bold">•</span><span><strong className="text-white">Optimización de Performance:</strong> Queries &lt;10ms eliminando N+1 con joinedload/selectinload</span></li>
                      <li className="flex items-start"><span className="text-blue-400 mr-2 font-bold">•</span><span><strong className="text-white">Tests E2E:</strong> Suite completa con Pytest validando +30 endpoints y flujos críticos</span></li>
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      className="bg-blue-600/20 border border-blue-500/50 text-blue-200 hover:bg-blue-600/30 hover:border-blue-400 smooth-hover font-semibold"
                      onClick={() => window.open('https://github.com/Comision-3-Plus/ConectarProfesionales.git', '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Ver Código
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* VOID E-Commerce */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-green-950/50 to-neutral-900 border-green-500/30 hover:border-green-400/50 transition-all duration-300 group glass glass-hover h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-2xl text-white group-hover:text-green-200 transition-colors font-bold">
                      VOID E-Commerce
                    </CardTitle>
                    <Badge className="bg-green-600/30 text-green-200 border-green-500/50 font-semibold">Full Stack</Badge>
                  </div>
                  <CardDescription className="text-neutral-300 text-base font-medium">
                    Plataforma e-commerce completa con microservicios, procesamiento de pagos y dashboard administrativo
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-neutral-200 mb-6 leading-relaxed text-sm">
                    <strong className="text-green-300">Backend Lead:</strong> Arquitecté y desarrollé la infraestructura completa de backend para e-commerce de alto tráfico con carrito inteligente, checkout optimizado y sistema de gestión de inventario.
                  </p>
                  
                  <ProjectGallery images={voidImages} projectName="VOID E-Commerce" />
                  
                  <div className="mb-6 bg-black/30 rounded-lg p-4 border border-green-500/20">
                    <h4 className="text-green-300 font-semibold mb-3 text-sm flex items-center">
                      <Code2 className="w-4 h-4 mr-2" />
                      Stack Tecnológico
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["FastAPI", "Docker", "MySQL", "MongoDB", "Celery", "Redis", "MercadoPago API"].map((tech) => (
                        <Badge key={tech} variant="outline" className="border-green-500/40 text-green-200 hover:border-green-400 hover:bg-green-500/10 smooth-hover text-xs font-medium">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 text-sm">Features Implementados</h4>
                    <ul className="text-xs text-neutral-300 space-y-2">
                      <li className="flex items-start"><span className="text-green-400 mr-2 font-bold">•</span><span>Carrito de compras con gestión de stock en tiempo real</span></li>
                      <li className="flex items-start"><span className="text-green-400 mr-2 font-bold">•</span><span>Checkout completo con cálculo dinámico de envío</span></li>
                      <li className="flex items-start"><span className="text-green-400 mr-2 font-bold">•</span><span>Dashboard administrativo con métricas y analytics</span></li>
                      <li className="flex items-start"><span className="text-green-400 mr-2 font-bold">•</span><span>Integración completa con API de MercadoPago</span></li>
                      <li className="flex items-start"><span className="text-green-400 mr-2 font-bold">•</span><span>Sistema de autenticación JWT y gestión de roles</span></li>
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      className="bg-green-600/20 border border-green-500/50 text-green-200 hover:bg-green-600/30 hover:border-green-400 smooth-hover font-semibold"
                      onClick={() => window.open('https://github.com/Timba-SA/VOID-E-COMMERCE.git', '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Ver Código
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Oráculo Futbolero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-orange-950/50 to-neutral-900 border-orange-500/30 hover:border-orange-400/50 transition-all duration-300 group glass glass-hover h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-2xl text-white group-hover:text-orange-200 transition-colors font-bold">
                      Oráculo Futbolero
                    </CardTitle>
                    <Badge className="bg-orange-600/30 text-orange-200 border-orange-500/50 font-semibold">Machine Learning</Badge>
                  </div>
                  <CardDescription className="text-neutral-300 text-base font-medium">
                    Sistema ML end-to-end con procesamiento de 245K+ registros, predicciones en tiempo real y visualización 3D
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-neutral-200 mb-6 leading-relaxed text-sm">
                    <strong className="text-orange-300">ML Engineer:</strong> Construí un sistema completo de predicciones deportivas que procesa datos históricos masivos para generar análisis predictivos con visualización interactiva.
                  </p>
                  
                  <ProjectGallery images={oraculoImages} projectName="Oráculo Futbolero" />
                  
                  <div className="mb-6 bg-black/30 rounded-lg p-4 border border-orange-500/20">
                    <h4 className="text-orange-300 font-semibold mb-3 text-sm flex items-center">
                      <Brain className="w-4 h-4 mr-2" />
                      Stack Tecnológico
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "FastAPI", "Pandas", "Next.js", "Three.js", "Redis", "Scikit-learn"].map((tech) => (
                        <Badge key={tech} variant="outline" className="border-orange-500/40 text-orange-200 hover:border-orange-400 hover:bg-orange-500/10 smooth-hover text-xs font-medium">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 text-sm">Features Técnicos</h4>
                    <ul className="text-xs text-neutral-300 space-y-2">
                      <li className="flex items-start"><span className="text-orange-400 mr-2 font-bold">•</span><span>Procesamiento de <strong className="text-white">245,000+</strong> registros históricos</span></li>
                      <li className="flex items-start"><span className="text-orange-400 mr-2 font-bold">•</span><span>Predicciones con porcentajes de probabilidad precisos</span></li>
                      <li className="flex items-start"><span className="text-orange-400 mr-2 font-bold">•</span><span>Gráficos comparativos de estadísticas por equipo</span></li>
                      <li className="flex items-start"><span className="text-orange-400 mr-2 font-bold">•</span><span>Dashboard con métricas de corners, tiros y posesión</span></li>
                      <li className="flex items-start"><span className="text-orange-400 mr-2 font-bold">•</span><span>Sistema de análisis detallado post-predicción</span></li>
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      className="bg-orange-600/20 border border-orange-500/50 text-orange-200 hover:bg-orange-600/30 hover:border-orange-400 smooth-hover font-semibold"
                      onClick={() => window.open('https://github.com/JuaniSarmiento/Proyecto-IA-de-Futbol.git', '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Ver Código
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sobre Mí */}
      <section id="about" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/10 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text-hero">
              Sobre Mí
            </h2>
            <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto">
              Backend Engineer & AI Specialist de 19 años
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 border-neutral-700/50 backdrop-blur-xl">
              <CardContent className="p-12">
                <div className="grid md:grid-cols-[300px_1fr] gap-12 items-start">
                  {/* Avatar con gradiente */}
                  <div className="mx-auto md:mx-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-3xl blur-xl opacity-30" />
                      <div className="relative w-64 h-64 bg-gradient-to-br from-purple-600/20 to-blue-600/20 border-2 border-purple-500/30 rounded-3xl flex items-center justify-center text-6xl font-bold smooth-hover hover:scale-105 transition-transform">
                        <span className="gradient-text-hero">JS</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Contenido */}
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                        <Code2 className="w-6 h-6 mr-3 text-purple-400" />
                        Mi Historia
                      </h3>
                      <p className="text-lg text-neutral-300 leading-relaxed">
                        A mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-bold">19 años</span> ya diseñé y desplegué aplicaciones completas que manejan 
                        arquitecturas complejas y procesan miles de datos. Mi pasión por la tecnología va desde 
                        la optimización de bases de datos hasta el entrenamiento de modelos de IA.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                        <Brain className="w-6 h-6 mr-3 text-blue-400" />
                        Expertise Técnico
                      </h3>
                      <p className="text-lg text-neutral-300 leading-relaxed">
                        Me especializo en <span className="text-white font-semibold">backend engineering</span> y <span className="text-white font-semibold">machine learning</span>, 
                        siempre buscando la intersección entre rendimiento técnico y impacto real. Disfruto 
                        enfrentando desafíos técnicos complejos y encontrando soluciones elegantes.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                        <Server className="w-6 h-6 mr-3 text-green-400" />
                        Lo Que Busco
                      </h3>
                      <p className="text-lg text-neutral-300 leading-relaxed">
                        Sumarme a <span className="text-white font-semibold">equipos dinámicos</span> donde pueda contribuir con soluciones 
                        técnicas sólidas y aprender de profesionales experimentados para crear productos de alto impacto.
                      </p>
                    </div>

                    {/* Skills destacados */}
                    <div className="pt-6 border-t border-neutral-700/50">
                      <h4 className="text-lg font-semibold text-white mb-4">Skills Principales</h4>
                      <div className="flex flex-wrap gap-3">
                        <Badge className="bg-blue-600/20 border-blue-500/40 text-blue-200 hover:bg-blue-600/30 smooth-hover text-sm px-4 py-1.5 font-medium">
                          Python
                        </Badge>
                        <Badge className="bg-green-600/20 border-green-500/40 text-green-200 hover:bg-green-600/30 smooth-hover text-sm px-4 py-1.5 font-medium">
                          FastAPI
                        </Badge>
                        <Badge className="bg-blue-600/20 border-blue-500/40 text-blue-200 hover:bg-blue-600/30 smooth-hover text-sm px-4 py-1.5 font-medium">
                          PostgreSQL
                        </Badge>
                        <Badge className="bg-purple-600/20 border-purple-500/40 text-purple-200 hover:bg-purple-600/30 smooth-hover text-sm px-4 py-1.5 font-medium">
                          Docker
                        </Badge>
                        <Badge className="bg-orange-600/20 border-orange-500/40 text-orange-200 hover:bg-orange-600/30 smooth-hover text-sm px-4 py-1.5 font-medium">
                          Machine Learning
                        </Badge>
                        <Badge className="bg-indigo-600/20 border-indigo-500/40 text-indigo-200 hover:bg-indigo-600/30 smooth-hover text-sm px-4 py-1.5 font-medium">
                          Microservices
                        </Badge>
                        <Badge className="bg-green-600/20 border-green-500/40 text-green-200 hover:bg-green-600/30 smooth-hover text-sm px-4 py-1.5 font-medium">
                          API Design
                        </Badge>
                        <Badge className="bg-purple-600/20 border-purple-500/40 text-purple-200 hover:bg-purple-600/30 smooth-hover text-sm px-4 py-1.5 font-medium">
                          NLP
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Certificaciones */}
      <section id="certifications" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text-hero">
              Certificaciones
            </h2>
            <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto">
              Formación continua en tecnologías de vanguardia
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Certificación 1 - Ciencia de Datos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-blue-950/50 to-neutral-900 border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <Award className="w-12 h-12 text-blue-400" />
                    <Badge className="bg-blue-600/30 text-blue-200 border-blue-500/50 font-semibold">
                      Data Science
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl text-white group-hover:text-blue-200 transition-colors font-bold">
                    Introducción a la Ciencia de Datos
                  </CardTitle>
                  <CardDescription className="text-neutral-300 text-base mt-3 leading-relaxed">
                    Exploración de cómo los datos están transformando el mundo y abriendo nuevos empleos. Procesamiento de quintillones de bytes generados diariamente.
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3 text-sm text-neutral-400">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span><strong className="text-white">Fecha:</strong> 30 Agosto 2025</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-neutral-400">
                      <Clock className="w-4 h-4 text-blue-400" />
                      <span><strong className="text-white">Duración:</strong> 6 horas</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-neutral-400">
                      <Award className="w-4 h-4 text-blue-400" />
                      <span><strong className="text-white">Instructor:</strong> Higinio Alberto Facchini</span>
                    </div>
                  </div>

                  <div className="p-4 bg-black/30 rounded-lg border border-blue-500/20 mb-4">
                    <p className="text-xs text-neutral-400 mb-2 font-semibold">Academia:</p>
                    <p className="text-sm text-blue-200">Universidad Tecnológica Nacional - Facultad Regional Mendoza</p>
                  </div>

                  <div>
                    <p className="text-xs text-neutral-400 mb-2 font-semibold">Habilidades:</p>
                    <Badge className="bg-blue-600/20 border-blue-500/40 text-blue-200 text-xs">
                      Introducción a la Ciencia de Datos
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Certificación 2 - IA con IBM */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-cyan-950/50 to-neutral-900 border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 group h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <Award className="w-12 h-12 text-cyan-400" />
                    <Badge className="bg-cyan-600/30 text-cyan-200 border-cyan-500/50 font-semibold">
                      AI & IBM
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl text-white group-hover:text-cyan-200 transition-colors font-bold">
                    Fundamentos de IA con IBM SkillsBuild
                  </CardTitle>
                  <CardDescription className="text-neutral-300 text-base mt-3 leading-relaxed">
                    Conceptos básicos de aprendizaje automático, deep learning, procesamiento de lenguaje natural y visión artificial con IBM Watson Studio.
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3 text-sm text-neutral-400">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span><strong className="text-white">Fecha:</strong> 12 Agosto 2025</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-neutral-400">
                      <Clock className="w-4 h-4 text-cyan-400" />
                      <span><strong className="text-white">Duración:</strong> 10 horas</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-neutral-400">
                      <Award className="w-4 h-4 text-cyan-400" />
                      <span><strong className="text-white">Instructor:</strong> Higinio Alberto Facchini</span>
                    </div>
                  </div>

                  <div className="p-4 bg-black/30 rounded-lg border border-cyan-500/20 mb-4">
                    <p className="text-xs text-neutral-400 mb-2 font-semibold">Academia:</p>
                    <p className="text-sm text-cyan-200">Universidad Tecnológica Nacional - Facultad Regional Mendoza</p>
                  </div>

                  <div>
                    <p className="text-xs text-neutral-400 mb-2 font-semibold">Habilidades:</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-cyan-600/20 border-cyan-500/40 text-cyan-200 text-xs">
                        IA y Ciencia de Datos
                      </Badge>
                      <Badge className="bg-cyan-600/20 border-cyan-500/40 text-cyan-200 text-xs">
                        IBM SkillsBuild
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contact" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 gradient-text-hero">
              ¿Tenés una idea o desafío?
            </h2>
            <p className="text-xl md:text-2xl text-neutral-300 mb-16 max-w-3xl mx-auto leading-relaxed">
              Hablemos sobre cómo puedo contribuir a tu próximo proyecto
            </p>
            
            <Card className="bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 border-purple-500/30 backdrop-blur-xl max-w-2xl mx-auto">
              <CardContent className="p-10">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mb-8"
                >
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white border-0 smooth-hover font-bold px-8 py-6 text-lg h-auto shadow-lg shadow-purple-500/30"
                    onClick={() => window.location.href = 'mailto:juanisarmientoomartinez@gmail.com'}
                  >
                    <Mail className="mr-3 h-6 w-6" />
                    juanisarmientoomartinez@gmail.com
                  </Button>
                </motion.div>

                <div className="flex justify-center gap-4">
                  <motion.a
                    href="https://github.com/JuaniSarmiento"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-neutral-800/50 hover:bg-purple-600/30 transition-all border border-neutral-700 hover:border-purple-500/50 smooth-hover group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-6 h-6 text-neutral-300 group-hover:text-purple-300 transition-colors" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/juan-ignacio-sarmiento-b717631b5/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-neutral-800/50 hover:bg-blue-600/30 transition-all border border-neutral-700 hover:border-blue-500/50 smooth-hover group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="w-6 h-6 text-neutral-300 group-hover:text-blue-300 transition-colors" />
                  </motion.a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}