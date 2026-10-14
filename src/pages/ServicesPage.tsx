import React, { useState, useRef } from 'react';
import { PageId, CarSegment } from '../types';
import { SERVICES_DATA, STUDIO_CONTACT } from '../data/content';
import { formatUSD } from '../utils/formatters';
import {
  servicePanelPpf,
  servicePanelCeramic,
  servicePanelGraphene,
  servicePanelBodyshop,
  serviceBlackCoupeCutout,
} from '../assets/images';
import {
  Clock,
  Shield,
  Check,
  ArrowRight,
  MessageSquare,
  Phone,
  Instagram,
  MapPin,
  Sparkles,
  Layers,
  ChevronRight,
  Award,
  Zap,
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onSelectServiceForBooking: (serviceName: string) => void;
  initialServiceId?: string;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onSelectServiceForBooking,
  initialServiceId,
}) => {
  const [selectedSegment, setSelectedSegment] = useState<CarSegment>('coupe');
  const [activeServiceId, setActiveServiceId] = useState<string>(
    initialServiceId || 'paint-protection-film'
  );
  const detailsRef = useRef<HTMLDivElement>(null);

  // 4 Featured Spotlight Services corresponding to the 4 slanted panels in reference
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

  const currentService =
    SERVICES_DATA.find((s) => s.id === activeServiceId) || SERVICES_DATA[0];

  const segments: { id: CarSegment; label: string; examples: string }[] = [
    { id: 'coupe', label: 'Sports & Coupe', examples: 'Porsche 911, Ferrari 296, BMW M4' },
    { id: 'sedan', label: 'Executive Sedan', examples: 'Mercedes S-Class, BMW 7, Panamera' },
    { id: 'suv', label: 'Luxury SUV / Flagship', examples: 'Defender 110, Range Rover, Urus, G-63' },
  ];

  const handleSelectPanel = (serviceId: string) => {
    setActiveServiceId(serviceId);
    if (detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBookService = (serviceName: string) => {
    onSelectServiceForBooking(serviceName);
    onNavigate('book');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-[#070707] text-[#F3F1EC] min-h-screen">
      {/* ========================================================================= */}
      {/* HERO SECTION: EXACT DESIGN MATCHING REFERENCE POSTER                      */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-gradient-to-b from-[#0A0A0A] via-[#0E0E0E] to-[#070707] pt-8 sm:pt-12 pb-6 px-4 sm:px-6 lg:px-8 border-b border-[#1E1E1E] overflow-hidden">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-b from-[#EA580C]/10 via-transparent to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
          {/* Top Brand Logo / Crest (matching reference top circular logo) */}
          <div className="flex flex-col items-center gap-1.5 mb-3 select-none">
            <div className="relative flex items-center justify-center">
              {/* Stylized Double Intersecting Circular Crest */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-[#EA580C] flex items-center justify-center bg-black/80 shadow-[0_0_24px_rgba(234,88,12,0.45)]">
                <span className="font-display font-extrabold text-base sm:text-lg text-white tracking-tighter">
                  A<span className="text-[#EA580C]">X</span>
                </span>
              </div>
            </div>
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.3em] uppercase text-[#EA580C]">
              AUREUS DETAILING ATELIER
            </span>
          </div>

          {/* Slogan */}
          <p className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-white/70 text-center max-w-xl mb-4 italic">
            “From shine to shield — we don’t just detail, we redefine.”
          </p>

          {/* Section Main Title: OUR SERVICES with Sharp Accent Underline */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-[0.12em] sm:tracking-[0.18em] text-[#F3F1EC] drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              OUR SERVICES
            </h1>
            <div className="mt-3 flex items-center justify-center gap-2">
              <div className="h-[2px] w-8 sm:w-16 bg-[#EA580C]/40" />
              <div className="h-[3px] w-16 sm:w-28 bg-[#EA580C] shadow-[0_0_12px_#EA580C]" />
              <div className="h-[2px] w-8 sm:w-16 bg-[#EA580C]/40" />
            </div>
          </div>

          {/* ========================================================================= */}
          {/* 4 SLANTED PARALLELOGRAM PANELS (MATCHING REFERENCE POSTER)                */}
          {/* ========================================================================= */}
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 pb-8 sm:pb-12">
              {spotlightPanels.map((panel) => {
                const isSelected = activeServiceId === panel.id;
                return (
                  <button
                    key={panel.id}
                    onClick={() => handleSelectPanel(panel.id)}
                    className={`group relative text-left transition-all duration-300 cursor-pointer focus:outline-none ${
                      isSelected ? 'scale-[1.02] z-10' : 'hover:scale-[1.01]'
                    }`}
                  >
                    {/* The Slanted Outer Container */}
                    <div
                      className={`relative aspect-[3/4.8] sm:aspect-[3/5] w-full overflow-hidden rounded-sm transform sm:-skew-x-[6deg] lg:-skew-x-[8deg] transition-all duration-300 border-2 ${
                        isSelected
                          ? 'border-[#EA580C] shadow-[0_0_30px_rgba(234,88,12,0.4)]'
                          : 'border-white/20 hover:border-white/60 shadow-lg'
                      }`}
                    >
                      {/* Background Action Photography */}
                      <img
                        src={panel.image}
                        alt={panel.title}
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover filter brightness-85 group-hover:brightness-100 transition-all duration-500 transform sm:scale-115 sm:skew-x-[6deg] lg:skew-x-[8deg]"
                      />

                      {/* Dark Editorial Gradient Overlay for Text Legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/80 pointer-events-none" />

                      {/* Active Indicator Glow Ring */}
                      {isSelected && (
                        <div className="absolute inset-0 border-2 border-[#EA580C]/80 pointer-events-none" />
                      )}

                      {/* Top Header Card Title (Counter-skewed so text is completely straight) */}
                      <div className="absolute top-0 inset-x-0 p-3 sm:p-4 text-center z-10 transform sm:skew-x-[6deg] lg:skew-x-[8deg]">
                        <h2 className="font-display text-xs sm:text-sm md:text-base font-extrabold tracking-wider uppercase text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] leading-tight">
                          {panel.title}
                        </h2>
                        <div className="text-[10px] sm:text-[11px] text-[#EA580C] font-semibold tracking-wider mt-1 drop-shadow-sm hidden sm:block">
                          {panel.stat}
                        </div>
                      </div>

                      {/* Bottom Panel Info & Click Cue (Counter-skewed) */}
                      <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 z-10 transform sm:skew-x-[6deg] lg:skew-x-[8deg]">
                        <div className="text-[10px] text-white/70 line-clamp-1 mb-1 hidden sm:block">
                          {panel.sub}
                        </div>
                        <div
                          className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider flex items-center justify-between ${
                            isSelected ? 'text-[#EA580C]' : 'text-white group-hover:text-[#EA580C]'
                          }`}
                        >
                          <span>{isSelected ? 'Selected' : 'View Specs'}</span>
                          <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* ========================================================================= */}
            {/* FOREGROUND LUXURY SPORTS COUPE (OVERLAPPING THE SLANTED PANELS)           */}
            {/* ========================================================================= */}
            <div className="relative -mt-16 sm:-mt-28 md:-mt-40 lg:-mt-52 xl:-mt-64 z-20 pointer-events-none select-none flex flex-col items-center">
              {/* Studio Ground Shadow & Ambient Aura */}
              <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-8 sm:h-12 bg-black/80 blur-2xl rounded-full pointer-events-none" />

              {/* The Foreground Black Luxury Coupe */}
              <img
                src={serviceBlackCoupeCutout}
                alt="Obsidian black exotic luxury sports coupe at Aureus Atelier"
                referrerPolicy="no-referrer"
                className="relative w-full max-w-4xl lg:max-w-5xl h-auto object-contain filter contrast-105 brightness-100 drop-shadow-[0_24px_48px_rgba(0,0,0,0.95)]"
                style={{ background: 'transparent' }}
              />
            </div>
          </div>

          {/* ========================================================================= */}
          {/* BOTTOM STUDIO INFO STRIP (EXACT MATCH TO REFERENCE FOOTER)                */}
          {/* ========================================================================= */}
          <div className="w-full max-w-6xl mx-auto mt-4 sm:mt-6 pt-4 border-t border-[#222222] bg-[#0A0A0A]/95 px-4 sm:px-6 py-3.5 rounded-sm">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#F3F1EC]/80">
              {/* Phone */}
              <a
                href={`tel:${STUDIO_CONTACT.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 font-mono-numbers font-semibold hover:text-[#EA580C] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#EA580C]" />
                <span>{STUDIO_CONTACT.phoneDisplay}</span>
              </a>

              {/* Social */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-semibold tracking-wider uppercase hover:text-[#EA580C] transition-colors text-[11px]"
              >
                <Instagram className="w-3.5 h-3.5 text-[#EA580C]" />
                <span>@AUREUSATELIER</span>
              </a>

              {/* Studio Addresses */}
              <div className="flex items-center gap-2 text-[11px] text-[#F3F1EC]/70 text-center sm:text-right">
                <MapPin className="w-3.5 h-3.5 text-[#EA580C] shrink-0" />
                <span>West Coast · East Coast · Central Ateliers [City, State]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: INTERACTIVE DOSSIER & PRICING SPECIFICATIONS                   */}
      {/* ========================================================================= */}
      <section ref={detailsRef} className="py-16 sm:py-24 bg-[#0A0A0A] border-b border-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Kicker */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[#EA580C]">
                Laboratory Telemetry & Specifications
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F3F1EC]">
                {currentService.name}
              </h2>
              <p className="text-sm text-[#F3F1EC]/70 leading-relaxed">
                Executed strictly within our Class 10,000 cleanroom bays with climate-controlled curing protocols and certified formulations.
              </p>
            </div>

            {/* Quick Service Switcher Tabs */}
            <div className="flex flex-wrap gap-2">
              {spotlightPanels.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActiveServiceId(p.id)}
                  className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider border transition-all cursor-pointer ${
                    activeServiceId === p.id
                      ? 'bg-[#EA580C] border-[#EA580C] text-white shadow-sm'
                      : 'bg-[#141414] border-[#2A2A2A] text-white/70 hover:border-white/40 hover:text-white'
                  }`}
                >
                  {p.title}
                </button>
              ))}
            </div>
          </div>

          {/* Vehicle Chassis Classification Selector */}
          <div className="bg-[#121212] border border-[#242424] p-6 space-y-4 rounded-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#EA580C]">
                Select Vehicle Chassis Classification:
              </span>
              <span className="text-xs text-[#F3F1EC]/50">
                Studio pricing configured by vehicle surface square footage
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {segments.map((seg) => {
                const isSelected = selectedSegment === seg.id;
                return (
                  <button
                    key={seg.id}
                    onClick={() => setSelectedSegment(seg.id)}
                    className={`text-left p-4 border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#1A1A1A] border-[#EA580C] shadow-md'
                        : 'bg-[#0E0E0E] border-[#262626] hover:border-[#EA580C]/40'
                    }`}
                  >
                    <div
                      className={`text-xs font-bold tracking-wider uppercase ${
                        isSelected ? 'text-[#EA580C]' : 'text-[#F3F1EC]'
                      }`}
                    >
                      {seg.label}
                    </div>
                    <div className="text-[11px] text-[#F3F1EC]/50 mt-1 line-clamp-1">
                      {seg.examples}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Service Deep-Dive Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-[#121212] border border-[#242424] p-6 sm:p-10 rounded-sm">
            {/* Left Column: Visual Asset, Turnaround & Warranty */}
            <div className="lg:col-span-5 space-y-6">
              <div className="aspect-[4/3] w-full overflow-hidden border border-[#2A2A2A] relative rounded-sm group">
                <img
                  src={currentService.image}
                  alt={currentService.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-sm border border-[#2A2A2A] px-3 py-1 text-xs text-[#EA580C] font-mono-numbers">
                  Cleanroom Protocol 0{spotlightPanels.findIndex((p) => p.id === activeServiceId) + 1}
                </div>
              </div>

              {/* Turnaround & Warranty Badges */}
              <div className="grid grid-cols-2 gap-3 text-xs font-mono-numbers">
                <div className="p-4 bg-[#0A0A0A] border border-[#262626] space-y-1">
                  <span className="text-[#F3F1EC]/50 flex items-center gap-1.5 uppercase tracking-wider text-[10px]">
                    <Clock className="w-3.5 h-3.5 text-[#EA580C]" /> Turnaround
                  </span>
                  <span className="text-sm font-bold text-[#F3F1EC]">
                    {currentService.duration}
                  </span>
                </div>

                <div className="p-4 bg-[#0A0A0A] border border-[#262626] space-y-1">
                  <span className="text-[#F3F1EC]/50 flex items-center gap-1.5 uppercase tracking-wider text-[10px]">
                    <Shield className="w-3.5 h-3.5 text-[#EA580C]" /> Warranty
                  </span>
                  <span className="text-sm font-bold text-[#EA580C]">
                    {currentService.warranty.split(' ')[0]}
                  </span>
                </div>
              </div>

              {/* Recommended For Box */}
              <div className="p-5 bg-[#0A0A0A] border border-[#262626] space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#EA580C] flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" /> Recommended For
                </span>
                <p className="text-xs text-[#F3F1EC]/70 leading-relaxed">
                  {currentService.recommendedFor}
                </p>
              </div>
            </div>

            {/* Right Column: Pricing, Overview, Protocol Checklist & Specs */}
            <div className="lg:col-span-7 space-y-8">
              {/* Header & Pricing */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 border-b border-[#242424] pb-5">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F3F1EC]">
                      {currentService.name}
                    </h3>
                    <span className="text-xs text-[#EA580C] font-mono-numbers font-medium mt-1 block">
                      Classification: {segments.find((s) => s.id === selectedSegment)?.label}
                    </span>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="text-[10px] uppercase tracking-wider text-[#F3F1EC]/50 block">Investment</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#EA580C] font-mono-numbers tracking-tight">
                      {formatUSD(currentService.startingPrice[selectedSegment])}
                    </span>
                    <span className="text-[10px] text-[#F3F1EC]/40 block">+ Applicable local sales tax</span>
                  </div>
                </div>

                <p className="text-sm text-[#F3F1EC]/80 leading-relaxed font-light">
                  {currentService.fullDesc}
                </p>
              </div>

              {/* Protocol Checklist */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#EA580C] flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" /> Treatment Protocol Inclusions
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentService.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5 text-xs text-[#F3F1EC]/85">
                      <Check className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Laboratory Specs Grid */}
              <div className="space-y-3 pt-4 border-t border-[#242424]">
                <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#EA580C] flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" /> Technical Laboratory Telemetry
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {currentService.technicalSpecs.map((spec) => (
                    <div key={spec.label} className="p-3.5 bg-[#0A0A0A] border border-[#242424] rounded-sm">
                      <span className="text-[10px] text-[#F3F1EC]/50 block uppercase tracking-wider font-mono-numbers">
                        {spec.label}
                      </span>
                      <span className="text-xs font-bold text-[#F3F1EC] font-mono-numbers mt-1 block">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-[#242424] flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => handleBookService(currentService.name)}
                  className="flex-1 py-4 px-6 bg-[#EA580C] hover:bg-[#c2410c] text-white font-bold text-xs tracking-[0.15em] uppercase text-center transition-all shadow-lg hover:shadow-[#EA580C]/25 flex items-center justify-center gap-2 cursor-pointer rounded-sm"
                >
                  <span>Reserve Bay for {currentService.name.split(' (')[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/${STUDIO_CONTACT.whatsappNumber}?text=Hello%20Aureus,%20I%20would%20like%20to%20consult%20regarding%20${encodeURIComponent(currentService.name)}%20for%20my%20vehicle.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 px-6 bg-[#0E0E0E] hover:bg-[#1A1A1A] border border-[#333333] hover:border-[#EA580C] text-xs font-semibold tracking-wider uppercase text-[#F3F1EC] flex items-center justify-center gap-2 transition-colors rounded-sm cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp Specialist</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: ALL SERVICES COMPARISON & PACKAGE CALLOUT                      */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#070707]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Comparison Banner */}
          <div className="border border-[#222222] p-8 sm:p-12 bg-gradient-to-r from-[#121212] via-[#0E0E0E] to-[#121212] flex flex-col md:flex-row items-center justify-between gap-8 rounded-sm">
            <div className="space-y-3 max-w-2xl text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#EA580C]">
                Turnkey Bundles Available
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F3F1EC]">
                Looking for a Comprehensive Full-Vehicle Package?
              </h3>
              <p className="text-xs sm:text-sm text-[#F3F1EC]/70 leading-relaxed">
                Combine multi-stage ultrasonic paint leveling, 10H reduced graphene oxide coatings, and self-healing front TPU armor in our signature curated Atelier packages.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button
                onClick={() => {
                  onNavigate('pricing');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-7 py-3.5 bg-[#EA580C] hover:bg-[#c2410c] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-md cursor-pointer rounded-sm"
              >
                Compare Packages
              </button>

              <button
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-7 py-3.5 border border-[#333333] hover:border-[#EA580C] text-xs font-semibold tracking-wider uppercase text-[#F3F1EC] transition-all cursor-pointer rounded-sm"
              >
                Studio Visit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
