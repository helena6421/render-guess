<script setup lang="ts">
import { ref, watch } from 'vue'
import type { ShuffledOption, OptionLabel } from '@/types'
import OptionCard from './OptionCard.vue'

const props = defineProps<{
  options: ShuffledOption[]
  renderWidth: number
  renderHeight: number
  correctLabel?: string
  revealed?: boolean
  selectedLabel?: OptionLabel | null
  interactive?: boolean
}>()

const emit = defineEmits<{
  allLoaded: []
  loadError: []
  optionClick: [label: OptionLabel]
}>()

const loadedCount  = ref(0)
const errorOccurred = ref(false)

watch(() => props.options, () => {
  loadedCount.value = 0
  errorOccurred.value = false
}, { immediate: true })

function onLoaded() {
  loadedCount.value++
  if (loadedCount.value >= props.options.length) emit('allLoaded')
}
function onError()  { errorOccurred.value = true; emit('loadError') }
function onClick(label: OptionLabel) { emit('optionClick', label) }
</script>

<template>
  <div class="opt-grid">
    <OptionCard
      v-for="opt in options"
      :key="opt.variantId"
      :option="opt"
      :renderWidth="renderWidth"
      :renderHeight="renderHeight"
      :revealed="revealed"
      :isCorrect="revealed && opt.label === correctLabel"
      :isSelected="selectedLabel === opt.label"
      :interactive="interactive"
      @loaded="onLoaded"
      @error="onError"
      @click="onClick(opt.label)"
    />
  </div>
</template>

<style scoped>
.opt-grid {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 8px;
  min-height: 0;
}
@media (max-width: 700px) {
  .opt-grid {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }
}
</style>
