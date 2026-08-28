import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck,
  Navigation
} from 'lucide-react';

export const ContactLocationSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: 'Emergency Plumbing Repair',
    message: ''
  });

  const serviceAreas = [
    'West Montgomery (HQ)',
    'Downtown & Capitol',
    'Old Cloverdale & Midtown',
    'Dalraida & Eastchase',
    'Prattville, AL',
    'Millbrook, AL',
    'Wetumpka, AL',
    'Pike Road, AL',
    'Hope Hull & Outer Area'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      alert('Please provide your name and phone number.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 750);
  };

  return (
    <section className="py-16 sm:py-20 relative z-10" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Central Alabama Hub & Service Radius
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Visit Our Montgomery HQ or{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Request On-Site Dispatch
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2.5 leading-relaxed">
            Headquartered on Mobile Hwy in Montgomery. Rapid deployment to residential neighborhoods and commercial facilities across Montgomery, Autauga, and Elmore Counties.
          </p>
        </div>

        {/* 2-Column Split: Info & Map vs Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Location Info, Contact Cards & Map */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            
            {/* Quick Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Phone Card */}
              <div className="p-5 rounded-2xl glass border-cyan-500/30 glow-cyan">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-3">
                  <Phone className="w-5 h-5 fill-cyan-400" />
                </div>
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">24/7 Dispatch Hotline</div>
                <a
                  href="tel:3343159926"
                  className="text-base sm:text-lg font-black text-cyan-400 hover:text-cyan-300 transition-colors block mt-0.5"
                >
                  (334) 315-9926
                </a>
                <div className="text-[11px] text-slate-400 mt-1">One-tap immediate dial</div>
              </div>

              {/* Email Card */}
              <div className="p-5 rounded-2xl glass border-cyan-500/30">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-3">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Contracting Inquiries</div>
                <a
                  href="mailto:gfgcontractor@gmail.com"
                  className="text-xs sm:text-sm font-bold text-cyan-300 hover:text-cyan-200 transition-colors block mt-1 break-all"
                >
                  gfgcontractor@gmail.com
                </a>
                <div className="text-[11px] text-slate-400 mt-1">Responds within 2–4 hours</div>
              </div>

            </div>

            {/* Address & Headquarters Card */}
            <div className="p-5 rounded-2xl glass space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-950 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/30">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      Physical Headquarters & Fleet Dispatch
                    </h3>
                    <p className="text-xs text-slate-300 mt-0.5 font-medium">
                      3045 Mobile Hwy, Montgomery, AL 36108
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Open 24 Hours / 7 Days a Week for Emergency Plumbing
                    </p>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=3045+Mobile+Hwy,+Montgomery,+AL+36108"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-semibold flex items-center gap-1 border border-white/10 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Directions</span>
                </a>
              </div>

              {/* Service Areas Pills */}
              <div className="pt-2 border-t border-white/5">
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-2">
                  Primary Coverage Service Radius:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {serviceAreas.map((area, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-950/70 border border-white/10 text-slate-300"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Embedded Responsive Google Map */}
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl h-64 sm:h-72 relative bg-slate-950">
              <iframe
                title="G F G Contractor & Plumbing LLC Location Map"
                src="https://maps.google.com/maps?q=3045%20Mobile%20Hwy,%20Montgomery,%20AL%2036108&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(115%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-2.5 left-2.5 px-3 py-1.5 rounded-lg bg-slate-950/90 backdrop-blur-md border border-cyan-500/30 text-[11px] font-semibold text-cyan-300 flex items-center gap-1.5 shadow-lg pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                <span>Active Service Base: 3045 Mobile Hwy</span>
              </div>
            </div>

          </div>

          {/* Right Column: Glass Contact Form */}
          <div className="lg:col-span-6 rounded-3xl p-6 sm:p-8 glass shadow-2xl flex flex-col justify-between">
            
            <div>
              <div className="border-b border-white/10 pb-4 mb-5">
                <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-400">
                  Direct Dispatch Form
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Send a Direct Message / Book Service
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Have a question or scheduled contracting inquiry? Fill out the details below.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 flex items-center justify-center mx-auto shadow-lg shadow-cyan-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Message Successfully Sent!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, <strong className="text-cyan-300">{form.name}</strong>. A master plumber or project manager from G F G Contractor & Plumbing LLC will contact you at <strong className="text-white">{form.phone}</strong> shortly.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({
                          name: '',
                          phone: '',
                          email: '',
                          serviceType: 'Emergency Plumbing Repair',
                          message: ''
                        });
                      }}
                      className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Marcus Thornton"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-slate-950/50 border border-white/10 rounded-lg p-3 text-sm text-white placeholder-slate-500 focus:border-cyan-500 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(334) 315-9926"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-slate-950/50 border border-white/10 rounded-lg p-3 text-sm text-white placeholder-slate-500 focus:border-cyan-500 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="name@gmail.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-slate-950/50 border border-white/10 rounded-lg p-3 text-sm text-white placeholder-slate-500 focus:border-cyan-500 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">
                        Service Category
                      </label>
                      <select
                        value={form.serviceType}
                        onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
                        className="w-full bg-slate-950/50 border border-white/10 rounded-lg p-3 text-sm text-white focus:border-cyan-500 outline-none"
                      >
                        <option value="Emergency Plumbing Repair">Emergency Plumbing Repair (24/7)</option>
                        <option value="Drain Cleaning / Hydrojetting">Drain Cleaning / Hydrojetting</option>
                        <option value="Water Heater Service">Water Heater Repair / Replace</option>
                        <option value="Sewer Line Inspection">Sewer Line Inspection / Scope</option>
                        <option value="Commercial Contracting">Commercial Plumbing Contracting</option>
                        <option value="Bathroom Remodeling">Bathroom / Kitchen Remodeling</option>
                        <option value="Other Plumbing Question">Other General Question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">
                      Describe the Issue or Project
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please include details like room location, symptoms (gurgling, low pressure, flooding), or approximate age of the home..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-slate-950/50 border border-white/10 rounded-lg p-3 text-sm text-white placeholder-slate-500 focus:border-cyan-500 outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all duration-200"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message to Dispatch</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 mt-4">
              <span className="flex items-center gap-1 text-cyan-400">
                <ShieldCheck className="w-3.5 h-3.5" /> Licensed in Montgomery, AL
              </span>
              <span>Need immediate assistance? Call <strong className="text-cyan-400 font-bold">(334) 315-9926</strong></span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
