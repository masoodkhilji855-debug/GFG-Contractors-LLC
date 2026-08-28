import React, { useState } from 'react';
import { Droplets, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation?: () => void;
  onOpenQuote?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
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
    <header className="sticky top-0 z-40 w-full glass-header transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Tagline */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none shrink-0" id="brand-logo-link">
            <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:bg-cyan-400 transition-colors duration-300">
              <Droplets className="w-6 h-6 text-slate-950 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="font-extrabold text-lg sm:text-xl leading-none tracking-tight text-white">
                  GFG <span className="text-cyan-400">CONTRACTOR</span>
                </h1>
              </div>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold mt-0.5 whitespace-nowrap">
                & Plumbing LLC • Montgomery, AL
              </p>
            </div>
          </a>

          {/* Desktop Nav Links - Clear-cut straightly aligned single horizontal sequence */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-9 text-sm font-semibold tracking-wide text-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-cyan-400 transition-colors py-2 whitespace-nowrap text-[13px] lg:text-sm relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-300 hover:text-white glass border border-white/15 focus:outline-none cursor-pointer"
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
        <div className="md:hidden border-t border-white/10 glass px-4 pt-4 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:text-cyan-400 hover:bg-white/5 transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
