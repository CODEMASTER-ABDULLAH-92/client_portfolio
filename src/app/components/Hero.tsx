"use client";
import React from "react";
import sun from "../../../public/sun.svg";
import crown from "../../../public/crown.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[#1f1f1f] w-full">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10 lg:px-16 pt-24 sm:pt-28 pb-16 sm:pb-20">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-snug sm:leading-tight text-[#909090]">
          Hi,{" "}
          <span className="text-white block sm:inline">
            I’m Waseem Riaz
          </span>{" "}
          a real estate agent with{" "}
          <span className="text-white">14 years of experience</span> working
          with{" "}
          <span className="text-white">top agencies.</span>
          <Image
            alt="Sun"
            src={sun}
            className="inline-block ml-2 sm:ml-3 animate-spin-slow align-middle"
            width={40}
            height={40}
          />
        </h1>

        {/* Awards Section */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-start items-start sm:items-center gap-4 sm:gap-6 mt-10 sm:mt-12">
          {[
            "Top Producer Award",
            "Client Choice Award",
            "Community Impact Award",
          ].map((award, index) => (
            <li
              key={index}
              className="list-none flex items-center gap-3 bg-[#2a2a2a] px-4 py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto"
            >
              <Image
                src={crown}
                className="h-6 w-6 object-contain"
                height={24}
                width={24}
                alt="Crown"
              />
              <span className="text-[#909090] text-base sm:text-lg">
                {award}
              </span>
            </li>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
