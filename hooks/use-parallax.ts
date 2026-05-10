'use client';

import { useEffect, useRef, useState } from 'react'

export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const elementTop = rect.top
        const elementHeight = rect.height
        const windowHeight = window.innerHeight

        // Only calculate parallax if element is in view
        if (elementTop < windowHeight && elementTop + elementHeight > 0) {
          const distanceFromCenter = elementTop - windowHeight / 2
          const parallaxOffset = distanceFromCenter * speed
          setOffset(parallaxOffset)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return { ref, offset }
}
