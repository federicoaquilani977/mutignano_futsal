// lib/hooks.ts - Custom hooks per data fetching
'use client'

import { useEffect, useState } from 'react'
import * as api from './api'
import type { Match, Post } from './types'

export function useNextMatch() {
  const [match, setMatch] = useState<Match | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const ctrl = new AbortController()

    api
      .getNextMatch(ctrl.signal)
      .then(setMatch)
      .catch(setError)
      .finally(() => setLoading(false))

    return () => ctrl.abort()
  }, [])

  return { match, loading, error }
}

export function useNews() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const ctrl = new AbortController()

    api
      .getNewsPosts(ctrl.signal)
      .then(setPosts)
      .catch(setError)
      .finally(() => setLoading(false))

    return () => ctrl.abort()
  }, [])

  return { posts, loading, error }
}
