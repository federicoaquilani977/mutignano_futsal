'use client'

import Image from 'next/image'
import Link from 'next/link'

const TEAM_FALLBACK =
  'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2000&auto=format&fit=crop'

// Mock data - sostituisci con squadSpotlight dal tuo @/lib/mock
const squadData = {
  teamPhoto: 'https://images.pexels.com/photos/262524/pexels-photo-262524.jpeg',
  title: 'Una squadra unita verso la vittoria',
  subtitle:
    'Passione, determinazione e spirito di squadra per raggiungere obiettivi ambiziosi nella stagione 2024/25',
  stats: [
    { value: '25', label: 'Atleti' },
    { value: '12', label: 'Vittorie' },
    { value: '8', label: 'Pareggi' },
  ],
  ctaHref: '/squadra',
}

export default function SquadSpotlight() {
  return (
    <section className="relative h-screen w-full grid lg:grid-cols-2 bg-nero">
      {/* Left: Team Image */}
      <div className="relative">
        <Image
          src={squadData.teamPhoto || TEAM_FALLBACK}
          alt="Team photo"
          fill
          className="object-cover"
          style={{ filter: 'grayscale(0.2)' }}
          unoptimized
          priority
        />
        {/* Gradient blend to right */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-nero/20 to-nero/80 lg:to-nero" />
      </div>

      {/* Right: Content */}
      <div className="relative bg-nero flex items-center px-8 md:px-16 lg:px-20 py-20">
        <div className="max-w-xl">
          {/* Header line */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-oro" />
            <span className="text-oro text-xs uppercase tracking-[0.3em] font-bold">
              La nostra squadra
            </span>
          </div>

          {/* Title */}
          <h1 className="text-white text-6xl md:text-7xl font-display leading-[0.95] tracking-tight mb-6">
            {squadData.title}
          </h1>

          {/* Subtitle */}
          <p className="text-white/70 text-lg leading-relaxed mb-10">
            {squadData.subtitle}
          </p>

          {/* Stats */}
          <div className="flex gap-8 mb-10 pb-8 border-b border-white/10">
            {squadData.stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-oro text-5xl font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Link */}
          <Link
            href={squadData.ctaHref}
            className="group inline-flex items-center gap-3 text-oro text-sm uppercase tracking-wider font-bold hover:gap-5 transition-all duration-300"
          >
            <span>Vai alla rosa completa</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="group-hover:translate-x-1 transition-transform duration-300"
            >
              <path
                d="M5 12h14m-6-6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
