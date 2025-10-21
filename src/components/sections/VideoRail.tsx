'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const FALLBACK =
  'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2000&auto=format&fit=crop'

// Mock data - sostituisci con videosRail
const videosRail = [
  {
    id: 'v1',
    title: 'Highlights stagione 2024/25',
    href: '/media/highlights',
    coverUrl:
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2400',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Sostituisci con video reale
    duration: '12:34',
    category: 'Highlights',
  },
  {
    id: 'v2',
    title: 'Intervista post-partita',
    href: '/media/intervista-1',
    coverUrl:
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2400',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '5:22',
    category: 'Interviste',
  },
  {
    id: 'v3',
    title: 'Allenamento settimanale',
    href: '/media/allenamento',
    coverUrl:
      'https://images.unsplash.com/photo-1552667466-07770ae110d0?q=80&w=2400',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '8:15',
    category: 'Training',
  },
  {
    id: 'v4',
    title: 'Dietro le quinte',
    href: '/media/backstage',
    coverUrl:
      'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=2400',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '6:45',
    category: 'Backstage',
  },
  {
    id: 'v5',
    title: 'Goals della settimana',
    href: '/media/goals',
    coverUrl:
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2400',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '4:30',
    category: 'Goals',
  },
]

export default function FeatureVideoGrid() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [featuredIndex, setFeaturedIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const featured = videosRail[featuredIndex]
  const otherVideos = videosRail.filter((_, idx) => idx !== featuredIndex)

  const switchToVideo = (index: number) => {
    setIsPlaying(false)
    setFeaturedIndex(index)
  }

  const handlePlayClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsPlaying(true)
  }

  return (
    <section className="relative py-20 px-6 md:px-12 lg:px-20 bg-[#0a0a0a] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-oro/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-baseline gap-6 mb-3">
            <span className="text-oro text-xs uppercase tracking-[0.3em] font-medium">
              Video & Media
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-oro/30 to-transparent" />
          </div>
          <div className="flex items-end justify-between">
            <h2 className="font-display text-white text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-tight">
              I nostri contenuti
            </h2>
            <Link
              href="/media"
              className="group flex items-center gap-2 text-white/50 hover:text-oro text-sm uppercase tracking-wider transition-all duration-300 pb-3"
            >
              <span>Vedi tutto</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                className="group-hover:translate-x-1 transition-transform duration-300"
              >
                <path
                  d="M3 9h12m-4-4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-[1.2fr,1fr] gap-8 lg:gap-12">
          {/* LEFT: Featured Hero Video */}
          <div className="relative rounded-3xl overflow-hidden min-h-[600px] bg-[#141414]">
            {!isPlaying ? (
              // Thumbnail view
              <div
                className="group relative w-full h-full cursor-pointer"
                onMouseEnter={() => setHoveredId(featured.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={handlePlayClick}
              >
                <Image
                  src={featured?.coverUrl || FALLBACK}
                  alt={featured?.title || 'Video'}
                  fill
                  className="object-cover transition-all duration-1000 ease-out"
                  style={{
                    filter:
                      hoveredId === featured.id
                        ? 'grayscale(0)'
                        : 'grayscale(0.8)',
                    transform:
                      hoveredId === featured.id ? 'scale(1.05)' : 'scale(1)',
                  }}
                  unoptimized
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="relative transition-all duration-700 ease-out"
                    style={{
                      opacity: hoveredId === featured.id ? 1 : 0.7,
                      transform:
                        hoveredId === featured.id ? 'scale(1.1)' : 'scale(1)',
                    }}
                  >
                    <div className="w-20 h-20 rounded-full bg-oro/90 backdrop-blur-md flex items-center justify-center shadow-2xl">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-nero ml-1"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    {hoveredId === featured.id && (
                      <div className="absolute inset-0 rounded-full border-2 border-oro animate-ping opacity-30" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1.5 bg-oro/20 backdrop-blur-sm border border-oro/30 text-oro text-[10px] font-bold uppercase tracking-[0.25em] rounded-md">
                      {featured?.category || 'Featured'}
                    </span>
                  </div>

                  <h3 className="text-white font-display text-[clamp(2rem,4vw,3.5rem)] leading-tight mb-4 transition-colors duration-300 group-hover:text-oro">
                    {featured?.title}
                  </h3>

                  <div className="flex items-center gap-4">
                    <span className="text-white/70 text-sm font-mono">
                      {featured?.duration}
                    </span>
                    <div className="w-1 h-1 rounded-full bg-white/30" />
                    <span className="text-white/70 text-sm">HD Quality</span>
                  </div>
                </div>
              </div>
            ) : (
              // Video player view
              <div className="relative w-full h-full">
                <iframe
                  src={`${featured.videoUrl}?autoplay=1`}
                  title={featured.title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

                {/* Close button */}
                <button
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/80 backdrop-blur-sm hover:bg-oro text-white hover:text-nero flex items-center justify-center transition-all duration-300"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M5 5l10 10M15 5L5 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* RIGHT: Video List */}
          <div className="flex flex-col">
            <div className="mb-8">
              <h3 className="text-white text-2xl font-display mb-2">
                Altri contenuti
              </h3>
              <p className="text-white/50 text-sm">Clicca per riprodurre</p>
            </div>

            <div className="space-y-4 flex-1">
              {otherVideos.map((video) => {
                const originalIndex = videosRail.findIndex(
                  (v) => v.id === video.id
                )
                return (
                  <button
                    key={video.id}
                    onClick={() => switchToVideo(originalIndex)}
                    className="group flex gap-5 p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/0 hover:border-white/10 cursor-pointer transition-all duration-500 w-full text-left"
                    onMouseEnter={() => setHoveredId(video.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    {/* Thumbnail */}
                    <div className="relative w-36 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-[#141414]">
                      <Image
                        src={video.coverUrl}
                        alt={video.title}
                        fill
                        className="object-cover transition-all duration-700 ease-out"
                        style={{
                          filter:
                            hoveredId === video.id
                              ? 'grayscale(0)'
                              : 'grayscale(0.9)',
                          transform:
                            hoveredId === video.id ? 'scale(1.1)' : 'scale(1)',
                        }}
                        unoptimized
                      />

                      {/* Play overlay */}
                      <div
                        className="absolute inset-0 flex items-center justify-center bg-black/30 transition-all duration-300"
                        style={{
                          opacity: hoveredId === video.id ? 1 : 0.5,
                        }}
                      >
                        <div className="w-10 h-10 rounded-full bg-oro/90 backdrop-blur-sm flex items-center justify-center">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="currentColor"
                            className="text-nero ml-0.5"
                          >
                            <path d="M4 2l8 5-8 5V2z" />
                          </svg>
                        </div>
                      </div>

                      {/* Duration badge */}
                      <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 backdrop-blur-sm text-white text-[10px] font-mono rounded">
                        {video.duration}
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1 flex flex-col justify-center min-w-0">
                      <span className="text-oro/70 text-[10px] uppercase tracking-[0.2em] mb-1.5 font-medium">
                        {video.category}
                      </span>
                      <h4 className="text-white text-lg font-display leading-tight mb-2 transition-colors duration-300 group-hover:text-oro line-clamp-2">
                        {video.title}
                      </h4>
                    </div>

                    {/* Arrow */}
                    <div className="flex items-center">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="text-white/20 group-hover:text-oro group-hover:translate-x-1 transition-all duration-300"
                      >
                        <path
                          d="M7 4l6 6-6 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
