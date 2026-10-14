import React, { useEffect, useState } from 'react';
import { aureusLoadingSupercar } from '../assets/images';

interface PremiumLoaderProps {
  onLoaded?: () => void;
}

export const PremiumLoader: React.FC<PremiumLoaderProps> = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [phaseText, setPhaseText] = useState('PREPARING ATELIER');
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isRendered, setIsRendered] = useState(true);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    // Immediate smooth entry animation trigger
    const enterTimer = setTimeout(() => {
      setHasEntered(true);
    }, 50);

    const phases = [
      { at: 20, text: 'PREPARING ATELIER' },
      { at: 50, text: 'CALIBRATING OPTICS & FINISHES' },
      { at: 80, text: 'ALIGNING CONCOURS STANDARDS' },
      { at: 100, text: 'WELCOME TO AUREUS' },
    ];

    // Smooth incremental progress that completes briskly (approx 1.4s)
    const startTime = performance.now();
    const targetDuration = 1400; // ms

    const interval = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const calculatedProgress = Math.min(100, Math.floor((elapsed / targetDuration) * 100));

      setProgress(calculatedProgress);

      const currentPhase = phases.slice().reverse().find((p) => calculatedProgress >= p.at);
      if (currentPhase) {
        setPhaseText(currentPhase.text);
      }

      if (calculatedProgress >= 100) {
        clearInterval(interval);
        // Start smooth fade-out transition
        setTimeout(() => {
          setIsFadingOut(true);
          onLoaded?.();
        }, 150);

        // Completely unmount after fade-out transition (600ms)
        setTimeout(() => {
          setIsRendered(false);
        }, 750);
      }
    }, 35);

    // Hard fallback failsafe: never let loader hang under any circumstances
    const safetyTimeout = setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
      setIsFadingOut(true);
      onLoaded?.();
      setTimeout(() => setIsRendered(false), 700);
    }, 2500);

    return () => {
      clearTimeout(enterTimer);
      clearInterval(interval);
      clearTimeout(safetyTimeout);
    };
  }, [onLoaded]);

  // If already unmounted, render null to free resources
  if (!isRendered) {
    return null;
  }

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading Aureus Bespoke Auto Atelier"
      className={`fixed inset-0 z-[100] flex flex-col justify-between bg-[#080808] text-[#F3F1EC] transition-all duration-700 ease-out select-none overflow-hidden ${
        hasEntered ? 'opacity-100' : 'opacity-0'
      } ${
        isFadingOut ? 'opacity-0 pointer-events-none scale-[1.02] filter blur-[2px]' : ''
      }`}
    >
      {/* Background Cinematic Supercar Photograph */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={aureusLoadingSupercar}
          alt="Aureus Bespoke Supercar Atelier"
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover object-center transition-all duration-1500 ease-out ${
            hasEntered ? 'scale-100 opacity-45' : 'scale-110 opacity-0'
          }`}
        />
        {/* Gradients to blend seamless black aesthetic with champagne highlights */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/75 to-[#080808]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#080808_85%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-transparent to-[#080808] opacity-70" />
      </div>

      {/* Subtle Atelier Framing Border */}
      <div className="absolute inset-4 sm:inset-6 md:inset-8 border border-[#B08D57]/15 pointer-events-none z-10 transition-opacity duration-1000">
        {/* Subtle corner ticks */}
        <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-2 border-l-2 border-[#B08D57]/60" />
        <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-2 border-r-2 border-[#B08D57]/60" />
        <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-2 border-l-2 border-[#B08D57]/60" />
        <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-2 border-r-2 border-[#B08D57]/60" />
      </div>

      {/* Top Bar: Editorial Atelier Credentials */}
      <header className="relative z-20 w-full px-6 sm:px-10 md:px-14 pt-8 sm:pt-10 flex items-center justify-between text-[10px] sm:text-xs tracking-[0.25em] font-mono-numbers">
        <div className="flex items-center gap-2 text-[#F3F1EC]/70">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B08D57] animate-pulse" />
          <span>AUREUS BESPOKE AUTO ATELIER</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-[#B08D57]/90 uppercase">
          <span>SPECIFICATION // CONCOURS 01</span>
          <span className="text-[#F3F1EC]/30">•</span>
          <span>EST. 2018</span>
        </div>
      </header>

      {/* Center Zone: Cinematic Luxury Typography & Wordmark */}
      <main className="relative z-20 w-full max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center my-auto">
        {/* Micro Atelier Tag */}
        <div
          className={`flex items-center gap-3 mb-4 sm:mb-6 transition-all duration-700 delay-100 ${
            hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-[#B08D57]/60" />
          <span className="text-[10px] sm:text-xs font-medium tracking-[0.3em] uppercase text-[#B08D57] font-mono-numbers">
            HAUTE AUTOMOTIVE CRAFT
          </span>
          <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-[#B08D57]/60" />
        </div>

        {/* Primary Wordmark */}
        <h1
          className={`font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[0.32em] text-[#F3F1EC] transition-all duration-1000 delay-150 ${
            hasEntered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          AUREUS
        </h1>

        {/* Subtitle with champagne styling */}
        <p
          className={`font-luxury text-base sm:text-xl md:text-2xl text-[#E5C992] tracking-wider italic mt-2 sm:mt-3 max-w-xl transition-all duration-700 delay-250 ${
            hasEntered ? 'opacity-90 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          Concourse Surface Engineering &amp; Preservation
        </p>

        {/* Minimal Animated Loading Indicator */}
        <div className="mt-8 sm:mt-12 w-full max-w-xs sm:max-w-sm flex flex-col items-center">
          {/* Subtle Progress Bar */}
          <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative backdrop-blur-sm">
            <div
              className="h-full bg-gradient-to-r from-[#B08D57]/60 via-[#F3E5AB] to-[#B08D57] transition-all duration-150 ease-out shadow-[0_0_12px_rgba(229,201,146,0.6)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Numerical Progress & Status Indicator */}
          <div className="w-full flex items-center justify-between mt-3 text-[10px] sm:text-[11px] font-mono-numbers">
            <span className="text-[#F3F1EC]/50 uppercase tracking-[0.2em] truncate pr-2">
              {phaseText}
            </span>
            <span className="text-[#B08D57] font-medium tracking-widest pl-2">
              {String(progress).padStart(3, '0')}%
            </span>
          </div>
        </div>
      </main>

      {/* Bottom Footer Bar: Technical Precision & Atelier Metas */}
      <footer className="relative z-20 w-full px-6 sm:px-10 md:px-14 pb-8 sm:pb-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[9px] sm:text-[10px] tracking-[0.25em] text-[#F3F1EC]/40 uppercase font-mono-numbers">
        <div className="flex items-center gap-3">
          <span>PPF</span>
          <span>•</span>
          <span>MULTI-STAGE CERAMIC</span>
          <span>•</span>
          <span>RESTORATION</span>
        </div>
        <div className="flex items-center gap-2 text-[#B08D57]/70">
          <span>PRIVATE ATELIER VAULT</span>
          <span className="text-[#F3F1EC]/30">//</span>
          <span>CALIFORNIA • NEW YORK • CHICAGO</span>
        </div>
      </footer>
    </div>
  );
};
