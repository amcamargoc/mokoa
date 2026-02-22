"use client";

import { useState } from "react";
import Link from "next/link";

/**
 * Navbar Component
 *
 * - Sticky on scroll with backdrop blur (glass effect)
 * - MOKAO wordmark in Cinzel display font with gold color
 * - Language toggle (EN / DE / ES) — UI-only, prepared for future i18n
 * - Hamburger menu icon (no shop icon per user request)
 * - Mobile-first: compact on small screens, expanded on desktop
 */

const LANGUAGES = ["EN", "DE", "ES"] as const;
type Language = (typeof LANGUAGES)[number];

export default function Navbar() {
    const [activeLang, setActiveLang] = useState<Language>("EN");
    const [menuOpen, setMenuOpen] = useState(false);
    const [langMenuOpen, setLangMenuOpen] = useState(false);

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 border-b border-mokao-gold/20 glass-panel"
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="mx-auto max-w-7xl px-5 py-4 flex items-center justify-between">
                {/* Hamburger menu */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-mokao-gold hover:text-mokao-cream transition-colors p-1"
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    >
                        {menuOpen ? (
                            <>
                                <line x1="6" y1="6" x2="18" y2="18" />
                                <line x1="6" y1="18" x2="18" y2="6" />
                            </>
                        ) : (
                            <>
                                <line x1="3" y1="7" x2="21" y2="7" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="17" x2="21" y2="17" />
                            </>
                        )}
                    </svg>
                </button>

                {/* Logo */}
                <Link href="/" className="absolute left-1/2 -translate-x-1/2">
                    <h1 className="font-display text-2xl md:text-3xl tracking-[0.2em] text-mokao-gold select-none">
                        MOKAO
                    </h1>
                </Link>

                {/* Language toggle */}
                <div className="relative">
                    <button
                        onClick={() => setLangMenuOpen(!langMenuOpen)}
                        className="flex items-center gap-1 text-xs tracking-wider px-2 py-1 text-mokao-gold font-medium hover:text-mokao-cream transition-colors"
                        aria-expanded={langMenuOpen}
                    >
                        {activeLang}
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5" className={`transition-transform duration-200 ${langMenuOpen ? 'rotate-180' : ''}`}>
                            <path d="M1 1l4 4 4-4" />
                        </svg>
                    </button>

                    {langMenuOpen && (
                        <div className="absolute top-full right-0 mt-2 py-2 w-16 bg-mokao-dark/95 backdrop-blur-md border border-mokao-gold/20 rounded shadow-xl flex flex-col text-center">
                            {LANGUAGES.map((lang) => (
                                <button
                                    key={lang}
                                    onClick={() => { setActiveLang(lang); setLangMenuOpen(false); }}
                                    className={`text-xs tracking-wider px-2 py-2 transition-colors ${activeLang === lang
                                        ? "text-mokao-gold font-medium bg-mokao-gold/5"
                                        : "text-mokao-cream-muted hover:text-mokao-gold hover:bg-mokao-gold/5"
                                        }`}
                                >
                                    {lang}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile menu panel — placeholder for future nav links */}
            {menuOpen && (
                <div className="border-t border-mokao-gold/10 px-5 py-6">
                    <ul className="space-y-4 font-serif text-lg text-mokao-cream">
                        <li>
                            <Link
                                href="/"
                                onClick={() => setMenuOpen(false)}
                                className="hover:text-mokao-gold transition-colors"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/producer"
                                onClick={() => setMenuOpen(false)}
                                className="hover:text-mokao-gold transition-colors"
                            >
                                Our Producers
                            </Link>
                        </li>
                        <li>
                            <a
                                href="#product"
                                onClick={() => setMenuOpen(false)}
                                className="hover:text-mokao-gold transition-colors"
                            >
                                Product
                            </a>
                        </li>
                        <li>
                            <a
                                href="#philosophy"
                                onClick={() => setMenuOpen(false)}
                                className="hover:text-mokao-gold transition-colors"
                            >
                                Philosophy
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
