'use client'
import { motion } from 'framer-motion'
import MagneticButton from '../components/MagneticButton'

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

function scrollToAbout(e: React.MouseEvent) {
  e.preventDefault()
  const about = document.getElementById('about')
  if (about) {
    about.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[80vh] flex items-center justify-center bg-background py-24 md:py-36 overflow-hidden">
      {/* Layered gradients and floating shapes */}
      <motion.div
        className="absolute top-24 left-16 w-32 h-32 rounded-full bg-accent/40 blur-2xl z-0"
        variants={floatVariants}
        animate="animate"
        style={{ filter: 'blur(40px)' }}
      />
      <motion.div
        className="absolute bottom-24 right-24 w-40 h-40 rounded-full bg-accent2/30 blur-3xl z-0"
        variants={floatVariants}
        animate="animate"
        transition={{ delay: 2 }}
        style={{ filter: 'blur(60px)' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-accent/30 via-accent2/20 to-transparent blur-3xl z-0"
        animate={{ scale: [1, 1.1, 1], opacity: [0.18, 0.32, 0.18] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{ translateX: '-50%', translateY: '-50%' }}
      />
      <div className="container relative z-10 flex flex-col items-center gap-10">
        <motion.h1
          className="text-5xl md:text-7xl font-display font-bold text-primary mb-6 tracking-tight leading-tight text-center"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Crafting Digital
          <span className="text-accent"> Experiences</span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-secondary mb-8 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
        >
          I create stunning digital experiences that captivate and inspire
        </motion.p>
        <MagneticButton className="mt-2 px-8 py-4 text-lg font-semibold rounded-xl shadow-button">
          Get Started
        </MagneticButton>
      </div>
    </section>
  )
} 