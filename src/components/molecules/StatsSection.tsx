import React from 'react';
import StatCard from './StatCard';

interface Stat {
  value: string;
  label: string;
  icon?: string;
}

interface StatsSectionProps {
  stats: Stat[];
  className?: string;
}

export default function StatsSection({ stats, className = '' }: StatsSectionProps) {
  return (
    <div className={`grid md:grid-cols-3 gap-8 max-w-4xl mx-auto ${className}`}>
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          value={stat.value}
          label={stat.label}
          icon={stat.icon}
          className="slide-up"
        />
      ))}
    </div>
  );
} 