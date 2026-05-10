'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Digital Asset Lending System',
    short: 'DALS',
    description:
      'Enterprise-grade platform to manage software licenses and digital asset lending workflows.',
    technologies: [
      'Java',
      'Spring Boot',
      'React.js',
      'PostgreSQL',
      'JWT',
      'Spring Security',
    ],
    github:
      'https://github.com/devx-manu/digital-asset-lending-backend',
    live:
      'https://digital-asset-lending-frontend.vercel.app',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'API Rate Limiter & Abuse Detection',
    short: 'Rate API',
    description:
      'Token bucket rate limiter with IP/User monitoring and temporary blocking system.',
    technologies: [
      'Java',
      'Spring Boot',
      'MySQL',
      'ConcurrentHashMap',
    ],
    github:
      'https://github.com/devx-manu/api-rate-limiter-and-abuse-detection-backend',
    live:
      'https://api-rate-limiter-and-abuse-detectio.vercel.app',
    color: 'from-purple-500 to-pink-500',
  },
  // {
  //   id: 3,
  //   title: 'Aptha',
  //   short: 'Aptha',
  //   description:
  //     'Smart modern platform connecting users with trusted local services through a fast seamless experience.',
  //   technologies: [
  //     'React',
  //     'TailwindCSS',
  //     'Node.js',
  //     'Express.js',
  //     'MongoDB',
  //     'Nodemailer',
  //   ],
  //   github: 'https://github.com/devx-manu/aptha',
  //   live: 'https://aptha.vercel.app',
  //   color: 'from-green-500 to-emerald-500',
  // },
]

interface ProjectModalProps {
  project: (typeof projects)[0]
  onClose: () => void
}

function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ y: 40, scale: 0.9, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 40, scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl rounded-2xl overflow-hidden border border-white/10 bg-slate-900"
      >
        <div
          className={`h-40 bg-gradient-to-br ${project.color}`}
        />

        <div className="p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5 text-gray-300" />
          </button>

          <h3 className="text-3xl font-bold text-white mb-3">
            {project.title}
          </h3>

          <p className="text-gray-300 mb-6 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-sm bg-slate-800 text-blue-300 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition text-white"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>

            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function ProjectsGalaxy() {
  const [selectedProject, setSelectedProject] =
    useState<(typeof projects)[0] | null>(null)

  return (
    <section className="relative w-full py-28 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Projects Galaxy
          </h2>

          <p className="text-gray-400 text-lg">
            Explore real-world projects I built
          </p>
        </motion.div>

        {/* NEW ENHANCED CARD GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              onClick={() =>
                setSelectedProject(project)
              }
              className="cursor-pointer rounded-2xl overflow-hidden border border-white/10 bg-slate-900 hover:border-blue-400/40 transition-all group"
            >
              {/* Top Gradient */}
              <div
                className={`h-32 bg-gradient-to-br ${project.color} relative`}
              >
                <div className="absolute inset-0 bg-black/10" />

                <div className="absolute bottom-4 left-4 text-white text-2xl font-bold">
                  {project.short}
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies
                    .slice(0, 4)
                    .map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-full bg-slate-800 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-blue-400 text-sm font-medium">
                    View Details
                  </span>

                  <ExternalLink className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() =>
              setSelectedProject(null)
            }
          />
        )}
      </AnimatePresence>
    </section>
  )
}