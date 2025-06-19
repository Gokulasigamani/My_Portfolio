'use client'

import { motion } from 'framer-motion'

const techCategories = [
  {
    category: 'Languages',
    color: 'electric-purple',
    technologies: ['JavaScript', 'Java']
  },
  {
    category: 'Frontend',
    color: 'cyber-cyan',
    technologies: ['HTML', 'CSS', 'React.js', 'Tailwind CSS', 'Bootstrap']
  },
  {
    category: 'Backend',
    color: 'hot-pink',
    technologies: ['Node.js', 'Express.js']
  },
  {
    category: 'Database',
    color: 'neon-green',
    technologies: ['MongoDB']
  },
  {
    category: 'Cloud & DevOps',
    color: 'plasma-orange',
    technologies: ['AWS Cognito', 'AWS EC2', 'AWS S3', 'CloudWatch', 'ECR']
  },
  {
    category: 'Tools & Automation',
    color: 'electric-purple',
    technologies: ['Git', 'Postman', 'n8n', 'Langflow', 'Crew AI']
  }
]

export function TechStack() {
  console.log('TechStack component rendered')

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {techCategories.map((category, categoryIndex) => (
        <motion.div
          key={category.category}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
          className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300"
        >
          <h3 className={`text-xl font-bold mb-4 text-${category.color}`}>
            {category.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {category.technologies.map((tech, techIndex) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (techIndex * 0.05) }}
                whileHover={{ scale: 1.1 }}
                className={`tech-badge border-${category.color}/30 bg-${category.color}/10 text-${category.color} hover:bg-${category.color}/20 hover:border-${category.color}/50`}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}