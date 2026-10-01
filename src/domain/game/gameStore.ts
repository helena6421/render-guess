import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type {
  GamePhase,
  Team,
  RoundQuestion,
  PersistedGameState,
  Difficulty,
} from '@/types'
import { allQuestions } from '@/data/questions'
import { buildRound } from './questionSelector'
import { awardPoint, transferPoint, resetScores, getWinners } from './scoring'
import { GAME_CONFIG, TOTAL_QUESTIONS } from './config'

const STORAGE_KEY = GAME_CONFIG.storageKey
const STATE_VERSION = GAME_CONFIG.stateVersion

// ─── helpers ─────────────────────────────────────────────────────────────────

function makeTeamId(): string {
  return `team-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
}

function emptyShownIds(): Record<Difficulty, string[]> {
  return { easy: [], medium: [], hard: [] }
}

// ─── store ───────────────────────────────────────────────────────────────────

export const useGameStore = defineStore('game', () => {
  // ── state ──────────────────────────────────────────────────────────────────

  const phase = ref<GamePhase>('setup')
  const teams = ref<Team[]>([
    { id: makeTeamId(), name: 'Команда 1', score: 0 },
    { id: makeTeamId(), name: 'Команда 2', score: 0 },
  ])
  const roundQuestions = ref<RoundQuestion[]>([])
  const currentIndex = ref(0)

  /** Timestamp (ms) запуска текущего вопроса. null = не запущен. */
  const startTimestamp = ref<number | null>(null)
  /** Остаток (ms) при паузе. */
  const pauseRemaining = ref<number | null>(null)

  /** Предварительный выбор ведущего ДО раскрытия */
  const pendingWinnerId = ref<string | null>(null)
  /** Подтверждённый победитель ПОСЛЕ раскрытия */
  const confirmedWinnerId = ref<string | null>(null)
  /** Были ли уже начислены очки за этот вопрос */
  const pointAwarded = ref(false)

  const shownQuestionIds = ref<Record<Difficulty, string[]>>(emptyShownIds())

  // ── computed ───────────────────────────────────────────────────────────────

  const currentQuestion = computed(() => roundQuestions.value[currentIndex.value] ?? null)
  const isLastQuestion = computed(() => currentIndex.value >= TOTAL_QUESTIONS - 1)
  const winners = computed(() => getWinners(teams.value))

  const timingMs = computed(() => {
    if (!currentQuestion.value) return 25_000
    const diff = currentQuestion.value.question.difficulty
    return GAME_CONFIG.timingSeconds[diff] * 1000
  })

  // ── team management ────────────────────────────────────────────────────────

  function addTeam() {
    if (teams.value.length >= GAME_CONFIG.maxTeams) return
    const n = teams.value.length + 1
    teams.value.push({ id: makeTeamId(), name: `Команда ${n}`, score: 0 })
    saveState()
  }

  function removeTeam(id: string) {
    if (teams.value.length <= GAME_CONFIG.minTeams) return
    teams.value = teams.value.filter((t) => t.id !== id)
    saveState()
  }

  function renameTeam(id: string, name: string) {
    const t = teams.value.find((t) => t.id === id)
    if (t) t.name = name
    saveState()
  }

  // ── game lifecycle ─────────────────────────────────────────────────────────

  function startGame() {
    // Каждый новый раунд начинается с нулевого счёта
    teams.value = resetScores(teams.value)

    const { roundQuestions: rq, updatedShownIds } = buildRound(
      allQuestions,
      shownQuestionIds.value,
    )
    roundQuestions.value = rq
    shownQuestionIds.value = updatedShownIds
    currentIndex.value = 0
    pendingWinnerId.value = null
    confirmedWinnerId.value = null
    pointAwarded.value = false
    phase.value = 'loading'
    saveState()
  }

  function onLoadingComplete() {
    phase.value = 'question'
    startTimestamp.value = Date.now()
    pauseRemaining.value = null
    saveState()
  }

  function onTimeUp() {
    if (phase.value !== 'question') return
    phase.value = 'revealed'
    startTimestamp.value = null

    // Если ведущий уже выбрал команду до раскрытия — переносим как confirmed
    if (pendingWinnerId.value && !confirmedWinnerId.value) {
      confirmedWinnerId.value = pendingWinnerId.value
      if (!pointAwarded.value) {
        teams.value = awardPoint(teams.value, confirmedWinnerId.value)
        pointAwarded.value = true
      }
    }
    saveState()
  }

  function togglePause() {
    if (phase.value === 'question') {
      // → пауза
      const elapsed = startTimestamp.value ? Date.now() - startTimestamp.value : 0
      pauseRemaining.value = Math.max(0, timingMs.value - elapsed)
      startTimestamp.value = null
      phase.value = 'paused'
    } else if (phase.value === 'paused') {
      // → продолжение
      startTimestamp.value = Date.now()
      phase.value = 'question'
    }
    saveState()
  }

  /** Ведущий выбирает команду ВО ВРЕМЯ вопроса (предварительно) */
  function selectPendingWinner(teamId: string | null) {
    pendingWinnerId.value = teamId
    saveState()
  }

  /**
   * Ведущий подтверждает / меняет победителя ПОСЛЕ раскрытия.
   * Корректно переносит балл при смене.
   */
  function confirmWinner(teamId: string | null) {
    if (phase.value !== 'revealed') return

    const prev = confirmedWinnerId.value

    if (prev === teamId) return // ничего не изменилось

    if (pointAwarded.value && prev !== null) {
      // Перенести балл
      teams.value = transferPoint(teams.value, prev, teamId)
      if (teamId === null) pointAwarded.value = false
    } else if (teamId !== null && !pointAwarded.value) {
      teams.value = awardPoint(teams.value, teamId)
      pointAwarded.value = true
    } else if (teamId === null) {
      // Убрать ранее начисленный балл
      if (pointAwarded.value && prev) {
        teams.value = transferPoint(teams.value, prev, null)
        pointAwarded.value = false
      }
    }

    confirmedWinnerId.value = teamId
    saveState()
  }

  function nextQuestion() {
    if (phase.value !== 'revealed') return

    if (isLastQuestion.value) {
      phase.value = 'results'
      saveState()
      return
    }

    currentIndex.value++
    pendingWinnerId.value = null
    confirmedWinnerId.value = null
    pointAwarded.value = false
    startTimestamp.value = null
    pauseRemaining.value = null
    phase.value = 'loading'
    saveState()
  }

  function newRound() {
    teams.value = resetScores(teams.value)
    startGame()
  }

  function backToSetup() {
    // Сбрасываем очки при выходе из раунда
    teams.value = resetScores(teams.value)
    phase.value = 'setup'
    roundQuestions.value = []
    currentIndex.value = 0
    pendingWinnerId.value = null
    confirmedWinnerId.value = null
    pointAwarded.value = false
    startTimestamp.value = null
    pauseRemaining.value = null
    saveState()
  }

  // ── persistence ────────────────────────────────────────────────────────────

  function saveState() {
    const state: PersistedGameState = {
      version: STATE_VERSION,
      phase: phase.value,
      teams: teams.value,
      roundQuestions: roundQuestions.value,
      currentIndex: currentIndex.value,
      startTimestamp: startTimestamp.value,
      pauseRemaining: pauseRemaining.value,
      pendingWinnerId: pendingWinnerId.value,
      confirmedWinnerId: confirmedWinnerId.value,
      pointAwarded: pointAwarded.value,
      shownQuestionIds: shownQuestionIds.value,
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      // ignore storage errors
    }
  }

  function loadState(): boolean {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return false
      const state = JSON.parse(raw) as PersistedGameState
      if (state.version !== STATE_VERSION) return false
      if (!state.teams || state.teams.length < 2) return false

      phase.value = state.phase
      teams.value = state.teams
      roundQuestions.value = state.roundQuestions ?? []
      currentIndex.value = state.currentIndex ?? 0
      pendingWinnerId.value = state.pendingWinnerId ?? null
      confirmedWinnerId.value = state.confirmedWinnerId ?? null
      pointAwarded.value = state.pointAwarded ?? false
      shownQuestionIds.value = state.shownQuestionIds ?? emptyShownIds()

      // Незавершённый вопрос восстанавливаем на паузе
      if (state.phase === 'question' && state.startTimestamp !== null) {
        const elapsed = Date.now() - state.startTimestamp
        const diff = roundQuestions.value[state.currentIndex ?? 0]?.question.difficulty ?? 'easy'
        const total = GAME_CONFIG.timingSeconds[diff] * 1000
        const remaining = total - elapsed
        if (remaining <= 0) {
          // Время уже истекло
          phase.value = 'revealed'
          startTimestamp.value = null
          pauseRemaining.value = null
          // Начислить балл если был pending
          if (pendingWinnerId.value && !pointAwarded.value) {
            confirmedWinnerId.value = pendingWinnerId.value
            teams.value = awardPoint(teams.value, confirmedWinnerId.value)
            pointAwarded.value = true
          }
        } else {
          // Ставим на паузу с сохранённым остатком
          phase.value = 'paused'
          pauseRemaining.value = remaining
          startTimestamp.value = null
        }
      } else {
        startTimestamp.value = null
        pauseRemaining.value = state.pauseRemaining ?? null
      }

      return true
    } catch {
      return false
    }
  }

  function clearStorage() {
    localStorage.removeItem(STORAGE_KEY)
  }

  return {
    // state
    phase,
    teams,
    roundQuestions,
    currentIndex,
    startTimestamp,
    pauseRemaining,
    pendingWinnerId,
    confirmedWinnerId,
    pointAwarded,
    shownQuestionIds,
    // computed
    currentQuestion,
    isLastQuestion,
    winners,
    timingMs,
    // actions
    addTeam,
    removeTeam,
    renameTeam,
    startGame,
    onLoadingComplete,
    onTimeUp,
    togglePause,
    selectPendingWinner,
    confirmWinner,
    nextQuestion,
    newRound,
    backToSetup,
    saveState,
    loadState,
    clearStorage,
  }
})
