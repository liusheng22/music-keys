import { useRafFn } from '@vueuse/core'

interface ParticleProps {
  x: number
  y: number
  color: string
  size: number
  speedX: number
  speedY: number
  gravity: number
  life: number
  decay: number
}

class Particle implements ParticleProps {
  x: number
  y: number
  color: string
  size: number
  speedX: number
  speedY: number
  gravity: number
  life: number
  decay: number

  constructor(x: number, y: number, color: string, volume: number) {
    this.x = x
    this.y = y
    this.color = color
    this.size = (Math.random() * 3 + 2) * volume
    this.speedX = (Math.random() * 6 - 3) * volume
    this.speedY = (Math.random() * -15 - 5) * volume
    this.gravity = 0.5
    this.life = 1
    this.decay = Math.random() * 0.02 + 0.02
  }

  update(): void {
    this.speedY += this.gravity
    this.x += this.speedX
    this.y += this.speedY
    this.life -= this.decay
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(${this.color}, ${this.life})`
    ctx.fill()
  }
}

interface ParticlesReturn {
  initCanvas: () => void
  createParticles: (x: number, y: number, volume: number) => void
  startAnimation: () => void
  stopAnimation: () => void
}

export const useParticles = (canvasRef: Ref<HTMLCanvasElement | null>): ParticlesReturn => {
  const particles: Particle[] = []

  const initCanvas = (): void => {
    if (!canvasRef.value) return
    const canvas = canvasRef.value
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    window.addEventListener('resize', () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    })
  }

  const createParticles = (x: number, y: number, volume: number): void => {
    const colors = [
      '147, 51, 234',
      '236, 72, 153',
      '59, 130, 246',
    ]
    
    const particleCount = Math.floor(15 + volume * 10)
    
    for (let i = 0; i < particleCount; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)]
      particles.push(new Particle(x, y, color, volume))
    }
  }

  const { pause, resume } = useRafFn(() => {
    if (!canvasRef.value) return
    const ctx = canvasRef.value.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height)
    
    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update()
      particles[i].draw(ctx)
      if (particles[i].life <= 0) {
        particles.splice(i, 1)
      }
    }
  })

  return {
    initCanvas,
    createParticles,
    startAnimation: resume,
    stopAnimation: pause,
  }
}