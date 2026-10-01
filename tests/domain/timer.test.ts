import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

// Minimal timer logic test (без DOM)
describe('timer timing logic', () => {
  it('formatTime formats correctly', async () => {
    const { formatTime } = await import('@/domain/game/config')
    expect(formatTime(25)).toBe('0:25')
    expect(formatTime(90)).toBe('1:30')
    expect(formatTime(50)).toBe('0:50')
    expect(formatTime(0)).toBe('0:00')
    expect(formatTime(60)).toBe('1:00')
    expect(formatTime(125)).toBe('2:05')
  })

  it('totalQuestions matches config', async () => {
    const { TOTAL_QUESTIONS, GAME_CONFIG } = await import('@/domain/game/config')
    const expected = GAME_CONFIG.questionsPerRound.easy +
                     GAME_CONFIG.questionsPerRound.medium +
                     GAME_CONFIG.questionsPerRound.hard
    expect(TOTAL_QUESTIONS).toBe(expected)
    expect(TOTAL_QUESTIONS).toBe(10)
  })

  it('timing per difficulty matches spec', async () => {
    const { GAME_CONFIG } = await import('@/domain/game/config')
    expect(GAME_CONFIG.timingSeconds.easy).toBe(25)
    expect(GAME_CONFIG.timingSeconds.medium).toBe(50)
    expect(GAME_CONFIG.timingSeconds.hard).toBe(90)
  })

  it('ROUND_ORDER has correct counts', async () => {
    const { ROUND_ORDER, GAME_CONFIG } = await import('@/domain/game/config')
    const easyCnt   = ROUND_ORDER.filter(d => d === 'easy').length
    const mediumCnt = ROUND_ORDER.filter(d => d === 'medium').length
    const hardCnt   = ROUND_ORDER.filter(d => d === 'hard').length
    expect(easyCnt).toBe(GAME_CONFIG.questionsPerRound.easy)
    expect(mediumCnt).toBe(GAME_CONFIG.questionsPerRound.medium)
    expect(hardCnt).toBe(GAME_CONFIG.questionsPerRound.hard)
  })
})
