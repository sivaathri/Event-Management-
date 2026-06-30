import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-cream-light relative overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-emerald/5 blur-3xl pointer-events-none rounded-full transform translate-x-1/3 -translate-y-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="animate-slide-up" className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif text-brand-emerald tracking-wider font-semibold">
            GET IN TOUCH
          </h2>
          <div className="w-16 h-[2px] bg-gold mt-4"></div>
          <p className="text-sm text-slate-500 font-sans tracking-wide mt-3 font-light max-w-lg">
            Let's start crafting your unforgettable celebration together
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Contact Info */}
          <ScrollReveal animation="animate-slide-up" delay="animate-delay-100" className="lg:col-span-5 flex flex-col space-y-10">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-serif text-slate-800 font-medium leading-tight">
                We'd love to hear about your dream event.
              </h3>
              <p className="text-slate-600 font-sans text-sm leading-relaxed font-light">
                Whether you're planning a grand wedding, a corporate gala, or an intimate private gathering, our team of expert planners is ready to bring your vision to life with flawless precision.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              {/* Contact Item */}
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-gold group-hover:bg-brand-emerald group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-slate-900 text-sm tracking-wide">Our Office</h4>
                  <p className="text-sm text-slate-500 font-sans mt-1 leading-relaxed">
                    123 Luxury Avenue, Phase 2<br />
                    Chennai, Tamil Nadu 600001
                  </p>
                </div>
              </div>

              {/* Contact Item */}
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-gold group-hover:bg-brand-emerald group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-slate-900 text-sm tracking-wide">Direct Line</h4>
                  <p className="text-sm text-slate-500 font-sans mt-1">
                    <a href="tel:+919677585986" className="hover:text-brand-emerald transition-colors">+91 96775 85986</a>
                  </p>
                </div>
              </div>

              {/* Contact Item */}
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-gold group-hover:bg-brand-emerald group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-slate-900 text-sm tracking-wide">Email Address</h4>
                  <p className="text-sm text-slate-500 font-sans mt-1">
                    <a href="mailto:hello@lightsevents.com" className="hover:text-brand-emerald transition-colors">hello@lightsevents.com</a>
                  </p>
                </div>
              </div>

              {/* Contact Item */}
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-gold group-hover:bg-brand-emerald group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-slate-900 text-sm tracking-wide">Working Hours</h4>
                  <p className="text-sm text-slate-500 font-sans mt-1">
                    Monday - Saturday: 9:00 AM - 7:00 PM<br />
                    Sunday: By Appointment Only
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Contact Form */}
          <ScrollReveal animation="animate-slide-up" delay="animate-delay-200" className="lg:col-span-7">
            <div className="bg-white rounded-3xl shadow-xl shadow-brand-emerald/5 border border-slate-100 p-8 md:p-10 relative overflow-hidden">
              
              <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                <Sparkles size={120} className="text-gold" />
              </div>

              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-widest font-sans">Full Name *</label>
                    <input 
                      type="text" 
                      placeholder="Jane Doe"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-brand-emerald/20 focus:border-brand-emerald transition-all"
                      required
                    />
                  </div>
                  
                  {/* Phone Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-widest font-sans">Phone Number *</label>
                    <input 
                      type="tel" 
                      placeholder="+91 98765 43210"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-brand-emerald/20 focus:border-brand-emerald transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-widest font-sans">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="jane@example.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-brand-emerald/20 focus:border-brand-emerald transition-all"
                    />
                  </div>

                  {/* Event Type Select */}
                  <div className="space-y-2 relative">
                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-widest font-sans">Event Type *</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-sans text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-emerald/20 focus:border-brand-emerald transition-all appearance-none cursor-pointer" required defaultValue="">
                      <option value="" disabled>Select an event type</option>
                      <option value="wedding">Wedding Celebration</option>
                      <option value="corporate">Corporate Event / Launch</option>
                      <option value="birthday">Birthday / Private Party</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute right-4 top-[38px] pointer-events-none text-slate-400">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-widest font-sans">Your Message</label>
                  <textarea 
                    rows="4" 
                    placeholder="Tell us a little bit about your event, expected date, and guest count..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-brand-emerald/20 focus:border-brand-emerald transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="w-full flex items-center justify-center space-x-2 bg-brand-emerald hover:bg-brand-dark text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-colors duration-300 shadow-md shadow-brand-emerald/20 hover:shadow-lg hover:shadow-brand-emerald/30 group mt-2"
                >
                  <span>Send Message</span>
                  <Send size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
