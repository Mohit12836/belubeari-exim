"use client";

import React from "react";
import Image from "next/image";
import { Cpu, ShieldCheck, Zap, Cog, ArrowUpRight } from "lucide-react";

interface EngineeringSpecsProps {
  onOpenRequirement: (category?: string) => void;
}

export const EngineeringSpecs: React.FC<EngineeringSpecsProps> = ({ onOpenRequirement }) => {
  return (
    <section id="engineering" className="py-24 lg:py-32 bg-white text-[#121315]">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="rivian-eyebrow text-[#5A6065] block mb-3">
            Engineering & Technology
          </span>
          <h2 className="rivian-h2 text-[#121315]">
            Precision Mechanical Standards.
          </h2>
          <p className="rivian-body text-[#5A6065] mt-4">
            Industrial machinery requires components matched precisely to torque, RPM, center distances and ambient conditions. We eliminate guesswork with OEM-spec compliance.
          </p>
        </div>

        {/* 3-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Curvilinear Tooth Geometry */}
          <div className="bg-[#F5F5F3] rounded-3xl p-7 sm:p-8 flex flex-col justify-between border border-[#E0E0DC] hover:border-[#121315] transition-all group shadow-sm">
            <div>
              <div className="relative h-48 rounded-2xl overflow-hidden mb-6 bg-[#121315]">
                <Image
                  src="/images/products/timing-belt-htd-green-roll.jpg"
                  alt="Curvilinear Tooth Geometry"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="350px"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-white/90 text-[#121315] text-[10px] font-mono font-bold">
                    SYNCHRONOUS
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-[#FFAC00]" />
                <span className="text-xs font-mono text-[#5A6065] uppercase font-bold">0-Slip Power</span>
              </div>
              <h3 className="text-xl font-bold text-[#121315] mb-2">
                Curvilinear Tooth Geometry
              </h3>
              <p className="text-xs sm:text-sm text-[#5A6065] leading-relaxed">
                HTD and GT tooth profiles distribute shear stress uniformly across pulley teeth, enabling higher torque transmission without slippage or cord elongation.
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-[#EAEAE6] flex items-center justify-between">
              <span className="text-xs font-mono text-[#5A6065]">HTD 3M · 5M · 8M · 14M</span>
              <button
                onClick={() => onOpenRequirement("Timing Belts")}
                className="text-xs font-bold text-[#121315] hover:text-[#FFAC00] flex items-center gap-1"
              >
                Inquire <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Food & Chemical Resistant PU */}
          <div className="bg-[#F5F5F3] rounded-3xl p-7 sm:p-8 flex flex-col justify-between border border-[#E0E0DC] hover:border-[#121315] transition-all group shadow-sm">
            <div>
              <div className="relative h-48 rounded-2xl overflow-hidden mb-6 bg-[#121315]">
                <Image
                  src="/images/products/pu-food-grade-conveyor-belt.jpg"
                  alt="Food-Grade PU Belting"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="350px"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-white/90 text-[#121315] text-[10px] font-mono font-bold">
                    FDA FOOD GRADE
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-mono text-[#5A6065] uppercase font-bold">Hygienic & Inert</span>
              </div>
              <h3 className="text-xl font-bold text-[#121315] mb-2">
                Sanitary Conveyor Formulations
              </h3>
              <p className="text-xs sm:text-sm text-[#5A6065] leading-relaxed">
                Non-porous thermoplastic polyurethane (TPU) surfaces prevent microbial buildup and resist animal fats, vegetable oils, and aggressive washdown detergents.
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-[#EAEAE6] flex items-center justify-between">
              <span className="text-xs font-mono text-[#5A6065]">Blue & White PU / PVC</span>
              <button
                onClick={() => onOpenRequirement("Conveyor Belts")}
                className="text-xs font-bold text-[#121315] hover:text-[#FFAC00] flex items-center gap-1"
              >
                Inquire <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: Japanese Technical Collaboration */}
          <div className="bg-[#F5F5F3] rounded-3xl p-7 sm:p-8 flex flex-col justify-between border border-[#E0E0DC] hover:border-[#121315] transition-all group shadow-sm">
            <div>
              <div className="relative h-48 rounded-2xl overflow-hidden mb-6 bg-[#121315]">
                <Image
                  src="/images/products/textile-cots-and-aprons.jpg"
                  alt="MSB Kureha Technical Collaboration"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="350px"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-white/90 text-[#121315] text-[10px] font-mono font-bold">
                    MSB KUREHA
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <Cog className="w-4 h-4 text-[#FFAC00]" />
                <span className="text-xs font-mono text-[#5A6065] uppercase font-bold">Textile Precision</span>
              </div>
              <h3 className="text-xl font-bold text-[#121315] mb-2">
                Drafting & Roller Compounds
              </h3>
              <p className="text-xs sm:text-sm text-[#5A6065] leading-relaxed">
                Formulated using technical collaboration with Kureha Elastomer Co. (Japan) for spinning longevity, crack resistance, and anti-static consistency over 24/7 runtimes.
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-[#EAEAE6] flex items-center justify-between">
              <span className="text-xs font-mono text-[#5A6065]">Cots, Aprons & Emery</span>
              <button
                onClick={() => onOpenRequirement("Textile Cots & Aprons")}
                className="text-xs font-bold text-[#121315] hover:text-[#FFAC00] flex items-center gap-1"
              >
                Inquire <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
