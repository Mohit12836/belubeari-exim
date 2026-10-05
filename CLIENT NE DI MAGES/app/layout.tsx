import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Belubeari Exim | Power Transmission, Belts, Bearings & Conveyor Solutions",
  description: "Belubeari Exim provides industrial timing belts, V-belts, PU/PVC conveyor belts, bearings, linear motion systems, cots & aprons, and specialized industrial components for machinery across Indian industries.",
  keywords: [
    "Belubeari Exim",
    "Industrial Timing Belts",
    "V-Belts India",
    "PU Timing Belts",
    "PVC Conveyor Belts",
    "Industrial Bearings",
    "Linear Motion Guides",
    "Pillow Block Bearings",
    "Textile Cots & Aprons",
    "Rubber Emery Strips",
    "Power Transmission India"
  ],
  authors: [{ name: "Belubeari Exim" }],
  openGraph: {
    title: "Belubeari Exim — The Right Belt. The Right Bearing. The Right Solution.",
    description: "Power Transmission & Conveyor Solutions for Indian Industries — Sourced around your machine, application and requirement.",
    type: "website",
    locale: "en_IN",
    siteName: "Belubeari Exim",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#121315",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#F5F5F3] text-[#121315] selection:bg-[#FFAC00] selection:text-[#121315]">
        {children}
      </body>
    </html>
  );
}
