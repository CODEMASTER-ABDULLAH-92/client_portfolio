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
    <section ref={sectionRef} className=" w-full py-20 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-16">
        {/* Section Header */}
        <div className="section-heading text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Featured <span className="text-[#ea8b61]">Projects</span>
          </h2>
          <p className="text-gray-400 mt-4 sm:mt-6 text-base sm:text-lg max-w-3xl leading-relaxed mx-auto md:mx-0">
            A selection of my recent work in web development and design. Each project represents
            my commitment to creating visually appealing and highly functional digital experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-14">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gradient-to-b from-[#1f1f1f] to-[#171717] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-800 group"
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
                      className="bg-[#ea8b61] text-[10px] sm:text-xs text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full opacity-90"
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
                <p className="text-gray-400 mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed">
                  {project.desc}
                </p>

                <a
                  href={project.link}
                  className="inline-flex items-center mt-4 sm:mt-5 text-[#ea8b61] font-medium text-sm hover:text-white transition-colors duration-300 group/view"
                >
                  View Project
                  <svg
                    className="ml-2 w-4 h-4 group-hover/view:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
