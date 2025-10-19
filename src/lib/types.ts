export type Team = {
  id: string;
  name: string;
  shortName?: string;
  crestUrl?: string;
};

export type Match = {
  id: string;
  home: Team;
  away: Team;
  competition: string;
  round?: string;
  kickoff: string; // ISO date
  venue?: string;
  posterUrl?: string; // hero/card image
};

export type Stat = { id: string; value: string; label: string; hint?: string };

export type OverviewTile = {
  id: string;
  title: string;
  subtitle?: string;
  href: string;
  coverUrl?: string; // immagine (CDN o /public)
  accent?: "oro" | "neutro";
};

// esempio di definizione tipica
export type Post = {
  id: string;
  title: string;
  excerpt?: string;
  dateISO: string;
  tag?: string;
  coverUrl?: string;
  author?: string; // <-- aggiunto
};
