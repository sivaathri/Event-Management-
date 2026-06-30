import React, { useState } from 'react';
import { Heart, PartyPopper, Presentation, Camera, Headphones, Speaker, ConciergeBell, Shield, ArrowRight, Briefcase, Music, Image as ImageIcon, CheckCircle, Users, Headset, LayoutGrid, Calendar, Flower, Star, User, Eye, ClipboardList, Settings, MessageSquare } from 'lucide-react';
import ser1 from '../assets/ser1.png';
import ser2 from '../assets/ser2.png';

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
    img: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=600&q=80' 
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

const categoryDetails = {
  weddings: {
    title: 'Wedding Planning &\nDecorations',
    description: 'We create timeless weddings filled with elegance, emotions, and unforgettable moments. From planning to the perfect decor, we handle every detail to make your big day truly magical.We create timeless weddings filled with elegance, emotions, and unforgettable moments. From planning to the perfect decor, we handle every detail to make your big day truly magical.We create timeless weddings filled with elegance, emotions, and unforgettable moments. From planning to the perfect decor, we handle every detail to make your big day truly magical.We create timeless weddings filled with elegance, emotions, and unforgettable moments. From planning to the perfect decor, we handle every detail to make your big day truly magical.We create timeless weddings filled with elegance, emotions, and unforgettable moments. From planning to the perfect decor, we handle every detail to make your big day truly magical.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80',
    features: [
      { icon: <Calendar strokeWidth={1.5} className="w-6 h-6 text-[#c5a880]" />, title: 'End-to-End\nPlanning' },
      { icon: <Flower strokeWidth={1.5} className="w-6 h-6 text-[#c5a880]" />, title: 'Custom\nDecor' },
      { icon: <Users strokeWidth={1.5} className="w-6 h-6 text-[#c5a880]" />, title: 'Vendor\nManagement' },
      { icon: <Heart strokeWidth={1.5} className="w-6 h-6 text-[#c5a880]" />, title: 'Memorable\nExperience' },
    ],
    offerings: [
      'Wedding Concept & Theme', 'Catering & Menu Planning',
      'Venue Selection', 'Photography & Videography',
      'Decor & Floral Design', 'Guest Management',
      'Entertainment & Music', 'Day-of Coordination'
    ],
    process: [
      { step: 1, icon: <MessageSquare strokeWidth={1.5} className="w-5 h-5 text-[#c5a880]" />, title: 'Consultation', desc: 'Understanding your\nvision and needs.' },
      { step: 2, icon: <ClipboardList strokeWidth={1.5} className="w-5 h-5 text-[#c5a880]" />, title: 'Planning', desc: 'Creating a customized\nwedding plan.' },
      { step: 3, icon: <Settings strokeWidth={1.5} className="w-5 h-5 text-[#c5a880]" />, title: 'Execution', desc: 'Bringing every detail\nto life.' },
      { step: 4, icon: <Heart strokeWidth={1.5} className="w-5 h-5 text-[#c5a880]" />, title: 'Celebration', desc: 'You enjoy, we take\ncare of the rest.' },
    ],
    whyChooseUs: [
      { icon: <Star strokeWidth={1.5} className="w-5 h-5" />, text: 'Personalized & Unique Themes' },
      { icon: <User strokeWidth={1.5} className="w-5 h-5" />, text: 'Experienced Wedding Planners' },
      { icon: <Eye strokeWidth={1.5} className="w-5 h-5" />, text: 'Attention to Every Detail' },
      { icon: <Heart strokeWidth={1.5} className="w-5 h-5" />, text: 'Trusted by Hundreds of Couples' },
    ],
    gallery: [
      { img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80', title: 'Mandap Decor' },
      { img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80', title: 'Reception Stage' },
      { img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=600&q=80', title: 'Wedding Entrance' },
      { img: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80', title: 'Table Setup' },
      { img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80', title: 'Outdoor Wedding' },
      { img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=600&q=80', title: 'Floral Decor' },
    ]
  },
  default: {
    title: 'Premium Event\nServices',
    description: 'We bring exceptional expertise and flawless execution to your events. From comprehensive planning to the final moments, we guarantee a spectacular and stress-free experience tailored exactly to your needs.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    features: [
      { icon: <Calendar strokeWidth={1.5} className="w-6 h-6 text-[#c5a880]" />, title: 'Expert\nPlanning' },
      { icon: <Star strokeWidth={1.5} className="w-6 h-6 text-[#c5a880]" />, title: 'Premium\nQuality' },
      { icon: <Users strokeWidth={1.5} className="w-6 h-6 text-[#c5a880]" />, title: 'Dedicated\nTeam' },
      { icon: <Heart strokeWidth={1.5} className="w-6 h-6 text-[#c5a880]" />, title: 'Client\nSatisfaction' },
    ],
    offerings: [
      'Customized Planning', 'On-Site Management',
      'Vendor Coordination', 'Budget Management',
      'Timeline Creation', 'Quality Assurance',
      'Creative Design', 'Post-Event Support'
    ],
    process: [
      { step: 1, icon: <MessageSquare strokeWidth={1.5} className="w-5 h-5 text-[#c5a880]" />, title: 'Consultation', desc: 'Understanding your\nrequirements.' },
      { step: 2, icon: <ClipboardList strokeWidth={1.5} className="w-5 h-5 text-[#c5a880]" />, title: 'Strategy', desc: 'Developing a unique\naction plan.' },
      { step: 3, icon: <Settings strokeWidth={1.5} className="w-5 h-5 text-[#c5a880]" />, title: 'Execution', desc: 'Flawless implementation\nof the plan.' },
      { step: 4, icon: <Star strokeWidth={1.5} className="w-5 h-5 text-[#c5a880]" />, title: 'Success', desc: 'Delivering exceptional\nresults.' },
    ],
    whyChooseUs: [
      { icon: <Star strokeWidth={1.5} className="w-5 h-5" />, text: 'Industry Leading Expertise' },
      { icon: <User strokeWidth={1.5} className="w-5 h-5" />, text: 'Dedicated Professionals' },
      { icon: <Eye strokeWidth={1.5} className="w-5 h-5" />, text: 'Meticulous Attention to Detail' },
      { icon: <Heart strokeWidth={1.5} className="w-5 h-5" />, text: 'Commitment to Excellence' },
    ],
    gallery: [
      { img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80', title: 'Event Setup' },
      { img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=600&q=80', title: 'Stage Design' },
      { img: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80', title: 'Lighting' },
      { img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80', title: 'Floral Decor' },
      { img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80', title: 'Catering' },
      { img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80', title: 'Entertainment' },
    ]
  }
};

const ServiceDetailView = ({ categoryId }) => {
  const data = categoryDetails[categoryId] || categoryDetails.default;
  
  return (
    <div className="w-full animate-fade-in flex flex-col pt-8 xl:pt-4">
      {/* Top Split Section */}
      <div className="flex flex-col xl:flex-row gap-12 xl:gap-16 mb-16">
        
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center">
          <h4 className="text-[#b78d51] font-bold tracking-[0.15em] text-[11px] uppercase mb-5">
            PREMIUM SERVICE
          </h4>
          <h2 className="text-4xl md:text-5xl lg:text-[46px] font-serif text-[#052e16] font-semibold leading-[1.1] whitespace-pre-line mb-8">
            {data.title}
          </h2>
          
          <div className="flex items-center gap-4 text-[#b78d51] mb-8">
            <div className="w-12 h-[1.5px] bg-[#b78d51]/50"></div>
            <div className="w-2 h-2 rotate-45 border border-[#c5a880] flex items-center justify-center p-[1.5px]">
               <div className="w-full h-full bg-[#c5a880]"></div>
            </div>
            <div className="w-12 h-[1.5px] bg-[#b78d51]/50"></div>
          </div>
          
          <p className="text-slate-600 font-sans text-[14.5px] leading-[1.8] max-w-lg mb-12">
            {data.description}
          </p>

          {/* Gallery Section */}
          {data.gallery && (
            <div className="mb-14 animate-fade-in w-full xl:w-[180%] relative z-10" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <div className="flex items-center justify-center gap-4 text-[#b78d51] mb-8">
                <div className="flex items-center gap-1.5">
                  <div className="w-12 md:w-24 h-[1px] bg-[#b78d51]/60"></div>
                  <div className="w-1 h-1 rotate-45 bg-[#b78d51]/60"></div>
                </div>
                <h4 className="font-bold tracking-[0.2em] text-[11px] uppercase whitespace-nowrap">
                  OUR {categoryId === 'weddings' ? 'WEDDING' : 'PREMIUM'} WORK
                </h4>
                <div className="flex items-center gap-1.5">
                  <div className="w-1 h-1 rotate-45 bg-[#b78d51]/60"></div>
                  <div className="w-12 md:w-24 h-[1px] bg-[#b78d51]/60"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 lg:gap-6">
                {data.gallery.map((item, i) => (
                  <div key={i} className="flex flex-col items-center group cursor-pointer">
                    <div className="w-full aspect-[4/3] rounded-[16px] overflow-hidden mb-3 shadow-md border border-slate-100 relative">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                    </div>
                    <h5 className="text-[10px] md:text-[11px] xl:text-[12px] font-bold text-[#052e16] tracking-wider text-center leading-[1.3] uppercase mt-1">{item.title}</h5>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features Grid */}
          <div className="flex items-start divide-x divide-[#f0eae1] mb-12 max-w-lg">
            {data.features.map((feat, i) => (
              <div key={i} className="flex flex-col items-center text-center flex-1 px-1">
                <div className="flex items-center justify-center mb-3 text-[#b78d51]">
                  {React.cloneElement(feat.icon, { className: "w-7 h-7" })}
                </div>
                <h5 className="text-[12px] font-medium text-[#052e16] whitespace-pre-line leading-relaxed">
                  {feat.title}
                </h5>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/contact" className="bg-[#052e16] hover:bg-[#0a4221] text-white px-8 py-4 rounded-[12px] font-bold tracking-[0.1em] text-[12px] flex items-center justify-center transition-colors shadow-lg hover:shadow-xl">
               GET A CUSTOM QUOTE
               <ArrowRight className="w-4 h-4 ml-3" />
            </a>
            <a href="/portfolio" className="bg-white border border-[#e6d5b8] text-[#052e16] hover:bg-[#FAF5EB] px-8 py-4 rounded-[12px] font-bold tracking-[0.1em] text-[12px] flex items-center justify-center transition-colors shadow-sm">
               VIEW PORTFOLIO
               <ArrowRight className="w-4 h-4 ml-3 text-[#b78d51]" />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 xl:max-w-[55%]">
          <div className="aspect-[4/3] xl:aspect-[5/4] w-full rounded-[24px] overflow-hidden shadow-2xl">
            <img src={data.image} alt="Service" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <section 
      className="bg-white min-h-screen relative"
      style={{ 
        backgroundImage: `url(${ser1}), url(${ser2})`, 
        backgroundRepeat: 'no-repeat, no-repeat', 
        backgroundPosition: 'left 120px, right 200px', 
        backgroundSize: 'min(200px, 20vw) auto, min(130px, 12vw) auto', 
      }}
    >
      <div className="flex flex-col lg:flex-row w-full max-w-[1600px] mx-auto">
        
        {/* Sidebar */}
        <div className="w-full lg:w-[340px] border-r border-slate-100 flex flex-col flex-shrink-0 relative lg:sticky lg:top-20 self-start px-6 py-10 lg:pl-10 lg:pr-6">
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

        {/* Main Content Area */}
        <div className="flex-grow px-6 pb-8 pt-6 lg:px-12 lg:pb-10 lg:pt-8 xl:px-16 xl:pb-12">
          
          {/* Global Breadcrumb */}
          <div className="flex items-center gap-2 text-[13px] font-medium text-slate-500 mb-8 xl:mb-10">
            <a href="/" className="hover:text-[#b78d51] cursor-pointer transition-colors">Home</a>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#c5a880] mx-1"><path d="M9 18l6-6-6-6"/></svg>
            <span className="hover:text-[#b78d51] cursor-pointer transition-colors" onClick={() => { setActiveCategory('all'); window.scrollTo(0,0); }}>Services</span>
            {activeCategory !== 'all' && (
              <>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#c5a880] mx-1"><path d="M9 18l6-6-6-6"/></svg>
                <span className="text-slate-700">{categoryDetails[activeCategory] ? categoryDetails[activeCategory].title.replace('\n', ' ') : categoryDetails.default.title.replace('\n', ' ')}</span>
              </>
            )}
          </div>

          {activeCategory === 'all' ? (
            <div className="animate-fade-in">
              {/* Title Block */}
              <div className="flex flex-col items-center text-center mb-12">
                 <div className="flex items-center gap-4 text-[#b78d51] mb-4">
                   <div className="w-12 h-[1.5px] bg-[#b78d51]"></div>
                   <span className="font-bold tracking-[0.2em] text-[11.5px] uppercase">OUR SERVICES</span>
                   <div className="w-12 h-[1.5px] bg-[#b78d51]"></div>
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
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8">
                 {servicesList.map((svc, idx) => (
                    <div 
                      key={svc.id} 
                      onClick={() => setActiveCategory(svc.category)}
                      className="flex flex-col group cursor-pointer animate-slide-up bg-white rounded-[20px] overflow-hidden border border-[#f0eae1] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 transform hover:-translate-y-1" 
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                       <div className="aspect-[4/3] w-full overflow-hidden mb-5">
                          <img src={svc.img} alt={svc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" loading="lazy" />
                       </div>
                       <div className="px-6 pb-7 flex flex-col flex-grow">
                         <h3 className="font-sans font-bold text-[#052e16] text-[16.5px] mb-2 whitespace-pre-line leading-snug group-hover:text-[#b78d51] transition-colors">
                           {svc.title}
                         </h3>
                         <p className="text-slate-500 font-sans text-[13.5px] leading-[1.6] mt-auto">
                           {svc.desc}
                         </p>
                       </div>
                    </div>
                 ))}
              </div>

              {/* Custom Quote Banner */}
              <div className="mt-16 bg-[#FAF5EB] rounded-2xl p-8 lg:px-12 lg:py-10 flex flex-col xl:flex-row items-center justify-between border border-[#f0eae1]/50 shadow-sm animate-fade-in">
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
          ) : (
            <ServiceDetailView categoryId={activeCategory} />
          )}

        </div>

      </div>
    </section>
  );
}
