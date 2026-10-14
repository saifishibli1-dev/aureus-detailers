import React, { useState, useRef, useCallback } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  aspectRatio?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Uncorrected / Swirl Marks',
  afterLabel = '3-Stage Leveling & 10H Ceramic',
  aspectRatio = 'aspect-[16/9] sm:aspect-[21/9]',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percentage = (clampedX / rect.width) * 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div className="w-full select-none">
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className={`relative ${aspectRatio} w-full overflow-hidden border border-[#2A2A2A] bg-[#171717] cursor-ew-resize`}
        role="slider"
        aria-valuenow={Math.round(sliderPosition)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Before and after paint correction slider"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') setSliderPosition((prev) => Math.max(0, prev - 5));
          if (e.key === 'ArrowRight') setSliderPosition((prev) => Math.min(100, prev + 5));
        }}
      >
        {/* After Image (Background, Full) */}
        <img
          src={afterImage}
          alt={afterLabel}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          {/* Inner image has full container width to avoid scale distortion */}
          <div className="relative w-full h-full" style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}>
            <img
              src={beforeImage}
              alt={beforeLabel}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover filter brightness-90 contrast-95"
            />
            {/* Realistic swirl/haze overlay emulation on the uncorrected half */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-amber-900/10 to-stone-900/40 mix-blend-color-dodge opacity-30" />
          </div>
        </div>

        {/* Vertical Divider Line with Gold Handle */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-[#B08D57] pointer-events-none shadow-[0_0_12px_rgba(176,141,87,0.5)]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0D0D0D] border-2 border-[#B08D57] flex items-center justify-center text-[#B08D57] shadow-lg pointer-events-none">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
              <polyline points="9 18 3 12 9 6" />
            </svg>
          </div>
        </div>

        {/* Labels Overlay */}
        <div className="absolute top-4 left-4 pointer-events-none bg-[#0D0D0D]/80 backdrop-blur-sm border border-[#2A2A2A] px-3 py-1.5 text-xs tracking-wider uppercase text-[#F3F1EC]/80 font-mono-numbers">
          {beforeLabel}
        </div>
        <div className="absolute top-4 right-4 pointer-events-none bg-[#0D0D0D]/80 backdrop-blur-sm border border-[#2A2A2A] px-3 py-1.5 text-xs tracking-wider uppercase text-[#B08D57] font-mono-numbers">
          {afterLabel}
        </div>

        {/* Bottom indicator hint */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none bg-[#0D0D0D]/75 backdrop-blur-sm border border-[#2A2A2A] px-4 py-1 text-[11px] tracking-wider uppercase text-[#F3F1EC]/60 hidden sm:block">
          Drag horizontally or touch to inspect paint surface
        </div>
      </div>
    </div>
  );
};
