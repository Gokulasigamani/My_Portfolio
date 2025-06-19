'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, MapPin, User, Code, Briefcase, Award, MessageSquare } from 'lucide-react'
import { ChatBot } from './ChatBot'

const tabs = [
  { id: 'profile', label: 'Profile', icon: User, gradient: 'from-purple-500 to-pink-500' },
  { id: 'skills', label: 'Skills', icon: Code, gradient: 'from-blue-500 to-cyan-500' },
  { id: 'projects', label: 'Projects', icon: Briefcase, gradient: 'from-green-500 to-teal-500' },
  { id: 'experience', label: 'Experience', icon: Award, gradient: 'from-orange-500 to-red-500' }
]

const techStack = [
  { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
  { name: 'React.js', level: 95, color: 'bg-blue-500' },
  { name: 'Node.js', level: 85, color: 'bg-green-500' },
  { name: 'MongoDB', level: 80, color: 'bg-green-600' },
  { name: 'AWS', level: 75, color: 'bg-orange-500' },
  { name: 'Express.js', level: 88, color: 'bg-gray-600' }
]

export function MobileOptimized() {
  const [activeTab, setActiveTab] = useState('profile')
  const [isChatOpen, setIsChatOpen] = useState(false)
  
  console.log('Clean MobileOptimized component rendered with tabs')

  const ProfileContent = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center text-center px-6 py-8"
    >
      <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6 shadow-2xl">
        <span className="text-3xl font-bold text-white">GN</span>
      </div>
      
      <h1 className="text-3xl font-black text-white mb-2">Gokulasigamani N</h1>
      <p className="text-lg text-purple-300 mb-2 font-medium">Full Stack Developer</p>
      <p className="text-sm text-gray-300 mb-6 flex items-center gap-2">
        <MapPin size={16} className="text-pink-400" />
        Pollachi, Coimbatore
      </p>

      <div className="grid grid-cols-2 gap-3 w-full max-w-sm mb-6">
        <a
          href="tel:+917010437899"
          className="flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl text-white font-semibold text-sm shadow-lg active:scale-95 transition-transform"
        >
          <Phone size={16} />
          Call
        </a>
        <a
          href="mailto:gokulsusela@gmail.com"
          className="flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl text-white font-semibold text-sm shadow-lg active:scale-95 transition-transform"
        >
          <Mail size={16} />
          Email
        </a>
        <a
          href="https://github.com/Gokulasigamani"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl text-white font-semibold text-sm shadow-lg active:scale-95 transition-transform"
        >
          <Github size={16} />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/gokulasigamani-n-7aa862221"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl text-white font-semibold text-sm shadow-lg active:scale-95 transition-transform"
        >
          <Linkedin size={16} />
          LinkedIn
        </a>
      </div>

      <div className="w-full max-w-sm">
        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl p-4 border border-purple-500/30">
          <h3 className="text-white font-bold mb-2">Education</h3>
          <p className="text-purple-200 text-sm">B.Tech (IT), MCET - CGPA 8.0</p>
          <p className="text-gray-300 text-xs mt-1">HSC: 77.7% | SSLC: 81.2%</p>
        </div>
      </div>
    </motion.div>
  )

  const SkillsContent = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="px-6 py-8"
    >
      <h2 className="text-2xl font-black text-white text-center mb-6">Tech Stack</h2>
      
      <div className="space-y-4 mb-6">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/30"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-white">{tech.name}</span>
              <span className="text-cyan-400 font-semibold text-sm">{tech.level}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${tech.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                className={`h-full ${tech.color} rounded-full`}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-3 text-center">
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-3 border border-purple-500/30">
          <div className="text-xl font-bold text-white">2+</div>
          <div className="text-xs text-purple-300">Years</div>
        </div>
        <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl p-3 border border-blue-500/30">
          <div className="text-xl font-bold text-white">10+</div>
          <div className="text-xs text-blue-300">Projects</div>
        </div>
        <div className="bg-gradient-to-r from-green-600/20 to-teal-600/20 rounded-xl p-3 border border-green-500/30">
          <div className="text-xl font-bold text-white">5+</div>
          <div className="text-xs text-green-300">Technologies</div>
        </div>
      </div>
    </motion.div>
  )

  const ProjectsContent = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="px-6 py-8"
    >
      <h2 className="text-2xl font-black text-white text-center mb-6">Featured Projects</h2>
      
      <div className="space-y-4">
        <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">E</span>
            </div>
            <div>
              <h3 className="font-bold text-white">E-Commerce Platform</h3>
              <p className="text-purple-300 text-xs">MERN Stack</p>
            </div>
          </div>
          <p className="text-gray-300 text-sm mb-3">
            Full-featured e-commerce solution with cart, authentication, and payment integration.
          </p>
          <div className="flex flex-wrap gap-1">
            <span className="px-2 py-1 bg-purple-600/30 text-purple-200 rounded-full text-xs">React.js</span>
            <span className="px-2 py-1 bg-green-600/30 text-green-200 rounded-full text-xs">Node.js</span>
            <span className="px-2 py-1 bg-blue-600/30 text-blue-200 rounded-full text-xs">MongoDB</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <div>
              <h3 className="font-bold text-white">Bus Booking System</h3>
              <p className="text-blue-300 text-xs">Full Stack</p>
            </div>
          </div>
          <p className="text-gray-300 text-sm mb-3">
            Hosteller booking platform with complaint handling and direct admin chat.
          </p>
          <div className="flex flex-wrap gap-1">
            <span className="px-2 py-1 bg-blue-600/30 text-blue-200 rounded-full text-xs">MERN</span>
            <span className="px-2 py-1 bg-cyan-600/30 text-cyan-200 rounded-full text-xs">Real-time Chat</span>
          </div>
        </div>
      </div>
    </motion.div>
  )

  const ExperienceContent = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="px-6 py-8"
    >
      <h2 className="text-2xl font-black text-white text-center mb-6">Experience</h2>
      
      <div className="space-y-4 mb-6">
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-600/30">
          <h3 className="font-bold text-white mb-2">App Mastery</h3>
          <p className="text-cyan-400 text-sm mb-2">Frontend & AI Integration</p>
          <p className="text-gray-300 text-xs">AWS Cognito auth, n8n automation, AI workflows</p>
        </div>
        
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-600/30">
          <h3 className="font-bold text-white mb-2">WeDesign Tech</h3>
          <p className="text-purple-400 text-sm mb-2">WordPress & Shopify</p>
          <p className="text-gray-300 text-xs">Frontend development and testing</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 backdrop-blur-sm rounded-xl p-4 border border-orange-500/30">
        <h3 className="font-bold text-white mb-3">Certifications & Achievements</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-gray-300">MERN Stack Course</span>
            <span className="text-orange-400 text-xs">Codekaro</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Ilanthalir State Award</span>
            <span className="text-red-400 text-xs">Dance (Tamil Nadu)</span>
          </div>
        </div>
      </div>
    </motion.div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileContent />
      case 'skills':
        return <SkillsContent />
      case 'projects':
        return <ProjectsContent />
      case 'experience':
        return <ExperienceContent />
      default:
        return <ProfileContent />
    }
  }

  return (
    <div className="md:hidden h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden flex flex-col">
      {/* Background Animation */}
      <TechBackground />
      
      {/* Content Area */}
      <div className="relative z-10 flex-1 flex flex-col">
        {/* ChatBot and Toggle Button */}
        <ChatBot isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
        <motion.button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="fixed bottom-24 right-6 z-50 cyber-button p-3 rounded-full shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <MessageSquare size={20} />
        </motion.button>
        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto pb-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Bottom Tab Navigation */}
        <div className="bg-gray-900/90 backdrop-blur-sm border-t border-gray-700/50 px-2 py-3 fixed bottom-0 left-0 w-full z-40">
          <div className="flex justify-around items-center">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-200 ${
                    isActive
                      ? `bg-gradient-to-r ${tab.gradient} shadow-lg`
                      : 'hover:bg-gray-800/50'
                  }`}
                >
                  <Icon size={20} className={`${isActive ? 'text-white' : 'text-gray-400'}`} />
                  <span className={`text-xs font-medium ${
                    isActive ? 'text-white' : 'text-gray-400'
                  }`}>
                    {tab.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

// Simplified Tech Background Component
function TechBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {/* Grid Pattern */}
      <div 
        className="w-full h-full" 
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          animation: 'grid-move 30s linear infinite'
        }}
      />
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 text-purple-400/30 font-mono text-lg animate-pulse">{'{ }'}</div>
      <div className="absolute top-20 right-20 text-blue-400/30 font-mono text-sm animate-bounce">const</div>
      <div className="absolute bottom-32 left-16 text-cyan-400/30 font-mono text-base">{'</'}</div>
      <div className="absolute bottom-20 right-12 text-green-400/30 font-mono text-lg">=&gt;</div>
      <div className="absolute top-1/2 left-8 text-pink-400/30 font-mono text-sm animate-pulse">[ ]</div>
      <div className="absolute top-1/3 right-8 text-yellow-400/30 font-mono text-base">( )</div>
    </div>
  )
}