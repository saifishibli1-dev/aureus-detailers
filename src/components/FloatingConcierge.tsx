import React from 'react';
import { STUDIO_CONTACT } from '../data/content';
import { MessageSquare, Phone, Calendar } from 'lucide-react';
import { PageId } from '../types';

interface FloatingConciergeProps {
  onBookClick: (page: PageId) => void;
}

export const FloatingConcierge: React.FC<FloatingConciergeProps> = ({ onBookClick }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${STUDIO_CONTACT.whatsappNumber}?text=Hello%20Aureus%20Atelier,%20I%20would%20like%20to%20consult%20regarding%20detailing%20for%20my%20vehicle.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Aureus Concierge on WhatsApp"
        className="group relative flex items-center justify-center w-12 h-12 bg-[#171717] hover:bg-[#222222] border border-[#2A2A2A] hover:border-[#B08D57] text-[#F3F1EC] shadow-2xl transition-all"
      >
        <MessageSquare className="w-5 h-5 text-[#25D366] group-hover:scale-110 transition-transform" />
        <span className="sr-only">WhatsApp Concierge</span>
        <span className="hidden lg:block absolute right-14 bg-[#171717] border border-[#2A2A2A] px-3 py-1.5 text-xs text-[#F3F1EC] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          WhatsApp Concierge
        </span>
      </a>

      {/* Direct Call Button */}
      <a
        href={`tel:${STUDIO_CONTACT.phone}`}
        aria-label="Call Aureus Atelier Concierge"
        className="group relative flex items-center justify-center w-12 h-12 bg-[#171717] hover:bg-[#222222] border border-[#2A2A2A] hover:border-[#B08D57] text-[#F3F1EC] shadow-2xl transition-all"
      >
        <Phone className="w-5 h-5 text-[#B08D57] group-hover:scale-110 transition-transform" />
        <span className="sr-only">Call Concierge</span>
        <span className="hidden lg:block absolute right-14 bg-[#171717] border border-[#2A2A2A] px-3 py-1.5 text-xs text-[#F3F1EC] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Call Studio ({STUDIO_CONTACT.phoneDisplay})
        </span>
      </a>

      {/* Book Button */}
      <button
        onClick={() => {
          onBookClick('book');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        aria-label="Book Atelier Appointment"
        className="hidden sm:inline-flex items-center gap-2 px-4 h-12 bg-[#B08D57] hover:bg-[#c49f65] text-[#0D0D0D] font-semibold text-xs tracking-wider uppercase shadow-2xl transition-all"
      >
        <Calendar className="w-4 h-4" />
        <span>Book Slot</span>
      </button>
    </div>
  );
};
