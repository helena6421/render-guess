import { ref, computed, onUnmounted } from 'vue'

/**
 * Точный таймер на основе Date.now().
 * Рассчитывает остаток по реальному времени, а не простым --counter.
 * Корректно обрабатывает переключение вкладок.
 */
export function useTimer(onExpire: () => void) {
  const startedAt = ref<number | null>(null)
  const totalMs = ref(0)
  const remainingMs = ref(0)
  let rafId: number | null = null
  let expired = false

  function tick() {
    if (startedAt.value === null) return
    const elapsed = Date.now() - startedAt.value
    const left = totalMs.value - elapsed
    if (left <= 0) {
      remainingMs.value = 0
      if (!expired) {
        expired = true
        stop()
        onExpire()
      }
      return
    }
    remainingMs.value = left
    rafId = requestAnimationFrame(tick)
  }

  function start(durationMs: number, fromMs?: number) {
    stop()
    expired = false
    totalMs.value = durationMs
    const from = fromMs ?? durationMs
    remainingMs.value = from
    startedAt.value = Date.now() - (durationMs - from)
    rafId = requestAnimationFrame(tick)
  }

  function pause(): number {
    if (rafId !== null) {
      cancelAnimationFrame(rafId)
      rafId = null
    }
    const left = remainingMs.value
    startedAt.value = null
    return left
  }

  function resume(fromMs: number) {
    if (expired) return
    remainingMs.value = fromMs
    startedAt.value = Date.now() - (totalMs.value - fromMs)
    rafId = requestAnimationFrame(tick)
  }

  function stop() {
    if (rafId !== null) {
      cancelAnimationFrame(rafId)
      rafId = null
    }
    startedAt.value = null
  }

  function reset() {
    stop()
    remainingMs.value = 0
    totalMs.value = 0
    expired = false
  }

  const remainingSeconds = computed(() => remainingMs.value / 1000)

  onUnmounted(stop)

  return { remainingMs, remainingSeconds, start, pause, resume, stop, reset }
}
