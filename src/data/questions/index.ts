import type { Question } from '@/types'
import { ultraEasyQuestions } from './ultra_easy'
import { easyQuestions, easyQuestionsExtra } from './easy'
import { mediumQuestions, mediumQuestionsExtra, mediumQuestionsExtra2 } from './medium'
import { hardQuestions, hardQuestionsExtra } from './hard'

// Ультра-простые → уровень "easy" (25 секунд)
export const allEasyQuestions: Question[] = [...ultraEasyQuestions]

// Бывшие easy → теперь "medium" (50 секунд)
export const allMediumQuestions: Question[] = [
  ...easyQuestions, ...easyQuestionsExtra,
  ...mediumQuestions, ...mediumQuestionsExtra, ...mediumQuestionsExtra2,
]

// Бывшие medium+hard → теперь "hard" (90 секунд)
export const allHardQuestions: Question[] = [
  ...hardQuestions, ...hardQuestionsExtra,
]

export const allQuestions: Question[] = [
  ...allEasyQuestions,
  ...allMediumQuestions,
  ...allHardQuestions,
]

export {
  allEasyQuestions   as easyQuestions,
  allMediumQuestions as mediumQuestions,
  allHardQuestions   as hardQuestions,
}
