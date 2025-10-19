"use client";

import Image from "next/image";
import Link from "next/link";
import { newsPosts } from "@/lib/mock";
import { ParallaxBox, Reveal } from "@/lib/ui";

function fmtDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("it-IT", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

export default function NewsMosaic() {
  // ordina per data decrescente se serve
  const posts = [...newsPosts].sort((a, b) =>
    (b?.dateISO ?? "").localeCompare(a?.dateISO ?? "")
  );

  const [featured, ...rest] = posts;

  return (
    <section className="full-bleed section-pad">
      {/* intestazione */}
      <div className="site-gutters flex items-end justify-between mb-6">
        <div className="badge">
          <span>News & Contenuti</span>
        </div>
        <Link
          href="/news"
          className="text-xs uppercase tracking-[0.16em] text-white/80 hover:text-white"
        >
          Tutti gli articoli →
        </Link>
      </div>

      {/* griglia editoriale full-width */}
      <div className="site-gutters">
        <div className="grid gap-6 lg:grid-cols-12 auto-rows-[1fr]">
          {/* FEATURED XL: 7 colonne x 2 righe */}
          {featured && (
            <Reveal
              as="article"
              className="relative overflow-hidden rounded-[1.25rem] card-elevated lg:col-span-7 lg:row-span-2"
            >
              <ParallaxBox speed={0.05} className="absolute inset-0">
                {featured.coverUrl ? (
                  <Image
                    src={featured.coverUrl}
                    alt={featured.title}
                    fill
                    className="object-cover"
                    unoptimized
                    sizes="(min-width:1024px) 60vw, 100vw"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 grid place-items-center text-white/40">
                    — no cover —
                  </div>
                )}
              </ParallaxBox>

              {/* overlay leggibilità */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

              {/* contenuti */}
              <Link
                href={`/news/${featured.id}`}
                className="relative block h-full"
              >
                <div className="absolute bottom-0 left-0 p-6 md:p-8 max-w-[820px]">
                  <div className="flex items-center gap-2 text-white/80 text-xs">
                    {featured.tag && (
                      <span className="rounded-full px-3 py-1 bg-[color:var(--color-oro)] text-[color:var(--color-nero)] uppercase tracking-[0.16em]">
                        {featured.tag}
                      </span>
                    )}
                    <span className="opacity-80">
                      {fmtDate(featured.dateISO)}
                    </span>
                    {featured.author && (
                      <span className="opacity-60">• {featured.author}</span>
                    )}
                  </div>

                  <h3 className="mt-3 font-display text-[clamp(1.9rem,4.4vw,3.2rem)] leading-[1.06] tracking-tight">
                    {featured.title}
                  </h3>

                  {featured.excerpt && (
                    <p className="mt-2 text-white/85 line-clamp-3">
                      {featured.excerpt}
                    </p>
                  )}

                  <div className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/85 hover:text-white">
                    Leggi di più <span aria-hidden>→</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          )}

          {/* TRE CARD secondarie (5 colonne su LG) */}
          {rest.slice(0, 3).map((p, i) => (
            <Reveal
              key={p.id}
              index={i}
              as="article"
              className="group overflow-hidden rounded-[1.1rem] card-elevated lg:col-span-5"
            >
              <Link href={`/news/${p.id}`} className="block">
                <div className="relative aspect-[16/9]">
                  {p.coverUrl ? (
                    <Image
                      src={p.coverUrl}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      unoptimized
                      sizes="(min-width:1024px) 40vw, 100vw"
                    />
                  ) : (
                    <div className="absolute inset-0 grid place-items-center text-white/40">
                      — no cover —
                    </div>
                  )}
                  {p.tag && (
                    <div
                      className="absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.16em]
                                    bg-[color:var(--color-oro)] text-[color:var(--color-nero)]"
                    >
                      {p.tag}
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <div className="text-xs text-white/60">
                    {fmtDate(p.dateISO)}
                  </div>
                  <h4 className="font-display text-[clamp(1.1rem,2.1vw,1.4rem)] leading-tight mt-1">
                    {p.title}
                  </h4>
                  {p.excerpt && (
                    <p className="mt-2 text-sm text-white/70 line-clamp-2">
                      {p.excerpt}
                    </p>
                  )}
                  <div className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/80 group-hover:text-white">
                    Apri <span aria-hidden>→</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
