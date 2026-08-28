import React, { useState } from 'react';
import { TopNotificationBar } from './components/TopNotificationBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustMetrics } from './components/TrustMetrics';
import { ServicesGrid } from './components/ServicesGrid';
import { CostEstimator } from './components/CostEstimator';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ReviewsSection } from './components/ReviewsSection';
import { BlogSection } from './components/BlogSection';
import { ContactLocationSection } from './components/ContactLocationSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { ConsultationModal } from './components/ConsultationModal';
import { ArticleModal } from './components/ArticleModal';
import { ServiceItem, BlogPost, QuoteRequestData } from './types';

export default function App() {
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);
  const [consultationService, setConsultationService] = useState<string>('General Plumbing Consultation');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleOpenConsultation = (serviceName?: string) => {
    if (serviceName) {
      setConsultationService(serviceName);
    }
    setIsConsultModalOpen(true);
  };

  const handleScrollToQuote = () => {
    const quoteEl = document.getElementById('instant-quote-card');
    if (quoteEl) {
      quoteEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    handleOpenConsultation(service.title);
  };

  const handleBookWithEstimate = (details: { issue: string; property: string; urgency: string; estPrice: string }) => {
    handleOpenConsultation(`${details.issue} (${details.estPrice})`);
  };

  const handleQuoteSubmitted = (data: QuoteRequestData) => {
    showToast(`Dispatch request for ${data.serviceType} received! Priority queue assigned.`);
  };

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 flex flex-col font-sans relative overflow-x-hidden selection:bg-cyan-500 selection:text-slate-950">
      {/* Sophisticated Dark Ambient Radial Mesh Background */}
      <div className="fixed inset-0 bg-gradient-sophisticated pointer-events-none z-0"></div>

      {/* 24/7 Top Notification Bar */}
      <TopNotificationBar onOpenQuote={handleScrollToQuote} />

      {/* Sticky Glassmorphism Header */}
      <Navbar 
        onOpenConsultation={() => handleOpenConsultation('Free Consultation')} 
        onOpenQuote={handleScrollToQuote}
      />

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10">
        
        {/* Split Hero Section with Instant Multi-Step Dispatch Card */}
        <HeroSection 
          onOpenConsultation={() => handleOpenConsultation('Emergency Dispatch & Quote')}
          onSubmittedQuote={handleQuoteSubmitted}
        />

        {/* 4-Card Trust & Credibility Metrics Row */}
        <TrustMetrics />

        {/* 6 Core Glassmorphic Services Grid */}
        <ServicesGrid 
          onSelectService={handleSelectService}
          onOpenConsultation={() => handleOpenConsultation('Custom Plumbing Project')}
        />

        {/* Interactive Repair Cost & ETA Estimator */}
        <CostEstimator 
          onBookWithEstimate={handleBookWithEstimate}
        />

        {/* Why Montgomery Homeowners Choose G F G */}
        <WhyChooseUs 
          onOpenConsultation={() => handleOpenConsultation('Standard Maintenance Check')}
        />

        {/* 4.8★ Customer Reviews Showcase */}
        <ReviewsSection />

        {/* Educational Resource & Emergency Blog Guides */}
        <BlogSection 
          onReadArticle={(post) => setSelectedArticle(post)}
        />

        {/* Location HQ (3045 Mobile Hwy) & Contact Section with Google Map */}
        <ContactLocationSection />

      </main>

      {/* Glassmorphic Footer */}
      <Footer 
        onOpenConsultation={() => handleOpenConsultation('Footer Consultation')}
      />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileStickyBar 
        onOpenConsultation={() => handleOpenConsultation('Mobile Quick Consultation')}
        onOpenQuote={handleScrollToQuote}
      />

      {/* Standout Free Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultModalOpen}
        onClose={() => setIsConsultModalOpen(false)}
        initialService={consultationService}
      />

      {/* Interactive Blog Article Reader Modal */}
      <ArticleModal
        post={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenConsultation={() => handleOpenConsultation(selectedArticle?.title)}
      />

      {/* Global Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 p-4 rounded-2xl bg-slate-900/95 border border-cyan-400 text-xs sm:text-sm text-white shadow-2xl shadow-cyan-950/80 backdrop-blur-xl animate-in slide-in-from-bottom-5 duration-300 max-w-sm flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></div>
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
