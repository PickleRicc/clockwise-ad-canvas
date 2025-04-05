
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface KpiCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend?: {
    value: string;
    positive: boolean;
  };
  className?: string;
}

const KpiCard = ({ title, value, icon: Icon, trend, className }: KpiCardProps) => {
  return (
    <div className={cn("card-dashboard", className)}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <Icon className="w-5 h-5 text-gray-400" />
      </div>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
          {trend && (
            <p className={`text-sm ${trend.positive ? 'text-green-600' : 'text-red-600'} flex items-center gap-1 mt-1`}>
              {trend.positive ? '↑' : '↓'} {trend.value}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default KpiCard;
