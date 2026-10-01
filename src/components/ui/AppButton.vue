<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'success'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  fullWidth?: boolean
}>()
</script>

<template>
  <button
    :class="[
      'app-btn',
      `app-btn--${variant ?? 'primary'}`,
      `app-btn--${size ?? 'md'}`,
      { 'app-btn--full': fullWidth }
    ]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<style scoped>
.app-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border: var(--border-black);
  border-radius: var(--border-radius-md);
  font-weight: 800;
  font-family: inherit;
  cursor: pointer;
  white-space: nowrap;
  user-select: none;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
  letter-spacing: -0.01em;
}
.app-btn:active:not(:disabled) {
  transform: translate(2px, 2px);
  box-shadow: none !important;
}
.app-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* Sizes */
.app-btn--sm  { padding: 6px 14px;  font-size: 13px; box-shadow: var(--shadow-hard-sm); }
.app-btn--md  { padding: 10px 22px; font-size: 15px; box-shadow: var(--shadow-hard-md); }
.app-btn--lg  { padding: 13px 32px; font-size: 17px; box-shadow: var(--shadow-hard-md); }
.app-btn--full{ width: 100%; }

/* Variants */
.app-btn--primary {
  background: var(--color-violet-bright);
  color: #fff;
}
.app-btn--primary:hover:not(:disabled) { background: var(--color-violet); }

.app-btn--secondary {
  background: var(--bg-card);
  color: var(--text-primary);
}
.app-btn--secondary:hover:not(:disabled) { background: var(--bg-surface); }

.app-btn--success {
  background: var(--color-green);
  color: #fff;
}
.app-btn--success:hover:not(:disabled) { background: #15803d; }

.app-btn--ghost {
  background: transparent;
  color: var(--text-secondary);
  border-color: var(--border-color);
  box-shadow: none;
}
.app-btn--ghost:hover:not(:disabled) { background: rgba(0,0,0,0.04); }

.app-btn--danger {
  background: #dc2626;
  color: #fff;
}
.app-btn--danger:hover:not(:disabled) { background: #b91c1c; }
</style>
