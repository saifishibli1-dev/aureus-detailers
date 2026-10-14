import React from 'react';
import { PageId } from '../types';
import { STUDIO_CONTACT } from '../data/content';
import { Phone, Mail, MapPin, MessageSquare, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2A2A2A] text-[#F3F1EC] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#2A2A2A]">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-display text-2xl font-bold tracking-[0.25em] text-[#F3F1EC]">
              AUREUS
            </span>
            <p className="text-sm text-[#F3F1EC]/70 max-w-sm leading-relaxed">
              Premier luxury automotive atelier dedicated to high-precision paint correction, self-healing TPU protection films, and bespoke nanotech surface care for exotic and luxury marques.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${STUDIO_CONTACT.whatsappNumber}?text=Hello%20Aureus%20Atelier,%20I%20would%20like%20to%20inquire%20about%20detailing%20my%20vehicle.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#171717] hover:bg-[#222222] border border-[#2A2A2A] hover:border-[#B08D57] text-xs text-[#F3F1EC] tracking-wider uppercase transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#B08D57]" />
                <span>WhatsApp Concierge</span>
                <ArrowUpRight className="w-3 h-3 text-[#F3F1EC]/50" />
              </a>

              <a
                href={`tel:${STUDIO_CONTACT.phone}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#171717] hover:bg-[#222222] border border-[#2A2A2A] hover:border-[#B08D57] text-xs text-[#F3F1EC] tracking-wider uppercase transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#B08D57]" />
                <span>Call Studio</span>
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B08D57]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#F3F1EC]/70">
              <li>
                <button
                  onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#F3F1EC] transition-colors"
                >
                  Home Studio
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#F3F1EC] transition-colors"
                >
                  Bespoke Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('gallery'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#F3F1EC] transition-colors"
                >
                  Gallery & Transformations
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('pricing'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#F3F1EC] transition-colors"
                >
                  Packages & Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#F3F1EC] transition-colors"
                >
                  About Atelier
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#F3F1EC] transition-colors"
                >
                  Contact & Locations
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('book'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-[#B08D57] font-medium hover:underline"
                >
                  Book Appointment
                </button>
              </li>
            </ul>
          </div>

          {/* Studio Locations */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B08D57]">
              Flagship Studios
            </h4>
            <div className="space-y-4 text-xs text-[#F3F1EC]/80">
              {STUDIO_CONTACT.studios.map((st) => (
                <div key={st.city} className="space-y-1">
                  <div className="flex items-center gap-1.5 font-medium text-[#F3F1EC]">
                    <MapPin className="w-3.5 h-3.5 text-[#B08D57]" />
                    <span>{st.name} — {st.city}</span>
                  </div>
                  <p className="text-[#F3F1EC]/60 pl-5">{st.address}</p>
                  <p className="text-[#B08D57]/90 pl-5 text-[11px] font-mono-numbers">
                    {st.phone} · {st.bays}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#F3F1EC]/50 gap-4">
          <p>© {currentYear} AUREUS Bespoke Auto Atelier. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Class 10,000 ISO Cleanroom Bay Standards</span>
            <span aria-hidden="true">·</span>
            <span>XPEL & IDA Certified Facility</span>
            <span aria-hidden="true">·</span>
            <span>West Coast · East Coast · Central [Locations Pending]</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
