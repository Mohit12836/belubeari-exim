"use client";

import React from "react";
import { Target, Layers, Zap, Cpu } from "lucide-react";

export const ValueSection: React.FC = () => {
  const values = [
    {
      title: "APPLICATION-FOCUSED",
      desc: "Products selected around your machine, torque, load, and speed requirements rather than generic catalog selling.",
      icon: Target,
    },
    {
      title: "PRODUCT DEPTH",
      desc: "Extensive breadth covering timing belts, V-belts, PU/PVC conveyors, precision bearings, linear motion, and specialized rubber profiles.",
      icon: Layers,
    },
    {
      title: "FAST CLOUD RESPONSE",
      desc: "Share your product photo, part code or machine breakdown details and get immediate technical identification & availability.",
      icon: Zap,
    },
    {
      title: "PRACTICAL EXPERTISE",
      desc: "Rooted in real-world machinery troubleshooting, factory line maintenance, and industrial power-transmission engineering.",
      icon: Cpu,
    },
  ];

  return (
    <section id="value" className="py-16 bg-white border-y border-sky-100 text-slate-900 relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="p-6 rounded-3xl bg-sky-50/50 hover:bg-white border border-sky-100/80 hover:border-sky-200 transition-all flex flex-col justify-between shadow-cloud-sm hover:shadow-cloud-md group"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-white border border-sky-100 flex items-center justify-center text-sky-600 mb-4 shadow-sm group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xs font-mono font-bold tracking-wider text-sky-700 mb-2 uppercase">
                    {v.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
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
