/**
 * Генерирует полный HTML-документ для рендера варианта в iframe.
 *
 * Важно:
 * - `html` на уровне viewport обрезает контент по размеру iframe (overflow: hidden)
 * - `body` специально НЕ имеет overflow: hidden, чтобы overflow-эффекты
 *   дочерних элементов (visible, scroll, auto) отображались корректно
 * - Анимации и переходы отключены для воспроизводимости
 */
export function buildIframeDoc(
  html: string,
  css: string,
  width: number,
  height: number,
): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<style>
/* Reset */
*, *::before, *::after {
  box-sizing: border-box;
  animation: none !important;
  transition: none !important;
}
/* Clip строго по размеру iframe, но НЕ на уровне body */
html {
  margin: 0;
  padding: 0;
  width: ${width}px;
  height: ${height}px;
  overflow: hidden;
}
body {
  margin: 0;
  padding: 0;
  width: ${width}px;
  min-height: ${height}px;
  /* overflow намеренно не задан — элементы внутри управляют им сами */
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  line-height: 1.4;
}
/* Question-specific styles */
${css}
</style>
</head>
<body>${html}</body>
</html>`
}
