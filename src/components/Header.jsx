import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to adjust styles if needed
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', active: true },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About Us', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent transition-all duration-300">
      
      {/* Curved Header Background Container */}
      <div className="absolute inset-0 flex -z-10 drop-shadow-[0_4px_12px_rgba(0,0,0,0.04)] filter">
        {/* Left Curved Panel (Logo Container Background) */}
        <div className="w-[290px] h-[115px] sm:w-[340px] sm:h-[120px] flex-shrink-0 transition-all">
          <svg viewBox="0 0 340 120" className="w-full h-full fill-white" preserveAspectRatio="none">
            <path d="M 0,0 L 340,0 L 340,80 C 295,80 275,120 230,120 L 0,120 Z" />
          </svg>
        </div>
        {/* Right Flat Panel (Navigation/CTA Background) */}
        <div className="flex-grow h-[80px] bg-white"></div>
      </div>

      <div className="w-full">
        <div className="flex items-start justify-between">
          
          {/* Left Side: Logo (positioned inside the deep panel) */}
          <div className="h-[120px] flex items-center pl-4 sm:pl-6 md:pl-8 z-20">
            <a href="#home" className="hover:opacity-90 transition-opacity">
              <Logo size="sm" />
            </a>
          </div>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center justify-center h-[80px] flex-grow px-4 z-20">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative font-sans text-xs lg:text-sm font-semibold tracking-wide transition-all duration-200 py-2 mx-3 lg:mx-4 hover:text-brand-emerald ${
                  link.active ? 'text-brand-emerald' : 'text-slate-700'
                }`}
              >
                {link.name}
                {link.active && (
                  <span className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 w-8 h-[2px] bg-brand-emerald rounded-full"></span>
                )}
              </a>
            ))}
          </nav>

          {/* Right Side: Contact & Button */}
          <div className="flex items-center justify-end h-[80px] z-20 pr-4 sm:pr-8 lg:pr-12">
            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-6">
              {/* Phone Number with outline circle */}
              <a 
                href="tel:+919677585986" 
                className="flex items-center space-x-2 text-slate-900 hover:text-brand-emerald transition-colors group"
              >
                <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center bg-white group-hover:bg-brand-soft group-hover:border-brand-emerald/30 transition-all">
                  <Phone size={14} className="text-brand-emerald fill-current" />
                </div>
                <span className="text-sm font-bold tracking-wider font-sans whitespace-nowrap">+91 96775 85986</span>
              </a>

              {/* Get a Quote Button */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-brand-emerald hover:bg-brand-medium text-white text-[10px] font-bold uppercase tracking-widest rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 group whitespace-nowrap"
              >
                Get a Quote
                <ArrowRight size={14} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Mobile Menu Action */}
            <div className="md:hidden flex items-center space-x-4">
              <a 
                href="tel:+919677585986" 
                className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center bg-white text-brand-emerald"
              >
                <Phone size={16} className="fill-current" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1 rounded-md text-slate-700 hover:text-brand-emerald hover:bg-slate-100 transition-colors"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[80px] bg-white z-40 border-t border-slate-100 animate-fade-in">
          <div className="px-4 pt-6 pb-8 space-y-4 flex flex-col h-full bg-cream-light">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl font-sans text-base font-semibold transition-all ${
                  link.active 
                    ? 'bg-brand-soft text-brand-emerald shadow-sm' 
                    : 'text-slate-700 hover:bg-slate-50 hover:text-brand-emerald'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            <div className="pt-6 border-t border-slate-200/60 flex flex-col space-y-4">
              <a 
                href="tel:+919677585986" 
                className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-brand-soft flex items-center justify-center text-brand-emerald">
                  <Phone size={18} className="fill-current" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium text-left">Call Us Directly</p>
                  <p className="text-sm font-bold tracking-wider text-slate-800 font-sans">+91 96775 85986</p>
                </div>
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center py-4 bg-brand-emerald hover:bg-brand-medium text-white text-sm font-bold uppercase tracking-wider rounded-xl shadow-sm transition-all"
              >
                Get a Quote
                <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
