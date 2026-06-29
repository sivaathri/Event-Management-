import React from 'react';
import { Phone, Mail, MapPin, ChevronRight, Send } from 'lucide-react';
import footerf2 from '../assets/footerf2.png';
import footerf1 from '../assets/footerf1.png';
import Logo from './Logo';

const Facebook = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const Instagram = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
const Twitter = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;
const Linkedin = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;

export default function Footer() {
  const quickLinks = ['Home', 'About Us', 'Services', 'Portfolio', 'Testimonials', 'Blogs', 'Contact Us'];
  const services = ['Wedding Planning', 'Corporate Events', 'Birthday Parties', 'Social Events', 'Destination Weddings', 'Exhibition & Trade Shows', 'Venue Management'];

  const Divider = () => (
    <div className="flex items-center mb-6">
      <div className="w-10 h-[1px] bg-[#c5a880]"></div>
      <div className="w-1.5 h-1.5 rotate-45 bg-[#c5a880] mx-1.5"></div>
      <div className="w-10 h-[1px] bg-[#c5a880]"></div>
    </div>
  );

  return (
    <footer className="relative bg-[#FCFBF8] text-slate-700 overflow-hidden font-sans pt-4 mt-auto">
      
      {/* Decorative Floral Left */}
      <img 
        src={footerf2} 
        alt="" 
        className="absolute bottom-0 left-0 w-[130px] md:w-[200px] lg:w-[240px] object-contain opacity-90 pointer-events-none z-0"
      />
      
      {/* Decorative Floral Right */}
      <img 
        src={footerf1} 
        alt="" 
        className="absolute bottom-[40px] right-0 w-[90px] md:w-[150px] lg:w-[200px] object-contain opacity-90 pointer-events-none z-0"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 mb-6 lg:mb-8">
          
          {/* Column 1: Info */}
          <div className="md:col-span-12 lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left transform -translate-x-8 lg:-translate-x-16">
            <div className="flex justify-center lg:justify-start w-full">
              <Logo size="md" light={false} />
            </div>
            
            {/* Text & Contact Info Container */}
            <div className="flex flex-col space-y-6 w-full">
              <p className="text-[15px] text-slate-700 leading-relaxed max-w-[280px] mx-auto lg:mx-0">
                Creating unforgettable celebrations & luxury events with perfection, passion and personalized service.
              </p>
              <div className="space-y-5 pt-2 w-max mx-auto lg:mx-0 text-left">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full border border-[#052e16] flex items-center justify-center flex-shrink-0 text-[#052e16]">
                    <Phone size={16} />
                  </div>
                  <span className="text-[15px] text-slate-700 font-medium">+91 96775 85986</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full border border-[#052e16] flex items-center justify-center flex-shrink-0 text-[#052e16]">
                    <Mail size={16} />
                  </div>
                  <span className="text-[15px] text-slate-700 font-medium">info@lightsevent.com</span>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full border border-[#052e16] flex items-center justify-center flex-shrink-0 text-[#052e16] mt-1">
                    <MapPin size={16} />
                  </div>
                  <span className="text-[15px] leading-[1.6] text-slate-700 font-medium">123, Event Street, Chennai,<br/>Tamil Nadu - 600001, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-4 lg:col-span-2 lg:pl-4 mt-6 lg:mt-10">
            <h4 className="font-serif text-[#052e16] font-bold tracking-widest text-sm uppercase">Quick Links</h4>
            <Divider />
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link}>
                  <a href={`/#${link.toLowerCase().replace(' ', '')}`} className="flex items-center text-[14px] font-medium text-slate-600 hover:text-[#c5a880] transition-colors group">
                    <ChevronRight size={14} className="mr-2 text-slate-400 group-hover:text-[#c5a880] transition-colors" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="md:col-span-4 lg:col-span-3 mt-6 lg:mt-10">
            <h4 className="font-serif text-[#052e16] font-bold tracking-widest text-sm uppercase">Our Services</h4>
            <Divider />
            <ul className="space-y-3">
              {services.map(service => (
                <li key={service}>
                  <a href="/#services" className="flex items-center text-[14px] font-medium text-slate-600 hover:text-[#c5a880] transition-colors group">
                    <ChevronRight size={14} className="mr-2 text-slate-400 group-hover:text-[#c5a880] transition-colors" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter & Creative */}
          <div className="md:col-span-4 lg:col-span-3 flex flex-col mt-6 lg:mt-10">
            <h4 className="font-serif text-[#052e16] font-bold tracking-widest text-[15px] uppercase">Newsletter</h4>
            <Divider />
            <p className="text-[14px] text-slate-600 mb-6 leading-relaxed font-medium">
              Subscribe to our newsletter to get the latest updates and offers.
            </p>
            
            {/* Input Box */}
            <div className="flex items-center bg-white border border-[#c5a880]/40 rounded-xl p-1 shadow-sm mb-12 relative z-20">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow bg-transparent px-3 py-2.5 text-[15px] outline-none placeholder:text-slate-500 font-medium text-slate-700 w-full"
              />
              <button className="bg-[#052e16] hover:bg-[#0a4221] text-white p-3 rounded-lg transition-colors flex-shrink-0 shadow-md">
                <Send size={18} className="-ml-0.5" />
              </button>
            </div>

            {/* Creative Signature */}
            <div className="flex flex-col items-center mt-6">
              {/* Ornate Divider */}
              <div className="flex items-center justify-center mb-5 w-full">
                <div className="w-16 md:w-20 h-[1px] bg-[#c5a880]/60"></div>
                
                <div className="flex items-center mx-1">
                  <svg width="24" height="12" viewBox="0 0 24 12" className="stroke-[#c5a880] fill-none stroke-[1.2px]">
                    <path d="M0 6 C8 6 12 1 16 6 C18 9 21 9 24 6" />
                  </svg>
                  
                  <div className="w-2.5 h-2.5 rotate-45 border border-[#c5a880] flex items-center justify-center mx-1">
                    <div className="w-[3px] h-[3px] bg-[#c5a880]"></div>
                  </div>
                  
                  <svg width="24" height="12" viewBox="0 0 24 12" className="stroke-[#c5a880] fill-none stroke-[1.2px]">
                    <path d="M24 6 C16 6 12 1 8 6 C6 9 3 9 0 6" />
                  </svg>
                </div>

                <div className="w-16 md:w-20 h-[1px] bg-[#c5a880]/60"></div>
              </div>
              
              <h5 className="font-serif text-[#052e16] font-medium tracking-[0.25em] uppercase text-[18px] text-center w-full relative z-10">
                LET'S CREATE
              </h5>
              <div className="text-5xl md:text-4xl text-[#c5a880] text-center w-full -mt-2 relative z-20 pr-2 whitespace-nowrap" style={{ fontFamily: "'Great Vibes', 'Brush Script MT', cursive" }}>
                Something Beautiful
              </div>
              
              {/* Bottom Divider */}
              <div className="flex items-center justify-center mt-5 w-full">
                <div className="w-20 h-[1px] bg-[#c5a880]/60"></div>
                <div className="w-2.5 h-2.5 rotate-45 border border-[#c5a880] flex items-center justify-center mx-3">
                  <div className="w-[3px] h-[3px] bg-[#c5a880]"></div>
                </div>
                <div className="w-20 h-[1px] bg-[#c5a880]/60"></div>
              </div>
            </div>

          </div>
        
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#e2e8f0] relative z-20 bg-[#FCFBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between">
          <p className="text-[13px] text-slate-500 font-medium tracking-wide mb-4 md:mb-0">
            © 2024 LIGHTS Event Management. All Rights Reserved.
          </p>
          
          <div className="flex space-x-3">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
              <a 
                key={idx} 
                href="#" 
                className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-500 hover:border-[#052e16] hover:text-[#052e16] hover:bg-slate-50 transition-colors bg-white shadow-sm"
              >
                <Icon size={14} />
              </a>
            ))}
            <a 
              href="#" 
              className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-500 hover:border-[#052e16] hover:text-[#052e16] hover:bg-slate-50 transition-colors bg-white shadow-sm font-serif font-bold text-sm"
            >
              p
            </a>
          </div>
        </div>
      </div>
      
    </footer>
  );
}
