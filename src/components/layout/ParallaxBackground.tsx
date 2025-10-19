"use client";

import { useEffect, useRef } from "react";

/**
 * ParallaxBackground — versione "Aurora + Stars"
 * - 3 blob aurora color oro/ambra che si muovono lentamente (CSS keyframes)
 * - starfield su canvas super-leggero (twinkle), disattivato con prefers-reduced-motion
 * - parallax dolce al scroll per dare profondità
 */
export default function ParallaxBackground() {
  const layersRef = useRef<HTMLDivElement[]>([]);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  // Parallax per i layer (leggero)
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      layersRef.current.forEach((el) => {
        if (!el) return;
        const speed = Number(el.dataset.speed ?? 0);
        el.style.transform = `translate3d(0, ${y * speed}px, 0)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Starfield (canvas) — twinkle soft
  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mql.matches) return; // rispetta riduzione animazioni

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = w * DPR;
    canvas.height = h * DPR;
    ctx.scale(DPR, DPR);

    type Star = {
      x: number;
      y: number;
      r: number;
      baseA: number;
      speed: number;
      phase: number;
    };
    const STAR_COUNT = Math.floor((w * h) / 28000); // densità leggera
    const stars: Star[] = new Array(STAR_COUNT).fill(0).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.4 + 0.4,
      baseA: Math.random() * 0.5 + 0.2,
      speed: Math.random() * 0.8 + 0.2,
      phase: Math.random() * Math.PI * 2,
    }));

    const gradient = ctx.createRadialGradient(
      w * 0.5,
      h * 0.3,
      0,
      w * 0.5,
      h * 0.3,
      Math.max(w, h)
    );
    gradient.addColorStop(0, "rgba(201,169,97,0.08)");
    gradient.addColorStop(1, "rgba(0,0,0,0.0)");

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);

      // leggerissima velatura dorata (aiuta ad amalgamare col resto)
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      // stelle
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        const alpha = s.baseA + Math.sin(t * 0.001 * s.speed + s.phase) * 0.15;
        ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      rafRef.current = requestAnimationFrame(draw);
    };

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      canvas.width = w * DPR;
      canvas.height = h * DPR;
      ctx.scale(DPR, DPR);
    };

    window.addEventListener("resize", onResize);
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const setRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) layersRef.current[i] = el;
  };

  return (
    <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none">
      {/* Base scura */}
      <div
        ref={setRef(0)}
        data-speed={0}
        className="absolute inset-0"
        style={{ background: "var(--color-nero)" }}
      />

      {/* Starfield */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Aurora blobs (oro/ambra) */}
      <div
        ref={setRef(1)}
        data-speed={0.04}
        className="absolute -top-32 -left-20 h-[55vh] w-[55vw] opacity-60"
        style={{
          background:
            "radial-gradient(closest-side, rgba(201,169,97,0.28), rgba(201,169,97,0.06) 60%, transparent 70%)",
          animation: "aurora-shift 14s ease-in-out infinite",
          mixBlendMode: "screen",
        }}
      />
      <div
        ref={setRef(2)}
        data-speed={0.08}
        className="absolute top-[35vh] right-[-10vw] h-[45vh] w-[45vw] opacity-55"
        style={{
          background:
            "radial-gradient(closest-side, rgba(235,200,120,0.24), rgba(201,169,97,0.06) 60%, transparent 70%)",
          animation: "aurora-shift 18s ease-in-out infinite reverse",
          mixBlendMode: "screen",
        }}
      />
      <div
        ref={setRef(3)}
        data-speed={0.06}
        className="absolute bottom-[-10vh] left-[10vw] h-[40vh] w-[40vw] opacity-50"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,220,140,0.18), rgba(201,169,97,0.05) 60%, transparent 70%)",
          animation: "aurora-shift 22s ease-in-out infinite",
          mixBlendMode: "screen",
        }}
      />

      {/* Vignetta finale per contenere i bordi */}
      <div
        ref={setRef(4)}
        data-speed={0}
        className="absolute inset-0"
        style={{
          maskImage:
            "radial-gradient(85% 85% at 50% 50%, black 70%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(85% 85% at 50% 50%, black 70%, transparent 100%)",
          background:
            "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,.50) 100%)",
        }}
      />
    </div>
  );
}
