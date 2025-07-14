import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
  icon?: string;
  className?: string;
}

export default function StatCard({ value, label, icon, className = '' }: StatCardProps) {
  return (
    <div className={`premium-stat-card ${className}`}>
      {icon && (
        <div className="text-4xl mb-4">{icon}</div>
      )}
      <div className="text-4xl font-bold premium-gradient-text mb-2">{value}</div>
      <div className="text-white/60 font-medium">{label}</div>
    </div>
  );
} 