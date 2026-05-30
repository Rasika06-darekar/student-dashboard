import { supabase } from '@/lib/supabase'
import { Course } from '@/types'
import CourseCard from './CourseCard'
import HeroTile from './HeroTile'
import ActivityTile from './ActivityTile'

async function getCourses(): Promise<Course[]> {
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: true })

  if (error) {
    console.error('Error fetching courses:', error)
    return []
  }

  return data || []
}

export default async function DashboardGrid() {
  const courses = await getCourses()

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px',
        alignItems: 'start'
      }}>

        {/* Hero Tile - full width */}
        <div style={{ gridColumn: 'span 3' }}>
          <HeroTile />
        </div>

        {/* Course Tiles */}
        {courses.map((course, index) => (
          <CourseCard
            key={course.id}
            course={course}
            index={index}
          />
        ))}

        {/* Activity Tile */}
        <div style={{ gridColumn: 'span 2' }}>
          <ActivityTile />
        </div>

        {/* Stats Tile */}
        <div style={{
          borderRadius: '16px',
          backgroundColor: '#111111',
          border: '1px solid #222222',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          <h2 style={{ color: 'white', fontWeight: 600 }}>Overall Progress</h2>
          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: '4px',
            height: '80px'
          }}>
            {[40, 65, 50, 80, 75, 90, 70].map((h, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: `${h}%`,
                  backgroundColor: 'rgba(124, 58, 237, 0.4)',
                  borderRadius: '3px 3px 0 0'
                }}
              />
            ))}
          </div>
          <p style={{ color: '#666', fontSize: '12px' }}>Last 7 days activity</p>
        </div>

      </div>
    </div>
  )
}