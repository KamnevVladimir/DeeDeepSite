import React from 'react';

interface TestimonialCardProps {
  name: string;
  role: string;
  text: string;
  rating: number;
  className?: string;
}

export default function TestimonialCard({ name, role, text, rating, className = '' }: TestimonialCardProps) {
  return (
    <div className={`premium-testimonial-card ${className}`}>
      <div className="flex items-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-xl">★</span>
        ))}
      </div>
      <p className="text-white/90 mb-6 premium-body italic">"{text}"</p>
      <div>
        <div className="font-semibold text-white">{name}</div>
        <div className="text-white/60">{role}</div>
      </div>
    </div>
  );
} 