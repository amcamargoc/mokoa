import Image from "next/image";
import Link from "next/link";

/**
 * Meet the Producer Page
 *
 * Designed with emotional resonance:
 * - Focus on authenticity, transparency, and human storytelling.
 * - Humanizes the brand and shows who cultivates the cacao.
 * - Avoids nationalistic language.
 */

const producerData = {
  producer: {
    name: "Elena Arboleda",
    tagline: "From our family farm to your cup",
    heroImage: "https://picsum.photos/seed/5413245523652683629/800/800",
    biography: [
      "Elena grew up running between the cacao trees of her family's farm, learning the delicate art of cultivation from her grandparents. For her, the soil holds the stories of generations past, and every harvest is a continuation of that legacy.",
      "Taking over the farm over a decade ago, she transformed it with a deep commitment to sustainable practices. She believes that true quality comes not just from the variety of the seed, but from the care, respect, and love given to the land every single day.",
      "Today, Elena works alongside her family and neighbors, nurturing a thriving ecosystem. Her cacao is more than a crop; it's a testament to community resilience, a shared passion, and a quiet dedication to creating something truly beautiful from the earth."
    ],
    location: "Maceo, Antioquia",
    experienceYears: "15+ Years",
    philosophy: "We don't just grow cacao; we nurture a living ecosystem. When you respect the earth, it rewards you with extraordinary flavors.",
    values: ["Sustainability", "Community Empowerment", "Uncompromised Quality"],
    videoUrl: "https://picsum.photos/seed/2468330427105810495/800/800", // Using an image as a video placeholder cover
    videoDescription: "Join Elena on a morning walk through the cacao groves as she shares the journey from seed to harvest.",
    gallery: [
      {
        url: "https://picsum.photos/seed/7695396709655456438/800/800",
        alt: "Elena inspecting fresh cacao pods"
      },
      {
        url: "https://picsum.photos/seed/7103465628472625996/800/800",
        alt: "The Arboleda family gathering around the fermentation boxes"
      },
      {
        url: "https://picsum.photos/seed/4814384758262782005/800/800",
        alt: "Farm workers carefully pruning the cacao trees"
      },
      {
        url: "https://picsum.photos/seed/7946145128739221271/800/800",
        alt: "Lush green cacao trees in the morning mist"
      },
      {
        url: "https://picsum.photos/seed/4429392086359725215/800/800",
        alt: "Freshly harvested cacao beans drying in the sun"
      },
      {
        url: "https://picsum.photos/seed/7845885147404417499/800/800",
        alt: "Hands holding rich, fermented cacao beans"
      }
    ],
    farmDetails: {
      size: "12 Hectares",
      altitude: "1,050 meters above sea level",
      harvestSeason: "Main crop: October - December; Mid crop: April - June",
      cultivationMethod: "Shade-grown, Agroforestry system",
      communityInvolvement: "Provides fair-wage employment for 15 local families and supports the village school.",
      certifications: ["Organic Certified (Mock)", "Fair Trade Alliance (Mock)"]
    }
  }
};

