import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import footerf2 from '../assets/footerf2.png';
import footerf1 from '../assets/footerf1.png';
import Logo from './Logo';

const Facebook = ({ size = 24, ...props }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" /></svg>;
const Instagram = ({ size = 24, ...props }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>;
const Twitter = ({ size = 24, ...props }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" /></svg>;
const Linkedin = ({ size = 24, ...props }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M5 21h4v-13h-4v13zm2-14.5c1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5 1.12 2.5 2.5 2.5zm4.5 14.5h4v-7c0-2.5 3-2.7 3 0v7h4v-8c0-4.5-5.5-4.8-7-2v-3h-4v13z" /></svg>;

export default function Footer() {
  const quickLinks = ['Home', 'About Us', 'Services', 'Portfolio', 'Contact Us'];
  const services = [
    'Wedding Planning & Decorations',
    'Birthday Parties',
    'Stage Decoration',
    'Photography & Videography',
    'DJ & Entertainment',
    'Sound & Lights',
    'Catering Services',
    'Bouncers Services'
  ];

  const Divider = () => (
    <div className="flex items-center mb-6 w-full">
      <div className="h-[1px] bg-[#c5a880] flex-grow"></div>
      <div className="w-1.5 h-1.5 rotate-45 bg-[#c5a880] mx-2 flex-shrink-0"></div>
      <div className="h-[1px] bg-[#c5a880] flex-grow"></div>
    </div>
  );

  return (
    <footer className="relative bg-[#FCFBF8] text-slate-700 overflow-hidden font-sans pt-16 md:pt-24 mt-auto">

      {/* Decorative Floral Left */}
      <img
        src={footerf2}
        alt=""
        className="absolute bottom-0 left-[-10px] lg:left-[-30px] w-[80px] sm:w-[130px] md:w-[160px] lg:w-[200px] object-contain opacity-40 md:opacity-90 pointer-events-none z-10"
      />

      {/* Decorative Floral Right */}
      <img
        src={footerf1}
        alt=""
        className="absolute bottom-0 right-[-10px] lg:right-[-20px] w-[70px] sm:w-[110px] md:w-[140px] lg:w-[190px] object-contain opacity-40 md:opacity-90 pointer-events-none z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-40">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 mb-6 lg:mb-8">

          {/* Column 1: Info */}
          <div className="md:col-span-12 lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
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
                  <span className="text-[15px] text-slate-700 font-medium">lightsevent.ndj@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full border border-[#052e16] flex items-center justify-center flex-shrink-0 text-[#052e16]">
                    <MapPin size={16} />
                  </div>
                  <span className="text-[15px] text-slate-700 font-medium">Pondicherry, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-4 lg:col-span-2 lg:pl-4 mt-0 md:mt-6 lg:mt-10">
            <div className="inline-flex flex-col w-max">
              <h4 className="font-serif text-[#052e16] font-bold tracking-widest text-[15px] uppercase mb-1.5">Quick Links</h4>
              <Divider />
            </div>
            <ul className="space-y-3">
              {quickLinks.map(link => {
                let href = `/#${link.toLowerCase().replace(' ', '')}`;
                if (link === 'Services') href = '/services';
                if (link === 'Portfolio') href = '/portfolio';
                if (link === 'About Us') href = '/about';
                if (link === 'Contact Us') href = '/contact';

                return (
                  <li key={link}>
                    <Link to={href} className="flex items-center text-[14px] font-medium text-slate-600 hover:text-[#c5a880] transition-colors group">
                      <ChevronRight size={14} className="mr-2 text-slate-400 group-hover:text-[#c5a880] transition-colors" />
                      {link}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="md:col-span-4 lg:col-span-3 mt-0 md:mt-6 lg:mt-10">
            <div className="inline-flex flex-col w-max">
              <h4 className="font-serif text-[#052e16] font-bold tracking-widest text-[15px] uppercase mb-1.5">Our Services</h4>
              <Divider />
            </div>
            <ul className="space-y-3">
              {services.map(service => (
                <li key={service}>
                  <a href="/services" className="flex items-center text-[14px] font-medium text-slate-600 hover:text-[#c5a880] transition-colors group">
                    <ChevronRight size={14} className="mr-2 text-slate-400 group-hover:text-[#c5a880] transition-colors" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Creative Signature */}
          <div className="md:col-span-4 lg:col-span-3 flex flex-col items-center justify-start mt-0 md:mt-6 lg:mt-10">
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
            <div className="text-[32px] sm:text-[40px] md:text-[36px] lg:text-[38px] xl:text-[42px] text-[#c5a880] text-center w-full -mt-2 relative z-20 pr-2 whitespace-nowrap" style={{ fontFamily: "'Great Vibes', 'Brush Script MT', cursive" }}>
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

      {/* Bottom Bar */}
      <div className="border-t border-[#c5a880]/40 relative z-20 bg-[#FCFBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 relative z-40">
          <p className="text-[13.5px] text-slate-500 font-medium tracking-wide text-center md:text-left">
            © 2026 <span className="font-bold text-[#052e16]">Pondy IT Solutions.</span>
          </p>

          <div className="flex space-x-4">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-11 h-11 rounded-full border border-[#052e16]/40 flex items-center justify-center text-[#052e16] hover:bg-[#052e16] hover:text-white transition-all duration-300 bg-white"
              >
                <Icon size={27} />
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
