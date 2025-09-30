import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function ExpertiseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -50, scale: 0.9 }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative"
          >
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.05, rotateY: 5, transition: { duration: 0.4 } }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80" 
                alt="HR Strategy Meeting" 
                className="w-full h-[500px] object-cover"
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </motion.div>
            
            {/* Floating elements */}
            <motion.div
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl shadow-xl flex items-center justify-center"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <span className="text-white font-bold text-lg">15+</span>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <Badge 
                  variant="outline" 
                  className="mb-4 text-red-600 border-red-200 bg-red-50 px-3 py-1"
                >
                  Our Expertise
                </Badge>
              </motion.div>
              
              <motion.h2 
                className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <span>Transforming Talent Strategies With Proven Expertise</span><span className="inline-block w-3 h-3 bg-red-600 rounded-full ml-1"></span>
              </motion.h2>
              
              <motion.p 
                className="mt-6 text-lg text-slate-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                We're passionate about helping organizations unlock their human potential. 
                Our evidence-based approach combines strategic thinking with practical implementation 
                to deliver sustainable transformation across talent, culture, and performance.
              </motion.p>
            </div>

            {/* Statistics */}
            <motion.div 
              className="flex gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <div className="relative w-20 h-20 mx-auto mb-3">
                  <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-slate-200"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="transparent"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <motion.path
                      className="text-red-500"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="transparent"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      initial={{ strokeDasharray: "0, 100" }}
                      animate={isInView ? { strokeDasharray: "85, 100" } : { strokeDasharray: "0, 100" }}
                      transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span 
                      className="text-xl font-bold text-slate-900"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: 1, duration: 0.5, type: "spring" }}
                    >
                      85%
                    </motion.span>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Client Retention</p>
                  <p className="text-sm text-slate-600">Rate</p>
                </div>
              </motion.div>

              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <div className="relative w-20 h-20 mx-auto mb-3">
                  <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-slate-200"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="transparent"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <motion.path
                      className="text-red-500"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="transparent"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      initial={{ strokeDasharray: "0, 100" }}
                      animate={isInView ? { strokeDasharray: "92, 100" } : { strokeDasharray: "0, 100" }}
                      transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span 
                      className="text-xl font-bold text-slate-900"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: 1, duration: 0.5, type: "spring" }}
                    >
                      92%
                    </motion.span>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Projects</p>
                  <p className="text-sm text-slate-600">Completed</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Key Points */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-slate-900">
                Certified And Experienced HR Professionals<span className="inline-block w-2 h-2 bg-red-600 rounded-full ml-1"></span>
              </h3>
              <ul className="red-dot-bullet">
                {[
                  "Deep expertise in talent management, organizational design, and culture transformation across industries.",
                  "We partner with you throughout the entire journey, from strategy design to sustainable implementation."
                ].map((text, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  >
                    <p className="text-slate-700">{text}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}