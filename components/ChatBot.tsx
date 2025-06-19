'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Bot, User } from 'lucide-react'

interface ChatBotProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

interface Message {
  type: 'user' | 'bot'
  content: string
}

const chatOptions = [
  {
    question: "Who are you?",
    answer: "I'm Gokulasigamani N, a passionate Full Stack Developer specializing in MERN stack and AI workflows. I'm based in Pollachi, Coimbatore, and I love building innovative web applications that solve real-world problems. With a CGPA of 8.0 in B.Tech IT and hands-on experience in multiple internships, I'm always eager to take on new challenges!"
  },
  {
    question: "What projects have you done?",
    answer: "I've built some exciting projects! My main ones include:\n\n🛒 E-Commerce Platform - A complete MERN stack solution with cart management, secure authentication, and payment integration\n\n🚌 Bus Booking & Complaint System - A specialized platform for hostellers with booking management, complaint handling, and direct admin communication\n\nBoth projects showcase my full-stack development skills and focus on user experience!"
  },
  {
    question: "What tech stack do you use?",
    answer: "I work with a modern, powerful tech stack:\n\n💻 Languages: JavaScript, Java\n🎨 Frontend: React.js, HTML, CSS, Tailwind CSS, Bootstrap\n⚙️ Backend: Node.js, Express.js\n📊 Database: MongoDB\n☁️ Cloud: AWS (Cognito, EC2, S3, CloudWatch, ECR)\n🛠️ Tools: Git, Postman, n8n, Langflow, Crew AI\n\nI'm constantly learning and adapting to new technologies to stay at the cutting edge!"
  },
  {
    question: "How to contact you?",
    answer: "I'd love to connect with you! Here are all the ways to reach me:\n\n📱 Phone: +91 7010437899\n📧 Email: gokulsusela@gmail.com\n🌍 GitHub: https://github.com/Gokulasigamani\n💼 LinkedIn: https://www.linkedin.com/in/gokulasigamani-n-7aa862221\n📍 Location: Pollachi, Coimbatore\n\nFeel free to reach out for collaborations, opportunities, or just to chat about tech!"
  }
]

export function ChatBot({ isOpen, setIsOpen }: ChatBotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'bot',
      content: "👋 Hey there! I'm Gokul's AI assistant. What would you like to know about me?"
    }
  ])

  console.log('ChatBot component rendered, isOpen:', isOpen)

  const handleOptionClick = (option: typeof chatOptions[0]) => {
    console.log('Chat option clicked:', option.question)
    
    // Add user question
    const userMessage: Message = {
      type: 'user',
      content: option.question
    }
    
    // Add bot response
    const botMessage: Message = {
      type: 'bot',
      content: option.answer
    }
    
    setMessages(prev => [...prev, userMessage, botMessage])
  }

  const resetChat = () => {
    console.log('Chat reset')
    setMessages([
      {
        type: 'bot',
        content: "👋 Hey there! I'm Gokul's AI assistant. What would you like to know about me?"
      }
    ])
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-24 right-6 w-80 max-w-[calc(100vw-2rem)] z-50"
        >
          <div className="glass-card rounded-2xl overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-electric-purple/20 p-4 border-b border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-electric-purple rounded-full flex items-center justify-center">
                    <Bot size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Gokul's Assistant</h3>
                    <p className="text-xs text-gray-400">Always here to help!</p>
                  </div>
                </div>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-1 rounded-lg hover:bg-white/10 transition-colors duration-200"
                >
                  <X size={18} />
                </motion.button>
              </div>
            </div>

            {/* Messages */}
            <div className="p-4 max-h-80 overflow-y-auto space-y-3">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`flex gap-2 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.type === 'bot' && (
                    <div className="w-6 h-6 bg-electric-purple rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot size={12} />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-3 rounded-xl whitespace-pre-line ${
                      message.type === 'user'
                        ? 'bg-electric-purple text-white'
                        : 'bg-white/10 text-gray-200'
                    }`}
                  >
                    {message.content}
                  </div>
                  {message.type === 'user' && (
                    <div className="w-6 h-6 bg-cyber-cyan rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <User size={12} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Options */}
            <div className="p-4 border-t border-white/10 space-y-2">
              <div className="grid grid-cols-1 gap-2">
                {chatOptions.map((option, index) => (
                  <motion.button
                    key={option.question}
                    onClick={() => handleOptionClick(option)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="p-2 text-left text-sm bg-white/5 hover:bg-white/10 rounded-lg transition-colors duration-200 text-gray-300 hover:text-white"
                  >
                    {option.question}
                  </motion.button>
                ))}
              </div>
              <motion.button
                onClick={resetChat}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full p-2 text-center text-sm bg-hot-pink/20 hover:bg-hot-pink/30 rounded-lg transition-colors duration-200 text-hot-pink hover:text-white mt-2"
              >
                Start New Conversation
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}