"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country:"",
    businessName: "",
    issueType: "",
    accountPlatform: "",
    monthlyRevenue: "",
    productCategory: "",
    urgency: "",
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

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          businessName: "",
          issueType: "",
          accountPlatform: "",
          monthlyRevenue: "",
          productCategory: "",
          urgency: "",
          message: "",
          country:""
        });

        toast.success("Thanks for reaching out! Our dropshipping experts will contact you within 24 hours.");
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
    <div id="contact_form" className="w-full max-w-7xl mx-auto px-4 py-12 md:py-16 lg:py-20">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-14">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Get Your <span className="text-[#ea8b61]">Dropshipping</span> Consultation
          </h2>
          <p className="text-[#909090] mt-3 text-sm md:text-base max-w-xl">
            Struggling with your dropshipping or eBay business? Our expert team is here to help. 
            Fill out the form and we`ll get back to you within 24 hours.
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
          <span className="text-white text-sm ml-2">Expert Consultation</span>
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
            placeholder="Your Full Name *"
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded-xl bg-[#1b1b1b] text-white border border-[#333] focus:outline-none focus:border-[#ea8b61] transition"
            required
          />
          
          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email Address *"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded-xl bg-[#1b1b1b] text-white border border-[#333] focus:outline-none focus:border-[#ea8b61] transition"
            required
          />
          
          {/* Phone */}
          <input
            type="tel"
            required
            name="phone"
            placeholder="Phone Number (required)"
            value={formData.phone}
            onChange={handleChange}
            className="p-3 required rounded-xl bg-[#1b1b1b] text-white border border-[#333] focus:outline-none focus:border-[#ea8b61] transition"
          />
          {/* Country */}
          <input
            type="text"
            required
            name="country"
            placeholder="Country (required)"
            value={formData.country}
            onChange={handleChange}
            className="p-3 required rounded-xl bg-[#1b1b1b] text-white border border-[#333] focus:outline-none focus:border-[#ea8b61] transition"
          />
          
          {/* Business Name */}
          <input
            type="text"
            name="businessName"
            placeholder="Business Name (Optional)"
            value={formData.businessName}
            onChange={handleChange}
            className="p-3 rounded-xl bg-[#1b1b1b] text-white border border-[#333] focus:outline-none focus:border-[#ea8b61] transition"
          />

          {/* Issue Type */}
          <select
            name="issueType"
            value={formData.issueType}
            onChange={handleChange}
            className="p-3 rounded-xl bg-[#1b1b1b] text-white border border-[#333] focus:outline-none focus:border-[#ea8b61] transition"
            required
          >
            <option value="">Select Your Issue Type *</option>
            <option value="account-setup">New Account Creation</option>
            <option value="ebay-defect-remove">eBay Defect Remove</option>
            <option value="ebay-negative-remove">eBay Negative Feedback Remove</option>
            <option value="account-suspension">Account Suspension / Policy Violation</option>
            <option value="listing-optimization">Listing Optimization</option>
            <option value="product-sourcing">Product Sourcing</option>
            <option value="order-fulfillment">Order Fulfillment Issues</option>
            <option value="inventory-management">Inventory Management</option>
            <option value="sales-growth">Sales Growth Strategy</option>
            <option value="customer-service">Customer Service Issues</option>
            <option value="policy-compliance">eBay Policy Compliance</option>
            <option value="other">Other</option>
          </select>

          {/* Account Platform */}
          <select
            name="accountPlatform"
            value={formData.accountPlatform}
            onChange={handleChange}
            className="p-3 rounded-xl bg-[#1b1b1b] text-white border border-[#333] focus:outline-none focus:border-[#ea8b61] transition"
          >
            <option value="">Select Your Platform</option>
            <option value="ebay">eBay</option>
            <option value="amazon">Amazon</option>
            <option value="shopify">Shopify</option>
            <option value="walmart">Walmart</option>
            <option value="etsy">Etsy</option>
            <option value="other">Other</option>
          </select>

          {/* Monthly Revenue */}
          <select
            name="monthlyRevenue"
            value={formData.monthlyRevenue}
            onChange={handleChange}
            className="p-3 rounded-xl bg-[#1b1b1b] text-white border border-[#333] focus:outline-none focus:border-[#ea8b61] transition"
          >
            <option value="">Estimated Monthly Revenue</option>
            <option value="0-1000">$0 - $1,000</option>
            <option value="1000-5000">$1,000 - $5,000</option>
            <option value="5000-10000">$5,000 - $10,000</option>
            <option value="10000-50000">$10,000 - $50,000</option>
            <option value="50000+">$50,000+</option>
          </select>

          {/* Product Category */}
          <select
            name="productCategory"
            value={formData.productCategory}
            onChange={handleChange}
            className="p-3 rounded-xl bg-[#1b1b1b] text-white border border-[#333] focus:outline-none focus:border-[#ea8b61] transition"
          >
            <option value="">Primary Product Category</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing & Fashion</option>
            <option value="home-garden">Home & Garden</option>
            <option value="toys">Toys & Hobbies</option>
            <option value="health-beauty">Health & Beauty</option>
            <option value="sports">Sports & Outdoors</option>
            <option value="automotive">Automotive</option>
            <option value="collectibles">Collectibles</option>
            <option value="other">Other</option>
          </select>

          {/* Urgency */}
          <select
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
            className="p-3 rounded-xl bg-[#1b1b1b] text-white border border-[#333] focus:outline-none focus:border-[#ea8b61] transition"
          >
            <option value="">Select Urgency Level</option>
            <option value="standard">Standard (3-5 days)</option>
            <option value="within-week">Within a Week</option>
            <option value="urgent">Urgent (ASAP)</option>
          </select>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Describe your dropshipping/eBay issue in detail... *"
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
                  Get Free Consultation
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

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="mt-6 p-4 bg-green-900/20 border border-green-800 rounded-xl text-green-400 text-center">
            ✅ Thank you for your inquiry! Our dropshipping experts will contact you within 24 hours.
          </div>
        )}
        {submitStatus === "error" && (
          <div className="mt-6 p-4 bg-red-900/20 border border-red-800 rounded-xl text-red-400 text-center">
            ❌ Something went wrong. Please try again later.
          </div>
        )}
      </div>

      {/* Services/Expertise Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
        <div className="p-6 bg-[#121212] border border-[#2e2e2e] rounded-2xl text-center hover:border-[#ea8b61] transition">
          <h3 className="text-lg font-bold text-white mb-2">📧 Email</h3>
          <p className="text-[#909090]">waseemriazoffical@gmail.com</p>
        </div>
        <div className="p-6 bg-[#121212] border border-[#2e2e2e] rounded-2xl text-center hover:border-[#ea8b61] transition">
          <h3 className="text-lg font-bold text-white mb-2">📞 Phone</h3>
          <p className="text-[#909090]">+92 3424886134</p>
        </div>
        <div className="p-6 bg-[#121212] border border-[#2e2e2e] rounded-2xl text-center hover:border-[#ea8b61] transition">
          <h3 className="text-lg font-bold text-white mb-2">🌍 Location</h3>
          <p className="text-[#909090]">Faisalabad, Pakistan</p>
        </div>
      </div>

      {/* Additional Info Section - What We Help With */}
      <div className="mt-10 p-6 bg-[#121212] border border-[#2e2e2e] rounded-2xl">
        <h3 className="text-xl font-bold text-white mb-4 text-center">🚀 How We Can Help Your Dropshipping Business</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-[#909090] text-sm">
          <div className="flex items-center gap-2">
            <span className="text-[#ea8b61]">✓</span> eBay Account Management
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#ea8b61]">✓</span> Listing Optimization
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#ea8b61]">✓</span> Product Sourcing
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#ea8b61]">✓</span> Order Fulfillment
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#ea8b61]">✓</span> Inventory Management
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#ea8b61]">✓</span> Sales Growth Strategy
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#ea8b61]">✓</span> Policy Compliance
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#ea8b61]">✓</span> Customer Service Solutions
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#ea8b61]">✓</span> Account Suspension Recovery
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;