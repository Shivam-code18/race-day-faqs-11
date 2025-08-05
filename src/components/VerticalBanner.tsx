import React from 'react';
import { cn } from '@/lib/utils';

export const VerticalBanner: React.FC = () => {
  return (
    <div className="fixed left-0 top-0 bottom-0 w-24 bg-gradient-carbon border-r border-border/30 z-10">
      {/* Vertical Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="transform -rotate-90 whitespace-nowrap">
          <h1 className="text-3xl font-f1 font-bold text-foreground tracking-wider">
            THE FAQ GRID
          </h1>
        </div>
      </div>

      {/* Racing Stripe Accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-f1-red via-f1-orange to-f1-red animate-racing-pulse" />
      
      {/* Carbon Fiber Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]" />
    </div>
  );
};