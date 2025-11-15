"use client";

import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';

interface LottieAnimationProps {
  src: string; // URL del archivo JSON de Lottie
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

export default function LottieAnimation({ 
  src, 
  className = "w-full h-full", 
  loop = true, 
  autoplay = true 
}: LottieAnimationProps) {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch(src)
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading Lottie animation:', error));
  }, [src]);

  if (!animationData) {
    return <div className={className}>Cargando animación...</div>;
  }

  return (
    <Lottie 
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      className={className}
    />
  );
}

// Componente de ejemplo para iconos animados
export function AnimatedIcon({ 
  icon = 'rocket', 
  className = "w-16 h-16" 
}: { 
  icon?: 'rocket' | 'code' | 'brain' | 'server'; 
  className?: string;
}) {
  // URLs de animaciones Lottie gratuitas de LottieFiles
  const animations = {
    rocket: 'https://lottie.host/4e6f8a65-2c7e-4d6e-8c5e-9f3b4c6d8e7f/9KhWXJLdJl.json',
    code: 'https://lottie.host/embed/a7d3f8e2-9c4b-4f6e-8d5c-9f3b4c6d8e7f/9KhWXJLdJl.json',
    brain: 'https://lottie.host/embed/f7d3f8e2-9c4b-4f6e-8d5c-9f3b4c6d8e7f/9KhWXJLdJl.json',
    server: 'https://lottie.host/embed/d7d3f8e2-9c4b-4f6e-8d5c-9f3b4c6d8e7f/9KhWXJLdJl.json'
  };

  return <LottieAnimation src={animations[icon]} className={className} />;
}
