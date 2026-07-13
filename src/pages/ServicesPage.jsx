import React from 'react';
import Services from '../components/Services';
import useSEO from '../hooks/useSEO';

export default function ServicesPage() {
  useSEO({
    title: 'Our Services | Wedding Planning & Decor in Pondicherry & Puducherry',
    description: 'Premium event management services in Pondicherry & Puducherry. Custom wedding planning, stage decorations, catering, photography, sound & lighting, and security.'
  });

  return (
    <main className="flex-grow pt-36 bg-white animate-fade-in">
      <Services />
    </main>
  );
}
