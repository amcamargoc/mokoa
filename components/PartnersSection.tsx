import Image from "next/image";

/**
 * Partners Section — "Find us in Berlin"
 * 
 * Design decisions:
 * - Clean grid layout to showcase partner logos
 * - Minimalist typography for store names and locations
 * - Subtle hover effects on logos to encourage interaction
 * - Consistent color palette with the rest of the site (green/gold/cream)
 */

const PARTNERS = [
    {
        name: "With Choc and Charme",
        location: "Berlin — Charlottenburg",
        logo: "/assets/media/partner-choc-charme.png",
        website: "https://www.instagram.com/with_choc_and_charme/",
    },
    {
        name: "Rosa Canina",
        location: "Berlin — Prenzlauer Berg",
        logo: "/assets/media/partner-rosa-canina.png",
        website: "https://rosacanina.eu/",
    },
];

export default function PartnersSection() {
    return (
        <section id="partners" className="py-24 md:py-32 px-5 bg-mokao-dark">
            <div className="max-w-5xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-16">
                    <span className="inline-block font-serif italic text-mokao-gold/70 text-sm tracking-[0.2em] uppercase mb-4">
                        Berlin Retailers
                    </span>
                    <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-mokao-gold tracking-wide">
                        Find us in Berlin
                    </h3>
                </div>

                {/* Partners Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-20 max-w-4xl mx-auto">
                    {PARTNERS.map((partner) => (
                        <div key={partner.name} className="flex flex-col items-center group">
                            <a
                                href={partner.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative w-full aspect-square max-w-[280px] rounded-2xl overflow-hidden border border-mokao-gold/10 bg-mokao-green/10 backdrop-blur-sm p-8 flex items-center justify-center transition-all duration-500 group-hover:border-mokao-gold/30 group-hover:bg-mokao-green/20"
                            >
                                <div className="relative w-full h-full grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
                                    <Image
                                        src={partner.logo}
                                        alt={`${partner.name} logo`}
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                {/* Hover overlay with brand accent */}
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-mokao-gold/20 rounded-2xl pointer-events-none transition-all duration-500" />
                            </a>

                            <div className="mt-8 text-center">
                                <h4 className="font-display text-xl text-mokao-cream mb-2 tracking-wide">
                                    {partner.name}
                                </h4>
                                <p className="font-sans text-xs uppercase tracking-[0.2em] text-mokao-gold/60">
                                    {partner.location}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer note */}
                <div className="mt-20 text-center">
                    <div className="w-12 h-px bg-mokao-gold/20 mx-auto mb-8" />
                    <p className="font-serif italic text-mokao-cream/40 text-sm max-w-md mx-auto">
                        Interested in bringing the soul of Colombian cacao to your store?
                        <br />
                        <a href="mailto:hello@mokao.co" className="text-mokao-gold/60 hover:text-mokao-gold transition-colors mt-2 inline-block not-italic uppercase tracking-widest text-[10px]">
                            Become a Partner →
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
