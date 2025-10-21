// lib/api.ts - Espansione
import { CONFIG } from './config'
import { Match, Post, OverviewTile } from './types'
import {
  mockNextMatch,
  newsPosts,
  overviewTiles,
  squadSpotlight,
  videosRail,
  sponsors,
} from './mock'

// ✅ Pattern consolidato per tutte le chiamate
async function apiCall<T>(
  endpoint: string,
  fallback: T,
  signal?: AbortSignal
): Promise<T> {
  if (!CONFIG.API_BASE_URL) {
    await new Promise((r) => setTimeout(r, 150)) // mock delay
    return fallback
  }

  const res = await fetch(`${CONFIG.API_BASE_URL}${endpoint}`, {
    signal,
    cache: 'no-store', // o "force-cache" a seconda delle esigenze
  })

  if (!res.ok) throw new Error(`API error ${res.status}`)
  return (await res.json()) as T
}

// Match
export async function getNextMatch(signal?: AbortSignal): Promise<Match> {
  return apiCall('/matches/next', mockNextMatch, signal)
}

export async function getMatches(signal?: AbortSignal): Promise<Match[]> {
  return apiCall('/matches', [mockNextMatch], signal)
}

// News
export async function getNewsPosts(signal?: AbortSignal): Promise<Post[]> {
  return apiCall('/news', newsPosts, signal)
}

export async function getNewsPost(
  id: string,
  signal?: AbortSignal
): Promise<Post | null> {
  const posts = await getNewsPosts(signal)
  return posts.find((p) => p.id === id) || null
}

// Overview
export async function getOverviewTiles(
  signal?: AbortSignal
): Promise<OverviewTile[]> {
  return apiCall('/overview', overviewTiles, signal)
}

// Squad
export async function getSquadSpotlight(signal?: AbortSignal) {
  return apiCall('/squad/spotlight', squadSpotlight, signal)
}

// Videos
export async function getVideos(signal?: AbortSignal) {
  return apiCall('/videos', videosRail, signal)
}

// Sponsors
export async function getSponsors(signal?: AbortSignal) {
  return apiCall('/sponsors', sponsors, signal)
}
