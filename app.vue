<script setup lang="ts">
const visualizer = ref<HTMLCanvasElement | null>(null)
const { particles } = useAnimation(visualizer)
const { isPortrait, containerClasses } = useLayout()
const keyboard = useKeyboard(particles)
const activeKey = toRef(keyboard, 'activeKey')
const { handleKeyPress, clearActiveKey } = keyboard
</script>

<template>
  <div :class="containerClasses">
    <RotateDevice v-if="isPortrait" />

    <template v-else>
      <AppHeader />

      <KeyboardLayout
        :active-key="activeKey"
        @key-press="handleKeyPress"
        @key-up="clearActiveKey"
      />
    </template>

    <canvas ref="visualizer" class="fixed inset-0 pointer-events-none" />
  </div>
</template>

<style scoped>
.app-container {
  @apply pt-1 pb-2;
  @apply sm:pt-2 sm:pb-4;
  @apply md:pt-4 md:pb-6;
  @apply lg:pt-6 lg:pb-8;
  @apply xl:pt-8 xl:pb-10;
  @apply 2xl:pt-10 2xl:pb-12;
}
</style>
