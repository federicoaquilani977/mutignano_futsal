"use client";

import Image from "next/image";
import Link from "next/link";
import { sponsors } from "@/lib/mock";

export default function SponsorsStrip() {
  // duplico la lista per lo scorrimento continuo
  const logos = [...sponsors, ...sponsors];

  return (
    <section className="full-bleed section-pad surface">
      <div className="site-gutters">
        <div className="flex items-end justify-between mb-6">
          <div className="badge">
            <span>Sponsor & Partner</span>
          </div>
          <Link
            href="/sponsor"
            className="text-xs uppercase tracking-[0.16em] text-white/80 hover:text-white"
          >
            Diventa sponsor →
          </Link>
        </div>
      </div>

      <div className="full-bleed">
        <div className="marquee">
          <div className="marquee__inner">
            {logos.map((s, i) => (
              <div key={`${s.id}-${i}`} className="marquee__item">
                <div className="mx-6 opacity-80 hover:opacity-100 transition">
                  <div className="relative h-10 w-[180px] md:h-12 md:w-[220px]">
                    <Image
                      src={s.logoUrl}
                      alt={s.name}
                      fill
                      className="object-contain"
                      unoptimized
                      sizes="(min-width:1024px) 220px, 180px"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
