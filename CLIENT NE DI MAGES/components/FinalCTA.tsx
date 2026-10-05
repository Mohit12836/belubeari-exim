"use client";

import React from "react";
import { ArrowRight, MessageSquare, CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface FinalCTAProps {
  onOpenRequirement: (category?: string) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenRequirement }) => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      "Hello Belubeari Exim, I would like to inquire about industrial components/belts/bearings for my machine."
    );
    window.open(`https://wa.me/919825128614?text=${text}`, "_blank");
  };

  return (
    <section className="relative py-32 bg-[#121315] text-white overflow-hidden">
      {/* Background Media with Dark Vignette */}
      <div className="absolute inset-0 z-0 opacity-25">
        <Image
          src="/images/products/timing-belt-gates-powergrip.jpg"
          alt="Industrial Belting Texture"
          fill
          className="object-cover object-center filter grayscale contrast-125"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#121315]/85" />
      </div>

      <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#FFAC00]" />
          <span className="rivian-eyebrow text-white/90">
            Rapid Industrial Desk
          </span>
        </div>

        {/* Display Headline */}
        <h2 className="rivian-h1 text-white mb-6">
          Tell Us What Your<br />Machine Needs.
        </h2>

        {/* Subtext */}
        <p className="rivian-body text-white/70 max-w-xl mx-auto mb-10">
          Send us a product photo, bearing number, belt size or simply explain your application. Our technical specialists will help you source the precise component.
        </p>

        {/* Action Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onOpenRequirement()}
            className="btn-rivian-yellow w-full sm:w-auto"
          >
            <span>Send Your Requirement</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={handleWhatsApp}
            className="btn-rivian-outline-dark w-full sm:w-auto flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
            <span>WhatsApp Us</span>
          </button>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="pt-16 mt-16 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs text-white/60 font-mono">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#FFAC00]" />
            <span>Direct Technical Assistance</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#FFAC00]" />
            <span>Pan-India Sourcing & Dispatch</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#FFAC00]" />
            <span>Standard & Customized Belts</span>
          </div>
        </div>

      </div>
    </section>
  );
};
