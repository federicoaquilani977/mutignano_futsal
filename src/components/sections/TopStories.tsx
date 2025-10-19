"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/lib/ui";

type Story = {
  id: string;
  title: string;
  kicker?: string;
  href: string;
  coverUrl: string;
};
const STORIES: Story[] = [
  {
    id: "st1",
    title: "Presentazione ufficiale stagione",
    kicker: "CLUB",
    href: "/news/presentazione-stagione",
    coverUrl:
      "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg",
  },
  {
    id: "st2",
    title: "Calendario tornei: iscriviti ora",
    kicker: "EVENTI",
    href: "/eventi",
    coverUrl:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "st3",
    title: "Nuovi sponsor a bordo",
    kicker: "SPONSOR",
    href: "/news/sponsor",
    coverUrl:
      "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg",
  },
  {
    id: "st4",
    title: "Nuovi sponsor a bordo",
    kicker: "SPONSOR",
    href: "/news/sponsor",
    coverUrl:
      "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg",
  },
];

export default function TopStories() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [idx, setIdx] = useState(0);
  const count = STORIES.length;

  // osserva quale slide è centrata
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const slides = Array.from(el.querySelectorAll<HTMLElement>("[data-slide]"));
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const i = Number((visible.target as HTMLElement).dataset.index);
          setIdx(i);
        }
      },
      { root: el, threshold: [0.6] }
    );
    slides.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  // autoplay dolce (pausa se hover/scroll manuale)
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let hover = false;
    const onEnter = () => (hover = true);
    const onLeave = () => (hover = false);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    const id = setInterval(() => {
      if (hover) return;
      const next = (idx + 1) % count;
      el.scrollTo({ left: calcLeft(next, el), behavior: "smooth" });
    }, 5000);

    return () => {
      clearInterval(id);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [idx, count]);

  const go = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: calcLeft(i, el), behavior: "smooth" });
  };

  return (
    <section className="section-pad">
      <div className="site-gutters">
        <div className="badge mb-6">
          <span>In evidenza</span>
        </div>
      </div>

      <div className="relative">
        {/* track */}
        <div
          ref={trackRef}
          className="snap-x snap-mandatory overflow-x-auto overscroll-x-contain no-scrollbar px-[8%] scroll-pl-[8%]"
          role="region"
          aria-label="Top stories"
        >
          <ul className="flex gap-6">
            {STORIES.map((s, i) => (
              <li
                key={s.id}
                data-slide
                data-index={i}
                className="min-w-[88%] md:min-w-[72%] lg:min-w-[58%] snap-center"
              >
                <Reveal
                  index={i}
                  className="relative h-[56vh] min-h-[420px] overflow-hidden rounded-[1.25rem] card-elevated"
                >
                  <Image
                    src={s.coverUrl}
                    alt={s.title}
                    fill
                    className="object-cover"
                    unoptimized
                    sizes="(min-width:1024px) 60vw, 88vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <Link href={s.href} className="relative block h-full">
                    <div className="absolute bottom-0 left-0 p-6 md:p-8 max-w-[720px]">
                      {s.kicker && (
                        <div
                          className="rounded-full inline-flex px-3 py-1 text-[10px] uppercase tracking-[0.16em]
                                        bg-[color:var(--color-oro)] text-[color:var(--color-nero)] mb-3"
                        >
                          {s.kicker}
                        </div>
                      )}
                      <h3 className="font-display text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.06] tracking-tight">
                        {s.title}
                      </h3>
                      <div className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/80 hover:text-white">
                        Apri <span aria-hidden>→</span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        {/* controls */}
        <div className="absolute inset-x-0 -bottom-10 flex items-center justify-center gap-6">
          <button
            onClick={() => go((idx - 1 + count) % count)}
            className="px-3 py-1.5 rounded-full border border-white/20 text-xs uppercase tracking-[0.16em] text-white/80 hover:text-white hover:border-white"
          >
            Prev
          </button>
          <div className="flex gap-2">
            {STORIES.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === idx
                    ? "w-8 bg-[color:var(--color-oro)]"
                    : "w-4 bg-white/25"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => go((idx + 1) % count)}
            className="px-3 py-1.5 rounded-full border border-white/20 text-xs uppercase tracking-[0.16em] text-white/80 hover:text-white hover:border-white"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

function calcLeft(i: number, el: HTMLDivElement) {
  const slides = Array.from(el.querySelectorAll<HTMLElement>("[data-slide]"));
  const target = slides[i];
  if (!target) return 0;
  const rect = target.getBoundingClientRect();
  const container = el.getBoundingClientRect();
  const offset = rect.left - container.left;
  return el.scrollLeft + offset - (container.width - rect.width) / 2;
}
