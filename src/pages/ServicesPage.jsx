import React from 'react';
import Services from '../components/Services';
import useSEO from '../hooks/useSEO';

export default function ServicesPage() {
  useSEO({
    title: 'Our Services | LIGHTS - Luxury Event Management',
    description: 'We offer custom wedding planning, stage decorations, professional photography, sound and lights setup, DJ entertainment, luxury catering, and bouncers services.'
  });

  return (
    <main className="flex-grow pt-36 bg-white animate-fade-in">
      <Services />
    </main>
  );
}
