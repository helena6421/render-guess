<script setup lang="ts">
import { computed } from 'vue'
import hljs from 'highlight.js/lib/core'
import xml from 'highlight.js/lib/languages/xml'
import css from 'highlight.js/lib/languages/css'

hljs.registerLanguage('html', xml)
hljs.registerLanguage('css', css)

const props = defineProps<{
  html: string
  css: string
  keyProps?: string[]
}>()

/** Добавляет цветную точку перед hex-цветами и rgba() */
function addColorSwatches(html: string): string {
  // Ищем цветовые значения которые находятся между '>' и '<'
  return html.replace(
    />(#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3}|rgba?\([^<)]+\)|hsla?\([^<)]+\))(?=<)/g,
    (match) => {
      const color = match.slice(1) // убираем ведущий '>'
      return `><span class="cc-dot" style="background:${color}"></span>${color}`
    }
  )
}

/** Оборачивает строки с ключевыми свойствами в span.key-line */
function addKeyLineMarks(highlighted: string, keys: string[]): string {
  if (!keys.length) return highlighted
  const escRe = (s: string) => s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
  return highlighted
    .split('\n')
    .map(line => {
      const plain = line.replace(/<[^>]*>/g, '')
      const isKey = keys.some(k => {
        const re = new RegExp(`\\b${escRe(k)}\\s*[:({]`, 'i')
        return re.test(plain)
      })
      return isKey ? `<span class="key-line">${line}</span>` : line
    })
    .join('\n')
}

function hl(code: string, lang: 'html' | 'css'): string {
  try { return hljs.highlight(code, { language: lang }).value }
  catch { return code }
}

const highlightedHtml = computed(() => hl(props.html, 'html'))

const highlightedCss = computed(() => {
  let h = hl(props.css, 'css')
  h = addColorSwatches(h)
  h = addKeyLineMarks(h, props.keyProps ?? [])
  return h
})

/** Извлекает значение ключевых свойств для баннера */
const keyPropValues = computed((): string[] => {
  if (!props.keyProps?.length) return []
  const results: string[] = []
  for (const prop of props.keyProps) {
    const re = new RegExp(`${prop}\\s*:\\s*([^;{}\\n]+)`, 'gi')
    const m = re.exec(props.css)
    if (m) results.push(`${prop}: ${m[1].trim()}`)
    else results.push(prop)
  }
  return results
})
</script>

<template>
  <div class="code-display">
    <!-- HTML panel -->
    <div class="code-pane">
      <div class="code-header">
        <span class="dot dot--red" /><span class="dot dot--yellow" /><span class="dot dot--green" />
        <span class="code-lang">HTML</span>
      </div>
      <pre class="code-block"><code v-html="highlightedHtml" /></pre>
    </div>

    <!-- CSS panel -->
    <div class="code-pane">
      <div class="code-header">
        <span class="dot dot--red" /><span class="dot dot--yellow" /><span class="dot dot--green" />
        <span class="code-lang">CSS</span>
      </div>
      <pre class="code-block"><code v-html="highlightedCss" /></pre>
    </div>

    <!-- KEY PROP BANNER -->
    <div v-if="keyPropValues.length" class="key-banner">
      <span class="key-banner__icon">⭐</span>
      <div class="key-banner__chips">
        <span v-for="val in keyPropValues" :key="val" class="key-chip">{{ val }}</span>
      </div>
      <span class="key-banner__hint">влияет на ответ</span>
    </div>
  </div>
</template>

<style scoped>
.code-display {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

/* Code pane */
.code-pane {
  background: #161b27;
  border-radius: var(--border-radius-sm);
  overflow: hidden;
  border: var(--border-black);
  box-shadow: var(--shadow-hard-sm);
}
.code-header {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 12px;
  background: rgba(255,255,255,0.04);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
.dot--red    { background: #ff5f57; }
.dot--yellow { background: #febc2e; }
.dot--green  { background: #28c840; }
.code-lang {
  margin-left: 6px;
  font-size: 10px;
  font-weight: 800;
  color: rgba(255,255,255,0.3);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* Code block — NO horizontal scroll, wrap long lines */
.code-block {
  margin: 0;
  padding: 10px 16px;
  font-size: 14px;
  line-height: 1.65;
  color: #e2e8f0;
  tab-size: 2;

  /* Ключевые настройки: нет горизонтального скролла */
  overflow-x: hidden;
  overflow-y: hidden;
  white-space: pre-wrap;   /* переносить длинные строки */
  word-break: break-word;  /* разрыв внутри длинных слов */
}

/* Color dot for CSS color values */
:deep(.cc-dot) {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 3px;
  border: 1px solid rgba(255,255,255,0.35);
  vertical-align: middle;
  position: relative;
  top: -1px;
  margin-right: 3px;
  flex-shrink: 0;
}

/* KEY BANNER */
.key-banner {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: #fef3c7;
  border: 2px solid #f59e0b;
  border-radius: var(--border-radius-sm);
  box-shadow: 3px 3px 0 #d97706;
  flex-wrap: wrap;
}
.key-banner__icon { font-size: 16px; flex-shrink: 0; }
.key-banner__chips { display: flex; gap: 6px; flex-wrap: wrap; flex: 1; }
.key-chip {
  background: #92400e;
  color: #fef9c3;
  padding: 3px 10px;
  border-radius: 6px;
  font-family: var(--font-mono);
  font-size: 14px;
  font-weight: 700;
  border: 1px solid #78350f;
  white-space: nowrap;
}
.key-banner__hint {
  font-size: 11px;
  font-weight: 600;
  color: #92400e;
  white-space: nowrap;
  margin-left: auto;
  opacity: 0.75;
}
</style>
