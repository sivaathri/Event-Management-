import React from 'react';
import logoImg from '../assets/logo3.png';

export default function Logo({ size = 'sm', light = false }) {
  const isSm = size === 'sm';
  
  // Tapered Line pointing left (thick on right, thin on left)
  const TaperLineLeft = () => (
    <svg className={`h-[4px] ${isSm ? 'w-6 sm:w-8' : 'w-12 md:w-16'} fill-current`} viewBox="0 0 60 4">
      <path d="M 0,2 L 60,0 L 60,4 Z" />
    </svg>
  );

  // Tapered Line pointing right (thick on left, thin on right)
  const TaperLineRight = () => (
    <svg className={`h-[4px] ${isSm ? 'w-6 sm:w-8' : 'w-12 md:w-16'} fill-current`} viewBox="0 0 60 4">
      <path d="M 0,0 L 60,2 L 0,4 Z" />
    </svg>
  );

  return (
    <div className="flex flex-col items-center select-none font-serif py-1 animate-fade-in">
      
      {/* Top Logo Image ("LIGHTS" cursive) */}
      <div className={`flex items-center justify-center ${isSm ? 'h-8 sm:h-10 md:h-[42px] mb-1' : 'h-24 sm:h-32 md:h-[200px] mb-4'}`}>
        <img 
          src={logoImg} 
          alt="LIGHTS" 
          style={{
            imageRendering: 'auto',
            WebkitImageRendering: 'optimize-contrast',
          }}
          className={`h-full w-auto object-contain transition-all duration-300 ${
            light ? 'brightness-0 invert' : 'mix-blend-multiply'
          }`}
        />
      </div>

      {/* Row 1: Tapered Line — EVENT MANAGEMENT — Tapered Line */}
      <div className={`flex items-center justify-center w-full ${light ? 'text-white/80' : 'text-brand-emerald'} ${
        isSm ? 'space-x-1 sm:space-x-2' : 'space-x-3'
      }`}>
        <TaperLineLeft />
        <span 
          className={`font-serif tracking-[0.2em] uppercase font-semibold whitespace-nowrap ${
            isSm ? 'text-[9px] md:text-[10px]' : 'text-xs md:text-sm'
          }`}
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Event Management
        </span>
        <TaperLineRight />
      </div>

      {/* Row 2: Central Ornament (Tapered Line -> Dot -> Diamond -> Dot -> Tapered Line) */}
      <div className={`flex items-center justify-center w-full ${
        light ? 'text-white/60' : 'text-brand-emerald'
      }`}>
        <svg 
          className={`${isSm ? 'w-[100px] sm:w-[110px] h-[10px]' : 'w-[180px] md:w-[220px] h-[14px]'} fill-current`} 
          viewBox="0 0 200 16"
        >
          {/* Central Diamond Star */}
          <path d="M 100,2 L 105,8 L 100,14 L 95,8 Z" />
          
          {/* Dots on side */}
          <circle cx="88" cy="8" r="1.8" />
          <circle cx="112" cy="8" r="1.8" />
          
          {/* Left Tapered Line */}
          <path d="M 30,8 L 80,6.8 L 80,9.2 Z" />
          
          {/* Right Tapered Line */}
          <path d="M 120,6.8 L 170,8 L 120,9.2 Z" />
        </svg>
      </div>

      {/* Row 3: BY NDJ GROUPS */}
      <span 
        className={`font-sans tracking-[0.3em] uppercase font-bold text-center ${
          isSm ? 'text-[8px] md:text-[9px] -mt-1' : 'text-[10px] md:text-[11px] mt-0.5'
        } ${light ? 'text-white/70' : 'text-brand-emerald/90'}`}
      >
        By NDJ Groups
      </span>

    </div>
  );
}
