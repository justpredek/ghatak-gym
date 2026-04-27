import { motion } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

export type View = 'home' | 'pricing' | 'contact';

interface NavbarProps {
  currentView: View;
  setView: (view: View) => void;
}

export default function Navbar({ currentView, setView }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', value: 'home' as const },
    { name: 'Pricing', value: 'pricing' as const },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-gym-black/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => setView('home')}
          >
            <span className="text-xl font-display font-bold tracking-tighter">
              GHATAK<span className="text-brand-red group-hover:text-brand-orange transition-colors">FITNESS</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => setView(item.value)}
                className={`text-sm font-semibold tracking-wide uppercase transition-colors ${
                  currentView === item.value ? 'text-brand-red' : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={() => setView('contact')}
              className="bg-brand-red hover:bg-brand-orange text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all transform hover:scale-105"
            >
              Join Now / Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-gym-black border-b border-white/5 px-4 pt-2 pb-6 space-y-2"
        >
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => {
                setView(item.value);
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-3 rounded-lg text-lg font-display ${
                currentView === item.value ? 'bg-white/5 text-brand-red' : 'text-gray-400'
              }`}
            >
              {item.name}
            </button>
          ))}
          <button 
            onClick={() => {
              setView('contact');
              setIsMenuOpen(false);
            }}
            className="w-full mt-4 bg-brand-red text-white py-4 rounded-xl font-bold uppercase tracking-widest flex items-center justify-center space-x-2"
          >
            <Phone size={18} />
            <span>Join Now / Contact</span>
          </button>
        </motion.div>
      )}
    </nav>
  );
}
