import { describe, it, expect } from 'vitest'
import { allQuestions, easyQuestions, mediumQuestions, hardQuestions } from '@/data/questions'

describe('question bank structure', () => {
  it('has at least 100 questions total', () => {
    expect(allQuestions.length).toBeGreaterThanOrEqual(100)
  })
  it('easy questions: at least 30', () => {
    expect(easyQuestions.length).toBeGreaterThanOrEqual(30)
  })
  it('medium questions: at least 20', () => {
    expect(mediumQuestions.length).toBeGreaterThanOrEqual(20)
  })
  it('hard questions: at least 10', () => {
    expect(hardQuestions.length).toBeGreaterThanOrEqual(10)
  })
  it('all questions have unique ids', () => {
    const ids = allQuestions.map(q => q.id)
    expect(new Set(ids).size).toBe(ids.length)
  })
  it('each question has exactly 4 variants', () => {
    for (const q of allQuestions) {
      expect(q.variants.length).toBe(4)
    }
  })
  it('each question has a valid correctVariantId', () => {
    for (const q of allQuestions) {
      const ids = q.variants.map(v => v.id)
      expect(ids).toContain(q.correctVariantId)
    }
  })
  it('each variant has non-empty html and css', () => {
    for (const q of allQuestions) {
      for (const v of q.variants) {
        expect(v.html.length).toBeGreaterThan(0)
        expect(v.css.length).toBeGreaterThan(0)
      }
    }
  })
  it('each question has explanation and docUrl', () => {
    for (const q of allQuestions) {
      expect(q.explanation.length).toBeGreaterThan(10)
      expect(q.docUrl).toMatch(/^https?:\/\//)
    }
  })
  it('difficulty values are valid', () => {
    const valid = ['easy', 'medium', 'hard']
    for (const q of allQuestions) {
      expect(valid).toContain(q.difficulty)
    }
  })
  it('variant ids are unique within each question', () => {
    for (const q of allQuestions) {
      const ids = q.variants.map(v => v.id)
      expect(new Set(ids).size).toBe(ids.length)
    }
  })
})
