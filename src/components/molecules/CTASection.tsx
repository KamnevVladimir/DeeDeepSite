import React from 'react';

interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  primaryButtonIcon?: string;
  secondaryButtonIcon?: string;
  className?: string;
}

export default function CTASection({ 
  title, 
  subtitle, 
  primaryButtonText, 
  secondaryButtonText, 
  primaryButtonIcon, 
  secondaryButtonIcon, 
  className = '' 
}: CTASectionProps) {
  return (
    <div className={`premium-card p-16 max-w-5xl mx-auto text-center ${className}`}>
      <h2 className="text-6xl md:text-7xl font-black mb-8 premium-heading">
        <span className="premium-gradient-text">{title}</span>
      </h2>
      <p className="text-2xl text-white/80 mb-12 premium-body">
        {subtitle}
      </p>
      
      <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
        <button className="premium-button-large px-16 py-6 text-2xl rounded-2xl hover-lift-premium">
          <span className="flex items-center space-x-4">
            <span>{primaryButtonText}</span>
            {primaryButtonIcon && <span className="text-3xl">{primaryButtonIcon}</span>}
          </span>
        </button>
        <button className="premium-glass-button px-16 py-6 text-2xl rounded-2xl hover-lift-premium">
          <span className="flex items-center space-x-4">
            <span>{secondaryButtonText}</span>
            {secondaryButtonIcon && <span className="text-3xl">{secondaryButtonIcon}</span>}
          </span>
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="text-center">
          <div className="text-3xl font-bold premium-gradient-text">4.9★</div>
          <div className="text-white/60">App Store</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold premium-gradient-text">4.8★</div>
          <div className="text-white/60">Google Play</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold premium-gradient-text">50K+</div>
          <div className="text-white/60">Загрузок</div>
        </div>
      </div>
    </div>
  );
} 