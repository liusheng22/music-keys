<template>
  <div class="min-h-screen bg-gray-900 flex flex-col items-center pt-20 pb-12 px-8">
    <!-- title & subtitle -->
    <div class="text-center mb-24">
      <h1 class="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-4">
        Musical Keyboard
      </h1>
      <p class="text-gray-400 text-xl font-light tracking-wider">
        Play music with your fingertips
      </p>
    </div>
    
    <!-- keyboard layout -->
    <KeyboardLayout :active-key="keyboard.activeKey" @key-press="handleKeyPress" />

    <!-- visualizer canvas -->
    <canvas
      ref="visualizer"
      class="fixed inset-0 pointer-events-none"
    />
  </div>
</template>

<script setup lang="ts">
const visualizer = ref<HTMLCanvasElement | null>(null)
const audio = useAudio()
const particles = useParticles(visualizer)
const keyboard = useKeyboard()

// handle key press event
const handleKeyPress = (key: string) => {
  audio.getRandomVolume()
  audio.getRandomRate()
  audio.sounds[key].play()

  const keyElement = document.querySelector(`[data-key="${key}"]`)
  if (keyElement) {
    const rect = keyElement.getBoundingClientRect()
    particles.createParticles(
      rect.left + rect.width / 2,
      rect.top + rect.height / 2,
      audio.volume.value
    )
  }
}

onMounted(() => {
  particles.initCanvas()
  particles.startAnimation()
})

onUnmounted(() => {
  particles.stopAnimation()
})
</script>