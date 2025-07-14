import React, { useState, useEffect } from 'react';

interface Feature {
  title: string;
  description: string;
  icon: string;
  gradient: string;
  stats: string;
}

interface FeatureShowcaseProps {
  features: Feature[];
  className?: string;
}

export default function FeatureShowcase({ features, className = '' }: FeatureShowcaseProps) {
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className={`max-w-5xl mx-auto ${className}`}>
      <div className="premium-card p-12 text-center">
        <div className="text-6xl mb-6">{features[currentFeature].icon}</div>
        <h3 className="text-3xl font-bold mb-4 text-white">{features[currentFeature].title}</h3>
        <p className="text-xl text-white/80 mb-6">{features[currentFeature].description}</p>
        <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 font-semibold">
          {features[currentFeature].stats}
        </div>
      </div>
    </div>
  );
} 