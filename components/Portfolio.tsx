'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, MessageSquare } from 'lucide-react'
import { TechStack } from './TechStack'
import { ProjectCard } from './ProjectCard'
import { ChatBot } from './ChatBot'
import { MobileOptimized } from './MobileOptimized'
import { ParticleBackground } from './ParticleBackground'

export function Portfolio() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [isMobile, setIsMobile] = useState(false)

  console.log('Portfolio component rendered')

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'experience', 'education']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Show mobile-optimized version on small screens
  if (isMobile) {
    return (
      <>
        <MobileOptimized />
      </>
    )
  }

  return (
    <div className="min-h-screen bg-cyber-gradient relative">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <div className="absolute top-20 left-10 w-2 h-2 bg-electric-purple rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-cyber-cyan rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-hot-pink rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card mx-4 mt-4 rounded-2xl">
        <div className="flex justify-center space-x-8 p-4">
          {[
            { id: 'hero', label: 'Home' },
            { id: 'about', label: 'About' },
            { id: 'projects', label: 'Projects' },
            { id: 'experience', label: 'Experience' },
            { id: 'education', label: 'Education' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                activeSection === item.id 
                  ? 'bg-electric-purple text-white' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-7xl font-bold neon-text mb-4">
              Gokulasigamani N
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium">
              Full Stack Developer | MERN | AI Workflows
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <motion.a
                href="tel:+917010437899"
                className="cyber-button flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={20} />
                +91 7010437899
              </motion.a>
              <motion.a
                href="mailto:gokulsusela@gmail.com"
                className="cyber-button flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                Email
              </motion.a>
              <motion.a
                href="https://github.com/Gokulasigamani"
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-button flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
                GitHub
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/gokulasigamani-n-7aa862221"
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-button flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} />
                LinkedIn
              </motion.a>
            </div>
            <div className="flex items-center justify-center gap-2 mt-6 text-gray-400">
              <MapPin size={20} />
              <span>Pollachi, Coimbatore</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold neon-text mb-6">Tech Stack</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Passionate about building scalable web applications and AI-powered solutions
            </p>
          </motion.div>
          <TechStack />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold neon-text mb-6">Featured Projects</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Showcase of my latest work in full-stack development
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ProjectCard
              title="E-Commerce Platform"
              description="Full MERN stack e-commerce solution with advanced cart management, secure user authentication, and integrated payment processing."
              technologies={['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Payment Gateway']}
              features={['User Authentication', 'Shopping Cart', 'Payment Integration', 'Admin Dashboard']}
            />
            <ProjectCard
              title="Bus Booking & Complaint System"
              description="Specialized platform for hostellers featuring booking management, complaint handling, and direct communication with administration."
              technologies={['MERN Stack', 'Real-time Chat', 'Admin Panel', 'Booking System']}
              features={['Real-time Booking', 'Complaint Management', 'Direct Chat', 'Admin Dashboard']}
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold neon-text mb-6">Experience</h2>
          </motion.div>
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-card p-6 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-2">App Mastery</h3>
              <p className="text-electric-purple font-semibold mb-4">Frontend Developer & AI Integration Specialist</p>
              <ul className="space-y-2 text-gray-300">
                <li>• Developed responsive frontends with modern React.js</li>
                <li>• Integrated AI workflows using n8n automation</li>
                <li>• Implemented AWS Cognito authentication systems</li>
                <li>• Built scalable cloud-native applications</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-card p-6 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-2">WeDesign Tech</h3>
              <p className="text-cyber-cyan font-semibold mb-4">WordPress & Frontend Specialist</p>
              <ul className="space-y-2 text-gray-300">
                <li>• Customized WordPress themes and plugins</li>
                <li>• Developed Shopify e-commerce solutions</li>
                <li>• Conducted comprehensive frontend testing</li>
                <li>• Optimized website performance and user experience</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education & Achievements Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold neon-text mb-6">Education & Achievements</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-card p-6 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-electric-purple">B.Tech in Information Technology</h4>
                  <p className="text-gray-300">Muthayammal College of Engineering and Technology</p>
                  <p className="text-hot-pink font-medium">CGPA: 8.0</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cyber-cyan">Higher Secondary</h4>
                  <p className="text-gray-300">77.7%</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-neon-green">Secondary School</h4>
                  <p className="text-gray-300">81.2%</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card p-6 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Certifications & Awards</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-electric-purple">MERN Stack Development</h4>
                  <p className="text-gray-300">Codekaro - Full Stack Web Development</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-hot-pink">State-Level Ilanthalir Award</h4>
                  <p className="text-gray-300">Dance Competition - Representing Tamil Nadu</p>
                  <p className="text-sm text-gray-400 mt-1">Showcasing creativity and artistic excellence</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ChatBot */}
      <ChatBot isOpen={isChatOpen} setIsOpen={setIsChatOpen} />

      {/* ChatBot Toggle Button */}
      <motion.button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 z-50 cyber-button p-4 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <MessageSquare size={24} />
      </motion.button>
    </div>
  )
}