import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'glass' | 'large';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick, 
  disabled = false 
}: ButtonProps) {
  const baseClasses = 'font-bold transition-all duration-400 ease-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'premium-button',
    secondary: 'premium-glass-button',
    glass: 'premium-glass-button',
    large: 'premium-button-large'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <button 
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
} 