
import React, { useState } from "react";
import { Contact } from "@/api/entities";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function BookDemo() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    company: "",
    position: "",
    company_size: "",
    interest: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await Contact.create({
        ...formData,
        source: "demo_request",
        status: "new"
      });
      setIsSuccess(true);
    } catch (error) {
      console.error("Form submission error:", error);
    }

    setIsSubmitting(false);
  };

  if (isSuccess) {
    return (
      <div className="min-h-[80vh] bg-white flex items-center justify-center py-20 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto text-center space-y-6"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800">Demo Request Sent!</h1>
          <p className="text-slate-600 leading-relaxed">
            Thank you. Our journey partners will review your request and contact you within 24 hours to schedule your personalized session.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-slate-800 mb-4 capitalize">
            book your personalized demo
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            see the human+ framework in action. let's explore how we can help you achieve your organization's specific talent and culture goals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white border border-slate-200/80 rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="first_name">First Name *</Label>
                  <Input id="first_name" value={formData.first_name} onChange={(e) => handleChange('first_name', e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last_name">Last Name *</Label>
                  <Input id="last_name" value={formData.last_name} onChange={(e) => handleChange('last_name', e.target.value)} required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Work Email *</Label>
                <Input id="email" type="email" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} required />
              </div>
               <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name *</Label>
                  <Input id="company" value={formData.company} onChange={(e) => handleChange('company', e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position">Your Position *</Label>
                  <Input id="position" value={formData.position} onChange={(e) => handleChange('position', e.target.value)} required />
                </div>
              </div>
               <div className="grid md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                  <Label>Company Size</Label>
                  <Select onValueChange={(value) => handleChange('company_size', value)}>
                    <SelectTrigger><SelectValue placeholder="Select company size" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-50">1-50 employees</SelectItem>
                      <SelectItem value="51-200">51-200 employees</SelectItem>
                      <SelectItem value="201-500">201-500 employees</SelectItem>
                      <SelectItem value="501-1000">501-1000 employees</SelectItem>
                      <SelectItem value="1000+">1000+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Primary Interest</Label>
                  <Select onValueChange={(value) => handleChange('interest', value)}>
                    <SelectTrigger><SelectValue placeholder="What are you focused on?" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="human+design">human+design (strategy)</SelectItem>
                      <SelectItem value="human+assist">human+assist (technology)</SelectItem>
                      <SelectItem value="human+insight">human+insight (data)</SelectItem>
                      <SelectItem value="human+culture">human+culture (ex)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">What would you like to solve?</Label>
                <Textarea id="message" value={formData.message} onChange={(e) => handleChange('message', e.target.value)} />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg h-12">
                {isSubmitting ? (
                  <div className="dot-spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                ) : "Submit Request"}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
