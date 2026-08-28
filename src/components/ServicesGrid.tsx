import React from 'react';
import { 
  Wrench, 
  Sparkles, 
  Flame, 
  Activity, 
  Building2, 
  Droplet, 
  CheckCircle, 
  Phone, 
  ArrowRight,
  Clock
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceItem } from '../types';

interface ServicesGridProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenConsultation: () => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ 
  onSelectService, 
  onOpenConsultation 
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Wrench': return Wrench;
      case 'Sparkles': return Sparkles;
      case 'Flame': return Flame;
      case 'Activity': return Activity;
      case 'Building2': return Building2;
      case 'Droplet': return Droplet;
      default: return Wrench;
    }
  };

  return (
    <section className="py-16 sm:py-20 relative z-10" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5" />
            Comprehensive Alabama Plumbing & Contracting
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Master Plumbing Services Engineered for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Reliability & Speed
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            From midnight emergency pipe bursts to complex commercial grease trap installations, 
            our licensed Montgomery plumbers arrive equipped with high-tech diagnostic gear to fix the root cause right the first time.
          </p>
        </div>

        {/* 6 Glassmorphic Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {SERVICES_DATA.map((service) => {
            const IconComponent = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                className="group relative rounded-3xl overflow-hidden glass-card hover:border-cyan-400/40 shadow-xl shadow-slate-950/50 hover:shadow-cyan-950/30 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Service Image with subtle overlay */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                  
                  {/* Floating Badges */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-slate-950/80 backdrop-blur-md border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-md">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    {service.emergencyAvailable && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wide bg-red-950/90 text-red-300 border border-red-500/40 backdrop-blur-md">
                        🚨 24/7 Dispatch
                      </span>
                    )}
                  </div>

                  {/* Typical time badge */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-950/80 text-slate-200 border border-white/10 backdrop-blur-md flex items-center gap-1">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    <span>{service.estTime}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Features List */}
                    <div className="mt-4 pt-3 border-t border-white/10 space-y-2">
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA & Pricing info */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">
                        Estimated Range:
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-white">
                        {service.estPrice}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onSelectService(service)}
                        className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl text-xs shadow-md shadow-cyan-500/20 flex items-center gap-1 transition-all cursor-pointer"
                      >
                        <span>Book Now</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner for custom contractor projects */}
        <div className="mt-12 rounded-3xl p-6 sm:p-8 glass glow-cyan flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <span>Need a Whole-House Repipe, Water Meter, or Commercial Build-Out?</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Schedule a comprehensive on-site assessment with our master plumbing team in Montgomery.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 hover:border-cyan-400 shadow-md shadow-cyan-950/50 transition-all cursor-pointer"
            >
              Request Free Consultation
            </button>
            <a
              href="tel:3343159926"
              className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-slate-950 bg-cyan-500 hover:bg-cyan-400 shadow-lg shadow-cyan-500/30 flex items-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4 fill-slate-950" />
              <span>Call (334) 315-9926</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
