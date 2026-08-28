import React, { useState } from 'react';
import { Phone, Droplets, Menu, X, ShieldCheck, CalendarCheck, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Cost Estimator', href: '#calculator' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Guides', href: '#blog' },
    { label: 'Location & Service Area', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full glass transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Tagline */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none" id="brand-logo-link">
            <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:bg-cyan-400 transition-colors duration-300">
              <Droplets className="w-6 h-6 text-slate-950 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="font-extrabold text-lg sm:text-xl leading-none tracking-tight text-white">
                  GFG <span className="text-cyan-400">CONTRACTOR</span>
                </h1>
              </div>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold mt-0.5">
                & Plumbing LLC • Montgomery, AL
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-cyan-400 transition-colors py-1 relative"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Action Group */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Free Consultation Standout Button */}
            <button
              onClick={onOpenConsultation}
              id="nav-free-consultation-btn"
              className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 hover:border-cyan-400 shadow-md shadow-cyan-950/50 transition-all duration-300 cursor-pointer flex items-center gap-1.5"
            >
              <CalendarCheck className="w-4 h-4 text-cyan-400" />
              Free Consultation
            </button>

            {/* Direct Phone Dispatch Button */}
            <a
              href="tel:3343159926"
              id="nav-emergency-call-btn"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-slate-950 bg-cyan-500 hover:bg-cyan-400 shadow-lg shadow-cyan-500/30 transition-all duration-200"
            >
              <Phone className="w-4 h-4 fill-slate-950 text-slate-950" />
              <span className="hidden xl:inline">Dispatch:</span>
              <span>(334) 315-9926</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenConsultation}
              className="sm:hidden px-2.5 py-1.5 rounded-lg text-xs font-semibold text-cyan-300 border border-cyan-500/30 bg-cyan-950/40"
              id="mobile-consult-btn-quick"
            >
              Free Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/60 border border-white/10 focus:outline-none"
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-2xl px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-900/80 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 border-t border-slate-800 flex flex-col gap-3">
            {/* Stand-out Free Consultation Button in mobile menu */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 px-4 rounded-xl font-bold text-center text-white bg-gradient-to-r from-cyan-600 to-blue-600 border border-cyan-400/40 shadow-lg shadow-cyan-900/40 flex items-center justify-center gap-2 cursor-pointer"
              id="mobile-drawer-consultation-btn"
            >
              <CalendarCheck className="w-4 h-4 text-cyan-200" />
              Claim Free Consultation & Estimate
            </button>

            <a
              href="tel:3343159926"
              className="w-full py-3 px-4 rounded-xl font-extrabold text-center text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2"
              id="mobile-drawer-call-btn"
            >
              <Phone className="w-4 h-4 fill-slate-950" />
              Call 24/7 Dispatch: (334) 315-9926
            </a>

            <div className="flex items-center justify-center gap-4 text-xs text-slate-400 pt-2">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> AL Licensed & Insured
              </span>
              <span>•</span>
              <span>HQ: 3045 Mobile Hwy</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
