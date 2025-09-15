// "use client";
// import Image from "next/image";
// import React from "react";

// const testimonials = [
//   {
//     id: 15,
//     name: "Khadija Siddiqui",
//     message:
//       "I use it daily and have never faced any issues. It’s super stable, which is crucial for my workflow. Highly recommended!",
//     img: "https://i.pravatar.cc/150?img=15",
//   },
//   {
//     id: 16,
//     name: "Danish Mehmood",
//     message:
//       "The onboarding process was quick and easy. Within minutes I was all set and now it’s a part of my day-to-day work life.",
//     img: "https://i.pravatar.cc/150?img=16",
//   },
//   {
//     id: 17,
//     name: "Noor Fatima",
//     message:
//       "This platform actually makes work enjoyable. It's clean, responsive, and I’ve become a fan of how user-friendly it is.",
//     img: "https://i.pravatar.cc/150?img=17",
//   },
// ];

// const Testimonials = () => {
//   return (
//     <div className="w-full max-w-7xl h-[700px] mx-auto px-4 ">
//       <div className="flex my-4 flex-col sm:flex-row sm:items-center gap-1">
//         <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
//           What Our Users <span className="text-[#ea8b61]">Says</span>
//         </h2>

//         {/* Stylish Divider */}
//         <hr className="flex-1 mt-3 ml-1 border-[#ea8b61] opacity-100" />
//       </div>
//       <div className="relative border-[#2e2e2e] rounded-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-[500px] overflow-hidden border p-4">
//         {/* First Column */}
//         <div className="flex flex-col gap-4 animate-marquee py-4">
//           {[...testimonials, ...testimonials].map((item, index) => (
//             <div
//               key={`col1-${index}`}
//               className="bg-transparent border p-4 rounded-2xl border-[#2e2e2e] w-full max-w-[280px] mx-auto"
//             >
//               <p className="text-white text-sm leading-relaxed">
//                 {item.message}
//               </p>
//               <div className="mt-5 flex justify-start items-center gap-2">
//                 <Image
//                   width={40}
//                   height={40}
//                   alt={item.name}
//                   className="h-10 w-10 grayscale rounded-full object-cover"
//                   src={item.img}
//                 />
//                 <span className="text-[#909090] font-medium">{item.name}</span>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Second Column - reversed animation */}
//         <div className="hidden md:flex flex-col gap-4 animate-marquee-reverse py-4">
//           {[...testimonials, ...testimonials].map((item, index) => (
//             <div
//               key={`col2-${index}`}
//               className="bg-transparent border p-4 rounded-2xl border-[#2e2e2e] w-full max-w-[280px] mx-auto"
//             >
//               <p className="text-white text-sm leading-relaxed">
//                 {item.message}
//               </p>
//               <div className="mt-5 flex justify-start items-center gap-2">
//                 <Image
//                   width={40}
//                   height={40}
//                   alt={item.name}
//                   className="h-10 w-10 grayscale rounded-full object-cover"
//                   src={item.img}
//                 />
//                 <span className="text-[#909090] font-medium">{item.name}</span>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Third Column - hidden on smaller screens */}
//         <div className="hidden lg:flex flex-col gap-4 animate-marquee py-4">
//           {[...testimonials, ...testimonials].map((item, index) => (
//             <div
//               key={`col3-${index}`}
//               className="bg-transparent border p-4 rounded-2xl border-[#2e2e2e] w-full max-w-[280px] mx-auto"
//             >
//               <p className="text-white text-sm leading-relaxed">
//                 {item.message}
//               </p>
//               <div className="mt-5 flex justify-start items-center gap-2">
//                 <Image
//                   width={40}
//                   height={40}
//                   alt={item.name}
//                   className="h-10 w-10 grayscale rounded-full object-cover"
//                   src={item.img}
//                 />
//                 <span className="text-[#909090] font-medium">{item.name}</span>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Gradient overlays for smoother transitions */}
//         <div className="pointer-events-none absolute inset-0 flex flex-col justify-between">
//           <div className="h-20 bg-gradient-to-b from-[#121212] to-transparent"></div>
//           <div className="h-20 bg-gradient-to-t from-[#121212] to-transparent"></div>
//         </div>

//         <style jsx>{`
//           @keyframes marquee {
//             0% {
//               transform: translateY(0);
//             }
//             100% {
//               transform: translateY(-50%);
//             }
//           }

//           @keyframes marquee-reverse {
//             0% {
//               transform: translateY(-50%);
//             }
//             100% {
//               transform: translateY(0);
//             }
//           }

//           .animate-marquee {
//             animation: marquee 20s linear infinite;
//           }

//           .animate-marquee-reverse {
//             animation: marquee-reverse 20s linear infinite;
//           }

//           .animate-marquee:hover,
//           .animate-marquee-reverse:hover {
//             animation-play-state: paused;
//           }
//         `}</style>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;


"use client";
import Image from "next/image";
import React from "react";

const testimonials = [
  {
    id: 15,
    name: "Khadija Siddiqui",
    message:
      "I use it daily and have never faced any issues. It's super stable, which is crucial for my workflow. Highly recommended!",
    img: "https://i.pravatar.cc/150?img=15",
  },
  {
    id: 16,
    name: "Danish Mehmood",
    message:
      "The onboarding process was quick and easy. Within minutes I was all set and now it's a part of my day-to-day work life.",
    img: "https://i.pravatar.cc/150?img=16",
  },
  {
    id: 17,
    name: "Noor Fatima",
    message:
      "This platform actually makes work enjoyable. It's clean, responsive, and I've become a fan of how user-friendly it is.",
    img: "https://i.pravatar.cc/150?img=17",
  },
  {
    id: 18,
    name: "Ali Hassan",
    message:
      "The customer support is exceptional. They're always quick to respond and incredibly helpful with any issues.",
    img: "https://i.pravatar.cc/150?img=18",
  },
  {
    id: 19,
    name: "Fatima Khan",
    message:
      "The features are exactly what my team needed to collaborate effectively. It has improved our productivity significantly.",
    img: "https://i.pravatar.cc/150?img=19",
  },
];

