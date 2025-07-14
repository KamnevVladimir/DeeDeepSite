import React from 'react';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  featured?: boolean;
  className?: string;
}

export default function PricingCard({ 
  title, 
  price, 
  features, 
  buttonText, 
  featured = false, 
  className = '' 
}: PricingCardProps) {
  const cardClass = featured ? 'premium-pricing-card-featured' : 'premium-pricing-card';
  
  return (
    <div className={`${cardClass} p-8 text-center relative ${className}`}>
      {featured && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold">
          Популярный
        </div>
      )}
      <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
      <div className="text-4xl font-bold premium-gradient-text mb-6">{price}</div>
      <ul className="text-white/80 space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className={`w-full py-4 rounded-2xl ${featured ? 'premium-button-large' : 'premium-button'}`}>
        {buttonText}
      </button>
    </div>
  );
} 