import React from 'react';
import { BookOpen, Clock, Calendar, ArrowRight, UserCheck } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogData';
import { BlogPost } from '../types';

interface BlogSectionProps {
  onReadArticle: (post: BlogPost) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onReadArticle }) => {
  return (
    <section className="py-16 sm:py-20 relative z-10 bg-slate-950/30" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            Homeowner & Facility Knowledge Base
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Plumbing Advice & Guides for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Alabama Homeowners
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2.5 leading-relaxed">
            Written by certified master plumbers to help you prevent costly water damage, understand equipment options, and maintain healthy pipes.
          </p>
        </div>

        {/* 3 Featured Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="group relative rounded-3xl overflow-hidden glass-card hover:border-cyan-400/40 shadow-xl shadow-slate-950/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image */}
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider glass text-cyan-300 border border-cyan-500/40">
                    {post.category}
                  </span>
                </div>

                {/* Read time */}
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg text-[11px] font-semibold glass text-slate-300 border border-white/10 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-cyan-400" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{post.publishDate}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-slate-300">
                      <UserCheck className="w-3 h-3 text-cyan-400" /> {post.author}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <button
                    onClick={() => onReadArticle(post)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-cyan-300 bg-cyan-950/40 hover:bg-cyan-500 hover:text-slate-950 border border-cyan-500/30 flex items-center justify-center gap-1.5 transition-all cursor-pointer group-hover:border-cyan-400"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
