"use client";

import { useTranslation } from "@/app/i18n-context";

/**
 * Philosophy Section
 *
 * Design decisions:
 * - Editorial layout with generous whitespace — let the words breathe
 * - Large Lora italic for the main statement to feel like a manifesto
 * - Gold decorative line centered above the quote
 * - Secondary body text provides context without overpowering the quote
 * - This section intentionally has no images — pure typography + space
 * - The message aligns with the brand tone: calm, confident, no activism
 */

export default function PhilosophySection() {
    const { t } = useTranslation();

    return (
        <section
            id="philosophy"
            className="bg-mokao-green py-24 md:py-36 px-5 border-y border-mokao-gold/10"
        >
            <div className="max-w-3xl mx-auto text-center">
                {/* Decorative element */}
                <div className="flex items-center justify-center gap-4 mb-12">
                    <div className="w-12 h-px bg-mokao-gold/30" />
                    <span className="font-serif italic text-mokao-gold/50 text-sm tracking-[0.2em] uppercase">
                        {t("philosophy.label")}
                    </span>
                    <div className="w-12 h-px bg-mokao-gold/30" />
                </div>

                {/* Main statement — editorial typography */}
                <blockquote className="mb-12">
                    <p className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-mokao-cream leading-snug tracking-tight">
                        {t("philosophy.quote1_1")}
                        <br />
                        {t("philosophy.quote1_2")}
                    </p>
                    <p className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-mokao-gold leading-snug tracking-tight mt-4">
                        {t("philosophy.quote2")}
                    </p>
                </blockquote>

                {/* Gold centerline */}
                <div className="w-16 h-px bg-mokao-gold/40 mx-auto mb-12" />

                {/* Supporting text */}
                <p className="font-serif text-lg text-mokao-cream/60 leading-relaxed max-w-lg mx-auto mb-6">
                    {t("philosophy.text1")}
                </p>

                <p className="font-sans text-sm text-mokao-cream/40 tracking-wide">
                    {t("philosophy.text2")}
                </p>
            </div>
        </section>
    );
}
