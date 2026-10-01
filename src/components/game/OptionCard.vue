<script setup lang="ts">
import { ref, computed, watch, onUnmounted } from 'vue'
import type { ShuffledOption } from '@/types'
import { buildIframeDoc } from '@/domain/game/iframeDoc'

const props = defineProps<{
  option: ShuffledOption
  renderWidth: number
  renderHeight: number
  revealed?: boolean
  isCorrect?: boolean
  isSelected?: boolean  // выбрана ведущим кликом
  interactive?: boolean // можно ли кликать
}>()

const emit = defineEmits<{ loaded: []; error: []; click: [] }>()

const containerRef = ref<HTMLDivElement>()
const loaded  = ref(false)
const errored = ref(false)
const containerW = ref(300)
const containerH = ref(200)

// Масштаб — вписываем render в контейнер без ограничений сверху
const scale = computed(() => {
  const sx = containerW.value / props.renderWidth
  const sy = containerH.value / props.renderHeight
  return Math.min(sx, sy)
})

const scaledW = computed(() => props.renderWidth  * scale.value)
const scaledH = computed(() => props.renderHeight * scale.value)

const srcdoc = computed(() =>
  buildIframeDoc(props.option.html, props.option.css, props.renderWidth, props.renderHeight)
)

function onLoad()  { loaded.value = true;  emit('loaded') }
function onError() { errored.value = true; emit('error') }
function handleClick() {
  if (props.interactive) emit('click')
}

const ro = new ResizeObserver(entries => {
  for (const e of entries) {
    containerW.value = Math.floor(e.contentRect.width)
    containerH.value = Math.floor(e.contentRect.height)
  }
})

watch(containerRef, el => {
  if (!el) return
  ro.observe(el)
  containerW.value = Math.floor(el.clientWidth)
  containerH.value = Math.floor(el.clientHeight)
}, { immediate: true })

onUnmounted(() => ro.disconnect())
</script>

<template>
  <div
    class="opt-card"
    :class="{
      'opt-card--correct':  revealed && isCorrect,
      'opt-card--wrong':    revealed && !isCorrect,
      'opt-card--selected': isSelected && !revealed,
      'opt-card--interactive': interactive,
    }"
    @click="handleClick"
  >
    <!-- Label bar -->
    <div class="opt-label" :class="{ 'opt-label--correct': revealed && isCorrect, 'opt-label--selected': isSelected && !revealed }">
      <span class="opt-letter">{{ option.label }}</span>
      <span v-if="revealed && isCorrect" class="opt-correct-tag">✓ Правильный ответ</span>
      <span v-else-if="isSelected && !revealed" class="opt-sel-tag">← выбран</span>
    </div>

    <!-- Render area -->
    <div class="opt-frame" ref="containerRef">
      <div
        class="opt-render-wrap"
        :style="{ width: scaledW + 'px', height: scaledH + 'px' }"
      >
        <iframe
          v-if="!errored"
          :srcdoc="srcdoc"
          class="opt-iframe"
          :style="{
            width:  props.renderWidth  + 'px',
            height: props.renderHeight + 'px',
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }"
          scrolling="no"
          frameborder="0"
          sandbox="allow-same-origin"
          @load="onLoad"
          @error="onError"
        />
        <div v-else class="opt-error">⚠ Ошибка загрузки</div>
      </div>
      <div v-if="!loaded && !errored" class="opt-skeleton" />
    </div>
  </div>
</template>

<style scoped>
.opt-card {
  display: flex;
  flex-direction: column;
  border: var(--border-black3);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  background: #fff;
  box-shadow: var(--shadow-hard-md);
  transition: box-shadow var(--transition-fast), transform var(--transition-fast), border-color var(--transition-fast);
  min-height: 0;
}
.opt-card--interactive {
  cursor: pointer;
}
.opt-card--interactive:hover {
  transform: translate(-1px, -1px);
  box-shadow: 5px 5px 0 #0f0f0f;
}
.opt-card--interactive:active {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0 #0f0f0f;
}

.opt-card--selected {
  border-color: var(--color-blue);
  box-shadow: 4px 4px 0 var(--color-blue);
}
.opt-card--correct {
  border-color: var(--color-green);
  box-shadow: 4px 4px 0 var(--color-green);
}
.opt-card--wrong {
  opacity: 0.45;
  box-shadow: none;
}

/* Label */
.opt-label {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px 12px;
  background: var(--bg-surface);
  border-bottom: var(--border-black);
  flex-shrink: 0;
}
.opt-label--correct  { background: var(--color-green-light); border-color: var(--color-green); }
.opt-label--selected { background: var(--color-blue-light);  border-color: var(--color-blue); }

.opt-letter {
  font-size: 19px;
  font-weight: 900;
  color: var(--text-primary);
  line-height: 1;
  min-width: 16px;
}
.opt-label--correct .opt-letter  { color: var(--color-green); }
.opt-label--selected .opt-letter { color: var(--color-blue); }

.opt-correct-tag {
  font-size: 11px;
  font-weight: 800;
  color: var(--color-green);
}
.opt-sel-tag {
  font-size: 11px;
  font-weight: 700;
  color: var(--color-blue);
}

/* Frame — заполняет всё доступное место в карточке */
.opt-frame {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #f8fafc;
  min-height: 0;
}
.opt-render-wrap { position: relative; flex-shrink: 0; }
.opt-iframe {
  display: block;
  border: none;
  pointer-events: none;
}
.opt-error {
  color: #dc2626;
  font-size: 13px;
  font-weight: 600;
  padding: 16px;
  text-align: center;
}
.opt-skeleton {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%);
  background-size: 400% 100%;
  animation: shimmer 1.2s ease infinite;
}
@keyframes shimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
@media (prefers-reduced-motion: reduce) {
  .opt-skeleton { animation: none; background: #efefef; }
}
</style>
