import React from 'react';
import { PageId } from '../types';
import { SERVICES_DATA, GALLERY_PROJECTS, CLIENT_TESTIMONIALS, ATELIER_SPECS, STUDIO_CONTACT } from '../data/content';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { LuxuryHero } from '../components/LuxuryHero';
import { ArrowRight, ShieldCheck, CheckCircle2, MapPin, Calendar, MessageSquare, Phone } from 'lucide-react';
import { formatUSD } from '../utils/formatters';
import { paintCorrectionMacro, ceramicWaterBeading } from '../assets/images';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectService?: (serviceId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectService }) => {
  const topServices = SERVICES_DATA.slice(0, 3);
  const featuredProjects = GALLERY_PROJECTS.slice(0, 3);

  const handleServiceClick = (serviceId: string) => {
    if (onSelectService) {
      onSelectService(serviceId);
    }
    onNavigate('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {/* Luxury Supercar Hero Section (Inspired by Reference Screenshot) */}
      <LuxuryHero onNavigate={onNavigate} />

      {/* The Aureus Method / Editorial Principles */}
      <section className="py-24 bg-[#0D0D0D] border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B08D57]">
                The Aureus Standard
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F3F1EC] [text-wrap:balance]">
                Why Discerning Collectors Entrust Their Supercars to Us.
              </h2>
              <p className="text-sm text-[#F3F1EC]/70 leading-relaxed">
                Standard detailing studios often operate in open-air bays with uncontrolled humidity and airborne dust, leading to embedded grit beneath coatings and premature failure. At Aureus, every vehicle is treated inside a hermetically controlled micro-environment.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-xs tracking-wider uppercase text-[#B08D57] hover:underline"
                >
                  <span>Learn about our cleanroom atelier</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {ATELIER_SPECS.map((spec, idx) => (
                <div
                  key={spec.label}
                  className="p-6 bg-[#171717] border border-[#2A2A2A] space-y-3"
                >
                  <span className="text-xs font-mono-numbers text-[#B08D57]">
                    0{idx + 1}.
                  </span>
                  <h3 className="text-sm font-semibold text-[#F3F1EC] tracking-wide">
                    {spec.label}
                  </h3>
                  <div className="text-xs text-[#B08D57] font-medium font-mono-numbers">
                    {spec.value}
                  </div>
                  <p className="text-xs text-[#F3F1EC]/60 leading-relaxed">
                    {spec.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Signature Capabilities / Bento-Style Showcase */}
      <section className="py-24 bg-[#0A0A0A] border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B08D57]">
                Curated Treatments
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F3F1EC]">
                Signature Detailing & Protection Suites
              </h2>
              <p className="text-sm text-[#F3F1EC]/70">
                Engineered specifically for exotic marques exposed to harsh seasonal weather, intense ultraviolet radiation, and highway road fallout.
              </p>
            </div>

            <button
              onClick={() => {
                onNavigate('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#2A2A2A] hover:border-[#B08D57] text-xs font-medium tracking-wider uppercase text-[#F3F1EC] transition-colors"
            >
              <span>View All 5 Capabilities</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#B08D57]" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {topServices.map((service, index) => (
              <div
                key={service.id}
                className="bg-[#171717] border border-[#2A2A2A] flex flex-col group overflow-hidden transition-all hover:border-[#B08D57]/60"
              >
                {/* Image */}
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute top-4 left-4 bg-[#0D0D0D]/85 backdrop-blur-sm border border-[#2A2A2A] px-3 py-1 text-xs text-[#B08D57] font-mono-numbers">
                    0{index + 1}.
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-display text-lg font-bold text-[#F3F1EC]">
                      {service.name}
                    </h3>
                    <p className="text-xs text-[#F3F1EC]/70 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <div className="pt-2 flex items-center justify-between text-xs border-t border-[#2A2A2A] pt-3 text-[#F3F1EC]/60">
                      <span>Turnaround: <strong className="text-[#F3F1EC] font-normal">{service.duration}</strong></span>
                      <span>Warranty: <strong className="text-[#F3F1EC] font-normal">{service.warranty.split(' ')[0]}</strong></span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#2A2A2A] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#F3F1EC]/50 block">From</span>
                      <span className="text-sm font-semibold text-[#B08D57] font-mono-numbers">
                        {formatUSD(service.startingPrice.coupe)}
                      </span>
                    </div>

                    <button
                      onClick={() => handleServiceClick(service.id)}
                      className="px-4 py-2 bg-[#222222] hover:bg-[#B08D57] hover:text-[#0D0D0D] text-xs font-semibold tracking-wider uppercase text-[#F3F1EC] transition-all"
                    >
                      Specifications
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Before/After Paint Inspection Section */}
      <section className="py-24 bg-[#0D0D0D] border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B08D57]">
              Surface Telemetry & Proof
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F3F1EC]">
              The Optical Transformation
            </h2>
            <p className="text-sm text-[#F3F1EC]/70">
              Interactive inspection of a factory-delivered black clear coat showing spiderweb swirl damage caused by dealership transit vs. our 3-stage ultrasonic jewel correction.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <BeforeAfterSlider
              beforeImage={paintCorrectionMacro}
              afterImage={ceramicWaterBeading}
              beforeLabel="Dealership Swirl & Wash Marring"
              afterLabel="Aureus 3-Stage Leveled + 10H Ceramic"
            />
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 text-center text-xs text-[#F3F1EC]/70">
            <div className="p-4 bg-[#171717] border border-[#2A2A2A]">
              <span className="text-[#B08D57] font-mono-numbers text-lg font-bold block mb-1">95.4%</span>
              <span>Defect Removal with Zero Fillers</span>
            </div>
            <div className="p-4 bg-[#171717] border border-[#2A2A2A]">
              <span className="text-[#B08D57] font-mono-numbers text-lg font-bold block mb-1">&lt; 3.0 µm</span>
              <span>Preserved Clear Coat Conserved</span>
            </div>
            <div className="p-4 bg-[#171717] border border-[#2A2A2A]">
              <span className="text-[#B08D57] font-mono-numbers text-lg font-bold block mb-1">115°</span>
              <span>Hydrophobic Water Droplet Contact Angle</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Transformations Showcase */}
      <section className="py-24 bg-[#0A0A0A] border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B08D57]">
                Atelier Portfolio
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F3F1EC]">
                Recent Transformations
              </h2>
              <p className="text-sm text-[#F3F1EC]/70">
                Every project documented with paint depth telemetry, studio inspection metrics, and hours invested.
              </p>
            </div>

            <button
              onClick={() => {
                onNavigate('gallery');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#2A2A2A] hover:border-[#B08D57] text-xs font-medium tracking-wider uppercase text-[#F3F1EC] transition-colors"
            >
              <span>Explore Full Gallery</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#B08D57]" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => {
                  onNavigate('gallery');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-[#171717] border border-[#2A2A2A] overflow-hidden group cursor-pointer hover:border-[#B08D57]/60 transition-colors"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#0D0D0D]/90 px-3 py-1 text-[11px] text-[#B08D57] border border-[#2A2A2A]">
                    {proj.categoryLabel}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <h3 className="font-display text-base font-bold text-[#F3F1EC]">
                      {proj.vehicle}
                    </h3>
                    <p className="text-xs text-[#F3F1EC]/50 flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-[#B08D57]" />
                      <span>{proj.location}</span>
                    </p>
                  </div>

                  <p className="text-xs text-[#F3F1EC]/70 line-clamp-2 leading-relaxed">
                    {proj.summary}
                  </p>

                  <div className="pt-2 border-t border-[#2A2A2A] flex items-center justify-between text-xs text-[#F3F1EC]/60 font-mono-numbers">
                    <span>Labor: <strong className="text-[#F3F1EC] font-normal">{proj.hoursSpent} Hours</strong></span>
                    <span>Gloss: <strong className="text-[#B08D57] font-normal">{proj.glossUnits}</strong></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Attributable Client Endorsements */}
      <section className="py-24 bg-[#0D0D0D] border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B08D57]">
              Patron Testimonials
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F3F1EC]">
              Trusted by Foremost Automotive Collectors
            </h2>
            <p className="text-sm text-[#F3F1EC]/70">
              Verified accounts from supercar owners and luxury fleet patrons across our flagship studios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CLIENT_TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-[#171717] border border-[#2A2A2A] p-8 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="text-[#B08D57] text-2xl font-serif">“</div>
                  <p className="text-xs sm:text-sm text-[#F3F1EC]/80 leading-relaxed italic">
                    {t.quote}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#2A2A2A] space-y-1">
                  <div className="text-xs font-semibold text-[#F3F1EC] tracking-wider uppercase">
                    {t.author}
                  </div>
                  <div className="text-[11px] text-[#B08D57]">
                    {t.vehicle}
                  </div>
                  <div className="text-[11px] text-[#F3F1EC]/50 font-mono-numbers">
                    {t.city} Atelier Patron
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Banner: Concierge & Flatbed Transport */}
      <section className="py-20 bg-[#141414] border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0D0D0D] border border-[#2A2A2A] p-8 sm:p-12">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B08D57]">
                Concierge Enclosed Logistics
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#F3F1EC]">
                White-Glove Enclosed Flatbed Transport.
              </h2>
              <p className="text-sm text-[#F3F1EC]/70 max-w-xl leading-relaxed">
                Whether your vehicle resides in local metropolitan areas or requires regional enclosed carrier transport, our specialized hydraulic flatbeds ensure zero transit exposure or unwanted road mileage.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-xs text-[#F3F1EC]/60 pt-2">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B08D57]" />
                  <span>GPS Tracked Enclosed Carriers</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B08D57]" />
                  <span>Full Comprehensive In-Transit Insurance</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  onNavigate('book');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-4 bg-[#B08D57] hover:bg-[#c49f65] text-[#0D0D0D] font-semibold text-xs tracking-wider uppercase text-center transition-all shadow-md"
              >
                Book Atelier Appointment
              </button>
              <a
                href={`https://wa.me/${STUDIO_CONTACT.whatsappNumber}?text=Hello%20Aureus,%20I%20am%20interested%20in%20arranging%20enclosed%20transport%20for%20my%20vehicle.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#171717] hover:bg-[#222222] border border-[#2A2A2A] text-xs font-medium tracking-wider uppercase text-[#F3F1EC] text-center flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp Concierge</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
