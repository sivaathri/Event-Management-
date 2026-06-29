import React from 'react';
import { Landmark, HeartHandshake, Target, BadgeCheck } from 'lucide-react';

const stats = [
  {
    icon: Landmark,
    number: '500+',
    label: 'EVENTS COMPLETED'
  },
  {
    icon: HeartHandshake,
    number: '300+',
    label: 'HAPPY CLIENTS'
  },
  {
    icon: Target,
    number: '15+',
    label: 'YEARS OF EXPERIENCE'
  },
  {
    icon: BadgeCheck,
    number: '50+',
    label: 'EXPERT TEAM MEMBERS'
  }
];

export default function StatsBanner() {
  return (
    <section className="relative py-20 bg-[#052e16] overflow-hidden border-y border-[#c5a880]/20">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-luminosity"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1920&q=80')" }}
      ></div>
      {/* Dark gradient to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#052e16]/80 via-[#052e16]/70 to-[#052e16]/90"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Header Text */}
        <h3 className="text-[#c5a880] font-serif text-2xl md:text-[28px] mb-3 font-medium tracking-wide drop-shadow-md">
          We Don't Just Plan Events,
        </h3>
        <h2 className="text-[#c5a880] font-serif text-4xl md:text-5xl lg:text-[56px] mb-8 font-semibold tracking-wide drop-shadow-lg">
          We Create Experiences
        </h2>

        {/* Divider */}
        <div className="flex items-center justify-center space-x-4 mb-16 w-full max-w-lg">
          <div className="h-[1px] bg-[#c5a880] flex-grow opacity-60"></div>
          <div className="text-[#c5a880] drop-shadow-md">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0 L13.5 9 L22 12 L13.5 15 L12 24 L10.5 15 L2 12 L10.5 9 Z" />
              <path d="M12 3 L14 10 L21 12 L14 14 L12 21 L10 14 L3 12 L10 10 Z" transform="rotate(45 12 12)" opacity="0.6" />
            </svg>
          </div>
          <div className="h-[1px] bg-[#c5a880] flex-grow opacity-60"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-4 w-full max-w-6xl">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="flex items-center justify-center lg:justify-start space-x-5">
                <Icon className="text-[#c5a880] w-[42px] h-[42px] flex-shrink-0 drop-shadow-md" strokeWidth={1.2} />
                <div className="flex flex-col text-left">
                  <span className="text-white font-sans font-semibold text-[36px] leading-none mb-1.5 tracking-tight drop-shadow-md">
                    {stat.number}
                  </span>
                  <span className="text-[#c5a880] font-bold text-[10px] uppercase tracking-[0.15em] leading-tight w-28 drop-shadow-sm">
                    {stat.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
