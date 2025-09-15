import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

const Nav = () => {
  const time = new Date();

  // ✅ Format time with leading zeros (HH:MM)
  const formattedTime = `${time.getHours().toString().padStart(2, "0")}:${time
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;

  return (
    <nav>
      <div className="flex justify-between items-center px-6 py-4">
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
        <div className="flex items-center justify-between gap-3 border border-[#2e2e2e] rounded-full px-4 py-2 w-fit bg-gray-900">
          <span className="text-white font-mono text-sm">{formattedTime}</span>
          <Menu
            size={20}
            className="text-[#ea8b61] cursor-pointer hover:scale-110 transition-transform"
          />
        </div>
        
      </div>
    </nav>
  );
};

export default Nav;
