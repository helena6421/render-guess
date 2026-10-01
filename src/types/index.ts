// ─────────────────────────────────────────────────────────────────────────────
// Difficulty & timing
// ─────────────────────────────────────────────────────────────────────────────

export type Difficulty = 'easy' | 'medium' | 'hard'

export type OptionLabel = 'A' | 'B' | 'C' | 'D'

// ─────────────────────────────────────────────────────────────────────────────
// Question bank
// ─────────────────────────────────────────────────────────────────────────────

/** Один из четырёх вариантов ответа */
export interface QuestionVariant {
  /** Стабильный id варианта */
  id: string
  /** HTML внутри <body> для рендера этого варианта */
  html: string
  /** Полный CSS для рендера этого варианта (включая базовые стили) */
  css: string
}

/** Вопрос из банка */
export interface Question {
  /** Стабильный уникальный id */
  id: string
  /** Тема (flexbox, grid, positioning, …) */
  topic: string
  /** Уровень сложности */
  difficulty: Difficulty
  /** HTML, показываемый игрокам */
  displayHtml: string
  /** CSS, показываемый игрокам */
  displayCss: string
  /** Ширина области рендера в пикселях */
  renderWidth: number
  /** Высота области рендера в пикселях */
  renderHeight: number
  /** Все четыре варианта (порядок фиксированный в банке) */
  variants: [QuestionVariant, QuestionVariant, QuestionVariant, QuestionVariant]
  /** id правильного варианта из поля variants */
  correctVariantId: string
  /** Объяснение (2–4 предложения) */
  explanation: string
  /** Ссылка на MDN / спецификацию */
  docUrl: string
  /**
   * CSS-свойства, которые надо подсветить в коде как «ключевые».
   * Например: ['overflow', 'justify-content']
   * Строки displayCss, содержащие эти свойства, выделяются жёлтой рамкой.
   */
  keyProps?: string[]
}

// ─────────────────────────────────────────────────────────────────────────────
// Round state
// ─────────────────────────────────────────────────────────────────────────────

/** Вариант после перемешивания: хранит исходный id и назначенную букву */
export interface ShuffledOption {
  /** Назначенная буква A / B / C / D */
  label: OptionLabel
  /** id из QuestionVariant */
  variantId: string
  html: string
  css: string
}

/** Вопрос в рамках раунда (после выбора и перемешивания) */
export interface RoundQuestion {
  question: Question
  /** Перемешанные варианты — именно в этом порядке отображаются */
  options: [ShuffledOption, ShuffledOption, ShuffledOption, ShuffledOption]
  /** Буква, соответствующая правильному варианту после перемешивания */
  correctLabel: OptionLabel
}

// ─────────────────────────────────────────────────────────────────────────────
// Teams & scoring
// ─────────────────────────────────────────────────────────────────────────────

export interface Team {
  id: string
  name: string
  score: number
}

// ─────────────────────────────────────────────────────────────────────────────
// Game phases
// ─────────────────────────────────────────────────────────────────────────────

export type GamePhase =
  | 'setup'      // Стартовый экран — ввод команд
  | 'loading'    // Загрузка iframe-рендеров
  | 'question'   // Идёт таймер
  | 'paused'     // Пауза
  | 'revealed'   // Ответ раскрыт, ведущий подтверждает
  | 'results'    // Экран итогов

// ─────────────────────────────────────────────────────────────────────────────
// Persisted game state (для восстановления после обновления)
// ─────────────────────────────────────────────────────────────────────────────

export interface PersistedGameState {
  version: number
  phase: GamePhase
  teams: Team[]
  roundQuestions: RoundQuestion[]
  currentIndex: number
  /** Timestamp начала текущего вопроса (ms от эпохи). null если не запущен */
  startTimestamp: number | null
  /** Остаток в мс при паузе */
  pauseRemaining: number | null
  /** id команды-победителя текущего вопроса (предварительный выбор) */
  pendingWinnerId: string | null
  /** id команды-победителя, подтверждённого после раскрытия */
  confirmedWinnerId: string | null
  /** Были ли начислены очки за текущий вопрос */
  pointAwarded: boolean
  /** История показанных вопросов по сложности */
  shownQuestionIds: Record<Difficulty, string[]>
}

// ─────────────────────────────────────────────────────────────────────────────
// Game config type (используется в config.ts)
// ─────────────────────────────────────────────────────────────────────────────

export interface GameConfig {
  /** Секунды на вопрос по уровню сложности */
  timingSeconds: Record<Difficulty, number>
  /** Количество вопросов каждого уровня за раунд */
  questionsPerRound: Record<Difficulty, number>
  minTeams: number
  maxTeams: number
  /** Версия схемы сохранённого состояния */
  stateVersion: number
  /** Ключ в localStorage */
  storageKey: string
}
