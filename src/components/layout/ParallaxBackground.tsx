'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

/**
 * ParallaxBackground v5 - "Image Based"
 * Background fotografico con overlay elegante
 */
export default function ParallaxBackground() {
  const layersRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      layersRef.current.forEach((el) => {
        if (!el) return
        const speed = Number(el.dataset.speed ?? 0)
        el.style.transform = `translate3d(0, ${y * speed}px, 0)`
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const setRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) layersRef.current[i] = el
  }

  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
    >
      {/* Layer 0: Immagine principale (con parallax leggero) */}
      <div
        ref={setRef(0)}
        data-speed={0.02}
        className="absolute inset-0 w-full h-[110vh]"
      >
        <Image
          src="https://images.pexels.com/photos/1054222/pexels-photo-1054222.jpeg"
          alt=""
          fill
          className="object-cover"
          quality={90}
          priority
          unoptimized
        />
      </div>

      {/* Layer 1: Gradient overlay scuro (leggibilità) */}
      <div
        ref={setRef(1)}
        data-speed={0}
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(13,13,13,0.85) 0%, rgba(13,13,13,0.70) 40%, rgba(13,13,13,0.80) 100%)',
        }}
      />

      {/* Layer 2: Glow dorato top (si fonde con hero) */}
      <div
        ref={setRef(2)}
        data-speed={0.03}
        className="absolute -top-[10vh] left-[20%] w-[60%] h-[50vh]"
        style={{
          background:
            'radial-gradient(ellipse, rgba(201,169,97,0.30) 0%, rgba(201,169,97,0.12) 40%, transparent 70%)',
          filter: 'blur(60px)',
          mixBlendMode: 'screen',
        }}
      />

      {/* Layer 3: Glow dorato middle-right */}
      <div
        ref={setRef(3)}
        data-speed={0.05}
        className="absolute top-[40vh] right-[10%] w-[40%] h-[40vh]"
        style={{
          background:
            'radial-gradient(circle, rgba(235,200,120,0.25) 0%, rgba(201,169,97,0.10) 50%, transparent 70%)',
          filter: 'blur(50px)',
          mixBlendMode: 'screen',
        }}
      />

      {/* Layer 4: Glow dorato bottom-left */}
      <div
        ref={setRef(4)}
        data-speed={0.04}
        className="absolute bottom-[10vh] left-[15%] w-[45%] h-[45vh]"
        style={{
          background:
            'radial-gradient(circle, rgba(255,220,140,0.20) 0%, rgba(201,169,97,0.08) 50%, transparent 70%)',
          filter: 'blur(55px)',
          mixBlendMode: 'screen',
        }}
      />

      {/* Layer 5: Vignette per contenere l'attenzione */}
      <div
        ref={setRef(5)}
        data-speed={0}
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 85% 75% at 50% 50%, transparent 0%, rgba(0,0,0,0.50) 85%, rgba(0,0,0,0.75) 100%)',
        }}
      />

      {/* Layer 6: Noise texture per ricchezza (opzionale) */}
      <div
        ref={setRef(6)}
        data-speed={0}
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />
    </div>
  )
}
