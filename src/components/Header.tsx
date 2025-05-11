'use client'

import { motion } from 'framer-motion'
import AnimatedNav from './AnimatedNav'

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Features', href: '#features' },
  { name: 'Showcase', href: '#showcase' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/95 border-b border-gray-200 shadow-sm">
      <nav className="container flex items-center justify-between h-20">
        <motion.a
          href="#"
          className="text-2xl font-display font-bold text-primary tracking-tight drop-shadow-none"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Obsidian UI
        </motion.a>
        <AnimatedNav />
      </nav>
    </header>
  )
} 