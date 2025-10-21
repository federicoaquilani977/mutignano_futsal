export type Team = {
  id: string
  name: string
  shortName?: string
  crestUrl?: string
}

export type Match = {
  id: string
  home: Team
  away: Team
  competition: string
  round?: string
  kickoff: string // ISO date
  venue?: string
  posterUrl?: string // hero/card image
}

export type Stat = { id: string; value: string; label: string; hint?: string }

export type OverviewTile = {
  id: string
  title: string
  subtitle?: string
  href: string
  coverUrl?: string // immagine (CDN o /public)
  accent?: 'oro' | 'neutro'
}

// esempio di definizione tipica
export type Post = {
  id: string
  title: string
  excerpt?: string
  dateISO: string
  tag?: string
  coverUrl?: string
  author?: string // <-- aggiunto
}

// types.ts - Espansione
export type ApiResponse<T> = {
  data: T
  meta?: {
    page?: number
    total?: number
    timestamp?: string
  }
}

export type ApiError = {
  error: string
  code?: string
  details?: unknown
}

// Player type per rosa completa
export type Player = {
  id: string
  name: string
  surname: string
  number: number
  role: 'Portiere' | 'Difensore' | 'Centrocampista' | 'Attaccante'
  photoUrl?: string
  birthDate?: string
  nationality?: string
}

// Event type per calendario
export type Event = {
  id: string
  title: string
  description?: string
  startDate: string // ISO
  endDate?: string
  location?: string
  type: 'match' | 'training' | 'tournament' | 'social'
  coverUrl?: string
}

// Booking type per prenotazioni
export type Booking = {
  id: string
  userId: string
  courtId: string
  courtName: string
  date: string // ISO
  startTime: string // "14:00"
  endTime: string // "15:00"
  status: 'pending' | 'confirmed' | 'cancelled'
  price?: number
}

// User type (se implementi autenticazione)
export type User = {
  id: string
  email: string
  name: string
  surname: string
  role: 'admin' | 'member' | 'guest'
  photoUrl?: string
}
