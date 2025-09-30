
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, Zap, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import StatsSection from "../components/home/StatsSection";
import PrinciplesSection from '../components/about/PrinciplesSection';

export default function About() {
  const teamMembers = [
    { name: "selma de morney", role: "founder & lead strategist", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=60" },
    { name: "john doe", role: "head of talent practice", img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=800&q=60" },
    { name: "jane smith", role: "culture & innovation lead", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=60" },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 bg-slate-900">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1950&q=80" 
            alt="Team collaborating" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-800/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Badge variant="secondary" className="mb-6 bg-red-100 text-red-800 px-4 py-2 capitalize">our story</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-white tracking-tight mb-8">
              we are journey partners in transformation
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              humanfire was created out of a real desire to help hr teams shape the talent strategies needed for a changing world of work, and create more meaningful experiences for employees and organisations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-100px" }} 
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
              className="space-y-6"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">Who We Are</h2>
              <p className="text-xl text-red-600 font-semibold">
                Humanfire is a creative talent management studio.
              </p>
              <div className="text-lg text-slate-600 leading-relaxed space-y-4">
                <p>
                  We shape talent strategy that moves the business—designed not just for HR, but for enterprise leaders who need results.
                </p>
                <p>
                  We fuse talent management design and brand experience with AI-enabled technology and data intelligence to align your talent strategy with business ambition.
                </p>
              </div>
            </motion.div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true, margin: "-100px" }} 
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-red-50 to-transparent rounded-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1950&q=80" 
                alt="Mentorship" 
                className="relative rounded-2xl shadow-2xl"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 40 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true, margin: "-100px" }} 
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} 
              className="space-y-8"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 capitalize">our philosophy: the spiral of growth</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  our spiral symbolises growth and evolution, because of the way it can be drawn forever. it is a symbol of change and development. at humanfire, we provide the same lasting change and empowerment to sustain the journey we embark on together.
                </p>
                <p>
                  a 'run of the mill' analysis won't address the gaps of tomorrow. your organisation needs more effective ways to assess, develop and retain talent that is responsive to the rapidly evolving needs of the new, digital world of work.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Principles Section */}
      <PrinciplesSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Team Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 capitalize">meet our leaders</h2>
            <p className="text-xl text-slate-600">the experienced team dedicated to your success.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 60 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-100px" }} 
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-48 h-48 mx-auto rounded-2xl object-cover shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2 capitalize">{member.name}</h3>
                <p className="text-red-600 font-semibold text-lg capitalize">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 capitalize">ready to unleash your human potential?</h2>
            <p className="text-xl text-slate-600 mb-10">contact us to find out more about how we can help your organisation embark on its transformation journey.</p>
            <Link to={createPageUrl("BookDemo")}>
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                start your journey 
                <ArrowRight className="ml-2 h-5 w-5"/>
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
