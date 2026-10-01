<script setup lang="ts">
import type { Team } from '@/types'

const props = defineProps<{
  teams: Team[]
  pendingWinnerId?:   string | null
  confirmedWinnerId?: string | null
  interactive?: boolean
}>()

const emit = defineEmits<{ select: [id: string | null] }>()

function toggle(id: string) {
  if (!props.interactive) return
  emit('select', props.pendingWinnerId === id ? null : id)
}

const COLORS = [
  '#7c3aed', '#db2777', '#059669', '#d97706',
  '#1d4ed8', '#dc2626', '#0891b2', '#65a30d',
]
</script>

<template>
  <div class="scoreboard">
    <div class="scoreboard-title">🏆 Команды</div>
    <div
      v-for="(team, i) in teams"
      :key="team.id"
      class="team-row"
      :class="{
        'team-row--pending':     pendingWinnerId   === team.id,
        'team-row--confirmed':   confirmedWinnerId === team.id,
        'team-row--interactive': interactive,
      }"
      @click="toggle(team.id)"
    >
      <!-- Цветная точка команды -->
      <span class="team-dot" :style="{ background: COLORS[i % COLORS.length] }" />

      <!-- Номер клавиши -->
      <span v-if="interactive" class="team-key">{{ i + 1 }}</span>

      <span class="team-name">{{ team.name }}</span>
      <span class="team-score" :style="{ color: COLORS[i % COLORS.length] }">{{ team.score }}</span>

      <span v-if="confirmedWinnerId === team.id" class="team-status">✓</span>
      <span v-else-if="pendingWinnerId === team.id" class="team-status team-status--pending">•</span>
    </div>
  </div>
</template>

<style scoped>
.scoreboard {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.scoreboard-title {
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  margin-bottom: 2px;
}

.team-row {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 8px;
  border-radius: var(--border-radius-sm);
  border: 2px solid transparent;
  background: var(--bg-card);
  transition: all var(--transition-fast);
  font-size: 13px;
}
.team-row--interactive { cursor: pointer; }
.team-row--interactive:hover { background: var(--bg-surface); border-color: #d1d5db; }
.team-row--pending   { border-color: var(--color-orange); background: var(--color-orange-light); }
.team-row--confirmed { border-color: var(--color-green);  background: var(--color-green-light); }

.team-dot {
  width: 9px; height: 9px;
  border-radius: 50%;
  flex-shrink: 0;
  border: 1px solid rgba(0,0,0,0.15);
}
.team-key {
  width: 16px; height: 16px;
  background: #e5e7eb;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  flex-shrink: 0;
}
.team-name  { flex: 1; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.team-score { font-size: 18px; font-weight: 900; min-width: 20px; text-align: right; }
.team-status        { font-size: 14px; color: var(--color-green); }
.team-status--pending { color: var(--color-orange); }
</style>
