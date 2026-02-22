import Image from "next/image";

/**
 * Product Section — 70% Fino de Aroma
 *
 * Design decisions:
 * - Packaging image (caja-verde.jpg) as the hero visual for the product
 * - Ingredients list is concise and factual (from actual packaging)
 * - Tasting notes presented as a 2x2 grid for scannability
 * - Sustainability badges use simple SVG icons (no external icon libraries)
 * - Gold accents for section headings and badge borders
 * - Full nutritional info mirrors the packaging back panel
 */

/** Tasting note data — extracted from packaging and brand materials */
const TASTING_NOTES = [
    {
        icon: "🍇",
        title: "Dark Fruit",
        description: "Dried plum, dark cherry",
    },
    {
        icon: "🌿",
        title: "Earthy",
        description: "Forest floor, cedar",
    },
    {
        icon: "🍫",
        title: "Mild Bitterness",
        description: "Balanced, not sharp",
    },
    {
        icon: "✨",
        title: "Smooth Finish",
        description: "Long, clean aftertaste",
    },
];

/** Sustainability badges — core brand promises */
const BADGES = [
    { label: "Direct Trade", icon: "handshake" },
    { label: "Single Origin", icon: "location" },
    { label: "Small Batch", icon: "craft" },
    { label: "Recyclable", icon: "recycle" },
];

/** Simple SVG icons for badges to avoid external dependencies */
function BadgeIcon({ type }: { type: string }) {
    const iconClass = "w-6 h-6 text-mokao-gold";
    switch (type) {
        case "handshake":
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={iconClass}>
                    <path d="M7 11l3-3 4 4 3-3M2 16l5-5M17 16l5-5M7 11l-2 2M17 11l2 2M12 8l-1 1" />
                </svg>
            );
        case "location":
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={iconClass}>
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                </svg>
            );
        case "craft":
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={iconClass}>
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M12 7v10M7 12h10" />
                </svg>
            );
        case "recycle":
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={iconClass}>
                    <path d="M7 19l-4-4 4-4M17 5l4 4-4 4M14 3l-4 18" />
                </svg>
            );
        default:
            return null;
    }
}

export default function ProductSection() {
    return (
        <section id="product" className="py-20 md:py-28 px-5">
            <div className="max-w-7xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-14 md:mb-20">
                    <span className="inline-block font-serif italic text-mokao-gold/70 text-sm tracking-[0.2em] uppercase mb-3">
                        The Chocolate
                    </span>
                    <h3 className="font-display text-3xl md:text-4xl text-mokao-gold tracking-wide">
                        70% Fino de Aroma
                    </h3>
                </div>

                <div className="md:grid md:grid-cols-2 md:gap-16 md:items-start">
                    {/* Packaging image */}
                    <div className="relative mb-12 md:mb-0">
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-mokao-gold/20 bg-mokao-green">
                            <Image
                                src="/assets/media/caja-verde.jpg"
                                alt="MOKAO 70% Feine Dunkle Schokolade — green packaging showing mountain landscape and brand details"
                                fill
                                className="object-contain p-4"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        {/* Decorative corner accents */}
                        <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-mokao-gold/30 rounded-tl-lg" />
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-mokao-gold/30 rounded-br-lg" />
                    </div>

                    {/* Product details */}
                    <div>
                        {/* Ingredients */}
                        <div className="mb-10">
                            <h4 className="font-display text-sm tracking-[0.2em] text-mokao-gold mb-4 uppercase">
                                Ingredients
                            </h4>
                            <p className="font-serif text-mokao-cream/80 leading-relaxed">
                                Cacao paste, cocoa butter, and sugar. May contain traces of tree
                                nuts, peanuts, milk, gluten, and soy.
                            </p>
                            <p className="text-sm text-mokao-cream/50 mt-2 font-sans">
                                80g · Maceo — Kolumbien / Colombia
                            </p>
                        </div>

                        {/* Tasting notes grid */}
                        <div className="mb-10">
                            <h4 className="font-display text-sm tracking-[0.2em] text-mokao-gold mb-4 uppercase">
                                Tasting Notes
                            </h4>
                            <div className="grid grid-cols-2 gap-4">
                                {TASTING_NOTES.map((note) => (
                                    <div
                                        key={note.title}
                                        className="p-4 border border-mokao-gold/15 rounded-lg"
                                    >
                                        <span className="text-2xl mb-2 block">{note.icon}</span>
                                        <p className="font-display text-xs tracking-wider text-mokao-cream mb-1">
                                            {note.title}
                                        </p>
                                        <p className="text-xs text-mokao-cream/50 font-sans">
                                            {note.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Gold separator */}
                        <div className="gold-gradient-line mb-10" />

                        {/* Sustainability badges */}
                        <div>
                            <h4 className="font-display text-sm tracking-[0.2em] text-mokao-gold mb-4 uppercase">
                                Our Promise
                            </h4>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {BADGES.map((badge) => (
                                    <div
                                        key={badge.label}
                                        className="flex flex-col items-center text-center p-3"
                                    >
                                        <BadgeIcon type={badge.icon} />
                                        <span className="text-[10px] tracking-[0.15em] uppercase text-mokao-cream/60 mt-2 font-sans">
                                            {badge.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
