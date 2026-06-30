import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutGrid, 
  Sparkles, 
  Briefcase, 
  Cake, 
  Tv, 
  Users, 
  Search, 
  ArrowRight 
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import portfliobg from '../assets/portfliobg.png';

const categories = [
  { id: 'all', label: 'All Events', icon: LayoutGrid },
  { id: 'weddings', label: 'Weddings', icon: Sparkles },
  { id: 'corporate', label: 'Corporate Events', icon: Briefcase },
  { id: 'birthdays', label: 'Birthday Parties', icon: Cake },
  { id: 'stage', label: 'Stage Shows', icon: Tv },
  { id: 'social', label: 'Social Events', icon: Users },
];

const portfolioItems = [
  {
    title: 'Elegant Garden Wedding',
    category: 'weddings',
    categoryLabel: 'Wedding',
    icon: Sparkles,
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Annual Corporate Gala',
    category: 'corporate',
    categoryLabel: 'Corporate Events',
    icon: Briefcase,
    img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Dreamy Birthday Bash',
    category: 'birthdays',
    categoryLabel: 'Birthday Parties',
    icon: Cake,
    img: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Live Concert Experience',
    category: 'stage',
    categoryLabel: 'Stage Shows',
    icon: Tv,
    img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Intimate Evening Soirée',
    category: 'social',
    categoryLabel: 'Social Events',
    icon: Users,
    img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Royal Traditional Wedding',
    category: 'weddings',
    categoryLabel: 'Wedding',
    icon: Sparkles,
    img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Business Conference 2024',
    category: 'corporate',
    categoryLabel: 'Corporate Events',
    icon: Briefcase,
    img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Vibrant Mehndi Celebration',
    category: 'social',
    categoryLabel: 'Social Events',
    icon: Users,
    img: 'https://images.unsplash.com/photo-1595853035070-59a39fe84de3?auto=format&fit=crop&w=600&q=80'
  }
];

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredItems = activeTab === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeTab);

  return (
    <main className="flex-grow bg-white animate-fade-in relative overflow-x-hidden">
      
      {/* Portfolio Header with Soft Fading Image */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        
        {/* Full-width backdrop image */}
        <div className="absolute inset-0 -z-10 select-none pointer-events-none">
          {/* Vignette Gradients to keep text readable */}
        
          <img 
            src={portfliobg} 
            alt="Faded Arch Background" 
            className="w-full h-full object-cover opacity-95 object-right"
          />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-[13px] font-sans text-slate-500 mb-8 mt-2">
            <Link to="/" className="hover:text-[#b78d51] transition-colors">Home</Link>
            <span className="text-[#c5a880] font-sans font-bold">&gt;</span>
            <span className="text-slate-800 font-sans font-medium">Portfolio</span>
          </div>

          {/* Heading Content */}
          <div className="max-w-xl md:max-w-2xl lg:max-w-3xl">
            <div className="flex items-center gap-3 text-[#c5a880] font-bold uppercase tracking-[0.15em] text-[13px] sm:text-[14px] mb-4">
              OUR PORTFOLIO
              <span className="w-8 h-[1.5px] bg-[#c5a880]"></span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-[#052e16] font-semibold leading-tight mb-6">
              Moments We've<br />Designed Beautifully
            </h1>
            <div className="flex items-center gap-2 text-[#c5a880] mb-6">
              <div className="w-1.5 h-1.5 rotate-45 bg-[#c5a880]"></div>
              <div className="w-1.5 h-1.5 rotate-45 bg-[#c5a880]"></div>
              <div className="w-16 h-[1px] bg-[#c5a880]"></div>
            </div>
            <p className="text-slate-500 font-sans text-[14px] md:text-[15px] leading-relaxed max-w-md">
              Explore our handpicked collection of unforgettable events. Each celebration reflects our creativity, precision, and passion for perfection.
            </p>
          </div>

        </div>
      </section>

      {/* Filter Tabs & Grid Section */}
      <section className="relative pb-24 z-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Tabs Pill Container */}
          <div className="flex justify-center mb-16">
            <div className="bg-white border border-[#FAF5EB] rounded-[24px] p-2.5 shadow-[0_4px_25px_rgba(0,0,0,0.015)] flex flex-wrap justify-center items-center gap-3 md:gap-5 max-w-full">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`flex items-center gap-3 px-5 py-3.5 rounded-[14px] text-[13.5px] font-sans font-medium transition-all duration-300 whitespace-nowrap ${
                      isActive 
                        ? 'bg-[#021C0D] text-white shadow-sm' 
                        : 'text-[#052e16] hover:bg-[#FAF5EB]/50 hover:text-[#b78d51]'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-[#c5a880] flex-shrink-0" strokeWidth={1.5} />
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item, idx) => {
              const CategoryIcon = item.icon;
              return (
                <ScrollReveal 
                  key={idx}
                  animation="animate-slide-up"
                  delay={idx === 0 ? 'animate-delay-100' : idx === 1 ? 'animate-delay-200' : idx === 2 ? 'animate-delay-300' : 'animate-delay-300'}
                  className="bg-white border border-[#FAF5EB] rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.012)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.025)] transition-all duration-300 group"
                >
                  {/* Image Wrapper */}
                  <div className="overflow-hidden aspect-[4/3] relative">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover transform group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    
                    {/* Always Visible Search Button */}
                    <div className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-[2px] text-white flex items-center justify-center absolute top-4 right-4 transition-all duration-300 hover:bg-[#021C0D] hover:text-[#c5a880] shadow-md">
                      <Search className="w-4 h-4 stroke-[2]" />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-5 pt-4 pb-5">
                    <h3 className="font-serif font-semibold text-[#052e16] text-[17px] mb-2.5 group-hover:text-[#b78d51] transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-500 text-[13px] font-sans">
                      <CategoryIcon className="w-3.5 h-3.5 text-[#c5a880] flex-shrink-0" strokeWidth={1.5} />
                      <span>{item.categoryLabel}</span>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Custom Quote Banner */}
          <div className="mt-24 bg-[#021C0D] rounded-2xl p-8 lg:px-12 lg:py-10 flex flex-col xl:flex-row items-center justify-between border border-[#D4AF37]/20 shadow-xl text-white w-full">
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
