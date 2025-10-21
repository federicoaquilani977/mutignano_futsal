'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Reveal } from '@/lib/ui'

export default function IdentitySection() {
  const [activeHalf, setActiveHalf] = useState<'left' | 'right' | null>(null)

  return (
    <section className="full-bleed h-screen relative overflow-hidden">
      {/* Background base */}
      <div className="absolute inset-0 bg-nero" />

      {/* Container split */}
      <div className="relative h-full flex">
        {/* LEFT HALF - SQUADRA */}
        <div
          className={`relative transition-all duration-700 ${
            activeHalf === 'right'
              ? 'w-[30%]'
              : activeHalf === 'left'
              ? 'w-[70%]'
              : 'w-1/2'
          }`}
          onMouseEnter={() => setActiveHalf('left')}
          onMouseLeave={() => setActiveHalf(null)}
        >
          <Link href="/squadra" className="block h-full group">
            {/* Immagine */}
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2000&auto=format&fit=crop"
                alt="Squadra"
                fill
                className={`object-cover transition-all duration-700 ${
                  activeHalf === 'left'
                    ? 'scale-105 brightness-110'
                    : 'brightness-75'
                }`}
                unoptimized
                sizes="50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
            </div>

            {/* Contenuto */}
            <div className="relative h-full flex items-center justify-start p-12 lg:p-20">
              <div
                className={`transition-all duration-500 ${
                  activeHalf === 'left'
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-4 opacity-90'
                }`}
              >
                <span className="inline-block px-3 py-1 bg-oro text-nero text-xs uppercase tracking-wider mb-6">
                  01 / Squadra
                </span>

                <h2
                  className={`font-display leading-[1.05] tracking-tight mb-6 transition-all duration-500 ${
                    activeHalf === 'left' ? 'text-6xl' : 'text-5xl'
                  }`}
                >
                  Competere
                  <br />
                  <span className="text-oro italic">sul campo</span>
                </h2>

                <p
                  className={`text-white/80 max-w-md mb-8 transition-all duration-500 ${
                    activeHalf === 'left' ? 'opacity-100' : 'opacity-0 h-0'
                  }`}
                >
                  Serie D Abruzzo. 18 giocatori. Allenamenti, partite, crescita.
                  Il calcio a 5 che conta.
                </p>

                <div className="flex items-center gap-3 text-sm uppercase tracking-wide text-oro">
                  <span>Scopri</span>
                  <span
                    className={`transition-transform ${
                      activeHalf === 'left' ? 'translate-x-2' : ''
                    }`}
                  >
                    →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* RIGHT HALF - SOCIETÀ */}
        <div
          className={`relative transition-all duration-700 ${
            activeHalf === 'left'
              ? 'w-[30%]'
              : activeHalf === 'right'
              ? 'w-[70%]'
              : 'w-1/2'
          }`}
          onMouseEnter={() => setActiveHalf('right')}
          onMouseLeave={() => setActiveHalf(null)}
        >
          <Link href="/eventi" className="block h-full group">
            {/* Immagine */}
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2000&auto=format&fit=crop"
                alt="Società"
                fill
                className={`object-cover transition-all duration-700 ${
                  activeHalf === 'right'
                    ? 'scale-105 brightness-110'
                    : 'brightness-75'
                }`}
                unoptimized
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/40 to-transparent" />
            </div>

            {/* Contenuto */}
            <div className="relative h-full flex items-center justify-end p-12 lg:p-20">
              <div
                className={`transition-all duration-500 text-right ${
                  activeHalf === 'right'
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-4 opacity-90'
                }`}
              >
                <span className="inline-block px-3 py-1 bg-oro text-nero text-xs uppercase tracking-wider mb-6">
                  02 / Società
                </span>

                <h2
                  className={`font-display leading-[1.05] tracking-tight mb-6 transition-all duration-500 ${
                    activeHalf === 'right' ? 'text-6xl' : 'text-5xl'
                  }`}
                >
                  Vivere
                  <br />
                  <span className="text-oro italic">insieme</span>
                </h2>

                <p
                  className={`text-white/80 max-w-md mb-8 ml-auto transition-all duration-500 ${
                    activeHalf === 'right' ? 'opacity-100' : 'opacity-0 h-0'
                  }`}
                >
                  Circolo sportivo. 5 campi. Eventi, tornei, amicizie. Uno
                  spazio per tutti.
                </p>

                <div className="flex items-center justify-end gap-3 text-sm uppercase tracking-wide text-oro">
                  <span
                    className={`transition-transform ${
                      activeHalf === 'right' ? '-translate-x-2' : ''
                    }`}
                  >
                    ←
                  </span>
                  <span>Esplora</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Divisore centrale */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
        <div className="w-px h-32 bg-oro/40" />
        <div className="w-8 h-8 -mt-4 -ml-4 rounded-full border-2 border-oro bg-nero flex items-center justify-center">
          <span className="text-oro text-xs">+</span>
        </div>
      </div>

      {/* Label bottom */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center pointer-events-none">
        <p className="text-white/50 text-sm uppercase tracking-widest">
          Due realtà · Una passione
        </p>
      </div>
    </section>
  )
}
