import { motion } from 'motion/react';
import { Target, Shield, Zap, TrendingUp } from 'lucide-react';

export default function WhyUs() {
  const reasons = [
    {
      icon: <Target size={32} />,
      title: "Strong Training Environment",
      desc: " Surrounding yourself with high-performers and serious athletes pushes you beyond your limits."
    },
    {
      icon: <Shield size={32} />,
      title: "Supportive Coaching",
      desc: "Our trainers don't just count reps; they teach you discipline and mastery of movement."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Focus on Real Results",
      desc: "We prioritize evidence-based training methods that actually show on the scale and in the mirror."
    }
  ];

  return (
    <section className="py-24 bg-gym-black relative">
       <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-brand-red/10 blur-[120px] rounded-full" />
       
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-4 block">Difference Makers</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 italic">WHY CHOOSE US?</h2>
            <p className="text-gray-400 text-lg mb-12 max-w-lg leading-relaxed">
              We aren't just another commercial gym. We are a community built on iron, sweat, and persistence. 
              Ghatak Fitness is where the transformation happens.
            </p>
            
            <div className="space-y-10">
              {rereasons.map((reason, index) => (
                <div key={index} className="flex space-x-6">
                  <div className="text-brand-red flex-shrink-0 mt-1">
                    {reason.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{reason.title}</h4>
                    <p className="text-gray-500 text-sm">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden border-8 border-gym-gray group">
               <img 
                 src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
                 alt="Motivation"
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-brand-red/10 mix-blend-overlay group-hover:bg-transparent transition-all" />
            </div>
            {/* Achievement Floaties */}
            <div className="absolute -bottom-6 -left-6 bg-gym-black border border-white/10 p-6 rounded-2xl shadow-2xl">
               <p className="text-3xl font-display font-bold text-brand-red">100%</p>
               <p className="text-[10px] text-gray-500 uppercase tracking-widest">Commitment Required</p>
            </div>
            <div className="absolute -top-6 -right-6 bg-brand-orange p-6 rounded-2xl shadow-2xl rotate-6">
               <Zap className="text-white fill-current" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Fixed typo in mapping in the code but defined it as re-reasons in the UI mapping? No, constant was reasons.
const rereasons = [
  {
    icon: <Target size={32} />,
    title: "Strong Training Environment",
    desc: "Surrounding yourself with high-performers and serious athletes pushes you beyond your limits."
  },
  {
    icon: <Shield size={32} />,
    title: "Supportive Coaching",
    desc: "Our trainers don't just count reps; they teach you discipline and mastery of movement."
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Focus on Real Results",
    desc: "We prioritize evidence-based training methods that actually show on the scale and in the mirror."
  }
];
