import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Optional: if you also use images.unsplash.com
      },
       {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
  },

};

export default nextConfig;



