'use client'
import { motion } from 'framer-motion'

const floatVariants = {
  animate: {
    y: [0, -20, 0],
    x: [0, 20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export default function FloatingGradients() {
  return (
    <>
      <motion.div
        className="absolute top-12 left-10 w-32 h-32 rounded-full bg-accent/40 blur-2xl z-0"
        variants={floatVariants}
        animate="animate"
        style={{ filter: 'blur(40px)' }}
      />
      <motion.div
        className="absolute bottom-16 right-24 w-40 h-40 rounded-full bg-accent2/30 blur-3xl z-0"
        variants={floatVariants}
        animate="animate"
        transition={{ delay: 2 }}
        style={{ filter: 'blur(60px)' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-accent/30 via-accent2/20 to-transparent blur-3xl z-0"
        animate={{ scale: [1, 1.1, 1], opacity: [0.18, 0.32, 0.18] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{ translateX: '-50%', translateY: '-50%' }}
      />
    </>
  )
} 