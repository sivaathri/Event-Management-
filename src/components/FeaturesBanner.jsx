import React from 'react';
import { Crown, ShieldCheck, Wand2, Award } from 'lucide-react';

const features = [
  {
    icon: Crown,
    title: 'PREMIUM QUALITY',
    subtitle: 'Top Notch Service'
  },
  {
    icon: ShieldCheck,
    title: 'EXPERIENCED TEAM',
    subtitle: 'Professional Experts'
  },
  {
    icon: Wand2,
    title: 'CUSTOMIZED DECOR',
    subtitle: 'Tailored To You'
  },
  {
    icon: Award,
    title: 'MEMORABLE EVENTS',
    subtitle: 'We Create Moments'
  }
];

export default function FeaturesBanner() {
  return (
    <div className="w-full bg-brand-dark py-6 border-b border-brand-emerald/50 shadow-lg relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="flex items-center justify-center lg:justify-start space-x-4">
                <Icon className="text-gold w-10 h-10 flex-shrink-0" strokeWidth={1.5} />
                <div className="flex flex-col text-left">
                  <span className="text-white font-bold text-sm tracking-wider uppercase leading-tight">{feature.title}</span>
                  <span className="text-white/80 text-sm font-light mt-0.5">{feature.subtitle}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
