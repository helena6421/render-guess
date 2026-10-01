<script setup lang="ts">
import { watch, computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useGameStore } from '@/domain/game/gameStore'
import { useTimer } from '@/composables/useTimer'
import { useHotkeys } from '@/composables/useHotkeys'
import { useFullscreen } from '@/composables/useFullscreen'
import { GAME_CONFIG, DIFFICULTY_LABELS, DIFFICULTY_COLORS } from '@/domain/game/config'
import type { OptionLabel } from '@/types'
import GameTimer from './GameTimer.vue'
import Scoreboard from './Scoreboard.vue'
import CodeDisplay from './CodeDisplay.vue'
import OptionGrid from './OptionGrid.vue'
import PauseOverlay from './PauseOverlay.vue'
import RevealPanel from './RevealPanel.vue'

const store  = useGameStore()
const router = useRouter()
const { isFullscreen, toggle: toggleFs } = useFullscreen()

// Подтверждение выхода из раунда
const showExitConfirm = ref(false)

function exitRound() {
  // Ставим на паузу если идёт вопрос
  if (store.phase === 'question') {
    const remaining = timer.pause()
    store.pauseRemaining = remaining
    store.phase = 'paused'
    store.saveState()
  }
  showExitConfirm.value = true
}
function confirmExit() {
  timer.stop()
  store.backToSetup()  // сбрасывает очки и возвращает в setup
  router.push('/')
}
function cancelExit() {
  showExitConfirm.value = false
  // Если была пауза для выхода — продолжаем
  if (store.phase === 'paused') {
    store.togglePause()
    timer.resume(store.pauseRemaining ?? totalSeconds.value * 1000)
  }
}

const timer = useTimer(() => { store.onTimeUp() })

// Какой вариант выбрал ведущий, кликнув по карточке
const selectedOptionLabel = ref<OptionLabel | null>(null)

const totalSeconds = computed(() => {
  const diff = store.currentQuestion?.question.difficulty ?? 'easy'
  return GAME_CONFIG.timingSeconds[diff]
})

watch(
  () => store.phase,
  (phase, prev) => {
    if (phase === 'question' && prev === 'loading') {
      selectedOptionLabel.value = null
      timer.start(totalSeconds.value * 1000)
    } else if (phase === 'question' && prev === 'paused') {
      timer.resume(store.pauseRemaining ?? totalSeconds.value * 1000)
    } else if (phase === 'revealed') {
      timer.stop()
    } else if (phase === 'loading') {
      selectedOptionLabel.value = null
      timer.reset()
    }
  }
)

function onAllLoaded() {
  if (store.phase === 'loading') store.onLoadingComplete()
}

function togglePause() {
  if (store.phase === 'question') {
    const remaining = timer.pause()
    store.pauseRemaining = remaining
    store.phase = 'paused'
    store.saveState()
  } else if (store.phase === 'paused') {
    store.togglePause()
    timer.resume(store.pauseRemaining ?? totalSeconds.value * 1000)
  }
}

function handleNext() {
  if (store.phase === 'revealed') store.nextQuestion()
}

/**
 * Клик по карточке варианта:
 * - Во время вопроса: ОСТАНАВЛИВАЕТ таймер и немедленно раскрывает ответ
 * - После раскрытия: просто помечает выбранный вариант
 */
function onOptionClick(label: OptionLabel) {
  if (store.phase === 'question') {
    selectedOptionLabel.value = label
    timer.stop()
    store.onTimeUp()   // немедленное раскрытие правильного ответа
  } else if (store.phase === 'revealed') {
    selectedOptionLabel.value = selectedOptionLabel.value === label ? null : label
  }
}

// Горячие клавиши
useHotkeys({
  Space: togglePause,
  Enter: handleNext,
  Digit1: () => store.phase === 'question' && store.selectPendingWinner(store.teams[0]?.id),
  Digit2: () => store.phase === 'question' && store.selectPendingWinner(store.teams[1]?.id),
  Digit3: () => store.phase === 'question' && store.selectPendingWinner(store.teams[2]?.id),
  Digit4: () => store.phase === 'question' && store.selectPendingWinner(store.teams[3]?.id),
  Digit5: () => store.phase === 'question' && store.selectPendingWinner(store.teams[4]?.id),
  Digit6: () => store.phase === 'question' && store.selectPendingWinner(store.teams[5]?.id),
  Digit7: () => store.phase === 'question' && store.selectPendingWinner(store.teams[6]?.id),
  Digit8: () => store.phase === 'question' && store.selectPendingWinner(store.teams[7]?.id),
})

const q = computed(() => store.currentQuestion)
const diffLabel = computed(() => DIFFICULTY_LABELS[q.value?.question.difficulty ?? 'easy'])
const diffColor = computed(() => DIFFICULTY_COLORS[q.value?.question.difficulty ?? 'easy'])
const DIFF_EMOJI: Record<string, string> = { easy: '🟢', medium: '🟡', hard: '🔴' }
const diffEmoji = computed(() => DIFF_EMOJI[q.value?.question.difficulty ?? 'easy'])

