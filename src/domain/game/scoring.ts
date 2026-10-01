import type { Team } from '@/types'

/**
 * Начисляет 1 балл команде-победителю.
 * Возвращает новый массив команд с обновлённым счётом.
 * Если winnerId === null — ничего не меняет.
 */
export function awardPoint(teams: Team[], winnerId: string): Team[] {
  return teams.map((t) =>
    t.id === winnerId ? { ...t, score: t.score + 1 } : t,
  )
}

/**
 * Переносит балл от одной команды другой.
 * Используется при исправлении победителя до перехода к следующему вопросу.
 */
export function transferPoint(
  teams: Team[],
  fromId: string | null,
  toId: string | null,
): Team[] {
  return teams.map((t) => {
    if (t.id === fromId) return { ...t, score: Math.max(0, t.score - 1) }
    if (t.id === toId) return { ...t, score: t.score + 1 }
    return t
  })
}

/**
 * Сбрасывает счёт всех команд до нуля.
 */
export function resetScores(teams: Team[]): Team[] {
  return teams.map((t) => ({ ...t, score: 0 }))
}

/**
 * Возвращает команды-победители (может быть несколько при ничье).
 */
export function getWinners(teams: Team[]): Team[] {
  if (teams.length === 0) return []
  const maxScore = Math.max(...teams.map((t) => t.score))
  return teams.filter((t) => t.score === maxScore)
}
