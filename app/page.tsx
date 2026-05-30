import { Suspense } from 'react'
import DashboardGrid from '@/components/dashboard/DashboardGrid'
import Loading from './loading'

export default function Home() {
  return (
    <main className="flex-1 overflow-y-auto">
      <Suspense fallback={<Loading />}>
        <DashboardGrid />
      </Suspense>
    </main>
  )
}