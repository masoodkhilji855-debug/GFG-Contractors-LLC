import React, { useState } from 'react';
import { X, CalendarCheck, Phone, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import { ConsultationFormData } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialService = 'General Consultation'
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    name: '',
    phone: '',
    email: '',
    preferredTime: 'Morning (8am - 12pm)',
    projectType: initialService,
    address: '',
    description: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl rounded-3xl glass glow-cyan p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        id="consultation-modal-dialog"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white glass transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full glass border border-cyan-400 text-cyan-300 flex items-center justify-center mx-auto shadow-lg shadow-cyan-500/25">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              Free Consultation Confirmed!
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed px-4">
              Thank you, <strong className="text-cyan-300">{formData.name}</strong>. 
              Our Montgomery master plumber will review your consultation request for <strong className="text-white">{formData.projectType}</strong> and call you at <strong className="text-white">{formData.phone}</strong> to confirm your slot ({formData.preferredTime}).
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:3343159926"
                className="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-cyan-500 hover:bg-cyan-400 glow-cyan flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 fill-slate-950" /> Call Dispatch Manager Direct
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 hover:text-white glass"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="border-b border-white/10 pb-4 mb-5">
              <div className="flex items-center gap-2 text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-1">
                <CalendarCheck className="w-4 h-4" />
                <span>Zero Obligation • 100% Free Estimate</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Book a Free Plumbing Consultation
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Speak directly with an Alabama master plumber from G F G Contractor & Plumbing LLC.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/[0.05] border border-white/12 rounded-lg p-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 outline-none"
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
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/[0.05] border border-white/12 rounded-lg p-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">
                    Project / Problem Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-white/[0.05] border border-white/12 rounded-lg p-3 text-sm text-white focus:border-cyan-400 outline-none"
                  >
                    <option value="Emergency Leak / Burst Pipe" className="bg-slate-900 text-white">Emergency Leak / Burst Pipe</option>
                    <option value="Water Heater Replacement / Upgrade" className="bg-slate-900 text-white">Water Heater Replacement / Upgrade</option>
                    <option value="Drain Cleaning / Hydrojetting" className="bg-slate-900 text-white">Drain Cleaning / Hydrojetting</option>
                    <option value="Sewer Line Video Inspection" className="bg-slate-900 text-white">Sewer Line Video Inspection</option>
                    <option value="Whole Home Repipe (PEX/Copper)" className="bg-slate-900 text-white">Whole Home Repipe (PEX/Copper)</option>
                    <option value="Bathroom / Kitchen Remodel" className="bg-slate-900 text-white">Bathroom / Kitchen Remodel</option>
                    <option value="Commercial Plumbing & Buildout" className="bg-slate-900 text-white">Commercial Plumbing & Buildout</option>
                    <option value="General Inspection" className="bg-slate-900 text-white">General Inspection</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">
                    Preferred Time Window
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full bg-white/[0.05] border border-white/12 rounded-lg p-3 text-sm text-white focus:border-cyan-400 outline-none"
                  >
                    <option value="Immediate Emergency (Today)" className="bg-slate-900 text-white">Immediate Emergency (Today)</option>
                    <option value="Morning (8am - 12pm)" className="bg-slate-900 text-white">Morning (8am - 12pm)</option>
                    <option value="Afternoon (12pm - 4pm)" className="bg-slate-900 text-white">Afternoon (12pm - 4pm)</option>
                    <option value="Evening (4pm - 7pm)" className="bg-slate-900 text-white">Evening (4pm - 7pm)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">
                  Montgomery Area Address / Neighborhood
                </label>
                <input
                  type="text"
                  placeholder="e.g. West Montgomery, Cloverdale, Prattville, etc."
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full bg-white/[0.05] border border-white/12 rounded-lg p-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">
                  Brief Project Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us what is happening or what you want to upgrade..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-white/[0.05] border border-white/12 rounded-lg p-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 outline-none resize-none"
                />
              </div>

              <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row gap-3 items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-cyan-400">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>No obligation, upfront written quotes</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-cyan-500 hover:bg-cyan-400 shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
                  id="submit-consultation-btn"
                >
                  {isSubmitting ? 'Booking Slot...' : 'Confirm Free Consultation'}
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
