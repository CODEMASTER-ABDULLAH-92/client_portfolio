"use client";
import Image from "next/image";
import React from "react";

const testimonials = [
  {
    id: 15,
    name: "Khadija Siddiqui",
    message:
      "I use it daily and have never faced any issues. It’s super stable, which is crucial for my workflow. Highly recommended!",
    img: "https://i.pravatar.cc/150?img=15",
  },
  {
    id: 16,
    name: "Danish Mehmood",
    message:
      "The onboarding process was quick and easy. Within minutes I was all set and now it’s a part of my day-to-day work life.",
    img: "https://i.pravatar.cc/150?img=16",
  },
  {
    id: 17,
    name: "Noor Fatima",
    message:
      "This platform actually makes work enjoyable. It's clean, responsive, and I’ve become a fan of how user-friendly it is.",
    img: "https://i.pravatar.cc/150?img=17",
  },
];

const Testimonials = () => {
  return (
    <div className="w-full max-w-7xl h-[700px] mx-auto px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
        What Our Users Say
      </h2>
      
      <div className="relative border-[#2e2e2e] rounded-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-[500px] overflow-hidden border p-4">
        {/* First Column */}
        <div className="flex flex-col gap-4 animate-marquee py-4">
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={`col1-${index}`}
              className="bg-transparent border p-4 rounded-2xl border-[#2e2e2e] w-full max-w-[280px] mx-auto"
            >
              <p className="text-white text-sm leading-relaxed">{item.message}</p>
              <div className="mt-5 flex justify-start items-center gap-2">
                <Image
                  width={40}
                  height={40}
                  alt={item.name}
                  className="h-10 w-10 grayscale rounded-full object-cover"
                  src={item.img}
                />
                <span className="text-[#909090] font-medium">{item.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Second Column - reversed animation */}
        <div className="hidden md:flex flex-col gap-4 animate-marquee-reverse py-4">
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={`col2-${index}`}
              className="bg-transparent border p-4 rounded-2xl border-[#2e2e2e] w-full max-w-[280px] mx-auto"
            >
              <p className="text-white text-sm leading-relaxed">{item.message}</p>
              <div className="mt-5 flex justify-start items-center gap-2">
                <Image
                  width={40}
                  height={40}
                  alt={item.name}
                  className="h-10 w-10 grayscale rounded-full object-cover"
                  src={item.img}
                />
                <span className="text-[#909090] font-medium">{item.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Third Column - hidden on smaller screens */}
        <div className="hidden lg:flex flex-col gap-4 animate-marquee py-4">
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={`col3-${index}`}
              className="bg-transparent border p-4 rounded-2xl border-[#2e2e2e] w-full max-w-[280px] mx-auto"
            >
              <p className="text-white text-sm leading-relaxed">{item.message}</p>
              <div className="mt-5 flex justify-start items-center gap-2">
                <Image
                  width={40}
                  height={40}
                  alt={item.name}
                  className="h-10 w-10 grayscale rounded-full object-cover"
                  src={item.img}
                />
                <span className="text-[#909090] font-medium">{item.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient overlays for smoother transitions */}
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-between">
          <div className="h-20 bg-gradient-to-b from-[#121212] to-transparent"></div>
          <div className="h-20 bg-gradient-to-t from-[#121212] to-transparent"></div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-50%);
            }
          }
          
          @keyframes marquee-reverse {
            0% {
              transform: translateY(-50%);
            }
            100% {
              transform: translateY(0);
            }
          }
          
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
          
          .animate-marquee-reverse {
            animation: marquee-reverse 20s linear infinite;
          }
          
          .animate-marquee:hover, 
          .animate-marquee-reverse:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Testimonials;