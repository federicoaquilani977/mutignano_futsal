"use client";

import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/lib/ui";

type Card = {
  id: "book" | "calendar" | "sponsor";
  title: string;
  desc: string;
  href: string;
  cover?: string;
  tone: "gold" | "visual" | "glass";
};

const CARDS: Card[] = [
  {
    id: "book",
    title: "Prenota un campo",
    desc: "Padel • Tennis • Calcio a 5",
    href: "/prenota",
    tone: "gold",
    cover:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "calendar",
    title: "Calendario & Risultati",
    desc: "Partite, tornei ed eventi",
    href: "/calendario",
    tone: "visual",
    cover:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "sponsor",
    title: "Diventa sponsor",
    desc: "Cresci con il nostro club",
    href: "/sponsor",
    tone: "glass",
  },
];

export default function ActionRail() {
  return (
    <section className="full-bleed section-pad">
      <div className="site-gutters grid gap-6 lg:grid-cols-3">
        {CARDS.map((c, i) => (
          <Reveal
            key={c.id}
            index={i}
            as="article"
            className="relative overflow-hidden rounded-[1.25rem]"
          >
            <Link href={c.href} className="group block">
              {/* layer base per i tre stili */}
              {c.tone === "gold" && (
                <div className="relative h-[44vh] min-h-[360px] card-elevated">
                  {/* oro pieno + texture leggera */}
                  <div className="absolute inset-0 bg-[color:var(--color-oro)]" />
                  <div
                    className="absolute inset-0 opacity-25"
                    style={{
                      background:
                        "radial-gradient(120% 80% at 0% 0%, rgba(0,0,0,.20), transparent 60%)",
                    }}
                  />
                  {/* contenuti */}
                  <div className="relative h-full flex flex-col justify-end p-7 md:p-8 text-[color:var(--color-nero)]">
                    <Badge dark>Gioca con noi</Badge>
                    <h3 className="font-display text-[clamp(1.8rem,2.6vw,2.4rem)] leading-tight mt-1">
                      {c.title}
                    </h3>
                    <p className="opacity-80">{c.desc}</p>
                    <Cta className="mt-5 bg-[color:var(--color-nero)] text-[color:var(--color-oro)] border-transparent hover:opacity-90">
                      Prenota ora →
                    </Cta>
                  </div>
                </div>
              )}

              {c.tone === "visual" && (
                <div className="relative h-[44vh] min-h-[360px] card-elevated">
                  {c.cover && (
                    <Image
                      src={c.cover}
                      alt={c.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      unoptimized
                      sizes="(min-width:1024px) 33vw, 100vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.55),rgba(0,0,0,.25))]" />
                  <div className="absolute inset-0 flex items-end">
                    <div className="p-7 md:p-8">
                      <Badge>Aggiornati</Badge>
                      <h3 className="font-display text-[clamp(1.6rem,2.4vw,2.2rem)] leading-tight mt-1">
                        {c.title}
                      </h3>
                      <p className="text-white/85">{c.desc}</p>
                      <Cta className="mt-5">Apri calendario →</Cta>
                    </div>
                  </div>
                </div>
              )}

              {c.tone === "glass" && (
                <div className="glass h-[44vh] min-h-[360px] p-7 md:p-8 card-elevated">
                  <Badge>Partecipa</Badge>
                  <h3 className="font-display text-[clamp(1.6rem,2.4vw,2.2rem)] leading-tight mt-1">
                    {c.title}
                  </h3>
                  <p className="text-white/85">{c.desc}</p>
                  <div className="mt-5 flex gap-3">
                    <Cta>Scopri sponsor →</Cta>
                    <Cta variant="outline">Scrivici →</Cta>
                  </div>
                  <div className="mt-6 h-px w-24 bg-[color:var(--color-oro)]/70" />
                </div>
              )}
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Badge({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-full inline-flex px-3 py-1 text-[10px] uppercase tracking-[0.16em] mb-3",
        dark
          ? "bg-[color:var(--color-nero)]/10 text-[color:var(--color-nero)]"
          : "bg-[color:var(--color-oro)] text-[color:var(--color-nero)]",
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function Cta({
  children,
  className = "",
  variant = "gold",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "gold" | "outline";
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs uppercase tracking-[0.16em] transition border";
  const styles =
    variant === "outline"
      ? "border-white/25 text-white/85 hover:text-white hover:border-white"
      : "border-[color:var(--color-oro)] text-[color:var(--color-oro)] hover:bg-[color:var(--color-oro)] hover:text-[color:var(--color-nero)]";
  return (
    <span className={[base, styles, className].join(" ")}>{children}</span>
  );
}
