import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import FeaturesBanner from '../components/FeaturesBanner';
import StatsBanner from '../components/StatsBanner';
import ProcessSection from '../components/ProcessSection';
import ScrollReveal from '../components/ScrollReveal';
import { Star, Quote, Heart, PartyPopper, Presentation, Camera, Headphones, Speaker, ConciergeBell, Shield, ArrowRight } from 'lucide-react';
import leaves1 from '../assets/leaves1.png';
import leaves2 from '../assets/leaves2.png';

const homeServices = [
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

export default function Home() {
  const testimonials = [
    {
      name: 'Priya & Rahul Mehta',
      role: 'Bride & Groom',
      text: 'LIGHTS and NDJ Groups designed a wedding stage that was nothing short of a fairy tale! Our guests were absolutely mesmerized by the floral arrangement and the crystal chandeliers. Flawless management!',
      rating: 5,
    },
    {
      name: 'Vikram Malhotra',
      role: 'Marketing VP, NexaCorp',
      text: 'We hired them for our flagship product launch. The stage structure, lighting precision, and acoustics were outstanding. They took care of everything, letting our team focus on the event itself.',
      rating: 5,
    },
    {
      name: 'Anita Sen',
      role: 'Host, Golden Anniversary Gala',
      text: 'The hospitality and food catering were outstanding. They customized the theme to match the golden anniversary decor perfectly. Every detail was executed with grace and style.',
      rating: 5,
    },
  ];

  return (
    <main className="flex-grow animate-fade-in">
      {/* Hero Section */}
      <Hero />

      {/* Features Banner */}
      <FeaturesBanner />

      {/* Services Section */}
      <section id="services" className="relative py-16 bg-[#FAFAFA] overflow-hidden">
        <img src={leaves1} alt="" className="absolute left-0 top-[5%] md:top-[10%] w-[100px] md:w-[160px] lg:w-[200px] object-contain opacity-100 z-10 pointer-events-none transform -translate-x-[10%]" />
        <img src={leaves2} alt="" className="absolute right-0 bottom-[30%] md:bottom-[45%] w-[100px] md:w-[160px] lg:w-[200px] object-contain opacity-100 z-10 pointer-events-none transform -translate-x-4 md:-translate-x-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <ScrollReveal animation="animate-slide-up" className="flex flex-col items-center text-center mb-16">
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
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeServices.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <ScrollReveal key={i} animation="animate-slide-up" delay={i % 4 === 0 ? '' : i % 4 === 1 ? 'animate-delay-100' : i % 4 === 2 ? 'animate-delay-200' : 'animate-delay-300'}>
                  <div className="bg-white rounded-[24px] p-8 pb-10 flex flex-col items-center text-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.1)] h-full transition-all duration-300 transform hover:-translate-y-1">
                    <div className="relative w-[88px] h-[88px] mb-6">
                      <div className="absolute inset-0 rounded-full border border-[#c5a880] shadow-[0_4px_12px_rgba(197,168,128,0.25)]"></div>
                      <div className="absolute inset-[4px] rounded-full bg-[#052e16] flex items-center justify-center">
                        <Icon className="text-[#c5a880] w-[34px] h-[34px]" strokeWidth={1.5} />
                      </div>
                    </div>
                    <h3 className="text-[14px] font-bold text-[#052e16] tracking-wide mb-6 flex-grow flex items-center justify-center whitespace-pre-line leading-relaxed">
                      {svc.title}
                    </h3>
                    <button className="flex items-center text-[12px] font-bold text-[#052e16] hover:text-[#c5a880] transition-colors uppercase tracking-widest group">
                      READ MORE
                      <ArrowRight className="w-4 h-4 ml-2 text-[#c5a880] transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal animation="animate-slide-up" delay="animate-delay-100" className="mt-16 flex justify-center">
            <Link to="/services" className="bg-brand-dark hover:bg-brand-emerald text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center shadow-xl transition-all duration-300 hover:shadow-brand-dark/20 transform hover:-translate-y-0.5">
              VIEW ALL SERVICES
              <ArrowRight className="w-4 h-4 ml-3 text-gold" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Banner Section */}
      <StatsBanner />

      {/* Process Section */}
      <ProcessSection />

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif text-brand-emerald tracking-wider font-semibold">
              WHAT OUR CLIENTS SAY
            </h2>
            <div className="w-16 h-[2px] bg-gold mt-4"></div>
            <p className="text-sm text-slate-500 font-sans tracking-wide mt-3 font-light max-w-lg">
              Hear directly from the hosts who trusted us with their milestone moments
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div 
                key={idx}
                className="bg-cream-light/40 p-8 rounded-3xl border border-slate-100 hover:border-brand-emerald/10 transition-all duration-300 relative flex flex-col text-left group"
              >
                <Quote className="absolute top-6 right-8 text-gold/20 w-12 h-12" />
                
                {/* Stars */}
                <div className="flex space-x-1 mb-6 text-gold">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="text-slate-600 font-sans text-sm leading-relaxed mb-6 italic font-light relative z-10">
                  "{t.text}"
                </p>

                <div className="mt-auto border-t border-slate-200/50 pt-4">
                  <h4 className="font-serif text-slate-900 font-semibold">{t.name}</h4>
                  <p className="text-xs text-brand-emerald font-semibold uppercase tracking-wider mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
