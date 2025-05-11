'use client'
import { useRef, useState } from 'react'

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Features', href: '#features' },
  { name: 'Showcase', href: '#showcase' },
  { name: 'Contact', href: '#contact' },
]

export default function AnimatedNav() {
  const [underline, setUnderline] = useState({ left: 0, width: 0 })
  const navRef = useRef(null)

  const handleMouseEnter = (e) => {
    const link = e.target
    const rect = link.getBoundingClientRect()
    const navRect = navRef.current.getBoundingClientRect()
    setUnderline({ left: rect.left - navRect.left, width: rect.width })
  }
  const handleMouseLeave = () => {
    setUnderline({ left: 0, width: 0 })
  }

  return (
    <nav ref={navRef} className="relative flex gap-8">
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="relative text-primary font-medium text-lg transition-colors cursor-pointer px-2 py-1"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {link.name}
        </a>
      ))}
      <span
        className="absolute bottom-0 h-0.5 bg-accent rounded-full transition-all duration-300"
        style={{ left: underline.left, width: underline.width, opacity: underline.width ? 1 : 0 }}
      />
    </nav>
  )
} 