const progressPct = computed(() =>
  totalSeconds.value > 0 ? (timer.remainingSeconds.value / totalSeconds.value) * 100 : 100
)
</script>

<template>
  <div class="game-board" v-if="q">

    <!-- ── HEADER ─────────────────────────────────────────────────────────── -->
    <header class="board-header">
      <div class="header-left">
        <span class="q-num">{{ store.currentIndex + 1 }}<span class="q-total"> / 10</span></span>
        <span class="diff-badge" :style="{ background: diffColor }">
          {{ diffEmoji }} {{ diffLabel }}
        </span>
        <span class="q-topic">{{ q.question.topic }}</span>
      </div>

      <div class="progress-track">
        <div
          class="progress-fill"
          :class="{ 'progress-fill--urgent': timer.remainingSeconds.value <= 10 && store.phase === 'question' }"
          :style="{ width: progressPct + '%' }"
        />
      </div>

      <div class="header-right">
        <GameTimer
          :remainingSeconds="timer.remainingSeconds.value"
          :totalSeconds="totalSeconds"
          :paused="store.phase === 'paused'"
        />
        <button class="icon-btn" @click="togglePause" :title="store.phase === 'paused' ? 'Продолжить (Space)' : 'Пауза (Space)'">
          {{ store.phase === 'paused' ? '▶' : '⏸' }}
        </button>
        <button class="icon-btn" @click="toggleFs" :title="isFullscreen ? 'Выйти' : 'Полный экран'">⛶</button>
        <button class="icon-btn icon-btn--exit" @click="exitRound" title="Выйти из раунда (очки сбросятся)">✕</button>
      </div>
    </header>

    <!-- ── EXIT CONFIRM OVERLAY ──────────────────────────────────────────────── -->
    <Transition name="fade">
      <div v-if="showExitConfirm" class="exit-overlay">
        <div class="exit-card">
          <div class="exit-icon">🚪</div>
          <h3>Выйти из раунда?</h3>
          <p>Все очки команд будут сброшены до нуля.</p>
          <div class="exit-btns">
            <button class="exit-btn exit-btn--danger" @click="confirmExit">Да, выйти</button>
            <button class="exit-btn exit-btn--cancel" @click="cancelExit">Отмена</button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- ── BODY ────────────────────────────────────────────────────────────── -->
    <div class="board-body">

      <!-- LEFT: Code + Key prop banner + Scoreboard -->
      <aside class="board-left">
        <div class="code-wrapper">
          <CodeDisplay
            :html="q.question.displayHtml"
            :css="q.question.displayCss"
            :keyProps="q.question.keyProps"
          />
        </div>
        <div class="sidebar-scoreboard">
          <Scoreboard
            :teams="store.teams"
            :pendingWinnerId="store.pendingWinnerId"
            :confirmedWinnerId="store.confirmedWinnerId"
            :interactive="store.phase === 'question'"
            @select="store.selectPendingWinner"
          />
        </div>
      </aside>

      <!-- RIGHT: 2×2 grid -->
      <main class="board-right">
        <div v-if="store.phase === 'loading'" class="loading-overlay">
          <span class="loading-spin">⟳</span> Загрузка вариантов…
        </div>

        <OptionGrid
          :options="q.options"
          :renderWidth="q.question.renderWidth"
          :renderHeight="q.question.renderHeight"
          :correctLabel="q.correctLabel"
          :revealed="store.phase === 'revealed'"
          :selectedLabel="selectedOptionLabel"
          :interactive="store.phase === 'question' || store.phase === 'revealed'"
          @allLoaded="onAllLoaded"
          @optionClick="onOptionClick"
        />

        <!-- Reveal panel slides up from bottom -->
        <Transition name="reveal-slide">
          <RevealPanel
            v-if="store.phase === 'revealed'"
            :explanation="q.question.explanation"
            :docUrl="q.question.docUrl"
            :teams="store.teams"
            :confirmedWinnerId="store.confirmedWinnerId"
            :isLastQuestion="store.isLastQuestion"
            @confirm="store.confirmWinner"
            @next="store.nextQuestion"
          />
        </Transition>
      </main>
    </div>

    <!-- Pause overlay -->
    <Transition name="fade">
      <PauseOverlay v-if="store.phase === 'paused'" @resume="togglePause" />
    </Transition>
  </div>
</template>

<style scoped>
.game-board {
  height: 100vh;
  display: grid;
  grid-template-rows: 52px 1fr;
  overflow: hidden;
  position: relative;
  background: var(--bg-page);
}

/* ── Header ─────────────────────────────────────────────────────────────── */
.board-header {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 12px;
  padding: 0 12px;
  background: var(--bg-card);
  border-bottom: var(--border-black);
  z-index: 5;
}
.header-left  { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }
.header-right { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }

