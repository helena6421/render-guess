import { describe, it, expect } from 'vitest'
import { buildRound, shuffle } from '@/domain/game/questionSelector'
import { allQuestions } from '@/data/questions'
import { GAME_CONFIG, ROUND_ORDER, TOTAL_QUESTIONS } from '@/domain/game/config'

describe('questionSelector', () => {
  it('buildRound returns exactly 10 questions', () => {
    const { roundQuestions } = buildRound(allQuestions, { easy: [], medium: [], hard: [] })
    expect(roundQuestions.length).toBe(TOTAL_QUESTIONS)
  })

  it('buildRound follows difficulty order', () => {
    const { roundQuestions } = buildRound(allQuestions, { easy: [], medium: [], hard: [] })
    for (let i = 0; i < roundQuestions.length; i++) {
      expect(roundQuestions[i].question.difficulty).toBe(ROUND_ORDER[i])
    }
  })

  it('buildRound has no duplicate question ids', () => {
    const { roundQuestions } = buildRound(allQuestions, { easy: [], medium: [], hard: [] })
    const ids = roundQuestions.map(q => q.question.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('buildRound shuffles options but preserves correct answer', () => {
    const { roundQuestions } = buildRound(allQuestions, { easy: [], medium: [], hard: [] })
    for (const rq of roundQuestions) {
      const found = rq.options.find(o => o.label === rq.correctLabel)
      expect(found).toBeDefined()
      expect(found!.variantId).toBe(rq.question.correctVariantId)
    }
  })

  it('each RoundQuestion has exactly 4 options', () => {
    const { roundQuestions } = buildRound(allQuestions, { easy: [], medium: [], hard: [] })
    for (const rq of roundQuestions) {
      expect(rq.options.length).toBe(4)
    }
  })

  it('shuffle preserves all elements', () => {
    const arr = [1, 2, 3, 4, 5]
    const shuffled = shuffle(arr)
    expect(shuffled.sort()).toEqual(arr.sort())
  })

  it('updatedShownIds includes selected question ids', () => {
    const { roundQuestions, updatedShownIds } = buildRound(allQuestions, { easy: [], medium: [], hard: [] })
    for (const rq of roundQuestions) {
      const diff = rq.question.difficulty
      expect(updatedShownIds[diff]).toContain(rq.question.id)
    }
  })
})
