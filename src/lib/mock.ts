import { Match } from "./types";

export const mockNextMatch: Match = {
  id: "match-001",
  competition: "Serie D Abruzzo C5",
  round: "Giornata 1",
  kickoff: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
  venue: "PalaPineto",
  home: { id: "pineto", name: "SS Pineto", shortName: "Pineto" },
  away: { id: "mutignano", name: "Mutignano Futsal", shortName: "Mutignano" },
  posterUrl:
    "https://images.unsplash.com/photo-1542541864-4abf21a55761?q=80&w=1600&auto=format&fit=crop",
};

export const clubValues = [
  {
    id: "val-1",
    title: "Determinazione",
    text: "Ogni allenamento è un passo. Ogni partita è un’opportunità.",
  },
  {
    id: "val-2",
    title: "Fair Play",
    text: "Rispetto per compagni, avversari e tifosi: la nostra base.",
  },
  {
    id: "val-3",
    title: "Comunità",
    text: "Cresciamo insieme, dentro e fuori dal campo.",
  },
] as const;

import type { Stat, Post } from "./types";

export const clubStats: Stat[] = [
  { id: "st1", value: "18", label: "Giocatori Prima Squadra" },
  {
    id: "st2",
    value: "2",
    label: "Tornei organizzati",
    hint: "stagione corrente",
  },
  {
    id: "st3",
    value: "5",
    label: "Campi gestiti",
    hint: "1 calcio • 2 tennis • 2 padel",
  },
  {
    id: "st4",
    value: "1200+",
    label: "Persone coinvolte",
    hint: "community e pubblico",
  },
];

export const newsPosts: Post[] = [
  {
    id: "n1",
    title: "Presentazione ufficiale stagione",
    excerpt: "Roster, staff e obiettivi: ecco la nostra nuova identità.",
    coverUrl:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1600",
    dateISO: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    tag: "Club",
  },
  {
    id: "n2",
    title: "Aperte le iscrizioni ai tornei",
    excerpt: "Tornei serali di Padel e Tennis. Posti limitati.",
    coverUrl:
      "https://images.unsplash.com/photo-1599058945522-28d584b6f6cb?q=80&w=1600",
    dateISO: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
    tag: "Eventi",
  },
  {
    id: "n3",
    title: "Accordo con nuovi sponsor",
    excerpt: "Benvenuti ai partner che credono nel nostro progetto.",
    coverUrl:
      "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1600",
    dateISO: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
    tag: "Sponsor",
  },
];

import type { OverviewTile } from "./types";

export const overviewTiles: OverviewTile[] = [
  {
    id: "club",
    title: "Il Club",
    subtitle: "Storia, identità, vision",
    href: "/club",
    coverUrl:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1600&auto=format&fit=crop",
    accent: "oro",
  },
  {
    id: "circolo",
    title: "Il Circolo",
    subtitle: "Campi • Prenotazioni • Tornei",
    href: "/circolo",
    coverUrl:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "eventi",
    title: "Community & Eventi",
    subtitle: "Calendario attività e iniziative",
    href: "/eventi",
    coverUrl:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1600&auto=format&fit=crop",
  },
];

export const squadSpotlight = {
  teamPhoto:
    "https://images.unsplash.com/photo-1748112202471-8aab237fc7f7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470", // foto squadra ampia
  title: "La Squadra",
  subtitle: "Talento, disciplina, mentalità vincente.",
  ctaHref: "/squadra",
  ctaLabel: "Vai alla rosa",
  roles: [
    {
      id: "coach",
      label: "Allenatore",
      name: "M. Rossi",
      blurb: "Guida tecnica e tattica del gruppo.",
      photoUrl:
        "https://images.unsplash.com/photo-1610736342165-4eeb4aef66ca?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=627", // ritratto coach
    },
    {
      id: "captain",
      label: "Capitano",
      name: "L. Bianchi",
      blurb: "Leadership in campo e fuori.",
      photoUrl:
        "https://images.unsplash.com/photo-1610736342165-4eeb4aef66ca?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=627", // ritratto capitano
    },
    {
      id: "youth",
      label: "Giovani",
      name: "Next Gen",
      blurb: "Cresciamo i talenti di domani.",
      photoUrl:
        "https://images.unsplash.com/photo-1610736342165-4eeb4aef66ca?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=627", // ragazzi/academy
    },
  ],
};

export type VideoItem = {
  id: string;
  title: string;
  href: string; // link pagina/route del video (o esterno)
  coverUrl: string; // poster
  meta?: string; // es. "03:12" o "Intervista"
};

export const videosRail: VideoItem[] = [
  {
    id: "v1",
    title: "Highlights ultima partita",
    href: "/media/v1",
    coverUrl: "https://www.youtube.com/watch?v=FvxbKTvBuIc",
    meta: "03:12",
  },
  {
    id: "v2",
    title: "Intervista al coach",
    href: "/media/v2",
    coverUrl:
      "https://images.unsplash.com/photo-1521417531039-94aee3a0f78b?q=80&w=1600&auto=format&fit=crop",
    meta: "Intervista",
  },
  {
    id: "v3",
    title: "Dietro le quinte",
    href: "/media/v3",
    coverUrl:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1600&auto=format&fit=crop",
    meta: "02:08",
  },
  {
    id: "v4",
    title: "Allenamento Next Gen",
    href: "/media/v4",
    coverUrl:
      "https://images.unsplash.com/photo-1508804194543-1b9a45c0f2e0?q=80&w=1600&auto=format&fit=crop",
  },
];

export const sponsors = [
  {
    id: "sp1",
    name: "BrandOne",
    logoUrl: "https://dummyimage.com/220x80/ffffff/000000&text=BrandOne",
  },
  {
    id: "sp2",
    name: "BrandTwo",
    logoUrl: "https://dummyimage.com/200x80/ffffff/000000&text=BrandTwo",
  },
  {
    id: "sp3",
    name: "BrandThree",
    logoUrl: "https://dummyimage.com/190x80/ffffff/000000&text=BrandThree",
  },
  {
    id: "sp4",
    name: "BrandFour",
    logoUrl: "https://dummyimage.com/180x80/ffffff/000000&text=BrandFour",
  },
  {
    id: "sp5",
    name: "BrandFive",
    logoUrl: "https://dummyimage.com/210x80/ffffff/000000&text=BrandFive",
  },
];

export type StatItem = {
  id: string;
  label: string;
  value: number;
  suffix?: string; // es. "k", "%"
};

export const statsBand: StatItem[] = [
  { id: "st1", label: "Tesserati", value: 240 },
  { id: "st2", label: "Eventi annui", value: 36 },
  { id: "st3", label: "Campi attivi", value: 7 },
  { id: "st4", label: "Anni di attività", value: 12 },
];
