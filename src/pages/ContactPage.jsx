import React from 'react';
import Contact from '../components/Contact';
import useSEO from '../hooks/useSEO';

export default function ContactPage() {
  useSEO({
    title: 'Contact Us | LIGHTS - Luxury Event Management',
    description: 'Get in touch with LIGHTS Event Management today. Request a custom quote, book a consultation, or ask questions about our luxury event design and planning services.'
  });

  return (
    <main className="flex-grow pt-24 bg-white animate-fade-in">
      <Contact />
    </main>
  );
}
