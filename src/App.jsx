import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Logo from './components/Logo';
import { Calendar, User, Mail, FileText, CheckCircle2, ChevronRight, Star, Quote } from 'lucide-react';

export default function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'Wedding',
    eventDate: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: 'Wedding',
        eventDate: '',
        message: ''
      });
    }, 5000);
  };

  const portfolioItems = [
    { title: 'Royal Palace Wedding', category: 'Wedding', img: '/wedding_stage.png' },
    { title: 'TechCorp Annual Summit', category: 'Corporate', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80' },
    { title: 'Golden Jubilee Gala', category: 'Social', img: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=600&q=80' },
    { title: 'Enchanted Forest Decor', category: 'Theme Decor', img: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80' },
    { title: 'Symphony Lights & Sound', category: 'Production', img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80' },
    { title: 'Grand Banquets Reception', category: 'Catering', img: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80' },
  ];

  const testimonials = [
    {
      name: 'Priya & Rahul Mehta',
      role: 'Bride & Groom',
      text: 'LIGHTS and NDJ Groups designed a wedding stage that was nothing short of a fairy tale! Our guests were absolutely mesmerized by the floral arrangement and the crystal chandeliers. Flawless management!',
      rating: 5,
    },
    {
      name: 'Vikram Malhotra',
      role: 'Marketing VP, NexaCorp',
      text: 'We hired them for our flagship product launch. The stage structure, lighting precision, and acoustics were outstanding. They took care of everything, letting our team focus on the event itself.',
      rating: 5,
    },
    {
      name: 'Anita Sen',
      role: 'Host, Golden Anniversary Gala',
      text: 'The hospitality and food catering were outstanding. They customized the theme to match the golden anniversary decor perfectly. Every detail was executed with grace and style.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* Portfolio Gallery Section */}
      <section id="portfolio" className="py-24 bg-white">
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

      {/* About Us & Stats Section */}
      <section id="about" className="py-24 bg-cream-light relative overflow-hidden">
        {/* Subtle Wave Design */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Content Block */}
            <div className="lg:col-span-7 text-left space-y-6">
              <h2 className="text-3xl sm:text-4xl font-serif text-brand-emerald tracking-wide">
                We Design Extraordinary Moments
              </h2>
              <div className="w-16 h-[2px] bg-gold"></div>
              
              <p className="text-base text-slate-600 font-sans leading-relaxed font-light">
                At **LIGHTS Event Management**, powered by the prestigious **NDJ Groups**, we believe that every milestone event is a blank canvas. Our mission is to paint it with elegance, creativity, and impeccable organizational detail. 
              </p>
              <p className="text-base text-slate-600 font-sans leading-relaxed font-light">
                For over a decade, we have partnered with discerning clients to craft weddings, corporate launches, and luxury celebrations that are truly unforgettable. We handle everything from custom backdrop fabrications to technical sound, lighting, and hospitality.
              </p>

              {/* Quality Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  'Bespoke Stage & Mandap Designs',
                  'High-End Sound & Acoustic Engineering',
                  'Complete Hospitality & Host Management',
                  'Impeccable Floral & Theme Crafting'
                ].map((hl) => (
                  <div key={hl} className="flex items-center space-x-3 text-slate-700">
                    <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                    <span className="text-sm font-medium font-sans">{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Stats Counter Grid */}
            <div className="lg:col-span-5 bg-white p-8 rounded-3xl shadow-xl border border-slate-100/80 grid grid-cols-2 gap-6 relative">
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gold/10 rounded-full blur-xl"></div>
              
              {[
                { number: '150+', label: 'Luxury Weddings' },
                { number: '500+', label: 'Corporate Events' },
                { number: '10+', label: 'Years Experience' },
                { number: '99%', label: 'Client Satisfaction' }
              ].map((stat, idx) => (
                <div key={idx} className="p-6 bg-cream-light/60 rounded-2xl flex flex-col items-center justify-center border border-slate-50">
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-brand-emerald mb-1">
                    {stat.number}
                  </span>
                  <span className="text-xs text-slate-500 font-sans uppercase tracking-wider text-center font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif text-brand-emerald tracking-wider font-semibold">
              WHAT OUR CLIENTS SAY
            </h2>
            <div className="w-16 h-[2px] bg-gold mt-4"></div>
            <p className="text-sm text-slate-500 font-sans tracking-wide mt-3 font-light max-w-lg">
              Hear directly from the hosts who trusted us with their milestone moments
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div 
                key={idx}
                className="bg-cream-light/40 p-8 rounded-3xl border border-slate-100 hover:border-brand-emerald/10 transition-all duration-300 relative flex flex-col text-left group"
              >
                <Quote className="absolute top-6 right-8 text-gold/20 w-12 h-12" />
                
                {/* Stars */}
                <div className="flex space-x-1 mb-6 text-gold">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="text-slate-600 font-sans text-sm leading-relaxed mb-6 italic font-light relative z-10">
                  "{t.text}"
                </p>

                <div className="mt-auto border-t border-slate-200/50 pt-4">
                  <h4 className="font-serif text-slate-900 font-semibold">{t.name}</h4>
                  <p className="text-xs text-brand-emerald font-semibold uppercase tracking-wider mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Contact & Consultation Form */}
      <section id="contact" className="py-24 bg-cream-light relative overflow-hidden">
        {/* Decorative corner flourishes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-soft rounded-full filter blur-3xl opacity-40 -z-10 animate-pulse-subtle"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-light/20 rounded-full filter blur-3xl opacity-30 -z-10 animate-pulse-subtle animate-delay-200"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          
          {/* Card Container */}
          <div className="bg-white rounded-[32px] shadow-2xl border border-slate-100 overflow-hidden grid grid-cols-1 md:grid-cols-12">
            
            {/* Left Col: Contact Info / Gold Card */}
            <div className="md:col-span-5 bg-brand-emerald text-white p-8 sm:p-12 flex flex-col justify-between text-left">
              <div className="space-y-6">
                <Logo size="sm" light={true} />
                <div className="pt-8 space-y-4">
                  <h3 className="font-serif text-xl font-medium tracking-wide">Let's Design Your Dream Event</h3>
                  <p className="text-sm text-white/80 font-sans font-light leading-relaxed">
                    Contact us for a bespoke layout, theme consultation, and tailored quotation.
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-10 border-t border-white/10 mt-8">
                <div>
                  <p className="text-xs text-gold-light uppercase tracking-widest font-semibold">Phone Helpline</p>
                  <a href="tel:+919677585986" className="text-base font-semibold tracking-wider hover:underline block mt-0.5">
                    +91 96775 85986
                  </a>
                </div>
                <div>
                  <p className="text-xs text-gold-light uppercase tracking-widest font-semibold">Email Inquiry</p>
                  <a href="mailto:info@lightsevents.com" className="text-base font-semibold hover:underline block mt-0.5">
                    info@lightsevents.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right Col: Consultation Form */}
            <div className="md:col-span-7 p-8 sm:p-12 text-left">
              <h3 className="font-serif text-2xl text-slate-800 font-semibold mb-6">
                Request Consultation
              </h3>

              {formSubmitted ? (
                <div className="bg-brand-soft border border-brand-emerald/10 text-brand-emerald p-6 rounded-2xl flex flex-col items-center justify-center text-center h-full min-h-[300px]">
                  <CheckCircle2 size={48} className="text-brand-emerald mb-4 animate-bounce" />
                  <h4 className="font-serif text-xl font-bold">Request Received!</h4>
                  <p className="text-sm font-sans text-slate-600 mt-2 max-w-xs font-light">
                    Our luxury design consultant will get in touch with you at the earliest via phone call or email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="relative">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 block mb-1">Your Name</label>
                      <div className="relative">
                        <User size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input 
                          type="text" 
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Rahul Sharma"
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-brand-emerald focus:bg-white rounded-xl text-sm transition-colors outline-none font-sans"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="relative">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 block mb-1">Phone Number</label>
                      <div className="relative">
                        <input 
                          type="tel" 
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-brand-emerald focus:bg-white rounded-xl text-sm transition-colors outline-none font-sans"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email & Event Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 block mb-1">Email Address</label>
                      <div className="relative">
                        <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input 
                          type="email" 
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="rahul@example.com"
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-brand-emerald focus:bg-white rounded-xl text-sm transition-colors outline-none font-sans"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 block mb-1">Event Category</label>
                      <select 
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-brand-emerald focus:bg-white rounded-xl text-sm transition-colors outline-none font-sans"
                      >
                        <option value="Wedding">Luxury Wedding</option>
                        <option value="Corporate">Corporate Gala</option>
                        <option value="Social">Social Celebration</option>
                        <option value="Theme Decor">Theme Decor Only</option>
                        <option value="Production">Production Setup</option>
                      </select>
                    </div>
                  </div>

                  {/* Date of Event */}
                  <div>
                    <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 block mb-1">Event Date</label>
                    <div className="relative">
                      <Calendar size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input 
                        type="date" 
                        name="eventDate"
                        required
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-brand-emerald focus:bg-white rounded-xl text-sm transition-colors outline-none font-sans text-slate-600"
                      />
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 block mb-1">Special Requirements</label>
                    <textarea 
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your stage theme, flower preferences or layout requests..."
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-brand-emerald focus:bg-white rounded-xl text-sm transition-colors outline-none font-sans resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    className="w-full py-4 bg-brand-emerald hover:bg-brand-medium text-white text-xs font-bold uppercase tracking-widest rounded-xl shadow-lg transition-all duration-300"
                  >
                    Submit Consultation Request
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-white pt-16 pb-8 border-t border-white/10 text-left">
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
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Gallery</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About NDJ Groups</a></li>
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

    </div>
  );
}
