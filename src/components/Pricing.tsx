import { motion } from 'motion/react';
import { Zap } from 'lucide-react';

const plans = [
  {
    name: "Semi-Annual Plan",
    price: "3,500",
    period: "/6 months",
    popular: false
  },
  {
    name: "Annual Plan",
    price: "4,500",
    period: "/year",
    popular: true
  }
];

export default function Pricing() {
  return (
    <section className="py-32 bg-gym-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 italic tracking-tighter">MEMBERSHIP <span className="text-brand-red">PLANS</span></h1>
            <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
              Straightforward pricing for serious athletes. Choose the commitment that fits your lifestyle.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-10 rounded-[40px] border w-full max-w-sm ${
                plan.popular ? 'border-brand-red bg-gym-gray shadow-[0_30px_60px_rgba(227,27,35,0.15)]' : 'border-white/5 bg-gym-gray/40'
              } flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-red text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full flex items-center space-x-1">
                  <Zap size={10} fill="currentColor" />
                  <span>Most Popular</span>
                </div>
              )}

              <div className="mb-8 text-center">
                <h3 className="text-xl font-bold uppercase tracking-tight">{plan.name}</h3>
              </div>

              <div className="mb-10 flex items-baseline justify-center">
                <span className="text-4xl font-display font-bold text-white">₹{plan.price}</span>
                <span className="text-gray-400 ml-1 text-sm">{plan.period}</span>
              </div>

              <a 
                href={`https://wa.me/919038738254?text=${encodeURIComponent("Hey, I wanted to ask about joining your gym. Can you share the membership details, fees, and timings? Also, do you have a trial session? Thanks!")}`}
                target="_blank"
                rel="noreferrer"
                className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest transition-all text-center ${
                  plan.popular ? 'bg-brand-red hover:bg-brand-orange text-white' : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                }`}
              >
                Join Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
