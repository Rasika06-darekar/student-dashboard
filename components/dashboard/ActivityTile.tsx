'use client'

import { motion } from 'framer-motion'

const generateActivity = () => {
  const weeks = 12
  const days = 7
  const data = []
  for (let w = 0; w < weeks; w++) {
    const week = []
    for (let d = 0; d < days; d++) {
      week.push(Math.floor(Math.random() * 5))
    }
    data.push(week)
  }
  return data
}

const activityData = generateActivity()

const colorMap: Record<number, string> = {
  0: '#1a1a1a',
  1: 'rgba(109, 40, 217, 0.3)',
  2: 'rgba(109, 40, 217, 0.5)',
  3: 'rgba(124, 58, 237, 0.7)',
  4: 'rgb(139, 92, 246)',
}

export default function ActivityTile() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0.3 }}
      whileHover={{ scale: 1.01 }}
      style={{
        borderRadius: '16px',
        backgroundColor: '#111111',
        border: '1px solid #222222',
        padding: '24px',
        height: '100%'
      }}
    >
      <h2 style={{ color: 'white', fontWeight: 600, marginBottom: '4px' }}>Activity</h2>
      <p style={{ color: '#666', fontSize: '12px', marginBottom: '16px' }}>Last 12 weeks</p>

      {/* Grid */}
      <div style={{ display: 'flex', gap: '4px' }}>
        {activityData.map((week, wi) => (
          <div key={wi} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {week.map((level, di) => (
              <motion.div
                key={di}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: wi * 0.03 + di * 0.01 }}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '3px',
                  backgroundColor: colorMap[level]
                }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '16px' }}>
        <span style={{ color: '#555', fontSize: '11px' }}>Less</span>
        {[0, 1, 2, 3, 4].map((level) => (
          <div
            key={level}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '3px',
              backgroundColor: colorMap[level]
            }}
          />
        ))}
        <span style={{ color: '#555', fontSize: '11px' }}>More</span>
      </div>
    </motion.article>
  )
}