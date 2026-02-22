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
                src="/assets/media/williamreed-cacao.jpg"
                alt="Fresh Colombian cacao pods showing vibrant colors and organic textures"
                fill
                priority
                className="object-cover object-center"
                sizes="100vw"
                quality={90}
            />

            {/* Gradient overlays for perfect contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-mokao-dark via-mokao-dark/70 to-mokao-dark/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-mokao-dark/90 via-mokao-dark/60 to-transparent" />

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-40 pb-36 flex flex-col justify-end h-full">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 lg:gap-24">
                    {/* Title block */}
                    <div className="max-w-2xl text-left">
                        <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.1] font-light tracking-tight">
                            Cacao <span className="block text-mokao-gold italic">con propósito.</span>
                        </h2>
                    </div>

                    {/* Description block */}
                    <div className="max-w-md md:pb-4 text-left md:text-right flex flex-col md:items-end">
                        <p className="font-serif text-lg sm:text-xl text-mokao-cream/90 leading-relaxed">
                            Elaborado con excelencia, cultivado con respeto y comercializado con transparencia real.
                        </p>
                    </div>
                </div>
            </div>

            {/* Scroll indicator / CTA */}
            <a
                href="#origin"
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 transition-opacity duration-300 hover:opacity-80 group cursor-pointer"
                aria-label="Conoce MOKAO"
            >
                <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-mokao-gold/80 font-sans group-hover:text-mokao-gold transition-colors">
                    Conoce MOKAO
                </span>
                <div className="mt-1">
                    <svg className="w-5 h-5 text-mokao-gold/80 group-hover:text-mokao-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </a>
        </section>
    );
}
