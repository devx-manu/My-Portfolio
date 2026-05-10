'use client'

import { motion } from 'framer-motion'

const technologies = [
{ name: 'SQL', color: 'from-cyan-500 to-cyan-600', icon: '📊' },
{ name: 'JDBC', color: 'from-blue-500 to-blue-600', icon: '💾' },
{ name: 'Hibernate', color: 'from-purple-500 to-purple-600', icon: '🗄️' },
{ name: 'Spring', color: 'from-green-400 to-green-500', icon: '🌱' },
{ name: 'Spring Boot', color: 'from-green-500 to-green-600', icon: '🚀' },
{ name: 'Spring Security', color: 'from-emerald-500 to-emerald-600', icon: '🔐' },
{ name: 'HTML', color: 'from-orange-500 to-red-600', icon: '🏗️' },
{ name: 'CSS', color: 'from-blue-400 to-cyan-500', icon: '🎨' },
{ name: 'JavaScript', color: 'from-yellow-400 to-yellow-600', icon: '⚡' },
{ name: 'MySQL', color: 'from-sky-500 to-sky-600', icon: '🗃️' },
{ name: 'PostgreSQL', color: 'from-indigo-500 to-indigo-600', icon: '🐘' },
{ name: 'Git', color: 'from-orange-600 to-red-600', icon: '🔀' },
{ name: 'GitHub', color: 'from-gray-700 to-black', icon: '🐙' },
{ name: 'Postman', color: 'from-orange-400 to-orange-600', icon: '📮' },
{ name: 'Vercel', color: 'from-gray-800 to-black', icon: '▲' },
{ name: 'Render', color: 'from-purple-600 to-indigo-600', icon: '☁️' }
]

export function SolarSystem() {
  return (
    <section className="relative w-full py-32 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Tech Stack Galaxy
          </h2>
          <p className="text-gray-400 text-lg">
            Technologies powering my development journey
          </p>
        </motion.div>

        {/* Orbiting grid layout */}
        <div className="relative w-full h-96 flex items-center justify-center">
          {/* Orbit circles background */}
          <div className="absolute w-48 h-48 border border-blue-500 border-opacity-20 rounded-full" />
          <div className="absolute w-80 h-80 border border-purple-500 border-opacity-10 rounded-full" />
          <div className="absolute w-full max-w-2xl aspect-square border border-cyan-500 border-opacity-10 rounded-full" />

          {/* Center sun */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 shadow-2xl"
            style={{
              boxShadow: '0 0 40px rgba(250, 180, 40, 0.8)',
            }}
          >
            <div className="w-full h-full rounded-full flex items-center justify-center text-2xl font-bold text-white">
              Java
            </div>
          </motion.div>

          {/* Orbiting tech cards */}
          {technologies.map((tech, i) => {
            const angle = (i / technologies.length) * Math.PI * 2
            const radius = 140
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius
            const duration = 15 + i * 2

            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: false }}
                animate={{
                  x: [0, x * 0.8, x],
                  y: [0, y * 0.8, y],
                }}
                transition={{
                  duration,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`bg-gradient-to-br ${tech.color} p-6 rounded-lg cursor-pointer group shadow-lg hover:shadow-2xl transition-shadow`}
                >
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <div className="text-white font-semibold text-sm">{tech.name}</div>
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity bg-white bg-opacity-10" />
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Technology grid below */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {technologies.map((tech) => (
            <motion.div
              key={`grid-${tech.name}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className={`bg-gradient-to-br ${tech.color} p-4 rounded-lg border border-white border-opacity-10 hover:border-opacity-30 transition-all`}
            >
              <div className="text-2xl mb-2">{tech.icon}</div>
              <div className="text-white font-semibold text-sm">{tech.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
