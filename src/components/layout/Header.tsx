"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/club", label: "Club" },
  { href: "/squadra", label: "Squadra" },
  { href: "/eventi", label: "Eventi" },
  { href: "/contatti", label: "Contatti" },
];

export default function Header() {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // sempre 'border-b' per evitare salti di layout; al top la rendiamo trasparente
  const shellBase =
    "fixed inset-x-0 top-0 z-50 transition-all duration-300 border-b";
  const shellAtTop =
    "bg-transparent backdrop-blur-0 shadow-none border-transparent";
  const shellScrolled =
    "backdrop-blur-xl bg-black/80 border-white/10 shadow-[0_10px_30px_rgba(0,0,0,.35)]";

  const linkBase =
    "group relative text-[0.75rem] uppercase tracking-[0.12em] transition";
  const linkAtTop = "text-white/90 hover:text-white";
  const linkScrolled =
    "text-[color:var(--color-grigio)] hover:text-[color:var(--color-bianco)]";

  return (
    <header
      className={`${shellBase} ${atTop ? shellAtTop : shellScrolled}`}
      style={{
        ["--header-h" as any]: "80px",
        willChange: "transform",
        transform: "translateZ(0)", // compositing fix: niente linee sub-pixel
      }}
    >
      <div className="header-gutters flex items-center justify-between py-7">
        {/* Marchio */}
        <div className="relative font-display tracking-[0.32em] text-xl text-white select-none">
          PINETO
          {/* Underline: invisibile al top, oro dopo lo scroll */}
          <span
            className={`absolute -bottom-2 left-0 block h-px w-10 transition-all duration-300 ${
              atTop ? "opacity-0" : "opacity-100 bg-[color:var(--color-oro)]"
            }`}
          />
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${linkBase} ${atTop ? linkAtTop : linkScrolled}`}
            >
              {/* underline animata al hover */}
              <span className="after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-6">
                {item.label}
              </span>
            </Link>
          ))}

          {/* CTA */}
          <Link
            href="/prenota"
            className={[
              "ml-2 rounded-full px-4 py-2 text-xs uppercase tracking-[0.16em] transition border",
              atTop
                ? "border-white/50 text-white/90 hover:bg-white hover:text-black"
                : "border-[color:var(--color-oro)] text-[color:var(--color-oro)] hover:bg-[color:var(--color-oro)] hover:text-[color:var(--color-nero)]",
            ].join(" ")}
          >
            Prenota Campo
          </Link>
        </nav>
      </div>

      {/* Hairline sfumata solo in scroll */}
      {!atTop && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      )}
    </header>
  );
}
