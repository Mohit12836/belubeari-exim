"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ChevronRight, Check, ShieldCheck } from "lucide-react";

interface ProductLineupProps {
  onOpenRequirement: (category?: string) => void;
}

export const ProductLineup: React.FC<ProductLineupProps> = ({ onOpenRequirement }) => {
  const tabs = [
    { id: "timing", label: "Timing Belts" },
    { id: "vbelts", label: "V-Belts" },
    { id: "conveyors", label: "Conveyor Belts" },
    { id: "bearings", label: "Bearings & Motion" },
    { id: "specialty", label: "Specialty & Textiles" },
  ];

  const [activeTab, setActiveTab] = useState("timing");

  const products: Record<
    string,
    {
      title: string;
      subtitle: string;
      eyebrow: string;
      description: string;
      image: string;
      specs: { label: string; value: string }[];
      highlights: string[];
    }
  > = {
    timing: {
      title: "Synchronous Timing Belts",
      subtitle: "High-Torque Zero-Slip Drive Systems",
      eyebrow: "PRECISION MOTION & TIMING",
      description:
        "Engineered for exact speed synchronization, high load transmission, and zero backlash. Featuring Gates PowerGrip GT4 and Mitsuboshi synchronous tooth profiles with high-tensile cords.",
      image: "/images/products/timing-belt-gates-powergrip.jpg",
      specs: [
        { label: "Tooth Pitch Profiles", value: "HTD 3M, 5M, 8M, 14M, S8M, S14M" },
        { label: "Metric & Imperial", value: "T5, T10, AT5, AT10, XL, L, H, XH" },
        { label: "Construction", value: "High-Grade Elastomer / Polyurethane" },
        { label: "Tensile Cord", value: "Continuous High-Modulus Fiberglass / Steel" },
      ],
      highlights: [
        "Eliminates lubrication and re-tensioning downtime",
        "Superior tooth shear resistance under shock loads",
        "Available in endless loops and open coils",
      ],
    },
    vbelts: {
      title: "Classical & Wedge V-Belts",
      subtitle: "High-Power Industrial Drives",
      eyebrow: "HEAVY INDUSTRIAL TRANSMISSION",
      description:
        "High-performance rubber V-belts designed for heavy machinery, pumps, industrial compressors, crushers, and machine tools. Built for extreme heat, oil and abrasion resistance.",
      image: "/images/products/timing-and-v-belts-mitsuboshi.jpg",
      specs: [
        { label: "Classical Sections", value: "M, A, B, C, D, E" },
        { label: "Wedge High-Capacity", value: "SPZ, SPA, SPB, SPC" },
        { label: "Raw Edge Cogged", value: "XPZ, XPA, XPB, XPC, AX, BX, CX" },
        { label: "Compliance", value: "ISO 4184 / DIN 2215 / RMA Standards" },
      ],
      highlights: [
        "Matched set precision for multi-belt drive pulleys",
        "Heat & oil resistant rubber formulation",
        "Low stretch design ensures sustained tension",
      ],
    },
    conveyors: {
      title: "PU & PVC Conveyor Belts",
      subtitle: "Material Handling & Food Processing",
      eyebrow: "HYGIENE & INCLINE CONVEYING",
      description:
        "Specialized food-grade PU belts and green PVC conveyor belts for inclined transit, packaging machines, automated SMT lines, and bakery equipment with custom sidewalls and welded cleats.",
      image: "/images/products/pvc-green-sidewall-conveyor.jpg",
      specs: [
        { label: "Belt Materials", value: "PU, PVC, Silicone & Rubber" },
        { label: "Fabrication", value: "Corrugated Sidewalls, Cleats, Tracking Guides" },
        { label: "Food Compliance", value: "FDA / USDA Food-Grade Approved (Blue/White)" },
        { label: "Applications", value: "Bakery, Packaging, Logistics, SMT Assembly" },
      ],
      highlights: [
        "Custom cut widths and endless jointing",
        "Oil, fat, and chemical resistant surfaces",
        "Antistatic properties for sensitive electronics",
      ],
    },
    bearings: {
      title: "Bearings & Pillow Block Units",
      subtitle: "Precision Rotation & Linear Motion",
      eyebrow: "MECHANICAL MOTION & ROTATION",
      description:
        "Comprehensive inventory of deep groove ball bearings, spherical roller bearings, needle roller bearings, pillow blocks (UCP, UCF, FC208 4-bolt flange), and linear guide rail assemblies.",
      image: "/images/products/bearings-and-pillow-blocks.jpg",
      specs: [
        { label: "Pillow Block Housings", value: "FC208, UCP 204 to 218, UCF Flanges" },
        { label: "Roller & Ball Types", value: "Deep Groove, Taper, Spherical, Needle" },
        { label: "Sealing Options", value: "Rubber Contact Seals (2RS) / Metal Shields (ZZ)" },
        { label: "Tolerance Class", value: "ISO Normal / P6 / P5 Precision Grades" },
      ],
      highlights: [
        "Heavy cast-iron pillow housings with grease zerks",
        "Superior radial and axial load endurance",
        "Ready stock for fast factory replacement",
      ],
    },
    specialty: {
      title: "Textile Cots, Aprons & Emery Strips",
      subtitle: "Specialized Spinning & Loom Components",
      eyebrow: "TEXTILE MACHINERY & ROLLER COVERS",
      description:
        "MSB Kureha technical collaboration cots & aprons for spinning mills, plus USIBO premium rubber emery strips with multiple traction profiles for textile loom rollers and packaging drums.",
      image: "/images/products/rubber-emery-strips-profiles.jpg",
      specs: [
        { label: "Textile Cots & Aprons", value: "MSB Kureha High Consistency Elastomer" },
        { label: "Emery Strip Profiles", value: "Round, Pimple, Triangle, Plain, Velvet, Sand" },
        { label: "Backing Compounds", value: "Natural, Synthetic, Cork, PU & Silicone" },
        { label: "Specialty Belts", value: "Nitta Flat Poly Belts & Studded Timing Belts" },
      ],
      highlights: [
        "Japanese technical collaboration for spinning quality",
        "Consistent yarn drafting and zero electrostatic cling",
        "Superior roller traction prevents fabric slippage",
      ],
    },
  };

  const current = products[activeTab];

  return (
    <section id="products" className="py-24 lg:py-32 bg-[#F5F5F3] text-[#121315]">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="rivian-eyebrow text-[#5A6065] block mb-3">
            Product Ecosystem
          </span>
          <h2 className="rivian-h2 text-[#121315]">
            Engineered for Industrial Machines.
          </h2>
          <p className="rivian-body text-[#5A6065] mt-4">
            From precision timing and power transmission to automated conveying and high-load rotation — explore our core industrial component lines.
          </p>
        </div>

        {/* Rivian-Style Pill Navigation Switcher */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 pb-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-[#121315] text-white shadow-sm"
                  : "bg-white text-[#5A6065] hover:text-[#121315] border border-[#E0E0DC]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main Product Feature Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="bg-white rounded-3xl border border-[#E0E0DC] overflow-hidden shadow-rivian-card"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Product Media - Left 7 cols */}
              <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[540px] bg-[#121315]">
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 750px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Product Badge */}
                <div className="absolute top-5 left-5">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#121315] text-[11px] font-mono font-bold shadow-sm">
                    {current.eyebrow}
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-xl sm:text-2xl font-bold">{current.title}</p>
                  <p className="text-xs sm:text-sm text-white/80 font-mono mt-0.5">{current.subtitle}</p>
                </div>
              </div>

              {/* Product Details & Engineering Specs - Right 5 cols */}
              <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#5A6065] font-semibold block mb-2">
                    Engineering Overview
                  </span>
                  <h3 className="text-2xl font-bold text-[#121315] tracking-tight mb-3">
                    {current.title}
                  </h3>
                  <p className="text-sm text-[#5A6065] leading-relaxed mb-6">
                    {current.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-6">
                    {current.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#121315]">
                        <Check className="w-4 h-4 text-[#FFAC00] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Key Specifications Grid */}
                  <div className="border-t border-[#EAEAE6] pt-5 space-y-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#5A6065] font-bold block">
                      Technical Standards
                    </span>
                    <div className="grid grid-cols-1 gap-2.5">
                      {current.specs.map((s, i) => (
                        <div key={i} className="flex items-center justify-between text-xs py-1 border-b border-[#F0EFEB]">
                          <span className="text-[#5A6065]">{s.label}</span>
                          <span className="font-mono font-semibold text-[#121315] text-right">{s.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-8 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => onOpenRequirement(current.title)}
                    className="btn-rivian-primary w-full text-center"
                  >
                    <span>Inquire Component</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
