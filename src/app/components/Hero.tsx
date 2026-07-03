"use client";
import React from "react";
import sun from "../../../public/sun.svg";
import crown from "../../../public/crown.svg";
import Image from "next/image";
import waseem from "../../../public/waseem.png";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20 md:pb-24">
        {/* eBay-styled subtitle with multicolored text */}
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4 text-[#909090]">
          <span className="text-[#E53238]">e</span>
          <span className="text-[#0064D2]">B</span>
          <span className="text-[#F5AF02]">a</span>
          <span className="text-[#86B817]">y</span>
          <span className="text-white"> Consultant</span>
          <span className="text-[#909090]"> | </span>
          <span className="text-[#E53238]">e</span>
          <span className="text-[#0064D2]">B</span>
          <span className="text-[#F5AF02]">a</span>
          <span className="text-[#86B817]">y</span>
          <span className="text-white"> Seller</span>
          <span className="text-[#909090]"> | </span>
          <span className="text-white">Dropshipping Specialist</span>
        </p>

        {/* Bio / Introduction */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-snug sm:leading-tight md:leading-tight text-[#909090]">
          Hi, I`m Waseem Riaz, <Image 
              alt="waseem" 
              src={waseem} 
              className="h-10 w-10 md:h-20 md:w-20 rounded-full border-2 border-[#ea8b61] inline-block ml-2 align-middle" 
            /> a professional eCommerce Consultant specializing in{" "}
          <span className="text-white font-medium">          <span className="text-[#E53238]">e</span>
          <span className="text-[#0064D2]">B</span>
          <span className="text-[#F5AF02]">a</span>
          <span className="text-[#86B817]">y</span> store management</span>,{" "}
          <span className="text-white font-medium">product research</span>,{" "}
          <span className="text-white font-medium">listing optimization</span>,{" "}
          <span className="text-white font-medium">dropshipping</span>, and{" "}
          <span className="text-white font-medium">account growth</span>. 
         <Image
            alt="Sun"
            src={sun}
            className="inline-block ml-2 sm:ml-3 animate-spin-slow align-middle"
            width={40}
            height={40}
          />
        </h1>

        {/* Awards Section */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-start items-start gap-4 mt-10 sm:mt-12 md:mt-14">
          {[
            "Top-Rated Seller",
            "eBay Consultant",
            "Dropshipping Expert",
          ].map((award, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-gradient-to-br from-[#1a1a1a] to-[#161616] border border-[#2e2e2e] px-4 py-3 rounded-xl hover:border-[#ea8b61]/30 hover:shadow-lg hover:shadow-[#ea8b61]/5 transition-all duration-300 w-full sm:w-auto"
            >
              <Image
                src={crown}
                className="h-6 w-6 object-contain"
                height={24}
                width={24}
                alt="Crown"
              />
              <span className="text-[#909090] text-base">
                {award}
              </span>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="flex flex-wrap gap-4 mt-10 sm:mt-12">
          <a href="#contact_form" className="bg-gradient-to-r from-[#ea8b61] to-[#d87a52] text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-[#ea8b61]/20 transition-all duration-300">
          Book a free Consultation
          </a>
          <a href="#services" className="border border-[#2e2e2e] text-[#909090] px-6 py-3 rounded-xl font-medium hover:border-[#ea8b61] hover:text-white transition-all duration-300">
            View My Services
          </a>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 sm:mt-16">
          {[
            { value: "3+", label: "Years in E-commerce" },
            { value: "100+", label: "Accounts Managed" },
            { value: "50+", label: "Negative Feedback Removed" },
            { value: "24+", label: "Satisfied Clients" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
              <div className="text-[#909090] text-sm sm:text-base mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            {
title: "Product Research",
description: "Expert in product research across Amazon, Walmart, and eBay, with experience in Amazon order processing, product sourcing, market analysis, and efficient order fulfillment."
            },
            {
              title: "eBay Consultant",
              description: "Specialized in eBay account handling, listing optimization, negative feedback removal, and customer dispute resolution."
            },
            {
              title: "AliExpress & Dropshipping",
              description: "Professional dropshipping management, supplier coordination, product sourcing, and order processing on AliExpress."
            }
          ].map((service, index) => (
            <div key={index} className="bg-gradient-to-br from-[#1a1a1a] to-[#161616] border border-[#2e2e2e] p-6 rounded-xl hover:border-[#ea8b61]/30 transition-all duration-300">
              <h3 className="text-white text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-[#909090] text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;