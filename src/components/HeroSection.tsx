"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ArrowDown, Code2, Brain, Server } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const badges = badgesRef.current;
    const buttons = buttonsRef.current;
    const socials = socialsRef.current;

    if (!hero || !title || !subtitle || !badges || !buttons || !socials) return;

    // Timeline de entrada épica
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.fromTo(title, 
      { 
        opacity: 0, 
        y: 100, 
        scale: 0.8,
        rotationX: -15 
      }, 
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        rotationX: 0,
        duration: 1.2,
        ease: "back.out(1.7)"
      }
    )
    .fromTo(badges,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.6"
    )
    .fromTo(subtitle,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.4"
    )
    .fromTo(buttons,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6 },
      "-=0.3"
    )
    .fromTo(socials,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.2"
    );

    // Parallax en el hero al hacer scroll
    gsap.to(hero, {
      yPercent: 30,
      opacity: 0.5,
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    // Efecto de brillo en el título
    gsap.to(title, {
      backgroundPosition: "200% center",
      duration: 3,
      repeat: -1,
      ease: "none",
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-blue-900/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-12">
          <h1 
            ref={titleRef}
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 gradient-text-hero tracking-tight"
            style={{
              backgroundSize: "200% auto",
              backgroundPosition: "0% center"
            }}
          >
            Juani Sarmiento
          </h1>
          
          <div ref={badgesRef} className="flex items-center justify-center gap-3 mb-8 flex-wrap">
            <Badge variant="secondary" className="bg-gradient-to-r from-purple-600/20 to-purple-500/20 text-purple-200 border-purple-500/30 badge-glow px-5 py-2.5 text-base font-semibold hw-accelerate">
              <Code2 className="w-5 h-5 mr-2" />
              Backend Developer
            </Badge>
            <Badge variant="secondary" className="bg-gradient-to-r from-blue-600/20 to-blue-500/20 text-blue-200 border-blue-500/30 badge-glow px-5 py-2.5 text-base font-semibold hw-accelerate">
              <Brain className="w-5 h-5 mr-2" />
              AI Specialist
            </Badge>
            <Badge variant="secondary" className="bg-gradient-to-r from-green-600/20 to-green-500/20 text-green-200 border-green-500/30 badge-glow px-5 py-2.5 text-base font-semibold hw-accelerate">
              <Server className="w-5 h-5 mr-2" />
              Backend Architect
            </Badge>
          </div>
        </div>

        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl lg:text-3xl text-neutral-200 mb-16 max-w-4xl mx-auto leading-relaxed font-light"
        >
          Diseño y construyo <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-bold neon-glow">sistemas escalables</span> y <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 font-bold neon-glow-blue">soluciones inteligentes</span> que transforman ideas en realidad.
        </p>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-neutral-100 border-0 smooth-hover font-semibold text-lg px-8 py-4 h-auto hw-accelerate"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Mis Proyectos
            <ArrowDown className="ml-3 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white text-black hover:bg-neutral-100 border-0 smooth-hover font-semibold text-lg px-8 py-4 h-auto hw-accelerate"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Mail className="mr-3 h-5 w-5" />
            Contactarme
          </Button>
        </div>

        <div ref={socialsRef} className="flex justify-center gap-6">
          <a
            href="https://github.com/JuaniSarmiento"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 transition-colors border border-neutral-700 hover:border-neutral-600 smooth-hover hw-accelerate"
          >
            <Github className="w-6 h-6 text-neutral-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/juan-ignacio-sarmiento-b717631b5/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 transition-colors border border-neutral-700 hover:border-neutral-600 smooth-hover hw-accelerate"
          >
            <Linkedin className="w-6 h-6 text-neutral-300" />
          </a>
        </div>
      </div>

      {/* Scroll indicator animado */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-neutral-400" />
      </div>
    </section>
  );
}
