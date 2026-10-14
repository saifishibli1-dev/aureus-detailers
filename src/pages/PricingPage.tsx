import React, { useState } from 'react';
import { PageId, CarSegment } from '../types';
import { PRICING_PACKAGES, STUDIO_CONTACT } from '../data/content';
import { formatUSD } from '../utils/formatters';
import { Check, ShieldCheck, Clock, MessageSquare, ArrowRight, HelpCircle } from 'lucide-react';

interface PricingPageProps {
  onNavigate: (page: PageId) => void;
  onSelectPackageForBooking: (packageName: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({
  onNavigate,
  onSelectPackageForBooking,
}) => {
  const [selectedSegment, setSelectedSegment] = useState<CarSegment>('sedan');

  const segments: { id: CarSegment; label: string; desc: string }[] = [
    { id: 'coupe', label: 'Sports & Coupe', desc: 'Porsche 911, Ferrari 296, BMW M2, Cayman' },
    { id: 'sedan', label: 'Executive Sedan', desc: 'Mercedes E/S-Class, BMW 5/7 Series, Panamera' },
    { id: 'suv', label: 'Luxury SUV & 4x4', desc: 'Defender 110, Range Rover, G63 AMG, Urus' },
  ];

  const handleSelectPackage = (pkgName: string) => {
    onSelectPackageForBooking(pkgName);
    onNavigate('book');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const faqs = [
    {
      q: 'Why does pricing vary by chassis size?',
      a: 'A Range Rover or Defender requires approximately 38% more square meterage of 200-micron TPU film and additional technician labor hours compared to a Porsche 911 or Cayman.',
    },
    {
      q: 'Are your warranties backed by manufacturer guarantees?',
      a: 'Yes. Our Paint Protection Films carry international certified warranties from XPEL/STEK covering against yellowing, blistering, and delamination. Ceramic coatings carry written laboratory guarantees including scheduled bi-annual health checks.',
    },
    {
      q: 'Can you transport my vehicle without putting miles on the odometer?',
      a: 'Absolutely. We offer white-glove enclosed hydraulic flatbed transport within our metropolitan atelier radius, as well as nationwide enclosed carrier logistics with comprehensive in-transit insurance.',
    },
    {
      q: 'Do you disassemble exterior body panels or factory badges?',
      a: 'We strictly adhere to zero-compromise non-invasive techniques. Exterior badges are meticulously masked or gently removed with heated dental floss and remounted using factory 3M VHB templates without cutting factory wires.',
    },
  ];

  return (
    <div className="w-full py-16 sm:py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B08D57]">
            Transparent Investment
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#F3F1EC] [text-wrap:balance]">
            Atelier Packages & Protection Suites
          </h1>
          <p className="text-base text-[#F3F1EC]/70 leading-relaxed font-light">
            Engineered transparently in US Dollars ($). Every package includes digital ultrasonic paint depth profiling, 6500K inspection, and Class 10,000 cleanroom application.
          </p>
        </div>

        {/* Vehicle Segment Selector */}
        <div className="bg-[#171717] border border-[#2A2A2A] p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#B08D57]">
              Select Your Vehicle Dimension
            </span>
            <span className="text-xs text-[#F3F1EC]/50">
              Prices update dynamically below
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {segments.map((seg) => {
              const isSelected = selectedSegment === seg.id;
              return (
                <button
                  key={seg.id}
                  onClick={() => setSelectedSegment(seg.id)}
                  className={`p-4 text-left border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#0D0D0D] border-[#B08D57] shadow-sm'
                      : 'bg-[#141414] border-[#2A2A2A] hover:border-[#B08D57]/40'
                  }`}
                >
                  <div className={`text-xs font-semibold tracking-wider uppercase ${
                    isSelected ? 'text-[#B08D57]' : 'text-[#F3F1EC]'
                  }`}>
                    {seg.label}
                  </div>
                  <div className="text-[11px] text-[#F3F1EC]/50 mt-1 line-clamp-1">
                    {seg.desc}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {PRICING_PACKAGES.map((pkg) => {
            const isHighlight = pkg.popular;
            return (
              <div
                key={pkg.id}
                className={`bg-[#171717] border flex flex-col justify-between transition-all relative ${
                  isHighlight
                    ? 'border-[#B08D57] shadow-xl shadow-[#B08D57]/5'
                    : 'border-[#2A2A2A] hover:border-[#2A2A2A]'
                }`}
              >
                {/* Popular Badge */}
                {isHighlight && (
                  <div className="bg-[#B08D57] text-[#0D0D0D] text-[10px] font-bold tracking-[0.2em] uppercase py-1 text-center">
                    Hallmark Atelier Choice
                  </div>
                )}

                <div className="p-6 space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-display text-xl font-bold text-[#F3F1EC]">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-[#F3F1EC]/60 min-h-[36px] leading-relaxed">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="pt-2 border-t border-[#2A2A2A]">
                    <span className="text-[10px] uppercase text-[#F3F1EC]/50 tracking-wider block">Investment</span>
                    <div className="text-2xl sm:text-3xl font-bold text-[#B08D57] font-mono-numbers mt-1">
                      {formatUSD(pkg.prices[selectedSegment])}
                    </div>
                    <span className="text-[11px] text-[#F3F1EC]/40 block">+ applicable taxes</span>
                  </div>

                  {/* Quick specs */}
                  <div className="grid grid-cols-2 gap-2 text-xs py-3 border-y border-[#2A2A2A] font-mono-numbers text-[#F3F1EC]/70">
                    <div>
                      <span className="text-[10px] text-[#F3F1EC]/40 block uppercase">Duration</span>
                      <span>{pkg.turnaroundTime}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#F3F1EC]/40 block uppercase">Warranty</span>
                      <span className="text-[#B08D57]">{pkg.warrantyYears}</span>
                    </div>
                  </div>

                  {/* Inclusions */}
                  <div className="space-y-3">
                    <span className="text-[11px] uppercase tracking-wider text-[#F3F1EC]/50 block">
                      Inclusions
                    </span>
                    <ul className="space-y-2.5">
                      {pkg.includes.map((inc) => (
                        <li key={inc} className="flex items-start gap-2 text-xs text-[#F3F1EC]/80">
                          <Check className="w-3.5 h-3.5 text-[#B08D57] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#2A2A2A]/40 mt-6">
                  <button
                    onClick={() => handleSelectPackage(pkg.name)}
                    className={`w-full py-3.5 text-xs font-semibold tracking-wider uppercase transition-all text-center ${
                      isHighlight
                        ? 'bg-[#B08D57] hover:bg-[#c29e66] text-[#0D0D0D]'
                        : 'bg-[#222222] hover:bg-[#B08D57] hover:text-[#0D0D0D] text-[#F3F1EC]'
                    }`}
                  >
                    Select {pkg.name.split(' ')[0]}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Bespoke Quote Strip */}
        <div className="p-8 bg-[#171717] border border-[#2A2A2A] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-display text-lg font-bold text-[#F3F1EC]">
              Multiple Vehicles or Vintage Restorations?
            </h3>
            <p className="text-xs sm:text-sm text-[#F3F1EC]/70">
              We cater to private multi-car collections, classic concours restorations, and bespoke satin matte conversions.
            </p>
          </div>
          <a
            href={`https://wa.me/${STUDIO_CONTACT.whatsappNumber}?text=Hello%20Aureus,%20I%20have%20a%20private%20collection/custom%20vehicle%20inquiry.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-[#B08D57] text-[#B08D57] hover:bg-[#B08D57] hover:text-[#0D0D0D] text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-2 whitespace-nowrap"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Consult Detailing Director</span>
          </a>
        </div>

        {/* FAQs */}
        <div className="space-y-8 pt-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B08D57]">
              Client Inquiries
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#F3F1EC]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-6 bg-[#171717] border border-[#2A2A2A] space-y-2">
                <h4 className="text-sm font-semibold text-[#F3F1EC] flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs text-[#F3F1EC]/70 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
