"use client";

import Image from "next/image";
import { useTranslation } from "@/app/i18n-context";

/**
 * Hero Section — "From Seed to Soul"
 *
 * Design decisions (Iteration 5 - Green & Gold Refinement):
 * - Deep forest green base canvas (`bg-[#1a291f]`).
 * - Immersive background image: `hero_2.png` softly blended natively into the elegant green.
 * - Gradient refinement: Removed muddy transitions, using richer green masks (`from-[#14261b]`) and overlay blends to keep the forest texture warm and alive.
 * - High-contrast Typography: Removed stark white. Maintained a majestic centered layout but shifted text to a warm ivory/sunlit gold (`#fdf8e7`) and brand gold (`text-mokao-gold`) for ultimate premium warmth.
 * - Central Glow: Added a very subtle, soft radial glow behind the text to guarantee perfect contrast and an ethereal "sunlight in the forest" vibe.
 */

export default function Hero() {
    const { t } = useTranslation();

    return (
        <section className="relative min-h-screen bg-[#1a291f] flex items-center justify-center overflow-hidden transition-colors duration-700">

            {/* Atmospheric Background Image Container */}
            <div className="absolute inset-0 z-0 opacity-[0.85] mix-blend-overlay">
                <Image
                    src="/assets/media/hero_2.png"
                    alt="Elegant Climate-Friendly Cacao Forest"
                    fill
                    priority
                    className="object-cover object-center scale-105"
                    sizes="100vw"
                    quality={90}
                />
            </div>

            {/* Refined Seamless Gradient Overlays merging the image cleanly without muddying */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#14261b] via-[#1a291f]/50 to-[#1a291f]/20 pointer-events-none" />
            <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#14261b]/80 via-transparent to-[#14261b]/80 pointer-events-none" />

            {/* Subtle Ethereal Central Glow for Text Legibility and Warmth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] w-[80vw] md:w-[60vw] h-[60vh] bg-[#f7eedc] opacity-[0.06] blur-[100px] rounded-full pointer-events-none" />

            {/* Centered Content Container */}
            <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 flex flex-col items-center text-center mt-16 md:mt-24">

                {/* Title */}
                <h2 className="font-display text-5xl sm:text-6xl lg:text-[6.5rem] text-[#fdf8e7] leading-[1.05] font-light tracking-tight drop-shadow-lg">
                    {t("hero.title")} <span className="block text-mokao-gold italic mt-3">{t("hero.subtitle1")}</span>
                </h2>

                {/* Subtitle */}
                <p className="mt-8 max-w-md md:max-w-lg font-serif text-lg sm:text-xl text-[#e8dfc9] leading-relaxed font-light tracking-wide lg:text-2xl drop-shadow-md">
                    {t("hero.subtitle2")}
                </p>

            </div>

            {/* Scroll indicator / CTA - Bottom Anchored */}
            <a
                href="#origin"
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 transition-all duration-500 hover:opacity-100 opacity-90 group cursor-pointer"
                aria-label={t("hero.cta")}
            >
                <span className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-mokao-gold font-sans font-medium hover:tracking-[0.55em] transition-all duration-500 drop-shadow-md">
                    {t("hero.cta")}
                </span>
                <div className="mt-1 animate-bounce">
                    <svg className="w-5 h-5 text-mokao-gold transition-colors duration-300 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </a>

        </section>
    );
}
