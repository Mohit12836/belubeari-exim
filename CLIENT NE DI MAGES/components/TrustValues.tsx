"use client";

import React from "react";
import { Target, Layers, Zap, Cpu } from "lucide-react";

export const TrustValues: React.FC = () => {
  const values = [
    {
      title: "APPLICATION-FOCUSED",
      desc: "Components selected strictly around your machine torque, center distances, speed, and thermal dynamics — not generic catalog pushing.",
      icon: Target,
    },
    {
      title: "PRODUCT DEPTH",
      desc: "Full-spectrum industrial coverage spanning synchronous timing belts, heavy V-belts, food-grade conveyors, and precision motion bearings.",
      icon: Layers,
    },
    {
      title: "RAPID ASSISTANCE",
      desc: "Share your component photo or part code and get immediate technical verification, dimension cross-referencing, and dispatch estimates.",
      icon: Zap,
    },
    {
      title: "PRACTICAL EXPERTISE",
      desc: "Rooted in hands-on plant maintenance, factory line troubleshooting, and Indian industrial power-transmission engineering.",
      icon: Cpu,
    },
  ];

  return (
    <section className="py-24 bg-white border-y border-[#E0E0DC] text-[#121315]">
      <div className="container-custom">
        
        <div className="max-w-2xl mb-16">
          <span className="rivian-eyebrow text-[#5A6065] block mb-3">
            Core Principles
          </span>
          <h2 className="rivian-h2 text-[#121315]">
            Built on Reliability.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#F5F5F3] flex items-center justify-center text-[#121315] mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xs font-mono font-bold tracking-wider text-[#121315] mb-3 uppercase">
                    {v.title}
                  </h3>
                  <p className="text-sm text-[#5A6065] leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
