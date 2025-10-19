"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/lib/ui";
import { videosRail } from "@/lib/mock";

const FALLBACK =
  "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2000&auto=format&fit=crop";

export default function FeatureVideoGrid() {
  // primo come featured, successivi come thumb (fino a 4)
  const [featured, ...rest] = videosRail;
  const thumbs = rest.slice(0, 4);

  return (
    <section className="full-bleed section-pad">
      <div className="site-gutters">
        <div className="flex items-end justify-between mb-6">
          <div className="badge">
            <span>Video & Media</span>
          </div>
          <Link
            href="/media"
            className="text-xs uppercase tracking-[0.16em] text-white/80 hover:text-white"
          >
            Tutti i video →
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          {/* FEATURED XL a sinistra (8 col) */}
          <Reveal
            as="article"
            className="relative overflow-hidden rounded-[1.25rem] card-elevated lg:col-span-8"
          >
            <Link href={featured?.href ?? "/media"}>
              <div className="relative aspect-[16/9]">
                <Image
                  src={featured?.coverUrl || FALLBACK}
                  alt={featured?.title || "Featured video"}
                  fill
                  className="object-cover"
                  unoptimized
                  sizes="(min-width:1024px) 66vw, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="grid place-items-center h-16 w-16 rounded-full bg-white/90 text-black hover:bg-white transition">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      aria-hidden
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-7">
                <h3 className="font-display text-[clamp(1.8rem,3.2vw,2.6rem)] leading-tight">
                  {featured?.title ?? "Highlights & Interviste"}
                </h3>
              </div>
            </Link>
          </Reveal>

          {/* COLONNA destra (4 col): 4 thumb in griglia 2x2 */}
          <div className="grid gap-6 lg:col-span-4 sm:grid-cols-2 lg:grid-cols-1">
            {thumbs.map((v, i) => (
              <Reveal
                key={v.id}
                index={i}
                as="article"
                className="overflow-hidden rounded-[1.1rem] card-elevated"
              >
                <Link href={v.href} className="block">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={v.coverUrl}
                      alt={v.title}
                      fill
                      className="object-cover"
                      unoptimized
                      sizes="(min-width:1024px) 33vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
                    <div
                      className="absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.16em]
                                    bg-[color:var(--color-oro)] text-[color:var(--color-nero)]"
                    >
                      Video
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-display text-[clamp(1rem,1.8vw,1.2rem)] leading-snug">
                      {v.title}
                    </h4>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
