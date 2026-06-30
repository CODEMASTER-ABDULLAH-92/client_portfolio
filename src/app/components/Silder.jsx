// // // "use client";
// // // import React from "react";
// // // import {
// // // //   SiAmazon,
// // //   SiEbay,
// // // //   SiWalmart,
// // //   SiAliexpress,
// // //   SiEtsy,
// // //   SiShopify,
// // //   SiTarget,
// // // } from "react-icons/si";

// // // // Real brand marks via react-icons (Simple Icons set) — these are
// // // // open-source SVG icon packs (MIT/CC0) built exactly for this use case,
// // // // so we get accurate, scalable logos without shipping raster images
// // // // scraped from the web. Colors below match each brand's official hex.
// // // const platforms = [
// // // //   { name: "Amazon", Icon: SiAmazon, color: "#FF9900" },
// // //   { name: "eBay", Icon: SiEbay, color: "#E53238" },
// // // //   { name: "Walmart", Icon: SiWalmart, color: "#0071CE" },
// // //   { name: "AliExpress", Icon: SiAliexpress, color: "#FF4747" },
// // //   { name: "Etsy", Icon: SiEtsy, color: "#F45800" },
// // //   { name: "Shopify", Icon: SiShopify, color: "#95BF47" },
// // //   { name: "Target", Icon: SiTarget, color: "#CC0000" },
// // // ];

// // // const LogoSlider = () => {
// // //   // Duplicate the set so the strip can loop seamlessly at -50%.
// // //   const track = [...platforms, ...platforms];

// // //   return (
// // //     <section className="w-full bg-[#0d0d0d] py-12 sm:py-16">
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //         <p className="text-center text-xs sm:text-sm uppercase tracking-[0.2em] text-[#909090] mb-8">
// // //           Trusted experience across leading marketplaces
// // //         </p>
// // //       </div>

// // //       <div className="relative overflow-hidden">
// // //         {/* Edge fades so logos dissolve in/out instead of cutting off */}
// // //         <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#0d0d0d] to-transparent z-10" />
// // //         <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#0d0d0d] to-transparent z-10" />

// // //         <div className="flex w-max animate-marquee">
// // //           {track.map(({ name, Icon, color }, index) => (
// // //             <div
// // //               key={`${name}-${index}`}
// // //               className="group flex items-center gap-3 mx-4 sm:mx-6 px-6 sm:px-8 py-4 sm:py-5 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#161616] border border-[#2e2e2e] hover:border-[#ea8b61]/30 transition-colors duration-300 shrink-0"
// // //             >
// // //               <Icon
// // //                 size={28}
// // //                 style={{ color }}
// // //                 className="shrink-0 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
// // //                 aria-hidden="true"
// // //               />
// // //               <span className="text-base sm:text-lg font-semibold tracking-tight text-white whitespace-nowrap">
// // //                 {name}
// // //               </span>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       <style jsx>{`
// // //         @keyframes marquee {
// // //           from {
// // //             transform: translateX(100%);
// // //           }
// // //           to {
// // //             transform: translateX(-100%);
// // //           }
// // //         }
// // //         .animate-marquee {
// // //           animation: marquee 28s linear infinite;
// // //         }
// // //         .relative:hover .animate-marquee {
// // //           animation-play-state: paused;
// // //         }
// // //         @media (prefers-reduced-motion: reduce) {
// // //           .animate-marquee {
// // //             animation: none;
// // //           }
// // //         }
// // //       `}</style>
// // //     </section>
// // //   );
// // // };

// // // export default LogoSlider;


// // "use client";
// // import React from "react";

// // // Real official brand marks served from the Simple Icons CDN
// // // (https://cdn.simpleicons.org) — this avoids npm package version
// // // mismatches (some marks like Amazon/Walmart weren't resolving from
// // // react-icons) and always returns the current, correct logo SVG,
// // // pre-colored to each brand's official hex.
// // const platforms = [
// //   { name: "Amazon", slug: "amazon", color: "FF9900" },
// //   { name: "eBay", slug: "ebay", color: "E53238" },
// //   { name: "Walmart", slug: "walmart", color: "0071CE" },
// //   { name: "AliExpress", slug: "aliexpress", color: "FF4747" },
// //   { name: "Etsy", slug: "etsy", color: "F45800" },
// //   { name: "Shopify", slug: "shopify", color: "95BF47" },
// //   { name: "Target", slug: "target", color: "CC0000" },
// // ];

// // const LogoSlider = () => {
// //   // Duplicate the set so the strip can loop seamlessly at -50%.
// //   const track = [...platforms, ...platforms];

// //   return (
// //     <section className="w-full bg-[#0d0d0d] py-12 sm:py-16">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <p className="text-center text-xs sm:text-sm uppercase tracking-[0.2em] text-[#909090] mb-8">
// //           Trusted experience across leading marketplaces
// //         </p>
// //       </div>

// //       <div className="relative overflow-hidden">
// //         {/* Edge fades so logos dissolve in/out instead of cutting off */}
// //         <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#0d0d0d] to-transparent z-10" />
// //         <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#0d0d0d] to-transparent z-10" />

