import { useMediaQuery } from '@vueuse/core'

export function useLayout() {
  const isPortrait = useMediaQuery('(orientation: portrait)')
  const { $device } = useNuxtApp()

  const containerClasses = computed(() => ({
    'min-h-screen w-screen select-none bg-gray-900': true,
    'app-container flex flex-col items-center px-8': !$device.isMobile
  }))

  return {
    isPortrait,
    containerClasses
  }
}
