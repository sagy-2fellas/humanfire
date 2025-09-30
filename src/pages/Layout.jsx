

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Layout({ children, currentPageName }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 1]); // Adjusted for dark theme background initially
  const headerBlur = useTransform(scrollY, [0, 100], [8, 12]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: "Home", path: createPageUrl("Home") },
    { name: "About", path: createPageUrl("About") },
  ];

  const serviceItems = [
    { name: "human+design", path: createPageUrl("HumanDesign") },
    { name: "human+assist", path: createPageUrl("HumanAssist") },
    { name: "human+insight", path: createPageUrl("HumanInsight") },
    { name: "human+culture", path: createPageUrl("HumanCulture") },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-slate-900">
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        
        :root {
          --primary: 15 23 42;
          --primary-foreground: 248 250 252;
          --secondary: 185 28 28;
          --secondary-foreground: 248 250 252;
          --accent: 220 38 38;
          --accent-foreground: 248 250 252;
          --muted: 248 250 252;
          --muted-foreground: 100 116 139;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        .nav-link {
          position: relative;
          overflow: hidden;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, rgb(220 38 38), rgb(239 68 68), rgb(185 28 28));
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .nav-link-active::before {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 5px;
          height: 5px;
          background-color: rgb(220 38 38);
          border-radius: 9999px;
          box-shadow: 0 0 8px rgba(220, 38, 38, 0.6);
        }
        
        .fire-button {
          background: linear-gradient(135deg, rgb(220 38 38), rgb(239 68 68), rgb(185 28 28));
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        .fire-button::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent, rgba(255,255,255,0.1), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s;
        }
        .fire-button:hover::before {
          transform: translateX(100%);
        }
        .fire-button:hover {
          background: linear-gradient(135deg, rgb(239 68 68), rgb(248 113 113), rgb(220 38 38));
          box-shadow: 0 10px 40px -5px rgba(220, 38, 38, 0.5), 0 0 30px rgba(220, 38, 38, 0.3);
          transform: translateY(-2px);
        }
        
        .fire-text {
          background: linear-gradient(135deg, rgb(220 38 38), rgb(239 68 68), rgb(185 28 28));
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: fire-gradient 4s ease infinite;
        }
        @keyframes fire-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .ember-pulse {
          animation: ember-glow 4s infinite ease-in-out;
        }
        @keyframes ember-glow {
          0%, 100% { opacity: 0.8; transform: scale(1); box-shadow: 0 0 8px rgba(220, 38, 38, 0.4); }
          50% { opacity: 1; transform: scale(1.05); box-shadow: 0 0 16px rgba(220, 38, 38, 0.8); }
        }
        
        .heat-haze::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 60%, rgba(220, 38, 38, 0.08) 0%, transparent 50%);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.5s ease;
        }
        .heat-haze:hover::before {
          opacity: 1;
        }
        
        .fire-glow {
          transition: all 0.3s ease;
        }
        .fire-glow:hover {
          box-shadow: 0 0 20px rgba(220, 38, 38, 0.3), inset 0 0 15px rgba(220, 38, 38, 0.05);
          border-color: rgb(239 68 68) !important;
        }
        
        .dot-spinner {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
        }
        .dot-spinner > div {
          width: 6px;
          height: 6px;
          background: linear-gradient(45deg, rgb(220 38 38), rgb(239 68 68));
          border-radius: 50%;
          animation: fire-dot-bounce 1s infinite ease-in-out;
          box-shadow: 0 0 8px rgba(220, 38, 38, 0.5);
        }
        .dot-spinner > div:nth-child(2) { animation-delay: -0.16s; }
        .dot-spinner > div:nth-child(3) { animation-delay: -0.32s; }
        @keyframes fire-dot-bounce {
          0%, 80%, 100% { transform: scale(0); background: linear-gradient(45deg, rgb(220 38 38), rgb(239 68 68)); }
          40% { transform: scale(1.0); background: linear-gradient(45deg, rgb(239 68 68), rgb(185 28 28)); box-shadow: 0 0 12px rgba(220, 38, 38, 0.8); }
        }
        
        .red-dot-bullet {
          list-style: none;
          padding-left: 0;
        }
        .red-dot-bullet li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .red-dot-bullet li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.5em;
          transform: translateY(-50%);
          width: 6px;
          height: 6px;
          background-color: rgb(220 38 38);
          border-radius: 9999px;
          animation: ember-glow 3s infinite ease-in-out;
        }
      `}</style>

      {/* Header */}
      <motion.header 
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ 
          opacity: headerOpacity,
          backdropFilter: `blur(${headerBlur}px)`,
        }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-slate-900/95 shadow-lg shadow-black/20' : 'bg-slate-900/90'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center group">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d58d25391c1a6fec6b2bda/3a4822ae3_Logo_colour_divider.jpg"
                alt="humanfire"
                className="h-8 w-auto brightness-110"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`nav-link text-sm font-medium transition-colors duration-200 hover:text-red-400 ${
                    isActive(item.path)
                      ? "text-red-400 nav-link-active"
                      : "text-slate-200"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className={`nav-link flex items-center space-x-1 text-sm font-medium transition-colors duration-200 hover:text-red-400 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-2 py-1 ${
                  isActive(createPageUrl("Services")) || 
                  serviceItems.some(service => isActive(service.path))
                    ? "text-red-400 nav-link-active"
                    : "text-slate-200"
                }`}>
                  <span>Services</span>
                  <motion.div 
                    whileHover={{ rotate: 180 }} 
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 bg-slate-800/95 backdrop-blur-lg border-slate-700 text-slate-200">
                  <DropdownMenuItem asChild>
                    <Link to={createPageUrl("Services")} className="w-full cursor-pointer hover:bg-red-500/10 hover:text-red-400 transition-colors focus:bg-red-500/10 focus:text-red-400">
                      All Services
                    </Link>
                  </DropdownMenuItem>
                  <div className="border-t border-slate-700 my-1"></div>
                  {serviceItems.map((service) => (
                    <DropdownMenuItem key={service.name} asChild>
                      <Link to={service.path} className="w-full cursor-pointer hover:bg-red-500/10 hover:text-red-400 transition-colors focus:bg-red-500/10 focus:text-red-400">
                        {service.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <div className="flex items-center gap-3">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" className="border-slate-600 text-slate-200 hover:bg-slate-800 hover:border-slate-500 px-6 focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-slate-900">
                    Login
                  </Button>
                </motion.div>
                <Link to={createPageUrl("BookDemo")}>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="fire-button text-white px-6 focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-slate-900">
                      Book Demo
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-slate-200 hover:text-red-400 transition-colors rounded focus:outline-none focus:ring-2 focus:ring-red-400"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMenuOpen ? 'close' : 'menu'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden overflow-hidden bg-slate-800/95 backdrop-blur-lg border-t border-slate-700"
            >
              <div className="px-4 py-4 space-y-4">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block font-medium transition-colors py-2 rounded px-3 ${
                        isActive(item.path) ? 'text-red-400 bg-red-500/10' : 'text-slate-200 hover:text-red-400 hover:bg-red-500/5'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navigationItems.length * 0.1, duration: 0.3 }}
                  className="space-y-2"
                >
                  <Link
                    to={createPageUrl("Services")}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-slate-200 hover:text-red-400 font-medium transition-colors py-2 rounded px-3 hover:bg-red-500/5"
                  >
                    Services
                  </Link>
                  <div className="pl-4 space-y-2">
                    {serviceItems.map((service, index) => (
                      <motion.div
                        key={service.name}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: (navigationItems.length + 1 + index) * 0.1, duration: 0.3 }}
                      >
                        <Link
                          to={service.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="block text-slate-400 hover:text-red-400 text-sm transition-colors py-2 rounded px-3 hover:bg-red-500/5"
                        >
                          {service.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: (navigationItems.length + serviceItems.length + 2) * 0.1, duration: 0.3 }}
                  className="space-y-3 pt-4 border-t border-slate-700"
                >
                  <Button variant="outline" className="w-full border-slate-600 text-slate-200 hover:bg-slate-800 hover:border-slate-500">
                    Login
                  </Button>
                  <Link to={createPageUrl("BookDemo")}>
                    <Button className="w-full fire-button text-white" onClick={() => setIsMenuOpen(false)}>
                      Book Demo
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d58d25391c1a6fec6b2bda/3a4822ae3_Logo_colour_divider.jpg"
                alt="humanfire"
                className="h-8 w-auto brightness-110"
              />
              <p className="text-slate-300 text-sm leading-relaxed">
                unleashing human potential by enabling talent and organizations to thrive together through human experience (hx) strategies.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navigationItems.slice(0, 4).map((item, index) => (
                  <motion.li 
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className="text-slate-300 hover:text-red-400 text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-semibold mb-4">human+ Services</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                {serviceItems.map((service, index) => (
                  <motion.li 
                    key={service.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <Link
                      to={service.path}
                      className="hover:text-red-400 transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {service.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="font-semibold mb-4 capitalize">Contact</h4>
              <motion.div 
                className="space-y-2 text-sm text-slate-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.p whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>hello@humanfire.co</motion.p>
                <motion.p whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>+27 84 056 8822</motion.p>
                <motion.p whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>South Africa</motion.p>
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 pt-8 text-center text-sm text-slate-400"
          >
            <div className="flex justify-center items-center gap-2 mb-8">
              <motion.div 
                className="h-px flex-1 bg-slate-700"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              <motion.div 
                className="w-1.5 h-1.5 bg-red-500 rounded-full ember-pulse"
                whileHover={{ scale: 1.5 }}
              />
              <motion.div 
                className="h-px flex-1 bg-slate-700"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </div>
            <p>&copy; 2024 humanfire. All rights reserved. | Privacy Policy | Terms of Service</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

