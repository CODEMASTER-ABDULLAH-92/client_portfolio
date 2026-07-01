import React from "react";
import Link from "next/link";
import { FaGithub, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTiktok, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] text-gray-400 mt-20">
      {/* Divider */}
      <hr className="border-gray-700 opacity-40 mb-8" />

      {/* Top Section */}
      <div className="max-w-8xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0 pb-6">
        {/* Brand */}
        <Link
          className="text-white font-semibold text-2xl tracking-wide hover:opacity-80 transition text-center sm:text-left"
          href="/"
        >
          <span className="bg-[#ea8b61] text-black py-[1px] px-2 rounded-md">
            Dropshipping
          </span>{" "}
          <span className="text-white">Experts</span>
        </Link>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center sm:justify-end items-center gap-5 text-lg">
          <Link
            href="https://www.facebook.com/share/17Jfupzu4K/"
            target="_blank"
            className="hover:text-[#ea8b61] transition-colors"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </Link>

          <Link
            href="https://www.instagram.com/waseemriaz.134?igsh=YzljYTk1ODg3Zg=="
            target="_blank"
            className="hover:text-[#ea8b61] transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram />
          </Link>

          <Link
            href="https://www.linkedin.com/in/waseem-riaz-935798243/"
            target="_blank"
            className="hover:text-[#ea8b61] transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </Link>

          <Link
            href="https://github.com/CODEMASTER-ABDULLAH-92/"
            target="_blank"
            className="hover:text-[#ea8b61] transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </Link>
        </div>
      </div>

      {/* Middle Section - Services & Links */}
      <div className="max-w-8xl mx-auto px-6 sm:px-10 lg:px-16 py-8 border-t border-gray-700/30">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-[#ea8b61] transition-colors cursor-default">
                eBay Account Management
              </li>
              <li className="hover:text-[#ea8b61] transition-colors cursor-default">
                Listing Optimization
              </li>
              <li className="hover:text-[#ea8b61] transition-colors cursor-default">
                Product Sourcing
              </li>
              <li className="hover:text-[#ea8b61] transition-colors cursor-default">
                Dropshipping Setup
              </li>
              <li className="hover:text-[#ea8b61] transition-colors cursor-default">
                eBay Store Design
              </li>
              <li className="hover:text-[#ea8b61] transition-colors cursor-default">
                SEO & Keyword Research
              </li>
              <li className="hover:text-[#ea8b61] transition-colors cursor-default">
                Order Fulfillment
              </li>
              <li className="hover:text-[#ea8b61] transition-colors cursor-default">
                Customer Support
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-[#ea8b61] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#success-stories" className="hover:text-[#ea8b61] transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="#contact_form" className="hover:text-[#ea8b61] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}


          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Get In Touch</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span>📧</span>
                <a href="mailto:waseemriazoffical@gmail.com" className="hover:text-[#ea8b61] transition-colors">
                  waseemriazoffical@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>📞</span>
                <a href="tel:+923424886134" className="hover:text-[#ea8b61] transition-colors">
                  +92 3424886134
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>Faisalabad, Pakistan</span>
              </li>
              <li className="flex items-start gap-2">
                <span>⏰</span>
                <span>Mon-Fri: 9AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-8xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pb-6 text-xs sm:text-sm text-gray-500 border-t border-gray-700/30 pt-6">
          <span>
            © {new Date().getFullYear()} <strong className="text-white">Dropshipping Experts</strong> - 
            Empowering eBay Sellers & Dropshippers Worldwide
          </span>
          
 {/* Developer Credit */}
        <div className="flex flex-col items-center justify-center pb-4 text-xs text-gray-600">
          <span>
            Designed & Developed with{" "}
            <span className="text-[#ea8b61]">❤</span> by{" "}
            <Link 
              href="https://github.com/CODEMASTER-ABDULLAH-92" 
              target="_blank"
              className="text-[#ea8b61] hover:underline transition-colors"
            >
              Abdullah
            </Link>
          </span>
        </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;