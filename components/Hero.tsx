import React from "react";
import Navbar from "./Navbar";
import HeroHeader from "./HeroHeader";
import HeroDecorations from "./HeroDecorations";
import HeroCenterpiece from "./HeroCenterpiece";

export default function Hero() {
  return (
    <section className="relative w-full bg-primary-800 bg-hero-grid min-h-256 overflow-hidden flex flex-col justify-between select-none">
      {/* 1. Floating 3D Background Decorative Shapes */}
      <HeroDecorations />

      {/* 2. Top Navigation Bar */}
      <Navbar />

      {/* 3. Main Hero Text & Search Bar */}
      <div className="flex-1 flex flex-col justify-start">
        <HeroHeader />

        {/* 4. Centerpiece: Person, Lime Arc & Floating Information Cards */}
        <HeroCenterpiece />
      </div>
    </section>
  );
}
