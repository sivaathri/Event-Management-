import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function PortfolioPage() {
  const portfolioItems = [
    { title: 'Royal Palace Wedding', category: 'Wedding', img: '/wedding_stage.png' },
    { title: 'TechCorp Annual Summit', category: 'Corporate', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80' },
    { title: 'Golden Jubilee Gala', category: 'Social', img: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=600&q=80' },
    { title: 'Enchanted Forest Decor', category: 'Theme Decor', img: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80' },
    { title: 'Symphony Lights & Sound', category: 'Production', img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80' },
    { title: 'Grand Banquets Reception', category: 'Catering', img: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80' },
  ];

  return (
    <main className="flex-grow pt-24 bg-white animate-fade-in">
      <section id="portfolio" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif text-brand-emerald tracking-wider font-semibold">
              OUR PORTFOLIO
            </h2>
            <div className="w-16 h-[2px] bg-gold mt-4"></div>
            <p className="text-sm text-slate-500 font-sans tracking-wide mt-3 font-light max-w-lg">
              Visual glimpses of our luxury celebrations and grand stage decors
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, idx) => (
              <div 
                key={idx}
                className="group relative overflow-hidden rounded-2xl shadow-md border border-slate-100/50 aspect-[4/3] bg-slate-100"
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-750 ease-out"
                  loading="lazy"
                />
                
                {/* Dark Elegant Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                  <span className="text-gold font-bold text-xs uppercase tracking-widest mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-white font-serif text-xl font-medium tracking-wide">
                    {item.title}
                  </h3>
                  <div className="mt-3 flex items-center text-xs font-semibold text-white/90 group/btn">
                    View Gallery 
                    <ChevronRight size={14} className="ml-1 transform group-hover/btn:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
