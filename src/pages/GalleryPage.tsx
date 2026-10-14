import React, { useState } from 'react';
import { PageId, GalleryProject } from '../types';
import { GALLERY_PROJECTS, STUDIO_CONTACT } from '../data/content';
import { MapPin, Clock, X, ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (page: PageId) => void;
  onBookTreatment: (treatmentName: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate, onBookTreatment }) => {
  const [filter, setFilter] = useState<'all' | 'ppf' | 'ceramic' | 'correction' | 'interior'>('all');
  const [activeModalProject, setActiveModalProject] = useState<GalleryProject | null>(null);

  const categories: { id: 'all' | 'ppf' | 'ceramic' | 'correction' | 'interior'; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'ppf', label: 'Paint Protection Film (PPF)' },
    { id: 'ceramic', label: 'Ceramic & Graphene' },
    { id: 'correction', label: 'Paint Correction' },
    { id: 'interior', label: 'Interior Leather Spa' },
  ];

  const filteredProjects = filter === 'all'
    ? GALLERY_PROJECTS
    : GALLERY_PROJECTS.filter((p) => p.category === filter);

  return (
    <div className="w-full py-16 sm:py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B08D57]">
            Atelier Archives
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#F3F1EC] [text-wrap:balance]">
            Masterpiece Transformations
          </h1>
          <p className="text-base text-[#F3F1EC]/70 leading-relaxed font-light">
            Every vehicle that enters our cleanrooms undergoes forensic photographic documentation, ultrasonic clear coat mapping, and calibrated gloss meter inspection before client delivery.
          </p>
        </div>

        {/* Filter Bar (Segmented button control) */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#171717] border border-[#2A2A2A] max-w-fit">
          {categories.map((cat) => {
            const isActive = filter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 text-xs font-medium tracking-wider uppercase transition-all ${
                  isActive
                    ? 'bg-[#0D0D0D] text-[#B08D57] border border-[#2A2A2A] shadow-sm font-semibold'
                    : 'text-[#F3F1EC]/60 hover:text-[#F3F1EC]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setActiveModalProject(proj)}
              className="bg-[#171717] border border-[#2A2A2A] group cursor-pointer overflow-hidden transition-all hover:border-[#B08D57]/60 flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute top-3 left-3 bg-[#0D0D0D]/90 border border-[#2A2A2A] px-2.5 py-1 text-[11px] text-[#B08D57] font-mono-numbers">
                    {proj.categoryLabel}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="space-y-1">
                    <h3 className="font-display text-lg font-bold text-[#F3F1EC]">
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
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="border-t border-[#2A2A2A] pt-4 flex items-center justify-between text-xs text-[#F3F1EC]/60 font-mono-numbers">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#B08D57]" /> {proj.hoursSpent} Hours
                  </span>
                  <span className="text-[#B08D57] font-medium group-hover:underline flex items-center gap-1">
                    Inspect Telemetry <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Inspector */}
        {activeModalProject && (
          <div
            className="fixed inset-0 z-50 bg-[#0D0D0D]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={() => setActiveModalProject(null)}
          >
            <div
              className="bg-[#171717] border border-[#2A2A2A] max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 bg-[#0D0D0D] border border-[#2A2A2A] flex items-center justify-center text-[#F3F1EC] hover:text-[#B08D57] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 sm:p-8 space-y-8">
                {/* Image */}
                <div className="aspect-[16/9] w-full overflow-hidden border border-[#2A2A2A]">
                  <img
                    src={activeModalProject.image}
                    alt={activeModalProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#2A2A2A] pb-4">
                    <div>
                      <span className="text-xs font-semibold tracking-wider uppercase text-[#B08D57]">
                        {activeModalProject.categoryLabel}
                      </span>
                      <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#F3F1EC]">
                        {activeModalProject.vehicle}
                      </h2>
                    </div>
                    <div className="text-xs text-[#F3F1EC]/60 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#B08D57]" />
                      <span>{activeModalProject.location}</span>
                    </div>
                  </div>

                  <p className="text-sm text-[#F3F1EC]/80 leading-relaxed font-light">
                    {activeModalProject.summary}
                  </p>
                </div>

                {/* Telemetry Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#0D0D0D] border border-[#2A2A2A]">
                  <div>
                    <span className="text-[10px] uppercase text-[#F3F1EC]/50 block">Labor Time</span>
                    <span className="text-base font-bold text-[#F3F1EC] font-mono-numbers mt-1 block">
                      {activeModalProject.hoursSpent} Hours
                    </span>
                  </div>
                  {activeModalProject.paintDepthBefore && (
                    <div>
                      <span className="text-[10px] uppercase text-[#F3F1EC]/50 block">Clear Depth (Pre)</span>
                      <span className="text-base font-bold text-[#F3F1EC] font-mono-numbers mt-1 block">
                        {activeModalProject.paintDepthBefore}
                      </span>
                    </div>
                  )}
                  {activeModalProject.paintDepthAfter && (
                    <div>
                      <span className="text-[10px] uppercase text-[#F3F1EC]/50 block">Final Depth</span>
                      <span className="text-base font-bold text-[#B08D57] font-mono-numbers mt-1 block">
                        {activeModalProject.paintDepthAfter}
                      </span>
                    </div>
                  )}
                  {activeModalProject.glossUnits && (
                    <div>
                      <span className="text-[10px] uppercase text-[#F3F1EC]/50 block">Gloss Telemetry</span>
                      <span className="text-base font-bold text-[#B08D57] font-mono-numbers mt-1 block">
                        {activeModalProject.glossUnits}
                      </span>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 border-t border-[#2A2A2A]">
                  <button
                    onClick={() => {
                      onBookTreatment(activeModalProject.categoryLabel);
                      setActiveModalProject(null);
                      onNavigate('book');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex-1 py-3.5 bg-[#B08D57] hover:bg-[#c29e66] text-[#0D0D0D] font-semibold text-xs tracking-wider uppercase text-center transition-all"
                  >
                    Request Similar Treatment For My Vehicle
                  </button>

                  <a
                    href={`https://wa.me/${STUDIO_CONTACT.whatsappNumber}?text=Hello%20Aureus,%20I%20saw%20the%20${encodeURIComponent(activeModalProject.vehicle)}%20case%20study%20and%20would%20like%20to%20discuss%20my%20car.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 bg-[#0D0D0D] hover:bg-[#222222] border border-[#2A2A2A] text-xs font-semibold tracking-wider uppercase text-[#F3F1EC] flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
