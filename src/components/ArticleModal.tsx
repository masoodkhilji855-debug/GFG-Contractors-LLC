import React from 'react';
import { X, Clock, Calendar, UserCheck, Phone, ArrowRight, BookOpen, Share2 } from 'lucide-react';
import { BlogPost } from '../types';

interface ArticleModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  post,
  onClose,
  onOpenConsultation
}) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl rounded-3xl glass glow-cyan p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white glass transition-colors cursor-pointer z-10"
          aria-label="Close article"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero image in modal */}
        <div className="relative h-56 sm:h-64 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6 overflow-hidden rounded-t-3xl">
          <img
            src={post.imageUrl}
            alt={post.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6">
            <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider glass text-cyan-300 border border-cyan-500/40 inline-block mb-2">
              {post.category}
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight">
              {post.title}
            </h2>
          </div>
        </div>

        {/* Meta tags */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 border-b border-white/10 pb-4 mb-6">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-cyan-400" /> {post.publishDate}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-cyan-400" /> {post.readTime}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1 text-slate-200">
            <UserCheck className="w-3.5 h-3.5 text-cyan-400" /> {post.author}
          </span>
        </div>

        {/* Article Content */}
        <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
          {post.fullContent.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* In-Article Call to Action Box */}
        <div className="mt-8 p-6 rounded-2xl glass border-cyan-500/30 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-white">
              Dealing with this issue right now in Montgomery?
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              G F G Contractor & Plumbing LLC has on-duty plumbers ready for dispatch.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:3343159926"
              className="px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-cyan-500 hover:bg-cyan-400 glow-cyan flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 fill-slate-950" />
              <span>(334) 315-9926</span>
            </a>
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white glass hover:border-cyan-400/50 transition-colors cursor-pointer"
            >
              Book Inspection
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
