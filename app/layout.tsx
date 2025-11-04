import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { AiAssistantWidget } from "@/components/AiAssistantWidget";

// Initialize font
const inter = Inter({ subsets: ["latin"], display: "swap" });

// Page metadata
export const metadata: Metadata = {
  title: "Elevate X - Driving Digital Excellence",
  description:
    "Elevate X is a forward-thinking digital agency committed to driving excellence and innovation. We partner with businesses to unlock growth opportunities, streamline operations, and build lasting digital success through tailored, smart solutions.",
  generator: "Tiffany Asu",
};

// Root layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} font-sans antialiased bg-white text-gray-900`}
      >
        {children}
        <AiAssistantWidget />
        <Analytics />
      </body>
    </html>
  );
}
