import { useEventListener } from '@vueuse/core'

export function useAnimation(visualizer: Ref<HTMLCanvasElement | null>) {
  const particles = useParticles(visualizer)

  function initAnimation() {
    particles.initCanvas()
    particles.startAnimation()
  }

  function stopAnimation() {
    particles.stopAnimation()
  }

  // 监听窗口大小变化
  useEventListener(window, 'resize', initAnimation)

  // 生命周期处理
  onMounted(() => {
    initAnimation()
  })

  onUnmounted(() => {
    stopAnimation()
  })

  return {
    particles,
    initAnimation,
    stopAnimation
  }
}
