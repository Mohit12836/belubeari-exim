"use client";

import React from "react";
import { Package, Shirt, Utensils, Cpu, Factory, Truck, Printer, Cog, ArrowUpRight } from "lucide-react";

interface IndustriesProps {
  onSelectIndustry: (ind: string) => void;
}

export const Industries: React.FC<IndustriesProps> = ({ onSelectIndustry }) => {
  const industries = [
    {
      id: "packaging",
      name: "Packaging Machinery",
      desc: "Form-fill-seal (FFS), carton sealers, strapping machines, labeling and high-speed pouch packing.",
      icon: Package,
      specs: "High-friction haul-off belts & timing belts",
    },
    {
      id: "textile",
      name: "Textile Machinery",
      desc: "Ring spinning frames, open-end spinning, weaving looms, circular knitting, and carding lines.",
      icon: Shirt,
      specs: "Cots, aprons, spindle tapes & emery strips",
    },
    {
      id: "food",
      name: "Food Processing & Bakery",
      desc: "Dough mixers, mooncake & pastry machines, biscuit conveyors, chocolate cooling tunnels.",
      icon: Utensils,
      specs: "FDA-compliant PU/PVC & silicone conveyor belts",
    },
    {
      id: "automation",
      name: "Automation & Robotics",
      desc: "SMT pick-and-place lines, robotic assembly cells, linear gantries, indexing rotary tables.",
      icon: Cpu,
      specs: "Precision HTD belts & linear guide bearings",
    },
    {
      id: "manufacturing",
      name: "Manufacturing & Heavy Eng.",
      desc: "Automotive assembly lines, metal forming presses, pipe manufacturing, heavy fabrication.",
      icon: Factory,
      specs: "Heavy-duty V-belts & spherical roller bearings",
    },
    {
      id: "material-handling",
      name: "Material Handling & Logistics",
      desc: "Warehouse distribution conveyors, incline bucket elevators, airport baggage and sorting lines.",
      icon: Truck,
      specs: "Cleated belts, sidewall conveyors & pillow blocks",
    },
    {
      id: "printing",
      name: "Printing & Paper Converting",
      desc: "High-speed offset presses, folder gluers, paper bag making machines, rotary slitters.",
      icon: Printer,
      specs: "Feeder belts, suction belts & flat poly belts",
    },
    {
      id: "general-engineering",
      name: "General Engineering & Pumps",
      desc: "Industrial blowers, air compressors, industrial pumps, crushers, CNC spindle drives.",
      icon: Cog,
      specs: "Wedge belts, pulleys, bearings & oil seals",
    },
  ];

  return (
    <section id="industries" className="py-24 lg:py-32 bg-[#F5F5F3] text-[#121315]">
      <div className="container-custom">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="rivian-eyebrow text-[#5A6065] block mb-3">
            Sector Applications
          </span>
          <h2 className="rivian-h2 text-[#121315]">
            Where Our Products Fit.
          </h2>
          <p className="rivian-body text-[#5A6065] mt-4">
            Supplying critical components to machinery manufacturers, OEMs, and plant maintenance teams across high-demand Indian production sectors.
          </p>
        </div>

        {/* 8-Grid Industry Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <button
                key={ind.id}
                onClick={() => onSelectIndustry(ind.name)}
                className="group relative rounded-3xl bg-white hover:bg-[#121315] border border-[#E0E0DC] hover:border-[#121315] p-7 flex flex-col justify-between text-left transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-[#F5F5F3] group-hover:bg-white/10 flex items-center justify-center text-[#121315] group-hover:text-[#FFAC00] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#838B92] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <h3 className="text-base font-bold text-[#121315] group-hover:text-white transition-colors mb-2">
                    {ind.name}
                  </h3>

                  <p className="text-xs text-[#5A6065] group-hover:text-white/70 leading-relaxed mb-6 transition-colors">
                    {ind.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EAEAE6] group-hover:border-white/15 text-[11px] font-mono text-[#5A6065] group-hover:text-white/60 transition-colors">
                  <span className="text-[#121315] group-hover:text-[#FFAC00] font-bold block mb-0.5">Key Components:</span>
                  <span>{ind.specs}</span>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
