import React from 'react';
import { Star, Clock, ShieldCheck, Phone, CheckCircle2, MapPin } from 'lucide-react';

export const TrustMetrics: React.FC = () => {
  return (
    <section className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-4 pb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* Card 1: AL Licensed */}
        <div className="glass-card p-5 rounded-2xl flex items-center gap-4">
          <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-cyan-400 shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">AL Licensed</h4>
            <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Fully Insured & Bonded</p>
          </div>
        </div>

        {/* Card 2: Rapid Response */}
        <div className="glass-card p-5 rounded-2xl flex items-center gap-4">
          <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-amber-400 shrink-0">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Rapid Response</h4>
            <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">30–45 Min ETA Target</p>
          </div>
        </div>

        {/* Card 3: Fair Pricing */}
        <div className="glass-card p-5 rounded-2xl flex items-center gap-4">
          <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-cyan-400 shrink-0">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Fair Pricing</h4>
            <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">No Hidden Trip Fees</p>
          </div>
        </div>

        {/* Card 4: Tap to Dispatch (Glow Cyan Highlight) */}
        <a 
          href="tel:3343159926"
          className="glass-card p-5 rounded-2xl flex items-center gap-4 border-cyan-500/30 glow-cyan hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 cursor-pointer group"
        >
          <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center text-slate-900 shrink-0 group-hover:bg-cyan-400 transition-colors">
            <Phone className="w-6 h-6 fill-slate-900" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">Tap to Dispatch</h4>
            <p className="text-xs font-black text-white tracking-wide">(334) 315-9926</p>
          </div>
        </a>

      </div>
    </section>
  );
};

