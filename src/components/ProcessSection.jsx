import React from 'react';
import { MessageSquare, ClipboardList, Settings, PartyPopper, ArrowRight } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'CONSULTATION',
    desc: 'We listen to your ideas and understand your requirements.',
    icon: MessageSquare
  },
  {
    num: '02',
    title: 'PLANNING',
    desc: 'Our team creates a customized plan tailored to your needs.',
    icon: ClipboardList
  },
  {
    num: '03',
    title: 'EXECUTION',
    desc: 'We execute every detail seamlessly for a stress-free experience.',
    icon: Settings
  },
  {
    num: '04',
    title: 'CELEBRATION',
    desc: 'You enjoy the moments, we take care of everything else.',
    icon: PartyPopper
  }
];

const SectionOrnament = () => (
  <div className="flex items-center justify-center w-full">
    <div className="flex items-center">
      <div className="w-16 sm:w-24 h-[1.5px] bg-[#c5a880]"></div>
      <div className="w-2 h-2 rotate-45 bg-[#c5a880] ml-2 mr-3 opacity-90"></div>
    </div>
    
    <div className="text-[#c5a880] flex items-center justify-center drop-shadow-sm">
      <svg width="32" height="24" viewBox="0 0 32 24" fill="currentColor">
        <path d="M16 0 C16 0 19 6 20 8 C18 10 16 12 16 12 C16 12 14 10 12 8 C13 6 16 0 16 0 Z" />
        <path d="M13.5 10 C9 8 3 8 3 8 C3 8 6 14 12 14 C12 14 14 12 13.5 10 Z" />
        <path d="M18.5 10 C23 8 29 8 29 8 C29 8 26 14 20 14 C20 14 18 12 18.5 10 Z" />
        <path d="M16 12 L19 18 C17.5 19 14.5 19 13 18 Z" />
      </svg>
    </div>

    <div className="flex items-center">
      <div className="w-2 h-2 rotate-45 bg-[#c5a880] ml-3 mr-2 opacity-90"></div>
      <div className="w-16 sm:w-24 h-[1.5px] bg-[#c5a880]"></div>
    </div>
  </div>
);

// A highly realistic 3D CSS leaf matching the photographic style
const Leaf = ({ className }) => (
  <div className={`absolute z-20 ${className}`}>
    <div 
      className="w-full h-full transition-transform duration-1000 ease-in-out"
      style={{
        background: 'linear-gradient(135deg, #a8df65 0%, #6db327 50%, #457814 100%)',
        borderRadius: '100% 0 100% 0',
        boxShadow: 'inset 3px 3px 6px rgba(255,255,255,0.5), inset -4px -4px 10px rgba(0,0,0,0.3), 0 10px 20px rgba(0,0,0,0.15)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Center Vein */}
      <div 
        style={{
          position: 'absolute',
          top: '-20%',
          left: '50%',
          width: '1.5px',
          height: '150%',
          background: 'linear-gradient(to bottom, #d6f2a8 0%, #7dbd33 100%)',
          transform: 'rotate(-45deg)',
          transformOrigin: 'top center',
          boxShadow: '1px 0 2px rgba(0,0,0,0.1)'
        }}
      />
      {/* Glossy Highlight */}
      <div 
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(110deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 40%)',
          borderRadius: '100% 0 100% 0',
        }}
      />
    </div>
  </div>
);

export default function ProcessSection() {
  return (
    <section className="py-24 bg-[#FAFAFA] relative overflow-hidden">
      {/* Background Decorative Leaves */}
      <Leaf className="top-12 left-[10%] w-10 h-10 rotate-[20deg] blur-[1px] opacity-90" />
      <Leaf className="top-24 right-[12%] w-8 h-8 rotate-[110deg] blur-[2px] opacity-80" />
      <Leaf className="bottom-12 left-[5%] w-16 h-16 rotate-[70deg] blur-[4px] opacity-70" />
      <Leaf className="bottom-6 right-[8%] w-24 h-24 -rotate-[30deg] blur-[5px] opacity-80" />

      {/* Faint crossed lines in background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%">
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4 8" opacity="0.4" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4 8" opacity="0.4" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center justify-center gap-3 text-[#c5a880] font-bold uppercase tracking-[0.15em] text-[14px] mb-4">
            <span className="w-5 h-[2px] bg-[#c5a880] rounded-sm"></span>
            OUR PROCESS
            <span className="w-5 h-[2px] bg-[#c5a880] rounded-sm"></span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-[#052e16] font-bold leading-tight mb-6">
            Simple Steps To Your <br/> Perfect Event
          </h2>
          
          <SectionOrnament />
        </div>

        {/* Steps Container */}
        <div className="relative mt-8">
          
          {/* Wavy Dotted Line (Desktop only) */}
          <div className="hidden md:block absolute top-[44px] left-[12.5%] w-[75%] h-[40px] -z-10 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 300 20" preserveAspectRatio="none">
              <path 
                d="M 0,10 Q 25,0 50,10 T 100,10 Q 125,20 150,10 T 200,10 Q 225,0 250,10 T 300,10" 
                fill="none" 
                stroke="#A8BCA1" 
                strokeWidth="1.5" 
                strokeDasharray="4,4" 
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                {/* Icon Circle */}
                <div className="relative w-[88px] h-[88px] mb-8">
                  {/* Outer shadow/ring */}
                  <div className="absolute inset-0 rounded-full shadow-[0_8px_20px_rgba(5,46,22,0.2)] bg-[#052e16]"></div>
                  {/* Inner ring */}
                  <div className="absolute inset-[3px] rounded-full bg-[#052e16] border-[2px] border-white/5 flex items-center justify-center">
                    <step.icon className="text-[#c5a880] w-[34px] h-[34px]" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Number */}
                <div className="text-2xl font-serif font-bold text-[#c5a880] mb-2">
                  {step.num}
                </div>

                {/* Title */}
                <h3 className="text-[14px] font-bold text-[#052e16] tracking-wider uppercase mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[13px] text-slate-500 font-sans leading-relaxed px-4 max-w-[240px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="mt-20 flex justify-center">
          <a
            href="/#about"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#052e16] hover:bg-[#084221] text-white text-[12px] font-bold uppercase tracking-widest rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            ABOUT US
            <ArrowRight size={16} className="ml-2 text-[#c5a880] transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
