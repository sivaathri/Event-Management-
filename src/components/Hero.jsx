import React from 'react';
import { ArrowRight } from 'lucide-react';
import Logo from './Logo';
import herobg from '../assets/herobg.png';
import herologo from '../assets/homebg1.png';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 md:pt-28 md:pb-32 bg-no-repeat overflow-hidden flex items-center bg-cover bg-center lg:bg-right lg:bg-[length:auto_85%]"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">

          {/* Left Column: Copy & Actions */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col items-start text-left space-y-4 sm:space-y-6 z-20">

            {/* Tagline */}
            <span className="text-xs md:text-sm font-sans font-bold uppercase tracking-[0.25em] text-brand-emerald">
              We Plan • We Manage • You Celebrate
            </span>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-[42px] lg:text-5xl xl:text-[54px] font-serif text-slate-800 leading-[1.12] font-normal tracking-wide">
              Creating Unforgettable{' '}
              <span className="block text-brand-emerald mt-2 font-medium">
                Celebrations &
              </span>
              <span className="block text-brand-emerald mt-2 font-medium">
                Luxury Events
              </span>
            </h1>

            {/* Horizontal Divider Line with Diamond in the center */}
            <div className="flex items-center space-x-2 py-1 w-full max-w-[280px]">
              <div className="h-[1px] bg-slate-300 flex-grow"></div>
              <span className="text-brand-emerald text-sm">✦</span>
              <div className="h-[1px] bg-slate-300 flex-grow"></div>
            </div>

            {/* Description */}
            <p className="text-[13px] sm:text-sm md:text-base text-slate-500 max-w-sm md:max-w-md leading-relaxed font-sans font-light">
              From weddings to corporate events, LIGHTS Event Management transforms your vision into extraordinary experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-brand-emerald hover:bg-[#021C0D] text-white text-xs font-bold uppercase tracking-widest rounded-md shadow-lg shadow-brand-emerald/10 hover:shadow-xl hover:shadow-brand-emerald/20 transition-all duration-300 transform hover:-translate-y-0.5 group whitespace-nowrap"
              >
                Book Consultation
                <ArrowRight size={14} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-700 hover:text-brand-emerald border border-slate-300 hover:border-brand-emerald/30 text-xs font-bold uppercase tracking-widest rounded-md shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 group whitespace-nowrap"
              >
                View Services
                <ArrowRight size={14} className="ml-2 text-slate-400 group-hover:text-brand-emerald transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

          {/* Right Column: Large Logo overlaying the background stage image */}
          <div className="md:col-span-6 lg:col-span-7 flex flex-col items-center md:items-start justify-center md:justify-start pt-0 mt-8 md:mt-0 z-20 h-[320px] sm:h-[380px] md:h-[420px] lg:h-[480px]">
            <img
              src={herologo}
              alt="LIGHTS Logo"
              style={{
                imageRendering: 'auto',
                WebkitImageRendering: 'optimize-contrast',
              }}
              className="h-auto w-[300px] sm:w-[440px] md:w-[560px] object-contain mix-blend-multiply transition-all duration-300"
            />

            {/* Logo Text Overlay */}
            <div className="flex flex-col items-center select-none w-[300px] sm:w-[440px] md:w-[560px] -mt-4 sm:-mt-6 md:-mt-8">
              {/* Row 1: Tapered Line — EVENT MANAGEMENT — Tapered Line */}
              <div className="flex items-center justify-center w-full text-[#D4AF37] space-x-2 sm:space-x-3 md:space-x-4">
                <svg className="h-[4px] w-12 sm:w-16 md:w-20 lg:w-24 fill-current" viewBox="0 0 60 4">
                  <path d="M 0,2 L 60,0 L 60,4 Z" />
                </svg>
                <span
                  className="font-serif tracking-[0.2em] uppercase font-semibold whitespace-nowrap text-xs sm:text-sm md:text-base lg:text-lg"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  Event Management
                </span>
                <svg className="h-[4px] w-12 sm:w-16 md:w-20 lg:w-24 fill-current" viewBox="0 0 60 4">
                  <path d="M 0,0 L 60,2 L 0,4 Z" />
                </svg>
              </div>

              {/* Row 2: Central Ornament */}
              <div className="flex items-center justify-center w-full text-[#D4AF37] mt-1 sm:mt-1.5 md:mt-2">
                <svg
                  className="w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] h-[10px] sm:h-[12px] md:h-[14px] fill-current"
                  viewBox="0 0 200 16"
                >
                  <path d="M 100,2 L 105,8 L 100,14 L 95,8 Z" />
                  <circle cx="88" cy="8" r="1.8" />
                  <circle cx="112" cy="8" r="1.8" />
                  <path d="M 30,8 L 80,6.8 L 80,9.2 Z" />
                  <path d="M 120,6.8 L 170,8 L 120,9.2 Z" />
                </svg>
              </div>

              {/* Row 3: BY NDJ GROUPS */}
              <span className="font-sans tracking-[0.3em] uppercase font-bold text-center text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] text-[#D4AF37]/90 mt-1 sm:mt-1.5 md:mt-2">
                By NDJ Groups
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
