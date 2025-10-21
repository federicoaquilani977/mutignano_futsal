'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'

type Action = {
  id: string
  number: string
  title: string
  subtitle: string
  description: string
  details: string[]
  href: string
  cta: string
  visual: {
    type: 'gold' | 'image' | 'gradient'
    image?: string
    gradient?: string
  }
}

const ACTIONS: Action[] = [
  {
    id: 'book',
    number: '01',
    title: 'Prenota',
    subtitle: 'Scendi in campo',
    description: 'Padel, Tennis, Calcio a 5. I nostri campi ti aspettano.',
    details: [
      'Prenotazione online 24/7',
      'Conferma immediata',
      'Pagamento flessibile',
    ],
    href: '/prenota',
    cta: 'Prenota ora',
    visual: {
      type: 'gold',
    },
  },
  {
    id: 'follow',
    number: '02',
    title: 'Segui',
    subtitle: 'Vivi le partite',
    description:
      'Calendario, risultati live, classifiche. Resta sempre aggiornato.',
    details: [
      'Partite in diretta',
      'Statistiche dettagliate',
      'Notifiche in tempo reale',
    ],
    href: '/calendario',
    cta: 'Vedi calendario',
    visual: {
      type: 'image',
      image:
        'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2400',
    },
  },
  {
    id: 'sponsor',
    number: '03',
    title: 'Sostieni',
    subtitle: 'Cresci con noi',
    description:
      'Partnership, visibilità, progetti condivisi. Investiamo insieme.',
    details: [
      'Pacchetti personalizzati',
      'Visibilità garantita',
      'ROI misurabile',
    ],
    href: '/sponsor',
    cta: 'Scopri opportunità',
    visual: {
      type: 'gradient',
      gradient:
        'radial-gradient(circle at 30% 40%, rgba(201,169,97,0.3), rgba(163,135,68,0.2), transparent)',
    },
  },
]

export default function ActionRail() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      const progress = scrollLeft / (scrollWidth - clientWidth)
      setScrollProgress(progress)

      // Determina quale card è più visibile
      const cardWidth = clientWidth * 0.85
      const index = Math.round(scrollLeft / cardWidth)
      setActiveIndex(Math.min(index, ACTIONS.length - 1))
    }

    const ref = scrollRef.current
    if (ref) {
      ref.addEventListener('scroll', handleScroll, { passive: true })
      handleScroll()
    }

    return () => ref?.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return
    const cardWidth = scrollRef.current.clientWidth * 0.85
    scrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth',
    })
  }

  return (
    <section className="full-bleed py-16 relative overflow-hidden">
      {/* Background ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(201,169,97,0.08),transparent)]" />

      <div className="relative">
        {/* Header */}
        <div className="site-gutters mb-8 flex items-end justify-between">
          <div>
            <span className="text-[9px] uppercase tracking-[0.28em] text-oro/80 block mb-2">
              Azioni veloci
            </span>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-none">
              Come possiamo aiutarti?
            </h2>
          </div>

          {/* Dots navigation */}
          <div className="hidden md:flex gap-2">
            {ACTIONS.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`transition-all duration-300 ${
                  i === activeIndex
                    ? 'w-8 h-2 bg-oro'
                    : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                } rounded-full`}
                aria-label={`Go to action ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Horizontal scroll container */}
        <div
          ref={scrollRef}
          className="overflow-x-auto overflow-y-hidden no-scrollbar scroll-smooth"
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <div className="flex gap-6 px-[8%] pb-4">
            {ACTIONS.map((action, index) => (
              <article
                key={action.id}
                className="flex-shrink-0 scroll-snap-align-center"
                style={{
                  width: 'min(85vw, 900px)',
                  scrollSnapAlign: 'center',
                }}
              >
                <Link
                  href={action.href}
                  className="block group relative h-[500px] overflow-hidden rounded-2xl"
                >
                  {/* Background layer */}
                  <div className="absolute inset-0">
                    {action.visual.type === 'gold' && (
                      <>
                        <div className="absolute inset-0 bg-oro" />
                        <div
                          className="absolute inset-0 opacity-20"
                          style={{
                            background:
                              'radial-gradient(circle at top left, rgba(0,0,0,0.4), transparent 70%)',
                          }}
                        />
                        {/* Pattern texture */}
                        <div
                          className="absolute inset-0 opacity-[0.03]"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                          }}
                        />
                      </>
                    )}

                    {action.visual.type === 'image' && action.visual.image && (
                      <>
                        <Image
                          src={action.visual.image}
                          alt={action.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          unoptimized
                          sizes="900px"
                          priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70" />
                      </>
                    )}

                    {action.visual.type === 'gradient' &&
                      action.visual.gradient && (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/70" />
                          <div
                            className="absolute inset-0"
                            style={{ background: action.visual.gradient }}
                          />
                        </>
                      )}
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-between p-10 lg:p-14">
                    {/* Top: Number badge */}
                    <div className="flex justify-between items-start">
                      <div
                        className={`font-display text-8xl lg:text-9xl leading-none ${
                          action.visual.type === 'gold'
                            ? 'text-nero/10'
                            : 'text-white/10'
                        }`}
                      >
                        {action.number}
                      </div>

                      {/* Hover indicator */}
                      <div
                        className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm uppercase tracking-wider ${
                          action.visual.type === 'gold'
                            ? 'text-nero/60'
                            : 'text-white/60'
                        }`}
                      >
                        Click to explore →
                      </div>
                    </div>

                    {/* Bottom: Content */}
                    <div>
                      <div className="mb-6">
                        <h3
                          className={`font-display text-[clamp(3rem,6vw,5rem)] leading-[0.95] tracking-tight mb-2 ${
                            action.visual.type === 'gold'
                              ? 'text-nero'
                              : 'text-white'
                          }`}
                        >
                          {action.title}
                        </h3>
                        <p
                          className={`font-display text-2xl lg:text-3xl ${
                            action.visual.type === 'gold'
                              ? 'text-nero/70'
                              : 'text-white/70'
                          }`}
                        >
                          {action.subtitle}
                        </p>
                      </div>

                      <p
                        className={`text-lg mb-6 max-w-2xl ${
                          action.visual.type === 'gold'
                            ? 'text-nero/80'
                            : 'text-white/80'
                        }`}
                      >
                        {action.description}
                      </p>

                      {/* Details list */}
                      <ul className="space-y-2 mb-8">
                        {action.details.map((detail, i) => (
                          <li
                            key={i}
                            className={`flex items-center gap-3 text-sm ${
                              action.visual.type === 'gold'
                                ? 'text-nero/70'
                                : 'text-white/70'
                            }`}
                          >
                            <span
                              className={`w-1 h-1 rounded-full ${
                                action.visual.type === 'gold'
                                  ? 'bg-nero/40'
                                  : 'bg-oro'
                              }`}
                            />
                            {detail}
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <div
                        className={`inline-flex items-center gap-3 px-8 py-4 text-sm uppercase tracking-wider font-medium transition-all group-hover:gap-4 ${
                          action.visual.type === 'gold'
                            ? 'bg-nero text-oro'
                            : 'border-2 border-oro text-oro hover:bg-oro hover:text-nero'
                        }`}
                      >
                        <span>{action.cta}</span>
                        <span>→</span>
                      </div>
                    </div>
                  </div>

                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                        transform: 'translateX(-100%)',
                        animation: 'shine 2s ease-in-out infinite',
                      }}
                    />
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="site-gutters mt-8">
          <div className="h-px bg-white/10 relative">
            <div
              className="absolute top-0 left-0 h-full bg-oro transition-all duration-300"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Keyframes for shine */}
      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  )
}
