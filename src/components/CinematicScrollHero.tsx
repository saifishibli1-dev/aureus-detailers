import React, { useState, useEffect, useRef } from 'react';
import { PageId } from '../types';
import { STUDIO_CONTACT } from '../data/content';
import { scrollToTarget } from './SmoothScroll';
import { ArrowRight, Calendar, MessageSquare, Phone, ShieldCheck, Sparkles, CheckCircle2, ChevronDown, Instagram } from 'lucide-react';
import {
  servicePanelPpf,
  servicePanelCeramic,
  servicePanelGraphene,
  servicePanelBodyshop,
  serviceBlackCoupeCutout,
  heroCarIsolated,
  paintCorrectionMacro,
  interiorLeatherSpa,
  heroPorscheStudio,
} from '../assets/images';

interface CinematicScrollHeroProps {
  onNavigate: (page: PageId) => void;
  onSelectService?: (serviceId: string) => void;
}

export const CinematicScrollHero: React.FC<CinematicScrollHeroProps> = ({ onNavigate, onSelectService }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedVehicle, setSelectedVehicle] = useState<'black_coupe' | 'white_supercar'>('black_coupe');

  // 4 Featured Spotlight Services corresponding to the 4 slanted panels in reference poster
  const spotlightPanels = [
    {
      id: 'paint-protection-film',
      title: 'PPF',
      sub: 'Paint Protection Film',
      image: servicePanelPpf,
      badge: '200μm Self-Healing TPU',
      stat: '10-Yr Shield',
    },
    {
      id: 'ceramic-coating',
      title: 'CERAMIC COATING',
      sub: '9H Liquid Quartz Shield',
      image: servicePanelCeramic,
      badge: '9H Diamond Wet Gloss',
      stat: '112° Hydrophobic',
    },
    {
      id: 'graphene-coating',
      title: 'GRAPHENE COATING',
      sub: '10H Matrix Nanotechnology',
      image: servicePanelGraphene,
      badge: 'Anti-Water Spotting',
      stat: '10H Hardness',
    },
    {
      id: 'bodyshop',
      title: 'BODYSHOP',
      sub: 'Cleanroom Panel Refinishing',
      image: servicePanelBodyshop,
      badge: 'OEM Factory Color Match',
      stat: 'Cleanroom Booth',
    },
  ];

  const handlePanelSelect = (serviceId: string) => {
    if (onSelectService) {
      onSelectService(serviceId);
    }
    onNavigate('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;
      const currentScroll = -rect.top;
      const clamped = Math.min(Math.max(currentScroll / totalScrollable, 0), 1);
      
      animationFrameId = requestAnimationFrame(() => {
        setScrollProgress(clamped);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Jump to specific scene by calculating target scrollTop
  const scrollToScene = (sceneIndex: number) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
    const targetScroll = containerTop + (sceneIndex / 2) * totalScrollable;
    scrollToTarget(targetScroll, { duration: 1.15 });
  };

  // Determine active scene (0, 1, 2)
  const activeSceneIndex = scrollProgress < 0.36 ? 0 : scrollProgress < 0.72 ? 1 : 2;

  // Scene 1 opacity & transforms (peaks 0.0 - 0.20, exits 0.20 - 0.36)
  const s1Opacity = Math.max(0, Math.min(1, 1 - (scrollProgress - 0.20) / 0.16));
  const s1TranslateY = scrollProgress * -120;
  const s1Scale = 1 - scrollProgress * 0.15;

  // Scene 2: Detailing Craft (enters 0.22 - 0.36, peaks 0.36 - 0.65, exits 0.65 - 0.76)
  const s2Opacity = scrollProgress < 0.22
    ? 0
    : scrollProgress <= 0.65
    ? Math.min(1, (scrollProgress - 0.22) / 0.14)
    : Math.max(0, 1 - (scrollProgress - 0.65) / 0.12);
  const s2TranslateY = (0.50 - scrollProgress) * 110;

  // Scene 3: Final Elevation (enters 0.64 - 0.76, stays full until 1.0)
  const s3Opacity = scrollProgress < 0.64 ? 0 : Math.min(1, (scrollProgress - 0.64) / 0.12);
  const s3Scale = 0.94 + Math.min(0.06, (scrollProgress - 0.64) * 0.2);

  const scenes = [
    { num: '01', title: 'Atelier Overview' },
    { num: '02', title: 'Detailing Craft' },
    { num: '03', title: 'Final Elevation' },
  ];

  return (
    <div ref={containerRef} className="relative w-full h-[300vh] bg-[#0A0A0A]">
      {/* Sticky Pinned Viewport Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#0A0A0A] flex flex-col justify-between">
        
        {/* Dynamic Background Noise / Atmospheric Sheen */}
        <div className="absolute inset-0 bg-radial-gradient from-neutral-900/30 via-black to-black pointer-events-none z-0" />

        {/* Floating Scene Progress Nav (Right side on desktop, bottom on mobile) */}
        <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-5 items-end">
          {scenes.map((s, idx) => {
            const isActive = activeSceneIndex === idx;
            return (
              <button
                key={s.num}
                onClick={() => scrollToScene(idx)}
                className="group flex items-center gap-3 text-right focus:outline-none cursor-pointer"
                aria-label={`Jump to ${s.title}`}
              >
                <span
                  className={`text-[10px] tracking-widest uppercase transition-all duration-300 font-mono-numbers ${
                    isActive ? 'text-[#EA580C] font-bold opacity-100' : 'text-white/40 opacity-0 group-hover:opacity-100'
                  }`}
                >
                  {s.num} · {s.title}
                </span>
                <span
                  className={`h-[2px] transition-all duration-300 ${
                    isActive
                      ? 'w-8 bg-[#EA580C]'
                      : 'w-3 bg-white/20 group-hover:w-5 group-hover:bg-white/60'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Global Progress Line across Top of Pinned Viewport */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-white/5 z-40">
          <div
            className="h-full bg-gradient-to-r from-[#EA580C] via-[#B08D57] to-[#EA580C] transition-all duration-75"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>

        {/* ========================================================================= */}
        {/* SCENE 01: CURRENT HERO (ATELIER OF PREMIER LUXURY MOTORCARS)              */}
        {/* ========================================================================= */}
        <div
          className="absolute inset-0 w-full h-full flex flex-col justify-between pt-8 sm:pt-14 pb-0 transition-opacity duration-300 pointer-events-none"
          style={{
            opacity: s1Opacity,
            transform: `translateY(${s1TranslateY}px) scale(${s1Scale})`,
            pointerEvents: s1Opacity > 0.3 ? 'auto' : 'none',
            zIndex: activeSceneIndex === 0 ? 20 : 10,
          }}
        >
          {/* Giant Monolithic Wordmark in Background */}
          <div className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0">
            <span className="font-display font-black text-[18vw] sm:text-[17vw] tracking-[0.08em] uppercase text-white/[0.25] leading-none inline-block drop-shadow-[0_4px_24px_rgba(255,255,255,0.06)]">
              AUREUS
            </span>
          </div>

          {/* Dynamic Diagonal Metallic / Orange Accent Lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-[1] overflow-visible"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="18%" y1="34%" x2="95%" y2="14%" stroke="#EA580C" strokeWidth="2" strokeOpacity="0.8" />
            <line x1="2%" y1="56%" x2="52%" y2="46%" stroke="#EA580C" strokeWidth="2" strokeOpacity="0.85" />
            <line x1="64%" y1="76%" x2="98%" y2="70%" stroke="#EA580C" strokeWidth="1.5" strokeOpacity="0.5" />
          </svg>

          {/* Main Hero Container: Exact Match to Iconic Reference Poster */}
          <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-between pt-1 sm:pt-2 pb-1">
            {/* Top Brand Logo / Crest & Official Slogan */}
            <div className="flex flex-col items-center select-none text-center">
              <div className="relative flex items-center justify-center mb-1.5 sm:mb-2">
                {/* Stylized Double Intersecting Circular Crest */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#EA580C] flex items-center justify-center bg-black/85 shadow-[0_0_24px_rgba(234,88,12,0.45)]">
                  <span className="font-display font-extrabold text-sm sm:text-base text-white tracking-tighter">
                    A<span className="text-[#EA580C]">X</span>
                  </span>
                </div>
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.3em] uppercase text-[#EA580C] mb-1">
                AUREUS DETAILING ATELIER
              </span>
              <p className="text-[11px] sm:text-xs font-medium tracking-[0.16em] uppercase text-white/75 max-w-xl italic drop-shadow-sm">
                “From shine to shield — we don’t just detail, we redefine.”
              </p>
            </div>

            {/* Section Main Title: OUR SERVICES with Sharp Orange Accent Underline */}
            <div className="text-center my-2 sm:my-3">
              <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black uppercase tracking-[0.14em] text-[#F3F1EC] drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)] leading-none">
                OUR SERVICES
              </h1>
              <div className="mt-2 flex items-center justify-center gap-2">
                <div className="h-[2px] w-8 sm:w-16 bg-[#EA580C]/40" />
                <div className="h-[3px] w-14 sm:w-28 bg-[#EA580C] shadow-[0_0_14px_#EA580C]" />
                <div className="h-[2px] w-8 sm:w-16 bg-[#EA580C]/40" />
              </div>
            </div>

            {/* Center Stage: 4 Slanted Parallelogram Panels + Foreground Car Cutout */}
            <div className="relative w-full max-w-5xl mx-auto flex flex-col justify-center my-auto">
              {/* Optional Vehicle Switcher Pill in Top-Right */}
              <div className="flex items-center justify-center sm:justify-end gap-1.5 mb-2 text-[9px] uppercase tracking-wider select-none z-30">
                <span className="text-white/40 hidden sm:inline">Featured Vehicle:</span>
                <button
                  type="button"
                  onClick={() => setSelectedVehicle('black_coupe')}
                  className={`px-2 py-0.5 rounded-sm transition-all cursor-pointer font-semibold ${
                    selectedVehicle === 'black_coupe'
                      ? 'bg-[#EA580C] text-white'
                      : 'bg-[#181818] text-white/60 hover:text-white'
                  }`}
                >
                  Obsidian Coupe
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedVehicle('white_supercar')}
                  className={`px-2 py-0.5 rounded-sm transition-all cursor-pointer font-semibold ${
                    selectedVehicle === 'white_supercar'
                      ? 'bg-[#EA580C] text-white'
                      : 'bg-[#181818] text-white/60 hover:text-white'
                  }`}
                >
                  Glacier Supercar
                </button>
              </div>

              {/* The 4 Slanted Parallelogram Panels */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3.5 lg:gap-4 w-full">
                {spotlightPanels.map((panel) => (
                  <button
                    key={panel.id}
                    onClick={() => handlePanelSelect(panel.id)}
                    className="group relative text-left transition-all duration-300 cursor-pointer focus:outline-none hover:scale-[1.02] active:scale-[0.99]"
                  >
                    {/* The Slanted Outer Container */}
                    <div className="relative aspect-[3/4.4] sm:aspect-[3/4.6] md:aspect-[3/4.8] w-full overflow-hidden rounded-sm transform sm:-skew-x-[6deg] lg:-skew-x-[8deg] transition-all duration-300 border-2 border-white/20 group-hover:border-[#EA580C] shadow-2xl group-hover:shadow-[0_0_28px_rgba(234,88,12,0.4)]">
                      {/* Background Action Detailing Photography */}
                      <img
                        src={panel.image}
                        alt={panel.title}
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover filter brightness-80 group-hover:brightness-100 transition-all duration-500 transform sm:scale-115 sm:skew-x-[6deg] lg:skew-x-[8deg]"
                      />

                      {/* Dark Editorial Gradient Overlay for High Contrast Text */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/85 pointer-events-none" />

                      {/* Top Header Card Title (Counter-skewed so text is straight) */}
                      <div className="absolute top-0 inset-x-0 p-2.5 sm:p-3 text-center z-10 transform sm:skew-x-[6deg] lg:skew-x-[8deg]">
                        <h2 className="font-display text-[11px] sm:text-xs md:text-sm font-extrabold tracking-wider uppercase text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] leading-tight">
                          {panel.title}
                        </h2>
                        <div className="text-[9px] sm:text-[10px] text-[#EA580C] font-semibold tracking-wider mt-0.5 drop-shadow-sm">
                          {panel.stat}
                        </div>
                      </div>

                      {/* Bottom Panel Subtitle & Navigation Cue (Counter-skewed) */}
                      <div className="absolute bottom-0 inset-x-0 p-2.5 sm:p-3 z-10 transform sm:skew-x-[6deg] lg:skew-x-[8deg]">
                        <div className="text-[9px] text-white/70 line-clamp-1 mb-0.5 hidden sm:block">
                          {panel.sub}
                        </div>
                        <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-white group-hover:text-[#EA580C] flex items-center justify-between">
                          <span>Explore Suite</span>
                          <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Foreground Luxury Sports Coupe (Overlapping across the Slanted Panels) */}
              <div className="relative -mt-14 sm:-mt-22 md:-mt-32 lg:-mt-40 xl:-mt-48 z-20 pointer-events-none select-none flex flex-col items-center">
                {/* Contact Shadow & Atmospheric Aura */}
                <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-6 sm:h-10 bg-black/90 blur-2xl rounded-full pointer-events-none" />

                <img
                  src={
                    selectedVehicle === 'black_coupe'
                      ? serviceBlackCoupeCutout
                      : heroCarIsolated
                  }
                  alt={
                    selectedVehicle === 'black_coupe'
                      ? 'Obsidian black exotic coupe at Aureus Atelier'
                      : 'Glacier white exotic supercar at Aureus Atelier'
                  }
                  referrerPolicy="no-referrer"
                  className="relative w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl h-auto object-contain filter contrast-105 brightness-100 drop-shadow-[0_24px_48px_rgba(0,0,0,0.95)]"
                  style={{ background: 'transparent' }}
                />
              </div>
            </div>

            {/* Bottom Studio Info Strip (Exact Match to Reference Poster Footer & Metrics) */}
            <div className="w-full max-w-5xl mx-auto mt-2 pt-2.5 border-t border-[#222222] bg-[#0A0A0A]/95 px-3 sm:px-6 py-2 rounded-sm select-none">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs text-[#F3F1EC]/80">
                {/* Phone Contact */}
                <a
                  href={`tel:${STUDIO_CONTACT.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2 font-mono-numbers font-semibold hover:text-[#EA580C] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span>{STUDIO_CONTACT.phoneDisplay}</span>
                </a>

                {/* Instagram Handle */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-semibold tracking-wider uppercase hover:text-[#EA580C] transition-colors text-[11px]"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span>@AUREUSATELIER</span>
                </a>

                {/* Studio Metrics Highlights */}
                <div className="hidden lg:flex items-center gap-4 text-[10px] text-white/50 font-mono-numbers">
                  <span>10 YRS IN MARKET</span>
                  <span className="text-[#EA580C]">·</span>
                  <span>500+ BUILDS</span>
                  <span className="text-[#EA580C]">·</span>
                  <span>99% DEFECT FREE</span>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => {
                      onNavigate('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-3.5 py-1.5 bg-[#EA580C] hover:bg-[#c2410c] text-white font-bold text-[10px] tracking-wider uppercase transition-all shadow-md hover:shadow-[#EA580C]/25 cursor-pointer"
                  >
                    Explore Services
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('book');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-3.5 py-1.5 bg-[#171717] hover:bg-[#222222] border border-[#3A3A3A] hover:border-[#EA580C] text-[#F3F1EC] font-semibold text-[10px] tracking-wider uppercase transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Reserve Bay</span>
                    <Calendar className="w-3 h-3 text-[#EA580C]" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom subtle scroll invitation */}
          <div className="py-2 text-center text-[10px] uppercase tracking-widest text-[#F3F1EC]/40 flex items-center justify-center gap-1.5">
            <span>Scroll to explore cinematic sequence</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce text-[#EA580C]" />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SCENE 02: THE DETAILING PROCESS ("EVERY DETAIL. PERFECTED.")              */}
        {/* ========================================================================= */}
        <div
          className="absolute inset-0 w-full h-full flex items-center justify-center p-4 sm:p-8 transition-opacity duration-300 pointer-events-none"
          style={{
            opacity: s2Opacity,
            transform: `translateY(${s2TranslateY}px)`,
            pointerEvents: s2Opacity > 0.3 ? 'auto' : 'none',
            zIndex: activeSceneIndex === 1 ? 30 : 10,
          }}
        >
          {/* Subtle Ambient Background Watermark */}
          <div className="absolute bottom-8 left-10 text-[16vw] font-display font-black text-white/[0.12] uppercase select-none pointer-events-none">
            SURGICAL
          </div>

          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            {/* Left: Dual Layered Visuals (Polishing Master + Leather Craft) */}
            <div className="lg:col-span-7 relative order-2 lg:order-1">
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-8 aspect-[4/3] border border-[#2A2A2A] overflow-hidden shadow-2xl relative">
                  <img
                    src={paintCorrectionMacro}
                    alt="Master artisan polishing clear coat with dual action polisher under 6500K warm inspection light"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter brightness-95"
                  />
                  <div className="absolute top-3 left-3 bg-[#0D0D0D]/85 border border-[#2A2A2A] px-2.5 py-1 text-[10px] text-[#EA580C] font-mono-numbers">
                    Step 02 / Multi-Stage Leveling
                  </div>
                </div>

                <div className="col-span-4 aspect-[3/4] border border-[#2A2A2A] overflow-hidden shadow-2xl relative translate-y-6">
                  <img
                    src={interiorLeatherSpa}
                    alt="Bespoke leather spa and cockpit detailing"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter brightness-95"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-[#0D0D0D]/90 border border-[#2A2A2A] p-2 text-[10px] text-[#F3F1EC]/80 leading-tight">
                    Swissvax Nappa Spa
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Editorial Narrative */}
            <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-2 text-xs font-mono-numbers tracking-widest uppercase text-[#EA580C]">
                <span className="w-6 h-[1.5px] bg-[#EA580C]" />
                <span>SCENE 02 / THE ATELIER PROCESS</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-[#F3F1EC] leading-[1.05] tracking-tight">
                EVERY DETAIL.<br />
                <span className="text-[#EA580C]">PERFECTED.</span>
              </h2>

              <p className="text-xs sm:text-sm text-[#F3F1EC]/80 leading-relaxed font-light max-w-lg">
                We operate with laboratory discipline. Prior to touching the vehicle, our certified detailers execute 32-point ultrasonic depth mapping across all carbon and aluminum panels. Defect leveling removes up to 95% of buffer holograms, transit scratches, and orange peel while conserving factory clear coat thickness.
              </p>

              <div className="space-y-3 pt-2 text-xs text-[#F3F1EC]/80">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#EA580C] shrink-0" />
                  <span>Class 10,000 dust-filtered climate bays with positive air pressure</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#EA580C] shrink-0" />
                  <span>6,500K color-calibrated CRI 98 true daylight inspection arrays</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#EA580C] shrink-0" />
                  <span>Zero silicone fillers — authentic mirror leveling guaranteed</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[#3A3A3A] hover:border-[#EA580C] text-[#F3F1EC] font-semibold text-xs tracking-wider uppercase transition-all"
                >
                  <span>Learn About Our Protocol</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#EA580C]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SCENE 03: FINAL EXPERIENCE ("YOUR CAR. ELEVATED.")                        */}
        {/* ========================================================================= */}
        <div
          className="absolute inset-0 w-full h-full flex items-center justify-center p-4 sm:p-8 transition-opacity duration-300 pointer-events-none"
          style={{
            opacity: s3Opacity,
            transform: `scale(${s3Scale})`,
            pointerEvents: s3Opacity > 0.3 ? 'auto' : 'none',
            zIndex: activeSceneIndex === 2 ? 35 : 10,
          }}
        >
          {/* Background Ambient Finished Masterpiece */}
          <div className="absolute inset-0 z-0">
            <img
              src={heroPorscheStudio}
              alt="Pristine finished Porsche 911 GT3 RS in atelier cleanroom studio"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter brightness-60 contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/75 to-[#0A0A0A]/60" />
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0A0A0A]/50 to-[#0A0A0A]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 px-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#171717]/90 border border-[#EA580C]/40 text-[#EA580C] text-xs font-mono-numbers tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SCENE 03 / THE FINAL ELEVATION</span>
            </div>

            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase text-[#F3F1EC] leading-[1.04] tracking-tight [text-wrap:balance]">
              YOUR CAR.<br />
              <span className="text-[#EA580C]">ELEVATED.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#F3F1EC]/85 max-w-2xl mx-auto leading-relaxed font-light">
              An uncompromised mirror-finish clear coat, permanent self-healing defense, and an unmatched sensory presence on every road. Experience America&apos;s premier automotive atelier.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => {
                  onNavigate('book');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-9 py-4 bg-[#EA580C] hover:bg-[#c2410c] text-white font-bold text-xs tracking-[0.2em] uppercase transition-all shadow-2xl cursor-pointer"
              >
                Book Atelier Appointment
              </button>

              <a
                href={`https://wa.me/${STUDIO_CONTACT.whatsappNumber}?text=Hello%20Aureus,%20I%20would%20like%20to%20consult%20with%20your%20Master%20Detailer.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-[#141414]/90 hover:bg-[#202020] border border-[#2A2A2A] hover:border-[#25D366] text-xs font-semibold tracking-wider uppercase text-[#F3F1EC] flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Concierge</span>
              </a>

              <a
                href={`tel:${STUDIO_CONTACT.phone}`}
                className="w-full sm:w-auto px-7 py-4 bg-[#141414]/90 hover:bg-[#202020] border border-[#2A2A2A] hover:border-[#EA580C] text-xs font-semibold tracking-wider uppercase text-[#F3F1EC] flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#EA580C]" />
                <span>Call Studio</span>
              </a>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#F3F1EC]/60 font-mono-numbers">
              {STUDIO_CONTACT.studios.map((st, idx) => (
                <React.Fragment key={st.name}>
                  {idx > 0 && <span>·</span>}
                  <span>{st.city}</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
