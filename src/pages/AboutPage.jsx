import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Award, Users, Star, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex-grow pt-24 bg-white animate-fade-in relative overflow-x-hidden">
      {/* Background Decorative Leaves */}
      <img src={leaves1} alt="" className="absolute left-0 top-[15%] w-[100px] md:w-[160px] lg:w-[200px] object-contain opacity-80 z-10 pointer-events-none transform -translate-x-[20%]" />
      <img src={leaves2} alt="" className="absolute right-0 top-[40%] w-[100px] md:w-[160px] lg:w-[200px] object-contain opacity-80 z-10 pointer-events-none transform translate-x-[20%]" />

      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-[13px] font-sans text-slate-500 mt-8 mb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <Link to="/" className="hover:text-[#b78d51] transition-colors">Home</Link>
        <span className="text-[#c5a880] font-sans font-bold">&gt;</span>
        <span className="text-slate-800 font-sans font-medium">About Us</span>
      </div>

      {/* Main Section */}
      <section className="relative pb-16 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-16">
            
            {/* Left Content Column */}
            <div className="flex-1 text-left">
              <div className="flex items-center gap-3 text-[#c5a880] mb-4">
                <div className="w-12 h-[1px] bg-[#c5a880]"></div>
                <span className="text-[11px] font-bold tracking-[0.25em] uppercase">ABOUT US</span>
                <div className="w-12 h-[1px] bg-[#c5a880]"></div>
              </div>

              <h2 className="text-4xl md:text-5xl font-serif text-[#052e16] font-semibold leading-[1.15] mb-6">
                Crafting Moments,<br/>Creating Memories
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
                <Link to="/about" className="bg-[#052e16] hover:bg-[#0a4221] text-white px-8 py-4 rounded-[12px] font-bold tracking-[0.1em] text-[12px] flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]">
                   OUR STORY
                   <ArrowRight className="w-4 h-4 ml-3 text-[#b78d51]" />
                </Link>
                <Link to="/portfolio" className="bg-white border border-[#e6d5b8] text-[#052e16] hover:bg-[#FAF5EB] px-8 py-4 rounded-[12px] font-bold tracking-[0.1em] text-[12px] flex items-center justify-center transition-colors shadow-sm">
                   VIEW PORTFOLIO
                   <ArrowRight className="w-4 h-4 ml-3 text-[#b78d51]" strokeWidth={2} />
                </Link>
              </div>
            </div>

            {/* Right Collage Column */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none">
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
                    <div className="rounded-xl overflow-hidden shadow-sm flex-1 aspect-[4/3]">
                      <img 
                        src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=300&q=80" 
                        alt="Event Detail 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-sm flex-1 aspect-[4/3]">
                      <img 
                        src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=300&q=80" 
                        alt="Event Detail 2" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-sm flex-1 aspect-[4/3]">
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
      <section className="relative py-12 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#f0eae1] rounded-[24px] p-8 md:p-10 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:divide-x divide-slate-100">
            
            {/* Passion */}
            <div className="flex flex-col items-center text-center p-4 lg:first:pl-0 lg:pl-8">
              <div className="w-14 h-14 rounded-full border border-[#e6d5b8] bg-[#FAF5EB]/50 flex items-center justify-center mb-5 text-[#c5a880]">
                <Heart className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h4 className="font-sans font-bold text-[#052e16] text-[16px] mb-3">Our Passion</h4>
              <p className="text-slate-500 font-sans text-[13.5px] leading-relaxed">
                We are passionate about creating beautiful events that touch hearts and create lasting memories.
              </p>
            </div>

            {/* Commitment */}
            <div className="flex flex-col items-center text-center p-4 pt-8 md:pt-4 lg:pl-8">
              <div className="w-14 h-14 rounded-full border border-[#e6d5b8] bg-[#FAF5EB]/50 flex items-center justify-center mb-5 text-[#c5a880]">
                <Award className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h4 className="font-sans font-bold text-[#052e16] text-[16px] mb-3">Our Commitment</h4>
              <p className="text-slate-500 font-sans text-[13.5px] leading-relaxed">
                We are committed to excellence in every detail, ensuring a seamless and stress-free experience.
              </p>
            </div>

            {/* Creativity */}
            <div className="flex flex-col items-center text-center p-4 pt-8 md:pt-4 lg:pl-8">
              <div className="w-14 h-14 rounded-full border border-[#e6d5b8] bg-[#FAF5EB]/50 flex items-center justify-center mb-5 text-[#c5a880]">
                <Users className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h4 className="font-sans font-bold text-[#052e16] text-[16px] mb-3">Our Creativity</h4>
              <p className="text-slate-500 font-sans text-[13.5px] leading-relaxed">
                We bring innovative ideas and creative designs to make every event uniquely yours.
              </p>
            </div>

            {/* Promise */}
            <div className="flex flex-col items-center text-center p-4 pt-8 md:pt-4 lg:pl-8">
              <div className="w-14 h-14 rounded-full border border-[#e6d5b8] bg-[#FAF5EB]/50 flex items-center justify-center mb-5 text-[#c5a880]">
                <Star className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h4 className="font-sans font-bold text-[#052e16] text-[16px] mb-3">Our Promise</h4>
              <p className="text-slate-500 font-sans text-[13.5px] leading-relaxed">
                We promise to deliver exceptional service and unforgettable experiences every time.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Journey Header */}
      <section className="relative py-16 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="flex items-center justify-center gap-3 text-[#c5a880] font-bold uppercase tracking-[0.15em] text-[16px] sm:text-[18px] mb-4">
            <span className="w-5 h-[2.5px] bg-[#c5a880] rounded-sm"></span>
            OUR JOURNEY
            <span className="w-5 h-[2.5px] bg-[#c5a880] rounded-sm"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-[#052e16] font-semibold max-w-2xl leading-tight mb-8">
            A Journey Of Passion & Excellence
          </h2>
          <SectionOrnament />
        </div>
      </section>
    </main>
  );
}
