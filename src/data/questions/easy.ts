import type { Question } from '@/types'

// ─────────────────────────────────────────────────────────────────────────────
// EASY QUESTIONS — 0:25 — 30 штук
// ─────────────────────────────────────────────────────────────────────────────

export const easyQuestions: Question[] = [
  // ─── E001: justify-content: center ─────────────────────────────────────────
  {
    id: 'E001',
    topic: 'flexbox',
    difficulty: 'medium',
    displayHtml: `<div class="box">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>`,
    displayCss: `.box {
  display: flex;
  justify-content: center;
  background: #7dd3fc;
  width: 300px;
  height: 120px;
  gap: 8px;
  align-items: center;
}
.item {
  width: 60px;
  height: 60px;
  background: #3b82f6;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
}`,
    renderWidth: 300,
    renderHeight: 120,
    correctVariantId: 'E001-A',
    variants: [
      {
        id: 'E001-A',
        html: `<div class="box"><div class="item">1</div><div class="item">2</div><div class="item">3</div></div>`,
        css: `.box{display:flex;justify-content:center;background:#7dd3fc;width:300px;height:120px;gap:8px;align-items:center;}.item{width:60px;height:60px;background:#3b82f6;color:white;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:bold;}`,
      },
      {
        id: 'E001-B',
        html: `<div class="box"><div class="item">1</div><div class="item">2</div><div class="item">3</div></div>`,
        css: `.box{display:flex;justify-content:flex-start;background:#7dd3fc;width:300px;height:120px;gap:8px;align-items:center;}.item{width:60px;height:60px;background:#3b82f6;color:white;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:bold;}`,
      },
      {
        id: 'E001-C',
        html: `<div class="box"><div class="item">1</div><div class="item">2</div><div class="item">3</div></div>`,
        css: `.box{display:flex;justify-content:flex-end;background:#7dd3fc;width:300px;height:120px;gap:8px;align-items:center;}.item{width:60px;height:60px;background:#3b82f6;color:white;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:bold;}`,
      },
      {
        id: 'E001-D',
        html: `<div class="box"><div class="item">1</div><div class="item">2</div><div class="item">3</div></div>`,
        css: `.box{display:flex;justify-content:space-between;background:#7dd3fc;width:300px;height:120px;gap:8px;align-items:center;}.item{width:60px;height:60px;background:#3b82f6;color:white;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:bold;}`,
      },
    ],
    explanation: 'justify-content: center выравнивает flex-элементы по центру главной оси (горизонтальной при flex-direction: row). Элементы собираются в середину контейнера.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/justify-content',
    keyProps: ['justify-content'],
  },

  // ─── E002: align-items: center ─────────────────────────────────────────────
  {
    id: 'E002',
    topic: 'flexbox',
    difficulty: 'medium',
    displayHtml: `<div class="box">
  <div class="item small">A</div>
  <div class="item big">B</div>
  <div class="item small">C</div>
</div>`,
    displayCss: `.box {
  display: flex;
  align-items: center;
  background: #86efac;
  width: 300px;
  height: 140px;
  gap: 8px;
  padding: 8px;
}
.item { background: #22c55e; color: white; display: flex;
        align-items: center; justify-content: center;
        font-weight: bold; font-size: 18px; }
.small { width: 60px; height: 50px; }
.big   { width: 60px; height: 100px; }`,
    renderWidth: 300,
    renderHeight: 140,
    correctVariantId: 'E002-A',
    variants: [
      {
        id: 'E002-A',
        html: `<div class="box"><div class="item small">A</div><div class="item big">B</div><div class="item small">C</div></div>`,
        css: `.box{display:flex;align-items:center;background:#86efac;width:300px;height:140px;gap:8px;padding:8px;}.item{background:#22c55e;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:18px;}.small{width:60px;height:50px;}.big{width:60px;height:100px;}`,
      },
      {
        id: 'E002-B',
        html: `<div class="box"><div class="item small">A</div><div class="item big">B</div><div class="item small">C</div></div>`,
        css: `.box{display:flex;align-items:flex-start;background:#86efac;width:300px;height:140px;gap:8px;padding:8px;}.item{background:#22c55e;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:18px;}.small{width:60px;height:50px;}.big{width:60px;height:100px;}`,
      },
      {
        id: 'E002-C',
        html: `<div class="box"><div class="item small">A</div><div class="item big">B</div><div class="item small">C</div></div>`,
        css: `.box{display:flex;align-items:flex-end;background:#86efac;width:300px;height:140px;gap:8px;padding:8px;}.item{background:#22c55e;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:18px;}.small{width:60px;height:50px;}.big{width:60px;height:100px;}`,
      },
      {
        id: 'E002-D',
        html: `<div class="box"><div class="item small">A</div><div class="item big">B</div><div class="item small">C</div></div>`,
        css: `.box{display:flex;align-items:stretch;background:#86efac;width:300px;height:140px;gap:8px;padding:8px;}.item{background:#22c55e;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:18px;}.small{width:60px;}.big{width:60px;}`,
      },
    ],
    explanation: 'align-items: center выравнивает flex-элементы по центру поперечной оси (по вертикали). Маленькие блоки A и C оказываются на одной высоте с серединой большого блока B.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/align-items',
    keyProps: ['align-items'],
  },

  // ─── E003: flex-direction: column ──────────────────────────────────────────
  {
    id: 'E003',
    topic: 'flexbox',
    difficulty: 'medium',
    displayHtml: `<div class="box">
  <div class="item">Top</div>
  <div class="item">Mid</div>
  <div class="item">Bot</div>
</div>`,
    displayCss: `.box {
  display: flex;
  flex-direction: column;
  background: #f472b6;
  width: 140px;
  height: 180px;
  gap: 8px;
  padding: 8px;
}
.item {
  background: #ec4899;
  color: white;
  padding: 8px;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
}`,
    renderWidth: 300,
    renderHeight: 180,
    correctVariantId: 'E003-A',
    variants: [
      {
        id: 'E003-A',
        html: `<div class="box"><div class="item">Top</div><div class="item">Mid</div><div class="item">Bot</div></div>`,
        css: `.box{display:flex;flex-direction:column;background:#f472b6;width:140px;height:180px;gap:8px;padding:8px;}.item{background:#ec4899;color:white;padding:8px;text-align:center;font-weight:bold;font-size:14px;}`,
      },
      {
        id: 'E003-B',
        html: `<div class="box"><div class="item">Top</div><div class="item">Mid</div><div class="item">Bot</div></div>`,
        css: `.box{display:flex;flex-direction:row;background:#f472b6;width:140px;height:180px;gap:8px;padding:8px;}.item{background:#ec4899;color:white;padding:8px;text-align:center;font-weight:bold;font-size:14px;}`,
      },
      {
        id: 'E003-C',
        html: `<div class="box"><div class="item">Top</div><div class="item">Mid</div><div class="item">Bot</div></div>`,
        css: `.box{display:flex;flex-direction:column-reverse;background:#f472b6;width:140px;height:180px;gap:8px;padding:8px;}.item{background:#ec4899;color:white;padding:8px;text-align:center;font-weight:bold;font-size:14px;}`,
      },
      {
        id: 'E003-D',
        html: `<div class="box"><div class="item">Top</div><div class="item">Mid</div><div class="item">Bot</div></div>`,
        css: `.box{display:flex;flex-direction:row-reverse;background:#f472b6;width:140px;height:180px;gap:8px;padding:8px;}.item{background:#ec4899;color:white;padding:8px;text-align:center;font-weight:bold;font-size:14px;}`,
      },
    ],
    explanation: 'flex-direction: column меняет главную ось с горизонтальной на вертикальную — элементы выстраиваются сверху вниз. column-reverse — снизу вверх.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/flex-direction',
    keyProps: ['flex-direction'],
  },

  // ─── E004: box-sizing: border-box ──────────────────────────────────────────
  {
    id: 'E004',
    topic: 'box-model',
    difficulty: 'medium',
    displayHtml: `<div class="outer">
  <div class="box">200 × 100</div>
</div>`,
    displayCss: `.outer {
  width: 220px;
  height: 120px;
  background: #cbd5e1;
  padding: 10px;
}
.box {
  box-sizing: border-box;
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 4px solid #6366f1;
  background: #a5b4fc;
  color: #3730a3;
  font-weight: bold;
}`,
    renderWidth: 300,
    renderHeight: 160,
    correctVariantId: 'E004-A',
    variants: [
      {
        id: 'E004-A',
        html: `<div class="outer"><div class="box">200 × 100</div></div>`,
        css: `.outer{width:220px;height:120px;background:#cbd5e1;padding:10px;}.box{box-sizing:border-box;width:200px;height:100px;padding:20px;border:4px solid #6366f1;background:#a5b4fc;color:#3730a3;font-weight:bold;}`,
      },
      {
        id: 'E004-B',
        html: `<div class="outer"><div class="box">200 × 100</div></div>`,
        css: `.outer{width:220px;height:120px;background:#cbd5e1;padding:10px;}.box{box-sizing:content-box;width:200px;height:100px;padding:20px;border:4px solid #6366f1;background:#a5b4fc;color:#3730a3;font-weight:bold;}`,
      },
      {
        id: 'E004-C',
        html: `<div class="outer"><div class="box">200 × 100</div></div>`,
        css: `.outer{width:220px;height:120px;background:#cbd5e1;padding:10px;}.box{box-sizing:border-box;width:200px;height:100px;padding:0;border:4px solid #6366f1;background:#a5b4fc;color:#3730a3;font-weight:bold;}`,
      },
      {
        id: 'E004-D',
        html: `<div class="outer"><div class="box">200 × 100</div></div>`,
        css: `.outer{width:220px;height:120px;background:#cbd5e1;padding:10px;}.box{box-sizing:content-box;width:200px;height:100px;padding:0;border:4px solid #6366f1;background:#a5b4fc;color:#3730a3;font-weight:bold;}`,
      },
    ],
    explanation: 'box-sizing: border-box включает padding и border в указанные width/height. Итоговый элемент будет ровно 200×100 px. При content-box padding и border добавляются сверху — итог 248×148 px.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/box-sizing',
    keyProps: ['box-sizing'],
  },

  // ─── E005: display: inline-block ───────────────────────────────────────────
  {
    id: 'E005',
    topic: 'display',
    difficulty: 'medium',
    displayHtml: `<p>
  Текст
  <span class="badge">badge</span>
  ещё текст
</p>`,
    displayCss: `p {
  font-size: 16px;
  line-height: 1.5;
  background: #fef08a;
  padding: 12px;
  width: 260px;
}
.badge {
  display: inline-block;
  width: 70px;
  height: 28px;
  background: #eab308;
  color: white;
  text-align: center;
  line-height: 28px;
  font-size: 13px;
  border-radius: 4px;
  font-weight: bold;
}`,
    renderWidth: 300,
    renderHeight: 100,
    correctVariantId: 'E005-A',
    variants: [
      {
        id: 'E005-A',
        html: `<p>Текст <span class="badge">badge</span> ещё текст</p>`,
        css: `p{font-size:16px;line-height:1.5;background:#fef08a;padding:12px;width:260px;}.badge{display:inline-block;width:70px;height:28px;background:#eab308;color:white;text-align:center;line-height:28px;font-size:13px;border-radius:4px;font-weight:bold;}`,
      },
      {
        id: 'E005-B',
        html: `<p>Текст <span class="badge">badge</span> ещё текст</p>`,
        css: `p{font-size:16px;line-height:1.5;background:#fef08a;padding:12px;width:260px;}.badge{display:inline;width:70px;height:28px;background:#eab308;color:white;text-align:center;line-height:28px;font-size:13px;border-radius:4px;font-weight:bold;}`,
      },
      {
        id: 'E005-C',
        html: `<p>Текст <span class="badge">badge</span> ещё текст</p>`,
        css: `p{font-size:16px;line-height:1.5;background:#fef08a;padding:12px;width:260px;}.badge{display:block;width:70px;height:28px;background:#eab308;color:white;text-align:center;line-height:28px;font-size:13px;border-radius:4px;font-weight:bold;}`,
      },
      {
        id: 'E005-D',
        html: `<p>Текст <span class="badge">badge</span> ещё текст</p>`,
        css: `p{font-size:16px;line-height:1.5;background:#fef08a;padding:12px;width:260px;}.badge{display:flex;width:70px;height:28px;background:#eab308;color:white;text-align:center;align-items:center;justify-content:center;font-size:13px;border-radius:4px;font-weight:bold;}`,
      },
    ],
    explanation: 'inline-block позволяет задать элементу width и height, оставляя его в строчном потоке. При display: inline — width/height игнорируются. При display: block — элемент переносится на новую строку.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/display',
    keyProps: ['display'],
  },

  // ─── E006: margin: auto centering ──────────────────────────────────────────
  {
    id: 'E006',
    topic: 'box-model',
    difficulty: 'medium',
    displayHtml: `<div class="wrapper">
  <div class="inner">Центр</div>
</div>`,
    displayCss: `.wrapper {
  width: 280px;
  height: 100px;
  background: #bae6fd;
  padding: 10px;
}
.inner {
  width: 120px;
  height: 60px;
  margin: auto;
  background: #0ea5e9;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}`,
    renderWidth: 300,
    renderHeight: 120,
    correctVariantId: 'E006-A',
    variants: [
      {
        id: 'E006-A',
        html: `<div class="wrapper"><div class="inner">Центр</div></div>`,
        css: `.wrapper{width:280px;height:100px;background:#bae6fd;padding:10px;}.inner{width:120px;height:60px;margin:auto;background:#0ea5e9;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;}`,
      },
      {
        id: 'E006-B',
        html: `<div class="wrapper"><div class="inner">Центр</div></div>`,
        css: `.wrapper{width:280px;height:100px;background:#bae6fd;padding:10px;}.inner{width:120px;height:60px;margin:0;background:#0ea5e9;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;}`,
      },
      {
        id: 'E006-C',
        html: `<div class="wrapper"><div class="inner">Центр</div></div>`,
        css: `.wrapper{width:280px;height:100px;background:#bae6fd;padding:10px;}.inner{width:120px;height:60px;margin-left:auto;background:#0ea5e9;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;}`,
      },
      {
        id: 'E006-D',
        html: `<div class="wrapper"><div class="inner">Центр</div></div>`,
        css: `.wrapper{width:280px;height:100px;background:#bae6fd;padding:10px;}.inner{width:120px;height:60px;margin:auto auto 0;background:#0ea5e9;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;}`,
      },
    ],
    explanation: 'margin: auto у блочного элемента с заданной шириной распределяет свободное пространство поровну между левым и правым отступами — центрирует по горизонтали. По вертикали auto не работает в обычном потоке.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/margin',
    keyProps: ['margin'],
  },

  // ─── E007: overflow: hidden ─────────────────────────────────────────────────
  {
    id: 'E007',
    topic: 'overflow',
    difficulty: 'medium',
    displayHtml: `<div class="box">
  <div class="big">
    Длинный контент, который не помещается
  </div>
</div>`,
    displayCss: `.box {
  width: 160px;
  height: 80px;
  overflow: hidden;
  background: #94a3b8;
  border: 2px solid #94a3b8;
  padding: 8px;
}
.big {
  width: 300px;
  background: #fbbf24;
  padding: 8px;
  white-space: nowrap;
  font-size: 14px;
}`,
    renderWidth: 300,
    renderHeight: 120,
    correctVariantId: 'E007-A',
    variants: [
      {
        id: 'E007-A',
        html: `<div class="box"><div class="big">Длинный контент, который не помещается</div></div>`,
        css: `.box{width:160px;height:80px;overflow:hidden;background:#94a3b8;border:2px solid #94a3b8;padding:8px;}.big{width:300px;background:#fbbf24;padding:8px;white-space:nowrap;font-size:14px;}`,
      },
      {
        id: 'E007-B',
        html: `<div class="box"><div class="big">Длинный контент, который не помещается</div></div>`,
        css: `.box{width:160px;height:80px;overflow:visible;background:#94a3b8;border:2px solid #94a3b8;padding:8px;}.big{width:300px;background:#fbbf24;padding:8px;white-space:nowrap;font-size:14px;}`,
      },
      {
        id: 'E007-C',
        html: `<div class="box"><div class="big">Длинный контент, который не помещается</div></div>`,
        css: `.box{width:160px;height:80px;overflow:scroll;background:#94a3b8;border:2px solid #94a3b8;padding:8px;}.big{width:300px;background:#fbbf24;padding:8px;white-space:nowrap;font-size:14px;}`,
      },
      {
        id: 'E007-D',
        html: `<div class="box"><div class="big">Длинный контент, который не помещается</div></div>`,
        css: `.box{width:160px;height:80px;overflow:auto;background:#94a3b8;border:2px solid #94a3b8;padding:8px;}.big{width:300px;background:#fbbf24;padding:8px;white-space:nowrap;font-size:14px;}`,
      },
    ],
    explanation: 'overflow: hidden обрезает всё содержимое, выходящее за границы контейнера. overflow: visible (по умолчанию) позволяет контенту «вытекать» за рамки. overflow: scroll всегда показывает полосы прокрутки.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/overflow',
    keyProps: ['overflow'],
  },

  // ─── E008: flex-wrap: wrap ─────────────────────────────────────────────────
  {
    id: 'E008',
    topic: 'flexbox',
    difficulty: 'medium',
    displayHtml: `<div class="box">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>`,
    displayCss: `.box {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 200px;
  background: #86efac;
  padding: 8px;
}
.item {
  width: 80px;
  height: 60px;
  background: #16a34a;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
}`,
    renderWidth: 300,
    renderHeight: 160,
    correctVariantId: 'E008-A',
    variants: [
      {
        id: 'E008-A',
        html: `<div class="box"><div class="item">1</div><div class="item">2</div><div class="item">3</div><div class="item">4</div><div class="item">5</div></div>`,
        css: `.box{display:flex;flex-wrap:wrap;gap:8px;width:200px;background:#86efac;padding:8px;}.item{width:80px;height:60px;background:#16a34a;color:white;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:bold;}`,
      },
      {
        id: 'E008-B',
        html: `<div class="box"><div class="item">1</div><div class="item">2</div><div class="item">3</div><div class="item">4</div><div class="item">5</div></div>`,
        css: `.box{display:flex;flex-wrap:nowrap;gap:8px;width:200px;background:#86efac;padding:8px;}.item{width:80px;height:60px;background:#16a34a;color:white;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:bold;}`,
      },
      {
        id: 'E008-C',
        html: `<div class="box"><div class="item">1</div><div class="item">2</div><div class="item">3</div><div class="item">4</div><div class="item">5</div></div>`,
        css: `.box{display:flex;flex-wrap:wrap-reverse;gap:8px;width:200px;background:#86efac;padding:8px;}.item{width:80px;height:60px;background:#16a34a;color:white;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:bold;}`,
      },
      {
        id: 'E008-D',
        html: `<div class="box"><div class="item">1</div><div class="item">2</div><div class="item">3</div><div class="item">4</div><div class="item">5</div></div>`,
        css: `.box{display:flex;flex-direction:column;gap:8px;width:200px;background:#86efac;padding:8px;}.item{width:80px;height:60px;background:#16a34a;color:white;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:bold;}`,
      },
    ],
    explanation: 'flex-wrap: wrap разрешает перенос flex-элементов на следующую строку, если они не помещаются. Элементы 1–2 на первой строке, 3–4 на второй, 5 на третьей. При nowrap — все 5 сжимаются в одну строку.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/flex-wrap',
    keyProps: ['flex-wrap'],
  },

  // ─── E009: position: relative ──────────────────────────────────────────────
  {
    id: 'E009',
    topic: 'positioning',
    difficulty: 'medium',
    displayHtml: `<div class="container">
  <div class="box a">A</div>
  <div class="box b">B</div>
  <div class="box c">C</div>
</div>`,
    displayCss: `.container {
  display: flex;
  gap: 8px;
  background: #fef3c7;
  padding: 10px;
  width: 280px;
  height: 100px;
  align-items: flex-start;
}
.box {
  width: 60px;
  height: 60px;
  background: #f59e0b;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
}
.b {
  position: relative;
  top: 20px;
  left: 10px;
}`,
    renderWidth: 300,
    renderHeight: 130,
    correctVariantId: 'E009-A',
    variants: [
      {
        id: 'E009-A',
        html: `<div class="container"><div class="box a">A</div><div class="box b">B</div><div class="box c">C</div></div>`,
        css: `.container{display:flex;gap:8px;background:#fef3c7;padding:10px;width:280px;height:100px;align-items:flex-start;}.box{width:60px;height:60px;background:#f59e0b;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:20px;}.b{position:relative;top:20px;left:10px;}`,
      },
      {
        id: 'E009-B',
        html: `<div class="container"><div class="box a">A</div><div class="box b">B</div><div class="box c">C</div></div>`,
        css: `.container{display:flex;gap:8px;background:#fef3c7;padding:10px;width:280px;height:100px;align-items:flex-start;}.box{width:60px;height:60px;background:#f59e0b;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:20px;}.b{position:static;top:20px;left:10px;}`,
      },
      {
        id: 'E009-C',
        html: `<div class="container"><div class="box a">A</div><div class="box b">B</div><div class="box c">C</div></div>`,
        css: `.container{display:flex;gap:8px;background:#fef3c7;padding:10px;width:280px;height:100px;align-items:flex-start;}.box{width:60px;height:60px;background:#f59e0b;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:20px;}.b{position:relative;top:-20px;left:-10px;}`,
      },
      {
        id: 'E009-D',
        html: `<div class="container"><div class="box a">A</div><div class="box b">B</div><div class="box c">C</div></div>`,
        css: `.container{display:flex;gap:8px;background:#fef3c7;padding:10px;width:280px;height:100px;align-items:flex-start;}.box{width:60px;height:60px;background:#f59e0b;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:20px;}.b{position:relative;top:20px;left:10px;margin:0;}`,
      },
    ],
    explanation: 'position: relative смещает элемент от его исходного места в потоке при помощи top/left/right/bottom. Место в потоке сохраняется: C стоит как будто B не сдвинулся.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/position',
    keyProps: ['position', 'top', 'left'],
  },

  // ─── E010: border-radius: 50% ──────────────────────────────────────────────
  {
    id: 'E010',
    topic: 'visual',
    difficulty: 'medium',
    displayHtml: `<div class="container">
  <div class="circle">42</div>
  <div class="pill">Pill</div>
</div>`,
    displayCss: `.container {
  display: flex;
  gap: 20px;
  padding: 20px;
  background: #a78bfa;
  width: 260px;
  align-items: center;
}
.circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #7c3aed;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: bold;
}
.pill {
  width: 100px;
  height: 40px;
  border-radius: 999px;
  background: #8b5cf6;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}`,
    renderWidth: 300,
    renderHeight: 130,
    correctVariantId: 'E010-A',
    variants: [
      {
        id: 'E010-A',
        html: `<div class="container"><div class="circle">42</div><div class="pill">Pill</div></div>`,
        css: `.container{display:flex;gap:20px;padding:20px;background:#a78bfa;width:260px;align-items:center;}.circle{width:80px;height:80px;border-radius:50%;background:#7c3aed;color:white;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:bold;}.pill{width:100px;height:40px;border-radius:999px;background:#8b5cf6;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;}`,
      },
      {
        id: 'E010-B',
        html: `<div class="container"><div class="circle">42</div><div class="pill">Pill</div></div>`,
        css: `.container{display:flex;gap:20px;padding:20px;background:#a78bfa;width:260px;align-items:center;}.circle{width:80px;height:80px;border-radius:10px;background:#7c3aed;color:white;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:bold;}.pill{width:100px;height:40px;border-radius:10px;background:#8b5cf6;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;}`,
      },
      {
        id: 'E010-C',
        html: `<div class="container"><div class="circle">42</div><div class="pill">Pill</div></div>`,
        css: `.container{display:flex;gap:20px;padding:20px;background:#a78bfa;width:260px;align-items:center;}.circle{width:80px;height:80px;border-radius:0;background:#7c3aed;color:white;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:bold;}.pill{width:100px;height:40px;border-radius:0;background:#8b5cf6;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;}`,
      },
      {
        id: 'E010-D',
        html: `<div class="container"><div class="circle">42</div><div class="pill">Pill</div></div>`,
        css: `.container{display:flex;gap:20px;padding:20px;background:#a78bfa;width:260px;align-items:center;}.circle{width:80px;height:80px;border-radius:50%;background:#7c3aed;color:white;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:bold;}.pill{width:100px;height:40px;border-radius:10px;background:#8b5cf6;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;}`,
      },
    ],
    explanation: 'border-radius: 50% создаёт круг из квадратного элемента. border-radius: 999px (большое число) создаёт «таблетку» — скруглённые края у прямоугольника.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/border-radius',
    keyProps: ['border-radius'],
  },

  // ─── E011: text-align ──────────────────────────────────────────────────────
  {
    id: 'E011',
    topic: 'text',
    difficulty: 'medium',
    displayHtml: `<div class="card">
  <h2>Заголовок</h2>
  <p>Это абзац с несколькими строками текста внутри карточки.</p>
  <button>Кнопка</button>
</div>`,
    displayCss: `.card {
  width: 240px;
  padding: 16px;
  background: #fed7aa;
  border: 2px solid #fdba74;
  text-align: center;
}
h2 { margin: 0 0 8px; font-size: 18px; color: #c2410c; }
p  { margin: 0 0 12px; font-size: 14px; color: #431407; }
button {
  padding: 6px 16px;
  background: #ea580c;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
}`,
    renderWidth: 300,
    renderHeight: 160,
    correctVariantId: 'E011-A',
    variants: [
      {
        id: 'E011-A',
        html: `<div class="card"><h2>Заголовок</h2><p>Это абзац с несколькими строками текста внутри карточки.</p><button>Кнопка</button></div>`,
        css: `.card{width:240px;padding:16px;background:#fed7aa;border:2px solid #fdba74;text-align:center;}h2{margin:0 0 8px;font-size:18px;color:#c2410c;}p{margin:0 0 12px;font-size:14px;color:#431407;}button{padding:6px 16px;background:#ea580c;color:white;border:none;border-radius:4px;font-size:14px;}`,
      },
      {
        id: 'E011-B',
        html: `<div class="card"><h2>Заголовок</h2><p>Это абзац с несколькими строками текста внутри карточки.</p><button>Кнопка</button></div>`,
        css: `.card{width:240px;padding:16px;background:#fed7aa;border:2px solid #fdba74;text-align:left;}h2{margin:0 0 8px;font-size:18px;color:#c2410c;}p{margin:0 0 12px;font-size:14px;color:#431407;}button{padding:6px 16px;background:#ea580c;color:white;border:none;border-radius:4px;font-size:14px;}`,
      },
      {
        id: 'E011-C',
        html: `<div class="card"><h2>Заголовок</h2><p>Это абзац с несколькими строками текста внутри карточки.</p><button>Кнопка</button></div>`,
        css: `.card{width:240px;padding:16px;background:#fed7aa;border:2px solid #fdba74;text-align:right;}h2{margin:0 0 8px;font-size:18px;color:#c2410c;}p{margin:0 0 12px;font-size:14px;color:#431407;}button{padding:6px 16px;background:#ea580c;color:white;border:none;border-radius:4px;font-size:14px;}`,
      },
      {
        id: 'E011-D',
        html: `<div class="card"><h2>Заголовок</h2><p>Это абзац с несколькими строками текста внутри карточки.</p><button>Кнопка</button></div>`,
        css: `.card{width:240px;padding:16px;background:#fed7aa;border:2px solid #fdba74;text-align:justify;}h2{margin:0 0 8px;font-size:18px;color:#c2410c;}p{margin:0 0 12px;font-size:14px;color:#431407;}button{padding:6px 16px;background:#ea580c;color:white;border:none;border-radius:4px;font-size:14px;}`,
      },
    ],
    explanation: 'text-align: center центрирует текст и inline-элементы (включая кнопку) внутри блочного контейнера. Свойство наследуется — все дочерние элементы получают центрирование.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/text-align',
    keyProps: ['text-align'],
  },

  // ─── E012: white-space: nowrap ─────────────────────────────────────────────
  {
    id: 'E012',
    topic: 'text',
    difficulty: 'medium',
    displayHtml: `<div class="box">
  Очень длинный текст, который не должен переноситься на следующую строку
</div>`,
    displayCss: `.box {
  width: 200px;
  background: #6ee7b7;
  border: 2px solid #6ee7b7;
  padding: 12px;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
}`,
    renderWidth: 300,
    renderHeight: 100,
    correctVariantId: 'E012-A',
    variants: [
      {
        id: 'E012-A',
        html: `<div class="box">Очень длинный текст, который не должен переноситься на следующую строку</div>`,
        css: `.box{width:200px;background:#6ee7b7;border:2px solid #6ee7b7;padding:12px;font-size:14px;white-space:nowrap;overflow:hidden;}`,
      },
      {
        id: 'E012-B',
        html: `<div class="box">Очень длинный текст, который не должен переноситься на следующую строку</div>`,
        css: `.box{width:200px;background:#6ee7b7;border:2px solid #6ee7b7;padding:12px;font-size:14px;white-space:normal;overflow:hidden;}`,
      },
      {
        id: 'E012-C',
        html: `<div class="box">Очень длинный текст, который не должен переноситься на следующую строку</div>`,
        css: `.box{width:200px;background:#6ee7b7;border:2px solid #6ee7b7;padding:12px;font-size:14px;white-space:nowrap;overflow:visible;}`,
      },
      {
        id: 'E012-D',
        html: `<div class="box">Очень длинный текст, который не должен переноситься на следующую строку</div>`,
        css: `.box{width:200px;background:#6ee7b7;border:2px solid #6ee7b7;padding:12px;font-size:14px;white-space:pre-wrap;overflow:hidden;}`,
      },
    ],
    explanation: 'white-space: nowrap запрещает перенос строк. В сочетании с overflow: hidden текст просто обрезается. При normal — текст переносится по словам, занимая несколько строк.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/white-space',
    keyProps: ['white-space', 'overflow'],
  },

  // ─── E013: flex order ──────────────────────────────────────────────────────
  {
    id: 'E013',
    topic: 'flexbox',
    difficulty: 'medium',
    displayHtml: `<div class="row">
  <div class="item" style="order: 3">A</div>
  <div class="item" style="order: 1">B</div>
  <div class="item" style="order: 2">C</div>
</div>`,
    displayCss: `.row {
  display: flex;
  gap: 8px;
  background: #d8b4fe;
  padding: 10px;
  width: 260px;
}
.item {
  width: 70px;
  height: 70px;
  background: #a855f7;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  border-radius: 8px;
}`,
    renderWidth: 300,
    renderHeight: 100,
    correctVariantId: 'E013-A',
    variants: [
      {
        id: 'E013-A',
        html: `<div class="row"><div class="item" style="order:3">A</div><div class="item" style="order:1">B</div><div class="item" style="order:2">C</div></div>`,
        css: `.row{display:flex;gap:8px;background:#d8b4fe;padding:10px;width:260px;}.item{width:70px;height:70px;background:#a855f7;color:white;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:bold;border-radius:8px;}`,
      },
      {
        id: 'E013-B',
        html: `<div class="row"><div class="item">A</div><div class="item">B</div><div class="item">C</div></div>`,
        css: `.row{display:flex;gap:8px;background:#d8b4fe;padding:10px;width:260px;}.item{width:70px;height:70px;background:#a855f7;color:white;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:bold;border-radius:8px;}`,
      },
      {
        id: 'E013-C',
        html: `<div class="row"><div class="item" style="order:1">A</div><div class="item" style="order:3">B</div><div class="item" style="order:2">C</div></div>`,
        css: `.row{display:flex;gap:8px;background:#d8b4fe;padding:10px;width:260px;}.item{width:70px;height:70px;background:#a855f7;color:white;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:bold;border-radius:8px;}`,
      },
      {
        id: 'E013-D',
        html: `<div class="row"><div class="item" style="order:2">A</div><div class="item" style="order:1">B</div><div class="item" style="order:3">C</div></div>`,
        css: `.row{display:flex;gap:8px;background:#d8b4fe;padding:10px;width:260px;}.item{width:70px;height:70px;background:#a855f7;color:white;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:bold;border-radius:8px;}`,
      },
    ],
    explanation: 'Свойство order задаёт порядок отображения flex-элементов. A имеет order: 3, B — 1, C — 2. Отображаются по возрастанию: B (1), C (2), A (3).',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/order',
    keyProps: ['order'],
  },

  // ─── E014: gap in flex ─────────────────────────────────────────────────────
{
     id: 'E015', topic: 'display', difficulty: 'medium',
    /*
      Ключ к visual-align: элементы должны быть РАЗНОЙ высоты.
      Используем три inline-block блока высотой 25px, 60px, 90px.
      Тогда top/middle/bottom дают принципиально разные картинки.
    */
    displayHtml: `<div class="line">
  <span class="s">S</span>
  <span class="m">M</span>
  <span class="t">T</span>
</div>`,
    displayCss: `.line {
  background: #94a3b8;
  width: 260px;
  height: 110px;
  padding: 4px 10px;
  box-sizing: border-box;
}
.s, .m, .t {
  display: inline-block;
  width: 55px;
  color: white;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  vertical-align: top;
}
.s { height: 25px;  background: #2563eb; line-height: 25px; }
.m { height: 60px;  background: #7c3aed; line-height: 60px; }
.t { height: 95px;  background: #0f766e; line-height: 95px; }`,
    renderWidth: 300, renderHeight: 130,
    correctVariantId: 'E015-A',
    variants: [
      {
        // A (correct): vertical-align: top — все верхние края выровнены
        id: 'E015-A',
        html: `<div class="line"><span class="s">S</span><span class="m">M</span><span class="t">T</span></div>`,
        css: `.line{background:#94a3b8;width:260px;height:110px;padding:4px 10px;box-sizing:border-box;}.s,.m,.t{display:inline-block;width:55px;color:white;font-weight:bold;font-size:14px;text-align:center;vertical-align:top;}.s{height:25px;background:#2563eb;line-height:25px;}.m{height:60px;background:#7c3aed;line-height:60px;}.t{height:95px;background:#0f766e;line-height:95px;}`
      },
      {
        // B: vertical-align: bottom — нижние края выровнены (всё «висит» снизу)
        id: 'E015-B',
        html: `<div class="line"><span class="s">S</span><span class="m">M</span><span class="t">T</span></div>`,
        css: `.line{background:#94a3b8;width:260px;height:110px;padding:4px 10px;box-sizing:border-box;}.s,.m,.t{display:inline-block;width:55px;color:white;font-weight:bold;font-size:14px;text-align:center;vertical-align:bottom;}.s{height:25px;background:#2563eb;line-height:25px;}.m{height:60px;background:#7c3aed;line-height:60px;}.t{height:95px;background:#0f766e;line-height:95px;}`
      },
      {
        // C: vertical-align: middle — центры выровнены
        id: 'E015-C',
        html: `<div class="line"><span class="s">S</span><span class="m">M</span><span class="t">T</span></div>`,
        css: `.line{background:#94a3b8;width:260px;height:110px;padding:4px 10px;box-sizing:border-box;}.s,.m,.t{display:inline-block;width:55px;color:white;font-weight:bold;font-size:14px;text-align:center;vertical-align:middle;}.s{height:25px;background:#2563eb;line-height:25px;}.m{height:60px;background:#7c3aed;line-height:60px;}.t{height:95px;background:#0f766e;line-height:95px;}`
      },
      {
        // D: display: flex align-items: stretch — совсем другой подход, все растягиваются
        id: 'E015-D',
        html: `<div class="line"><span class="s">S</span><span class="m">M</span><span class="t">T</span></div>`,
        css: `.line{display:flex;align-items:flex-end;gap:10px;background:#94a3b8;width:260px;height:110px;padding:4px 10px;box-sizing:border-box;}.s,.m,.t{width:55px;color:white;font-weight:bold;font-size:14px;text-align:center;}.s{height:25px;background:#2563eb;line-height:25px;}.m{height:60px;background:#7c3aed;line-height:60px;}.t{height:95px;background:#0f766e;line-height:95px;}`
      },
    ],
    explanation: 'vertical-align: top — верхние края всех блоков на одной линии (S, M, T «свисают» вниз от верхней границы). bottom — нижние края вровень (все «растут» снизу). middle — центры на одной горизонтали. flex align-items: flex-end — flex-выравнивание по нижнему краю.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/vertical-align',
    keyProps: ['vertical-align'],
  },

  // ─── E015: align-self ──────────────────────────────────────────────────────

  // ─── E016: flex: 1 ─────────────────────────────────────────────────────────
  {
    id: 'E016',
    topic: 'flexbox',
    difficulty: 'medium',
    displayHtml: `<div class="row">
  <div class="item">Nav</div>
  <div class="item main">Main</div>
  <div class="item">Side</div>
</div>`,
    displayCss: `.row {
  display: flex;
  background: #94a3b8;
  width: 280px;
  height: 80px;
  gap: 4px;
}
.item {
  background: #64748b;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 13px;
  width: 60px;
}
.main {
  flex: 1;
  background: #0f172a;
}`,
    renderWidth: 300,
    renderHeight: 100,
    correctVariantId: 'E016-A',
    variants: [
      {
        id: 'E016-A',
        html: `<div class="row"><div class="item">Nav</div><div class="item main">Main</div><div class="item">Side</div></div>`,
        css: `.row{display:flex;background:#94a3b8;width:280px;height:80px;gap:4px;}.item{background:#64748b;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:13px;width:60px;}.main{flex:1;background:#0f172a;}`,
      },
      {
        id: 'E016-B',
        html: `<div class="row"><div class="item">Nav</div><div class="item main">Main</div><div class="item">Side</div></div>`,
        css: `.row{display:flex;background:#94a3b8;width:280px;height:80px;gap:4px;}.item{background:#64748b;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:13px;width:60px;}.main{background:#0f172a;}`,
      },
      {
        id: 'E016-C',
        html: `<div class="row"><div class="item">Nav</div><div class="item main">Main</div><div class="item">Side</div></div>`,
        css: `.row{display:flex;background:#94a3b8;width:280px;height:80px;gap:4px;}.item{flex:1;background:#64748b;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:13px;}.main{background:#0f172a;}`,
      },
      {
        id: 'E016-D',
        html: `<div class="row"><div class="item">Nav</div><div class="item main">Main</div><div class="item">Side</div></div>`,
        css: `.row{display:flex;background:#94a3b8;width:280px;height:80px;gap:4px;}.item{background:#64748b;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:13px;width:60px;}.main{flex:2;background:#0f172a;}`,
      },
    ],
    explanation: 'flex: 1 — сокращение flex-grow: 1, flex-shrink: 1, flex-basis: 0. Элемент занимает всё оставшееся свободное пространство после размещения остальных с фиксированной шириной.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/flex',
    keyProps: ['flex'],
  },

  // ─── E017: padding vs margin ───────────────────────────────────────────────
  {
    id: 'E017',
    topic: 'box-model',
    difficulty: 'medium',
    displayHtml: `<div class="wrapper">
  <div class="box">Box</div>
</div>`,
    displayCss: `.wrapper {
  background: #fef3c7;
  width: 200px;
  height: 140px;
  display: inline-block;
}
.box {
  background: #f59e0b;
  color: white;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  margin: 20px;
  padding: 20px;
}`,
    renderWidth: 300,
    renderHeight: 160,
    correctVariantId: 'E017-A',
    variants: [
      {
        id: 'E017-A',
        html: `<div class="wrapper"><div class="box">Box</div></div>`,
        css: `.wrapper{background:#fef3c7;width:200px;height:140px;display:inline-block;}.box{background:#f59e0b;color:white;font-weight:bold;font-size:18px;text-align:center;margin:20px;padding:20px;}`,
      },
      {
        id: 'E017-B',
        html: `<div class="wrapper"><div class="box">Box</div></div>`,
        css: `.wrapper{background:#fef3c7;width:200px;height:140px;display:inline-block;}.box{background:#f59e0b;color:white;font-weight:bold;font-size:18px;text-align:center;margin:0;padding:20px;}`,
      },
      {
        id: 'E017-C',
        html: `<div class="wrapper"><div class="box">Box</div></div>`,
        css: `.wrapper{background:#fef3c7;width:200px;height:140px;display:inline-block;}.box{background:#f59e0b;color:white;font-weight:bold;font-size:18px;text-align:center;margin:20px;padding:0;}`,
      },
      {
        id: 'E017-D',
        html: `<div class="wrapper"><div class="box">Box</div></div>`,
        css: `.wrapper{background:#fef3c7;width:200px;height:140px;display:inline-block;}.box{background:#f59e0b;color:white;font-weight:bold;font-size:18px;text-align:center;margin:0;padding:0;}`,
      },
    ],
    explanation: 'margin — прозрачный отступ снаружи элемента (цвет фона не виден). padding — внутренний отступ, который окрашивается в фон элемента. Оба влияют на расстояние, но по-разному.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/margin',
    keyProps: ['margin', 'padding'],
  },

  // ─── E018: z-index требует position ────────────────────────────────────────
  {
    id: 'E018',
    topic: 'stacking',
    difficulty: 'medium',
    displayHtml: `<div class="container">
  <div class="box red">z:10</div>
  <div class="box blue">z:1</div>
</div>`,
    displayCss: `.container {
  position: relative;
  width: 260px;
  height: 120px;
  background: #94a3b8;
}
.box {
  width: 120px;
  height: 80px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 16px;
  color: white;
}
.red  { background: rgba(239,68,68,0.9); top: 10px; left: 10px; z-index: 10; }
.blue { background: rgba(59,130,246,0.9); top: 30px; left: 80px; z-index: 1; }`,
    renderWidth: 300,
    renderHeight: 140,
    correctVariantId: 'E018-A',
    variants: [
      {
        // A (correct): красный z:10 ПОВЕРХ синего z:1
        id: 'E018-A',
        html: `<div class="container"><div class="box red">z:10</div><div class="box blue">z:1</div></div>`,
        css: `.container{position:relative;width:260px;height:120px;background:#94a3b8;}.box{width:120px;height:80px;position:absolute;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:16px;color:white;}.red{background:rgba(220,38,38,0.95);top:10px;left:10px;z-index:10;}.blue{background:rgba(37,99,235,0.95);top:30px;left:80px;z-index:1;}`,
      },
      {
        // B: синий z:10 ПОВЕРХ красного z:1 (значения z-index поменяны)
        id: 'E018-B',
        html: `<div class="container"><div class="box red">z:1</div><div class="box blue">z:10</div></div>`,
        css: `.container{position:relative;width:260px;height:120px;background:#94a3b8;}.box{width:120px;height:80px;position:absolute;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:16px;color:white;}.red{background:rgba(220,38,38,0.95);top:10px;left:10px;z-index:1;}.blue{background:rgba(37,99,235,0.95);top:30px;left:80px;z-index:10;}`,
      },
      {
        // C: элементы НЕ перекрываются — красный слева, синий справа
        id: 'E018-C',
        html: `<div class="container"><div class="box red">z:10</div><div class="box blue">z:1</div></div>`,
        css: `.container{position:relative;width:260px;height:120px;background:#94a3b8;}.box{width:110px;height:80px;position:absolute;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:16px;color:white;}.red{background:rgba(220,38,38,0.95);top:20px;left:8px;z-index:10;}.blue{background:rgba(37,99,235,0.95);top:20px;left:142px;z-index:1;}`,
      },
      {
        // D: оба без z-index → порядок DOM, синий (второй) рисуется поверх красного
        id: 'E018-D',
        html: `<div class="container"><div class="box red">нет z</div><div class="box blue">нет z</div></div>`,
        css: `.container{position:relative;width:260px;height:120px;background:#94a3b8;}.box{width:120px;height:80px;position:absolute;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:14px;color:white;}.red{background:rgba(220,38,38,0.95);top:10px;left:10px;}.blue{background:rgba(37,99,235,0.95);top:30px;left:80px;}`,
      },
    ],
    explanation: 'z-index: 10 у красного делает его поверх синего (z-index: 1). Оба имеют position: absolute — z-index работает. В варианте C элементы не перекрываются (разные left). В D нет z-index — порядок определяет DOM: синий второй → рисуется поверх.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/z-index',
    keyProps: ['z-index', 'position'],
  },

  // ─── E019: min-width ───────────────────────────────────────────────────────
  {
    id: 'E019',
    topic: 'sizing',
    difficulty: 'medium',
    displayHtml: `<div class="row">
  <div class="item">Short</div>
  <div class="item long">Very long text content here</div>
  <div class="item fixed">Fixed</div>
</div>`,
    displayCss: `.row {
  display: flex;
  width: 260px;
  gap: 6px;
  background: #bae6fd;
  padding: 8px;
}
.item {
  background: #0284c7;
  color: white;
  padding: 10px 6px;
  font-size: 12px;
  text-align: center;
  min-width: 0;
}
.fixed {
  min-width: 70px;
  flex-shrink: 0;
}`,
    renderWidth: 300,
    renderHeight: 80,
    correctVariantId: 'E019-A',
    variants: [
      {
        id: 'E019-A',
        html: `<div class="row"><div class="item">Short</div><div class="item long">Very long text content here</div><div class="item fixed">Fixed</div></div>`,
        css: `.row{display:flex;width:260px;gap:6px;background:#bae6fd;padding:8px;}.item{background:#0284c7;color:white;padding:10px 6px;font-size:12px;text-align:center;min-width:0;}.fixed{min-width:70px;flex-shrink:0;}`,
      },
      {
        id: 'E019-B',
        html: `<div class="row"><div class="item">Short</div><div class="item long">Very long text content here</div><div class="item fixed">Fixed</div></div>`,
        css: `.row{display:flex;width:260px;gap:6px;background:#bae6fd;padding:8px;}.item{background:#0284c7;color:white;padding:10px 6px;font-size:12px;text-align:center;min-width:0;}.fixed{min-width:70px;}`,
      },
      {
        id: 'E019-C',
        html: `<div class="row"><div class="item">Short</div><div class="item long">Very long text content here</div><div class="item fixed">Fixed</div></div>`,
        css: `.row{display:flex;width:260px;gap:6px;background:#bae6fd;padding:8px;}.item{background:#0284c7;color:white;padding:10px 6px;font-size:12px;text-align:center;}.fixed{min-width:70px;flex-shrink:0;}`,
      },
      {
        id: 'E019-D',
        html: `<div class="row"><div class="item">Short</div><div class="item long">Very long text content here</div><div class="item fixed">Fixed</div></div>`,
        css: `.row{display:flex;width:260px;gap:6px;background:#bae6fd;padding:8px;}.item{background:#0284c7;color:white;padding:10px 6px;font-size:12px;text-align:center;width:33%;}.fixed{min-width:70px;flex-shrink:0;}`,
      },
    ],
    explanation: 'min-width: 0 у flex-элементов снимает ограничение по минимальному размеру (по умолчанию auto = content width). flex-shrink: 0 у .fixed запрещает ему сжиматься ниже min-width: 70px.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/min-width',
    keyProps: ['min-width', 'flex-shrink'],
  },

  // ─── E020: opacity inheritance ─────────────────────────────────────────────
  {
    id: 'E020',
    topic: 'visual',
    difficulty: 'medium',
    displayHtml: `<div class="parent">
  <div class="child">Дочерний</div>
</div>`,
    displayCss: `.parent {
  width: 200px;
  height: 120px;
  background: #dc2626;
  padding: 20px;
  opacity: 0.4;
  display: flex;
  align-items: center;
  justify-content: center;
}
.child {
  background: #1e40af;
  color: white;
  padding: 10px 16px;
  font-weight: bold;
  opacity: 1;
}`,
    renderWidth: 300,
    renderHeight: 160,
    correctVariantId: 'E020-A',
    variants: [
      {
        id: 'E020-A',
        html: `<div class="parent"><div class="child">Дочерний</div></div>`,
        css: `.parent{width:200px;height:120px;background:#dc2626;padding:20px;opacity:0.4;display:flex;align-items:center;justify-content:center;}.child{background:#1e40af;color:white;padding:10px 16px;font-weight:bold;opacity:1;}`,
      },
      {
        id: 'E020-B',
        html: `<div class="parent"><div class="child">Дочерний</div></div>`,
        css: `.parent{width:200px;height:120px;background:#dc2626;padding:20px;opacity:1;display:flex;align-items:center;justify-content:center;}.child{background:#1e40af;color:white;padding:10px 16px;font-weight:bold;opacity:0.4;}`,
      },
      {
        id: 'E020-C',
        html: `<div class="parent"><div class="child">Дочерний</div></div>`,
        css: `.parent{width:200px;height:120px;background:#dc2626;padding:20px;display:flex;align-items:center;justify-content:center;}.child{background:#1e40af;color:white;padding:10px 16px;font-weight:bold;}`,
      },
      {
        id: 'E020-D',
        html: `<div class="parent"><div class="child">Дочерний</div></div>`,
        css: `.parent{width:200px;height:120px;background:rgba(220,38,38,0.4);padding:20px;display:flex;align-items:center;justify-content:center;}.child{background:#1e40af;color:white;padding:10px 16px;font-weight:bold;}`,
      },
    ],
    explanation: 'opacity на родителе влияет на весь его контент, включая дочерние элементы. opacity: 1 на дочернем не «отменяет» родительский — итоговая непрозрачность перемножается. rgba() на фон не затрагивает дочерние.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/opacity',
    keyProps: ['opacity'],
  },

  // ─── E021: position: absolute ──────────────────────────────────────────────
  {
    id: 'E021',
    topic: 'positioning',
    difficulty: 'medium',
    displayHtml: `<div class="container">
  <p>Обычный текст</p>
  <div class="abs">ABS</div>
  <p>Ещё текст</p>
</div>`,
    displayCss: `.container {
  position: relative;
  width: 240px;
  height: 140px;
  background: #9ca3af;
  border: 2px dashed #94a3b8;
  padding: 10px;
}
p { margin: 0 0 6px; font-size: 13px; }
.abs {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 60px;
  height: 60px;
  background: #f43f5e;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
}`,
    renderWidth: 300,
    renderHeight: 170,
    correctVariantId: 'E021-A',
    variants: [
      {
        id: 'E021-A',
        html: `<div class="container"><p>Обычный текст</p><div class="abs">ABS</div><p>Ещё текст</p></div>`,
        css: `.container{position:relative;width:240px;height:140px;background:#9ca3af;border:2px dashed #94a3b8;padding:10px;}p{margin:0 0 6px;font-size:13px;}.abs{position:absolute;top:10px;right:10px;width:60px;height:60px;background:#f43f5e;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:14px;}`,
      },
      {
        id: 'E021-B',
        html: `<div class="container"><p>Обычный текст</p><div class="abs">ABS</div><p>Ещё текст</p></div>`,
        css: `.container{position:relative;width:240px;height:140px;background:#9ca3af;border:2px dashed #94a3b8;padding:10px;}p{margin:0 0 6px;font-size:13px;}.abs{position:relative;top:10px;right:10px;width:60px;height:60px;background:#f43f5e;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:14px;}`,
      },
      {
        id: 'E021-C',
        html: `<div class="container"><p>Обычный текст</p><div class="abs">ABS</div><p>Ещё текст</p></div>`,
        css: `.container{position:relative;width:240px;height:140px;background:#9ca3af;border:2px dashed #94a3b8;padding:10px;}p{margin:0 0 6px;font-size:13px;}.abs{position:absolute;bottom:10px;left:10px;width:60px;height:60px;background:#f43f5e;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:14px;}`,
      },
      {
        id: 'E021-D',
        html: `<div class="container"><p>Обычный текст</p><div class="abs">ABS</div><p>Ещё текст</p></div>`,
        css: `.container{position:relative;width:240px;height:140px;background:#9ca3af;border:2px dashed #94a3b8;padding:10px;}p{margin:0 0 6px;font-size:13px;}.abs{position:absolute;top:10px;right:10px;width:60px;height:60px;background:#f43f5e;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:14px;right:50px;}`,
      },
    ],
    explanation: 'position: absolute выводит элемент из нормального потока — второй <p> поднимается выше. Абсолютный элемент позиционируется относительно ближайшего предка с position (здесь .container), по координатам top: 10px, right: 10px.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/position',
    keyProps: ['position', 'top', 'right'],
  },

  // ─── E022: word-break: break-all ───────────────────────────────────────────
  {
    id: 'E022',
    topic: 'text',
    difficulty: 'medium',
    displayHtml: `<div class="box">
  Superlongwordthatdoesnotfit
</div>`,
    displayCss: `.box {
  width: 140px;
  background: #86efac;
  border: 2px solid #86efac;
  padding: 10px;
  font-size: 15px;
  word-break: break-all;
}`,
    renderWidth: 300,
    renderHeight: 120,
    correctVariantId: 'E022-A',
    variants: [
      {
        id: 'E022-A',
        html: `<div class="box">Superlongwordthatdoesnotfit</div>`,
        css: `.box{width:140px;background:#86efac;border:2px solid #86efac;padding:10px;font-size:15px;word-break:break-all;}`,
      },
      {
        id: 'E022-B',
        html: `<div class="box">Superlongwordthatdoesnotfit</div>`,
        css: `.box{width:140px;background:#86efac;border:2px solid #86efac;padding:10px;font-size:15px;word-break:normal;}`,
      },
      {
        id: 'E022-C',
        html: `<div class="box">Superlongwordthatdoesnotfit</div>`,
        css: `.box{width:140px;background:#86efac;border:2px solid #86efac;padding:10px;font-size:15px;overflow-wrap:break-word;}`,
      },
      {
        id: 'E022-D',
        html: `<div class="box">Superlongwordthatdoesnotfit</div>`,
        css: `.box{width:140px;background:#86efac;border:2px solid #86efac;padding:10px;font-size:15px;white-space:nowrap;overflow:hidden;}`,
      },
    ],
    explanation: 'word-break: break-all разрывает слово в любом месте (побуквенно). overflow-wrap: break-word — аналогично, но только если слово не помещается целиком. При normal — слово вылезает за границу контейнера.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/word-break',
    keyProps: ['word-break'],
  },

  // ─── E023: display: block full-width ───────────────────────────────────────
  {
    id: 'E023',
    topic: 'display',
    difficulty: 'medium',
    displayHtml: `<div class="wrapper">
  <div class="block">block</div>
  <span class="inline">inline</span>
  <span class="inline">inline</span>
</div>`,
    displayCss: `.wrapper {
  width: 260px;
  background: #9ca3af;
  padding: 10px;
  border: 2px solid #cbd5e1;
  font-size: 15px;
}
.block {
  background: #6366f1;
  color: white;
  padding: 8px;
  font-weight: bold;
  text-align: center;
}
.inline {
  background: #a5b4fc;
  color: #1e1b4b;
  padding: 4px 8px;
  font-weight: bold;
}`,
    renderWidth: 300,
    renderHeight: 120,
    correctVariantId: 'E023-A',
    variants: [
      {
        id: 'E023-A',
        html: `<div class="wrapper"><div class="block">block</div><span class="inline">inline</span><span class="inline">inline</span></div>`,
        css: `.wrapper{width:260px;background:#9ca3af;padding:10px;border:2px solid #cbd5e1;font-size:15px;}.block{background:#6366f1;color:white;padding:8px;font-weight:bold;text-align:center;}.inline{background:#a5b4fc;color:#1e1b4b;padding:4px 8px;font-weight:bold;}`,
      },
      {
        id: 'E023-B',
        html: `<div class="wrapper"><div class="block">block</div><span class="inline">inline</span><span class="inline">inline</span></div>`,
        css: `.wrapper{width:260px;background:#9ca3af;padding:10px;border:2px solid #cbd5e1;font-size:15px;}.block{background:#6366f1;color:white;padding:8px;font-weight:bold;text-align:center;display:inline;}.inline{background:#a5b4fc;color:#1e1b4b;padding:4px 8px;font-weight:bold;}`,
      },
      {
        id: 'E023-C',
        html: `<div class="wrapper"><div class="block">block</div><span class="inline">inline</span><span class="inline">inline</span></div>`,
        css: `.wrapper{width:260px;background:#9ca3af;padding:10px;border:2px solid #cbd5e1;font-size:15px;}.block{background:#6366f1;color:white;padding:8px;font-weight:bold;text-align:center;display:inline-block;width:100px;}.inline{background:#a5b4fc;color:#1e1b4b;padding:4px 8px;font-weight:bold;}`,
      },
      {
        id: 'E023-D',
        html: `<div class="wrapper"><span class="inline">inline</span><span class="inline">inline</span><div class="block">block</div></div>`,
        css: `.wrapper{width:260px;background:#9ca3af;padding:10px;border:2px solid #cbd5e1;font-size:15px;}.block{background:#6366f1;color:white;padding:8px;font-weight:bold;text-align:center;}.inline{background:#a5b4fc;color:#1e1b4b;padding:4px 8px;font-weight:bold;}`,
      },
    ],
    explanation: 'display: block (по умолчанию у div) занимает всю доступную ширину контейнера и начинает новую строку. display: inline у span — элемент занимает лишь ширину содержимого, соседние инлайн-элементы стоят рядом.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/display',
    keyProps: ['display'],
  },

  // ─── E024: line-height ─────────────────────────────────────────────────────
  {
    id: 'E024',
    topic: 'text',
    difficulty: 'medium',
    displayHtml: `<div class="box">
  <p>Строка одна. Строка вторая. Строка третья длинная.</p>
</div>`,
    displayCss: `.box {
  width: 200px;
  background: #fef08a;
  padding: 12px;
  border: 2px solid #fde68a;
}
p {
  margin: 0;
  font-size: 14px;
  line-height: 2.5;
}`,
    renderWidth: 300,
    renderHeight: 160,
    correctVariantId: 'E024-A',
    variants: [
      {
        id: 'E024-A',
        html: `<div class="box"><p>Строка одна. Строка вторая. Строка третья длинная.</p></div>`,
        css: `.box{width:200px;background:#fef08a;padding:12px;border:2px solid #fde68a;}p{margin:0;font-size:14px;line-height:2.5;}`,
      },
      {
        id: 'E024-B',
        html: `<div class="box"><p>Строка одна. Строка вторая. Строка третья длинная.</p></div>`,
        css: `.box{width:200px;background:#fef08a;padding:12px;border:2px solid #fde68a;}p{margin:0;font-size:14px;line-height:1;}`,
      },
      {
        id: 'E024-C',
        html: `<div class="box"><p>Строка одна. Строка вторая. Строка третья длинная.</p></div>`,
        css: `.box{width:200px;background:#fef08a;padding:12px;border:2px solid #fde68a;}p{margin:0;font-size:14px;line-height:1.4;}`,
      },
      {
        id: 'E024-D',
        html: `<div class="box"><p>Строка одна. Строка вторая. Строка третья длинная.</p></div>`,
        css: `.box{width:200px;background:#fef08a;padding:12px;border:2px solid #fde68a;}p{margin:0;font-size:24px;line-height:1.4;}`,
      },
    ],
    explanation: 'line-height: 2.5 устанавливает межстрочный интервал в 2.5 × font-size, что визуально сильно растягивает строки. Число без единицы — множитель к текущему font-size.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/line-height',
    keyProps: ['line-height'],
  },

  // ─── E025: float: left ─────────────────────────────────────────────────────
  {
    id: 'E025',
    topic: 'float',
    difficulty: 'medium',
    displayHtml: `<div class="wrapper">
  <img class="img" src="" alt="img">
  <p>Текст обтекает изображение слева. Это классическое применение float для текстового обтекания медиа-контента.</p>
</div>`,
    displayCss: `.wrapper {
  width: 260px;
  background: #bae6fd;
  padding: 8px;
  overflow: hidden;
}
.img {
  float: left;
  width: 80px;
  height: 80px;
  background: #0ea5e9;
  margin-right: 10px;
  margin-bottom: 4px;
  display: block;
}
p {
  margin: 0;
  font-size: 13px;
}`,
    renderWidth: 300,
    renderHeight: 140,
    correctVariantId: 'E025-A',
    variants: [
      {
        id: 'E025-A',
        html: `<div class="wrapper"><div class="img"></div><p>Текст обтекает изображение слева. Это классическое применение float для текстового обтекания медиа-контента.</p></div>`,
        css: `.wrapper{width:260px;background:#bae6fd;padding:8px;overflow:hidden;}.img{float:left;width:80px;height:80px;background:#0ea5e9;margin-right:10px;margin-bottom:4px;display:block;}p{margin:0;font-size:13px;}`,
      },
      {
        id: 'E025-B',
        html: `<div class="wrapper"><div class="img"></div><p>Текст обтекает изображение слева. Это классическое применение float для текстового обтекания медиа-контента.</p></div>`,
        css: `.wrapper{width:260px;background:#bae6fd;padding:8px;overflow:hidden;}.img{float:right;width:80px;height:80px;background:#0ea5e9;margin-left:10px;margin-bottom:4px;display:block;}p{margin:0;font-size:13px;}`,
      },
      {
        id: 'E025-C',
        html: `<div class="wrapper"><div class="img"></div><p>Текст обтекает изображение слева. Это классическое применение float для текстового обтекания медиа-контента.</p></div>`,
        css: `.wrapper{width:260px;background:#bae6fd;padding:8px;overflow:hidden;}.img{width:80px;height:80px;background:#0ea5e9;margin-right:10px;margin-bottom:4px;display:block;}p{margin:0;font-size:13px;}`,
      },
      {
        id: 'E025-D',
        html: `<div class="wrapper"><div class="img"></div><p>Текст обтекает изображение слева. Это классическое применение float для текстового обтекания медиа-контента.</p></div>`,
        css: `.wrapper{width:260px;background:#bae6fd;padding:8px;}.img{float:left;width:80px;height:80px;background:#0ea5e9;margin-right:10px;display:block;}p{margin:0;font-size:13px;}`,
      },
    ],
    explanation: 'float: left выводит элемент из потока и прижимает его влево. Текст обтекает его справа. Без overflow: hidden на контейнере — он схлопнется, так как флоат не участвует в высоте родителя.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/float',
    keyProps: ['float', 'overflow'],
  },

  // ─── E026: grid 3 columns ─────────────────────────────────────────────────
  {
    id: 'E026',
    topic: 'grid',
    difficulty: 'medium',
    displayHtml: `<div class="grid">
  <div class="cell">1</div>
  <div class="cell">2</div>
  <div class="cell">3</div>
  <div class="cell">4</div>
  <div class="cell">5</div>
  <div class="cell">6</div>
</div>`,
    displayCss: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  background: #a78bfa;
  padding: 8px;
  width: 270px;
}
.cell {
  background: #7c3aed;
  color: white;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  border-radius: 6px;
}`,
    renderWidth: 300,
    renderHeight: 140,
    correctVariantId: 'E026-A',
    variants: [
      {
        id: 'E026-A',
        html: `<div class="grid"><div class="cell">1</div><div class="cell">2</div><div class="cell">3</div><div class="cell">4</div><div class="cell">5</div><div class="cell">6</div></div>`,
        css: `.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;background:#a78bfa;padding:8px;width:270px;}.cell{background:#7c3aed;color:white;height:50px;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:bold;border-radius:6px;}`,
      },
      {
        id: 'E026-B',
        html: `<div class="grid"><div class="cell">1</div><div class="cell">2</div><div class="cell">3</div><div class="cell">4</div><div class="cell">5</div><div class="cell">6</div></div>`,
        css: `.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;background:#a78bfa;padding:8px;width:270px;}.cell{background:#7c3aed;color:white;height:50px;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:bold;border-radius:6px;}`,
      },
      {
        id: 'E026-C',
        html: `<div class="grid"><div class="cell">1</div><div class="cell">2</div><div class="cell">3</div><div class="cell">4</div><div class="cell">5</div><div class="cell">6</div></div>`,
        css: `.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;background:#a78bfa;padding:8px;width:270px;}.cell{background:#7c3aed;color:white;height:50px;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:bold;border-radius:6px;}`,
      },
      {
        id: 'E026-D',
        html: `<div class="grid"><div class="cell">1</div><div class="cell">2</div><div class="cell">3</div><div class="cell">4</div><div class="cell">5</div><div class="cell">6</div></div>`,
        css: `.grid{display:grid;grid-template-columns:repeat(6,1fr);gap:8px;background:#a78bfa;padding:8px;width:270px;}.cell{background:#7c3aed;color:white;height:50px;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:bold;border-radius:6px;}`,
      },
    ],
    explanation: 'grid-template-columns: repeat(3, 1fr) создаёт три колонки равной ширины. 6 элементов автоматически размещаются в 2 строки по 3 штуки.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/grid-template-columns',
    keyProps: ['grid-template-columns'],
  },

  // ─── E027: text-overflow: ellipsis ─────────────────────────────────────────
  {
    id: 'E027',
    topic: 'text',
    difficulty: 'medium',
    displayHtml: `<div class="card">
  <p class="title">Очень длинный заголовок статьи который не влезет</p>
  <p class="desc">Описание</p>
</div>`,
    displayCss: `.card {
  width: 200px;
  background: #fff;
  border: 2px solid #cbd5e1;
  border-radius: 8px;
  padding: 12px;
}
.title {
  margin: 0 0 6px;
  font-weight: bold;
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.desc {
  margin: 0;
  font-size: 13px;
  color: #64748b;
}`,
    renderWidth: 300,
    renderHeight: 110,
    correctVariantId: 'E027-A',
    variants: [
      {
        id: 'E027-A',
        html: `<div class="card"><p class="title">Очень длинный заголовок статьи который не влезет</p><p class="desc">Описание</p></div>`,
        css: `.card{width:200px;background:#fff;border:2px solid #cbd5e1;border-radius:8px;padding:12px;}.title{margin:0 0 6px;font-weight:bold;font-size:15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.desc{margin:0;font-size:13px;color:#64748b;}`,
      },
      {
        id: 'E027-B',
        html: `<div class="card"><p class="title">Очень длинный заголовок статьи который не влезет</p><p class="desc">Описание</p></div>`,
        css: `.card{width:200px;background:#fff;border:2px solid #cbd5e1;border-radius:8px;padding:12px;}.title{margin:0 0 6px;font-weight:bold;font-size:15px;white-space:nowrap;overflow:hidden;text-overflow:clip;}.desc{margin:0;font-size:13px;color:#64748b;}`,
      },
      {
        id: 'E027-C',
        html: `<div class="card"><p class="title">Очень длинный заголовок статьи который не влезет</p><p class="desc">Описание</p></div>`,
        css: `.card{width:200px;background:#fff;border:2px solid #cbd5e1;border-radius:8px;padding:12px;}.title{margin:0 0 6px;font-weight:bold;font-size:15px;overflow:hidden;text-overflow:ellipsis;}.desc{margin:0;font-size:13px;color:#64748b;}`,
      },
      {
        id: 'E027-D',
        html: `<div class="card"><p class="title">Очень длинный заголовок статьи который не влезет</p><p class="desc">Описание</p></div>`,
        css: `.card{width:200px;background:#fff;border:2px solid #cbd5e1;border-radius:8px;padding:12px;}.title{margin:0 0 6px;font-weight:bold;font-size:15px;white-space:nowrap;overflow:visible;text-overflow:ellipsis;}.desc{margin:0;font-size:13px;color:#64748b;}`,
      },
    ],
    explanation: 'text-overflow: ellipsis добавляет «…» при обрезке. Для работы НЕОБХОДИМЫ три свойства вместе: white-space: nowrap (без переноса), overflow: hidden (обрезает) и text-overflow: ellipsis (показывает троеточие).',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/text-overflow',
    keyProps: ['text-overflow', 'white-space'],
  },

  // ─── E028: margin collapse siblings ────────────────────────────────────────
  {
    id: 'E028',
    topic: 'box-model',
    difficulty: 'medium',
    displayHtml: `<div class="wrapper">
  <div class="box a">margin-bottom: 30px</div>
  <div class="box b">margin-top: 20px</div>
</div>`,
    displayCss: `.wrapper {
  background: #9ca3af;
  border: 2px solid #cbd5e1;
  padding: 10px;
  width: 240px;
}
.box {
  background: #3b82f6;
  color: white;
  padding: 10px;
  font-size: 12px;
  text-align: center;
}
.a { margin-bottom: 30px; }
.b { margin-top: 20px; }`,
    renderWidth: 300,
    renderHeight: 160,
    correctVariantId: 'E028-A',
    variants: [
      {
        id: 'E028-A',
        html: `<div class="wrapper"><div class="box a">margin-bottom: 30px</div><div class="box b">margin-top: 20px</div></div>`,
        css: `.wrapper{background:#9ca3af;border:2px solid #cbd5e1;padding:10px;width:240px;}.box{background:#3b82f6;color:white;padding:10px;font-size:12px;text-align:center;}.a{margin-bottom:30px;}.b{margin-top:20px;}`,
      },
      {
        id: 'E028-B',
        html: `<div class="wrapper"><div class="box a">margin-bottom: 30px</div><div class="box b">margin-top: 20px</div></div>`,
        css: `.wrapper{background:#9ca3af;border:2px solid #cbd5e1;padding:10px;width:240px;}.box{background:#3b82f6;color:white;padding:10px;font-size:12px;text-align:center;}.a{margin-bottom:50px;}.b{margin-top:0;}`,
      },
      {
        id: 'E028-C',
        html: `<div class="wrapper"><div class="box a">margin-bottom: 30px</div><div class="box b">margin-top: 20px</div></div>`,
        css: `.wrapper{background:#9ca3af;border:2px solid #cbd5e1;padding:10px;width:240px;display:flex;flex-direction:column;gap:50px;}.box{background:#3b82f6;color:white;padding:10px;font-size:12px;text-align:center;}`,
      },
      {
        id: 'E028-D',
        html: `<div class="wrapper"><div class="box a">margin-bottom: 30px</div><div class="box b">margin-top: 20px</div></div>`,
        css: `.wrapper{background:#9ca3af;border:2px solid #cbd5e1;padding:10px;width:240px;}.box{background:#3b82f6;color:white;padding:10px;font-size:12px;text-align:center;}.a{margin-bottom:20px;}.b{margin-top:30px;}`,
      },
    ],
    explanation: 'Схлопывание (collapse) вертикальных margin у соседних блоков: итоговый отступ равен бо́льшему из двух. Здесь max(30px, 20px) = 30px, а не 50px. В flex/grid схлопывание не происходит.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing',
    keyProps: ['margin-bottom', 'margin-top'],
  },

  // ─── E029: aspect-ratio basic ──────────────────────────────────────────────
  {
    id: 'E029',
    topic: 'sizing',
    difficulty: 'medium',
    displayHtml: `<div class="box"></div>`,
    displayCss: `.box {
  width: 200px;
  aspect-ratio: 16 / 9;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
}`,
    renderWidth: 300,
    renderHeight: 160,
    correctVariantId: 'E029-A',
    variants: [
      {
        id: 'E029-A',
        html: `<div class="box"></div>`,
        css: `.box{width:200px;aspect-ratio:16/9;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);border-radius:8px;}`,
      },
      {
        id: 'E029-B',
        html: `<div class="box"></div>`,
        css: `.box{width:200px;aspect-ratio:1/1;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);border-radius:8px;}`,
      },
      {
        id: 'E029-C',
        html: `<div class="box"></div>`,
        css: `.box{width:200px;aspect-ratio:4/3;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);border-radius:8px;}`,
      },
      {
        id: 'E029-D',
        html: `<div class="box"></div>`,
        css: `.box{width:200px;aspect-ratio:9/16;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);border-radius:8px;}`,
      },
    ],
    explanation: 'aspect-ratio: 16 / 9 при заданной ширине 200px вычисляет высоту: 200 × (9/16) ≈ 112px. Соотношение 16:9 — классический широкоэкранный формат.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/aspect-ratio',
    keyProps: ['aspect-ratio'],
  },

  // ─── E030: grid gap ────────────────────────────────────────────────────────
  {
    id: 'E030',
    topic: 'grid',
    difficulty: 'medium',
    displayHtml: `<div class="grid">
  <div class="c">A</div>
  <div class="c">B</div>
  <div class="c">C</div>
  <div class="c">D</div>
</div>`,
    displayCss: `.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 20px;
  column-gap: 40px;
  background: #6ee7b7;
  padding: 12px;
  width: 240px;
}
.c {
  background: #10b981;
  color: white;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  border-radius: 6px;
}`,
    renderWidth: 300,
    renderHeight: 160,
    correctVariantId: 'E030-A',
    variants: [
      {
        id: 'E030-A',
        html: `<div class="grid"><div class="c">A</div><div class="c">B</div><div class="c">C</div><div class="c">D</div></div>`,
        css: `.grid{display:grid;grid-template-columns:1fr 1fr;row-gap:20px;column-gap:40px;background:#6ee7b7;padding:12px;width:240px;}.c{background:#10b981;color:white;height:50px;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:bold;border-radius:6px;}`,
      },
      {
        id: 'E030-B',
        html: `<div class="grid"><div class="c">A</div><div class="c">B</div><div class="c">C</div><div class="c">D</div></div>`,
        css: `.grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;background:#6ee7b7;padding:12px;width:240px;}.c{background:#10b981;color:white;height:50px;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:bold;border-radius:6px;}`,
      },
      {
        id: 'E030-C',
        html: `<div class="grid"><div class="c">A</div><div class="c">B</div><div class="c">C</div><div class="c">D</div></div>`,
        css: `.grid{display:grid;grid-template-columns:1fr 1fr;row-gap:40px;column-gap:20px;background:#6ee7b7;padding:12px;width:240px;}.c{background:#10b981;color:white;height:50px;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:bold;border-radius:6px;}`,
      },
      {
        id: 'E030-D',
        html: `<div class="grid"><div class="c">A</div><div class="c">B</div><div class="c">C</div><div class="c">D</div></div>`,
        css: `.grid{display:grid;grid-template-columns:1fr 1fr;gap:0;background:#6ee7b7;padding:12px;width:240px;}.c{background:#10b981;color:white;height:50px;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:bold;border-radius:6px;}`,
      },
    ],
    explanation: 'row-gap и column-gap задают отступы между строками и столбцами сетки раздельно. row-gap: 20px даёт меньший вертикальный зазор, column-gap: 40px — больший горизонтальный.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/gap',
    keyProps: ['row-gap', 'column-gap'],
  },

  // Используем хелпер-функцию для не-уникальных шаблонов
  // ─── E031: font-weight ─────────────────────────────────────────────────────
{
    id: 'E031',
    topic: 'text',
    difficulty: 'medium',
    displayHtml: `<div class="list">
  <p class="normal">Обычный текст</p>
  <p class="bold">Жирный текст</p>
  <p class="normal">Снова обычный</p>
</div>`,
    displayCss: `.list {
  background: #94a3b8;
  padding: 12px;
  width: 240px;
}
p { margin: 4px 0; font-size: 17px; color: #0f172a; }
.normal { font-weight: 400; }
.bold   { font-weight: 700; }`,
    renderWidth: 300, renderHeight: 125,
    correctVariantId: 'E031-A',
    variants: [
      {
        // A (correct): обычный / жирный / обычный
        id: 'E031-A',
        html: `<div class="list"><p class="normal">Обычный текст</p><p class="bold">Жирный текст</p><p class="normal">Снова обычный</p></div>`,
        css: `.list{background:#94a3b8;padding:12px;width:240px;}p{margin:4px 0;font-size:17px;color:#0f172a;}.normal{font-weight:400;}.bold{font-weight:700;}`
      },
      {
        // B: ВСЕ жирные
        id: 'E031-B',
        html: `<div class="list"><p class="normal">Обычный текст</p><p class="bold">Жирный текст</p><p class="normal">Снова обычный</p></div>`,
        css: `.list{background:#94a3b8;padding:12px;width:240px;}p{margin:4px 0;font-size:17px;color:#0f172a;font-weight:700;}`
      },
      {
        // C: ВСЕ обычные
        id: 'E031-C',
        html: `<div class="list"><p class="normal">Обычный текст</p><p class="bold">Жирный текст</p><p class="normal">Снова обычный</p></div>`,
        css: `.list{background:#94a3b8;padding:12px;width:240px;}p{margin:4px 0;font-size:17px;color:#0f172a;font-weight:400;}`
      },
      {
        // D: наоборот — жирный / обычный / жирный
        id: 'E031-D',
        html: `<div class="list"><p class="normal">Обычный текст</p><p class="bold">Жирный текст</p><p class="normal">Снова обычный</p></div>`,
        css: `.list{background:#94a3b8;padding:12px;width:240px;}p{margin:4px 0;font-size:17px;color:#0f172a;}.normal{font-weight:700;}.bold{font-weight:400;}`
      },
    ],
    explanation: 'font-weight: 400 — нормальное начертание, 700 — жирное (bold). В правильном варианте жирная только средняя строка (.bold). B — все жирные. C — все обычные. D — веса перепутаны местами: жирные крайние.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/font-weight',
    keyProps: ['font-weight'],
  },

]

