'use client'

import { motion } from 'framer-motion'
import {
  Github,
  Linkedin,
  Mail,
  Youtube,
} from 'lucide-react'

export function ContactSection() {
  return (
    <section className="relative w-full py-28 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-4xl mx-auto">
        {/* Dev.kannadiga Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="relative group">
            {/* Glow Border */}
            <motion.div
              className="absolute -inset-1 rounded-2xl blur bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-30 group-hover:opacity-50 transition duration-300"
              animate={{ opacity: [0.25, 0.45, 0.25] }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />

            <div className="relative bg-slate-900 rounded-2xl p-8 border border-white/10">
             
              {/* Floating Particles */}
              <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 3 }).map(
                  (_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                      animate={{
                        opacity: [0, 1, 0],
                        y: [0, -70],
                        x: [0, i * 15],
                      }}
                      transition={{
                        duration: 2.5,
                        delay: i * 0.5,
                        repeat: Infinity,
                      }}
                      style={{
                        left: `${35 + i * 10}%`,
                        top: '65%',
                      }}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>

          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Open to software developer opportunities,
            collaborations, and meaningful tech
            conversations.
          </p>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Email */}
            <motion.a
              href="mailto:devx.manu@gmail.com"
              whileHover={{ y: -5, scale: 1.03 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 rounded-xl blur bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 group-hover:opacity-50 transition" />
              <div className="relative bg-slate-900 rounded-xl p-6 border border-white/10">
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h4 className="font-semibold text-white">
                  Email
                </h4>
                <p className="text-sm text-gray-400">
                  Get in touch
                </p>
              </div>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/devx-manu"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.03 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 rounded-xl blur bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 group-hover:opacity-50 transition" />
              <div className="relative bg-slate-900 rounded-xl p-6 border border-white/10">
                <Github className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h4 className="font-semibold text-white">
                  GitHub
                </h4>
                <p className="text-sm text-gray-400">
                  View projects
                </p>
              </div>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/manu-sh-md220304"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.03 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 rounded-xl blur bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 group-hover:opacity-50 transition" />
              <div className="relative bg-slate-900 rounded-xl p-6 border border-white/10">
                <Linkedin className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h4 className="font-semibold text-white">
                  LinkedIn
                </h4>
                <p className="text-sm text-gray-400">
                  Connect with me
                </p>
              </div>
            </motion.a>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-16 pt-8 border-t border-slate-800"
          >
            <p className="text-gray-500 text-sm">
              © 2026 Manu SH. Built with passion,
              code, and vision.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
