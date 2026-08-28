import React, { useState } from 'react';
import { Star, ShieldCheck, CheckCircle, ThumbsUp, MessageSquare, Quote } from 'lucide-react';
import { REVIEWS_DATA } from '../data/reviewsData';

export const ReviewsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Reviews (9+)' },
    { id: 'Emergency Leak Repair', label: 'Emergency Leaks' },
    { id: 'Water Heater Replacement', label: 'Water Heaters' },
    { id: 'Drain Cleaning', label: 'Drain & Jetting' },
    { id: 'Commercial Plumbing', label: 'Commercial' },
  ];

  const filteredReviews = filter === 'all' 
    ? REVIEWS_DATA 
    : REVIEWS_DATA.filter((r) => r.serviceCategory.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section className="py-16 sm:py-20 relative z-10" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Google Rating Summary Card */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
          
          <div className="text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              Verified Customer Satisfaction
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Trusted by Homeowners Across{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-cyan-300">
                Montgomery & Beyond
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2">
              See genuine feedback from West Montgomery, Cloverdale, Dalraida, and Prattville neighbors who rely on our 24/7 plumbers.
            </p>
          </div>

          {/* Aggregate Rating Badge Card */}
          <div className="shrink-0 p-5 rounded-2xl glass border-amber-500/30 glow-amber flex items-center gap-5">
            <div className="text-center">
              <div className="text-4xl font-black text-amber-400">4.8</div>
              <div className="flex text-amber-400 text-sm justify-center my-0.5">
                {'★★★★★'}
              </div>
              <div className="text-[11px] font-semibold text-slate-400">
                Google Verified Profile
              </div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="space-y-1 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 font-bold text-white">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>9+ Verified Local Reviews</span>
              </div>
              <div className="text-slate-400">
                100% Recommendation Rate
              </div>
              <div className="text-[11px] text-cyan-400">
                Based on Montgomery Dispatch Records
              </div>
            </div>
          </div>

        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filter === cat.id
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/30'
                  : 'glass text-slate-300 hover:text-white hover:border-cyan-500/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="relative rounded-3xl p-6 glass-card hover:border-cyan-400/30 shadow-xl shadow-slate-950/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Reviewer Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'}
                      alt={rev.author}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full object-cover border border-cyan-500/40"
                      loading="lazy"
                    />
                    <div>
                      <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                        {rev.author}
                        {rev.verified && (
                          <span title="Verified Local Customer">
                            <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                          </span>
                        )}
                      </h3>
                      <p className="text-[11px] text-cyan-300 font-medium">
                        {rev.location}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] text-slate-400 shrink-0">
                    {rev.date}
                  </span>
                </div>

                {/* Star Rating & Category */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400 text-xs">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-white/5">
                    {rev.serviceCategory}
                  </span>
                </div>

                {/* Comment Text */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic relative">
                  "{rev.comment}"
                </p>
              </div>

              {/* Verified Badge footer */}
              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" /> Verified Montgomery Service
                </span>
                <span className="flex items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors">
                  <ThumbsUp className="w-3 h-3" /> Helpful
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
