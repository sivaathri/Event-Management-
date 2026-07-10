import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { Heart, PartyPopper, Presentation, Camera, Headphones, Speaker, ConciergeBell, Shield, ArrowRight, Briefcase, Music, Image as ImageIcon, CheckCircle, Users, Headset, LayoutGrid, Calendar, Flower, Star, User, Eye, ClipboardList, Settings, MessageSquare, X } from 'lucide-react';
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
    description: 'We create timeless weddings filled with elegance, emotions, and unforgettable moments. From planning to the perfect decor, we handle every detail to make your big day truly magical.We create timeless weddings filled with elegance, emotions, and unforgettable moments. From planning to the perfect decor, we handle every detail to make your big day truly magical.',
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
  corporate: {
    title: 'Corporate Events &\nConferences',
    description: 'We plan and execute professional corporate events, conferences, and seminars with absolute precision. From branding to audio-visual setups, we ensure your brand message is delivered flawlessly.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    features: [
      { icon: <Calendar strokeWidth={1.5} className="w-6 h-6 text-[#c5a880]" />, title: 'Timeline\nManagement' },
      { icon: <Star strokeWidth={1.5} className="w-6 h-6 text-[#c5a880]" />, title: 'Brand\nBranding' },
      { icon: <Users strokeWidth={1.5} className="w-6 h-6 text-[#c5a880]" />, title: 'Guest\nHandling' },
      { icon: <Headphones strokeWidth={1.5} className="w-6 h-6 text-[#c5a880]" />, title: 'AV & Sound\nSetups' },
    ],
    offerings: [
      'Conferences & Seminars', 'Product Launches', 'Awards Ceremonies', 'Gala Dinners',
      'Team Building Events', 'AV & Stage Production', 'Corporate Branding', 'Executive Meetings'
    ],
    process: [
      { step: 1, icon: <MessageSquare strokeWidth={1.5} className="w-5 h-5 text-[#c5a880]" />, title: 'Briefing', desc: 'Understanding objectives.' },
      { step: 2, icon: <ClipboardList strokeWidth={1.5} className="w-5 h-5 text-[#c5a880]" />, title: 'Proposal', desc: 'Detailed event blueprint.' },
      { step: 3, icon: <Settings strokeWidth={1.5} className="w-5 h-5 text-[#c5a880]" />, title: 'Production', desc: 'Branding and tech prep.' },
      { step: 4, icon: <Star strokeWidth={1.5} className="w-5 h-5 text-[#c5a880]" />, title: 'Execution', desc: 'Flawless day-of run.' },
    ],
    whyChooseUs: [
      { icon: <Star strokeWidth={1.5} className="w-5 h-5" />, text: 'Professional & Seamless Execution' },
      { icon: <User strokeWidth={1.5} className="w-5 h-5" />, text: 'Experienced Corporate Planners' },
      { icon: <Eye strokeWidth={1.5} className="w-5 h-5" />, text: 'Meticulous Attention to Branding' },
      { icon: <Heart strokeWidth={1.5} className="w-5 h-5" />, text: 'Outstanding Client Support' },
    ],
    gallery: [
      { img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80', title: 'Conference Hall' },
      { img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80', title: 'Stage Setup' },
      { img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80', title: 'Product Launch' },
      { img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80', title: 'Awards Ceremony' },
      { img: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=600&q=80', title: 'Team Building' },
      { img: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80', title: 'Executive Meeting' },
    ]
  },
  social: {
    title: 'Social Celebrations &\nMilestone Parties',
    description: 'Celebrate life\'s special milestones with your loved ones while we take care of the details. From birthdays and anniversaries to theme parties, we create warm, joyful, and memorable experiences.',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80',
    features: [
      { icon: <PartyPopper strokeWidth={1.5} className="w-6 h-6 text-[#c5a880]" />, title: 'Theme\nDesign' },
      { icon: <Music strokeWidth={1.5} className="w-6 h-6 text-[#c5a880]" />, title: 'Entertainment\n& DJ' },
      { icon: <Users strokeWidth={1.5} className="w-6 h-6 text-[#c5a880]" />, title: 'Interactive\nGames' },
      { icon: <Heart strokeWidth={1.5} className="w-6 h-6 text-[#c5a880]" />, title: 'Memorable\nMoments' },
    ],
    offerings: [
      'Birthday Bashes', 'Anniversary Parties', 'Theme Parties', 'Baby Showers',
      'Family Reunions', 'Custom Invitations', 'Entertainment & DJs', 'Theme Decor'
    ],
    process: [
      { step: 1, icon: <MessageSquare strokeWidth={1.5} className="w-5 h-5 text-[#c5a880]" />, title: 'Consultation', desc: 'Understanding your vision.' },
      { step: 2, icon: <ClipboardList strokeWidth={1.5} className="w-5 h-5 text-[#c5a880]" />, title: 'Theme Design', desc: 'Selecting color & decor themes.' },
      { step: 3, icon: <Settings strokeWidth={1.5} className="w-5 h-5 text-[#c5a880]" />, title: 'Setup', desc: 'Balloons, lighting, stages.' },
      { step: 4, icon: <Heart strokeWidth={1.5} className="w-5 h-5 text-[#c5a880]" />, title: 'Celebration', desc: 'You celebrate, we manage.' },
    ],
    whyChooseUs: [
      { icon: <Star strokeWidth={1.5} className="w-5 h-5" />, text: 'Creative & Unique Themes' },
      { icon: <User strokeWidth={1.5} className="w-5 h-5" />, text: 'Warm & Dynamic Hosts' },
      { icon: <Eye strokeWidth={1.5} className="w-5 h-5" />, text: 'Attention to Minor Details' },
      { icon: <Heart strokeWidth={1.5} className="w-5 h-5" />, text: 'Memorable Guest Experiences' },
    ],
    gallery: [
      { img: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&q=80', title: 'Party Venue' },
      { img: 'https://images.unsplash.com/photo-1530103862676-de3c9de59f9e?auto=format&fit=crop&w=600&q=80', title: 'Balloon Decor' },
      { img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=600&q=80', title: 'Birthday Table' },
      { img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80', title: 'Celebration Light' },
      { img: 'https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&w=600&q=80', title: 'Event Theme' },
      { img: 'https://images.unsplash.com/photo-1470753937643-efeb931202a9?auto=format&fit=crop&w=600&q=80', title: 'Anniversary' },
    ]
  },
  entertainment: {
    title: 'Sound, Lights &\nEntertainment Production',
    description: 'Bring your events to life with our premium entertainment services. We provide professional DJs, live bands, state-of-the-art sound systems, and mesmerizing lighting production.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
    features: [
      { icon: <Music strokeWidth={1.5} className="w-6 h-6 text-[#c5a880]" />, title: 'Live Bands\n& DJs' },
      { icon: <Speaker strokeWidth={1.5} className="w-6 h-6 text-[#c5a880]" />, title: 'Pro Sound\nSystems' },
      { icon: <Star strokeWidth={1.5} className="w-6 h-6 text-[#c5a880]" />, title: 'Intelligent\nLighting' },
      { icon: <LayoutGrid strokeWidth={1.5} className="w-6 h-6 text-[#c5a880]" />, title: 'Stage FX\n& Visuals' },
    ],
    offerings: [
      'Professional DJs', 'Live Bands & Musicians', 'Sound System Rentals', 'Stage Lighting Design',
      'LED Screen Setups', 'Dance Floors', 'Special Effects (SFX)', 'Karaoke Setups'
    ],
    process: [
      { step: 1, icon: <MessageSquare strokeWidth={1.5} className="w-5 h-5 text-[#c5a880]" />, title: 'Consultation', desc: 'Understanding sound requirements.' },
      { step: 2, icon: <ClipboardList strokeWidth={1.5} className="w-5 h-5 text-[#c5a880]" />, title: 'Tech Spec', desc: 'Laying out audio/visual design.' },
      { step: 3, icon: <Settings strokeWidth={1.5} className="w-5 h-5 text-[#c5a880]" />, title: 'Setup & Test', desc: 'Soundcheck and light syncing.' },
      { step: 4, icon: <Music strokeWidth={1.5} className="w-5 h-5 text-[#c5a880]" />, title: 'Show Time', desc: 'Stellar live performance management.' },
    ],
    whyChooseUs: [
      { icon: <Star strokeWidth={1.5} className="w-5 h-5" />, text: 'Top-tier Audio Brands' },
      { icon: <User strokeWidth={1.5} className="w-5 h-5" />, text: 'Certified Tech Engineers' },
      { icon: <Eye strokeWidth={1.5} className="w-5 h-5" />, text: 'Mesmerizing DMX Light Shows' },
      { icon: <Heart strokeWidth={1.5} className="w-5 h-5" />, text: 'Energetic Live Performers' },
    ],
    gallery: [
      { img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80', title: 'Concert Sound' },
      { img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80', title: 'DJ Stage' },
      { img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80', title: 'Dance Floor' },
      { img: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=600&q=80', title: 'Live Performance' },
      { img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80', title: 'Light Setup' },
      { img: 'https://images.unsplash.com/photo-1482440308425-276ad0f28b19?auto=format&fit=crop&w=600&q=80', title: 'Audio System' },
    ]
  },
  catering: {
    title: 'Exquisite Catering &\nFine Dining Services',
    description: 'Treat your guests to a premium culinary experience. We design custom menus featuring traditional, fusion, and international cuisines, all prepared by professional chefs and served by courteous staff.',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
    features: [
      { icon: <ConciergeBell strokeWidth={1.5} className="w-6 h-6 text-[#c5a880]" />, title: 'Custom\nMenus' },
      { icon: <Star strokeWidth={1.5} className="w-6 h-6 text-[#c5a880]" />, title: 'Gourmet\nCuisines' },
      { icon: <Users strokeWidth={1.5} className="w-6 h-6 text-[#c5a880]" />, title: 'Professional\nServers' },
      { icon: <CheckCircle strokeWidth={1.5} className="w-6 h-6 text-[#c5a880]" />, title: 'Hygiene\nStandards' },
    ],
    offerings: [
      'Buffet Catering', 'Fine Dining Services', 'Live Food Counters', 'Custom Menu Design',
      'Dessert Bars', 'Mocktail & Beverage Stations', 'High Tea Catering', 'Corporate Lunches'
    ],
    process: [
      { step: 1, icon: <MessageSquare strokeWidth={1.5} className="w-5 h-5 text-[#c5a880]" />, title: 'Consultation', desc: 'Choosing menus.' },
      { step: 2, icon: <ClipboardList strokeWidth={1.5} className="w-5 h-5 text-[#c5a880]" />, title: 'Tasting', desc: 'Sample food preview.' },
      { step: 3, icon: <Settings strokeWidth={1.5} className="w-5 h-5 text-[#c5a880]" />, title: 'Prep', desc: 'Fresh ingredient prep.' },
      { step: 4, icon: <Star strokeWidth={1.5} className="w-5 h-5 text-[#c5a880]" />, title: 'Serving', desc: 'Top-tier culinary service.' },
    ],
    whyChooseUs: [
      { icon: <Star strokeWidth={1.5} className="w-5 h-5" />, text: 'Award-winning Chefs' },
      { icon: <User strokeWidth={1.5} className="w-5 h-5" />, text: 'Superb Serving Etiquette' },
      { icon: <Eye strokeWidth={1.5} className="w-5 h-5" />, text: 'Clean & Hygienic Preparation' },
      { icon: <Heart strokeWidth={1.5} className="w-5 h-5" />, text: 'Aromatic & Tasty Dishes' },
    ],
    gallery: [
      { img: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80', title: 'Buffet Table' },
      { img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80', title: 'Gourmet Dish' },
      { img: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80', title: 'Live Counter' },
      { img: 'https://images.unsplash.com/photo-149514740007a-18a1833f4a77?auto=format&fit=crop&w=600&q=80', title: 'Desserts' },
      { img: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=600&q=80', title: 'Fine Dining' },
      { img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80', title: 'Welcome Drinks' },
    ]
  },
  venue: {
    title: 'Venue Booking &\nStunning Decor Solutions',
    description: 'We help you find the perfect venue and transform it with breathtaking decorations. From floral backdrops and ceiling drapes to theme-based custom fabrications, we create the perfect ambiance.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    features: [
      { icon: <Presentation strokeWidth={1.5} className="w-6 h-6 text-[#c5a880]" />, title: 'Venue\nSourcing' },
      { icon: <Flower strokeWidth={1.5} className="w-6 h-6 text-[#c5a880]" />, title: 'Floral\nDesigns' },
      { icon: <Star strokeWidth={1.5} className="w-6 h-6 text-[#c5a880]" />, title: 'Theme\nFabrication' },
      { icon: <LayoutGrid strokeWidth={1.5} className="w-6 h-6 text-[#c5a880]" />, title: 'Space\nPlanning' },
    ],
    offerings: [
      'Luxury Venues Sourcing', 'Theme Decorations', 'Floral Design & Mandaps', 'Ceiling & Draping setups',
      'Seating Layouts', 'Table Settings & Props', 'Entry Pathway Decor', 'Outdoor Tent setups'
    ],
    process: [
      { step: 1, icon: <MessageSquare strokeWidth={1.5} className="w-5 h-5 text-[#c5a880]" />, title: 'Recce', desc: 'Venue site visits.' },
      { step: 2, icon: <ClipboardList strokeWidth={1.5} className="w-5 h-5 text-[#c5a880]" />, title: 'Rendering', desc: '3D design preview.' },
      { step: 3, icon: <Settings strokeWidth={1.5} className="w-5 h-5 text-[#c5a880]" />, title: 'Setup', desc: 'Fabrication & floral work.' },
      { step: 4, icon: <Star strokeWidth={1.5} className="w-5 h-5 text-[#c5a880]" />, title: 'Reveal', desc: 'Ready for the event.' },
    ],
    whyChooseUs: [
      { icon: <Star strokeWidth={1.5} className="w-5 h-5" />, text: 'Breathtaking Designs' },
      { icon: <User strokeWidth={1.5} className="w-5 h-5" />, text: 'Skilled Decor Craftsmen' },
      { icon: <Eye strokeWidth={1.5} className="w-5 h-5" />, text: 'Aesthetic Color Palettes' },
      { icon: <Heart strokeWidth={1.5} className="w-5 h-5" />, text: 'Partnerships with Top Venues' },
    ],
    gallery: [
      { img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80', title: 'Floral Backdrop' },
      { img: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80', title: 'Ceiling Decor' },
      { img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=600&q=80', title: 'Hall Setup' },
      { img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80', title: 'Entrance Pathway' },
      { img: 'https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?auto=format&fit=crop&w=600&q=80', title: 'Outdoor Drapes' },
      { img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80', title: 'Mandap' },
    ]
  },
  photography: {
    title: 'Photography &\nCinematography Captures',
    description: 'Preserve your precious moments forever. Our team of professional photographers and cinematographers specialize in capturing emotions, candid laughter, and stunning highlights of your event.',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
    features: [
      { icon: <Camera strokeWidth={1.5} className="w-6 h-6 text-[#c5a880]" />, title: 'Candid\nPhotography' },
      { icon: <Star strokeWidth={1.5} className="w-6 h-6 text-[#c5a880]" />, title: 'Cinematic\nVideos' },
      { icon: <Users strokeWidth={1.5} className="w-6 h-6 text-[#c5a880]" />, title: 'Pre-Event\nShoots' },
      { icon: <CheckCircle strokeWidth={1.5} className="w-6 h-6 text-[#c5a880]" />, title: 'High-Res\nDelivery' },
    ],
    offerings: [
      'Candid Photography', 'Traditional Photography', 'Cinematic Highlight Videos', 'Full Event Recordings',
      'Pre-Wedding Shoots', 'Drone Aerial Footage', 'Digital & Printed Albums', 'Instant Photo Booths'
    ],
    process: [
      { step: 1, icon: <MessageSquare strokeWidth={1.5} className="w-5 h-5 text-[#c5a880]" />, title: 'Planning', desc: 'Detailing shot-list.' },
      { step: 2, icon: <Camera strokeWidth={1.5} className="w-5 h-5 text-[#c5a880]" />, title: 'Shooting', desc: 'Dynamic day coverage.' },
      { step: 3, icon: <Settings strokeWidth={1.5} className="w-5 h-5 text-[#c5a880]" />, title: 'Editing', desc: 'Color correction & grading.' },
      { step: 4, icon: <CheckCircle strokeWidth={1.5} className="w-5 h-5 text-[#c5a880]" />, title: 'Delivery', desc: 'High-res photos/videos.' },
    ],
    whyChooseUs: [
      { icon: <Star strokeWidth={1.5} className="w-5 h-5" />, text: 'Experienced Cameramen' },
      { icon: <User strokeWidth={1.5} className="w-5 h-5" />, text: 'Premium Camera Gear' },
      { icon: <Eye strokeWidth={1.5} className="w-5 h-5" />, text: 'Candid & Natural Photos' },
      { icon: <Heart strokeWidth={1.5} className="w-5 h-5" />, text: 'Timely Album Deliveries' },
    ],
    gallery: [
      { img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80', title: 'Candid Moment' },
      { img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80', title: 'Portrait' },
      { img: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80', title: 'Group Capture' },
      { img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80', title: 'Stage Shoot' },
      { img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80', title: 'Couple Shoot' },
      { img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80', title: 'Videography' },
    ]
  },
  support: {
    title: 'Event Support &\nSecurity Services',
    description: 'Ensure a smooth, safe, and secure event. We provide professional event support staff, hostess services, guest management, and security solutions including bouncers and crowd control.',
    image: 'https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?auto=format&fit=crop&w=1200&q=80',
    features: [
      { icon: <Shield strokeWidth={1.5} className="w-6 h-6 text-[#c5a880]" />, title: 'Bouncers\n& Security' },
      { icon: <Headset strokeWidth={1.5} className="w-6 h-6 text-[#c5a880]" />, title: 'Hostess\n& Welcoming' },
      { icon: <Users strokeWidth={1.5} className="w-6 h-6 text-[#c5a880]" />, title: 'Crowd\nControl' },
      { icon: <CheckCircle strokeWidth={1.5} className="w-6 h-6 text-[#c5a880]" />, title: 'Smooth\nCoordination' },
    ],
    offerings: [
      'Bouncer & Guard Security', 'Professional Hostesses', 'Guest RSVP Management', 'Valet Parking Coordination',
      'Crowd Management Setups', 'Logistics Support', 'Permit & License Help', 'Housekeeping Teams'
    ],
    process: [
      { step: 1, icon: <MessageSquare strokeWidth={1.5} className="w-5 h-5 text-[#c5a880]" />, title: 'Briefing', desc: 'Understanding security list.' },
      { step: 2, icon: <ClipboardList strokeWidth={1.5} className="w-5 h-5 text-[#c5a880]" />, title: 'Layout', desc: 'Placing staff at entries.' },
      { step: 3, icon: <Settings strokeWidth={1.5} className="w-5 h-5 text-[#c5a880]" />, title: 'Operation', desc: 'Guest welcoming & control.' },
      { step: 4, icon: <CheckCircle strokeWidth={1.5} className="w-5 h-5 text-[#c5a880]" />, title: 'Wrapping', desc: 'Safely dismissing guests.' },
    ],
    whyChooseUs: [
      { icon: <Star strokeWidth={1.5} className="w-5 h-5" />, text: 'Highly trained Hostesses' },
      { icon: <User strokeWidth={1.5} className="w-5 h-5" />, text: 'Disciplined Security Guards' },
      { icon: <Eye strokeWidth={1.5} className="w-5 h-5" />, text: 'Zero Incident History' },
      { icon: <Heart strokeWidth={1.5} className="w-5 h-5" />, text: 'Humble & Polite Reception' },
    ],
    gallery: [
      { img: 'https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?auto=format&fit=crop&w=600&q=80', title: 'RSVP Desk' },
      { img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80', title: 'Welcoming Host' },
      { img: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=600&q=80', title: 'Bouncers' },
      { img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80', title: 'Guest Management' },
      { img: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=600&q=80', title: 'Housekeeping Team' },
      { img: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&q=80', title: 'Security Check' },
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
  const [activeImage, setActiveImage] = useState(null);

  const bannerContent = {
    weddings: {
      title: "Ready to Plan Your Dream Wedding?",
      subtitle: "Let's create a romantic celebration you and your guests will cherish forever."
    },
    corporate: {
      title: "Ready to Plan Your Next Corporate Event?",
      subtitle: "Let's create an impactful, professional experience that elevates your brand."
    },
    social: {
      title: "Ready to Plan Your Special Celebration?",
      subtitle: "Let's design a joyful milestone party filled with laughter and fun memories."
    },
    entertainment: {
      title: "Ready to Pump Up the Entertainment?",
      subtitle: "Let's electrify your venue with state-of-the-art sound, lighting, and live beats."
    },
    catering: {
      title: "Ready to Treat Your Guests to Gourmet Dining?",
      subtitle: "Let's curate a spectacular custom menu crafted by award-winning chefs."
    },
    venue: {
      title: "Ready to Design Your Perfect Ambiance?",
      subtitle: "Let's find the ideal venue and craft breathtaking theme-based decor."
    },
    photography: {
      title: "Ready to Capture Your Beautiful Moments?",
      subtitle: "Let's frame every emotion, candid smile, and cinematic highlight perfectly."
    },
    support: {
      title: "Need Professional Event Support & Security?",
      subtitle: "Let's ensure a seamless, secure, and stress-free event with our expert team."
    },
    default: {
      title: "Ready to Plan Your Dream Event?",
      subtitle: "Let's create a celebration you and your guests will cherish forever."
    }
  };

  const activeBanner = bannerContent[categoryId] || bannerContent.default;

  useEffect(() => {
    if (activeImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeImage]);
  
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


          {/* Features Grid */}
          <div className="flex items-start divide-x divide-[#f0eae1] mb-12 w-full max-w-md">
            {data.features.map((feat, i) => (
              <div key={i} className="flex flex-col items-center text-center flex-1 px-1">
                <div className="flex items-center justify-center mb-3 text-[#b78d51]">
                  {React.cloneElement(feat.icon, { className: "w-7 h-7" })}
                </div>
                <h5 className="text-[11px] font-medium text-[#052e16] whitespace-pre-line leading-relaxed">
                  {feat.title}
                </h5>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="bg-[#052e16] hover:bg-[#0a4221] text-white px-8 py-4 rounded-[12px] font-bold tracking-[0.1em] text-[12px] flex items-center justify-center transition-colors shadow-lg hover:shadow-xl">
               GET A CUSTOM QUOTE
               <ArrowRight className="w-4 h-4 ml-3 text-[#b78d51]" />
            </Link>
            <Link to="/portfolio" className="bg-white border border-[#e6d5b8] text-[#052e16] hover:bg-[#FAF5EB] px-8 py-4 rounded-[12px] font-bold tracking-[0.1em] text-[12px] flex items-center justify-center transition-colors shadow-sm">
               VIEW PORTFOLIO
               <ArrowRight className="w-4 h-4 ml-3 text-[#b78d51]" />
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 xl:max-w-[55%]">
          <div className="aspect-[4/3] xl:aspect-[18/21] w-full rounded-[24px] overflow-hidden shadow-2xl">
            <img src={data.image} alt="Service" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      {data.gallery && (
        <div className=" mb-8 animate-fade-in w-full relative z-10" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <div className="flex items-center justify-center gap-4 text-[#b78d51] mb-8">
            <div className="flex items-center gap-1.5">
              <div className="w-12 md:w-24 h-[1px] bg-[#b78d51]/60"></div>
              <div className="w-1 h-1 rotate-45 bg-[#b78d51]/60"></div>
            </div>
            <h4 className="font-bold tracking-[0.2em] text-[11px] uppercase whitespace-nowrap">
              OUR {
                categoryId === 'weddings' ? 'WEDDING' :
                categoryId === 'corporate' ? 'CORPORATE' :
                categoryId === 'social' ? 'SOCIAL CELEBRATION' :
                categoryId === 'entertainment' ? 'ENTERTAINMENT' :
                categoryId === 'catering' ? 'CATERING' :
                categoryId === 'venue' ? 'VENUE & DECOR' :
                categoryId === 'photography' ? 'PHOTOGRAPHY' :
                categoryId === 'support' ? 'EVENT SUPPORT' : 'PREMIUM'
              } WORK
            </h4>
            <div className="flex items-center gap-1.5">
              <div className="w-1 h-1 rotate-45 bg-[#b78d51]/60"></div>
              <div className="w-12 md:w-24 h-[1px] bg-[#b78d51]/60"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 lg:gap-6">
            {data.gallery.map((item, i) => (
              <div key={i} onClick={() => setActiveImage(item)} className="flex flex-col items-center group cursor-pointer">
                <div className="w-full aspect-[7/6] rounded-[16px] overflow-hidden mb-3 shadow-md border border-slate-100 relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                </div>
                <h5 className="text-[10px] md:text-[11px] xl:text-[12px] font-bold text-[#052e16] tracking-wider text-center leading-[1.3] uppercase mt-1">{item.title}</h5>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Custom Quote Banner */}
      <div className="mt-16 bg-[#021C0D] rounded-2xl p-8 lg:px-12 lg:py-10 flex flex-col xl:flex-row items-center justify-between border border-[#D4AF37]/20 shadow-xl animate-fade-in text-white w-full">
         <div className="flex flex-col md:flex-row items-center mb-8 xl:mb-0 md:space-x-8 text-center md:text-left">
            <div className="w-16 h-16 rounded-full border border-[#D4AF37] flex items-center justify-center flex-shrink-0 text-[#D4AF37] bg-transparent mb-6 md:mb-0">
               <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="3" width="20" height="13" rx="2" />
                  <path d="M12 16v5M8 21h8" />
                  <circle cx="12" cy="9" r="2.5" />
                  <path d="M8.5 14a3.5 3.5 0 0 1 7 0" />
               </svg>
            </div>
            <div>
               <h4 className="text-xl md:text-2xl font-serif text-[#D4AF37] font-semibold mb-2">
                 {activeBanner.title}
               </h4>
               <p className="text-[#a3b3a9] font-sans text-sm md:text-[15px] leading-relaxed max-w-xl">
                 {activeBanner.subtitle}
               </p>
            </div>
         </div>
         <Link to="/contact" className="bg-[#D4AF37] hover:bg-[#c5a880] text-[#021C0D] px-8 py-4 rounded-xl font-bold tracking-[0.15em] text-[13px] flex items-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] whitespace-nowrap">
            GET A CUSTOM QUOTE
            <ArrowRight className="w-4 h-4 ml-3 text-[#021C0D]" />
         </Link>
      </div>

      {/* Lightbox Modal */}
      {activeImage && createPortal(
        <div 
          className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-[9999] p-4 animate-fade-in"
          onClick={() => setActiveImage(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white/80 hover:text-white hover:scale-110 transition-all duration-300 p-2 bg-black/40 rounded-full"
            onClick={() => setActiveImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          
          {/* Image and Title Container */}
          <div 
            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={activeImage.img} 
              alt={activeImage.title} 
              className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border border-white/10" 
            />
            <h4 className="text-white font-sans font-bold tracking-widest text-center mt-6 text-sm uppercase md:text-base">
              {activeImage.title}
            </h4>
          </div>
        </div>,
        document.body
      )}

    </div>
  );
};

export default function Services() {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState('all');
  const contentRef = React.useRef(null);

  useEffect(() => {
    if (location.state && location.state.activeCategory) {
      setActiveCategory(location.state.activeCategory);
    }
  }, [location.state]);

  useEffect(() => {
    if (activeCategory === 'all') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (contentRef.current) {
      // Calculate offset for smooth scrolling to detail content below the header
      const element = contentRef.current;
      const headerOffset = 140; // account for sticky header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, [activeCategory]);

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
        <div className="w-full lg:w-[340px] border-r border-slate-100 flex flex-col flex-shrink-0 relative lg:sticky lg:top-32 self-start px-6 py-10 lg:pl-10 lg:pr-6">
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
        <div ref={contentRef} className="flex-grow px-6 pb-8 pt-6 lg:px-12 lg:pb-10 lg:pt-8 xl:px-16 xl:pb-12">
          
          {/* Global Breadcrumb */}
          <div className="flex items-center gap-2 text-[13px] font-medium text-slate-500 mb-8 xl:mb-10">
            <Link to="/" className="hover:text-[#b78d51] cursor-pointer transition-colors font-medium">Home</Link>
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
              <div className="mt-16 bg-[#021C0D] rounded-2xl p-8 lg:px-12 lg:py-10 flex flex-col xl:flex-row items-center justify-between border border-[#D4AF37]/20 shadow-xl animate-fade-in text-white w-full">
                 <div className="flex flex-col md:flex-row items-center mb-8 xl:mb-0 md:space-x-8 text-center md:text-left">
                    <div className="w-16 h-16 rounded-full border border-[#D4AF37] flex items-center justify-center flex-shrink-0 text-[#D4AF37] bg-transparent mb-6 md:mb-0">
                       <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <rect x="2" y="3" width="20" height="13" rx="2" />
                          <path d="M12 16v5M8 21h8" />
                          <circle cx="12" cy="9" r="2.5" />
                          <path d="M8.5 14a3.5 3.5 0 0 1 7 0" />
                       </svg>
                    </div>
                    <div>
                       <h4 className="text-xl md:text-2xl font-serif text-[#D4AF37] font-semibold mb-2">Ready to Plan Your Dream Event?</h4>
                       <p className="text-[#a3b3a9] font-sans text-sm md:text-[15px] leading-relaxed max-w-xl">Let's create a celebration you and your guests will cherish forever.</p>
                    </div>
                 </div>
                 <Link to="/contact" className="bg-[#D4AF37] hover:bg-[#c5a880] text-[#021C0D] px-8 py-4 rounded-xl font-bold tracking-[0.15em] text-[13px] flex items-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] whitespace-nowrap">
                    GET A CUSTOM QUOTE
                    <ArrowRight className="w-4 h-4 ml-3 text-[#021C0D]" />
                 </Link>
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
