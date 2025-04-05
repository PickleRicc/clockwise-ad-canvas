
import React from 'react';
import { Clock } from 'lucide-react';

interface LogoProps {
  textColor?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ textColor = "text-white", showText = true, size = 'md' }: LogoProps) => {
  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };
  
  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl'
  };
  
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Clock className={`text-gold ${iconSizes[size]}`} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1/2 h-1/2 rounded-full border-2 border-gold"></div>
        </div>
      </div>
      {showText && (
        <div className={`font-bold ${textColor} ${textSizes[size]} tracking-tight`}>
          Clockwise Capital
        </div>
      )}
    </div>
  );
};

export default Logo;
