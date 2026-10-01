<script setup lang="ts">
defineProps<{ color?: string }>()
</script>
<template>
  <span class="badge" :style="color ? `background:${color}` : ''"><slot /></span>
</template>
<style scoped>
.badge {
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  color: white;
  background: var(--color-violet);
  letter-spacing: 0.02em;
}
</style>
