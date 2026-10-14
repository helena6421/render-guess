import type { Question } from '@/types'

/**
 * УЛЬТРА-ЛЁГКИЕ вопросы — уровень easy (25 секунд).
 * Рассчитаны на новичков: базовые CSS-свойства с очевидными визуальными отличиями.
 */
export const ultraEasyQuestions: Question[] = [

  // ── UE001: color ───────────────────────────────────────────────────────────
  {
    id: 'UE001', topic: 'visual', difficulty: 'easy',
    displayHtml: `<div class="box">Привет, CSS!</div>`,
    displayCss: `.box {
  font-size: 22px;
  font-weight: bold;
  padding: 20px;
  color: #e11d48;
}`,
    renderWidth: 300, renderHeight: 80,
    correctVariantId: 'UE001-A',
    variants: [
      { id: 'UE001-A', html: `<div class="box">Привет, CSS!</div>`, css: `.box{font-size:22px;font-weight:bold;padding:20px;color:#e11d48;}` },
      { id: 'UE001-B', html: `<div class="box">Привет, CSS!</div>`, css: `.box{font-size:22px;font-weight:bold;padding:20px;color:#2563eb;}` },
      { id: 'UE001-C', html: `<div class="box">Привет, CSS!</div>`, css: `.box{font-size:22px;font-weight:bold;padding:20px;color:#16a34a;}` },
      { id: 'UE001-D', html: `<div class="box">Привет, CSS!</div>`, css: `.box{font-size:22px;font-weight:bold;padding:20px;color:#1e293b;}` },
    ],
    explanation: 'color: #e11d48 — это насыщенный розово-красный (малиновый). Hex #e11d48: e1=красный высокий, 1d=зелёный низкий, 48=синий низкий → красный спектр.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/color',
    keyProps: ['color'],
  },

  // ── UE002: background-color ────────────────────────────────────────────────
  {
    id: 'UE002', topic: 'visual', difficulty: 'easy',
    displayHtml: `<div class="box">Блок</div>`,
    displayCss: `.box {
  width: 200px;
  height: 100px;
  background: #10b981;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
}`,
    renderWidth: 300, renderHeight: 130,
    correctVariantId: 'UE002-A',
    variants: [
      { id: 'UE002-A', html: `<div class="box">Блок</div>`, css: `.box{width:200px;height:100px;background:#10b981;display:flex;align-items:center;justify-content:center;color:white;font-size:20px;font-weight:bold;}` },
      { id: 'UE002-B', html: `<div class="box">Блок</div>`, css: `.box{width:200px;height:100px;background:#f59e0b;display:flex;align-items:center;justify-content:center;color:white;font-size:20px;font-weight:bold;}` },
      { id: 'UE002-C', html: `<div class="box">Блок</div>`, css: `.box{width:200px;height:100px;background:#6366f1;display:flex;align-items:center;justify-content:center;color:white;font-size:20px;font-weight:bold;}` },
      { id: 'UE002-D', html: `<div class="box">Блок</div>`, css: `.box{width:200px;height:100px;background:#dc2626;display:flex;align-items:center;justify-content:center;color:white;font-size:20px;font-weight:bold;}` },
    ],
    explanation: '#10b981 — изумрудный зелёный. Это цвет Tailwind CSS emerald-500.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/background-color',
    keyProps: ['background'],
  },

  // ── UE003: font-size ───────────────────────────────────────────────────────
  {
    id: 'UE003', topic: 'text', difficulty: 'easy',
    displayHtml: `<p class="text">CSS — это круто!</p>`,
    displayCss: `.text {
  font-size: 36px;
  font-weight: bold;
  color: #1e293b;
  padding: 10px;
}`,
    renderWidth: 300, renderHeight: 90,
    correctVariantId: 'UE003-A',
    variants: [
      { id: 'UE003-A', html: `<p class="text">CSS — это круто!</p>`, css: `.text{font-size:36px;font-weight:bold;color:#1e293b;padding:10px;}` },
      { id: 'UE003-B', html: `<p class="text">CSS — это круто!</p>`, css: `.text{font-size:14px;font-weight:bold;color:#1e293b;padding:10px;}` },
      { id: 'UE003-C', html: `<p class="text">CSS — это круто!</p>`, css: `.text{font-size:24px;font-weight:bold;color:#1e293b;padding:10px;}` },
      { id: 'UE003-D', html: `<p class="text">CSS — это круто!</p>`, css: `.text{font-size:10px;font-weight:bold;color:#1e293b;padding:10px;}` },
    ],
    explanation: 'font-size: 36px — крупный текст. Разница в размере шрифта очень заметна: 36px значительно больше 24px и 14px.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/font-size',
    keyProps: ['font-size'],
  },

  // ── UE004: border-radius ───────────────────────────────────────────────────
  {
    id: 'UE004', topic: 'visual', difficulty: 'easy',
    displayHtml: `<div class="box"></div>`,
    displayCss: `.box {
  width: 100px;
  height: 100px;
  background: #7c3aed;
  border-radius: 50%;
  margin: 20px auto;
}`,
    renderWidth: 300, renderHeight: 145,
    correctVariantId: 'UE004-A',
    variants: [
      { id: 'UE004-A', html: `<div class="box"></div>`, css: `.box{width:100px;height:100px;background:#7c3aed;border-radius:50%;margin:20px auto;}` },
      { id: 'UE004-B', html: `<div class="box"></div>`, css: `.box{width:100px;height:100px;background:#7c3aed;border-radius:0;margin:20px auto;}` },
      { id: 'UE004-C', html: `<div class="box"></div>`, css: `.box{width:100px;height:100px;background:#7c3aed;border-radius:16px;margin:20px auto;}` },
      { id: 'UE004-D', html: `<div class="box"></div>`, css: `.box{width:100px;height:100px;background:#7c3aed;border-radius:4px;margin:20px auto;}` },
    ],
    explanation: 'border-radius: 50% превращает квадратный элемент в круг. 0 — острые углы. 16px — закруглённые углы. 4px — слегка скруглённые.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/border-radius',
    keyProps: ['border-radius'],
  },

  // ── UE005: padding ─────────────────────────────────────────────────────────
  {
    id: 'UE005', topic: 'box-model', difficulty: 'easy',
    displayHtml: `<div class="card">Текст внутри</div>`,
    displayCss: `.card {
  background: #a5b4fc;
  border: 2px solid #6366f1;
  padding: 40px;
  width: 200px;
  font-size: 15px;
  font-weight: bold;
  color: #3730a3;
}`,
    renderWidth: 300, renderHeight: 170,
    correctVariantId: 'UE005-A',
    variants: [
      { id: 'UE005-A', html: `<div class="card">Текст внутри</div>`, css: `.card{background:#a5b4fc;border:2px solid #6366f1;padding:40px;width:200px;font-size:15px;font-weight:bold;color:#3730a3;}` },
      { id: 'UE005-B', html: `<div class="card">Текст внутри</div>`, css: `.card{background:#a5b4fc;border:2px solid #6366f1;padding:0;width:200px;font-size:15px;font-weight:bold;color:#3730a3;}` },
      { id: 'UE005-C', html: `<div class="card">Текст внутри</div>`, css: `.card{background:#a5b4fc;border:2px solid #6366f1;padding:10px;width:200px;font-size:15px;font-weight:bold;color:#3730a3;}` },
      { id: 'UE005-D', html: `<div class="card">Текст внутри</div>`, css: `.card{background:#a5b4fc;border:2px solid #6366f1;padding:4px;width:200px;font-size:15px;font-weight:bold;color:#3730a3;}` },
    ],
    explanation: 'padding: 40px — очень большой внутренний отступ, текст далеко от края. padding: 0 — текст прижат к границе. 10px — умеренный отступ.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/padding',
    keyProps: ['padding'],
  },

  // ── UE006: border ──────────────────────────────────────────────────────────
  {
    id: 'UE006', topic: 'visual', difficulty: 'easy',
    displayHtml: `<div class="box">Рамка</div>`,
    displayCss: `.box {
  width: 160px;
  height: 80px;
  border: 6px solid #dc2626;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  margin: 20px;
}`,
    renderWidth: 300, renderHeight: 130,
    correctVariantId: 'UE006-A',
    variants: [
      { id: 'UE006-A', html: `<div class="box">Рамка</div>`, css: `.box{width:160px;height:80px;border:6px solid #dc2626;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:bold;margin:20px;}` },
      { id: 'UE006-B', html: `<div class="box">Рамка</div>`, css: `.box{width:160px;height:80px;border:6px solid #2563eb;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:bold;margin:20px;}` },
      { id: 'UE006-C', html: `<div class="box">Рамка</div>`, css: `.box{width:160px;height:80px;border:6px dashed #16a34a;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:bold;margin:20px;}` },
      { id: 'UE006-D', html: `<div class="box">Рамка</div>`, css: `.box{width:160px;height:80px;border:none;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:bold;margin:20px;}` },
    ],
    explanation: 'border: 6px solid #dc2626 — толстая сплошная красная рамка. #2563eb — синяя. dashed — прерывистая зелёная. none — без рамки.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/border',
    keyProps: ['border'],
  },

  // ── UE007: font-weight ─────────────────────────────────────────────────────
{
    id: 'UE007', topic: 'text', difficulty: 'easy',
    displayHtml: `<p class="t">Насколько жирный?</p>`,
    displayCss: `.t {
  font-size: 24px;
  font-weight: 700;
  padding: 20px;
  color: #1e293b;
}`,
    renderWidth: 300, renderHeight: 90,
    correctVariantId: 'UE007-A',
    variants: [
      {
        // A (correct): bold 700
        id: 'UE007-A',
        html: `<p class="t">Насколько жирный?</p>`,
        css: `.t{font-size:24px;font-weight:700;padding:20px;color:#1e293b;}`
      },
      {
        // B: normal 400 — заметно тоньше
        id: 'UE007-B',
        html: `<p class="t">Насколько жирный?</p>`,
        css: `.t{font-size:24px;font-weight:400;padding:20px;color:#1e293b;}`
      },
      {
        // C: 400 + italic — тонкий наклонный
        id: 'UE007-C',
        html: `<p class="t">Насколько жирный?</p>`,
        css: `.t{font-size:24px;font-weight:400;font-style:italic;padding:20px;color:#1e293b;}`
      },
      {
        // D: 700 + markedly smaller — жирный, но мелкий
        id: 'UE007-D',
        html: `<p class="t">Насколько жирный?</p>`,
        css: `.t{font-size:14px;font-weight:700;padding:20px;color:#1e293b;}`
      },
    ],
    explanation: 'font-weight: 700 — жирное начертание (bold) при полном размере 24px. 400 — нормальный вес. Вариант C — нормальный вес с курсивом. Вариант D — жирный, но размер шрифта меньше (14px).',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/font-weight',
    keyProps: ['font-weight'],
  },

  // ── UE008: text-align ──────────────────────────────────────────────────────
  {
    id: 'UE008', topic: 'text', difficulty: 'easy',
    displayHtml: `<div class="box">
  <p>Куда выровнен текст?</p>
  <p>Вот ещё строка.</p>
</div>`,
    displayCss: `.box {
  width: 220px;
  background: #fef9c3;
  padding: 12px;
  border: 2px solid #fde68a;
  text-align: right;
}
p { margin: 4px 0; font-size: 15px; }`,
    renderWidth: 300, renderHeight: 110,
    correctVariantId: 'UE008-A',
    variants: [
      { id: 'UE008-A', html: `<div class="box"><p>Куда выровнен текст?</p><p>Вот ещё строка.</p></div>`, css: `.box{width:220px;background:#fef9c3;padding:12px;border:2px solid #fde68a;text-align:right;}p{margin:4px 0;font-size:15px;}` },
      { id: 'UE008-B', html: `<div class="box"><p>Куда выровнен текст?</p><p>Вот ещё строка.</p></div>`, css: `.box{width:220px;background:#fef9c3;padding:12px;border:2px solid #fde68a;text-align:left;}p{margin:4px 0;font-size:15px;}` },
      { id: 'UE008-C', html: `<div class="box"><p>Куда выровнен текст?</p><p>Вот ещё строка.</p></div>`, css: `.box{width:220px;background:#fef9c3;padding:12px;border:2px solid #fde68a;text-align:center;}p{margin:4px 0;font-size:15px;}` },
      { id: 'UE008-D', html: `<div class="box"><p>Куда выровнен текст?</p><p>Вот ещё строка.</p></div>`, css: `.box{width:220px;background:#fef9c3;padding:12px;border:2px solid #fde68a;text-align:justify;}p{margin:4px 0;font-size:15px;}` },
    ],
    explanation: 'text-align: right — текст выровнен по правому краю. left — по левому (по умолчанию). center — по центру. justify — по ширине (растягивает пробелы).',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/text-align',
    keyProps: ['text-align'],
  },

  // ── UE009: display: none ───────────────────────────────────────────────────
{
    id: 'UE009', topic: 'display', difficulty: 'easy',
    displayHtml: `<div class="wrap">
  <div class="a">Первый</div>
  <div class="b">Скрытый?</div>
  <div class="c">Третий</div>
</div>`,
    displayCss: `.wrap { padding: 10px; background: #94a3b8; width: 200px; }
.a, .c {
  background: #6366f1;
  color: white;
  padding: 10px;
  margin: 6px 0;
  font-weight: bold;
}
.b {
  display: none;
  background: #f59e0b;
  color: white;
  padding: 10px;
  margin: 6px 0;
}`,
    renderWidth: 300, renderHeight: 160,
    correctVariantId: 'UE009-A',
    variants: [
      {
        // A (correct): display:none — элемента НЕТ, Первый и Третий вплотную
        id: 'UE009-A',
        html: `<div class="wrap"><div class="a">Первый</div><div class="b">Скрытый?</div><div class="c">Третий</div></div>`,
        css: `.wrap{padding:10px;background:#94a3b8;width:200px;}.a,.c{background:#6366f1;color:white;padding:10px;margin:6px 0;font-weight:bold;}.b{display:none;background:#f59e0b;color:white;padding:10px;margin:6px 0;}`
      },
      {
        // B: visibility:hidden — ПУСТОЕ МЕСТО между Первым и Третьим
        id: 'UE009-B',
        html: `<div class="wrap"><div class="a">Первый</div><div class="b">Скрытый?</div><div class="c">Третий</div></div>`,
        css: `.wrap{padding:10px;background:#94a3b8;width:200px;}.a,.c{background:#6366f1;color:white;padding:10px;margin:6px 0;font-weight:bold;}.b{visibility:hidden;background:#f59e0b;color:white;padding:10px;margin:6px 0;}`
      },
      {
        // C: opacity:0.35 — ПОЛУПРОЗРАЧНЫЙ оранжевый блок виден
        id: 'UE009-C',
        html: `<div class="wrap"><div class="a">Первый</div><div class="b">Скрытый?</div><div class="c">Третий</div></div>`,
        css: `.wrap{padding:10px;background:#94a3b8;width:200px;}.a,.c{background:#6366f1;color:white;padding:10px;margin:6px 0;font-weight:bold;}.b{opacity:0.35;background:#f59e0b;color:white;padding:10px;margin:6px 0;}`
      },
      {
        // D: без скрытия — ЯРКИЙ оранжевый блок полностью виден
        id: 'UE009-D',
        html: `<div class="wrap"><div class="a">Первый</div><div class="b">Скрытый?</div><div class="c">Третий</div></div>`,
        css: `.wrap{padding:10px;background:#94a3b8;width:200px;}.a,.c{background:#6366f1;color:white;padding:10px;margin:6px 0;font-weight:bold;}.b{background:#f59e0b;color:white;padding:10px;margin:6px 0;font-weight:bold;}`
      },
    ],
    explanation: 'display: none полностью убирает элемент — Первый и Третий вплотную. visibility: hidden — элемент невидим, но пустое место остаётся. opacity: 0.35 — блок полупрозрачный, но виден. Без скрытия — яркий оранжевый блок.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/display',
    keyProps: ['display'],
  },

  // ── UE010: opacity ─────────────────────────────────────────────────────────
  {
    id: 'UE010', topic: 'visual', difficulty: 'easy',
    displayHtml: `<div class="scene">
  <div class="bg">Фон</div>
  <div class="box">Полупрозрачный</div>
</div>`,
    displayCss: `.scene {
  position: relative;
  width: 220px;
  height: 100px;
  background: #93c5fd;
}
.bg {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: #1e40af;
  font-weight: bold;
}
.box {
  position: absolute;
  top: 20px; left: 30px;
  width: 160px;
  height: 60px;
  background: #7c3aed;
  color: white;
  opacity: 0.35;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
}`,
    renderWidth: 300, renderHeight: 130,
    correctVariantId: 'UE010-A',
    variants: [
      { id: 'UE010-A', html: `<div class="scene"><div class="bg">Фон</div><div class="box">Полупрозрачный</div></div>`, css: `.scene{position:relative;width:220px;height:100px;background:#93c5fd;}.bg{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:28px;color:#1e40af;font-weight:bold;}.box{position:absolute;top:20px;left:30px;width:160px;height:60px;background:#7c3aed;color:white;opacity:0.35;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:bold;}` },
      { id: 'UE010-B', html: `<div class="scene"><div class="bg">Фон</div><div class="box">Полупрозрачный</div></div>`, css: `.scene{position:relative;width:220px;height:100px;background:#93c5fd;}.bg{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:28px;color:#1e40af;font-weight:bold;}.box{position:absolute;top:20px;left:30px;width:160px;height:60px;background:#7c3aed;color:white;opacity:1;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:bold;}` },
      { id: 'UE010-C', html: `<div class="scene"><div class="bg">Фон</div><div class="box">Полупрозрачный</div></div>`, css: `.scene{position:relative;width:220px;height:100px;background:#93c5fd;}.bg{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:28px;color:#1e40af;font-weight:bold;}.box{position:absolute;top:20px;left:30px;width:160px;height:60px;background:#7c3aed;color:white;opacity:0;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:bold;}` },
      { id: 'UE010-D', html: `<div class="scene"><div class="bg">Фон</div><div class="box">Полупрозрачный</div></div>`, css: `.scene{position:relative;width:220px;height:100px;background:#93c5fd;}.bg{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:28px;color:#1e40af;font-weight:bold;}.box{position:absolute;top:20px;left:30px;width:160px;height:60px;background:#7c3aed;color:white;opacity:0.7;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:bold;}` },
    ],
    explanation: 'opacity: 0.35 — 35% непрозрачности, фон просвечивает сквозь блок. opacity: 1 — полностью непрозрачный. opacity: 0 — полностью прозрачный (невидимый). opacity: 0.7 — 70%, меньше просвечивает.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/opacity',
    keyProps: ['opacity'],
  },

  // ── UE011: width % ─────────────────────────────────────────────────────────
  {
    id: 'UE011', topic: 'sizing', difficulty: 'easy',
    displayHtml: `<div class="container">
  <div class="bar">Ширина в процентах</div>
</div>`,
    displayCss: `.container {
  width: 260px;
  background: #bae6fd;
  padding: 10px;
  border: 2px solid #7dd3fc;
}
.bar {
  width: 30%;
  background: #0369a1;
  color: white;
  padding: 10px 8px;
  font-size: 12px;
  font-weight: bold;
}`,
    renderWidth: 300, renderHeight: 100,
    correctVariantId: 'UE011-A',
    variants: [
      { id: 'UE011-A', html: `<div class="container"><div class="bar">Ширина в процентах</div></div>`, css: `.container{width:260px;background:#bae6fd;padding:10px;border:2px solid #7dd3fc;}.bar{width:30%;background:#0369a1;color:white;padding:10px 8px;font-size:12px;font-weight:bold;}` },
      { id: 'UE011-B', html: `<div class="container"><div class="bar">Ширина в процентах</div></div>`, css: `.container{width:260px;background:#bae6fd;padding:10px;border:2px solid #7dd3fc;}.bar{width:100%;background:#0369a1;color:white;padding:10px 8px;font-size:12px;font-weight:bold;}` },
      { id: 'UE011-C', html: `<div class="container"><div class="bar">Ширина в процентах</div></div>`, css: `.container{width:260px;background:#bae6fd;padding:10px;border:2px solid #7dd3fc;}.bar{width:60%;background:#0369a1;color:white;padding:10px 8px;font-size:12px;font-weight:bold;}` },
      { id: 'UE011-D', html: `<div class="container"><div class="bar">Ширина в процентах</div></div>`, css: `.container{width:260px;background:#bae6fd;padding:10px;border:2px solid #7dd3fc;}.bar{width:80%;background:#0369a1;color:white;padding:10px 8px;font-size:12px;font-weight:bold;}` },
    ],
    explanation: 'width: 30% — элемент занимает 30% ширины родителя. 100% — полная ширина. 60% и 80% — промежуточные значения. Разница очень наглядна.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/width',
    keyProps: ['width'],
  },

  // ── UE012: box-shadow ──────────────────────────────────────────────────────
  {
    id: 'UE012', topic: 'visual', difficulty: 'easy',
    displayHtml: `<div class="card">Карточка</div>`,
    displayCss: `.card {
  width: 180px;
  height: 90px;
  background: white;
  border: 1px solid #cbd5e1;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  margin: 24px auto;
  box-shadow: 0 20px 40px rgba(0,0,0,0.25);
}`,
    renderWidth: 300, renderHeight: 155,
    correctVariantId: 'UE012-A',
    variants: [
      { id: 'UE012-A', html: `<div class="card">Карточка</div>`, css: `.card{width:180px;height:90px;background:white;border:1px solid #cbd5e1;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:bold;margin:24px auto;box-shadow:0 20px 40px rgba(0,0,0,0.25);}` },
      { id: 'UE012-B', html: `<div class="card">Карточка</div>`, css: `.card{width:180px;height:90px;background:white;border:1px solid #cbd5e1;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:bold;margin:24px auto;}` },
      { id: 'UE012-C', html: `<div class="card">Карточка</div>`, css: `.card{width:180px;height:90px;background:white;border:1px solid #cbd5e1;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:bold;margin:24px auto;box-shadow:4px 4px 0 #0f0f0f;}` },
      { id: 'UE012-D', html: `<div class="card">Карточка</div>`, css: `.card{width:180px;height:90px;background:white;border:1px solid #cbd5e1;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:bold;margin:24px auto;box-shadow:inset 0 4px 12px rgba(0,0,0,0.2);}` },
    ],
    explanation: 'box-shadow: 0 20px 40px rgba(0,0,0,0.25) — большая мягкая тень снизу. Без тени — плоская карточка. 4px 4px 0 — резкая чёрная тень. inset — тень ВНУТРИ элемента.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/box-shadow',
    keyProps: ['box-shadow'],
  },

  // ── UE013: text-decoration ────────────────────────────────────────────────
  {
    id: 'UE013', topic: 'text', difficulty: 'easy',
    displayHtml: `<div class="list">
  <p class="link">Ссылка на MDN</p>
  <p class="link">Документация</p>
  <p class="link">Примеры CSS</p>
</div>`,
    displayCss: `.list { padding: 10px; background: #94a3b8; width: 200px; }
.link {
  color: #2563eb;
  font-size: 16px;
  margin: 6px 0;
  text-decoration: underline;
}`,
    renderWidth: 300, renderHeight: 120,
    correctVariantId: 'UE013-A',
    variants: [
      { id: 'UE013-A', html: `<div class="list"><p class="link">Ссылка на MDN</p><p class="link">Документация</p><p class="link">Примеры CSS</p></div>`, css: `.list{padding:10px;background:#94a3b8;width:200px;}.link{color:#2563eb;font-size:16px;margin:6px 0;text-decoration:underline;}` },
      { id: 'UE013-B', html: `<div class="list"><p class="link">Ссылка на MDN</p><p class="link">Документация</p><p class="link">Примеры CSS</p></div>`, css: `.list{padding:10px;background:#94a3b8;width:200px;}.link{color:#2563eb;font-size:16px;margin:6px 0;text-decoration:none;}` },
      { id: 'UE013-C', html: `<div class="list"><p class="link">Ссылка на MDN</p><p class="link">Документация</p><p class="link">Примеры CSS</p></div>`, css: `.list{padding:10px;background:#94a3b8;width:200px;}.link{color:#2563eb;font-size:16px;margin:6px 0;text-decoration:line-through;}` },
      { id: 'UE013-D', html: `<div class="list"><p class="link">Ссылка на MDN</p><p class="link">Документация</p><p class="link">Примеры CSS</p></div>`, css: `.list{padding:10px;background:#94a3b8;width:200px;}.link{color:#2563eb;font-size:16px;margin:6px 0;text-decoration:overline;}` },
    ],
    explanation: 'text-decoration: underline — подчёркивание (стандартный вид ссылки). none — без декорации. line-through — зачёркнутый текст. overline — линия над текстом.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/text-decoration',
    keyProps: ['text-decoration'],
  },

  // ── UE014: background gradient ────────────────────────────────────────────
  {
    id: 'UE014', topic: 'visual', difficulty: 'easy',
    displayHtml: `<div class="hero"></div>`,
    displayCss: `.hero {
  width: 240px;
  height: 120px;
  background: linear-gradient(to right, #7c3aed, #ec4899);
  border-radius: 12px;
  margin: 10px auto;
}`,
    renderWidth: 300, renderHeight: 145,
    correctVariantId: 'UE014-A',
    variants: [
      { id: 'UE014-A', html: `<div class="hero"></div>`, css: `.hero{width:240px;height:120px;background:linear-gradient(to right,#7c3aed,#ec4899);border-radius:12px;margin:10px auto;}` },
      { id: 'UE014-B', html: `<div class="hero"></div>`, css: `.hero{width:240px;height:120px;background:linear-gradient(to bottom,#7c3aed,#ec4899);border-radius:12px;margin:10px auto;}` },
      { id: 'UE014-C', html: `<div class="hero"></div>`, css: `.hero{width:240px;height:120px;background:#7c3aed;border-radius:12px;margin:10px auto;}` },
      { id: 'UE014-D', html: `<div class="hero"></div>`, css: `.hero{width:240px;height:120px;background:linear-gradient(135deg,#7c3aed,#ec4899);border-radius:12px;margin:10px auto;}` },
    ],
    explanation: 'linear-gradient(to right, ...) — горизонтальный градиент слева направо. to bottom — вертикальный. Сплошной #7c3aed — только фиолетовый. 135deg — диагональный.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/gradient/linear-gradient',
    keyProps: ['background'],
  },

  // ── UE015: flex row vs column ─────────────────────────────────────────────
  {
    id: 'UE015', topic: 'flexbox', difficulty: 'easy',
    displayHtml: `<div class="row">
  <div class="i">1</div>
  <div class="i">2</div>
  <div class="i">3</div>
</div>`,
    displayCss: `.row {
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 10px;
  background: #a78bfa;
  width: 240px;
}
.i {
  width: 60px;
  height: 60px;
  background: #7c3aed;
  color: white;
  font-size: 22px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}`,
    renderWidth: 300, renderHeight: 100,
    correctVariantId: 'UE015-A',
    variants: [
      { id: 'UE015-A', html: `<div class="row"><div class="i">1</div><div class="i">2</div><div class="i">3</div></div>`, css: `.row{display:flex;flex-direction:row;gap:8px;padding:10px;background:#a78bfa;width:240px;}.i{width:60px;height:60px;background:#7c3aed;color:white;font-size:22px;font-weight:bold;display:flex;align-items:center;justify-content:center;}` },
      { id: 'UE015-B', html: `<div class="row"><div class="i">1</div><div class="i">2</div><div class="i">3</div></div>`, css: `.row{display:flex;flex-direction:column;gap:8px;padding:10px;background:#a78bfa;width:240px;}.i{width:60px;height:60px;background:#7c3aed;color:white;font-size:22px;font-weight:bold;display:flex;align-items:center;justify-content:center;}` },
      { id: 'UE015-C', html: `<div class="row"><div class="i">1</div><div class="i">2</div><div class="i">3</div></div>`, css: `.row{display:flex;flex-direction:row-reverse;gap:8px;padding:10px;background:#a78bfa;width:240px;}.i{width:60px;height:60px;background:#7c3aed;color:white;font-size:22px;font-weight:bold;display:flex;align-items:center;justify-content:center;}` },
      { id: 'UE015-D', html: `<div class="row"><div class="i">1</div><div class="i">2</div><div class="i">3</div></div>`, css: `.row{display:grid;grid-template-columns:repeat(3,60px);gap:8px;padding:10px;background:#a78bfa;width:240px;}.i{width:60px;height:60px;background:#7c3aed;color:white;font-size:22px;font-weight:bold;display:flex;align-items:center;justify-content:center;}` },
    ],
    explanation: 'flex-direction: row — элементы в строку слева направо. column — столбик сверху вниз. row-reverse — строка в обратном порядке (3 2 1). grid — сетка (визуально похоже на row, но другая модель).',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/flex-direction',
    keyProps: ['flex-direction'],
  },

  // ── UE016: justify-content ────────────────────────────────────────────────
  {
    id: 'UE016', topic: 'flexbox', difficulty: 'easy',
    displayHtml: `<div class="row">
  <div class="i">A</div>
  <div class="i">B</div>
  <div class="i">C</div>
</div>`,
    displayCss: `.row {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 10px;
  background: #6ee7b7;
  width: 270px;
}
.i {
  width: 60px;
  height: 50px;
  background: #16a34a;
  color: white;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}`,
    renderWidth: 300, renderHeight: 90,
    correctVariantId: 'UE016-A',
    variants: [
      { id: 'UE016-A', html: `<div class="row"><div class="i">A</div><div class="i">B</div><div class="i">C</div></div>`, css: `.row{display:flex;justify-content:flex-end;gap:8px;padding:10px;background:#6ee7b7;width:270px;}.i{width:60px;height:50px;background:#16a34a;color:white;font-size:20px;font-weight:bold;display:flex;align-items:center;justify-content:center;}` },
      { id: 'UE016-B', html: `<div class="row"><div class="i">A</div><div class="i">B</div><div class="i">C</div></div>`, css: `.row{display:flex;justify-content:flex-start;gap:8px;padding:10px;background:#6ee7b7;width:270px;}.i{width:60px;height:50px;background:#16a34a;color:white;font-size:20px;font-weight:bold;display:flex;align-items:center;justify-content:center;}` },
      { id: 'UE016-C', html: `<div class="row"><div class="i">A</div><div class="i">B</div><div class="i">C</div></div>`, css: `.row{display:flex;justify-content:center;gap:8px;padding:10px;background:#6ee7b7;width:270px;}.i{width:60px;height:50px;background:#16a34a;color:white;font-size:20px;font-weight:bold;display:flex;align-items:center;justify-content:center;}` },
      { id: 'UE016-D', html: `<div class="row"><div class="i">A</div><div class="i">B</div><div class="i">C</div></div>`, css: `.row{display:flex;justify-content:space-between;gap:8px;padding:10px;background:#6ee7b7;width:270px;}.i{width:60px;height:50px;background:#16a34a;color:white;font-size:20px;font-weight:bold;display:flex;align-items:center;justify-content:center;}` },
    ],
    explanation: 'flex-end — элементы прижаты к правому краю. flex-start — к левому. center — по центру. space-between — крайние у стенок, пространство равномерно между ними.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/justify-content',
    keyProps: ['justify-content'],
  },

  // ── UE017: position relative offset ──────────────────────────────────────
  {
    id: 'UE017', topic: 'positioning', difficulty: 'easy',
    displayHtml: `<div class="scene">
  <div class="box">Смещён?</div>
</div>`,
    displayCss: `.scene {
  width: 260px;
  height: 120px;
  background: #fef9c3;
  border: 2px solid #fde68a;
  padding: 10px;
  position: relative;
}
.box {
  width: 100px;
  height: 50px;
  background: #ca8a04;
  color: white;
  position: relative;
  top: 30px;
  left: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}`,
    renderWidth: 300, renderHeight: 150,
    correctVariantId: 'UE017-A',
    variants: [
      { id: 'UE017-A', html: `<div class="scene"><div class="box">Смещён?</div></div>`, css: `.scene{width:260px;height:120px;background:#fef9c3;border:2px solid #fde68a;padding:10px;position:relative;}.box{width:100px;height:50px;background:#ca8a04;color:white;position:relative;top:30px;left:80px;display:flex;align-items:center;justify-content:center;font-weight:bold;}` },
      { id: 'UE017-B', html: `<div class="scene"><div class="box">Смещён?</div></div>`, css: `.scene{width:260px;height:120px;background:#fef9c3;border:2px solid #fde68a;padding:10px;position:relative;}.box{width:100px;height:50px;background:#ca8a04;color:white;position:relative;top:0;left:0;display:flex;align-items:center;justify-content:center;font-weight:bold;}` },
      { id: 'UE017-C', html: `<div class="scene"><div class="box">Смещён?</div></div>`, css: `.scene{width:260px;height:120px;background:#fef9c3;border:2px solid #fde68a;padding:10px;position:relative;}.box{width:100px;height:50px;background:#ca8a04;color:white;position:relative;top:-10px;left:40px;display:flex;align-items:center;justify-content:center;font-weight:bold;}` },
      { id: 'UE017-D', html: `<div class="scene"><div class="box">Смещён?</div></div>`, css: `.scene{width:260px;height:120px;background:#fef9c3;border:2px solid #fde68a;padding:10px;position:relative;}.box{width:100px;height:50px;background:#ca8a04;color:white;position:absolute;bottom:10px;right:10px;display:flex;align-items:center;justify-content:center;font-weight:bold;}` },
    ],
    explanation: 'position: relative; top: 30px; left: 80px — смещает элемент вниз на 30px и вправо на 80px от его обычного места. top: 0; left: 0 — без смещения. absolute — полностью другая позиция.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/position',
    keyProps: ['top', 'left'],
  },

  // ── UE018: grid 2 columns ─────────────────────────────────────────────────
  {
    id: 'UE018', topic: 'grid', difficulty: 'easy',
    displayHtml: `<div class="g">
  <div class="c">A</div>
  <div class="c">B</div>
  <div class="c">C</div>
  <div class="c">D</div>
</div>`,
    displayCss: `.g {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  background: #d8b4fe;
  padding: 8px;
  width: 240px;
}
.c {
  background: #a855f7;
  color: white;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: bold;
  border-radius: 6px;
}`,
    renderWidth: 300, renderHeight: 135,
    correctVariantId: 'UE018-A',
    variants: [
      { id: 'UE018-A', html: `<div class="g"><div class="c">A</div><div class="c">B</div><div class="c">C</div><div class="c">D</div></div>`, css: `.g{display:grid;grid-template-columns:1fr 1fr;gap:8px;background:#d8b4fe;padding:8px;width:240px;}.c{background:#a855f7;color:white;height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:bold;border-radius:6px;}` },
      { id: 'UE018-B', html: `<div class="g"><div class="c">A</div><div class="c">B</div><div class="c">C</div><div class="c">D</div></div>`, css: `.g{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;background:#d8b4fe;padding:8px;width:240px;}.c{background:#a855f7;color:white;height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:bold;border-radius:6px;}` },
      { id: 'UE018-C', html: `<div class="g"><div class="c">A</div><div class="c">B</div><div class="c">C</div><div class="c">D</div></div>`, css: `.g{display:flex;flex-direction:column;gap:8px;background:#d8b4fe;padding:8px;width:240px;}.c{background:#a855f7;color:white;height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:bold;border-radius:6px;}` },
      { id: 'UE018-D', html: `<div class="g"><div class="c">A</div><div class="c">B</div><div class="c">C</div><div class="c">D</div></div>`, css: `.g{display:flex;gap:8px;background:#d8b4fe;padding:8px;width:240px;}.c{width:50px;height:50px;background:#a855f7;color:white;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:bold;border-radius:6px;}` },
    ],
    explanation: 'grid-template-columns: 1fr 1fr — две равные колонки. 4 элемента → 2 строки по 2. 3 колонки → A B C в одну строку, D под A. column flex → все в столбик. flex row → все в строку.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/grid-template-columns',
    keyProps: ['grid-template-columns'],
  },

  // ── UE019: overflow hidden basic ──────────────────────────────────────────
{
    id: 'UE019', topic: 'overflow', difficulty: 'easy',
    displayHtml: `<div class="box">
  <p>Длинный текст который явно не поместится в маленький блок с overflow: hidden</p>
</div>`,
    displayCss: `.box {
  width: 160px;
  height: 60px;
  overflow: hidden;
  background: #bae6fd;
  border: 2px solid #0ea5e9;
  padding: 8px;
  font-size: 14px;
}`,
    renderWidth: 300, renderHeight: 150,
    correctVariantId: 'UE019-A',
    variants: [
      {
        // A (correct): hidden — текст обрезан РОВНО по границе синего блока
        id: 'UE019-A',
        html: `<div class="box"><p>Длинный текст который явно не поместится в маленький блок с overflow: hidden</p></div>`,
        css: `.box{width:160px;height:60px;overflow:hidden;background:#bae6fd;border:2px solid #0ea5e9;padding:8px;font-size:14px;}p{margin:0;}`
      },
      {
        // B: visible — текст ВЫТЕКАЕТ за синий блок на белый фон
        id: 'UE019-B',
        html: `<div class="box"><p>Длинный текст который явно не поместится в маленький блок с overflow: hidden</p></div>`,
        css: `.box{width:160px;height:60px;overflow:visible;background:#bae6fd;border:2px solid #0ea5e9;padding:8px;font-size:14px;}p{margin:0;}`
      },
      {
        // C: height:auto — блок РАСТЁТ, весь текст внутри синего фона
        id: 'UE019-C',
        html: `<div class="box"><p>Длинный текст который явно не поместится в маленький блок с overflow: hidden</p></div>`,
        css: `.box{width:160px;height:auto;overflow:hidden;background:#bae6fd;border:2px solid #0ea5e9;padding:8px;font-size:14px;}p{margin:0;}`
      },
      {
        // D: nowrap — ОДНА строка, обрезана по горизонтали
        id: 'UE019-D',
        html: `<div class="box"><p>Длинный текст который явно не поместится в маленький блок с overflow: hidden</p></div>`,
        css: `.box{width:160px;height:60px;overflow:hidden;background:#bae6fd;border:2px solid #0ea5e9;padding:8px;font-size:14px;white-space:nowrap;}p{margin:0;white-space:nowrap;}`
      },
    ],
    explanation: 'overflow: hidden обрезает текст ровно по границе блока (высота фиксирована 60px). visible — текст вытекает за синий блок на фон. height: auto — блок растягивается под контент, всё внутри. white-space: nowrap — одна строка, обрезанная справа.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/overflow',
    keyProps: ['overflow'],
  },

  // ── UE020: text-transform ────────────────────────────────────────────────
  {
    id: 'UE020', topic: 'text', difficulty: 'easy',
    displayHtml: `<p class="t">Заголовок сайта</p>`,
    displayCss: `.t {
  font-size: 22px;
  font-weight: bold;
  padding: 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #0f172a;
}`,
    renderWidth: 300, renderHeight: 80,
    correctVariantId: 'UE020-A',
    variants: [
      { id: 'UE020-A', html: `<p class="t">Заголовок сайта</p>`, css: `.t{font-size:22px;font-weight:bold;padding:20px;text-transform:uppercase;letter-spacing:3px;color:#0f172a;}` },
      { id: 'UE020-B', html: `<p class="t">Заголовок сайта</p>`, css: `.t{font-size:22px;font-weight:bold;padding:20px;text-transform:lowercase;letter-spacing:3px;color:#0f172a;}` },
      { id: 'UE020-C', html: `<p class="t">Заголовок сайта</p>`, css: `.t{font-size:22px;font-weight:bold;padding:20px;text-transform:capitalize;letter-spacing:3px;color:#0f172a;}` },
      { id: 'UE020-D', html: `<p class="t">Заголовок сайта</p>`, css: `.t{font-size:22px;font-weight:bold;padding:20px;text-transform:none;letter-spacing:3px;color:#0f172a;}` },
    ],
    explanation: 'text-transform: uppercase — ВСЕ БУКВЫ ЗАГЛАВНЫЕ. lowercase — все строчные. capitalize — Каждое Слово С Большой Буквы. none — без изменений (как в HTML).',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/text-transform',
    keyProps: ['text-transform'],
  },

  // ── UE021: align-items ────────────────────────────────────────────────────
  {
    id: 'UE021', topic: 'flexbox', difficulty: 'easy',
    displayHtml: `<div class="row">
  <div class="s">S</div>
  <div class="l">TALL</div>
  <div class="s">S</div>
</div>`,
    displayCss: `.row {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  padding: 8px;
  background: #f472b6;
  width: 240px;
  height: 130px;
}
.s { width: 50px; height: 50px; background: #ec4899; color: white; font-weight: bold; display: flex; align-items: center; justify-content: center; }
.l { width: 50px; height: 100px; background: #be185d; color: white; font-weight: bold; display: flex; align-items: center; justify-content: center; }`,
    renderWidth: 300, renderHeight: 160,
    correctVariantId: 'UE021-A',
    variants: [
      { id: 'UE021-A', html: `<div class="row"><div class="s">S</div><div class="l">TALL</div><div class="s">S</div></div>`, css: `.row{display:flex;align-items:flex-end;gap:8px;padding:8px;background:#f472b6;width:240px;height:130px;}.s{width:50px;height:50px;background:#ec4899;color:white;font-weight:bold;display:flex;align-items:center;justify-content:center;}.l{width:50px;height:100px;background:#be185d;color:white;font-weight:bold;display:flex;align-items:center;justify-content:center;}` },
      { id: 'UE021-B', html: `<div class="row"><div class="s">S</div><div class="l">TALL</div><div class="s">S</div></div>`, css: `.row{display:flex;align-items:flex-start;gap:8px;padding:8px;background:#f472b6;width:240px;height:130px;}.s{width:50px;height:50px;background:#ec4899;color:white;font-weight:bold;display:flex;align-items:center;justify-content:center;}.l{width:50px;height:100px;background:#be185d;color:white;font-weight:bold;display:flex;align-items:center;justify-content:center;}` },
      { id: 'UE021-C', html: `<div class="row"><div class="s">S</div><div class="l">TALL</div><div class="s">S</div></div>`, css: `.row{display:flex;align-items:center;gap:8px;padding:8px;background:#f472b6;width:240px;height:130px;}.s{width:50px;height:50px;background:#ec4899;color:white;font-weight:bold;display:flex;align-items:center;justify-content:center;}.l{width:50px;height:100px;background:#be185d;color:white;font-weight:bold;display:flex;align-items:center;justify-content:center;}` },
      { id: 'UE021-D', html: `<div class="row"><div class="s">S</div><div class="l">TALL</div><div class="s">S</div></div>`, css: `.row{display:flex;align-items:stretch;gap:8px;padding:8px;background:#f472b6;width:240px;height:130px;}.s{width:50px;background:#ec4899;color:white;font-weight:bold;display:flex;align-items:center;justify-content:center;}.l{width:50px;background:#be185d;color:white;font-weight:bold;display:flex;align-items:center;justify-content:center;}` },
    ],
    explanation: 'align-items: flex-end — маленькие блоки S прижаты к низу (совпадают с нижним краем TALL). flex-start — к верху. center — по центру высоты. stretch — растягивает до высоты контейнера.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/align-items',
    keyProps: ['align-items'],
  },

  // ── UE022: margin auto block centering ────────────────────────────────────
  {
    id: 'UE022', topic: 'box-model', difficulty: 'easy',
    displayHtml: `<div class="wrap">
  <div class="box">По центру</div>
</div>`,
    displayCss: `.wrap {
  width: 260px;
  background: #86efac;
  padding: 10px;
}
.box {
  width: 140px;
  background: #16a34a;
  color: white;
  padding: 12px;
  font-weight: bold;
  text-align: center;
  margin: 0 auto;
}`,
    renderWidth: 300, renderHeight: 100,
    correctVariantId: 'UE022-A',
    variants: [
      { id: 'UE022-A', html: `<div class="wrap"><div class="box">По центру</div></div>`, css: `.wrap{width:260px;background:#86efac;padding:10px;}.box{width:140px;background:#16a34a;color:white;padding:12px;font-weight:bold;text-align:center;margin:0 auto;}` },
      { id: 'UE022-B', html: `<div class="wrap"><div class="box">По центру</div></div>`, css: `.wrap{width:260px;background:#86efac;padding:10px;}.box{width:140px;background:#16a34a;color:white;padding:12px;font-weight:bold;text-align:center;margin:0;}` },
      { id: 'UE022-C', html: `<div class="wrap"><div class="box">По центру</div></div>`, css: `.wrap{width:260px;background:#86efac;padding:10px;}.box{width:140px;background:#16a34a;color:white;padding:12px;font-weight:bold;text-align:center;margin:0 0 0 auto;}` },
      { id: 'UE022-D', html: `<div class="wrap"><div class="box">По центру</div></div>`, css: `.wrap{width:260px;background:#86efac;padding:10px;}.box{background:#16a34a;color:white;padding:12px;font-weight:bold;text-align:center;margin:0 auto;}` },
    ],
    explanation: 'margin: 0 auto — нулевые верх/низ, auto по бокам. auto делит свободное место поровну слева и справа — центрирует. 0 — прижат к левому краю. 0 0 0 auto — прижат к правому. Без width — блочный элемент занимает всю ширину.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/margin',
    keyProps: ['margin'],
  },

  // ── UE023: object-fit ─────────────────────────────────────────────────────
  {
    id: 'UE023', topic: 'sizing', difficulty: 'easy',
    displayHtml: `<div class="frame">
  <div class="img"></div>
</div>`,
    displayCss: `.frame {
  width: 200px;
  height: 120px;
  border: 3px solid #6366f1;
  overflow: hidden;
}
.img {
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg,#6366f1 25%,#ec4899 50%,#f59e0b 75%);
  transform: scaleX(2);
  transform-origin: left;
}`,
    renderWidth: 300, renderHeight: 150,
    correctVariantId: 'UE023-A',
    variants: [
      { id: 'UE023-A', html: `<div class="frame"><div class="img"></div></div>`, css: `.frame{width:200px;height:120px;border:3px solid #6366f1;overflow:hidden;}.img{width:100%;height:100%;background:linear-gradient(45deg,#6366f1 25%,#ec4899 50%,#f59e0b 75%);transform:scaleX(2);transform-origin:left;}` },
      { id: 'UE023-B', html: `<div class="frame"><div class="img"></div></div>`, css: `.frame{width:200px;height:120px;border:3px solid #6366f1;}.img{width:100%;height:100%;background:linear-gradient(45deg,#6366f1 25%,#ec4899 50%,#f59e0b 75%);transform:scaleX(2);transform-origin:left;}` },
      { id: 'UE023-C', html: `<div class="frame"><div class="img"></div></div>`, css: `.frame{width:200px;height:120px;border:3px solid #6366f1;overflow:hidden;}.img{width:100%;height:100%;background:linear-gradient(45deg,#6366f1 25%,#ec4899 50%,#f59e0b 75%);}` },
      { id: 'UE023-D', html: `<div class="frame"><div class="img"></div></div>`, css: `.frame{width:200px;height:120px;border:3px solid #6366f1;overflow:hidden;}.img{width:50%;height:100%;background:linear-gradient(45deg,#6366f1 25%,#ec4899 50%,#f59e0b 75%);}` },
    ],
    explanation: 'overflow: hidden обрезает масштабированный контент по рамке. Без overflow — контент вылезает за рамку. Без transform — обычный размер. width:50% — половина ширины.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/overflow',
    keyProps: ['overflow'],
  },

  // ── UE024: list-style ─────────────────────────────────────────────────────
  {
    id: 'UE024', topic: 'text', difficulty: 'easy',
    displayHtml: `<ul class="list">
  <li>Пункт один</li>
  <li>Пункт два</li>
  <li>Пункт три</li>
</ul>`,
    displayCss: `ul.list {
  list-style: none;
  padding: 10px 14px;
  margin: 0;
  background: #a78bfa;
  width: 200px;
  border-radius: 8px;
}
li { padding: 6px 0; font-size: 15px; color: #3730a3; font-weight: 600; }`,
    renderWidth: 300, renderHeight: 120,
    correctVariantId: 'UE024-A',
    variants: [
      { id: 'UE024-A', html: `<ul class="list"><li>Пункт один</li><li>Пункт два</li><li>Пункт три</li></ul>`, css: `ul.list{list-style:none;padding:10px 14px;margin:0;background:#a78bfa;width:200px;border-radius:8px;}li{padding:6px 0;font-size:15px;color:#3730a3;font-weight:600;}` },
      { id: 'UE024-B', html: `<ul class="list"><li>Пункт один</li><li>Пункт два</li><li>Пункт три</li></ul>`, css: `ul.list{list-style:disc;padding:10px 24px;margin:0;background:#a78bfa;width:200px;border-radius:8px;}li{padding:6px 0;font-size:15px;color:#3730a3;font-weight:600;}` },
      { id: 'UE024-C', html: `<ul class="list"><li>Пункт один</li><li>Пункт два</li><li>Пункт три</li></ul>`, css: `ul.list{list-style:decimal;padding:10px 28px;margin:0;background:#a78bfa;width:200px;border-radius:8px;}li{padding:6px 0;font-size:15px;color:#3730a3;font-weight:600;}` },
      { id: 'UE024-D', html: `<ul class="list"><li>Пункт один</li><li>Пункт два</li><li>Пункт три</li></ul>`, css: `ul.list{list-style:square;padding:10px 24px;margin:0;background:#a78bfa;width:200px;border-radius:8px;}li{padding:6px 0;font-size:15px;color:#3730a3;font-weight:600;}` },
    ],
    explanation: 'list-style: none — без маркеров (чистый список). disc — чёрные круглые маркеры (по умолчанию для ul). decimal — числа 1. 2. 3. (как ol). square — квадратные маркеры.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/list-style',
    keyProps: ['list-style'],
  },

  // ── UE025: transform rotate ────────────────────────────────────────────────
  {
    id: 'UE025', topic: 'visual', difficulty: 'easy',
    displayHtml: `<div class="scene">
  <div class="box">CSS!</div>
</div>`,
    displayCss: `.scene {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 140px;
  background: #bae6fd;
}
.box {
  width: 100px;
  height: 60px;
  background: #0369a1;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  transform: rotate(45deg);
}`,
    renderWidth: 300, renderHeight: 170,
    correctVariantId: 'UE025-A',
    variants: [
      { id: 'UE025-A', html: `<div class="scene"><div class="box">CSS!</div></div>`, css: `.scene{display:flex;align-items:center;justify-content:center;width:240px;height:140px;background:#bae6fd;}.box{width:100px;height:60px;background:#0369a1;color:white;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:bold;transform:rotate(45deg);}` },
      { id: 'UE025-B', html: `<div class="scene"><div class="box">CSS!</div></div>`, css: `.scene{display:flex;align-items:center;justify-content:center;width:240px;height:140px;background:#bae6fd;}.box{width:100px;height:60px;background:#0369a1;color:white;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:bold;transform:rotate(0deg);}` },
      { id: 'UE025-C', html: `<div class="scene"><div class="box">CSS!</div></div>`, css: `.scene{display:flex;align-items:center;justify-content:center;width:240px;height:140px;background:#bae6fd;}.box{width:100px;height:60px;background:#0369a1;color:white;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:bold;transform:rotate(-45deg);}` },
      { id: 'UE025-D', html: `<div class="scene"><div class="box">CSS!</div></div>`, css: `.scene{display:flex;align-items:center;justify-content:center;width:240px;height:140px;background:#bae6fd;}.box{width:100px;height:60px;background:#0369a1;color:white;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:bold;transform:rotate(90deg);}` },
    ],
    explanation: 'transform: rotate(45deg) — поворот на 45° по часовой стрелке. 0deg — без поворота. -45deg — против часовой. 90deg — боком.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/transform',
    keyProps: ['transform'],
  },

  // ── UE026: cursor (показываем изменение стиля кнопки) ────────────────────
  {
    id: 'UE026', topic: 'visual', difficulty: 'easy',
    displayHtml: `<div class="btns">
  <button class="btn a">Кнопка A</button>
  <button class="btn b">Кнопка B</button>
</div>`,
    displayCss: `.btns {
  display: flex;
  gap: 12px;
  padding: 16px;
  background: #94a3b8;
}
.btn {
  padding: 10px 20px;
  font-size: 15px;
  font-weight: bold;
  border: 2px solid #0f0f0f;
  border-radius: 8px;
}
.a {
  background: #7c3aed;
  color: white;
  box-shadow: 3px 3px 0 #0f0f0f;
}
.b {
  background: white;
  color: #0f0f0f;
  box-shadow: 3px 3px 0 #0f0f0f;
}`,
    renderWidth: 300, renderHeight: 90,
    correctVariantId: 'UE026-A',
    variants: [
      { id: 'UE026-A', html: `<div class="btns"><button class="btn a">Кнопка A</button><button class="btn b">Кнопка B</button></div>`, css: `.btns{display:flex;gap:12px;padding:16px;background:#94a3b8;}.btn{padding:10px 20px;font-size:15px;font-weight:bold;border:2px solid #0f0f0f;border-radius:8px;}.a{background:#7c3aed;color:white;box-shadow:3px 3px 0 #0f0f0f;}.b{background:white;color:#0f0f0f;box-shadow:3px 3px 0 #0f0f0f;}` },
      { id: 'UE026-B', html: `<div class="btns"><button class="btn a">Кнопка A</button><button class="btn b">Кнопка B</button></div>`, css: `.btns{display:flex;gap:12px;padding:16px;background:#94a3b8;}.btn{padding:10px 20px;font-size:15px;font-weight:bold;border:2px solid #0f0f0f;border-radius:8px;}.a{background:#ec4899;color:white;box-shadow:3px 3px 0 #0f0f0f;}.b{background:white;color:#0f0f0f;box-shadow:3px 3px 0 #0f0f0f;}` },
      { id: 'UE026-C', html: `<div class="btns"><button class="btn a">Кнопка A</button><button class="btn b">Кнопка B</button></div>`, css: `.btns{display:flex;gap:12px;padding:16px;background:#94a3b8;}.btn{padding:10px 20px;font-size:15px;font-weight:bold;border:none;border-radius:8px;}.a{background:#7c3aed;color:white;}.b{background:white;color:#0f0f0f;}` },
      { id: 'UE026-D', html: `<div class="btns"><button class="btn a">Кнопка A</button><button class="btn b">Кнопка B</button></div>`, css: `.btns{display:flex;gap:0;padding:16px;background:#94a3b8;}.btn{padding:10px 20px;font-size:15px;font-weight:bold;border:2px solid #0f0f0f;}.a{background:#7c3aed;color:white;}.b{background:white;color:#0f0f0f;}` },
    ],
    explanation: 'box-shadow: 3px 3px 0 #0f0f0f создаёт чёрную «плоскую» тень — необруталистский стиль. border-radius: 8px даёт скругление. Без border — нет рамки. Без gap — кнопки вплотную.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/box-shadow',
    keyProps: ['box-shadow', 'border-radius'],
  },

  // ── UE027: background position ────────────────────────────────────────────
  {
    id: 'UE027', topic: 'visual', difficulty: 'easy',
    displayHtml: `<div class="box">
  <span>Привет!</span>
</div>`,
    displayCss: `.box {
  width: 220px;
  height: 100px;
  background: linear-gradient(to bottom right, #6366f1, #a855f7, #ec4899);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
}
span {
  font-size: 24px;
  font-weight: 900;
  color: white;
  text-shadow: 0 2px 8px rgba(0,0,0,0.3);
}`,
    renderWidth: 300, renderHeight: 130,
    correctVariantId: 'UE027-A',
    variants: [
      { id: 'UE027-A', html: `<div class="box"><span>Привет!</span></div>`, css: `.box{width:220px;height:100px;background:linear-gradient(to bottom right,#6366f1,#a855f7,#ec4899);border-radius:16px;display:flex;align-items:center;justify-content:center;margin:10px;}span{font-size:24px;font-weight:900;color:white;text-shadow:0 2px 8px rgba(0,0,0,0.3);}` },
      { id: 'UE027-B', html: `<div class="box"><span>Привет!</span></div>`, css: `.box{width:220px;height:100px;background:linear-gradient(to top left,#6366f1,#a855f7,#ec4899);border-radius:16px;display:flex;align-items:center;justify-content:center;margin:10px;}span{font-size:24px;font-weight:900;color:white;text-shadow:0 2px 8px rgba(0,0,0,0.3);}` },
      { id: 'UE027-C', html: `<div class="box"><span>Привет!</span></div>`, css: `.box{width:220px;height:100px;background:#6366f1;border-radius:16px;display:flex;align-items:center;justify-content:center;margin:10px;}span{font-size:24px;font-weight:900;color:white;text-shadow:0 2px 8px rgba(0,0,0,0.3);}` },
      { id: 'UE027-D', html: `<div class="box"><span>Привет!</span></div>`, css: `.box{width:220px;height:100px;background:linear-gradient(to right,#6366f1,#a855f7,#ec4899);border-radius:0;display:flex;align-items:center;justify-content:center;margin:10px;}span{font-size:24px;font-weight:900;color:white;text-shadow:0 2px 8px rgba(0,0,0,0.3);}` },
    ],
    explanation: 'to bottom right — диагональный градиент вправо-вниз (фиолетовый слева-сверху, розовый справа-снизу). to top left — зеркально. Один цвет — сплошной. border-radius: 0 — острые углы.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/gradient/linear-gradient',
    keyProps: ['background', 'border-radius'],
  },

  // ── UE028: display flex gap ────────────────────────────────────────────────
  {
    id: 'UE028', topic: 'flexbox', difficulty: 'easy',
    displayHtml: `<div class="nav">
  <div class="logo">🎯</div>
  <nav class="links">
    <a>Главная</a>
    <a>О нас</a>
    <a>Контакты</a>
  </nav>
</div>`,
    displayCss: `.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1e293b;
  padding: 0 16px;
  height: 56px;
  width: 270px;
}
.logo { font-size: 24px; }
.links { display: flex; gap: 16px; }
a { color: rgba(255,255,255,0.8); font-size: 14px; font-weight: 500; }`,
    renderWidth: 300, renderHeight: 80,
    correctVariantId: 'UE028-A',
    variants: [
      { id: 'UE028-A', html: `<div class="nav"><div class="logo">🎯</div><nav class="links"><a>Главная</a><a>О нас</a><a>Контакты</a></nav></div>`, css: `.nav{display:flex;justify-content:space-between;align-items:center;background:#1e293b;padding:0 16px;height:56px;width:270px;}.logo{font-size:24px;}.links{display:flex;gap:16px;}a{color:rgba(255,255,255,0.8);font-size:14px;font-weight:500;}` },
      { id: 'UE028-B', html: `<div class="nav"><div class="logo">🎯</div><nav class="links"><a>Главная</a><a>О нас</a><a>Контакты</a></nav></div>`, css: `.nav{display:flex;justify-content:flex-start;align-items:center;background:#1e293b;padding:0 16px;height:56px;width:270px;gap:16px;}.logo{font-size:24px;}.links{display:flex;gap:16px;}a{color:rgba(255,255,255,0.8);font-size:14px;font-weight:500;}` },
      { id: 'UE028-C', html: `<div class="nav"><div class="logo">🎯</div><nav class="links"><a>Главная</a><a>О нас</a><a>Контакты</a></nav></div>`, css: `.nav{display:flex;flex-direction:column;justify-content:center;background:#1e293b;padding:0 16px;height:56px;width:270px;}.logo{font-size:24px;}.links{display:flex;gap:6px;}a{color:rgba(255,255,255,0.8);font-size:12px;font-weight:500;}` },
      { id: 'UE028-D', html: `<div class="nav"><div class="logo">🎯</div><nav class="links"><a>Главная</a><a>О нас</a><a>Контакты</a></nav></div>`, css: `.nav{display:flex;justify-content:center;align-items:center;gap:24px;background:#1e293b;padding:0 16px;height:56px;width:270px;}.logo{font-size:24px;}.links{display:flex;gap:16px;}a{color:rgba(255,255,255,0.8);font-size:14px;font-weight:500;}` },
    ],
    explanation: 'space-between прижимает логотип влево, ссылки вправо. flex-start — всё у левого края. column — логотип над ссылками. center — всё по центру.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/justify-content',
    keyProps: ['justify-content'],
  },

  // ── UE029: outline vs border ───────────────────────────────────────────────
  {
    id: 'UE029', topic: 'visual', difficulty: 'easy',
    displayHtml: `<div class="wrap">
  <div class="btn">Нажми меня</div>
</div>`,
    displayCss: `.wrap {
  padding: 20px;
  background: #94a3b8;
  width: 240px;
}
.btn {
  padding: 12px 24px;
  background: #6366f1;
  color: white;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  border-radius: 8px;
  outline: 4px solid #f59e0b;
  outline-offset: 4px;
}`,
    renderWidth: 300, renderHeight: 110,
    correctVariantId: 'UE029-A',
    variants: [
      { id: 'UE029-A', html: `<div class="wrap"><div class="btn">Нажми меня</div></div>`, css: `.wrap{padding:20px;background:#94a3b8;width:240px;}.btn{padding:12px 24px;background:#6366f1;color:white;font-weight:bold;font-size:16px;text-align:center;border-radius:8px;outline:4px solid #f59e0b;outline-offset:4px;}` },
      { id: 'UE029-B', html: `<div class="wrap"><div class="btn">Нажми меня</div></div>`, css: `.wrap{padding:20px;background:#94a3b8;width:240px;}.btn{padding:12px 24px;background:#6366f1;color:white;font-weight:bold;font-size:16px;text-align:center;border-radius:8px;border:4px solid #f59e0b;}` },
      { id: 'UE029-C', html: `<div class="wrap"><div class="btn">Нажми меня</div></div>`, css: `.wrap{padding:20px;background:#94a3b8;width:240px;}.btn{padding:12px 24px;background:#6366f1;color:white;font-weight:bold;font-size:16px;text-align:center;border-radius:8px;}` },
      { id: 'UE029-D', html: `<div class="wrap"><div class="btn">Нажми меня</div></div>`, css: `.wrap{padding:20px;background:#94a3b8;width:240px;}.btn{padding:12px 24px;background:#6366f1;color:white;font-weight:bold;font-size:16px;text-align:center;border-radius:8px;outline:4px solid #f59e0b;outline-offset:0;}` },
    ],
    explanation: 'outline — контур СНАРУЖИ элемента (не занимает место). outline-offset: 4px — зазор между элементом и контуром. border — занимает место внутри. outline-offset: 0 — контур вплотную к элементу.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/outline',
    keyProps: ['outline', 'outline-offset'],
  },

  // ── UE030: z-index простой ─────────────────────────────────────────────────
  {
    id: 'UE030', topic: 'stacking', difficulty: 'easy',
    displayHtml: `<div class="scene">
  <div class="red">Красный</div>
  <div class="blue">Синий</div>
</div>`,
    displayCss: `.scene {
  position: relative;
  width: 240px;
  height: 120px;
  background: #94a3b8;
}
.red {
  position: absolute;
  width: 140px;
  height: 80px;
  background: #ef4444;
  color: white;
  font-weight: bold;
  top: 10px; left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
.blue {
  position: absolute;
  width: 140px;
  height: 80px;
  background: #3b82f6;
  color: white;
  font-weight: bold;
  top: 30px; left: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}`,
    renderWidth: 300, renderHeight: 150,
    correctVariantId: 'UE030-A',
    variants: [
      { id: 'UE030-A', html: `<div class="scene"><div class="red">Красный</div><div class="blue">Синий</div></div>`, css: `.scene{position:relative;width:240px;height:120px;background:#94a3b8;}.red{position:absolute;width:140px;height:80px;background:#ef4444;color:white;font-weight:bold;top:10px;left:10px;display:flex;align-items:center;justify-content:center;z-index:2;}.blue{position:absolute;width:140px;height:80px;background:#3b82f6;color:white;font-weight:bold;top:30px;left:80px;display:flex;align-items:center;justify-content:center;z-index:1;}` },
      { id: 'UE030-B', html: `<div class="scene"><div class="red">Красный</div><div class="blue">Синий</div></div>`, css: `.scene{position:relative;width:240px;height:120px;background:#94a3b8;}.red{position:absolute;width:140px;height:80px;background:#ef4444;color:white;font-weight:bold;top:10px;left:10px;display:flex;align-items:center;justify-content:center;z-index:1;}.blue{position:absolute;width:140px;height:80px;background:#3b82f6;color:white;font-weight:bold;top:30px;left:80px;display:flex;align-items:center;justify-content:center;z-index:2;}` },
      { id: 'UE030-C', html: `<div class="scene"><div class="red">Красный</div><div class="blue">Синий</div></div>`, css: `.scene{position:relative;width:240px;height:120px;background:#94a3b8;}.red{position:absolute;width:140px;height:80px;background:#ef4444;color:white;font-weight:bold;top:10px;left:10px;display:flex;align-items:center;justify-content:center;z-index:0;}.blue{position:absolute;width:140px;height:80px;background:#3b82f6;color:white;font-weight:bold;top:30px;left:80px;display:flex;align-items:center;justify-content:center;z-index:0;}` },
      { id: 'UE030-D', html: `<div class="scene"><div class="blue">Синий</div><div class="red">Красный</div></div>`, css: `.scene{position:relative;width:240px;height:120px;background:#94a3b8;}.red{position:absolute;width:140px;height:80px;background:#ef4444;color:white;font-weight:bold;top:10px;left:10px;display:flex;align-items:center;justify-content:center;}.blue{position:absolute;width:140px;height:80px;background:#3b82f6;color:white;font-weight:bold;top:30px;left:80px;display:flex;align-items:center;justify-content:center;}` },
    ],
    explanation: 'z-index: 2 > z-index: 1 → красный поверх синего. При z-index: 1 у красного и 2 у синего — синий поверх. Оба z-index: 0 — порядок по HTML (синий второй, поверх). Без z-index — тоже порядок по HTML.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/z-index',
    keyProps: ['z-index'],
  },

  // ── UE031: gap in grid ─────────────────────────────────────────────────────
  {
    id: 'UE031', topic: 'grid', difficulty: 'easy',
    displayHtml: `<div class="g">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</div>`,
    displayCss: `.g {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  background: #6ee7b7;
  padding: 12px;
  width: 250px;
}
.g > div {
  background: #059669;
  color: white;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  border-radius: 6px;
}`,
    renderWidth: 300, renderHeight: 155,
    correctVariantId: 'UE031-A',
    variants: [
      { id: 'UE031-A', html: `<div class="g"><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div></div>`, css: `.g{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;background:#6ee7b7;padding:12px;width:250px;}.g>div{background:#059669;color:white;height:44px;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:bold;border-radius:6px;}` },
      { id: 'UE031-B', html: `<div class="g"><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div></div>`, css: `.g{display:grid;grid-template-columns:repeat(3,1fr);gap:0;background:#6ee7b7;padding:12px;width:250px;}.g>div{background:#059669;color:white;height:44px;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:bold;border-radius:6px;}` },
      { id: 'UE031-C', html: `<div class="g"><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div></div>`, css: `.g{display:grid;grid-template-columns:repeat(3,1fr);gap:4px;background:#6ee7b7;padding:12px;width:250px;}.g>div{background:#059669;color:white;height:44px;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:bold;border-radius:6px;}` },
      { id: 'UE031-D', html: `<div class="g"><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div></div>`, css: `.g{display:grid;grid-template-columns:repeat(3,1fr);gap:32px;background:#6ee7b7;padding:12px;width:250px;}.g>div{background:#059669;color:white;height:44px;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:bold;border-radius:6px;}` },
    ],
    explanation: 'gap: 16px — заметный зазор между ячейками сетки. 0 — ячейки вплотную. 4px — маленький зазор. 32px — очень большой зазор, ячейки далеко друг от друга.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/gap',
    keyProps: ['gap'],
  },

  // ── UE032: letter-spacing ─────────────────────────────────────────────────
  {
    id: 'UE032', topic: 'text', difficulty: 'easy',
    displayHtml: `<p class="t">ЗАГОЛОВОК</p>`,
    displayCss: `.t {
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 10px;
  padding: 20px;
  color: #0f172a;
  background: #94a3b8;
  width: 260px;
  text-align: center;
}`,
    renderWidth: 300, renderHeight: 80,
    correctVariantId: 'UE032-A',
    variants: [
      { id: 'UE032-A', html: `<p class="t">ЗАГОЛОВОК</p>`, css: `.t{font-size:20px;font-weight:800;letter-spacing:10px;padding:20px;color:#0f172a;background:#94a3b8;width:260px;text-align:center;}` },
      { id: 'UE032-B', html: `<p class="t">ЗАГОЛОВОК</p>`, css: `.t{font-size:20px;font-weight:800;letter-spacing:0;padding:20px;color:#0f172a;background:#94a3b8;width:260px;text-align:center;}` },
      { id: 'UE032-C', html: `<p class="t">ЗАГОЛОВОК</p>`, css: `.t{font-size:20px;font-weight:800;letter-spacing:3px;padding:20px;color:#0f172a;background:#94a3b8;width:260px;text-align:center;}` },
      { id: 'UE032-D', html: `<p class="t">ЗАГОЛОВОК</p>`, css: `.t{font-size:20px;font-weight:800;letter-spacing:-2px;padding:20px;color:#0f172a;background:#94a3b8;width:260px;text-align:center;}` },
    ],
    explanation: 'letter-spacing: 10px — огромный межбуквенный интервал, буквы далеко друг от друга. 0 — стандартный. 3px — небольшой. -2px — буквы сжаты, наезжают друг на друга.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/letter-spacing',
    keyProps: ['letter-spacing'],
  },

  // ── UE033: visibility hidden ──────────────────────────────────────────────
{
    id: 'UE033', topic: 'display', difficulty: 'easy',
    displayHtml: `<div class="list">
  <div class="item">Первый</div>
  <div class="item hidden">СКРЫТЫЙ</div>
  <div class="item">Третий</div>
</div>`,
    displayCss: `.list {
  background: #a78bfa;
  padding: 10px;
  width: 200px;
}
.item {
  background: #7c3aed;
  color: white;
  padding: 10px 14px;
  margin: 6px 0;
  font-weight: bold;
  border-radius: 6px;
}
.hidden {
  visibility: hidden;
}`,
    renderWidth: 300, renderHeight: 165,
    correctVariantId: 'UE033-A',
    variants: [
      {
        // A (correct): visibility:hidden — пустое место между Первым и Третьим
        id: 'UE033-A',
        html: `<div class="list"><div class="item">Первый</div><div class="item hidden">СКРЫТЫЙ</div><div class="item">Третий</div></div>`,
        css: `.list{background:#a78bfa;padding:10px;width:200px;}.item{background:#7c3aed;color:white;padding:10px 14px;margin:6px 0;font-weight:bold;border-radius:6px;}.hidden{visibility:hidden;}`
      },
      {
        // B: display:none — элемента нет, блоки вплотную
        id: 'UE033-B',
        html: `<div class="list"><div class="item">Первый</div><div class="item hidden">СКРЫТЫЙ</div><div class="item">Третий</div></div>`,
        css: `.list{background:#a78bfa;padding:10px;width:200px;}.item{background:#7c3aed;color:white;padding:10px 14px;margin:6px 0;font-weight:bold;border-radius:6px;}.hidden{display:none;}`
      },
      {
        // C: opacity:0.3 — блок полупрозрачный, но ВИДЕН
        id: 'UE033-C',
        html: `<div class="list"><div class="item">Первый</div><div class="item hidden">СКРЫТЫЙ</div><div class="item">Третий</div></div>`,
        css: `.list{background:#a78bfa;padding:10px;width:200px;}.item{background:#7c3aed;color:white;padding:10px 14px;margin:6px 0;font-weight:bold;border-radius:6px;}.hidden{opacity:0.3;}`
      },
      {
        // D: без скрытия — все 3 блока полностью видны
        id: 'UE033-D',
        html: `<div class="list"><div class="item">Первый</div><div class="item hidden">СКРЫТЫЙ</div><div class="item">Третий</div></div>`,
        css: `.list{background:#a78bfa;padding:10px;width:200px;}.item{background:#7c3aed;color:white;padding:10px 14px;margin:6px 0;font-weight:bold;border-radius:6px;}`
      },
    ],
    explanation: 'visibility: hidden — элемент невидим, но место занимает (пустая полоса). display: none — место тоже исчезает, блоки вплотную. opacity: 0.3 — блок бледный, но читаемый. Без скрытия — все три видны.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/visibility',
    keyProps: ['visibility'],
  },

  // ── UE034: margin collapse siblings ───────────────────────────────────────
  {
    id: 'UE034', topic: 'box-model', difficulty: 'easy',
    displayHtml: `<div class="wrap">
  <div class="box a">margin-bottom: 40px</div>
  <div class="box b">margin-top: 40px</div>
</div>`,
    displayCss: `.wrap {
  background: #fef3c7;
  width: 220px;
  padding: 1px 10px;
}
.box {
  background: #d97706;
  color: white;
  padding: 8px 10px;
  font-size: 12px;
  text-align: center;
  font-weight: bold;
}
.a { margin-bottom: 40px; }
.b { margin-top: 40px; }`,
    renderWidth: 300, renderHeight: 150,
    correctVariantId: 'UE034-A',
    variants: [
      { id: 'UE034-A', html: `<div class="wrap"><div class="box a">margin-bottom: 40px</div><div class="box b">margin-top: 40px</div></div>`, css: `.wrap{background:#fef3c7;width:220px;padding:1px 10px;}.box{background:#d97706;color:white;padding:8px 10px;font-size:12px;text-align:center;font-weight:bold;}.a{margin-bottom:40px;}.b{margin-top:40px;}` },
      { id: 'UE034-B', html: `<div class="wrap"><div class="box a">margin-bottom: 40px</div><div class="box b">margin-top: 40px</div></div>`, css: `.wrap{background:#fef3c7;width:220px;padding:1px 10px;display:flex;flex-direction:column;}.box{background:#d97706;color:white;padding:8px 10px;font-size:12px;text-align:center;font-weight:bold;}.a{margin-bottom:40px;}.b{margin-top:40px;}` },
      { id: 'UE034-C', html: `<div class="wrap"><div class="box a">margin-bottom: 40px</div><div class="box b">margin-top: 40px</div></div>`, css: `.wrap{background:#fef3c7;width:220px;padding:1px 10px;}.box{background:#d97706;color:white;padding:8px 10px;font-size:12px;text-align:center;font-weight:bold;}.a{margin-bottom:10px;}.b{margin-top:10px;}` },
      { id: 'UE034-D', html: `<div class="wrap"><div class="box a">margin-bottom: 40px</div><div class="box b">margin-top: 40px</div></div>`, css: `.wrap{background:#fef3c7;width:220px;padding:1px 10px;}.box{background:#d97706;color:white;padding:8px 10px;font-size:12px;text-align:center;font-weight:bold;}.a{margin-bottom:0;}.b{margin-top:0;}` },
    ],
    explanation: 'Схлопывание margin: два соседних блочных элемента с margin-bottom:40 и margin-top:40 дают НЕ 80px, а 40px (берётся большее). Во flex схлопывания нет → 80px. 10+10=10px (схлопывается). 0+0=0.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing',
    keyProps: ['margin-bottom', 'margin-top'],
  },

  // ── UE035: flex-wrap ──────────────────────────────────────────────────────
  {
    id: 'UE035', topic: 'flexbox', difficulty: 'easy',
    displayHtml: `<div class="row">
  <div class="i">A</div>
  <div class="i">B</div>
  <div class="i">C</div>
  <div class="i">D</div>
  <div class="i">E</div>
</div>`,
    displayCss: `.row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 200px;
  background: #fef9c3;
  padding: 8px;
  border: 2px solid #fde68a;
}
.i {
  width: 70px;
  height: 60px;
  background: #ca8a04;
  color: white;
  font-size: 22px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
}`,
    renderWidth: 300, renderHeight: 170,
    correctVariantId: 'UE035-A',
    variants: [
      { id: 'UE035-A', html: `<div class="row"><div class="i">A</div><div class="i">B</div><div class="i">C</div><div class="i">D</div><div class="i">E</div></div>`, css: `.row{display:flex;flex-wrap:wrap;gap:8px;width:200px;background:#fef9c3;padding:8px;border:2px solid #fde68a;}.i{width:70px;height:60px;background:#ca8a04;color:white;font-size:22px;font-weight:bold;display:flex;align-items:center;justify-content:center;border-radius:6px;}` },
      { id: 'UE035-B', html: `<div class="row"><div class="i">A</div><div class="i">B</div><div class="i">C</div><div class="i">D</div><div class="i">E</div></div>`, css: `.row{display:flex;flex-wrap:nowrap;gap:8px;width:200px;background:#fef9c3;padding:8px;border:2px solid #fde68a;overflow:hidden;}.i{width:70px;height:60px;background:#ca8a04;color:white;font-size:22px;font-weight:bold;display:flex;align-items:center;justify-content:center;border-radius:6px;flex-shrink:0;}` },
      { id: 'UE035-C', html: `<div class="row"><div class="i">A</div><div class="i">B</div><div class="i">C</div><div class="i">D</div><div class="i">E</div></div>`, css: `.row{display:flex;flex-wrap:wrap-reverse;gap:8px;width:200px;background:#fef9c3;padding:8px;border:2px solid #fde68a;}.i{width:70px;height:60px;background:#ca8a04;color:white;font-size:22px;font-weight:bold;display:flex;align-items:center;justify-content:center;border-radius:6px;}` },
      { id: 'UE035-D', html: `<div class="row"><div class="i">A</div><div class="i">B</div><div class="i">C</div><div class="i">D</div><div class="i">E</div></div>`, css: `.row{display:grid;grid-template-columns:repeat(2,70px);gap:8px;width:200px;background:#fef9c3;padding:8px;border:2px solid #fde68a;}.i{height:60px;background:#ca8a04;color:white;font-size:22px;font-weight:bold;display:flex;align-items:center;justify-content:center;border-radius:6px;}` },
    ],
    explanation: 'flex-wrap: wrap — элементы переносятся на следующую строку. A B в первой строке, C D во второй, E в третьей. nowrap — всё в одну строку (с обрезкой). wrap-reverse — перенос в обратном направлении. grid — аналогично, но через CSS grid.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/flex-wrap',
    keyProps: ['flex-wrap'],
  },
]
