<script setup lang="ts">
const { $device } = useNuxtApp()
</script>

<template>
  <div
    class="text-center sm:mb-2 md:mb-4 lg:mb-8 xl:mb-12 2xl:mb-16"
    :style="{
      marginBottom: $device.isMobile ? '0' : 'revert-layer',
    }"
  >
    <h1
      class="title font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-500 bg-clip-text text-transparent"
    >
      Musical Keyboard
    </h1>

    <p
      v-if="!$device.isMobile"
      class="subtitle text-gray-400 font-light tracking-wider"
    >
      Play music with your fingertips
    </p>
  </div>
</template>

<style scoped>
.title {
  @apply text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl;
  @apply mb-0 sm:mb-0 md:mb-1 lg:mb-2 xl:mb-3 2xl:mb-4;
}

.subtitle {
  @apply text-xs sm:text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl;
}
</style>
