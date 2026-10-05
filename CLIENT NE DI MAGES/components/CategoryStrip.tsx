"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface CategoryStripProps {
  onSelectCategory: (cat: string) => void;
}

export const CategoryStrip: React.FC<CategoryStripProps> = ({ onSelectCategory }) => {
  const categories = [
    {
      id: "timing-belts",
      title: "Timing Belts",
      subtitle: "Rubber & PU Pitch",
      image: "/images/products/timing-belt-gates-powergrip.jpg",
    },
    {
      id: "v-belts",
      title: "V-Belts",
      subtitle: "Classical & Wedge",
      image: "/images/products/timing-and-v-belts-mitsuboshi.jpg",
    },
    {
      id: "conveyor-belts",
      title: "Conveyor Belts",
      subtitle: "PU, PVC & Food Grade",
      image: "/images/products/pu-food-grade-conveyor-belt.jpg",
    },
    {
      id: "bearings",
      title: "Bearings",
      subtitle: "Deep Groove, Roller & Thrust",
      image: "/images/products/precision-ball-roller-bearings.jpg",
    },
    {
      id: "linear-motion",
      title: "Linear Motion",
      subtitle: "Pillow Blocks & Guides",
      image: "/images/products/pillow-block-units.jpg",
    },
    {
      id: "seals-components",
      title: "Seals & Components",
      subtitle: "Cots, Aprons & Emery Strips",
      image: "/images/products/rubber-emery-strips-profiles.jpg",
    },
  ];

  return (
    <section className="relative z-20 bg-white/90 backdrop-blur-md border-y border-sky-100 py-6">
      <div className="container-custom">
        {/* Strip Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <h2 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-slate-800 font-bold">
              Industrial Components. One Reliable Source.
            </h2>
          </div>
          <span className="text-[11px] font-mono text-sky-600 font-semibold hidden md:inline-block">
            Quick Selector • Click to Inquire
          </span>
        </div>

        {/* Categories Strip */}
        <div className="flex overflow-x-auto no-scrollbar gap-3 sm:gap-4 pb-2 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.title)}
              className="group relative flex-shrink-0 w-52 sm:w-auto flex flex-col rounded-2xl bg-sky-50/60 hover:bg-white border border-sky-100 hover:border-sky-300 p-2.5 transition-all duration-300 text-left shadow-sm hover:shadow-cloud-md overflow-hidden"
            >
              {/* Thumbnail Container */}
              <div className="relative w-full h-24 rounded-xl overflow-hidden bg-slate-900 mb-2.5 shadow-inner">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="160px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <div className="absolute top-1.5 right-1.5 w-6 h-6 rounded-lg bg-white/90 backdrop-blur-sm border border-sky-100 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors shadow-sm">
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="px-1 pb-1">
                <h3 className="text-xs font-bold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-1">
                  {cat.title}
                </h3>
                <p className="text-[10px] font-mono text-slate-500 line-clamp-1 mt-0.5">
                  {cat.subtitle}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
