"use client";

import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationProps {
  children: ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate';
  delay?: number;
  duration?: number;
  className?: string;
}

export default function ScrollAnimation({ 
  children, 
  animation = 'fadeIn',
  delay = 0,
  duration = 1,
  className = ''
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const animations = {
      fadeIn: {
        opacity: 0,
        y: 50
      },
      slideUp: {
        opacity: 0,
        y: 100
      },
      slideLeft: {
        opacity: 0,
        x: 100
      },
      slideRight: {
        opacity: 0,
        x: -100
      },
      scale: {
        opacity: 0,
        scale: 0.8
      },
      rotate: {
        opacity: 0,
        rotation: 10,
        scale: 0.9
      }
    };

    gsap.fromTo(
      element,
      animations[animation],
      {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotation: 0,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [animation, delay, duration]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
