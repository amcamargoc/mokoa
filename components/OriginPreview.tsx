"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/app/i18n-context";

/**
 * Origin Preview Section
 *
 * Design decisions:
 * - Slightly lighter green background to create visual separation from hero
 * - reference-1.jpg shows the farmer at work — authentic, editorial quality
 * - Italic farmer quote adds a human, grounded voice
 * - Colombia map SVG outline as a subtle decorative element
 * - "Meet the Family" CTA links to /producer placeholder page
 * - Gold decorative elements tie back to the packaging palette
 */

export default function OriginPreview() {
    const { t } = useTranslation();

    return (
        <section
            id="origin"
            className="bg-mokao-green py-20 md:py-28 px-5 border-y border-mokao-gold/10 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 md:gap-20 md:items-center mb-16 md:mb-24">
                    {/* Left Column: Text Content */}
                    <div className="flex flex-col h-full justify-center order-2 md:order-1">
                        {/* Section header */}
                        <div className="mb-8 md:mb-12 text-center md:text-left">
                            <span className="inline-block font-serif italic text-mokao-gold/70 text-sm tracking-[0.2em] uppercase mb-4">
                                {t("origin.label")}
                            </span>
                            <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-mokao-gold tracking-wide leading-tight">
                                {t("origin.title")}
                            </h3>
                        </div>

                        <p className="font-serif text-lg md:text-xl text-mokao-cream/90 leading-relaxed mb-10 md:mb-14 text-center md:text-left">
                            {t("origin.text")}
                        </p>

                        {/* Centered Map under text */}
                        <div className="w-full max-w-sm mx-auto aspect-[4/3] rounded-xl overflow-hidden border-2 border-mokao-green shadow-xl group bg-mokao-dark relative">
                            <div className="absolute inset-0 z-10 pointer-events-none ring-1 ring-inset ring-mokao-gold/20 rounded-xl" />
                            <iframe
                                src="https://maps.google.com/maps?q=Maceo,%20Antioquia,%20Colombia&t=k&z=5&ie=UTF8&iwloc=&output=embed"
                                className="w-full h-full grayscale-[50%] contrast-125 opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Map of Maceo, Antioquia, Colombia"
                            ></iframe>
                            {/* Overlay gradient to blend map edges softly */}
                            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.4)]" />
                            <div className="absolute bottom-3 left-3 right-3 bg-mokao-dark/90 backdrop-blur-md p-2 rounded text-center pointer-events-none border border-mokao-gold/10">
                                <span className="text-[10px] uppercase tracking-[0.2em] text-mokao-gold font-display">
                                    {t("origin.mapLabel")}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Visual Composition */}
                    <div className="order-1 md:order-2 w-full max-w-lg mx-auto md:max-w-none mt-8 md:mt-0 mb-12 md:mb-0">
                        {/* Main Image */}
                        <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-mokao-gold/20 shadow-2xl">
                            <Image
                                src="/assets/media/williamreed-cacao.jpg"
                                alt="Fresh cacao showing the rich, natural origins of Mokao chocolate"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>

                {/* Secondary Content: Quote and CTA */}
                <div className="max-w-4xl mx-auto text-center mt-24 md:mt-32 px-4 md:px-0">

                    {/* CTA */}
                    <div className="mt-8">
                        <Link
                            href="/producer"
                            className="inline-flex items-center gap-4 text-mokao-gold font-display text-sm md:text-base tracking-[0.2em] uppercase border-b-2 border-mokao-gold/30 hover:border-mokao-gold pb-2 transition-all group"
                        >
                            {t("origin.cta")}
                            <svg
                                width="20"
                                height="12"
                                viewBox="0 0 20 12"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                className="group-hover:translate-x-2 transition-transform duration-300"
                            >
                                <path d="M0 6h18M13 1l5 5-5 5" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
