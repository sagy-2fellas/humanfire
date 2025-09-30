
import React, { useState } from "react";
import { Newsletter } from "@/api/entities";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Mail, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      await Newsletter.create({
        email,
        first_name: firstName,
        interests: ["hr_trends", "compliance_updates"]
      });
      setIsSuccess(true);
      setEmail("");
      setFirstName("");
    } catch (error) {
      console.error("Newsletter signup error:", error);
    }
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-center space-y-6"
            >
              <motion.div
                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <CheckCircle className="w-8 h-8 text-green-600" />
              </motion.div>
              <h3 className="text-2xl font-bold text-slate-800">Thank You!</h3>
              <p className="text-slate-600">
                You've successfully subscribed. Get ready for valuable Human Experience insights delivered to your inbox.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Badge variant="outline" className="mb-4 text-red-600 border-red-200 hover:border-red-300 transition-colors capitalize">
                  Stay Informed
                </Badge>
              </motion.div>
              
              <motion.h2 
                className="text-3xl font-bold text-slate-800 mb-4 capitalize"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Human+ Insights
              </motion.h2>
              
              <motion.p 
                className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Get the latest insights on talent strategies, Human Experience (HX) approaches, and future of work trends.
              </motion.p>

              <motion.form 
                onSubmit={handleSubmit} 
                className="max-w-md mx-auto space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Input
                    type="text"
                    placeholder="First name (optional)"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="h-12 transition-all duration-300 focus:border-red-400 focus:ring-red-400"
                  />
                </motion.div>
                
                <div className="flex gap-3">
                  <motion.div
                    className="flex-1"
                    whileHover={{ scale: 1.02 }}
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-12 transition-all duration-300 focus:border-red-400 focus:ring-red-400"
                    />
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-red-600 hover:bg-red-700 px-8 h-12 transition-all duration-300 hover:shadow-lg"
                    >
                      {isSubmitting ? (
                        <div className="dot-spinner">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      ) : (
                        <motion.div
                          whileHover={{ x: 2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Send className="w-5 h-5" />
                        </motion.div>
                      )}
                    </Button>
                  </motion.div>
                </div>
                
                <motion.p 
                  className="text-xs text-slate-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                >
                  No spam. Unsubscribe anytime.
                </motion.p>
              </motion.form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