const Testimonials = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 md:py-16 lg:py-20">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-14">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            What Our Users <span className="text-[#ea8b61]">Say</span>
          </h2>
          <p className="text-[#909090] mt-3 text-sm md:text-base max-w-xl">
            Discover why thousands of professionals trust our platform daily
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
          <span className="text-white text-sm ml-2">4.9/5</span>
        </div>
      </div>

      {/* Testimonials Container */}
      <div className="relative border border-[#2e2e2e] rounded-2xl overflow-hidden p-6 bg-gradient-to-br from-[#121212] to-[#0a0a0a] shadow-2xl shadow-[#ea8b61]/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-[500px] gap-6">
          {/* First Column */}
          <div className="flex flex-col gap-6 animate-marquee py-4">
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={`col1-${index}`}
                className="bg-gradient-to-br from-[#1a1a1a] to-[#161616] border border-[#2e2e2e] p-5 rounded-2xl w-full max-w-[300px] mx-auto transition-all duration-300 hover:border-[#ea8b61]/30 hover:shadow-lg hover:shadow-[#ea8b61]/5"
              >
                <div className="flex items-start mb-4">
                  <div className="text-[#ea8b61] text-2xl mr-2">"</div>
                  <p className="text-white text-sm leading-relaxed">
                    {item.message}
                  </p>
                </div>
                <div className="mt-5 flex justify-start items-center gap-3">
                  <div className="relative">
                    <Image
                      width={44}
                      height={44}
                      alt={item.name}
                      className="h-11 w-11 grayscale rounded-full object-cover border border-[#2e2e2e]"
                      src={item.img}
                    />
                    <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-[#ea8b61] border-2 border-[#161616]"></div>
                  </div>
                  <div>
                    <span className="text-white font-medium block">{item.name}</span>
                    <span className="text-[#909090] text-xs">Verified User</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Column - reversed animation */}
          <div className="hidden md:flex flex-col gap-6 animate-marquee-reverse py-4">
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={`col2-${index}`}
                className="bg-gradient-to-br from-[#1a1a1a] to-[#161616] border border-[#2e2e2e] p-5 rounded-2xl w-full max-w-[300px] mx-auto transition-all duration-300 hover:border-[#ea8b61]/30 hover:shadow-lg hover:shadow-[#ea8b61]/5"
              >
                <div className="flex items-start mb-4">
                  <div className="text-[#ea8b61] text-2xl mr-2">"</div>
                  <p className="text-white text-sm leading-relaxed">
                    {item.message}
                  </p>
                </div>
                <div className="mt-5 flex justify-start items-center gap-3">
                  <div className="relative">
                    <Image
                      width={44}
                      height={44}
                      alt={item.name}
                      className="h-11 w-11 grayscale rounded-full object-cover border border-[#2e2e2e]"
                      src={item.img}
                    />
                    <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-[#ea8b61] border-2 border-[#161616]"></div>
                  </div>
                  <div>
                    <span className="text-white font-medium block">{item.name}</span>
                    <span className="text-[#909090] text-xs">Verified User</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Third Column - hidden on smaller screens */}
          <div className="hidden lg:flex flex-col gap-6 animate-marquee py-4">
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={`col3-${index}`}
                className="bg-gradient-to-br from-[#1a1a1a] to-[#161616] border border-[#2e2e2e] p-5 rounded-2xl w-full max-w-[300px] mx-auto transition-all duration-300 hover:border-[#ea8b61]/30 hover:shadow-lg hover:shadow-[#ea8b61]/5"
              >
                <div className="flex items-start mb-4">
                  <div className="text-[#ea8b61] text-2xl mr-2">"</div>
                  <p className="text-white text-sm leading-relaxed">
                    {item.message}
                  </p>
                </div>
                <div className="mt-5 flex justify-start items-center gap-3">
                  <div className="relative">
                    <Image
                      width={44}
                      height={44}
                      alt={item.name}
                      className="h-11 w-11 grayscale rounded-full object-cover border border-[#2e2e2e]"
                      src={item.img}
                    />
                    <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-[#ea8b61] border-2 border-[#161616]"></div>
                  </div>
                  <div>
                    <span className="text-white font-medium block">{item.name}</span>
                    <span className="text-[#909090] text-xs">Verified User</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient overlays for smoother transitions */}
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-between">
          <div className="h-24 bg-gradient-to-b from-[#121212] to-transparent"></div>
          <div className="h-24 bg-gradient-to-t from-[#121212] to-transparent"></div>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#ea8b61] rounded-tl-2xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#ea8b61] rounded-br-2xl opacity-30"></div>

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
            animation: marquee 25s linear infinite;
          }

          .animate-marquee-reverse {
            animation: marquee-reverse 25s linear infinite;
          }

          .animate-marquee:hover,
          .animate-marquee-reverse:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>

      {/* Call to action */}
      <div className="flex justify-center mt-10">
        <button className="px-6 py-3 bg-gradient-to-r from-[#ea8b61] to-[#d87a52] text-white rounded-lg font-medium hover:shadow-lg hover:shadow-[#ea8b61]/20 transition-all duration-300">
          Read More Stories
        </button>
      </div>
    </div>
  );
};

export default Testimonials;