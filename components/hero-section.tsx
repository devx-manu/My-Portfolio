'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { CometAnimation } from './comet'

export function HeroSection() {
  const [displayedText, setDisplayedText] = useState('')
  const [displayedSubtitle, setDisplayedSubtitle] = useState('')
  const [cursorVisible, setCursorVisible] = useState(true)

  const textRef = useRef(false)
  const subtitleRef = useRef(false)

  const fullText = 'Manu SH'
  const fullSubtitle =
    'Backend Engineer | Java Full Stack | Building Scalable Apps'

  const summary =
    'Motivated BCA graduate with hands-on experience in Java Full Stack Development, Spring Boot, REST APIs, SQL, and cloud deployment. Passionate about building scalable applications and solving real-world problems through code.'

  // Typing animation for Name
  useEffect(() => {
    if (displayedText.length < fullText.length && !textRef.current) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1))
      }, 80)

      return () => clearTimeout(timer)
    } else if (displayedText.length === fullText.length) {
      textRef.current = true

      const timer = setTimeout(() => {
        setCursorVisible(false)
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [displayedText])

  // Typing animation for Subtitle
  useEffect(() => {
    if (
      textRef.current &&
      displayedSubtitle.length < fullSubtitle.length &&
      !subtitleRef.current
    ) {
      const timer = setTimeout(() => {
        setDisplayedSubtitle(
          fullSubtitle.slice(0, displayedSubtitle.length + 1)
        )
      }, 30)

      return () => clearTimeout(timer)
    } else if (displayedSubtitle.length === fullSubtitle.length) {
      subtitleRef.current = true
    }
  }, [displayedSubtitle])

  // Cursor blink
  useEffect(() => {
    if (!cursorVisible) return

    const timer = setInterval(() => {
      setCursorVisible((v) => !v)
    }, 500)

    return () => clearInterval(timer)
  }, [cursorVisible])

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Comet Background */}
      <CometAnimation />

      {/* Glow Background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgb(100, 200, 255) 0%, transparent 70%)',
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-5"
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-lg">
            {displayedText}
            {cursorVisible && <span className="animate-pulse">_</span>}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light mb-6 min-h-[32px]"
        >
          {displayedSubtitle}
          {displayedSubtitle.length === fullSubtitle.length && (
            <span className="animate-pulse">_</span>
          )}
        </motion.p>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed mb-10 px-2"
        >
          {summary}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button className="relative px-8 py-3 text-lg font-semibold text-white rounded-full overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-100 group-hover:opacity-0 transition duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition duration-300" />
            <span className="relative flex items-center justify-center">
              Explore My Work
              <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ↓
              </motion.span>
            </span>
          </button>

          
        </motion.div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                y: [0, -120],
                x: [0, Math.sin(i) * 80],
              }}
              transition={{
                duration: 3,
                delay: i * 0.6,
                repeat: Infinity,
              }}
              style={{
                left: `${25 + i * 15}%`,
                top: '65%',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}