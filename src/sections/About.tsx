'use client'

import { motion } from 'framer-motion'
import FloatingGradients from '../components/FloatingGradients'

const sectionVariants = {
  hidden: { opacity: 0, y: 64 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
}

export default function About() {
  return (
    <motion.section
      id="about"
      className="section bg-background relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <FloatingGradients />
      <div className="container flex flex-col md:flex-row items-center gap-16 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <div className="w-full h-full rounded-2xl bg-surface shadow-card border border-gray-200 p-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">About Me</h2>
            <p className="text-lg md:text-xl text-secondary mb-6">
              I am a creative digital designer and developer focused on delivering exceptional user experiences through innovative design and technology. I blend strategy, design, and development to craft digital products that stand out.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center"
        >
          <div className="w-64 h-64 rounded-2xl bg-surface shadow-card border border-gray-200 flex items-center justify-center">
            <span className="text-7xl">🚀</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
} 