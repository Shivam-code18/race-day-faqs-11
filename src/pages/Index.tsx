import React from 'react';
import { VerticalBanner } from '@/components/VerticalBanner';
import { FAQSection } from '@/components/FAQSection';

const Index = () => {

  return (
    <div className="min-h-screen bg-gradient-carbon relative overflow-hidden">
      {/* Carbon Fiber Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:30px_30px]" />
      
      {/* Racing Stripe */}
      <div className="absolute top-0 left-24 w-1 h-full bg-gradient-to-b from-f1-red via-f1-orange via-f1-teal via-f1-green to-f1-blue opacity-30" />

      {/* Vertical Banner */}
      <VerticalBanner />

      {/* Main Content */}
      <div className="ml-24 min-h-screen">
        <FAQSection />
      </div>
    </div>
  );
};

export default Index;
