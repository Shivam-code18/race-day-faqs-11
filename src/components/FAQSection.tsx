import React, { useState } from 'react';
import { TopControls } from '@/components/TopControls';
import { FAQCard } from '@/components/FAQCard';
import { faqData } from '@/data/faqData';

export const FAQSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(faqData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = faqData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="container mx-auto px-8 py-12">
      {/* Top Controls */}
      <TopControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      {/* FAQ Grid */}
      <div className="grid gap-6 max-w-4xl">
        {currentItems.map((faq, index) => {
          const IconComponent = faq.icon;
          return (
            <FAQCard
              key={faq.id}
              number={faq.number}
              icon={<IconComponent className="w-6 h-6" />}
              question={faq.question}
              answer={faq.answer}
              color={faq.color}
              isExpanded={expandedFAQ === faq.id}
              onToggle={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
              className="animate-fade-in"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both'
              }}
            />
          );
        })}
      </div>

      {/* Bottom Racing Info */}
      <div className="mt-16 p-6 rounded-lg bg-secondary/20 border border-border/30 backdrop-blur-sm">
         <div className="flex items-center justify-between">
          <div>
            <h3 className="font-f1 font-bold text-lg text-foreground mb-2">
              RACING STATUS: ACTIVE
            </h3>
            <p className="text-muted-foreground">
              All systems operational • Grid positions available • Next race starts soon
            </p>
          </div>
          <div className="w-4 h-4 bg-f1-green rounded-full animate-racing-pulse shadow-glow" />
        </div>
      </div>
    </div>
  );
};