export default function ProducerPage() {
  const { producer } = producerData;

  return (
    <main className="min-h-screen bg-mokao-dark text-mokao-cream font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-5 py-24">
        <Image
          src={producer.heroImage}
          alt={`Portrait of ${producer.name}`}
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
              Meet the Producer
            </span>
            <div className="w-12 h-px bg-mokao-gold/60" />
          </div>

          <h1 className="font-display text-5xl md:text-7xl text-white leading-tight mb-6">
            {producer.name}
          </h1>

          <p className="font-serif italic text-2xl md:text-3xl text-mokao-cream/90 font-light mb-12">
            &ldquo;{producer.tagline}&rdquo;
          </p>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="py-24 px-5 md:px-10 lg:px-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7">
          <h2 className="font-display text-3xl md:text-4xl text-mokao-gold mb-8">
            The Story in the Soil
          </h2>
          <div className="space-y-6 font-serif text-lg text-mokao-cream/80 leading-relaxed">
            {producer.biography.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <blockquote className="mt-12 border-l-2 border-mokao-gold/40 pl-6 py-2">
            <p className="font-serif italic text-xl text-mokao-cream leading-relaxed">
              &ldquo;{producer.philosophy}&rdquo;
            </p>
          </blockquote>
        </div>

        <div className="lg:col-span-5 bg-mokao-green-light/20 p-8 md:p-12 border border-mokao-green-light rounded-sm self-start">
          <h3 className="font-sans text-xs tracking-[0.2em] text-mokao-gold uppercase mb-8">At a Glance</h3>

          <dl className="space-y-6">
            <div>
              <dt className="text-sm text-mokao-cream/50 uppercase tracking-widest mb-1">Location</dt>
              <dd className="font-serif text-xl">{producer.location}</dd>
            </div>
            <div>
              <dt className="text-sm text-mokao-cream/50 uppercase tracking-widest mb-1">Experience</dt>
              <dd className="font-serif text-xl">{producer.experienceYears}</dd>
            </div>
            <div>
              <dt className="text-sm text-mokao-cream/50 uppercase tracking-widest mb-2">Core Values</dt>
              <dd>
                <ul className="flex flex-wrap gap-2">
                  {producer.values.map((value, idx) => (
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
            A Morning on the Farm
          </h2>
          <p className="font-serif text-lg text-mokao-cream/70 mb-12 max-w-2xl mx-auto">
            {producer.videoDescription}
          </p>

          <div className="relative aspect-video w-full rounded-lg overflow-hidden group cursor-pointer border border-mokao-green-light/50">
            {/* Using image as video placeholder */}
            <Image
              src={producer.videoUrl}
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
            Scenes from the Harvest
          </h2>
          <p className="font-serif text-lg text-mokao-cream/70 max-w-2xl mx-auto">
            Glimpses into the daily rhythms, the hands that work the earth, and the lush environment where our cacao is born.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {producer.gallery.map((image, idx) => (
            <div key={idx} className="relative aspect-[4/5] overflow-hidden rounded-sm group">
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-0 left-0 right-0 p-4 text-sm font-sans text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                {image.alt}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FARM DETAILS SECTION */}
      <section className="py-24 px-5 bg-mokao-dark border-t border-mokao-gold/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-center mb-16">
            The Land We Cultivate
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="flex flex-col border-b border-mokao-gold/10 pb-6">
              <span className="text-xs tracking-widest text-mokao-gold uppercase mb-2">Farm Size</span>
              <span className="font-serif text-xl text-mokao-cream">{producer.farmDetails.size}</span>
            </div>

            <div className="flex flex-col border-b border-mokao-gold/10 pb-6">
              <span className="text-xs tracking-widest text-mokao-gold uppercase mb-2">Altitude</span>
              <span className="font-serif text-xl text-mokao-cream">{producer.farmDetails.altitude}</span>
            </div>

            <div className="flex flex-col border-b border-mokao-gold/10 pb-6">
              <span className="text-xs tracking-widest text-mokao-gold uppercase mb-2">Harvest Season</span>
              <span className="font-serif text-xl text-mokao-cream">{producer.farmDetails.harvestSeason}</span>
            </div>

            <div className="flex flex-col border-b border-mokao-gold/10 pb-6">
              <span className="text-xs tracking-widest text-mokao-gold uppercase mb-2">Cultivation Method</span>
              <span className="font-serif text-xl text-mokao-cream">{producer.farmDetails.cultivationMethod}</span>
            </div>

            <div className="flex flex-col border-b border-mokao-gold/10 pb-6 md:col-span-2">
              <span className="text-xs tracking-widest text-mokao-gold uppercase mb-2">Community Involvement</span>
              <span className="font-serif text-xl text-mokao-cream">{producer.farmDetails.communityInvolvement}</span>
            </div>

            {producer.farmDetails.certifications.length > 0 && (
              <div className="flex flex-col pb-6 md:col-span-2">
                <span className="text-xs tracking-widest text-mokao-gold uppercase mb-3">Certifications</span>
                <div className="flex flex-wrap gap-3">
                  {producer.farmDetails.certifications.map((cert, idx) => (
                    <span key={idx} className="px-4 py-2 border border-mokao-gold/30 text-mokao-gold font-sans text-sm rounded-full">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            )}
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
          Return Home
        </Link>
      </section>
    </main>
  );
}
