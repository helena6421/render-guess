<script setup lang="ts">
import { computed } from 'vue'
import { formatTime } from '@/domain/game/config'

const props = defineProps<{
  remainingSeconds: number
  totalSeconds: number
  paused?: boolean
}>()

const progress = computed(() =>
  props.totalSeconds > 0 ? Math.max(0, props.remainingSeconds / props.totalSeconds) : 1
)
const urgent    = computed(() => props.remainingSeconds <= 10 && !props.paused && props.remainingSeconds > 0)
const formatted = computed(() => formatTime(props.remainingSeconds))

// Цвет текста: белый пока всё ок, жёлтый → красный к концу
const timerColor = computed(() => {
  if (props.paused) return 'var(--color-orange)'
  if (urgent.value) return '#dc2626'
  return 'var(--text-primary)'
})
</script>

<template>
  <div
    class="gtimer"
    :class="{ 'gtimer--urgent': urgent, 'gtimer--paused': paused }"
    :title="paused ? 'Пауза' : `${formatted} осталось`"
  >
    <svg class="gtimer__svg" viewBox="0 0 44 44">
      <circle class="gtimer__track" cx="22" cy="22" r="18" />
      <circle
        class="gtimer__fill"
        cx="22" cy="22" r="18"
        :style="{ strokeDashoffset: (1 - progress) * 113.1 }"
      />
    </svg>

    <span class="gtimer__text" :style="{ color: timerColor }">
      {{ paused ? '⏸' : formatted }}
    </span>
  </div>
</template>

<style scoped>
.gtimer {
  position: relative;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: var(--border-black);
  border-radius: 50%;
  background: var(--bg-card);
  box-shadow: var(--shadow-hard-sm);
}
.gtimer--urgent {
  border-color: #dc2626;
  box-shadow: 3px 3px 0 #dc2626;
  animation: pulse-ring 0.6s ease infinite;
}
@keyframes pulse-ring {
  0%, 100% { transform: scale(1); }
  50%       { transform: scale(1.06); }
}
@media (prefers-reduced-motion: reduce) {
  .gtimer--urgent { animation: none; }
}

.gtimer__svg {
  position: absolute;
  inset: -6px;
  width: calc(100% + 12px);
  height: calc(100% + 12px);
  transform: rotate(-90deg);
}
.gtimer__track {
  fill: none;
  stroke: #e5e7eb;
  stroke-width: 3;
}
.gtimer__fill {
  fill: none;
  stroke: var(--color-violet-bright);
  stroke-width: 3;
  stroke-linecap: round;
  stroke-dasharray: 113.1;
  transition: stroke-dashoffset 0.25s linear, stroke var(--transition-fast);
}
.gtimer--urgent .gtimer__fill { stroke: #dc2626; }
.gtimer--paused .gtimer__fill { stroke: var(--color-orange); }

.gtimer__text {
  font-size: 13px;
  font-weight: 900;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.5px;
  position: relative;
  z-index: 1;
}
</style>
