import type { Metadata } from "next";
import { ReactLenis} from 'lenis/react'
import "./globals.css";
import { Toaster } from "react-hot-toast";


export const metadata: Metadata = {
  title: "Waseem | eBay Consultant",
  description:
    "Amazon, eBay & Shopify Consultant helping sellers with product research, listings, order processing, customer support, inventory management, SEO optimization, and store growth strategies.",
  icons: {
    icon: "/waseem.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root />
      <body
        className={`outfit antialiased bg-[#1f1f1f] px-[10px] sm:px-[50px]`}
        >
        <Toaster/>
        {children}
      </body>
    </html>
  );
}
