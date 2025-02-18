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

interface ParticlesReturn {
  initCanvas: () => void
  createParticles: (x: number, y: number, volume: number) => void
  startAnimation: () => void
  stopAnimation: () => void
}
