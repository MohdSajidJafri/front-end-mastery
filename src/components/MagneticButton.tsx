'use client'
import { useRef } from 'react'

export default function MagneticButton({ children, className = '', ...props }) {
  const btnRef = useRef(null)

  const handleMouseMove = (e) => {
    const btn = btnRef.current
    if (!btn) return
    const rect = btn.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    btn.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px) scale(1.08)`
  }
  const handleMouseLeave = () => {
    const btn = btnRef.current
    if (!btn) return
    btn.style.transform = 'translate(0,0) scale(1)'
  }

  return (
    <button
      ref={btnRef}
      className={`btn btn-primary shadow-xl transition-transform duration-200 will-change-transform ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </button>
  )
} 