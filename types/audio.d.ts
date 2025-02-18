interface SoundInstance {
  play: (options?: { volume?: number, playbackRate?: number }) => void
  stop: () => void
  isPlaying: Ref<boolean>
}

interface AudioReturn {
  sounds: Record<string, SoundInstance>
  playbackRate: Ref<number>
  volume: Ref<number>
  getRandomVolume: () => number
  getRandomRate: () => number
}
