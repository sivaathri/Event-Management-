import React from 'react';
import Hero from '../components/Hero';
import FeaturesBanner from '../components/FeaturesBanner';
import Services from '../components/Services';
import StatsBanner from '../components/StatsBanner';
import ProcessSection from '../components/ProcessSection';
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
    <main className="flex-grow animate-fade-in">
      {/* Hero Section */}
      <Hero />

      {/* Features Banner */}
      <FeaturesBanner />

      {/* Services Section */}
      <Services />

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
