"use client";

import Image from "next/image";
import Link from "next/link";
import { ParallaxBox, Reveal } from "@/lib/ui";
import { squadSpotlight as data } from "@/lib/mock";

const TEAM_FALLBACK =
  "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2000&auto=format&fit=crop";

export default function SquadSpotlight() {
  return (
    <section className="full-bleed relative overflow-hidden">
      {/* BG squadra in parallax, più alto */}
      <ParallaxBox speed={0.05}>
        <div className="relative h-[64vh] min-h-[520px] w-full">
          <Image
            src={data.teamPhoto || TEAM_FALLBACK}
            alt="Foto squadra"
            fill
            className="object-cover"
            unoptimized
            sizes="100vw"
            priority
          />
        </div>
      </ParallaxBox>

      {/* overlay: gradienti + diagonale morbida (+ aura dorata opzionale) */}
      <div className="pointer-events-none absolute inset-0">
        {/* alone dorata soft (disattiva se non usi l'utility) */}
        <div className="aurora-soft" />
        {/* velatura generale per fusione col fondo */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/25 to-black/75" />
        {/* taglio diagonale che chiude verso il basso */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 78%, 0 100%)",
            background:
              "linear-gradient(180deg, rgba(0,0,0,.06) 0%, rgba(0,0,0,.58) 60%, rgba(0,0,0,.88) 100%)",
          }}
        />
      </div>

      {/* Contenuti */}
      <div className="site-gutters absolute inset-0 flex items-end pb-12 md:pb-14">
        <div className="w-full grid gap-8 lg:grid-cols-[1.1fr_1fr] items-end">
          {/* Testo grande (left) */}
          <Reveal as="div">
            <div className="max-w-[900px]">
              <div className="badge mb-3">
                <span>Squadra</span>
              </div>
              <h2 className="font-display text-[clamp(2.2rem,4.8vw,3.8rem)] leading-[1.04] tracking-tight">
                {data.title}
              </h2>
              {data.subtitle && (
                <p className="mt-3 text-[clamp(.95rem,1.2vw,1.05rem)] text-white/85">
                  {data.subtitle}
                </p>
              )}
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href={data.ctaHref}
                  className="rounded-full px-6 py-3 text-xs uppercase tracking-[0.16em] border
                             border-[color:var(--color-oro)] text-[color:var(--color-oro)]
                             hover:bg-[color:var(--color-oro)] hover:text-[color:var(--color-nero)] transition"
                >
                  {data.ctaLabel}
                </Link>
                <Link
                  href="/calendario"
                  className="rounded-full px-6 py-3 text-xs uppercase tracking-[0.16em] border border-white/25 text-white/80
                             hover:text-white hover:border-white transition"
                >
                  Calendario
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Ruoli (right): poster verticali “nudi”, più alti */}
          <div className="grid gap-5 sm:grid-cols-3">
            {data.roles.map((r, i) => (
              <Reveal
                key={r.id}
                index={i}
                as="article"
                className="relative overflow-hidden"
              >
                <div className="group relative w-full aspect-[3/4]">
                  {" "}
                  {/* più verticale */}
                  <Image
                    src={
                      r.photoUrl ??
                      "https://images.unsplash.com/photo-1521417531039-94aee3a0f78b?q=80&w=1200&auto=format&fit=crop"
                    }
                    alt={r.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                    unoptimized
                    sizes="(min-width:1024px) 20vw, 40vw"
                  />
                  {/* overlay basso per testo */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/15 to-black/75" />
                  {/* testo dentro l’immagine */}
                  <div className="absolute bottom-0 left-0 p-4">
                    <div className="text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-oro)]">
                      {r.label}
                    </div>
                    <div className="font-display text-[clamp(1.1rem,1.6vw,1.4rem)] leading-tight">
                      {r.name}
                    </div>
                    {r.blurb && (
                      <p className="mt-1 text-xs text-white/75 max-w-[26ch]">
                        {r.blurb}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
