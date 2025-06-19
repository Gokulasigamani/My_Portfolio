'use client'

import { useState, useRef, useEffect } from 'react'
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

function linkifyBotMessage(text: string) {
  // Replace GitHub and LinkedIn URLs with clickable text (remove the original URL from the text)
  let replaced = text
    .replace(/https:\/\/github\.com\/[\w-]+/g, '<a href="$&" target="_blank" rel="noopener noreferrer" class="text-cyber-cyan underline font-semibold">GitHub</a>')
    .replace(/https:\/\/www\.linkedin\.com\/in\/[\w-]+/g, '<a href="$&" target="_blank" rel="noopener noreferrer" class="text-hot-pink underline font-semibold">LinkedIn</a>');
  // Replace other URLs with clickable links (only if not already inside an anchor)
  replaced = replaced.replace(/(?<![">])(https?:\/\/[\w./?=&%-]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer" class="underline text-blue-400">$1</a>');
  return replaced;
}

export function ChatBot({ isOpen, setIsOpen }: ChatBotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'bot',
      content: "👋 Hey there! I'm Gokul's AI assistant. What would you like to know about me?"
    }
  ])
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isOpen])

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
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black z-40"
            onClick={() => setIsOpen(false)}
          />
          {/* Chat Window */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 w-full max-w-md mx-auto z-50 px-2 sm:left-1/2 sm:-translate-x-1/2 sm:px-0"
            style={{ maxHeight: '90vh', display: 'flex', flexDirection: 'column' }}
          >
            <div className="glass-card rounded-t-2xl overflow-hidden shadow-2xl flex flex-col h-full w-full" style={{ maxHeight: '90vh' }}>
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
              <div
                className="flex-1 p-4 overflow-y-auto space-y-3 scrollbar-hide"
                style={{ minHeight: 0, scrollBehavior: 'smooth' }}
                ref={messagesContainerRef}
              >
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
                      dangerouslySetInnerHTML={
                        message.type === 'bot'
                          ? { __html: linkifyBotMessage(message.content) }
                          : undefined
                      }
                    >
                      {message.type === 'user' ? message.content : null}
                    </div>
                    {message.type === 'user' && (
                      <div className="w-6 h-6 bg-cyber-cyan rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <User size={12} />
                      </div>
                    )}
                  </motion.div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Options - fixed at bottom of chat window */}
              <div className="p-4 border-t border-white/10 space-y-2 bg-black/40 backdrop-blur-sm">
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
        </>
      )}
    </AnimatePresence>
  )
}