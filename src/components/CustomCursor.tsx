"use client";

import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  useEffect(() => {
    // Solo en dispositivos con mouse
    const hasTouch = 'ontouchstart' in window;
    if (hasTouch) return;

    const cursor = document.createElement('div');
    cursor.className = 'cursor-dot';
    cursor.style.cssText = `
      width: 8px;
      height: 8px;
      background: #8b5cf6;
      border-radius: 50%;
      position: fixed;
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode: difference;
      transition: transform 0.15s ease;
    `;

    const cursorOutline = document.createElement('div');
    cursorOutline.className = 'cursor-outline';
    cursorOutline.style.cssText = `
      width: 40px;
      height: 40px;
      border: 2px solid rgba(139, 92, 246, 0.5);
      border-radius: 50%;
      position: fixed;
      pointer-events: none;
      z-index: 9998;
      transition: all 0.15s ease;
    `;

    document.body.appendChild(cursor);
    document.body.appendChild(cursorOutline);

    let mouseX = 0;
    let mouseY = 0;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to(cursor, {
        x: mouseX - 4,
        y: mouseY - 4,
        duration: 0.1,
        ease: 'power2.out'
      });

      gsap.to(cursorOutline, {
        x: mouseX - 20,
        y: mouseY - 20,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleMouseEnter = () => {
      gsap.to([cursor, cursorOutline], {
        scale: 1.5,
        duration: 0.3,
        ease: 'back.out(1.7)'
      });
    };

    const handleMouseLeave = () => {
      gsap.to([cursor, cursorOutline], {
        scale: 1,
        duration: 0.3,
        ease: 'back.out(1.7)'
      });
    };

    document.addEventListener('mousemove', moveCursor);

    // Efecto hover en elementos interactivos
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      cursor.remove();
      cursorOutline.remove();
    };
  }, []);

  return null;
}
