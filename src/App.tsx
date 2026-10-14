import React, { useState } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingConcierge } from './components/FloatingConcierge';
import { SmoothScroll, scrollToTarget } from './components/SmoothScroll';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BookAppointmentPage } from './pages/BookAppointmentPage';
import { PremiumLoader } from './components/PremiumLoader';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [preselectedService, setPreselectedService] = useState<string>('');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('paint-protection-film');

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    scrollToTarget(0, { immediate: true });
  };

  const handleServiceSelectForDetails = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    handleNavigate('services');
  };

  const handleBookService = (serviceName: string) => {
    setPreselectedService(serviceName);
    handleNavigate('book');
  };

  return (
    <SmoothScroll>
      <PremiumLoader />
      <div className="min-h-screen bg-[#0D0D0D] text-[#F3F1EC] flex flex-col selection:bg-[#B08D57]/30 selection:text-[#F3F1EC]">
        {/* 3-Zone Strict Top Bar Navigation */}
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

        {/* Main Page Content */}
        <main className="flex-1 w-full">
          {currentPage === 'home' && (
            <HomePage
              onNavigate={handleNavigate}
              onSelectService={handleServiceSelectForDetails}
            />
          )}

          {currentPage === 'services' && (
            <ServicesPage
              onNavigate={handleNavigate}
              onSelectServiceForBooking={handleBookService}
              initialServiceId={selectedServiceId}
            />
          )}

          {currentPage === 'gallery' && (
            <GalleryPage
              onNavigate={handleNavigate}
              onBookTreatment={handleBookService}
            />
          )}

          {currentPage === 'pricing' && (
            <PricingPage
              onNavigate={handleNavigate}
              onSelectPackageForBooking={handleBookService}
            />
          )}

          {currentPage === 'about' && (
            <AboutPage onNavigate={handleNavigate} />
          )}

          {currentPage === 'contact' && (
            <ContactPage onNavigate={handleNavigate} />
          )}

          {currentPage === 'book' && (
            <BookAppointmentPage
              onNavigate={handleNavigate}
              preselectedService={preselectedService}
            />
          )}
        </main>

        {/* Floating Concierge (WhatsApp, Call & Book Quick Access) */}
        <FloatingConcierge onBookClick={handleNavigate} />

        {/* Editorial Luxury Footer */}
        <Footer onNavigate={handleNavigate} />
      </div>
    </SmoothScroll>
  );
}
