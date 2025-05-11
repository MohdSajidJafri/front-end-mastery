'use client'
import { motion } from 'framer-motion'

export default function AnimatedParticles() {
  return (
    <>
      <motion.svg
        className="pointer-events-none fixed z-0 left-0 top-0"
        width="220" height="220" viewBox="0 0 220 220" fill="none"
        style={{ filter: 'blur(32px)' }}
        initial={{ opacity: 0.18, scale: 1, x: 0, y: 0 }}
        animate={{ opacity: [0.18, 0.32, 0.18], scale: [1, 1.12, 1], x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ellipse cx="110" cy="110" rx="100" ry="80" fill="#7F5CFF" />
      </motion.svg>
      <motion.svg
        className="pointer-events-none fixed z-0 right-0 bottom-0"
        width="180" height="180" viewBox="0 0 180 180" fill="none"
        style={{ filter: 'blur(24px)' }}
        initial={{ opacity: 0.12, scale: 1, x: 0, y: 0 }}
        animate={{ opacity: [0.12, 0.22, 0.12], scale: [1, 1.08, 1], x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ellipse cx="90" cy="90" rx="80" ry="60" fill="#00FFD0" />
      </motion.svg>
    </>
  )
} 