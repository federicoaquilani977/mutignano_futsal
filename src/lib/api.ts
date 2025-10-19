import { CONFIG } from "./config";
import { Match } from "./types";
import { mockNextMatch } from "./mock";

/**
 * Service layer: ora usa mock, domani basta puntare all'API.
 * Mantieni sempre la stessa firma async per non toccare i componenti.
 */
export async function getNextMatch(signal?: AbortSignal): Promise<Match> {
  if (!CONFIG.API_BASE_URL) {
    // Mock locale
    await new Promise((r) => setTimeout(r, 150)); // finto delay
    return mockNextMatch;
  }

  const res = await fetch(`${CONFIG.API_BASE_URL}/matches/next`, {
    signal,
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`API error ${res.status}`);
  return (await res.json()) as Match;
}
