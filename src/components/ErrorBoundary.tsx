// components/ErrorBoundary.tsx
'use client'

import { Component, ReactNode } from 'react'

type Props = { children: ReactNode; fallback?: ReactNode }
type State = { hasError: boolean }

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="grid place-items-center min-h-[400px] text-center">
            <div>
              <h2 className="font-display text-2xl mb-4">
                Qualcosa è andato storto
              </h2>
              <button
                onClick={() => this.setState({ hasError: false })}
                className="px-6 py-3 border border-oro rounded-full hover:bg-oro hover:text-nero transition"
              >
                Riprova
              </button>
            </div>
          </div>
        )
      )
    }

    return this.props.children
  }
}
