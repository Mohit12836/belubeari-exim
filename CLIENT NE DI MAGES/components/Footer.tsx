"use client";

import React from "react";
import { ArrowUp, Phone, Mail, MapPin, MessageSquare, ChevronRight } from "lucide-react";

interface FooterProps {
  onOpenRequirement: (category?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRequirement }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-[#121315] border-t border-white/10 text-white/70 text-xs sm:text-sm">
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFAC00]" />
              <span className="font-extrabold tracking-tight text-white text-base sm:text-lg uppercase">
                BELUBEARI <span className="text-[#FFAC00]">EXIM</span>
              </span>
            </div>

            <p className="text-white/60 text-xs sm:text-sm leading-relaxed max-w-sm">
              Industrial components and power-transmission solution provider. Helping machinery manufacturers, processing plants, and maintenance teams find the exact component for their machines.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onOpenRequirement()}
                className="btn-rivian-yellow text-xs py-2 px-5"
              >
                <span>Request Component Quote</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Col 2: Product Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-mono uppercase text-xs tracking-wider font-bold">
              Product Categories
            </h4>
            <ul className="space-y-2.5 text-xs text-white/60">
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Timing Belts (Rubber & PU)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  V-Belts (Classical & Wedge)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  PU / PVC / Food Conveyor Belts
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Bearings & Pillow Blocks (FC208)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Linear Motion & Guides
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Textile Cots & Aprons
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  USIBO Rubber Emery Strips
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-mono uppercase text-xs tracking-wider font-bold">
              Company & Help
            </h4>
            <ul className="space-y-2.5 text-xs text-white/60">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  All Products
                </a>
              </li>
              <li>
                <a href="#engineering" className="hover:text-white transition-colors">
                  Engineering Specs
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-white transition-colors">
                  Industries Served
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenRequirement("Photo Identification")}
                  className="hover:text-white text-left transition-colors"
                >
                  Send Belt / Bearing Photo
                </button>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Technical Desk
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-mono uppercase text-xs tracking-wider font-bold">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs text-white/60">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFAC00] mt-0.5 shrink-0" />
                <span>Ring Road, Surat - 395 003, Gujarat, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FFAC00] shrink-0" />
                <span>+91 98251 28614 / +91 98251 28463</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href="https://wa.me/919825128614"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors"
                >
                  WhatsApp: +91 98251 28614
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FFAC00] shrink-0" />
                <span>sales@belubeariexim.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Belubeari Exim. All rights reserved. Power Transmission & Industrial Conveyor Solutions.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
