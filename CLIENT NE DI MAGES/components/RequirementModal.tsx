"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Camera, FileText, CheckCircle2, MessageSquare } from "lucide-react";

interface RequirementModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
}

export const RequirementModal: React.FC<RequirementModalProps> = ({
  isOpen,
  onClose,
  defaultCategory = "Timing Belts",
}) => {
  const [category, setCategory] = useState(defaultCategory);
  const [partNumber, setPartNumber] = useState("");
  const [machineApp, setMachineApp] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    "Timing Belts",
    "V-Belts",
    "Conveyor Belts",
    "Bearings & Pillow Blocks",
    "Linear Motion Guides",
    "Textile Cots & Aprons",
    "Special / Other Component",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const message = `Hello Belubeari Exim, I have an industrial requirement:%0A%0A*Category:* ${category}%0A*Part No / Specs:* ${partNumber || "Not specified"}%0A*Machine / Application:* ${machineApp || "Need identification"}%0A*Name:* ${clientName || "Buyer"}%0A*Phone:* ${clientPhone || "N/A"}`;
    window.open(`https://wa.me/919825128614?text=${message}`, "_blank");
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setPartNumber("");
    setMachineApp("");
    setClientName("");
    setClientPhone("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop with dark blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="relative w-full max-w-2xl bg-[#1A1C1E] border border-white/10 text-white rounded-3xl shadow-2xl overflow-hidden z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-7 py-5 border-b border-white/10 bg-[#121315]">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FFAC00]" />
                  <span className="text-xs font-mono tracking-wider text-[#FFAC00] uppercase font-bold">
                    Technical Desk & Sourcing
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mt-1">
                  Send Your Component Requirement
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-white/50 hover:text-white rounded-full hover:bg-white/5 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-7 sm:p-9 max-h-[80vh] overflow-y-auto">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Requirement Received</h4>
                  <p className="text-white/70 max-w-md mx-auto text-sm leading-relaxed">
                    Thank you. Our technical engineering team is reviewing your requirement. We will contact you promptly with exact component specifications and availability.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={handleWhatsAppDirect}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-sm transition-all shadow-md"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Send Photos on WhatsApp Directly
                    </button>
                    <button
                      onClick={resetAndClose}
                      className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-sm font-semibold transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Category Selection */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/70 font-bold mb-2">
                      Select Component Category
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setCategory(cat)}
                          className={`text-xs px-3.5 py-2.5 rounded-xl border text-left transition-all ${
                            category === cat
                              ? "bg-[#FFAC00] border-[#FFAC00] text-[#121315] font-bold shadow-sm"
                              : "bg-[#121315] border-white/10 text-white/70 hover:border-white/25 hover:text-white"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Part Number / Belt Code */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/70 font-bold mb-2 flex items-center justify-between">
                      <span>Part Number / Belt Markings (If Available)</span>
                      <span className="text-white/40 font-normal lowercase">e.g. Gates 4326 14MGT / FC208</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={partNumber}
                        onChange={(e) => setPartNumber(e.target.value)}
                        placeholder="Enter part number, pitch, tooth count, or dimensions..."
                        className="w-full bg-[#121315] border border-white/15 focus:border-[#FFAC00] text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm outline-none transition-all shadow-sm"
                      />
                      <FileText className="w-4 h-4 text-white/30 absolute right-3.5 top-3.5" />
                    </div>
                  </div>

                  {/* Machine or Application Details */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/70 font-bold mb-2">
                      Machine / Application Description
                    </label>
                    <textarea
                      rows={3}
                      value={machineApp}
                      onChange={(e) => setMachineApp(e.target.value)}
                      placeholder="e.g. Replacement belt for biscuit packaging conveyor; need high-torque & oil-resistant belt..."
                      className="w-full bg-[#121315] border border-white/15 focus:border-[#FFAC00] text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm outline-none transition-all resize-none shadow-sm"
                    />
                  </div>

                  {/* Contact Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-white/70 font-bold mb-2">
                        Your Name / Company *
                      </label>
                      <input
                        type="text"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="e.g. Ramesh Shah / Precision Works"
                        className="w-full bg-[#121315] border border-white/15 focus:border-[#FFAC00] text-white placeholder-white/30 rounded-xl px-4 py-2.5 text-sm outline-none transition-all shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-white/70 font-bold mb-2">
                        Mobile Number / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        placeholder="e.g. +91 98250 XXXXX"
                        className="w-full bg-[#121315] border border-white/15 focus:border-[#FFAC00] text-white placeholder-white/30 rounded-xl px-4 py-2.5 text-sm outline-none transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Quick Photo Tip */}
                  <div className="p-3.5 rounded-2xl bg-[#121315] border border-white/10 flex items-start gap-3 text-xs text-white/60">
                    <Camera className="w-4 h-4 text-[#FFAC00] mt-0.5 shrink-0" />
                    <span>
                      <strong className="text-white">Have a photo of the old component?</strong> Submit this form or tap below to send photos directly to our engineers on WhatsApp.
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="btn-rivian-yellow flex-1 py-3.5"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Requirement</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="btn-rivian-outline-dark py-3.5 flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4 text-[#25D366]" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
