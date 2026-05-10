'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const milestones = [
  {
    title:'Started BCA',
    description:'Began Bachelor of Computer Applications at KLE SNC',
    year:'2022',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title:'Java Full Stack Training',
    description:'Learned Core Java, SQL, JDBC, Hibernate, Spring Boot',
    year:'2024',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title:'Built Real Projects',
    description:'Developed enterprise full stack applications with deployment',
    year:'2025',
    color: 'from-green-500 to-emerald-500',
  },
  {
    title:'Open to Work',
    description:'Actively seeking Software Developer opportunities',
    year:'2026',
    color: 'from-blue-500 to-green-500',
  },
  {
    title: 'Building Dev.kannadiga',
    description: 'Creating a platform for Kannada tech community and resources',
    year: '2026',
    color: 'from-orange-500 to-red-500',
  },
]

function TimelineStation({
  milestone,
  index,
  isActive,
}: {
  milestone: (typeof milestones)[0]
  index: number
  isActive: boolean
}) {
  return (
    <motion.div
      className="flex gap-8 mb-12 relative"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: false }}
    >
      {/* Content */}
      <div
        className={`flex-1 ${index % 2 === 1 ? 'order-2' : 'order-1'}`}
      >
        <motion.div
          className={`bg-gradient-to-br ${milestone.color} rounded-lg p-6 border border-white border-opacity-10 shadow-lg`}
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <motion.span
            className="text-sm font-semibold uppercase tracking-wider text-white opacity-80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            {milestone.year}
          </motion.span>
          <h3 className="text-2xl font-bold text-white mt-2 mb-3">
            {milestone.title}
          </h3>
          <p className="text-white text-opacity-90 leading-relaxed">
            {milestone.description}
          </p>
        </motion.div>
      </div>

      {/* Timeline marker */}
      <div className={`flex flex-col items-center ${index % 2 === 1 ? 'order-1' : 'order-2'}`}>
        <motion.div
          className={`w-6 h-6 rounded-full border-4 border-white bg-gradient-to-br ${milestone.color} shadow-lg shadow-purple-500`}
          animate={isActive ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
        />
        {index < milestones.length - 1 && (
          <motion.div
            className="w-1 h-24 bg-gradient-to-b from-purple-500 to-transparent"
            initial={{ height: 0 }}
            whileInView={{ height: 96 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          />
        )}
      </div>
    </motion.div>
  )
}

export function JourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setActiveIndex(index)
          }
        })
      },
      { threshold: 0.5 }
    )

    const elements = containerRef.current?.querySelectorAll('[data-index]')
    elements?.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative w-full py-32 px-4 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            My Journey Through Space
          </h2>
          <p className="text-gray-400 text-lg">
            A cosmic timeline of growth and achievement
          </p>
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* Background glow */}
          <motion.div
            className="absolute -inset-4 opacity-30 blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgb(168, 85, 247) 0%, transparent 70%)',
            }}
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          {/* Timeline stations */}
          {milestones.map((milestone, index) => (
            <div key={index} data-index={index}>
              <TimelineStation
                milestone={milestone}
                index={index}
                isActive={activeIndex === index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