// //         <div className="flex w-max animate-marquee">
// //           {track.map(({ name, slug, color }, index) => (
// //             <div
// //               key={`${name}-${index}`}
// //               className="group flex items-center gap-3 mx-4 sm:mx-6 px-6 sm:px-8 py-4 sm:py-5 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#161616] border border-[#2e2e2e] hover:border-[#ea8b61]/30 transition-colors duration-300 shrink-0"
// //             >
// //               {/* eslint-disable-next-line @next/next/no-img-element */}
// //               <img
// //                 src={`https://cdn.simpleicons.org/${slug}/${color}`}
// //                 alt={`${name} logo`}
// //                 width={28}
// //                 height={28}
// //                 className="shrink-0 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
// //                 loading="lazy"
// //               />
// //               <span className="text-base sm:text-lg font-semibold tracking-tight text-white whitespace-nowrap">
// //                 {name}
// //               </span>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       <style jsx>{`
// //         @keyframes marquee {
// //           from {
// //             transform: translateX(0);
// //           }
// //           to {
// //             transform: translateX(-100%);
// //           }
// //         }
// //         .animate-marquee {
// //           animation: marquee 28s linear infinite;
// //         }
// //         .relative:hover .animate-marquee {
// //           animation-play-state: paused;
// //         }
// //         @media (prefers-reduced-motion: reduce) {
// //           .animate-marquee {
// //             animation: none;
// //           }
// //         }
// //       `}</style>
// //     </section>
// //   );
// // };

// // export default LogoSlider;




// "use client";
// import React from "react";
// import Image from "next/image";

// // Real official brand marks served from the Simple Icons CDN
// // (https://cdn.simpleicons.org) — this avoids npm package version
// // mismatches and always returns the current, correct logo SVG,
// // pre-colored to each brand's official hex.
// const platforms = [
//   { name: "Amazon", slug: "amazon", color: "FF9900" },
//   { name: "eBay", slug: "ebay", color: "E53238" },
//   { name: "Walmart", slug: "walmart", color: "0071CE" },
//   { name: "AliExpress", slug: "aliexpress", color: "FF4747" },
//   { name: "Etsy", slug: "etsy", color: "F45800" },
//   { name: "Shopify", slug: "shopify", color: "95BF47" },
//   { name: "Target", slug: "target", color: "CC0000" },
// ];

// const LogoSlider = () => {
//   // Triple the set to ensure smooth looping with enough items
//   const track = [...platforms, ...platforms, ...platforms];

//   return (
//     <section className="w-full bg-[#0d0d0d] py-12 sm:py-16 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <p className="text-center text-xs sm:text-sm uppercase tracking-[0.2em] text-[#909090] mb-8">
//           Trusted experience across leading marketplaces
//         </p>
//       </div>

//       <div className="relative overflow-hidden">
//         {/* Edge fades so logos dissolve in/out instead of cutting off */}
//         <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#0d0d0d] to-transparent z-10" />
//         <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#0d0d0d] to-transparent z-10" />

//         <div className="flex w-max animate-marquee">
//           {track.map(({ name, slug, color }, index) => (
//             <div
//               key={`${name}-${index}`}
//               className="group flex items-center gap-3 mx-4 sm:mx-6 px-6 sm:px-8 py-4 sm:py-5 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#161616] border border-[#2e2e2e] hover:border-[#ea8b61]/30 transition-colors duration-300 shrink-0"
//             >
//               <div className="relative w-7 h-7 shrink-0">
//                 <img
//                   src={`https://cdn.simpleicons.org/${slug}/${color}`}
//                   alt={`${name} logo`}
//                   className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
//                   loading="lazy"
//                 />
//               </div>
//               <span className="text-base sm:text-lg font-semibold tracking-tight text-white whitespace-nowrap">
//                 {name}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes marquee {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-33.33%);
//           }
//         }
//         .animate-marquee {
//           animation: marquee 30s linear infinite;
//           width: max-content;
//         }
//         .relative:hover .animate-marquee {
//           animation-play-state: paused;
//         }
//         @media (prefers-reduced-motion: reduce) {
//           .animate-marquee {
//             animation: none;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default LogoSlider;





"use client";
import React from "react";
import {
  SiEbay,
//   SiWalmart,
  SiAliexpress,
  SiEtsy,
  SiShopify,
  SiTarget,
} from "react-icons/si";
import { FaAmazon } from "react-icons/fa";

const platforms = [
//   { name: "Amazon", Icon: FaAmazon, color: "#FF9900" },
  { name: "eBay", Icon: SiEbay, color: "#E53238" },
//   { name: "Walmart", Icon: SiWalmart, color: "#0071CE" },
  { name: "AliExpress", Icon: SiAliexpress, color: "#FF4747" },
  { name: "Etsy", Icon: SiEtsy, color: "#F45800" },
  { name: "Shopify", Icon: SiShopify, color: "#95BF47" },
  { name: "Target", Icon: SiTarget, color: "#CC0000" },
];

const LogoSlider = () => {
  // Triple the set for smooth looping
  const track = [...platforms, ...platforms, ...platforms];

  return (
    <section className="w-full bg-[#0d0d0d] py-12 sm:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs sm:text-sm uppercase tracking-[0.2em] text-[#909090] mb-8">
          Trusted experience across leading marketplaces
        </p>
      </div>

      <div className="relative overflow-hidden">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#0d0d0d] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#0d0d0d] to-transparent z-10" />

        <div className="flex w-max animate-marquee">
          {track.map(({ name, Icon, color }, index) => (
            <div
              key={`${name}-${index}`}
              className="group flex items-center gap-3 mx-4 sm:mx-6 px-6 sm:px-8 py-4 sm:py-5 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#161616] border border-[#2e2e2e] hover:border-[#ea8b61]/30 transition-colors duration-300 shrink-0"
            >
              <Icon
                size={28}
                style={{ color }}
                className="shrink-0 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
              />
              <span className="text-base sm:text-lg font-semibold tracking-tight text-white whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: max-content;
        }
        .relative:hover .animate-marquee {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default LogoSlider;