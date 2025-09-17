"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | "">(
    ""
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus("");

  try {
    const res = await fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    // ✅ Call res.json() only ONCE
    const data = await res.json();

    if (res.ok && data.success) {
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: "",
      });

      toast.success("Thanks for contacting us, we'll reply soon!");
    } else {
      console.error("Backend error:", data?.error || "Unknown error");
      setSubmitStatus("error");
      toast.error("Something went wrong. Please try again later.");
    }
  } catch (err) {
    console.error("Form submit error:", err);
    setSubmitStatus("error");
    toast.error("Internal server issue. Try again after some time.");
  } finally {
    setIsSubmitting(false);
  }
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
            Ready to start your project? Fill out the form below and I`ll get
            back to you within 24 hours.
          </p>
        </div>
        <hr className="hidden lg:block flex-1 max-w-xs mt-3 mb-4 ml-6 border-t border-[#ea8b61] opacity-70" />
        <div className="hidden md:flex items-center gap-2">
          <svg
            className="w-5 h-5 text-[#ea8b61]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
            ></path>
          </svg>
          <span className="text-white text-sm ml-2">Quick Response</span>
        </div>
      </div>

      {/* Contact Form */}
      <div className="relative border border-[#2e2e2e] rounded-2xl overflow-hidden p-6 md:p-8 bg-gradient-to-br from-[#121212] to-[#0a0a0a] shadow-2xl shadow-[#ea8b61]/10">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded-xl bg-[#1b1b1b] text-white border border-[#333] focus:outline-none focus:border-[#ea8b61] transition"
            required
          />
          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded-xl bg-[#1b1b1b] text-white border border-[#333] focus:outline-none focus:border-[#ea8b61] transition"
            required
          />
          {/* Company */}
          <input
            type="text"
            name="company"
            placeholder="Company (Optional)"
            value={formData.company}
            onChange={handleChange}
            className="p-3 rounded-xl bg-[#1b1b1b] text-white border border-[#333] focus:outline-none focus:border-[#ea8b61] transition"
          />
          {/* Project Type */}
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="p-3 rounded-xl bg-[#1b1b1b] text-white border border-[#333] focus:outline-none focus:border-[#ea8b61] transition"
          >
            <option value="">Select Project Type</option>
            <option value="Website">Website</option>
            <option value="Mobile App">Mobile App</option>
            <option value="Dashboard">Dashboard</option>
            <option value="WordPress">Word Press </option>
            <option value="Other">Other</option>
          </select>
          {/* Budget */}
          <input
            type="text"
            name="budget"
            placeholder="Budget (USD)"
            value={formData.budget}
            onChange={handleChange}
            className="p-3 rounded-xl bg-[#1b1b1b] text-white border border-[#333] focus:outline-none focus:border-[#ea8b61] transition"
          />
          {/* Timeline */}
          <input
            type="text"
            name="timeline"
            placeholder="Timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="p-3 rounded-xl bg-[#1b1b1b] text-white border border-[#333] focus:outline-none focus:border-[#ea8b61] transition"
          />
          {/* Message */}
          <textarea
            name="message"
            placeholder="Tell me about your project"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="md:col-span-2 p-3 rounded-xl bg-[#1b1b1b] text-white border border-[#333] focus:outline-none focus:border-[#ea8b61] transition"
            required
          />
          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#ea8b61] to-[#d87a52] text-white font-medium py-4 px-6 rounded-xl hover:shadow-lg hover:shadow-[#ea8b61]/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Get Free Quote
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </>
              )}
            </button>
          </div>
        </form>

        {/* ✅ Status Messages */}
        {submitStatus === "success" && (
          <div className="mt-6 p-4 bg-green-900/20 border border-green-800 rounded-xl text-green-400 text-center">
            ✅ Thank you for your inquiry! I`ll get back to you within 24 hours.
          </div>
        )}
        {submitStatus === "error" && (
          <div className="mt-6 p-4 bg-red-900/20 border border-red-800 rounded-xl text-red-400 text-center">
            ❌ Something went wrong. Please try again later.
          </div>
        )}
      </div>

      {/* 🔥 Your Info Cards — kept EXACTLY as you had */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
        <div className="p-6 bg-[#121212] border border-[#2e2e2e] rounded-2xl text-center hover:border-[#ea8b61] transition">
          <h3 className="text-lg font-bold text-white mb-2">📧 Email</h3>
          <p className="text-[#909090]">infodevabdullah92@gmail.com</p>
        </div>
        <div className="p-6 bg-[#121212] border border-[#2e2e2e] rounded-2xl text-center hover:border-[#ea8b61] transition">
          <h3 className="text-lg font-bold text-white mb-2">📞 Phone</h3>
          <p className="text-[#909090]">+92 300 XXX XXXX</p>
        </div>
        <div className="p-6 bg-[#121212] border border-[#2e2e2e] rounded-2xl text-center hover:border-[#ea8b61] transition">
          <h3 className="text-lg font-bold text-white mb-2">🌍 Location</h3>
          <p className="text-[#909090]">Faisalabad, Pakistan</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
