// // import React from "react";
// // import Link from "next/link";
// // const Footer = () => {
// //   return (
// //     <div>
// //         <hr  className="text-gray-400 mb-10"/>
// //       <div className="flex justify-between items-center">

// //         <Link
// //           className="text-white font-semibold text-2xl tracking-wide hover:opacity-80 transition"
// //           href="/"
// //         >
// //           Waseem{" "}
// //           <span className="bg-[#ea8b61] text-black py-[1px] px-2 rounded-md">
// //             Riaz
// //           </span>
// //         </Link>
// //         <div>
// //             gitHub
// //             facebook
// //             insta
// //             link
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Footer;

// import React from "react";
// import Link from "next/link";
// import { FaGithub, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-[#1f1f1f] text-gray-400 mt-20">
//       <hr className="border-gray-700 opacity-40 mb-10" />

//       <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row justify-between items-center gap-6 pb-10">
//         {/* Brand */}
//         <Link
//           className="text-white font-semibold text-2xl tracking-wide hover:opacity-80 transition"
//           href="/"
//         >
//           Waseem{" "}
//           <span className="bg-[#ea8b61] text-black py-[1px] px-2 rounded-md">
//             Riaz
//           </span>
//         </Link>

//         {/* Social Links */}
//         <div className="flex items-center gap-6 text-xl">
//           <Link
//             href="https://github.com/"
//             target="_blank"
//             className="hover:text-[#ea8b61] transition-colors"
//           >
//             <FaGithub />
//           </Link>

//           <Link
//             href="https://facebook.com/"
//             target="_blank"
//             className="hover:text-[#ea8b61] transition-colors"
//           >
//             <FaFacebookF />
//           </Link>

//           <Link
//             href="https://instagram.com/"
//             target="_blank"
//             className="hover:text-[#ea8b61] transition-colors"
//           >
//             <FaInstagram />
//           </Link>

//           <Link
//             href="https://linkedin.com/"
//             target="_blank"
//             className="hover:text-[#ea8b61] transition-colors"
//           >
//             <FaLinkedinIn />
//           </Link>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import Link from "next/link";
import { FaGithub, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] text-gray-400 mt-20">
      {/* Divider */}
      <hr className="border-gray-700 opacity-40 mb-10" />

      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row justify-between items-center gap-6 pb-6">
        {/* Brand */}
        <Link
          className="text-white font-semibold text-2xl tracking-wide hover:opacity-80 transition"
          href="/"
        >
          Waseem{" "}
          <span className="bg-[#ea8b61] text-black py-[1px] px-2 rounded-md">
            Riaz
          </span>
        </Link>

        {/* Social Links */}
        <div className="flex items-center gap-6 text-xl">
          <Link
            href="https://github.com/"
            target="_blank"
            className="hover:text-[#ea8b61] transition-colors"
          >
            <FaGithub />
          </Link>

          <Link
            href="https://facebook.com/"
            target="_blank"
            className="hover:text-[#ea8b61] transition-colors"
          >
            <FaFacebookF />
          </Link>

          <Link
            href="https://instagram.com/"
            target="_blank"
            className="hover:text-[#ea8b61] transition-colors"
          >
            <FaInstagram />
          </Link>

          <Link
            href="https://linkedin.com/"
            target="_blank"
            className="hover:text-[#ea8b61] transition-colors"
          >
            <FaLinkedinIn />
          </Link>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 pb-6 text-sm text-gray-500">
        <span className="flex items-center gap-2">
     © {new Date().getFullYear()}  | Built with<span className="text-[#ea8b61]">❤</span>by Abdullah.
           All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
