import { motion } from 'motion/react';

export default function ImageSection() {
  return (
    <section className="py-24 bg-gym-black overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col space-y-12 md:space-y-[-100px]">
        {/* Image 1 - Top Left */}
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "circOut" }}
          viewport={{ once: true }}
          className="w-full md:w-2/3 self-start z-10"
        >
          <div className="relative group">
            <div className="aspect-[16/9] md:aspect-[4/3] rounded-[40px] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <img 
                src="/2.jpg" 
                alt="Gym Interior AC"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>

        {/* Image 2 - Bottom Right */}
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "circOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="w-full md:w-2/3 self-end"
        >
          <div className="relative group">
            <div className="aspect-[16/9] md:aspect-[4/3] rounded-[40px] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <img 
                src="/3.jpg" 
                alt="Elite Equipment"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-4 left-8 bg-white text-black py-3 px-8 rounded-2xl font-display font-bold italic text-xl shadow-xl border border-black/5">
              PREMIUM <span className="text-brand-red">AMBIENCE</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
