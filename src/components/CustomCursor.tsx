'use client'
import { useEffect, useRef, useState } from 'react'

const CURSOR_SIZE = 20
const LERP = 0.4

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)
  const mouse = useRef({ x: 0, y: 0 })
  const pos = useRef({ x: 0, y: 0 })
  const raf = useRef<number>()

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouse.current.x = e.clientX - CURSOR_SIZE / 2
      mouse.current.y = e.clientY - CURSOR_SIZE / 2
    }
    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * LERP
      pos.current.y += (mouse.current.y - pos.current.y) * LERP
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`
      }
      raf.current = requestAnimationFrame(animate)
    }
    document.addEventListener('mousemove', moveCursor)
    raf.current = requestAnimationFrame(animate)
    return () => {
      document.removeEventListener('mousemove', moveCursor)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [])

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('button, a, input, textarea, [role="button"], .cursor-pointer')) {
        setHovered(true)
      } else {
        setHovered(false)
      }
    }
    document.addEventListener('mouseover', handleMouseOver)
    return () => {
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  // Hide system cursor
  useEffect(() => {
    document.body.style.cursor = 'none'
    return () => {
      document.body.style.cursor = ''
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-150 ease-out ${hovered ? 'scale-150 bg-accent/80' : 'scale-100 bg-accent/60'}`}
      style={{
        width: CURSOR_SIZE,
        height: CURSOR_SIZE,
        borderRadius: '50%',
        mixBlendMode: 'exclusion',
        transition: 'background 0.2s, transform 0.15s',
        boxShadow: hovered ? '0 0 0 4px rgba(127,92,255,0.15)' : 'none',
      }}
    />
  )
} 