"use client";

import Link from "next/link";
import Image from "next/image";
import { overviewTiles } from "@/lib/mock";
import { ParallaxBox, Reveal } from "@/lib/ui";

const F = {
  club: "https://images.unsplash.com/photo-1521417531039-94aee3a0f78b?q=80&w=2000&auto=format&fit=crop",
  circolo:
    "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1600&auto=format&fit=crop",
  eventi:
    "https://images.unsplash.com/photo-1599058917785-1cf1f3a28536?q=80&w=1600&auto=format&fit=crop",
};

export default function OverviewHub() {
  const club = overviewTiles.find((t) => t.id === "club");
  const circolo = overviewTiles.find((t) => t.id === "circolo");
  const eventi = overviewTiles.find((t) => t.id === "eventi");

  return (
    <section className="full-bleed section-pad">
      <div className="site-gutters flex items-end justify-between mb-6">
        <div className="badge">
          <span>Portfolio del Club</span>
        </div>
        <Link
          href="/club"
          className="text-xs uppercase tracking-[0.16em] text-white/80 hover:text-white"
        >
          Conosci la società →
        </Link>
      </div>

      <div className="site-gutters">
        <div className="grid gap-6 lg:grid-cols-12 auto-rows-[1fr]">
          {/* LEFT — XL, pannello nudo con diagonale */}
          <Reveal
            as="article"
            className="tile lg:col-span-7 lg:row-span-2 min-h-[360px]"
          >
            <ParallaxBox speed={0.05} className="absolute inset-0">
              <Image
                src={club?.coverUrl || F.club}
                alt={club?.title || "Il Club"}
                fill
                className="object-cover"
                unoptimized
                sizes="(min-width:1024px) 60vw, 100vw"
                priority
              />
            </ParallaxBox>

            <div className="tile-diagonal" />
            <div className="tile-overlay" />

            <Link
              href={club?.href || "/club"}
              className="relative block h-full"
            >
              <div className="absolute bottom-0 left-0 p-6 md:p-8 max-w-[880px]">
                <div className="badge mb-3">
                  <span>In evidenza</span>
                </div>
                <h3 className="font-display text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.06] tracking-tight">
                  {club?.title || "Il Club"}
                </h3>
                {club?.subtitle && (
                  <p className="mt-2 text-white/85 max-w-prose">
                    {club.subtitle}
                  </p>
                )}
                <div className="mt-5 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.16em]">
                  <span className="rounded-full px-3 py-1 bg-white/10 text-white/80">
                    Identità & Visione
                  </span>
                  <span className="rounded-full px-3 py-1 bg-white/10 text-white/80">
                    Staff & Strutture
                  </span>
                  <span className="rounded-full px-3 py-1 bg-white/10 text-white/80">
                    Community
                  </span>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/85 hover:text-white">
                  Entra <span aria-hidden>→</span>
                </div>
              </div>
            </Link>
          </Reveal>

          {/* RIGHT TOP — CIRCOLO (solo immagine + overlay basso) */}
          <Reveal as="article" className="tile lg:col-span-5">
            <Link href={circolo?.href || "/circolo"} className="group block">
              <div className="relative h-[36vh] min-h-[260px]">
                <Image
                  src={circolo?.coverUrl || F.circolo}
                  alt={circolo?.title || "Il Circolo"}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  unoptimized
                  sizes="(min-width:1024px) 40vw, 100vw"
                />
                <div className="tile-overlay" />
              </div>
              <div className="absolute inset-0 flex items-end">
                <div className="p-6 md:p-8">
                  <div className="badge mb-2">
                    <span>Strutture</span>
                  </div>
                  <h4 className="font-display text-[clamp(1.4rem,2.2vw,2rem)] leading-tight">
                    {circolo?.title || "Il Circolo"}
                  </h4>
                  {circolo?.subtitle && (
                    <p className="mt-1 text-white/85">{circolo.subtitle}</p>
                  )}
                  <div className="mt-4 text-xs uppercase tracking-[0.16em] text-white/85 group-hover:text-white">
                    Scopri i campi →
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>

          {/* RIGHT BOTTOM — EVENTI (solo testo su “velo” morbido, niente box) */}
          <Reveal as="article" className="tile lg:col-span-5">
            {/* velo di luce, ma senza contenitore: si fonde col fondo */}
            <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_100%_0%,rgba(201,169,97,.12),transparent_60%)]" />
            <div className="relative p-6 md:p-8">
              <div className="badge mb-2">
                <span>Community</span>
              </div>
              <h4 className="font-display text-[clamp(1.4rem,2.2vw,2rem)] leading-tight">
                {eventi?.title || "Community & Eventi"}
              </h4>
              {eventi?.subtitle && (
                <p className="mt-2 text-white/85 max-w-prose">
                  {eventi.subtitle}
                </p>
              )}
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href={eventi?.href || "/eventi"}
                  className="rounded-full px-6 py-3 text-xs uppercase tracking-[0.16em]
                             border border-[color:var(--color-oro)] text-[color:var(--color-oro)]
                             hover:bg-[color:var(--color-oro)] hover:text-[color:var(--color-nero)] transition"
                >
                  Calendario eventi →
                </Link>
                <Link
                  href="/news"
                  className="rounded-full px-6 py-3 text-xs uppercase tracking-[0.16em]
                             border border-white/25 text-white/85 hover:text-white hover:border-white transition"
                >
                  Vai alle news →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        {/* piccola vignetta di chiusura (nessuna “scatola”) */}
        <div className="hub-vignette mt-6" />
      </div>
    </section>
  );
}
