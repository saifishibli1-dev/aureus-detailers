import React from 'react';
import { PageId } from '../types';
import { ATELIER_SPECS, STUDIO_CONTACT } from '../data/content';
import { ShieldCheck, Award, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { ppfInstallationCurve } from '../assets/images';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const processSteps = [
    {
      num: '01',
      title: 'Forensic Decontamination & pH Wash',
      desc: 'Snow foam bath, iron fallout extraction, clay bar treatment, and wheels-off undercarriage cleanse to remove stubborn road tar and industrial fallout without marring.',
    },
    {
      num: '02',
      title: 'Ultrasonic Paint Depth Profiling',
      desc: '32-point digital ultrasound mapping across all body panels, measuring clear coat, base coat, and substrate thickness to establish safe abrasive thresholds.',
    },
    {
      num: '03',
      title: 'Jeweled Multi-Stage Correction',
      desc: 'Dual-action rotary and orbital leveling using diminishable abrasive compounds and wool/foam pads to eradicate swirl marks, scratches, and buffer holograms.',
    },
    {
      num: '04',
      title: 'Cleanroom PPF & Nanotech Installation',
      desc: 'Executed in our Class 10,000 dust-filtered climate bays. Self-healing 200µ TPU wrapped seamlessly with millimeter precision and 10H ceramic bond.',
    },
    {
      num: '05',
      title: 'Infrared Quartz Lamp Curing',
      desc: 'Short-wave infrared array baking at 65°C to achieve 100% molecular cross-linking of ceramic and graphene matrices for maximum hardness.',
    },
    {
      num: '06',
      title: 'White-Glove Atelier Handover',
      desc: 'Formal client walkthrough under 6,500K daylight arrays with physical gloss meter verification and issuance of international written warranty certificate.',
    },
  ];

  return (
    <div className="w-full py-16 sm:py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B08D57]">
            The Atelier Standard
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#F3F1EC] [text-wrap:balance]">
            Precision Engineering Meets Automotive Artistry
          </h1>
          <p className="text-base text-[#F3F1EC]/70 leading-relaxed font-light">
            Founded to eliminate the compromises of traditional car detailing. We built hospital-grade cleanrooms and recruited internationally certified master craftsmen to give discerning collectors a studio worthy of their motorcars.
          </p>
        </div>

        {/* Narrative & Atelier Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#F3F1EC]">
              Why Modern Environmental Conditions Demand Uncompromising Standards
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-[#F3F1EC]/80 leading-relaxed font-light">
              <p>
                Modern highways present demanding automotive environments: high surface heat, aggressive road particulate, acidic environmental fallout, and harsh road debris. Conventional open-air garages simply trap airborne dust under coatings and films, causing premature failure.
              </p>
              <p>
                At Aureus, every vehicle is treated inside a Class 10,000 cleanroom with positive air pressure filtration, 6500K color-calibrated lighting, and medical-grade humidity control.
              </p>
              <p>
                Whether it is a Porsche 911 GT3 RS delivered straight from the showroom floor or a vintage Ferrari preserved for posterity, our craftsmen treat every curve as an individual mechanical canvas.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono-numbers text-[#B08D57]">
              <span>Class 10k Certified</span>
              <span>·</span>
              <span>IDA Master Detailers</span>
              <span>·</span>
              <span>XPEL Approved</span>
              <span>·</span>
              <span>Rupes Certified</span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="border border-[#2A2A2A] overflow-hidden relative">
              <img
                src={ppfInstallationCurve}
                alt="Aureus Detailing Studio cleanroom bay"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-95"
              />
              <div className="p-4 bg-[#171717] border-t border-[#2A2A2A] text-xs text-[#F3F1EC]/70 flex items-center justify-between">
                <span>Certified Master Artisan applying self-healing TPU PPF</span>
                <span className="text-[#B08D57] font-mono-numbers">Flagship Cleanroom Bay 02</span>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Technical Infrastructure */}
        <div className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B08D57]">
              Laboratory Infrastructure
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#F3F1EC]">
              Engineered Cleanroom Specifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ATELIER_SPECS.map((spec) => (
              <div key={spec.label} className="p-6 bg-[#171717] border border-[#2A2A2A] space-y-3">
                <span className="text-xs text-[#B08D57] uppercase tracking-wider block font-medium">
                  {spec.label}
                </span>
                <div className="text-base font-semibold text-[#F3F1EC] font-mono-numbers">
                  {spec.value}
                </div>
                <p className="text-xs text-[#F3F1EC]/60 leading-relaxed">
                  {spec.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 6-Step Execution Protocol */}
        <div className="space-y-10">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B08D57]">
              The Protocol
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#F3F1EC]">
              Our 6-Step Treatment Sequence
            </h2>
            <p className="text-xs sm:text-sm text-[#F3F1EC]/70">
              Zero guesswork. Every millimeter follows rigorous laboratory protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div key={step.num} className="p-6 bg-[#171717] border border-[#2A2A2A] space-y-3 relative">
                <span className="text-2xl font-serif text-[#B08D57]/40 block font-bold font-mono-numbers">
                  {step.num}
                </span>
                <h3 className="text-sm font-semibold text-[#F3F1EC] tracking-wide">
                  {step.title}
                </h3>
                <p className="text-xs text-[#F3F1EC]/70 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Studio Locations Grid */}
        <div className="space-y-8 pt-6 border-t border-[#2A2A2A]">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B08D57]">
              Presence
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#F3F1EC]">
              Flagship Studio Locations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STUDIO_CONTACT.studios.map((st) => (
              <div key={st.city} className="p-6 bg-[#171717] border border-[#2A2A2A] space-y-4 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#F3F1EC]">
                    <MapPin className="w-4 h-4 text-[#B08D57]" />
                    <span>{st.name}</span>
                  </div>
                  <p className="text-xs text-[#F3F1EC]/70 leading-relaxed">
                    {st.address}
                  </p>
                  <p className="text-[11px] text-[#B08D57]">
                    Landmark: {st.landmark}
                  </p>
                  <p className="text-xs text-[#F3F1EC]/50 font-mono-numbers">
                    {st.bays}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#2A2A2A] flex items-center justify-between">
                  <span className="text-xs font-mono-numbers text-[#F3F1EC]/80">{st.phone}</span>
                  <button
                    onClick={() => {
                      onNavigate('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs text-[#B08D57] hover:underline uppercase tracking-wider"
                  >
                    Details & Directions
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-10 bg-[#171717] border border-[#2A2A2A] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <h3 className="font-display text-xl font-bold text-[#F3F1EC]">
              Ready to Experience the Aureus Difference?
            </h3>
            <p className="text-xs sm:text-sm text-[#F3F1EC]/70">
              Schedule a private bay tour or bring your motorcar for an ultrasonic clear coat audit.
            </p>
          </div>
          <button
            onClick={() => {
              onNavigate('book');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-[#B08D57] hover:bg-[#c29e66] text-[#0D0D0D] font-semibold text-xs tracking-wider uppercase transition-all whitespace-nowrap"
          >
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  );
};
