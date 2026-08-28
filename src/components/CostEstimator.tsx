import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Phone, 
  ArrowRight, 
  Sparkles, 
  HelpCircle,
  AlertCircle
} from 'lucide-react';

interface CostEstimatorProps {
  onBookWithEstimate: (details: { issue: string; property: string; urgency: string; estPrice: string }) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onBookWithEstimate }) => {
  const [selectedIssue, setSelectedIssue] = useState<string>('burst-pipe');
  const [propertyType, setPropertyType] = useState<string>('residential');
  const [urgency, setUrgency] = useState<string>('emergency');

  const issuesList = [
    {
      id: 'minor-drip',
      label: 'Minor Faucet Drip / Toilet Flapper',
      baseMin: 125,
      baseMax: 240,
      eta: 'Same-Day / Next Day',
      desc: 'Fixing running toilets, dripping sink cartridges, leaky outdoor sillcocks.'
    },
    {
      id: 'clogged-drain',
      label: 'Clogged Drain / Toilet Backup',
      baseMin: 145,
      baseMax: 320,
      eta: '2–4 Hours / Same Day',
      desc: 'Motorized drain cabling, grease removal, shower & sink blockage clearing.'
    },
    {
      id: 'water-heater',
      label: 'Water Heater Failure / No Hot Water',
      baseMin: 185,
      baseMax: 650,
      eta: '2–3 Hours / Priority',
      desc: 'Thermostat swap, heating elements, pilot assembly, sediment flush (Unit replacement quoted on-site).'
    },
    {
      id: 'burst-pipe',
      label: 'Burst Pipe / Active Flood Emergency',
      baseMin: 225,
      baseMax: 550,
      eta: '30–45 Mins Arrival',
      desc: 'Immediate water shutoff isolation, pipe sectional replacement, pressure testing.'
    },
    {
      id: 'sewer-backup',
      label: 'Main Sewer Line / Tree Root Blockage',
      baseMin: 295,
      baseMax: 850,
      eta: '1–2 Hours Arrival',
      desc: 'High-pressure 4000 PSI hydro-jetting and HD camera diagnostic inspection.'
    }
  ];

  const calculation = useMemo(() => {
    const issue = issuesList.find((i) => i.id === selectedIssue) || issuesList[3];
    let multiplier = 1.0;

    // Property factor
    if (propertyType === 'multifamily') multiplier += 0.15;
    if (propertyType === 'commercial') multiplier += 0.35;

    // Urgency factor
    if (urgency === 'sameday') multiplier += 0.1;
    if (urgency === 'emergency') multiplier += 0.25;

    const min = Math.round(issue.baseMin * multiplier);
    const max = Math.round(issue.baseMax * multiplier);

    let finalEta = issue.eta;
    if (urgency === 'emergency') {
      finalEta = '🚨 30–45 Mins Immediate Dispatch';
    } else if (urgency === 'sameday') {
      finalEta = '⚡ Within 2–4 Hours Today';
    }

    return {
      issueName: issue.label,
      minPrice: min,
      maxPrice: max,
      priceRange: `$${min} – $${max}`,
      eta: finalEta,
      desc: issue.desc
    };
  }, [selectedIssue, propertyType, urgency]);

  const handleProceed = () => {
    onBookWithEstimate({
      issue: calculation.issueName,
      property: propertyType,
      urgency: urgency,
      estPrice: calculation.priceRange
    });
  };

  return (
    <section className="py-16 sm:py-20 relative z-10" id="calculator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            Transparent Pricing Tool
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Instant Repair{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Cost & ETA Estimator
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2.5 leading-relaxed">
            Get an instant upfront ballpark and guaranteed Montgomery response window before our master technician arrives. No hidden travel surcharges.
          </p>
        </div>

        {/* Estimator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Left Column */}
          <div className="lg:col-span-7 glass p-6 sm:p-8 rounded-3xl space-y-6">
            
            {/* Step 1: Issue Selection */}
            <div>
              <label className="text-[10px] uppercase font-bold text-slate-400 tracking-widest flex items-center gap-1.5 mb-3">
                <span>1. Select Your Plumbing Issue:</span>
              </label>
              <div className="space-y-2.5">
                {issuesList.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedIssue(item.id)}
                    className={`w-full p-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex items-center justify-between ${
                      selectedIssue === item.id
                        ? 'bg-cyan-950/60 border-cyan-400 text-white shadow-lg shadow-cyan-950/50 ring-1 ring-cyan-400/50'
                        : 'bg-slate-950/40 border-white/10 text-slate-300 hover:border-slate-600 hover:bg-slate-800/40'
                    }`}
                  >
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-white">
                        {item.label}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {item.desc}
                      </div>
                    </div>
                    <div className="shrink-0 text-right ml-2">
                      <div className="text-xs font-bold text-cyan-300">
                        ${item.baseMin}+
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Property Type */}
            <div>
              <label className="text-[10px] uppercase font-bold text-slate-400 tracking-widest flex items-center gap-1.5 mb-2.5">
                <span>2. Property Type in Montgomery Area:</span>
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'residential', label: 'Single Family Home' },
                  { id: 'multifamily', label: 'Condo / Townhouse' },
                  { id: 'commercial', label: 'Commercial / Facility' },
                ].map((prop) => (
                  <button
                    key={prop.id}
                    type="button"
                    onClick={() => setPropertyType(prop.id)}
                    className={`py-3 px-2 rounded-xl border text-center text-xs font-semibold transition-all cursor-pointer ${
                      propertyType === prop.id
                        ? 'bg-cyan-950/60 border-cyan-400 text-cyan-200 shadow-md ring-1 ring-cyan-400/40'
                        : 'bg-slate-950/40 border-white/10 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    {prop.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Urgency / Dispatch Priority */}
            <div>
              <label className="text-[10px] uppercase font-bold text-slate-400 tracking-widest flex items-center gap-1.5 mb-2.5">
                <span>3. Dispatch Priority:</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'emergency', label: '🚨 Immediate Emergency', sub: '30-45 Min Dispatch' },
                  { id: 'sameday', label: '⚡ Same-Day Service', sub: 'Within 2-4 Hours' },
                  { id: 'standard', label: '📅 Scheduled Booking', sub: 'Flexible Date/Time' },
                ].map((urg) => (
                  <button
                    key={urg.id}
                    type="button"
                    onClick={() => setUrgency(urg.id)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      urgency === urg.id
                        ? 'bg-cyan-950/60 border-cyan-400 text-white shadow-md ring-1 ring-cyan-400/40'
                        : 'bg-slate-950/40 border-white/10 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold text-slate-100">{urg.label}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{urg.sub}</div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Result Output Card Right Column */}
          <div className="lg:col-span-5 glass glow-cyan p-6 sm:p-8 rounded-3xl flex flex-col justify-between space-y-6">
            
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs uppercase font-bold tracking-wider text-cyan-400 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                  Live Estimated Scope
                </span>
                <span className="text-[11px] font-semibold text-cyan-400 bg-cyan-950/80 border border-cyan-500/30 px-2.5 py-0.5 rounded-full">
                  100% Upfront Guarantee
                </span>
              </div>

              {/* Price Display */}
              <div className="py-6 text-center">
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                  Estimated Repair Cost Range
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight my-2">
                  <span className="text-cyan-400">{calculation.priceRange}</span>
                </div>
                <div className="text-xs text-slate-400 max-w-xs mx-auto">
                  Includes diagnostic check, labor by licensed Alabama master plumber, and safe pipe testing.
                </div>
              </div>

              {/* Dispatch ETA block */}
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-white/10 space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-amber-400" />
                    Response Window:
                  </span>
                  <span className="font-bold text-amber-400">
                    {calculation.eta}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    Craftsmanship Warranty:
                  </span>
                  <span className="font-bold text-slate-200">
                    1-Year Parts & Labor
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    Trip/Travel Charge:
                  </span>
                  <span className="font-bold text-cyan-400">
                    $0 With Authorized Repair
                  </span>
                </div>
              </div>

              {/* Included Checklist */}
              <div className="mt-4 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Licensed, bonded & insured in Montgomery & Prattville</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Clean shoe covers worn indoors • Zero mess left behind</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <button
                onClick={handleProceed}
                className="w-full py-4 px-6 rounded-xl font-bold text-sm sm:text-base text-slate-950 bg-cyan-500 hover:bg-cyan-400 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all duration-200"
                id="estimator-lock-quote-btn"
              >
                <span>Lock In Estimate & Dispatch Tech</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:3343159926"
                className="w-full py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm text-slate-200 bg-slate-950/80 hover:bg-slate-900 border border-white/15 flex items-center justify-center gap-2 transition-colors"
                id="estimator-call-btn"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Or Call Direct: (334) 315-9926</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