.q-num   { font-size: 20px; font-weight: 900; letter-spacing: -1px; }
.q-total { font-size: 13px; font-weight: 600; color: var(--text-muted); }
.diff-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 10px;
  border-radius: 999px;
  border: var(--border-black);
  font-size: 12px;
  font-weight: 800;
  color: white;
  box-shadow: var(--shadow-hard-sm);
  text-shadow: 0 1px 2px rgba(0,0,0,0.25);
}
.q-topic {
  font-size: 12px;
  color: var(--text-muted);
  font-weight: 500;
  padding: 2px 8px;
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: 6px;
}

.progress-track {
  height: 7px;
  background: #e5e7eb;
  border-radius: 999px;
  overflow: hidden;
  border: 1px solid #d1d5db;
}
.progress-fill {
  height: 100%;
  background: var(--color-violet-bright);
  border-radius: 999px;
  transition: width 0.3s linear, background 0.2s;
}
.progress-fill--urgent { background: #dc2626; }

.icon-btn {
  width: 34px; height: 34px;
  display: flex; align-items: center; justify-content: center;
  border: var(--border-black);
  border-radius: var(--border-radius-sm);
  background: var(--bg-card);
  font-size: 15px;
  cursor: pointer;
  box-shadow: var(--shadow-hard-sm);
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}
.icon-btn:active { transform: translate(2px, 2px); box-shadow: none; }
.icon-btn:hover  { background: var(--bg-surface); }
.icon-btn--exit  { border-color: #dc2626; color: #dc2626; }
.icon-btn--exit:hover { background: #fee2e2; }

/* ── Exit confirm overlay ──────────────────────────────────────────────── */
.exit-overlay {
  position: absolute;
  inset: 0; z-index: 30;
  background: rgba(15,15,15,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
}
.exit-card {
  background: var(--bg-card);
  border: var(--border-black3);
  border-radius: var(--border-radius-xl);
  box-shadow: var(--shadow-hard-lg);
  padding: 32px 40px;
  text-align: center;
  max-width: 360px;
}
.exit-icon { font-size: 48px; margin-bottom: 12px; }
.exit-card h3 { font-size: 22px; font-weight: 900; margin-bottom: 8px; }
.exit-card p  { font-size: 14px; color: var(--text-secondary); margin-bottom: 20px; }
.exit-btns { display: flex; gap: 10px; justify-content: center; }
.exit-btn {
  padding: 10px 24px;
  border: var(--border-black);
  border-radius: var(--border-radius-md);
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: var(--shadow-hard-sm);
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}
.exit-btn:active { transform: translate(2px,2px); box-shadow: none; }
.exit-btn--danger { background: #dc2626; color: white; }
.exit-btn--danger:hover { background: #b91c1c; }
.exit-btn--cancel { background: var(--bg-card); }
.exit-btn--cancel:hover { background: var(--bg-surface); }

/* ── Body ───────────────────────────────────────────────────────────────── */
.board-body {
  display: grid;
  /*
    Left: код + табло — шире чтобы код читался крупно
    Right: сетка 2×2 вариантов — компактнее
  */
  grid-template-columns: 520px 1fr;
  overflow: hidden;
}

/* ── Left ───────────────────────────────────────────────────────────────── */
.board-left {
  display: grid;
  grid-template-rows: 1fr auto;
  border-right: var(--border-black);
  overflow: hidden;
  background: var(--bg-card);
}
.code-wrapper {
  overflow-y: auto;
  overflow-x: hidden;
  padding: 12px;
  min-height: 0;
}
.sidebar-scoreboard {
  border-top: var(--border-black);
  padding: 8px 10px;
  background: var(--bg-surface);
}

/* ── Right (options) ─────────────────────────────────────────────────────── */
.board-right {
  position: relative;
  overflow: hidden;
  padding: 8px;
  display: flex;
  flex-direction: column;
}

.loading-overlay {
  position: absolute;
  inset: 0; z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: rgba(253,246,227,0.88);
  font-size: 16px;
  font-weight: 600;
  color: var(--text-secondary);
}
.loading-spin { font-size: 22px; animation: spin 1s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
@media (prefers-reduced-motion: reduce) { .loading-spin { animation: none; } }

/* Transitions */
.reveal-slide-enter-active { transition: transform 0.28s ease, opacity 0.28s ease; }
.reveal-slide-leave-active { transition: transform 0.2s ease, opacity 0.2s ease; }
.reveal-slide-enter-from,
.reveal-slide-leave-to     { transform: translateY(40px); opacity: 0; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (max-width: 900px) {
  .board-body { grid-template-columns: 1fr; grid-template-rows: auto 1fr; }
  .board-left { border-right: none; border-bottom: var(--border-black); max-height: 38vh; }
}
</style>
