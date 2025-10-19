"use client";

import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/lib/ui";

const IMG_BOOK =
  "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1600&auto=format&fit=crop";
const IMG_JOIN =
  "https://images.unsplash.com/photo-1599058917785-1cf1f3a28536?q=80&w=1600&auto=format&fit=crop";

export default function DualCTA() {
  return (
    <section className="full-bleed section-pad">
      <div className="site-gutters grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        {/* CTA 1 — Prenota (visual pieno con immagine) */}
        <Reveal
          as="article"
          className="relative overflow-hidden rounded-[1.25rem] card-elevated"
        >
          <div className="relative h-[38vh] min-h-[320px]">
            <Image
              src={IMG_BOOK}
              alt="Prenota un campo"
              fill
              className="object-cover"
              unoptimized
              sizes="(min-width:1024px) 60vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <div className="badge mb-3">
                <span>Gioca con noi</span>
              </div>
              <h3 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] leading-tight">
                Prenota un campo
              </h3>
              <p className="mt-2 text-white/80 max-w-prose">
                Padel, Tennis e Calcio a 5 — scegli l’orario e scendi in campo.
              </p>
              <Link
                href="/prenota"
                className="mt-5 inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs uppercase tracking-[0.16em]
                           border border-[color:var(--color-oro)] hover:bg-[color:var(--color-oro)] hover:text-[color:var(--color-nero)] transition"
              >
                Prenota ora →
              </Link>
            </div>
          </div>
        </Reveal>

        {/* CTA 2 — Unisciti/Sponsor (glass card) */}
        <Reveal
          as="article"
          className="glass p-6 md:p-8 rounded-[1.25rem] flex flex-col justify-center"
        >
          <div className="badge mb-3">
            <span>Partecipa</span>
          </div>
          <h3 className="font-display text-[clamp(1.6rem,2.6vw,2.2rem)] leading-tight">
            Diventa sponsor o volontario
          </h3>
          <p className="mt-2 text-white/80 max-w-prose">
            Sostieni la crescita del club: visibilità, community e progetti
            locali.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/sponsor"
              className="rounded-full px-6 py-3 text-xs uppercase tracking-[0.16em] border border-white/25 text-white/85
                         hover:text-white hover:border-white transition"
            >
              Scopri sponsor →
            </Link>
            <Link
              href="/contatti"
              className="rounded-full px-6 py-3 text-xs uppercase tracking-[0.16em] border border-[color:var(--color-oro)]
                         hover:bg-[color:var(--color-oro)] hover:text-[color:var(--color-nero)] transition"
            >
              Scrivici →
            </Link>
          </div>
        </Reveal>
      </div>

      {/* fascia decorativa soft in fondo */}
      <div className="pointer-events-none full-bleed h-20 mt-8 bg-[radial-gradient(60%_100%_at_50%_120%,rgba(201,169,97,.20),transparent_70%)]" />
    </section>
  );
}
