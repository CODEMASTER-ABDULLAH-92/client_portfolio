"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: ""
      });
    }, 2000);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 md:py-16 lg:py-20">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-14">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Get Your <span className="text-[#ea8b61]">Quote</span>
          </h2>
          <p className="text-[#909090] mt-3 text-sm md:text-base max-w-xl">
            Ready to start your project? Fill out the form below and I`ll get back to you within 24 hours.
          </p>
        </div>

        {/* Stylish Divider - Only show on larger screens */}
        <hr className="hidden lg:block flex-1 max-w-xs mt-3 mb-4 ml-6 border-t border-[#ea8b61] opacity-70" />
        
        {/* Decorative elements */}
        <div className="hidden md:flex items-center gap-2">
          <svg
            className="w-5 h-5 text-[#ea8b61]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
          </svg>
          <span className="text-white text-sm ml-2">Quick Response</span>
        </div>
      </div>

      {/* Contact Form Container */}
      <div className="relative border border-[#2e2e2e] rounded-2xl overflow-hidden p-6 md:p-8 bg-gradient-to-br from-[#121212] to-[#0a0a0a] shadow-2xl shadow-[#ea8b61]/10">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-[#1a1a1a] border border-[#2e2e2e] rounded-xl px-4 py-3 text-white placeholder-[#666] focus:border-[#ea8b61] focus:ring-2 focus:ring-[#ea8b61]/20 transition-all duration-300"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#1a1a1a] border border-[#2e2e2e] rounded-xl px-4 py-3 text-white placeholder-[#666] focus:border-[#ea8b61] focus:ring-2 focus:ring-[#ea8b61]/20 transition-all duration-300"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-white text-sm font-medium mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-[#1a1a1a] border border-[#2e2e2e] rounded-xl px-4 py-3 text-white placeholder-[#666] focus:border-[#ea8b61] focus:ring-2 focus:ring-[#ea8b61]/20 transition-all duration-300"
                placeholder="Your company name"
              />
            </div>

            <div>
              <label htmlFor="projectType" className="block text-white text-sm font-medium mb-2">
                Project Type *
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
                className="w-full bg-[#1a1a1a] border border-[#2e2e2e] rounded-xl px-4 py-3 text-white focus:border-[#ea8b61] focus:ring-2 focus:ring-[#ea8b61]/20 transition-all duration-300"
              >
                <option value="">Select project type</option>
                <option value="website">Website Development</option>
                <option value="ecommerce">E-Commerce Store</option>
                <option value="webapp">Web Application</option>
                <option value="mobile">Mobile App</option>
                <option value="design">UI/UX Design</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div>
              <label htmlFor="budget" className="block text-white text-sm font-medium mb-2">
                Project Budget *
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="w-full bg-[#1a1a1a] border border-[#2e2e2e] rounded-xl px-4 py-3 text-white focus:border-[#ea8b61] focus:ring-2 focus:ring-[#ea8b61]/20 transition-all duration-300"
              >
                <option value="">Select budget range</option>
                <option value="500-1000">$500 - $1,000</option>
                <option value="1000-2500">$1,000 - $2,500</option>
                <option value="2500-5000">$2,500 - $5,000</option>
                <option value="5000-10000">$5,000 - $10,000</option>
                <option value="10000+">$10,000+</option>
              </select>
            </div>

            <div>
              <label htmlFor="timeline" className="block text-white text-sm font-medium mb-2">
                Timeline *
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                required
                className="w-full bg-[#1a1a1a] border border-[#2e2e2e] rounded-xl px-4 py-3 text-white focus:border-[#ea8b61] focus:ring-2 focus:ring-[#ea8b61]/20 transition-all duration-300"
              >
                <option value="">Select timeline</option>
                <option value="urgent">Urgent (1-2 weeks)</option>
                <option value="2-4 weeks">2-4 weeks</option>
                <option value="1-2 months">1-2 months</option>
                <option value="2-3 months">2-3 months</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                Project Details *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-[#1a1a1a] border border-[#2e2e2e] rounded-xl px-4 py-3 text-white placeholder-[#666] focus:border-[#ea8b61] focus:ring-2 focus:ring-[#ea8b61]/20 transition-all duration-300"
                placeholder="Tell me about your project requirements, goals, and any specific features you need..."
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#ea8b61] to-[#d87a52] text-white font-medium py-4 px-6 rounded-xl hover:shadow-lg hover:shadow-[#ea8b61]/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    Get Free Quote
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>

        {/* Success Message */}
        {submitStatus === "success" && (
          <div className="mt-6 p-4 bg-green-900/20 border border-green-800 rounded-xl text-green-400 text-center">
            Thank you for your inquiry! I`ll get back to you within 24 hours.
          </div>
        )}

        {/* Gradient overlays for smoother transitions */}
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-between">
          <div className="h-24 bg-gradient-to-b from-[#121212] to-transparent"></div>
          <div className="h-24 bg-gradient-to-t from-[#121212] to-transparent"></div>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#ea8b61] rounded-tl-2xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#ea8b61] rounded-br-2xl opacity-30"></div>
      </div>

      {/* Additional Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#161616] border border-[#2e2e2e] rounded-2xl p-6 text-center">
          <div className="w-12 h-12 bg-[#ea8b61]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-[#ea8b61]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 className="text-white font-medium mb-2">24h Response Time</h3>
          <p className="text-[#909090] text-sm">Quick response to all inquiries</p>
        </div>

        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#161616] border border-[#2e2e2e] rounded-2xl p-6 text-center">
          <div className="w-12 h-12 bg-[#ea8b61]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-[#ea8b61]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
          <h3 className="text-white font-medium mb-2">Secure & Confidential</h3>
          <p className="text-[#909090] text-sm">Your information is safe with us</p>
        </div>

        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#161616] border border-[#2e2e2e] rounded-2xl p-6 text-center">
          <div className="w-12 h-12 bg-[#ea8b61]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-[#ea8b61]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </div>
          <h3 className="text-white font-medium mb-2">Dedicated Support</h3>
          <p className="text-[#909090] text-sm">Personal assistance throughout</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;