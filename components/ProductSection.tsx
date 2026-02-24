/**
 * Product Section — 70% Fino de Aroma
 *
 * Design decisions:
 * - Packaging image (caja-verde.jpg) as the hero visual for the product
 * - Ingredients list is concise and factual (from actual packaging)
 * - Tasting notes presented as a minimalist text string for elegance
 * - Trusted icons (badges) use simple SVG icons
 * - Gold accents for section headings and badge borders
 * - Full nutritional info presented in a clean, minimalist table
 */

const TASTING_NOTES = "Dark Fruit · Earthy · Mild Bitterness · Smooth Finish";

const NUTRITION_DATA = [
    { label: "Energy", value: "2365 kJ / 565 kcal" },
    { label: "Fat", value: "42,8 g", isSection: true },
    { label: "of which saturates", value: "25,4 g", isSub: true },
    { label: "Carbohydrate", value: "34,8 g", isSection: true },
    { label: "of which sugars", value: "25,8 g", isSub: true },
    { label: "Fibre", value: "14 g" },
    { label: "Protein", value: "9,8 g" },
    { label: "Salt", value: "0 mg" },
];

/** Trusted icons — certifications and origin */
const BADGES = [
    { label: "Gluten Free", icon: "gluten-free" },
    { label: "Colombia D.O.", icon: "colombia" },
    { label: "Direct Trade", icon: "handshake" },
    { label: "Recyclable", icon: "recycle" },
];

/** Simple SVG icons for badges */
function BadgeIcon({ type }: { type: string }) {
    const iconClass = "w-6 h-6 text-mokao-gold";
    switch (type) {
        case "gluten-free":
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={iconClass}>
                    <path d="M12 2L12 22M12 2L15 5M12 2L9 5M12 22L15 19M12 22L9 19" />
                    <circle cx="12" cy="12" r="9" strokeOpacity="0.2" />
                    <line x1="5" y1="19" x2="19" y2="5" />
                </svg>
            );
        case "colombia":
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={iconClass}>
                    <circle cx="12" cy="12" r="10" strokeOpacity="0.5" />
                    {/* Stylized CO logo paths */}
                    <path d="M9 10a3 3 0 1 0 0 4h1M16 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path d="M12 2a10 10 0 0 1 10 10" strokeOpacity="0.2" />
                </svg>
            );
        case "handshake":
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={iconClass}>
                    <path d="M7 11l3-3 4 4 3-3M2 16l5-5M17 16l5-5M7 11l-2 2M17 11l2 2M12 8l-1 1" />
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
                        The Experience
                    </span>
                    <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-mokao-gold tracking-wide">
                        70% Fino de Aroma
                    </h3>
                </div>

                <div className="max-w-5xl mx-auto md:grid md:grid-cols-2 md:gap-20 md:items-start">
                    {/* Left Column: Product details & Badges */}
                    <div className="flex flex-col space-y-12 mb-16 md:mb-0">
                        {/* Ingredients & Tasting Notes */}
                        <div className="flex flex-col space-y-6">
                            <div>
                                <h4 className="font-display text-xs tracking-[0.3em] text-mokao-gold mb-3 uppercase opacity-80">
                                    Ingredients
                                </h4>
                                <p className="font-serif text-lg text-mokao-cream/90 leading-relaxed italic">
                                    Cocoa paste, cocoa butter, sugar.
                                </p>
                                <p className="text-sm text-mokao-cream/60 mt-3 font-sans max-w-sm">
                                    May contain traces of tree nuts, peanuts, milk, gluten and soy.
                                </p>
                            </div>

                            <div className="pt-6 border-t border-mokao-gold/10">
                                <h4 className="font-display text-xs tracking-[0.3em] text-mokao-gold mb-3 uppercase opacity-80">
                                    Tasting Profile
                                </h4>
                                <p className="font-sans text-sm tracking-widest text-mokao-cream/80 uppercase">
                                    {TASTING_NOTES}
                                </p>
                            </div>
                        </div>

                        {/* Trusted Icons / Our Promise */}
                        <div className="pt-6">
                            <div className="grid grid-cols-2 gap-8">
                                {BADGES.map((badge) => (
                                    <div
                                        key={badge.label}
                                        className="flex flex-col items-center text-center group cursor-default"
                                    >
                                        <div className="mb-3 p-3 rounded-full border border-mokao-gold/10 group-hover:border-mokao-gold/40 transition-colors">
                                            <BadgeIcon type={badge.icon} />
                                        </div>
                                        <span className="text-[9px] tracking-[0.2em] uppercase text-mokao-gold/70 font-sans font-medium">
                                            {badge.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Nutritional Table */}
                    <div className="relative">
                        <div className="bg-mokao-green/20 rounded-xl p-8 border border-mokao-gold/10 shadow-lg group hover:border-mokao-gold/30 transition-colors duration-500">
                            {/* Decorative corner accents for the table container */}
                            <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-mokao-gold/20 rounded-tl-xl transition-colors duration-500 group-hover:border-mokao-gold/50" />
                            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-mokao-gold/20 rounded-br-xl transition-colors duration-500 group-hover:border-mokao-gold/50" />

                            <h4 className="font-display text-xs tracking-[0.3em] text-mokao-gold mb-8 uppercase opacity-80 text-center leading-relaxed">
                                Durchschnittliche Nährwerte je 100g<br />
                                <span className="text-[9px] text-mokao-gold/50 tracking-widest block mt-1">Nutritional information per 100 g</span>
                            </h4>
                            <div className="space-y-4">
                                {NUTRITION_DATA.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className={`flex justify-between items-end border-b border-mokao-gold/5 pb-2 ${item.isSub ? "ml-4 italic text-mokao-cream/60" : "text-mokao-cream/90"
                                            }`}
                                    >
                                        <span className="font-sans text-xs tracking-wide uppercase">
                                            {item.label}
                                        </span>
                                        <span className="font-serif text-sm">
                                            {item.value}
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
