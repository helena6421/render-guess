import type { Question } from '@/types'

export const hardQuestions: Question[] = [
  // ─── H001: margin:auto absolute centering ─────────────────────────────────

  {
    id: 'H001', topic: 'positioning', difficulty: 'hard',
    displayHtml: `<div class="parent">
  <div class="child">Центр</div>
</div>`,
    displayCss: `.parent {
  position: relative;
  width: 260px;
  height: 160px;
  background: #bae6fd;
  border: 2px solid #7dd3fc;
}
.child {
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  margin: auto;
  width: 100px;
  height: 60px;
  background: #0369a1;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}`,
    renderWidth: 300, renderHeight: 190,
    correctVariantId: 'H001-A',
    variants: [
      { id: 'H001-A', html: `<div class="parent"><div class="child">Центр</div></div>`, css: `.parent{position:relative;width:260px;height:160px;background:#bae6fd;border:2px solid #7dd3fc;}.child{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:100px;height:60px;background:#0369a1;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;}` },
      { id: 'H001-B', html: `<div class="parent"><div class="child">top-left</div></div>`, css: `.parent{position:relative;width:260px;height:160px;background:#bae6fd;border:2px solid #7dd3fc;}.child{position:absolute;top:0;left:0;width:100px;height:60px;background:#0369a1;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;}` },
      { id: 'H001-C', html: `<div class="parent"><div class="child">50%/50% no margin</div></div>`, css: `.parent{position:relative;width:260px;height:160px;background:#bae6fd;border:2px solid #7dd3fc;}.child{position:absolute;top:50%;left:50%;width:100px;height:60px;background:#0369a1;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:11px;}` },
      { id: 'H001-D', html: `<div class="parent"><div class="child">bottom-right</div></div>`, css: `.parent{position:relative;width:260px;height:160px;background:#bae6fd;border:2px solid #7dd3fc;}.child{position:absolute;bottom:0;right:0;width:100px;height:60px;background:#0369a1;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:12px;}` },
    ],
    explanation: 'margin: auto при position:absolute и всех четырёх offset=0 делит свободное место поровну — элемент оказывается точно в центре. Без margin:auto и top:50%/left:50% — элемент смещён (угол ячейки совпадает с 50% родителя, не центр элемента).',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/margin',
    keyProps: ['margin', 'top', 'bottom', 'left', 'right'],
  },

  // ─── H002: overflow:hidden + position:fixed child ─────────────────────────
  {
    id: 'H002', topic: 'positioning', difficulty: 'hard',
    displayHtml: `<div class="clipped">
  overflow: hidden
  <div class="fixed-child">fixed</div>
</div>`,
    displayCss: `/* Область рендера: 300×200px */
.clipped {
  overflow: hidden;
  width: 160px;
  height: 100px;
  background: #fef9c3;
  border: 3px solid #ca8a04;
  margin: 20px;
  position: relative;
}
.fixed-child {
  position: fixed;
  top: 10px;
  right: 10px;
  width: 80px;
  height: 40px;
  background: #dc2626;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 13px;
}`,
    renderWidth: 300, renderHeight: 200,
    correctVariantId: 'H002-A',
    variants: [
      { id: 'H002-A', html: `<div class="clipped">overflow: hidden<div class="fixed-child">fixed</div></div>`, css: `.clipped{overflow:hidden;width:160px;height:100px;background:#fef9c3;border:3px solid #ca8a04;margin:20px;position:relative;}.fixed-child{position:fixed;top:10px;right:10px;width:80px;height:40px;background:#dc2626;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:13px;}` },
      { id: 'H002-B', html: `<div class="clipped">overflow: hidden<div class="fixed-child">fixed</div></div>`, css: `.clipped{overflow:hidden;width:160px;height:100px;background:#fef9c3;border:3px solid #ca8a04;margin:20px;position:relative;}.fixed-child{position:absolute;top:10px;right:10px;width:80px;height:40px;background:#dc2626;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:13px;}` },
      { id: 'H002-C', html: `<div class="clipped">overflow: hidden<div class="fixed-child">fixed</div></div>`, css: `.clipped{overflow:hidden;width:160px;height:100px;background:#fef9c3;border:3px solid #ca8a04;margin:20px;position:relative;}.fixed-child{position:fixed;top:50px;left:50px;width:80px;height:40px;background:#dc2626;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:13px;}` },
      { id: 'H002-D', html: `<div class="clipped">overflow: hidden<div class="fixed-child">fixed</div></div>`, css: `.clipped{overflow:visible;width:160px;height:100px;background:#fef9c3;border:3px solid #ca8a04;margin:20px;position:relative;}.fixed-child{position:absolute;top:-10px;right:-10px;width:80px;height:40px;background:#dc2626;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:13px;}` },
    ],
    explanation: 'position: fixed позиционируется относительно viewport, НЕ containing block. overflow: hidden на родителе НЕ обрезает fixed-потомков — они вырываются из любого overflow-контейнера и прилипают к углу экрана.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/position',
    keyProps: ['position', 'overflow'],
  },

  // ─── H003: aspect-ratio vs min-height ─────────────────────────────────────
{
    id: 'H004', topic: 'stacking', difficulty: 'hard',
    displayHtml: `<div class="scene">
  <div class="ctx-a">
    A z:1
    <div class="inner-a">inner z:999</div>
  </div>
  <div class="ctx-b">
    B z:2
    <div class="inner-b">inner z:1</div>
  </div>
</div>`,
    displayCss: `.scene {
  position: relative;
  width: 260px; height: 150px;
  background: #94a3b8;
}
.ctx-a, .ctx-b {
  position: absolute;
  width: 150px; height: 100px;
  display: flex; flex-direction: column;
  align-items: flex-start; padding: 6px;
  font-size: 11px; font-weight: bold; color: white;
}
.ctx-a { background: rgba(220,38,38,0.85); top:10px; left:10px; z-index:1; }
.ctx-b { background: rgba(37,99,235,0.85); top:30px; left:90px; z-index:2; }
.inner-a, .inner-b {
  position: absolute;
  bottom:6px; right:6px;
  width:80px; height:36px;
  display:flex; align-items:center;
  justify-content:center; font-size:10px;
}
.inner-a { background:#7f1d1d; z-index:999; }
.inner-b { background:#1e3a8a; z-index:1; }`,
    renderWidth: 300, renderHeight: 175,
    correctVariantId: 'H004-A',
    variants: [
      {
        id: 'H004-A',
        html: `<div class="scene"><div class="ctx-a">A z:1<div class="inner-a">inner z:999</div></div><div class="ctx-b">B z:2<div class="inner-b">inner z:1</div></div></div>`,
        css: `.scene{position:relative;width:260px;height:150px;background:#94a3b8;}.ctx-a,.ctx-b{position:absolute;width:150px;height:100px;display:flex;flex-direction:column;align-items:flex-start;padding:6px;font-size:11px;font-weight:bold;color:white;}.ctx-a{background:rgba(220,38,38,0.85);top:10px;left:10px;z-index:1;}.ctx-b{background:rgba(37,99,235,0.85);top:30px;left:90px;z-index:2;}.inner-a,.inner-b{position:absolute;bottom:6px;right:6px;width:80px;height:36px;display:flex;align-items:center;justify-content:center;font-size:10px;}.inner-a{background:#7f1d1d;z-index:999;}.inner-b{background:#1e3a8a;z-index:1;}`
      },
      {
        id: 'H004-B',
        html: `<div class="scene"><div class="ctx-a">A z:2<div class="inner-a">inner z:999</div></div><div class="ctx-b">B z:1<div class="inner-b">inner z:1</div></div></div>`,
        css: `.scene{position:relative;width:260px;height:150px;background:#94a3b8;}.ctx-a,.ctx-b{position:absolute;width:150px;height:100px;display:flex;flex-direction:column;align-items:flex-start;padding:6px;font-size:11px;font-weight:bold;color:white;}.ctx-a{background:rgba(220,38,38,0.85);top:10px;left:10px;z-index:2;}.ctx-b{background:rgba(37,99,235,0.85);top:30px;left:90px;z-index:1;}.inner-a,.inner-b{position:absolute;bottom:6px;right:6px;width:80px;height:36px;display:flex;align-items:center;justify-content:center;font-size:10px;}.inner-a{background:#7f1d1d;z-index:999;}.inner-b{background:#1e3a8a;z-index:1;}`
      },
      {
        id: 'H004-C',
        html: `<div class="scene"><div class="ctx-a">A z:1<div class="inner-a">inner z:999</div></div><div class="ctx-b">B z:2<div class="inner-b">inner z:999</div></div></div>`,
        css: `.scene{position:relative;width:260px;height:150px;background:#94a3b8;}.ctx-a,.ctx-b{position:absolute;width:150px;height:100px;display:flex;flex-direction:column;align-items:flex-start;padding:6px;font-size:11px;font-weight:bold;color:white;}.ctx-a{background:rgba(220,38,38,0.85);top:10px;left:10px;z-index:1;}.ctx-b{background:rgba(37,99,235,0.85);top:30px;left:90px;z-index:2;}.inner-a,.inner-b{position:absolute;bottom:6px;right:6px;width:80px;height:36px;display:flex;align-items:center;justify-content:center;font-size:10px;}.inner-a{background:#7f1d1d;z-index:999;}.inner-b{background:#1e3a8a;z-index:999;}`
      },
      {
        id: 'H004-D',
        html: `<div class="scene"><div class="ctx-a">A (no z)<div class="inner-a">inner z:999</div></div><div class="ctx-b">B (no z)<div class="inner-b">inner z:1</div></div></div>`,
        css: `.scene{position:relative;width:260px;height:150px;background:#94a3b8;}.ctx-a,.ctx-b{position:absolute;width:150px;height:100px;display:flex;flex-direction:column;align-items:flex-start;padding:6px;font-size:11px;font-weight:bold;color:white;}.ctx-a{background:rgba(220,38,38,0.85);top:10px;left:10px;}.ctx-b{background:rgba(37,99,235,0.85);top:30px;left:90px;}.inner-a,.inner-b{position:absolute;bottom:6px;right:6px;width:80px;height:36px;display:flex;align-items:center;justify-content:center;font-size:10px;}.inner-a{background:#7f1d1d;z-index:999;}.inner-b{background:#1e3a8a;z-index:1;}`
      },
    ],
    explanation: 'A: ctx-b (z:2) поверх ctx-a (z:1) — inner-a z:999 сравнивается внутри ctx-a, проигрывает ctx-b целиком. B: ctx-a (z:2) поверх ctx-b (z:1) — порядок меняется. C: оба inner z:999 — outer-z определяет кто сверху. D: без z-index — порядок DOM (ctx-b второй = поверх).',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context',
    keyProps: ['z-index'],
  },

  // ─── H004: stacking context — z-index only within same context ────────────

  // ─── H005: transform breaks position:fixed ────────────────────────────────
  // ─── H006: flex-basis:0 vs auto with flex-grow ────────────────────────────
  {
    id: 'H006', topic: 'flexbox', difficulty: 'hard',
    displayHtml: `<div class="row">
  <div class="a">Длинный текст в A</div>
  <div class="b">B</div>
</div>`,
    displayCss: `.row {
  display: flex;
  width: 280px;
  background: #94a3b8;
  gap: 4px;
  padding: 4px;
}
.a {
  flex: 1 1 0;    /* flex-grow:1 flex-shrink:1 flex-basis:0 */
  background: #6366f1;
  color: white;
  padding: 10px 6px;
  font-size: 12px;
}
.b {
  flex: 1 1 0;
  background: #818cf8;
  color: white;
  padding: 10px 6px;
  font-size: 12px;
  text-align: center;
}`,
    renderWidth: 300, renderHeight: 90,
    correctVariantId: 'H006-A',
    variants: [
      { id: 'H006-A', html: `<div class="row"><div class="a">Длинный текст в A</div><div class="b">B</div></div>`, css: `.row{display:flex;width:280px;background:#94a3b8;gap:4px;padding:4px;}.a{flex:1 1 0;background:#6366f1;color:white;padding:10px 6px;font-size:12px;}.b{flex:1 1 0;background:#818cf8;color:white;padding:10px 6px;font-size:12px;text-align:center;}` },
      { id: 'H006-B', html: `<div class="row"><div class="a">Длинный текст в A</div><div class="b">B</div></div>`, css: `.row{display:flex;width:280px;background:#94a3b8;gap:4px;padding:4px;}.a{flex:1 1 auto;background:#6366f1;color:white;padding:10px 6px;font-size:12px;}.b{flex:1 1 auto;background:#818cf8;color:white;padding:10px 6px;font-size:12px;text-align:center;}` },
      { id: 'H006-C', html: `<div class="row"><div class="a">Длинный текст в A</div><div class="b">B</div></div>`, css: `.row{display:flex;width:280px;background:#94a3b8;gap:4px;padding:4px;}.a{flex:2 1 0;background:#6366f1;color:white;padding:10px 6px;font-size:12px;}.b{flex:1 1 0;background:#818cf8;color:white;padding:10px 6px;font-size:12px;text-align:center;}` },
      { id: 'H006-D', html: `<div class="row"><div class="a">Длинный текст в A</div><div class="b">B</div></div>`, css: `.row{display:flex;width:280px;background:#94a3b8;gap:4px;padding:4px;}.a{width:50%;background:#6366f1;color:white;padding:10px 6px;font-size:12px;}.b{width:50%;background:#818cf8;color:white;padding:10px 6px;font-size:12px;text-align:center;}` },
    ],
    explanation: 'flex-basis: 0 (через flex:1 1 0) означает, что оба элемента стартуют с нуля и всё доступное пространство делится поровну — A и B одинаковой ширины, несмотря на разный контент. При flex-basis: auto — стартовый размер = ширина контента.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/flex-basis',
    keyProps: ['flex'],
  },

  // ─── H007: overflow-wrap vs word-break ────────────────────────────────────
  {
    id: 'H007', topic: 'text', difficulty: 'hard',
    displayHtml: `<div class="box">
  Hello World Superlongwordthatdoesnotfit
</div>`,
    displayCss: `.box {
  width: 130px;
  background: #c084fc;
  border: 2px solid #c084fc;
  padding: 10px;
  font-size: 14px;
  overflow-wrap: break-word;
}`,
    renderWidth: 300, renderHeight: 140,
    correctVariantId: 'H007-A',
    variants: [
      { id: 'H007-A', html: `<div class="box">Hello World Superlongwordthatdoesnotfit</div>`, css: `.box{width:130px;background:#c084fc;border:2px solid #c084fc;padding:10px;font-size:14px;overflow-wrap:break-word;}` },
      { id: 'H007-B', html: `<div class="box">Hello World Superlongwordthatdoesnotfit</div>`, css: `.box{width:130px;background:#c084fc;border:2px solid #c084fc;padding:10px;font-size:14px;word-break:break-all;}` },
      { id: 'H007-C', html: `<div class="box">Hello World Superlongwordthatdoesnotfit</div>`, css: `.box{width:130px;background:#c084fc;border:2px solid #c084fc;padding:10px;font-size:14px;}` },
      { id: 'H007-D', html: `<div class="box">Hello World Superlongwordthatdoesnotfit</div>`, css: `.box{width:130px;background:#c084fc;border:2px solid #c084fc;padding:10px;font-size:14px;word-break:break-word;}` },
    ],
    explanation: 'overflow-wrap: break-word разрывает длинное слово, только если оно не помещается целиком — короткие слова "Hello" и "World" переносятся по пробелам как обычно, а "Superlongword..." разрывается. word-break: break-all разрывает ЛЮБОЕ слово в любом месте.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/overflow-wrap',
    keyProps: ['overflow-wrap'],
  },

  // ─── H008: containing block with transform ────────────────────────────────
  {
    id: 'H008', topic: 'positioning', difficulty: 'hard',
    displayHtml: `<div class="grandpa">
  <div class="parent">
    <div class="abs">50% / 50%</div>
  </div>
</div>`,
    displayCss: `.grandpa {
  position: relative;
  width: 260px;
  height: 160px;
  background: #fef9c3;
}
.parent {
  transform: translateX(0);
  width: 150px;
  height: 100px;
  background: #fde68a;
  margin: 20px;
}
.abs {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 40px;
  background: #b45309;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
}`,
    renderWidth: 300, renderHeight: 195,
    correctVariantId: 'H008-A',
    variants: [
      { id: 'H008-A', html: `<div class="grandpa"><div class="parent"><div class="abs">50% / 50%</div></div></div>`, css: `.grandpa{position:relative;width:260px;height:160px;background:#fef9c3;}.parent{transform:translateX(0);width:150px;height:100px;background:#fde68a;margin:20px;}.abs{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:80px;height:40px;background:#b45309;color:white;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:bold;}` },
      { id: 'H008-B', html: `<div class="grandpa"><div class="parent"><div class="abs">50% / 50%</div></div></div>`, css: `.grandpa{position:relative;width:260px;height:160px;background:#fef9c3;}.parent{width:150px;height:100px;background:#fde68a;margin:20px;}.abs{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:80px;height:40px;background:#b45309;color:white;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:bold;}` },
      { id: 'H008-C', html: `<div class="grandpa"><div class="parent"><div class="abs">50% / 50%</div></div></div>`, css: `.grandpa{position:relative;width:260px;height:160px;background:#fef9c3;}.parent{position:relative;width:150px;height:100px;background:#fde68a;margin:20px;}.abs{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:80px;height:40px;background:#b45309;color:white;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:bold;}` },
      { id: 'H008-D', html: `<div class="grandpa"><div class="parent"><div class="abs">50% / 50%</div></div></div>`, css: `.grandpa{position:relative;width:260px;height:160px;background:#fef9c3;}.parent{transform:translateX(0);position:relative;width:150px;height:100px;background:#fde68a;margin:20px;}.abs{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:80px;height:40px;background:#b45309;color:white;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:bold;}` },
    ],
    explanation: 'transform создаёт новый containing block для абсолютно позиционированных потомков. .abs с top:50% left:50% позиционируется относительно .parent (у которого transform), а не .grandpa (position: relative).',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context',
    keyProps: ['transform', 'position'],
  },

  // ─── H009: minmax(0, 1fr) vs minmax(auto, 1fr) ────────────────────────────
  {
    id: 'H009', topic: 'grid', difficulty: 'hard',
    displayHtml: `<div class="grid">
  <div class="cell">Очень длинное содержимое ячейки</div>
  <div class="cell">B</div>
</div>`,
    displayCss: `.grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 8px;
  width: 240px;
  background: #6ee7b7;
  padding: 8px;
}
.cell {
  background: #059669;
  color: white;
  padding: 10px;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 4px;
}`,
    renderWidth: 300, renderHeight: 95,
    correctVariantId: 'H009-A',
    variants: [
      { id: 'H009-A', html: `<div class="grid"><div class="cell">Очень длинное содержимое ячейки</div><div class="cell">B</div></div>`, css: `.grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:8px;width:240px;background:#6ee7b7;padding:8px;}.cell{background:#059669;color:white;padding:10px;font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-radius:4px;}` },
      { id: 'H009-B', html: `<div class="grid"><div class="cell">Очень длинное содержимое ячейки</div><div class="cell">B</div></div>`, css: `.grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;width:240px;background:#6ee7b7;padding:8px;}.cell{background:#059669;color:white;padding:10px;font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-radius:4px;}` },
      { id: 'H009-C', html: `<div class="grid"><div class="cell">Очень длинное содержимое ячейки</div><div class="cell">B</div></div>`, css: `.grid{display:grid;grid-template-columns:minmax(auto,1fr) minmax(auto,1fr);gap:8px;width:240px;background:#6ee7b7;padding:8px;}.cell{background:#059669;color:white;padding:10px;font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-radius:4px;}` },
      { id: 'H009-D', html: `<div class="grid"><div class="cell">Очень длинное содержимое ячейки</div><div class="cell">B</div></div>`, css: `.grid{display:grid;grid-template-columns:min-content 1fr;gap:8px;width:240px;background:#6ee7b7;padding:8px;}.cell{background:#059669;color:white;padding:10px;font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-radius:4px;}` },
    ],
    explanation: 'minmax(0, 1fr) допускает сужение колонки до нуля — обе колонки равны. minmax(auto, 1fr) / 1fr (по умолчанию) — минимум auto (размер контента), поэтому первая колонка шире из-за длинного текста. С минимумом 0 обе равны и text-overflow срабатывает.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/minmax',
    keyProps: ['minmax'],
  },

  // ─── H010: gap in flex (not margin) ──────────────────────────────────────
  {
    id: 'H010', topic: 'flexbox', difficulty: 'hard',
    displayHtml: `<div class="row">
  <div class="item">A</div>
  <div class="item">B</div>
  <div class="item">C</div>
</div>`,
    displayCss: `.row {
  display: flex;
  gap: 20px;
  justify-content: space-between;
  background: #bae6fd;
  padding: 10px;
  width: 260px;
}
.item {
  width: 60px;
  height: 60px;
  background: #0c4a6e;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: bold;
}`,
    renderWidth: 300, renderHeight: 100,
    correctVariantId: 'H010-A',
    variants: [
      { id: 'H010-A', html: `<div class="row"><div class="item">A</div><div class="item">B</div><div class="item">C</div></div>`, css: `.row{display:flex;gap:20px;justify-content:space-between;background:#bae6fd;padding:10px;width:260px;}.item{width:60px;height:60px;background:#0c4a6e;color:white;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:bold;}` },
      { id: 'H010-B', html: `<div class="row"><div class="item">A</div><div class="item">B</div><div class="item">C</div></div>`, css: `.row{display:flex;justify-content:space-between;background:#bae6fd;padding:10px;width:260px;}.item{width:60px;height:60px;background:#0c4a6e;color:white;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:bold;}` },
      { id: 'H010-C', html: `<div class="row"><div class="item">A</div><div class="item">B</div><div class="item">C</div></div>`, css: `.row{display:flex;gap:20px;justify-content:flex-start;background:#bae6fd;padding:10px;width:260px;}.item{width:60px;height:60px;background:#0c4a6e;color:white;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:bold;}` },
      { id: 'H010-D', html: `<div class="row"><div class="item">A</div><div class="item">B</div><div class="item">C</div></div>`, css: `.row{display:flex;gap:0;justify-content:space-between;background:#bae6fd;padding:10px;width:260px;}.item{width:60px;height:60px;background:#0c4a6e;color:white;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:bold;}` },
    ],
    explanation: 'Когда gap и justify-content: space-between заданы одновременно, gap задаёт МИНИМАЛЬНЫЙ зазор между элементами. space-between добавляет дополнительное пространство ПОВЕРХ gap. Итоговый зазор = max(gap, расчётное space-between).',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/gap',
    keyProps: ['gap', 'justify-content'],
  },

  // ─── H011: position:sticky bounds ─────────────────────────────────────────
  // ─── H012: fr units and fixed tracks ─────────────────────────────────────
  {
    id: 'H012', topic: 'grid', difficulty: 'hard',
    displayHtml: `<div class="grid">
  <div class="cell">200px</div>
  <div class="cell">1fr</div>
  <div class="cell">2fr</div>
</div>`,
    displayCss: `.grid {
  display: grid;
  grid-template-columns: 200px 1fr 2fr;
  gap: 6px;
  width: 280px;
  background: #d8b4fe;
  padding: 6px;
}
.cell {
  background: #7c3aed;
  color: white;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: bold;
  border-radius: 4px;
}`,
    renderWidth: 300, renderHeight: 80,
    correctVariantId: 'H012-A',
    variants: [
      { id: 'H012-A', html: `<div class="grid"><div class="cell">200px</div><div class="cell">1fr</div><div class="cell">2fr</div></div>`, css: `.grid{display:grid;grid-template-columns:200px 1fr 2fr;gap:6px;width:280px;background:#d8b4fe;padding:6px;}.cell{background:#7c3aed;color:white;height:50px;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:bold;border-radius:4px;}` },
      { id: 'H012-B', html: `<div class="grid"><div class="cell">200px</div><div class="cell">1fr</div><div class="cell">2fr</div></div>`, css: `.grid{display:grid;grid-template-columns:1fr 1fr 2fr;gap:6px;width:280px;background:#d8b4fe;padding:6px;}.cell{background:#7c3aed;color:white;height:50px;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:bold;border-radius:4px;}` },
      { id: 'H012-C', html: `<div class="grid"><div class="cell">200px</div><div class="cell">1fr</div><div class="cell">2fr</div></div>`, css: `.grid{display:grid;grid-template-columns:200px 1fr 1fr;gap:6px;width:280px;background:#d8b4fe;padding:6px;}.cell{background:#7c3aed;color:white;height:50px;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:bold;border-radius:4px;}` },
      { id: 'H012-D', html: `<div class="grid"><div class="cell">200px</div><div class="cell">1fr</div><div class="cell">2fr</div></div>`, css: `.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;width:280px;background:#d8b4fe;padding:6px;}.cell{background:#7c3aed;color:white;height:50px;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:bold;border-radius:4px;}` },
    ],
    explanation: 'fr — дробная единица, делит только ОСТАВШЕЕСЯ пространство после фиксированных колонок. 280px − 200px − 12px (gaps) = 68px на fr-колонки. 1fr ≈ 23px, 2fr ≈ 46px. Колонка 200px занимает большую часть.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout',
    keyProps: ['grid-template-columns'],
  },
]

