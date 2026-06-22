import React from 'react';
import { Heart, Briefcase, PartyPopper, Sparkles, Volume2, Utensils, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Luxury Weddings',
    desc: 'From royal mandaps to magnificent stage decors, we curate wedding designs that reflect your unique love story.',
  },
  {
    icon: Briefcase,
    title: 'Corporate Events',
    desc: 'Flawless execution for seminars, product launches, annual galas, and branding setups with premium aesthetics.',
  },
  {
    icon: PartyPopper,
    title: 'Social Gatherings',
    desc: 'Enchanting themes and styling for private milestones, anniversaries, birthdays, and theme celebrations.',
  },
  {
    icon: Sparkles,
    title: 'Theme Decor & Backdrops',
    desc: 'Custom-crafted stage panels, photobooth setups, and thematic entry paths that captivate your guests.',
  },
  {
    icon: Volume2,
    title: 'Lighting & Sounds',
    desc: 'Immersive sound engineering and architectural uplighting to create the perfect mood and visual splendor.',
  },
  {
    icon: Utensils,
    title: 'Catering & Hospitality',
    desc: 'Delectable multi-cuisine food experiences styled in beautiful displays with top-tier hospitality management.',
  },
];

// Custom Leaf Ornament SVG component
const Ornament = () => (
  <svg className="w-16 h-8 text-gold mx-4" viewBox="0 0 100 30" fill="currentColor">
    <path d="M50 0 C40 10 30 12 10 12 C5 12 0 14 0 15 C0 16 5 18 10 18 C30 18 40 20 50 30 C60 20 70 18 90 18 C95 18 100 16 100 15 C100 14 95 12 90 12 C70 12 60 10 50 0 Z" className="opacity-80" />
    <circle cx="50" cy="15" r="4" className="text-brand-emerald" />
  </svg>
);

export default function Services() {
  return (
    <section id="services" className="relative py-28 bg-cream-light overflow-hidden">
      
      {/* Decorative floral backgrounds */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-soft rounded-full filter blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold-light/10 rounded-full filter blur-3xl opacity-20 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center justify-center w-full mb-2">
            {/* Left Horizontal Line with Flourish */}
            <div className="hidden sm:block h-[1px] bg-gradient-to-r from-transparent via-gold to-gold flex-grow max-w-[150px]"></div>
            <Ornament />
            <div className="hidden sm:block h-[1px] bg-gradient-to-l from-transparent via-gold to-gold flex-grow max-w-[150px]"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-emerald tracking-wider font-semibold">
            OUR SERVICES
          </h2>
          <p className="text-sm md:text-base text-slate-500 font-sans tracking-wide mt-3 font-light max-w-lg">
            Everything you need for a perfect event
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div 
                key={svc.title}
                className="group relative bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-brand-emerald/10 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-start text-left overflow-hidden"
              >
                {/* Gold corner accent on card hover */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gold/10 to-transparent rounded-tr-2xl transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-top-right"></div>
                
                {/* Service Icon Container */}
                <div className="w-14 h-14 rounded-xl bg-brand-soft text-brand-emerald flex items-center justify-center mb-6 group-hover:bg-brand-emerald group-hover:text-white transition-all duration-300">
                  <Icon size={24} className="transform group-hover:rotate-6 transition-transform" />
                </div>

                {/* Service Details */}
                <h3 className="text-xl font-serif font-semibold text-slate-900 mb-3 group-hover:text-brand-emerald transition-colors">
                  {svc.title}
                </h3>
                <p className="text-sm text-slate-500 font-sans leading-relaxed mb-6 font-light">
                  {svc.desc}
                </p>

                {/* Learn More / CTA inside Card */}
                <button className="mt-auto inline-flex items-center text-xs font-bold uppercase tracking-wider text-brand-emerald hover:text-brand-medium group/btn">
                  Explore Designs
                  <ArrowRight size={14} className="ml-1.5 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
