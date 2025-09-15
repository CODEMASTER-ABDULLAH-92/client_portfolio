import React from "react";
import sun from "../../../public/sun.svg";
import crown from "../../../public/crown.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[#1f1f1f] w-full">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-28 pb-20">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-tight text-[#909090]">
          Hi, <span className="text-white">I’m Waseem Riaz</span> a real estate
          agent with{" "}
          <span className="text-white">14 years of experience</span> working
          with <span className="text-white">top agencies.</span>
          <Image
            alt="Sun"
            src={sun}
            className="inline-block ml-3 animate-spin-slow"
            width={45}
            height={45}
          />
        </h1>

        {/* Awards Section */}
        <div className="flex flex-wrap justify-start items-center gap-6 mt-12">
          {[
            "Top Producer Award",
            "Client Choice Award",
            "Community Impact Award",
          ].map((award, index) => (
            <li
              key={index}
              className="list-none flex items-center gap-3 bg-[#2a2a2a] px-4 py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              <Image
                src={crown}
                className="h-6 w-6 object-contain"
                height={24}
                width={24}
                alt="Crown"
              />
              <span className="text-[#909090] text-lg">{award}</span>
            </li>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
