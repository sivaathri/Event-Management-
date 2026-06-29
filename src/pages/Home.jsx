import React from 'react';
import Hero from '../components/Hero';
import FeaturesBanner from '../components/FeaturesBanner';
import Services from '../components/Services';
import StatsBanner from '../components/StatsBanner';
import { CheckCircle2, Star, Quote } from 'lucide-react';

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
    <main className="flex-grow">
      {/* Hero Section */}
      <Hero />

      {/* Features Banner */}
      <FeaturesBanner />

      {/* Services Section */}
      <Services />

      {/* Stats Banner Section */}
      <StatsBanner />

      {/* About Us & Stats Section */}
      <section id="about" className="py-24 bg-cream-light relative overflow-hidden">
        {/* Subtle Wave Design */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Content Block */}
            <div className="lg:col-span-7 text-left space-y-6">
              <h2 className="text-3xl sm:text-4xl font-serif text-brand-emerald tracking-wide">
                We Design Extraordinary Moments
              </h2>
              <div className="w-16 h-[2px] bg-gold"></div>
              
              <p className="text-base text-slate-600 font-sans leading-relaxed font-light">
                At **LIGHTS Event Management**, powered by the prestigious **NDJ Groups**, we believe that every milestone event is a blank canvas. Our mission is to paint it with elegance, creativity, and impeccable organizational detail. 
              </p>
              <p className="text-base text-slate-600 font-sans leading-relaxed font-light">
                For over a decade, we have partnered with discerning clients to craft weddings, corporate launches, and luxury celebrations that are truly unforgettable. We handle everything from custom backdrop fabrications to technical sound, lighting, and hospitality.
              </p>

              {/* Quality Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  'Bespoke Stage & Mandap Designs',
                  'High-End Sound & Acoustic Engineering',
                  'Complete Hospitality & Host Management',
                  'Impeccable Floral & Theme Crafting'
                ].map((hl) => (
                  <div key={hl} className="flex items-center space-x-3 text-slate-700">
                    <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                    <span className="text-sm font-medium font-sans">{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Stats Counter Grid */}
            <div className="lg:col-span-5 bg-white p-8 rounded-3xl shadow-xl border border-slate-100/80 grid grid-cols-2 gap-6 relative">
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gold/10 rounded-full blur-xl"></div>
              
              {[
                { number: '150+', label: 'Luxury Weddings' },
                { number: '500+', label: 'Corporate Events' },
                { number: '10+', label: 'Years Experience' },
                { number: '99%', label: 'Client Satisfaction' }
              ].map((stat, idx) => (
                <div key={idx} className="p-6 bg-cream-light/60 rounded-2xl flex flex-col items-center justify-center border border-slate-50">
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-brand-emerald mb-1">
                    {stat.number}
                  </span>
                  <span className="text-xs text-slate-500 font-sans uppercase tracking-wider text-center font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

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
