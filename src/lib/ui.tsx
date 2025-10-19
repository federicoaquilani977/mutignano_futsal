'use client'

import * as React from 'react'

/* ---------- ParallaxBox ---------- */
type ParallaxBoxProps = React.HTMLAttributes<HTMLDivElement> & {
  /** velocità dello spostamento verticale (0.02–0.12 consigliato) */
  speed?: number
}

export function ParallaxBox({
  speed = 0.06,
  className = '',
  children,
  style,
  ...rest
}: ParallaxBoxProps) {
  const ref = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return

    let raf = 0

    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      // centro del box rispetto al viewport
      const center = rect.top + rect.height / 2 - window.innerHeight / 2
      const translateY = Math.round(center * speed)
      el.style.transform = `translate3d(0, ${translateY}px, 0)`
    }

    const loop = () => {
      onScroll()
      raf = window.requestAnimationFrame(loop)
    }

    raf = window.requestAnimationFrame(loop)
    return () => window.cancelAnimationFrame(raf)
  }, [speed])

  return (
    <div
      ref={ref}
      className={className}
      style={{ willChange: 'transform', ...style }}
      {...rest}
    >
      {children}
    </div>
  )
}

/* ---------- Reveal (fade+rise quando entra in viewport) ---------- */
type AsElement = 'div' | 'section' | 'article' | 'header' | 'footer' | 'nav'

type RevealProps = {
  as?: AsElement
  className?: string
  index?: number // facoltativo, per piccoli delay se vuoi
  children?: React.ReactNode
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'children' | 'className'>

export function Reveal({
  as = 'div',
  className = '',
  index = 0,
  children,
  ...rest
}: RevealProps) {
  const ref = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return

    el.style.opacity = '0'
    el.style.transform = 'translateY(12px)'

    const io = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting) {
          const delay = Math.min(index * 60, 240) // ms
          el.style.transition = `opacity 600ms ease ${delay}ms, transform 600ms ease ${delay}ms`
          el.style.opacity = '1'
          el.style.transform = 'none'
          io.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [index])

  // rendiamo sempre un <div> con ref tipizzato, e dentro non usiamo ref sul tag dinamico.
  const Element = as

  return (
    <div ref={ref} className={className} {...rest}>
      <Element>{children}</Element>
    </div>
  )
}
