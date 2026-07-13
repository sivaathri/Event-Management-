import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    error: null
  });

  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    email: false,
    eventType: false,
    message: false
  });

  useEffect(() => {
    if (status.success) {
      const timer = setTimeout(() => {
        setStatus(prev => ({ ...prev, success: null }));
      }, 60000); // 1 minute (60000ms)

      return () => clearTimeout(timer);
    }
  }, [status.success]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear validation error when user begins typing/editing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: false
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Perform custom validation
    const newErrors = {
      name: !formData.name.trim(),
      phone: !formData.phone.trim(),
      email: !formData.email.trim(),
      eventType: !formData.eventType,
      message: !formData.message.trim()
    };

    setErrors(newErrors);

    if (newErrors.name || newErrors.phone || newErrors.email || newErrors.eventType || newErrors.message) {
      setStatus({
        submitting: false,
        success: null,
        error: 'Please fill in all the required details.'
      });
      return;
    }

    setStatus({ submitting: true, success: null, error: null });

    const serviceId = 'service_ozfx35k';
    const templateId = 'template_luq5jqc';
    const publicKey = 'P7UWGav_wG-WGTpRs';

    // Send template parameters mapping standard fields to your template fields
    const templateParams = {
      from_name: formData.name,
      name: formData.name,
      phone: formData.phone,
      phone_number: formData.phone,
      from_email: formData.email,
      email: formData.email,
      reply_to: formData.email,
      event_type: formData.eventType,
      message: formData.message
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('EmailJS Success:', response.status, response.text);
        setStatus({
          submitting: false,
          success: 'Thank you! Your message has been sent successfully. We will get back to you shortly.',
          error: null
        });
        setFormData({
          name: '',
          phone: '',
          email: '',
          eventType: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setStatus({
          submitting: false,
          success: null,
          error: 'Failed to send message. Please check your network or reach out directly at hello@lightsevents.com.'
        });
      });
  };

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
                Whether you're planning a grand wedding, a corporate gala, or an intimate private gathering in Pondicherry or Puducherry, our team of expert planners is ready to bring your vision to life with flawless precision.
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
                    White Town,<br />
                    Puducherry (Pondicherry) 605001
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

              <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className={`text-xs font-semibold uppercase tracking-widest font-sans ${errors.name ? 'text-rose-600 font-bold animate-pulse' : 'text-slate-700'}`}>Full Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className={`w-full bg-slate-50 border ${errors.name ? 'border-rose-400 focus:ring-rose-500/20 focus:border-rose-500' : 'border-slate-200 focus:ring-brand-emerald/20 focus:border-brand-emerald'} rounded-xl px-4 py-3.5 text-sm font-sans focus:outline-none focus:ring-2 transition-all`}
                    />
                  </div>
                  
                  {/* Phone Input */}
                  <div className="space-y-2">
                    <label className={`text-xs font-semibold uppercase tracking-widest font-sans ${errors.phone ? 'text-rose-600 font-bold animate-pulse' : 'text-slate-700'}`}>Phone Number *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={`w-full bg-slate-50 border ${errors.phone ? 'border-rose-400 focus:ring-rose-500/20 focus:border-rose-500' : 'border-slate-200 focus:ring-brand-emerald/20 focus:border-brand-emerald'} rounded-xl px-4 py-3.5 text-sm font-sans focus:outline-none focus:ring-2 transition-all`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className={`text-xs font-semibold uppercase tracking-widest font-sans ${errors.email ? 'text-rose-600 font-bold animate-pulse' : 'text-slate-700'}`}>Email Address *</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className={`w-full bg-slate-50 border ${errors.email ? 'border-rose-400 focus:ring-rose-500/20 focus:border-rose-500' : 'border-slate-200 focus:ring-brand-emerald/20 focus:border-brand-emerald'} rounded-xl px-4 py-3.5 text-sm font-sans focus:outline-none focus:ring-2 transition-all`}
                    />
                  </div>

                  {/* Event Type Select */}
                  <div className="space-y-2 relative">
                    <label className={`text-xs font-semibold uppercase tracking-widest font-sans ${errors.eventType ? 'text-rose-600 font-bold animate-pulse' : 'text-slate-700'}`}>Event Type *</label>
                    <select 
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className={`w-full bg-slate-50 border ${errors.eventType ? 'border-rose-400 focus:ring-rose-500/20 focus:border-rose-500' : 'border-slate-200 focus:ring-brand-emerald/20 focus:border-brand-emerald'} rounded-xl px-4 py-3.5 text-sm font-sans text-slate-700 focus:outline-none focus:ring-2 transition-all appearance-none cursor-pointer`} 
                    >
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
                  <label className={`text-xs font-semibold uppercase tracking-widest font-sans ${errors.message ? 'text-rose-600 font-bold animate-pulse' : 'text-slate-700'}`}>Your Message *</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4" 
                    placeholder="Tell us a little bit about your event, expected date, and guest count..."
                    className={`w-full bg-slate-50 border ${errors.message ? 'border-rose-400 focus:ring-rose-500/20 focus:border-rose-500' : 'border-slate-200 focus:ring-brand-emerald/20 focus:border-brand-emerald'} rounded-xl px-4 py-3.5 text-sm font-sans focus:outline-none focus:ring-2 transition-all resize-none`}
                  ></textarea>
                </div>

                {/* Success & Error Status Messages */}
                {status.success && (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-sm font-sans">
                    {status.success}
                  </div>
                )}
                {status.error && (
                  <div className="p-4 bg-rose-50 border border-rose-200 text-rose-800 rounded-xl text-sm font-sans">
                    {status.error}
                  </div>
                )}

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={status.submitting}
                  className="w-full flex items-center justify-center space-x-2 bg-brand-emerald hover:bg-brand-dark text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-md shadow-brand-emerald/20 hover:shadow-lg hover:shadow-brand-emerald/30 group mt-2 disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {status.submitting ? (
                    <>
                      <span>Sending...</span>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
