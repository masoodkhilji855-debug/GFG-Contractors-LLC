import React from 'react';
import { Phone, ShieldAlert, Clock, ChevronRight } from 'lucide-react';

interface TopNotificationBarProps {
  onOpenQuote: () => void;
}

export const TopNotificationBar: React.FC<TopNotificationBarProps> = ({ onOpenQuote }) => {
  return (
    <aside aria-label="Emergency Dispatch Alert" className="relative z-50 bg-red-600/90 text-white py-1.5 px-4 text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] shadow-lg shadow-red-950/40">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 sm:gap-4">
        {/* Left emergency badge */}
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
          <span className="text-white flex items-center gap-1.5 text-[11px] sm:text-xs font-extrabold tracking-[0.12em] sm:tracking-[0.2em]">
            <ShieldAlert className="w-3.5 h-3.5" />
            24/7 Emergency Dispatch in West Montgomery: (334) 315-9926
          </span>
          <span className="w-2 h-2 rounded-full bg-white animate-pulse hidden sm:inline-block"></span>
        </div>

        {/* Right Click-to-call direct & quote CTA */}
        <div className="flex items-center gap-3 ml-auto sm:ml-0">
          <div className="hidden lg:flex items-center gap-1 text-red-100 text-[11px] font-semibold normal-case tracking-normal">
            <Clock className="w-3.5 h-3.5 text-amber-300" />
            <span>Target Arrival: 30–45 Mins</span>
          </div>

          <a
            href="tel:3343159926"
            className="inline-flex items-center gap-1.5 font-extrabold text-slate-950 bg-white hover:bg-amber-300 px-3 py-0.5 rounded-full text-xs transition-all duration-200 shadow-md tracking-normal normal-case"
            id="top-emergency-call-btn"
          >
            <Phone className="w-3 h-3 fill-slate-950" />
            <span>(334) 315-9926</span>
          </a>

          <button
            onClick={onOpenQuote}
            className="hidden sm:inline-flex items-center gap-1 text-white hover:text-cyan-200 font-bold text-xs underline underline-offset-2 transition-colors cursor-pointer normal-case tracking-normal"
            id="top-quick-quote-btn"
          >
            <span>Priority Queue</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </aside>
  );
};
