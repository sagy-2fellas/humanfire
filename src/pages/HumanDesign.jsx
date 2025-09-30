
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Target, TrendingUp, BarChart, BrainCircuit, Users, Megaphone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import ProblemSection from "../components/services/ProblemSection"; // Added import

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function HumanDesign() {
  // Modified from 'impacts' to 'whatWeDo' and updated content as per outline
  const whatWeDo = [
    { icon: Target, title: "Design That Delivers", description: "We shape and optimise your talent practices to drive real impact — not just theory." },
    { icon: TrendingUp, title: "Future-Ready Planning", description: "Subjective practices without the use of real data and sound objective tools." },
    { icon: BarChart, title: "Anticipate tomorrow’s talent needs, today", description: "Help your people thrive with development that matters." },
    { icon: BrainCircuit, title: "Skills That Shape the Future", description: "Build the behaviours and capabilities your strategy demands." },
    { icon: Users, title: "Succession & Retention", description: "Keep your top talent — and plan for what’s next." },
    { icon: Megaphone, title: "Brand That Attracts", description: "Define your EVP and Employer Brand to magnetise and retain the right people." },
    { icon: MessageCircle, title: "Communication That Connects", description: "Mobilising your organisation. Because change doesn’t happen in a memo — it happens in a movement." },
  ];

  // Added new 'problems' array as per outline
  const problems = [
    { title: "No Strategic Link", description: "Traditional Talent Management is designed for predictable environments." },
    { title: "Guesswork Over Insight", description: "Subjective practices without the use of real data and sound objective tools." },
    { title: "Disconnected", description: "Related talent practices and data are not integrated to drive talent value." },
    { title: "Tech & Tools Gap", description: "HR teams lack the tools and capacity to scale deep transformational talent management." },
    { title: "Change Gets Stuck", description: "New practices meet old resistance. Talent management is not enabled in the flow of work." },
    { title: "Culture Clash", description: "Roles, values, and priorities don’t align." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1950&q=80" alt="Strategy Session" className="w-full h-full object-cover opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge variant="outline" className="mb-6 text-red-400 border-red-400/50 bg-white/10 backdrop-blur-sm px-4 py-2">
              human+design
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 italic">
              “Talent management is not a department. It’s not a process. It’s your competitive edge.”
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              We design your talent management strategy to feel as human as it is intelligent.
            </p>
            <Link to={createPageUrl("BookDemo")}>
              <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 text-lg">
                Book a Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section - Replaces original Main Description and Impact sections */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="text-center mb-16">
             <h2 className="text-4xl font-bold text-slate-900 capitalize">What We Do</h2>
          </motion.div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatWeDo.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border-2 border-slate-200/50 hover:border-red-300/50 transition-all duration-300 group hover:shadow-xl bg-white">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6 text-red-600" />
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

      {/* Problem Section - Added as per outline */}
      <ProblemSection
        title="Rethinking Talent: Where Traditional Management Misses the Mark"
        problems={problems}
        imageSrc="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1974&q=80"
        themeColor="red"
      />

      {/* EVP Section - Kept existing code */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1974&q=80" alt="Employer Branding" className="rounded-xl shadow-xl"/>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 capitalize">employee value proposition (evp) and employer branding</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Your EVP is the promise you make to your employees in return for their commitment. A strong employer brand translates that promise into a compelling story that attracts and retains the right people. We help you define both, ensuring your internal reality matches your external reputation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Background and button classes updated as per outline */}
      <section className="py-24 bg-slate-50"> {/* Changed background color */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            {/* Kept text content and colors as per outline, despite contrast on light background */}
            <h2 className="text-4xl font-bold text-white mb-6">Ready to design your competitive edge?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's build a talent strategy that is not just a process, but a true driver of business success.
            </p>
            <Link to={createPageUrl("BookDemo")}>
              <Button size="lg" className="fire-button text-white px-8"> {/* Changed button class */}
                Start Designing Your Strategy
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
