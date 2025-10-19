export default function Footer() {
  return (
    <footer className="mt-24 border-t border-oro/10 bg-black/90">
      <div className="site-gutters grid gap-10 md:grid-cols-4 py-20">
        <div>
          <div className="font-display text-2xl tracking-[0.24em]">PINETO</div>
          <p className="mt-4 text-sm text-grigio">
            Società Sportiva Pineto — Mutignano Futsal + Circolo Sportivo.
          </p>
        </div>
        <div>
          <h4 className="text-[0.75rem] uppercase tracking-widest text-oro mb-6">
            Squadra
          </h4>
          <ul className="space-y-3 text-sm text-grigio">
            <li>Rosa</li>
            <li>Calendario</li>
            <li>Risultati</li>
            <li>News</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[0.75rem] uppercase tracking-widest text-oro mb-6">
            Circolo
          </h4>
          <ul className="space-y-3 text-sm text-grigio">
            <li>Prenota Campi</li>
            <li>Eventi</li>
            <li>Tornei</li>
            <li>Sponsor</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[0.75rem] uppercase tracking-widest text-oro mb-6">
            Contatti
          </h4>
          <ul className="space-y-3 text-sm text-grigio">
            <li>info@sspineto.it</li>
            <li>+39 085 123 4567</li>
            <li>Via Esempio, Pineto</li>
          </ul>
        </div>
      </div>
      <div className="container-page py-8 border-t border-oro/10 text-center text-xs text-grigio">
        © {new Date().getFullYear()} Società Sportiva Pineto
      </div>
    </footer>
  );
}
