"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/app/i18n-context";

/**
 * Meet the Producer Page
 *
 * Designed with emotional resonance:
 * - Focus on authenticity, transparency, and human storytelling.
 * - Humanizes the brand and shows who cultivates the cacao.
 * - Avoids nationalistic language.
 */

export default function ProducerPage() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-mokao-dark text-mokao-cream font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-5 py-24">
        <Image
          src="https://picsum.photos/seed/5413245523652683629/800/800"
          alt={t("producer.name")}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Overlays for atmosphere and text readability */}
        <div className="absolute inset-0 bg-mokao-dark/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-mokao-dark via-transparent to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto text-center mt-20">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-12 h-px bg-mokao-gold/60" />
            <span className="text-mokao-gold font-serif italic text-sm tracking-[0.2em] uppercase">
              {t("producer.label")}
            </span>
            <div className="w-12 h-px bg-mokao-gold/60" />
          </div>

          <h1 className="font-display text-5xl md:text-7xl text-white leading-tight mb-6">
            {t("producer.name")}
          </h1>

          <p className="font-serif italic text-2xl md:text-3xl text-mokao-cream/90 font-light mb-12">
            &ldquo;{t("producer.tagline")}&rdquo;
          </p>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="py-24 px-5 md:px-10 lg:px-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7">
          <h2 className="font-display text-3xl md:text-4xl text-mokao-gold mb-8">
            {t("producer.intro_title")}
          </h2>
          <div className="space-y-6 font-serif text-lg text-mokao-cream/80 leading-relaxed">
            <p>{t("producer.biography_p1")}</p>
            <p>{t("producer.biography_p2")}</p>
            <p>{t("producer.biography_p3")}</p>
          </div>

          <blockquote className="mt-12 border-l-2 border-mokao-gold/40 pl-6 py-2">
            <p className="font-serif italic text-xl text-mokao-cream leading-relaxed">
              &ldquo;{t("producer.philosophy")}&rdquo;
            </p>
          </blockquote>
        </div>

        <div className="lg:col-span-5 bg-mokao-green-light/20 p-8 md:p-12 border border-mokao-green-light rounded-sm self-start">
          <h3 className="font-sans text-xs tracking-[0.2em] text-mokao-gold uppercase mb-8">{t("producer.at_a_glance")}</h3>

          <dl className="space-y-6">
            <div>
              <dt className="text-sm text-mokao-cream/50 uppercase tracking-widest mb-1">{t("producer.location_label")}</dt>
              <dd className="font-serif text-xl">{t("producer.location")}</dd>
            </div>
            <div>
              <dt className="text-sm text-mokao-cream/50 uppercase tracking-widest mb-1">{t("producer.experience_label")}</dt>
              <dd className="font-serif text-xl">{t("producer.experienceYears")}</dd>
            </div>
            <div>
              <dt className="text-sm text-mokao-cream/50 uppercase tracking-widest mb-2">{t("producer.values_label")}</dt>
              <dd>
                <ul className="flex flex-wrap gap-2">
                  {[t("producer.value_1"), t("producer.value_2"), t("producer.value_3")].map((value, idx) => (
                    <li key={idx} className="bg-mokao-green/50 text-mokao-cream/90 px-3 py-1 text-sm rounded-full border border-mokao-green-light">
                      {value}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* 3. VIDEO SECTION */}
      <section className="py-24 bg-mokao-green/20">
        <div className="max-w-5xl mx-auto px-5 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
            {t("producer.video_title")}
          </h2>
          <p className="font-serif text-lg text-mokao-cream/70 mb-12 max-w-2xl mx-auto">
            {t("producer.videoDescription")}
          </p>

          <div className="relative aspect-video w-full rounded-lg overflow-hidden group cursor-pointer border border-mokao-green-light/50">
            {/* Using image as video placeholder */}
            <Image
              src="https://picsum.photos/seed/2468330427105810495/800/800"
              alt="Video placeholder covering the farm"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

            {/* Play Button Mock */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-mokao-gold/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                  <path d="M22.5 12.268C23.8333 13.0378 23.8333 14.9622 22.5 15.732L3 26.9904C1.66667 27.7602 0 26.798 0 25.2583L0 2.74167C0 1.20197 1.66667 0.239771 3 1.00957L22.5 12.268Z" fill="var(--color-mokao-dark)"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GALLERY SECTION */}
      <section className="py-24 px-5 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl text-mokao-gold mb-4">
            {t("producer.gallery_title")}
          </h2>
          <p className="font-serif text-lg text-mokao-cream/70 max-w-2xl mx-auto">
            {t("producer.gallery_desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {[
            { url: "https://picsum.photos/seed/7695396709655456438/800/800", altKey: "gallery_alt_1" },
            { url: "https://picsum.photos/seed/7103465628472625996/800/800", altKey: "gallery_alt_2" },
            { url: "https://picsum.photos/seed/5053093247346614457/800/800", altKey: "gallery_alt_3" },
            { url: "https://picsum.photos/seed/6821516089327598802/800/800", altKey: "gallery_alt_4" },
            { url: "https://picsum.photos/seed/1269399895697368532/800/800", altKey: "gallery_alt_5" },
            { url: "https://picsum.photos/seed/9163283921703666245/800/800", altKey: "gallery_alt_6" }
          ].map((image, idx) => (
            <div key={idx} className="relative aspect-[4/5] overflow-hidden rounded-sm group">
              <Image
                src={image.url}
                alt={t(`producer.${image.altKey}`)}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-0 left-0 right-0 p-4 text-sm font-sans text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                {t(`producer.${image.altKey}`)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FARM DETAILS SECTION */}
      <section className="py-24 px-5 bg-mokao-dark border-t border-mokao-gold/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-center mb-16">
            {t("producer.farm_title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="flex flex-col border-b border-mokao-gold/10 pb-6">
              <span className="text-xs tracking-widest text-mokao-gold uppercase mb-2">{t("producer.farm_size_label")}</span>
              <span className="font-serif text-xl text-mokao-cream">{t("producer.farm_size")}</span>
            </div>

            <div className="flex flex-col border-b border-mokao-gold/10 pb-6">
              <span className="text-xs tracking-widest text-mokao-gold uppercase mb-2">{t("producer.farm_alt_label")}</span>
              <span className="font-serif text-xl text-mokao-cream">{t("producer.farm_alt")}</span>
            </div>

            <div className="flex flex-col border-b border-mokao-gold/10 pb-6">
              <span className="text-xs tracking-widest text-mokao-gold uppercase mb-2">{t("producer.farm_season_label")}</span>
              <span className="font-serif text-xl text-mokao-cream">{t("producer.farm_season")}</span>
            </div>

            <div className="flex flex-col border-b border-mokao-gold/10 pb-6">
              <span className="text-xs tracking-widest text-mokao-gold uppercase mb-2">{t("producer.farm_method_label")}</span>
              <span className="font-serif text-xl text-mokao-cream">{t("producer.farm_method")}</span>
            </div>

            <div className="flex flex-col border-b border-mokao-gold/10 pb-6 md:col-span-2">
              <span className="text-xs tracking-widest text-mokao-gold uppercase mb-2">{t("producer.farm_comm_label")}</span>
              <span className="font-serif text-xl text-mokao-cream">{t("producer.farm_comm")}</span>
            </div>

            <div className="flex flex-col pb-6 md:col-span-2">
              <span className="text-xs tracking-widest text-mokao-gold uppercase mb-3">{t("producer.farm_cert_label")}</span>
              <div className="flex flex-wrap gap-3">
                {[t("producer.farm_cert_1"), t("producer.farm_cert_2")].map((cert, idx) => (
                  <span key={idx} className="px-4 py-2 border border-mokao-gold/30 text-mokao-gold font-sans text-sm rounded-full">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 px-5 text-center">
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
          {t("producer.cta")}
        </Link>
      </section>
    </main>
  );
}
