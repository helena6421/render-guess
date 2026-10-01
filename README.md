# Угадай рендер

Командная игра для мероприятий с ведущим. Участники смотрят на HTML/CSS-код и четыре скриншота и угадывают, какой из них — настоящий результат в браузере.

## Быстрый старт

```bash
npm install
npm run dev        # dev-сервер на http://localhost:5173
npm run build      # production-сборка в dist/
npm run preview    # предпросмотр production-сборки
```

## Тесты

```bash
npm run test       # все тесты
npm run test:ui    # тесты в браузерном UI
```

## Проверка типов

```bash
npm run typecheck
```

## Генерация скриншотов через Playwright

Игра рендерит варианты через iframe прямо в браузере — скриншоты не нужны для запуска. Если хотите сохранить статические PNG-изображения:

```bash
# Установить Playwright-браузеры (один раз)
npx playwright install chromium

# Сгенерировать скриншоты
npm run generate-screenshots
```

Скриншоты сохраняются в `public/questions/<questionId>/<variantId>.png`.

## Структура проекта

```
src/
├── app/              — роутер Vue Router
├── views/            — StartView, GameView, ResultsView
├── components/
│   ├── game/         — игровые компоненты (CodeDisplay, OptionGrid, Timer…)
│   └── ui/           — переиспользуемые UI-компоненты
├── composables/      — useTimer, useHotkeys, useFullscreen, useSyntaxHighlight
├── domain/game/      — бизнес-логика: gameStore (Pinia), scoring, questionSelector, config
├── data/questions/   — банк вопросов: easy.ts, medium.ts, hard.ts
├── types/            — TypeScript-типы
└── styles/           — CSS-токены, базовые стили, тема highlight.js

scripts/
└── render-questions/ — Playwright-скрипт генерации скриншотов

tests/
├── domain/           — тесты логики: scoring, timer, questionSelector
└── data/             — тесты структуры банка вопросов
```

## Добавление нового вопроса

1. Откройте нужный файл: `src/data/questions/easy.ts`, `medium.ts` или `hard.ts`.
2. Добавьте объект `Question` в массив:

```typescript
{
  id: 'E044',                    // уникальный стабильный id
  topic: 'flexbox',              // тема
  difficulty: 'easy',           // 'easy' | 'medium' | 'hard'
  displayHtml: `<div>...</div>`, // HTML, показываемый игрокам
  displayCss: `.box { ... }`,   // CSS, показываемый игрокам
  renderWidth: 300,              // ширина iframe в px
  renderHeight: 150,             // высота iframe в px
  correctVariantId: 'E044-A',   // id правильного варианта
  variants: [                    // ровно 4 варианта
    { id: 'E044-A', html: `...`, css: `...` },   // правильный
    { id: 'E044-B', html: `...`, css: `...` },   // неправильный
    { id: 'E044-C', html: `...`, css: `...` },   // неправильный
    { id: 'E044-D', html: `...`, css: `...` },   // неправильный
  ],
  explanation: 'Объяснение (2–4 предложения).',
  docUrl: 'https://developer.mozilla.org/...',
}
```

3. Запустите `npm run test` для проверки структуры.
4. При желании — `npm run generate-screenshots` для обновления PNG.

## Горячие клавиши (игровой экран)

| Клавиша | Действие |
|---------|----------|
| `Space` | Пауза / продолжить |
| `Enter` | Следующий вопрос (после раскрытия) |
| `1`–`8` | Выбрать команду как давшую ответ |

## Технологии

- **Vue 3** + Composition API + `<script setup lang="ts">`
- **TypeScript** (строгий режим)
- **Vite** — сборка и dev-сервер
- **Pinia** — управление состоянием
- **Vue Router** — навигация
- **highlight.js** — подсветка синтаксиса
- **Vitest** — тесты
- **Playwright** — генерация скриншотов
