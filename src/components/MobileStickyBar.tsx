import React from 'react';
import { Phone, CalendarCheck, Zap } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenConsultation: () => void;
  onOpenQuote: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  onOpenConsultation,
  onOpenQuote
}) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 p-3 glass-header border-t border-white/10 shadow-2xl">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        
        {/* Instant Quote / Consultation Button */}
        <button
          onClick={onOpenConsultation}
          id="mobile-sticky-consultation-btn"
          className="py-3 px-3 rounded-xl font-bold text-xs text-white glass hover:border-cyan-400/50 flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 transition-transform"
        >
          <CalendarCheck className="w-4 h-4 text-cyan-400" />
          <span>Free Estimate</span>
        </button>

        {/* 1-Tap Emergency Call Button */}
        <a
          href="tel:3343159926"
          id="mobile-sticky-call-btn"
          className="py-3 px-3 rounded-xl font-bold text-xs text-slate-950 bg-cyan-500 hover:bg-cyan-400 glow-cyan flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 fill-slate-950 text-slate-950 animate-pulse" />
          <span>Call (334) 315-9926</span>
        </a>

      </div>
    </div>
  );
};
