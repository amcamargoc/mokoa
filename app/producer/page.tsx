import Image from "next/image";
import Link from "next/link";

/**
 * Producer Page
 *
 * Designed with emotional resonance:
 * - Full bleed image of the origin (reference-3.jpg)
 * - Evocative quote to connect with the farming families
 * - Strong, solid CTA button to return home
 */

export default function ProducerPage() {
    return (
        <main className="relative min-h-screen flex items-center justify-center overflow-hidden px-5 py-24">
            {/* Background Image */}
            <Image
                src="/assets/media/reference-3.jpg"
                alt="The Arboleda family on their cacao farm in Maceo, Antioquia"
                fill
                priority
                className="object-cover object-center"
                sizes="100vw"
                quality={85}
            />

            {/* Overlays for atmosphere and text readability */}
            <div className="absolute inset-0 bg-mokao-dark/65 mix-blend-multiply" />
            <div className="absolute inset-0 bg-black/30" />

            <div className="relative z-10 max-w-3xl mx-auto text-center">
                {/* Decorative element */}
                <div className="flex items-center justify-center gap-6 mb-8">
                    <div className="w-16 h-px bg-mokao-gold/40" />
                    <span className="text-mokao-gold font-serif italic text-sm tracking-[0.25em] uppercase">
                        Our Producers
                    </span>
                    <div className="w-16 h-px bg-mokao-gold/40" />
                </div>

                <h2 className="font-display text-4xl md:text-5xl lg:text-7xl text-white leading-tight mb-12">
                    The Hands Behind
                    <br />
                    the Harvest
                </h2>

                <blockquote className="mb-12 border-l-2 md:border-l-0 md:border-y-2 border-mokao-gold/20 py-8 px-6 md:px-12 bg-mokao-dark/20 backdrop-blur-sm rounded-lg">
                    <p className="font-serif italic text-xl md:text-2xl text-mokao-cream leading-relaxed mb-6">
                        &ldquo;Cacao is not just a crop, it is the heartbeat of our family. Every tree we plant is a promise to the earth and to our children.&rdquo;
                    </p>
                    <cite className="block text-sm text-mokao-gold font-sans not-italic tracking-[0.15em] uppercase">
                        — The Arboleda Family, Maceo
                    </cite>
                </blockquote>

                <p className="font-serif text-lg text-mokao-cream/80 leading-relaxed max-w-xl mx-auto mb-16">
                    For generations, the families of Maceo, Antioquia have cultivated Fino de Aroma cacao with unwavering respect for the land. Their story — the true heart of MOKAO — will be shared here soon.
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center gap-3 bg-mokao-gold text-mokao-dark px-10 py-5 font-display text-xs tracking-[0.2em] uppercase hover:bg-mokao-gold-muted transition-colors duration-300 group"
                >
                    <svg
                        width="20"
                        height="12"
                        viewBox="0 0 20 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="rotate-180 group-hover:-translate-x-1 transition-transform"
                    >
                        <path d="M0 6h18M13 1l5 5-5 5" />
                    </svg>
                    Return Home
                </Link>
            </div>
        </main>
    );
}
