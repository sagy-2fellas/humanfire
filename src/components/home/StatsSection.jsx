import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const clients = [
  {
    name: "On the Dot",
    logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d58d25391c1a6fec6b2bda/e6b7d38ae_7.png"
  },
  {
    name: "Massmart",
    logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d58d25391c1a6fec6b2bda/d995422ee_5.png"
  },
  {
    name: "Astron Energy", 
    logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d58d25391c1a6fec6b2bda/63eeebcff_6.png"
  },
  {
    name: "McDonald's",
    logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d58d25391c1a6fec6b2bda/99d697d17_8.png"
  }
];

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-slate-50 py-20 sm:py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="text-center text-lg font-semibold leading-8 text-slate-900 mb-12">
            Trusted by leading organizations
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 max-w-5xl mx-auto">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="flex items-center justify-center"
              >
                <img
                  className="h-36 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  src={client.logo}
                  alt={`${client.name} logo`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}