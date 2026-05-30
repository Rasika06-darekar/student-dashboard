'use client'

import { motion } from 'framer-motion'
import { Flame, BookOpen, Clock } from 'lucide-react'

export default function HeroTile() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      whileHover={{ scale: 1.005 }}
      style={{
        position: 'relative',
        borderRadius: '16px',
        backgroundColor: '#111111',
        border: '1px solid #222222',
        padding: '32px',
        overflow: 'hidden'
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '-60px',
        left: '-60px',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-60px',
        right: '-60px',
        width: '250px',
        height: '250px',
        background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>

        {/* Left side */}
        <div>
          <p style={{ color: '#666', fontSize: '14px', marginBottom: '8px' }}>Good morning 👋</p>
          <h1 style={{
            color: 'white',
            fontSize: '32px',
            fontWeight: 700,
            marginBottom: '24px',
            letterSpacing: '-0.5px'
          }}>
            Welcome back, Rasik
          </h1>

          {/* Stats row */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>

            {/* Streak */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#1a1a1a',
              border: '1px solid #2a2a2a',
              borderRadius: '12px',
              padding: '10px 16px'
            }}>
              <Flame size={16} color="#f97316" />
              <span style={{ color: 'white', fontWeight: 600, fontSize: '14px' }}>12 Day Streak</span>
            </div>

            {/* Courses */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#1a1a1a',
              border: '1px solid #2a2a2a',
              borderRadius: '12px',
              padding: '10px 16px'
            }}>
              <BookOpen size={16} color="#a78bfa" />
              <span style={{ color: 'white', fontWeight: 600, fontSize: '14px' }}>4 Active Courses</span>
            </div>

            {/* Time */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#1a1a1a',
              border: '1px solid #2a2a2a',
              borderRadius: '12px',
              padding: '10px 16px'
            }}>
              <Clock size={16} color="#34d399" />
              <span style={{ color: 'white', fontWeight: 600, fontSize: '14px' }}>24h This Week</span>
            </div>

          </div>
        </div>

        {/* Right side - big number */}
        <div style={{ textAlign: 'right' }}>
          <p style={{ color: '#333', fontSize: '80px', fontWeight: 800, lineHeight: 1 }}>12</p>
          <p style={{ color: '#555', fontSize: '13px' }}>day streak</p>
        </div>

      </div>
    </motion.article>
  )
}