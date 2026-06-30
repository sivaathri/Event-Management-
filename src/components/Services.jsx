import React, { useState } from 'react';
import { Heart, PartyPopper, Presentation, Camera, Headphones, Speaker, ConciergeBell, Shield, ArrowRight, Briefcase, Music, Image as ImageIcon, CheckCircle, Users, Headset, LayoutGrid } from 'lucide-react';

const WeddingRings = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#c5a880]">
    <circle cx="9" cy="14" r="5" />
    <circle cx="15" cy="14" r="5" />
    <polygon points="9 9 10 6 9 5 8 6" fill="currentColor" stroke="none" />
    <polygon points="15 9 16 6 15 5 14 6" fill="currentColor" stroke="none" />
  </svg>
);

const AllServicesIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#c5a880]">
    <rect x="5" y="4" width="14" height="17" rx="2" />
    <path d="M9 9h6M9 13h6M9 17h4" />
    <path d="M12 4v17" strokeDasharray="2 2" />
  </svg>
);

const SocialIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#c5a880]">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const categories = [
  { id: 'all', title: 'ALL SERVICES', subtitle: 'Complete Event Solutions', icon: <AllServicesIcon /> },
  { id: 'weddings', title: 'WEDDINGS', subtitle: 'Make your dream wedding', icon: <WeddingRings /> },
  { id: 'corporate', title: 'CORPORATE EVENTS', subtitle: 'Professional & Impactful', icon: <Briefcase className="w-7 h-7 stroke-[1.5] text-[#c5a880]" /> },
  { id: 'social', title: 'SOCIAL CELEBRATIONS', subtitle: "Life's Special Moments", icon: <SocialIcon /> },
  { id: 'entertainment', title: 'ENTERTAINMENT', subtitle: 'Music, DJ & More', icon: <Headphones className="w-7 h-7 stroke-[1.5] text-[#c5a880]" /> },
  { id: 'catering', title: 'CATERING', subtitle: 'Delicious Food Experience', icon: <ConciergeBell className="w-7 h-7 stroke-[1.5] text-[#c5a880]" /> },
  { id: 'venue', title: 'VENUE & DECOR', subtitle: 'Stunning Venues & Decor', icon: <Presentation className="w-7 h-7 stroke-[1.5] text-[#c5a880]" /> },
  { id: 'photography', title: 'PHOTOGRAPHY', subtitle: 'Capture Every Moment', icon: <Camera className="w-7 h-7 stroke-[1.5] text-[#c5a880]" /> },
  { id: 'support', title: 'EVENT SUPPORT', subtitle: 'End-to-End Support', icon: <Headset className="w-7 h-7 stroke-[1.5] text-[#c5a880]" /> },
];

