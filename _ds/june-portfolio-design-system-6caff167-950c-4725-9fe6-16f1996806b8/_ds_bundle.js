/* @ds-bundle: {"format":4,"namespace":"JunePortfolioDesignSystem_6caff1","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"TextLink","sourcePath":"components/buttons/TextLink.jsx"},{"name":"PaperCard","sourcePath":"components/cards/PaperCard.jsx"},{"name":"QrCard","sourcePath":"components/cards/QrCard.jsx"},{"name":"Cover","sourcePath":"components/cover/Cover.jsx"},{"name":"Doodle","sourcePath":"components/doodles/Doodle.jsx"},{"name":"FiberFilter","sourcePath":"components/doodles/rough.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"GridPaper","sourcePath":"components/paper/GridPaper.jsx"},{"name":"PaperTexture","sourcePath":"components/paper/PaperTexture.jsx"},{"name":"TornEdge","sourcePath":"components/paper/TornEdge.jsx"},{"name":"SpeechBubble","sourcePath":"components/sheets/SpeechBubble.jsx"},{"name":"TornSheet","sourcePath":"components/sheets/TornSheet.jsx"},{"name":"Tag","sourcePath":"components/tags/Tag.jsx"},{"name":"Tape","sourcePath":"components/tape/Tape.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"05468a6870c1","components/buttons/TextLink.jsx":"594907927765","components/cards/PaperCard.jsx":"e6b78db0ac14","components/cards/QrCard.jsx":"c3a7c896a738","components/cover/Cover.jsx":"31af3d093f30","components/doodles/Doodle.jsx":"1b5ea390bcff","components/doodles/rough.jsx":"07fdc76a3e40","components/icons/Icon.jsx":"155e1348c67c","components/paper/GridPaper.jsx":"055c080c5620","components/paper/PaperTexture.jsx":"59395e0b8ee6","components/paper/TornEdge.jsx":"a3123a0c9439","components/sheets/SpeechBubble.jsx":"95b02d9ee618","components/sheets/TornSheet.jsx":"dfefb8cb2c2e","components/tags/Tag.jsx":"ec10e45ce952","components/tape/Tape.jsx":"f7960a706e29","ui_kits/portfolio/CaseStudy.jsx":"fd2428aa2e53","ui_kits/portfolio/MainPage.jsx":"f340f6e1a742"},"inlinedExternals":[],"unexposedExports":[{"name":"roughDefs","sourcePath":"components/doodles/rough.jsx"},{"name":"useRoughId","sourcePath":"components/doodles/rough.jsx"}]} */

