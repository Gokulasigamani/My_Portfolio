'use client'

import { useEffect, useRef } from 'react'

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    console.log('Enhanced particle background initialized')

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Tech-themed particle class
    class TechParticle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
      char: string
      rotation: number
      rotationSpeed: number
      
      constructor() {
        this.x = Math.random() * (canvas?.width || 800)
        this.y = Math.random() * (canvas?.height || 600)
        this.vx = (Math.random() - 0.5) * 0.3
        this.vy = (Math.random() - 0.5) * 0.3
        this.size = Math.random() * 15 + 8
        this.rotation = Math.random() * Math.PI * 2
        this.rotationSpeed = (Math.random() - 0.5) * 0.02
        
        const colors = ['#8B5CF6', '#06B6D4', '#EC4899', '#10B981', '#F97316']
        this.color = colors[Math.floor(Math.random() * colors.length)]
        
        const chars = ['{ }', '< />', '( )', '[ ]', '0', '1', 'fn', '{}', '<>', '::']
        this.char = chars[Math.floor(Math.random() * chars.length)]
      }
      
      update() {
        this.x += this.vx
        this.y += this.vy
        this.rotation += this.rotationSpeed
        
        // Wrap around edges
        const width = canvas?.width || 800
        const height = canvas?.height || 600
        if (this.x < -50) this.x = width + 50
        if (this.x > width + 50) this.x = -50
        if (this.y < -50) this.y = height + 50
        if (this.y > height + 50) this.y = -50
      }
      
      draw() {
        if (!ctx) return
        
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)
        
        // Draw tech character
        ctx.font = `${this.size}px 'Fira Code', monospace`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillStyle = this.color + '20'
        ctx.fillText(this.char, 0, 0)
        
        // Add glow effect
        ctx.shadowColor = this.color
        ctx.shadowBlur = 10
        ctx.fillStyle = this.color + '40'
        ctx.fillText(this.char, 0, 0)
        
        ctx.restore()
      }
    }

    // Binary rain effect
    class BinaryRain {
      x: number
      y: number
      speed: number
      opacity: number
      
      constructor() {
        this.x = Math.random() * (canvas?.width || 800)
        this.y = -20
        this.speed = Math.random() * 3 + 1
        this.opacity = Math.random() * 0.5 + 0.1
      }
      
      update() {
        this.y += this.speed
        
        const height = canvas?.height || 600
        const width = canvas?.width || 800
        if (this.y > height + 20) {
          this.y = -20
          this.x = Math.random() * width
        }
      }
      
      draw() {
        if (!ctx) return
        
        ctx.font = '12px "Fira Code", monospace'
        ctx.textAlign = 'center'
        ctx.fillStyle = `rgba(6, 182, 212, ${this.opacity})`
        ctx.fillText(Math.random() > 0.5 ? '1' : '0', this.x, this.y)
      }
    }

    // Circuit line class
    class CircuitLine {
      startX: number
      startY: number
      endX: number
      endY: number
      progress: number
      speed: number
      color: string
      
      constructor() {
        const width = canvas?.width || 800
        const height = canvas?.height || 600
        this.startX = Math.random() * width
        this.startY = Math.random() * height
        this.endX = Math.random() * width
        this.endY = Math.random() * height
        this.progress = 0
        this.speed = 0.01
        this.color = ['#8B5CF6', '#06B6D4', '#EC4899'][Math.floor(Math.random() * 3)]
      }
      
      update() {
        this.progress += this.speed
        if (this.progress > 1) {
          this.progress = 0
          const width = canvas?.width || 800
          const height = canvas?.height || 600
          this.startX = Math.random() * width
          this.startY = Math.random() * height
          this.endX = Math.random() * width
          this.endY = Math.random() * height
        }
      }
      
      draw() {
        if (!ctx) return
        
        const currentX = this.startX + (this.endX - this.startX) * this.progress
        const currentY = this.startY + (this.endY - this.startY) * this.progress
        
        ctx.beginPath()
        ctx.moveTo(this.startX, this.startY)
        ctx.lineTo(currentX, currentY)
        ctx.strokeStyle = this.color + '30'
        ctx.lineWidth = 1
        ctx.stroke()
        
        // Add pulsing dot at current position
        ctx.beginPath()
        ctx.arc(currentX, currentY, 2, 0, Math.PI * 2)
        ctx.fillStyle = this.color + '80'
        ctx.fill()
      }
    }

    // Create different types of particles
    const techParticles: TechParticle[] = []
    const binaryRains: BinaryRain[] = []
    const circuitLines: CircuitLine[] = []
    
    const particleCount = Math.min(30, Math.floor((canvas?.width || 800) * (canvas?.height || 600) / 15000))
    const rainCount = Math.min(20, Math.floor((canvas?.width || 800) / 50))
    const circuitCount = Math.min(8, Math.floor((canvas?.width || 800) / 200))
    
    for (let i = 0; i < particleCount; i++) {
      techParticles.push(new TechParticle())
    }
    
    for (let i = 0; i < rainCount; i++) {
      binaryRains.push(new BinaryRain())
    }
    
    for (let i = 0; i < circuitCount; i++) {
      circuitLines.push(new CircuitLine())
    }

    // Animation loop
    let animationId: number
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Update and draw all elements
      techParticles.forEach(particle => {
        particle.update()
        particle.draw()
      })
      
      binaryRains.forEach(rain => {
        rain.update()
        rain.draw()
      })
      
      circuitLines.forEach(line => {
        line.update()
        line.draw()
      })
      
      // Draw connections between tech particles
      for (let i = 0; i < techParticles.length; i++) {
        for (let j = i + 1; j < techParticles.length; j++) {
          const dx = techParticles[i].x - techParticles[j].x
          const dy = techParticles[i].y - techParticles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 120) {
            ctx.beginPath()
            ctx.moveTo(techParticles[i].x, techParticles[i].y)
            ctx.lineTo(techParticles[j].x, techParticles[j].y)
            ctx.strokeStyle = `rgba(139, 92, 246, ${(120 - distance) / 120 * 0.15})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      
      animationId = requestAnimationFrame(animate)
    }
    
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  )
}