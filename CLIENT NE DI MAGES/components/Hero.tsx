"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Camera, ShieldCheck, Check } from "lucide-react";
import Image from "next/image";

interface HeroProps {
  onOpenRequirement: (category?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRequirement }) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-8 overflow-hidden bg-[#121315] text-white">
      {/* ─── Cinematic Full-Bleed Background Media ─── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/products/timing-belt-gates-powergrip.jpg"
          alt="Heavy-Duty Industrial Power Transmission Belts"
          fill
          priority
          className="object-cover object-center brightness-[0.42] contrast-[1.12]"
          sizes="100vw"
        />
        {/* Rivian Editorial Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121315] via-[#121315]/40 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121315]/90 via-[#121315]/40 to-transparent" />
      </div>

      {/* ─── Main Hero Content ─── */}
      <div className="container-custom relative z-10 my-auto py-10">
        <div className="max-w-3xl space-y-6">
          
          {/* Rivian Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15"
          >
            <span className="w-2 h-2 rounded-full bg-[#FFAC00]" />
            <span className="rivian-eyebrow text-white/90">
              Power Transmission • Conveyor • Motion Components
            </span>
          </motion.div>

          {/* Headline - Bold, Tight, Architectural */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-1"
          >
            <h1 className="rivian-h1 text-white tracking-[-0.035em]">
              The Right Belt.<br />
              The Right Bearing.<br />
              <span className="text-[#FFAC00]">The Right Solution.</span>
            </h1>
          </motion.div>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rivian-body text-white/80 max-w-xl text-base sm:text-lg leading-relaxed"
          >
            Power Transmission & Conveyor Solutions for Indian Industries — sourced around your machine, application and exact operational requirement.
          </motion.p>

          {/* CTAs - Rivian Signature Pill Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <button
              onClick={() => onOpenRequirement()}
              className="btn-rivian-yellow"
            >
              <span>Send Your Requirement</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#products"
              className="btn-rivian-outline-dark"
            >
              <span>Explore Products</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Trust / Assistance Hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-2.5 pt-1 text-xs sm:text-sm text-white/70"
          >
            <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <Camera className="w-3.5 h-3.5 text-[#FFAC00]" />
            </div>
            <span>
              Have a photo, part number or machine requirement?{" "}
              <button
                onClick={() => onOpenRequirement("Photo Assistance")}
                className="text-[#FFAC00] hover:underline font-semibold"
              >
                Send it to us.
              </button>
            </span>
          </motion.div>

        </div>
      </div>

      {/* ─── Rivian-Style Bottom Specification Ribbon ─── */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="container-custom relative z-10 pt-4"
      >
        <div className="border-t border-white/15 pt-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-white/90">
          <div>
            <span className="block text-xs font-mono uppercase tracking-wider text-white/50">Pitch Profiles</span>
            <span className="text-sm sm:text-base font-bold text-white mt-0.5 block">HTD 3M to 14M / T5–AT10</span>
            <span className="text-[11px] text-white/60">Zero-Slip Synchronous</span>
          </div>

          <div>
            <span className="block text-xs font-mono uppercase tracking-wider text-white/50">V-Belt Sections</span>
            <span className="text-sm sm:text-base font-bold text-white mt-0.5 block">A, B, C, D, SPZ to SPC</span>
            <span className="text-[11px] text-white/60">Classical & Cogged Wedge</span>
          </div>

          <div>
            <span className="block text-xs font-mono uppercase tracking-wider text-white/50">Conveyor Range</span>
            <span className="text-sm sm:text-base font-bold text-white mt-0.5 block">PU, PVC & Silicone</span>
            <span className="text-[11px] text-white/60">FDA Food Grade & Cleated</span>
          </div>

          <div>
            <span className="block text-xs font-mono uppercase tracking-wider text-white/50">Motion & Supply</span>
            <span className="text-sm sm:text-base font-bold text-[#FFAC00] mt-0.5 block">Pan-India Dispatch</span>
            <span className="text-[11px] text-white/60">Mumbai Engineering Desk</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
