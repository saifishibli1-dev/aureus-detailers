import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';

declare global {
  interface Window {
    __lenis?: Lenis | null;
  }
}

interface SmoothScrollProps {
  children: React.ReactNode;
}

export const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Respect user's motion preference
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Balanced Lenis configuration for luxury, cinematic, weighted feel
    const lenis = new Lenis({
      duration: prefersReducedMotion ? 0.01 : 1.15, // Smooth, controlled, not sluggish (1.0 - 1.2)
      smoothWheel: !prefersReducedMotion,
      wheelMultiplier: 0.85, // Balanced wheel factor (0.8 - 0.9) for steady control
      touchMultiplier: 1.0,
      syncTouch: false, // Keep native touch scrolling on mobile for immediate tactile response
      respectReducedMotion: true,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Subtle exponential deceleration
      autoResize: true,
    });

    lenisRef.current = lenis;
    window.__lenis = lenis;

    // RAF animation loop
    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Synchronize native window resize and content updates
    const handleResize = () => {
      lenis.resize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return <>{children}</>;
};

/**
 * Helper to smoothly scroll to a target position or element with Lenis
 */
export function scrollToTarget(
  target: number | HTMLElement | string,
  options?: { offset?: number; immediate?: boolean; duration?: number }
) {
  if (typeof window !== 'undefined' && window.__lenis) {
    window.__lenis.scrollTo(target, {
      offset: options?.offset ?? 0,
      immediate: options?.immediate ?? false,
      duration: options?.duration ?? 1.15,
    });
  } else if (typeof window !== 'undefined') {
    if (typeof target === 'number') {
      window.scrollTo({
        top: target,
        behavior: options?.immediate ? 'auto' : 'smooth',
      });
    } else if (target instanceof HTMLElement) {
      target.scrollIntoView({
        behavior: options?.immediate ? 'auto' : 'smooth',
      });
    }
  }
}
