import type { Question } from '@/types'

export const mediumQuestions: Question[] = [
  // ─── M001: flex-shrink: 0 ─────────────────────────────────────────────────
  {
    id: 'M001', topic: 'flexbox', difficulty: 'hard',
    displayHtml: `<div class="row">
  <div class="item fixed">Fixed</div>
  <div class="item grow">Растёт и заполняет</div>
  <div class="item fixed">Fixed</div>
</div>`,
    displayCss: `.row { display: flex; width: 280px; gap: 6px;
  background: #bae6fd; padding: 8px; }
.item { height: 60px; background: #0369a1; color: white;
  display: flex; align-items: center; justify-content: center;
  font-size: 12px; font-weight: bold; text-align: center; padding: 4px; }
.fixed { width: 70px; flex-shrink: 0; }
.grow  { flex: 1; }`,
    renderWidth: 300, renderHeight: 90,
    correctVariantId: 'M001-A',
    variants: [
      { id: 'M001-A', html: `<div class="row"><div class="item fixed">Fixed</div><div class="item grow">Растёт и заполняет</div><div class="item fixed">Fixed</div></div>`, css: `.row{display:flex;width:280px;gap:6px;background:#bae6fd;padding:8px;}.item{height:60px;background:#0369a1;color:white;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:bold;text-align:center;padding:4px;}.fixed{width:70px;flex-shrink:0;}.grow{flex:1;}` },
      { id: 'M001-B', html: `<div class="row"><div class="item fixed">Fixed</div><div class="item grow">Растёт и заполняет</div><div class="item fixed">Fixed</div></div>`, css: `.row{display:flex;width:280px;gap:6px;background:#bae6fd;padding:8px;}.item{height:60px;background:#0369a1;color:white;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:bold;text-align:center;padding:4px;}.fixed{width:70px;}.grow{flex:1;}` },
      { id: 'M001-C', html: `<div class="row"><div class="item fixed">Fixed</div><div class="item grow">Растёт и заполняет</div><div class="item fixed">Fixed</div></div>`, css: `.row{display:flex;width:280px;gap:6px;background:#bae6fd;padding:8px;}.item{height:60px;background:#0369a1;color:white;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:bold;text-align:center;padding:4px;flex:1;}` },
      { id: 'M001-D', html: `<div class="row"><div class="item fixed">Fixed</div><div class="item grow">Растёт и заполняет</div><div class="item fixed">Fixed</div></div>`, css: `.row{display:flex;width:280px;gap:6px;background:#bae6fd;padding:8px;}.item{height:60px;background:#0369a1;color:white;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:bold;text-align:center;padding:4px;}.fixed{width:70px;flex-shrink:0;}.grow{flex-grow:1;flex-shrink:1;flex-basis:50%;}` },
    ],
    explanation: 'flex-shrink: 0 запрещает элементу сжиматься ниже заданных 70px, даже если контейнер мал. flex: 1 у среднего — сокращение flex-grow:1 flex-shrink:1 flex-basis:0, он занимает всё оставшееся пространство.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/flex-shrink',
    keyProps: ['flex-shrink', 'flex'],
  },

  // ─── M002: margin collapsing parent-child ─────────────────────────────────
  {
    id: 'M002', topic: 'box-model', difficulty: 'hard',
    displayHtml: `<div class="outer">
  <div class="inner">inner margin-top: 40px</div>
</div>`,
    displayCss: `.outer {
  background: #fef9c3;
  width: 240px;
  /* нет padding-top, border-top, overflow */
}
.inner {
  background: #ca8a04;
  color: white;
  padding: 10px;
  margin-top: 40px;
  font-size: 13px;
}`,
    renderWidth: 300, renderHeight: 120,
    correctVariantId: 'M002-A',
    variants: [
      { id: 'M002-A', html: `<div class="outer"><div class="inner">inner margin-top: 40px</div></div>`, css: `.outer{background:#fef9c3;width:240px;}.inner{background:#ca8a04;color:white;padding:10px;margin-top:40px;font-size:13px;}` },
      { id: 'M002-B', html: `<div class="outer"><div class="inner">inner margin-top: 40px</div></div>`, css: `.outer{background:#fef9c3;width:240px;padding-top:1px;}.inner{background:#ca8a04;color:white;padding:10px;margin-top:40px;font-size:13px;}` },
      { id: 'M002-C', html: `<div class="outer"><div class="inner">inner margin-top: 40px</div></div>`, css: `.outer{background:#fef9c3;width:240px;overflow:hidden;}.inner{background:#ca8a04;color:white;padding:10px;margin-top:40px;font-size:13px;}` },
      { id: 'M002-D', html: `<div class="outer"><div class="inner">inner margin-top: 40px</div></div>`, css: `.outer{background:#fef9c3;width:240px;display:flex;flex-direction:column;}.inner{background:#ca8a04;color:white;padding:10px;margin-top:40px;font-size:13px;}` },
    ],
    explanation: 'Если у родителя нет border-top, padding-top или overflow отличного от visible, margin-top дочернего «схлопывается» с родителем — родитель смещается, а не child. В остальных вариантах схлопывание предотвращено.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing',
    keyProps: ['overflow', 'padding-top'],
  },

  // ─── M003: percentage padding based on WIDTH ──────────────────────────────
  {
    id: 'M003', topic: 'box-model', difficulty: 'hard',
    displayHtml: `<div class="container">
  <div class="box"></div>
</div>`,
    displayCss: `.container {
  width: 200px;
  height: 100px;
  background: #86efac;
  border: 2px solid #86efac;
}
.box {
  width: 100%;
  padding-top: 50%;
  background: #16a34a;
}`,
    renderWidth: 300, renderHeight: 160,
    correctVariantId: 'M003-A',
    variants: [
      { id: 'M003-A', html: `<div class="container"><div class="box"></div></div>`, css: `.container{width:200px;height:100px;background:#86efac;border:2px solid #86efac;}.box{width:100%;padding-top:50%;background:#16a34a;}` },
      { id: 'M003-B', html: `<div class="container"><div class="box"></div></div>`, css: `.container{width:200px;height:100px;background:#86efac;border:2px solid #86efac;}.box{width:100%;padding-top:25%;background:#16a34a;}` },
      { id: 'M003-C', html: `<div class="container"><div class="box"></div></div>`, css: `.container{width:200px;height:100px;background:#86efac;border:2px solid #86efac;}.box{width:100%;height:50%;background:#16a34a;}` },
      { id: 'M003-D', html: `<div class="container"><div class="box"></div></div>`, css: `.container{width:200px;height:100px;background:#86efac;border:2px solid #86efac;}.box{width:100%;padding-top:100%;background:#16a34a;}` },
    ],
    explanation: 'Процентный padding-top вычисляется от ШИРИНЫ содержащего блока (не от высоты). При ширине 200px, padding-top: 50% = 100px. Это используется для создания блоков с фиксированным соотношением сторон.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/padding',
    keyProps: ['padding-top'],
  },

  // ─── M004: position: absolute — containing block ──────────────────────────
  {
    id: 'M004', topic: 'positioning', difficulty: 'hard',
    displayHtml: `<div class="grandpa">
  <div class="parent">
    <div class="child">ABS</div>
  </div>
</div>`,
    displayCss: `.grandpa {
  position: relative;
  width: 260px;
  height: 160px;
  background: #fef3c7;
  border: 3px solid #f59e0b;
}
.parent {
  width: 160px;
  height: 100px;
  background: #fde68a;
  margin: 20px;
  /* нет position */
}
.child {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 60px;
  height: 40px;
  background: #d97706;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}`,
    renderWidth: 300, renderHeight: 190,
    correctVariantId: 'M004-A',
    variants: [
      { id: 'M004-A', html: `<div class="grandpa"><div class="parent"><div class="child">ABS</div></div></div>`, css: `.grandpa{position:relative;width:260px;height:160px;background:#fef3c7;border:3px solid #f59e0b;}.parent{width:160px;height:100px;background:#fde68a;margin:20px;}.child{position:absolute;bottom:10px;right:10px;width:60px;height:40px;background:#d97706;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;}` },
      { id: 'M004-B', html: `<div class="grandpa"><div class="parent"><div class="child">ABS</div></div></div>`, css: `.grandpa{position:relative;width:260px;height:160px;background:#fef3c7;border:3px solid #f59e0b;}.parent{position:relative;width:160px;height:100px;background:#fde68a;margin:20px;}.child{position:absolute;bottom:10px;right:10px;width:60px;height:40px;background:#d97706;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;}` },
      { id: 'M004-C', html: `<div class="grandpa"><div class="parent"><div class="child">ABS</div></div></div>`, css: `.grandpa{width:260px;height:160px;background:#fef3c7;border:3px solid #f59e0b;}.parent{width:160px;height:100px;background:#fde68a;margin:20px;}.child{position:absolute;bottom:10px;right:10px;width:60px;height:40px;background:#d97706;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;}` },
      { id: 'M004-D', html: `<div class="grandpa"><div class="parent"><div class="child">ABS</div></div></div>`, css: `.grandpa{position:relative;width:260px;height:160px;background:#fef3c7;border:3px solid #f59e0b;}.parent{width:160px;height:100px;background:#fde68a;margin:20px;}.child{position:absolute;top:10px;left:10px;width:60px;height:40px;background:#d97706;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;}` },
    ],
    explanation: 'Абсолютно позиционированный элемент ищет ближайшего предка с position (не static). У .parent нет position, поэтому .child позиционируется относительно .grandpa (position: relative). bottom:10 right:10 от .grandpa.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/position',
    keyProps: ['position', 'bottom', 'right'],
  },

  // ─── M005: z-index without position ──────────────────────────────────────
  {
    id: 'M005', topic: 'stacking', difficulty: 'medium',
    displayHtml: `<div class="container">
  <div class="box red">z-index:99 (static)</div>
  <div class="box blue">z-index:1 (relative)</div>
</div>`,
    displayCss: `.container {
  position: relative;
  width: 260px;
  height: 120px;
  background: #94a3b8;
}
.box {
  width: 150px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  color: white;
  text-align: center;
  padding: 4px;
}
.red {
  position: static;
  z-index: 99;
  background: rgba(239,68,68,0.9);
}
.blue {
  position: relative;
  z-index: 1;
  background: rgba(37,99,235,0.9);
  top: -40px;
  left: 80px;
}`,
    renderWidth: 300, renderHeight: 145,
    correctVariantId: 'M005-A',
    variants: [
      { id: 'M005-A', html: `<div class="container"><div class="box red">z-index:99 (static)</div><div class="box blue">z-index:1 (relative)</div></div>`, css: `.container{position:relative;width:260px;height:120px;background:#94a3b8;}.box{width:150px;height:70px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:bold;color:white;text-align:center;padding:4px;}.red{position:static;z-index:99;background:rgba(239,68,68,0.9);}.blue{position:relative;z-index:1;background:rgba(37,99,235,0.9);top:-40px;left:80px;}` },
      { id: 'M005-B', html: `<div class="container"><div class="box red">z-index:99 (static)</div><div class="box blue">z-index:1 (relative)</div></div>`, css: `.container{position:relative;width:260px;height:120px;background:#94a3b8;}.box{width:150px;height:70px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:bold;color:white;text-align:center;padding:4px;}.red{position:relative;z-index:99;background:rgba(239,68,68,0.9);}.blue{position:relative;z-index:1;background:rgba(37,99,235,0.9);top:-40px;left:80px;}` },
      { id: 'M005-C', html: `<div class="container"><div class="box blue">z-index:1</div><div class="box red">z-index:99 (static)</div></div>`, css: `.container{position:relative;width:260px;height:120px;background:#94a3b8;}.box{width:150px;height:70px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:bold;color:white;text-align:center;padding:4px;}.red{position:static;z-index:99;background:rgba(239,68,68,0.9);}.blue{position:relative;z-index:1;background:rgba(37,99,235,0.9);margin-left:80px;}` },
      { id: 'M005-D', html: `<div class="container"><div class="box red">z-index:99 (static)</div><div class="box blue">z-index:1 (relative)</div></div>`, css: `.container{position:relative;width:260px;height:120px;background:#94a3b8;}.box{width:150px;height:70px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:bold;color:white;text-align:center;padding:4px;}.red{position:relative;z-index:1;background:rgba(239,68,68,0.9);}.blue{position:relative;z-index:99;background:rgba(37,99,235,0.9);top:-40px;left:80px;}` },
    ],
    explanation: 'z-index работает только у элементов с position отличным от static. У .red position: static — z-index: 99 игнорируется. .blue (position: relative, z-index: 1) перекрывает .red, хотя его z-index меньше.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/z-index',
    keyProps: ['z-index', 'position'],
  },

  // ─── M006 ─────────────────────────────────────────────────────────────────
  {
    id: 'M006', topic: 'flexbox', difficulty: 'medium',
    displayHtml: `<div class="row">
  <div class="a">A</div>
  <div class="b">B</div>
  <div class="c">C</div>
</div>`,
    displayCss: `.row {
  display: flex;
  width: 280px;
  background: #d8b4fe;
  padding: 6px;
  gap: 6px;
}
.a { flex-basis: 0; flex-grow: 1; background: #9333ea; }
.b { flex-basis: 0; flex-grow: 1; background: #7e22ce; }
.c { flex-basis: 0; flex-grow: 1; background: #581c87; }
.a,.b,.c {
  height: 60px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
}`,
    renderWidth: 300, renderHeight: 90,
    correctVariantId: 'M006-A',
    variants: [
      {
        id: 'M006-A',
        html: `<div class="row"><div class="a">A</div><div class="b">B</div><div class="c">C</div></div>`,
        css: `.row{display:flex;width:280px;background:#d8b4fe;padding:6px;gap:6px;}.a{flex-basis:0;flex-grow:1;background:#9333ea;}.b{flex-basis:0;flex-grow:1;background:#7e22ce;}.c{flex-basis:0;flex-grow:1;background:#581c87;}.a,.b,.c{height:60px;color:white;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:bold;}`
      },
      {
        id: 'M006-B',
        html: `<div class="row"><div class="a">A</div><div class="b">B</div><div class="c">C</div></div>`,
        css: `.row{display:flex;width:280px;background:#d8b4fe;padding:6px;gap:6px;}.a{flex-basis:120px;flex-shrink:0;background:#9333ea;}.b{flex-basis:120px;flex-shrink:0;background:#7e22ce;}.c{flex:1;background:#581c87;}.a,.b,.c{height:60px;color:white;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:bold;}`
      },
      {
        id: 'M006-C',
        html: `<div class="row"><div class="a">A</div><div class="b">B</div><div class="c">C</div></div>`,
        css: `.row{display:flex;width:280px;background:#d8b4fe;padding:6px;gap:6px;}.a{flex-basis:50%;flex-shrink:0;background:#9333ea;}.b{flex:1;background:#7e22ce;}.c{flex:1;background:#581c87;}.a,.b,.c{height:60px;color:white;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:bold;}`
      },
      {
        id: 'M006-D',
        html: `<div class="row"><div class="a">A</div><div class="b">B</div><div class="c">C</div></div>`,
        css: `.row{display:flex;width:280px;background:#d8b4fe;padding:6px;gap:6px;}.a{flex-basis:auto;flex-shrink:0;width:200px;background:#9333ea;}.b{flex:1;background:#7e22ce;}.c{flex:1;background:#581c87;}.a,.b,.c{height:60px;color:white;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:bold;}`
      },
    ],
    explanation: 'A: все flex-basis:0, grow:1 → все равны. B: A и B фиксированы по 120px, C занимает остаток. C: A занимает 50% (basis:50%), B и C — по половине оставшегося. D: A фиксирован 200px, B и C делят остаток.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/flex-basis',
    keyProps: ['flex-basis'],
  },

  // ─── M006: flex-basis vs width ────────────────────────────────────────────

  // ─── M007: grid-column span ───────────────────────────────────────────────
  {
    id: 'M007', topic: 'grid', difficulty: 'hard',
    displayHtml: `<div class="grid">
  <div class="cell span2">Span 2</div>
  <div class="cell">2</div>
  <div class="cell">3</div>
  <div class="cell">4</div>
  <div class="cell span3">Span 3</div>
</div>`,
    displayCss: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  background: #6ee7b7;
  padding: 8px;
  width: 270px;
}
.cell {
  background: #059669;
  color: white;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 13px;
  border-radius: 4px;
}
.span2 { grid-column: span 2; }
.span3 { grid-column: span 3; }`,
    renderWidth: 300, renderHeight: 160,
    correctVariantId: 'M007-A',
    variants: [
      { id: 'M007-A', html: `<div class="grid"><div class="cell span2">Span 2</div><div class="cell">2</div><div class="cell">3</div><div class="cell">4</div><div class="cell span3">Span 3</div></div>`, css: `.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;background:#6ee7b7;padding:8px;width:270px;}.cell{background:#059669;color:white;height:44px;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:13px;border-radius:4px;}.span2{grid-column:span 2;}.span3{grid-column:span 3;}` },
      { id: 'M007-B', html: `<div class="grid"><div class="cell span2">Span 2</div><div class="cell">2</div><div class="cell">3</div><div class="cell">4</div><div class="cell span3">Span 3</div></div>`, css: `.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;background:#6ee7b7;padding:8px;width:270px;}.cell{background:#059669;color:white;height:44px;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:13px;border-radius:4px;}` },
      { id: 'M007-C', html: `<div class="grid"><div class="cell span2">Span 2</div><div class="cell">2</div><div class="cell">3</div><div class="cell">4</div><div class="cell span3">Span 3</div></div>`, css: `.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;background:#6ee7b7;padding:8px;width:270px;}.cell{background:#059669;color:white;height:44px;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:13px;border-radius:4px;}.span2{grid-column:span 1;}.span3{grid-column:span 2;}` },
      { id: 'M007-D', html: `<div class="grid"><div class="cell span2">Span 2</div><div class="cell">2</div><div class="cell">3</div><div class="cell">4</div><div class="cell span3">Span 3</div></div>`, css: `.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;background:#6ee7b7;padding:8px;width:270px;}.cell{background:#059669;color:white;height:44px;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:13px;border-radius:4px;}.span2{grid-column:span 2;}.span3{grid-column:span 3;}` },
    ],
    explanation: 'grid-column: span 2 растягивает элемент на 2 колонки, span 3 — на все три. Элемент «Span 3» не помещается рядом с «4», поэтому переносится на следующую строку и занимает всю ширину.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/grid-column',
    keyProps: ['grid-column'],
  },

  // ─── M008: opacity creates stacking context ───────────────────────────────
  {
    id: 'M008', topic: 'stacking', difficulty: 'hard',
    displayHtml: `<div class="wrapper">
  <div class="box a">A z:2</div>
  <div class="box b">
    B opacity:0.9
    <div class="inner">inner z:100</div>
  </div>
</div>`,
    displayCss: `.wrapper {
  position: relative;
  width: 260px;
  height: 140px;
  background: #94a3b8;
}
.box {
  position: absolute;
  width: 140px;
  height: 80px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  color: white;
  padding: 6px;
}
.a { background: rgba(239,68,68,0.95); top:10px; left:10px; z-index:2; }
.b { background: rgba(59,130,246,0.9); top:40px; left:80px;
     opacity: 0.9; z-index: 1; }
.inner {
  position: absolute;
  bottom: 4px; right: 4px;
  width: 70px; height: 30px;
  background: #1d4ed8;
  z-index: 100;
  display: flex; align-items: center; justify-content: center;
  font-size: 11px;
}`,
    renderWidth: 300, renderHeight: 165,
    correctVariantId: 'M008-A',
    variants: [
      { id: 'M008-A', html: `<div class="wrapper"><div class="box a">A z:2</div><div class="box b">B opacity:0.9<div class="inner">inner z:100</div></div></div>`, css: `.wrapper{position:relative;width:260px;height:140px;background:#94a3b8;}.box{position:absolute;width:140px;height:80px;display:flex;align-items:flex-start;justify-content:center;font-size:12px;font-weight:bold;color:white;padding:6px;}.a{background:rgba(239,68,68,0.95);top:10px;left:10px;z-index:2;}.b{background:rgba(59,130,246,0.9);top:40px;left:80px;opacity:0.9;z-index:1;}.inner{position:absolute;bottom:4px;right:4px;width:70px;height:30px;background:#1d4ed8;z-index:100;display:flex;align-items:center;justify-content:center;font-size:11px;}` },
      { id: 'M008-B', html: `<div class="wrapper"><div class="box a">A z:2</div><div class="box b">B opacity:0.9<div class="inner">inner z:100</div></div></div>`, css: `.wrapper{position:relative;width:260px;height:140px;background:#94a3b8;}.box{position:absolute;width:140px;height:80px;display:flex;align-items:flex-start;justify-content:center;font-size:12px;font-weight:bold;color:white;padding:6px;}.a{background:rgba(239,68,68,0.95);top:10px;left:10px;z-index:2;}.b{background:rgba(59,130,246,0.9);top:40px;left:80px;z-index:1;}.inner{position:absolute;bottom:4px;right:4px;width:70px;height:30px;background:#1d4ed8;z-index:100;display:flex;align-items:center;justify-content:center;font-size:11px;}` },
      { id: 'M008-C', html: `<div class="wrapper"><div class="box a">A z:2</div><div class="box b">B opacity:0.9<div class="inner">inner z:100</div></div></div>`, css: `.wrapper{position:relative;width:260px;height:140px;background:#94a3b8;}.box{position:absolute;width:140px;height:80px;display:flex;align-items:flex-start;justify-content:center;font-size:12px;font-weight:bold;color:white;padding:6px;}.a{background:rgba(239,68,68,0.95);top:10px;left:10px;z-index:1;}.b{background:rgba(59,130,246,0.9);top:40px;left:80px;opacity:0.9;z-index:2;}.inner{position:absolute;bottom:4px;right:4px;width:70px;height:30px;background:#1d4ed8;z-index:100;display:flex;align-items:center;justify-content:center;font-size:11px;}` },
      { id: 'M008-D', html: `<div class="wrapper"><div class="box a">A z:2</div><div class="box b">B opacity:0.9<div class="inner">inner z:100</div></div></div>`, css: `.wrapper{position:relative;width:260px;height:140px;background:#94a3b8;}.box{position:absolute;width:140px;height:80px;display:flex;align-items:flex-start;justify-content:center;font-size:12px;font-weight:bold;color:white;padding:6px;}.a{background:rgba(239,68,68,0.95);top:10px;left:10px;z-index:2;}.b{background:rgba(59,130,246,0.9);top:40px;left:80px;opacity:0.9;z-index:3;}.inner{position:absolute;bottom:4px;right:4px;width:70px;height:30px;background:#1d4ed8;z-index:100;display:flex;align-items:center;justify-content:center;font-size:11px;}` },
    ],
    explanation: 'opacity < 1 создаёт новый stacking context. Дочерний .inner с z-index:100 сравнивается внутри контекста .b (z-index:1), а не глобально. Поэтому .a (z-index:2) всё равно выше .inner, несмотря на его z-index:100.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context',
    keyProps: ['opacity', 'z-index'],
  },

  // ─── M009: align-content vs align-items ──────────────────────────────────
  // ─── M010: grid auto-fill vs auto-fit ─────────────────────────────────────
  {
    id: 'M010', topic: 'grid', difficulty: 'hard',
    displayHtml: `<div class="grid">
  <div class="cell">A</div>
  <div class="cell">B</div>
  <div class="cell">C</div>
</div>`,
    displayCss: `.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 8px;
  background: #86efac;
  padding: 8px;
  width: 280px;
}
.cell {
  background: #15803d;
  color: white;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  border-radius: 6px;
}`,
    renderWidth: 300, renderHeight: 100,
    correctVariantId: 'M010-A',
    variants: [
      { id: 'M010-A', html: `<div class="grid"><div class="cell">A</div><div class="cell">B</div><div class="cell">C</div></div>`, css: `.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(80px,1fr));gap:8px;background:#86efac;padding:8px;width:280px;}.cell{background:#15803d;color:white;height:60px;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:bold;border-radius:6px;}` },
      { id: 'M010-B', html: `<div class="grid"><div class="cell">A</div><div class="cell">B</div><div class="cell">C</div></div>`, css: `.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(80px,1fr));gap:8px;background:#86efac;padding:8px;width:280px;}.cell{background:#15803d;color:white;height:60px;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:bold;border-radius:6px;}` },
      { id: 'M010-C', html: `<div class="grid"><div class="cell">A</div><div class="cell">B</div><div class="cell">C</div></div>`, css: `.grid{display:grid;grid-template-columns:repeat(3,80px);gap:8px;background:#86efac;padding:8px;width:280px;}.cell{background:#15803d;color:white;height:60px;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:bold;border-radius:6px;}` },
      { id: 'M010-D', html: `<div class="grid"><div class="cell">A</div><div class="cell">B</div><div class="cell">C</div></div>`, css: `.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:8px;background:#86efac;padding:8px;width:280px;}.cell{background:#15803d;color:white;height:60px;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:bold;border-radius:6px;}` },
    ],
    explanation: 'auto-fit с minmax(80px, 1fr): 3 элемента по 80px помещаются в 280px. auto-fit растягивает их до 1fr, заполняя ширину. auto-fill оставил бы пустые колонки — визуально то же при наличии элементов, но пустое пространство не заполняется.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/repeat',
    keyProps: ['grid-template-columns'],
  },

  // ─── M011: transform creates stacking context ─────────────────────────────
  // ─── M012: overflow: hidden BFC prevents margin collapse ──────────────────
{
    id: 'M012', topic: 'overflow', difficulty: 'hard',
    displayHtml: `<div class="outer">
  <div class="float">Float</div>
  <p>Текст рядом с float</p>
</div>
<div class="below">Блок после</div>`,
    displayCss: `.outer {
  overflow: hidden;  /* создаёт BFC — охватывает float */
  background: #fef9c3;
  border: 2px solid #ca8a04;
  width: 220px;
  padding: 4px;
}
.float {
  float: left;
  width: 70px;
  height: 70px;
  background: #d97706;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 8px;
}
p { margin: 0; font-size: 13px; }
.below {
  background: #92400e;
  color: white;
  padding: 6px 8px;
  font-size: 13px;
  width: 220px;
  margin-top: 4px;
}`,
    renderWidth: 300, renderHeight: 180,
    correctVariantId: 'M012-A',
    variants: [
      {
        id: 'M012-A',
        html: `<div class="outer"><div class="float">Float</div><p>Текст рядом с float</p></div><div class="below">Блок после</div>`,
        css: `.outer{overflow:hidden;background:#fef9c3;border:2px solid #ca8a04;width:220px;padding:4px;}.float{float:left;width:70px;height:70px;background:#d97706;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;margin-right:8px;}.outer p{margin:0;font-size:13px;}.below{background:#92400e;color:white;padding:6px 8px;font-size:13px;width:220px;margin-top:4px;}`
      },
      {
        id: 'M012-B',
        html: `<div class="outer"><div class="float">Float</div><p>Текст рядом с float</p></div><div class="below">Блок после</div>`,
        css: `.outer{background:#fef9c3;border:2px solid #ca8a04;width:220px;padding:4px;}.float{float:left;width:70px;height:70px;background:#d97706;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;margin-right:8px;}.outer p{margin:0;font-size:13px;}.below{background:#92400e;color:white;padding:6px 8px;font-size:13px;width:220px;margin-top:4px;}`
      },
      {
        id: 'M012-C',
        html: `<div class="outer"><div class="float">Float</div><p>Текст рядом с float</p></div><div class="below">Блок после</div>`,
        css: `.outer{display:flow-root;background:#fef9c3;border:2px solid #ca8a04;width:220px;padding:4px;}.float{float:left;width:70px;height:70px;background:#d97706;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;margin-right:8px;}.outer p{margin:0;font-size:13px;}.below{background:#92400e;color:white;padding:6px 8px;font-size:13px;width:220px;margin-top:4px;}`
      },
      {
        id: 'M012-D',
        html: `<div class="outer"><div class="float">Float</div><p>Текст рядом с float</p></div><div class="below">Блок после</div>`,
        css: `.outer{background:#fef9c3;border:2px solid #ca8a04;width:220px;padding:4px;}.float{float:left;width:70px;height:70px;background:#d97706;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;margin-right:8px;}.outer p{margin:0;font-size:13px;clear:both;}.below{background:#92400e;color:white;padding:6px 8px;font-size:13px;width:220px;margin-top:4px;}`
      },
    ],
    explanation: 'overflow: hidden создаёт Block Formatting Context (BFC): родитель ОХВАТЫВАЕТ float, его фон виден вокруг блока. Без BFC (B) — родитель схлопывается по высоте текста, float торчит наружу. display: flow-root (C) — BFC без скрытия. clear:both (D) — абзац переносится ПОД float, но BFC нет.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/overflow',
    keyProps: ['overflow'],
  },

  // ─── M013: minmax grid track ─────────────────────────────────────────────
  // ─── M014: place-items: center grid ──────────────────────────────────────
  {
    id: 'M014', topic: 'grid', difficulty: 'hard',
    displayHtml: `<div class="grid">
  <div class="cell">1</div>
  <div class="cell wide">wide</div>
  <div class="cell">3</div>
  <div class="cell">4</div>
</div>`,
    displayCss: `.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  place-items: center;
  background: #c084fc;
  padding: 10px;
  width: 260px;
  height: 160px;
}
.cell {
  background: #7c3aed;
  color: white;
  width: 60px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
  border-radius: 6px;
}
.wide { width: 100px; }`,
    renderWidth: 300, renderHeight: 185,
    correctVariantId: 'M014-A',
    variants: [
      { id: 'M014-A', html: `<div class="grid"><div class="cell">1</div><div class="cell wide">wide</div><div class="cell">3</div><div class="cell">4</div></div>`, css: `.grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;place-items:center;background:#c084fc;padding:10px;width:260px;height:160px;}.cell{background:#7c3aed;color:white;width:60px;height:44px;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:14px;border-radius:6px;}.wide{width:100px;}` },
      { id: 'M014-B', html: `<div class="grid"><div class="cell">1</div><div class="cell wide">wide</div><div class="cell">3</div><div class="cell">4</div></div>`, css: `.grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;background:#c084fc;padding:10px;width:260px;height:160px;}.cell{background:#7c3aed;color:white;width:60px;height:44px;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:14px;border-radius:6px;}.wide{width:100px;}` },
      { id: 'M014-C', html: `<div class="grid"><div class="cell">1</div><div class="cell wide">wide</div><div class="cell">3</div><div class="cell">4</div></div>`, css: `.grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;place-items:start;background:#c084fc;padding:10px;width:260px;height:160px;}.cell{background:#7c3aed;color:white;width:60px;height:44px;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:14px;border-radius:6px;}.wide{width:100px;}` },
      { id: 'M014-D', html: `<div class="grid"><div class="cell">1</div><div class="cell wide">wide</div><div class="cell">3</div><div class="cell">4</div></div>`, css: `.grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;place-items:end;background:#c084fc;padding:10px;width:260px;height:160px;}.cell{background:#7c3aed;color:white;width:60px;height:44px;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:14px;border-radius:6px;}.wide{width:100px;}` },
    ],
    explanation: 'place-items: center — сокращение align-items: center + justify-items: center. Каждый элемент центрируется в своей ячейке сетки по обеим осям.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/place-items',
    keyProps: ['place-items'],
  },

  // ─── M015: vertical-align inline-block ────────────────────────────────────
  {
    id: 'M015', topic: 'display', difficulty: 'hard',
    displayHtml: `<div class="line">
  <span class="box top">top</span>
  <span class="box middle">mid</span>
  <span class="box bottom">bot</span>
  <span>Baseline text</span>
</div>`,
    displayCss: `.line {
  background: #94a3b8;
  padding: 10px;
  width: 260px;
  font-size: 14px;
  border: 2px solid #cbd5e1;
}
.box {
  display: inline-block;
  width: 44px;
  height: 44px;
  background: #4f46e5;
  color: white;
  font-size: 11px;
  font-weight: bold;
  text-align: center;
  line-height: 44px;
}
.top    { vertical-align: top; }
.middle { vertical-align: middle; }
.bottom { vertical-align: bottom; }`,
    renderWidth: 300, renderHeight: 110,
    correctVariantId: 'M015-A',
    variants: [
      { id: 'M015-A', html: `<div class="line"><span class="box top">top</span><span class="box middle">mid</span><span class="box bottom">bot</span><span>Baseline text</span></div>`, css: `.line{background:#94a3b8;padding:10px;width:260px;font-size:14px;border:2px solid #cbd5e1;}.box{display:inline-block;width:44px;height:44px;background:#4f46e5;color:white;font-size:11px;font-weight:bold;text-align:center;line-height:44px;}.top{vertical-align:top;}.middle{vertical-align:middle;}.bottom{vertical-align:bottom;}` },
      { id: 'M015-B', html: `<div class="line"><span class="box top">top</span><span class="box middle">mid</span><span class="box bottom">bot</span><span>Baseline text</span></div>`, css: `.line{background:#94a3b8;padding:10px;width:260px;font-size:14px;border:2px solid #cbd5e1;}.box{display:inline-block;width:44px;height:44px;background:#4f46e5;color:white;font-size:11px;font-weight:bold;text-align:center;line-height:44px;vertical-align:baseline;}` },
      { id: 'M015-C', html: `<div class="line"><span class="box top">top</span><span class="box middle">mid</span><span class="box bottom">bot</span><span>Baseline text</span></div>`, css: `.line{background:#94a3b8;padding:10px;width:260px;font-size:14px;border:2px solid #cbd5e1;}.box{display:inline-block;width:44px;height:44px;background:#4f46e5;color:white;font-size:11px;font-weight:bold;text-align:center;line-height:44px;}.top{vertical-align:bottom;}.middle{vertical-align:top;}.bottom{vertical-align:middle;}` },
      { id: 'M015-D', html: `<div class="line"><span class="box top">top</span><span class="box middle">mid</span><span class="box bottom">bot</span><span>Baseline text</span></div>`, css: `.line{display:flex;align-items:center;background:#94a3b8;padding:10px;width:260px;font-size:14px;border:2px solid #cbd5e1;}.box{width:44px;height:44px;background:#4f46e5;color:white;font-size:11px;font-weight:bold;text-align:center;line-height:44px;}` },
    ],
    explanation: 'vertical-align задаёт выравнивание inline/inline-block элементов в строке. top — по верху строки, middle — по середине, bottom — по низу. Все три квадрата в строке, но выровнены по-разному.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/vertical-align',
    keyProps: ['vertical-align'],
  },

  // ─── M016: flex-grow proportional ─────────────────────────────────────────
{
    id: 'M016', topic: 'flexbox', difficulty: 'hard',
    displayHtml: `<div class="row">
  <div class="a">grow:1</div>
  <div class="b">grow:2</div>
  <div class="c">grow:1</div>
</div>`,
    displayCss: `.row {
  display: flex;
  width: 280px;
  background: #fed7aa;
  padding: 6px;
  gap: 4px;
}
.a, .b, .c {
  height: 60px;
  background: #ea580c;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  flex-basis: 0;
}
.a { flex-grow: 1; }
.b { flex-grow: 2; }
.c { flex-grow: 1; }`,
    renderWidth: 300, renderHeight: 90,
    correctVariantId: 'M016-A',
    variants: [
      {
        id: 'M016-A',
        html: `<div class="row"><div class="a">grow:1</div><div class="b">grow:2</div><div class="c">grow:1</div></div>`,
        css: `.row{display:flex;width:280px;background:#fed7aa;padding:6px;gap:4px;}.a,.b,.c{height:60px;background:#ea580c;color:white;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:bold;flex-basis:0;}.a{flex-grow:1;}.b{flex-grow:2;}.c{flex-grow:1;}`
      },
      {
        id: 'M016-B',
        html: `<div class="row"><div class="a">grow:1</div><div class="b">grow:1</div><div class="c">grow:1</div></div>`,
        css: `.row{display:flex;width:280px;background:#fed7aa;padding:6px;gap:4px;}.a,.b,.c{height:60px;background:#ea580c;color:white;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:bold;flex-basis:0;flex-grow:1;}`
      },
      {
        id: 'M016-C',
        html: `<div class="row"><div class="a">grow:4</div><div class="b">grow:1</div><div class="c">grow:1</div></div>`,
        css: `.row{display:flex;width:280px;background:#fed7aa;padding:6px;gap:4px;}.a,.b,.c{height:60px;background:#ea580c;color:white;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:bold;flex-basis:0;}.a{flex-grow:4;}.b{flex-grow:1;}.c{flex-grow:1;}`
      },
      {
        id: 'M016-D',
        html: `<div class="row"><div class="a">grow:0</div><div class="b">grow:1</div><div class="c">grow:0</div></div>`,
        css: `.row{display:flex;width:280px;background:#fed7aa;padding:6px;gap:4px;}.a,.b,.c{height:60px;background:#ea580c;color:white;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:bold;flex-basis:0;}.a{flex-grow:0;flex-basis:50px;}.b{flex-grow:1;}.c{flex-grow:0;flex-basis:50px;}`
      },
    ],
    explanation: 'flex-grow делит СВОБОДНОЕ пространство пропорционально. При 1:2:1 (итого 4 доли) A и C получают по 1/4, B — 2/4 (в два раза шире). Вариант B: все по 1/3. Вариант C: A=4/6, B и C по 1/6. Вариант D: A и C фиксированные 50px, B — всё остальное.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/flex-grow',
    keyProps: ['flex-grow'],
  },

  // ─── M017: width: max-content / min-content ───────────────────────────────
  {
    id: 'M017', topic: 'sizing', difficulty: 'hard',
    displayHtml: `<div class="container">
  <div class="box mc">Текст не переносится</div>
  <div class="box fc">fit-content</div>
</div>`,
    displayCss: `.container {
  background: #86efac;
  padding: 10px;
  width: 260px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
}
.box {
  background: #16a34a;
  color: white;
  padding: 8px 12px;
  font-size: 13px;
}
.mc { width: max-content; }
.fc { width: fit-content; }`,
    renderWidth: 300, renderHeight: 130,
    correctVariantId: 'M017-A',
    variants: [
      { id: 'M017-A', html: `<div class="container"><div class="box mc">Текст не переносится</div><div class="box fc">fit-content</div></div>`, css: `.container{background:#86efac;padding:10px;width:260px;display:flex;flex-direction:column;gap:8px;align-items:flex-start;}.box{background:#16a34a;color:white;padding:8px 12px;font-size:13px;}.mc{width:max-content;}.fc{width:fit-content;}` },
      { id: 'M017-B', html: `<div class="container"><div class="box mc">Текст не переносится</div><div class="box fc">fit-content</div></div>`, css: `.container{background:#86efac;padding:10px;width:260px;display:flex;flex-direction:column;gap:8px;align-items:flex-start;}.box{background:#16a34a;color:white;padding:8px 12px;font-size:13px;}.mc{width:min-content;}.fc{width:fit-content;}` },
      { id: 'M017-C', html: `<div class="container"><div class="box mc">Текст не переносится</div><div class="box fc">fit-content</div></div>`, css: `.container{background:#86efac;padding:10px;width:260px;display:flex;flex-direction:column;gap:8px;}.box{background:#16a34a;color:white;padding:8px 12px;font-size:13px;}` },
      { id: 'M017-D', html: `<div class="container"><div class="box mc">Текст не переносится</div><div class="box fc">fit-content</div></div>`, css: `.container{background:#86efac;padding:10px;width:260px;display:flex;flex-direction:column;gap:8px;align-items:stretch;}.box{background:#16a34a;color:white;padding:8px 12px;font-size:13px;}` },
    ],
    explanation: 'width: max-content — ширина по содержимому без переносов (одна длинная строка). fit-content = min(max-content, available) — берёт контент, но не шире доступного. Оба уже ширины контейнера.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/width',
    keyProps: ['width'],
  },

  // ─── M018: grid-template-areas ────────────────────────────────────────────
  {
    id: 'M018', topic: 'grid', difficulty: 'hard',
    displayHtml: `<div class="page">
  <header class="hdr">Header</header>
  <nav class="nav">Nav</nav>
  <main class="main">Main</main>
  <footer class="ftr">Footer</footer>
</div>`,
    displayCss: `.page {
  display: grid;
  grid-template-areas:
    "hdr hdr"
    "nav main"
    "ftr ftr";
  grid-template-columns: 80px 1fr;
  grid-template-rows: 36px 80px 36px;
  gap: 4px;
  width: 260px;
  background: #94a3b8;
  padding: 4px;
}
.hdr  { grid-area: hdr;  background: #1e40af; }
.nav  { grid-area: nav;  background: #1d4ed8; }
.main { grid-area: main; background: #3b82f6; }
.ftr  { grid-area: ftr;  background: #1e40af; }
.hdr,.nav,.main,.ftr {
  color: white; display: flex;
  align-items: center; justify-content: center;
  font-weight: bold; font-size: 13px;
}`,
    renderWidth: 300, renderHeight: 175,
    correctVariantId: 'M018-A',
    variants: [
      { id: 'M018-A', html: `<div class="page"><header class="hdr">Header</header><nav class="nav">Nav</nav><main class="main">Main</main><footer class="ftr">Footer</footer></div>`, css: `.page{display:grid;grid-template-areas:"hdr hdr" "nav main" "ftr ftr";grid-template-columns:80px 1fr;grid-template-rows:36px 80px 36px;gap:4px;width:260px;background:#94a3b8;padding:4px;}.hdr{grid-area:hdr;background:#1e40af;}.nav{grid-area:nav;background:#1d4ed8;}.main{grid-area:main;background:#3b82f6;}.ftr{grid-area:ftr;background:#1e40af;}.hdr,.nav,.main,.ftr{color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:13px;}` },
      { id: 'M018-B', html: `<div class="page"><header class="hdr">Header</header><nav class="nav">Nav</nav><main class="main">Main</main><footer class="ftr">Footer</footer></div>`, css: `.page{display:grid;grid-template-areas:"hdr nav" "main main" "ftr ftr";grid-template-columns:80px 1fr;grid-template-rows:36px 80px 36px;gap:4px;width:260px;background:#94a3b8;padding:4px;}.hdr{grid-area:hdr;background:#1e40af;}.nav{grid-area:nav;background:#1d4ed8;}.main{grid-area:main;background:#3b82f6;}.ftr{grid-area:ftr;background:#1e40af;}.hdr,.nav,.main,.ftr{color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:13px;}` },
      { id: 'M018-C', html: `<div class="page"><header class="hdr">Header</header><nav class="nav">Nav</nav><main class="main">Main</main><footer class="ftr">Footer</footer></div>`, css: `.page{display:grid;grid-template-columns:80px 1fr;grid-template-rows:36px 80px 36px;gap:4px;width:260px;background:#94a3b8;padding:4px;}.hdr{background:#1e40af;}.nav{background:#1d4ed8;}.main{background:#3b82f6;}.ftr{background:#1e40af;grid-column:span 2;}.hdr,.nav,.main,.ftr{color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:13px;}` },
      { id: 'M018-D', html: `<div class="page"><header class="hdr">Header</header><nav class="nav">Nav</nav><main class="main">Main</main><footer class="ftr">Footer</footer></div>`, css: `.page{display:grid;grid-template-areas:"hdr hdr" "main nav" "ftr ftr";grid-template-columns:1fr 80px;grid-template-rows:36px 80px 36px;gap:4px;width:260px;background:#94a3b8;padding:4px;}.hdr{grid-area:hdr;background:#1e40af;}.nav{grid-area:nav;background:#1d4ed8;}.main{grid-area:main;background:#3b82f6;}.ftr{grid-area:ftr;background:#1e40af;}.hdr,.nav,.main,.ftr{color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:13px;}` },
    ],
    explanation: 'grid-template-areas позволяет именовать области сетки и назначать им элементы через grid-area. Header и Footer растянуты на 2 колонки (hdr hdr / ftr ftr), Nav занимает левую, Main — правую.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/grid-template-areas',
    keyProps: ['grid-template-areas', 'grid-area'],
  },

  // ─── M019: height:100% needs parent height ────────────────────────────────
  {
    id: 'M019', topic: 'sizing', difficulty: 'hard',
    displayHtml: `<div class="outer">
  <div class="inner">height: 100%</div>
</div>`,
    displayCss: `.outer {
  background: #fef3c7;
  width: 200px;
  height: 120px;
  border: 3px solid #f59e0b;
  padding: 8px;
}
.inner {
  background: #d97706;
  color: white;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
}`,
    renderWidth: 300, renderHeight: 155,
    correctVariantId: 'M019-A',
    variants: [
      { id: 'M019-A', html: `<div class="outer"><div class="inner">height: 100%</div></div>`, css: `.outer{background:#fef3c7;width:200px;height:120px;border:3px solid #f59e0b;padding:8px;}.inner{background:#d97706;color:white;height:100%;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:14px;}` },
      { id: 'M019-B', html: `<div class="outer"><div class="inner">height: 100%</div></div>`, css: `.outer{background:#fef3c7;width:200px;border:3px solid #f59e0b;padding:8px;}.inner{background:#d97706;color:white;height:100%;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:14px;}` },
      { id: 'M019-C', html: `<div class="outer"><div class="inner">height: 100%</div></div>`, css: `.outer{background:#fef3c7;width:200px;height:120px;border:3px solid #f59e0b;padding:8px;}.inner{background:#d97706;color:white;height:60px;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:14px;}` },
      { id: 'M019-D', html: `<div class="outer"><div class="inner">height: 100%</div></div>`, css: `.outer{display:flex;background:#fef3c7;width:200px;height:120px;border:3px solid #f59e0b;padding:8px;}.inner{background:#d97706;color:white;flex:1;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:14px;}` },
    ],
    explanation: 'height: 100% работает только когда у родителя задана явная высота. Здесь .outer имеет height: 120px — .inner занимает 100% этой высоты (минус padding). Без height у родителя — height: 100% сводится к auto.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/height',
    keyProps: ['height'],
  },

  // ─── M020: overflow hidden clips absolute children ────────────────────────
{
    id: 'M020', topic: 'overflow', difficulty: 'hard',
    displayHtml: `<div class="parent">
  <div class="child">Вылезает?</div>
</div>`,
    displayCss: `.parent {
  position: relative;
  overflow: hidden;
  width: 160px;
  height: 80px;
  background: #7dd3fc;
  border: 2px solid #0ea5e9;
}
.child {
  position: absolute;
  top: 20px;
  left: 100px;
  width: 120px;
  height: 50px;
  background: #0369a1;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 13px;
}`,
    renderWidth: 300, renderHeight: 120,
    correctVariantId: 'M020-A',
    variants: [
      {
        // A (correct): overflow:hidden + position:relative → child ОБРЕЗАН на границе
        id: 'M020-A',
        html: `<div class="parent"><div class="child">Вылезает?</div></div>`,
        css: `.parent{position:relative;overflow:hidden;width:160px;height:80px;background:#7dd3fc;border:2px solid #0ea5e9;}.child{position:absolute;top:20px;left:100px;width:120px;height:50px;background:#0369a1;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:13px;}`
      },
      {
        // B: overflow:visible → child ПОЛНОСТЬЮ виден за границей
        id: 'M020-B',
        html: `<div class="parent"><div class="child">Вылезает?</div></div>`,
        css: `.parent{position:relative;overflow:visible;width:160px;height:80px;background:#7dd3fc;border:2px solid #0ea5e9;}.child{position:absolute;top:20px;left:100px;width:120px;height:50px;background:#0369a1;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:13px;}`
      },
      {
        // C: НЕТ position у parent → containing block = viewport iframe,
        // child позиционируется от угла рендера, overflow не режет его
        id: 'M020-C',
        html: `<div class="parent"><div class="child">Вылезает?</div></div>`,
        css: `.parent{overflow:hidden;width:160px;height:80px;background:#7dd3fc;border:2px solid #0ea5e9;margin-left:40px;}.child{position:absolute;top:20px;left:100px;width:120px;height:50px;background:#0369a1;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:13px;}`
      },
      {
        // D: child НЕ absolute → стоит в потоке ВНУТРИ parent, обрезан по высоте
        id: 'M020-D',
        html: `<div class="parent"><div class="child">Вылезает?</div></div>`,
        css: `.parent{position:relative;overflow:hidden;width:160px;height:80px;background:#7dd3fc;border:2px solid #0ea5e9;}.child{margin-top:20px;margin-left:20px;width:120px;height:50px;background:#0369a1;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:13px;}`
      },
    ],
    explanation: 'overflow: hidden обрезает absolute-потомков только если у родителя есть position (A — child обрезан). visible — child виден целиком за границей (B). Без position у родителя (C) — child позиционируется от viewport, overflow родителя его не режет. Не-absolute child (D) — стоит в потоке внутри.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/overflow',
    keyProps: ['overflow', 'position'],
  },

  // ─── M021: white-space: pre ───────────────────────────────────────────────
  {
    id: 'M021', topic: 'text', difficulty: 'hard',
    displayHtml: `<div class="box">Строка 1
  Строка с отступом
Строка 3</div>`,
    displayCss: `.box {
  width: 220px;
  background: #1e293b;
  color: #94a3b8;
  padding: 12px;
  font-family: monospace;
  font-size: 14px;
  white-space: pre;
}`,
    renderWidth: 300, renderHeight: 110,
    correctVariantId: 'M021-A',
    variants: [
      { id: 'M021-A', html: `<div class="box">Строка 1\n  Строка с отступом\nСтрока 3</div>`, css: `.box{width:220px;background:#1e293b;color:#94a3b8;padding:12px;font-family:monospace;font-size:14px;white-space:pre;}` },
      { id: 'M021-B', html: `<div class="box">Строка 1\n  Строка с отступом\nСтрока 3</div>`, css: `.box{width:220px;background:#1e293b;color:#94a3b8;padding:12px;font-family:monospace;font-size:14px;white-space:normal;}` },
      { id: 'M021-C', html: `<div class="box">Строка 1\n  Строка с отступом\nСтрока 3</div>`, css: `.box{width:220px;background:#1e293b;color:#94a3b8;padding:12px;font-family:monospace;font-size:14px;white-space:pre-wrap;}` },
      { id: 'M021-D', html: `<div class="box">Строка 1\n  Строка с отступом\nСтрока 3</div>`, css: `.box{width:220px;background:#1e293b;color:#94a3b8;padding:12px;font-family:monospace;font-size:14px;white-space:nowrap;overflow:hidden;}` },
    ],
    explanation: 'white-space: pre сохраняет переносы строк и пробелы как есть, не переносит текст. pre-wrap — то же самое, но с переносом при переполнении. normal — схлопывает пробелы и переносы.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/white-space',
    keyProps: ['white-space'],
  },

  // ─── M022: flex min-width: auto ───────────────────────────────────────────
{
    id: 'M022', topic: 'flexbox', difficulty: 'hard',
    displayHtml: `<div class="row">
  <div class="item">Фиксированный</div>
  <div class="item shrink">
    Очень длинный текст который должен усохнуть
  </div>
</div>`,
    displayCss: `.row {
  display: flex;
  width: 260px;
  gap: 8px;
  background: #94a3b8;
  padding: 6px;
}
.item {
  background: #475569;
  color: white;
  padding: 10px 8px;
  font-size: 12px;
  flex-shrink: 0;
  width: 100px;
}
.shrink {
  flex-shrink: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: auto;
}`,
    renderWidth: 300, renderHeight: 140,
    correctVariantId: 'M022-A',
    variants: [
      {
        // A (correct): min-width:0 → сжимается, текст с «…», всё в сером контейнере
        id: 'M022-A',
        html: `<div class="row"><div class="item">Фиксированный</div><div class="item shrink">Очень длинный текст который должен усохнуть</div></div>`,
        css: `.row{display:flex;width:260px;gap:8px;background:#94a3b8;padding:6px;}.item{background:#475569;color:white;padding:10px 8px;font-size:12px;flex-shrink:0;width:100px;}.shrink{flex-shrink:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:auto;}`
      },
      {
        // B: БЕЗ min-width:0 → min-width:auto → элемент НЕ СЖИМАЕТСЯ,
        // длинный текст вытекает далеко за правый край серого контейнера
        id: 'M022-B',
        html: `<div class="row"><div class="item">Фиксированный</div><div class="item shrink">Очень длинный текст который должен усохнуть</div></div>`,
        css: `.row{display:flex;width:260px;gap:8px;background:#94a3b8;padding:6px;}.item{background:#475569;color:white;padding:10px 8px;font-size:12px;flex-shrink:0;width:100px;}.shrink{flex-shrink:1;white-space:nowrap;width:auto;}`
      },
      {
        // C: white-space:normal → текст ПЕРЕНОСИТСЯ на несколько строк — ВЫСОКИЙ блок
        id: 'M022-C',
        html: `<div class="row"><div class="item">Фиксированный</div><div class="item shrink">Очень длинный текст который должен усохнуть</div></div>`,
        css: `.row{display:flex;width:260px;gap:8px;background:#94a3b8;padding:6px;}.item{background:#475569;color:white;padding:10px 8px;font-size:12px;flex-shrink:0;width:100px;}.shrink{flex-shrink:1;min-width:0;white-space:normal;width:auto;}`
      },
      {
        // D: flex-wrap:wrap на контейнере → длинный блок переносится на ВТОРУЮ СТРОКУ
        id: 'M022-D',
        html: `<div class="row"><div class="item">Фиксированный</div><div class="item shrink">Очень длинный текст который должен усохнуть</div></div>`,
        css: `.row{display:flex;flex-wrap:wrap;width:260px;gap:8px;background:#94a3b8;padding:6px;}.item{background:#475569;color:white;padding:10px 8px;font-size:12px;flex-shrink:0;width:100px;}.shrink{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%;}`
      },
    ],
    explanation: 'min-width: 0 позволяет flex-элементу сжиматься ниже контентной ширины — текст обрезается с «…». Без min-width:0 (min-width:auto по умолчанию) элемент НЕ сжимается и вытекает за контейнер. white-space:normal — текст переносится в несколько строк. flex-wrap — блок уходит на вторую строку.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/min-width',
    keyProps: ['min-width', 'flex-shrink'],
  },

  // ─── M023: display: contents ──────────────────────────────────────────────
  {
    id: 'M023', topic: 'display', difficulty: 'hard',
    displayHtml: `<div class="row">
  <div class="wrapper">
    <div class="item">A</div>
    <div class="item">B</div>
  </div>
  <div class="item">C</div>
</div>`,
    displayCss: `.row {
  display: flex;
  gap: 8px;
  background: #86efac;
  padding: 8px;
  width: 260px;
}
.wrapper {
  display: contents;
}
.item {
  width: 70px;
  height: 60px;
  background: #16a34a;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: bold;
}`,
    renderWidth: 300, renderHeight: 95,
    correctVariantId: 'M023-A',
    variants: [
      {
        // A (correct): display:contents → wrapper невидим, A B C — три прямых flex-дочерних
        id: 'M023-A',
        html: `<div class="row"><div class="wrapper"><div class="item">A</div><div class="item">B</div></div><div class="item">C</div></div>`,
        css: `.row{display:flex;gap:8px;background:#86efac;padding:8px;width:260px;}.wrapper{display:contents;}.item{width:70px;height:60px;background:#16a34a;color:white;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:bold;}`
      },
      {
        // B: display:none → A и B скрыты полностью, виден только C
        id: 'M023-B',
        html: `<div class="row"><div class="wrapper"><div class="item">A</div><div class="item">B</div></div><div class="item">C</div></div>`,
        css: `.row{display:flex;gap:8px;background:#86efac;padding:8px;width:260px;}.wrapper{display:none;}.item{width:70px;height:60px;background:#16a34a;color:white;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:bold;}`
      },
      {
        // C: display:block → wrapper — блок-контейнер; A и B стекаются вертикально ВНУТРИ wrapper
        // Визуально: [высокий блок AB | C] — wrapper как один tall flex-item
        id: 'M023-C',
        html: `<div class="row"><div class="wrapper"><div class="item">A</div><div class="item">B</div></div><div class="item">C</div></div>`,
        css: `.row{display:flex;gap:8px;align-items:flex-start;background:#86efac;padding:8px;width:260px;}.wrapper{display:block;background:#a7f3d0;border:2px solid #16a34a;padding:4px;}.item{width:70px;height:60px;background:#16a34a;color:white;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:bold;margin-bottom:4px;}.item:last-child{margin-bottom:0;}`
      },
      {
        // D: display:flex + flex-direction:column → wrapper — вертикальный flex, но занимает
        // только column-space; wrapper растянут на всю высоту строки align-items:stretch
        id: 'M023-D',
        html: `<div class="row"><div class="wrapper"><div class="item">A</div><div class="item">B</div></div><div class="item">C</div></div>`,
        css: `.row{display:flex;gap:8px;align-items:stretch;background:#86efac;padding:8px;width:260px;}.wrapper{display:flex;flex-direction:column;gap:8px;background:#a7f3d0;padding:4px;justify-content:space-between;}.item{width:70px;height:50px;background:#16a34a;color:white;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:bold;}`
      },
    ],
    explanation: 'display: contents убирает box .wrapper — его дочерние A и B становятся прямыми flex-детьми .row, как будто wrapper не существует. Три равных элемента A B C в одну строку. display:none — A и B пропадают. display:block — A и B стекаются вертикально внутри wrapper. display:flex column — A и B вертикально растянуты.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/display',
    keyProps: ['display'],
  },

  // ─── M024: isolation: isolate ─────────────────────────────────────────────
  {
    id: 'M024', topic: 'stacking', difficulty: 'hard',
    displayHtml: `<div class="scene">
  <div class="behind">z:0 behind</div>
  <div class="group">
    <div class="inside">z:99 inside</div>
  </div>
</div>`,
    displayCss: `.scene {
  position: relative;
  width: 260px;
  height: 130px;
  background: #94a3b8;
}
.behind {
  position: absolute;
  z-index: 0;
  top: 20px; left: 20px;
  width: 120px; height: 80px;
  background: rgba(239,68,68,0.9);
  color: white; font-weight: bold;
  display: flex; align-items: center;
  justify-content: center; font-size: 12px;
}
.group {
  position: absolute;
  top: 0; left: 100px;
  width: 140px; height: 100px;
  isolation: isolate;
}
.inside {
  position: absolute;
  z-index: 99;
  top: 10px; left: 10px;
  width: 120px; height: 80px;
  background: rgba(37,99,235,0.9);
  color: white; font-weight: bold;
  display: flex; align-items: center;
  justify-content: center; font-size: 12px;
}`,
    renderWidth: 300, renderHeight: 155,
    correctVariantId: 'M024-A',
    variants: [
      { id: 'M024-A', html: `<div class="scene"><div class="behind">z:0 behind</div><div class="group"><div class="inside">z:99 inside</div></div></div>`, css: `.scene{position:relative;width:260px;height:130px;background:#94a3b8;}.behind{position:absolute;z-index:0;top:20px;left:20px;width:120px;height:80px;background:rgba(239,68,68,0.9);color:white;font-weight:bold;display:flex;align-items:center;justify-content:center;font-size:12px;}.group{position:absolute;top:0;left:100px;width:140px;height:100px;isolation:isolate;}.inside{position:absolute;z-index:99;top:10px;left:10px;width:120px;height:80px;background:rgba(37,99,235,0.9);color:white;font-weight:bold;display:flex;align-items:center;justify-content:center;font-size:12px;}` },
      { id: 'M024-B', html: `<div class="scene"><div class="behind">z:0 behind</div><div class="group"><div class="inside">z:99 inside</div></div></div>`, css: `.scene{position:relative;width:260px;height:130px;background:#94a3b8;}.behind{position:absolute;z-index:0;top:20px;left:20px;width:120px;height:80px;background:rgba(239,68,68,0.9);color:white;font-weight:bold;display:flex;align-items:center;justify-content:center;font-size:12px;}.group{position:absolute;top:0;left:100px;width:140px;height:100px;}.inside{position:absolute;z-index:99;top:10px;left:10px;width:120px;height:80px;background:rgba(37,99,235,0.9);color:white;font-weight:bold;display:flex;align-items:center;justify-content:center;font-size:12px;}` },
      { id: 'M024-C', html: `<div class="scene"><div class="group"><div class="inside">z:99 inside</div></div><div class="behind">z:0 behind</div></div>`, css: `.scene{position:relative;width:260px;height:130px;background:#94a3b8;}.behind{position:absolute;z-index:0;top:20px;left:20px;width:120px;height:80px;background:rgba(239,68,68,0.9);color:white;font-weight:bold;display:flex;align-items:center;justify-content:center;font-size:12px;}.group{position:absolute;top:0;left:100px;width:140px;height:100px;isolation:isolate;}.inside{position:absolute;z-index:99;top:10px;left:10px;width:120px;height:80px;background:rgba(37,99,235,0.9);color:white;font-weight:bold;display:flex;align-items:center;justify-content:center;font-size:12px;}` },
      { id: 'M024-D', html: `<div class="scene"><div class="behind">z:0 behind</div><div class="group"><div class="inside">z:99 inside</div></div></div>`, css: `.scene{position:relative;width:260px;height:130px;background:#94a3b8;}.behind{position:absolute;z-index:100;top:20px;left:20px;width:120px;height:80px;background:rgba(239,68,68,0.9);color:white;font-weight:bold;display:flex;align-items:center;justify-content:center;font-size:12px;}.group{position:absolute;top:0;left:100px;width:140px;height:100px;isolation:isolate;}.inside{position:absolute;z-index:99;top:10px;left:10px;width:120px;height:80px;background:rgba(37,99,235,0.9);color:white;font-weight:bold;display:flex;align-items:center;justify-content:center;font-size:12px;}` },
    ],
    explanation: 'isolation: isolate создаёт новый stacking context без задания z-index. .group не имеет z-index, т.е. его stacking order = auto. .inside z:99 сравнивается внутри группы, а сама группа «auto» — рисуется поверх behind z:0.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/isolation',
    keyProps: ['isolation'],
  },

  // ─── M025: calc width ─────────────────────────────────────────────────────
  {
    id: 'M025', topic: 'sizing', difficulty: 'hard',
    displayHtml: `<div class="container">
  <div class="sidebar">Sidebar</div>
  <div class="content">calc(100% - 80px - 12px)</div>
</div>`,
    displayCss: `.container {
  display: flex;
  gap: 12px;
  width: 280px;
  background: #94a3b8;
  padding: 6px;
}
.sidebar {
  width: 80px;
  flex-shrink: 0;
  background: #64748b;
  color: white;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}
.content {
  width: calc(100% - 80px - 12px);
  background: #334155;
  color: white;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  text-align: center;
  flex-shrink: 0;
}`,
    renderWidth: 300, renderHeight: 90,
    correctVariantId: 'M025-A',
    variants: [
      { id: 'M025-A', html: `<div class="container"><div class="sidebar">Sidebar</div><div class="content">calc(100% - 80px - 12px)</div></div>`, css: `.container{display:flex;gap:12px;width:280px;background:#94a3b8;padding:6px;}.sidebar{width:80px;flex-shrink:0;background:#64748b;color:white;height:60px;display:flex;align-items:center;justify-content:center;font-size:12px;}.content{width:calc(100% - 80px - 12px);background:#334155;color:white;height:60px;display:flex;align-items:center;justify-content:center;font-size:11px;text-align:center;flex-shrink:0;}` },
      { id: 'M025-B', html: `<div class="container"><div class="sidebar">Sidebar</div><div class="content">calc(100% - 80px - 12px)</div></div>`, css: `.container{display:flex;gap:12px;width:280px;background:#94a3b8;padding:6px;}.sidebar{width:80px;flex-shrink:0;background:#64748b;color:white;height:60px;display:flex;align-items:center;justify-content:center;font-size:12px;}.content{flex:1;background:#334155;color:white;height:60px;display:flex;align-items:center;justify-content:center;font-size:11px;text-align:center;}` },
      { id: 'M025-C', html: `<div class="container"><div class="sidebar">Sidebar</div><div class="content">calc(100% - 80px - 12px)</div></div>`, css: `.container{display:flex;gap:12px;width:280px;background:#94a3b8;padding:6px;}.sidebar{width:80px;flex-shrink:0;background:#64748b;color:white;height:60px;display:flex;align-items:center;justify-content:center;font-size:12px;}.content{width:calc(100% - 80px);background:#334155;color:white;height:60px;display:flex;align-items:center;justify-content:center;font-size:11px;text-align:center;flex-shrink:0;}` },
      { id: 'M025-D', html: `<div class="container"><div class="sidebar">Sidebar</div><div class="content">calc(100% - 80px - 12px)</div></div>`, css: `.container{display:flex;gap:12px;width:280px;background:#94a3b8;padding:6px;}.sidebar{flex-shrink:0;background:#64748b;color:white;height:60px;display:flex;align-items:center;justify-content:center;font-size:12px;flex-basis:80px;}.content{flex-basis:calc(100% - 80px - 12px);background:#334155;color:white;height:60px;display:flex;align-items:center;justify-content:center;font-size:11px;text-align:center;}` },
    ],
    explanation: 'calc() позволяет смешивать единицы. calc(100% - 80px - 12px) = ширина контейнера минус sidebar минус gap. Результат точно заполняет оставшееся пространство, не выходя за границы.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/calc',
    keyProps: ['calc'],
  },
]

