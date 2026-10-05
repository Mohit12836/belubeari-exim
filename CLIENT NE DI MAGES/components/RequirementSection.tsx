"use client";

import React from "react";
import { Camera, FileText, Wrench, ArrowRight, CheckCircle2, MessageSquare } from "lucide-react";
import Image from "next/image";

interface RequirementSectionProps {
  onOpenRequirement: (category?: string) => void;
}

export const RequirementSection: React.FC<RequirementSectionProps> = ({ onOpenRequirement }) => {
  return (
    <section id="diagnostics" className="py-24 lg:py-32 bg-[#121315] text-white relative">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="rivian-eyebrow text-[#838B92] block mb-3">
            Diagnostic & Assistance Studio
          </span>
          <h2 className="rivian-h2 text-white">
            Looking for the right belt, bearing or conveyor?
          </h2>
          <p className="rivian-body text-[#838B92] mt-4">
            You don't always need to know the exact product specification. Tell us about your machine, application or existing component — we'll help you identify the right requirement.
          </p>
        </div>

        {/* Split Studio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: "Have the old belt? Send us a photo." Rivian Studio Card */}
          <div className="lg:col-span-5 bg-[#1A1C1E] border border-white/10 rounded-3xl p-7 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-[#FFAC00] mb-8">
                <Camera className="w-6 h-6" />
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono text-[#FFAC00] uppercase tracking-wider font-bold block mb-1">
                  Machine Component Diagnosis
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Have the old belt?
                </h3>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#FFAC00] tracking-tight">
                  Send us a photo.
                </h3>
              </div>

              <p className="text-sm text-white/70 mt-4 leading-relaxed">
                Take a photo of the belt surface markings, pitch teeth profile, bearing number, or machine nameplate and send it to our technical engineers.
              </p>

              {/* Sample Photo Preview Box */}
              <div className="mt-8 p-4 rounded-2xl bg-[#121315] border border-white/10 flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-white/15 bg-black">
                  <Image
                    src="/images/products/timing-belt-gates-powergrip.jpg"
                    alt="Sample belt markings"
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-white">Part Markings / Tooth Pitch</p>
                  <p className="text-white/50 font-mono text-[11px] mt-0.5">We read codes like 14MGT, HTD-8M, FC208</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={() => onOpenRequirement("Photo Assistance")}
                className="btn-rivian-yellow w-full"
              >
                <Camera className="w-4 h-4" />
                <span>Send Photo for Identification</span>
              </button>
            </div>
          </div>

          {/* RIGHT: 3 Minimalist Assistance Cards */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4">
            
            {/* 01 Card */}
            <div className="bg-[#1A1C1E] border border-white/10 hover:border-white/20 rounded-3xl p-7 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-5 group">
              <div className="flex items-start gap-5">
                <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-mono font-bold text-[#FFAC00] shrink-0 text-sm">
                  01
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-[#FFAC00] transition-colors">
                    Have the bearing or belt number?
                  </h4>
                  <p className="text-white/60 text-xs sm:text-sm mt-1">
                    Send the number. We will check exact dimensional specs, load rating, and stock immediately.
                  </p>
                </div>
              </div>
              <button
                onClick={() => onOpenRequirement("Part Number")}
                className="self-start sm:self-center px-5 py-2.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#121315] border border-white/15 text-xs font-semibold whitespace-nowrap transition-all"
              >
                Send Number →
              </button>
            </div>

            {/* 02 Card */}
            <div className="bg-[#1A1C1E] border border-white/10 hover:border-white/20 rounded-3xl p-7 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-5 group">
              <div className="flex items-start gap-5">
                <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-mono font-bold text-[#FFAC00] shrink-0 text-sm">
                  02
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-[#FFAC00] transition-colors">
                    Only know the machine / application?
                  </h4>
                  <p className="text-white/60 text-xs sm:text-sm mt-1">
                    Tell us what you need. Share machine type (textile, packaging, food conveyor) and operating conditions.
                  </p>
                </div>
              </div>
              <button
                onClick={() => onOpenRequirement("Application Consultation")}
                className="self-start sm:self-center px-5 py-2.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#121315] border border-white/15 text-xs font-semibold whitespace-nowrap transition-all"
              >
                Explain Machine →
              </button>
            </div>

            {/* 03 Card */}
            <div className="bg-[#1A1C1E] border border-white/10 hover:border-white/20 rounded-3xl p-7 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-5 group">
              <div className="flex items-start gap-5">
                <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-mono font-bold text-[#FFAC00] shrink-0 text-sm">
                  03
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-[#FFAC00] transition-colors">
                    Not sure about the specification?
                  </h4>
                  <p className="text-white/60 text-xs sm:text-sm mt-1">
                    We'll help identify it. Our technical team guides you on tooth profile, pitch measurement, or compound selection.
                  </p>
                </div>
              </div>
              <button
                onClick={() => onOpenRequirement("Spec Assistance")}
                className="self-start sm:self-center px-5 py-2.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#121315] border border-white/15 text-xs font-semibold whitespace-nowrap transition-all"
              >
                Get Guidance →
              </button>
            </div>

            {/* Bottom Bar */}
            <div className="p-5 rounded-2xl bg-[#1A1C1E] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-white/70">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Direct technical consultation with zero guesswork.</span>
              </div>
              <button
                onClick={() => onOpenRequirement()}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#FFAC00] hover:text-[#E59B00] group"
              >
                <span>Get Product Assistance</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
