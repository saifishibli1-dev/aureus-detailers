import React from 'react';
import { PageId } from '../types';
import { ArrowRight, Calendar, ShieldCheck, Sparkles, Award } from 'lucide-react';
import { blackLamboSunsetMansion } from '../assets/images';

interface LuxuryHeroProps {
  onNavigate: (page: PageId) => void;
}

export const LuxuryHero: React.FC<LuxuryHeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative w-full min-h-[85vh] lg:h-[88vh] max-h-[960px] bg-[#070707] text-[#F3F1EC] overflow-hidden flex items-center border-b border-[#222222]">
      {/* ========================================================================= */}
      {/* 1. CINEMATIC BACKGROUND PHOTOGRAPHY WITH SEAMLESS BLEND                   */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 z-0">
        <img
          src={blackLamboSunsetMansion}
          alt="Gleaming obsidian black luxury supercar parked at sunset architectural villa"
          className="w-full h-full object-cover object-right sm:object-[75%_center] lg:object-[80%_center] filter brightness-95 contrast-105 scale-100 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />

        {/* Directional Cinematic Gradient (Desktop: heavier on the left for maximum text contrast) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070707] via-[#070707]/90 via-35% md:via-45% to-transparent pointer-events-none" />

        {/* Mobile / Tablet Vertical Atmosphere Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-black/50 pointer-events-none sm:hidden" />

        {/* Seamless bottom transition to the next section (#0D0D0D) */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#0D0D0D] to-transparent pointer-events-none" />

        {/* Subtle top shade under navbar */}
        <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-[#070707]/80 to-transparent pointer-events-none" />
      </div>

      {/* ========================================================================= */}
      {/* 2. EDITORIAL CONTENT & CREDIBILITY METRICS (LEFT-ALIGNED)                 */}
      {/* ========================================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20 lg:py-0">
        <div className="max-w-xl lg:max-w-2xl space-y-6 sm:space-y-7">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5">
            <span className="w-5 sm:w-7 h-[1.5px] bg-[#C5A880]" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-[#C5A880]">
              DRIVE THE EXTRAORDINARY
            </span>
          </div>

          {/* Headline: Luxury Redefined. */}
          <h1 className="font-luxury text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.2rem] font-normal tracking-tight text-[#F8F6F0] leading-[1.02] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
            <span className="block">Luxury</span>
            <span className="block italic text-[#F3F1EC]">Redefined.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base text-[#E8E6DF]/85 font-light leading-relaxed max-w-lg font-sans [text-wrap:pretty]">
            Discover elite performance, unmatched comfort, and timeless design. Your dream car awaits.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            {/* Primary CTA */}
            <button
              onClick={() => {
                onNavigate('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-7 py-4 bg-[#C5A880] hover:bg-[#d4b992] text-[#0A0A0A] font-bold text-xs tracking-[0.16em] uppercase rounded-sm transition-all duration-300 shadow-[0_4px_24px_rgba(197,168,128,0.28)] hover:shadow-[0_6px_32px_rgba(197,168,128,0.4)] flex items-center justify-center gap-2.5 cursor-pointer group"
            >
              <span>EXPLORE SERVICES</span>
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            {/* Secondary CTA */}
            <button
              onClick={() => {
                onNavigate('book');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-7 py-4 bg-black/40 hover:bg-black/70 border border-[#F3F1EC]/30 hover:border-[#C5A880] text-[#F8F6F0] hover:text-[#C5A880] backdrop-blur-sm text-xs font-semibold tracking-[0.16em] uppercase rounded-sm transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer group shadow-md"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C5A880] group-hover:scale-110 transition-transform duration-300" />
              <span>BOOK APPOINTMENT</span>
            </button>
          </div>

          {/* ========================================================================= */}
          {/* 3. COMPACT CREDIBILITY METRICS (NO INVENTED NUMERICAL STATS)              */}
          {/* ========================================================================= */}
          <div className="pt-6 sm:pt-8 border-t border-white/10">
            <div className="grid grid-cols-3 gap-3 sm:gap-6">
              {/* Metric 1 */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.12em] text-[#F8F6F0]">
                    PREMIUM CARE
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-[#E8E6DF]/55 tracking-wider uppercase hidden sm:block">
                    White-Glove Standard
                  </div>
                </div>
              </div>

              {/* Metric 2 */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 text-[#C5A880]" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.12em] text-[#F8F6F0]">
                    EXPERT DETAILING
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-[#E8E6DF]/55 tracking-wider uppercase hidden sm:block">
                    Certified Artisans
                  </div>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 text-[#C5A880]" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.12em] text-[#F8F6F0]">
                    ELITE FINISHES
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-[#E8E6DF]/55 tracking-wider uppercase hidden sm:block">
                    Concourse Quality
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
