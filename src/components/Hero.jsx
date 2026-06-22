import React from 'react';
import { ArrowRight } from 'lucide-react';
import Logo from './Logo';
import herobg from '../assets/herobg.png';
import herologo from '../assets/herologo.png';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-28 pb-32  bg-no-repeat overflow-hidden flex items-center"
      style={{ 
        backgroundImage: `url(${herobg})`,
        backgroundSize: "auto 95%",
        backgroundPosition: "right center"
      }}
    >
      <div className="w-full pl-4 sm:pl-8 lg:pl-16 pr-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-5 flex flex-col items-start text-left space-y-6 z-20 animate-slide-up pr-4 sm:pr-8">
            
            {/* Tagline */}
            <span className="text-xs md:text-sm font-sans font-bold uppercase tracking-[0.25em] text-brand-emerald">
              We Plan • We Manage • You Celebrate
            </span>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-[54px] font-serif text-slate-800 leading-[1.12] font-normal tracking-wide">
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
            <p className="text-sm md:text-base text-slate-500 max-w-md leading-relaxed font-sans font-light">
              From weddings to corporate events, LIGHTS Event Management transforms your vision into extraordinary experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-row items-center gap-4 pt-4 w-full sm:w-auto">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3.5 bg-brand-emerald hover:bg-brand-medium text-white text-xs font-bold uppercase tracking-widest rounded-md shadow-lg shadow-brand-emerald/10 hover:shadow-xl hover:shadow-brand-emerald/20 transition-all duration-300 transform hover:-translate-y-0.5 group whitespace-nowrap"
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
          <div className="lg:col-span-7 flex items-start justify-center lg:justify-start lg:pl-6 md:-ml-12 pt-0 -mt-12 md:-mt-42 z-20 h-[360px] sm:h-[420px] md:h-[480px] animate-fade-in animate-delay-200">
            <img 
              src={herologo} 
              alt="LIGHTS Logo" 
              style={{
                imageRendering: 'auto',
                WebkitImageRendering: 'optimize-contrast',
              }}
              className="h-auto w-[300px] sm:w-[440px] md:w-[560px] object-contain mix-blend-multiply transition-all duration-300"
            />
          </div>

        </div>
      </div>

      {/* Curved Green Border and Bottom Wave Section Divider */}
    
    </section>
  );
}
