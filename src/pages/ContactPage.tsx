import React, { useState } from 'react';
import { PageId } from '../types';
import { STUDIO_CONTACT } from '../data/content';
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    studio: STUDIO_CONTACT.studios[0]?.name || 'West Coast Flagship Atelier',
    carDetails: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full py-16 sm:py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B08D57]">
            Atelier Network
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#F3F1EC] [text-wrap:balance]">
            Contact & Studio Locations
          </h1>
          <p className="text-base text-[#F3F1EC]/70 leading-relaxed font-light">
            Our cleanrooms operate strictly by appointment to maintain climate-controlled purity. Reach our concierges across our flagship atelier studios.
          </p>
        </div>

        {/* Studio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STUDIO_CONTACT.studios.map((studio) => (
            <div
              key={studio.city}
              className="bg-[#171717] border border-[#2A2A2A] p-8 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B08D57]">
                    {studio.city}
                  </span>
                  <span className="text-[11px] text-[#F3F1EC]/40 font-mono-numbers">
                    {studio.bays}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-[#F3F1EC]">
                  {studio.name}
                </h3>

                <div className="space-y-3 text-xs text-[#F3F1EC]/70">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                    <span>{studio.address}</span>
                  </div>
                  <p className="pl-6 text-[11px] text-[#B08D57]">
                    Landmark: {studio.landmark}
                  </p>
                  <div className="flex items-center gap-2 pt-2">
                    <Phone className="w-4 h-4 text-[#B08D57] shrink-0" />
                    <a href={`tel:${studio.phone}`} className="text-[#F3F1EC] font-mono-numbers hover:underline">
                      {studio.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#2A2A2A] flex items-center justify-between">
                <a
                  href={studio.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-wider text-[#B08D57] hover:underline flex items-center gap-1"
                >
                  <span>Open Maps</span>
                  <ArrowRight className="w-3 h-3" />
                </a>

                <a
                  href={`https://wa.me/${studio.phone.replace(/[^0-9]/g, '')}?text=Hello%20Aureus%20${studio.city}%20Studio,%20I%20would%20like%20to%20schedule%20a%20visit.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-wider text-[#F3F1EC]/80 hover:text-[#F3F1EC] flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Operating Hours & Concierge Protocols */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#171717] border border-[#2A2A2A] p-8 text-xs text-[#F3F1EC]/80">
          <div className="space-y-2">
            <span className="text-[#B08D57] font-semibold uppercase tracking-wider flex items-center gap-2">
              <Clock className="w-4 h-4" /> Operating Hours
            </span>
            <p className="text-[#F3F1EC]">Monday through Saturday: 09:30 AM – 08:00 PM</p>
            <p className="text-[#F3F1EC]/50">Sunday: Closed for deep bay sanitation</p>
          </div>

          <div className="space-y-2">
            <span className="text-[#B08D57] font-semibold uppercase tracking-wider flex items-center gap-2">
              <Phone className="w-4 h-4" /> Central Concierge
            </span>
            <p className="text-[#F3F1EC] font-mono-numbers">{STUDIO_CONTACT.phoneDisplay}</p>
            <p className="text-[#F3F1EC]/50">Available 7 days a week for scheduling</p>
          </div>

          <div className="space-y-2">
            <span className="text-[#B08D57] font-semibold uppercase tracking-wider flex items-center gap-2">
              <Mail className="w-4 h-4" /> Direct Dispatch Email
            </span>
            <p className="text-[#F3F1EC]">{STUDIO_CONTACT.email}</p>
            <p className="text-[#F3F1EC]/50">Response within 2 business hours</p>
          </div>
        </div>

        {/* Direct Inquiry Form */}
        <div className="bg-[#171717] border border-[#2A2A2A] p-8 sm:p-12">
          <div className="max-w-2xl space-y-4 mb-8">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B08D57]">
              Direct Inquiries
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#F3F1EC]">
              Consult with Our Technical Director
            </h2>
            <p className="text-xs sm:text-sm text-[#F3F1EC]/70">
              Submit your inquiry below or request an enclosed flatbed pickup quote.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 bg-[#0D0D0D] border border-[#B08D57]/40 text-center space-y-4">
              <CheckCircle2 className="w-10 h-10 text-[#B08D57] mx-auto" />
              <h3 className="font-display text-xl font-bold text-[#F3F1EC]">
                Inquiry Successfully Logged
              </h3>
              <p className="text-xs sm:text-sm text-[#F3F1EC]/70 max-w-md mx-auto">
                Thank you, {formState.name}. Our Master Detailer will review your vehicle specifications and reach out within 2 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 bg-[#171717] border border-[#2A2A2A] text-xs uppercase tracking-wider text-[#F3F1EC]"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#F3F1EC]/70">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Vikram Singhania"
                    className="w-full bg-[#0D0D0D] border border-[#2A2A2A] focus:border-[#B08D57] px-4 py-3 text-sm text-[#F3F1EC] outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#F3F1EC]/70">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    placeholder="(555) 000-0000"
                    className="w-full bg-[#0D0D0D] border border-[#2A2A2A] focus:border-[#B08D57] px-4 py-3 text-sm text-[#F3F1EC] outline-none transition-colors font-mono-numbers"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#F3F1EC]/70">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="e.g. patron@example.com"
                    className="w-full bg-[#0D0D0D] border border-[#2A2A2A] focus:border-[#B08D57] px-4 py-3 text-sm text-[#F3F1EC] outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#F3F1EC]/70">
                    Preferred Studio City *
                  </label>
                  <select
                    value={formState.studio}
                    onChange={(e) => setFormState({ ...formState, studio: e.target.value })}
                    className="w-full bg-[#0D0D0D] border border-[#2A2A2A] focus:border-[#B08D57] px-4 py-3 text-sm text-[#F3F1EC] outline-none transition-colors"
                  >
                    {STUDIO_CONTACT.studios.map((st) => (
                      <option key={st.name} value={st.name}>
                        {st.name} — {st.city}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#F3F1EC]/70">
                  Vehicle Make & Model
                </label>
                <input
                  type="text"
                  value={formState.carDetails}
                  onChange={(e) => setFormState({ ...formState, carDetails: e.target.value })}
                  placeholder="e.g. 2024 Porsche 911 GT3 RS / Mercedes-AMG G63"
                  className="w-full bg-[#0D0D0D] border border-[#2A2A2A] focus:border-[#B08D57] px-4 py-3 text-sm text-[#F3F1EC] outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#F3F1EC]/70">
                  Message / Special Detailing Requirements
                </label>
                <textarea
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Detail any specific swirl issues, stone chips, desired PPF coverage, or enclosed flatbed requests..."
                  className="w-full bg-[#0D0D0D] border border-[#2A2A2A] focus:border-[#B08D57] px-4 py-3 text-sm text-[#F3F1EC] outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#B08D57] hover:bg-[#c29e66] text-[#0D0D0D] font-semibold text-xs tracking-wider uppercase transition-all shadow-md"
                >
                  Submit Inquiry to Concierge
                </button>

                <button
                  type="button"
                  onClick={() => {
                    onNavigate('book');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs uppercase tracking-wider text-[#B08D57] hover:underline"
                >
                  Need a direct appointment slot? Book Online →
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
