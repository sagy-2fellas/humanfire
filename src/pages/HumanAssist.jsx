
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Bot, Target, Zap, Shield, TrendingUp, Users, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import ProblemSection from "../components/services/ProblemSection"; // Added import

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function HumanAssist() {
  const features = [
    {
      icon: Zap,
      title: "Plug & Play Power", // Updated title case and position
      description: "Fast to deploy, easy to integrate, built to scale.", // Updated description case
      color: "text-green-600"
    },
    {
      icon: Target,
      title: "Consistent, Connected Talent Practices", // Updated title case and position
      description: "Digitised processes across business units enable mobility and alignment.", // Updated description case
      color: "text-blue-600"
    },
    {
      icon: Shield,
      title: "One Source of Truth", // Updated title case
      description: "Integrated assessments and insights fuel smarter decisions.", // Updated description case
      color: "text-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Succession, Sorted", // Updated title case
      description: "Identify and prep future leaders before the gaps appear.", // Updated description
      color: "text-orange-600"
    },
    {
      icon: Users,
      title: "Retention Radar", // Updated title case
      description: "Predict and prevent talent loss with AI-powered insights.", // Updated description
      color: "text-red-600"
    },
    {
      icon: CheckCircle,
      title: "Performance that Drives Growth", // Updated title case
      description: "Align goals with ambition — and track what matters.", // Updated description case
      color: "text-teal-600"
    }
  ];

  // Added problems array
  const problems = [
    { title: "Built for HR, not humans", description: "Prioritizes process over people." },
    { title: "Too rigid for today’s work", description: "Doesn’t flex with hybrid, fluid careers." },
    { title: "Insight without impact", description: "Data overload, little action." },
    { title: "Disconnected from culture", description: "Ignores what truly drives engagement." },
    { title: "One-size-fits-none", description: "Fails to reflect diverse ambitions." },
    { title: "Automating the wrong things", description: "Legacy tech doesn’t fix broken processes—it just speeds them up." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge variant="outline" className="mb-6 text-red-400 border-red-400/50 bg-white/10 backdrop-blur-sm px-4 py-2">
              human+assist
            </Badge>
            
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight italic">
              “Smart tools. Human outcomes.” {/* Updated H1 content */}
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              We deploy Talent Management as a Service to bring meaning to technology. {/* Updated P content */}
            </p>

            <Link to={createPageUrl("BookDemo")}>
              <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Explore Solutions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Description Section - REMOVED */}

      {/* Features Grid */}
      <section className="py-24 bg-white"> {/* Changed background to bg-white */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 capitalize">What We Do</h2> {/* Updated H2 content */}
            {/* Removed the <p> tag that was here */}
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border-2 border-slate-200/50 hover:border-slate-300/50 transition-all duration-300 group hover:shadow-xl bg-white">
                  <CardHeader className="pb-4">
                    <div className={`w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 capitalize">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Problem Section - Added */}
      <ProblemSection
        title="Why Old Talent Systems No Longer Work for People"
        problems={problems}
        imageSrc="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1470&q=80"
        themeColor="blue"
      />

      {/* TAILA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20zm-30 0c0 5.523 4.477 10 10 10s10-4.477 10-10-4.477-10-10-10-10 4.477-10 10z'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl">
                <Bot className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              meet TAILA: your virtual talent partner
            </h2>
            
            <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
              Our AI assistant helps managers leverage data about talent to inform decisions and hold meaningful conversations from development & career to succession readiness and talent reviews. Because every manager deserves a talent expert at their fingertips. {/* Updated P content */}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("BookDemo")}>
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  See TAILA in Action
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              ready to transform your talent technology?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              let's discuss how human+assist can streamline your talent processes and empower your managers with ai-driven insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("BookDemo")}>
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  Book Your Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to={createPageUrl("Services")}>
                <Button size="lg" variant="outline" className="border-2 border-slate-200 hover:bg-slate-50 px-8 py-4 text-lg">
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