export const easyQuestionsExtra: import('@/types').Question[] = [
  {
     id: 'E032', topic: 'flexbox', difficulty: 'medium',
    displayHtml: `<div class="row">
  <div class="item">A</div>
  <div class="item">B</div>
  <div class="item">C</div>
</div>`,
    displayCss: `.row {
  display: flex;
  justify-content: space-around;
  background: #bae6fd;
  width: 300px;
  height: 90px;
  align-items: center;
}
.item {
  width: 50px;
  height: 60px;
  background: #0284c7;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
}`,
    renderWidth: 300, renderHeight: 95,
    /*
      Контейнер 300px, элементы 3×50=150px, свободного места 150px.
      space-around : краевые зазоры = 25px, между = 50px (чётко видно 2:1)
      flex-start   : все слева, зазор только справа
      space-between: крайние прижаты к стенкам, зазоры 75px между
      flex-end     : все справа, зазор только слева
    */
    correctVariantId: 'E032-A',
    variants: [
      {
        // A (correct): space-around — краевые зазоры в 2× меньше центральных
        id: 'E032-A',
        html: `<div class="row"><div class="item">A</div><div class="item">B</div><div class="item">C</div></div>`,
        css: `.row{display:flex;justify-content:space-around;background:#bae6fd;width:300px;height:90px;align-items:center;}.item{width:50px;height:60px;background:#0284c7;color:white;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:bold;}`,
      },
      {
        // B: flex-start — все элементы прижаты к левому краю
        id: 'E032-B',
        html: `<div class="row"><div class="item">A</div><div class="item">B</div><div class="item">C</div></div>`,
        css: `.row{display:flex;justify-content:flex-start;background:#bae6fd;width:300px;height:90px;align-items:center;}.item{width:50px;height:60px;background:#0284c7;color:white;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:bold;}`,
      },
      {
        // C: space-between — крайние у стенок, весь зазор между ними
        id: 'E032-C',
        html: `<div class="row"><div class="item">A</div><div class="item">B</div><div class="item">C</div></div>`,
        css: `.row{display:flex;justify-content:space-between;background:#bae6fd;width:300px;height:90px;align-items:center;}.item{width:50px;height:60px;background:#0284c7;color:white;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:bold;}`,
      },
      {
        // D: flex-end — все элементы прижаты к правому краю
        id: 'E032-D',
        html: `<div class="row"><div class="item">A</div><div class="item">B</div><div class="item">C</div></div>`,
        css: `.row{display:flex;justify-content:flex-end;background:#bae6fd;width:300px;height:90px;align-items:center;}.item{width:50px;height:60px;background:#0284c7;color:white;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:bold;}`,
      },
    ],
    explanation: 'space-around: каждый элемент получает равные поля с обеих сторон. Зазор между соседними элементами = 2× от краевого зазора (поля соседей складываются). flex-start — все слева. space-between — крайние прижаты к стенкам. flex-end — все справа.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/justify-content',
    keyProps: ['justify-content'],
  },
  {
    id: 'E033', topic: 'visual', difficulty: 'medium',
    displayHtml: `<div class="card">
  <div class="inner">Box Shadow</div>
</div>`,
    displayCss: `.card {
  padding: 20px;
  background: #94a3b8;
  width: 240px;
}
.inner {
  background: white;
  padding: 20px;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  color: #1e293b;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15), 0 4px 8px rgba(0,0,0,0.08);
}`,
    renderWidth: 300, renderHeight: 130,
    correctVariantId: 'E033-A',
    variants: [
      { id: 'E033-A', html: `<div class="card"><div class="inner">Box Shadow</div></div>`, css: `.card{padding:20px;background:#94a3b8;width:240px;}.inner{background:white;padding:20px;text-align:center;font-weight:bold;font-size:16px;color:#1e293b;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,0.15),0 4px 8px rgba(0,0,0,0.08);}` },
      { id: 'E033-B', html: `<div class="card"><div class="inner">Box Shadow</div></div>`, css: `.card{padding:20px;background:#94a3b8;width:240px;}.inner{background:white;padding:20px;text-align:center;font-weight:bold;font-size:16px;color:#1e293b;border-radius:12px;box-shadow:inset 0 4px 8px rgba(0,0,0,0.15);}` },
      { id: 'E033-C', html: `<div class="card"><div class="inner">Box Shadow</div></div>`, css: `.card{padding:20px;background:#94a3b8;width:240px;}.inner{background:white;padding:20px;text-align:center;font-weight:bold;font-size:16px;color:#1e293b;border-radius:12px;border:2px solid #cbd5e1;}` },
      { id: 'E033-D', html: `<div class="card"><div class="inner">Box Shadow</div></div>`, css: `.card{padding:20px;background:#94a3b8;width:240px;}.inner{background:white;padding:20px;text-align:center;font-weight:bold;font-size:16px;color:#1e293b;border-radius:12px;box-shadow:4px 4px 0 #94a3b8;}` },
    ],
    explanation: 'box-shadow принимает несколько теней через запятую. Первое значение — большая мягкая тень (30px blur, 10px offset), второе — меньшая чёткая. Совместно создают реалистичную глубину. inset — тень внутри элемента.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/box-shadow',
    keyProps: ['box-shadow'],
  },
  {
    id: 'E034', topic: 'sizing', difficulty: 'medium',
    displayHtml: `<div class="container">
  <div class="box">max-width: 150px</div>
</div>`,
    displayCss: `.container {
  width: 240px;
  background: #86efac;
  padding: 10px;
}
.box {
  max-width: 150px;
  background: #16a34a;
  color: white;
  padding: 10px;
  font-size: 13px;
  font-weight: bold;
  text-align: center;
}`,
    renderWidth: 300, renderHeight: 100,
    correctVariantId: 'E034-A',
    variants: [
      { id: 'E034-A', html: `<div class="container"><div class="box">max-width: 150px</div></div>`, css: `.container{width:240px;background:#86efac;padding:10px;}.box{max-width:150px;background:#16a34a;color:white;padding:10px;font-size:13px;font-weight:bold;text-align:center;}` },
      { id: 'E034-B', html: `<div class="container"><div class="box">max-width: 150px</div></div>`, css: `.container{width:240px;background:#86efac;padding:10px;}.box{width:150px;background:#16a34a;color:white;padding:10px;font-size:13px;font-weight:bold;text-align:center;}` },
      { id: 'E034-C', html: `<div class="container"><div class="box">max-width: 150px</div></div>`, css: `.container{width:240px;background:#86efac;padding:10px;}.box{background:#16a34a;color:white;padding:10px;font-size:13px;font-weight:bold;text-align:center;}` },
      { id: 'E034-D', html: `<div class="container"><div class="box">max-width: 150px</div></div>`, css: `.container{width:240px;background:#86efac;padding:10px;}.box{min-width:150px;max-width:150px;background:#16a34a;color:white;padding:10px;font-size:13px;font-weight:bold;text-align:center;}` },
    ],
    explanation: 'max-width ограничивает максимальную ширину. Блочный элемент хочет занять 100% родителя (240px), но max-width: 150px останавливает его. Разница от width: — при max-width элемент может быть и меньше при малом контенте.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/max-width',
    keyProps: ['max-width'],
  },
{
    id: 'E035', topic: 'text', difficulty: 'medium',
    displayHtml: `<div class="list">
  <p>Первый абзац</p>
  <p>Второй абзац</p>
</div>`,
    displayCss: `.list {
  width: 200px;
  background: #94a3b8;
  padding: 10px;
}
p {
  background: #cbd5e1;
  padding: 8px;
  margin: 0 0 6px;
  font-size: 15px;
  font-style: italic;
  color: #1e293b;
}`,
    renderWidth: 300, renderHeight: 120,
    correctVariantId: 'E035-A',
    variants: [
      {
        // A (correct): italic — наклонный текст
        id: 'E035-A',
        html: `<div class="list"><p>Первый абзац</p><p>Второй абзац</p></div>`,
        css: `.list{width:200px;background:#94a3b8;padding:10px;}p{background:#cbd5e1;padding:8px;margin:0 0 6px;font-size:15px;font-style:italic;color:#1e293b;}`
      },
      {
        // B: normal — прямой текст
        id: 'E035-B',
        html: `<div class="list"><p>Первый абзац</p><p>Второй абзац</p></div>`,
        css: `.list{width:200px;background:#94a3b8;padding:10px;}p{background:#cbd5e1;padding:8px;margin:0 0 6px;font-size:15px;font-style:normal;color:#1e293b;}`
      },
      {
        // C: underline — прямой ПОДЧЁРКНУТЫЙ текст
        id: 'E035-C',
        html: `<div class="list"><p>Первый абзац</p><p>Второй абзац</p></div>`,
        css: `.list{width:200px;background:#94a3b8;padding:10px;}p{background:#cbd5e1;padding:8px;margin:0 0 6px;font-size:15px;text-decoration:underline;color:#1e293b;}`
      },
      {
        // D: uppercase — ЗАГЛАВНЫЕ буквы
        id: 'E035-D',
        html: `<div class="list"><p>Первый абзац</p><p>Второй абзац</p></div>`,
        css: `.list{width:200px;background:#94a3b8;padding:10px;}p{background:#cbd5e1;padding:8px;margin:0 0 6px;font-size:15px;text-transform:uppercase;color:#1e293b;}`
      },
    ],
    explanation: 'font-style: italic — наклонное (курсивное) начертание. normal — прямое. text-decoration: underline — подчёркивание (не наклон!). text-transform: uppercase — все буквы заглавные. Это разные свойства с разными эффектами.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/font-style',
    keyProps: ['font-style'],
  },
  {
    id: 'E036', topic: 'visual', difficulty: 'medium',
    displayHtml: `<div class="scene">
  <div class="box">transform</div>
</div>`,
    displayCss: `.scene {
  width: 260px;
  height: 120px;
  background: #a78bfa;
  display: flex;
  align-items: center;
  justify-content: center;
}
.box {
  width: 100px;
  height: 50px;
  background: #7c3aed;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  transform: rotate(15deg) scale(1.2);
}`,
    renderWidth: 300, renderHeight: 150,
    correctVariantId: 'E036-A',
    variants: [
      { id: 'E036-A', html: `<div class="scene"><div class="box">transform</div></div>`, css: `.scene{width:260px;height:120px;background:#a78bfa;display:flex;align-items:center;justify-content:center;}.box{width:100px;height:50px;background:#7c3aed;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;transform:rotate(15deg) scale(1.2);}` },
      { id: 'E036-B', html: `<div class="scene"><div class="box">transform</div></div>`, css: `.scene{width:260px;height:120px;background:#a78bfa;display:flex;align-items:center;justify-content:center;}.box{width:100px;height:50px;background:#7c3aed;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;transform:rotate(-15deg) scale(1.2);}` },
      { id: 'E036-C', html: `<div class="scene"><div class="box">transform</div></div>`, css: `.scene{width:260px;height:120px;background:#a78bfa;display:flex;align-items:center;justify-content:center;}.box{width:100px;height:50px;background:#7c3aed;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;transform:rotate(15deg);}` },
      { id: 'E036-D', html: `<div class="scene"><div class="box">transform</div></div>`, css: `.scene{width:260px;height:120px;background:#a78bfa;display:flex;align-items:center;justify-content:center;}.box{width:100px;height:50px;background:#7c3aed;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;}` },
    ],
    explanation: 'transform: rotate(15deg) scale(1.2) применяет трансформации последовательно. Сначала поворот на 15°, затем увеличение в 1.2 раза. Порядок важен: scale после rotate масштабирует уже повёрнутую систему координат.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/transform',
    keyProps: ['transform'],
  },
  {
    id: 'E037', topic: 'grid', difficulty: 'medium',
    displayHtml: `<div class="grid">
  <div class="a">A</div>
  <div class="b">B</div>
  <div class="c">C</div>
  <div class="d">D</div>
</div>`,
    displayCss: `.grid {
  display: grid;
  grid-template-columns: 100px auto;
  grid-template-rows: 60px 60px;
  gap: 6px;
  background: #fef9c3;
  padding: 8px;
  width: 240px;
}
.a,.b,.c,.d {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  color: white;
  border-radius: 4px;
}
.a { background: #ca8a04; }
.b { background: #d97706; }
.c { background: #b45309; }
.d { background: #92400e; }`,
    renderWidth: 300, renderHeight: 155,
    correctVariantId: 'E037-A',
    variants: [
      { id: 'E037-A', html: `<div class="grid"><div class="a">A</div><div class="b">B</div><div class="c">C</div><div class="d">D</div></div>`, css: `.grid{display:grid;grid-template-columns:100px auto;grid-template-rows:60px 60px;gap:6px;background:#fef9c3;padding:8px;width:240px;}.a,.b,.c,.d{display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:bold;color:white;border-radius:4px;}.a{background:#ca8a04;}.b{background:#d97706;}.c{background:#b45309;}.d{background:#92400e;}` },
      { id: 'E037-B', html: `<div class="grid"><div class="a">A</div><div class="b">B</div><div class="c">C</div><div class="d">D</div></div>`, css: `.grid{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:60px 60px;gap:6px;background:#fef9c3;padding:8px;width:240px;}.a,.b,.c,.d{display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:bold;color:white;border-radius:4px;}.a{background:#ca8a04;}.b{background:#d97706;}.c{background:#b45309;}.d{background:#92400e;}` },
      { id: 'E037-C', html: `<div class="grid"><div class="a">A</div><div class="b">B</div><div class="c">C</div><div class="d">D</div></div>`, css: `.grid{display:grid;grid-template-columns:auto 100px;grid-template-rows:60px 60px;gap:6px;background:#fef9c3;padding:8px;width:240px;}.a,.b,.c,.d{display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:bold;color:white;border-radius:4px;}.a{background:#ca8a04;}.b{background:#d97706;}.c{background:#b45309;}.d{background:#92400e;}` },
      { id: 'E037-D', html: `<div class="grid"><div class="a">A</div><div class="b">B</div><div class="c">C</div><div class="d">D</div></div>`, css: `.grid{display:grid;grid-template-columns:100px 1fr;grid-template-rows:60px 60px;gap:6px;background:#fef9c3;padding:8px;width:240px;}.a,.b,.c,.d{display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:bold;color:white;border-radius:4px;}.a{background:#ca8a04;}.b{background:#d97706;}.c{background:#b45309;}.d{background:#92400e;}` },
    ],
    explanation: 'grid-template-columns: 100px auto: первая колонка ровно 100px, вторая — auto (ширина по содержимому или оставшееся пространство). auto в grid-контексте берёт доступное пространство, аналог fr.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/grid-template-columns',
    keyProps: ['grid-template-columns'],
  },
  {
    id: 'E038', topic: 'box-model', difficulty: 'medium',
    displayHtml: `<div class="outer">
  <div class="inner">Контент</div>
</div>`,
    displayCss: `.outer {
  width: 200px;
  background: #93c5fd;
  border: 4px solid #3b82f6;
  /* без box-sizing, padding снаружи */
}
.inner {
  background: #1d4ed8;
  color: white;
  padding: 10px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  box-sizing: border-box;
  width: 100%;
}`,
    renderWidth: 300, renderHeight: 120,
    correctVariantId: 'E038-A',
    variants: [
      { id: 'E038-A', html: `<div class="outer"><div class="inner">Контент</div></div>`, css: `.outer{width:200px;background:#93c5fd;border:4px solid #3b82f6;}.inner{background:#1d4ed8;color:white;padding:10px;font-size:14px;font-weight:bold;text-align:center;box-sizing:border-box;width:100%;}` },
      { id: 'E038-B', html: `<div class="outer"><div class="inner">Контент</div></div>`, css: `.outer{width:200px;background:#93c5fd;border:4px solid #3b82f6;}.inner{background:#1d4ed8;color:white;padding:10px;font-size:14px;font-weight:bold;text-align:center;box-sizing:content-box;width:100%;}` },
      { id: 'E038-C', html: `<div class="outer"><div class="inner">Контент</div></div>`, css: `.outer{width:200px;background:#93c5fd;border:4px solid #3b82f6;padding:10px;}.inner{background:#1d4ed8;color:white;padding:10px;font-size:14px;font-weight:bold;text-align:center;box-sizing:border-box;width:100%;}` },
      { id: 'E038-D', html: `<div class="outer"><div class="inner">Контент</div></div>`, css: `.outer{width:200px;background:#93c5fd;border:4px solid #3b82f6;box-sizing:border-box;}.inner{background:#1d4ed8;color:white;padding:10px;font-size:14px;font-weight:bold;text-align:center;box-sizing:border-box;width:100%;}` },
    ],
    explanation: 'box-sizing: border-box на .inner: width: 100% = 200px и padding: 10px включается в ширину. Без border-box — width: 100% + padding: 20px = 220px, что шире родителя. Граница .outer не влияет на width дочернего (content-box по умолчанию).',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/box-sizing',
    keyProps: ['box-sizing'],
  },
  {
    id: 'E039', topic: 'flexbox', difficulty: 'medium',
    displayHtml: `<div class="nav">
  <div class="logo">Logo</div>
  <div class="spacer"></div>
  <a class="link">Docs</a>
  <a class="link">GitHub</a>
</div>`,
    displayCss: `.nav {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #0f172a;
  padding: 0 16px;
  height: 50px;
  width: 260px;
}
.logo { font-weight: bold; color: white; font-size: 16px; }
.spacer { flex: 1; }
.link { color: rgba(255,255,255,0.7); font-size: 14px; text-decoration: none; font-weight: 500; }`,
    renderWidth: 300, renderHeight: 70,
    correctVariantId: 'E039-A',
    variants: [
      { id: 'E039-A', html: `<div class="nav"><div class="logo">Logo</div><div class="spacer"></div><a class="link">Docs</a><a class="link">GitHub</a></div>`, css: `.nav{display:flex;align-items:center;gap:12px;background:#0f172a;padding:0 16px;height:50px;width:260px;}.logo{font-weight:bold;color:white;font-size:16px;}.spacer{flex:1;}.link{color:rgba(255,255,255,0.7);font-size:14px;text-decoration:none;font-weight:500;}` },
      { id: 'E039-B', html: `<div class="nav"><div class="logo">Logo</div><a class="link">Docs</a><a class="link">GitHub</a></div>`, css: `.nav{display:flex;align-items:center;justify-content:space-between;gap:12px;background:#0f172a;padding:0 16px;height:50px;width:260px;}.logo{font-weight:bold;color:white;font-size:16px;}.link{color:rgba(255,255,255,0.7);font-size:14px;text-decoration:none;font-weight:500;}` },
      { id: 'E039-C', html: `<div class="nav"><div class="logo">Logo</div><div class="spacer"></div><a class="link">Docs</a><a class="link">GitHub</a></div>`, css: `.nav{display:flex;align-items:center;gap:12px;justify-content:flex-end;background:#0f172a;padding:0 16px;height:50px;width:260px;}.logo{font-weight:bold;color:white;font-size:16px;}.spacer{flex:1;}.link{color:rgba(255,255,255,0.7);font-size:14px;text-decoration:none;font-weight:500;}` },
      { id: 'E039-D', html: `<div class="nav"><div class="logo">Logo</div><div class="spacer"></div><a class="link">Docs</a><a class="link">GitHub</a></div>`, css: `.nav{display:flex;align-items:center;gap:12px;background:#0f172a;padding:0 16px;height:50px;width:260px;}.logo{font-weight:bold;color:white;font-size:16px;}.link{color:rgba(255,255,255,0.7);font-size:14px;text-decoration:none;font-weight:500;}` },
    ],
    explanation: 'Пустой .spacer с flex: 1 «поглощает» всё свободное пространство, раздвигая логотип и ссылки в разные стороны. Альтернатива — justify-content: space-between, но тогда сами ссылки расходятся в разные стороны.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/flex',
    keyProps: ['flex'],
  },
  {
    id: 'E040', topic: 'visual', difficulty: 'medium',
    displayHtml: `<div class="scene">
  <div class="box">gradient</div>
</div>`,
    displayCss: `.scene {
  padding: 16px;
  background: #94a3b8;
  width: 260px;
}
.box {
  height: 80px;
  background: linear-gradient(to right, #6366f1, #ec4899);
  border-radius: 12px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
}`,
    renderWidth: 300, renderHeight: 120,
    correctVariantId: 'E040-A',
    variants: [
      { id: 'E040-A', html: `<div class="scene"><div class="box">gradient</div></div>`, css: `.scene{padding:16px;background:#94a3b8;width:260px;}.box{height:80px;background:linear-gradient(to right,#6366f1,#ec4899);border-radius:12px;color:white;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:bold;}` },
      { id: 'E040-B', html: `<div class="scene"><div class="box">gradient</div></div>`, css: `.scene{padding:16px;background:#94a3b8;width:260px;}.box{height:80px;background:linear-gradient(to bottom,#6366f1,#ec4899);border-radius:12px;color:white;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:bold;}` },
      { id: 'E040-C', html: `<div class="scene"><div class="box">gradient</div></div>`, css: `.scene{padding:16px;background:#94a3b8;width:260px;}.box{height:80px;background:linear-gradient(135deg,#6366f1,#ec4899);border-radius:12px;color:white;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:bold;}` },
      { id: 'E040-D', html: `<div class="scene"><div class="box">gradient</div></div>`, css: `.scene{padding:16px;background:#94a3b8;width:260px;}.box{height:80px;background:linear-gradient(to right,#ec4899,#6366f1);border-radius:12px;color:white;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:bold;}` },
    ],
    explanation: 'linear-gradient(to right, ...) — горизонтальный градиент слева направо. to bottom — вертикальный. 135deg — диагональный. Порядок цветов важен: первый — начало, последний — конец.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/gradient/linear-gradient',
    keyProps: ['background'],
  },
{
    id: 'E041', topic: 'display', difficulty: 'medium',
    displayHtml: `<div class="parent">
  <div class="hidden">Скрытый</div>
  <div class="invisible">Невидимый</div>
  <div class="normal">Нормальный</div>
</div>`,
    displayCss: `.parent {
  background: #94a3b8;
  padding: 10px;
  width: 220px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.hidden    { display: none; background: #dc2626; color: white; padding: 8px; font-weight: bold; }
.invisible { visibility: hidden; background: #f59e0b; color: white; padding: 8px; font-weight: bold; }
.normal    { background: #16a34a; color: white; padding: 8px; font-weight: bold; }`,
    renderWidth: 300, renderHeight: 130,
    correctVariantId: 'E041-A',
    variants: [
      {
        // A (correct): hidden исчез, invisible — пустое место, normal виден
        // Итого: [пустое место] + [зелёный]
        id: 'E041-A',
        html: `<div class="parent"><div class="hidden">Скрытый</div><div class="invisible">Невидимый</div><div class="normal">Нормальный</div></div>`,
        css: `.parent{background:#94a3b8;padding:10px;width:220px;display:flex;flex-direction:column;gap:6px;}.hidden{display:none;background:#dc2626;color:white;padding:8px;font-weight:bold;}.invisible{visibility:hidden;background:#f59e0b;color:white;padding:8px;font-weight:bold;}.normal{background:#16a34a;color:white;padding:8px;font-weight:bold;}`
      },
      {
        // B: все три видны — красный, оранжевый, зелёный
        id: 'E041-B',
        html: `<div class="parent"><div class="hidden">Скрытый</div><div class="invisible">Невидимый</div><div class="normal">Нормальный</div></div>`,
        css: `.parent{background:#94a3b8;padding:10px;width:220px;display:flex;flex-direction:column;gap:6px;}.hidden{background:#dc2626;color:white;padding:8px;font-weight:bold;}.invisible{background:#f59e0b;color:white;padding:8px;font-weight:bold;}.normal{background:#16a34a;color:white;padding:8px;font-weight:bold;}`
      },
      {
        // C: оба скрыты через display:none — только зелёный, вплотную к верху
        id: 'E041-C',
        html: `<div class="parent"><div class="hidden">Скрытый</div><div class="invisible">Невидимый</div><div class="normal">Нормальный</div></div>`,
        css: `.parent{background:#94a3b8;padding:10px;width:220px;display:flex;flex-direction:column;gap:6px;}.hidden{display:none;background:#dc2626;color:white;padding:8px;font-weight:bold;}.invisible{display:none;background:#f59e0b;color:white;padding:8px;font-weight:bold;}.normal{background:#16a34a;color:white;padding:8px;font-weight:bold;}`
      },
      {
        // D: hidden полупрозрачный (виден бледно-красный), invisible — пустое место
        id: 'E041-D',
        html: `<div class="parent"><div class="hidden">Скрытый</div><div class="invisible">Невидимый</div><div class="normal">Нормальный</div></div>`,
        css: `.parent{background:#94a3b8;padding:10px;width:220px;display:flex;flex-direction:column;gap:6px;}.hidden{opacity:0.35;background:#dc2626;color:white;padding:8px;font-weight:bold;}.invisible{visibility:hidden;background:#f59e0b;color:white;padding:8px;font-weight:bold;}.normal{background:#16a34a;color:white;padding:8px;font-weight:bold;}`
      },
    ],
    explanation: 'display: none убирает красный блок полностью (нет места). visibility: hidden скрывает оранжевый, но оставляет пустое место. Итог A: пустое место + зелёный. B — все видны. C — оба скрыты без места. D — красный полупрозрачен.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/display',
    keyProps: ['display', 'visibility'],
  },
  {
    id: 'E042', topic: 'flexbox', difficulty: 'medium',
    displayHtml: `<div class="tags">
  <span class="tag">Vue</span>
  <span class="tag">TypeScript</span>
  <span class="tag">CSS</span>
  <span class="tag">Flexbox</span>
  <span class="tag">Grid</span>
  <span class="tag">React</span>
</div>`,
    displayCss: `.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  background: #94a3b8;
  padding: 10px;
  width: 220px;
}
.tag {
  background: #a5b4fc;
  color: #3730a3;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
}`,
    renderWidth: 300, renderHeight: 110,
    correctVariantId: 'E042-A',
    variants: [
      { id: 'E042-A', html: `<div class="tags"><span class="tag">Vue</span><span class="tag">TypeScript</span><span class="tag">CSS</span><span class="tag">Flexbox</span><span class="tag">Grid</span><span class="tag">React</span></div>`, css: `.tags{display:flex;flex-wrap:wrap;gap:6px;background:#94a3b8;padding:10px;width:220px;}.tag{background:#a5b4fc;color:#3730a3;padding:4px 10px;border-radius:999px;font-size:13px;font-weight:600;white-space:nowrap;}` },
      { id: 'E042-B', html: `<div class="tags"><span class="tag">Vue</span><span class="tag">TypeScript</span><span class="tag">CSS</span><span class="tag">Flexbox</span><span class="tag">Grid</span><span class="tag">React</span></div>`, css: `.tags{display:flex;flex-wrap:nowrap;gap:6px;background:#94a3b8;padding:10px;width:220px;overflow:hidden;}.tag{background:#a5b4fc;color:#3730a3;padding:4px 10px;border-radius:999px;font-size:13px;font-weight:600;white-space:nowrap;}` },
      { id: 'E042-C', html: `<div class="tags"><span class="tag">Vue</span><span class="tag">TypeScript</span><span class="tag">CSS</span><span class="tag">Flexbox</span><span class="tag">Grid</span><span class="tag">React</span></div>`, css: `.tags{display:flex;flex-wrap:wrap;gap:6px;background:#94a3b8;padding:10px;width:220px;justify-content:center;}.tag{background:#a5b4fc;color:#3730a3;padding:4px 10px;border-radius:999px;font-size:13px;font-weight:600;white-space:nowrap;}` },
      { id: 'E042-D', html: `<div class="tags"><span class="tag">Vue</span><span class="tag">TypeScript</span><span class="tag">CSS</span><span class="tag">Flexbox</span><span class="tag">Grid</span><span class="tag">React</span></div>`, css: `.tags{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;background:#94a3b8;padding:10px;width:220px;}.tag{background:#a5b4fc;color:#3730a3;padding:4px 10px;border-radius:999px;font-size:13px;font-weight:600;white-space:nowrap;text-align:center;}` },
    ],
    explanation: 'flex-wrap: wrap с gap: 6px — классический «облако тегов». Теги переносятся на новую строку когда не помещаются. justify-content не задан, поэтому строки выровнены по левому краю.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/flex-wrap',
    keyProps: ['flex-wrap', 'gap'],
  },
  {
    id: 'E043', topic: 'box-model', difficulty: 'medium',
    displayHtml: `<div class="card">
  <div class="badge">NEW</div>
  <h3>Заголовок</h3>
</div>`,
    displayCss: `.card {
  position: relative;
  background: white;
  border: 2px solid #cbd5e1;
  border-radius: 12px;
  padding: 16px;
  width: 200px;
  box-shadow: var(--shadow-sm, 0 1px 4px rgba(0,0,0,0.08));
}
.badge {
  position: absolute;
  top: -10px;
  right: 12px;
  background: #ec4899;
  color: white;
  font-size: 11px;
  font-weight: bold;
  padding: 2px 8px;
  border-radius: 999px;
  letter-spacing: 0.05em;
}
h3 { margin: 8px 0 0; font-size: 16px; }`,
    renderWidth: 300, renderHeight: 110,
    correctVariantId: 'E043-A',
    variants: [
      { id: 'E043-A', html: `<div class="card"><div class="badge">NEW</div><h3>Заголовок</h3></div>`, css: `.card{position:relative;background:white;border:2px solid #cbd5e1;border-radius:12px;padding:16px;width:200px;}.badge{position:absolute;top:-10px;right:12px;background:#ec4899;color:white;font-size:11px;font-weight:bold;padding:2px 8px;border-radius:999px;letter-spacing:0.05em;}h3{margin:8px 0 0;font-size:16px;}` },
      { id: 'E043-B', html: `<div class="card"><div class="badge">NEW</div><h3>Заголовок</h3></div>`, css: `.card{background:white;border:2px solid #cbd5e1;border-radius:12px;padding:16px;width:200px;}.badge{background:#ec4899;color:white;font-size:11px;font-weight:bold;padding:2px 8px;border-radius:999px;display:block;margin-bottom:8px;}h3{margin:0;font-size:16px;}` },
      { id: 'E043-C', html: `<div class="card"><div class="badge">NEW</div><h3>Заголовок</h3></div>`, css: `.card{position:relative;background:white;border:2px solid #cbd5e1;border-radius:12px;padding:16px;width:200px;}.badge{position:absolute;top:12px;right:12px;background:#ec4899;color:white;font-size:11px;font-weight:bold;padding:2px 8px;border-radius:999px;letter-spacing:0.05em;}h3{margin:8px 0 0;font-size:16px;}` },
      { id: 'E043-D', html: `<div class="card"><div class="badge">NEW</div><h3>Заголовок</h3></div>`, css: `.card{position:relative;background:white;border:2px solid #cbd5e1;border-radius:12px;padding:16px;width:200px;overflow:hidden;}.badge{position:absolute;top:-10px;right:12px;background:#ec4899;color:white;font-size:11px;font-weight:bold;padding:2px 8px;border-radius:999px;letter-spacing:0.05em;}h3{margin:8px 0 0;font-size:16px;}` },
    ],
    explanation: 'position: absolute с top: -10px выводит бейдж за границу карточки вверх. Без overflow: hidden на карточке бейдж виден. С overflow: hidden — бейдж обрезается. position: relative на карточке — containing block для бейджа.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/position',
    keyProps: ['position', 'top'],
  },
]
