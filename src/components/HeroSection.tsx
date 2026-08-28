import React, { useState } from 'react';
import { 
  Phone, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft, 
  AlertTriangle, 
  Flame, 
  Wrench, 
  Droplet, 
  Send,
  MapPin,
  CalendarCheck
} from 'lucide-react';
import { QuoteRequestData } from '../types';

interface HeroSectionProps {
  onOpenConsultation: () => void;
  onSubmittedQuote: (data: QuoteRequestData) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onOpenConsultation, 
  onSubmittedQuote 
}) => {
  // Multi-step quote card state
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const [formData, setFormData] = useState<QuoteRequestData>({
    serviceType: 'Emergency Leak / Burst Pipe',
    urgency: 'Immediate Emergency (Flooding)',
    propertyType: 'Residential Home',
    address: '',
    zipCode: '36108',
    name: '',
    phone: '',
    email: '',
    notes: ''
  });

  const serviceOptions = [
    { label: 'Burst Pipe / Active Leak', icon: Wrench, urgent: true },
    { label: 'Clogged Drain / Hydro-Jet', icon: Droplet, urgent: false },
    { label: 'Water Heater Malfunction', icon: Flame, urgent: true },
    { label: 'Sewer Line Backup', icon: AlertTriangle, urgent: true },
    { label: 'Commercial Plumbing', icon: Sparkles, urgent: false },
    { label: 'Fixture / Remodel Upgrade', icon: CheckCircle2, urgent: false },
  ];

  const urgencyOptions = [
    { 
      level: 'Immediate Emergency (Flooding)', 
      eta: '30–45 Mins Arrival', 
      desc: 'Active water leak, main sewer overflow, or structural risk.',
      badge: '🚨 Critical Priority'
    },
    { 
      level: 'Today (Within 2–4 Hours)', 
      eta: 'Same-Day Service', 
      desc: 'No hot water, slow draining, running toilets, faucet leaks.',
      badge: '⚡ Same Day'
    },
    { 
      level: 'Scheduled Routine Inspection', 
      eta: 'Choose Date & Time', 
      desc: 'Remodeling, fixture upgrades, code inspection, non-urgent repair.',
      badge: '📅 Standard Booking'
    }
  ];

  const handleNextStep = () => {
    if (step === 3) {
      if (!formData.address.trim()) {
        alert('Please enter your street address or neighborhood in the Montgomery area.');
        return;
      }
    }
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const handlePrevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Please provide your name and phone number so our dispatch manager can reach you.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      onSubmittedQuote(formData);
    }, 900);
  };

  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden" id="hero">
      {/* Dynamic Background Mesh Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle background photo overlay */}
        <div 
          className="absolute inset-0 opacity-15 bg-cover bg-center mix-blend-luminosity scale-105 filter blur-xs"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/8486972/pexels-photo-8486972.jpeg?auto=compress&cs=tinysrgb&w=1200')`
          }}
        />
        {/* Cyan radial glow */}
        <div className="absolute -top-32 -left-20 w-[550px] h-[550px] bg-cyan-600/15 rounded-full blur-3xl animate-pulse-glow" />
        {/* Blue radial glow */}
        <div className="absolute top-1/3 -right-20 w-[600px] h-[600px] bg-blue-700/15 rounded-full blur-3xl" />
        {/* Subtle emergency amber glow */}
        <div className="absolute -bottom-20 left-1/3 w-[450px] h-[450px] bg-amber-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: High Conversion Authority Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-2">
              <span className="text-cyan-400 text-xs font-bold">⭐ 4.8 Rating</span>
              <span className="w-1 h-1 rounded-full bg-slate-500"></span>
              <span className="text-slate-300 text-xs font-medium">9+ Verified Montgomery Reviews</span>
            </div>

            {/* Main Headline with local prominence */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.1]">
              Montgomery’s <br />
              <span className="text-cyan-400">Trusted 24/7</span> <br />
              Plumbing Experts
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-400 max-w-xl font-normal leading-relaxed">
              High-urgency emergency repairs and master plumbing services. 
              Same-day dispatch across West Montgomery & greater metro area with upfront flat-rate pricing.
            </p>

            {/* 3 Core Value Checklist items */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="glass p-3 rounded-xl flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-200">
                  100% Licensed & Insured
                </span>
              </div>
              <div className="glass p-3 rounded-xl flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-200">
                  30–45 Min Arrival Target
                </span>
              </div>
              <div className="glass p-3 rounded-xl flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-200">
                  Fair Upfront Rates
                </span>
              </div>
            </div>

            {/* Primary Dual Call To Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              {/* Standout White Consultation Button */}
              <button
                onClick={onOpenConsultation}
                id="hero-free-consultation-btn"
                className="px-8 py-4 bg-white text-slate-950 font-bold rounded-xl shadow-xl hover:bg-cyan-50 hover:shadow-white/20 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 text-base"
              >
                <CalendarCheck className="w-5 h-5 text-cyan-600" />
                <span>Get Free Consultation</span>
              </button>

              {/* Direct Phone Dispatch Button */}
              <a
                href="tel:3343159926"
                id="hero-emergency-call-btn"
                className="flex items-center justify-center gap-3 px-7 py-4 rounded-xl font-bold text-base text-slate-950 bg-cyan-500 hover:bg-cyan-400 shadow-lg shadow-cyan-500/30 transition-all duration-200"
              >
                <Phone className="w-5 h-5 fill-slate-950 text-slate-950" />
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold text-slate-900/80 tracking-wider leading-none">
                    24/7 Dispatch
                  </div>
                  <div className="text-base font-extrabold text-slate-950">
                    (334) 315-9926
                  </div>
                </div>
              </a>
            </div>

            {/* Local HQ Service Radius note */}
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>
                Montgomery HQ: <strong className="text-slate-200">3045 Mobile Hwy, Montgomery, AL 36108</strong>
              </span>
            </div>

          </div>

          {/* Right Column: Multi-Step Interactive Quote Request Glass Card */}
          <div className="lg:col-span-5" id="instant-quote-card">
            <div className="glass glow-cyan p-6 sm:p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-cyan-500/10 blur-[80px] pointer-events-none"></div>
              
              {/* Card Header */}
              <div className="border-b border-white/10 pb-4 mb-5 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                      Priority Dispatch Desk
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-cyan-400">
                    Step {step} of 4
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mt-1">
                  Instant Quote Request
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
                  Fill out for immediate emergency dispatch in Montgomery.
                </p>

                {/* Progress Bar */}
                <div className="w-full bg-slate-950/60 h-1.5 rounded-full mt-3 overflow-hidden border border-white/5">
                  <div 
                    className="bg-cyan-400 h-full rounded-full transition-all duration-300 shadow-sm shadow-cyan-400"
                    style={{ width: `${(step / 4) * 100}%` }}
                  />
                </div>
              </div>

              {/* Form Content Steps */}
              {isSuccess ? (
                <div className="py-6 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 flex items-center justify-center mx-auto shadow-lg shadow-cyan-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    Quote Request Dispatched!
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed px-2">
                    Thank you, <strong className="text-cyan-300">{formData.name || 'valued customer'}</strong>. 
                    Our Montgomery dispatch coordinator has received your <strong className="text-white">{formData.serviceType}</strong> request for <strong className="text-white">{formData.zipCode}</strong>.
                  </p>
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-cyan-500/30 text-left text-xs space-y-1">
                    <div className="text-slate-400">Estimated Dispatch Window:</div>
                    <div className="text-sm font-bold text-amber-400">
                      {formData.urgency.includes('Immediate') ? '🚨 30–45 Mins Immediate Dispatch' : '⚡ Within 2–3 Hours Today'}
                    </div>
                    <div className="text-[11px] text-slate-400 pt-1">
                      For instant phone confirmation, call: <strong className="text-cyan-300">(334) 315-9926</strong>
                    </div>
                  </div>
                  <div className="pt-2 flex flex-col sm:flex-row gap-2">
                    <a
                      href="tel:3343159926"
                      className="w-full py-2.5 px-4 rounded-xl font-bold text-xs text-slate-950 bg-amber-400 hover:bg-amber-300 flex items-center justify-center gap-2"
                    >
                      <Phone className="w-3.5 h-3.5 fill-slate-950" /> Call Dispatch Manager
                    </a>
                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setStep(1);
                      }}
                      className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800"
                    >
                      Submit Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* STEP 1: Select Service Type */}
                  {step === 1 && (
                    <div className="space-y-3 animate-in fade-in duration-200">
                      <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                        Service Type
                      </label>
                      <div className="grid grid-cols-2 gap-2.5">
                        {serviceOptions.map((opt) => {
                          const IconComp = opt.icon;
                          const isSelected = formData.serviceType === opt.label;
                          return (
                            <button
                              type="button"
                              key={opt.label}
                              onClick={() => setFormData({ ...formData, serviceType: opt.label })}
                              className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all duration-200 cursor-pointer ${
                                isSelected
                                  ? 'bg-cyan-950/60 border-cyan-400 text-white shadow-md shadow-cyan-900/40 ring-1 ring-cyan-400'
                                  : 'bg-slate-950/50 border-white/10 text-slate-300 hover:border-slate-600 hover:bg-slate-800/40'
                              }`}
                            >
                              <div className="flex items-center justify-between w-full">
                                <IconComp className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-slate-400'}`} />
                                {opt.urgent && (
                                  <span className="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded bg-red-950/80 text-red-400 border border-red-800/40">
                                    24/7
                                  </span>
                                )}
                              </div>
                              <span className="text-xs font-semibold mt-2 leading-tight">
                                {opt.label}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* STEP 2: Urgency Level */}
                  {step === 2 && (
                    <div className="space-y-3 animate-in fade-in duration-200">
                      <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                        Dispatch Urgency
                      </label>
                      <div className="space-y-2.5">
                        {urgencyOptions.map((opt) => {
                          const isSelected = formData.urgency === opt.level;
                          return (
                            <button
                              type="button"
                              key={opt.level}
                              onClick={() => setFormData({ ...formData, urgency: opt.level })}
                              className={`w-full p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                                isSelected
                                  ? 'bg-cyan-950/60 border-cyan-400 text-white shadow-md shadow-cyan-900/40 ring-1 ring-cyan-400'
                                  : 'bg-slate-950/50 border-white/10 text-slate-300 hover:border-slate-600 hover:bg-slate-800/40'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-slate-100">{opt.badge}</span>
                                <span className="text-[11px] font-semibold text-cyan-400 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-500/20">
                                  ETA: {opt.eta}
                                </span>
                              </div>
                              <p className="text-xs text-slate-300 mt-1 font-medium">{opt.desc}</p>
                            </button>
                          );
                        })}
                      </div>

                      <div className="pt-2">
                        <label className="block text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-1.5">
                          Property Classification:
                        </label>
                        <div className="grid grid-cols-3 gap-2 text-xs">
                          {['Residential Home', 'Commercial / Biz', 'Rental / Condo'].map((type) => (
                            <button
                              type="button"
                              key={type}
                              onClick={() => setFormData({ ...formData, propertyType: type })}
                              className={`py-2 px-1 rounded-lg border text-center font-medium transition-all ${
                                formData.propertyType === type
                                  ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200'
                                  : 'bg-slate-950/40 border-white/10 text-slate-400 hover:text-slate-200'
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: Location & Details */}
                  {step === 3 && (
                    <div className="space-y-3 animate-in fade-in duration-200">
                      <div>
                        <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">
                          Service Street Address (Montgomery AL Area):
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. 1245 Mobile Hwy or Cloverdale Rd"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          className="w-full bg-slate-950/50 border border-white/10 rounded-lg p-3 text-sm text-white focus:border-cyan-500 outline-none transition-colors"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-2.5">
                        <div>
                          <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">
                            Zip Code:
                          </label>
                          <select
                            value={formData.zipCode}
                            onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                            className="w-full bg-slate-950/50 border border-white/10 rounded-lg p-3 text-sm text-white focus:border-cyan-500 outline-none"
                          >
                            <option value="36108">36108 (West Montgomery / HQ)</option>
                            <option value="36104">36104 (Downtown / Capitol)</option>
                            <option value="36106">36106 (Cloverdale / Midtown)</option>
                            <option value="36109">36109 (Dalraida)</option>
                            <option value="36111">36111 (Country Club / East)</option>
                            <option value="36117">36117 (Eastchase / Outer)</option>
                            <option value="36066">36066 (Prattville)</option>
                            <option value="36054">36054 (Millbrook)</option>
                            <option value="Other">Other Montgomery County Area</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">
                            Nearest Cross Street:
                          </label>
                          <input
                            type="text"
                            placeholder="Optional landmark"
                            value={formData.notes}
                            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                            className="w-full bg-slate-950/50 border border-white/10 rounded-lg p-3 text-sm text-white placeholder-slate-500 focus:border-cyan-500 outline-none"
                          />
                        </div>
                      </div>

                      <div className="p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-500/20 text-[11px] text-cyan-300 flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span>Our fleet dispatches directly from 3045 Mobile Hwy for minimal drive-times.</span>
                      </div>
                    </div>
                  )}

                  {/* STEP 4: Contact & Dispatch Confirmation */}
                  {step === 4 && (
                    <div className="space-y-3 animate-in fade-in duration-200">
                      <div>
                        <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">
                          Full Name:
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-slate-950/50 border border-white/10 rounded-lg p-3 text-sm text-white placeholder-slate-500 focus:border-cyan-500 outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">
                          Phone Number:
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="(334) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-slate-950/50 border border-white/10 rounded-lg p-3 text-sm text-white placeholder-slate-500 focus:border-cyan-500 outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">
                          Email (For Estimate Copy):
                        </label>
                        <input
                          type="email"
                          placeholder="name@gmail.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-slate-950/50 border border-white/10 rounded-lg p-3 text-sm text-white placeholder-slate-500 focus:border-cyan-500 outline-none"
                        />
                      </div>

                      <div className="p-3 rounded-xl bg-slate-950/80 border border-white/10 text-xs space-y-1">
                        <div className="flex justify-between text-slate-400">
                          <span>Requested Service:</span>
                          <span className="text-cyan-300 font-semibold">{formData.serviceType}</span>
                        </div>
                        <div className="flex justify-between text-slate-400">
                          <span>Dispatch Priority:</span>
                          <span className="text-amber-400 font-semibold">{formData.urgency}</span>
                        </div>
                        <div className="flex justify-between text-slate-400">
                          <span>Service Zip:</span>
                          <span className="text-white font-medium">{formData.zipCode}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Card Navigation Buttons */}
                  <div className="pt-2 flex items-center justify-between gap-3">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" /> Back
                      </button>
                    ) : (
                      <div className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">
                        🔒 SSL Encrypted
                      </div>
                    )}

                    {step < 4 ? (
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="ml-auto py-3 px-6 bg-cyan-500 text-slate-950 font-bold rounded-xl hover:bg-cyan-400 shadow-lg shadow-cyan-500/20 transition-all cursor-pointer flex items-center gap-1.5 text-xs sm:text-sm"
                      >
                        <span>Continue</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-cyan-500 text-slate-950 font-bold rounded-xl mt-2 hover:bg-cyan-400 shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Submit Emergency Request</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
