import { ref, onMounted, onUnmounted } from 'vue'

export function useFullscreen() {
  const isFullscreen = ref(false)

  function update() {
    isFullscreen.value = !!document.fullscreenElement
  }

  function toggle() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {})
    } else {
      document.exitFullscreen().catch(() => {})
    }
  }

  onMounted(() => document.addEventListener('fullscreenchange', update))
  onUnmounted(() => document.removeEventListener('fullscreenchange', update))

  return { isFullscreen, toggle }
}
