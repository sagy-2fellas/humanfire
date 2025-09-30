
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart3, Shield, Target, Users, MessageSquare, TrendingUp, Building } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import ProblemSection from "../components/services/ProblemSection";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function HumanCulture() {
  const services = [
    { icon: BarChart3, title: "Culture Intelligence", description: "We use analytics to uncover what's working, what's missing, and where resistance lives — so you can act with precision." },
    { icon: Shield, title: "Barrier Breakers", description: "We decode cultural blockers — from misaligned behaviours to invisible norms — and design strategies to shift them." },
    { icon: Target, title: "From Concept to Practice", description: "We turn abstract values into lived behaviours through rituals, feedback, and daily habits." },
    { icon: Users, title: "Clear Ownership, Real Accountability", description: "We define who leads culture at every level — from Exco to team leads." },
    { icon: MessageSquare, title: "Aligned Messaging, Authentic Action", description: "We help you walk the talk — syncing values with leadership, communication, and systems." },
    { icon: TrendingUp, title: "Momentum Over Moments", description: "Our culture work is continuous, not campaign-based — designed to evolve with your business." },
    { icon: Building, title: "Business-Driven Culture Design", description: "We link culture to strategy, performance, and growth — making it a lever, not a luxury." },
  ];

  const problems = [
    { title: "Top-down, not lived-in", description: "Culture can’t be imposed—it has to be experienced." },
    { title: "One-off campaigns, not ongoing conversations", description: "Posters and workshops don’t build belonging." },
    { title: "Too focused on values, not enough on function and belonging", description: "Words on a wall mean nothing without action." },
    { title: "Disconnected from daily work", description: "Culture efforts often sit outside the flow of real life." },
    { title: "Designed for optics, not impact", description: "Many look good on paper but don’t move people and are not integrated into people strategy, technology and data." },
    { title: "Built for control, not connection", description: "Traditional approaches manage culture like a system—not a shared human experience." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1950&q=80" alt="Team Culture" className="w-full h-full object-cover opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge variant="outline" className="mb-6 text-purple-400 border-purple-400/50 bg-white/10 backdrop-blur-sm px-4 py-2">
              human+culture
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 italic">
              "Culture is the rhythm of how we work, lead, and belong."
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              We tune the rhythm to match your ambition, because change doesn't happen in a memo. It happens in a movement. And movement ignites culture.
            </p>
            <Link to={createPageUrl("BookDemo")}>
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 text-lg">
                Start Your Culture Transformation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Description section from original code is removed here */}

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 capitalize">What We Do</h2>
          </motion.div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border-2 border-slate-200/50 hover:border-purple-300/50 transition-all duration-300 group hover:shadow-xl bg-white">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 capitalize">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <ProblemSection
        title="The Problem with Painting Over Culture Cracks"
        problems={problems}
        imageSrc="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1974&q=80"
        themeColor="purple"
      />

      {/* Culture Image Section from original code is removed here */}

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to tune your culture's rhythm?</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Let's create a culture that moves your people and business forward together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("BookDemo")}>
                <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-4 text-lg font-semibold">
                  Book Your Culture Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to={createPageUrl("Services")}>
                <Button size="lg" variant="outline" className="border-2 border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-purple-800 px-8 py-4 text-lg">
                  View All Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
