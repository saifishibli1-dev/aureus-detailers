import React, { useState } from 'react';
import { PageId } from '../types';
import { STUDIO_CONTACT } from '../data/content';
import { ArrowRight, Phone, Instagram, MapPin, ChevronRight, Sparkles } from 'lucide-react';
import {
  servicePanelPpf,
  servicePanelCeramic,
  servicePanelGraphene,
  servicePanelBodyshop,
  serviceBlackCoupeCutout,
  heroCarIsolated,
} from '../assets/images';

interface AttachedPosterHeroProps {
  onNavigate: (page: PageId) => void;
  onSelectService?: (serviceId: string) => void;
}

export const AttachedPosterHero: React.FC<AttachedPosterHeroProps> = ({
  onNavigate,
  onSelectService,
}) => {
  const [selectedVehicle, setSelectedVehicle] = useState<'black' | 'white'>('black');
  const [hoveredPanelId, setHoveredPanelId] = useState<string | null>(null);

  // 4 Featured Spotlight Services corresponding to the 4 slanted panels in reference poster
  const spotlightPanels = [
    {
      id: 'paint-protection-film',
      title: 'PPF',
      sub: 'Paint Protection Film',
      image: servicePanelPpf,
      stat: '10-Yr Shield',
      spec: '200μm Self-Healing TPU',
    },
    {
      id: 'ceramic-coating',
      title: 'CERAMIC COATING',
      sub: '9H Liquid Quartz Shield',
      image: servicePanelCeramic,
      stat: '112° Hydrophobic',
      spec: '9H Diamond Wet Gloss',
    },
    {
      id: 'graphene-coating',
      title: 'GRAPHENE COATING',
      sub: '10H Matrix Nanotechnology',
      image: servicePanelGraphene,
      stat: '10H Hardness',
      spec: 'Anti-Water Spotting',
    },
    {
      id: 'bodyshop',
      title: 'BODYSHOP',
      sub: 'Cleanroom Panel Refinishing',
      image: servicePanelBodyshop,
      stat: 'Cleanroom Booth',
      spec: 'OEM Factory Color Match',
    },
  ];

  const handlePanelClick = (serviceId: string) => {
    if (onSelectService) {
      onSelectService(serviceId);
    }
    onNavigate('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-[#080808] via-[#0D0D0D] to-[#070707] pt-8 sm:pt-14 pb-8 px-4 sm:px-6 lg:px-8 border-b border-[#1E1E1E] overflow-hidden select-none">
      {/* Giant Monolithic Background Typography (Editorial Watermark) */}
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0">
        <span className="font-display font-black text-[22vw] sm:text-[20vw] tracking-[0.06em] uppercase text-white/[0.03] sm:text-white/[0.045] leading-none inline-block drop-shadow-[0_4px_32px_rgba(255,255,255,0.02)]">
          AUREUS
        </span>
      </div>

      {/* Subtle Ambient Radial Ember Glow behind Brand Crest */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[420px] bg-gradient-to-b from-[#EA580C]/15 via-transparent to-transparent blur-3xl pointer-events-none z-0" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        {/* ========================================================================= */}
        {/* TOP BRAND LOGO / CREST (MATCHING REFERENCE CIRCULAR EMBLEM)                */}
        {/* ========================================================================= */}
        <div className="flex flex-col items-center gap-2 mb-3.5 select-none">
          <div className="relative flex items-center justify-center">
            {/* Luminous Outer Glow Ring */}
            <div className="absolute -inset-1 rounded-full bg-[#EA580C]/30 blur-md pointer-events-none" />
            
            {/* Stylized Concentric Circular Crest */}
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#EA580C] flex items-center justify-center bg-black/90 shadow-[0_0_28px_rgba(234,88,12,0.5)]">
              <span className="font-display font-extrabold text-lg sm:text-xl text-white tracking-tighter">
                A<span className="text-[#EA580C]">X</span>
              </span>
            </div>
          </div>
          
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.32em] uppercase text-[#EA580C]">
            AUREUS DETAILING ATELIER
          </span>
        </div>

        {/* ========================================================================= */}
        {/* SLOGAN (EXACT QUOTE FROM ATTACHED DESIGN)                                 */}
        {/* ========================================================================= */}
        <p className="text-xs sm:text-sm md:text-base font-medium tracking-[0.18em] sm:tracking-[0.22em] uppercase text-white/80 text-center max-w-2xl mb-4 italic drop-shadow-sm">
          “From shine to shield — we don’t just detail, we redefine.”
        </p>

        {/* ========================================================================= */}
        {/* SECTION MAIN TITLE: OUR SERVICES WITH SHARP ACCENT UNDERLINE              */}
        {/* ========================================================================= */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-[0.14em] sm:tracking-[0.2em] text-[#F3F1EC] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
            OUR SERVICES
          </h1>
          <div className="mt-3.5 flex items-center justify-center gap-2.5">
            <div className="h-[2px] w-10 sm:w-20 bg-[#EA580C]/40" />
            <div className="h-[3px] w-20 sm:w-36 bg-[#EA580C] shadow-[0_0_16px_#EA580C]" />
            <div className="h-[2px] w-10 sm:w-20 bg-[#EA580C]/40" />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4 SLANTED PARALLELOGRAM PANELS (MATCHING REFERENCE POSTER ARCHITECTURE)   */}
        {/* ========================================================================= */}
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 pb-8 sm:pb-12">
            {spotlightPanels.map((panel) => {
              const isHovered = hoveredPanelId === panel.id;
              return (
                <button
                  key={panel.id}
                  onClick={() => handlePanelClick(panel.id)}
                  onMouseEnter={() => setHoveredPanelId(panel.id)}
                  onMouseLeave={() => setHoveredPanelId(null)}
                  className="group relative text-left transition-all duration-300 cursor-pointer focus:outline-none"
                  aria-label={`View ${panel.title} service details`}
                >
                  {/* The Slanted Outer Container */}
                  <div
                    className={`relative aspect-[3/4.8] sm:aspect-[3/5.1] w-full overflow-hidden rounded-sm transform sm:-skew-x-[6deg] lg:-skew-x-[8deg] transition-all duration-300 border-2 ${
                      isHovered
                        ? 'border-[#EA580C] shadow-[0_0_32px_rgba(234,88,12,0.45)] scale-[1.02] z-10'
                        : 'border-white/20 hover:border-white/50 shadow-lg'
                    }`}
                  >
                    {/* Background Action Photography */}
                    <img
                      src={panel.image}
                      alt={panel.title}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover filter brightness-[0.88] group-hover:brightness-105 transition-all duration-500 transform sm:scale-115 sm:skew-x-[6deg] lg:skew-x-[8deg]"
                    />

                    {/* Dark Editorial Gradient Overlay for High Legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/80 pointer-events-none" />

                    {/* Top Header Card Title (Counter-skewed so typography is razor-straight) */}
                    <div className="absolute top-0 inset-x-0 p-3 sm:p-4 text-center z-10 transform sm:skew-x-[6deg] lg:skew-x-[8deg]">
                      <h2 className="font-display text-xs sm:text-sm md:text-base font-extrabold tracking-wider uppercase text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] leading-tight">
                        {panel.title}
                      </h2>
                      <div className="text-[10px] sm:text-[11px] text-[#EA580C] font-semibold tracking-wider mt-1 drop-shadow-sm hidden sm:block font-mono-numbers">
                        {panel.stat}
                      </div>
                    </div>

                    {/* Bottom Panel Info & Click Cue (Counter-skewed) */}
                    <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 z-10 transform sm:skew-x-[6deg] lg:skew-x-[8deg]">
                      <div className="text-[10px] text-white/70 line-clamp-1 mb-1 hidden sm:block">
                        {panel.sub}
                      </div>
                      <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider flex items-center justify-between text-white group-hover:text-[#EA580C] transition-colors">
                        <span>Explore Specs</span>
                        <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform text-[#EA580C]" />
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* ========================================================================= */}
          {/* FOREGROUND LUXURY SUPERCAR (OVERLAPPING THE SLANTED PANELS)               */}
          {/* ========================================================================= */}
          <div className="relative -mt-16 sm:-mt-28 md:-mt-40 lg:-mt-52 xl:-mt-64 z-20 pointer-events-none select-none flex flex-col items-center">
            {/* Subtle Car Switcher Pill (Pointer-events active) */}
            <div className="pointer-events-auto mb-2 flex items-center gap-1.5 bg-black/75 backdrop-blur-md border border-[#2A2A2A] px-2.5 py-1 rounded-full text-[10px] text-white/70 uppercase tracking-widest">
              <span className="text-[9px] text-[#EA580C] font-semibold">Exotic:</span>
              <button
                onClick={() => setSelectedVehicle('black')}
                className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                  selectedVehicle === 'black'
                    ? 'bg-[#EA580C] text-white font-bold'
                    : 'hover:text-white'
                }`}
              >
                Obsidian Coupe
              </button>
              <button
                onClick={() => setSelectedVehicle('white')}
                className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                  selectedVehicle === 'white'
                    ? 'bg-[#EA580C] text-white font-bold'
                    : 'hover:text-white'
                }`}
              >
                Glacier R8
              </button>
            </div>

            {/* Studio Ground Shadow & Ambient Contact Reflection */}
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-8 sm:h-14 bg-black/90 blur-2xl rounded-full pointer-events-none" />

            {/* Overlapping Isolated Supercar Cutout */}
            {selectedVehicle === 'black' ? (
              <img
                src={serviceBlackCoupeCutout}
                alt="Obsidian black exotic luxury sports coupe at Aureus Atelier"
                referrerPolicy="no-referrer"
                className="relative w-full max-w-4xl lg:max-w-5xl h-auto object-contain filter contrast-105 brightness-100 drop-shadow-[0_24px_50px_rgba(0,0,0,0.95)]"
                style={{ background: 'transparent' }}
              />
            ) : (
              <img
                src={heroCarIsolated}
                alt="Glacier white exotic supercar at Aureus Atelier"
                referrerPolicy="no-referrer"
                className="relative w-full max-w-4xl lg:max-w-5xl h-auto object-contain filter contrast-105 brightness-100 drop-shadow-[0_24px_50px_rgba(0,0,0,0.95)]"
                style={{ background: 'transparent' }}
              />
            )}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM STUDIO INFO STRIP (EXACT MATCH TO REFERENCE FOOTER)                */}
        {/* ========================================================================= */}
        <div className="w-full max-w-6xl mx-auto mt-4 sm:mt-6 pt-4 border-t border-[#222222] bg-[#0A0A0A]/95 px-4 sm:px-6 py-4 rounded-sm shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#F3F1EC]/80">
            {/* Studio Phone Contact */}
            <a
              href={`tel:${STUDIO_CONTACT.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 font-mono-numbers font-semibold hover:text-[#EA580C] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>{STUDIO_CONTACT.phoneDisplay}</span>
            </a>

            {/* Instagram Social Handle */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-semibold tracking-wider uppercase hover:text-[#EA580C] transition-colors text-[11px]"
            >
              <Instagram className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>@AUREUSATELIER</span>
            </a>

            {/* Atelier Studio Hub Locations */}
            <div className="flex items-center gap-2 text-[11px] text-[#F3F1EC]/70 text-center sm:text-right">
              <MapPin className="w-3.5 h-3.5 text-[#EA580C] shrink-0" />
              <span>Worli, Mumbai · Phase-1 Gurugram · Lavelle Rd, Bengaluru</span>
            </div>

            {/* Quick Action Navigation Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  onNavigate('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-4 py-2 bg-[#EA580C] hover:bg-[#c2410c] text-white text-[11px] font-bold tracking-wider uppercase transition-all shadow-md cursor-pointer flex items-center gap-1.5"
              >
                <span>Explore All Suites</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => {
                  onNavigate('book');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-4 py-2 border border-[#333333] hover:border-[#EA580C] text-white text-[11px] font-medium tracking-wider uppercase transition-all cursor-pointer"
              >
                Book Atelier
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
