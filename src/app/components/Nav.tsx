"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Nav = () => {
  const [openPopUp, setOpenPopUp] = useState(false);
 const time = new Date();

// ✅ Convert to 12-hour format with AM/PM
let hours = time.getHours();
const minutes = time.getMinutes().toString().padStart(2, "0");
const ampm = hours >= 12 ? "PM" : "AM";

hours = hours % 12; // Convert 24h -> 12h
hours = hours ? hours : 12; // Convert 0 to 12 (midnight case)

const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes} ${ampm}`;


  return (
    <nav className="w-full ">
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
        {/* Brand Name */}
        <Link
          className="text-white font-semibold text-2xl tracking-wide hover:opacity-80 transition"
          href="/"
        >
          Waseem{" "}
          <span className="bg-[#ea8b61] text-black py-[1px] px-2 rounded-md">
            Riaz
          </span>
        </Link>

        {/* Time + Menu */}
        <div className="flex items-center gap-3 border bg-[#2e2e2e] border-gray-500 rounded-full px-5 py-2">
          <span className="text-white font-mono text-sm">{formattedTime}</span>
          {openPopUp ? (
            <X
              size={22}
              className="text-[#ea8b61] cursor-pointer hover:scale-110 transition-transform"
              onClick={() => setOpenPopUp(false)}
            />
          ) : (
            <Menu
              size={22}
              className="text-[#ea8b61] cursor-pointer hover:scale-110 transition-transform"
              onClick={() => setOpenPopUp(true)}
            />
          )}
        </div>
      </div>

      {/* Pop-up Section */}
      <div
        className={`absolute z-10 right-6 md:right-12 mt-3 bg-[#1f1f1f] border border-[#2e2e2e] rounded-2xl px-6 py-4 w-[80%] sm:w-[300px] transform transition-all duration-300 ease-in-out ${
          openPopUp
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-3 scale-95 pointer-events-none"
        }`}
      >
        <span className="text-[#ea8b61] text-lg font-semibold">Socials</span>
        <ul className="flex flex-col justify-start items-start gap-2 mt-2 text-white">
          <Link href="https://www.facebook.com/share/17Jfupzu4K/" className="text-lg hover:underline">
          Facebook
          </Link>
          <Link href="/" className="text-lg hover:underline">
            LinkedIn
          </Link>
          <Link href="https://github.com/waseemriazoffical-svg" className="text-lg hover:underline">
            GitHub
          </Link>
          <Link href="https://www.instagram.com/waseemriaz.134?igsh=YzljYTk1ODg3Zg==" className="text-lg hover:underline">
            Instagram
          </Link>
        </ul>

        <hr className="border-[#2e2e2e] my-3" />

        <span className="text-[#ea8b61] text-lg font-semibold">Contact</span>
        <ul className="flex flex-col gap-1 mt-2">
          <li className="text-white hover:underline text-lg">
            +92 3424886134
          </li>
          <li className="text-white hover:underline text-lg">
            waseemriazoffical@gmail.com
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
