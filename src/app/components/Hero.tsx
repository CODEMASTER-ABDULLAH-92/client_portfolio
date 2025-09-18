"use client";
import React from "react";
import sun from "../../../public/sun.svg";
import crown from "../../../public/crown.svg";
import Image from "next/image";
import waseem from "../../../public/waseem.png";

const Hero = () => {
  return (
    <section className=" w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20 md:pb-24">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-snug sm:leading-tight md:leading-tight text-[#909090]">
          Hi,{" "}
          <span className="text-white sm:inline relative">
            I`m Waseem Riaz 
            <Image 
              alt="waseem" 
              src={waseem} 
              className="h-10 w-10 md:h-16 md:w-16 rounded-full border-2 border-[#ea8b61] inline-block ml-2 align-middle" 
            />
          </span>{" "}
          a Website Developer with{" "}
          <span className="text-white">14+ years of experience</span> building
          scalable, high-performance{" "}
          <span className="text-white">websites & web applications.</span>
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
            "Best Full-Stack Developer",
            "Top Rated Freelancer",
            "Open Source Contributor",
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
          <button className="bg-gradient-to-r from-[#ea8b61] to-[#d87a52] text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-[#ea8b61]/20 transition-all duration-300">
            View My Projects
          </button>
          <button className="border border-[#2e2e2e] text-[#909090] px-6 py-3 rounded-xl font-medium hover:border-[#ea8b61] hover:text-white transition-all duration-300">
            Hire Me
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 sm:mt-16">
          {[
            { value: "14+", label: "Years Coding Experience" },
            { value: "300+", label: "Websites Developed" },
            { value: "120+", label: "Happy Clients" },
            { value: "99%", label: "Project Success Rate" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
              <div className="text-[#909090] text-sm sm:text-base mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
