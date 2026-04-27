import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  setView: (view: 'home' | 'pricing' | 'contact') => void;
}

export default function Hero({ setView }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/1.jpg"
          alt="Gym background"
          className="w-full h-full object-cover opacity-40 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gym-black via-gym-black/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block bg-brand-red text-white text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] px-4 py-1.5 mb-6 rounded-sm">
              Established in Rishra
            </span>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-bold leading-[0.9] mb-6">
              BUILD <span className="text-brand-red">STRENGTH.</span><br />
              BUILD <span className="text-white">DISCIPLINE.</span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl max-w-xl mb-10 leading-relaxed font-light">
              Train harder. Get stronger. Transform your body with the best fitness environment in Serampore. 
              Our expert coaches help you break your limits.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button 
              onClick={() => setView('contact')}
              className="bg-brand-red hover:bg-brand-orange text-white px-10 py-5 rounded-none font-bold uppercase tracking-widest transition-all flex items-center justify-center space-x-3 group"
            >
              <span>Join Now / Contact</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => setView('pricing')}
              className="border border-white/20 hover:border-white text-white px-10 py-5 rounded-none font-bold uppercase tracking-widest transition-all flex items-center justify-center space-x-3 group"
            >
              <span>View Plans</span>
            </button>
          </motion.div>

          {/* Social Stats/Proof */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-8 border-t border-white/10 pt-8"
          >
            <div>
              <p className="text-2xl font-display font-bold text-white">80+</p>
              <p className="text-gray-500 text-[10px] uppercase tracking-widest">Active Members</p>
            </div>
            <div>
              <p className="text-2xl font-display font-bold text-white">2</p>
              <p className="text-gray-500 text-[10px] uppercase tracking-widest">Expert Coaches</p>
            </div>
            <div className="hidden sm:block">
              <p className="text-2xl font-display font-bold text-white">06 AM - 10 PM</p>
              <p className="text-gray-500 text-[10px] uppercase tracking-widest">Open Every Day</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Badge */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="w-24 h-24 border border-white/10 rounded-full flex items-center justify-center bg-gym-black/30 backdrop-blur-sm animate-spin-slow">
           <div className="text-[8px] text-gray-400 font-bold uppercase tracking-tighter text-center">
             Ghatak Fitness<br/>Centre
           </div>
        </div>
      </div>
    </section>
  );
}
