import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Award, Users, Star, ArrowRight, Calendar, Rocket, Trophy, Crown, MapPin, PartyPopper } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import useSEO from '../hooks/useSEO';
import leaves1 from '../assets/leaves1.png';
import leaves2 from '../assets/leaves2.png';

const SectionOrnament = () => (
  <div className="flex items-center justify-center w-full">
    <div className="flex items-center">
      <div className="w-16 sm:w-24 h-[1.5px] bg-[#c5a880]"></div>
      <div className="w-2 h-2 rotate-45 bg-[#c5a880] ml-2 mr-3 opacity-90"></div>
    </div>
    
    <div className="text-[#c5a880] flex items-center justify-center drop-shadow-sm">
      <svg width="32" height="24" viewBox="0 0 32 24" fill="currentColor">
        <path d="M16 0 C16 0 19 6 20 8 C18 10 16 12 16 12 C16 12 14 10 12 8 C13 6 16 0 16 0 Z" />
        <path d="M13.5 10 C9 8 3 8 3 8 C3 8 6 14 12 14 C12 14 14 12 13.5 10 Z" />
        <path d="M18.5 10 C23 8 29 8 29 8 C29 8 26 14 20 14 C20 14 18 12 18.5 10 Z" />
        <path d="M16 12 L19 18 C17.5 19 14.5 19 13 18 Z" />
      </svg>
    </div>

    <div className="flex items-center">
      <div className="w-2 h-2 rotate-45 bg-[#c5a880] ml-3 mr-2 opacity-90"></div>
      <div className="w-16 sm:w-24 h-[1.5px] bg-[#c5a880]"></div>
    </div>
  </div>
);

