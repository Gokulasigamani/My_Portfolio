'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  features: string[]
  githubUrl?: string
  liveUrl?: string
}

export function ProjectCard({ 
  title, 
  description, 
  technologies, 
  features, 
  githubUrl, 
  liveUrl 
}: ProjectCardProps) {
  console.log('ProjectCard rendered:', title)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10 }}
      className="glass-card p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 group"
    >
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-bold text-white group-hover:text-electric-purple transition-colors duration-300">
            {title}
          </h3>
          <div className="flex gap-2">
            {githubUrl && (
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg bg-white/10 hover:bg-electric-purple/20 transition-colors duration-300"
              >
                <Github size={20} />
              </motion.a>
            )}
            {liveUrl && (
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg bg-white/10 hover:bg-cyber-cyan/20 transition-colors duration-300"
              >
                <ExternalLink size={20} />
              </motion.a>
            )}
          </div>
        </div>

        <p className="text-gray-300 leading-relaxed">
          {description}
        </p>

        <div className="space-y-3">
          <h4 className="font-semibold text-hot-pink">Key Features:</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {features.map((feature, index) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center gap-2 text-sm text-gray-400"
              >
                <div className="w-1.5 h-1.5 bg-cyber-cyan rounded-full flex-shrink-0"></div>
                {feature}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-neon-green">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="tech-badge border-electric-purple/30 bg-electric-purple/10 text-electric-purple hover:bg-electric-purple/20 hover:border-electric-purple/50"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}