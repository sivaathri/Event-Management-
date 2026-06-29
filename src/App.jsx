import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import PortfolioPage from './pages/PortfolioPage';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-emerald/20 selection:text-brand-dark">
      {/* Navigation Header */}
      <Header />

      {/* Page Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>

      {/* Footer */}
      <Footer />
      
      {/* Back to Top */}
      <BackToTop />
    </div>
  );
}
