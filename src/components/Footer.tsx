import React from 'react';
import { Droplets, Phone, Mail, MapPin, ShieldCheck, Clock, Heart } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 border-t border-white/10 text-slate-400 text-xs pt-16 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1 & 2: Brand & Local Credentials */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-0.5 shadow-lg shadow-cyan-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Droplets className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <div>
                <span className="font-extrabold text-lg text-white tracking-tight">
                  G F G Contractor & Plumbing LLC
                </span>
                <p className="text-[11px] text-cyan-400 font-semibold">
                  Montgomery, Alabama • Lic # AL-PL-MASTER
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              West Montgomery's premier 24/7 emergency plumbing and general repair contractor. 
              Dedicated to upfront flat-rate pricing, 30–45 minute priority emergency dispatch, and lifetime trade integrity.
            </p>

            <div className="p-3.5 rounded-xl glass space-y-1.5 max-w-sm">
              <div className="flex items-center gap-2 text-slate-200 font-semibold text-xs">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>100% Licensed, Bonded & Insured in AL</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-[11px]">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Operating Hours: 24/7 Emergency Line Open</span>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold text-slate-400 tracking-widest">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-cyan-400 transition-colors">Home & Dispatch</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">Plumbing Services</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-cyan-400 transition-colors">Why Choose GFG</a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-cyan-400 transition-colors">Repair Cost Estimator</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-cyan-400 transition-colors">Customer Reviews (4.8★)</a>
              </li>
              <li>
                <a href="#blog" className="hover:text-cyan-400 transition-colors">Emergency Guides</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">Location & Map</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Core Services */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold text-slate-400 tracking-widest">
              Emergency Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">Burst Pipe Repair</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">Sewer Hydro-Jetting</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">Water Heater Repair</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">Slab Leak Detection</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">Commercial Contracting</a>
              </li>
              <li>
                <button
                  onClick={onOpenConsultation}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold underline underline-offset-2 text-left cursor-pointer"
                >
                  Book Free Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact & Location HQ */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold text-slate-400 tracking-widest">
              Contact & Dispatch
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>3045 Mobile Hwy, Montgomery, AL 36108</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="tel:3343159926" className="text-cyan-400 hover:text-cyan-300 font-bold">
                  (334) 315-9926
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="mailto:gfgcontractor@gmail.com" className="hover:text-white break-all">
                  gfgcontractor@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="tel:3343159926"
                className="w-full py-2.5 px-3 rounded-xl font-bold text-xs text-slate-950 bg-cyan-500 hover:bg-cyan-400 flex items-center justify-center gap-1.5 transition-colors shadow-lg shadow-cyan-500/20"
              >
                <Phone className="w-3.5 h-3.5 fill-slate-950" /> Call Dispatch Desk
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            © {currentYear} G F G Contractor & Plumbing LLC. All rights reserved. Montgomery, Alabama.
          </p>
          <div className="flex items-center gap-4">
            <span>Schema.org Local Plumbing Service</span>
            <span>•</span>
            <span>Privacy & Terms</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
