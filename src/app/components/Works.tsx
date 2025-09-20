"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    id: 1,
    title: "WordPress Real Estate Platform",
    desc: "A custom WordPress theme with IDX integration for property listings and advanced search functionality.",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&auto=format&q=80",
    tags: ["WordPress", "PHP", "JavaScript"],
    link: "#"
  },
  {
    id: 2,
    title: "Modern Portfolio Website",
    desc: "A responsive portfolio with smooth animations, dark mode, and CMS integration for blog management.",
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop&auto=format&q=80",
    tags: ["React", "Next.js", "Tailwind CSS"],
    link: "#"
  },
  {
    id: 3,
    title: "E-Commerce Store",
    desc: "A WooCommerce store with custom payment gateway, product filtering, and inventory management.",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&auto=format&q=80",
    tags: ["WooCommerce", "PHP", "jQuery"],
    link: "#"
  },
  {
    id: 4,
    title: "SaaS Application Dashboard",
    desc: "A comprehensive dashboard UI with data visualization, user management, and reporting features.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&auto=format&q=80",
    tags: ["React", "Chart.js", "Firebase"],
    link: "#"
  },
  {
    id: 5,
    title: "Travel Booking Website",
    desc: "A travel booking platform with destination guides, booking system, and user reviews.",
    img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop&auto=format&q=80",
    tags: ["HTML/CSS", "JavaScript", "Node.js"],
    link: "#"
  },
  {
    id: 6,
    title: "Restaurant Reservation System",
    desc: "Online reservation system with table management, menu display, and admin dashboard.",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&auto=format&q=80",
    tags: ["React", "MongoDB", "Express"],
    link: "#"
  },
];

const Works = () => {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className="w-full py-16 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-14">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Featured <span className="text-[#ea8b61]">Projects</span>
            </h2>
            <p className="text-[#909090] mt-3 text-sm md:text-base max-w-xl">
              A selection of my recent work in web development and design. Each project represents
              my commitment to creating visually appealing and highly functional digital experiences.
            </p>
          </div>

          {/* Stylish Divider - Only show on larger screens */}
          <hr className="hidden lg:block flex-1 max-w-xs mt-3 mb-4 ml-6 border-t border-[#ea8b61] opacity-70" />
          
          {/* Decorative elements */}
          <div className="hidden md:flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-5 h-5 text-[#ea8b61]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-white text-sm ml-2">24 Projects</span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#161616] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#2e2e2e] group hover:border-[#ea8b61]/30"
            >
              {/* Project Image */}
              <div className="relative w-full h-52 sm:h-60 overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                {/* Tags */}
                <div className="absolute top-3 right-3 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-[#ea8b61] text-xs text-white px-2.5 py-1 rounded-full opacity-90 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#ea8b61] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[#909090] mt-3 text-sm leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="flex justify-center mt-12 md:mt-16">
          <button className="px-8 py-3.5 bg-gradient-to-r from-[#ea8b61] to-[#d87a52] text-white rounded-xl font-medium hover:shadow-lg hover:shadow-[#ea8b61]/20 transition-all duration-300 flex items-center gap-2">
            View All Projects
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Works;