// ─── Дополнительные medium-вопросы (M026–M055) ────────────────────────────

export const mediumQuestionsExtra: Question[] = [
  {
    id: 'M026', topic: 'grid', difficulty: 'hard',
    displayHtml: `<div class="grid">
  <div class="a">A</div>
  <div class="b">B</div>
  <div class="c">C</div>
</div>`,
    displayCss: `.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 60px 60px;
  gap: 6px;
  background: #a78bfa;
  padding: 8px;
  width: 270px;
}
.a { grid-row: span 2; background: #7c3aed; }
.b { background: #a855f7; }
.c { background: #c084fc; }
.a,.b,.c {
  color: white; display: flex;
  align-items: center; justify-content: center;
  font-size: 22px; font-weight: bold;
}`,
    renderWidth: 300, renderHeight: 155,
    correctVariantId: 'M026-A',
    variants: [
      { id: 'M026-A', html: `<div class="grid"><div class="a">A</div><div class="b">B</div><div class="c">C</div></div>`, css: `.grid{display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:60px 60px;gap:6px;background:#a78bfa;padding:8px;width:270px;}.a{grid-row:span 2;background:#7c3aed;}.b{background:#a855f7;}.c{background:#c084fc;}.a,.b,.c{color:white;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:bold;}` },
      { id: 'M026-B', html: `<div class="grid"><div class="a">A</div><div class="b">B</div><div class="c">C</div></div>`, css: `.grid{display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:60px 60px;gap:6px;background:#a78bfa;padding:8px;width:270px;}.a{grid-column:span 2;background:#7c3aed;}.b{background:#a855f7;}.c{background:#c084fc;}.a,.b,.c{color:white;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:bold;}` },
      { id: 'M026-C', html: `<div class="grid"><div class="a">A</div><div class="b">B</div><div class="c">C</div></div>`, css: `.grid{display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:60px 60px;gap:6px;background:#a78bfa;padding:8px;width:270px;}.a{background:#7c3aed;}.b{background:#a855f7;}.c{background:#c084fc;}.a,.b,.c{color:white;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:bold;}` },
      { id: 'M026-D', html: `<div class="grid"><div class="a">A</div><div class="b">B</div><div class="c">C</div></div>`, css: `.grid{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:60px 60px;gap:6px;background:#a78bfa;padding:8px;width:270px;}.a{grid-row:span 2;background:#7c3aed;}.b{background:#a855f7;}.c{background:#c084fc;}.a,.b,.c{color:white;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:bold;}` },
    ],
    explanation: 'grid-row: span 2 растягивает элемент A на две строки по вертикали. Элементы B и C занимают оставшиеся ячейки в правых колонках. grid-column: span 2 — горизонтальное растяжение.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/grid-row',
    keyProps: ['grid-row'],
  },
  {
    id: 'M027', topic: 'flexbox', difficulty: 'hard',
    displayHtml: `<div class="row">
  <div class="item">Широкий контент здесь</div>
  <div class="item">B</div>
  <div class="item">C</div>
</div>`,
    displayCss: `.row {
  display: flex;
  width: 240px;
  background: #86efac;
  padding: 6px;
  gap: 6px;
}
.item {
  flex: 1 1 auto;
  background: #16a34a;
  color: white;
  padding: 10px 6px;
  font-size: 12px;
  text-align: center;
  min-width: 0;
}`,
    renderWidth: 300, renderHeight: 80,
    correctVariantId: 'M027-A',
    variants: [
      { id: 'M027-A', html: `<div class="row"><div class="item">Широкий контент здесь</div><div class="item">B</div><div class="item">C</div></div>`, css: `.row{display:flex;width:240px;background:#86efac;padding:6px;gap:6px;}.item{flex:1 1 auto;background:#16a34a;color:white;padding:10px 6px;font-size:12px;text-align:center;min-width:0;}` },
      { id: 'M027-B', html: `<div class="row"><div class="item">Широкий контент здесь</div><div class="item">B</div><div class="item">C</div></div>`, css: `.row{display:flex;width:240px;background:#86efac;padding:6px;gap:6px;}.item{flex:1 1 0;background:#16a34a;color:white;padding:10px 6px;font-size:12px;text-align:center;}` },
      { id: 'M027-C', html: `<div class="row"><div class="item">Широкий контент здесь</div><div class="item">B</div><div class="item">C</div></div>`, css: `.row{display:flex;width:240px;background:#86efac;padding:6px;gap:6px;}.item{flex:1 1 auto;background:#16a34a;color:white;padding:10px 6px;font-size:12px;text-align:center;}` },
      { id: 'M027-D', html: `<div class="row"><div class="item">Широкий контент здесь</div><div class="item">B</div><div class="item">C</div></div>`, css: `.row{display:flex;width:240px;background:#86efac;padding:6px;gap:6px;}.item{background:#16a34a;color:white;padding:10px 6px;font-size:12px;text-align:center;width:33%;}` },
    ],
    explanation: 'flex: 1 1 auto — basis=auto, поэтому стартовый размер зависит от контента. Первый элемент шире, потому что его контентная ширина больше. flex-basis:0 сделал бы все три равными.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/flex',
    keyProps: ['flex', 'flex-basis'],
  },
{
    id: 'M029', topic: 'overflow', difficulty: 'hard',
    displayHtml: `<div class="list">
  <div class="item">Элемент 1</div>
  <div class="item">Элемент 2</div>
  <div class="item">Элемент 3</div>
  <div class="item">Элемент 4</div>
  <div class="item">Элемент 5</div>
  <div class="item">Элемент 6</div>
</div>`,
    displayCss: `.list {
  width: 200px;
  height: 120px;
  overflow-y: auto;
  overflow-x: hidden;
  border: 2px solid #6366f1;
  border-radius: 8px;
  background: #a5b4fc;
}
.item {
  padding: 10px 14px;
  border-bottom: 1px solid #c7d2fe;
  font-size: 14px;
  background: white;
}`,
    renderWidth: 300, renderHeight: 290,
    correctVariantId: 'M029-A',
    variants: [
      {
        // A (correct): height:120 + overflow-y:auto → видно ~3 элемента, обрезано по рамке
        id: 'M029-A',
        html: `<div class="list"><div class="item">Элемент 1</div><div class="item">Элемент 2</div><div class="item">Элемент 3</div><div class="item">Элемент 4</div><div class="item">Элемент 5</div><div class="item">Элемент 6</div></div>`,
        css: `.list{width:200px;height:120px;overflow-y:auto;overflow-x:hidden;border:2px solid #6366f1;border-radius:8px;background:#a5b4fc;}.item{padding:10px 14px;border-bottom:1px solid #c7d2fe;font-size:14px;background:white;}`
      },
      {
        // B: height:auto → ВСЕ 6 элементов видны, высокий список
        id: 'M029-B',
        html: `<div class="list"><div class="item">Элемент 1</div><div class="item">Элемент 2</div><div class="item">Элемент 3</div><div class="item">Элемент 4</div><div class="item">Элемент 5</div><div class="item">Элемент 6</div></div>`,
        css: `.list{width:200px;height:auto;overflow-y:auto;overflow-x:hidden;border:2px solid #6366f1;border-radius:8px;background:#a5b4fc;}.item{padding:10px 14px;border-bottom:1px solid #c7d2fe;font-size:14px;background:white;}`
      },
      {
        // C: height:120 + overflow:visible → элементы ВЫТЕКАЮТ за рамку (рамка на 120px, белые блоки ниже)
        id: 'M029-C',
        html: `<div class="list"><div class="item">Элемент 1</div><div class="item">Элемент 2</div><div class="item">Элемент 3</div><div class="item">Элемент 4</div><div class="item">Элемент 5</div><div class="item">Элемент 6</div></div>`,
        css: `.list{width:200px;height:120px;overflow:visible;border:2px solid #6366f1;border-radius:8px;background:#a5b4fc;}.item{padding:10px 14px;border-bottom:1px solid #c7d2fe;font-size:14px;background:white;}`
      },
      {
        // D: height:60px — совсем маленький список, виден ~1.5 элемента
        id: 'M029-D',
        html: `<div class="list"><div class="item">Элемент 1</div><div class="item">Элемент 2</div><div class="item">Элемент 3</div><div class="item">Элемент 4</div><div class="item">Элемент 5</div><div class="item">Элемент 6</div></div>`,
        css: `.list{width:200px;height:60px;overflow-y:auto;overflow-x:hidden;border:2px solid #6366f1;border-radius:8px;background:#a5b4fc;}.item{padding:10px 14px;border-bottom:1px solid #c7d2fe;font-size:14px;background:white;}`
      },
    ],
    explanation: 'height: 120px + overflow-y: auto — список фиксированной высоты, контент прокручивается (видно ~3 элемента). height: auto — список растёт, видны все 6. overflow: visible — элементы вытекают за рамку (рамка остаётся 120px). height: 60px — видно только полтора элемента.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/overflow-y',
    keyProps: ['overflow-y', 'height'],
  },
  {
    id: 'M030', topic: 'text', difficulty: 'hard',
    displayHtml: `<div class="box">
  Normal text   with   extra   spaces
  and line
  breaks here
</div>`,
    displayCss: `.box {
  width: 220px;
  background: #fef08a;
  border: 2px solid #fde68a;
  padding: 12px;
  font-size: 14px;
  white-space: pre-line;
}`,
    renderWidth: 300, renderHeight: 110,
    correctVariantId: 'M030-A',
    variants: [
      { id: 'M030-A', html: `<div class="box">Normal text   with   extra   spaces\n  and line\n  breaks here</div>`, css: `.box{width:220px;background:#fef08a;border:2px solid #fde68a;padding:12px;font-size:14px;white-space:pre-line;}` },
      { id: 'M030-B', html: `<div class="box">Normal text   with   extra   spaces\n  and line\n  breaks here</div>`, css: `.box{width:220px;background:#fef08a;border:2px solid #fde68a;padding:12px;font-size:14px;white-space:pre;}` },
      { id: 'M030-C', html: `<div class="box">Normal text   with   extra   spaces\n  and line\n  breaks here</div>`, css: `.box{width:220px;background:#fef08a;border:2px solid #fde68a;padding:12px;font-size:14px;white-space:normal;}` },
      { id: 'M030-D', html: `<div class="box">Normal text   with   extra   spaces\n  and line\n  breaks here</div>`, css: `.box{width:220px;background:#fef08a;border:2px solid #fde68a;padding:12px;font-size:14px;white-space:nowrap;overflow:hidden;}` },
    ],
    explanation: 'white-space: pre-line — схлопывает лишние пробелы (несколько пробелов → один), но сохраняет переносы строк и переносит при переполнении. pre — оставляет всё as-is. normal — схлопывает и пробелы, и переносы.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/white-space',
    keyProps: ['white-space'],
  },
  {
    id: 'M031', topic: 'sizing', difficulty: 'hard',
    displayHtml: `<div class="outer">
  <div class="inner">50% ширины</div>
</div>`,
    displayCss: `.outer {
  width: 240px;
  height: 100px;
  background: #bae6fd;
  padding: 10px;
  border: 2px solid #7dd3fc;
}
.inner {
  width: 50%;
  height: 50%;
  background: #0369a1;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: bold;
}`,
    renderWidth: 300, renderHeight: 130,
    correctVariantId: 'M031-A',
    variants: [
      { id: 'M031-A', html: `<div class="outer"><div class="inner">50% ширины</div></div>`, css: `.outer{width:240px;height:100px;background:#bae6fd;padding:10px;border:2px solid #7dd3fc;}.inner{width:50%;height:50%;background:#0369a1;color:white;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:bold;}` },
      { id: 'M031-B', html: `<div class="outer"><div class="inner">50% ширины</div></div>`, css: `.outer{width:240px;background:#bae6fd;padding:10px;border:2px solid #7dd3fc;}.inner{width:50%;height:50%;background:#0369a1;color:white;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:bold;}` },
      { id: 'M031-C', html: `<div class="outer"><div class="inner">50% ширины</div></div>`, css: `.outer{width:240px;height:100px;background:#bae6fd;padding:10px;border:2px solid #7dd3fc;box-sizing:border-box;}.inner{width:50%;height:50%;background:#0369a1;color:white;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:bold;}` },
      { id: 'M031-D', html: `<div class="outer"><div class="inner">50% ширины</div></div>`, css: `.outer{width:240px;height:100px;background:#bae6fd;padding:10px;border:2px solid #7dd3fc;}.inner{width:120px;height:50px;background:#0369a1;color:white;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:bold;}` },
    ],
    explanation: 'width: 50% считается от ширины содержащего блока (content-area родителя). При .outer width:240px, padding:10px → content-width=220px (content-box). 50% от 220px = 110px. height: 50% работает так же при заданной высоте родителя.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/width',
    keyProps: ['width', 'height'],
  },
  {
    id: 'M033', topic: 'stacking', difficulty: 'hard',
    displayHtml: `<div class="parent">
  <div class="child">z-index: -1</div>
  Родительский текст
</div>`,
    displayCss: `.parent {
  position: relative;
  width: 220px;
  height: 100px;
  background: #93c5fd;
  border: 3px solid #3b82f6;
  padding: 10px;
  font-weight: bold;
  font-size: 15px;
}
.child {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: #bfdbfe;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: #1d4ed8;
}`,
    renderWidth: 300, renderHeight: 130,
    correctVariantId: 'M033-A',
    variants: [
      { id: 'M033-A', html: `<div class="parent"><div class="child">z-index: -1</div>Родительский текст</div>`, css: `.parent{position:relative;width:220px;height:100px;background:#93c5fd;border:3px solid #3b82f6;padding:10px;font-weight:bold;font-size:15px;}.child{position:absolute;top:0;left:0;right:0;bottom:0;background:#bfdbfe;z-index:-1;display:flex;align-items:center;justify-content:center;font-size:13px;color:#1d4ed8;}` },
      { id: 'M033-B', html: `<div class="parent"><div class="child">z-index: -1</div>Родительский текст</div>`, css: `.parent{position:relative;width:220px;height:100px;background:#93c5fd;border:3px solid #3b82f6;padding:10px;font-weight:bold;font-size:15px;}.child{position:absolute;top:0;left:0;right:0;bottom:0;background:#bfdbfe;z-index:1;display:flex;align-items:center;justify-content:center;font-size:13px;color:#1d4ed8;}` },
      { id: 'M033-C', html: `<div class="parent"><div class="child">z-index: -1</div>Родительский текст</div>`, css: `.parent{width:220px;height:100px;background:#93c5fd;border:3px solid #3b82f6;padding:10px;font-weight:bold;font-size:15px;}.child{position:absolute;top:0;left:0;right:0;bottom:0;background:#bfdbfe;z-index:-1;display:flex;align-items:center;justify-content:center;font-size:13px;color:#1d4ed8;}` },
      { id: 'M033-D', html: `<div class="parent"><div class="child">z-index: -1 (no bg on parent)</div>Родительский текст</div>`, css: `.parent{position:relative;width:220px;height:100px;border:3px solid #3b82f6;padding:10px;font-weight:bold;font-size:15px;}.child{position:absolute;top:0;left:0;right:0;bottom:0;background:#bfdbfe;z-index:-1;display:flex;align-items:center;justify-content:center;font-size:13px;color:#1d4ed8;}` },
    ],
    explanation: 'z-index: -1 помещает элемент ЗА фоном родителя. Текст родителя виден поверх. z-index: 1 перекрыл бы и текст, и фон родителя. Без position у родителя — .child позиционируется относительно вышестоящего.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/z-index',
    keyProps: ['z-index', 'position'],
  },
{
    id: 'M035', topic: 'flexbox', difficulty: 'medium',
    displayHtml: `<div class="menu">
  <a class="link">Главная</a>
  <a class="link">О нас</a>
  <a class="link active">Контакты</a>
  <a class="link">Блог</a>
</div>`,
    displayCss: `.menu {
  display: flex;
  gap: 0;
  background: #1e293b;
  width: 280px;
  height: 60px;
  align-items: stretch;
}
.link {
  padding: 0 14px;
  color: rgba(255,255,255,0.6);
  font-size: 13px;
  font-weight: 600;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-bottom: 4px solid transparent;
}
.active {
  color: white;
  border-bottom-color: #6366f1;
  background: rgba(99,102,241,0.15);
}`,
    renderWidth: 300, renderHeight: 85,
    correctVariantId: 'M035-A',
    variants: [
      {
        id: 'M035-A',
        html: `<div class="menu"><a class="link">Главная</a><a class="link">О нас</a><a class="link active">Контакты</a><a class="link">Блог</a></div>`,
        css: `.menu{display:flex;gap:0;background:#1e293b;width:280px;height:60px;align-items:stretch;}.link{padding:0 14px;color:rgba(255,255,255,0.6);font-size:13px;font-weight:600;display:flex;align-items:center;cursor:pointer;border-bottom:4px solid transparent;}.active{color:white;border-bottom-color:#6366f1;background:rgba(99,102,241,0.15);}`
      },
      {
        id: 'M035-B',
        html: `<div class="menu"><a class="link">Главная</a><a class="link">О нас</a><a class="link active">Контакты</a><a class="link">Блог</a></div>`,
        css: `.menu{display:flex;gap:0;background:#1e293b;width:280px;height:60px;align-items:center;}.link{padding:0 14px;color:rgba(255,255,255,0.6);font-size:13px;font-weight:600;display:flex;align-items:center;cursor:pointer;border-bottom:4px solid transparent;}.active{color:white;border-bottom-color:#6366f1;background:rgba(99,102,241,0.15);}`
      },
      {
        id: 'M035-C',
        html: `<div class="menu"><a class="link">Главная</a><a class="link">О нас</a><a class="link active">Контакты</a><a class="link">Блог</a></div>`,
        css: `.menu{display:flex;gap:0;background:#1e293b;width:280px;height:60px;align-items:flex-start;}.link{padding:8px 14px;color:rgba(255,255,255,0.6);font-size:13px;font-weight:600;cursor:pointer;border-bottom:4px solid transparent;}.active{color:white;border-bottom-color:#6366f1;background:rgba(99,102,241,0.15);}`
      },
      {
        id: 'M035-D',
        html: `<div class="menu"><a class="link">Главная</a><a class="link">О нас</a><a class="link active">Контакты</a><a class="link">Блог</a></div>`,
        css: `.menu{display:flex;flex-direction:column;background:#1e293b;width:280px;height:60px;overflow:hidden;}.link{padding:4px 14px;color:rgba(255,255,255,0.6);font-size:13px;font-weight:600;border-left:4px solid transparent;}.active{color:white;border-left-color:#6366f1;background:rgba(99,102,241,0.15);}`
      },
    ],
    explanation: 'align-items: stretch — ссылки растянуты до полной высоты 60px (граница заметна снизу). center — ссылки по центру по высоте, граница частично видна. flex-start — ссылки вверху, граница обрезана. column — вертикальная раскладка с левой границей.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/align-items',
    keyProps: ['align-items'],
  },
]