(() => {

const __ds_ns = (window.JunePortfolioDesignSystem_6caff1 = window.JunePortfolioDesignSystem_6caff1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  children,
  href,
  onRed = false,
  target,
  rel,
  onClick,
  type = 'button',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--space-2)',
    font: '500 17px/1.2 var(--font-body)',
    padding: '12px 20px',
    borderRadius: 'var(--radius)',
    border: 0,
    textDecoration: 'none',
    cursor: 'pointer'
  };
  const colors = onRed ? {
    background: 'var(--color-paper-light)',
    color: hover ? 'var(--color-primary-hover)' : 'var(--color-primary)'
  } : {
    background: hover ? 'var(--color-primary-hover)' : 'var(--color-primary)',
    color: 'var(--color-paper-light)'
  };
  const p = {
    style: {
      ...base,
      ...colors,
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick,
    ...rest
  };
  if (href) return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    target: target,
    rel: rel || (target === '_blank' ? 'noopener' : undefined)
  }, p), children);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type
  }, p), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TextLink({
  children,
  href = '#',
  onRed = false,
  target,
  rel,
  weight = 400,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const color = onRed ? 'var(--color-paper-light)' : hover ? 'var(--color-primary-hover)' : 'var(--color-primary)';
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    target: target,
    rel: rel || (target === '_blank' ? 'noopener' : undefined),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      color,
      fontFamily: 'var(--font-body)',
      fontWeight: weight,
      textDecoration: 'underline',
      textDecorationThickness: '1px',
      textUnderlineOffset: '3px',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/doodles/rough.jsx
try { (() => {
let roughCount = 0;
// One unique #rough filter id per instance (same displacement as the source #rough filter).
function useRoughId() {
  const ref = React.useRef(null);
  if (ref.current === null) {
    roughCount += 1;
    ref.current = 'rough-' + roughCount;
  }
  return ref.current;
}
function roughDefs(id) {
  return /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
    id: id
  }, /*#__PURE__*/React.createElement("feTurbulence", {
    type: "fractalNoise",
    baseFrequency: ".04",
    numOctaves: "2",
    seed: "3"
  }), /*#__PURE__*/React.createElement("feDisplacementMap", {
    in: "SourceGraphic",
    scale: "3"
  })));
}

// Hidden SVG holding the fuzzy-fibre filter used on torn HTML paper layers (CSS filter: url(#id)).
function FiberFilter({
  id,
  scale = 3.5
}) {
  return /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    width: "0",
    height: "0",
    style: {
      position: 'absolute',
      width: 0,
      height: 0
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
    id: id,
    x: "-5%",
    y: "-5%",
    width: "110%",
    height: "110%"
  }, /*#__PURE__*/React.createElement("feTurbulence", {
    type: "fractalNoise",
    baseFrequency: ".9 1.4",
    numOctaves: "3",
    seed: "7"
  }), /*#__PURE__*/React.createElement("feDisplacementMap", {
    in: "SourceGraphic",
    scale: scale
  }))));
}
Object.assign(__ds_scope, { useRoughId, roughDefs, FiberFilter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/doodles/rough.jsx", error: String((e && e.message) || e) }); }

// components/doodles/Doodle.jsx
try { (() => {
const DOODLE_VIEWBOX = {
  'ellipse': '0 0 360 110',
  'crayon-star': '0 0 100 100',
  'star': '0 0 100 100',
  'arrow': '0 0 100 100',
  'accents': '0 0 40 40'
};
function doodlePath(kind, f) {
  switch (kind) {
    case 'ellipse':
      return /*#__PURE__*/React.createElement("path", {
        d: "M20 52 C18 22 150 6 250 18 C330 28 352 64 300 84 C220 108 60 104 26 78 C8 64 30 40 70 30",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.5",
        strokeLinecap: "round",
        filter: f
      });
    case 'crayon-star':
      return /*#__PURE__*/React.createElement("path", {
        d: "M50 8 L52 92 M12 30 L88 70 M14 72 L86 28 M30 10 L70 90 M6 50 L94 50",
        stroke: "currentColor",
        strokeWidth: "5",
        strokeLinecap: "round",
        filter: f
      });
    case 'star':
      return /*#__PURE__*/React.createElement("path", {
        d: "M50 6 L61 38 L95 39 L67 59 L79 93 L50 71 L21 93 L34 58 L5 40 L40 37 Z",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "3",
        strokeLinejoin: "round",
        filter: f
      });
    case 'arrow':
      return /*#__PURE__*/React.createElement("path", {
        d: "M10 10 C60 0 92 40 70 82 M56 72 L70 84 L82 68",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "3",
        strokeLinecap: "round",
        filter: f
      });
    case 'accents':
      return /*#__PURE__*/React.createElement("path", {
        d: "M6 30 L14 22 M14 36 L20 26 M24 38 L26 28",
        stroke: "currentColor",
        strokeWidth: "3",
        strokeLinecap: "round",
        filter: f
      });
    default:
      return null;
  }
}
// Hand-drawn mark through the #rough filter. Ink: primary/ink on paper, paper-light on red.
function Doodle({
  kind = 'crayon-star',
  size = 64,
  width,
  height,
  color = 'var(--color-primary)',
  angle = 0,
  style
}) {
  const id = __ds_scope.useRoughId();
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-block',
      width: width || size,
      height: height || size,
      color,
      transform: angle ? 'rotate(' + angle + 'deg)' : undefined,
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: DOODLE_VIEWBOX[kind],
    preserveAspectRatio: kind === 'ellipse' ? 'none' : undefined,
    style: {
      display: 'block',
      width: '100%',
      height: '100%',
      overflow: 'visible'
    }
  }, __ds_scope.roughDefs(id), doodlePath(kind, 'url(#' + id + ')')));
}
Object.assign(__ds_scope, { Doodle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/doodles/Doodle.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
const ICON_PATHS = {
  'magnifier': ['2.4', 'M28 10 C38 9 45 17 44 27 C43 37 35 44 26 43 C16 42 10 34 11 25 C12 16 19 10 30 11 M37 38 L51 53 M40 35 L54 50 M51 53 C53 55 56 53 54 50 M19 22 C20 18 23 16 27 16'],
  'bar-chart': ['2.2', 'M10 9 C10 24 11 40 10 54 L55 55 M17 53 L17 39 L24 38 L24 53 M30 53 L31 27 L37 27 L37 54 M43 53 L44 17 L50 16 L50 53 M15 31 L28 22 L37 24 L52 9 M46 9 L52 9 L51 15'],
  'light-bulb': ['2.3', 'M32 9 C21 8 14 16 15 26 C16 33 21 37 23 42 L24 46 L41 46 L41 42 C43 37 49 33 49 25 C49 15 42 8 31 9 M24 50 L41 50 M26 54 L39 54 M29 58 L36 58 M27 41 C27 34 30 30 32 35 C34 30 37 34 37 41 M5 23 L10 24 M54 24 L59 22 M11 7 L15 11 M53 8 L49 12'],
  'pencil': ['2.3', 'M12 52 L42 14 C44 12 47 12 49 14 L51 16 C53 18 53 21 51 23 L21 60 L10 62 L12 52 M38 19 L47 27 M13 52 C16 52 19 55 21 59 M42 14 L50 21'],
  'checklist': ['2.2', 'M9 11 L20 12 L19 22 L10 21 Z M12 16 L15 20 L23 7 M28 17 L55 16 M9 28 L20 28 L20 38 L9 38 Z M12 32 L15 36 L23 24 M28 33 L50 33 M9 45 L20 44 L20 55 L10 55 Z M28 50 L54 49'],
  'medal': ['2.3', 'M22 35 L14 57 L21 54 L24 60 L31 40 M42 35 L50 57 L43 54 L40 60 L33 40 M32 8 C42 8 48 15 48 24 C48 34 41 40 32 40 C23 40 16 33 16 24 C16 15 23 8 34 9 M32 15 L34.5 21 L41 21 L36 25 L38 31 L32 27.5 L26 31 L28 25 L23 21 L29.5 21 Z'],
  'puzzle': ['2.3', 'M12 18 L25 18 C23 14 24 9 29 9 C34 9 35 14 33 18 L46 19 L46 30 C50 28 55 29 55 34 C55 39 50 40 46 38 L47 52 L33 52 C35 48 34 44 29 44 C24 44 23 48 25 52 L12 53 L12 39 C15 41 19 40 19 35 C19 30 15 29 12 31 Z']
};
// Hand-drawn black pen icon (#rough). 48-64px beside text, never inside a paragraph.
function Icon({
  name = 'light-bulb',
  size = 56,
  color = 'var(--color-ink)',
  label,
  style
}) {
  const id = __ds_scope.useRoughId();
  const def = ICON_PATHS[name] || ICON_PATHS['light-bulb'];
  return /*#__PURE__*/React.createElement("span", {
    role: label ? 'img' : undefined,
    "aria-label": label,
    "aria-hidden": label ? undefined : 'true',
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      color,
      flex: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 64 64",
    style: {
      display: 'block',
      width: '100%',
      height: '100%',
      overflow: 'visible'
    }
  }, __ds_scope.roughDefs(id), /*#__PURE__*/React.createElement("path", {
    d: def[1],
    fill: "none",
    stroke: "currentColor",
    strokeWidth: def[0],
    strokeLinecap: "round",
    strokeLinejoin: "round",
    filter: 'url(#' + id + ')'
  })));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/paper/GridPaper.jsx
try { (() => {
// Grid paper. Tilt rotates the paper only; children (text) stay level.
function GridPaper({
  as = 'div',
  tilt = 0,
  shadow = true,
  style,
  children,
  ...rest
}) {
  return React.createElement(as, {
    style: {
      position: 'relative',
      borderRadius: 0,
      ...style
    },
    ...rest
  }, React.createElement('div', {
    'aria-hidden': true,
    className: 'grid-paper',
    style: {
      position: 'absolute',
      inset: 0,
      transform: tilt ? 'rotate(' + tilt + 'deg)' : undefined,
      filter: shadow ? 'drop-shadow(var(--shadow-paper))' : undefined
    }
  }), React.createElement('div', {
    style: {
      position: 'relative'
    }
  }, children));
}
Object.assign(__ds_scope, { GridPaper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/paper/GridPaper.jsx", error: String((e && e.message) || e) }); }

// components/paper/PaperTexture.jsx
try { (() => {
function PaperTexture({
  ground = 'light',
  as = 'div',
  className = '',
  style,
  children,
  ...rest
}) {
  const mod = {
    red: ' paper--red',
    deep: ' paper--deep',
    paper: ' paper--warm'
  }[ground] || '';
  return React.createElement(as, {
    className: ('paper' + mod + ' ' + className).trim(),
    style,
    ...rest
  }, children);
}
Object.assign(__ds_scope, { PaperTexture });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/paper/PaperTexture.jsx", error: String((e && e.message) || e) }); }

// components/paper/TornEdge.jsx
try { (() => {
// Natural torn-paper boundary: gently wandering edge (not sawtooth) with the exposed paper core
// showing through as a fibrous, slightly translucent paper-light strip — like real ripped paper.
const TORN_PATHS = {
  1: {
    edge: "M0 -14 L0 0 L0 17.61 L12 16.28 L24 16.95 L36 16.31 L48 16.69 L60 14.57 L72 13.21 L84 10.49 L96 9.01 L108 8.38 L120 6.6 L132 7.06 L144 9.68 L156 10.8 L168 11.72 L180 12.47 L192 11.74 L204 12.54 L216 11.16 L228 10.35 L240 8.65 L252 8.97 L264 8.54 L276 9.24 L288 8.58 L300 7.67 L312 8.44 L324 9.61 L336 9.78 L348 10.99 L360 10.15 L372 10.91 L384 10.47 L396 9.6 L408 9.97 L420 9.19 L432 8.9 L444 9.58 L456 10.96 L468 10.85 L480 11.62 L492 12.09 L504 12.48 L516 13.08 L528 14.01 L540 14.45 L552 16.02 L564 16.58 L576 16.87 L588 17.86 L600 17.87 L612 19.19 L624 20.4 L636 19.9 L648 19.8 L660 20.43 L672 19.58 L684 17.74 L696 16.82 L708 15.46 L720 12.81 L732 11.09 L744 10.28 L756 10.17 L768 8.45 L780 8.42 L792 8.59 L804 8.61 L816 10.35 L828 10.83 L840 12.31 L852 12.73 L864 12.9 L876 12.73 L888 11.84 L900 12.16 L912 9.76 L924 9.98 L936 9.7 L948 9.38 L960 9.38 L972 9.69 L984 9.81 L996 10.84 L1008 10.84 L1020 11.22 L1032 11.37 L1044 13.68 L1056 15.33 L1068 16.97 L1080 18.48 L1092 20.25 L1104 19.5 L1116 18.9 L1128 18.29 L1140 17.03 L1152 15.16 L1164 12.29 L1176 10.86 L1188 9.25 L1200 8.95 L1212 8.49 L1224 8.17 L1236 8.34 L1248 7.06 L1260 7.16 L1272 7.96 L1284 7.07 L1296 8.34 L1308 9.25 L1320 9.43 L1332 10.78 L1344 12.07 L1356 11.15 L1368 12.14 L1380 10.37 L1392 9.57 L1404 8.53 L1416 8.25 L1428 7.9 L1440 9.51 L1440 0 L1440 -14 Z",
    core: "M0 2 L0 22.59 L12 21.06 L24 23.54 L36 19.95 L48 19.69 L60 17.07 L72 15.51 L84 13.13 L96 12.49 L108 12.97 L120 12.29 L132 13.59 L144 16.55 L156 17.57 L168 18.21 L180 18.61 L192 17.52 L204 20.17 L216 16.56 L228 15.56 L240 13.38 L252 13.07 L264 12.02 L276 14.78 L288 11.39 L300 10.85 L312 15.13 L324 14.91 L336 16.27 L348 18.4 L360 20.77 L372 18.72 L384 18.36 L396 17.58 L408 18.05 L420 17.34 L432 17.08 L444 19.84 L456 18.96 L468 18.69 L480 19.28 L492 19.63 L504 19.97 L516 20.19 L528 20.18 L540 21.24 L552 20.4 L564 19.35 L576 19.26 L588 20.32 L600 20.49 L612 22.02 L624 23.44 L636 23.1 L648 23.07 L660 24.08 L672 24.17 L684 23.55 L696 23.86 L708 24.87 L720 21.18 L732 19.28 L744 18.05 L756 17.4 L768 15.13 L780 14.68 L792 14.68 L804 14.66 L816 16.28 L828 16.61 L840 17.94 L852 18.25 L864 20.36 L876 18.3 L888 17.66 L900 18.31 L912 16.24 L924 16.71 L936 16.52 L948 16.06 L960 15.72 L972 15.58 L984 17.16 L996 15.93 L1008 15.8 L1020 15.99 L1032 15.66 L1044 17.35 L1056 18.37 L1068 19.54 L1080 22.11 L1092 22.67 L1104 22.01 L1116 23.85 L1128 21.06 L1140 19.9 L1152 18.07 L1164 15.18 L1176 13.67 L1188 12.43 L1200 11.58 L1212 11.04 L1224 10.69 L1236 11.04 L1248 10.2 L1260 10.88 L1272 12.26 L1284 11.81 L1296 13.25 L1308 14.21 L1320 14.51 L1332 16.01 L1344 17.46 L1356 16.65 L1368 17.69 L1380 16.16 L1392 15.97 L1404 15.72 L1416 16.24 L1428 16.49 L1440 18.35 L1440 0 Z",
    haze: "M0 2 L0 25.53 L12 23.62 L24 25.83 L36 22.12 L48 22.05 L60 19.92 L72 18.99 L84 17.23 L96 17.08 L108 17.75 L120 17.01 L132 18.16 L144 20.91 L156 21.73 L168 22.22 L180 22.55 L192 21.36 L204 23.73 L216 19.76 L228 18.41 L240 15.96 L252 15.53 L264 14.69 L276 17.98 L288 15.27 L300 15.41 L312 20.23 L324 20.22 L336 21.59 L348 23.76 L360 26.19 L372 24.2 L384 23.87 L396 23.11 L408 23.55 L420 22.77 L432 22.42 L444 25.08 L456 24.12 L468 23.82 L480 24.2 L492 24.01 L504 23.65 L516 23.17 L528 22.62 L540 23.47 L552 22.66 L564 21.71 L576 21.73 L588 22.91 L600 23.18 L612 24.74 L624 26.37 L636 26.58 L648 27.25 L660 28.96 L672 29.59 L684 29.19 L696 29.4 L708 30.17 L720 26.16 L732 23.96 L744 22.48 L756 21.73 L768 19.44 L780 18.92 L792 18.84 L804 18.73 L816 20.29 L828 20.6 L840 21.98 L852 22.43 L864 24.73 L876 22.86 L888 22.36 L900 23.06 L912 20.92 L924 21.19 L936 20.74 L948 20.03 L960 19.48 L972 19.27 L984 20.74 L996 19.24 L1008 18.75 L1020 18.58 L1032 17.98 L1044 19.56 L1056 20.61 L1068 21.83 L1080 24.48 L1092 25.11 L1104 24.51 L1116 26.37 L1128 23.57 L1140 22.37 L1152 20.48 L1164 17.53 L1176 15.98 L1188 14.73 L1200 13.98 L1212 13.7 L1224 13.68 L1236 14.36 L1248 13.76 L1260 14.55 L1272 15.95 L1284 15.57 L1296 17.1 L1308 18.14 L1320 18.51 L1332 20.04 L1344 21.62 L1356 21.17 L1368 22.66 L1380 21.58 L1392 21.74 L1404 21.63 L1416 21.87 L1428 21.44 L1440 22.42 L1440 0 Z"
  },
  2: {
    edge: "M0 -14 L0 0 L0 17.53 L12 17.82 L24 17.74 L36 17.32 L48 17.9 L60 16.01 L72 15.8 L84 14.71 L96 15.71 L108 15.92 L120 14.45 L132 14.55 L144 13.06 L156 12.91 L168 13.56 L180 14.22 L192 12.65 L204 12.35 L216 11.59 L228 11.15 L240 10.93 L252 11.14 L264 12.15 L276 13.29 L288 15.09 L300 17.8 L312 19.68 L324 19.16 L336 19.8 L348 18.93 L360 18.89 L372 19.35 L384 18.66 L396 18.21 L408 17.97 L420 17.98 L432 18.29 L444 16.92 L456 16.66 L468 18.12 L480 18.4 L492 18.61 L504 18.88 L516 19.91 L528 20.1 L540 20.29 L552 21.25 L564 21.45 L576 23.38 L588 23.5 L600 23.18 L612 21.43 L624 22.24 L636 21.17 L648 20.34 L660 19.67 L672 20.56 L684 22.64 L696 24.08 L708 25.36 L720 25.27 L732 24.6 L744 23.94 L756 24.01 L768 25.01 L780 23.22 L792 23 L804 21.9 L816 21.37 L828 20.47 L840 17.99 L852 17.54 L864 17.14 L876 16.56 L888 16.16 L900 18.16 L912 19.63 L924 22.11 L936 23.59 L948 25.08 L960 24.29 L972 23.96 L984 24.16 L996 24.03 L1008 24.38 L1020 25.73 L1032 27 L1044 28.74 L1056 29.17 L1068 30.53 L1080 30.25 L1092 30.84 L1104 29.41 L1116 29.19 L1128 28.28 L1140 26.82 L1152 25.51 L1164 24.45 L1176 21.32 L1188 19.63 L1200 18.94 L1212 18.03 L1224 16.92 L1236 16.67 L1248 16.72 L1260 17.47 L1272 17.63 L1284 18.07 L1296 18.97 L1308 18.41 L1320 18.59 L1332 17.14 L1344 14.69 L1356 15.22 L1368 13.62 L1380 13.49 L1392 11.97 L1404 12.77 L1416 14.09 L1428 14.99 L1440 15.37 L1440 0 L1440 -14 Z",
    core: "M0 2 L0 23.19 L12 26.47 L24 24.14 L36 24.39 L48 25.65 L60 24.29 L72 24.29 L84 22.85 L96 22.97 L108 22.04 L120 19.44 L132 18.65 L144 18.38 L156 16.57 L168 16.97 L180 17.31 L192 15.41 L204 14.86 L216 14 L228 14.33 L240 15.82 L252 14.65 L264 16.19 L276 17.74 L288 19.7 L300 22.43 L312 24.37 L324 23.92 L336 25.2 L348 23.82 L360 23.8 L372 24.23 L384 23.45 L396 22.88 L408 23 L420 22.44 L432 22.72 L444 21.19 L456 20.54 L468 21.5 L480 21.28 L492 21.1 L504 21.22 L516 22.5 L528 23.31 L540 24.31 L552 26.08 L564 26.9 L576 29.08 L588 30.09 L600 28.15 L612 25.72 L624 28.63 L636 24.25 L648 23.23 L660 22.6 L672 23.61 L684 25.86 L696 27.46 L708 28.87 L720 28.83 L732 28.06 L744 27.13 L756 26.86 L768 27.52 L780 25.47 L792 25.14 L804 24.29 L816 24.4 L828 24.32 L840 22.66 L852 22.84 L864 22.69 L876 22.11 L888 21.71 L900 23.72 L912 25.19 L924 28.03 L936 29.15 L948 30.68 L960 31.25 L972 29.75 L984 30.06 L996 30.03 L1008 30.41 L1020 32.74 L1032 32.52 L1044 33.77 L1056 34.13 L1068 34.71 L1080 34.28 L1092 35.03 L1104 33.99 L1116 34.27 L1128 33.86 L1140 32.8 L1152 31.64 L1164 30.52 L1176 27.24 L1188 25.36 L1200 24.47 L1212 23.41 L1224 22.25 L1236 22.02 L1248 22.15 L1260 22.99 L1272 23.25 L1284 23.77 L1296 24.7 L1308 23.89 L1320 23.43 L1332 21.17 L1344 17.9 L1356 17.79 L1368 15.95 L1380 16.27 L1392 14.77 L1404 16.01 L1416 17.77 L1428 19.01 L1440 19.52 L1440 0 Z",
    haze: "M0 2 L0 28.09 L12 31.76 L24 29.73 L36 30.1 L48 31.16 L60 29.29 L72 28.64 L84 26.55 L96 26.17 L108 25.04 L120 22.38 L132 21.46 L144 21 L156 19.01 L168 19.26 L180 19.54 L192 17.74 L204 17.43 L216 16.87 L228 17.5 L240 19.21 L252 18.14 L264 19.69 L276 21.27 L288 23.28 L300 26.05 L312 28.02 L324 27.59 L336 28.85 L348 27.41 L360 27.33 L372 27.69 L384 26.85 L396 26.27 L408 26.3 L420 25.52 L432 25.5 L444 23.69 L456 22.83 L468 23.69 L480 23.62 L492 23.79 L504 24.37 L516 26.12 L528 27.28 L540 28.42 L552 30.08 L564 30.6 L576 32.39 L588 33.01 L600 30.77 L612 28.22 L624 31.16 L636 26.85 L648 25.93 L660 25.39 L672 26.47 L684 28.75 L696 30.29 L708 31.55 L720 31.31 L732 30.35 L744 29.27 L756 28.94 L768 29.74 L780 28.05 L792 28.19 L804 27.81 L816 28.28 L828 28.34 L840 26.68 L852 26.87 L864 26.72 L876 26.15 L888 25.75 L900 27.75 L912 29.24 L924 32.14 L936 33.32 L948 34.91 L960 35.53 L972 34.06 L984 34.28 L996 34.04 L1008 34.15 L1020 36.2 L1032 35.77 L1044 36.94 L1056 37.38 L1068 38.18 L1080 38.05 L1092 39.08 L1104 38.26 L1116 38.63 L1128 38.19 L1140 37.04 L1152 35.77 L1164 34.54 L1176 31.17 L1188 29.26 L1200 28.39 L1212 27.37 L1224 26.27 L1236 26.1 L1248 26.27 L1260 27.13 L1272 27.24 L1284 27.4 L1296 27.86 L1308 26.58 L1320 25.76 L1332 23.36 L1344 20.17 L1356 20.25 L1368 18.66 L1380 19.23 L1392 17.92 L1404 19.23 L1416 21.18 L1428 22.88 L1440 23.99 L1440 0 Z"
  },
  3: {
    edge: "M0 -14 L0 0 L0 16.9 L12 17.78 L24 17.6 L36 17.18 L48 18.63 L60 17.88 L72 16.76 L84 16.69 L96 17.35 L108 16.83 L120 15.85 L132 15.77 L144 17.68 L156 19.01 L168 20.38 L180 20.55 L192 20.83 L204 21.52 L216 21.47 L228 21.21 L240 19.63 L252 18.2 L264 18.83 L276 15.78 L288 14.53 L300 13.68 L312 13.11 L324 13.28 L336 15.94 L348 18.14 L360 20.17 L372 21.1 L384 22.02 L396 23.12 L408 22.11 L420 22.16 L432 22.11 L444 22.83 L456 25.14 L468 26.88 L480 30.29 L492 32.03 L504 34.29 L516 33.64 L528 33.47 L540 32.98 L552 31.59 L564 30.88 L576 30.83 L588 29.93 L600 28.79 L612 28.9 L624 27.3 L636 27.42 L648 25.87 L660 25.96 L672 25.94 L684 25.58 L696 25.81 L708 24.38 L720 23.33 L732 21.51 L744 20.28 L756 19.91 L768 19.59 L780 19.45 L792 19.08 L804 21.04 L816 22.49 L828 23.86 L840 25.97 L852 27.19 L864 29.09 L876 29.88 L888 30.91 L900 30.7 L912 31.31 L924 29.55 L936 30.01 L948 29.4 L960 28.95 L972 28.28 L984 26.87 L996 27.1 L1008 26.79 L1020 27.24 L1032 26.86 L1044 26.42 L1056 26.5 L1068 27.11 L1080 27.23 L1092 26.87 L1104 24.91 L1116 24.96 L1128 25.4 L1140 26.2 L1152 26.74 L1164 28.27 L1176 30.68 L1188 32.96 L1200 34.32 L1212 35.83 L1224 35.54 L1236 34.5 L1248 34.3 L1260 33.89 L1272 33.81 L1284 32.99 L1296 33.85 L1308 33.13 L1320 33.99 L1332 34.66 L1344 32.79 L1356 31.69 L1368 29.61 L1380 27.79 L1392 26.42 L1404 23.04 L1416 20.53 L1428 19.96 L1440 20.25 L1440 0 L1440 -14 Z",
    core: "M0 2 L0 25.63 L12 28.19 L24 26.27 L36 23.18 L48 23.32 L60 21.56 L72 20.03 L84 20.14 L96 21.24 L108 23.24 L120 20.9 L132 21.26 L144 23.35 L156 24.81 L168 26.52 L180 27.13 L192 27.85 L204 28.88 L216 28.96 L228 28.52 L240 26.49 L252 24.46 L264 24.5 L276 23.37 L288 19.56 L300 18.69 L312 18.08 L324 18.19 L336 20.79 L348 22.94 L360 24.96 L372 25.71 L384 26.2 L396 29.09 L408 25.17 L420 24.79 L432 24.56 L444 25.5 L456 28.37 L468 30.82 L480 34.94 L492 37.24 L504 39.72 L516 38.81 L528 38.01 L540 36.7 L552 34.49 L564 33.14 L576 32.84 L588 32.27 L600 31.95 L612 33.13 L624 32.59 L636 33.53 L648 32.31 L660 32.54 L672 32.89 L684 33 L696 33.7 L708 32.63 L720 31.73 L732 32.42 L744 27.78 L756 26.58 L768 25.42 L780 24.65 L792 24.02 L804 25.9 L816 27.12 L828 28.2 L840 30.02 L852 31.01 L864 32.82 L876 33.76 L888 35.18 L900 35.46 L912 36.56 L924 35.18 L936 35.79 L948 35.41 L960 35.51 L972 35.57 L984 34.88 L996 35.67 L1008 35.58 L1020 35.62 L1032 34.2 L1044 32.42 L1056 31.15 L1068 32.32 L1080 30.44 L1092 31 L1104 29.12 L1116 30.12 L1128 31.5 L1140 33.02 L1152 33.84 L1164 35.13 L1176 36.93 L1188 38.4 L1200 38.95 L1212 39.84 L1224 39.31 L1236 38.29 L1248 38.14 L1260 37.81 L1272 37.8 L1284 37.03 L1296 37.92 L1308 37.29 L1320 40.98 L1332 39.36 L1344 37.78 L1356 36.92 L1368 34.94 L1380 34.68 L1392 31.59 L1404 28.07 L1416 25.42 L1428 24.74 L1440 24.99 L1440 0 Z",
    haze: "M0 2 L0 29.92 L12 31.72 L24 29.23 L36 25.91 L48 26.14 L60 24.64 L72 23.44 L84 23.88 L96 25.24 L108 27.34 L120 25.07 L132 25.63 L144 27.97 L156 29.68 L168 31.58 L180 32.27 L192 32.89 L204 33.65 L216 33.4 L228 32.61 L240 30.32 L252 28.2 L264 28.22 L276 27.07 L288 23.22 L300 22.32 L312 21.68 L324 21.78 L336 24.29 L348 26.19 L360 27.89 L372 28.32 L384 28.55 L396 31.35 L408 27.55 L420 27.49 L432 27.67 L444 29.02 L456 32.2 L468 34.78 L480 38.76 L492 40.7 L504 42.7 L516 41.33 L528 40.16 L540 38.71 L552 36.68 L564 35.81 L576 36.12 L588 36.15 L600 36.29 L612 37.66 L624 37.21 L636 38.36 L648 37.4 L660 37.91 L672 38.46 L684 38.66 L696 39.21 L708 37.78 L720 36.39 L732 36.61 L744 31.61 L756 30.26 L768 29.06 L780 28.15 L792 27.35 L804 29.07 L816 30.16 L828 31.19 L840 33.1 L852 34.31 L864 36.39 L876 37.62 L888 39.26 L900 39.63 L912 40.85 L924 39.79 L936 40.81 L948 40.84 L960 41.26 L972 41.45 L984 40.52 L996 40.72 L1008 39.86 L1020 39.13 L1032 37.12 L1044 35.1 L1056 34.01 L1068 35.59 L1080 34.24 L1092 35.34 L1104 33.88 L1116 35.03 L1128 36.28 L1140 37.44 L1152 37.81 L1164 38.63 L1176 40.08 L1188 41.41 L1200 41.98 L1212 42.9 L1224 42.4 L1236 41.42 L1248 41.31 L1260 40.99 L1272 41.03 L1284 40.4 L1296 41.46 L1308 41 L1320 44.83 L1332 43.26 L1344 41.66 L1356 40.73 L1368 38.67 L1380 38.33 L1392 35.18 L1404 31.64 L1416 29.02 L1428 28.42 L1440 28.79 L1440 0 Z"
  }
};
const TORN_CLASSES = {
  red: 'paper paper--red',
  light: 'paper',
  paper: 'paper paper--warm',
  deep: 'paper paper--deep'
};
const tornMask = d => 'url("data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -14 1440 70" preserveAspectRatio="none"><path d="' + d + '"/></svg>') + '")';
// Place as the LAST child of the upper section. "from" = the upper section's ground.
// The tear fill uses the SAME .paper texture class as the section above, so there is no colour seam.
function TornEdge({
  tear = 1,
  from = 'red',
  to,
  depth = 56,
  style
}) {
  const fiber = to !== 'red';
  const id = __ds_scope.useRoughId();
  const t = TORN_PATHS[tear] || TORN_PATHS[1];
  const m = tornMask(t.edge);
  // Align the tear's texture with the section above so grain/mottling continue without a seam.
  const fillRef = React.useRef(null);
  React.useLayoutEffect(() => {
    const el = fillRef.current;
    const sec = el && el.closest('section');
    if (!sec) return;
    const sync = () => {
      const a = el.getBoundingClientRect(),
        b = sec.getBoundingClientRect();
      el.style.backgroundPosition = b.left - a.left + 'px ' + (b.top - a.top) + 'px';
    };
    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(sec);
    return () => ro.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'relative',
      height: depth,
      marginBottom: -depth,
      zIndex: 2,
      pointerEvents: 'none',
      filter: fiber ? undefined : 'drop-shadow(var(--shadow-paper))',
      clipPath: 'inset(' + -14 * depth / 56 + 'px -40px -40px -40px)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 1440 56",
    preserveAspectRatio: "none",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      display: 'block',
      overflow: 'visible',
      filter: 'drop-shadow(var(--shadow-paper))'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
    id: id + '-fiber',
    x: "-2%",
    y: "-30%",
    width: "104%",
    height: "180%"
  }, /*#__PURE__*/React.createElement("feTurbulence", {
    type: "fractalNoise",
    baseFrequency: ".9 1.6",
    numOctaves: "3",
    seed: "7"
  }), /*#__PURE__*/React.createElement("feDisplacementMap", {
    in: "SourceGraphic",
    scale: "3.5"
  }))), fiber && /*#__PURE__*/React.createElement("path", {
    d: t.haze,
    fill: "var(--color-paper-light)",
    opacity: ".3",
    filter: 'url(#' + id + '-fiber)'
  }), fiber && /*#__PURE__*/React.createElement("path", {
    d: t.core,
    fill: "var(--color-paper-light)",
    opacity: ".92",
    filter: 'url(#' + id + '-fiber)'
  })), /*#__PURE__*/React.createElement("div", {
    ref: fillRef,
    className: TORN_CLASSES[from] || 'paper',
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: -14 * depth / 56,
      height: 70 * depth / 56,
      WebkitMaskImage: m,
      maskImage: m,
      WebkitMaskSize: '100% 100%',
      maskSize: '100% 100%',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat'
    }
  }));
}
Object.assign(__ds_scope, { TornEdge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/paper/TornEdge.jsx", error: String((e && e.message) || e) }); }

// components/cover/Cover.jsx
try { (() => {
// Red-paper opening (or closing) page. slant=0: torn edge TORN-1 across the bottom.
// slant (deg): the red sheet is torn diagonally at ~3/4 height with a deeper, rougher tear; paper-light shows below.
function Cover({
  eyebrow = 'Portfolio',
  title,
  script = 'Meet June',
  tear = 1,
  torn = true,
  slant = 0,
  height = 'var(--cover-height)',
  minHeight = 'var(--cover-min)',
  children,
  style
}) {
  const content = /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 3,
      height: slant ? '72%' : height,
      minHeight: slant ? 0 : minHeight,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: 'var(--color-paper-light)',
      padding: '0 var(--space-4)',
      boxSizing: 'border-box'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 13px/1.3 var(--font-body)',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      marginBottom: 'var(--space-4)'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: 'italic 400 120px/1.0 var(--font-display)'
    }
  }, title), script && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 72px/1.0 var(--font-script)',
      marginTop: -12,
      marginLeft: 160
    }
  }, script), children);
  if (!slant) return /*#__PURE__*/React.createElement("section", {
    className: "paper paper--red",
    style: {
      position: 'relative',
      ...style
    }
  }, content, torn && /*#__PURE__*/React.createElement(__ds_scope.TornEdge, {
    tear: tear,
    from: "red"
  }));
  return /*#__PURE__*/React.createElement("section", {
    className: "paper",
    style: {
      position: 'relative',
      overflow: 'hidden',
      height,
      minHeight,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "paper paper--red",
    style: {
      position: 'absolute',
      left: '-15%',
      width: '130%',
      top: '-60%',
      height: 'calc(60% + 75%)',
      transform: 'rotate(' + -slant + 'deg)',
      transformOrigin: '50% 100%'
    }
  }, torn && /*#__PURE__*/React.createElement(__ds_scope.TornEdge, {
    tear: tear,
    from: "red",
    depth: 96,
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: '100%',
      marginBottom: 0
    }
  })), content);
}
Object.assign(__ds_scope, { Cover });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cover/Cover.jsx", error: String((e && e.message) || e) }); }

// components/sheets/SpeechBubble.jsx
try { (() => {
// Angle tilts the torn paper only; the text stays level.
function SpeechBubble({
  children,
  angle = 0,
  style
}) {
  const id = __ds_scope.useRoughId();
  const f = 'url(#' + id + ')';
  const rot = angle ? 'rotate(' + angle + 'deg)' : '';
  const layer = (inset, bg, extra = {}) => /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset,
      filter: f,
      ...extra,
      transform: (rot + ' ' + (extra.transform || '')).trim() || undefined
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: bg,
      clipPath: 'var(--torn-bubble)'
    }
  }));
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-block',
      filter: 'drop-shadow(var(--shadow-paper))',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.FiberFilter, {
    id: id,
    scale: 3
  }), layer(0, 'var(--color-primary)', {
    transform: 'translate(-12px, 12px)'
  }), layer(-4, 'var(--color-paper-light)', {
    opacity: .3
  }), layer(-3, 'var(--color-paper-light)', {
    opacity: .92
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--color-paper-light)',
      clipPath: 'var(--torn-bubble)',
      transform: rot || undefined
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 168,
      minHeight: 112,
      padding: '16px 32px 36px',
      boxSizing: 'border-box',
      color: 'var(--color-primary)',
      font: 'italic 400 20px/1.1 var(--font-display)'
    }
  }, children));
}
Object.assign(__ds_scope, { SpeechBubble });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sheets/SpeechBubble.jsx", error: String((e && e.message) || e) }); }

// components/sheets/TornSheet.jsx
try { (() => {
const TORN_CLIPS = {
  sheet: 'var(--torn-sheet)',
  label: 'var(--torn-label)',
  band: 'var(--torn-band)',
  bubble: 'var(--torn-bubble)'
};
// Paper-light torn sheet over a red backing shifted down-left so red shows at the torn edge.
// Natural tear: gently wandering clip + translucent fibrous paper-core fringe.
// Tilt rotates the paper (and its decorations) only — text content always stays level.
function TornSheet({
  children,
  tilt = -0.8,
  padding = 'var(--space-6)',
  offset = 14,
  backing = true,
  shape = 'sheet',
  paper = 'light',
  fiber = true,
  decorations,
  style,
  innerStyle
}) {
  const id = __ds_scope.useRoughId();
  const clip = TORN_CLIPS[shape] || TORN_CLIPS.sheet;
  const bg = paper === 'red' ? 'var(--color-primary)' : 'var(--color-paper-light)';
  const f = 'url(#' + id + ')';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      ...style
    }
  }, fiber && /*#__PURE__*/React.createElement(__ds_scope.FiberFilter, {
    id: id
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      filter: 'drop-shadow(var(--shadow-paper))',
      transform: tilt ? 'rotate(' + tilt + 'deg)' : undefined
    }
  }, backing && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      transform: 'translate(-' + offset + 'px, ' + offset + 'px)',
      filter: fiber ? f : undefined
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--color-primary)',
      clipPath: clip
    }
  })), fiber && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: -5,
      opacity: .3,
      filter: f
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--color-paper-light)',
      clipPath: clip
    }
  })), fiber && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: -3,
      opacity: .92,
      filter: f
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--color-paper-light)',
      clipPath: clip
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: bg,
      clipPath: clip
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding,
      ...innerStyle
    }
  }, children), decorations && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      transform: tilt ? 'rotate(' + tilt + 'deg)' : undefined
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      pointerEvents: 'auto'
    }
  }, decorations)));
}
Object.assign(__ds_scope, { TornSheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sheets/TornSheet.jsx", error: String((e && e.message) || e) }); }

// components/tags/Tag.jsx
try { (() => {
function Tag({
  children,
  onRed = false,
  variant = 'outline',
  angle = 0,
  style
}) {
  const id = __ds_scope.useRoughId();
  const font = '500 15px/1.2 var(--font-body)';
  if (variant === 'torn') {
    const rot = angle ? 'rotate(' + angle + 'deg)' : undefined;
    return /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'relative',
        display: 'inline-block',
        filter: 'drop-shadow(var(--shadow-paper))',
        ...style
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.FiberFilter, {
      id: id,
      scale: 2.5
    }), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        inset: -3,
        opacity: .3,
        filter: 'url(#' + id + ')',
        transform: rot
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'var(--color-paper-light)',
        clipPath: 'var(--torn-label)'
      }
    })), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        inset: -2,
        opacity: .92,
        filter: 'url(#' + id + ')',
        transform: rot
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'var(--color-paper-light)',
        clipPath: 'var(--torn-label)'
      }
    })), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        inset: 0,
        background: 'var(--color-paper-light)',
        clipPath: 'var(--torn-label)',
        transform: rot
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'relative',
        display: 'inline-block',
        font,
        color: 'var(--color-ink)',
        padding: '9px 16px'
      }
    }, children));
  }
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      font,
      padding: '6px 12px',
      border: '1px solid ' + (onRed ? 'var(--color-paper-light)' : 'var(--color-charcoal)'),
      borderRadius: 'var(--radius)',
      color: onRed ? 'var(--color-paper-light)' : 'var(--color-ink)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tags/Tag.jsx", error: String((e && e.message) || e) }); }

