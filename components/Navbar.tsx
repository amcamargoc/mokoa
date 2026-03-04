"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslation, LanguageCode } from "@/app/i18n-context";

/**
 * Navbar Component
 *
 * - Sticky on scroll with backdrop blur (glass effect)
 * - MOKAO wordmark in Cinzel display font with gold color
 * - Language toggle (EN / DE / ES) — UI-only, prepared for future i18n
 * - Hamburger menu icon (no shop icon per user request)
 * - Mobile-first: compact on small screens, expanded on desktop
 */

const LANGUAGES = [
    {
        code: "EN", flag: (
            <svg viewBox="0 0 64 64" width="16" height="16" className="rounded-sm flex-shrink-0">
                <rect width="64" height="64" fill="#B22234" />
                <rect y="6" width="64" height="6" fill="#FFF" />
                <rect y="18" width="64" height="6" fill="#FFF" />
                <rect y="30" width="64" height="6" fill="#FFF" />
                <rect y="42" width="64" height="6" fill="#FFF" />
                <rect y="54" width="64" height="6" fill="#FFF" />
                <rect width="32" height="34" fill="#3C3B6E" />
                <circle cx="8" cy="8" r="1.5" fill="#FFF" />
                <circle cx="16" cy="8" r="1.5" fill="#FFF" />
                <circle cx="24" cy="8" r="1.5" fill="#FFF" />
                <circle cx="8" cy="17" r="1.5" fill="#FFF" />
                <circle cx="16" cy="17" r="1.5" fill="#FFF" />
                <circle cx="24" cy="17" r="1.5" fill="#FFF" />
                <circle cx="8" cy="26" r="1.5" fill="#FFF" />
                <circle cx="16" cy="26" r="1.5" fill="#FFF" />
                <circle cx="24" cy="26" r="1.5" fill="#FFF" />
            </svg>
        )
    },
    {
        code: "DE", flag: (
            <svg viewBox="0 0 64 64" width="16" height="16" className="rounded-sm flex-shrink-0">
                <rect width="64" height="21.3" fill="#000000" />
                <rect y="21.3" width="64" height="21.3" fill="#DD0000" />
                <rect y="42.6" width="64" height="21.4" fill="#FFCE00" />
            </svg>
        )
    },
    {
        code: "ES", flag: (
            <svg viewBox="0 0 64 64" width="16" height="16" className="rounded-sm flex-shrink-0">
                <rect width="64" height="64" fill="#FCD116" />
                <rect y="32" width="64" height="16" fill="#003893" />
                <rect y="48" width="64" height="16" fill="#CE1126" />
            </svg>
        )
    },
];

export default function Navbar() {
    const { language: activeLang, setLanguage: setActiveLang, t } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [langMenuOpen, setLangMenuOpen] = useState(false);

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 border-b border-mokao-gold/20 bg-mokao-dark/95 backdrop-blur-md"
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
                        className="flex items-center gap-2 text-xs tracking-wider px-2 py-1 text-mokao-gold font-medium hover:text-mokao-cream transition-colors"
                        aria-expanded={langMenuOpen}
                    >
                        <span className="flex items-center justify-center opacity-90">{LANGUAGES.find(l => l.code === activeLang)?.flag}</span>
                        {activeLang}
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5" className={`transition-transform duration-200 ml-1 ${langMenuOpen ? 'rotate-180' : ''}`}>
                            <path d="M1 1l4 4 4-4" />
                        </svg>
                    </button>

                    {langMenuOpen && (
                        <div className="absolute top-full right-0 mt-2 py-2 w-[88px] bg-mokao-dark/95 backdrop-blur-md border border-mokao-gold/20 rounded shadow-xl flex flex-col">
                            {LANGUAGES.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => { setActiveLang(lang.code as LanguageCode); setLangMenuOpen(false); }}
                                    className={`flex items-center gap-2.5 text-xs tracking-wider px-3 py-2.5 transition-colors ${activeLang === lang.code
                                        ? "text-mokao-gold font-medium bg-mokao-gold/5"
                                        : "text-mokao-cream-muted hover:text-mokao-gold hover:bg-mokao-gold/5"
                                        }`}
                                >
                                    <span className="flex items-center justify-center opacity-90">{lang.flag}</span>
                                    {lang.code}
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
                                {t("navbar.home")}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/producer"
                                onClick={() => setMenuOpen(false)}
                                className="hover:text-mokao-gold transition-colors"
                            >
                                {t("navbar.producers")}
                            </Link>
                        </li>
                        <li>
                            <a
                                href="/#product"
                                onClick={() => setMenuOpen(false)}
                                className="hover:text-mokao-gold transition-colors"
                            >
                                {t("navbar.product")}
                            </a>
                        </li>
                        <li>
                            <a
                                href="/#philosophy"
                                onClick={() => setMenuOpen(false)}
                                className="hover:text-mokao-gold transition-colors"
                            >
                                {t("navbar.philosophy")}
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
