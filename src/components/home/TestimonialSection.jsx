import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Her depth of understanding and insight into best practices for the development of our HR strategy was apparent from the onset... Selma's competence was evident in aspiring to summit the peak of HR excellence, I would partner with her in a heartbeat.",
    name: "Lana Jackson",
    title: "HR and Development Manager, On the Dot",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
  },
  {
    quote: "Selma's talent management expertise was integral to the successful design and implementation of the Talent Management project. Her change management prowess added immense value in capacitating the HR Team for the rollout and adoption phases.",
    name: "Warren van Wyk",
    title: "HR & Capability Executive, Massmart Group",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=400&q=80"
  },
  {
    quote: "Selma is one of the consultants that will leave a lasting impression on you and your team. She is an absolute pleasure to work and collaborate with.",
    name: "Anneline Goliath",
    title: "Account Manager and Change Lead, Astron Energy",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
  },
  {
    quote: "Selma's ability to manage the complexity of the relationships in a diverse and geographically dispersed context was essential to the successful implementation of the new technology, which is still actively used and well embedded in across the group.",
    name: "Martin Sutherland",
    title: "Global Director, Peopletree Group",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
  },
  {
    quote: "In my view with Selma input and guidance this was a highly successful project that delivered significant value to the client.",
    name: "Paul Hobden",
    title: "Chief Operating Officer, Edge Learning Media",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
  },
  {
    quote: "Not only is she a Talent Management expert and champion in every sense of the word... I have full confidence that I can trust, has relevant innovative insights and advice that is fit for purpose.",
    name: "Vanessa Kodisang",
    title: "Head of HR, Massmart Group",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
  }
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-slate-50 overflow-hidden" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            What Our Clients Say<span className="inline-block w-3 h-3 bg-red-600 rounded-full ml-1 ember-pulse"></span>
          </h2>
        </motion.div>

        <motion.div 
          className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 md:p-12 fire-glow"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
          whileHover={{ 
            y: -8, 
            shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 20px rgba(220, 38, 38, 0.1)",
            transition: { duration: 0.3 }
          }}
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          >
            <Quote className="absolute -bottom-8 -right-4 w-32 h-32 text-red-500/10" strokeWidth={1} />
          </motion.div>

          <div className="min-h-[320px] md:min-h-[250px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="w-full"
              >
                <motion.div 
                  className="flex justify-center mb-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 360,
                        filter: "drop-shadow(0 0 8px rgba(220, 38, 38, 0.8))",
                        transition: { duration: 0.3 }
                      }}
                    >
                      <Star className="w-6 h-6 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </motion.div>

                <motion.p 
                  className="text-lg md:text-xl font-medium text-slate-700 max-w-2xl mx-auto mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  "{activeTestimonial.quote}"
                </motion.p>

                <motion.div 
                  className="flex items-center justify-center space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <motion.img 
                    src={activeTestimonial.image} 
                    alt={activeTestimonial.name} 
                    className="w-14 h-14 rounded-full object-cover shadow-md"
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 0 15px rgba(220, 38, 38, 0.3)",
                      transition: { duration: 0.2 }
                    }}
                  />
                  <div>
                    <p className="font-bold text-slate-900">{activeTestimonial.name}</p>
                    <p className="text-sm text-slate-500">{activeTestimonial.title}</p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-red-600 scale-125 ember-pulse' : 'bg-slate-300 hover:bg-slate-400'
                }`}
                whileHover={{ 
                  scale: activeIndex === index ? 1.4 : 1.2,
                  boxShadow: activeIndex === index ? "0 0 8px rgba(220, 38, 38, 0.5)" : "none",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}