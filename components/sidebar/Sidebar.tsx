'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  BookOpen,
  Trophy,
  Settings,
  ChevronLeft,
  User
} from 'lucide-react'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard' },
  { icon: BookOpen, label: 'Courses' },
  { icon: Trophy, label: 'Achievements' },
  { icon: User, label: 'Profile' },
  { icon: Settings, label: 'Settings' },
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [active, setActive] = useState('Dashboard')

  return (
    <motion.nav
      animate={{ width: collapsed ? 70 : 240 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="relative h-screen bg-[#111111] border-r border-[#222222] flex flex-col py-6 px-3 shrink-0"
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-2 mb-8">
        <div className="w-8 h-8 rounded-lg bg-violet-600 shrink-0" />
        {!collapsed && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white font-semibold text-sm"
          >
            LearnSpace
          </motion.span>
        )}
      </div>

      {/* Nav Items */}
      <ul className="flex flex-col gap-1 flex-1">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = active === item.label
          return (
            <li key={item.label}>
              <button
                onClick={() => setActive(item.label)}
                className="relative w-full flex items-center gap-3 px-2 py-2.5 rounded-lg text-sm transition-colors"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-violet-600/20 rounded-lg border border-violet-500/30"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <Icon
                  size={18}
                  className={isActive ? 'text-violet-400 relative z-10' : 'text-gray-500 relative z-10'}
                />
                {!collapsed && (
                  <span className={isActive ? 'text-white relative z-10' : 'text-gray-500 relative z-10'}>
                    {item.label}
                  </span>
                )}
              </button>
            </li>
          )
        })}
      </ul>

      {/* Collapse Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="flex items-center justify-center w-full py-2 text-gray-500 hover:text-white transition-colors"
      >
        <motion.div
          animate={{ rotate: collapsed ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <ChevronLeft size={18} />
        </motion.div>
      </button>
    </motion.nav>
  )
}