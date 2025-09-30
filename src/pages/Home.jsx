
import React, { useState } from "react";
import { Contact, Newsletter } from "@/api/entities";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, ArrowRight, Users, Target, Award, TrendingUp, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

import HeroSection from "../components/home/HeroSection";
import StatsSection from "../components/home/StatsSection";
import InteractiveFrameworkSection from "../components/home/InteractiveFrameworkSection";
import ProcessSection from "../components/home/ProcessSection";
import ExpertiseSection from "../components/home/ExpertiseSection";
import TestimonialSection from "../components/home/TestimonialSection";
import NewsletterSignup from "../components/common/NewsletterSignup";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Interactive Framework Preview */}
      <InteractiveFrameworkSection />
      
      {/* Our Expertise Section */}
      <ExpertiseSection />
      
      {/* Process Section */}
      <ProcessSection />
      
      {/* Testimonial Section */}
      <TestimonialSection />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative heat-haze">
        {/* Subtle texture for dark backgrounds */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20zm-30 0c0 5.523 4.477 10 10 10s10-4.477 10-10-4.477-10-10-10-10 4.477-10 10z'/%3E%3C/g%3E%3C/svg%3E")`
             }}>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready To Transform Your HR Strategy<span className="inline-block w-3 h-3 bg-red-600 rounded-full ml-1 ember-pulse"></span>
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Book a personalized demo and discover how humanfire can help you build a more engaged, productive workforce.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("BookDemo")}>
                <Button size="lg" className="fire-button text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  Book Your Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to={createPageUrl("Services")}>
                <Button size="lg" variant="outline" className="border-2 border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-slate-800 px-8 py-4 text-lg fire-glow">
                  Explore Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSignup />
    </div>
  );
}
