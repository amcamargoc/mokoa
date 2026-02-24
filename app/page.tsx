import Hero from "@/components/Hero";
import OriginPreview from "@/components/OriginPreview";
import ProductSection from "@/components/ProductSection";
import PhilosophySection from "@/components/PhilosophySection";
import PartnersSection from "@/components/PartnersSection";

/**
 * Landing Page
 *
 * Composes all sections in order:
 * 1. Hero — "From Seed to Soul" (full-bleed, immersive)
 * 2. Origin Preview — Maceo story + farmer quote
 * 3. Product — 70% Fino de Aroma details + packaging
 * 4. Philosophy — Editorial "grow right" manifesto
 * 5. Partners — Berlin retailers & stockists
 *
 * Navbar and Footer are rendered from layout.tsx to persist across routes.
 */

export default function Home() {
  return (
    <main>
      <Hero />
      <OriginPreview />
      <ProductSection />
      <PhilosophySection />
      <PartnersSection />
    </main>
  );
}
