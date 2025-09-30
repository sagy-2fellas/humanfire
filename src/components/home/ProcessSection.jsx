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
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1950&q=80",
    screenshotUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    mockupText: "Initial consultation and assessment dashboard showing your current HR landscape and key challenges identified."
  },
  {
    icon: Lightbulb,
    step: "02", 
    title: "Design",
    description: "We craft tailored strategies and solutions that align with your business goals and create meaningful employee experiences.",
    imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1950&q=80",
    screenshotUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    mockupText: "Strategic design interface displaying custom HR frameworks and employee engagement solutions tailored to your needs."
  },
  {
    icon: Cog,
    step: "03",
    title: "Deploy", 
    description: "We implement with precision, ensuring seamless integration of new processes, technology, and cultural elements.",
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1950&q=80",
    screenshotUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    mockupText: "Implementation dashboard showing real-time deployment progress and team training modules being rolled out."
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Deliver",
    description: "We measure impact and continuously optimize to ensure sustainable transformation and lasting results.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1950&q=80",
    screenshotUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80",
    mockupText: "Analytics dashboard displaying key performance metrics, employee satisfaction scores, and ROI measurements."
  }
];

function ProcessStep({ step, index, onInView, isActive }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    margin: "-30% 0px -30% 0px",
    amount: 0.6
  });

  React.useEffect(() => {
    if (isInView) {
      onInView(index);
    }
  }, [isInView, index, onInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className="min-h-[500px] flex items-center"
    >
      <div className="grid lg:grid-cols-2 gap-8 w-full items-center">
        {/* Left side - Screenshot/Mockup */}
        <motion.div
          className="order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            {/* Phone mockup container */}
            <div className="relative mx-auto w-[280px] h-[500px] bg-slate-800 rounded-[3rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-slate-900 rounded-[2.5rem] overflow-hidden relative">
                {/* Status bar */}
                <div className="h-8 bg-slate-800 flex items-center justify-between px-6 text-white text-xs">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-2 bg-white rounded-sm"></div>
                    <div className="w-4 h-2 bg-white rounded-sm"></div>
                  </div>
                </div>
                
                {/* App screenshot */}
                <motion.img
                  src={step.screenshotUrl}
                  alt={`${step.title} interface`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                />
                
                {/* Overlay with step info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center">
                      <step.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{step.title}</p>
                      <p className="text-slate-300 text-xs">Step {step.step}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating description */}
            <motion.div
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-slate-900/90 backdrop-blur-md rounded-xl p-4 border border-slate-700/50 shadow-xl max-w-[320px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-slate-300 text-sm text-center">
                {step.mockupText}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right side - Content */}
        <motion.div
          className="order-1 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className={`relative bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border-2 transition-all duration-500 w-full ${
              isActive 
                ? 'border-red-500/60 shadow-2xl shadow-red-500/10' 
                : 'border-slate-700/50 hover:border-red-500/50 hover:shadow-xl'
            }`}
            animate={{
              borderColor: isActive ? "rgba(239, 68, 68, 0.6)" : "rgba(71, 85, 105, 0.5)",
              boxShadow: isActive 
                ? "0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 30px rgba(220, 38, 38, 0.15)"
                : "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
            }}
            whileHover={{
              borderColor: "rgba(239, 68, 68, 0.5)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3), 0 0 20px rgba(220, 38, 38, 0.2)",
              transition: { duration: 0.3 }
            }}
          >
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
                <h3 className="text-2xl font-bold text-white">
                  {step.title}<span className="inline-block w-2 h-2 bg-red-600 rounded-full ml-1 ember-pulse"></span>
                </h3>
              </div>
            </div>
            
            <p className="text-slate-300 leading-relaxed text-lg">
              {step.description}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden" ref={sectionRef}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
           }}>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
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
        </motion.div>

        {/* Process Steps with Individual Mockups */}
        <div className="space-y-24">
          {processSteps.map((step, index) => (
            <ProcessStep 
              key={index} 
              step={step} 
              index={index}
              onInView={setActiveStep}
              isActive={activeStep === index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mt-20"
        >
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
        </motion.div>
      </div>
    </section>
  );
}