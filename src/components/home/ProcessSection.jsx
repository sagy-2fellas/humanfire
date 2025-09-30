import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Lightbulb, Cog, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const processSteps = [
  {
    icon: Search,
    step: "01",
    title: "Discover",
    description: "We start by understanding your unique challenges, culture, and ambitions through deep listening and comprehensive assessment.",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1950&q=80"
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Design",
    description: "We craft tailored strategies and solutions that align with your business goals and create meaningful employee experiences.",
    imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1950&q=80"
  },
  {
    icon: Cog,
    step: "03",
    title: "Deploy",
    description: "We implement with precision, ensuring seamless integration of new processes, technology, and cultural elements.",
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1950&q=80"
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Deliver",
    description: "We measure impact and continuously optimize to ensure sustainable transformation and lasting results.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1950&q=80"
  }
];

function StepSection({ step, index, isLast }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div 
      ref={sectionRef}
      className="scroll-snap-align-start h-screen flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center h-full">
          {/* Left Column - Image */}
          <motion.div 
            className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700/30"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.img
              src={step.imageUrl}
              alt={step.title}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-slate-900/20"></div>
            
            {/* Step Indicator */}
            <motion.div 
              className="absolute bottom-8 left-8 bg-slate-900/90 backdrop-blur-md rounded-xl p-6 border border-red-500/20"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex items-center gap-4">
                <motion.div 
                  className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  {React.createElement(step.icon, { className: "w-6 h-6 text-white" })}
                </motion.div>
                <div>
                  <p className="text-red-400 text-sm font-medium">Step {step.step}</p>
                  <p className="text-white font-bold text-xl">{step.title}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-red-500/60 shadow-2xl shadow-red-500/10">
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, rgb(220 38 38), rgb(239 68 68), rgb(185 28 28))"
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    boxShadow: "0 0 25px rgba(220, 38, 38, 0.4)",
                    transition: { duration: 0.4 }
                  }}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <span className="text-4xl font-bold text-slate-700">{step.step}</span>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-white mb-4">
                {step.title}<span className="inline-block w-2 h-2 bg-red-600 rounded-full ml-1 ember-pulse"></span>
              </h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                {step.description}
              </p>
            </div>

            {/* Navigation hint for last step */}
            {isLast && (
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="text-slate-400 text-sm mb-4">Scroll down to continue</p>
                <motion.div
                  className="w-6 h-10 border-2 border-slate-500 rounded-full mx-auto flex justify-center"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-1 h-3 bg-slate-500 rounded-full mt-2"></div>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function ProcessSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="bg-slate-900 relative overflow-hidden" ref={sectionRef}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
           }}>
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-center py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Badge variant="outline" className="mb-4 text-red-400 border-red-400/50 bg-white/5 backdrop-blur-sm px-4 py-2 capitalize">
              Our Methodology
            </Badge>
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            How We Work With You<span className="inline-block w-3 h-3 bg-red-600 rounded-full ml-1 ember-pulse"></span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our proven 4-step process ensures every transformation is strategic, human-centered, and built to last.
          </p>
        </div>
      </motion.div>

      {/* Scroll-Snap Container */}
      <div className="scroll-snap-type-y-mandatory h-[400vh] overflow-y-scroll">
        {processSteps.map((step, index) => (
          <StepSection 
            key={index} 
            step={step} 
            index={index}
            isLast={index === processSteps.length - 1}
          />
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-center py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-slate-300 mb-6">
            Ready to start your transformation journey?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("BookDemo")}>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button className="fire-button text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  Let's Discuss Your Needs
                  <motion.div
                    className="ml-2"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}