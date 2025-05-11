'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import FloatingGradients from '../components/FloatingGradients'

const sectionVariants = {
  hidden: { opacity: 0, y: 64 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
}

const features = [
  {
    title: 'Stunning Visuals',
    description: 'Beautiful, immersive designs that capture attention and inspire action.',
    icon: '🌈',
  },
  {
    title: 'Smooth Animations',
    description: 'Buttery-smooth transitions and micro-interactions for a delightful experience.',
    icon: '🎬',
  },
  {
    title: 'Responsive Design',
    description: 'Perfectly crafted layouts for every device, from mobile to desktop.',
    icon: '📱',
  },
  {
    title: 'Performance Focused',
    description: 'Optimized for speed and efficiency, ensuring fast load times.',
    icon: '⚡',
  },
]

const cardVariants = {
  offscreen: { opacity: 0, y: 60 },
  onscreen: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' },
  }),
}

export default function Features() {
  return (
    <motion.section
      id="features"
      className="section bg-background relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <FloatingGradients />
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-12 text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="bg-surface shadow-card border border-gray-200 rounded-2xl p-10 flex flex-col items-center transition-transform group relative overflow-hidden will-change-transform"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              custom={i}
              variants={cardVariants}
              whileHover={{ scale: 1.08, boxShadow: '0 8px 32px 0 rgba(99,91,255,0.10)', rotateY: 10, rotateX: 10, z: 30, filter: 'brightness(1.08) drop-shadow(0 0 32px #635BFF44)' }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              style={{ perspective: 1000 }}
            >
              <motion.div
                whileHover={{ rotateY: 12, rotateX: 12 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="w-full flex flex-col items-center"
              >
                <div className="text-5xl mb-4 drop-shadow-lg">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-2 text-center drop-shadow-none">{feature.title}</h3>
                <p className="text-secondary text-center">{feature.description}</p>
              </motion.div>
              <div className="absolute inset-0 pointer-events-none rounded-2xl border-2 border-accent opacity-0 group-hover:opacity-60 transition-opacity blur-sm animate-pulse" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
} 