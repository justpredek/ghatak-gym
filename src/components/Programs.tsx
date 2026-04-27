import { motion } from 'motion/react';

const programs = [
  {
    title: "Weight Training",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef03a94e77?q=80&w=2070&auto=format&fit=crop",
    desc: "Build raw power and strength with intensive free-weights."
  },
  {
    title: "Muscle Building",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop",
    desc: "Hypertrophy focused training plans for rapid growth."
  },
  {
    title: "Fat Loss",
    image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=1931&auto=format&fit=crop",
    desc: "High intensity metabolic conditioning to burn fat fast."
  },
  {
    title: "Beginner Guidance",
    image: "https://images.unsplash.com/photo-1574673130244-c707e9d8352e?q=80&w=1980&auto=format&fit=crop",
    desc: "The perfect start for students and young adults."
  }
];

export default function Programs() {
  return (
    <section className="py-24 bg-gym-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-4 block">Our Specialties</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold">POWERFUL<br/>PROGRAMS</h2>
          </div>
          <p className="max-w-md text-gray-400 text-sm mb-2">
            Tailored fitness solutions for every goal. Whether you want to bulk up, lean down, or just stay fit, we have the plan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {programs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[450px] overflow-hidden"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gym-black via-gym-black/20 to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-brand-red transition-colors">{item.title}</h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