// Re-export combined array
import type { Question as _Q } from '@/types'
export const allMediumQuestions: _Q[] = [...mediumQuestions, ...mediumQuestionsExtra]

// ─── Дополнительные вопросы (восстановление после патча) ──────────────────

export const mediumQuestionsExtra2: import('@/types').Question[] = [
  {
    id: 'M036', topic: 'flexbox', difficulty: 'hard',
    displayHtml: `<div class="row">
  <div class="item">A</div>
  <div class="item">B</div>
  <div class="item">C</div>
</div>`,
    displayCss: `.row {
  display: flex;
  align-content: space-between;
  flex-wrap: wrap;
  width: 160px;
  height: 200px;
  gap: 0;
  background: #86efac;
  padding: 4px;
}
.item {
  width: 70px;
  height: 70px;
  background: #16a34a;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: bold;
  margin: 4px;
}`,
    renderWidth: 300, renderHeight: 240,
    correctVariantId: 'M036-A',
    variants: [
      { id: 'M036-A', html: `<div class="row"><div class="item">A</div><div class="item">B</div><div class="item">C</div></div>`, css: `.row{display:flex;align-content:space-between;flex-wrap:wrap;width:160px;height:200px;background:#86efac;padding:4px;}.item{width:70px;height:70px;background:#16a34a;color:white;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:bold;margin:4px;}` },
      { id: 'M036-B', html: `<div class="row"><div class="item">A</div><div class="item">B</div><div class="item">C</div></div>`, css: `.row{display:flex;align-content:flex-start;flex-wrap:wrap;width:160px;height:200px;background:#86efac;padding:4px;}.item{width:70px;height:70px;background:#16a34a;color:white;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:bold;margin:4px;}` },
      { id: 'M036-C', html: `<div class="row"><div class="item">A</div><div class="item">B</div><div class="item">C</div></div>`, css: `.row{display:flex;align-content:center;flex-wrap:wrap;width:160px;height:200px;background:#86efac;padding:4px;}.item{width:70px;height:70px;background:#16a34a;color:white;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:bold;margin:4px;}` },
      { id: 'M036-D', html: `<div class="row"><div class="item">A</div><div class="item">B</div><div class="item">C</div></div>`, css: `.row{display:flex;align-content:flex-end;flex-wrap:wrap;width:160px;height:200px;background:#86efac;padding:4px;}.item{width:70px;height:70px;background:#16a34a;color:white;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:bold;margin:4px;}` },
    ],
    explanation: 'align-content управляет распределением строк в многострочном flex. space-between: первая строка вверху, последняя внизу. flex-start: все строки прижаты вверх. center: строки по центру. flex-end: строки внизу.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/align-content',
    keyProps: ['align-content'],
  },
  {
    id: 'M037', topic: 'grid', difficulty: 'hard',
    displayHtml: `<div class="grid">
  <div class="c">1</div>
  <div class="c">2</div>
  <div class="c">3</div>
  <div class="c">4</div>
  <div class="c">5</div>
</div>`,
    displayCss: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 60px);
  gap: 6px;
  background: #a78bfa;
  padding: 8px;
  width: 270px;
}
.c {
  background: #7c3aed;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
}`,
    renderWidth: 300, renderHeight: 165,
    correctVariantId: 'M037-A',
    variants: [
      { id: 'M037-A', html: `<div class="grid"><div class="c">1</div><div class="c">2</div><div class="c">3</div><div class="c">4</div><div class="c">5</div></div>`, css: `.grid{display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(2,60px);gap:6px;background:#a78bfa;padding:8px;width:270px;}.c{background:#7c3aed;color:white;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:bold;border-radius:4px;}` },
      { id: 'M037-B', html: `<div class="grid"><div class="c">1</div><div class="c">2</div><div class="c">3</div><div class="c">4</div><div class="c">5</div></div>`, css: `.grid{display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(3,60px);gap:6px;background:#a78bfa;padding:8px;width:270px;}.c{background:#7c3aed;color:white;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:bold;border-radius:4px;}` },
      { id: 'M037-C', html: `<div class="grid"><div class="c">1</div><div class="c">2</div><div class="c">3</div><div class="c">4</div><div class="c">5</div></div>`, css: `.grid{display:grid;grid-template-columns:repeat(5,1fr);gap:6px;background:#a78bfa;padding:8px;width:270px;}.c{background:#7c3aed;color:white;height:60px;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:bold;border-radius:4px;}` },
      { id: 'M037-D', html: `<div class="grid"><div class="c">1</div><div class="c">2</div><div class="c">3</div><div class="c">4</div><div class="c">5</div></div>`, css: `.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;background:#a78bfa;padding:8px;width:270px;}.c{background:#7c3aed;color:white;height:60px;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:bold;border-radius:4px;}` },
    ],
    explanation: 'repeat(3,1fr) × repeat(2,60px): 5 элементов заполняют 3 колонки × 2 строки. Элемент 5 попадает в третью строку (ячейка 7 из 6 = неявная строка). При 2 колонках — элемент 5 появляется на третьей строке.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/grid-template-columns',
    keyProps: ['grid-template-columns', 'grid-template-rows'],
  },
  {
    id: 'M038', topic: 'positioning', difficulty: 'hard',
    displayHtml: `<body style="height:200px">
  <div class="fixed">Fixed</div>
  <div class="content">Контент страницы</div>
</body>`,
    displayCss: `.fixed {
  position: fixed;
  top: 10px;
  right: 10px;
  width: 70px;
  height: 40px;
  background: #dc2626;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 13px;
  border-radius: 6px;
  z-index: 100;
}
.content {
  background: #fef9c3;
  padding: 60px 10px 10px;
  font-size: 14px;
}`,
    renderWidth: 300, renderHeight: 180,
    correctVariantId: 'M038-A',
    variants: [
      { id: 'M038-A', html: `<div class="fixed">Fixed</div><div class="content">Контент страницы</div>`, css: `.fixed{position:fixed;top:10px;right:10px;width:70px;height:40px;background:#dc2626;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:13px;border-radius:6px;z-index:100;}.content{background:#fef9c3;padding:60px 10px 10px;font-size:14px;}` },
      { id: 'M038-B', html: `<div class="fixed">Absolute</div><div class="content">Контент страницы</div>`, css: `.fixed{position:absolute;top:10px;right:10px;width:70px;height:40px;background:#dc2626;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:13px;border-radius:6px;z-index:100;}.content{background:#fef9c3;padding:10px;font-size:14px;}` },
      { id: 'M038-C', html: `<div class="fixed">Relative</div><div class="content">Контент страницы</div>`, css: `.fixed{position:relative;top:10px;right:10px;width:70px;height:40px;background:#dc2626;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:13px;border-radius:6px;}.content{background:#fef9c3;padding:10px;font-size:14px;}` },
      { id: 'M038-D', html: `<div class="content">Контент страницы</div><div class="fixed">Static</div>`, css: `.fixed{width:70px;height:40px;background:#dc2626;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:13px;border-radius:6px;}.content{background:#fef9c3;padding:10px;font-size:14px;}` },
    ],
    explanation: 'position: fixed привязывает элемент к viewport — он остаётся на месте при прокрутке и перекрывает контент. absolute позиционируется относительно предка с position. relative — смещение от текущего места в потоке. static — нормальный поток.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/position',
    keyProps: ['position'],
  },
  {
    id: 'M039', topic: 'text', difficulty: 'hard',
    displayHtml: `<p>Этот текст выравнивается по ширине. В нём несколько строк для демонстрации эффекта justify.</p>`,
    displayCss: `p {
  width: 200px;
  background: #94a3b8;
  padding: 12px;
  font-size: 15px;
  text-align: justify;
  border: 2px solid #cbd5e1;
}`,
    renderWidth: 300, renderHeight: 130,
    correctVariantId: 'M039-A',
    variants: [
      { id: 'M039-A', html: `<p>Этот текст выравнивается по ширине. В нём несколько строк для демонстрации эффекта justify.</p>`, css: `p{width:200px;background:#94a3b8;padding:12px;font-size:15px;text-align:justify;border:2px solid #cbd5e1;}` },
      { id: 'M039-B', html: `<p>Этот текст выравнивается по ширине. В нём несколько строк для демонстрации эффекта justify.</p>`, css: `p{width:200px;background:#94a3b8;padding:12px;font-size:15px;text-align:left;border:2px solid #cbd5e1;}` },
      { id: 'M039-C', html: `<p>Этот текст выравнивается по ширине. В нём несколько строк для демонстрации эффекта justify.</p>`, css: `p{width:200px;background:#94a3b8;padding:12px;font-size:15px;text-align:center;border:2px solid #cbd5e1;}` },
      { id: 'M039-D', html: `<p>Этот текст выравнивается по ширине. В нём несколько строк для демонстрации эффекта justify.</p>`, css: `p{width:200px;background:#94a3b8;padding:12px;font-size:15px;text-align:right;border:2px solid #cbd5e1;}` },
    ],
    explanation: 'text-align: justify растягивает слова в строке так, чтобы текст занимал всю ширину. Пробелы между словами увеличиваются. Последняя строка остаётся выровненной по левому краю. left — классическое левое выравнивание.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/text-align',
    keyProps: ['text-align'],
  },
  {
    id: 'M040', topic: 'sizing', difficulty: 'hard',
    displayHtml: `<div class="container">
  <div class="box">Контент</div>
</div>`,
    displayCss: `.container {
  width: 240px;
  height: 140px;
  background: #86efac;
  border: 2px solid #86efac;
  display: flex;
  align-items: center;
  justify-content: center;
}
.box {
  width: 50%;
  height: 50%;
  background: #16a34a;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}`,
    renderWidth: 300, renderHeight: 170,
    correctVariantId: 'M040-A',
    variants: [
      { id: 'M040-A', html: `<div class="container"><div class="box">Контент</div></div>`, css: `.container{width:240px;height:140px;background:#86efac;border:2px solid #86efac;display:flex;align-items:center;justify-content:center;}.box{width:50%;height:50%;background:#16a34a;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;}` },
      { id: 'M040-B', html: `<div class="container"><div class="box">Контент</div></div>`, css: `.container{width:240px;height:140px;background:#86efac;border:2px solid #86efac;display:flex;align-items:center;justify-content:center;}.box{width:120px;height:70px;background:#16a34a;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;}` },
      { id: 'M040-C', html: `<div class="container"><div class="box">Контент</div></div>`, css: `.container{width:240px;height:140px;background:#86efac;border:2px solid #86efac;display:flex;align-items:center;justify-content:center;}.box{width:50%;height:80%;background:#16a34a;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;}` },
      { id: 'M040-D', html: `<div class="container"><div class="box">Контент</div></div>`, css: `.container{width:240px;height:140px;background:#86efac;border:2px solid #86efac;display:flex;align-items:center;justify-content:center;}.box{width:80%;height:50%;background:#16a34a;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;}` },
    ],
    explanation: 'Процентная ширина (50%) считается от ширины flex-контейнера (240px) = 120px. Процентная высота в flex вычисляется от высоты контейнера (140px) = 70px. Результат: 120×70px. В варианте D ширина 80%=192px, высота 50%=70px.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/width',
    keyProps: ['width', 'height'],
  },
  {
    id: 'M041', topic: 'stacking', difficulty: 'hard',
    displayHtml: `<div class="scene">
  <div class="red">Красный z:5</div>
  <div class="blue">Синий z:10</div>
</div>`,
    displayCss: `.scene {
  position: relative;
  width: 260px;
  height: 130px;
  background: #94a3b8;
}
.red {
  position: absolute;
  width: 160px;
  height: 80px;
  top: 10px; left: 10px;
  background: rgba(220,38,38,0.9);
  color: white;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
.blue {
  position: absolute;
  width: 160px;
  height: 80px;
  top: 30px; left: 90px;
  background: rgba(37,99,235,0.9);
  color: white;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}`,
    renderWidth: 300, renderHeight: 155,
    correctVariantId: 'M041-A',
    variants: [
      { id: 'M041-A', html: `<div class="scene"><div class="red">Красный z:5</div><div class="blue">Синий z:10</div></div>`, css: `.scene{position:relative;width:260px;height:130px;background:#94a3b8;}.red{position:absolute;width:160px;height:80px;top:10px;left:10px;background:rgba(220,38,38,0.9);color:white;z-index:5;display:flex;align-items:center;justify-content:center;font-weight:bold;}.blue{position:absolute;width:160px;height:80px;top:30px;left:90px;background:rgba(37,99,235,0.9);color:white;z-index:10;display:flex;align-items:center;justify-content:center;font-weight:bold;}` },
      { id: 'M041-B', html: `<div class="scene"><div class="red">Красный z:5</div><div class="blue">Синий z:10</div></div>`, css: `.scene{position:relative;width:260px;height:130px;background:#94a3b8;}.red{position:absolute;width:160px;height:80px;top:10px;left:10px;background:rgba(220,38,38,0.9);color:white;z-index:10;display:flex;align-items:center;justify-content:center;font-weight:bold;}.blue{position:absolute;width:160px;height:80px;top:30px;left:90px;background:rgba(37,99,235,0.9);color:white;z-index:5;display:flex;align-items:center;justify-content:center;font-weight:bold;}` },
      { id: 'M041-C', html: `<div class="scene"><div class="blue">Синий z:10</div><div class="red">Красный z:5</div></div>`, css: `.scene{position:relative;width:260px;height:130px;background:#94a3b8;}.red{position:absolute;width:160px;height:80px;top:10px;left:10px;background:rgba(220,38,38,0.9);color:white;z-index:5;display:flex;align-items:center;justify-content:center;font-weight:bold;}.blue{position:absolute;width:160px;height:80px;top:30px;left:90px;background:rgba(37,99,235,0.9);color:white;z-index:10;display:flex;align-items:center;justify-content:center;font-weight:bold;}` },
      { id: 'M041-D', html: `<div class="scene"><div class="red">Красный z:5</div><div class="blue">Синий z:10</div></div>`, css: `.scene{position:relative;width:260px;height:130px;background:#94a3b8;}.red{position:absolute;width:160px;height:80px;top:10px;left:10px;background:rgba(220,38,38,0.9);color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;}.blue{position:absolute;width:160px;height:80px;top:30px;left:90px;background:rgba(37,99,235,0.9);color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;}` },
    ],
    explanation: 'z-index: 10 у синего > z-index: 5 у красного → синий поверх. В варианте B значения z-index поменяны — красный поверх. В C порядок в HTML меняется, но z-index выше у синего — он всё равно поверх. В D нет z-index → порядок определяется DOM (синий второй → поверх).',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/z-index',
    keyProps: ['z-index'],
  },
  {
    id: 'M042', topic: 'flexbox', difficulty: 'hard',
    displayHtml: `<div class="row">
  <div class="a">flex-shrink: 0</div>
  <div class="b">flex-shrink: 1</div>
  <div class="c">flex-shrink: 2</div>
</div>`,
    displayCss: `.row {
  display: flex;
  width: 200px; /* меньше суммы элементов */
  background: #fed7aa;
  padding: 6px;
  gap: 4px;
}
.a, .b, .c {
  width: 100px; /* сумма 300px > контейнер 200px */
  height: 60px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: bold;
  text-align: center;
  padding: 4px;
}
.a { flex-shrink: 0; background: #ea580c; }
.b { flex-shrink: 1; background: #c2410c; }
.c { flex-shrink: 2; background: #7c2d12; }`,
    renderWidth: 300, renderHeight: 90,
    correctVariantId: 'M042-A',
    variants: [
      { id: 'M042-A', html: `<div class="row"><div class="a">flex-shrink: 0</div><div class="b">flex-shrink: 1</div><div class="c">flex-shrink: 2</div></div>`, css: `.row{display:flex;width:200px;background:#fed7aa;padding:6px;gap:4px;}.a,.b,.c{width:100px;height:60px;color:white;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:bold;text-align:center;padding:4px;}.a{flex-shrink:0;background:#ea580c;}.b{flex-shrink:1;background:#c2410c;}.c{flex-shrink:2;background:#7c2d12;}` },
      { id: 'M042-B', html: `<div class="row"><div class="a">flex-shrink: 0</div><div class="b">flex-shrink: 1</div><div class="c">flex-shrink: 2</div></div>`, css: `.row{display:flex;width:200px;background:#fed7aa;padding:6px;gap:4px;}.a,.b,.c{width:100px;height:60px;color:white;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:bold;text-align:center;padding:4px;flex-shrink:1;}.a{background:#ea580c;}.b{background:#c2410c;}.c{background:#7c2d12;}` },
      { id: 'M042-C', html: `<div class="row"><div class="a">flex-shrink: 0</div><div class="b">flex-shrink: 1</div><div class="c">flex-shrink: 2</div></div>`, css: `.row{display:flex;width:200px;background:#fed7aa;padding:6px;gap:4px;overflow:hidden;}.a,.b,.c{width:100px;height:60px;flex-shrink:0;color:white;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:bold;text-align:center;padding:4px;}.a{background:#ea580c;}.b{background:#c2410c;}.c{background:#7c2d12;}` },
      { id: 'M042-D', html: `<div class="row"><div class="a">flex-shrink: 0</div><div class="b">flex-shrink: 1</div><div class="c">flex-shrink: 2</div></div>`, css: `.row{display:flex;width:200px;background:#fed7aa;padding:6px;gap:4px;}.a,.b,.c{width:60px;height:60px;color:white;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:bold;text-align:center;padding:4px;flex-shrink:0;}.a{background:#ea580c;}.b{background:#c2410c;}.c{background:#7c2d12;}` },
    ],
    explanation: 'flex-shrink: 0 запрещает сжатие — A сохраняет 100px. Остаток (200-100-8px gaps≈88px) делится между B и C пропорционально shrink: B уменьшается на 1/(1+2)×нехватку, C — на 2/(1+2)×нехватку. C заметно уже B.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/flex-shrink',
    keyProps: ['flex-shrink'],
  },
  {
    id: 'M043', topic: 'grid', difficulty: 'hard',
    displayHtml: `<div class="grid">
  <div class="header">Header</div>
  <div class="nav">Nav</div>
  <div class="main">Main</div>
</div>`,
    displayCss: `.grid {
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-template-rows: 40px 1fr;
  gap: 4px;
  width: 240px;
  height: 140px;
  background: #bae6fd;
  padding: 4px;
}
.header { grid-column: 1 / -1; background: #0369a1; color: white; display: flex; align-items: center; padding: 0 10px; font-weight: bold; }
.nav    { background: #0284c7; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; }
.main   { background: #38bdf8; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; }`,
    renderWidth: 300, renderHeight: 170,
    correctVariantId: 'M043-A',
    variants: [
      { id: 'M043-A', html: `<div class="grid"><div class="header">Header</div><div class="nav">Nav</div><div class="main">Main</div></div>`, css: `.grid{display:grid;grid-template-columns:80px 1fr;grid-template-rows:40px 1fr;gap:4px;width:240px;height:140px;background:#bae6fd;padding:4px;}.header{grid-column:1/-1;background:#0369a1;color:white;display:flex;align-items:center;padding:0 10px;font-weight:bold;}.nav{background:#0284c7;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;}.main{background:#38bdf8;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;}` },
      { id: 'M043-B', html: `<div class="grid"><div class="header">Header</div><div class="nav">Nav</div><div class="main">Main</div></div>`, css: `.grid{display:grid;grid-template-columns:80px 1fr;grid-template-rows:40px 1fr;gap:4px;width:240px;height:140px;background:#bae6fd;padding:4px;}.header{background:#0369a1;color:white;display:flex;align-items:center;padding:0 10px;font-weight:bold;}.nav{background:#0284c7;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;}.main{background:#38bdf8;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;}` },
      { id: 'M043-C', html: `<div class="grid"><div class="header">Header</div><div class="nav">Nav</div><div class="main">Main</div></div>`, css: `.grid{display:grid;grid-template-columns:1fr 80px;grid-template-rows:40px 1fr;gap:4px;width:240px;height:140px;background:#bae6fd;padding:4px;}.header{grid-column:1/-1;background:#0369a1;color:white;display:flex;align-items:center;padding:0 10px;font-weight:bold;}.nav{background:#0284c7;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;}.main{background:#38bdf8;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;}` },
      { id: 'M043-D', html: `<div class="grid"><div class="header">Header</div><div class="nav">Nav</div><div class="main">Main</div></div>`, css: `.grid{display:grid;grid-template-columns:80px 1fr;grid-template-rows:40px 1fr;gap:4px;width:240px;height:140px;background:#bae6fd;padding:4px;}.header{grid-column:1/-1;grid-row:2;background:#0369a1;color:white;display:flex;align-items:center;padding:0 10px;font-weight:bold;}.nav{background:#0284c7;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;}.main{background:#38bdf8;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;}` },
    ],
    explanation: 'grid-column: 1 / -1 растягивает Header на ВСЕ колонки (от первой до последней). Без этого Header занимает только первую ячейку, Nav и Main в следующей. В варианте C колонки поменяны местами (широкая — слева). В D Header во второй строке.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/grid-column',
    keyProps: ['grid-column'],
  },
]
