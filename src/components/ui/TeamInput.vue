<script setup lang="ts">
defineProps<{ modelValue: string; index: number; canRemove: boolean }>()
defineEmits<{
  'update:modelValue': [v: string]
  remove: []
}>()
</script>
<template>
  <div class="team-row">
    <span class="num">{{ index + 1 }}</span>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      class="team-input"
      placeholder="Название команды"
      maxlength="30"
    />
    <button v-if="canRemove" class="remove-btn" @click="$emit('remove')" aria-label="Удалить">✕</button>
  </div>
</template>
<style scoped>
.team-row {
  display: flex;
  align-items: center;
  gap: 8px;
}
.num {
  width: 24px;
  text-align: right;
  color: var(--text-muted);
  font-size: 14px;
  font-weight: 600;
  flex-shrink: 0;
}
.team-input {
  flex: 1;
  padding: 10px 14px;
  border: 2px solid var(--border-color);
  border-radius: var(--border-radius-sm);
  font-size: 15px;
  background: var(--bg-card);
  transition: border-color var(--transition-fast);
  outline: none;
}
.team-input:focus { border-color: var(--color-violet); }
.remove-btn {
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50%;
  background: #fee2e2;
  color: #dc2626;
  font-size: 14px;
  cursor: pointer;
  transition: background var(--transition-fast);
  flex-shrink: 0;
}
.remove-btn:hover { background: #fecaca; }
</style>
