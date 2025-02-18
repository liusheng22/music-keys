import { useEventListener } from '@vueuse/core'

export function useKeyboard(particles: ParticlesReturn): KeyboardReturn {
  const audio = useAudio()
  const activeKey = ref('')

  const setActiveKey = (key: string) => {
    activeKey.value = key
  }

  const clearActiveKey = (key: string) => {
    if (activeKey.value === key) {
      activeKey.value = ''
    }
  }

  const preventDefaultKeys = (e: KeyboardEvent): void => {
    const keysToPrevent: string[] = [
      'F1',
      'F2',
      'F3',
      'F4',
      'F5',
      'F6',
      'F7',
      'F8',
      'F9',
      'F10',
      'F11',
      'F12',
      'Tab',
      'CapsLock',
      'Shift',
      'Control',
      'Alt',
      'Meta',
      'ContextMenu',
      'PrintScreen',
      'ScrollLock',
      'Pause',
      'Insert',
      'Delete',
      'Home',
      'End',
      'PageUp',
      'PageDown',
      'ArrowUp',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'Escape',
      'NumLock'
    ]

    if (
      keysToPrevent.includes(e.key)
      || e.repeat
      || e.ctrlKey
      || e.metaKey
      || e.altKey
    ) {
      e.preventDefault()
    }
  }

  const handleKeyPress = (key: string) => {
    setActiveKey(key)

    // trigger audio
    audio.getRandomVolume()
    audio.getRandomRate()
    audio.sounds[key].play()

    // trigger particles
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

  const handleKeyDown = (e: KeyboardEvent): void => {
    if (e.repeat) {
      return
    }

    const key = e.key.toUpperCase()
    if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(key)) {
      setActiveKey(key)

      handleKeyPress(key)
    }
  }

  const handleKeyUp = (e: KeyboardEvent): void => {
    const key = e.key.toUpperCase()
    clearActiveKey(key)
  }

  useEventListener(window, 'keydown', preventDefaultKeys, { capture: true })
  useEventListener(window, 'keydown', handleKeyDown)
  useEventListener(window, 'keyup', handleKeyUp)

  return {
    activeKey,
    setActiveKey,
    clearActiveKey,
    handleKeyDown,
    handleKeyPress
  }
}
