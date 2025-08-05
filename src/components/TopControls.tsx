import React from 'react';
import { ChevronLeft, ChevronRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface TopControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const TopControls: React.FC<TopControlsProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="flex items-center justify-between mb-8">
      {/* Navigation Controls */}
      <div className="flex items-center space-x-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className={cn(
            "border-border/50 hover:border-primary/50 transition-all duration-300",
            "hover:shadow-glow disabled:opacity-50",
            currentPage === 1 && "bg-primary/20 border-primary/50"
          )}
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Positions 1-10
        </Button>

        <div className="px-4 py-2 rounded-md bg-secondary/50 border border-border/30">
          <span className="text-sm font-f1 text-muted-foreground">
            Page {currentPage.toString().padStart(2, '0')} / {totalPages.toString().padStart(2, '0')}
          </span>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(2)}
          disabled={currentPage === 2}
          className={cn(
            "border-border/50 hover:border-primary/50 transition-all duration-300",
            "hover:shadow-glow disabled:opacity-50",
            currentPage === 2 && "bg-primary/20 border-primary/50"
          )}
        >
          Positions 11-20
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

      {/* Hackathon FAQ Button */}
      <Button
        className={cn(
          "bg-f1-red hover:bg-f1-red/90 text-primary-foreground",
          "shadow-glow hover:shadow-[0_0_30px_hsl(var(--f1-red)/0.4)]",
          "font-f1 font-bold tracking-wide px-6 py-3",
          "animate-speed-glow"
        )}
      >
        <Zap className="w-5 h-5 mr-2" />
        HACKATHON FAQ
      </Button>
    </div>
  );
};