"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductLineup } from "@/components/ProductLineup";
import { EngineeringSpecs } from "@/components/EngineeringSpecs";
import { RequirementSection } from "@/components/RequirementSection";
import { Industries } from "@/components/Industries";
import { TrustValues } from "@/components/TrustValues";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { RequirementModal } from "@/components/RequirementModal";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Timing Belts");

  const handleOpenRequirement = (category?: string) => {
    if (category) {
      setSelectedCategory(category);
    }
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#F5F5F3] text-[#121315]">
      {/* 1. Rivian Floating Pill Header */}
      <Header onOpenRequirement={handleOpenRequirement} />

      {/* 2. Rivian Full-Bleed Cinematic Hero with Spec Ribbon */}
      <Hero onOpenRequirement={handleOpenRequirement} />

      {/* 3. Rivian-Inspired Product Lineup (Interactive Models Gallery with Pill Tabs) */}
      <ProductLineup onOpenRequirement={handleOpenRequirement} />

      {/* 4. Engineering & Technology Deep Dive Bento Grid */}
      <EngineeringSpecs onOpenRequirement={handleOpenRequirement} />

      {/* 5. Diagnostic & Assistance Studio ("Have old belt? Send us a photo") */}
      <RequirementSection onOpenRequirement={handleOpenRequirement} />

      {/* 6. Commercial Fleet & Sector Applications */}
      <Industries onSelectIndustry={handleOpenRequirement} />

      {/* 7. Core Principles & Engineering Reliability */}
      <TrustValues />

      {/* 8. Full-Bleed Cinematic Final Action Section */}
      <FinalCTA onOpenRequirement={handleOpenRequirement} />

      {/* 9. Minimalist Editorial Footer */}
      <Footer onOpenRequirement={handleOpenRequirement} />

      {/* 10. Interactive Technical Requirement Modal */}
      <RequirementModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        defaultCategory={selectedCategory}
      />
    </main>
  );
}
