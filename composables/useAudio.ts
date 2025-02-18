import { useSound } from '@vueuse/sound'

export function useAudio(): AudioReturn {
  const playbackRate = ref<number>(1)
  const volume = ref<number>(1)

  const sounds = Object.fromEntries(
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(key => [
      key,
      useSound(`/sounds/${key}.mp3`, {
        interrupt: true,
        playbackRate,
        volume
      })
    ])
  )

  const getRandomVolume = (): number => {
    const rate = 0.6 + Math.random() * 1.4
    playbackRate.value = rate
    return rate
  }

  const getRandomRate = (): number => {
    const vol = 0.8 + Math.random() * 0.7
    volume.value = vol
    return vol
  }

  return {
    sounds,
    playbackRate,
    volume,
    getRandomVolume,
    getRandomRate
  }
}
