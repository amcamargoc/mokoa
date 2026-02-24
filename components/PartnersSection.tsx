"use client";

import Image from "next/image";
import { useRef, useState } from "react";

/**
 * Partners Section — "Find us in Berlin"
 * 
 * Design decisions:
 * - Minimalist horizontal carousel for high-end boutique display.
 * - Square containers to focus on large, impactful brand icons.
 * - Higher contrast typography for better legibility.
 * - Seamless infinite marquee for a dynamic brand wall effect.
 */

const PARTNERS = [
    { name: "Amber & Cocoa", logo: "/assets/media/partner-1.png" },
    { name: "The Velvet Bar", logo: "/assets/media/partner-2.png" },
    { name: "Origin Roots", logo: "/assets/media/partner-3.png" },
    { name: "Silk & Spice", logo: "/assets/media/partner-4.png" },
];

export default function PartnersSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    return (
        <section id="partners" className="py-24 md:py-36 bg-mokao-dark overflow-hidden border-t border-mokao-gold/5 mt-[-1px]">
            <div className="max-w-7xl mx-auto px-5 mb-16 md:mb-24">
                {/* Section header */}
                <div className="text-center md:text-left">
                    <span className="inline-block font-serif italic text-mokao-gold/60 text-sm tracking-[0.2em] uppercase mb-4">
                        Local Stockists
                    </span>
                    <h3 className="font-display text-4xl md:text-6xl text-mokao-gold tracking-wide">
                        Find us in Berlin
                    </h3>
                </div>
            </div>

            {/* Carousel Content */}
            <div
                className="relative w-full"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Gradient fades for edges */}
                <div className="absolute inset-y-0 left-0 w-20 md:w-80 bg-gradient-to-r from-mokao-dark via-mokao-dark/40 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-20 md:w-80 bg-gradient-to-l from-mokao-dark via-mokao-dark/40 to-transparent z-10 pointer-events-none" />

                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto hide-scrollbar scroll-smooth"
                >
                    <div
                        className="flex w-fit animate-marquee py-4"
                        style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
                    >
                        {/* 4x list for seamless infinite loop with only 4 items */}
                        {[...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, idx) => (
                            <div
                                key={`${partner.name}-${idx}`}
                                className="flex-shrink-0 w-64 md:w-80 px-6 md:px-10"
                            >
                                <div
                                    className="relative aspect-square rounded-2xl border border-mokao-gold/10 flex items-center justify-center p-4 md:p-6 overflow-hidden transition-all duration-500 hover:border-mokao-gold/30 hover:bg-mokao-gold/[0.02]"
                                >
                                    <div className="relative w-full h-full max-w-[95%] max-h-[95%]">
                                        <Image
                                            src={partner.logo}
                                            alt={`${partner.name} logo`}
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 768px) 300px, 500px"
                                            priority={idx < 4}
                                        />
                                    </div>
                                </div>
                                <div className="mt-8 text-center">
                                    <span className="text-[12px] md:text-sm uppercase tracking-[0.4em] text-mokao-gold/80 font-sans font-medium">
                                        {partner.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-5 text-center mt-24 md:mt-32">
                <p className="font-serif italic text-mokao-cream/30 text-base max-w-lg mx-auto leading-relaxed">
                    Connecting the heart of Maceo with the most refined boutiques in the city.
                    <br />
                    <a href="mailto:partners@mokao.co" className="text-mokao-gold/50 hover:text-mokao-gold transition-colors mt-8 inline-block not-italic uppercase tracking-[0.4em] text-[11px] font-sans border-b border-mokao-gold/20 pb-2">
                        Become a Stockist →
                    </a>
                </p>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-25%); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}} />
        </section>
    );
}
