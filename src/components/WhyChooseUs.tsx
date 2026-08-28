import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  DollarSign, 
  Camera, 
  Sparkles, 
  Award,
  Phone,
  Check
} from 'lucide-react';

interface WhyChooseUsProps {
  onOpenConsultation: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenConsultation }) => {
  const points = [
    {
      icon: MapPin,
      title: 'Local Montgomery HQ (3045 Mobile Hwy)',
      desc: 'We are stationed right here in West Montgomery. Our service trucks are stocked with commercial-grade parts so 95% of repairs are resolved in a single visit.',
      badge: 'Local Fleet'
    },
    {
      icon: ShieldCheck,
      title: 'Licensed, Bonded & Insured AL Plumbers',
      desc: 'Every technician on our crew is background-checked, drug-tested, and certified under Alabama state plumbing codes. No inexperienced subcontractors.',
      badge: 'Certified'
    },
    {
      icon: DollarSign,
      title: '100% Upfront, Transparent Flat Rates',
      desc: 'We inspect the issue, outline your exact repair options, and provide a binding written price before touching a wrench. No surprise billing or hidden trip fees.',
      badge: 'No Surprises'
    },
    {
      icon: Camera,
      title: 'Cutting-Edge HD Diagnostic Inspection',
      desc: 'We verify drain and sewer health using fiber-optic color cameras and electronic acoustic leak detectors. You see the live camera footage for yourself.',
      badge: 'High-Tech'
    },
    {
      icon: Sparkles,
      title: 'Spotless Cleanliness & Property Respect',
      desc: 'We wear sanitized shoe covers indoors, lay heavy-duty canvas drop cloths, and thoroughly wipe down your utility areas before completing work.',
      badge: 'Zero Mess'
    },
    {
      icon: Award,
      title: 'Ironclad 1-Year Workmanship Warranty',
      desc: 'We stand firmly behind our master craftsmanship. If a repaired pipe or fitting develops an issue within 12 months, we fix it with zero labor charge.',
      badge: 'Guaranteed'
    }
  ];

  return (
    <section className="py-16 sm:py-20 relative z-10" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            The G F G Contractor Standard
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Montgomery Homeowners & Businesses{' '}
            <span className="text-cyan-400">
              Count on G F G
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Plumbing emergencies can be stressful. We combine old-school trade integrity with modern diagnostic precision to restore your peace of mind immediately.
          </p>
        </div>

        {/* Features Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, i) => {
            const Icon = pt.icon;
            return (
              <div
                key={i}
                className="relative rounded-3xl p-6 sm:p-7 glass-card shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl glass flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full glass text-cyan-300 border border-white/10">
                      {pt.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {pt.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-cyan-400">
                  <Check className="w-4 h-4 text-cyan-400" />
                  <span>Standard on all Montgomery calls</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
