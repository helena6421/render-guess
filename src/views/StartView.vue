<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useGameStore } from '@/domain/game/gameStore'
import { GAME_CONFIG } from '@/domain/game/config'
import AppButton from '@/components/ui/AppButton.vue'
import TeamInput from '@/components/ui/TeamInput.vue'

const router = useRouter()
const store  = useGameStore()

const errors = ref<string[]>([])

function validate(): boolean {
  errors.value = []
  const names = store.teams.map(t => t.name.trim())
  names.forEach((n, i) => { if (!n) errors.value.push(`Команда ${i + 1}: введите название`) })
  const dupes = names.filter((n, i) => n && names.indexOf(n) !== i)
  if (dupes.length) errors.value.push(`Одинаковые названия: ${[...new Set(dupes)].join(', ')}`)
  return errors.value.length === 0
}

function startGame() {
  if (!validate()) return
  store.startGame()
  router.push('/game')
}

const canAdd    = computed(() => store.teams.length < GAME_CONFIG.maxTeams)
const canRemove = computed(() => store.teams.length > GAME_CONFIG.minTeams)

const TIMINGS = [
  { key: 'easy',   label: 'Лёгкий',   emoji: '🟢', time: '0:25', n: GAME_CONFIG.questionsPerRound.easy,   bg: '#dcfce7', border: '#16a34a' },
  { key: 'medium', label: 'Средний',   emoji: '🟡', time: '0:50', n: GAME_CONFIG.questionsPerRound.medium, bg: '#fef9c3', border: '#ca8a04' },
  { key: 'hard',   label: 'Сложный',   emoji: '🔴', time: '1:30', n: GAME_CONFIG.questionsPerRound.hard,   bg: '#fee2e2', border: '#dc2626' },
]
</script>

<template>
  <!-- page is scrollable because it's the setup screen, not the game -->
  <div class="start-page">
    <!-- Blobs -->
    <div class="bg-blob" style="width:520px;height:520px;background:#c4b5fd;top:-160px;left:-180px" />
    <div class="bg-blob" style="width:400px;height:400px;background:#fbcfe8;bottom:-100px;right:-120px" />
    <div class="bg-blob" style="width:300px;height:300px;background:#fde68a;top:40%;left:60%" />

    <div class="start-wrap">
      <!-- Hero -->
      <header class="hero">
        <div class="hero-sticker">🎯 CSS Квиз</div>
        <h1 class="hero-title">Угадай<br><span class="hero-accent">рендер</span></h1>
        <p class="hero-sub">
          Смотрим на HTML/CSS — угадываем,<br>
          какой скриншот настоящий. Побеждает команда с лучшим CSS-чутьём!
        </p>
      </header>

      <!-- Rules -->
      <div class="card">
        <h2 class="card-title">📋 Правила игры</h2>
        <ul class="rules-list">
          <li>Ведущий показывает код и 4 варианта (A, B, C, D)</li>
          <li>Команды обсуждают и выкрикивают правильный вариант</li>
          <li>Кто первым угадал — получает <strong>1 балл</strong></li>
          <li>10 вопросов: 3 лёгких → 4 средних → 3 сложных</li>
        </ul>

        <div class="timing-row">
          <div
            v-for="t in TIMINGS"
            :key="t.key"
            class="timing-chip"
            :style="{ background: t.bg, borderColor: t.border }"
          >
            <span class="timing-emoji">{{ t.emoji }}</span>
            <span class="timing-label">{{ t.label }}</span>
            <span class="timing-time">{{ t.time }}</span>
            <span class="timing-count">× {{ t.n }}</span>
          </div>
        </div>
      </div>

      <!-- Teams -->
      <div class="card">
        <h2 class="card-title">👥 Команды</h2>
        <div class="team-list">
          <TeamInput
            v-for="(team, i) in store.teams"
            :key="team.id"
            :index="i"
            :modelValue="team.name"
            :canRemove="canRemove"
            @update:modelValue="store.renameTeam(team.id, $event)"
            @remove="store.removeTeam(team.id)"
          />
        </div>
        <div class="team-footer">
          <AppButton variant="secondary" size="sm" :disabled="!canAdd" @click="store.addTeam()">
            ＋ Добавить команду
          </AppButton>
          <span class="team-count">{{ store.teams.length }} / {{ GAME_CONFIG.maxTeams }}</span>
        </div>
        <div v-if="errors.length" class="errors">
          <p v-for="e in errors" :key="e">⚠ {{ e }}</p>
        </div>
      </div>

      <!-- Start -->
      <AppButton size="lg" :fullWidth="true" @click="startGame">
        🚀 Начать игру!
      </AppButton>
    </div>
  </div>
</template>

<style scoped>
/* StartView МОЖЕТ скроллиться — это экран настройки, не игровой */
.start-page {
  min-height: 100vh;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  padding: 48px 16px 80px;
  position: relative;
}

.start-wrap {
  width: 100%;
  max-width: 620px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  z-index: 1;
}

/* Hero */
.hero { text-align: center; padding-bottom: 4px; }

.hero-sticker {
  display: inline-block;
  background: #fef9c3;
  border: var(--border-black);
  border-radius: 999px;
  padding: 6px 18px;
  font-weight: 800;
  font-size: 14px;
  box-shadow: var(--shadow-hard-sm);
  margin-bottom: 16px;
}

.hero-title {
  font-size: clamp(44px, 8vw, 68px);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -2px;
  margin-bottom: 14px;
}
.hero-accent {
  color: var(--color-violet-bright);
  position: relative;
  display: inline-block;
}
.hero-accent::after {
  content: '';
  position: absolute;
  left: 0; right: 0; bottom: -4px;
  height: 5px;
  background: var(--color-pink);
  border-radius: 3px;
}

.hero-sub {
  font-size: 17px;
  line-height: 1.55;
  color: var(--text-secondary);
}

/* Cards */
.card {
  background: var(--bg-card);
  border: var(--border-black);
  border-radius: var(--border-radius-xl);
  padding: 22px 24px;
  box-shadow: var(--shadow-hard-md);
}
.card-title {
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 14px;
  letter-spacing: -0.02em;
}

/* Rules */
.rules-list {
  padding-left: 20px;
  margin: 0 0 18px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  font-size: 15px;
  color: var(--text-secondary);
}

.timing-row {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.timing-chip {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border: 2px solid;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 700;
  box-shadow: var(--shadow-hard-sm);
}
.timing-emoji { font-size: 15px; }
.timing-time  { font-size: 15px; font-weight: 900; }
.timing-count { opacity: 0.6; font-size: 12px; }

/* Teams */
.team-list   { display: flex; flex-direction: column; gap: 8px; margin-bottom: 14px; }
.team-footer { display: flex; align-items: center; gap: 12px; }
.team-count  { font-size: 13px; color: var(--text-muted); }

.errors { margin-top: 12px; display: flex; flex-direction: column; gap: 4px; }
.errors p { font-size: 13px; color: #dc2626; font-weight: 600; }
</style>
