import React from 'react';
import Contact from '../components/Contact';
import useSEO from '../hooks/useSEO';

export default function ContactPage() {
  useSEO({
    title: 'Contact Us | Best Event Decorators in Pondicherry & Puducherry',
    description: 'Get a custom quote from LIGHTS, the top-rated event organizers in Pondicherry & Puducherry. Book a consultation for weddings, corporate events, and parties.'
  });

  return (
    <main className="flex-grow pt-24 bg-white animate-fade-in">
      <Contact />
    </main>
  );
}
