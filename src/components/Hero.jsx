import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Logo from './Logo';
import herobg from '../assets/herobg6.png';
import herologo from '../assets/homebg1.png';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 md:pt-28 md:pb-32 overflow-hidden flex items-center bg-white"
    >
      {/* Background Image isolated so we can filter its baked-in cream color into pure white */}
      <div 
        className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-[position:calc(50%+60px)_calc(50%-40px)] lg:bg-[position:calc(100%+140px)_calc(50%-40px)] lg:bg-[length:auto_75%] brightness-105 contrast-[1.05] animate-fade-in"
        style={{ backgroundImage: `url(${herobg})` }}
      />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">

          {/* Left Column: Copy & Actions */}
          <div className="md:col-span-6 lg:col-span-6 xl:col-span-5 flex flex-col items-start text-left space-y-4 sm:space-y-6 z-20">

            {/* Tagline */}
            <span className="text-xs md:text-sm font-sans font-bold uppercase tracking-[0.25em] text-brand-emerald animate-slide-up">
              We Plan • We Manage • You Celebrate
            </span>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-[42px] lg:text-5xl xl:text-[54px] font-serif text-slate-800 leading-[1.12] font-normal tracking-wide animate-slide-up animate-delay-100">
              Creating Unforgettable{' '}
              <span className="block text-brand-emerald mt-2 font-medium">
                Celebrations &
              </span>
              <span className="block text-brand-emerald mt-2 font-medium">
                Luxury Events
              </span>
            </h1>

            {/* Horizontal Divider Line with Diamond in the center */}
            <div className="flex items-center space-x-2 py-1 w-full max-w-[280px] animate-slide-up animate-delay-200">
              <div className="h-[1px] bg-slate-300 flex-grow"></div>
              <span className="text-brand-emerald text-sm">✦</span>
              <div className="h-[1px] bg-slate-300 flex-grow"></div>
            </div>

            {/* Description */}
            <p className="text-[13px] sm:text-sm md:text-base text-slate-500 max-w-sm md:max-w-md leading-relaxed font-sans font-light animate-slide-up animate-delay-200">
              From weddings to corporate events, LIGHTS Event Management transforms your vision into extraordinary experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto animate-slide-up animate-delay-300">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-brand-emerald hover:bg-[#021C0D] text-white text-xs font-bold uppercase tracking-widest rounded-md shadow-lg shadow-brand-emerald/10 hover:shadow-xl hover:shadow-brand-emerald/20 transition-all duration-300 transform hover:-translate-y-0.5 group whitespace-nowrap"
              >
                Book Consultation
                <ArrowRight size={14} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-700 hover:text-brand-emerald border border-slate-300 hover:border-brand-emerald/30 text-xs font-bold uppercase tracking-widest rounded-md shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 group whitespace-nowrap"
              >
                View Services
                <ArrowRight size={14} className="ml-2 text-slate-400 group-hover:text-brand-emerald transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

         

        </div>
      </div>
    </section>
  );
}
