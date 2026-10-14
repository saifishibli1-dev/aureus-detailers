import React, { useState } from 'react';
import { PageId, CarSegment } from '../types';
import { SERVICES_DATA, PRICING_PACKAGES, STUDIO_CONTACT } from '../data/content';
import { Calendar, Clock, CheckCircle2, Phone, MessageSquare, Shield, Car, MapPin, Truck } from 'lucide-react';

interface BookAppointmentPageProps {
  onNavigate: (page: PageId) => void;
  preselectedService?: string;
}

export const BookAppointmentPage: React.FC<BookAppointmentPageProps> = ({
  onNavigate,
  preselectedService = '',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: STUDIO_CONTACT.studios[0]?.name || 'West Coast Flagship Atelier',
    carMakeModel: '',
    carSegment: 'sedan' as CarSegment,
    service: preselectedService || 'Self-Healing Paint Protection Film (PPF)',
    preferredDate: '',
    preferredTime: '09:30 AM (Morning Bay Ingestion)',
    pickupRequired: false,
    message: '',
  });

  const [bookingRef, setBookingRef] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Available service options combining individual services and packages
  const serviceOptions = [
    'Self-Healing Paint Protection Film (PPF)',
    '3-Stage Paint Leveling & Correction',
    '10H Graphene & Ceramic Matrix Coating',
    'Bespoke Interior Restoration & Leather Spa',
    'Wheel, Caliper & Glass Hydrophobic Armor',
    'Package: Atelier Essential (from $750)',
    'Package: Signature Ceramic & Restoration (from $1,650)',
    'Package: Track Armor Front PPF + Ceramic (from $2,850)',
    'Package: Sovereign Full-Body PPF (from $4,950)',
    'Custom / Multi-Car Collection Consultation',
  ];

  const timeSlots = [
    '09:30 AM (Morning Bay Ingestion)',
    '11:30 AM (Mid-Day Ultrasonic Inspection)',
    '02:30 PM (Afternoon Consultation)',
    '05:30 PM (Evening Twilight Bay Walkthrough)',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate luxury reservation processing
    setTimeout(() => {
      const randomRef = `AUR-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setBookingRef(randomRef);
      setIsSubmitting(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 450);
  };

  const handleReset = () => {
    setBookingRef(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      city: STUDIO_CONTACT.studios[0]?.name || 'West Coast Flagship Atelier',
      carMakeModel: '',
      carSegment: 'sedan',
      service: 'Self-Healing Paint Protection Film (PPF)',
      preferredDate: '',
      preferredTime: '09:30 AM (Morning Bay Ingestion)',
      pickupRequired: false,
      message: '',
    });
  };

  // Min date today
  const todayString = new Date().toISOString().split('T')[0];

  return (
    <div className="w-full py-16 sm:py-24 bg-[#0D0D0D]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B08D57]">
            Private Bay Reservation
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#F3F1EC] [text-wrap:balance]">
            Book Your Detailing Appointment
          </h1>
          <p className="text-sm text-[#F3F1EC]/70 leading-relaxed font-light">
            Due to our Class 10,000 cleanroom protocols and strict climate control, each studio bay admits only one vehicle per designated time window.
          </p>
        </div>

        {bookingRef ? (
          /* Confirmation State */
          <div className="bg-[#171717] border border-[#B08D57] p-8 sm:p-12 space-y-8 shadow-2xl">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-[#0D0D0D] border border-[#B08D57] rounded-full flex items-center justify-center mx-auto text-[#B08D57]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B08D57] block">
                Appointment Reserved
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#F3F1EC]">
                Bay Slot Provisionally Confirmed
              </h2>
              <p className="text-xs sm:text-sm text-[#F3F1EC]/70 max-w-lg mx-auto">
                Thank you, <strong className="text-[#F3F1EC]">{formData.fullName}</strong>. Your dedicated Master Detailer has reserved a climate-controlled bay for your <strong className="text-[#B08D57]">{formData.carMakeModel || 'vehicle'}</strong>.
              </p>
            </div>

            {/* Reservation Summary Card */}
            <div className="bg-[#0D0D0D] border border-[#2A2A2A] p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#2A2A2A] pb-4 gap-2">
                <div>
                  <span className="text-[10px] uppercase text-[#F3F1EC]/50 tracking-wider">Booking Dossier Ref</span>
                  <div className="text-xl font-bold text-[#B08D57] font-mono-numbers">{bookingRef}</div>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-[10px] uppercase text-[#F3F1EC]/50 tracking-wider">Studio Atelier</span>
                  <div className="text-sm font-semibold text-[#F3F1EC]">{formData.city} Atelier</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-xs text-[#F3F1EC]/80">
                <div>
                  <span className="text-[10px] text-[#F3F1EC]/40 uppercase block">Vehicle</span>
                  <span className="font-medium text-[#F3F1EC] mt-0.5 block">{formData.carMakeModel || 'Not Specified'}</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#F3F1EC]/40 uppercase block">Service Treatment</span>
                  <span className="font-medium text-[#B08D57] mt-0.5 block">{formData.service}</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#F3F1EC]/40 uppercase block">Preferred Window</span>
                  <span className="font-medium text-[#F3F1EC] mt-0.5 block font-mono-numbers">
                    {formData.preferredDate || 'Earliest Available'} · {formData.preferredTime.split(' (')[0]}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-[#F3F1EC]/40 uppercase block">Client Contact</span>
                  <span className="font-medium text-[#F3F1EC] mt-0.5 block font-mono-numbers">{formData.phone}</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#F3F1EC]/40 uppercase block">Enclosed Flatbed</span>
                  <span className="font-medium text-[#F3F1EC] mt-0.5 block">
                    {formData.pickupRequired ? 'Requested (White-glove hydraulic flatbed)' : 'Self-Drive Drop-off'}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-[#F3F1EC]/40 uppercase block">Bay Inspection Status</span>
                  <span className="text-emerald-400 font-medium mt-0.5 block">Pre-allocated Cleanroom</span>
                </div>
              </div>
            </div>

            {/* Direct Instant WhatsApp & Call Connect with Reference ID */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4">
              <a
                href={`https://wa.me/${STUDIO_CONTACT.whatsappNumber}?text=Hello%20Aureus,%20I%20have%20submitted%20booking%20ref%20${bookingRef}%20for%20my%20${encodeURIComponent(formData.carMakeModel)}.%20Please%20confirm%20bay%20availability.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-4 bg-[#25D366] hover:bg-[#20ba5a] text-[#0D0D0D] font-semibold text-xs tracking-wider uppercase text-center flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm Instantly on WhatsApp</span>
              </a>

              <a
                href={`tel:${STUDIO_CONTACT.phone}`}
                className="py-4 px-6 bg-[#0D0D0D] hover:bg-[#222222] border border-[#2A2A2A] text-xs font-semibold tracking-wider uppercase text-[#F3F1EC] flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#B08D57]" />
                <span>Call Concierge: {STUDIO_CONTACT.phoneDisplay}</span>
              </a>

              <button
                onClick={handleReset}
                className="py-4 px-6 border border-[#2A2A2A] text-xs uppercase tracking-wider text-[#F3F1EC]/70 hover:text-[#F3F1EC]"
              >
                Book Another Car
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <div className="bg-[#171717] border border-[#2A2A2A] p-8 sm:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Section 1: Vehicle & Location Details */}
              <div className="space-y-6">
                <div className="border-b border-[#2A2A2A] pb-3">
                  <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B08D57] flex items-center gap-2">
                    <Car className="w-4 h-4" /> Vehicle & Atelier Location
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#F3F1EC]/70">
                      Studio Location *
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-[#0D0D0D] border border-[#2A2A2A] focus:border-[#B08D57] px-4 py-3 text-sm text-[#F3F1EC] outline-none transition-colors"
                    >
                      {STUDIO_CONTACT.studios.map((st) => (
                        <option key={st.name} value={st.name}>
                          {st.name} ({st.city})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#F3F1EC]/70">
                      Car Make & Model *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.carMakeModel}
                      onChange={(e) => setFormData({ ...formData, carMakeModel: e.target.value })}
                      placeholder="e.g. Porsche 911 GT3 RS / Mercedes-Maybach S680"
                      className="w-full bg-[#0D0D0D] border border-[#2A2A2A] focus:border-[#B08D57] px-4 py-3 text-sm text-[#F3F1EC] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#F3F1EC]/70">
                      Vehicle Chassis Type *
                    </label>
                    <select
                      value={formData.carSegment}
                      onChange={(e) => setFormData({ ...formData, carSegment: e.target.value as CarSegment })}
                      className="w-full bg-[#0D0D0D] border border-[#2A2A2A] focus:border-[#B08D57] px-4 py-3 text-sm text-[#F3F1EC] outline-none transition-colors"
                    >
                      <option value="coupe">Sports & Coupe (e.g. Porsche 911, Ferrari 296, M2)</option>
                      <option value="sedan">Executive Sedan (e.g. S-Class, BMW 7, Panamera)</option>
                      <option value="suv">Luxury SUV & Flagship (e.g. Defender, Urus, Range Rover)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#F3F1EC]/70">
                      Desired Detailing Service / Package *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#0D0D0D] border border-[#2A2A2A] focus:border-[#B08D57] px-4 py-3 text-sm text-[#F3F1EC] outline-none transition-colors"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 2: Preferred Time & Logistics */}
              <div className="space-y-6">
                <div className="border-b border-[#2A2A2A] pb-3">
                  <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B08D57] flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> Preferred Bay Date & Time Window
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#F3F1EC]/70">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      required
                      min={todayString}
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-[#0D0D0D] border border-[#2A2A2A] focus:border-[#B08D57] px-4 py-3 text-sm text-[#F3F1EC] outline-none transition-colors font-mono-numbers"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#F3F1EC]/70">
                      Preferred Time Slot *
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full bg-[#0D0D0D] border border-[#2A2A2A] focus:border-[#B08D57] px-4 py-3 text-sm text-[#F3F1EC] outline-none transition-colors font-mono-numbers"
                    >
                      {timeSlots.map((ts) => (
                        <option key={ts} value={ts}>
                          {ts}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Flatbed toggle */}
                <div className="p-4 bg-[#0D0D0D] border border-[#2A2A2A] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Truck className="w-5 h-5 text-[#B08D57]" />
                    <div>
                      <span className="text-xs font-semibold text-[#F3F1EC] block">
                        Require Enclosed Hydraulic Flatbed Transport?
                      </span>
                      <span className="text-[11px] text-[#F3F1EC]/50">
                        Zero additional road mileage. Picked up directly from your residence or corporate garage.
                      </span>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={formData.pickupRequired}
                    onChange={(e) => setFormData({ ...formData, pickupRequired: e.target.checked })}
                    className="w-5 h-5 accent-[#B08D57] cursor-pointer"
                  />
                </div>
              </div>

              {/* Section 3: Patron Contact Information */}
              <div className="space-y-6">
                <div className="border-b border-[#2A2A2A] pb-3">
                  <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B08D57] flex items-center gap-2">
                    <Shield className="w-4 h-4" /> Patron Identification & Contact
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#F3F1EC]/70">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Marcus Vance"
                      className="w-full bg-[#0D0D0D] border border-[#2A2A2A] focus:border-[#B08D57] px-4 py-3 text-sm text-[#F3F1EC] outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#F3F1EC]/70">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 000-0000"
                      className="w-full bg-[#0D0D0D] border border-[#2A2A2A] focus:border-[#B08D57] px-4 py-3 text-sm text-[#F3F1EC] outline-none transition-colors font-mono-numbers"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#F3F1EC]/70">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="patron@company.com"
                      className="w-full bg-[#0D0D0D] border border-[#2A2A2A] focus:border-[#B08D57] px-4 py-3 text-sm text-[#F3F1EC] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#F3F1EC]/70">
                    Special Instructions / Vehicle History
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details such as previous repaints, PPF removal needs, matte finish vs high gloss preference, or specific transit logistics..."
                    className="w-full bg-[#0D0D0D] border border-[#2A2A2A] focus:border-[#B08D57] px-4 py-3 text-sm text-[#F3F1EC] outline-none transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Submit & Guarantee */}
              <div className="pt-4 border-t border-[#2A2A2A] space-y-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#B08D57] hover:bg-[#c29e66] text-[#0D0D0D] font-semibold text-xs tracking-[0.2em] uppercase transition-all shadow-xl disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? 'Securing Cleanroom Bay...' : 'Confirm Appointment Reservation'}
                </button>

                <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#F3F1EC]/50 gap-2 text-center sm:text-left">
                  <span>No upfront payment required for slot reservation</span>
                  <span>Direct phone confirmation by Master Detailer within 2 hours</span>
                </div>
              </div>
            </form>
          </div>
        )}

        {/* Quick Help Strip */}
        <div className="bg-[#171717] border border-[#2A2A2A] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-sm font-semibold text-[#F3F1EC]">Prefer to schedule over the phone?</h3>
            <p className="text-xs text-[#F3F1EC]/60">Our Concierge Directors are available Monday – Saturday.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${STUDIO_CONTACT.phone}`}
              className="px-4 py-2 border border-[#2A2A2A] hover:border-[#B08D57] text-xs text-[#F3F1EC] flex items-center gap-2 font-mono-numbers"
            >
              <Phone className="w-3.5 h-3.5 text-[#B08D57]" />
              <span>{STUDIO_CONTACT.phoneDisplay}</span>
            </a>
            <a
              href={`https://wa.me/${STUDIO_CONTACT.whatsappNumber}?text=Hello%20Aureus,%20I%20would%20like%20to%20book%20an%20appointment%20via%20WhatsApp.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#141414] border border-[#2A2A2A] text-xs text-[#F3F1EC] flex items-center gap-2 hover:border-[#25D366]"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