export default function AboutPage() {
  useSEO({
    title: 'About Us | LIGHTS - Luxury Event Management',
    description: 'Learn about our history, our passion, commitment, creativity, and journey at LIGHTS Event Management. We design and deliver extraordinary experiences that leave a lasting impression.'
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex-grow pt-36 bg-white animate-fade-in relative overflow-x-hidden">
      {/* Background Decorative Leaves */}
      <img src={leaves1} alt="" className="absolute left-0 top-[15%] w-[100px] md:w-[160px] lg:w-[200px] object-contain opacity-80 z-10 pointer-events-none transform -translate-x-[20%]" />
      <img src={leaves2} alt="" className="absolute right-0 top-[40%] w-[100px] md:w-[160px] lg:w-[200px] object-contain opacity-80 z-10 pointer-events-none transform translate-x-[20%]" />

      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-[13px] font-sans text-slate-500 mt-8 mb-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <Link to="/" className="hover:text-[#b78d51] transition-colors">Home</Link>
        <span className="text-[#c5a880] font-sans font-bold">&gt;</span>
        <span className="text-slate-800 font-sans font-medium">About Us</span>
      </div>

      <section className="relative pb-16 z-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-16">
            
            {/* Left Content Column */}
            <div className="flex-[0.7] text-left">
              <div className="flex items-center gap-3 text-[#c5a880] mb-4">
                <div className="w-12 h-[1px] bg-[#c5a880]"></div>
                <span className="text-[11px] font-bold tracking-[0.25em] uppercase">ABOUT US</span>
                <div className="w-12 h-[1px] bg-[#c5a880]"></div>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#052e16] font-semibold leading-[1.25] mb-6">
                <span className="whitespace-nowrap inline-block">Crafting Moments,</span><br />
                <span className="whitespace-nowrap inline-block">Creating Memories</span>
              </h2>

              <div className="flex items-center gap-2 text-[#c5a880] mb-8">
                <div className="w-16 h-[1.5px] bg-[#c5a880]/60"></div>
                <div className="w-1.5 h-1.5 rotate-45 bg-[#c5a880] flex items-center justify-center p-[1px]">
                  <div className="w-full h-full bg-[#c5a880]"></div>
                </div>
                <div className="w-16 h-[1.5px] bg-[#c5a880]/60"></div>
              </div>

              <p className="text-slate-600 font-sans text-[14.5px] leading-[1.8] mb-6">
                At LIGHTS Event Management, we transform your dreams into unforgettable celebrations. With creativity, precision, and passion, we design and deliver extraordinary experiences that leave a lasting impression.
              </p>
              <p className="text-slate-600 font-sans text-[14.5px] leading-[1.8] mb-8">
                From intimate gatherings to grand celebrations, our dedicated team ensures every detail is flawlessly executed, making your special moments truly magical.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/portfolio" className="bg-[#052e16] hover:bg-[#0a4221] text-white px-8 py-4 rounded-[12px] font-bold tracking-[0.15em] text-[12px] flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]">
                   VIEW PORTFOLIO
                   <ArrowRight className="w-4 h-4 ml-3 text-[#b78d51]" strokeWidth={2} />
                </Link>
              </div>
            </div>

            {/* Right Collage Column */}
            <div className="flex-[1.3] w-full max-w-lg lg:max-w-none">
              <div className="flex gap-4 items-stretch">
                
                {/* Left Column of Collage */}
                <div className="flex-[2.1] flex flex-col gap-4">
                  <div className="rounded-[20px] overflow-hidden shadow-md aspect-[1.5/1] relative">
                    <img 
                      src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80" 
                      alt="Walkway Setup" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex gap-3">
                    <div className="rounded-xl overflow-hidden shadow-sm flex-1 aspect-[1.2/1]">
                      <img 
                        src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=300&q=80" 
                        alt="Event Detail 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-sm flex-1 aspect-[1.2/1]">
                      <img 
                        src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=300&q=80" 
                        alt="Event Detail 2" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-sm flex-1 aspect-[1.2/1]">
                      <img 
                        src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=300&q=80" 
                        alt="Event Detail 3" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Column of Collage */}
                <div className="flex-1 flex flex-col gap-4">
                  <div className="rounded-[20px] overflow-hidden shadow-md aspect-square relative">
                    <img 
                      src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80" 
                      alt="Dining Setup" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-[20px] overflow-hidden shadow-md aspect-square relative">
                    <img 
                      src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80" 
                      alt="Purple Stage lighting" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>



      {/* Values Grid Section */}
      <section className="relative pt-12 pb-4 z-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#FAF5EB] rounded-[32px] p-8 md:py-14 md:px-12 shadow-[0_8px_30px_rgba(0,0,0,0.015)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            
            {/* Passion */}
            <div className="flex flex-col items-center text-center p-4 relative lg:px-8">
              <div className="w-20 h-20 rounded-full border border-[#e6d5b8]/50 bg-[#FAF5EB]/65 flex items-center justify-center mb-6 text-[#c5a880] shadow-sm">
                <Heart className="w-7 h-7 stroke-[1.5]" />
              </div>
              <h4 className="font-sans font-bold text-[#052e16] text-[16px] md:text-[17px] mb-3">Our Passion</h4>
              <p className="text-slate-500 font-sans text-[13.5px] leading-relaxed max-w-[240px]">
                We are passionate about creating beautiful events that touch hearts and create lasting memories.
              </p>
              {/* Vertical Divider */}
              <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[65%] border-r border-dashed border-[#e6d5b8]/80"></div>
            </div>

            {/* Commitment */}
            <div className="flex flex-col items-center text-center p-4 pt-8 md:pt-4 relative lg:px-8">
              <div className="w-20 h-20 rounded-full border border-[#e6d5b8]/50 bg-[#FAF5EB]/65 flex items-center justify-center mb-6 text-[#c5a880] shadow-sm">
                <Award className="w-7 h-7 stroke-[1.5]" />
              </div>
              <h4 className="font-sans font-bold text-[#052e16] text-[16px] md:text-[17px] mb-3">Our Commitment</h4>
              <p className="text-slate-500 font-sans text-[13.5px] leading-relaxed max-w-[240px]">
                We are committed to excellence in every detail, ensuring a seamless and stress-free experience.
              </p>
              {/* Vertical Divider */}
              <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[65%] border-r border-dashed border-[#e6d5b8]/80"></div>
            </div>

            {/* Creativity */}
            <div className="flex flex-col items-center text-center p-4 pt-8 md:pt-4 relative lg:px-8">
              <div className="w-20 h-20 rounded-full border border-[#e6d5b8]/50 bg-[#FAF5EB]/65 flex items-center justify-center mb-6 text-[#c5a880] shadow-sm">
                <Users className="w-7 h-7 stroke-[1.5]" />
              </div>
              <h4 className="font-sans font-bold text-[#052e16] text-[16px] md:text-[17px] mb-3">Our Creativity</h4>
              <p className="text-slate-500 font-sans text-[13.5px] leading-relaxed max-w-[240px]">
                We bring innovative ideas and creative designs to make every event uniquely yours.
              </p>
              {/* Vertical Divider */}
              <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[65%] border-r border-dashed border-[#e6d5b8]/80"></div>
            </div>

            {/* Promise */}
            <div className="flex flex-col items-center text-center p-4 pt-8 md:pt-4 lg:px-8">
              <div className="w-20 h-20 rounded-full border border-[#e6d5b8]/50 bg-[#FAF5EB]/65 flex items-center justify-center mb-6 text-[#c5a880] shadow-sm">
                <Star className="w-7 h-7 stroke-[1.5]" />
              </div>
              <h4 className="font-sans font-bold text-[#052e16] text-[16px] md:text-[17px] mb-3">Our Promise</h4>
              <p className="text-slate-500 font-sans text-[13.5px] leading-relaxed max-w-[240px]">
                We promise to deliver exceptional service and unforgettable experiences every time.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Journey Header */}
      <section className="relative pt-4 pb-24 z-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="flex items-center justify-center gap-3 text-[#c5a880] font-bold uppercase tracking-[0.15em] text-[16px] sm:text-[18px] mb-4">
            <span className="w-5 h-[2.5px] bg-[#c5a880] rounded-sm"></span>
            OUR JOURNEY
            <span className="w-5 h-[2.5px] bg-[#c5a880] rounded-sm"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#052e16] font-semibold max-w-4xl leading-tight mb-8 whitespace-normal md:whitespace-nowrap">
            A Journey Of Passion & Excellence
          </h2>
          
          {/* Timeline Row */}
          <div className="relative w-full max-w-6xl mx-auto mt-16 mb-16 px-4">
            
            {/* Connecting Line (Desktop) */}
            <div className="absolute top-[48px] left-[12.5%] right-[12.5%] h-[1px] border-t border-dashed border-[#e6d5b8] -z-10 hidden md:block">
              {/* Diamonds centered between points */}
              <div className="absolute left-[16.67%] top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-[#c5a880]"></div>
              <div className="absolute left-[50%] top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-[#c5a880]"></div>
              <div className="absolute left-[83.33%] top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-[#c5a880]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
              
              {/* 2013 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-[#021C0D] border border-[#e6d5b8]/30 flex items-center justify-center mb-6 shadow-md transition-transform duration-300 group-hover:scale-105">
                  <Calendar className="w-9 h-9 text-[#c5a880] stroke-[1.5]" />
                </div>
                <span className="text-[17px] font-bold text-[#c5a880] font-serif mb-2">2013</span>
                <h4 className="font-sans font-bold text-[#052e16] text-[15px] md:text-[16px] mb-2">The Beginning</h4>
                <p className="text-slate-500 font-sans text-[13.5px] leading-relaxed max-w-[240px]">
                  Started with a small team and a big dream to create memorable events.
                </p>
              </div>

              {/* 2016 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-[#021C0D] border border-[#e6d5b8]/30 flex items-center justify-center mb-6 shadow-md transition-transform duration-300 group-hover:scale-105">
                  <Rocket className="w-9 h-9 text-[#c5a880] stroke-[1.5]" />
                </div>
                <span className="text-[17px] font-bold text-[#c5a880] font-serif mb-2">2016</span>
                <h4 className="font-sans font-bold text-[#052e16] text-[15px] md:text-[16px] mb-2">Growing Stronger</h4>
                <p className="text-slate-500 font-sans text-[13.5px] leading-relaxed max-w-[240px]">
                  Expanded our team and services, creating hundreds of successful events.
                </p>
              </div>

              {/* 2019 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-[#021C0D] border border-[#e6d5b8]/30 flex items-center justify-center mb-6 shadow-md transition-transform duration-300 group-hover:scale-105">
                  <Trophy className="w-9 h-9 text-[#c5a880] stroke-[1.5]" />
                </div>
                <span className="text-[17px] font-bold text-[#c5a880] font-serif mb-2">2019</span>
                <h4 className="font-sans font-bold text-[#052e16] text-[15px] md:text-[16px] mb-2">Recognized Excellence</h4>
                <p className="text-slate-500 font-sans text-[13.5px] leading-relaxed max-w-[240px]">
                  Earned the trust of more clients with our dedication and unmatched quality.
                </p>
              </div>

              {/* Today */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-[#021C0D] border border-[#e6d5b8]/30 flex items-center justify-center mb-6 shadow-md transition-transform duration-300 group-hover:scale-105">
                  <Crown className="w-9 h-9 text-[#c5a880] stroke-[1.5]" />
                </div>
                <span className="text-[17px] font-bold text-[#c5a880] font-serif mb-2">Today</span>
                <h4 className="font-sans font-bold text-[#052e16] text-[15px] md:text-[16px] mb-2">Creating Memories</h4>
                <p className="text-slate-500 font-sans text-[13.5px] leading-relaxed max-w-[240px]">
                  Continuing our journey of creating extraordinary experiences across cities.
                </p>
              </div>

            </div>
          </div>

          <SectionOrnament />

          {/* Stats Banner Section */}
          <div className="w-full mt-20">
            <div className="bg-white border border-[#FAF5EB] rounded-[32px] p-6 md:py-10 md:px-12 shadow-[0_8px_30px_rgba(0,0,0,0.015)] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
              
              {/* Years of Experience */}
              <div className="flex items-center space-x-5 justify-start md:justify-center w-full max-w-[240px] md:max-w-none mx-auto md:mx-0 relative p-2 lg:px-4">
                <div className="w-16 h-16 rounded-full border border-[#e6d5b8]/50 bg-[#FAF5EB]/65 flex items-center justify-center text-[#c5a880] shadow-sm flex-shrink-0">
                  <Calendar className="w-7 h-7 stroke-[1.5]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[#052e16] font-serif font-bold text-2xl md:text-[28px] leading-tight">10+</span>
                  <span className="text-slate-500 font-sans text-xs mt-0.5 whitespace-nowrap">Years of Experience</span>
                </div>
                {/* Vertical Divider */}
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[55%] border-r border-dashed border-[#e6d5b8]/80"></div>
              </div>

              {/* Events Completed */}
              <div className="flex items-center space-x-5 justify-start md:justify-center w-full max-w-[240px] md:max-w-none mx-auto md:mx-0 relative p-2 lg:px-4">
                <div className="w-16 h-16 rounded-full border border-[#e6d5b8]/50 bg-[#FAF5EB]/65 flex items-center justify-center text-[#c5a880] shadow-sm flex-shrink-0">
                  <PartyPopper className="w-7 h-7 stroke-[1.5]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[#052e16] font-serif font-bold text-2xl md:text-[28px] leading-tight">500+</span>
                  <span className="text-slate-500 font-sans text-xs mt-0.5 whitespace-nowrap">Events Completed</span>
                </div>
                {/* Vertical Divider */}
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[55%] border-r border-dashed border-[#e6d5b8]/80"></div>
              </div>

              {/* Happy Clients */}
              <div className="flex items-center space-x-5 justify-start md:justify-center w-full max-w-[240px] md:max-w-none mx-auto md:mx-0 relative p-2 lg:px-4">
                <div className="w-16 h-16 rounded-full border border-[#e6d5b8]/50 bg-[#FAF5EB]/65 flex items-center justify-center text-[#c5a880] shadow-sm flex-shrink-0">
                  <Users className="w-7 h-7 stroke-[1.5]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[#052e16] font-serif font-bold text-2xl md:text-[28px] leading-tight">1000+</span>
                  <span className="text-slate-500 font-sans text-xs mt-0.5 whitespace-nowrap">Happy Clients</span>
                </div>
                {/* Vertical Divider */}
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[55%] border-r border-dashed border-[#e6d5b8]/80"></div>
              </div>

              {/* Team Members */}
              <div className="flex items-center space-x-5 justify-start md:justify-center w-full max-w-[240px] md:max-w-none mx-auto md:mx-0 relative p-2 lg:px-4">
                <div className="w-16 h-16 rounded-full border border-[#e6d5b8]/50 bg-[#FAF5EB]/65 flex items-center justify-center text-[#c5a880] shadow-sm flex-shrink-0">
                  <Award className="w-7 h-7 stroke-[1.5]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[#052e16] font-serif font-bold text-2xl md:text-[28px] leading-tight">50+</span>
                  <span className="text-slate-500 font-sans text-xs mt-0.5 whitespace-nowrap">Team Members</span>
                </div>
                {/* Vertical Divider */}
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[55%] border-r border-dashed border-[#e6d5b8]/80"></div>
              </div>

              {/* Cities Served */}
              <div className="flex items-center space-x-5 justify-start md:justify-center w-full max-w-[240px] md:max-w-none mx-auto md:mx-0 p-2 lg:px-4">
                <div className="w-16 h-16 rounded-full border border-[#e6d5b8]/50 bg-[#FAF5EB]/65 flex items-center justify-center text-[#c5a880] shadow-sm flex-shrink-0">
                  <MapPin className="w-7 h-7 stroke-[1.5]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[#052e16] font-serif font-bold text-2xl md:text-[28px] leading-tight">5+</span>
                  <span className="text-slate-500 font-sans text-xs mt-0.5 whitespace-nowrap">Cities Served</span>
                </div>
              </div>

            </div>
          </div>

          {/* Custom Quote Banner */}
          <div className="mt-20 bg-[#021C0D] rounded-2xl p-8 lg:px-12 lg:py-10 flex flex-col xl:flex-row items-center justify-between border border-[#D4AF37]/20 shadow-xl animate-fade-in text-white w-full">
             <div className="flex flex-col md:flex-row items-center mb-8 xl:mb-0 md:space-x-8 text-center md:text-left">
                <div className="w-16 h-16 rounded-full border border-[#D4AF37] flex items-center justify-center flex-shrink-0 text-[#D4AF37] bg-transparent mb-6 md:mb-0">
                   <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="3" width="20" height="13" rx="2" />
                      <path d="M12 16v5M8 21h8" />
                      <circle cx="12" cy="9" r="2.5" />
                      <path d="M8.5 14a3.5 3.5 0 0 1 7 0" />
                   </svg>
                </div>
                <div className="text-left">
                   <h4 className="text-xl md:text-2xl font-serif text-[#D4AF37] font-semibold mb-2">
                     Ready to Plan Your Dream Event?
                   </h4>
                   <p className="text-[#a3b3a9] font-sans text-sm md:text-[15px] leading-relaxed max-w-xl">
                     Let's create a celebration you and your guests will cherish forever.
                   </p>
                </div>
             </div>
             <Link to="/contact" className="bg-[#D4AF37] hover:bg-[#c5a880] text-[#021C0D] px-8 py-4 rounded-xl font-bold tracking-[0.15em] text-[13px] flex items-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] whitespace-nowrap">
                GET A CUSTOM QUOTE
                <ArrowRight className="w-4 h-4 ml-3 text-[#021C0D]" />
             </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
