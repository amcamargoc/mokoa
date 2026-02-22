import Link from "next/link";

/**
 * Footer Component
 *
 * - MOKAO wordmark with wider tracking
 * - Mission one-liner
 * - Berlin retail partners placeholder
 * - Contact information
 * - Social links (Instagram, Email, LinkedIn) — custom SVG icons
 * - Copyright notice
 * - Gold top border for visual separation
 */

export default function Footer() {
    return (
        <footer className="bg-mokao-dark border-t border-mokao-gold/20 py-16 md:py-20 px-5">
            <div className="max-w-7xl mx-auto">
                {/* Top: Logo + Mission */}
                <div className="text-center mb-14">
                    <Link href="/">
                        <h2 className="font-display text-3xl tracking-[0.3em] text-mokao-gold mb-4">
                            MOKAO
                        </h2>
                    </Link>
                    <p className="font-serif italic text-mokao-cream/50 text-sm max-w-md mx-auto">
                        Eliminating unnecessary intermediaries. Creating a direct ethical
                        connection between Colombian farmers and consumers.
                    </p>
                </div>

                {/* Gold divider */}
                <div className="gold-gradient-line mb-14" />

                {/* Grid: Partners · Contact · Social */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-14">
                    {/* Berlin retail partners */}
                    <div className="text-center md:text-left">
                        <h4 className="font-display text-xs tracking-[0.2em] text-mokao-gold mb-4 uppercase">
                            Find Us in Berlin
                        </h4>
                        <ul className="space-y-2 text-sm text-mokao-cream/50 font-sans">
                            <li>Coming soon — retail partners</li>
                            <li className="text-mokao-cream/30 text-xs">
                                Interested in stocking MOKAO?
                                <br />
                                Reach out below.
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="text-center">
                        <h4 className="font-display text-xs tracking-[0.2em] text-mokao-gold mb-4 uppercase">
                            Contact
                        </h4>
                        <ul className="space-y-2 text-sm text-mokao-cream/50 font-sans">
                            <li>
                                <a
                                    href="mailto:hello@mokao.co"
                                    className="hover:text-mokao-gold transition-colors"
                                >
                                    hello@mokao.co
                                </a>
                            </li>
                            <li>Berlin, Germany</li>
                        </ul>
                    </div>

                    {/* Social links */}
                    <div className="text-center md:text-right">
                        <h4 className="font-display text-xs tracking-[0.2em] text-mokao-gold mb-4 uppercase">
                            Follow
                        </h4>
                        <div className="flex items-center justify-center md:justify-end gap-5">
                            {/* Instagram */}
                            <a
                                href="#"
                                aria-label="Instagram"
                                className="text-mokao-cream/40 hover:text-mokao-gold"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                >
                                    <rect x="2" y="2" width="20" height="20" rx="5" />
                                    <circle cx="12" cy="12" r="5" />
                                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                                </svg>
                            </a>

                            {/* Email */}
                            <a
                                href="mailto:hello@mokao.co"
                                aria-label="Email"
                                className="text-mokao-cream/40 hover:text-mokao-gold"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                >
                                    <rect x="2" y="4" width="20" height="16" rx="2" />
                                    <path d="M2 4l10 8 10-8" />
                                </svg>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="text-mokao-cream/40 hover:text-mokao-gold"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                >
                                    <rect x="2" y="2" width="20" height="20" rx="3" />
                                    <path d="M8 11v5M8 8v.01M12 16v-5c0-1.5 1-2 2-2s2 .5 2 2v5" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center pt-8 border-t border-mokao-gold/10">
                    <p className="text-[10px] text-mokao-cream/30 uppercase tracking-[0.2em] font-sans">
                        © 2026 MOKAO Chocolate Colombiano. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
