import Image from "next/image";
import Link from "next/link";

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
    return (
        <section
            id="origin"
            className="bg-mokao-green py-20 md:py-28 px-5 border-y border-mokao-gold/10"
        >
            <div className="max-w-7xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-14 md:mb-20">
                    <span className="inline-block font-serif italic text-mokao-gold/70 text-sm tracking-[0.2em] uppercase mb-3">
                        Our Roots
                    </span>
                    <h3 className="font-display text-3xl md:text-4xl text-mokao-gold tracking-wide">
                        From Maceo to Europe
                    </h3>
                </div>

                <div className="md:grid md:grid-cols-2 md:gap-16 md:items-center">
                    {/* Image + location badge */}
                    <div className="relative mb-10 md:mb-0">
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-mokao-gold/20">
                            <Image
                                src="/assets/media/reference-1.jpg"
                                alt="A farmer carefully selecting and drying cacao beans in Maceo, Antioquia"
                                fill
                                className="object-cover grayscale brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-700"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />

                            {/* Location badge overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                <p className="font-display text-xs tracking-[0.2em] text-mokao-gold">
                                    MACEO, ANTIOQUIA
                                </p>
                                <p className="text-xs text-mokao-cream/60 mt-1">Colombia</p>
                            </div>
                        </div>

                        {/* Decorative Colombia silhouette — subtle SVG outline */}
                        <div className="absolute -right-4 -top-4 w-20 h-28 opacity-10 hidden md:block">
                            <svg viewBox="0 0 100 140" fill="none" stroke="currentColor" strokeWidth="1" className="text-mokao-gold w-full h-full">
                                <path d="M50 5 C35 8, 20 15, 15 30 C10 45, 12 55, 18 70 C22 80, 15 90, 20 100 C25 110, 30 120, 40 125 C50 130, 55 128, 60 120 C65 112, 70 105, 75 95 C80 85, 85 70, 82 55 C80 40, 70 25, 60 15 C55 10, 52 6, 50 5Z" />
                            </svg>
                        </div>
                    </div>

                    {/* Text content */}
                    <div>
                        <p className="font-serif text-lg text-mokao-cream/85 leading-relaxed mb-8">
                            Our cacao is carefully grown by farming families in Maceo,
                            Antioquia, where expertise has been passed down through
                            generations. The land is honored and nurtured throughout the
                            production process, preserving the soil and its natural cycles.
                        </p>

                        {/* Farmer quote */}
                        <blockquote className="border-l-2 border-mokao-gold/40 pl-6 mb-10">
                            <p className="font-serif italic text-mokao-cream/70 text-lg leading-relaxed">
                                &ldquo;Every harvest carries the knowledge of those who came
                                before us. We don&rsquo;t just grow cacao — we continue a
                                legacy.&rdquo;
                            </p>
                            <cite className="block mt-3 text-sm text-mokao-gold/60 font-sans not-italic tracking-wide">
                                — The Arboleda Family, Maceo
                            </cite>
                        </blockquote>

                        {/* CTA */}
                        <Link
                            href="/producer"
                            className="inline-flex items-center gap-3 text-mokao-gold font-display text-sm tracking-[0.15em] uppercase hover:gap-5 transition-all duration-300 group"
                        >
                            Meet the Family
                            <svg
                                width="20"
                                height="12"
                                viewBox="0 0 20 12"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                className="group-hover:translate-x-1 transition-transform"
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
