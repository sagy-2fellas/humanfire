import React, { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import ServiceCube3D from "./ServiceCube3D";

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  const words = useMemo(() => ["human+design", "human+assist", "human+insight", "human+culture"], []);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    if (isTyping) {
      if (displayedText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsTyping(true);
      }
    }
  }, [displayedText, currentWordIndex, isTyping, words]);

  return (
    <section className="bg-slate-900 relative heat-haze overflow-hidden">
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(220, 38, 38, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(239, 68, 68, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(220, 38, 38, 0.15) 0%, transparent 50%)",
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="max-w-none xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 h-screen pt-16">
        {/* Left Content */}
        <motion.div 
          className="px-4 flex flex-col sm:px-6 lg:px-8 xl:px-12 2xl:px-16"
          style={{ opacity, y }}
        >
          <div className="pt-8 xl:pt-16 2xl:pt-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge variant="outline" className="mb-6 xl:mb-8 border-red-400/50 text-red-400 bg-white/5 backdrop-blur-sm text-sm xl:text-base hover:bg-white/10 transition-all duration-300">
                HUMAN EXPERIENCE STRATEGY
              </Badge>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold text-white tracking-tight leading-tight flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="mb-2 xl:mb-4">
                Driving Business Success Through
                <motion.span 
                  className="inline-block w-3 h-3 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 bg-red-600 rounded-full ml-2"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </span>
              <span className="fire-text min-h-[1.2em] inline-block">
                {displayedText}
                <motion.span 
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  |
                </motion.span>
              </span>
            </motion.h1>

            <motion.p 
              className="mt-8 xl:mt-12 2xl:mt-16 max-w-lg xl:max-w-xl 2xl:max-w-2xl text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-slate-300 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              We blend human-centric strategy with technology to help you build a workforce that's ready for tomorrow.
            </motion.p>

            <motion.div 
              className="mt-12 xl:mt-16 2xl:mt-20 flex flex-col sm:flex-row items-center gap-6 xl:gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link to={createPageUrl("BookDemo")}>
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(220, 38, 38, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button size="lg" className="fire-button text-white px-8 py-4 xl:px-10 xl:py-5 2xl:px-12 2xl:py-6 text-lg xl:text-xl 2xl:text-2xl group w-full sm:w-auto">
                    Get in touch
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7" />
                    </motion.div>
                  </Button>
                </motion.div>
              </Link>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 group flex items-center gap-3 px-6 py-4 xl:px-8 xl:py-5 2xl:px-10 2xl:py-6 text-lg xl:text-xl 2xl:text-2xl">
                  <motion.div
                    className="w-10 h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors"
                    whileHover={{ rotate: 90, boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)" }}>
                    <Play className="w-5 h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 text-white" />
                  </motion.div>
                  <span>How it works</span>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - 3D Service Cube */}
        <div className="relative overflow-hidden flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="w-full h-full"
          >
            <ServiceCube3D />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-900 pointer-events-none"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-white/60 cursor-pointer hover:text-white/90 transition-colors"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-sm uppercase tracking-wider">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}