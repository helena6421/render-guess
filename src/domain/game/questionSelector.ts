import type { Difficulty, Question, RoundQuestion, ShuffledOption, OptionLabel } from '@/types'
import { GAME_CONFIG, ROUND_ORDER } from './config'

const LABELS: OptionLabel[] = ['A', 'B', 'C', 'D']

/**
 * Перемешивает массив на месте (Fisher–Yates).
 */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/**
 * Выбирает count вопросов заданной сложности из пула,
 * предпочитая ещё не показанные.
 */
function pickQuestions(
  pool: Question[],
  difficulty: Difficulty,
  count: number,
  shown: string[],
): Question[] {
  const candidates = pool.filter((q) => q.difficulty === difficulty)
  if (candidates.length === 0) return []

  const unseen = candidates.filter((q) => !shown.includes(q.id))
  const seen = candidates.filter((q) => shown.includes(q.id))

  // Предпочитаем unseen, добираем из seen если не хватает
  const fromUnseen = shuffle(unseen)
  const fromSeen = shuffle(seen)
  const combined = [...fromUnseen, ...fromSeen]

  return combined.slice(0, count)
}

/**
 * Перемешивает варианты вопроса и возвращает RoundQuestion.
 */
function buildRoundQuestion(question: Question): RoundQuestion {
  const shuffled = shuffle([...question.variants])

  const options = shuffled.map((variant, i) => ({
    label: LABELS[i] as OptionLabel,
    variantId: variant.id,
    html: variant.html,
    css: variant.css,
  })) as [ShuffledOption, ShuffledOption, ShuffledOption, ShuffledOption]

  const correctOption = options.find((o) => o.variantId === question.correctVariantId)!

  return {
    question,
    options,
    correctLabel: correctOption.label,
  }
}

/**
 * Составляет список из 10 вопросов раунда:
 * 3 лёгких → 4 средних → 3 сложных.
 * Учитывает историю показов и не повторяет вопросы внутри раунда.
 */
export function buildRound(
  allQuestions: Question[],
  shownIds: Record<Difficulty, string[]>,
): { roundQuestions: RoundQuestion[]; updatedShownIds: Record<Difficulty, string[]> } {
  const picked: Question[] = []
  const updatedShown: Record<Difficulty, string[]> = {
    easy: [...shownIds.easy],
    medium: [...shownIds.medium],
    hard: [...shownIds.hard],
  }

  for (const difficulty of (['easy', 'medium', 'hard'] as Difficulty[])) {
    const count = GAME_CONFIG.questionsPerRound[difficulty]
    const selected = pickQuestions(allQuestions, difficulty, count, updatedShown[difficulty])
    picked.push(...selected)
    updatedShown[difficulty] = [...updatedShown[difficulty], ...selected.map((q) => q.id)]
  }

  // Строим раунд в порядке ROUND_ORDER: 3 easy, 4 medium, 3 hard
  const byDifficulty: Record<Difficulty, Question[]> = {
    easy: picked.filter((q) => q.difficulty === 'easy'),
    medium: picked.filter((q) => q.difficulty === 'medium'),
    hard: picked.filter((q) => q.difficulty === 'hard'),
  }

  const ordered = ROUND_ORDER.map((diff) => byDifficulty[diff].shift()!).filter(Boolean)
  const roundQuestions = ordered.map(buildRoundQuestion)

  return { roundQuestions, updatedShownIds: updatedShown }
}

export { shuffle }
