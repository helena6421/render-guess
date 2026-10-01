import { describe, it, expect } from 'vitest'
import { awardPoint, transferPoint, resetScores, getWinners } from '@/domain/game/scoring'
import type { Team } from '@/types'

const teams: Team[] = [
  { id: 'a', name: 'Alpha', score: 0 },
  { id: 'b', name: 'Beta',  score: 0 },
  { id: 'c', name: 'Gamma', score: 2 },
]

describe('scoring', () => {
  it('awardPoint: increases score by 1', () => {
    const result = awardPoint(teams, 'a')
    expect(result.find(t => t.id === 'a')!.score).toBe(1)
    expect(result.find(t => t.id === 'b')!.score).toBe(0)
  })

  it('transferPoint: moves score from one team to another', () => {
    const after = awardPoint(teams, 'a')
    const transferred = transferPoint(after, 'a', 'b')
    expect(transferred.find(t => t.id === 'a')!.score).toBe(0)
    expect(transferred.find(t => t.id === 'b')!.score).toBe(1)
  })

  it('transferPoint to null: removes point', () => {
    const after = awardPoint(teams, 'a')
    const removed = transferPoint(after, 'a', null)
    expect(removed.find(t => t.id === 'a')!.score).toBe(0)
  })

  it('resetScores: zeroes all scores', () => {
    const result = resetScores(teams)
    expect(result.every(t => t.score === 0)).toBe(true)
  })

  it('getWinners: returns all teams with max score', () => {
    const tied: Team[] = [
      { id: 'a', name: 'A', score: 3 },
      { id: 'b', name: 'B', score: 3 },
      { id: 'c', name: 'C', score: 1 },
    ]
    const w = getWinners(tied)
    expect(w.length).toBe(2)
    expect(w.map(t => t.id)).toContain('a')
    expect(w.map(t => t.id)).toContain('b')
  })

  it('score cannot go negative via transferPoint', () => {
    const result = transferPoint(teams, 'a', null)
    expect(result.find(t => t.id === 'a')!.score).toBeGreaterThanOrEqual(0)
  })
})
