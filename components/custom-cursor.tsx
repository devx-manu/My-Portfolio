'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMoving, setIsMoving] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsMoving(true)

      clearTimeout(timeout)
      timeout = setTimeout(() => {
        setIsMoving(false)
      }, 100)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        body, body * {
          cursor: none !important;
        }
      `}</style>

      {/* Main cursor dot */}
      <motion.div
        className="pointer-events-none fixed w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full z-50"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isMoving ? 1.2 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Glow ring */}
      <motion.div
        className="pointer-events-none fixed w-8 h-8 border-2 border-blue-400 rounded-full z-40"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          opacity: isMoving ? 1 : 0.3,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 30,
        }}
      />

      {/* Trail particles */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="pointer-events-none fixed w-1 h-1 bg-purple-400 rounded-full z-30"
          animate={{
            x: mousePosition.x + (Math.random() - 0.5) * 40,
            y: mousePosition.y + (Math.random() - 0.5) * 40,
            opacity: [1, 0],
            scale: [1, 0],
          }}
          transition={{
            duration: 0.8,
            delay: i * 0.05,
            repeat: Infinity,
            repeatDelay: 0.1,
          }}
        />
      ))}
    </>
  )
}