const servicesList = [
  { 
    id: 1, 
    category: 'weddings',
    title: 'Wedding Planning &\nDecorations', 
    desc: 'From intimate ceremonies to grand celebrations.', 
    img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: 2, 
    category: 'social',
    title: 'Birthday Parties', 
    desc: 'Creative themes and fun-filled celebrations.', 
    img: 'https://images.unsplash.com/photo-1530103862676-de3c9de59f9e?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: 3, 
    category: 'venue',
    title: 'Stage Decoration', 
    desc: 'Stunning stage setups that leave a lasting impression.', 
    img: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: 4, 
    category: 'photography',
    title: 'Photography &\nVideography', 
    desc: 'Candid moments, beautifully captured.', 
    img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: 5, 
    category: 'entertainment',
    title: 'DJ & Entertainment', 
    desc: 'High-energy DJ, artists & live performances.', 
    img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: 6, 
    category: 'entertainment',
    title: 'Sound & Lights', 
    desc: 'Crystal-clear sound and mesmerizing lights.', 
    img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: 7, 
    category: 'catering',
    title: 'Catering Services', 
    desc: 'Exquisite menus tailored to your taste.', 
    img: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: 8, 
    category: 'support',
    title: 'Bouncers Services', 
    desc: 'Professional security for a safe and smooth event.', 
    img: 'https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?auto=format&fit=crop&w=600&q=80' 
  },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <section className="bg-white min-h-screen">
      <div className="flex flex-col lg:flex-row w-full max-w-[1440px] mx-auto">
        
        {/* Sidebar */}
        <div className="w-full lg:w-[340px] bg-white border-r border-slate-100 flex flex-col flex-shrink-0 relative lg:sticky lg:top-20 self-start px-6 py-10 lg:pl-10 lg:pr-6">
          {categories.map((cat, idx) => {
            const isActive = activeCategory === cat.id;
            const isNextActive = idx < categories.length - 1 && activeCategory === categories[idx + 1].id;
            const showBorder = idx < categories.length - 1 && !isActive && !isNextActive;
            
            return (
              <React.Fragment key={cat.id}>
                <button 
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center justify-between p-4 rounded-[12px] transition-all w-full text-left group ${isActive ? 'bg-[#FAF5EB]' : 'bg-transparent hover:bg-slate-50'}`}
                >
                  <div className="flex items-center space-x-5">
                     <div className={`transition-colors flex-shrink-0 ${isActive ? 'text-[#c5a880]' : 'text-[#c5a880] opacity-90'}`}>
                       {cat.icon}
                     </div>
                     <div className="flex flex-col justify-center">
                       <h4 className="font-sans font-bold text-[#052e16] text-[14px] tracking-wide uppercase mb-1">{cat.title}</h4>
                       <p className="font-sans text-slate-500 text-[13px] tracking-wide">{cat.subtitle}</p>
                     </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-transform flex-shrink-0 ${isActive ? 'text-[#c5a880]' : 'text-[#c5a880] opacity-60 group-hover:opacity-100 group-hover:translate-x-1'}`} strokeWidth={2} />
                </button>
                {showBorder && (
                  <div className="w-[calc(100%-2rem)] mx-auto h-[1px] bg-slate-100/80 my-1"></div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="flex-grow p-6 py-12 lg:p-12 xl:p-16 bg-white animate-fade-in">
           
           {/* Title Block */}
           <div className="flex flex-col items-center text-center mb-12">
              <div className="flex items-center gap-4 text-[#c5a880] mb-4">
                <div className="w-12 h-[1px] bg-[#c5a880]"></div>
                <span className="font-bold tracking-[0.2em] text-[11px] uppercase">OUR SERVICES</span>
                <div className="w-12 h-[1px] bg-[#c5a880]"></div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[38px] font-serif text-[#052e16] font-semibold tracking-wide">
                Everything You Need For A Perfect Event
              </h2>
              <div className="mt-5 flex justify-center">
                 <div className="w-2 h-2 rotate-45 border border-[#c5a880] flex items-center justify-center p-[1px]">
                   <div className="w-full h-full bg-[#c5a880]"></div>
                 </div>
              </div>
           </div>

           {/* Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-8">
              {servicesList.filter(s => activeCategory === 'all' || s.category === activeCategory).map((svc, idx) => (
                 <div key={svc.id} className="flex flex-col group cursor-pointer animate-slide-up bg-white p-3 rounded-[24px] border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" style={{ animationDelay: `${idx * 50}ms` }}>
                    <div className="aspect-[5/4] rounded-[16px] overflow-hidden mb-4">
                       <img src={svc.img} alt={svc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" loading="lazy" />
                    </div>
                    <div className="px-1 pb-1 flex flex-col flex-grow">
                      <h3 className="font-sans font-bold text-[#052e16] text-[15px] mb-2 whitespace-pre-line leading-snug tracking-wide group-hover:text-[#c5a880] transition-colors">
                        {svc.title}
                      </h3>
                      <p className="text-slate-500 font-sans text-[13px] leading-relaxed tracking-wide mt-auto">
                        {svc.desc}
                      </p>
                    </div>
                 </div>
              ))}
              
              {/* Fallback if category is empty */}
              {servicesList.filter(s => activeCategory === 'all' || s.category === activeCategory).length === 0 && (
                <div className="col-span-full py-20 text-center text-slate-400">
                   <p>More services coming soon to this category.</p>
                </div>
              )}
           </div>

           {/* Custom Quote Banner */}
           <div className="mt-16 bg-[#FAF5EB] rounded-2xl p-8 lg:px-12 lg:py-10 flex flex-col xl:flex-row items-center justify-between border border-[#f0eae1]/50 shadow-sm">
              <div className="flex flex-col md:flex-row items-center mb-8 xl:mb-0 md:space-x-8 text-center md:text-left">
                 <div className="w-20 h-20 rounded-full border border-[#e6d5b8] flex items-center justify-center flex-shrink-0 text-[#c5a880] bg-white mb-6 md:mb-0 shadow-sm">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>
                 </div>
                 <div>
                    <h4 className="text-[22px] font-serif text-[#052e16] font-semibold mb-3">Looking for something unique?</h4>
                    <p className="text-slate-500 font-sans text-[15px] leading-relaxed max-w-lg">Tell us your ideas and we'll create a customized experience just for you.</p>
                 </div>
              </div>
              <a href="/contact" className="bg-[#052e16] hover:bg-[#0a4221] text-white px-8 py-4 rounded-xl font-bold tracking-[0.15em] text-[13px] flex items-center transition-colors shadow-lg hover:shadow-xl whitespace-nowrap">
                 GET A CUSTOM QUOTE
                 <ArrowRight className="w-4 h-4 ml-3" />
              </a>
           </div>

        </div>

      </div>
    </section>
  );
}
