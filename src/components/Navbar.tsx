import React, { useState } from 'react';
import { PageId } from '../types';
import { Menu, X, Phone, Calendar, ArrowRight } from 'lucide-react';
import { STUDIO_CONTACT } from '../data/content';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'pricing', label: 'Packages' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0D0D0D]/95 backdrop-blur-md border-b border-[#2A2A2A] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark (Single text element in display face) */}
        <button
          onClick={() => handleLinkClick('home')}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <span className="font-display text-xl sm:text-2xl font-bold tracking-[0.25em] text-[#F3F1EC] transition-colors group-hover:text-[#B08D57]">
            AUREUS
          </span>
        </button>

        {/* Zone 2: Navigation Links (Text with subtle hover state) */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-sm tracking-wider uppercase transition-colors relative py-1 focus:outline-none ${
                  isActive
                    ? 'text-[#B08D57] font-semibold'
                    : 'text-[#F3F1EC]/80 hover:text-[#F3F1EC]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#B08D57]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href={`tel:${STUDIO_CONTACT.phone}`}
            className="flex items-center gap-2 text-xs tracking-wider text-[#F3F1EC]/70 hover:text-[#F3F1EC] transition-colors py-2 px-3 border border-[#2A2A2A] rounded-none hover:border-[#B08D57]"
          >
            <Phone className="w-3.5 h-3.5 text-[#B08D57]" />
            <span className="font-mono-numbers">{STUDIO_CONTACT.phoneDisplay}</span>
          </a>

          <button
            onClick={() => handleLinkClick('book')}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#EA580C] hover:bg-[#c2410c] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-md focus:outline-none cursor-pointer"
          >
            <span>Book Appointment</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={() => handleLinkClick('book')}
            className="px-3 py-1.5 bg-[#EA580C] text-white text-xs font-bold tracking-wider uppercase"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#F3F1EC] hover:text-[#B08D57] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#171717] border-b border-[#2A2A2A] px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left text-base tracking-wider uppercase py-2 border-b border-[#2A2A2A]/50 ${
                  currentPage === link.id
                    ? 'text-[#B08D57] font-semibold'
                    : 'text-[#F3F1EC]/80'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => handleLinkClick('book')}
              className="w-full py-3 bg-[#B08D57] text-[#0D0D0D] font-semibold text-xs tracking-wider uppercase text-center"
            >
              Book Appointment
            </button>
            <a
              href={`tel:${STUDIO_CONTACT.phone}`}
              className="w-full py-2.5 border border-[#2A2A2A] text-center text-xs tracking-wider text-[#F3F1EC]/90 flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#B08D57]" />
              <span>Call Concierge: {STUDIO_CONTACT.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
