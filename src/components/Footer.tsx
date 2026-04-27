import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gym-black border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-display font-bold mb-6">
              GHATAK<span className="text-brand-red">FITNESS</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Rishra's premier fitness destination. We focus on results, discipline, 
              and building the strongest version of you. No excuses, just gains.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-red hover:border-brand-red transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-red hover:border-brand-red transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-red hover:border-brand-red transition-all">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Training</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Weight Training</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cardio Blast</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Personal Coaching</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Strength Conditioning</a></li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="col-span-1">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Hours</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex justify-between">
                <span>Every Day:</span>
                <span>06:00 - 22:00</span>
              </li>
              <li className="text-brand-red text-[10px] uppercase tracking-tighter">
                * Open on all holidays
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Location</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-brand-red flex-shrink-0" />
                <span>GT Road, Rishra, Near Serampore, West Bengal, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-brand-red flex-shrink-0" />
                <span>+91 9038738254</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-brand-red flex-shrink-0" />
                <span>info@ghatakfitness.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
          <p>© 2026 Ghatak Fitness Centre. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
