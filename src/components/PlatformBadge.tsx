
import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Search, 
  MessageCircle,
  LucideIcon 
} from 'lucide-react';

type Platform = 'facebook' | 'twitter' | 'google' | 'reddit';

const platformConfig: Record<Platform, { 
  icon: LucideIcon, 
  color: string, 
  label: string 
}> = {
  facebook: { 
    icon: Facebook, 
    color: 'bg-blue-100 text-blue-700 border-blue-200', 
    label: 'Facebook' 
  },
  twitter: { 
    icon: Twitter, 
    color: 'bg-sky-100 text-sky-700 border-sky-200', 
    label: 'Twitter' 
  },
  google: { 
    icon: Search, 
    color: 'bg-red-100 text-red-700 border-red-200', 
    label: 'Google' 
  },
  reddit: { 
    icon: MessageCircle, 
    color: 'bg-orange-100 text-orange-700 border-orange-200', 
    label: 'Reddit' 
  }
};

interface PlatformBadgeProps {
  platform: Platform;
  showLabel?: boolean;
  size?: 'sm' | 'md';
}

const PlatformBadge = ({ 
  platform, 
  showLabel = true,
  size = 'md'
}: PlatformBadgeProps) => {
  const { icon: Icon, color, label } = platformConfig[platform];
  
  const sizeClasses = {
    sm: 'text-xs py-0.5 px-1.5',
    md: 'text-sm py-1 px-2'
  };
  
  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4'
  };

  return (
    <span className={`inline-flex items-center gap-1 rounded-full border ${color} ${sizeClasses[size]}`}>
      <Icon className={iconSizes[size]} />
      {showLabel && <span>{label}</span>}
    </span>
  );
};

export default PlatformBadge;
