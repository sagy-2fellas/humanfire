import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ServiceCube3D = () => {
  const [currentFace, setCurrentFace] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const services = [
    {
      name: "ANALYTICS",
      bgColor: "bg-teal-600",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop&crop=face",
      textColor: "text-amber-400",
      description: "Data-driven insights for strategic decisions",
      accent: "from-amber-400 to-orange-500"
    },
    {
      name: "ADVERTISING", 
      bgColor: "bg-pink-400",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face",
      textColor: "text-emerald-400",
      description: "Creative campaigns that convert",
      accent: "from-emerald-400 to-teal-500"
    },
    {
      name: "CONTENT",
      bgColor: "bg-gray-800", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop&crop=face",
      textColor: "text-white",
      description: "Compelling stories that engage",
      accent: "from-white to-gray-300"
    },
    {
      name: "STRATEGY",
      bgColor: "bg-teal-700",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600&h=600&fit=crop&crop=face", 
      textColor: "text-purple-300",
      description: "Strategic planning for growth",
      accent: "from-purple-300 to-pink-400"
    },
    {
      name: "SEO",
      bgColor: "bg-yellow-400",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop&crop=face",
      textColor: "text-blue-800", 
      description: "Search visibility that matters",
      accent: "from-blue-800 to-indigo-900"
    }
  ];

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentFace((prev) => (prev + 1) % services.length);
      }, 4000);
      
      return () => clearInterval(interval);
    }
  }, [services.length, isHovered]);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center perspective-1000">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 text-4xl lg:text-8xl font-bold text-white/10 select-none">
          HUMAN
        </div>
        <div className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 text-4xl lg:text-8xl font-bold text-white/10 select-none">
          FIRE
        </div>
      </div>

      {/* 3D Cube Container */}
      <div 
        className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 transform-style-preserve-3d"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {services.map((service, index) => {
          const isActive = index === currentFace;
          const rotationY = index * 72; // 360/5 = 72 degrees per face
          const translateZ = window.innerWidth >= 1024 ? 160 : window.innerWidth >= 768 ? 144 : 128;
          
          return (
            <motion.div
              key={index}
              className={`absolute w-full h-full ${service.bgColor} rounded-lg overflow-hidden shadow-2xl cursor-pointer`}
              style={{
                transform: `rotateY(${rotationY}deg) translateZ(${translateZ}px)`,
                transformStyle: 'preserve-3d',
              }}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: isActive ? 1 : 0.3,
                scale: isActive ? 1 : 0.9,
                rotateY: isHovered ? rotationY + 10 : rotationY
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setCurrentFace(index)}
            >
              {/* Service Image */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>

              {/* Service Text Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <motion.h2
                  className={`text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2 md:mb-4 uppercase tracking-wider`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ 
                    y: 0, 
                    opacity: isActive ? 1 : 0.7 
                  }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  style={{
                    textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
                    background: `linear-gradient(45deg, ${service.accent.includes('amber') ? '#f59e0b, #f97316' : 
                                                       service.accent.includes('emerald') ? '#10b981, #14b8a6' :
                                                       service.accent.includes('white') ? '#ffffff, #d1d5db' :
                                                       service.accent.includes('purple') ? '#a78bfa, #ec4899' :
                                                       '#1e40af, #3730a3'})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.8))'
                  }}
                >
                  {service.name}
                </motion.h2>
                
                <motion.p
                  className="text-white text-center text-xs md:text-sm px-2 md:px-4 opacity-90 font-medium"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ 
                    y: 0, 
                    opacity: isActive ? 0.9 : 0.5 
                  }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  style={{
                    textShadow: '1px 1px 3px rgba(0,0,0,0.9)',
                    background: 'rgba(0,0,0,0.3)',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  {service.description}
                </motion.p>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white/30 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full"></div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentFace(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentFace 
                ? 'bg-white scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Service indicators */}
      <div className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-1 md:space-y-2">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`w-1 md:w-2 h-12 md:h-16 rounded-full transition-all duration-300 ${
              index === currentFace 
                ? 'bg-white' 
                : 'bg-white/30'
            }`}
            animate={{
              scaleY: index === currentFace ? 1.2 : 1,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceCube3D;
