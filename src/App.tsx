/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar, { View } from './components/Navbar';
import Hero from './components/Hero';
import ImageSection from './components/ImageSection';
import Programs from './components/Programs';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Phone } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Hero setView={setCurrentView} />
            <ImageSection />
          </motion.div>
        );
      case 'pricing':
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5 }}
          >
            <Pricing />
          </motion.div>
        );
      case 'contact':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <Contact />
          </motion.div>
        );
      default:
        return <Hero setView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-gym-black selection:bg-brand-red selection:text-white">
      <Navbar currentView={currentView} setView={setCurrentView} />
      
      <main>
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </main>
      
      <Footer />

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-40">
        <button 
          onClick={() => setCurrentView('contact')}
          className="w-full bg-brand-red text-white py-4 rounded-2xl font-bold uppercase tracking-widest shadow-2xl flex items-center justify-center space-x-2 active:scale-95 transition-transform"
        >
          <Phone size={18} />
          <span>Join Now / Contact</span>
        </button>
      </div>
    </div>
  );
}
