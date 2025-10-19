"use client";

import { useEffect, useRef, useState } from "react";

/** Hook: rivela l'elemento con fade+lift quando entra in viewport */
export function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 1 - threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/** Wrapper: parallax dolce (verticale) sul contenitore */
export function ParallaxBox({
  speed = 0.07,
  children,
  className = "",
}: {
  speed?: number;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const yAbs = rect.top + window.scrollY;
      const progress = (window.scrollY - yAbs) * speed;
      el.style.transform = `translate3d(0, ${progress}px, 0)`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}

/** Wrapper: reveal con delay a passi (stagger) */
export function Reveal({
  as: Tag = "div",
  delayStep = 80,
  index = 0,
  children,
  className = "",
}: {
  as?: any;
  delayStep?: number;
  index?: number;
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, visible } = useReveal(0.2);
  return (
    <Tag
      ref={ref as any}
      className={[
        className,
        "transition duration-500 ease-out will-change-transform",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
      ].join(" ")}
      style={{ transitionDelay: `${index * delayStep}ms` }}
    >
      {children}
    </Tag>
  );
}
