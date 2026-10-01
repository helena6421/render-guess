<script setup lang="ts">
import type { Team } from '@/types'
import AppButton from '@/components/ui/AppButton.vue'

const props = defineProps<{
  explanation: string
  docUrl: string
  teams: Team[]
  confirmedWinnerId: string | null
  isLastQuestion: boolean
}>()

const emit = defineEmits<{
  confirm: [id: string | null]
  next: []
}>()
</script>

<template>
  <div class="reveal-panel">
    <div class="reveal-inner">
      <!-- Explanation -->
      <div class="explain-block">
        <span class="explain-icon">💡</span>
        <div class="explain-text">
          <p>{{ explanation }}</p>
          <a :href="docUrl" target="_blank" rel="noopener" class="doc-link">MDN →</a>
        </div>
      </div>

      <!-- Winner selection -->
      <div class="winner-block">
        <span class="winner-label">🎯 Кто ответил первым?</span>
        <div class="winner-btns">
          <button
            v-for="team in teams"
            :key="team.id"
            class="winner-btn"
            :class="{ 'winner-btn--active': confirmedWinnerId === team.id }"
            @click="emit('confirm', confirmedWinnerId === team.id ? null : team.id)"
          >
            {{ team.name }}
            <span class="winner-pts">{{ team.score }}</span>
          </button>
          <button
            class="winner-btn winner-btn--none"
            :class="{ 'winner-btn--active': confirmedWinnerId === null }"
            @click="emit('confirm', null)"
          >
            Никто
          </button>
        </div>
      </div>

      <!-- Next -->
      <AppButton size="sm" @click="emit('next')">
        {{ isLastQuestion ? '🏁 Завершить раунд' : '▶ Следующий вопрос' }}
      </AppButton>
      <p class="enter-hint">Enter</p>
    </div>
  </div>
</template>

<style scoped>
.reveal-panel {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  z-index: 10;
  padding: 8px;
}

.reveal-inner {
  background: var(--bg-card);
  border: var(--border-black3);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-hard-lg);
  padding: 12px 14px;
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

/* Explain */
.explain-block {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  flex: 1;
  min-width: 200px;
}
.explain-icon { font-size: 20px; flex-shrink: 0; margin-top: 2px; }
.explain-text { flex: 1; }
.explain-text p { font-size: 13px; line-height: 1.55; color: var(--text-secondary); }
.doc-link {
  display: inline-block;
  margin-top: 4px;
  font-size: 12px;
  font-weight: 700;
  color: var(--color-violet-bright);
}
.doc-link:hover { text-decoration: underline; }

/* Winner */
.winner-block {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}
.winner-label {
  font-size: 12px;
  font-weight: 800;
  color: var(--text-secondary);
  white-space: nowrap;
}
.winner-btns {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.winner-btn {
  padding: 4px 10px;
  border: var(--border-black);
  border-radius: var(--border-radius-sm);
  background: var(--bg-surface);
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  box-shadow: var(--shadow-hard-sm);
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}
.winner-btn:active { transform: translate(2px,2px); box-shadow: none; }
.winner-btn--active {
  background: var(--color-green-light);
  border-color: var(--color-green);
  box-shadow: 3px 3px 0 var(--color-green);
}
.winner-btn--none { color: var(--text-muted); }
.winner-pts {
  background: var(--color-violet-light);
  color: var(--color-violet-bright);
  border-radius: 6px;
  padding: 0 5px;
  font-size: 11px;
  font-weight: 900;
}

/* Next */
.enter-hint {
  font-size: 10px;
  color: var(--text-muted);
  text-align: center;
  margin-top: 2px;
  font-family: var(--font-mono);
}
</style>