export const hardQuestionsExtra: import('@/types').Question[] = [
  {
    id: 'H013', topic: 'flexbox', difficulty: 'hard',
    displayHtml: `<div class="row">
  <div class="item">
    <p>Контент который не влезает никак</p>
  </div>
  <div class="item short">B</div>
</div>`,
    displayCss: `.row { display: flex; width: 200px; background: #94a3b8; gap: 8px; padding: 6px; }
.item { flex: 1; background: #6366f1; color: white; padding: 10px 8px; font-size: 12px; overflow: hidden; min-width: 0; }
.short { flex: 0 0 50px; }`,
    renderWidth: 300, renderHeight: 90,
    correctVariantId: 'H013-A',
    variants: [
      { id: 'H013-A', html: `<div class="row"><div class="item"><p>Контент который не влезает никак</p></div><div class="item short">B</div></div>`, css: `.row{display:flex;width:200px;background:#94a3b8;gap:8px;padding:6px;}.item{flex:1;background:#6366f1;color:white;padding:10px 8px;font-size:12px;overflow:hidden;min-width:0;}.short{flex:0 0 50px;}` },
      { id: 'H013-B', html: `<div class="row"><div class="item"><p>Контент который не влезает никак</p></div><div class="item short">B</div></div>`, css: `.row{display:flex;width:200px;background:#94a3b8;gap:8px;padding:6px;}.item{flex:1;background:#6366f1;color:white;padding:10px 8px;font-size:12px;}.short{flex:0 0 50px;}` },
      { id: 'H013-C', html: `<div class="row"><div class="item"><p>Контент который не влезает никак</p></div><div class="item short">B</div></div>`, css: `.row{display:flex;width:200px;background:#94a3b8;gap:8px;padding:6px;}.item{flex:1;background:#6366f1;color:white;padding:10px 8px;font-size:12px;overflow:hidden;}.short{flex:0 0 50px;}` },
      { id: 'H013-D', html: `<div class="row"><div class="item"><p>Контент который не влезает никак</p></div><div class="item short">B</div></div>`, css: `.row{display:flex;width:200px;background:#94a3b8;gap:8px;padding:6px;flex-wrap:wrap;}.item{flex:1;background:#6366f1;color:white;padding:10px 8px;font-size:12px;overflow:hidden;min-width:0;}.short{flex:0 0 50px;}` },
    ],
    explanation: 'flex: 1 без min-width: 0 не может сжаться ниже content-width (min-width: auto). Без min-width: 0 первый элемент расширяет строку. С min-width: 0 + overflow: hidden — текст обрезается, элемент умещается.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/min-width',
    keyProps: ['flex', 'min-width'],
  },
  {
    id: 'H014', topic: 'stacking', difficulty: 'hard',
    displayHtml: `<div class="ctx">
  <div class="back">z: -1</div>
  <div class="mid">z: 0 (auto)</div>
  <div class="top">z: 1</div>
</div>`,
    displayCss: `.ctx {
  position: relative;
  width: 260px; height: 150px;
  background: #cbd5e1;
  isolation: isolate;
}
.back, .mid, .top {
  position: absolute;
  width: 160px; height: 80px;
  display: flex; align-items: center;
  justify-content: center; font-weight: bold;
  font-size: 13px; color: white;
}
.back { background: rgba(239,68,68,0.85); top:10px; left:10px; z-index:-1; }
.mid  { background: rgba(234,179,8,0.85);  top:35px; left:60px; z-index:0; }
.top  { background: rgba(34,197,94,0.85);  top:60px; left:90px; z-index:1; }`,
    renderWidth: 300, renderHeight: 175,
    correctVariantId: 'H014-A',
    variants: [
      { id: 'H014-A', html: `<div class="ctx"><div class="back">z: -1</div><div class="mid">z: 0 (auto)</div><div class="top">z: 1</div></div>`, css: `.ctx{position:relative;width:260px;height:150px;background:#cbd5e1;isolation:isolate;}.back,.mid,.top{position:absolute;width:160px;height:80px;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:13px;color:white;}.back{background:rgba(239,68,68,0.85);top:10px;left:10px;z-index:-1;}.mid{background:rgba(234,179,8,0.85);top:35px;left:60px;z-index:0;}.top{background:rgba(34,197,94,0.85);top:60px;left:90px;z-index:1;}` },
      { id: 'H014-B', html: `<div class="ctx"><div class="back">z: -1</div><div class="mid">z: 0 (auto)</div><div class="top">z: 1</div></div>`, css: `.ctx{position:relative;width:260px;height:150px;background:#cbd5e1;}.back,.mid,.top{position:absolute;width:160px;height:80px;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:13px;color:white;}.back{background:rgba(239,68,68,0.85);top:10px;left:10px;z-index:-1;}.mid{background:rgba(234,179,8,0.85);top:35px;left:60px;z-index:0;}.top{background:rgba(34,197,94,0.85);top:60px;left:90px;z-index:1;}` },
      { id: 'H014-C', html: `<div class="ctx"><div class="top">z: 1</div><div class="mid">z: 0 (auto)</div><div class="back">z: -1</div></div>`, css: `.ctx{position:relative;width:260px;height:150px;background:#cbd5e1;isolation:isolate;}.back,.mid,.top{position:absolute;width:160px;height:80px;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:13px;color:white;}.back{background:rgba(239,68,68,0.85);top:10px;left:10px;z-index:-1;}.mid{background:rgba(234,179,8,0.85);top:35px;left:60px;z-index:0;}.top{background:rgba(34,197,94,0.85);top:60px;left:90px;z-index:1;}` },
      { id: 'H014-D', html: `<div class="ctx"><div class="back">z: -1</div><div class="mid">z: 0 (auto)</div><div class="top">z: 1</div></div>`, css: `.ctx{position:relative;width:260px;height:150px;background:#cbd5e1;isolation:isolate;}.back,.mid,.top{position:absolute;width:160px;height:80px;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:13px;color:white;}.back{background:rgba(239,68,68,0.85);top:10px;left:10px;z-index:1;}.mid{background:rgba(234,179,8,0.85);top:35px;left:60px;z-index:2;}.top{background:rgba(34,197,94,0.85);top:60px;left:90px;z-index:3;}` },
    ],
    explanation: 'isolation: isolate создаёт stacking context. z-index: -1 помещает .back ЗА фоном контекста (но поверх фона html). z-index: 0 и 1 оба поверх фона. Без isolation — z-index: -1 может уйти за фон всего документа.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/isolation',
    keyProps: ['z-index', 'isolation'],
  },
  {
    id: 'H015', topic: 'text', difficulty: 'hard',
    displayHtml: `<div class="box">
  Verylongword<wbr>breakhere test test
</div>`,
    displayCss: `.box {
  width: 140px;
  background: #86efac;
  border: 2px solid #86efac;
  padding: 10px;
  font-size: 14px;
  overflow-wrap: normal;
  word-break: normal;
}`,
    renderWidth: 300, renderHeight: 120,
    correctVariantId: 'H015-A',
    variants: [
      { id: 'H015-A', html: `<div class="box">Verylongword<wbr>breakhere test test</div>`, css: `.box{width:140px;background:#86efac;border:2px solid #86efac;padding:10px;font-size:14px;overflow-wrap:normal;word-break:normal;}` },
      { id: 'H015-B', html: `<div class="box">Verylongword<wbr>breakhere test test</div>`, css: `.box{width:140px;background:#86efac;border:2px solid #86efac;padding:10px;font-size:14px;overflow-wrap:break-word;}` },
      { id: 'H015-C', html: `<div class="box">Verylongword<wbr>breakhere test test</div>`, css: `.box{width:140px;background:#86efac;border:2px solid #86efac;padding:10px;font-size:14px;word-break:break-all;}` },
      { id: 'H015-D', html: `<div class="box">Verylongword<wbr>breakhere test test</div>`, css: `.box{width:140px;background:#86efac;border:2px solid #86efac;padding:10px;font-size:14px;white-space:nowrap;overflow:hidden;}` },
    ],
    explanation: 'Тег <wbr> указывает «мягкое» место переноса. При overflow-wrap: normal и word-break: normal браузер переносит в точке <wbr> если слово не помещается. Это позволяет указывать места разрыва для длинных слов без JS.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/wbr',
    keyProps: ['overflow-wrap', 'word-break'],
  },
  {
    id: 'H016', topic: 'grid', difficulty: 'hard',
    displayHtml: `<div class="grid">
  <div class="cell">A</div>
  <div class="cell">B</div>
  <div class="cell">C</div>
  <div class="cell">D</div>
  <div class="cell">E</div>
</div>`,
    displayCss: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  gap: 6px;
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
  border-radius: 4px;
}`,
    renderWidth: 300, renderHeight: 85,
    correctVariantId: 'H016-A',
    variants: [
      { id: 'H016-A', html: `<div class="grid"><div class="cell">A</div><div class="cell">B</div><div class="cell">C</div><div class="cell">D</div><div class="cell">E</div></div>`, css: `.grid{display:grid;grid-template-columns:repeat(3,1fr);grid-auto-flow:column;grid-auto-columns:1fr;gap:6px;background:#a78bfa;padding:8px;width:270px;}.cell{background:#7c3aed;color:white;height:50px;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:bold;border-radius:4px;}` },
      { id: 'H016-B', html: `<div class="grid"><div class="cell">A</div><div class="cell">B</div><div class="cell">C</div><div class="cell">D</div><div class="cell">E</div></div>`, css: `.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;background:#a78bfa;padding:8px;width:270px;}.cell{background:#7c3aed;color:white;height:50px;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:bold;border-radius:4px;}` },
      { id: 'H016-C', html: `<div class="grid"><div class="cell">A</div><div class="cell">B</div><div class="cell">C</div><div class="cell">D</div><div class="cell">E</div></div>`, css: `.grid{display:grid;grid-template-rows:repeat(3,50px);grid-auto-flow:column;grid-auto-columns:1fr;gap:6px;background:#a78bfa;padding:8px;width:270px;}.cell{background:#7c3aed;color:white;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:bold;border-radius:4px;}` },
      { id: 'H016-D', html: `<div class="grid"><div class="cell">A</div><div class="cell">B</div><div class="cell">C</div><div class="cell">D</div><div class="cell">E</div></div>`, css: `.grid{display:grid;grid-template-columns:repeat(5,1fr);gap:6px;background:#a78bfa;padding:8px;width:270px;}.cell{background:#7c3aed;color:white;height:50px;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:bold;border-radius:4px;}` },
    ],
    explanation: 'grid-auto-flow: column меняет направление авторасстановки на колонки. Элементы заполняют сначала вниз по колонке. При 3 explicit-колонках и auto-flow column — D и E попадают в 4-ю и 5-ю неявные колонки, занимая одну строку.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/grid-auto-flow',
    keyProps: ['grid-auto-flow'],
  },
  {
    id: 'H018', topic: 'box-model', difficulty: 'hard',
    displayHtml: `<div class="parent">
  <div class="child">margin-top: 30px</div>
  <div class="child2">Следующий</div>
</div>`,
    displayCss: `.parent {
  width: 230px;
  background: #fef9c3;
  padding-top: 1px; /* предотвращает схлопывание с parent */
  padding-bottom: 1px;
}
.child {
  background: #ca8a04;
  color: white;
  padding: 8px;
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 12px;
  text-align: center;
}
.child2 {
  background: #92400e;
  color: white;
  padding: 8px;
  margin-top: 40px;
  font-size: 12px;
  text-align: center;
}`,
    renderWidth: 300, renderHeight: 175,
    correctVariantId: 'H018-A',
    variants: [
      { id: 'H018-A', html: `<div class="parent"><div class="child">margin-top: 30px</div><div class="child2">Следующий</div></div>`, css: `.parent{width:230px;background:#fef9c3;padding-top:1px;padding-bottom:1px;}.child{background:#ca8a04;color:white;padding:8px;margin-top:30px;margin-bottom:20px;font-size:12px;text-align:center;}.child2{background:#92400e;color:white;padding:8px;margin-top:40px;font-size:12px;text-align:center;}` },
      { id: 'H018-B', html: `<div class="parent"><div class="child">margin-top: 30px</div><div class="child2">Следующий</div></div>`, css: `.parent{width:230px;background:#fef9c3;padding-top:1px;padding-bottom:1px;}.child{background:#ca8a04;color:white;padding:8px;margin-top:30px;margin-bottom:20px;font-size:12px;text-align:center;}.child2{background:#92400e;color:white;padding:8px;margin-top:20px;font-size:12px;text-align:center;}` },
      { id: 'H018-C', html: `<div class="parent"><div class="child">margin-top: 30px</div><div class="child2">Следующий</div></div>`, css: `.parent{width:230px;background:#fef9c3;padding-top:1px;padding-bottom:1px;}.child{background:#ca8a04;color:white;padding:8px;margin-top:30px;margin-bottom:60px;font-size:12px;text-align:center;}.child2{background:#92400e;color:white;padding:8px;margin-top:0;font-size:12px;text-align:center;}` },
      { id: 'H018-D', html: `<div class="parent"><div class="child">margin-top: 30px</div><div class="child2">Следующий</div></div>`, css: `.parent{display:flex;flex-direction:column;width:230px;background:#fef9c3;padding:1px 0;}.child{background:#ca8a04;color:white;padding:8px;margin-top:30px;margin-bottom:20px;font-size:12px;text-align:center;}.child2{background:#92400e;color:white;padding:8px;margin-top:40px;font-size:12px;text-align:center;}` },
    ],
    explanation: 'Смежные вертикальные margin схлопываются: между .child (margin-bottom: 20px) и .child2 (margin-top: 40px) — берём большее: 40px. Итого от верха parent: 30px + контент1 + 40px + контент2. В flex схлопывания нет.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing',
    keyProps: ['margin-bottom', 'margin-top'],
  },
  {
    id: 'H019', topic: 'positioning', difficulty: 'hard',
    displayHtml: `<div class="container">
  <div class="abs top-right">TR</div>
  <div class="abs bottom-left">BL</div>
</div>`,
    displayCss: `.container {
  position: relative;
  width: 240px;
  height: 160px;
  background: #bae6fd;
  border: 3px dashed #7dd3fc;
  border-radius: 8px;
}
.abs {
  position: absolute;
  width: 50px;
  height: 50px;
  background: #0369a1;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 6px;
}
.top-right    { top: 0; right: 0; }
.bottom-left  { bottom: 0; left: 0; }`,
    renderWidth: 300, renderHeight: 195,
    correctVariantId: 'H019-A',
    variants: [
      { id: 'H019-A', html: `<div class="container"><div class="abs top-right">TR</div><div class="abs bottom-left">BL</div></div>`, css: `.container{position:relative;width:240px;height:160px;background:#bae6fd;border:3px dashed #7dd3fc;border-radius:8px;}.abs{position:absolute;width:50px;height:50px;background:#0369a1;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;border-radius:6px;}.top-right{top:0;right:0;}.bottom-left{bottom:0;left:0;}` },
      { id: 'H019-B', html: `<div class="container"><div class="abs top-right">TR</div><div class="abs bottom-left">BL</div></div>`, css: `.container{position:relative;width:240px;height:160px;background:#bae6fd;border:3px dashed #7dd3fc;border-radius:8px;}.abs{position:absolute;width:50px;height:50px;background:#0369a1;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;border-radius:6px;}.top-right{top:0;left:0;}.bottom-left{bottom:0;right:0;}` },
      { id: 'H019-C', html: `<div class="container"><div class="abs top-right">TR</div><div class="abs bottom-left">BL</div></div>`, css: `.container{position:relative;width:240px;height:160px;background:#bae6fd;border:3px dashed #7dd3fc;border-radius:8px;}.abs{position:absolute;width:50px;height:50px;background:#0369a1;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;border-radius:6px;}.top-right{top:50%;right:0;transform:translateY(-50%);}.bottom-left{bottom:50%;left:0;transform:translateY(50%);}` },
      { id: 'H019-D', html: `<div class="container"><div class="abs top-right">TR</div><div class="abs bottom-left">BL</div></div>`, css: `.container{width:240px;height:160px;background:#bae6fd;border:3px dashed #7dd3fc;border-radius:8px;display:flex;justify-content:space-between;}.abs{width:50px;height:50px;background:#0369a1;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;border-radius:6px;}.top-right{align-self:flex-start;}.bottom-left{align-self:flex-end;}` },
    ],
    explanation: 'top:0 right:0 — элемент прижат к правому верхнему углу containing block. bottom:0 left:0 — к левому нижнему. Оба прилипают к краям и не перекрываются.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/position',
    keyProps: ['position', 'top', 'right', 'bottom', 'left'],
  },
  {
    id: 'H020', topic: 'grid', difficulty: 'hard',
    displayHtml: `<div class="grid">
  <div>A</div>
  <div>B</div>
  <div class="big">BIG</div>
  <div>D</div>
  <div>E</div>
</div>`,
    displayCss: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 60px);
  grid-auto-rows: 50px;
  gap: 6px;
  background: #d8b4fe;
  padding: 8px;
  width: 220px;
  grid-auto-flow: row dense;
}
.grid > div {
  background: #9333ea;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 4px;
}
.big {
  grid-column: span 2;
  grid-row: span 2;
  background: #7c3aed;
}`,
    renderWidth: 300, renderHeight: 180,
    correctVariantId: 'H020-A',
    variants: [
      { id: 'H020-A', html: `<div class="grid"><div>A</div><div>B</div><div class="big">BIG</div><div>D</div><div>E</div></div>`, css: `.grid{display:grid;grid-template-columns:repeat(3,60px);grid-auto-rows:50px;gap:6px;background:#d8b4fe;padding:8px;width:220px;grid-auto-flow:row dense;}.grid>div{background:#9333ea;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;border-radius:4px;}.big{grid-column:span 2;grid-row:span 2;background:#7c3aed;}` },
      { id: 'H020-B', html: `<div class="grid"><div>A</div><div>B</div><div class="big">BIG</div><div>D</div><div>E</div></div>`, css: `.grid{display:grid;grid-template-columns:repeat(3,60px);grid-auto-rows:50px;gap:6px;background:#d8b4fe;padding:8px;width:220px;}.grid>div{background:#9333ea;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;border-radius:4px;}.big{grid-column:span 2;grid-row:span 2;background:#7c3aed;}` },
      { id: 'H020-C', html: `<div class="grid"><div>A</div><div>B</div><div class="big">BIG</div><div>D</div><div>E</div></div>`, css: `.grid{display:grid;grid-template-columns:repeat(3,60px);grid-auto-rows:50px;gap:6px;background:#d8b4fe;padding:8px;width:220px;grid-auto-flow:column dense;}.grid>div{background:#9333ea;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;border-radius:4px;}.big{grid-column:span 2;grid-row:span 2;background:#7c3aed;}` },
      { id: 'H020-D', html: `<div class="grid"><div>A</div><div>B</div><div class="big">BIG</div><div>D</div><div>E</div></div>`, css: `.grid{display:grid;grid-template-columns:repeat(3,60px);grid-auto-rows:50px;gap:6px;background:#d8b4fe;padding:8px;width:220px;}.grid>div{background:#9333ea;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;border-radius:4px;}.big{grid-column:span 2;background:#7c3aed;}` },
    ],
    explanation: 'grid-auto-flow: row dense заполняет «дыры» в сетке, возвращаясь назад. BIG (span 2×2) не помещается в ряду с A и B — без dense D и E шли бы ниже BIG. С dense — D и E заполняют пустые ячейки первой строки.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/grid-auto-flow',
    keyProps: ['grid-auto-flow'],
  },
  {
    id: 'H021', topic: 'text', difficulty: 'hard',
    displayHtml: `<div class="box">
  <span>Один</span>
  <span>Два</span>
  <span>Три</span>
</div>`,
    displayCss: `.box {
  width: 200px;
  background: #94a3b8;
  padding: 10px;
  font-size: 0; /* убираем пробел между inline-элементами */
}
span {
  display: inline-block;
  width: 60px;
  height: 40px;
  background: #3b82f6;
  color: white;
  font-size: 14px;
  text-align: center;
  line-height: 40px;
  border: 1px solid white;
}`,
    renderWidth: 300, renderHeight: 90,
    correctVariantId: 'H021-A',
    variants: [
      { id: 'H021-A', html: `<div class="box"><span>Один</span><span>Два</span><span>Три</span></div>`, css: `.box{width:200px;background:#94a3b8;padding:10px;font-size:0;}.box span{display:inline-block;width:60px;height:40px;background:#3b82f6;color:white;font-size:14px;text-align:center;line-height:40px;border:1px solid white;}` },
      { id: 'H021-B', html: `<div class="box"><span>Один</span><span>Два</span><span>Три</span></div>`, css: `.box{width:200px;background:#94a3b8;padding:10px;}.box span{display:inline-block;width:60px;height:40px;background:#3b82f6;color:white;font-size:14px;text-align:center;line-height:40px;border:1px solid white;}` },
      { id: 'H021-C', html: `<div class="box"><span>Один</span><span>Два</span><span>Три</span></div>`, css: `.box{width:200px;background:#94a3b8;padding:10px;display:flex;}.box span{width:60px;height:40px;background:#3b82f6;color:white;font-size:14px;text-align:center;line-height:40px;border:1px solid white;}` },
      { id: 'H021-D', html: `<div class="box"><span>Один</span><span>Два</span><span>Три</span></div>`, css: `.box{width:200px;background:#94a3b8;padding:10px;letter-spacing:-4px;}.box span{display:inline-block;width:60px;height:40px;background:#3b82f6;color:white;font-size:14px;text-align:center;line-height:40px;border:1px solid white;letter-spacing:0;}` },
    ],
    explanation: 'Между inline-block элементами в HTML есть whitespace-символы, которые добавляют ~4px пробел. font-size: 0 на родителе обнуляет размер whitespace — пробелы исчезают. Восстановленный font-size на спанах не влияет на родительский.',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/display',
    keyProps: ['font-size'],
  },
  {
    id: 'H022', topic: 'overflow', difficulty: 'hard',
    displayHtml: `<div class="outer">
  <div class="float-box"></div>
  <p>Текст после флоата</p>
</div>`,
    displayCss: `.outer {
  width: 220px;
  background: #fef9c3;
  border: 2px solid #ca8a04;
  /* display: flow-root создаёт BFC */
  display: flow-root;
}
.float-box {
  float: left;
  width: 80px;
  height: 80px;
  background: #d97706;
  margin-right: 10px;
}
p { margin: 0; padding: 8px 0 8px 8px; font-size: 13px; }`,
    renderWidth: 300, renderHeight: 130,
    correctVariantId: 'H022-A',
    variants: [
      { id: 'H022-A', html: `<div class="outer"><div class="float-box"></div><p>Текст после флоата</p></div>`, css: `.outer{width:220px;background:#fef9c3;border:2px solid #ca8a04;display:flow-root;}.float-box{float:left;width:80px;height:80px;background:#d97706;margin-right:10px;}.outer p{margin:0;padding:8px 0 8px 8px;font-size:13px;}` },
      { id: 'H022-B', html: `<div class="outer"><div class="float-box"></div><p>Текст после флоата</p></div>`, css: `.outer{width:220px;background:#fef9c3;border:2px solid #ca8a04;}.float-box{float:left;width:80px;height:80px;background:#d97706;margin-right:10px;}.outer p{margin:0;padding:8px 0 8px 8px;font-size:13px;}` },
      { id: 'H022-C', html: `<div class="outer"><div class="float-box"></div><p>Текст после флоата</p></div>`, css: `.outer{width:220px;background:#fef9c3;border:2px solid #ca8a04;overflow:hidden;}.float-box{float:left;width:80px;height:80px;background:#d97706;margin-right:10px;}.outer p{margin:0;padding:8px 0 8px 8px;font-size:13px;}` },
      { id: 'H022-D', html: `<div class="outer"><div class="float-box"></div><p>Текст после флоата</p></div>`, css: `.outer{width:220px;background:#fef9c3;border:2px solid #ca8a04;}.float-box{float:left;width:80px;height:80px;background:#d97706;margin-right:10px;}.outer p{margin:0;padding:8px 0 8px 8px;font-size:13px;clear:both;}` },
    ],
    explanation: 'display: flow-root создаёт Block Formatting Context — родитель «захватывает» флоаты и растягивается по ним. Без BFC (вариант B) — outer схлопывается, флоат торчит наружу. overflow: hidden тоже создаёт BFC (вариант C).',
    docUrl: 'https://developer.mozilla.org/ru/docs/Web/CSS/display',
    keyProps: ['display', 'float'],
  },
]
