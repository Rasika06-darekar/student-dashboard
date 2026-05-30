import SkeletonCard from '@/components/dashboard/SkeletonCard'

export default function Loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      {/* Hero skeleton */}
      <div className="col-span-1 md:col-span-2 lg:col-span-3 rounded-2xl bg-[#111111] border border-[#222222] p-8">
        <div className="h-3 bg-[#1a1a1a] animate-pulse rounded-full mb-3 w-24" />
        <div className="h-8 bg-[#1a1a1a] animate-pulse rounded-full mb-6 w-64" />
        <div className="h-10 bg-[#1a1a1a] animate-pulse rounded-xl w-48" />
      </div>

      {/* Course skeletons */}
      {[1, 2, 3, 4].map((i) => (
        <SkeletonCard key={i} />
      ))}

      {/* Activity skeleton */}
      <div className="col-span-1 md:col-span-2 rounded-2xl bg-[#111111] border border-[#222222] p-6">
        <div className="h-4 bg-[#1a1a1a] animate-pulse rounded-full mb-2 w-20" />
        <div className="h-3 bg-[#1a1a1a] animate-pulse rounded-full mb-4 w-28" />
        <div className="flex gap-1">
          {[...Array(12)].map((_, wi) => (
            <div key={wi} className="flex flex-col gap-1">
              {[...Array(7)].map((_, di) => (
                <div
                  key={di}
                  className="w-3 h-3 rounded-sm bg-[#1a1a1a] animate-pulse"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}