// components/tape/Tape.jsx
try { (() => {
const TAPE_POS = {
  tl: {
    top: -14,
    left: -18
  },
  tr: {
    top: -14,
    right: -18
  },
  tc: {
    top: -16,
    left: '50%'
  },
  bl: {
    bottom: -14,
    left: -18
  },
  br: {
    bottom: -14,
    right: -18
  }
};
function Tape({
  color = 'beige',
  width = 120,
  angle = -6,
  position,
  style
}) {
  const pos = TAPE_POS[position] || {};
  const center = position === 'tc' ? {
    marginLeft: -width / 2
  } : {};
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: 'tape-img tape-img--' + color,
    style: {
      position: position ? 'absolute' : 'relative',
      width,
      transform: 'rotate(' + angle + 'deg)',
      zIndex: 3,
      ...pos,
      ...center,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Tape });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tape/Tape.jsx", error: String((e && e.message) || e) }); }

// components/cards/PaperCard.jsx
try { (() => {
// Square paper-light card (project card). Pass number/label/title/description/tags, or children.
// With image: photo runs edge-to-edge on top (16:9), body padded below, optional "Read the case →" link line.
function PaperCard({
  number,
  label,
  title,
  description,
  tags = [],
  image,
  imageAlt = '',
  imageRatio = '16/9',
  linkText,
  tape = {
    color: 'red',
    angle: -9,
    width: 104,
    position: 'tl'
  },
  padding = 'var(--space-5)',
  onClick,
  href,
  style,
  children
}) {
  const body = children || /*#__PURE__*/React.createElement(React.Fragment, null, (number || label) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: image ? 'column' : 'row',
      gap: image ? 'var(--space-3)' : 'var(--space-3)',
      alignItems: image ? 'flex-start' : 'baseline'
    }
  }, number && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'italic 400 48px/1.0 var(--font-display)',
      color: 'var(--color-primary)'
    }
  }, number), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 13px/1.3 var(--font-body)',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--color-charcoal)'
    }
  }, label)), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '12px 0 8px',
      font: 'italic 400 24px/1.25 var(--font-display)',
      color: 'var(--color-ink)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 16px',
      font: '400 15px/1.5 var(--font-body)',
      color: 'var(--color-charcoal)'
    }
  }, description), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-2)'
    }
  }, tags.map((t, i) => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: i
  }, t))), linkText && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)',
      font: '500 13px/1.3 var(--font-body)',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--color-primary)'
    }
  }, linkText));
  const s = {
    position: 'relative',
    display: image ? 'flex' : 'block',
    flexDirection: 'column',
    background: 'var(--color-paper-light)',
    borderRadius: 0,
    filter: 'drop-shadow(var(--shadow-paper))',
    padding: image ? 0 : padding,
    color: 'inherit',
    textDecoration: 'none',
    cursor: onClick || href ? 'pointer' : undefined,
    ...style
  };
  const media = image && (typeof image === 'string' ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      display: 'block',
      width: '100%',
      aspectRatio: imageRatio,
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: imageRatio,
      overflow: 'hidden'
    }
  }, image));
  const inner = image ? /*#__PURE__*/React.createElement(React.Fragment, null, media, /*#__PURE__*/React.createElement("div", {
    style: {
      padding,
      flex: 1
    }
  }, body), tape && /*#__PURE__*/React.createElement(__ds_scope.Tape, tape)) : /*#__PURE__*/React.createElement(React.Fragment, null, tape && /*#__PURE__*/React.createElement(__ds_scope.Tape, tape), body);
  return href ? /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    style: s
  }, inner) : /*#__PURE__*/React.createElement("article", {
    onClick: onClick,
    style: s
  }, inner);
}
Object.assign(__ds_scope, { PaperCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/PaperCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/QrCard.jsx
try { (() => {
// QR on a taped paper-light card. The QR itself is never tilted. Hide below 768px (button only).
function QrCard({
  src,
  size = 128,
  alt = 'QR code: Instagram @drawin_june',
  tape = {
    color: 'beige',
    angle: 6,
    width: 96,
    position: 'tc'
  },
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-block',
      background: 'var(--color-paper-light)',
      padding: 'var(--space-3)',
      filter: 'drop-shadow(var(--shadow-paper))',
      ...style
    }
  }, tape && /*#__PURE__*/React.createElement(__ds_scope.Tape, tape), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      display: 'block',
      width: size,
      height: size,
      transform: 'rotate(var(--tilt-qr))'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    role: "img",
    "aria-label": alt,
    className: "qr-img--drawin-june",
    style: {
      width: size,
      height: size
    }
  }));
}
Object.assign(__ds_scope, { QrCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/QrCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/CaseStudy.jsx
try { (() => {
// June Portfolio — case-study page (think ( ) wise layout for every project).
const CS = new Proxy({}, {
  get: (_, k) => (window.JunePortfolioDesignSystem_6caff1 || {})[k]
});
const csLabel = {
  font: '500 13px/1.3 var(--font-body)',
  letterSpacing: '.12em',
  textTransform: 'uppercase'
};
const csBody = {
  margin: 0,
  font: '400 17px/1.5 var(--font-body)',
  textAlign: 'left',
  hyphens: 'manual'
};
const csPh = {
  color: 'var(--color-charcoal)'
};
const CS_DATA = {
  think: {
    eyebrow: 'UCD Smurfit · Student Advert Competition 2026',
    title: 'think ( ) wise',
    overview: [['Project', 'Student Advert Competition 2026'], ['Theme', 'Think Otherwise'], ['Role', 'Director'], ['Format', 'Brand film, 2 min']],
    owned: ['Concept', 'Storytelling', 'Filming', 'Edit'],
    portrait: true,
    role: ['For the UCD Smurfit Student Advert Competition, I led the team that turned the theme "Think Otherwise" into think ( ) wise, a brand film for prospective students. I developed the concept: an open bracket that each scene fills with a different side of the Smurfit experience, from perspective to approach to career.', 'As director, I carried the film from end to end, through storytelling, filming and the final edit, all within the two-minute limit. Keeping one person across the whole chain meant the idea stayed intact from the first sketch to the final cut.']
  },
  tinder: {
    eyebrow: '[Eyebrow from the live site]',
    title: 'Tinder × Boiler Room',
    overview: [['Project', 'Live commercial brief'], ['Theme', '[from site]'], ['Role', 'Creative lead'], ['Format', 'Pitch deck']],
    owned: ['Creative lead', 'Storytelling', 'Mock-ups'],
    portrait: false,
    role: ['On a live commercial brief from Tinder, our team was asked to grow monthly active users across EMEA. I took the creative lead, shaping the campaign concept and making sure every idea in the deck traced back to that one growth objective.', 'I built the presentation\u2019s storytelling and narrative arc, then produced the visual mock-ups that carried the concept through every slide. The aim was a pitch that already looked like a running campaign, not a proposal on paper.']
  },
  d8crate: {
    eyebrow: '[Eyebrow from the live site]',
    title: 'D8CRATE',
    overview: [['Project', 'At-home date-night box'], ['Theme', '[from site]'], ['Role', 'Digital lead'], ['Format', 'Website · social']],
    owned: ['Website', 'Google Analytics', 'Content calendar', 'AI imagery'],
    portrait: false,
    role: ['D8CRATE was a fictional at-home date-night box, and I owned its digital side from the ground up. I built the website and set up Google Analytics so that every decision after launch could be checked against real visitor behaviour.', 'For two months I ran the brand\u2019s social channels: planning the content calendar, publishing posts and creating the product imagery with AI tools. I tracked performance in Google Analytics and used what I learned to shape the next round of content.']
  },
  a2: {
    eyebrow: 'Bigband',
    title: 'A2 Milk (Yonsei Milk)',
    overview: [['Project', 'A2 milk launch'], ['Theme', 'A mother\u2019s choice'], ['Role', '[to confirm]'], ['Format', '[from site]']],
    owned: ['Strategy', 'Positioning'],
    portrait: false,
    role: ['At Bigband I was [role to confirm] on Yonsei Milk\u2019s A2 milk launch, working against a five-month window before Seoul Milk entered the category. My part was turning three product truths into a strategy that could win awareness and conversion before that entry.', 'I helped reframe the product from "milk for children" to "a mother\u2019s choice" and [what I ran directly]. [One sentence tying it to the result.]']
  }
};
function CSImg({
  label,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-paper-deep)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...csLabel,
      color: 'var(--color-charcoal)',
      textAlign: 'center',
      padding: 12
    }
  }, label));
}
function CaseHero({
  d
}) {
  const {
    Tag,
    Tape,
    TornEdge
  } = CS;
  return /*#__PURE__*/React.createElement("section", {
    className: "paper paper--red",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-8) var(--space-5) var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '45fr 55fr',
      gap: 'var(--space-7)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...csLabel,
      color: 'var(--color-paper-light)'
    }
  }, d.eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 'var(--space-3) 0 0',
      font: 'italic 400 56px/1.1 var(--font-display)'
    }
  }, d.title), /*#__PURE__*/React.createElement("p", {
    style: {
      ...csBody,
      maxWidth: 520,
      marginTop: 'var(--space-4)'
    }
  }, "[Short project description from the live site, body 16/1.5, max 520px.]"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)',
      paddingTop: 'var(--space-4)',
      borderTop: '1px solid rgba(250,246,236,.4)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4) var(--space-5)'
    }
  }, d.overview.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...csLabel,
      color: 'var(--color-paper-light)'
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 17px/1.5 var(--font-body)',
      marginTop: 4
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...csLabel,
      color: 'var(--color-paper-light)',
      marginBottom: 'var(--space-3)'
    }
  }, "What I owned"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-2)'
    }
  }, d.owned.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    onRed: true
  }, t))))), d.portrait ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 520
    }
  }, /*#__PURE__*/React.createElement(CSImg, {
    label: "9:16 still",
    style: {
      position: 'absolute',
      left: '8%',
      top: 0,
      width: '42%',
      aspectRatio: '9/16',
      background: 'var(--color-paper-deep)'
    }
  }), /*#__PURE__*/React.createElement(CSImg, {
    label: "9:16 still",
    style: {
      position: 'absolute',
      right: '6%',
      top: 48,
      width: '42%',
      aspectRatio: '9/16',
      background: 'var(--color-paper-light)'
    }
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      transform: 'rotate(var(--tilt-hero-image))',
      filter: 'drop-shadow(var(--shadow-paper))'
    }
  }, /*#__PURE__*/React.createElement(CSImg, {
    label: "4:3 project image",
    style: {
      aspectRatio: '4/3',
      background: 'var(--color-paper-light)'
    }
  }), /*#__PURE__*/React.createElement(Tape, {
    color: "paper",
    width: 124,
    angle: -9,
    position: "tl"
  }), /*#__PURE__*/React.createElement(Tape, {
    color: "paper",
    width: 104,
    angle: 8,
    position: "tr"
  })))), /*#__PURE__*/React.createElement(TornEdge, {
    tear: 2,
    from: "red"
  }));
}
function CaseSection({
  num,
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'var(--col-head) var(--col-body)',
      columnGap: 'var(--col-gap)',
      maxWidth: 'var(--container)',
      margin: '0 auto var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 120,
      alignSelf: 'start'
    }
  }, num && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'italic 400 24px/1.0 var(--font-display)',
      color: 'var(--color-primary)',
      paddingTop: 2
    }
  }, num), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 'var(--space-2) 0 0',
      font: 'italic 400 40px/1.15 var(--font-display)',
      color: 'var(--color-primary)'
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, children));
}
function MyRoleNote({
  d
}) {
  const {
    TornSheet,
    Tape,
    Doodle
  } = CS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(TornSheet, {
    tilt: -0.8,
    padding: "var(--space-6) var(--space-6)",
    decorations: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Tape, {
      color: "red",
      width: 120,
      angle: -7,
      position: "tl"
    }), /*#__PURE__*/React.createElement(Tape, {
      color: "beige",
      width: 98,
      angle: 9,
      position: "tr"
    }), /*#__PURE__*/React.createElement(Doodle, {
      kind: "crayon-star",
      size: 56,
      style: {
        position: 'absolute',
        right: 40,
        bottom: -28
      }
    }))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'calc(var(--col-head) - 48px) 1fr',
      columnGap: 'var(--col-gap)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: 'italic 400 40px/1.15 var(--font-display)',
      color: 'var(--color-primary)'
    }
  }, "My role"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, d.role.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: csBody,
    lang: "en"
  }, p))))));
}
function CaseStudy({
  id,
  onBack
}) {
  const {
    TornEdge,
    TextLink
  } = CS;
  const d = CS_DATA[id] || CS_DATA.think;
  const results = [['224%', '[Metric name]'], ['769%', '[Metric name]'], ['219', '[Metric name]']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CaseHero, {
    d: d
  }), /*#__PURE__*/React.createElement("div", {
    className: "paper",
    style: {
      position: 'relative',
      padding: 'calc(var(--space-8) + 24px) var(--space-5) var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(CaseSection, {
    num: "01",
    title: "The Challenge"
  }, /*#__PURE__*/React.createElement("p", {
    style: csBody,
    lang: "en"
  }, /*#__PURE__*/React.createElement("span", {
    style: csPh
  }, "[Challenge body copy from the live site. Every block in this column \u2014 paragraphs, product truths, objectives, charts \u2014 shares the same 840px left and right edge.]")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...csLabel,
      color: 'var(--color-charcoal)',
      marginBottom: 'var(--space-3)'
    }
  }, "Objectives"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-5)'
    }
  }, ['01', '02', '03'].map(n => /*#__PURE__*/React.createElement("div", {
    key: n
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...csLabel,
      color: 'var(--color-primary)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 15px/1.5 var(--font-body)',
      marginTop: 'var(--space-2)',
      ...csPh
    }
  }, "[Objective from the live site]")))))), /*#__PURE__*/React.createElement(CaseSection, {
    num: "02",
    title: "Strategy"
  }, /*#__PURE__*/React.createElement("p", {
    style: csBody,
    lang: "en"
  }, /*#__PURE__*/React.createElement("span", {
    style: csPh
  }, "[Strategy body copy from the live site.]")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '200px 1fr',
      gap: 'var(--space-5)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(CSImg, {
    label: "Image",
    style: {
      height: 150
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...csLabel,
      color: 'var(--color-charcoal)',
      marginBottom: 'var(--space-3)'
    }
  }, "Product truths to build on"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 15px/1.5 var(--font-body)',
      ...csPh
    }
  }, "[Detail block copy \u2014 left-aligned inside, block ends on the column edge.]")))), /*#__PURE__*/React.createElement(MyRoleNote, {
    d: d
  }), /*#__PURE__*/React.createElement(CaseSection, {
    num: "03",
    title: "Outcome"
  }, /*#__PURE__*/React.createElement("p", {
    style: csBody,
    lang: "en"
  }, "Measured against the media plan's own estimates\u2026 ", /*#__PURE__*/React.createElement("span", {
    style: csPh
  }, "[rest of note from the live site]")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-5)'
    }
  }, results.map(([s, m], i) => /*#__PURE__*/React.createElement("div", {
    key: s
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'italic 400 48px/1.0 var(--font-display)',
      color: 'var(--color-primary)'
    }
  }, s), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 17px/1.5 var(--font-body)',
      marginTop: 'var(--space-2)'
    }
  }, m), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 15px/1.5 var(--font-body)',
      color: 'var(--color-charcoal)'
    }
  }, "[Description]"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)',
      background: 'var(--color-paper-light)',
      padding: 'var(--space-3)',
      filter: 'drop-shadow(var(--shadow-paper))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...csLabel,
      color: 'var(--color-charcoal)'
    }
  }, "Planned vs actual"), [['Planned', 30 + i * 6, 'var(--color-line)'], ['Actual', 70 + i * 8, 'var(--color-primary)']].map(([k, w, c]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      marginTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 15px/1.5 var(--font-body)'
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10,
      width: w + '%',
      background: c
    }
  })))))))), /*#__PURE__*/React.createElement(TornEdge, {
    tear: 1,
    from: "light",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: -48,
      marginBottom: 0
    }
  })), /*#__PURE__*/React.createElement("footer", {
    className: "paper paper--red",
    style: {
      padding: 'calc(var(--space-7) + 24px) var(--space-5) var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(TextLink, {
    onRed: true,
    weight: 500,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onBack();
    }
  }, "Back to portfolio \u2192"))));
}
Object.assign(window, {
  CaseStudy
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/CaseStudy.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/MainPage.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// June Portfolio — main page sections. Components come from the compiled design-system bundle.
const MP = new Proxy({}, {
  get: (_, k) => (window.JunePortfolioDesignSystem_6caff1 || {})[k]
});
const mpWrap = {
  maxWidth: 1120,
  margin: '0 auto',
  padding: '0 var(--space-5)',
  boxSizing: 'border-box'
};
const mpH1 = {
  margin: 0,
  font: 'italic 400 64px/1.05 var(--font-display)',
  color: 'var(--color-primary)'
};
const mpLabel = {
  font: '500 13px/1.3 var(--font-body)',
  letterSpacing: '.12em',
  textTransform: 'uppercase',
  color: 'var(--color-charcoal)'
};
const mpBody = {
  font: '400 17px/1.5 var(--font-body)',
  textAlign: 'left',
  hyphens: 'manual',
  maxWidth: '64ch',
  margin: 0
};
function MPPlaceholder({
  label,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-paper-deep)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...mpLabel,
      textAlign: 'center',
      padding: 12
    }
  }, label));
}
function ProfileSection() {
  const {
    TornSheet,
    Doodle,
    TornEdge
  } = MP;
  return /*#__PURE__*/React.createElement("section", {
    className: "paper",
    style: {
      position: 'relative',
      zIndex: 5,
      padding: 'calc(var(--space-8) + 24px) 0 calc(var(--space-7) + 24px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...mpWrap,
      display: 'grid',
      gridTemplateColumns: '42fr 58fr',
      gap: 'var(--space-7)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 440
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 8,
      top: 40,
      width: '78%',
      height: 340,
      background: 'var(--color-primary)',
      clipPath: 'var(--torn-sheet)',
      transform: 'rotate(-5deg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 48,
      top: 16,
      width: '74%',
      height: 350,
      background: 'var(--color-paper-light)',
      clipPath: 'var(--torn-sheet)',
      transform: 'rotate(3deg)',
      filter: 'drop-shadow(var(--shadow-paper))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 64,
      top: 52,
      width: '64%',
      height: 360,
      transform: 'rotate(-2.5deg)',
      outline: '8px solid var(--color-paper-light)'
    }
  }, /*#__PURE__*/React.createElement(MPPlaceholder, {
    label: "Cut-out profile photo (June supplies)",
    style: {
      width: '100%',
      height: '100%'
    }
  })), /*#__PURE__*/React.createElement(Doodle, {
    kind: "star",
    size: 48,
    color: "var(--color-ink)",
    angle: 8,
    style: {
      position: 'absolute',
      right: 8,
      top: 0
    }
  }), /*#__PURE__*/React.createElement(Doodle, {
    kind: "accents",
    size: 40,
    style: {
      position: 'absolute',
      left: 16,
      top: 0,
      transform: 'scaleX(-1)'
    }
  }), /*#__PURE__*/React.createElement(Doodle, {
    kind: "crayon-star",
    size: 44,
    style: {
      position: 'absolute',
      left: 0,
      bottom: 8
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: mpLabel
  }, "Brand Campaign Manager \xB7 MSc Marketing"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...mpH1,
      color: 'var(--color-ink)'
    }
  }, "Hi, I'm June"), /*#__PURE__*/React.createElement("p", {
    style: mpBody,
    lang: "en"
  }, "Marketing professional from Korea to Ireland\u2026 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-charcoal)'
    }
  }, "[remaining intro copy from the live site]")))), /*#__PURE__*/React.createElement(TornEdge, {
    tear: 1,
    from: "light",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: '100%',
      marginBottom: 0
    }
  }));
}
const MP_STRENGTHS = [['01', 'Strategy & insight', 'Turning research and data into a sharp campaign idea.', 'magnifier'], ['02', 'Creative & content', 'Concepts, storytelling and visuals that carry the idea.', 'light-bulb'], ['03', 'Execution & management', '[Description from the live site]', 'checklist']];
const MP_TOOLS = [['Analysis', ['Google Analytics', '[tool]', '[tool]']], ['Presentation', ['[tool]', '[tool]']], ['Design', ['[tool]', '[tool]', '[tool]']], ['AI', ['[tool]', '[tool]']]];
function HowIWork() {
  const {
    TornSheet,
    GridPaper,
    Tape,
    Doodle,
    Icon,
    Tag,
    TornEdge
  } = MP;
  const angles = [-2, 1.5, -1, 2.5, -3, 1, -1.5, 2, -2.5, 3];
  let ai = 0;
  return /*#__PURE__*/React.createElement("section", {
    className: "paper paper--warm",
    style: {
      position: 'relative',
      zIndex: 4,
      padding: 'calc(var(--space-7) + 40px) 0 calc(var(--space-7) + 24px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: mpWrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 'var(--space-6)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: mpH1
  }, "How I work"), /*#__PURE__*/React.createElement(TornSheet, {
    tilt: -1.5,
    backing: false,
    padding: "18px 28px",
    style: {
      maxWidth: 520,
      marginBottom: 6
    },
    decorations: /*#__PURE__*/React.createElement(MP.Tape, {
      color: "beige",
      width: 88,
      angle: -6,
      position: "tc"
    })
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'italic 400 24px/1.25 var(--font-display)',
      color: 'var(--color-charcoal)'
    }
  }, "Data-driven marketer, 4+ years turning insight into campaigns that move numbers."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-7)',
      marginTop: 'var(--space-7)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...mpLabel,
      marginBottom: 'var(--space-4)'
    }
  }, "My strength"), /*#__PURE__*/React.createElement(TornSheet, {
    tilt: -0.8,
    decorations: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Tape, {
      color: "red",
      width: 116,
      angle: -4,
      position: "tc"
    }), /*#__PURE__*/React.createElement(Doodle, {
      kind: "crayon-star",
      size: 56,
      style: {
        position: 'absolute',
        top: -40,
        right: -44
      }
    }))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, MP_STRENGTHS.map(([n, t, d, ic]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'grid',
      gridTemplateColumns: '36px 1fr 56px',
      gap: 'var(--space-3)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'italic 400 24px/1.0 var(--font-display)',
      color: 'var(--color-primary)',
      paddingTop: 2
    }
  }, n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 4px',
      font: 'italic 400 24px/1.25 var(--font-display)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 17px/1.5 var(--font-body)'
    }
  }, d)), /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 52
  })))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...mpLabel,
      marginBottom: 'var(--space-4)'
    }
  }, "Experience & education"), /*#__PURE__*/React.createElement(GridPaper, {
    tilt: 1,
    style: {
      padding: 'var(--space-6) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Tape, {
    color: "beige",
    width: 110,
    angle: -3,
    position: "tc"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      paddingLeft: 32
    }
  }, /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 6,
      top: 6,
      width: 6,
      height: 'calc(100% - 12px)',
      overflow: 'visible'
    },
    preserveAspectRatio: "none",
    viewBox: "0 0 6 100"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 0 C1 25 5 50 2 75 C1 88 4 95 3 100",
    fill: "none",
    stroke: "var(--color-primary)",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    vectorEffect: "non-scaling-stroke"
  })), [['2025–2026', 'MSc in Marketing', 'UCD Michael Smurfit Graduate Business School', true], ['[years]', 'Brand Campaign Manager', 'Bigband', false], ['[years]', '[Role from the live site]', '[Institution]', false]].map(([y, t, inst, circ], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'relative',
      marginBottom: i < 2 ? 'var(--space-5)' : 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    viewBox: "0 0 20 20",
    style: {
      position: 'absolute',
      left: -33,
      top: 2,
      width: 14,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2 C15 2 18 6 18 10 C18 15 14 18 10 18 C5 18 2 14 2 10 C2 5 6 2 11 3",
    fill: "var(--color-paper-light)",
    stroke: "var(--color-primary)",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 15px/1.5 var(--font-body)',
      color: 'var(--color-primary)'
    }
  }, y), circ && /*#__PURE__*/React.createElement(MP.Doodle, {
    kind: "ellipse",
    width: 250,
    height: 64,
    style: {
      position: 'absolute',
      left: -16,
      top: -10
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '2px 0',
      font: 'italic 400 24px/1.25 var(--font-display)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 15px/1.5 var(--font-body)',
      color: 'var(--color-charcoal)'
    }
  }, inst))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(TornSheet, {
    paper: "red",
    backing: false,
    shape: "band",
    tilt: -1,
    padding: "var(--space-6) var(--space-6)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...mpLabel,
      color: 'var(--color-paper-light)',
      marginBottom: 'var(--space-4)'
    }
  }, "Tools"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--space-5)'
    }
  }, MP_TOOLS.map(([cat, tools], ci) => /*#__PURE__*/React.createElement("div", {
    key: cat
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...mpLabel,
      color: 'var(--color-paper-light)',
      marginBottom: 'var(--space-3)'
    }
  }, cat), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10
    }
  }, tools.map((t, ti) => /*#__PURE__*/React.createElement("span", {
    key: ti,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    variant: "torn",
    angle: angles[ai++ % angles.length]
  }, t), ti === 0 && ci < 3 && /*#__PURE__*/React.createElement(Tape, {
    color: ci % 2 ? 'paper' : 'beige',
    width: 56,
    angle: [-10, 8, -5][ci],
    style: {
      position: 'absolute',
      top: -10,
      left: '30%'
    }
  })))))))))), /*#__PURE__*/React.createElement(TornEdge, {
    tear: 3,
    from: "paper",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: '100%',
      marginBottom: 0
    }
  }));
}
const MP_PROJECTS = [{
  id: 'a2',
  number: '01',
  label: 'Brand campaign',
  title: 'A2 Milk (Yonsei Milk)',
  description: 'Reframing an A2 milk launch from "milk for children" to "a mother\u2019s choice".',
  tags: ['Strategy', 'Launch']
}, {
  id: 'work2',
  number: '02',
  label: '[Label]',
  title: '[Work project 2 — from the live site]',
  description: '[Short description from the live site.]',
  tags: ['[Skill 1]', '[Skill 2]']
}, {
  id: 'work3',
  number: '03',
  label: '[Label]',
  title: '[Work project 3 — from the live site]',
  description: '[Short description from the live site.]',
  tags: ['[Skill 1]', '[Skill 2]']
}];
const MP_SCHOOL = [{
  id: 'tinder',
  image: '../../assets/projects/tinder.png',
  number: '01',
  label: 'Marketing project',
  title: 'Tinder × Boiler Room',
  description: 'A partnership strategy to grow monthly active users across EMEA on a live commercial brief. I led creative direction, the presentation narrative, campaign concept and visual mock-ups.',
  tags: ['Creative direction', 'Storytelling', 'Mock-ups']
}, {
  id: 'd8crate',
  image: '../../assets/projects/d8crate.png',
  number: '02',
  label: 'Digital retailing',
  title: 'D8CRATE',
  description: 'A fictional at-home date-night box: built the site and tracked performance in Google Analytics. I ran social for two months — content planning, posts, and AI-generated product imagery.',
  tags: ['Google Analytics', 'Social management', 'AI imagery']
}, {
  id: 'think',
  image: '../../assets/projects/think.png',
  number: '03',
  label: 'Student advert competition · Jan 2026',
  title: 'think ( ) wise',
  description: 'An institutional brand film for UCD Smurfit built on the concept \'think ( ) wise\'. As team lead I directed it end to end — concept, storytelling, filming and edit.',
  tags: ['Team lead', 'Concept', 'Film direction']
}];
const MP_TAPES = [[-5, 'beige', 96, 'tc'], [4, 'red', 88, 'tc'], [-3, 'beige', 104, 'tc']];
function ProjectGrid({
  items,
  onOpen
}) {
  const {
    PaperCard
  } = MP;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-6)',
      alignItems: 'stretch'
    }
  }, items.map((p, i) => /*#__PURE__*/React.createElement(PaperCard, _extends({
    key: p.id
  }, p, {
    image: p.image || /*#__PURE__*/React.createElement(MPPlaceholder, {
      label: "Project image (from the live site)",
      style: {
        width: '100%',
        height: '100%'
      }
    }),
    imageAlt: p.title,
    linkText: "Read the case \u2192",
    href: "#",
    onClick: e => {
      e.preventDefault();
      onOpen(p.id);
    },
    tape: {
      angle: MP_TAPES[i][0],
      color: MP_TAPES[i][1],
      width: MP_TAPES[i][2],
      position: MP_TAPES[i][3]
    }
  }))));
}
function ProjectsSection({
  onOpen
}) {
  const {
    TornEdge
  } = MP;
  return /*#__PURE__*/React.createElement("section", {
    className: "paper",
    style: {
      position: 'relative',
      zIndex: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...mpWrap,
      padding: 'calc(var(--space-7) + 40px) var(--space-5) calc(var(--space-7) + 24px)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: mpH1
  }, "Projects"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...mpBody,
      marginTop: 'var(--space-4)'
    },
    lang: "en"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-charcoal)'
    }
  }, "[Section intro copy from the live site \u2014 justified, hyphenated, max 64ch.]")), /*#__PURE__*/React.createElement(ProjectGrid, {
    items: MP_PROJECTS,
    onOpen: onOpen
  })), /*#__PURE__*/React.createElement(TornEdge, {
    tear: 2,
    from: "light",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: '100%',
      marginBottom: 0
    }
  }));
}
function SchoolProjectsSection({
  onOpen
}) {
  const {
    TornEdge
  } = MP;
  return /*#__PURE__*/React.createElement("section", {
    className: "paper paper--warm",
    style: {
      position: 'relative',
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...mpWrap,
      padding: 'calc(var(--space-7) + 40px) var(--space-5) calc(var(--space-7) + 24px)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: mpH1
  }, "School projects"), /*#__PURE__*/React.createElement(ProjectGrid, {
    items: MP_SCHOOL,
    onOpen: onOpen
  })), /*#__PURE__*/React.createElement(TornEdge, {
    tear: 3,
    from: "paper",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: '100%',
      marginBottom: 0
    }
  }));
}
function DrawingSection() {
  const {
    Tape,
    Button,
    QrCard,
    Doodle,
    TornEdge
  } = MP;
  const pieces = [[-3, 260, -8, 7], [2, 300, 5, null], [-1.5, 240, -11, 9], [3.5, 280, 4, null], [-2.5, 250, 10, -6], [1, 270, -5, null]];
  return /*#__PURE__*/React.createElement("section", {
    className: "paper",
    style: {
      position: 'relative',
      zIndex: 2,
      display: 'flow-root'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...mpWrap,
      padding: 'calc(var(--space-7) + 40px) var(--space-5) calc(var(--space-7) + 24px)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: mpH1
  }, "Drawing"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-6) var(--space-5)',
      marginTop: 'var(--space-6)',
      alignItems: 'start'
    }
  }, pieces.map(([rot, h, t1, t2], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'relative',
      transform: 'rotate(' + rot + 'deg)',
      filter: 'drop-shadow(var(--shadow-paper))'
    }
  }, /*#__PURE__*/React.createElement(MPPlaceholder, {
    label: "Drawing (from the live site)",
    style: {
      height: h,
      background: 'var(--color-paper)'
    }
  }), /*#__PURE__*/React.createElement(Tape, {
    color: i % 2 ? 'red' : 'beige',
    width: 90 + i * 8,
    angle: t1,
    position: t2 === null ? 'tc' : 'tl'
  }), t2 !== null && /*#__PURE__*/React.createElement(Tape, {
    color: "beige",
    width: 82,
    angle: t2,
    position: "tr"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    href: "https://www.instagram.com/drawin_june/",
    target: "_blank"
  }, "See more on Instagram @drawin_june \u2192"), /*#__PURE__*/React.createElement(Doodle, {
    kind: "arrow",
    size: 64,
    color: "var(--color-ink)",
    angle: -70
  }), /*#__PURE__*/React.createElement(QrCard, {
    size: 128
  }))), /*#__PURE__*/React.createElement(TornEdge, {
    tear: 1,
    from: "light",
    to: "red",
    depth: 80,
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: '100%',
      marginBottom: 0
    }
  }));
}
function ContactSection() {
  const {
    TextLink
  } = MP;
  return /*#__PURE__*/React.createElement("section", {
    className: "paper paper--red",
    style: {
      position: 'relative',
      zIndex: 1,
      height: 'calc(var(--cover-height) * .75)',
      minHeight: 'calc(var(--cover-min) * .75)',
      paddingTop: 48,
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-4)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...mpLabel,
      color: 'var(--color-paper-light)'
    }
  }, "Contact"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...mpH1,
      color: 'var(--color-paper-light)'
    }
  }, "[Contact heading from the live site]"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(TextLink, {
    onRed: true,
    href: "#"
  }, "[email]"), /*#__PURE__*/React.createElement(TextLink, {
    onRed: true,
    href: "#"
  }, "[LinkedIn]"), /*#__PURE__*/React.createElement(TextLink, {
    onRed: true,
    href: "https://www.instagram.com/drawin_june/",
    target: "_blank"
  }, "Instagram")));
}
function MainPage({
  onOpen
}) {
  const {
    Cover
  } = MP;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Cover, {
    eyebrow: "Portfolio",
    title: "Brand Campaign Manager",
    script: "Meet June",
    slant: -5
  }), /*#__PURE__*/React.createElement(ProfileSection, null), /*#__PURE__*/React.createElement(HowIWork, null), /*#__PURE__*/React.createElement(ProjectsSection, {
    onOpen: onOpen
  }), /*#__PURE__*/React.createElement(SchoolProjectsSection, {
    onOpen: onOpen
  }), /*#__PURE__*/React.createElement(DrawingSection, null), /*#__PURE__*/React.createElement(ContactSection, null));
}
Object.assign(window, {
  MainPage,
  MP_PROJECTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/MainPage.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.PaperCard = __ds_scope.PaperCard;

__ds_ns.QrCard = __ds_scope.QrCard;

__ds_ns.Cover = __ds_scope.Cover;

__ds_ns.Doodle = __ds_scope.Doodle;

__ds_ns.FiberFilter = __ds_scope.FiberFilter;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.GridPaper = __ds_scope.GridPaper;

__ds_ns.PaperTexture = __ds_scope.PaperTexture;

__ds_ns.TornEdge = __ds_scope.TornEdge;

__ds_ns.SpeechBubble = __ds_scope.SpeechBubble;

__ds_ns.TornSheet = __ds_scope.TornSheet;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Tape = __ds_scope.Tape;

})();
