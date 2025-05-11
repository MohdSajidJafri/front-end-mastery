'use client'

import { motion } from 'framer-motion'

const socials = [
  { name: 'Twitter', href: 'https://twitter.com', icon: '🐦' },
  { name: 'Dribbble', href: 'https://dribbble.com', icon: '🎨' },
  { name: 'GitHub', href: 'https://github.com', icon: '💻' },
]

export default function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-md text-offwhite py-10 mt-32 border-t border-white/10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-lg font-display font-bold text-offwhite">Obsidian UI</div>
        <div className="flex gap-6">
          {socials.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-2xl hover:text-accent transition-colors"
              aria-label={social.name}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
        <div className="text-sm text-offwhite">&copy; {new Date().getFullYear()} Obsidian UI. All rights reserved.</div>
      </div>
    </footer>
  )
} 