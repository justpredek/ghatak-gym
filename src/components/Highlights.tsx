import { motion } from 'motion/react';
import { Dumbbell, Users, Zap, ShieldCheck } from 'lucide-react';

const highlights = [
  {
    icon: <Zap className="text-brand-orange" />,
    title: "Open Daily",
    desc: "Morning 6 AM to Night 10 PM. No more timing excuses."
  },
  {
    icon: <Users className="text-brand-orange" />,
    title: "Beginner Friendly",
    desc: "Special focus and guidance for those starting their journey."
  },
  {
    icon: <Dumbbell className="text-brand-orange" />,
    title: "Expert Training",
    desc: "Certified trainers to help you with form and technique."
  },
  {
    icon: <ShieldCheck className="text-brand-orange" />,
    title: "Result Focused",
    desc: "Structured programs designed for muscle gain and fat loss."
  }
];

export default function Highlights() {
  return (
    <section className="py-24 bg-gym-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gym-gray hover:bg-gym-gray/60 transition-colors border border-white/5"
            >
              <div className="mb-6 w-12 h-12 rounded-xl bg-gym-black flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
