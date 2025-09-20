import React from "react";
import Link from "next/link";
import { FaGithub, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] text-gray-400 mt-20">
      {/* Divider */}
      <hr className="border-gray-700 opacity-40 mb-8" />

      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0 pb-6">
        {/* Brand */}
        <Link
          className="text-white font-semibold text-2xl tracking-wide hover:opacity-80 transition text-center sm:text-left"
          href="/"
        >
          Waseem{" "}
          <span className="bg-[#ea8b61] text-black py-[1px] px-2 rounded-md">
            Riaz
          </span>
        </Link>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center sm:justify-end items-center gap-5 text-lg">
          <Link
            href="https://github.com/waseemriazoffical-svg"
            target="_blank"
            className="hover:text-[#ea8b61] transition-colors"
          >
            <FaGithub />
          </Link>

          <Link
            href="https://www.facebook.com/share/17Jfupzu4K/"
            target="_blank"
            className="hover:text-[#ea8b61] transition-colors"
          >
            <FaFacebookF />
          </Link>

          <Link
            href="https://www.instagram.com/waseemriaz.134?igsh=YzljYTk1ODg3Zg=="
            target="_blank"
            className="hover:text-[#ea8b61] transition-colors"
          >
            <FaInstagram />
          </Link>

          <Link
            href="https://www.linkedin.com/in/waseem-riaz-935798243/"
            target="_blank"
            className="hover:text-[#ea8b61] transition-colors"
          >
            <FaLinkedinIn />
          </Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col  sm:flex-row justify-center  items-center gap-2 pb-6 text-xs sm:text-sm text-gray-500 text-center">
          <span>
            © {new Date().getFullYear()} <Link href={"https://github.com/CODEMASTER-ABDULLAH-92"}> | Built with{" "}
            <span className="text-[#ea8b61]">❤</span> by Abdullah. </Link> All rights
            reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
