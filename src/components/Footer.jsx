import React from 'react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 border-t border-white/10 text-left mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Branding */}
          <div className="flex flex-col items-start space-y-4">
            <Logo size="sm" light={true} />
            <p className="text-xs text-white/50 font-sans leading-relaxed pt-2 font-light">
              Creating luxury celebrations and premium thematic layouts since 2016. Powered by NDJ Groups.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-gold-light uppercase tracking-wider text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/60 font-sans">
              <li><a href="/#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="/portfolio" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="/#about" className="hover:text-white transition-colors">About NDJ Groups</a></li>
            </ul>
          </div>

          {/* Col 3: Services categories */}
          <div className="space-y-4">
            <h4 className="font-serif text-gold-light uppercase tracking-wider text-sm font-semibold">Our Specializations</h4>
            <ul className="space-y-2 text-sm text-white/60 font-sans">
              <li>Royal Mandap & Stage Styling</li>
              <li>Wedding Stage Floral Design</li>
              <li>Corporate Seminars & Product Launches</li>
              <li>Bespoke Theme Fabrications</li>
            </ul>
          </div>

          {/* Col 4: Corporate details */}
          <div className="space-y-4">
            <h4 className="font-serif text-gold-light uppercase tracking-wider text-sm font-semibold">Head Office</h4>
            <p className="text-sm text-white/60 font-sans leading-relaxed font-light">
              LIGHTS Event Management<br />
              NDJ Corporate Square, 2nd Floor,<br />
              Chennai, Tamil Nadu - 600001
            </p>
          </div>

        </div>

        {/* Copyright Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 font-sans font-light">
          <p>© 2026 LIGHTS Event Management. All rights reserved.</p>
          <p>Designed in partnership with NDJ Groups.</p>
        </div>
      </div>
    </footer>
  );
}
