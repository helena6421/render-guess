/**
 * Скрипт генерации скриншотов вариантов вопросов через Playwright + Chromium.
 *
 * Запуск:
 *   npx tsx scripts/render-questions/generate.ts
 *
 * Результат: public/questions/<questionId>/<variantId>.png
 *
 * Требования:
 *   npm install -D @playwright/test tsx
 *   npx playwright install chromium
 */

import { chromium } from '@playwright/test'
import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

// Динамический импорт вопросов (ts-node / tsx необходим)
// При запуске через tsx путь @/ не работает, поэтому используем относительный
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const questionsPath = path.resolve(__dirname, '../../src/data/questions/index.ts')

// Импортируем через tsx resolve
const { allQuestions } = await import(questionsPath)

const OUTPUT_DIR = path.resolve(__dirname, '../../public/questions')
const SCALE      = 2   // deviceScaleFactor (ретина)

function buildDoc(html: string, css: string, width: number, height: number): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<style>
*, *::before, *::after { box-sizing: border-box; }
html, body {
  margin: 0; padding: 0;
  width: ${width}px; height: ${height}px;
  overflow: hidden;
  font-family: Arial, sans-serif;
  font-size: 14px;
  /* Disable animations for reproducibility */
  animation: none !important;
  transition: none !important;
}
${css}
</style>
</head>
<body>${html}</body>
</html>`
}

async function main() {
  const browser = await chromium.launch({ channel: 'chromium' })

  let generated = 0
  let skipped   = 0

  for (const question of allQuestions) {
    const qDir = path.join(OUTPUT_DIR, question.id)
    fs.mkdirSync(qDir, { recursive: true })

    for (const variant of question.variants) {
      const outFile = path.join(qDir, `${variant.id}.png`)

      if (fs.existsSync(outFile)) {
        skipped++
        continue
      }

      const doc = buildDoc(variant.html, variant.css, question.renderWidth, question.renderHeight)

      const page = await browser.newPage({
        viewport: { width: question.renderWidth, height: question.renderHeight },
        deviceScaleFactor: SCALE,
      })

      // Отключаем анимации CSS
      await page.addInitScript(() => {
        const style = document.createElement('style')
        style.textContent = '*, *::before, *::after { animation: none !important; transition: none !important; }'
        document.head.appendChild(style)
      })

      await page.setContent(doc, { waitUntil: 'networkidle' })
      // Ждём загрузки шрифтов
      await page.evaluate(() => document.fonts.ready)

      await page.screenshot({
        path: outFile,
        clip: { x: 0, y: 0, width: question.renderWidth, height: question.renderHeight },
      })

      await page.close()
      generated++
      process.stdout.write(`\r✓ ${generated} сгенерировано  `)
    }
  }

  await browser.close()
  console.log(`\n\nГотово: ${generated} новых, ${skipped} уже существовало.`)
  console.log(`Скриншоты: ${OUTPUT_DIR}`)
}

main().catch(err => { console.error(err); process.exit(1) })
