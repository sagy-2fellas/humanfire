import React from 'react';
import { motion } from 'framer-motion';
import { Award, Zap, Heart, Rocket, Wand2 } from 'lucide-react';

const principles = [
  {
    icon: Award,
    title: 'Expert-led, future ready.',
    description: 'We bring deep experience and forward-thinking talent strategy',
  },
  {
    icon: Zap,
    title: 'Bold by design.',
    description: 'We challenge norms with brand-focused energy',
  },
  {
    icon: Heart,
    title: 'Human at heart.',
    description: 'Empathy drives everything we create',
  },
  {
    icon: Rocket,
    title: 'Fast and purposeful.',
    description: 'We build adaptive, immersive solutions with speed and intent',
  },
  {
    icon: Wand2,
    title: 'Smart meets stunning.',
    description: 'Our work blends strategic depth with creative beauty',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function PrinciplesSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Our Principles
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            These five pillars guide every strategy we design and every partnership we build.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 group"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-red-500 group-hover:text-white transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6">
                  <principle.icon className="w-10 h-10 text-red-500 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                {principle.title}
              </h3>
              <p className="text-slate-600">{principle.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}