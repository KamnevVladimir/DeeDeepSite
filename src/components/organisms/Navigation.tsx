import React, { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`relative z-10 px-6 py-8 transition-all duration-300 ${isScrolled ? 'backdrop-blur-xl bg-black/20' : ''}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold premium-gradient-text slide-up">
          DeeDeep
        </div>
        
        <div className="hidden md:flex space-x-8 slide-up">
          <a href="#features" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105">Возможности</a>
          <a href="#testimonials" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105">Отзывы</a>
          <a href="#pricing" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105">Тарифы</a>
          <a href="#download" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105">Скачать</a>
        </div>

        <button className="premium-button px-8 py-4 rounded-2xl scale-in">
          <span className="flex items-center space-x-2">
            <span>Попробовать бесплатно</span>
            <span className="text-lg">→</span>
          </span>
        </button>
      </div>
    </nav>
  );
} 