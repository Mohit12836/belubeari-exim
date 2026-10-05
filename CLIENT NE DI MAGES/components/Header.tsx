"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronRight, Phone } from "lucide-react";

interface HeaderProps {
  onOpenRequirement: (category?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenRequirement }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Timing Belts", href: "#products" },
    { label: "V-Belts", href: "#products" },
    { label: "Conveyor Solutions", href: "#products" },
    { label: "Bearings & Motion", href: "#bearings" },
    { label: "Engineering Specs", href: "#engineering" },
    { label: "Diagnostic Studio", href: "#diagnostics" },
    { label: "Industries", href: "#industries" },
  ];

  return (
    <>
      {/* Rivian Fixed Outer Container */}
      <div className="fixed top-0 inset-x-0 z-50 pointer-events-none p-3 sm:p-5">
        <header
          className={`pointer-events-auto mx-auto max-w-[1360px] rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-[#121315]/90 backdrop-blur-xl border border-white/10 text-white shadow-2xl py-2.5 px-4 sm:px-6"
              : "bg-white/85 backdrop-blur-md border border-[#E0E0DC] text-[#121315] shadow-rivian-nav py-3 px-5 sm:px-7"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Wordmark */}
            <a href="#" className="flex items-center gap-2 group">
              <span
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  scrolled ? "bg-[#FFAC00]" : "bg-[#121315]"
                }`}
              />
              <span className="font-extrabold tracking-tight text-sm sm:text-base uppercase">
                BELUBEARI <span className={scrolled ? "text-[#FFAC00]" : "text-[#5A6065]"}>EXIM</span>
              </span>
            </a>

            {/* Desktop Nav - Rivian Style Minimalist Pills */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${
                    scrolled
                      ? "text-white/80 hover:text-white hover:bg-white/10"
                      : "text-[#5A6065] hover:text-[#121315] hover:bg-[#121315]/5"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="tel:+919825128614"
                className={`text-xs font-semibold transition-colors flex items-center gap-1.5 px-2 py-1 ${
                  scrolled ? "text-white/80 hover:text-white" : "text-[#5A6065] hover:text-[#121315]"
                }`}
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden xl:inline">+91 98251 28614</span>
              </a>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onOpenRequirement()}
                className={`text-xs font-bold rounded-full px-5 py-2 transition-all ${
                  scrolled
                    ? "bg-[#FFAC00] text-[#121315] hover:bg-[#E59B00] shadow-sm"
                    : "bg-[#121315] text-white hover:bg-[#2A2D31] shadow-sm"
                }`}
              >
                Send Requirement
              </motion.button>
            </div>

            {/* Mobile Controls */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={() => onOpenRequirement()}
                className={`text-[11px] font-bold rounded-full px-3 py-1.5 ${
                  scrolled ? "bg-[#FFAC00] text-[#121315]" : "bg-[#121315] text-white"
                }`}
              >
                Inquire
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded-full hover:bg-black/5"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-3 top-20 z-40 bg-[#121315] text-white rounded-3xl p-6 shadow-2xl border border-white/10 sm:hidden"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 text-sm font-semibold text-white/80 hover:text-white border-b border-white/10"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#FFAC00]" />
                </a>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenRequirement();
                  }}
                  className="w-full py-3.5 rounded-full bg-[#FFAC00] text-[#121315] font-bold text-sm flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Send Your Requirement</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
