'use client'

export default function Hero() {
  return (
    <section className="relative z-0 h-[100vh] overflow-hidden pull-under-header">
      {/* <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero.mov"
        poster="/videos/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
*/}
      {/* Overlay continuo: evita banda sotto l'header */}
      <div className="absolute inset-0 pointer-events-none">
        {/* gradiente top -> evita la riga */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom,' +
              'rgba(0,0,0,0) 0,' +
              'rgba(0,0,0,0) var(--header-h),' +
              'rgba(0,0,0,.28) calc(var(--header-h) + 48px),' +
              'rgba(0,0,0,.55) 100%)',
          }}
        />
        {/* leggera vignetta radiale per profondità */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,.55)_100%)]" />
      </div>

      {/* Fallback per utenti con “Riduci animazioni” attivo */}
      <div
        className="absolute inset-0 hidden motion-reduce:block bg-cover bg-center"
        style={{ backgroundImage: 'url(/videos/hero-poster.jpg)' }}
        aria-hidden="true"
      />

      {/* Contenuti */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="w-[90%] max-w-[1000px] text-center space-y-8">
          <div className="badge mx-auto">
            <span>mutignano futsal</span>
          </div>
          <h1 className="font-display text-[clamp(2.5rem,8vw,7rem)] font-light leading-[1.1] tracking-tight">
            Giovani,
            <br />
            <span className="italic font-semibold text-[color:var(--color-oro)]">
              Veloci
            </span>
            , Uniti
          </h1>
          <p className="text-[color:var(--color-grigio)] text-base font-light tracking-wide">
            La nuova era del calcio a 5 abruzzese
          </p>
          <div className="flex justify-center gap-6 pt-4">
            <a className="cursor-pointer uppercase tracking-[0.12em] text-sm px-8 py-3 border border-[color:var(--color-oro)] hover:bg-[color:var(--color-oro)] hover:text-[color:var(--color-nero)] transition">
              Scopri la Squadra
            </a>
            <a className="cursor-pointer uppercase tracking-[0.12em] text-sm px-8 py-3 border border-white/30 text-white/80 hover:text-white hover:border-white transition">
              La nostra storia
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
