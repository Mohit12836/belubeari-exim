"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Check, ShieldCheck, Sparkles } from "lucide-react";

interface ProductEcosystemProps {
  onOpenRequirement: (category?: string) => void;
}

export const ProductEcosystem: React.FC<ProductEcosystemProps> = ({ onOpenRequirement }) => {
  return (
    <section id="products" className="py-20 lg:py-28 bg-white text-slate-900 relative">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 font-mono text-xs font-bold mb-3 shadow-sm">
            <span>COMPLETE PRODUCT ECOSYSTEM</span>
          </div>
          <h2 className="section-title text-slate-900 font-extrabold tracking-tight">
            Built Around Your Industrial Requirement
          </h2>
          <p className="section-subtitle text-slate-600 mt-4 leading-relaxed">
            From power transmission to conveyor movement and precision motion, Belubeari Exim brings essential industrial components together under one trusted source.
          </p>
        </div>

        {/* Asymmetric Editorial Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          
          {/* 1. HERO FEATURE CARD (Span 8 Cols): Industrial Belts & Power Transmission */}
          <div className="lg:col-span-8 bg-gradient-to-br from-sky-50 via-white to-sky-50/50 rounded-3xl border border-sky-100 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-cloud-md group">
            
            {/* Background subtle cloud glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-sky-700 font-extrabold">
                  Primary Power Transmission
                </span>
                <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white border border-sky-200 text-sky-800 font-semibold shadow-sm">
                  ISO • DIN • RMA Standardized
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
                Industrial Timing & V-Belts
              </h3>
              
              <p className="text-slate-600 text-sm sm:text-base max-w-xl leading-relaxed mb-6">
                High-torque synchronous timing belts, heavy-duty V-belts, and polyurethane drive belts designed for zero-slip power transmission, precise positioning, and continuous industrial duty cycles.
              </p>

              {/* Sub-spec badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                <div className="p-3 rounded-2xl bg-white border border-sky-100 text-xs shadow-sm">
                  <span className="font-bold text-slate-900 block">Timing Pitch Profiles</span>
                  <span className="text-sky-700 font-mono text-[11px] mt-0.5 block">HTD 3M, 5M, 8M, 14M, S8M, S14M</span>
                </div>
                <div className="p-3 rounded-2xl bg-white border border-sky-100 text-xs shadow-sm">
                  <span className="font-bold text-slate-900 block">V-Belt Sections</span>
                  <span className="text-sky-700 font-mono text-[11px] mt-0.5 block">A, B, C, D, SPZ, SPA, SPB, SPC, AX, BX</span>
                </div>
                <div className="p-3 rounded-2xl bg-white border border-sky-100 text-xs col-span-2 sm:col-span-1 shadow-sm">
                  <span className="font-bold text-slate-900 block">Metric & Imperial</span>
                  <span className="text-sky-700 font-mono text-[11px] mt-0.5 block">T5, T10, AT5, AT10, XL, L, H, XH</span>
                </div>
              </div>
            </div>

            {/* Visual Showcase Strip */}
            <div className="relative z-10 grid grid-cols-3 gap-3 pt-4 border-t border-sky-100">
              <div className="relative h-28 sm:h-36 rounded-2xl overflow-hidden bg-slate-900 border border-sky-100 shadow-sm">
                <Image
                  src="/images/products/timing-belt-gates-powergrip.jpg"
                  alt="Gates PowerGrip Timing Belts"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="250px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 text-[10px] font-mono font-bold text-white drop-shadow">Gates PowerGrip</span>
              </div>

              <div className="relative h-28 sm:h-36 rounded-2xl overflow-hidden bg-slate-900 border border-sky-100 shadow-sm">
                <Image
                  src="/images/products/timing-and-v-belts-mitsuboshi.jpg"
                  alt="Mitsuboshi Timing & V-Belts"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="250px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 text-[10px] font-mono font-bold text-white drop-shadow">Mitsuboshi Belts</span>
              </div>

              <div className="relative h-28 sm:h-36 rounded-2xl overflow-hidden bg-slate-900 border border-sky-100 shadow-sm">
                <Image
                  src="/images/products/pu-timing-belt-brown-detail.jpg"
                  alt="PU Timing Belt with Steel Cords"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="250px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 text-[10px] font-mono font-bold text-white drop-shadow">PU Steel Cord</span>
              </div>
            </div>

            <div className="relative z-10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <span className="text-xs text-slate-500">Available in standard stock sizes & customized cut widths.</span>
              <button
                onClick={() => onOpenRequirement("Timing & V-Belts")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold shadow-cloud-pill transition-all"
              >
                Inquire Belts →
              </button>
            </div>
          </div>

          {/* 2. CARD (Span 4 Cols): Bearings & Linear Motion */}
          <div className="lg:col-span-4 bg-white rounded-3xl border border-sky-100 p-6 sm:p-7 flex flex-col justify-between shadow-cloud-sm hover:shadow-cloud-md transition-shadow group">
            <div>
              <div className="relative h-44 rounded-2xl overflow-hidden bg-slate-900 border border-sky-100 mb-5 shadow-sm">
                <Image
                  src="/images/products/bearings-and-pillow-blocks.jpg"
                  alt="Precision Industrial Bearings & Pillow Block Units"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="350px"
                />
                <div className="absolute top-2.5 left-2.5">
                  <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-sky-800 text-[10px] font-mono font-bold shadow-sm">
                    BEARINGS & HOUSINGS
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Bearings & Linear Motion
              </h3>
              
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Full range of high-precision bearings, needle rollers, spherical roller units, pillow blocks (UCP, UCF, FC208), and linear motion guides.
              </p>

              <ul className="space-y-2 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Deep Groove & Angular Contact Ball Bearings</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Pillow Block Units (FC208, UCP 204-218)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Spherical Roller & Needle Roller Bearings</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-4 border-t border-sky-100 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">Need specific bearing number?</span>
              <button
                onClick={() => onOpenRequirement("Bearings")}
                className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1"
              >
                Inquire <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 3. CARD (Span 4 Cols): Conveyor Belts (PU, PVC, Food Grade) */}
          <div className="lg:col-span-4 bg-white rounded-3xl border border-sky-100 p-6 sm:p-7 flex flex-col justify-between shadow-cloud-sm hover:shadow-cloud-md transition-shadow group">
            <div>
              <div className="relative h-44 rounded-2xl overflow-hidden bg-slate-900 border border-sky-100 mb-5 shadow-sm">
                <Image
                  src="/images/products/pvc-green-sidewall-conveyor.jpg"
                  alt="PVC and PU Conveyor Belts with Sidewalls and Cleats"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="350px"
                />
                <div className="absolute top-2.5 left-2.5">
                  <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-emerald-800 text-[10px] font-mono font-bold shadow-sm">
                    CONVEYOR BELTING
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Conveyor Solutions (PU / PVC)
              </h3>
              
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Specialized conveyor belts engineered for food processing, packaging lines, electronics automation (SMT), logistics, and inclined handling.
              </p>

              <ul className="space-y-2 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>FDA-Approved Food Grade PU Belts (White/Blue)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Green PVC with Sidewalls & Welded Cleats</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Antistatic SMT Electronics Conveyors</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-4 border-t border-sky-100 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">Custom lengths & cleats</span>
              <button
                onClick={() => onOpenRequirement("Conveyor Belts")}
                className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1"
              >
                Inquire <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 4. CARD (Span 4 Cols): Textile Cots & Aprons */}
          <div className="lg:col-span-4 bg-white rounded-3xl border border-sky-100 p-6 sm:p-7 flex flex-col justify-between shadow-cloud-sm hover:shadow-cloud-md transition-shadow group">
            <div>
              <div className="relative h-44 rounded-2xl overflow-hidden bg-slate-900 border border-sky-100 mb-5 shadow-sm">
                <Image
                  src="/images/products/textile-cots-and-aprons.jpg"
                  alt="MSB Kureha Textile Cots and Aprons"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="350px"
                />
                <div className="absolute top-2.5 left-2.5">
                  <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-sky-800 text-[10px] font-mono font-bold shadow-sm">
                    TEXTILE SPECIALTY
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Textile Cots & Aprons
              </h3>
              
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                MSB Kureha precision-engineered cots & aprons for spinning, yarn production, and textile machinery. High oil-resistance and anti-static consistency.
              </p>

              <ul className="space-y-2 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Anti-abrasion & crack resistance</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Consistent yarn drafting quality</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Longevity under 24/7 spinning lines</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-4 border-t border-sky-100 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">Japanese tech collaboration</span>
              <button
                onClick={() => onOpenRequirement("Textile Cots & Aprons")}
                className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1"
              >
                Inquire <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 5. CARD (Span 4 Cols): USIBO Rubber Emery Strips */}
          <div className="lg:col-span-4 bg-white rounded-3xl border border-sky-100 p-6 sm:p-7 flex flex-col justify-between shadow-cloud-sm hover:shadow-cloud-md transition-shadow group">
            <div>
              <div className="relative h-44 rounded-2xl overflow-hidden bg-slate-900 border border-sky-100 mb-5 shadow-sm">
                <Image
                  src="/images/products/rubber-emery-strips-profiles.jpg"
                  alt="USIBO Premium Rubber Emery Strip Textures"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="350px"
                />
                <div className="absolute top-2.5 left-2.5">
                  <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-amber-800 text-[10px] font-mono font-bold shadow-sm">
                    ROLLER GRIP STRIPS
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                USIBO Rubber Emery Strips
              </h3>
              
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Premium roller covering emery strips in multiple texture profiles: Round, Pimple, Triangle, Plain, Velvet, Rough, and Sand finish.
              </p>

              <ul className="space-y-2 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Natural, Synthetic, Cork, PU & Silicone</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Superior roller traction & slip prevention</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Textile looms & packaging roller wrapping</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-4 border-t border-sky-100 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">Available in full rolls</span>
              <button
                onClick={() => onOpenRequirement("Rubber Emery Strips")}
                className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1"
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
