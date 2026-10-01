import type { GameConfig } from '@/types'

/**
 * Единая конфигурация игры.
 * Числа длительности хранятся только здесь — не дублируются в компонентах.
 */
export const GAME_CONFIG: GameConfig = {
  timingSeconds: {
    easy: 25,
    medium: 50,
    hard: 90,
  },
  questionsPerRound: {
    easy: 3,
    medium: 4,
    hard: 3,
  },
  minTeams: 2,
  maxTeams: 8,
  stateVersion: 1,
  storageKey: 'guess-render-state',
}

export const DIFFICULTY_LABELS: Record<string, string> = {
  easy: 'Лёгкий',
  medium: 'Средний',
  hard: 'Сложный',
}

export const DIFFICULTY_COLORS: Record<string, string> = {
  easy: 'var(--color-difficulty-easy)',
  medium: 'var(--color-difficulty-medium)',
  hard: 'var(--color-difficulty-hard)',
}

/** Общее количество вопросов за раунд */
export const TOTAL_QUESTIONS =
  GAME_CONFIG.questionsPerRound.easy +
  GAME_CONFIG.questionsPerRound.medium +
  GAME_CONFIG.questionsPerRound.hard

/** Порядок уровней сложности внутри раунда */
export const ROUND_ORDER: Array<'easy' | 'medium' | 'hard'> = [
  ...Array(GAME_CONFIG.questionsPerRound.easy).fill('easy'),
  ...Array(GAME_CONFIG.questionsPerRound.medium).fill('medium'),
  ...Array(GAME_CONFIG.questionsPerRound.hard).fill('hard'),
] as Array<'easy' | 'medium' | 'hard'>

/** Форматирует секунды в строку М:СС */
export function formatTime(totalSeconds: number): string {
  const clamped = Math.max(0, Math.floor(totalSeconds))
  const m = Math.floor(clamped / 60)
  const s = clamped % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}
