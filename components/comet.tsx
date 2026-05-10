'use client'

import { motion } from 'framer-motion'

export function CometAnimation() {
  const cometVariants = {
    animate: {
      x: ['100vw', '-100vw'],
      y: [0, -200],
      opacity: [0, 1, 1, 0],
      transition: {
        duration: 8,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatDelay: 4,
      },
    },
  }

  return (
    <>
      {/* Multiple comets */}
      {Array.from({ length: 2 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          initial={{ x: '100vw', y: 0, opacity: 0 }}
          animate="animate"
          variants={cometVariants}
          transition={{
            ...cometVariants.animate.transition,
            repeatDelay: 4 + i * 3,
          }}
          style={{
            top: `${20 + i * 30}%`,
            width: '200px',
            height: '2px',
          }}
        >
          {/* Comet head */}
          <div className="absolute w-3 h-3 rounded-full bg-white shadow-lg shadow-white" />

          {/* Comet tail glow */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-white via-blue-400 to-transparent opacity-60 blur-md"
            style={{
              width: '200px',
              height: '2px',
            }}
          />

          {/* Bright core */}
          <div className="absolute inset-0 bg-white opacity-40 blur-sm" />
        </motion.div>
      ))}
    </>
  )
}
