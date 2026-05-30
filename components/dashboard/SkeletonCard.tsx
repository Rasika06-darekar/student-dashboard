export default function SkeletonCard() {
  return (
    <div className="rounded-2xl bg-[#111111] border border-[#222222] p-6 overflow-hidden">
      {/* Icon skeleton */}
      <div className="w-10 h-10 rounded-xl bg-[#1a1a1a] animate-pulse mb-4" />

      {/* Title skeleton */}
      <div className="h-3 bg-[#1a1a1a] animate-pulse rounded-full mb-2 w-3/4" />
      <div className="h-3 bg-[#1a1a1a] animate-pulse rounded-full mb-6 w-1/2" />

      {/* Progress skeleton */}
      <div className="space-y-1.5">
        <div className="flex justify-between">
          <div className="h-2 bg-[#1a1a1a] animate-pulse rounded-full w-12" />
          <div className="h-2 bg-[#1a1a1a] animate-pulse rounded-full w-8" />
        </div>
        <div className="h-1.5 bg-[#1a1a1a] animate-pulse rounded-full w-full" />
      </div>
    </div>
  )
}