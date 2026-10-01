<script setup lang="ts">
defineEmits<{ resume: [] }>()
</script>

<template>
  <div class="pause-overlay" @click="$emit('resume')">
    <div class="pause-card">
      <div class="pause-emoji">⏸️</div>
      <h2>Пауза</h2>
      <p>Нажмите <kbd>Space</kbd> или кликните, чтобы продолжить</p>
    </div>
  </div>
</template>

<style scoped>
.pause-overlay {
  position: absolute;
  inset: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: rgba(15, 15, 15, 0.82);
  backdrop-filter: blur(8px);
}

.pause-card {
  text-align: center;
  color: #fff;
  padding: 40px 56px;
  background: rgba(255,255,255,0.06);
  border: 3px solid rgba(255,255,255,0.2);
  border-radius: var(--border-radius-xl);
  box-shadow: 0 20px 60px rgba(0,0,0,0.4);
}
.pause-emoji { font-size: 64px; margin-bottom: 12px; }
h2 { font-size: 36px; font-weight: 900; margin-bottom: 10px; }
p  { font-size: 16px; opacity: 0.7; }
kbd {
  background: rgba(255,255,255,0.15);
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 6px;
  padding: 2px 8px;
  font-family: var(--font-mono);
  font-size: 14px;
}
</style>
