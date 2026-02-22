import Image from "next/image";

/**
 * Hero Section — "From Seed to Soul"
 *
 * Design decisions:
 * - Full-viewport height to create an immersive first impression
 * - reference-2.jpg as background (long drying bed — most cinematic composition)
 * - Multi-layered gradient overlay: dark bottom for text readability,
 *   semi-transparent top for depth
 * - Green packaging (caja-verde.jpg) floats as a product teaser on larger screens
 * - CTA scrolls to origin section (#origin)
 * - The "Single Origin" badge anchors the brand promise above the fold
 */

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-end md:items-center overflow-hidden">
            {/* Background image */}
            <Image
                src="/assets/media/reference-2.jpg"
                alt="Cacao beans drying in wooden trays at a farm in Maceo, Antioquia, Colombia"
                fill
                priority
                className="object-cover object-center"
                sizes="100vw"
                quality={85}
            />

            {/* Gradient overlays for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-mokao-dark via-mokao-dark/70 to-mokao-dark/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-mokao-dark/40 to-transparent" />

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-5 pb-20 pt-32 md:py-0 md:flex md:items-center md:justify-between md:gap-12">
                {/* Text block */}
                <div className="md:max-w-xl animate-fade-in">
                    <span className="inline-block font-serif italic text-mokao-gold/80 text-sm tracking-[0.2em] uppercase mb-4">
                        Single Origin
                    </span>

                    <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight mb-6">
                        From Seed
                        <br />
                        to Soul
                    </h2>

                    <p className="font-serif text-lg sm:text-xl text-mokao-cream/80 leading-relaxed mb-10 max-w-md">
                        Experience the deep, complex notes of Maceo, Antioquia. A journey
                        through the heart of Colombian cacao.
                    </p>

                    <a
                        href="#origin"
                        className="inline-flex items-center gap-3 border border-mokao-gold text-mokao-gold px-8 py-4 font-display text-sm tracking-[0.15em] uppercase hover:bg-mokao-gold hover:text-mokao-dark transition-all duration-300 group"
                    >
                        Discover Our Origin
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="group-hover:translate-x-1 transition-transform"
                        >
                            <path d="M8 1v14M1 8l7 7 7-7" />
                        </svg>
                    </a>
                </div>

                {/* Floating packaging mockup — visible on md+ screens */}
                <div className="hidden md:block relative w-72 lg:w-80 flex-shrink-0 animate-slide-up">
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                        <Image
                            src="/assets/media/caja-verde.jpg"
                            alt="MOKAO 70% Fino de Aroma dark chocolate packaging — green edition"
                            fill
                            className="object-contain"
                            sizes="320px"
                        />
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-in-slow">
                <span className="text-[10px] tracking-[0.3em] uppercase text-mokao-gold/50 font-sans">
                    Scroll
                </span>
                <div className="w-px h-8 bg-gradient-to-b from-mokao-gold/50 to-transparent" />
            </div>
        </section>
    );
}
