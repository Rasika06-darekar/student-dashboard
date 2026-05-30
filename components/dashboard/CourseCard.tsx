'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import {
  Code,
  Palette,
  Server,
  Database,
  BookOpen
} from 'lucide-react'
import { Course } from '@/types'

const iconMap: Record<string, React.ElementType> = {
  Code,
  Palette,
  Server,
  Database,
  BookOpen
}

interface Props {
  course: Course
  index: number
}

export default function CourseCard({ course, index }: Props) {
  const Icon = iconMap[course.icon_name] || BookOpen
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(course.progress)
    }, 200 + index * 100)
    return () => clearTimeout(timer)
  }, [course.progress, index])

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
        delay: index * 0.1
      }}
      whileHover={{ scale: 1.02 }}
      style={{
        position: 'relative',
        borderRadius: '16px',
        backgroundColor: '#111111',
        border: '1px solid #222222',
        padding: '20px',
        overflow: 'hidden',
        cursor: 'pointer'
      }}
    >
      {/* Background gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(124,58,237,0.05) 0%, transparent 100%)',
        pointerEvents: 'none'
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* Icon */}
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '10px',
          backgroundColor: 'rgba(124,58,237,0.15)',
          border: '1px solid rgba(124,58,237,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '12px'
        }}>
          <Icon size={18} color="#a78bfa" />
        </div>

        {/* Title */}
        <h3 style={{
          color: 'white',
          fontWeight: 600,
          fontSize: '14px',
          lineHeight: '1.4',
          marginBottom: '16px'
        }}>
          {course.title}
        </h3>

        {/* Progress */}
        <div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '6px'
          }}>
            <span style={{ color: '#666', fontSize: '12px' }}>Progress</span>
            <span style={{ color: '#a78bfa', fontSize: '12px' }}>{course.progress}%</span>
          </div>
          <div style={{
            height: '6px',
            backgroundColor: '#222222',
            borderRadius: '999px',
            overflow: 'hidden'
          }}>
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, ease: 'easeOut', delay: index * 0.1 }}
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #7c3aed, #a78bfa)',
                borderRadius: '999px'
              }}
            />
          </div>
        </div>
      </div>
    </motion.article>
  )
}