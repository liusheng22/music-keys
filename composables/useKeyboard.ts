import { useEventListener } from '@vueuse/core'

interface KeyboardReturn {
  activeKey: Ref<string>
}

export const useKeyboard = (): KeyboardReturn => {
  const activeKey = ref<string>('')

  const preventDefaultKeys = (e: KeyboardEvent): void => {
    const keysToPrevent: string[] = [
      'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12',
      'Tab', 'CapsLock', 'Shift', 'Control', 'Alt', 'Meta',
      'ContextMenu', 'PrintScreen', 'ScrollLock', 'Pause',
      'Insert', 'Delete', 'Home', 'End', 'PageUp', 'PageDown',
      'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
      'Escape', 'NumLock'
    ]

    if (
      keysToPrevent.includes(e.key) ||
      e.ctrlKey ||
      e.metaKey ||
      e.altKey
    ) {
      e.preventDefault()
    }
  }

  const handleKeyDown = (e: KeyboardEvent): void => {
    const key = e.key.toUpperCase()
    if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(key)) {
      if (activeKey.value !== key) {
        activeKey.value = key
      }
    }
  }
  
  const handleKeyUp = (e: KeyboardEvent): void => {
    const key = e.key.toUpperCase()
    if (activeKey.value === key) {
      activeKey.value = ''
    }
  }
  
  useEventListener(window, 'keydown', preventDefaultKeys, { capture: true })
  useEventListener(window, 'keydown', handleKeyDown)
  useEventListener(window, 'keyup', handleKeyUp)

  return {
    activeKey
  }
}