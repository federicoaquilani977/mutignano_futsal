// components/Loading.tsx
export function LoadingSpinner({ className = '' }: { className?: string }) {
  return (
    <div className={`grid place-items-center ${className}`}>
      <div className="h-12 w-12 rounded-full border-2 border-oro border-t-transparent animate-spin" />
    </div>
  )
}

export function LoadingSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-64 bg-white/10 rounded-xl" />
      <div className="h-4 bg-white/10 rounded w-3/4" />
      <div className="h-4 bg-white/10 rounded w-1/2" />
    </div>
  )
}
