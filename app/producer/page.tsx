import Link from "next/link";

/**
 * Producer Page — Placeholder
 *
 * Clean placeholder for the /producer route.
 * Will be expanded later with full producer profiles,
 * photo galleries, and partnership details.
 */

export default function ProducerPage() {
    return (
        <main className="min-h-screen flex items-center justify-center px-5 pt-20">
            <div className="max-w-lg text-center">
                {/* Decorative element */}
                <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="w-8 h-px bg-mokao-gold/30" />
                    <span className="text-mokao-gold/50 text-sm tracking-[0.2em] font-serif italic">
                        Coming Soon
                    </span>
                    <div className="w-8 h-px bg-mokao-gold/30" />
                </div>

                <h2 className="font-display text-3xl md:text-4xl text-mokao-gold tracking-wide mb-6">
                    Meet Our Producers
                </h2>

                <p className="font-serif text-lg text-mokao-cream/60 leading-relaxed mb-10">
                    The families of Maceo, Antioquia have cultivated cacao for
                    generations. Their story — and ours — will be told here soon.
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center gap-3 text-mokao-gold font-display text-sm tracking-[0.15em] uppercase hover:gap-5 transition-all duration-300 group"
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
                    Back to Home
                </Link>
            </div>
        </main>
    );
}
