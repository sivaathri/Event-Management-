import React from 'react';
import { Heart, PartyPopper, Presentation, Camera, Headphones, Speaker, ConciergeBell, Shield, ArrowRight } from 'lucide-react';

const services = [
  { icon: Heart, title: 'WEDDING PLANNING\n& DECORATIONS' },
  { icon: PartyPopper, title: 'BIRTHDAY\nPARTIES' },
  { icon: Presentation, title: 'STAGE\nDECORATION' },
  { icon: Camera, title: 'PHOTOGRAPHY &\nVIDEOGRAPHY' },
  { icon: Headphones, title: 'DJ &\nENTERTAINMENT' },
  { icon: Speaker, title: 'SOUND &\nLIGHTS' },
  { icon: ConciergeBell, title: 'CATERING\nSERVICES' },
  { icon: Shield, title: 'BOUNCERS\nSERVICES' },
];

const SectionOrnament = () => (
  <div className="flex items-center justify-center w-full">
    <div className="flex items-center">
      <div className="w-16 sm:w-24 h-[1.5px] bg-[#c5a880]"></div>
      <div className="w-2 h-2 rotate-45 bg-[#c5a880] ml-2 mr-3 opacity-90"></div>
    </div>
    
    <div className="text-[#c5a880] flex items-center justify-center drop-shadow-sm">
      <svg width="32" height="24" viewBox="0 0 32 24" fill="currentColor">
        {/* Top central leaf */}
        <path d="M16 0 C16 0 19 6 20 8 C18 10 16 12 16 12 C16 12 14 10 12 8 C13 6 16 0 16 0 Z" />
        {/* Left leaf */}
        <path d="M13.5 10 C9 8 3 8 3 8 C3 8 6 14 12 14 C12 14 14 12 13.5 10 Z" />
        {/* Right leaf */}
        <path d="M18.5 10 C23 8 29 8 29 8 C29 8 26 14 20 14 C20 14 18 12 18.5 10 Z" />
        {/* Base petal */}
        <path d="M16 12 L19 18 C17.5 19 14.5 19 13 18 Z" />
      </svg>
    </div>

    <div className="flex items-center">
      <div className="w-2 h-2 rotate-45 bg-[#c5a880] ml-3 mr-2 opacity-90"></div>
      <div className="w-16 sm:w-24 h-[1.5px] bg-[#c5a880]"></div>
    </div>
  </div>
);

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          
          <SectionOrnament />

          <div className="flex items-center justify-center gap-3 text-[#c5a880] font-bold uppercase tracking-[0.15em] text-[16px] sm:text-[18px] mt-4 mb-3">
            <span className="w-5 h-[2.5px] bg-[#c5a880] rounded-sm"></span>
            OUR SERVICES
            <span className="w-5 h-[2.5px] bg-[#c5a880] rounded-sm"></span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-brand-dark font-semibold max-w-2xl leading-tight mb-6">
            Everything You Need <br/> For A Perfect Event
          </h2>
          
          <SectionOrnament />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div 
                key={i} 
                className="bg-white rounded-[24px] p-8 pb-10 flex flex-col items-center text-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.1)] transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Icon Circle */}
                <div className="relative w-[88px] h-[88px] mb-6">
                  {/* Outer Gold Ring */}
                  <div className="absolute inset-0 rounded-full border border-[#c5a880] shadow-[0_4px_12px_rgba(197,168,128,0.25)]"></div>
                  {/* Inner Green Circle */}
                  <div className="absolute inset-[4px] rounded-full bg-[#052e16] flex items-center justify-center">
                    <Icon className="text-[#c5a880] w-[34px] h-[34px]" strokeWidth={1.5} />
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-[14px] font-bold text-[#052e16] tracking-wide mb-6 flex-grow flex items-center justify-center whitespace-pre-line leading-relaxed">
                  {svc.title}
                </h3>
                
                {/* Read More Link */}
                <button className="flex items-center text-[12px] font-bold text-[#052e16] hover:text-[#c5a880] transition-colors uppercase tracking-widest group">
                  READ MORE
                  <ArrowRight className="w-4 h-4 ml-2 text-[#c5a880] transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="mt-16 flex justify-center">
          <button className="bg-brand-dark hover:bg-brand-emerald text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center shadow-xl transition-all duration-300 hover:shadow-brand-dark/20 transform hover:-translate-y-0.5">
            VIEW ALL SERVICES
            <ArrowRight className="w-4 h-4 ml-3 text-gold" />
          </button>
        </div>

      </div>
    </section>
  );
}
