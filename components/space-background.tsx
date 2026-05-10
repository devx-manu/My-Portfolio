'use client'

import { useEffect, useState } from 'react'

export function SpaceBackground() {
  const [stars, setStars] = useState<Array<{ x: number; y: number; size: number; opacity: number }>>([])

  useEffect(() => {
    const generateStars = () => {
      const starArray = []
      for (let i = 0; i < 300; i++) {
        starArray.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.5,
        })
      }
      setStars(starArray)
    }

    generateStars()
  }, [])

  return (
    <div className="fixed inset-0 w-full h-screen overflow-hidden">
      {/* Deep space gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 20% 50%, rgba(100, 200, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(100, 100, 200, 0.1) 0%, transparent 50%), linear-gradient(180deg, #0a0a15 0%, #15101f 50%, #0a0a15 100%)',
        }}
      />

      {/* Nebula clouds */}
      <div className="absolute top-0 left-0 w-96 h-96 opacity-20 blur-3xl">
        <div
          className="w-full h-full rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(100, 200, 255, 0.4) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="absolute bottom-10 right-10 w-80 h-80 opacity-15 blur-3xl">
        <div
          className="w-full h-full rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(150, 100, 200, 0.4) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Animated starfield */}
      <div className="absolute inset-0">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute animate-shimmer"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: '#ffffff',
              borderRadius: '50%',
              opacity: star.opacity,
              boxShadow: `0 0 ${star.size * 2}px rgba(100, 200, 255, 0.8)`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Floating nebula particles */}
      <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-cyan-400 rounded-full opacity-30 blur-sm animate-float" />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full opacity-20 blur-sm animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-25 blur-sm animate-float" />
    </div>
  )
}
