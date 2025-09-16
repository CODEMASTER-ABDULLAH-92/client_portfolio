import type { Metadata } from "next";
import { ReactLenis} from 'lenis/react'
import "./globals.css";


export const metadata: Metadata = {
  title: "Waseem | Virtual Assistant",
  description:
    "Amazon, eBay & Shopify Virtual Assistant helping sellers with product research, listings, order processing, customer support, inventory management, SEO optimization, and store growth strategies.",
  icons: {
    icon: "/waseem.png", // This will automatically be used as the favicon
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
        {children}
      </body>
    </html>
  );
}
