import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Arjun Sharma",
    role: "Member since 2023",
    text: "The environment here is unlike any other gym in Rishra. The trainers actually care about your progress. I lost 15kg in 6 months!",
    rating: 5
  },
  {
    name: "Priyanka Das",
    role: "Working Professional",
    text: "Ghatak Fitness is perfect for my busy schedule. Open early and late night. The equipment is modern and always clean.",
    rating: 5
  },
  {
    name: "Rahul Mehra",
    role: "Student",
    text: "Budget-friendly for students but with top-tier equipment. Best place to start weight training if you live around Serampore.",
    rating: 4
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gym-gray relative overflow-hidden">
      <div className="absolute top-0 right-0 p-20 opacity-5">
        <Quote size={200} className="text-white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">WHAT OUR MEMBERS SAY</h2>
          <div className="w-20 h-1 bg-brand-red mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gym-black p-10 rounded-3xl border border-white/5 relative"
            >
              <div className="flex mb-6 text-brand-orange">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-300 text-lg italic mb-8 leading-relaxed">
                "{item.text}"
              </p>
              <div>
                <h4 className="text-white font-bold">{item.name}</h4>
                <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
