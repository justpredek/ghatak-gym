import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, Send, MapPin, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submit
    alert("Inquiry sent! We will contact you shortly.");
  };

  return (
    <section className="py-32 bg-gym-black min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 italic">GET IN <span className="text-brand-red">TOUCH</span></h1>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Don't wait for Monday. Start your fitness journey today. 
            Visit us for a free tour or message us for pricing details.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gym-gray p-8 rounded-3xl border border-white/5 flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-gym-black border border-white/5 flex items-center justify-center text-brand-red mb-4">
                <Phone size={24} />
              </div>
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Call Us</p>
              <p className="text-white text-lg font-bold">+91 9038738254</p>
            </div>

            <div className="bg-gym-gray p-8 rounded-3xl border border-white/5 flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-gym-black border border-white/5 flex items-center justify-center text-green-500 mb-4">
                <MessageCircle size={24} />
              </div>
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">WhatsApp</p>
              <a href="https://wa.me/919038738254?text=Hi%2C%20I%20want%20to%20join%20Ghatak%20Fitness%20Centre" target="_blank" rel="noreferrer" className="text-white text-lg font-bold hover:text-green-500 transition-colors">
                Chat Now
              </a>
            </div>

            <div className="bg-gym-gray p-8 rounded-3xl border border-white/5 flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-gym-black border border-white/5 flex items-center justify-center text-brand-orange mb-4">
                <MapPin size={24} />
              </div>
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Location</p>
              <p className="text-white text-lg font-bold">Rishra / Serampore</p>
            </div>
          </div>

          {/* Embedded Map */}
          <div className="aspect-video sm:aspect-[21/9] rounded-[40px] bg-gym-gray border border-white/5 overflow-hidden group grayscale hover:grayscale-0 transition-all shadow-2xl">
             <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117911.75110595!2d88.22557613615152!3d22.737759546059286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89a9f24317f29%3A0xc34a10c71fb2b7a9!2sSerampore%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1714114713454!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          
          <div className="mt-12 text-gray-500 text-sm">
            <p>Visit us today or contact us to get started.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
