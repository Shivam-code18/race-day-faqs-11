import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQCardProps {
  number: string;
  icon: React.ReactNode;
  question: string;
  answer: string;
  color: string;
  isExpanded: boolean;
  onToggle: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export const FAQCard: React.FC<FAQCardProps> = ({
  number,
  icon,
  question,
  answer,
  color,
  isExpanded,
  onToggle,
  className,
  style,
}) => {

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg transition-all duration-300",
        "hover:shadow-racing hover:scale-105 cursor-pointer",
        className
      )}
      style={style}
      onClick={onToggle}
    >
      {/* Racing Position Card */}
      <div className={cn(
        "relative p-6 bg-gradient-to-r from-card to-card/50",
        "border border-border/50 backdrop-blur-sm",
        "hover:border-primary/30 transition-all duration-300"
      )}>
        {/* Position Number */}
        <div className={cn(
          "absolute top-4 left-4 w-12 h-12 rounded-full flex items-center justify-center",
          "font-f1 font-bold text-lg text-background shadow-lg",
          color
        )}>
          {number}
        </div>

        {/* Icon */}
        <div className="absolute top-4 right-4 opacity-70 group-hover:opacity-100 transition-opacity">
          {icon}
        </div>

        {/* Question */}
        <div className="pl-16 pr-12">
          <h3 className="text-lg font-f1 font-semibold text-foreground group-hover:text-primary transition-colors">
            {question}
          </h3>
        </div>

        {/* Expand/Collapse Indicator */}
        <div className="absolute bottom-4 right-4">
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          )}
        </div>

        {/* Racing Glow Effect */}
        <div className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300",
          "bg-gradient-to-r",
          color.includes('red') && "from-f1-red/20 to-transparent",
          color.includes('orange') && "from-f1-orange/20 to-transparent",
          color.includes('teal') && "from-f1-teal/20 to-transparent",
          color.includes('green') && "from-f1-green/20 to-transparent",
          color.includes('blue') && "from-f1-blue/20 to-transparent"
        )} />
      </div>

      {/* Expandable Answer Section */}
      {isExpanded && (
        <div className="px-6 pb-6 bg-secondary/30 border-t border-border/30 animate-slide-expand">
          <div className="pt-4">
            <p className="text-muted-foreground leading-relaxed">
              {answer}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};