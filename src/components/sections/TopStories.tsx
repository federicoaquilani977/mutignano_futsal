'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

type Story = {
  id: string
  title: string
  kicker: string
  excerpt: string
  href: string
  coverUrl: string
}

const STORIES: Story[] = [
  {
    id: 'st1',
    title: 'Presentazione ufficiale stagione',
    kicker: 'CLUB',
    excerpt: 'Rosa completa, obiettivi ambiziosi e nuovo staff tecnico',
    href: '/news/presentazione-stagione',
    coverUrl:
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2400',
  },
  {
    id: 'st2',
    title: 'Tornei di primavera: iscrizioni aperte',
    kicker: 'EVENTI',
    excerpt: 'Padel e tennis, iscriviti ora ai tornei amatoriali',
    href: '/eventi',
    coverUrl:
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2400',
  },
  {
    id: 'st3',
    title: 'Nuove partnership strategiche',
    kicker: 'SPONSOR',
    excerpt: 'Tre sponsor entrano nel progetto SS Pineto',
    href: '/news/sponsor',
    coverUrl:
      'https://images.unsplash.com/photo-1552667466-07770ae110d0?q=80&w=2400',
  },
  {
    id: 'st4',
    title: 'Vittoria in trasferta: 5-2',
    kicker: 'PARTITA',
    excerpt: 'Grande prestazione della squadra in Serie D',
    href: '/news/vittoria',
    coverUrl:
      'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=2400',
  },
]

export default function HeroStories() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Autoplay logic
  useEffect(() => {
    const startTimer = () => {
      timerRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % STORIES.length)
      }, 6000)
    }

    const stopTimer = () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
    }

    if (!isPaused) {
      startTimer()
    } else {
      stopTimer()
    }

    return () => stopTimer()
  }, [isPaused])

  const goToSlide = (index: number) => {
    if (index !== current) {
      setCurrent(index)
    }
  }

  const goToPrev = () => {
    setCurrent((prev) => (prev === 0 ? STORIES.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % STORIES.length)
  }

  return (
    <section className="relative h-[90vh] min-h-[700px] w-full overflow-hidden bg-nero">
      {/* Background Images with Parallax */}
      <div className="absolute inset-0">
        {STORIES.map((story, idx) => (
          <div
            key={story.id}
            className="absolute inset-0 transition-all duration-1000 ease-out"
            style={{
              opacity: idx === current ? 1 : 0,
              transform: idx === current ? 'scale(1)' : 'scale(1.05)',
            }}
          >
            <Image
              src={story.coverUrl}
              alt={story.title}
              fill
              className="object-cover"
              unoptimized
              priority={idx === 0}
            />
          </div>
        ))}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-nero via-nero/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-nero/90 via-nero/40 to-transparent" />

      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-end px-8 md:px-16 lg:px-24 pb-40">
        <div className="max-w-5xl">
          {STORIES.map((story, idx) => (
            <div
              key={story.id}
              className="transition-all duration-700 ease-out"
              style={{
                opacity: idx === current ? 1 : 0,
                transform:
                  idx === current ? 'translateY(0)' : 'translateY(30px)',
                position: idx === current ? 'relative' : 'absolute',
                pointerEvents: idx === current ? 'auto' : 'none',
              }}
            >
              {/* Kicker */}
              <div className="mb-6">
                <span className="inline-block px-5 py-2.5 bg-oro text-nero text-xs font-bold uppercase tracking-[0.25em]">
                  {story.kicker}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-display text-white text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-tight mb-8 max-w-4xl">
                {story.title}
              </h1>

              {/* Excerpt */}
              <p className="text-white/90 text-xl md:text-2xl leading-relaxed mb-10 max-w-2xl">
                {story.excerpt}
              </p>

              {/* CTA */}
              <Link
                href={story.href}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-oro text-nero font-bold text-sm uppercase tracking-wider hover:bg-white transition-all duration-300"
              >
                <span>Scopri di più</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="group-hover:translate-x-1 transition-transform duration-300"
                >
                  <path
                    d="M4 10h12m-4-4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div
        className="absolute bottom-0 left-0 right-0 px-8 md:px-16 lg:px-24 pb-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Progress Dots */}
          <div className="flex gap-3">
            {STORIES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className="group relative h-1 bg-white/20 hover:bg-white/30 transition-colors"
                style={{ width: '80px' }}
                aria-label={`Go to slide ${idx + 1}`}
              >
                <div
                  className="absolute left-0 top-0 h-full bg-oro transition-all"
                  style={{
                    width: idx === current ? '100%' : '0%',
                    transitionDuration:
                      idx === current && !isPaused ? '6000ms' : '300ms',
                    transitionTimingFunction:
                      idx === current ? 'linear' : 'ease',
                  }}
                />
              </button>
            ))}
          </div>

          {/* Counter */}
          <div className="flex items-center gap-8">
            <div className="text-white/60 text-sm font-mono">
              <span className="text-oro text-2xl font-bold">
                {(current + 1).toString().padStart(2, '0')}
              </span>
              <span className="text-white/40 mx-2">/</span>
              <span className="text-lg">
                {STORIES.length.toString().padStart(2, '0')}
              </span>
            </div>

            {/* Arrow Navigation */}
            <div className="flex gap-2">
              <button
                onClick={goToPrev}
                className="w-12 h-12 flex items-center justify-center border border-white/30 text-white/60 hover:border-oro hover:text-oro hover:bg-oro/10 transition-all duration-300"
                aria-label="Previous"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M12 16l-6-6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              <button
                onClick={goToNext}
                className="w-12 h-12 flex items-center justify-center border border-white/30 text-white/60 hover:border-oro hover:text-oro hover:bg-oro/10 transition-all duration-300"
                aria-label="Next"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M8 16l6-6-6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
