import { onMounted, onUnmounted } from 'vue'

type HotkeyMap = Record<string, () => void>

/**
 * Регистрирует горячие клавиши.
 * - Не срабатывает при вводе в input/textarea/[contenteditable]
 * - Не повторяет при удержании (keydown repeat)
 */
export function useHotkeys(keys: HotkeyMap) {
  function handler(e: KeyboardEvent) {
    // Пропускаем если фокус в поле ввода
    const target = e.target as HTMLElement
    if (
      target.tagName === 'INPUT' ||
      target.tagName === 'TEXTAREA' ||
      target.isContentEditable
    ) return

    // Пропускаем повторные события при удержании клавиши
    if (e.repeat) return

    const fn = keys[e.code] ?? keys[e.key]
    if (fn) {
      e.preventDefault()
      fn()
    }
  }

  onMounted(() => window.addEventListener('keydown', handler))
  onUnmounted(() => window.removeEventListener('keydown', handler))
}
