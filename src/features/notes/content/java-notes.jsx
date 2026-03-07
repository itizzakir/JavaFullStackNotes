const noteSource = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Java Notes | Datatypes and Keywords</title>
  <style>
    :root {
      --bg: #f3f6fb;
      --surface: #ffffff;
      --text: #142033;
      --muted: #5f6b7d;
      --primary: #0d9488;
      --line: #d7e0ed;
      --radius: 14px;
      --shadow-sm: 0 3px 10px rgba(15, 23, 42, 0.07);
      --shadow-lg: 0 14px 32px rgba(15, 23, 42, 0.12);
      --code-bg: #0f172a;
      --code-fg: #dbe7ff;
      --accent-blue: #4361c8;
      --accent-red: #e44c63;
    }

    * {
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      margin: 0;
      font-family: "Segoe UI", Tahoma, Arial, sans-serif;
      color: var(--text);
      line-height: 1.6;
      overflow-x: hidden;
      background:
        radial-gradient(1200px 500px at -10% -20%, #dff5ff 0%, transparent 50%),
        radial-gradient(900px 400px at 120% -20%, #dbf7f0 0%, transparent 45%),
        var(--bg);
    }

    img,
    svg,
    video,
    canvas,
    iframe {
      max-width: 100%;
      height: auto;
    }

    .global-nav {
      position: sticky;
      top: 8px;
      z-index: 30;
      width: min(1200px, 94%);
      margin: 12px auto 14px;
      padding: 10px;
      border: 1px solid var(--line);
      border-radius: 14px;
      background: rgba(255, 255, 255, 0.88);
      backdrop-filter: blur(4px);
      box-shadow: var(--shadow-sm);
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }

    .global-nav a {
      text-decoration: none;
      color: #1d4ed8;
      border: 1px solid #b9d4ff;
      background: #eff6ff;
      border-radius: 999px;
      padding: 6px 10px;
      font-weight: 700;
      font-size: 0.85rem;
      white-space: normal;
      overflow-wrap: anywhere;
      min-width: 0;
    }

    .global-nav a.active {
      background: var(--primary);
      border-color: var(--primary);
      color: #fff;
    }

    .container {
      width: min(1200px, 94%);
      margin: 0 auto;
      padding: 0 0 32px;
    }

    .hero {
      border-radius: 18px;
      padding: 22px;
      color: #fff;
      background: linear-gradient(135deg, #0d9488, #0891b2 45%, #2563eb);
      box-shadow: var(--shadow-lg);
      margin-bottom: 14px;
    }

    .hero h1 {
      margin: 0;
      font-size: clamp(1.4rem, 2.8vw, 2.2rem);
    }

    .hero p {
      margin: 8px 0 0;
      opacity: 0.95;
      max-width: 900px;
    }

    .topic-nav {
      margin-top: 14px;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .topic-nav a {
      text-decoration: none;
      color: #fff;
      padding: 6px 10px;
      border-radius: 999px;
      border: 1px solid rgba(255, 255, 255, 0.55);
      background: rgba(255, 255, 255, 0.08);
      font-size: 0.85rem;
      white-space: normal;
      overflow-wrap: anywhere;
      min-width: 0;
    }

    .topic-nav a:hover {
      background: rgba(255, 255, 255, 0.18);
    }

    .tag-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 14px;
    }

    .tag {
      padding: 5px 10px;
      border-radius: 999px;
      font-size: 0.87rem;
      background: rgba(255, 255, 255, 0.17);
      border: 1px solid rgba(255, 255, 255, 0.34);
    }

    .toolbar {
      margin: 14px 0 18px;
      display: grid;
      grid-template-columns: 1fr auto auto;
      gap: 10px;
    }

    .toolbar input,
    .toolbar button {
      border: 1px solid var(--line);
      border-radius: 10px;
      padding: 10px 12px;
      font-size: 0.95rem;
      background: #fff;
    }

    .toolbar input {
      width: 100%;
      min-width: 0;
    }

    .toolbar button {
      cursor: pointer;
      border-color: var(--primary);
      background: var(--primary);
      color: #fff;
      font-weight: 700;
    }

    .toolbar button.secondary {
      background: #fff;
      color: #0f766e;
    }

    .grid {
      display: grid;
      gap: 14px;
    }

    .card {
      background: var(--surface);
      border: 1px solid var(--line);
      border-radius: var(--radius);
      padding: 16px;
      box-shadow: var(--shadow-sm);
    }

    details {
      display: block;
    }

    summary {
      cursor: pointer;
      list-style: none;
      margin: 0 0 10px;
      padding-right: 26px;
      position: relative;
      font-size: clamp(1.08rem, 1.6vw, 1.3rem);
      font-weight: 700;
      font-family: "Trebuchet MS", "Segoe UI", sans-serif;
    }

    summary::-webkit-details-marker {
      display: none;
    }

    summary::after {
      content: "+";
      position: absolute;
      right: 0;
      top: 0;
      color: #0f3f7a;
      font-weight: 800;
      line-height: 1.1;
    }

    details[open] > summary::after {
      content: "-";
    }

    .qa-group {
      margin-top: 12px;
      border: 1px solid var(--line);
      border-radius: 12px;
      padding: 10px;
      background: #fcfdff;
    }

    .qa-item {
      margin: 10px 0;
      padding: 10px;
      border: 1px dashed #c6d7ee;
      border-radius: 10px;
      background: #fff;
    }

    .qa-item > p {
      margin: 0 0 8px;
      font-weight: 600;
    }

    .qa-answer {
      margin-top: 6px;
      border: 1px solid #dbeafe;
      border-radius: 9px;
      padding: 8px;
      background: #f8fbff;
    }

    .qa-answer > summary {
      margin: 0;
      font-size: 0.92rem;
      font-weight: 700;
      color: #1d4ed8;
      padding-right: 20px;
    }

    h2 {
      margin: 0 0 8px;
      font-size: 1.2rem;
    }

    h3 {
      margin: 14px 0 6px;
      font-size: 1rem;
    }

    p {
      margin: 8px 0;
      overflow-wrap: anywhere;
    }

    ol,
    ul {
      margin: 8px 0;
      padding-left: 20px;
    }

    li {
      margin: 2px 0;
      overflow-wrap: anywhere;
    }

    .sub {
      color: var(--muted);
      font-size: 0.95rem;
    }

    .tip {
      margin-top: 10px;
      padding: 10px 12px;
      border-radius: 10px;
      background: #effcf9;
      border: 1px solid #b4efe2;
      color: #115e59;
      font-size: 0.93rem;
    }

    .warn {
      margin-top: 10px;
      padding: 10px 12px;
      border-radius: 10px;
      background: #fff7ed;
      border: 1px solid #fed7aa;
      color: #9a3412;
      font-size: 0.93rem;
    }

    pre {
      margin: 8px 0;
      border-radius: 10px;
      overflow: auto;
      border: 1px solid #111827;
      background: var(--code-bg);
      color: var(--code-fg);
      padding: 12px;
      font-size: 0.85rem;
      line-height: 1.55;
    }

    code {
      font-family: "Segoe UI", Tahoma, Arial, sans-serif;
    }

    pre code {
      font-family: Consolas, "Courier New", monospace;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin: 8px 0;
      font-size: 0.92rem;
    }

    th,
    td {
      border: 1px solid var(--line);
      padding: 8px 10px;
      text-align: left;
      vertical-align: top;
      overflow-wrap: anywhere;
      word-break: normal;
    }

    th {
      background: #f8fafc;
    }

    .keyword-grid {
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      gap: 12px;
      align-items: start;
    }

    .keyword-column-title {
      margin: 0 0 4px;
      font-size: 0.98rem;
      color: #334155;
      text-transform: lowercase;
    }

    .keyword-box {
      border: 4px solid #111827;
      min-height: 220px;
      padding: 10px;
      background: #fff;
      font-size: 0.95rem;
      line-height: 1.45;
    }

    .keyword-box.long {
      min-height: 310px;
    }

    .diagram-wrap {
      border: 1px dashed var(--line);
      border-radius: 12px;
      background: #fcfdff;
      padding: 14px;
      overflow-x: auto;
    }

    .collection-legend {
      display: flex;
      flex-wrap: wrap;
      gap: 10px 18px;
      margin-bottom: 14px;
      color: var(--muted);
      font-size: 0.92rem;
    }

    .collection-legend-item {
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }

    .collection-legend-chip {
      width: 16px;
      height: 16px;
      border-radius: 5px;
      border: 1px solid transparent;
      flex: 0 0 auto;
    }

    .collection-legend-chip.interface {
      background: #84cc16;
      border-color: #3f6212;
    }

    .collection-legend-chip.class {
      background: #fdba74;
      border-color: #c2410c;
    }

    .collection-legend-line {
      width: 28px;
      border-top: 3px solid #334155;
      flex: 0 0 auto;
    }

    .collection-legend-line.dashed {
      border-top-style: dashed;
    }

    .collection-diagram-svg {
      display: block;
      width: 100%;
      height: auto;
      min-width: 1080px;
      font-family: "Trebuchet MS", "Segoe UI", sans-serif;
    }

    .collection-diagram-svg .line-solid {
      stroke: #334155;
      stroke-width: 3;
      fill: none;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .collection-diagram-svg .line-dashed {
      stroke: #64748b;
      stroke-width: 3;
      fill: none;
      stroke-dasharray: 7 7;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .collection-diagram-svg .node-label {
      fill: #0f172a;
      font-size: 18px;
      font-weight: 700;
      text-anchor: middle;
      dominant-baseline: middle;
    }

    .collection-diagram-svg .note-label {
      fill: #475569;
      font-size: 15px;
      font-weight: 700;
    }

    .collection-diagram-svg .interface-node {
      fill: #84cc16;
      stroke: #3f6212;
      stroke-width: 1.5;
    }

    .collection-diagram-svg .class-node {
      fill: #fdba74;
      stroke: #c2410c;
      stroke-width: 1.5;
    }

    .cursor-diagram {
      position: relative;
      padding: 6px 6px 0;
    }

    .cursor-root {
      width: min(200px, 100%);
      margin: 0 auto 42px;
      padding: 14px 16px;
      border: 4px solid #111827;
      background: #fff;
      text-align: center;
      font-size: 1.08rem;
      font-weight: 800;
      color: #ef4444;
      letter-spacing: 0.04em;
      position: relative;
    }

    .cursor-root::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: -28px;
      height: 28px;
      border-left: 3px solid #111827;
      transform: translateX(-50%);
    }

    .cursor-branches {
      position: relative;
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 18px;
      align-items: start;
    }

    .cursor-branches::before {
      content: "";
      position: absolute;
      left: 16.5%;
      right: 16.5%;
      top: -18px;
      border-top: 3px solid #111827;
    }

    .cursor-branch {
      position: relative;
      padding-top: 28px;
    }

    .cursor-branch::before {
      content: "";
      position: absolute;
      left: 50%;
      top: -18px;
      height: 28px;
      border-left: 3px solid #111827;
      transform: translateX(-50%);
    }

    .cursor-card {
      height: 100%;
      border: 3px solid #111827;
      background: #fff;
      padding: 14px;
      box-shadow: var(--shadow-sm);
    }

    .cursor-card h4 {
      margin: 0 0 10px;
      text-align: center;
      font-size: 1.04rem;
      color: #ef4444;
    }

    .cursor-direction {
      margin: 0 0 8px;
      font-weight: 700;
      color: #334155;
    }

    .cursor-facts {
      margin: 0;
      padding-left: 18px;
      color: #334155;
      font-size: 0.94rem;
    }

    .cursor-facts li {
      margin: 6px 0;
    }

    .datatype-map {
      min-width: 960px;
      position: relative;
      padding: 12px 12px 30px;
    }

    .map-head {
      width: 190px;
      margin: 0 auto 26px;
      border: 4px solid #111827;
      padding: 8px 10px;
      font-size: 1.05rem;
      background: #fff;
      text-align: center;
    }

    .map-branches {
      display: flex;
      justify-content: space-between;
      gap: 26px;
      position: relative;
      margin-top: 20px;
    }

    .map-branches::before {
      content: "";
      position: absolute;
      left: 12%;
      right: 12%;
      top: -18px;
      border-top: 4px solid #111827;
    }

    .map-node {
      width: 280px;
    }

    .map-card {
      border: 4px solid #111827;
      background: #fff;
      padding: 10px;
      font-size: 1.1rem;
      min-height: 70px;
      display: flex;
      align-items: center;
    }

    .map-note-left {
      color: var(--accent-red);
      font-weight: 600;
      margin-left: -16px;
      margin-bottom: 6px;
    }

    .map-note-right {
      color: var(--accent-red);
      font-weight: 600;
      margin-bottom: 6px;
      text-align: left;
    }

    .map-predefine {
      color: var(--accent-blue);
      font-weight: 600;
      margin-left: 150px;
      margin-top: -22px;
      margin-bottom: 8px;
    }

    .map-userdefine {
      color: var(--accent-blue);
      font-weight: 600;
      margin-left: 190px;
      margin-top: -22px;
      margin-bottom: 8px;
    }

    .primitive-oval {
      width: 230px;
      min-height: 270px;
      border: 4px solid var(--accent-blue);
      border-radius: 50%;
      padding: 20px 28px;
      color: var(--accent-red);
      font-size: 1.02rem;
      line-height: 1.45;
      margin-top: 10px;
    }

    .right-list {
      margin-top: 10px;
      color: var(--accent-red);
      font-size: 1.02rem;
    }

    .connector {
      color: var(--accent-blue);
      font-weight: 600;
      margin-top: 16px;
      margin-left: 138px;
      max-width: 220px;
    }

    .exception-hierarchy {
      padding: 6px 4px 2px;
    }

    .exception-root {
      position: relative;
      max-width: 300px;
      margin: 0 auto 30px;
      text-align: center;
    }

    .exception-root::after {
      content: "";
      position: absolute;
      left: 50%;
      top: calc(100% + 4px);
      height: 24px;
      border-left: 3px solid #111827;
      transform: translateX(-50%);
    }

    .exception-label {
      margin: 0 0 8px;
      color: #0f766e;
      font-size: 0.8rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    .exception-node {
      border: 3px solid #111827;
      border-radius: 18px;
      padding: 14px 16px;
      background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
      box-shadow: 0 8px 18px rgba(15, 23, 42, 0.08);
      font-size: 1.05rem;
      font-weight: 700;
    }

    .exception-node code {
      font-size: inherit;
      font-weight: inherit;
    }

    .exception-node-root {
      background: linear-gradient(180deg, #ecfeff 0%, #f8fafc 100%);
    }

    .exception-node-exception {
      border-color: #0f766e;
      background: linear-gradient(180deg, #ecfdf5 0%, #f8fafc 100%);
    }

    .exception-node-error {
      border-color: #b91c1c;
      background: linear-gradient(180deg, #fff1f2 0%, #f8fafc 100%);
    }

    .exception-caption {
      margin: 8px 0 0;
      color: var(--muted);
      font-size: 0.9rem;
    }

    .exception-branches {
      position: relative;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 20px;
      margin-top: 8px;
    }

    .exception-branches::before {
      content: "";
      position: absolute;
      left: 18%;
      right: 18%;
      top: -18px;
      border-top: 3px solid #111827;
    }

    .exception-branch {
      position: relative;
      padding-top: 16px;
    }

    .exception-branch::before {
      content: "";
      position: absolute;
      left: 50%;
      top: -18px;
      height: 16px;
      border-left: 3px solid #111827;
      transform: translateX(-50%);
    }

    .exception-branch-note {
      margin: 10px 0 12px;
      color: var(--muted);
      text-align: center;
      font-size: 0.92rem;
    }

    .exception-panels {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 12px;
    }

    .exception-panel {
      border: 1px solid var(--line);
      border-radius: 14px;
      padding: 12px;
      background: #fff;
      box-shadow: var(--shadow-sm);
    }

    .exception-panel h4 {
      margin: 0 0 6px;
      font-size: 0.97rem;
      color: #0f172a;
    }

    .exception-panel p {
      margin: 0 0 8px;
      color: var(--muted);
      font-size: 0.88rem;
    }

    .exception-panel ul {
      margin: 0;
      padding-left: 18px;
      font-size: 0.9rem;
    }

    .exception-panel.checked {
      border-color: #99f6e4;
      background: #f0fdfa;
    }

    .exception-panel.unchecked {
      border-color: #bfdbfe;
      background: #eff6ff;
    }

    .exception-panel.custom {
      border-color: #fde68a;
      background: #fffbeb;
    }

    .exception-panel.error {
      border-color: #fecaca;
      background: #fff1f2;
    }

    .exception-footnote {
      margin: 16px 0 0;
      padding: 12px 14px;
      border: 1px solid #dbeafe;
      border-radius: 12px;
      background: #f8fbff;
      color: #334155;
      font-size: 0.93rem;
    }

    .exception-mini-tree {
      padding: 4px 4px 0;
    }

    .exception-super-root {
      width: fit-content;
      margin: 0 auto 6px;
      padding: 6px 14px;
      border: 1px solid #cbd5e1;
      border-radius: 999px;
      background: #fff;
      font-weight: 700;
      box-shadow: var(--shadow-sm);
    }

    .exception-super-arrow {
      margin: 0 0 8px;
      text-align: center;
      color: #475569;
      font-size: 1.15rem;
      line-height: 1;
    }

    .exception-mini-tree .exception-node {
      max-width: 280px;
      margin: 0 auto 18px;
      text-align: center;
    }

    .exception-mini-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 16px;
      align-items: start;
    }

    .exception-mini-box {
      border: 1px solid var(--line);
      border-top-width: 5px;
      border-radius: 16px;
      padding: 14px;
      background: #fff;
      box-shadow: var(--shadow-sm);
    }

    .exception-mini-box.exception {
      border-top-color: #14b8a6;
      background: #f0fdfa;
    }

    .exception-mini-box.error {
      border-top-color: #ef4444;
      background: #fff1f2;
    }

    .exception-mini-box h4 {
      margin: 0 0 10px;
      font-size: 1rem;
      color: #0f172a;
    }

    .exception-mini-list,
    .exception-mini-sublist {
      list-style: none;
      margin: 0;
      padding-left: 0;
    }

    .exception-mini-list li,
    .exception-mini-sublist li {
      position: relative;
      margin: 6px 0;
      padding-left: 20px;
    }

    .exception-mini-list li::before,
    .exception-mini-sublist li::before {
      content: "->";
      position: absolute;
      left: 0;
      top: 0;
      color: #64748b;
      font-size: 0.8rem;
      font-weight: 700;
    }

    .exception-mini-sublist {
      margin-top: 6px;
      margin-left: 14px;
      padding-left: 12px;
      border-left: 2px solid #cbd5e1;
    }

    .topic-sep {
      margin: 18px 0 10px;
      border: 0;
      border-top: 1px solid #e4ecf5;
    }

    .global-nav,
    .container,
    .hero,
    .toolbar,
    .card,
    .topic-nav,
    .grid {
      min-width: 0;
    }

    @media (max-width: 1100px) {
      .keyword-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .container {
        width: 95%;
      }
    }

    @media (max-width: 900px) {
      .toolbar {
        grid-template-columns: 1fr;
      }

      .topic-nav {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .topic-nav a {
        text-align: center;
      }

      .datatype-map {
        min-width: 0;
        width: 100%;
        padding: 8px;
      }

      .map-head {
        width: 100%;
        max-width: 260px;
        margin-bottom: 14px;
      }

      .map-branches {
        flex-direction: column;
        gap: 12px;
        margin-top: 8px;
      }

      .map-branches::before {
        display: none;
      }

      .map-node {
        width: 100%;
      }

      .map-card {
        font-size: 0.95rem;
        min-height: 54px;
      }

      .map-predefine,
      .map-userdefine,
      .connector {
        margin-left: 0;
        max-width: none;
      }

      .primitive-oval {
        width: 100%;
        min-height: 0;
        border-radius: 16px;
        padding: 12px 16px;
      }

      .exception-root {
        margin-bottom: 20px;
      }

      .exception-root::after,
      .exception-branches::before,
      .exception-branch::before {
        display: none;
      }

      .exception-branches {
        grid-template-columns: 1fr;
        gap: 16px;
        margin-top: 0;
      }

      .exception-mini-grid {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 700px) {
      .global-nav {
        position: static;
        display: grid;
        grid-template-columns: 1fr;
      }

      .global-nav a {
        text-align: center;
      }

      .container {
        width: 96%;
      }

      .hero {
        padding: 16px;
      }

      .card {
        padding: 14px;
      }

      .toolbar {
        grid-template-columns: 1fr;
      }

      .topic-nav {
        display: grid;
        grid-template-columns: 1fr;
      }

      .topic-nav a {
        text-align: center;
        font-size: 0.82rem;
      }

      .keyword-grid {
        grid-template-columns: 1fr;
      }

      .tag-row {
        gap: 6px;
      }

      .tag {
        font-size: 0.8rem;
      }

      summary {
        font-size: 1rem;
      }

      pre {
        font-size: 0.78rem;
      }

      table {
        display: block;
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
      }

      .diagram-wrap {
        padding: 10px;
      }

      .cursor-root {
        margin-bottom: 18px;
      }

      .cursor-root::after,
      .cursor-branches::before,
      .cursor-branch::before {
        display: none;
      }

      .cursor-branches {
        grid-template-columns: 1fr;
        gap: 14px;
      }

      .cursor-branch {
        padding-top: 0;
      }

      .keyword-box,
      .keyword-box.long {
        min-height: 0;
      }

      .exception-node {
        font-size: 0.96rem;
      }

      .exception-panels {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 480px) {
      .container {
        width: 98%;
      }

      .hero {
        padding: 14px;
      }

      .hero h1 {
        font-size: 1.24rem;
      }

      .card {
        padding: 12px;
      }

      .toolbar input,
      .toolbar button {
        font-size: 0.9rem;
        padding: 9px 10px;
      }

      summary {
        font-size: 0.95rem;
      }

      pre {
        font-size: 0.74rem;
      }

      th,
      td {
        padding: 7px 8px;
      }
    }
  </style>
</head>
<body>
  <nav class="global-nav" aria-label="Site navigation">
    <a href="/">Home</a>
    <a href="/html-notes.html">HTML Notes</a>
    <a href="/javascript-notes.html">JavaScript Notes</a>
    <a class="active" href="/java-notes.html">Java Notes</a>
  </nav>

  <div class="container">
    <header class="hero">
      <h1>Java Full Notes</h1>
      <p>All Java topics are organized in collapsible summary blocks. Introduction and Literals are added at the beginning as requested.</p>
      <nav class="topic-nav" aria-label="Quick topic navigation">
        <a href="#java-introduction">Introduction</a>
        <a href="#variables-identifiers">Variables</a>
        <a href="#keywords">Keywords</a>
        <a href="#datatypes">Datatypes</a>
        <a href="#type-conversions">Type Conversion</a>
        <a href="#operators">Operators</a>
        <a href="#statements">Statements</a>
        <a href="#arrays">Arrays</a>
        <a href="#string-handling">Strings</a>
        <a href="#java-features">Java Features</a>
        <a href="#methods">Methods</a>
        <a href="#scanner">Scanner</a>
        <a href="#oops">OOPs</a>
        <a href="#polymorphism">Polymorphism</a>
        <a href="#inheritance">Inheritance</a>
        <a href="#upcasting-downcasting">Up/Down Casting</a>
        <a href="#encapsulation-enum-annotations">Encap + Enum + Annotations</a>
        <a href="#constructors">Constructors</a>
        <a href="#abstraction">Abstraction</a>
        <a href="#interface-inner-main">Interface + Inner</a>
        <a href="#io-streams">IO Streams</a>
        <a href="#packages-import">Packages</a>
        <a href="#multithreading">Multithreading</a>
        <a href="#exception-handling">Exception Handling</a>
        <a href="#wrapper-classes">Wrapper</a>
        <a href="#collections-framework">Collections</a>
        <a href="#slip-tests">Slip Tests</a>
      </nav>
      <div class="tag-row">
        <span class="tag">Collapsible Notes</span>
        <span class="tag">Quick Navigation</span>
        <span class="tag">Search Filter</span>
        <span class="tag">Code + Tables</span>
      </div>
    </header>

    <section class="toolbar">
      <input id="searchInput" type="text" placeholder="Filter topic: keyword, datatype, arrays, string, methods, oops, polymorphism, inheritance, casting, encapsulation, enum, annotations, constructors, abstraction, interface, inner class, main, io streams, serialization, package, import, thread, synchronization, daemon, deadlock, exception, throw, throws, wrapper, collections, list, set, map, queue, comparator..." />
      <button id="expandBtn" type="button">Expand All</button>
      <button id="collapseBtn" type="button" class="secondary">Collapse All</button>
    </section>

    <main class="grid" id="main-notes">
      <section class="card" id="java-introduction">
        <details>
          <summary>1.java Introduction, java parts, Basic java program syntax, Literals</summary>
          <h3>1.java Introduction</h3>
          <ol>
            <li>java is a popular programming language.</li>
            <li>Father of java is James gosling.</li>
            <li>Java 1st verison (1.0) was introduced by Sunmicrosystem in 1996.</li>
            <li>At present java was owned by oracle corporation.</li>
          </ol>

          <h3>java was technically divided into 3 parts</h3>
          <ol>
            <li>j2se</li>
            <li>j2ee</li>
            <li>j2me</li>
          </ol>

          <h3>1.j2se</h3>
          <ol>
            <li>j2se stands for java 2 standard edition.</li>
            <li>In j2se we will learn java fundamentals.</li>
            <li>By using j2se we will develop standalone/desktop/window based App.</li>
          </ol>

          <h3>2.j2ee</h3>
          <ol>
            <li>j2ee stands for java 2 enterprise edition.</li>
            <li>In j2ee we will learn server side programming.</li>
            <li>By using j2ee we will develop enterprise/distributed app.</li>
          </ol>

          <h3>3.j2me</h3>
          <ol>
            <li>j2me stands for java 2 micro edition.</li>
            <li>In j2me we will learn micro side programming.</li>
            <li>By using j2me we will develop mobile based App.</li>
          </ol>

          <h3>Basic java program syntax</h3>
          <pre><code>class ClassName
{
  public static void main(String[] args)
  {
    --------------------------------
    statements
    ---------------------------------
  }
}

class Demo
{
  public static void main(String[] args)
  {
    System.out.println("welcome to java");
  }
}

welcome to java</code></pre>

          <h3>Literals</h3>
          <ol>
            <li>Literals are input values.</li>
            <li>Literals are divided into 6 types.They are</li>
          </ol>

          <pre><code>1.Integer Literals========================>-12,0,12............
2.Floating Point Literals=================>-1.2f,1.0f,2.5f.....
3.Character Literals======================>'a','z','1',.......
4.String Literals=========================>"Excelr","Trainer"........
5.Boolean Literals========================>true,false
6.Object Literals=========================>null</code></pre>
        </details>
      </section>

      <section class="card" id="variables-identifiers">
        <details>
          <summary>2.Variables and Identifiers</summary>

          <h3>Variables</h3>
          <ol>
            <li>A variable is a container.</li>
            <li>The purpose of variable is to store operand(value,variable,expression).</li>
            <li>variable declaration</li>
          </ol>
          <pre><code>datatype varname;==========>variable declaration
varname=value==============>assigning

int a;
a=5;</code></pre>

          <ol start="4">
            <li>variable Initialization</li>
          </ol>
          <pre><code>datatype varname=value;
int a=2;</code></pre>

          <pre><code>int a=5=======>value
int b=a========>variable
int c=6+3======>expression</code></pre>

          <h3>Rules</h3>
          <ol>
            <li>A variable must be a alphabet (lowercase)(a-z),UpperCase(A-Z), Digit(0-9) and special symbols (_,$).</li>
            <li>A variable 1st letter must not starts with digit(0-9).</li>
            <li>A variable does not allow special symbols except(_ $).</li>
            <li>Keywords must not use as variables.</li>
            <li>Variable size is unlimited but according to industry standards donot use variable size more than 16 digits.</li>
            <li>Variable is case sensitive.</li>
            <li>true and false are not keywords but donot use as variables.</li>
          </ol>

          <h3>Examples</h3>
          <pre><code>1.int  abcB12_$=10;=====>valid
2.int  1ba=10;==========>invalid
3.int   a*5=10;=========>invalid
4.int  a@b=9;===========>invalid
5.int  _ab=10;=========>valid</code></pre>

          <h3>Identifiers</h3>
          <ol>
            <li>Identifier is a one type of variable.</li>
            <li>The purpose of identifier is to identify package,subpackge,class,interface,method.....</li>
          </ol>

          <h3>package</h3>
          <ol>
            <li>package must be written in lowercase.</li>
            <li>A package before there is no dot(.) then that is called package.</li>
            <li>A package before there is dot(.) then that is called subpackage.</li>
          </ol>

          <h3>class</h3>
          <p>A class 1st letter must starts with capital from each word onwards.</p>

          <h3>interface</h3>
          <p>A interface 1st letter must starts with capital from each word onwards.</p>

          <h3>Method</h3>
          <p>A method 1st letter must starts with capital from second word onwards and ends with().</p>

          <h3>Examples</h3>
          <pre><code>1.java.lang=====>java(package)  lang(sub package)
2.java.io=======>java(package)  io(sub package)
3.java.util.Arrays==>java(package) util(subpackage) Arrays(class)
4.LinkedList======>class
5.lastIndexOf()===>method
6.List============>interface
7.Set=============>interface
8.Map=============>interface
9.Comparator======>interface
10.Comparable=====>interface</code></pre>
        </details>
      </section>

      <section class="card" id="keywords">
        <details>
          <summary>3.Keywords</summary>
        <ol>
          <li>Keywords are set of reserved words.</li>
          <li>Reserved words will have particular functionality.</li>
          <li>At present there are 50 keywords in Java including <code>assert</code>, <code>strictfp</code>, <code>enum</code>.</li>
          <li>Keywords must be written in lowercase.</li>
          <li><code>goto</code> and <code>const</code> are not using in Java.</li>
          <li><code>true</code> and <code>false</code> are not keywords but do not use as variables.</li>
        </ol>

        <h3>Examples</h3>
        <p class="sub">
          byte, short, int, long, float, double, char, boolean, if, else, else if, for, while, do, break, continue,
          public, private, protected, switch, static, final, this, super, abtract, transient, synchronized, volatile,
          extends, implements, return, void
        </p>

        <div class="warn">Note: The examples above are kept exactly in the same wording as provided.</div>
              </details>
      </section>

      <section class="card" id="keyword-groups">
        <details>
          <summary>4.Keyword Groups (visual layout)</summary>
        <div class="diagram-wrap">
          <div class="keyword-grid">
            <div>
              <p class="keyword-column-title">primitive</p>
              <div class="keyword-box">
                1. byte<br />
                2. short<br />
                3. int<br />
                4. long<br />
                5. float<br />
                6. double<br />
                7. char<br />
                8. boolean
              </div>
            </div>

            <div>
              <p class="keyword-column-title">statements</p>
              <div class="keyword-box long">
                if<br />
                else<br />
                else if<br />
                switch<br />
                for<br />
                while<br />
                do<br />
                break<br />
                continue
              </div>
            </div>

            <div>
              <p class="keyword-column-title">exception handling</p>
              <div class="keyword-box">
                1. try<br />
                2. catch<br />
                3. throw<br />
                4. throws<br />
                5. finally
              </div>
            </div>

            <div>
              <p class="keyword-column-title">modifiers</p>
              <div class="keyword-box long">
                1. public<br />
                2. private<br />
                3. protected<br />
                4. default<br />
                5. static<br />
                6. abstract<br />
                7. final<br />
                8. synchronized
              </div>
            </div>

            <div>
              <p class="keyword-column-title">other keywords</p>
              <div class="keyword-box">
                1. void<br />
                2. return<br />
                3. volatile<br />
                4. transient<br />
                5. extends<br />
                6. implements<br />
                7. class<br />
                8. interface<br />
                9. strictfp<br />
                10. assert<br />
                11. enum
              </div>
            </div>
          </div>
        </div>
              </details>
      </section>

      <section class="card" id="datatypes">
        <details>
          <summary>5.Datatypes</summary>
        <p>Datatype determines what type of value we can store.</p>
        <p>Datatypes are divided into 2 types. They are:</p>
        <ol>
          <li>primitive</li>
          <li>Non primitive / refernce datatype</li>
        </ol>

        <h3>1. primitive Datatypes</h3>
        <ul>
          <li>Primitive datatypes are predefine datatypes.</li>
          <li>Primitive datatypes stores 1 value at a time.</li>
          <li>There are 8 primitive datatypes in Java:
            byte, short, int, long, float, double, char, boolean.
          </li>
        </ul>

        <h3>2. Non primitive datatypes</h3>
        <ul>
          <li>Non Primitive datatypes are userdefine datatypes.</li>
          <li>Non primitive datatypes stores multiple values at a time.</li>
        </ul>

        <p><strong>Ex:</strong> Arrays, String, class, class, object</p>
              </details>
      </section>

      <section class="card" id="datatype-map">
        <details>
          <summary>6.Datatypes Diagram (same idea as your reference)</summary>
        <div class="diagram-wrap">
          <div class="datatype-map">
            <div class="map-head">Datatypes</div>

            <div class="map-branches">
              <div class="map-node">
                <p class="map-note-left">single value</p>
                <div class="map-card">Primitive</div>
                <p class="map-predefine">predefine datatypes</p>
                <div class="primitive-oval">
                  1. byte<br />
                  2. short<br />
                  3. int<br />
                  4. long<br />
                  5. float<br />
                  6. double<br />
                  7. char<br />
                  8. boolean
                </div>
                <p class="connector">present in javasoftware(jdk)</p>
                <p class="connector">developers</p>
              </div>

              <div class="map-node">
                <p class="map-note-right">Multiple values</p>
                <div class="map-card">Nonprimitive/Reference</div>
                <p class="map-userdefine">Usedefine datatypes</p>
                <p class="right-list">
                  1. Arrays<br />
                  2. String<br />
                  3. class<br />
                  4. object<br />
                  5. interface<br />
                  6. Collections......
                </p>
              </div>
            </div>
          </div>
        </div>
              </details>
      </section>

      <section class="card" id="byte-short-int-long">
        <details>
          <summary>7.Integer Primitive Datatypes</summary>

        <h3>1. byte</h3>
        <p>byte datatype will store both positive and negative values without decimals.</p>
        <pre><code>byte a=10;
System.out.println(a); //10
byte a=-10;
System.out.println(a); //-10

byte a=1.2;
System.out.println(a); //error
byte a=129;
System.out.println(a); //error</code></pre>

        <h3>2. short</h3>
        <p>short datatype will store both positive and negative values without decimals.</p>
        <pre><code>short a=10;
System.out.println(a); //10
short a=-10;
System.out.println(a); //-10

short a=1.2;
System.out.println(a); //error</code></pre>

        <h3>3. int</h3>
        <p>int datatype will store both positive and negative values without decimals.</p>
        <pre><code>int a=10;
System.out.println(a); //10
int a=-10;
System.out.println(a); //-10

int a=1.2;
System.out.println(a); //error</code></pre>

        <h3>4. long</h3>
        <p>long datatype will store both positive and negative values without decimals.</p>
        <p>If we store more than max value of int in long we must end with <code>l</code> or <code>L</code>.</p>
        <pre><code>long a=10;
System.out.println(a); //10
long a=-10;
System.out.println(a); //-10

long a=1.2;
System.out.println(a); //error

long a=21474836478;
System.out.println(a); //error

long a=21474836478l;
System.out.println(a); //21474836478</code></pre>

        <table>
          <thead>
            <tr>
              <th>S.NO</th>
              <th>DATATYPE</th>
              <th>SIZE</th>
              <th>RANGE (Min to max)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>byte</td>
              <td>8</td>
              <td>-128 to 127</td>
            </tr>
            <tr>
              <td>2</td>
              <td>short</td>
              <td>16</td>
              <td>-32768 to 32767</td>
            </tr>
            <tr>
              <td>3</td>
              <td>int</td>
              <td>32</td>
              <td>-2147483648 to 2147483647</td>
            </tr>
            <tr>
              <td>4</td>
              <td>long</td>
              <td>64</td>
              <td>-9223372036854775808 to -9223372036854775807</td>
            </tr>
          </tbody>
        </table>

        <p class="sub">Formula: -2^(size-1) to 2^(size-1)-1</p>
        <pre><code>System.out.println(Byte.SIZE);
System.out.println(Byte.MIN_VALUE);
System.out.println(Byte.MAX_VALUE);</code></pre>
              </details>
      </section>

      <section class="card" id="int-literals">
        <details>
          <summary>8.int datatype stores number format data</summary>
        <table>
          <thead>
            <tr>
              <th>S.NO</th>
              <th>DATA</th>
              <th>STARTS</th>
              <th>BASE VALUE</th>
              <th>VALUES</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Normal data</td>
              <td>No</td>
              <td>10</td>
              <td>0,1,2,3,4,5,6,7,8,9</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Binary data</td>
              <td>0b or 0B</td>
              <td>2</td>
              <td>0,1</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Octal data</td>
              <td>0</td>
              <td>8</td>
              <td>0,1,2,3,4,5,6,7</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Hexadecimal data</td>
              <td>0x or 0X</td>
              <td>16</td>
              <td>0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f</td>
            </tr>
          </tbody>
        </table>

        <pre><code>int a=10;      // Normal data
int a=0b1010;  // Binary data
int a=0B1111;  // Binary data
int a=0b234;   // error
int a=0123;    // Octal
int a=0x123;   // Hexadecimal

int a=0b1010;
System.out.println(a); //10

int a=012;
System.out.println(a); //10

int a=0x12;
System.out.println(a); //18

int a=10;
System.out.println(a); //10
String b=Integer.toBinaryString(a);
System.out.println(b); //1010

int a=10;
System.out.println(a); //10
String b=Integer.toOctalString(a);
System.out.println(b); //12

int a=10;
System.out.println(a); //10
String b=Integer.toHexString(a);
System.out.println(b); //a</code></pre>
              </details>
      </section>

      <section class="card" id="floating-values">
        <details>
          <summary>9.Floating point values</summary>
        <ol>
          <li>Floating point values stores both positive and negative values with decimal and without decimal.</li>
          <li>Floating are divided into 2 types: float and double.</li>
        </ol>

        <h3>5. float</h3>
        <ol>
          <li>float datatype stores both positive and negative values with decimal and without decimal.</li>
          <li>float values must be ends with f or F.</li>
          <li>In float datatype after decimal we can store 7 digits.</li>
        </ol>

        <pre><code>float ab=1.2;   //error
System.out.println(ab);
float ab=1.2f;
System.out.println(ab); //1.2
float ab=-1.2f;
System.out.println(ab); //-1.2
float ab=1f;
System.out.println(ab); //1.0

// scientific data
float a=3e2f;
System.out.println(a); //300.0
float a=7e2f;
System.out.println(a); //700.0</code></pre>

        <h3>6. double</h3>
        <ol>
          <li>double datatype stores both positive and negative values with decimal and without decimal.</li>
          <li>double values must not be ends with f or F.</li>
          <li>In double datatype after decimal we can store 16 digits.</li>
          <li>double datatype also stores scientific data.</li>
        </ol>

        <pre><code>double ab=1.2;
System.out.println(ab); //1.2
double ab=-1.2;
System.out.println(ab); //-1.2
double ab=1;
System.out.println(ab); //1.0</code></pre>

        <table>
          <thead>
            <tr>
              <th>S.NO</th>
              <th>DATATYPE</th>
              <th>SIZE</th>
              <th>RANGE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>float</td>
              <td>32</td>
              <td>1.4E-45 to 3.4028235E38</td>
            </tr>
            <tr>
              <td>2</td>
              <td>double</td>
              <td>64</td>
              <td>4.9E-324 to 1.7976931348623157E308</td>
            </tr>
          </tbody>
        </table>
              </details>
      </section>

      <section class="card" id="char-boolean">
        <details>
          <summary>10.char and boolean</summary>
        <ol>
          <li>char datatype store single character and enclosed with single quotes ('').</li>
          <li>If we store ascii value in char datatype we need not to enclose with single quotes ('').</li>
        </ol>

        <h3>ASCII VALUES</h3>
        <table>
          <thead>
            <tr>
              <th>Letters</th>
              <th>Values</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>a to z</td>
              <td>97 to 122</td>
            </tr>
            <tr>
              <td>A to Z</td>
              <td>65 to 90</td>
            </tr>
            <tr>
              <td>0 to 9</td>
              <td>48 to 57</td>
            </tr>
          </tbody>
        </table>

        <pre><code>char ch='a';   //valid
System.out.println(ch); //a

char ch='ab'; //invalid
System.out.println(ch); //error

char ch=a;    //invalid
System.out.println(ch); //error

char ch='9';
System.out.println(ch); //9

char ch='19';
System.out.println(ch); //error

char ch=97;
System.out.println(ch); //a

char ch=65;
System.out.println(ch); //A

char ch='97';
System.out.println(ch); //error</code></pre>

        <hr class="topic-sep" />

        <h2>8. boolean</h2>
        <ol>
          <li>boolean datatype is used to store true or false values.</li>
          <li>boolean datatype donot store 0,1 values.</li>
        </ol>

        <pre><code>boolean b=true;
System.out.println(b); //true

boolean b=false;
System.out.println(b); //false

boolean b=0;
System.out.println(b); //error

boolean b=1;
System.out.println(b); //error</code></pre>
              </details>
      </section>

      <section class="card" id="type-conversions">
        <details>
          <summary>11.Type conversions</summary>
        <ol>
          <li>The process of converting one datatype into another datatype is called type conversion.</li>
          <li>At present total 56 type conversions in Java.</li>
          <li>Type conversions are divided into 2 types:
            widening type conversions (19), narrowing type conversions (23).
          </li>
          <li>14 type conversions are not possible: boolean cannot be converted into any other datatype and any other datatype cannot be converted into boolean.</li>
        </ol>

        <pre><code>boolean b=true;
int a=b;
System.out.println(a); //error

boolean b=true;
float a=b;
System.out.println(a); //error

int a=5;
boolean b=a;
System.out.println(b); //error</code></pre>

        <h3>1. widening type conversions (19)</h3>
        <ol>
          <li>widening type conversions are implicit type conversions.</li>
          <li>widening type conversions done by system implicitly.</li>
        </ol>
        <pre><code>byte  -> short, int, long, float, double
short -> int, long, float, double
int   -> long, float, double
long  -> float, double
float -> double
char  -> int, long, float, double

byte a=12;
short b=a;
System.out.println(b); //12

byte a=112;
int b=a;
System.out.println(b); //112

int a=12;
float b=a;
System.out.println(b); //12.0

char ch='a';
int b=ch;
System.out.println(b); //97</code></pre>

        <h3>2. Narrowing type conversions (23)</h3>
        <ol>
          <li>Narrowing type conversions are explicit type conversions.</li>
          <li>Narrowing type conversions done by programmers explicitly.</li>
        </ol>
        <pre><code>byte   -> char
short  -> byte, char
int    -> byte, short, char
long   -> byte, short, int, char
float  -> byte, short, int, long, char
double -> byte, short, int, long, float, char
char   -> byte, short

char ch='A';
byte bh=ch;
System.out.println(bh); //error

char ch='A';
byte bh=(byte)ch;
System.out.println(bh); //65

int a=122;
char ch=(char)a;
System.out.println(ch); //z</code></pre>
              </details>
      </section>

      <section class="card" id="operations">
        <details>
          <summary>12.Operations</summary>
        <table>
          <thead>
            <tr>
              <th>Left Side Datatypes</th>
              <th>Operator</th>
              <th>Right Side Datatype</th>
              <th>Result Datatype</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>byte, short, int, char</td>
              <td>+</td>
              <td>byte, short, int, char</td>
              <td>int</td>
            </tr>
            <tr>
              <td>byte, short, int, char</td>
              <td>+</td>
              <td>long</td>
              <td>long</td>
            </tr>
            <tr>
              <td>byte, short, int, long, char</td>
              <td>+</td>
              <td>float</td>
              <td>float</td>
            </tr>
            <tr>
              <td>byte, short, int, long, float, char</td>
              <td>+</td>
              <td>double</td>
              <td>double</td>
            </tr>
            <tr>
              <td>Any datatype</td>
              <td>+</td>
              <td>String</td>
              <td>String</td>
            </tr>
          </tbody>
        </table>

        <h3>Type promotion (code text format)</h3>
        <pre><code>byte,short,int,char             +  byte,short,int,char  => int
byte,short,int,char             +  long                 => long
byte,short,int,long,char        +  float                => float
byte,short,int,long,float,char  +  double               => double
Any datatype                    +  String               => String</code></pre>

        <pre><code>byte a=7;
int b=6;
System.out.println(a+b); //13

int a=6;
char b=97;
System.out.println(a+b); //103

int a=6;
char b='a';
System.out.println(a+b); //103

int a=6;
String s="virat";
System.out.println(a+s); //6s

System.out.println(6+"virat"+7); //6virat7</code></pre>

        <div class="tip">Java notes content has been replaced with the provided notes and arranged in the same visual style used by the HTML notes page.</div>
              </details>
      </section>

      <section class="card" id="operators">
        <details>
          <summary>13.Operators</summary>

          <h3>Operators</h3>
          <ol>
            <li>operator is a symbol.</li>
            <li>The purpose of operators is to perform operations.</li>
          </ol>

          <table>
            <thead>
              <tr>
                <th>Col 1</th>
                <th>Col 2</th>
                <th>Col 3</th>
                <th>Col 4</th>
                <th>Col 5</th>
                <th>Col 6</th>
                <th>Col 7</th>
                <th>Col 8</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>+</code></td>
                <td><code>=</code></td>
                <td><code>&lt;</code></td>
                <td><code>&amp;&amp;</code></td>
                <td><code>++</code></td>
                <td><code>&lt;&lt;</code></td>
                <td><code>+=</code></td>
                <td><code>?</code></td>
              </tr>
              <tr>
                <td><code>-</code></td>
                <td></td>
                <td><code>&gt;</code></td>
                <td><code>||</code></td>
                <td><code>--</code></td>
                <td><code>&gt;&gt;</code></td>
                <td><code>-=</code></td>
                <td><code>:</code></td>
              </tr>
              <tr>
                <td><code>*</code></td>
                <td></td>
                <td><code>&lt;=</code></td>
                <td><code>!</code></td>
                <td></td>
                <td><code>~</code></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td><code>/</code></td>
                <td></td>
                <td><code>&gt;=</code></td>
                <td></td>
                <td></td>
                <td><code>&amp;</code></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td><code>%</code></td>
                <td></td>
                <td><code>==</code></td>
                <td></td>
                <td></td>
                <td><code>|</code></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td><code>!=</code></td>
                <td></td>
                <td></td>
                <td><code>^</code></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>

          <h3>1.Arithmetic operators (+,-,*,/,% )</h3>
          <p>Arithmetic operators used to perform addition, subtraction, multiplication, division.</p>
          <h3>Examples</h3>
          <pre><code>System.out.println(1+2);   //3
System.out.println(3-2);   //1
System.out.println(6*2);   //12
System.out.println(6/2);   //3 (quotient)
System.out.println(6%2);   //0 (remainder)</code></pre>

          <h3>Order of precedence</h3>
          <pre><code>1. ()
2. /,%,*
3. +,-</code></pre>

          <pre><code>class First
{
  public static void main(String[] args)
  {
    int a=5;
    int b=6;
    int c=3;
    System.out.println(a+b+(b+c)); //20
  }
}

int a=5;
int b=6;
int c=3;
int d=7;
System.out.println(a*b+b-d-a+c); //27</code></pre>

          <h3>2.Assignment operators (=)</h3>
          <p>Assignment operator is used to transfer rhs operands to the lhs variable.</p>
          <h3>operands</h3>
          <p>operand can be variable, value, expression.</p>

          <h3>Examples</h3>
          <pre><code>int a=5;

Here int is datatype
a is variable
= is Assignment operator
5 value

int a=5;   //value
int b=a;   //variable
int c=5+6; //expression</code></pre>

          <h3>3.Relational operators (&lt;,&gt;,&lt;=,&gt;=,==,!=)</h3>
          <p>Relational operators are used to compare 2 values and returns either true or false.</p>
          <h3>Examples</h3>
          <pre><code>System.out.println(5>3);    //true
System.out.println(5>11);   //false
System.out.println(5>11<2); //error
System.out.println(5<2);    //false
System.out.println(5<21);   //true
System.out.println(5<=6);   //true
System.out.println(6<6);    //false
System.out.println(6<=6);   //true
System.out.println(2>=2);   //true
System.out.println(2==2);   //true
System.out.println(2==3);   //false
System.out.println(2!=3);   //true
System.out.println(2!=2);   //false</code></pre>

          <div class="tip">Difference b/w <code>=</code> and <code>==</code>:<br />
          <code>=</code> is to assign operand to variable, <code>==</code> is to compare 2 operands.</div>

          <h3>4.Logical operators</h3>
          <p>Logical operators are used to compare multiple conditions and returns either true or false.</p>
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Operator</th>
                <th>Rule / Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><code>&amp;&amp;</code></td>
                <td>All the conditions must be satisfied.</td>
              </tr>
              <tr>
                <td>2</td>
                <td><code>||</code></td>
                <td>At least one condition must be satisfied.</td>
              </tr>
              <tr>
                <td>3</td>
                <td><code>!</code></td>
                <td>Logical NOT (reverses true/false).</td>
              </tr>
            </tbody>
          </table>

          <pre><code>System.out.println((2>1) && (6>2));               //true
System.out.println((2>6) && (6>2));               //false
System.out.println((2>1) && (6>2) && (7>5));      //true
System.out.println((2>1) && (6>2) && (7>11));     //false
System.out.println((2>1) || (6>2) || (7>2));      //true
System.out.println((2>1) || (6>12) || (7>2));     //true
System.out.println((2>1) || (6>12) || (7>12));    //true
System.out.println((2>11) || (6>12) || (7>12));   //false
System.out.println(!(6>2));                       //false
System.out.println(!(6>12));                      //true</code></pre>

          <h3>Increment/Decrement operators</h3>
          <h3>1.Increment operator (++var or var++)</h3>
          <p>Increment operator is used to increment 1 value.</p>
          <ol>
            <li>pre increment (++var)</li>
            <li>post increment (var++)</li>
          </ol>
          <p>In pre increment, incrementation is applied to current operation.</p>
          <p>In post increment, incrementation is applied to next operation.</p>

          <h3>Examples</h3>
          <pre><code>int a=5;
++a;
System.out.println(a); //6

int a=5;
a++;
System.out.println(a); //6

int a=5;
System.out.println(++a); //6

int a=5;
System.out.println(a++); //5

int a=5;
System.out.println(++a + ++a); //13

int a=5;
System.out.println(a++ + ++a);

int a=5;
System.out.println(a++ + a++); //11

int a=5;
System.out.println(a++ + ++a + a++); //19</code></pre>

          <h3>2.Decrement operator (--var or var--)</h3>
          <p>Decrement operator is used to decrement 1 value.</p>
          <ol>
            <li>pre decrement (--var)</li>
            <li>post decrement (var--)</li>
          </ol>
          <p>In pre decrement, decrementation is applied to current operation.</p>
          <p>In post decrement, decrementation is applied to next operation.</p>

          <h3>Examples</h3>
          <pre><code>int a=5;
System.out.println(a++ + --a + a++); //15

int a=5;
System.out.println(a-- + --a + a++); //11</code></pre>

          <h3>Bitwise Operators</h3>
          <p>Bitwise operators work on binary data and returns integer value.</p>
          <ol>
            <li>Bitwise LeftShift (&lt;&lt;)</li>
            <li>Bitwise RightShift (&gt;&gt;)</li>
            <li>Bitwise Complementary (~)</li>
            <li>Bitwise AND (&amp;)</li>
            <li>Bitwise OR (|)</li>
            <li>Bitwise XOR (^)</li>
          </ol>

          <h3>1.Bitwise LeftShift (&lt;&lt;)</h3>
          <pre><code>FORMULA: a * 2^b

int a=12;
int b=3;
System.out.println(a<<b); //96</code></pre>

          <h3>2.Bitwise RightShift (&gt;&gt;)</h3>
          <pre><code>FORMULA: a / 2^b

int a=12;
int b=3;
System.out.println(a>>b); //1</code></pre>

          <h3>3.Bitwise Complementary (~)</h3>
          <pre><code>Formula: ~n = -(n+1)

int a=12;
System.out.println(~a); //-13</code></pre>

          <h3>4.Bitwise AND (&amp;) (multiply)</h3>
          <pre><code>int a=9;
int b=7;
System.out.println(a&b); //1</code></pre>

          <h3>5.Bitwise OR (|) (addition)</h3>
          <pre><code>int a=9;
int b=7;
System.out.println(a|b); //15

a(9) => 1001
b(7) => 0111
        1111 => 15</code></pre>

          <h3>6.Bitwise XOR (^)</h3>
          <p>If same values are there, take 0. If different values are there, take 1.</p>
          <pre><code>int a=9;
int b=7;
System.out.println(a^b); //14

a(9) => 1001
b(7) => 0111
        1110</code></pre>

          <h3>7.Conditional operator</h3>
          <p>Conditional operator is a ternary operator.</p>
          <p>Conditional operator is used to check condition and returns either true expression or false expression.</p>
          <pre><code>Syntax:
condition ? true expression : false expression

5>2 ? 2 : 3  //2
5>12 ? 2 : 3 //3

System.out.println(5>2?2:3); //2
System.out.println(5>12?2:3); //3
System.out.println(5>12?"Excelr institute":"tcs"); //tcs

int a=5;
int b=2;
float res=5>2?1.2f:1.6f;
System.out.println(res);

int a=5;
int b=12;
String res=(a>b)?"super":(b>a)?"Excellent":"Bad";
System.out.println(res); //Excellent</code></pre>

          <h3>8.Compound operator</h3>
          <p>Compound operator is a combination of multiple operators (Assignment and Arithmetic operators).</p>
          <pre><code>int a=-5;
int b=-a;
System.out.println(b); //5

int a=5;
int b=2;
a=a+b;
System.out.println(a); //7

int a=5;
int b=2;
a+=b; //a=a+b
System.out.println(a); //7

int a=5;
int b=2;
a-=b; //a=a-b
System.out.println(a); //3

int a=5;
int b=2;
a*=b;
System.out.println(a); //10

int a=5;
int b=2;
a/=b;
System.out.println(a); //2

int a=5;
int b=2;
a%=b;
System.out.println(a); //1</code></pre>

          <h3>Unary operator</h3>
          <p>The operator which will work on 1 operand.</p>
          <p>operand can be a variable, value, expression.</p>
          <pre><code>++a
a++
++5</code></pre>

          <h3>Binary operator</h3>
          <p>The operator which will work on 2 operands.</p>
          <pre><code>a+b
2+3</code></pre>

          <h3>Ternary operator</h3>
          <p>The operator which will work on 3 operands.</p>
          <pre><code>cond ? trueexp : false
(a>b) ? a : b
(5>2) ? 5 : 2</code></pre>
        </details>
      </section>

      <section class="card" id="statements">
        <details>
          <summary>14.Statements, Conditional, Looping and Jumping</summary>

          <h3>Statements</h3>
          <p>Statements are divided into 4 types:</p>
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Type</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Simple Statements</td>
                <td>Take input and print output (single-line operations).</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Conditional Statements</td>
                <td>Execute block based on condition true/false.</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Looping Statements</td>
                <td>Repeat statements until condition becomes false.</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Jumping Statements</td>
                <td>Break or skip iterations inside loops.</td>
              </tr>
            </tbody>
          </table>

          <h3>1.Simple Statements</h3>
          <p>Simple statements are one-line statements.</p>
          <p>Simple statements are divided into 2 types: input statement and output statement.</p>
          <pre><code>int a=5; //input statement
// no output

class Demo
{
  public static void main(String[] args)
  {
    int a=5; //input
    System.out.println(a); //output -> 5
  }
}</code></pre>

          <h3>2.Conditional Statements</h3>
          <p>Conditional statements check conditions and execute blocks accordingly.</p>
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Type</th>
                <th>Use</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>Simple if</td><td>Check single condition (true block only).</td></tr>
              <tr><td>2</td><td>if else</td><td>Check single condition in two blocks.</td></tr>
              <tr><td>3</td><td>if else if else</td><td>Check multiple conditions.</td></tr>
              <tr><td>4</td><td>Multiple if</td><td>Each if checked independently.</td></tr>
              <tr><td>5</td><td>Nested if</td><td>if inside another if.</td></tr>
              <tr><td>6</td><td>switch</td><td>Fixed universal multiple cases.</td></tr>
            </tbody>
          </table>

          <h3>Simple if - syntax</h3>
          <pre><code>if(cond)
{
  statements
}</code></pre>
          <pre><code>int a=5;
if(a>2)
{
  System.out.println("positive num"); //positive num
}

int a=5;
if(a>12)
{
  System.out.println("positive num"); //No output
}</code></pre>

          <h3>if else - syntax</h3>
          <pre><code>if(cond)
{
}
else
{
}</code></pre>
          <pre><code>int a=5;
int b=2;
if(a>b)
{
  System.out.println(a+" is big num");
}
else
{
  System.out.println(a+" is not big num");
}
// output: 5 is big num</code></pre>

          <h3>if else if else - syntax</h3>
          <pre><code>if(cond)
{
}
else if(cond)
{
}
else if(cond)
{
}
else
{
}</code></pre>
          <pre><code>int marks=90;
if(marks>90)
{
  System.out.println("A grade");
}
else if((marks>80) && (marks<90))
{
  System.out.println("B grade");
}
else if((marks>70) && (marks<80))
{
  System.out.println("C grade");
}
else
{
  System.out.println("Fail");
}</code></pre>

          <h3>Multiple if</h3>
          <pre><code>int marks=87;
if(marks>90)
{
  System.out.println("A grade");
}
if((marks>80) && (marks<90))
{
  System.out.println("B grade");
}
if((marks>70) && (marks<80))
{
  System.out.println("C grade");
}
else
{
  System.out.println("Fail");
}
// output:
// B grade
// Fail</code></pre>
          <div class="tip">
            In <code>if else if</code>, first true block executes.<br />
            In <code>multiple if</code>, all true blocks execute.
          </div>

          <h3>Nested if</h3>
          <pre><code>if(cond)
{
  if(cond)
  {
    statements
  }
}</code></pre>
          <pre><code>if(15>2)
{
  if(6>1)
  {
    System.out.println("Nested if");
  }
}
// output: Nested if</code></pre>

          <h3>switch</h3>
          <p>switch is used to check fixed universal multiple conditions in cases.</p>
          <pre><code>int day = 3;
switch(day)
{
  case 1: System.out.println("Monday"); break;
  case 2: System.out.println("Tuesday"); break;
  case 3: System.out.println("Wednesday"); break;
  case 4: System.out.println("Thursday"); break;
  case 5: System.out.println("Friday"); break;
  case 6: System.out.println("Saturday"); break;
  case 7: System.out.println("Sunday"); break;
  default: System.out.println("Invalid day");
}</code></pre>

          <h3>Programs on Conditional statements</h3>
          <ol>
            <li>
              <p>Check number is even or odd.</p>
              <pre><code>int num=12;
if(num%2==0)
{
  System.out.println("num is even "+num);
}
else
{
  System.out.println("num is odd "+num);
}</code></pre>
            </li>
            <li>
              <p>Big number between 2 numbers.</p>
              <pre><code>int first=12;
int second=16;
if(first>second)
{
  System.out.println(first+" is a big num");
}
else
{
  System.out.println(second+" is a big num");
}</code></pre>
            </li>
            <li>
              <p>Big number among 3 numbers.</p>
              <pre><code>int first=12;
int second=16;
int third=11;
if((first>second) && (first>third))
{
  System.out.println(first+" is a big num");
}
else if((second>first) && (second>third))
{
  System.out.println(second+" is a big num");
}
else
{
  System.out.println(third+" is a big num");
}</code></pre>
            </li>
            <li>
              <p>Big number among 4 numbers.</p>
              <pre><code>int first=12, second=16, third=11, four=17;
if((first>second) && (first>third) && (first>four))
{
  System.out.println(first+" is a big num");
}
else if((second>first) && (second>third) && (second>four))
{
  System.out.println(second+" is a big num");
}
else if((third>first) && (third>second) && (third>four))
{
  System.out.println(third+" is a big num");
}
else
{
  System.out.println(four+" is a big num");
}</code></pre>
            </li>
            <li>
              <p>Character lowercase / uppercase / digit / special symbol.</p>
              <pre><code>char ch='*';
if((ch>='a') && (ch<='z'))
{
  System.out.println(ch+" is a lowercase");
}
else if((ch>='A') && (ch<='Z'))
{
  System.out.println(ch+" is a uppercase");
}
else if((ch>='0') && (ch<='9'))
{
  System.out.println(ch+" is a digit");
}
else
{
  System.out.println(ch+" is a special symbol");
}</code></pre>
            </li>
            <li>
              <p>Vowel or consonant.</p>
              <pre><code>char ch='E';
if((ch=='a') ||(ch=='e')||(ch=='i')||(ch=='o')||(ch=='u')||
   (ch=='A') ||(ch=='E')||(ch=='I')||(ch=='O')||(ch=='U'))
{
  System.out.println("vowel");
}
else
{
  System.out.println("consonant");
}</code></pre>
            </li>
            <li>
              <p>Convert lowercase to uppercase / uppercase to lowercase.</p>
              <pre><code>char ch='b';
int upperVal=ch-32;
char upper=(char)upperVal;
System.out.println(upper);

char ch2='B';
int lowerVal=ch2+32;
char lower=(char)lowerVal;
System.out.println(lower);</code></pre>
            </li>
            <li>
              <p>Swap two numbers with and without third variable.</p>
              <pre><code>// with 3rd variable
int first=10, second=20;
int temp=first;
first=second;
second=temp;

// without 3rd variable (addition)
first=first+second;
second=first-second;
first=first-second;</code></pre>
            </li>
            <li>
              <p>Check leap year.</p>
              <pre><code>int year=1996;
if (((year % 4 == 0) && (year % 100!= 0)) || (year%400 == 0))
{
  System.out.println("leap year");
}
else
{
  System.out.println("not a leap year");
}</code></pre>
            </li>
          </ol>

          <h3>3.Looping Statements</h3>
          <p>Looping statements execute repeatedly until condition becomes false.</p>

          <h3>For loop</h3>
          <pre><code>for(initialization;condition;inc/dec)
{
  statements
}</code></pre>
          <pre><code>for(int i=1;i<=10;i++)
{
  System.out.println(i);
}</code></pre>

          <h3>While loop</h3>
          <pre><code>initialization;
while(cond)
{
  statements;
  inc/dec;
}</code></pre>
          <pre><code>int i=0;
while(i<11)
{
  System.out.println(i);
  i++;
}</code></pre>

          <h3>Do while loop</h3>
          <pre><code>initialization;
do
{
  statements;
  inc/dec;
}
while(cond);</code></pre>
          <pre><code>int i=5;
do
{
  System.out.println(i);
  i++;
}
while(i<=10);</code></pre>

          <h3>Nested loops</h3>
          <pre><code>for(int j=1;j<=2;j++) // outer
{
  for(int i=1;i<=3;i++) // inner
  {
    System.out.println(i);
  }
}</code></pre>

          <h3>Programs on while loop</h3>
          <ol>
            <li>
              <p>Count number of digits (123 -> 3).</p>
              <pre><code>int num=123;
int cd=0;
while(num>0)
{
  cd=cd+1;
  num=num/10;
}
System.out.println(cd);</code></pre>
            </li>
            <li>
              <p>Sum of digits (123 -> 6).</p>
              <pre><code>int num=123, sum=0;
while(num>0)
{
  int rem=num%10;
  sum=sum+rem;
  num=num/10;
}
System.out.println(sum);</code></pre>
            </li>
            <li>
              <p>Reverse number (123 -> 321).</p>
              <pre><code>int num=123, rev=0;
while(num>0)
{
  int rem=num%10;
  rev=(rev*10)+rem;
  num=num/10;
}
System.out.println(rev);</code></pre>
            </li>
            <li>
              <p>Palindrome number.</p>
              <pre><code>int num=1221, ori=num, rev=0;
while(num>0)
{
  int rem=num%10;
  rev=rev*10+rem;
  num=num/10;
}
System.out.println(ori==rev ? "palindrome" : "Not palindrome");</code></pre>
            </li>
            <li>
              <p>Armstrong number (example 153).</p>
              <pre><code>int num=153, ori=num, sum=0;
while(num>0)
{
  int rem=num%10;
  sum=sum+(rem*rem*rem);
  num=num/10;
}
System.out.println(ori==sum ? "Armstrong" : "Not Armstrong");</code></pre>
            </li>
            <li>
              <p>Strong number (example 145).</p>
              <pre><code>int n=145, sum=0, ori=n;
while(ori>0)
{
  int rem=ori%10;
  int f=1;
  for(int i=1;i<=rem;i++)
  {
    f=f*i;
  }
  sum=sum+f;
  ori=ori/10;
}
System.out.println(n==sum ? "Strong" : "Not Strong");</code></pre>
            </li>
          </ol>

          <h3>Programs on for loop</h3>
          <ol>
            <li>
              <p>Factors of a number.</p>
              <pre><code>int n=6;
for(int i=1;i<=n;i++)
{
  if(n%i==0)
  {
    System.out.println(i);
  }
}</code></pre>
            </li>
            <li>
              <p>Factorial of a number.</p>
              <pre><code>int n=7, factorial=1;
for(int i=1;i<=n;i++)
{
  factorial=factorial*i;
}
System.out.println(factorial);</code></pre>
            </li>
            <li>
              <p>Prime number check.</p>
              <pre><code>int n=9, count=0;
for(int i=1;i<=n;i++)
{
  if(n%i==0) count++;
}
System.out.println(count==2 ? "prime" : "Not prime");</code></pre>
            </li>
            <li>
              <p>Perfect number check.</p>
              <pre><code>int n=6, sum=0;
for(int i=1;i<n;i++)
{
  if(n%i==0) sum=sum+i;
}
System.out.println(sum==n ? "perfect" : "Not perfect");</code></pre>
            </li>
            <li>
              <p>Fibonacci series.</p>
              <pre><code>int first=0, second=1;
System.out.println(first);
System.out.println(second);
for(int i=2;i<=10;i++)
{
  int sum=first+second;
  System.out.println(sum);
  first=second;
  second=sum;
}</code></pre>
            </li>
          </ol>

          <h3>Pattern programs (organized examples)</h3>
          <pre><code>// Square pattern
for(int i=1;i<=5;i++)
{
  for(int j=1;j<=5;j++) System.out.print("*");
  System.out.println();
}

// Increasing triangle
for(int i=1;i<=5;i++)
{
  for(int j=1;j<=i;j++) System.out.print("*");
  System.out.println();
}

// Decreasing triangle
for(int i=1;i<=5;i++)
{
  for(int j=i;j<=5;j++) System.out.print("*");
  System.out.println();
}

// Pyramid
for(int i=1;i<=5;i++)
{
  for(int j=i;j<=5;j++) System.out.print(" ");
  for(int k=1;k<i;k++) System.out.print("*");
  for(int r=1;r<=i;r++) System.out.print("*");
  System.out.println();
}

// Diamond
for(int i=1;i<=5;i++)
{
  for(int j=i;j<=5;j++) System.out.print(" ");
  for(int k=1;k<=i;k++) System.out.print("*");
  System.out.println();
}
for(int i=1;i<=5;i++)
{
  for(int j=1;j<=i;j++) System.out.print(" ");
  for(int k=i;k<=5;k++) System.out.print("*");
  System.out.println();
}</code></pre>

          <h3>4.Jumping statements</h3>
          <p>Jumping statements are used to terminate loop or skip particular iteration.</p>
          <p>Types: <code>break</code> and <code>continue</code>.</p>

          <h3>break</h3>
          <pre><code>for(int i=1;i<=10;i++)
{
  if(i==6)
  {
    break;
  }
  else
  {
    System.out.println(i);
  }
}</code></pre>

          <h3>continue</h3>
          <pre><code>for(int i=1;i<=10;i++)
{
  if(i==6)
  {
    continue;
  }
  else
  {
    System.out.println(i);
  }
}</code></pre>
        </details>
      </section>

      <section class="card" id="arrays">
        <details>
          <summary>15.Arrays (1D, 2D, Jagged, Methods and Programs)</summary>

          <h3>Arrays</h3>
          <ol>
            <li>Arrays is a predefine class (present in <code>java.util.Arrays</code>).</li>
            <li>Array is a non primitive / reference datatype.</li>
            <li>Purpose: store multiple values with same datatype.</li>
            <li>Array is index based. Valid index starts from <code>0</code> to <code>length-1</code>.</li>
            <li>Negative index is not supported: <code>ArrayIndexOutOfBoundsException</code>.</li>
            <li>Array size is fixed.</li>
            <li>Array is by itself an object.</li>
          </ol>

          <h3>Array Declaration and Assignment</h3>
          <pre><code>datatype[] arrayVariableName = new datatype[size];
arrayVariableName[0] = element1;
arrayVariableName[1] = element2;
...

int[] arr1 = new int[4];
arr1[0] = 2;
arr1[1] = 3;
arr1[2] = 6;
arr1[3] = 4;</code></pre>

          <h3>Array Initialization</h3>
          <pre><code>datatype[] arrayVarName = {ele1, ele2, ele3, ...};
int[] arr = {2,3,4,5};</code></pre>

          <h3>Index, Printing and length</h3>
          <pre><code>int[] arr={2,3,4,5};
System.out.println(arr[0]);   //2
System.out.println(arr[2]);   //4
System.out.println(arr[-3]);  //ArrayIndexOutOfBoundsException

System.out.println(arr);      //[I@372f7a8d  (memory reference)

int len=arr.length;
System.out.println(len);      //4</code></pre>

          <h3>Ways to print array elements</h3>
          <ol>
            <li>for loop</li>
            <li>Enhanced forloop / ForEach loop</li>
            <li>Arrays.toString()</li>
          </ol>

          <h3>Enhanced forloop syntax</h3>
          <pre><code>for(datatype varName : arrayVarName)
{
  statement;
}</code></pre>

          <h3>forloop vs enhanced forloop</h3>
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>for loop</th>
                <th>enhanced for loop</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Initialization</td><td>Yes</td><td>No</td></tr>
              <tr><td>Condition</td><td>Yes</td><td>No</td></tr>
              <tr><td>Updation</td><td>Yes</td><td>No</td></tr>
              <tr><td>Direct index access</td><td>Yes</td><td>No</td></tr>
            </tbody>
          </table>

          <pre><code>import java.util.Arrays;
// java -> package
// util -> sub package
// Arrays -> class</code></pre>

          <h3>Basic Array Examples</h3>
          <pre><code>class Rohit
{
  public static void main(String[] args)
  {
    int[] ab=new int[4];
    ab[0]=2; ab[1]=4; ab[2]=6; ab[3]=8;
    System.out.println(ab); //memory address style output
  }
}

class Sample
{
  public static void main(String[] args)
  {
    int[] a={1,2,3,4};
    for(int i=0;i<a.length;i++) System.out.println(a[i]);
    for(int b : a) System.out.println(b);
    System.out.println(Arrays.toString(a)); //[1, 2, 3, 4]
  }
}</code></pre>

          <h3>Predefined Methods (java.util.Arrays)</h3>

          <h3>1.sort()</h3>
          <pre><code>// syntax
Arrays.sort(arrayVarName);

int[] a={6,3,2,1};
Arrays.sort(a);
System.out.println(Arrays.toString(a)); //[1, 2, 3, 6]</code></pre>

          <h3>2.toString()</h3>
          <pre><code>// syntax
Arrays.toString(arrayVarName);

int[] a={2,3,1,4};
System.out.println(Arrays.toString(a)); //[2, 3, 1, 4]</code></pre>

          <h3>3.equals()</h3>
          <pre><code>// syntax
boolean res=Arrays.equals(arr1,arr2);

int[] a={1,2,3,4};
int[] b={1,2,3,4};
System.out.println(Arrays.equals(a,b)); //true</code></pre>

          <h3>4.mismatch()</h3>
          <pre><code>// syntax
int idx=Arrays.mismatch(arr1,arr2);
// same arrays -> -1
// returns first mismatched index otherwise</code></pre>

          <h3>5.binarySearch()</h3>
          <pre><code>// syntax
int idx=Arrays.binarySearch(arr,element);

int[] a={1,2,3,4};
System.out.println(Arrays.binarySearch(a,3)); //2
System.out.println(Arrays.binarySearch(a,6)); //negative insertion result</code></pre>

          <h3>6.copyOfRange()</h3>
          <pre><code>// syntax
datatype[] b=Arrays.copyOfRange(a,startIndex,endIndex);

int[] one={2,4,7,8,9,10};
int[] two=Arrays.copyOfRange(one,0,3);
System.out.println(Arrays.toString(two)); //[2, 4, 7]</code></pre>

          <h3>Programs on 1D Arrays</h3>
          <ol>
            <li>
              <p>Print 1st, 2nd and last element.</p>
              <pre><code>int[] a={2,1,4,5,6};
System.out.println(a[0]);
System.out.println(a[1]);
System.out.println(a[a.length-1]);</code></pre>
            </li>
            <li>
              <p>Add 1st and last element.</p>
              <pre><code>int[] a={2,1,4,5,6};
System.out.println(a[0]+a[a.length-1]);</code></pre>
            </li>
            <li>
              <p>Swap 1st and last element.</p>
              <pre><code>int[] a={2,1,4,5,6};
int temp=a[0];
a[0]=a[a.length-1];
a[a.length-1]=temp;</code></pre>
            </li>
            <li>
              <p>Print array elements and index values.</p>
              <pre><code>int[] arr={1,7,6,5};
for(int i=0;i<arr.length;i++)
{
  System.out.println("index="+i+", value="+arr[i]);
}</code></pre>
            </li>
            <li>
              <p>Print even/odd elements and count even numbers.</p>
              <pre><code>int[] arr={1,7,6,5,2,4};
int count=0;
for(int i=0;i<arr.length;i++)
{
  if(arr[i]%2==0)
  {
    System.out.println(arr[i]);
    count++;
  }
}
System.out.println(count);</code></pre>
            </li>
            <li>
              <p>Sum of all elements.</p>
              <pre><code>int[] a={1,2,3};
int sum=0;
for(int i=0;i<a.length;i++) sum+=a[i];
System.out.println(sum);</code></pre>
            </li>
            <li>
              <p>Print prime numbers in array.</p>
              <pre><code>int[] a={1,2,3,4,5,6,7};
for(int i=0;i<a.length;i++)
{
  int count=0;
  for(int j=1;j<=a[i];j++)
  {
    if(a[i]%j==0) count++;
  }
  if(count==2) System.out.println(a[i]);
}</code></pre>
            </li>
            <li>
              <p>Reverse array elements.</p>
              <pre><code>int[] arr={2,4,3,1};
for(int i=arr.length-1;i>=0;i--)
{
  System.out.println(arr[i]);
}</code></pre>
            </li>
            <li>
              <p>Duplicate elements.</p>
              <pre><code>int[] a={1,2,3,1};
for(int i=0;i<a.length;i++)
{
  for(int j=i+1;j<a.length;j++)
  {
    if(a[i]==a[j]) System.out.println(a[i]);
  }
}</code></pre>
            </li>
            <li>
              <p>Sort without predefined methods.</p>
              <pre><code>int[] a={5,4,1,2};
for(int i=0;i<a.length;i++)
{
  for(int j=i+1;j<a.length;j++)
  {
    if(a[i]>a[j])
    {
      int temp=a[i];
      a[i]=a[j];
      a[j]=temp;
    }
  }
}</code></pre>
            </li>
            <li>
              <p>Maximum and 2nd maximum number.</p>
              <pre><code>int[] a={2,1,3,5,6};
int max=a[0];
for(int i=1;i<a.length;i++) if(a[i]>max) max=a[i];
System.out.println(max);

Arrays.sort(a);
System.out.println(a[a.length-2]);</code></pre>
            </li>
            <li>
              <p>Copy one array to another.</p>
              <pre><code>int[] a1={1,2,3,4,5};
int[] a2=new int[a1.length];
for(int i=0;i<a1.length;i++) a2[i]=a1[i];</code></pre>
            </li>
            <li>
              <p>Even numbers left side, odd numbers right side.</p>
              <pre><code>int[] a1={1,2,3,4,5,6,7,8,9,10};
int[] out=new int[a1.length];
int evenIdx=0, oddIdx=a1.length-1;
for(int i=0;i<a1.length;i++)
{
  if(a1[i]%2==0) out[evenIdx++]=a1[i];
  else out[oddIdx--]=a1[i];
}</code></pre>
            </li>
            <li>
              <p>Element found or not.</p>
              <pre><code>int[] a={1,2,3,4,5};
int target=5;
boolean found=false;
for(int i=0;i<a.length;i++) if(a[i]==target) found=true;
System.out.println(found?"element found":"not found");</code></pre>
            </li>
            <li>
              <p>Left rotate by one.</p>
              <pre><code>int[] a={1,2,3,4,5};
int first=a[0];
for(int i=0;i<a.length-1;i++) a[i]=a[i+1];
a[a.length-1]=first;</code></pre>
            </li>
            <li>
              <p>Leader elements.</p>
              <pre><code>int[] a={7,9,10,11,2};
int max=a[a.length-1];
System.out.println(max);
for(int i=a.length-2;i>=0;i--)
{
  if(a[i]>max)
  {
    System.out.println(a[i]);
    max=a[i];
  }
}</code></pre>
            </li>
            <li>
              <p>Merge two arrays.</p>
              <pre><code>int[] a={1,2,3};
int[] b={4,5,6};
int[] c=new int[a.length+b.length];
for(int i=0;i<a.length;i++) c[i]=a[i];
for(int j=0;j<b.length;j++) c[a.length+j]=b[j];</code></pre>
            </li>
            <li>
              <p>Unique elements (mark duplicates as 0).</p>
              <pre><code>int[] a={1,2,3,1,2,1};
for(int i=0;i<a.length;i++)
{
  for(int j=i+1;j<a.length;j++)
  {
    if(a[i]==a[j]) a[j]=0;
  }
}
for(int i=0;i<a.length;i++) if(a[i]!=0) System.out.println(a[i]);</code></pre>
            </li>
            <li>
              <p>All pairs where sum equals 10.</p>
              <pre><code>int[] a={6,3,9,1,2,8,4,5};
for(int i=0;i<a.length-1;i++)
{
  for(int j=i+1;j<a.length;j++)
  {
    if(a[i]+a[j]==10) System.out.println(a[i]+" "+a[j]);
  }
}</code></pre>
            </li>
            <li>
              <p>All subarrays and subarrays with target sum.</p>
              <pre><code>int[] a={1,2,3,4,5};
for(int i=0;i<a.length;i++)
{
  int sum=0;
  for(int j=i;j<a.length;j++)
  {
    sum+=a[j];
    for(int k=i;k<=j;k++) System.out.print(a[k]);
    System.out.println();
  }
}</code></pre>
            </li>
            <li>
              <p>Missing number.</p>
              <pre><code>int[] a={5,3,1,2};
int n=a.length+1;
int sum=n*(n+1)/2;
int rest=0;
for(int i=0;i<a.length;i++) rest+=a[i];
System.out.println(sum-rest);</code></pre>
            </li>
          </ol>

          <h3>Multidimensional Array</h3>
          <p>Array in another array is called multidimensional array (rows and columns).</p>
          <pre><code>int[][] v=new int[3][3];
for(int i=0;i<3;i++)       // rows
{
  for(int j=0;j<3;j++)     // columns
  {
    System.out.print(v[i][j]); // default 0
  }
  System.out.println();
}</code></pre>

          <pre><code>int[][] a={{1,2,3},{4,5,6}};
for(int i=0;i<a.length;i++)
{
  for(int j=0;j<a[i].length;j++)
  {
    System.out.print(a[i][j]);
  }
  System.out.println();
}</code></pre>

          <h3>Jagged Array</h3>
          <p>Jagged Array is a multidimensional array where row lengths are different.</p>
          <pre><code>int[][] a={{1,2,3,7},{4,5,6}};
for(int i=0;i<a.length;i++)
{
  for(int j=0;j<a[i].length;j++)
  {
    System.out.print(a[i][j]);
  }
  System.out.println();
}</code></pre>

          <h3>Matrix Programs (2x2)</h3>
          <h3>Addition</h3>
          <pre><code>int[][] a={{1,2},{3,4}};
int[][] b={{5,6},{7,8}};
for(int i=0;i<a.length;i++)
{
  for(int j=0;j<a[i].length;j++)
  {
    System.out.print(a[i][j]+b[i][j]+" ");
  }
  System.out.println();
}</code></pre>

          <h3>Subtraction</h3>
          <pre><code>int[][] a={{5,6},{7,8}};
int[][] b={{1,2},{2,4}};
for(int i=0;i<a.length;i++)
{
  for(int j=0;j<a[i].length;j++)
  {
    System.out.print(a[i][j]-b[i][j]+" ");
  }
  System.out.println();
}</code></pre>

          <h3>Multiplication</h3>
          <pre><code>int[][] a={{1,2},{3,4}};
int[][] b={{1,1},{1,1}};
int[][] c=new int[2][2];
for(int i=0;i<2;i++)
{
  for(int j=0;j<2;j++)
  {
    c[i][j]=0;
    for(int k=0;k<2;k++)
    {
      c[i][j]+=a[i][k]*b[k][j];
    }
    System.out.print(c[i][j]+" ");
  }
  System.out.println();
}</code></pre>
        </details>
      </section>

      <section class="card" id="slip-tests">
        <details>
          <summary>16.Slip Tests</summary>

          <h3>Slip Test 1 on Java Introduction, Literals, Variables and Identifiers</h3>
          <h3>Fill in the blanks</h3>
          <ol>
            <li>Father of java ---------</li>
            <li>Java current version --------</li>
            <li>Technically java was divided into how many types -------</li>
            <li>j2se,j2ee,j2me stands for -----------------</li>
            <li>What we will learn in j2se,j2ee,j2me -------------</li>
            <li>What we will develop by using j2se,j2ee,j2me --------</li>
            <li>syntax of basic java program -------------</li>
            <li>Write a java program to print hello java -----------</li>
            <li>What are literals ----------</li>
            <li>Literals are divided into how many types -----------</li>
          </ol>

          <h3>Choose the correct answers</h3>
          <ol>
            <li>
              <pre><code>int a12=12;
System.out.println(a12);</code></pre>
              <p class="sub">a) 12    b) error    c) No output    d) None</p>
            </li>
            <li>
              <pre><code>int 1ab=12;
System.out.println(1ab);</code></pre>
              <p class="sub">a) 12    b) error    c) No output    d) None</p>
            </li>
            <li>
              <pre><code>int a@b=12;
System.out.println(a@b);</code></pre>
              <p class="sub">a) 12    b) error    c) No output    d) None</p>
            </li>
            <li>
              <pre><code>int a#b_=12;
System.out.println(a#b);</code></pre>
              <p class="sub">a) 12    b) error    c) No output    d) None</p>
            </li>
            <li>
              <pre><code>int _ab$=12;
System.out.println(_a$);</code></pre>
              <p class="sub">a) 12    b) error    c) No output    d) None</p>
            </li>
            <li>
              <pre><code>int true=12;
System.out.println(true);</code></pre>
              <p class="sub">a) 12    b) error    c) No output    d) None</p>
            </li>
            <li>
              <pre><code>int for=12;
System.out.println(for);</code></pre>
              <p class="sub">a) 12    b) error    c) No output    d) None</p>
            </li>
            <li>
              <p>Identify class</p>
              <p class="sub">a) String    b) get()    c) java    d) toString()</p>
            </li>
            <li>
              <p>Identify subpackage</p>
              <p class="sub">a) String    b) get()    c) java.lang    d) toString()</p>
            </li>
            <li>
              <p>Identify Methods</p>
              <p class="sub">a) String    b) get()    c) java    d) toString()</p>
            </li>
          </ol>

          <hr class="topic-sep" />

          <h3>Slip Test 2 on Keywords, Datatypes, Type Conversions and Operations</h3>
          <h3>Fill in the blanks</h3>
          <ol>
            <li>What are keywords ----------</li>
            <li>How many keywords in java --------</li>
            <li>Keywords must be written in ----------</li>
            <li>Name some keywords in java ------------</li>
            <li>What is the purpose of datatypes -------</li>
            <li>Difference between primitive and non primitive datatypes ----------</li>
            <li>Give some exemples on primitive and non primitive datatypes ----------</li>
            <li>what is meant by type conversions ----------</li>
            <li>Type conversions are divided into how many types and what are they ----------</li>
            <li>Total how many types conversions, how many not possible -----------</li>
          </ol>

          <h3>Choose the correct answers</h3>
          <ol>
            <li>
              <p>Find the keywords</p>
              <p class="sub">a) true   b) for   c) If   d) None</p>
            </li>
            <li>
              <p>Find the keywords</p>
              <p class="sub">a) While   b) public   c) Static   d) None</p>
            </li>
            <li>
              <pre><code>int a=0b1010;</code></pre>
              <p class="sub">a) 10   b) 0b1010   c) error   d) 12</p>
            </li>
            <li>
              <pre><code>float b=12f;</code></pre>
              <p class="sub">a) 12.0   b) 12   c) 12f   d) error</p>
            </li>
            <li>
              <pre><code>double d=34;</code></pre>
              <p class="sub">a) 34   b) error   c) 34.0   d) 34.0f</p>
            </li>
            <li>
              <pre><code>char ch='5';</code></pre>
              <p class="sub">a) 5   b) error   c) a   d) b</p>
            </li>
            <li>
              <pre><code>char ch=97;</code></pre>
              <p class="sub">a) 97   b) error   c) a   d) A</p>
            </li>
            <li>
              <pre><code>int a=122;
char ch=(char)a;</code></pre>
              <p class="sub">a) z   b) 122   c) error   d) Z</p>
            </li>
            <li>
              <pre><code>char ch='A';
int a=ch;</code></pre>
              <p class="sub">a) A   b) 65   c) 90   d) error</p>
            </li>
            <li>
              <pre><code>5+"virat"+(5+5)+"dhoni"</code></pre>
              <p class="sub">a) 5virat10dhoni   b) 5virat55dhoni   c) 15viratdhoni   d) error</p>
            </li>
          </ol>

          <hr class="topic-sep" />

          <h3>Slip Test 3 on Operations, Operators</h3>
          <h3>Choose the correct answers</h3>
          <ol>
            <li>
              <pre><code>int a=5;
char b='a';
System.out.println(a+b);</code></pre>
              <p class="sub">a) 102   b) error   c) b   d) 5</p>
            </li>
            <li>
              <pre><code>char ch1='a';
char ch2='a';
System.out.println(ch1+ch2);</code></pre>
              <p class="sub">a) 194   b) a   c) error   d) aa</p>
            </li>
            <li>
              <pre><code>int a=5;
float b=1.5f;
System.out.println(a+b);</code></pre>
              <p class="sub">a) 5   b) 6.5   c) 6   d) error</p>
            </li>
            <li>
              <pre><code>String a="virat";
int b=5;
int c=5;
System.out.println(a+b+c);</code></pre>
              <p class="sub">a) virat55   b) virat10   c) error   d) None</p>
            </li>
            <li>
              <pre><code>String a="virat";
int b=5;
int c=5;
System.out.println(a+(b+c));</code></pre>
              <p class="sub">a) virat55   b) virat10   c) error   d) None</p>
            </li>
          </ol>

          <h3>Write output / complete</h3>
          <ol start="6">
            <li><pre><code>5+6(6+2)+2*4+10/2-4 ---------</code></pre></li>
            <li>
              <pre><code>int a=5;
System.out.println(++a + a++ + ++a - a++);</code></pre>
            </li>
            <li>
              <pre><code>int a=5;
System.out.println(a++ + a + ++a - a++);</code></pre>
            </li>
            <li>
              <pre><code>int a=10;
int b=10;
if(a>=b) ----------</code></pre>
            </li>
            <li>
              <pre><code>int a=10;
int b=11;
if(a>=b) ----------</code></pre>
            </li>
            <li><pre><code>(5>2)&&(6>7)&&(9>2) -----------------</code></pre></li>
            <li><pre><code>(5>2)||(6>7)||(9>2) -----------------</code></pre></li>
            <li>
              <pre><code>int a=7;
int b=6;
System.out.println(a&b); --------------
System.out.println(a|b); --------------
System.out.println(a^b); --------------</code></pre>
            </li>
            <li><pre><code>System.out.println((5>10)?"virat":(6>2)?"Sachin":"dhoni"); ------------</code></pre></li>
            <li>
              <pre><code>int a=5;
a+=6;
System.out.println(a); --------------</code></pre>
            </li>
          </ol>
        </details>
      </section>

      <section class="card" id="topic-wise-tests">
        <details>
          <summary>17.Topic-wise Tests with Answers (Loop, Array, String)</summary>
          <div class="tip">Each question has a <strong>Show Answer</strong> toggle. Open only when needed.</div>

          <div class="qa-group" id="loop-tests">
            <h3>Loop Questions</h3>

            <div class="qa-item">
              <p>Q1. Write a java program to count digits of number. Input: <code>n=123</code> Output: <code>3</code></p>
              <details class="qa-answer">
                <summary>Show Answer</summary>
                <pre><code>int n=123, count=0;
while(n>0)
{
  count++;
  n=n/10;
}
System.out.println(count); //3</code></pre>
              </details>
            </div>

            <div class="qa-item">
              <p>Q2. Write a java program to print sum of digits. Input: <code>n=123</code> Output: <code>6</code></p>
              <details class="qa-answer">
                <summary>Show Answer</summary>
                <pre><code>int n=123, sum=0;
while(n>0)
{
  int rem=n%10;
  sum+=rem;
  n=n/10;
}
System.out.println(sum); //6</code></pre>
              </details>
            </div>

            <div class="qa-item">
              <p>Q3. Write a java program to reverse a number. Input: <code>n=123</code> Output: <code>321</code></p>
              <details class="qa-answer">
                <summary>Show Answer</summary>
                <pre><code>int n=123, rev=0;
while(n>0)
{
  int rem=n%10;
  rev=rev*10+rem;
  n=n/10;
}
System.out.println(rev); //321</code></pre>
              </details>
            </div>

            <div class="qa-item">
              <p>Q4. Write a java program to print 5 table.</p>
              <details class="qa-answer">
                <summary>Show Answer</summary>
                <pre><code>int num=5;
for(int i=1;i<=10;i++)
{
  System.out.println(num+"*"+i+"="+(num*i));
}</code></pre>
              </details>
            </div>

            <div class="qa-item">
              <p>Q5. Write a java program to check palindrome number.</p>
              <details class="qa-answer">
                <summary>Show Answer</summary>
                <pre><code>int n=1221, ori=n, rev=0;
while(n>0)
{
  int rem=n%10;
  rev=rev*10+rem;
  n=n/10;
}
System.out.println(ori==rev ? "palindrome" : "Not palindrome");</code></pre>
              </details>
            </div>

            <div class="qa-item">
              <p>Q6. Write a java program to check Armstrong number.</p>
              <details class="qa-answer">
                <summary>Show Answer</summary>
                <pre><code>int n=153, ori=n, sum=0;
while(n>0)
{
  int rem=n%10;
  sum+=rem*rem*rem;
  n=n/10;
}
System.out.println(ori==sum ? "Armstrong" : "Not Armstrong");</code></pre>
              </details>
            </div>

            <div class="qa-item">
              <p>Q7. Write a java program to print factors of a number. Input: <code>n=6</code> Output: <code>1 2 3 6</code></p>
              <details class="qa-answer">
                <summary>Show Answer</summary>
                <pre><code>int n=6;
for(int i=1;i<=n;i++)
{
  if(n%i==0) System.out.print(i+" ");
}</code></pre>
              </details>
            </div>

            <div class="qa-item">
              <p>Q8. Write a java program to print Fibonacci series. Input: <code>0 1</code> Output: <code>0 1 1 2 3 5 ...</code></p>
              <details class="qa-answer">
                <summary>Show Answer</summary>
                <pre><code>int f=0, s=1;
System.out.print(f+" "+s+" ");
for(int i=1;i<=8;i++)
{
  int sum=f+s;
  System.out.print(sum+" ");
  f=s;
  s=sum;
}</code></pre>
              </details>
            </div>
          </div>

          <div class="qa-group" id="array-tests">
            <h3>Array Questions</h3>

            <div class="qa-item">
              <p>Q1. Print array elements. Input: <code>{1,2,3,4,5}</code></p>
              <details class="qa-answer">
                <summary>Show Answer</summary>
                <pre><code>int[] a={1,2,3,4,5};
for(int i=0;i<a.length;i++)
{
  System.out.print(a[i]+" ");
}</code></pre>
              </details>
            </div>

            <div class="qa-item">
              <p>Q2. Print array index values. Input: <code>{1,2,3,4,5}</code> Output: <code>0 1 2 3 4</code></p>
              <details class="qa-answer">
                <summary>Show Answer</summary>
                <pre><code>int[] a={1,2,3,4,5};
for(int i=0;i<a.length;i++)
{
  System.out.print(i+" ");
}</code></pre>
              </details>
            </div>

            <div class="qa-item">
              <p>Q3. Add 1st and last element. Input: <code>{1,2,3,4,5}</code> Output: <code>6</code></p>
              <details class="qa-answer">
                <summary>Show Answer</summary>
                <pre><code>int[] a={1,2,3,4,5};
int res=a[0]+a[a.length-1];
System.out.println(res); //6</code></pre>
              </details>
            </div>

            <div class="qa-item">
              <p>Q4. Print even numbers and count even numbers in array.</p>
              <details class="qa-answer">
                <summary>Show Answer</summary>
                <pre><code>int[] a={1,2,3,4,5};
int count=0;
for(int i=0;i<a.length;i++)
{
  if(a[i]%2==0)
  {
    System.out.print(a[i]+" ");
    count++;
  }
}
System.out.println("\ncount="+count);</code></pre>
              </details>
            </div>

            <div class="qa-item">
              <p>Q5. Print prime numbers in array. Input: <code>{1,2,3,4,5}</code> Output: <code>2 3 5</code></p>
              <details class="qa-answer">
                <summary>Show Answer</summary>
                <pre><code>int[] a={1,2,3,4,5};
for(int i=0;i<a.length;i++)
{
  int c=0;
  for(int j=1;j<=a[i];j++)
  {
    if(a[i]%j==0) c++;
  }
  if(c==2) System.out.print(a[i]+" ");
}</code></pre>
              </details>
            </div>

            <div class="qa-item">
              <p>Q6. Print duplicate and unique elements. Input: <code>{1,2,3,1,2,1}</code></p>
              <details class="qa-answer">
                <summary>Show Answer</summary>
                <pre><code>int[] a={1,2,3,1,2,1};
System.out.print("Duplicates: ");
for(int i=0;i<a.length;i++)
{
  for(int j=i+1;j<a.length;j++)
  {
    if(a[i]==a[j])
    {
      System.out.print(a[i]+" ");
      break;
    }
  }
}
System.out.println();

System.out.print("Unique: ");
for(int i=0;i<a.length;i++)
{
  int freq=0;
  for(int j=0;j<a.length;j++) if(a[i]==a[j]) freq++;
  if(freq==1) System.out.print(a[i]+" ");
}</code></pre>
              </details>
            </div>

            <div class="qa-item">
              <p>Q7. Sort array, print max, second max and min.</p>
              <details class="qa-answer">
                <summary>Show Answer</summary>
                <pre><code>int[] a={1,4,2,5};
Arrays.sort(a);
System.out.println(Arrays.toString(a)); // [1, 2, 4, 5]
System.out.println("max="+a[a.length-1]);      //5
System.out.println("second max="+a[a.length-2]); //4
System.out.println("min="+a[0]);               //1</code></pre>
              </details>
            </div>

            <div class="qa-item">
              <p>Q8. Missing number. Input: <code>{1,2,4,5}</code> Output: <code>3</code></p>
              <details class="qa-answer">
                <summary>Show Answer</summary>
                <pre><code>int[] a={1,2,4,5};
int n=a.length+1;
int total=n*(n+1)/2;
int sum=0;
for(int i=0;i<a.length;i++) sum+=a[i];
System.out.println(total-sum); //3</code></pre>
              </details>
            </div>
          </div>

          <div class="qa-group" id="string-tests">
            <h3>String Questions</h3>

            <div class="qa-item">
              <p>Q1. How many classes in String Handling? What are they?</p>
              <details class="qa-answer">
                <summary>Show Answer</summary>
                <p>4 classes: <code>String</code>, <code>StringBuffer</code>, <code>StringBuilder</code>, <code>StringTokenizer</code>.</p>
              </details>
            </div>

            <div class="qa-item">
              <p>Q2. Check 1st character is vowel or consonant. Input: <code>"virat"</code></p>
              <details class="qa-answer">
                <summary>Show Answer</summary>
                <pre><code>String s="virat";
char ch=s.charAt(0);
if("aeiouAEIOU".indexOf(ch)>=0)
{
  System.out.println("vowel");
}
else
{
  System.out.println("consonant");
}</code></pre>
              </details>
            </div>

            <div class="qa-item">
              <p>Q3. Reverse a String. Input: <code>"java"</code> Output: <code>"avaj"</code></p>
              <details class="qa-answer">
                <summary>Show Answer</summary>
                <pre><code>String s="java";
String rev="";
for(int i=s.length()-1;i>=0;i--)
{
  rev+=s.charAt(i);
}
System.out.println(rev);</code></pre>
              </details>
            </div>

            <div class="qa-item">
              <p>Q4. Check String palindrome or not. Input: <code>"level"</code></p>
              <details class="qa-answer">
                <summary>Show Answer</summary>
                <pre><code>String s="level";
String rev="";
for(int i=s.length()-1;i>=0;i--) rev+=s.charAt(i);
System.out.println(s.equals(rev) ? "palindrome" : "not palindrome");</code></pre>
              </details>
            </div>

            <div class="qa-item">
              <p>Q5. Count vowels in a String.</p>
              <details class="qa-answer">
                <summary>Show Answer</summary>
                <pre><code>String s="excelr java";
int count=0;
for(int i=0;i<s.length();i++)
{
  char ch=s.charAt(i);
  if("aeiouAEIOU".indexOf(ch)>=0) count++;
}
System.out.println(count);</code></pre>
              </details>
            </div>

            <div class="qa-item">
              <p>Q6. Difference between String, StringBuffer, StringBuilder.</p>
              <details class="qa-answer">
                <summary>Show Answer</summary>
                <table>
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Mutable?</th>
                      <th>Thread-safe?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>String</td>
                      <td>No (immutable)</td>
                      <td>Yes (immutable behavior)</td>
                    </tr>
                    <tr>
                      <td>StringBuffer</td>
                      <td>Yes</td>
                      <td>Yes (synchronized)</td>
                    </tr>
                    <tr>
                      <td>StringBuilder</td>
                      <td>Yes</td>
                      <td>No (faster in single-thread)</td>
                    </tr>
                  </tbody>
                </table>
              </details>
            </div>

            <h3>Slip Test on String Handling (15 Questions)</h3>

            <div class="qa-item">
              <p>S1. How many classes contains String Handling? What are they?</p>
              <details class="qa-answer">
                <summary>Show Answer</summary>
                <p>4 classes: <code>String</code>, <code>StringBuffer</code>, <code>StringBuilder</code>, <code>StringTokenizer</code>.</p>
              </details>
            </div>

            <div class="qa-item">
              <p>S2. What is String?</p>
              <details class="qa-answer">
                <summary>Show Answer</summary>
                <p><code>String</code> is a predefined class used to store a sequence of characters inside double quotes.</p>
              </details>
            </div>

            <div class="qa-item">
              <p>S3. Purpose of String?</p>
              <details class="qa-answer">
                <summary>Show Answer</summary>
                <p>Purpose of String is to store and process text data (multiple characters).</p>
              </details>
            </div>

            <div class="qa-item">
              <p>S4. Difference between literal and new keyword?</p>
              <details class="qa-answer">
                <summary>Show Answer</summary>
                <table>
                  <thead>
                    <tr>
                      <th>Way</th>
                      <th>Storage</th>
                      <th>Object creation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Literal</td>
                      <td>String Constant Pool (SCP)</td>
                      <td>Same value reuses object</td>
                    </tr>
                    <tr>
                      <td><code>new String()</code></td>
                      <td>Heap</td>
                      <td>Creates new object each time</td>
                    </tr>
                  </tbody>
                </table>
              </details>
            </div>

            <div class="qa-item">
              <p>S5. Difference between <code>equals()</code> and <code>==</code>?</p>
              <details class="qa-answer">
                <summary>Show Answer</summary>
                <p><code>equals()</code> compares content/data. <code>==</code> compares reference (memory address).</p>
              </details>
            </div>

            <div class="qa-item">
              <p>S6. Difference between mutable and immutable?</p>
              <details class="qa-answer">
                <summary>Show Answer</summary>
                <p><strong>Mutable</strong>: data can be changed in same object (e.g., StringBuffer, StringBuilder).</p>
                <p><strong>Immutable</strong>: data cannot be changed; new object is created (e.g., String).</p>
              </details>
            </div>

            <div class="qa-item">
              <p>S7. Difference between String, StringBuffer, StringBuilder?</p>
              <details class="qa-answer">
                <summary>Show Answer</summary>
                <table>
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Mutable?</th>
                      <th>Synchronized?</th>
                      <th>Thread-safe?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>String</td>
                      <td>No</td>
                      <td>Immutable behavior</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>StringBuffer</td>
                      <td>Yes</td>
                      <td>Yes</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>StringBuilder</td>
                      <td>Yes</td>
                      <td>No</td>
                      <td>No (faster in single thread)</td>
                    </tr>
                  </tbody>
                </table>
              </details>
            </div>

            <div class="qa-item">
              <p>S8.</p>
              <pre><code>String s1="Virat";
String s2="Virat";
System.out.println(s1.equals(s2)); // ?
System.out.println(s1==s2);        // ?</code></pre>
              <details class="qa-answer">
                <summary>Show Answer</summary>
                <p><code>s1.equals(s2)</code> -> <strong>true</strong></p>
                <p><code>s1==s2</code> -> <strong>true</strong> (same SCP reference)</p>
              </details>
            </div>

            <div class="qa-item">
              <p>S9.</p>
              <pre><code>String s3=new String("dhoni");
String s4=new String("dhoni");
System.out.println(s3.equals(s4)); // ?
System.out.println(s3==s4);        // ?</code></pre>
              <details class="qa-answer">
                <summary>Show Answer</summary>
                <p><code>s3.equals(s4)</code> -> <strong>true</strong></p>
                <p><code>s3==s4</code> -> <strong>false</strong> (different heap objects)</p>
              </details>
            </div>

            <div class="qa-item">
              <p>S10. What is StringTokenizer? purpose?</p>
              <details class="qa-answer">
                <summary>Show Answer</summary>
                <p><code>StringTokenizer</code> is a predefined class in <code>java.util</code> used to break string into tokens using delimiter.</p>
              </details>
            </div>

            <div class="qa-item">
              <p>S11. purpose of <code>charAt()</code>? Example?</p>
              <details class="qa-answer">
                <summary>Show Answer</summary>
                <p><code>charAt()</code> returns character at given index.</p>
                <pre><code>String s="Virat";
System.out.println(s.charAt(2)); // r</code></pre>
              </details>
            </div>

            <div class="qa-item">
              <p>S12. purpose of <code>length()</code>? Example?</p>
              <details class="qa-answer">
                <summary>Show Answer</summary>
                <p><code>length()</code> returns total number of characters in string.</p>
                <pre><code>String s="Virat";
System.out.println(s.length()); // 5</code></pre>
              </details>
            </div>

            <div class="qa-item">
              <p>S13. purpose of <code>split()</code>? Example?</p>
              <details class="qa-answer">
                <summary>Show Answer</summary>
                <p><code>split()</code> divides string into array based on delimiter.</p>
                <pre><code>String s="java-python-c";
System.out.println(Arrays.toString(s.split("-")));
// [java, python, c]</code></pre>
              </details>
            </div>

            <div class="qa-item">
              <p>S14. purpose of <code>toCharArray()</code>? Example?</p>
              <details class="qa-answer">
                <summary>Show Answer</summary>
                <p><code>toCharArray()</code> converts string to character array.</p>
                <pre><code>String s="Java";
System.out.println(Arrays.toString(s.toCharArray()));
// [J, a, v, a]</code></pre>
              </details>
            </div>

            <div class="qa-item">
              <p>S15. purpose of <code>substring()</code>? Example?</p>
              <details class="qa-answer">
                <summary>Show Answer</summary>
                <p><code>substring()</code> returns part of string by index range.</p>
                <pre><code>String s="Hemanth";
System.out.println(s.substring(2,5)); // man
System.out.println(s.substring(4));   // nth</code></pre>
              </details>
            </div>
          </div>
        </details>
      </section>

      <section class="card" id="string-handling">
        <details>
          <summary>18.String Handling (String, StringBuffer, StringBuilder, StringTokenizer)</summary>

          <h3>String Handling</h3>
          <ol>
            <li>String</li>
            <li>StringBuffer</li>
            <li>StringBuilder</li>
            <li>StringTokenizer</li>
          </ol>
          <div class="tip">Note: String, StringBuffer and StringBuilder are in <code>java.lang</code> package (by default).</div>

          <h3>1.String</h3>
          <ol>
            <li>String is a predefined class.</li>
            <li>String stores multiple characters enclosed with double quotes.</li>
            <li>String values can be stored in 2 ways: literal and <code>new</code> keyword.</li>
            <li>String is immutable, synchronized and thread-safe.</li>
          </ol>

          <h3>Literal vs new keyword</h3>
          <table>
            <thead>
              <tr>
                <th>Way</th>
                <th>Storage Area</th>
                <th>Same Data Behavior</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Literal</td>
                <td>String Constant Pool (SCP)</td>
                <td>Reuses same object for same value</td>
              </tr>
              <tr>
                <td>new String()</td>
                <td>Heap</td>
                <td>Creates new object each time</td>
              </tr>
            </tbody>
          </table>

          <pre><code>String s1="pawan";
String s2="pawan";
System.out.println(System.identityHashCode(s1));
System.out.println(System.identityHashCode(s2)); //same hash in many runs

String s3=new String("pawan");
String s4=new String("pawan");
System.out.println(System.identityHashCode(s3));
System.out.println(System.identityHashCode(s4)); //different hash</code></pre>

          <h3>equals() vs ==</h3>
          <p><code>equals()</code> compares string data. <code>==</code> compares reference/address.</p>
          <pre><code>String s1="pawan";
String s2="pawan";
System.out.println(s1.equals(s2)); //true
System.out.println(s1==s2);        //true

String s3=new String("pawan");
String s4=new String("pawan");
System.out.println(s3.equals(s4)); //true
System.out.println(s3==s4);        //false</code></pre>

          <h3>Mutable vs Immutable</h3>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Meaning</th>
                <th>Example Classes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mutable</td>
                <td>Data can be changed</td>
                <td>StringBuffer, StringBuilder</td>
              </tr>
              <tr>
                <td>Immutable</td>
                <td>Data cannot be changed (new object created)</td>
                <td>String</td>
              </tr>
            </tbody>
          </table>

          <h3>Common String Methods</h3>
          <table>
            <thead>
              <tr>
                <th>Method</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><code>charAt(i)</code></td><td>Get char at index</td></tr>
              <tr><td><code>indexOf(ch)</code></td><td>First occurrence index</td></tr>
              <tr><td><code>lastIndexOf(ch)</code></td><td>Last occurrence index</td></tr>
              <tr><td><code>substring(a,b)</code></td><td>Part of string</td></tr>
              <tr><td><code>length()</code></td><td>Total characters</td></tr>
              <tr><td><code>split(delimiter)</code></td><td>Split into array</td></tr>
              <tr><td><code>toCharArray()</code></td><td>Convert to char array</td></tr>
              <tr><td><code>equals()</code></td><td>Case-sensitive compare</td></tr>
              <tr><td><code>equalsIgnoreCase()</code></td><td>Case-insensitive compare</td></tr>
              <tr><td><code>concat()</code></td><td>Join strings</td></tr>
              <tr><td><code>startsWith()</code></td><td>Check prefix</td></tr>
              <tr><td><code>endsWith()</code></td><td>Check suffix</td></tr>
              <tr><td><code>replace()</code></td><td>Replace char(s)</td></tr>
              <tr><td><code>replaceAll()</code></td><td>Replace pattern sequence</td></tr>
              <tr><td><code>toUpperCase()</code></td><td>Uppercase conversion</td></tr>
              <tr><td><code>toLowerCase()</code></td><td>Lowercase conversion</td></tr>
              <tr><td><code>hashCode()</code></td><td>Hash based on content</td></tr>
            </tbody>
          </table>

          <h3>Type Conversion Methods</h3>
          <pre><code>// String -> int
String s="123";
int a=Integer.parseInt(s);
System.out.println(a+5); //128

// int -> String
int n=123;
String txt=String.valueOf(n);
System.out.println(txt);</code></pre>

          <h3>2.StringBuffer</h3>
          <ol>
            <li>Predefined class.</li>
            <li>Mutable, synchronized, thread-safe.</li>
            <li>Created using <code>new</code> keyword only.</li>
          </ol>
          <pre><code>StringBuffer sb=new StringBuffer("pawan");
sb.append("kalyan");
sb.insert(1,'a');
sb.delete(1,4);
sb.reverse();
System.out.println(sb);</code></pre>

          <h3>3.StringBuilder</h3>
          <ol>
            <li>Predefined class.</li>
            <li>Mutable, not synchronized, not thread-safe.</li>
            <li>Faster than StringBuffer in single-thread operations.</li>
          </ol>
          <pre><code>StringBuilder sb=new StringBuilder("virat");
sb.append(" kohli");
System.out.println(sb);</code></pre>

          <h3>4.StringTokenizer</h3>
          <ol>
            <li>Predefined class in <code>java.util</code>.</li>
            <li>Used to split string into tokens based on delimiter.</li>
            <li>Main methods: <code>hasMoreElements()</code>, <code>nextElement()</code>.</li>
          </ol>
          <pre><code>import java.util.*;
StringTokenizer st=new StringTokenizer("vi_ra_ta","_");
System.out.println(st.countTokens());
while(st.hasMoreElements())
{
  System.out.println(st.nextElement());
}</code></pre>

          <h3>Program Bank on Strings</h3>
          <pre><code>// 1) 1st char vowel or consonant
String s="virat";
char ch=s.charAt(0);
System.out.println("aeiouAEIOU".indexOf(ch)>=0?"vowel":"consonant");

// 2) each character vowel/consonant
for(int i=0;i<s.length();i++)
{
  char c=s.charAt(i);
  System.out.println("aeiouAEIOU".indexOf(c)>=0?"vowel":"consonant");
}

// 3) copy s1 to s2
String s1="virat", s2="";
for(int i=0;i<s1.length();i++) s2=s2+s1.charAt(i);

// 4) reverse string
String rev="";
for(int i=s1.length()-1;i>=0;i--) rev=rev+s1.charAt(i);

// 5) first char uppercase (ASCII way)
char f=s1.charAt(0);
char up=(char)(f-32);

// 6) palindrome
String p="madam", r="";
for(int i=p.length()-1;i>=0;i--) r+=p.charAt(i);
System.out.println(p.equals(r)?"palindrome":"Not palindrome");

// 7) anagram
String a1="bhav", a2="vhab";
char[] c1=a1.toCharArray();
char[] c2=a2.toCharArray();
Arrays.sort(c1); Arrays.sort(c2);
System.out.println(Arrays.equals(c1,c2)?"Anagram":"Not Anagram");

// 8) count alphabets, digits, symbols
String z="virat19@a";
int alpha=0,digit=0,symbol=0;
for(int i=0;i<z.length();i++)
{
  char x=z.charAt(i);
  if((x>='a'&&x<='z')||(x>='A'&&x<='Z')) alpha++;
  else if(x>='0'&&x<='9') digit++;
  else symbol++;
}

// 9) ASCII values
String t="Bhavi";
for(int i=0;i<t.length();i++) System.out.println(t.charAt(i)+":"+(int)t.charAt(i));

// 10) uppercase to lowercase
String mix="BhavI", out="";
for(int i=0;i<mix.length();i++)
{
  char x=mix.charAt(i);
  if(x>='A'&&x<='Z') out+=(char)(x+32);
  else out+=x;
}

// 11) length of each word
String[] words={"virat","is","a","champ"};
for(int i=0;i<words.length;i++) System.out.println(words[i].length());

// 12) reverse each word
for(int i=0;i<words.length;i++)
{
  for(int j=words[i].length()-1;j>=0;j--) System.out.print(words[i].charAt(j));
  System.out.println();
}

// 13) longest word
String[] w={"viratkohli","is","a","champ"};
int idx=0;
for(int i=1;i<w.length;i++) if(w[i].length()>w[idx].length()) idx=i;
System.out.println(w[idx]);

// 14) remove spaces
String m="virat is a king";
System.out.println(m.replaceAll(" ",""));

// 15) remove spaces without predefined
String n="virat is a king", noSpace="";
for(int i=0;i<n.length();i++) if(n.charAt(i)!=' ') noSpace+=n.charAt(i);

// 16) character frequency
String freq="aabbabcc";
int[] cnt=new int[256];
for(int i=0;i<freq.length();i++) cnt[freq.charAt(i)]++;
for(int i=0;i<cnt.length;i++) if(cnt[i]!=0) System.out.println((char)i+" : "+cnt[i]);

// 17) duplicate chars
String d="ababac";
for(char k='a';k<='z';k++)
{
  int c=0;
  for(int i=0;i<d.length();i++) if(d.charAt(i)==k) c++;
  if(c>1) System.out.println(k+":"+c);
}

// 18) unique chars
for(char k='a';k<='z';k++)
{
  int c=0;
  for(int i=0;i<d.length();i++) if(d.charAt(i)==k) c++;
  if(c==1) System.out.println(k+":"+c);
}

// 19) alphabet position
String ap="bhavi";
for(int i=0;i<ap.length();i++) System.out.println(ap.charAt(i)+":"+(ap.charAt(i)-96));

// 20) all permutations (simple approach)
String per="abc";
for(char x='a';x<='c';x++)
for(char y='a';y<='c';y++)
for(char z='a';z<='c';z++)
if(x!=y && y!=z && z!=x) System.out.println(x+" "+y+" "+z);

// 21) rotation check
String os="aradhya", ks="radhyaa";
String ns=os.concat(os);
System.out.println(ns.contains(ks)?"Rotational string":"Not Rotational string");</code></pre>

          <h3>Programs on Strings (I/p and O/p Format)</h3>
          <ol>
            <li>
              <p>Check 1st character is vowel or consonant.</p>
              <p class="sub">I/p: <code>String s="virat"</code> | O/p: <code>consonant</code></p>
              <pre><code>String s="virat";
char ch=s.charAt(0);
if("aeiouAEIOU".indexOf(ch)>=0) System.out.println("vowel");
else System.out.println("consonant");</code></pre>
            </li>

            <li>
              <p>Check each character is vowel or consonant.</p>
              <p class="sub">I/p: <code>String s="virat"</code></p>
              <pre><code>String s="virat";
for(int i=0;i&lt;s.length();i++)
{
  char ch=s.charAt(i);
  if("aeiouAEIOU".indexOf(ch)>=0) System.out.println("vowel");
  else System.out.println("consonant");
}</code></pre>
            </li>

            <li>
              <p>Copy one String into another String.</p>
              <p class="sub">I/p: <code>s1="virat"</code> | O/p: <code>s2="virat"</code></p>
              <pre><code>String s1="virat";
String s2="";
for(int i=0;i&lt;s1.length();i++)
{
  s2=s2+s1.charAt(i);
}
System.out.println(s2);</code></pre>
            </li>

            <li>
              <p>Reverse a String.</p>
              <p class="sub">I/p: <code>s1="virat"</code> | O/p: <code>tariv</code></p>
              <pre><code>String s1="virat";
String rev="";
for(int i=s1.length()-1;i>=0;i--)
{
  rev=rev+s1.charAt(i);
}
System.out.println(rev);</code></pre>
            </li>

            <li>
              <p>Convert 1st character into capital.</p>
              <p class="sub">I/p: <code>s1="virat"</code> | O/p: <code>Virat</code></p>
              <pre><code>String s1="virat";
char first=s1.charAt(0);
char upper=(char)(first-32);
String out=upper+s1.substring(1);
System.out.println(out);</code></pre>
            </li>

            <li>
              <p>Check String is palindrome or not.</p>
              <p class="sub">I/p: <code>s1="mam"</code> | O/p: <code>palindrome</code></p>
              <pre><code>String s1="mam";
String rev="";
for(int i=s1.length()-1;i>=0;i--) rev+=s1.charAt(i);
System.out.println(s1.equals(rev)?"palindrome":"not palindrome");</code></pre>
            </li>

            <li>
              <p>Check String is anagram or not.</p>
              <p class="sub">I/p: <code>s1="bhav", s2="bhva"</code> | O/p: <code>anagram</code></p>
              <pre><code>String s1="bhav";
String s2="bhva";
char[] c1=s1.toCharArray();
char[] c2=s2.toCharArray();
Arrays.sort(c1);
Arrays.sort(c2);
System.out.println(Arrays.equals(c1,c2)?"anagram":"not anagram");</code></pre>
            </li>

            <li>
              <p>Count capitals, small letters, digits, symbols.</p>
              <p class="sub">I/p: <code>"Bhav2001@#"</code></p>
              <pre><code>String s="Bhav2001@#";
int upper=0, lower=0, digits=0, symbols=0;
for(int i=0;i&lt;s.length();i++)
{
  char ch=s.charAt(i);
  if(ch>='A'&&ch<='Z') upper++;
  else if(ch>='a'&&ch<='z') lower++;
  else if(ch>='0'&&ch<='9') digits++;
  else symbols++;
}
System.out.println("Capital letters===>"+upper);
System.out.println("Small letters=====>"+lower);
System.out.println("digits============>"+digits);
System.out.println("symbols===========>"+symbols);</code></pre>
            </li>

            <li>
              <p>Print ASCII values in String.</p>
              <p class="sub">I/p: <code>"abcd"</code> | O/p: <code>97 98 99 100</code></p>
              <pre><code>String s="abcd";
for(int i=0;i&lt;s.length();i++)
{
  System.out.print((int)s.charAt(i)+" ");
}</code></pre>
            </li>

            <li>
              <p>Convert uppercase characters into lowercase.</p>
              <p class="sub">I/p: <code>"vIrAt"</code> | O/p: <code>virat</code></p>
              <pre><code>String s1="vIrAt";
String out="";
for(int i=0;i&lt;s1.length();i++)
{
  char ch=s1.charAt(i);
  if(ch>='A'&&ch<='Z') out+=(char)(ch+32);
  else out+=ch;
}
System.out.println(out);</code></pre>
            </li>

            <li>
              <p>Print length of each word.</p>
              <p class="sub">I/p: <code>{"virat","is","a","champ"}</code> | O/p: <code>5 2 1 5</code></p>
              <pre><code>String[] s={"virat","is","a","champ"};
for(int i=0;i&lt;s.length;i++)
{
  System.out.print(s[i].length()+" ");
}</code></pre>
            </li>

            <li>
              <p>Reverse each word.</p>
              <p class="sub">I/p: <code>{"virat","is","a","champ"}</code> | O/p: <code>tariv si a pmahc</code></p>
              <pre><code>String[] s={"virat","is","a","champ"};
for(int i=0;i&lt;s.length;i++)
{
  for(int j=s[i].length()-1;j>=0;j--)
  {
    System.out.print(s[i].charAt(j));
  }
  System.out.print(" ");
}</code></pre>
            </li>

            <li>
              <p>Print longest word.</p>
              <p class="sub">I/p: <code>{"virat","is","a","champion"}</code> | O/p: <code>champion</code></p>
              <pre><code>String[] s={"virat","is","a","champion"};
int idx=0;
for(int i=1;i&lt;s.length;i++)
{
  if(s[i].length()>s[idx].length()) idx=i;
}
System.out.println(s[idx]);</code></pre>
            </li>

            <li>
              <p>Remove spaces without predefined methods.</p>
              <p class="sub">I/p: <code>"virat is a champ"</code> | O/p: <code>viratisachamp</code></p>
              <pre><code>String s="virat is a champ";
String res="";
for(int i=0;i&lt;s.length();i++)
{
  char ch=s.charAt(i);
  if(ch!=' ') res+=ch;
}
System.out.println(res);</code></pre>
            </li>

            <li>
              <p>Print frequency of each character.</p>
              <p class="sub">I/p: <code>"abcaba"</code> | O/p: <code>a---3 b---2 c---1</code></p>
              <pre><code>String s="abcaba";
for(char ch='a';ch&lt;='z';ch++)
{
  int count=0;
  for(int i=0;i&lt;s.length();i++) if(s.charAt(i)==ch) count++;
  if(count>0) System.out.println(ch+"---"+count);
}</code></pre>
            </li>

            <li>
              <p>Print duplicate characters.</p>
              <p class="sub">I/p: <code>"abcaba"</code> | O/p: <code>a---3 b---2</code></p>
              <pre><code>String s="abcaba";
for(char ch='a';ch&lt;='z';ch++)
{
  int count=0;
  for(int i=0;i&lt;s.length();i++) if(s.charAt(i)==ch) count++;
  if(count>1) System.out.println(ch+"---"+count);
}</code></pre>
            </li>

            <li>
              <p>Print unique characters.</p>
              <p class="sub">I/p: <code>"abcaba"</code> | O/p: <code>c---1</code></p>
              <pre><code>String s="abcaba";
for(char ch='a';ch&lt;='z';ch++)
{
  int count=0;
  for(int i=0;i&lt;s.length();i++) if(s.charAt(i)==ch) count++;
  if(count==1) System.out.println(ch+"---"+count);
}</code></pre>
            </li>

            <li>
              <p>Print characters in alphabet order position.</p>
              <p class="sub">I/p: <code>"bacd"</code> | O/p: <code>2 1 3 4</code></p>
              <pre><code>String s="bacd";
for(int i=0;i&lt;s.length();i++)
{
  System.out.print((s.charAt(i)-96)+" ");
}</code></pre>
            </li>

            <li>
              <p>Print all String permutations.</p>
              <pre><code>String s="abc";
for(char x='a';x&lt;='c';x++)
{
  for(char y='a';y&lt;='c';y++)
  {
    for(char z='a';z&lt;='c';z++)
    {
      if(x!=y && y!=z && z!=x)
      {
        System.out.println(x+""+y+""+z);
      }
    }
  }
}</code></pre>
            </li>

            <li>
              <p>Check one String rotation is another String.</p>
              <pre><code>String s1="aradhya";
String s2="radhyaa";
String doubled=s1+s1;
if(doubled.contains(s2)) System.out.println("rotation");
else System.out.println("not rotation");</code></pre>
            </li>
          </ol>
        </details>
      </section>

      <section class="card" id="java-features">
        <details>
          <summary>19.Java Features</summary>

          <h3>Java features</h3>
          <p>Java features are services or facilities.</p>
          <ol>
            <li>Simple programming language</li>
            <li>Platform independent programming language</li>
            <li>Statically typed programming language</li>
            <li>High level programming language</li>
            <li>Integrated programming language</li>
            <li>Robust programming language</li>
            <li>Both functional and object oriented programming language</li>
            <li>Portable programming language</li>
            <li>Multithread programming language</li>
            <li>Dynamic programming language</li>
          </ol>

          <h3>1. Simple programming language</h3>
          <ol>
            <li>Java is simple because it contains predefined methods.</li>
            <li>Java removed complicated topics like pointers.</li>
            <li>Java syntax is simple and easy to understand.</li>
          </ol>

          <h3>Predefined methods</h3>
          <p>Methods already present in JDK and developed by Java developers.</p>
          <p class="sub">Examples: <code>sqrt()</code>, <code>add()</code>, <code>max()</code>, <code>min()</code></p>

          <h3>User defined methods</h3>
          <p>Methods created by Java programmers.</p>
          <p class="sub">Examples: <code>bhavadeesh()</code>, <code>virat()</code>, <code>dhoni()</code>, <code>pawan()</code></p>

          <pre><code>class Demo
{
  public static void main(String[] args)
  {
    System.out.println(Math.sqrt(49)); //7.0
    System.out.println(Math.sqrt(81)); //9.0
    System.out.println(Math.pow(2,3)); //8.0
  }
}</code></pre>

          <h3>2. Platform independent programming language</h3>
          <p>A language where we can write program on one platform and execute on any platform.</p>
          <p class="sub">Examples: Java, Python</p>

          <h3>Platform dependent programming language</h3>
          <p>A language where we write and execute in the same platform type.</p>
          <p class="sub">Examples: C, C++</p>

          <h3>3. Statically typed programming language</h3>
          <p>Datatype must be specified before variable.</p>
          <pre><code>int a=10;
String c="20";</code></pre>

          <h3>Dynamically typed programming language</h3>
          <p>No need to specify datatype explicitly.</p>
          <pre><code>// Python example
a=10
c="20"</code></pre>

          <h3>4. High level programming language</h3>
          <p>Machine-understandable representation is transformed to human-understandable output.</p>
          <pre><code>int a=0b1010;      // machine style binary
System.out.println(a); //10 (human readable)</code></pre>

          <h3>5. Integrated programming language</h3>
          <p>Java uses both compilation and execution stages.</p>

          <h3>Compiler vs Interpreter</h3>
          <table>
            <thead>
              <tr>
                <th>Component</th>
                <th>Behavior</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Compiler</td>
                <td>Converts source code to bytecode at once</td>
              </tr>
              <tr>
                <td>Interpreter</td>
                <td>Executes bytecode line by line (in JVM)</td>
              </tr>
            </tbody>
          </table>

          <h3>JDK, JRE, JVM</h3>
          <ol>
            <li><strong>JDK</strong>: Java Development Kit (develop + run), contains JRE and JVM.</li>
            <li><strong>JRE</strong>: Java Runtime Environment (run only), contains JVM.</li>
            <li><strong>JVM</strong>: Java Virtual Machine, contains interpreter for bytecode execution.</li>
          </ol>

          <h3>6. Robust programming language</h3>
          <p>Robust means strong. Java is robust because of:</p>
          <ol>
            <li>Strong typing</li>
            <li>Garbage collector</li>
            <li>Exception handling</li>
          </ol>

          <pre><code>// Strong typing example
int a="virat kohli"; // compile-time error</code></pre>

          <p><strong>Garbage Collector</strong>: removes unwanted memory and improves performance.</p>
          <p><strong>Exception Handling</strong>: converts abnormal termination into normal termination.</p>

          <h3>7. Both functional/procedural and object oriented</h3>
          <p>Java supports fundamentals and OOP principles (Inheritance, Polymorphism, Abstraction, Encapsulation).</p>
          <p class="sub">Procedural only example: C</p>

          <h3>8. Portable programming language</h3>
          <p>Java bytecode can be migrated from one platform to another without changes.</p>

          <h3>9. Multithread programming language</h3>
          <ol>
            <li>Java provides APIs like <code>Thread</code> and <code>Runnable</code>.</li>
            <li>Multiple threads can run simultaneously and improve application performance.</li>
          </ol>

          <h3>10. Dynamic programming language</h3>
          <p>In Java, all <code>.class</code> files are not loaded initially. Required classes are loaded when needed.</p>
          <p>Main advantage: application gets latest required class at runtime.</p>

          <pre><code>class Student
{
  static
  {
    System.out.println("student class loaded");
  }
}

class Test
{
  static
  {
    System.out.println("Test class loaded");
  }

  public static void main(String[] args)
  {
    System.out.println("Hello");
    // Student s1=new Student(); // uncomment to load Student class
  }
}</code></pre>

          <h3>Literals (recap)</h3>
          <p>Literals are input values stored in variables.</p>
          <ol>
            <li>Integer Literals</li>
            <li>Floating Point Literals</li>
            <li>Character Literals</li>
            <li>Boolean Literals</li>
            <li>String Literals</li>
            <li>Object Literals (<code>null</code>)</li>
          </ol>

          <pre><code>int a=12;
// int -> datatype
// a   -> variable
// 12  -> value (literal)</code></pre>
        </details>
      </section>

      <section class="card" id="methods">
        <details>
          <summary>20.Methods</summary>

          <h3>Methods</h3>
          <ol>
            <li>Method is collection of group of statements.</li>
            <li>Purpose of method is to perform task and produce code reusability.</li>
          </ol>

          <h3>Methods contains 3 parts</h3>
          <ol>
            <li>Method heading</li>
            <li>Method body</li>
            <li>Method calling</li>
          </ol>

          <h3>Method heading</h3>
          <p>Method heading is a collection of return type, method name and formal parameters.</p>

          <h3>Method body</h3>
          <p>Method body is a collection of statements.</p>

          <h3>Formal parameters</h3>
          <p>Formal parameters take values (actual arguments) from method call.</p>

          <h3>Actual arguments</h3>
          <p>Actual arguments send values to formal parameters in method heading.</p>

          <h3>void</h3>
          <p><code>void</code> is a return type and returns empty.</p>

          <h3>Method Syntax</h3>
          <pre><code>returnType methodName(formalParameters)
{
  statements
}</code></pre>

          <pre><code>class Sample
{
  void suresh(int a)
  {
    System.out.println(a); //8
  }

  public static void main(String[] args)
  {
    Sample s1=new Sample();
    s1.suresh(8);
  }
}</code></pre>

          <h3>Methods can define 4 ways</h3>
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>with formal parameters and without return statement</td></tr>
              <tr><td>2</td><td>without formal parameters and without return statement</td></tr>
              <tr><td>3</td><td>with formal parameters and with return statement</td></tr>
              <tr><td>4</td><td>without formal parameters and with return statement</td></tr>
            </tbody>
          </table>

          <div class="tip"><code>void</code> -> typically with <code>System.out.println()</code><br />
          Datatype return -> use <code>return</code> statement.</div>

          <h3>1. with formal parameters and without return statement</h3>
          <pre><code>class Demo
{
  void parithosh(String s)
  {
    System.out.println(s);
  }

  public static void main(String[] args)
  {
    Demo d1=new Demo();
    d1.parithosh("virat");
  }
}</code></pre>

          <h3>2. without formal parameters and without return statement</h3>
          <pre><code>class Demo
{
  void parithosh()
  {
    System.out.println("method topic started");
  }

  public static void main(String[] args)
  {
    Demo d1=new Demo();
    d1.parithosh();
  }
}</code></pre>

          <pre><code>class Sample
{
  void add(int a,int b)
  {
    System.out.println(a+b);
  }

  public static void main(String[] args)
  {
    Sample s1=new Sample();
    s1.add(6,5);
  }
}</code></pre>

          <h3>3. with formal parameters and with return statement</h3>
          <pre><code>class Sample
{
  int venky(int a)
  {
    return a;
  }

  public static void main(String[] args)
  {
    Sample s1=new Sample();
    int res=s1.venky(16);
    System.out.println(res);
  }
}</code></pre>

          <pre><code>class Sample
{
  float venky(float a)
  {
    return a;
  }

  public static void main(String[] args)
  {
    Sample s1=new Sample();
    float res=s1.venky(16.6f);
    System.out.println(res);
  }
}</code></pre>

          <h3>4. without formal parameters and with return statement</h3>
          <pre><code>class Sample
{
  String hemanth()
  {
    return "virat is a champ";
  }

  public static void main(String[] args)
  {
    Sample s1=new Sample();
    String s=s1.hemanth();
    System.out.println(s);
  }
}</code></pre>

          <h3>Passing array to method</h3>
          <pre><code>import java.util.*;
class Sample
{
  void add(int[] a)
  {
    System.out.println(Arrays.toString(a));
  }

  public static void main(String[] args)
  {
    Sample s1=new Sample();
    int[] b={1,2,3,4};
    s1.add(b);
  }
}</code></pre>
        </details>
      </section>

      <section class="card" id="scanner">
        <details>
          <summary>21.Scanner</summary>

          <h3>Scanner</h3>
          <ol>
            <li>Scanner is a predefined class.</li>
            <li>Purpose of Scanner is to take input from console (command prompt) and print output.</li>
            <li>Scanner is present in <code>java.util</code> package.</li>
          </ol>

          <h3>Steps to take input from Scanner</h3>
          <ol>
            <li>Import <code>java.util</code> package.</li>
            <li>Create object for Scanner class.</li>
            <li>Use proper input methods based on datatype.</li>
          </ol>

          <table>
            <thead>
              <tr>
                <th>Datatype</th>
                <th>Scanner method</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>int</td><td><code>nextInt()</code></td></tr>
              <tr><td>float</td><td><code>nextFloat()</code></td></tr>
              <tr><td>double</td><td><code>nextDouble()</code></td></tr>
              <tr><td>boolean</td><td><code>nextBoolean()</code></td></tr>
              <tr><td>char</td><td><code>next().charAt(index)</code></td></tr>
              <tr><td>String (single word)</td><td><code>next()</code></td></tr>
              <tr><td>String (multiple words)</td><td><code>nextLine()</code></td></tr>
            </tbody>
          </table>

          <h3>Examples</h3>
          <pre><code>import java.util.Scanner;
class Demo
{
  public static void main(String[] args)
  {
    Scanner sc=new Scanner(System.in);
    int a=sc.nextInt();
    System.out.println("output is"+a); // output is12
  }
}</code></pre>

          <pre><code>import java.util.*;
class Sample
{
  public static void main(String[] args)
  {
    Scanner s1=new Scanner(System.in);
    System.out.println("enter float num=");
    float num=s1.nextFloat();
    System.out.println(num);
  }
}</code></pre>

          <pre><code>import java.util.*;
class Sample
{
  public static void main(String[] args)
  {
    Scanner s1=new Scanner(System.in);
    System.out.println("enter double num=");
    double num=s1.nextDouble();
    System.out.println(num);
  }
}</code></pre>

          <pre><code>import java.util.*;
class Sample
{
  public static void main(String[] args)
  {
    Scanner s1=new Scanner(System.in);
    System.out.println("enter boolean value=");
    boolean b=s1.nextBoolean();
    System.out.println(b);
  }
}</code></pre>

          <pre><code>import java.util.*;
class Demo
{
  public static void main(String[] args)
  {
    Scanner sc=new Scanner(System.in);
    System.out.println("enter char value=");
    char ch=sc.next().charAt(0);
    System.out.println(ch);
  }
}</code></pre>

          <pre><code>enter char value=
99
9</code></pre>

          <pre><code>import java.util.*;
class Demo
{
  public static void main(String[] args)
  {
    Scanner sc=new Scanner(System.in);
    System.out.println("enter string 1 word=");
    String s=sc.next();
    System.out.println(s);
  }
}</code></pre>

          <pre><code>enter string 1 word=
Ajay is java student
Ajay</code></pre>

          <pre><code>import java.util.*;
class Demo
{
  public static void main(String[] args)
  {
    Scanner sc=new Scanner(System.in);
    System.out.println("enter string no.of words=");
    String s=sc.nextLine();
    System.out.println(s);
  }
}</code></pre>

          <pre><code>enter string no.of words=
Hemanth is a good boy
Hemanth is a good boy</code></pre>

          <h3>Difference between <code>next()</code> and <code>nextLine()</code></h3>
          <ol>
            <li><code>next()</code> takes only one word (stops at space).</li>
            <li><code>nextLine()</code> takes complete line including spaces.</li>
          </ol>

          <h3>Array input using Scanner</h3>
          <pre><code>import java.util.*;
public class Demo
{
  public static void main(String[] args)
  {
    Scanner sc=new Scanner(System.in);
    System.out.println("enter size=");
    int size=sc.nextInt();

    int[] arr=new int[size];
    System.out.println("enter elements");
    for(int i=0;i&lt;arr.length;i++)
    {
      arr[i]=sc.nextInt();
    }
    System.out.println(Arrays.toString(arr));
  }
}</code></pre>

          <pre><code>enter size=
3
enter elements
2
4
6
[2, 4, 6]</code></pre>
        </details>
      </section>

      <section class="card" id="oops">
        <details>
          <summary>22.OOPs Introduction, Variables, Methods and Blocks</summary>

          <h3>OOPs</h3>
          <ol>
            <li>OOPs stands for Object Oriented Programming System.</li>
            <li>OOPs is not a technology.</li>
            <li>OOPs is a technique or methodology.</li>
            <li>OOPs contains 4 principles:</li>
          </ol>
          <ol>
            <li>Inheritance</li>
            <li>Polymorphism</li>
            <li>Encapsulation</li>
            <li>Abstraction</li>
          </ol>
          <p>To implement these principles, we require class and object.</p>

          <h3>Difference between object oriented and object based language</h3>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Definition</th>
                <th>Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Object oriented language</td>
                <td>Supports inheritance and runtime polymorphism.</td>
                <td>Java, C++, Python, .NET</td>
              </tr>
              <tr>
                <td>Object based language</td>
                <td>Does not support inheritance and runtime polymorphism.</td>
                <td>JavaScript, VBScript</td>
              </tr>
            </tbody>
          </table>

          <h3>Class</h3>
          <ol>
            <li>Class is a non-primitive/reference datatype.</li>
            <li>Class is a collection of variables and methods.</li>
          </ol>
          <h3>Syntax</h3>
          <pre><code>class ClassName
{
  variables...
  methods...
}</code></pre>
          <pre><code>class Demo
{
  int a=5;
  int b=6;
  public static void main(String[] args)
  {
  }
}</code></pre>

          <h3>Object</h3>
          <ol>
            <li>Object is an instance of class.</li>
            <li>Instance means allocating memory address to instance variables.</li>
          </ol>

          <h3>Variables</h3>
          <ol>
            <li>Variable is a container.</li>
            <li>Purpose is to store operand (value, variable, expression).</li>
            <li>There are 3 types of variables:</li>
          </ol>
          <ol>
            <li>Instance/non-static variables</li>
            <li>Static variables</li>
            <li>Local variables</li>
          </ol>
          <div class="warn">There is no global variable in Java.</div>

          <h3>1. Instance/non-static variables</h3>
          <ol>
            <li>Defined outside method and without <code>static</code> keyword.</li>
            <li>Stored in heap area.</li>
            <li>Accessed by object or object reference.</li>
            <li>Have default values.</li>
            <li>Purpose: store different values.</li>
          </ol>
          <p><strong>Object:</strong> contains data, preferred for one-time access.</p>
          <p><strong>Object reference:</strong> contains hashcode, preferred for multiple access.</p>

          <h3>2. Static variables</h3>
          <ol>
            <li>Defined outside method and with <code>static</code> keyword.</li>
            <li>Stored in method area.</li>
            <li>Can be accessed in 4 ways:</li>
          </ol>
          <ol>
            <li>By using object</li>
            <li>By using object reference</li>
            <li>By using directly</li>
            <li>By using class name</li>
          </ol>
          <ol start="4">
            <li>Static variables have default values.</li>
            <li>Purpose: store common values.</li>
          </ol>
          <div class="warn">Accessing static variables by object/object reference is not recommended in industry standards.</div>
          <p>Use class name especially when local variable name and static variable name are same or when accessing from other classes.</p>

          <h3>3. Local variables</h3>
          <ol>
            <li>Defined inside method (without static keyword).</li>
            <li>Formal parameters are also local variables.</li>
            <li>Stored in stack area.</li>
            <li>Accessed only directly.</li>
            <li>No default values.</li>
            <li>Must be initialized before use.</li>
            <li>Purpose: perform operations/tasks.</li>
          </ol>

          <h3>Object Reference Syntax</h3>
          <pre><code>ClassName referenceVar = new ClassName();  // object reference</code></pre>

          <h3>Anonymous/Unreferenced Object</h3>
          <p>Object created without storing in a reference variable.</p>
          <pre><code>new ClassName();</code></pre>

          <h3>new keyword</h3>
          <ol>
            <li><code>new</code> is a dynamic memory allocator.</li>
            <li>Allocates memory to instance variables at runtime.</li>
          </ol>

          <h3>Examples on Variables and Object</h3>
          <pre><code>class Emp
{
  int a=12;
  public static void main(String[] args)
  {
    Emp e1=new Emp();
    System.out.println(e1); // Emp@379619aa
  }
}</code></pre>

          <pre><code>class Student
{
  int a=5;           // instance variable
  static int b=9;    // static variable
  void welcome(int d) // local variable d
  {
    int r=14;        // local variable
  }
  public static void main(String[] args)
  {
    int c=12;        // local variable
  }
}</code></pre>

          <pre><code>class Student
{
  int a=12;
  public static void main(String[] args)
  {
    Student s1=new Student();
    System.out.println(s1.a);
    System.out.println(new Student().a); // anonymous object
  }
}</code></pre>

          <pre><code>class Emp
{
  int s;
  String a;
  boolean b;
  char c;
  float d;
  public static void main(String[] args)
  {
    Emp e1=new Emp();
    System.out.println(e1.s); //0
    System.out.println(e1.a); //null
    System.out.println(e1.b); //false
    System.out.println(e1.c); // blank char
    System.out.println(e1.d); //0.0
  }
}</code></pre>

          <pre><code>class Emp
{
  static int a=56;
  public static void main(String[] args)
  {
    Emp e1=new Emp();
    System.out.println(e1.a);      // by object
    System.out.println(new Emp().a); // anonymous object
    System.out.println(a);         // directly
    System.out.println(Emp.a);     // by class name
  }
}</code></pre>

          <pre><code>class Emp
{
  public static void main(String[] args)
  {
    int a=12;
    System.out.println(a); // valid
  }
}</code></pre>

          <pre><code>class Emp
{
  public static void main(String[] args)
  {
    int a;
    System.out.println(a); // compile-time error (not initialized)
  }
}</code></pre>

          <pre><code>class StudentInfo
{
  static String iname="Durga";
  int sno;
  String sname;
  long mobile;

  void display(int no,String name,long mob)
  {
    sno=no;
    sname=name;
    mobile=mob;
    System.out.println(sno+" "+sname+" "+mobile+" "+iname);
  }

  public static void main(String[] args)
  {
    StudentInfo s1=new StudentInfo();
    s1.display(1,"Hemanth",88888);
    s1.display(2,"Parithosh",88871);
    s1.display(3,"Ajay",88123);
  }
}</code></pre>

          <pre><code>class A
{
  static int a=6;
}
class B
{
  static int c=9;
  public static void main(String[] args)
  {
    System.out.println(c);
    System.out.println(A.a);
  }
}</code></pre>

          <h3>Methods</h3>
          <ol>
            <li>Methods is a collection of group of statements.</li>
            <li>Purpose is to perform task and produce code reusability.</li>
            <li>Two types: instance methods and static methods.</li>
          </ol>

          <h3>1. Instance methods</h3>
          <ol>
            <li>Defined without static keyword.</li>
            <li>Used for different task behavior.</li>
            <li>Accessed using object or object reference.</li>
          </ol>
          <pre><code>class Demo
{
  void m1()
  {
    System.out.println("welcome to instance");
  }
  public static void main(String[] args)
  {
    Demo d1=new Demo();
    d1.m1();
    new Demo().m1();
  }
}</code></pre>

          <h3>2. Static methods</h3>
          <ol>
            <li>Defined with static keyword.</li>
            <li>Used for common task behavior.</li>
            <li>Accessed by object, object reference, directly, class name.</li>
          </ol>
          <pre><code>class Demo
{
  static void m1()
  {
    System.out.println("welcome to static");
  }
  public static void main(String[] args)
  {
    Demo.m1();
    m1();
  }
}</code></pre>

          <h3>Blocks</h3>
          <ol>
            <li>Block is a group of statements inside <code>{ }</code>.</li>
            <li>Two types: instance block and static block.</li>
          </ol>

          <h3>1. Instance block</h3>
          <ol>
            <li>Defined without static keyword.</li>
            <li>Executes whenever object/object reference is created.</li>
          </ol>
          <pre><code>class Demo
{
  {
    System.out.println("welcome to instance block");
  }
  public static void main(String[] args)
  {
    Demo d1=new Demo();
    new Demo();
  }
}</code></pre>

          <h3>2. Static block</h3>
          <ol>
            <li>Defined with static keyword.</li>
            <li>Executes whenever class loads.</li>
          </ol>
          <pre><code>class Demo
{
  static
  {
    System.out.println("welcome to static");
  }
  public static void main(String[] args)
  {
  }
}</code></pre>

          <h3>Execution order example</h3>
          <pre><code>class Demo
{
  int a=12;
  static int b=13;

  void m1()
  {
    System.out.println("instance method");
  }

  static void m2()
  {
    System.out.println("static method");
  }

  {
    System.out.println("instance block");
  }

  static
  {
    System.out.println("static block");
  }

  public static void main(String[] args)
  {
    int c=14;
    System.out.println(c);
    m2();
    Demo d1=new Demo();
    System.out.println(d1.a);
    d1.m1();
  }
}</code></pre>
        </details>
      </section>

      <section class="card" id="polymorphism">
        <details>
          <summary>23.Polymorphism and final</summary>

          <h3>Polymorphism</h3>
          <ol>
            <li><strong>Poly</strong> means many and <strong>morphism</strong> means forms (many forms).</li>
            <li>The ability to have more than one form is called polymorphism.</li>
            <li>Polymorphism has 2 types:</li>
          </ol>
          <ol>
            <li>Compile-time / static polymorphism</li>
            <li>Run-time / dynamic polymorphism</li>
          </ol>

          <h3>1. Compile-time / static polymorphism</h3>
          <p>Binding between method call and method definition happens at compile time.</p>
          <p class="sub">Examples: method overloading, method hiding.</p>

          <h3>2. Run-time / dynamic polymorphism</h3>
          <p>Binding between method call and method definition happens at runtime.</p>
          <p class="sub">Example: method overriding.</p>

          <h3>Method Overloading</h3>
          <ol>
            <li>Two or more methods with same name and different formal parameter list.</li>
            <li>Difference in parameter list can be:</li>
          </ol>
          <ol>
            <li>Number of parameters</li>
            <li>Order of parameters</li>
            <li>Datatype of parameters</li>
          </ol>
          <ol start="3">
            <li>Possible in one class and also in multiple classes.</li>
            <li>Inheritance is not required (but overloading can still appear in inheritance).</li>
            <li><code>static</code>, <code>private</code>, and <code>final</code> methods can be overloaded.</li>
          </ol>

          <h3>Method Overriding</h3>
          <ol>
            <li>Two methods with same name and same formal parameter list in parent-child classes.</li>
            <li>Not possible in one class; at least two classes are required.</li>
            <li>Implemented using inheritance.</li>
            <li><code>static</code> methods cannot be overridden (they are hidden).</li>
            <li><code>private</code> methods cannot be overridden (not inherited).</li>
            <li><code>final</code> methods cannot be overridden.</li>
          </ol>

          <h3>Overloading Examples</h3>
          <pre><code>class A
{
  void add(int a)
  {
    System.out.println("welcome to java");
  }
  void add(float b)
  {
    System.out.println("welcome to python");
  }
  public static void main(String[] args)
  {
    A a1=new A();
    a1.add(12);     // welcome to java
    a1.add(12.6f);  // welcome to python
  }
}</code></pre>

          <pre><code>class A
{
  void add(int a,int b)
  {
    System.out.println("welcome to java");
  }
  void add(int c)
  {
    System.out.println("welcome to python");
  }
  public static void main(String[] args)
  {
    A a1=new A();
    a1.add(1,7); // welcome to java
  }
}</code></pre>

          <pre><code>class A
{
  void add(int a,float b)
  {
    System.out.println("welcome to java");
  }
  void add(float a,int b)
  {
    System.out.println("welcome to python");
  }
  void add(int a)
  {
    System.out.println("welcome to c");
  }
  public static void main(String[] args)
  {
    A a1=new A();
    a1.add(6.7f,7); // welcome to python
  }
}</code></pre>

          <div class="warn">Same method name with same parameters in one class is invalid (compile-time error).</div>
          <pre><code>class A
{
  void add()
  {
    System.out.println("Virat Kohli");
  }
  void add()
  {
    System.out.println("Sachin Tendulkar");
  }
}</code></pre>

          <h3>Overriding Examples</h3>
          <pre><code>class A
{
  void add()
  {
    System.out.println("Virat kohli");
  }
}
class B extends A
{
  void add()
  {
    System.out.println("Sachin Tendulkar");
  }
  public static void main(String[] args)
  {
    B b1=new B();
    b1.add(); // Sachin Tendulkar
  }
}</code></pre>

          <pre><code>class A
{
  void add()
  {
    System.out.println("Virat kohli");
  }
}
class B extends A
{
  void add()
  {
    System.out.println("Sachin Tendulkar");
  }
  public static void main(String[] args)
  {
    A a1=new A();
    a1.add(); // Virat kohli
  }
}</code></pre>

          <h3>Static / private / final with overriding</h3>
          <div class="warn">
            <strong>Cannot override:</strong> static method, private method, final method.
          </div>
          <pre><code>class A
{
  final void display()
  {
    System.out.println("Display in A");
  }
}
class B extends A
{
  void display() // compile-time error
  {
    System.out.println("Display in B");
  }
}</code></pre>

          <pre><code>class A
{
  private void display()
  {
    System.out.println("Display in A");
  }
}
class B extends A
{
  void display()
  {
    System.out.println("Display in B");
  }
}</code></pre>

          <pre><code>class A
{
  static void display()
  {
    System.out.println("Display in A");
  }
}
class B extends A
{
  static void display()
  {
    System.out.println("Display in B");
  }
}</code></pre>

          <h3>Overloading with final/private/static methods is valid</h3>
          <pre><code>class B
{
  final void display(int a)
  {
    System.out.println("Display in virat");
  }
  void display()
  {
    System.out.println("Display in B");
  }
  public static void main(String[] args)
  {
    B b1=new B();
    b1.display(); // Display in B
  }
}</code></pre>

          <pre><code>class B
{
  private void display(int a)
  {
    System.out.println("Display in virat");
  }
  void display()
  {
    System.out.println("Display in B");
  }
}</code></pre>

          <pre><code>class B
{
  static void display(int a)
  {
    System.out.println("Display in virat");
  }
  void display()
  {
    System.out.println("Display in B");
  }
}</code></pre>

          <h3>Practice Examples</h3>
          <pre><code>class Calculator
{
  void add(int a,int b){ System.out.println(a+b); }
  void add(int a,int b,int c){ System.out.println(a+b+c); }
  void add(int a,int b,int c,int d){ System.out.println(a+b+c+d); }
  public static void main(String[] args)
  {
    Calculator c1=new Calculator();
    c1.add(6,8,9);
  }
}</code></pre>

          <pre><code>class Sbi
{
  void phonePay(int am)
  {
    System.out.println(am);
  }
}
class PunjabBank extends Sbi
{
  void phonePay(int am)
  {
    System.out.println(am);
  }
  public static void main(String[] args)
  {
    Sbi ajay=new Sbi();
    ajay.phonePay(500);
    PunjabBank pari=new PunjabBank();
    pari.phonePay(700);
  }
}</code></pre>

          <h3>final keyword</h3>
          <p><code>final</code> is a non-access modifier.</p>
          <p>Purpose of <code>final</code>: modify behavior of variable, method, and class.</p>
          <ol>
            <li>Prevents variable modification</li>
            <li>Prevents method overriding</li>
            <li>Prevents class inheritance</li>
          </ol>
          <div class="warn">Final variables must be initialized.</div>

          <h3>final variable examples</h3>
          <pre><code>int a=6;
a=8;
a=12;
System.out.println(a); // 12</code></pre>

          <pre><code>final String s="pawan";
System.out.println(s); // pawan

// s="kalyan"; // compile-time error</code></pre>

          <h3>final method example</h3>
          <pre><code>class B
{
  final void show()
  {
    System.out.println("show in B");
  }
}
class A extends B
{
  void show() // compile-time error
  {
    System.out.println("show in A");
  }
}</code></pre>

          <h3>final class example</h3>
          <pre><code>final class B
{
  void show()
  {
    System.out.println("show in B");
  }
}
class A extends B // compile-time error
{
}</code></pre>

          <h3>final local variable example</h3>
          <pre><code>final int a;
System.out.println(a); // compile-time error (not initialized)</code></pre>
        </details>
      </section>

      <section class="card" id="inheritance">
        <details>
          <summary>24.Inheritance, this, super, Modifiers</summary>

          <h3>Inheritance</h3>
          <ol>
            <li>Creating new class from existing class using <code>extends</code> is called inheritance.</li>
            <li>Existing class is <strong>super class</strong>.</li>
            <li>New class is <strong>sub class</strong>.</li>
            <li>Super class object can access only super class members.</li>
            <li>Sub class object can access both super and sub class members.</li>
            <li>Purpose: feature reusability (variables and methods).</li>
            <li>There are 6 types of inheritance.</li>
          </ol>

          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Description</th>
                <th>Class support in Java</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Single</td><td>1 sub class from 1 super class</td><td>Yes</td></tr>
              <tr><td>Multiple</td><td>1 sub class from multiple super classes</td><td>No (classes), Yes (interfaces)</td></tr>
              <tr><td>Multilevel</td><td>Sub class from intermediate class chain</td><td>Yes</td></tr>
              <tr><td>Hierarchical</td><td>Multiple sub classes from 1 super class</td><td>Yes</td></tr>
              <tr><td>Multipath</td><td>Multiple paths to one sub class</td><td>No (class ambiguity)</td></tr>
              <tr><td>Hybrid</td><td>Combination of inheritance types</td><td>No in classes if it includes multiple inheritance</td></tr>
            </tbody>
          </table>

          <div class="warn">Multiple inheritance in classes is not possible due to ambiguity. If same method appears in two parents, JVM cannot choose safely.</div>

          <h3>Single Inheritance</h3>
          <pre><code>class Chiranjeevi
{
  int chiamount=500;
}
class Ramcharan extends Chiranjeevi
{
  int ramamount=600;
  public static void main(String[] args)
  {
    Ramcharan r1=new Ramcharan();
    System.out.println(r1.ramamount); //600
    System.out.println(r1.chiamount); //500

    Chiranjeevi c1=new Chiranjeevi();
    System.out.println(c1.chiamount); //500
    // System.out.println(c1.ramamount); //error
  }
}</code></pre>

          <pre><code>class Vehicle
{
  String s="engine";
}
class Car extends Vehicle
{
  int price=2000;
  public static void main(String[] args)
  {
    Vehicle v=new Vehicle();
    System.out.println(v.s); //engine
    Car c=new Car();
    System.out.println(c.price); //2000
    System.out.println(c.s); //engine
  }
}</code></pre>

          <h3>Multilevel Inheritance</h3>
          <pre><code>class Vehicle
{
  String s="engine";
}
class Car extends Vehicle
{
  int ctyres=4;
}
class Nexon extends Car
{
  int price=100000;
  public static void main(String[] args)
  {
    Vehicle v=new Vehicle();
    System.out.println(v.s);
    Car c1=new Car();
    System.out.println(c1.ctyres);
    System.out.println(c1.s);
    Nexon n=new Nexon();
    System.out.println(n.s);
    System.out.println(n.ctyres);
    System.out.println(n.price);
  }
}</code></pre>

          <h3>Hierarchical Inheritance</h3>
          <pre><code>class Vehicle
{
  String s="engine";
}
class Car extends Vehicle
{
  int ct=4;
}
class Bike extends Vehicle
{
  int bt=2;
  public static void main(String[] args)
  {
    Vehicle v=new Vehicle();
    System.out.println(v.s);
    Car c1=new Car();
    System.out.println(c1.ct);
    System.out.println(c1.s);
    Bike b1=new Bike();
    System.out.println(b1.bt);
    System.out.println(b1.s);
  }
}</code></pre>

          <h3>Multiple Inheritance in classes (invalid)</h3>
          <pre><code>class A { int a=6; }
class C { int c=8; }
class B extends A, C // error
{
  int b=7;
}</code></pre>

          <h3>this keyword</h3>
          <ol>
            <li><code>this</code> is an object reference variable (implicitly available).</li>
            <li>Used when local and instance variable names are same.</li>
            <li>Used to call current class instance methods.</li>
            <li><code>this</code> cannot be used in static context.</li>
          </ol>

          <pre><code>class A
{
  int a=12; // instance
  void display()
  {
    int a=16; // local
    System.out.println(a);      //16
    System.out.println(this.a); //12
  }
  public static void main(String[] args)
  {
    A a1=new A();
    a1.display();
  }
}</code></pre>

          <pre><code>class A
{
  void show()
  {
    System.out.println("show method");
  }
  void display()
  {
    this.show();
    System.out.println("display method");
  }
}</code></pre>

          <pre><code>class A
{
  static int a=9;
  static void show()
  {
    int a=6;
    System.out.println(a);
    // System.out.println(this.a); //error
  }
}</code></pre>

          <h3>super keyword</h3>
          <ol>
            <li><code>super</code> is reference variable to parent class object.</li>
            <li>Used when parent and child members have same names and we need parent version.</li>
            <li>Used for parent variables and parent methods in child class.</li>
          </ol>

          <div class="tip">Static methods do not use <code>this</code> or <code>super</code>. Static variables can still be referenced through instance context, but class-name access is preferred.</div>

          <pre><code>class A
{
  int a=6;
}
class B extends A
{
  int a=9;
  void display()
  {
    System.out.println(a);       //9
    System.out.println(super.a); //6
  }
}</code></pre>

          <pre><code>class A
{
  void mahesh()
  {
    System.out.println("Mahesh in super class");
  }
}
class B extends A
{
  void mahesh()
  {
    System.out.println("pawan in sub class");
    super.mahesh();
  }
}</code></pre>

          <pre><code>class A
{
  static int a=7;
}
class B extends A
{
  int a=8;
  void display()
  {
    System.out.println(a);       //8
    System.out.println(super.a); //7
  }
}</code></pre>

          <pre><code>class A
{
  int a=7;
}
class B extends A
{
  int a=8;
  static void display()
  {
    // System.out.println(super.a); //error (static context)
  }
}</code></pre>

          <h3>Modifiers</h3>
          <ol>
            <li>Modifiers are keywords.</li>
            <li>Used to control accessibility and modify behavior of variables, methods, classes.</li>
            <li>Two types: access modifiers and non-access modifiers.</li>
          </ol>

          <h3>Access Modifiers</h3>
          <p>Used to provide accessibility for variables, methods, classes.</p>
          <table>
            <thead>
              <tr>
                <th>Modifier</th>
                <th>Accessibility</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>public</td><td>Anywhere</td></tr>
              <tr><td>protected</td><td>Same package + subclasses in another package</td></tr>
              <tr><td>default</td><td>Same package</td></tr>
              <tr><td>private</td><td>Same class only</td></tr>
            </tbody>
          </table>
          <div class="warn">In overriding we can increase accessibility, but we cannot decrease accessibility.</div>

          <h3>Modifier examples</h3>
          <pre><code>class A
{
  String s="Rajamouli";
}
class B extends A
{
  String s2="Maniratnam";
  public static void main(String[] args)
  {
    B b1=new B();
    System.out.println(b1.s2); //Maniratnam
    System.out.println(b1.s);  //Rajamouli
  }
}</code></pre>

          <pre><code>class A
{
  private String s="Rajamouli";
}
class B extends A
{
  String s2="Maniratnam";
  public static void main(String[] args)
  {
    B b1=new B();
    System.out.println(b1.s2);
    // System.out.println(b1.s); //error
  }
}</code></pre>

          <pre><code>class B
{
  private String s2="Maniratnam";
  public static void main(String[] args)
  {
    B b1=new B();
    System.out.println(b1.s2); // valid: same class
  }
}</code></pre>

          <pre><code>class A
{
  void m1()
  {
    System.out.println("m1 in A");
  }
}
class B extends A
{
  void m2()
  {
    System.out.println("m2 in B");
  }
  public static void main(String[] args)
  {
    B b1=new B();
    b1.m1();
    b1.m2();
  }
}</code></pre>

          <pre><code>class A
{
  private void m1()
  {
    System.out.println("m1 in A");
  }
}
class B extends A
{
  void m2()
  {
    System.out.println("m2 in B");
  }
  public static void main(String[] args)
  {
    B b1=new B();
    // b1.m1(); //error
    b1.m2();
  }
}</code></pre>

          <pre><code>// private class A // invalid top-level class
class A
{
  public void m1()
  {
    System.out.println("m1 in A");
  }
}
class B extends A
{
  void m2()
  {
    System.out.println("m2 in B");
  }
}</code></pre>
        </details>
      </section>

      <section class="card" id="upcasting-downcasting">
        <details>
          <summary>25.Upcasting, Downcasting, Object class and Relationships</summary>

          <h3>Upcasting</h3>
          <ol>
            <li>Assigning sub class object/reference to super class reference is called upcasting.</li>
            <li>Upcasting is done implicitly by JVM.</li>
            <li>Upcasting is always valid.</li>
          </ol>

          <pre><code>class A
{
  void m1()
  {
    System.out.println("m1 in A");
  }
}
class B extends A
{
  void m2()
  {
    System.out.println("m2 in B");
  }
}
class C extends B
{
  void m3()
  {
    System.out.println("m3 in C");
  }
}
class Test
{
  public static void main(String[] args)
  {
    A a1=new B();
    a1.m1(); // m1 in A
    // a1.m2(); // error
  }
}</code></pre>

          <pre><code>class Test
{
  public static void main(String[] args)
  {
    A a1=new B();
    a1.m1(); // m1 in A

    B b1=new C();
    b1.m1(); // m1 in A
    b1.m2(); // m2 in B

    A a2=new C();
    a2.m1(); // m1 in A
    // a2.m2(); // error
  }
}</code></pre>

          <pre><code>class Vehicle
{
  void engine()
  {
    System.out.println("engine in vehicle");
  }
}
class Car extends Vehicle
{
  void tyres()
  {
    System.out.println("4 tyres in car");
  }
}
class Punch extends Car
{
  void price()
  {
    System.out.println("10 lakhs punch");
  }
}
class Demo
{
  public static void main(String[] args)
  {
    Vehicle v1=new Car();
    v1.engine(); // engine in vehicle
    // v1.tyres(); // error
    // v1.price(); // error

    Car c1=new Punch();
    c1.engine(); // engine in vehicle
    c1.tyres();  // 4 tyres in car
    // c1.price(); // error

    Vehicle v2=new Punch();
    v2.engine(); // engine in vehicle

    Vehicle v3=c1;
    v3.engine(); // engine in vehicle
  }
}</code></pre>

          <h3>Downcasting</h3>
          <ol>
            <li>Assigning super class reference to sub class reference is called downcasting.</li>
            <li>Downcasting must be done explicitly by programmer.</li>
            <li>Downcasting generally requires valid upcasted reference.</li>
          </ol>

          <pre><code>class Vehicle
{
  void engine()
  {
    System.out.println("engine in vehicle");
  }
}
class Car extends Vehicle
{
  void tyres()
  {
    System.out.println("4 tyres in car");
  }
}
class Punch extends Car
{
  void price()
  {
    System.out.println("10 lakhs punch");
  }
}
class Demo
{
  public static void main(String[] args)
  {
    Vehicle v1=new Car();
    Car c1=(Car)v1;
    c1.engine();
    c1.tyres();

    Car c2=new Punch();
    Punch p1=(Punch)c2;
    p1.engine();
    p1.tyres();
    p1.price();
  }
}</code></pre>

          <h3>Object class</h3>
          <ol>
            <li><code>Object</code> is a predefined class.</li>
            <li><code>Object</code> is super class for all Java classes directly or indirectly.</li>
            <li>Present in <code>java.lang</code> package.</li>
            <li>Object class has 11 key methods.</li>
          </ol>

          <ol>
            <li>toString()</li>
            <li>hashCode()</li>
            <li>equals()</li>
            <li>finalize()</li>
            <li>getClass()</li>
            <li>clone()</li>
            <li>wait()</li>
            <li>wait(long ms)</li>
            <li>wait(long ms, int ns)</li>
            <li>notify()</li>
            <li>notifyAll()</li>
          </ol>

          <h3>toString()</h3>
          <p>Before overriding: object prints default representation like <code>Demo@372f7a8d</code>.</p>
          <p>After overriding: custom readable text is printed.</p>

          <pre><code>class Demo
{
  public static void main(String[] args)
  {
    Demo d1=new Demo();
    System.out.println(d1);          // Demo@xxxx
    System.out.println(d1.toString());// Demo@xxxx
  }
}</code></pre>

          <pre><code>class Demo
{
  public String toString()
  {
    return "welcome to java";
  }
  public static void main(String[] args)
  {
    Demo d1=new Demo();
    System.out.println(d1);          // welcome to java
    System.out.println(d1.toString());// welcome to java
  }
}</code></pre>

          <pre><code>class Demo
{
  int sno;
  String sname;
  Demo(int sno,String sname)
  {
    this.sno=sno;
    this.sname=sname;
  }
  public String toString()
  {
    return sno+" "+sname;
  }
  public static void main(String[] args)
  {
    Demo d1=new Demo(7,"Dhoni");
    System.out.println(d1); // 7 Dhoni
  }
}</code></pre>

          <pre><code>class Demo
{
  public static void main(String[] args)
  {
    Demo d1=new Demo();
    System.out.println(d1);
    System.out.println(d1.toString());
    int hs=d1.hashCode();
    System.out.println(hs);
  }
}</code></pre>

          <h3>Relationships</h3>
          <ol>
            <li><strong>Is-a relationship</strong> -> Inheritance (<code>extends</code>)</li>
            <li><strong>Has-a relationship</strong> -> Association (object reference)</li>
          </ol>
          <p><strong>Is-a:</strong> relation between classes, reuses all features.</p>
          <p><strong>Has-a:</strong> relation between objects, reuses required features.</p>

          <h3>Association types</h3>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Composition</td>
                <td>Strong association: container destroy means contained objects also destroy conceptually.</td>
              </tr>
              <tr>
                <td>Aggregation</td>
                <td>Weak association: container destroy may not destroy contained objects.</td>
              </tr>
            </tbody>
          </table>

          <h3>Is-a relationship example</h3>
          <pre><code>class Person
{
  int hands=2;
  int legs=2;
}
class Student extends Person
{
  int sno=12;
  String sname="Hemanth Babu";
  void getStudent()
  {
    System.out.println("sno"+sno+" "+"sname"+sname+" "+"hands"+hands+" "+"legs"+legs);
  }
  public static void main(String[] args)
  {
    Student s1=new Student();
    s1.getStudent();
  }
}</code></pre>

          <pre><code>class Bike
{
  int speed=120;
  String color="Black";
}
class Duke extends Bike
{
  int dukeprice=1000;
  void getDuke()
  {
    System.out.println(speed+" "+color+" "+dukeprice);
  }
  public static void main(String[] args)
  {
    Duke d1=new Duke();
    d1.getDuke();
  }
}</code></pre>

          <h3>Has-a relationship examples</h3>
          <pre><code>class Engine
{
  void start(){ System.out.println("Bike started"); }
  void stop(){ System.out.println("Bike stopped"); }
}
class Bike
{
  Engine e1=new Engine();
  void work()
  {
    e1.start();
    System.out.println("Bike is running......");
    e1.stop();
  }
  public static void main(String[] args)
  {
    Bike b1=new Bike();
    b1.work();
  }
}</code></pre>

          <pre><code>class Address
{
  int dno=12;
  String stname="mythrivanam";
}
class Emp
{
  Address a1=new Address();
  String ename="Hemanth";
  void getEmp()
  {
    System.out.println(ename+" "+a1.dno+" "+a1.stname);
  }
  public static void main(String[] args)
  {
    Emp e1=new Emp();
    e1.getEmp();
  }
}</code></pre>
        </details>
      </section>

      <section class="card" id="encapsulation-enum-annotations">
        <details>
          <summary>26.Encapsulation, Adapter Class, Enum, Annotations</summary>

          <h3>Encapsulation</h3>
          <ol>
            <li>Binding/grouping variables and methods into single class is called encapsulation.</li>
            <li>Purpose: hide data and provide controlled access through methods.</li>
            <li>Purpose can also be validation using getter and setter methods.</li>
            <li>Getter methods are used to get values.</li>
            <li>Setter methods are used to set values.</li>
          </ol>
          <div class="tip">Best practice: declare variables as <code>private</code> and methods as <code>public</code>.</div>

          <h3>Without encapsulation</h3>
          <pre><code>class Student
{
  int sno;
  String sname;
  String dname;
}
class Teacher
{
  public static void main(String[] args)
  {
    Student s1=new Student();
    s1.sno=123;
    s1.sname="Mohan";
    s1.dname="ECE";
    System.out.println(s1.sno);
    System.out.println(s1.sname);
    System.out.println(s1.dname);
  }
}</code></pre>

          <h3>Private fields block direct access</h3>
          <pre><code>class Student
{
  private int sno;
  private String sname;
  private String dname;
}
class Teacher
{
  public static void main(String[] args)
  {
    Student s1=new Student();
    // s1.sno=123; // error
    // s1.sname="Mohan"; // error
    // s1.dname="ECE"; // error
  }
}</code></pre>

          <h3>Using setters and getters</h3>
          <pre><code>class Student
{
  private int sno;
  private String sname;
  private String dname;

  public void setSno(int sno){ this.sno=sno; }
  public void setSname(String sname){ this.sname=sname; }
  public void setDname(String dname){ this.dname=dname; }

  public void getSno(){ System.out.println(sno); }
  public void getSname(){ System.out.println(sname); }
  public void getDname(){ System.out.println(dname); }
}
class Teacher
{
  public static void main(String[] args)
  {
    Student s1=new Student();
    s1.setSno(334);
    s1.setSname("AjayKumar");
    s1.setDname("ECE");
    s1.getSno();
    s1.getSname();
    s1.getDname();
  }
}</code></pre>

          <h3>Validation example</h3>
          <pre><code>class Student
{
  private int sno;
  private String sname;
  private String dname;

  public void setSno(int sno){ this.sno=sno; }
  public void setSname(String sname){ this.sname=sname; }
  public void setDname(String dname){ this.dname=dname; }

  public void getSno()
  {
    if(sno>0) System.out.println("valid "+sno);
    else System.out.println("Invalid donot use ultra pro knowledge");
  }
  public void getSname(){ System.out.println(sname); }
  public void getDname(){ System.out.println(dname); }
}</code></pre>

          <h3>Adapter class</h3>
          <p>Adapter class is an implementation/helper class that provides empty concrete method bodies.</p>
          <p>It allows child class to override only required methods instead of all interface methods.</p>

          <pre><code>interface A
{
  void m1();
  void m2();
  void m3();
  void m4();
  void m5();
}
class B implements A
{
  public void m1(){}
  public void m2(){}
  public void m3(){}
  public void m4(){}
  public void m5(){}
}
class Test extends B
{
  public void m2()
  {
    System.out.println("m2 in Test class");
  }
  public static void main(String[] args)
  {
    Test t1=new Test();
    t1.m2();
  }
}</code></pre>

          <pre><code>interface Student
{
  void getMarks();
  void getDetails();
  void getAddress();
  void getDept();
}
class StudentDetails implements Student
{
  public void getMarks(){}
  public void getDetails(){}
  public void getAddress(){}
  public void getDept(){}
}
class Test extends StudentDetails
{
  public void getMarks()
  {
    System.out.println("Telugu =92");
    System.out.println("Hindi =94");
    System.out.println("English =92");
    System.out.println("Maths =99");
    System.out.println("Physics =93");
    System.out.println("Chemistry =94");
  }
}</code></pre>

          <h3>enum (Enumeration)</h3>
          <ol>
            <li>Enum is user-defined datatype for constants.</li>
            <li>Internally enum behaves like class.</li>
            <li>By default enum constants are <code>public static final</code>.</li>
            <li>Enum can be declared inside or outside class.</li>
            <li><code>values()</code> lists constants, <code>ordinal()</code> gives index (0..n-1).</li>
            <li>Enum allows variables, methods, and constructors.</li>
          </ol>

          <pre><code>enum Week
{
  Sun,Mon,Tue,Wed,Thu,Fri,Sat
}
class Test
{
  public static void main(String[] args)
  {
    Week w1=Week.Sun;
    System.out.println(w1);
  }
}</code></pre>

          <pre><code>enum Directions
{
  East,West,North,South;
  public static void main(String[] args)
  {
    Directions[] d1=Directions.values();
    for(Directions d2:d1)
    {
      System.out.println(d2+"......"+d2.ordinal());
    }
  }
}</code></pre>

          <pre><code>enum Directions
{
  East,West,North,South;
  Directions()
  {
    System.out.println("constructor");
  }
}</code></pre>

          <pre><code>enum Beer
{
  kf(100),Bw(70),Ko(85),BB;
  int getPrice;
  Beer(int getPrice){ this.getPrice=getPrice; }
  Beer(){ getPrice=200; }
  int getRates(){ return getPrice; }
}
class Test
{
  public static void main(String[] args)
  {
    Beer[] b1=Beer.values();
    for(Beer b2:b1)
    {
      System.out.println(b2+"....."+b2.getRates());
    }
  }
}</code></pre>

          <h3>Annotations</h3>
          <ol>
            <li>Annotations provide compile-time information/errors/warnings.</li>
            <li>Annotations start with <code>@</code> symbol.</li>
            <li>Applied on variables, methods, constructors, classes, interfaces, etc.</li>
            <li>Two types: predefined (standard) and user-defined (custom).</li>
          </ol>

          <h3>Predefined annotations</h3>
          <p>General purpose (in <code>java.lang</code>): <code>@Override</code>, <code>@Deprecated</code>, <code>@FunctionalInterface</code>, <code>@SuppressWarnings</code>.</p>
          <p>Meta annotations (in <code>java.lang.annotation</code>): <code>@Target</code>, <code>@Retention</code>, <code>@Inherited</code>, <code>@Documented</code>.</p>

          <h3>@Target and @Retention</h3>
          <pre><code>@Target(ElementType.TYPE)    // class
@Target(ElementType.METHOD)  // method
@Target(ElementType.FIELD)   // variable

@Retention(RetentionPolicy.SOURCE)
@Retention(RetentionPolicy.CLASS)
@Retention(RetentionPolicy.RUNTIME)</code></pre>

          <h3>User-defined annotations</h3>
          <p><strong>Marker annotation</strong> (no members):</p>
          <pre><code>@interface Bank
{
}</code></pre>
          <p><strong>Single-value annotation</strong> (one member):</p>
          <pre><code>@interface Bank
{
  int bno();
}</code></pre>
          <p><strong>Multi-value annotation</strong> (multiple members):</p>
          <pre><code>@interface Bank
{
  int bno();
  String bname();
}</code></pre>

          <h3>@Override example</h3>
          <pre><code>class Sbi
{
  void sendMoneyToCustome()
  {
    System.out.println("sending money from sbi");
  }
}
class Axis extends Sbi
{
  @Override
  void sendMoneyToCustomer() // compile-time error (name mismatch)
  {
    System.out.println("sending money from Axis");
  }
}</code></pre>

          <h3>@Deprecated example</h3>
          <pre><code>class Tcs
{
  @Deprecated
  void getSalary(int basic,int hra)
  {
    System.out.println("Before ycp govt");
  }
  void getSalary(int basic,int hra,int jtax)
  {
    System.out.println("After ycp govt");
  }
}</code></pre>

          <h3>@FunctionalInterface example</h3>
          <pre><code>@FunctionalInterface
interface A
{
  void m1();
  // void m2(); // if added, compile-time error
}</code></pre>

          <h3>@SuppressWarnings example</h3>
          <pre><code>import java.util.*;
class Test
{
  @SuppressWarnings("unchecked")
  public static void main(String[] args)
  {
    ArrayList al=new ArrayList();
    al.add(1);
    al.add(1.2);
    al.add("venky");
    System.out.println(al);
  }
}</code></pre>

          <h3>Custom annotation with reflection</h3>
          <pre><code>import java.lang.annotation.*;
@Inherited
@Documented
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@interface Bank
{
  int bno();
  String bname();
}

@Bank(bno=4567,bname="HDFC")
class Account
{
  int acno;
  String aname;
  Account(int acno,String aname)
  {
    this.acno=acno;
    this.aname=aname;
  }
}
class Test
{
  @SuppressWarnings("unchecked")
  public static void main(String[] args)
  {
    Account a1=new Account(23,"parithosh");
    Class c1=a1.getClass();
    Annotation a2=c1.getAnnotation(Bank.class);
    Bank b1=(Bank)a2;
    System.out.println(b1.bno());
    System.out.println(b1.bname());
  }
}</code></pre>
        </details>
      </section>

      <section class="card" id="constructors">
        <details>
          <summary>27.Constructors</summary>

          <h3>Constructors</h3>
          <ol>
            <li>Constructor is a special method type.</li>
            <li>Constructor name and class name must be same and no return type (including <code>void</code>).</li>
            <li>Constructor executes whenever object is created.</li>
            <li>Purpose: initialize instance variables.</li>
            <li>Types of constructors:</li>
          </ol>
          <ol>
            <li>Default / Non-parameterized constructor</li>
            <li>Parameterized constructor</li>
            <li>Copy constructor</li>
          </ol>

          <h3>Constructor Types</h3>
          <p><strong>Default/Non-parameterized:</strong> constructor with zero formal parameters.</p>
          <p><strong>Parameterized:</strong> constructor with parameters.</p>
          <p><strong>Copy constructor:</strong> copy values from one object reference into another object.</p>

          <h3>Important Points</h3>
          <ol>
            <li>If no constructor is written, JVM provides one default constructor.</li>
            <li>Constructor overloading: multiple constructors with same name and different parameter lists.</li>
            <li>Constructor overriding is not possible.</li>
            <li>Constructor chaining: calling one constructor from another using <code>this()</code> or <code>super()</code>.</li>
            <li><code>this()</code> and <code>super()</code> must be first statement in constructor.</li>
            <li><code>super()</code> is implicit in constructors (if not written explicitly).</li>
          </ol>

          <h3>this() and super()</h3>
          <ul>
            <li><code>this()</code> calls default constructor in current class.</li>
            <li><code>this(int x)</code> calls parameterized constructor in current class.</li>
            <li><code>super()</code> calls default constructor in parent class.</li>
            <li><code>super(int x)</code> calls parameterized constructor in parent class.</li>
          </ul>

          <h3>Methods vs Constructors</h3>
          <table>
            <thead>
              <tr>
                <th>Methods</th>
                <th>Constructors</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Perform task / reusability</td><td>Initialize instance variables</td></tr>
              <tr><td>Have return type</td><td>No return type</td></tr>
              <tr><td>Name can be different from class</td><td>Name must be same as class</td></tr>
              <tr><td>Execute when called</td><td>Execute when object is created</td></tr>
              <tr><td>Arguments passed in method call</td><td>Arguments passed in object creation</td></tr>
              <tr><td>Overriding possible</td><td>Overriding not possible</td></tr>
              <tr><td>Inheritance applies</td><td>Constructors are not inherited</td></tr>
              <tr><td><code>this()</code>/<code>super()</code> not used as method call operators</td><td><code>this()</code> and <code>super()</code> are used for chaining</td></tr>
            </tbody>
          </table>

          <h3>Default constructor example</h3>
          <pre><code>class Demo
{
  Demo()
  {
    System.out.println("welcome to constructors");
  }
  public static void main(String[] args)
  {
    Demo d1=new Demo();
  }
}</code></pre>

          <h3>Parameterized constructor examples</h3>
          <pre><code>class Demo
{
  Demo(int a)
  {
    System.out.println(a+" parameterized constructors");
  }
  public static void main(String[] args)
  {
    Demo d1=new Demo(6);
  }
}</code></pre>

          <pre><code>class Demo
{
  Demo(int a,int b)
  {
    System.out.println("parameterized constructors");
    System.out.println(a+" "+b);
  }
  public static void main(String[] args)
  {
    Demo d1=new Demo(6,8);
  }
}</code></pre>

          <h3>Copy constructor example</h3>
          <pre><code>class Demo
{
  int a;
  int b;
  Demo()
  {
    a=6;
    b=7;
    System.out.println(a+" "+b);
  }
  Demo(Demo ref)
  {
    a=ref.a;
    b=ref.b;
    System.out.println(a+" "+b);
  }
  public static void main(String[] args)
  {
    Demo d1=new Demo();
    Demo d2=new Demo(d1);
  }
}</code></pre>

          <pre><code>class Student
{
  int sno;
  String sname;
  Student()
  {
    sno=123;
    sname="Hemanth";
    System.out.println(sno+" "+sname);
  }
  Student(Student s3)
  {
    sno=s3.sno;
    sname=s3.sname;
    System.out.println(sno+" "+sname);
  }
}</code></pre>

          <h3>Initialization with constructor</h3>
          <pre><code>class Emp
{
  int eno;
  String ename;
  Emp(int empno,String empname)
  {
    eno=empno;
    ename=empname;
  }
  void display()
  {
    System.out.println(eno+" "+ename);
  }
  public static void main(String[] args)
  {
    Emp e1=new Emp(12,"Mohan");
    e1.display();
  }
}</code></pre>

          <pre><code>class Institute
{
  int ino;
  String iname;
  Institute(int ino,String iname)
  {
    this.ino=ino;
    this.iname=iname;
  }
  void show()
  {
    System.out.println(ino+" "+iname);
  }
  public static void main(String[] args)
  {
    Institute i1=new Institute(567,"Durga");
    i1.show();
  }
}</code></pre>

          <h3>No output constructor examples</h3>
          <pre><code>class Demo
{
  public static void main(String[] args)
  {
    Demo d1=new Demo();
  }
}</code></pre>
          <pre><code>class Demo
{
  Demo()
  {
  }
  public static void main(String[] args)
  {
    Demo d1=new Demo();
  }
}</code></pre>

          <h3>Constructor overloading example</h3>
          <pre><code>class Demo
{
  Demo()
  {
    System.out.println("default con");
  }
  Demo(int x)
  {
    System.out.println("parameterized con");
  }
  Demo(int x,String y)
  {
    System.out.println(x+" "+y);
  }
  public static void main(String[] args)
  {
    Demo d1=new Demo(8);         // parameterized con
    Demo d2=new Demo(8,"virat"); // 8 virat
  }
}</code></pre>

          <h3>Constructor chaining with this()</h3>
          <pre><code>class B
{
  B()
  {
    System.out.println("default con");
  }
  B(int x)
  {
    this();
    System.out.println("parameterized con");
  }
  public static void main(String[] args)
  {
    B b1=new B(7);
  }
}</code></pre>

          <pre><code>class B
{
  B()
  {
    this(5);
    System.out.println("default con");
  }
  B(int x)
  {
    System.out.println("parameterized con");
  }
  public static void main(String[] args)
  {
    B b1=new B();
  }
}</code></pre>
          <div class="warn"><code>this()</code> must be first statement. If written later in constructor body, compile-time error.</div>

          <h3>Constructor chaining with super()</h3>
          <pre><code>class A
{
  A()
  {
    System.out.println("default con in super class");
  }
}
class B extends A
{
  B(int x)
  {
    super();
    System.out.println("parameterized con in sub class");
  }
  public static void main(String[] args)
  {
    B b1=new B(6);
  }
}</code></pre>

          <pre><code>class A
{
  A(int x)
  {
    System.out.println("param con in super class");
  }
}
class B extends A
{
  B()
  {
    super(6);
    System.out.println("default con in sub class");
  }
  public static void main(String[] args)
  {
    B b1=new B();
  }
}</code></pre>

          <h3>Implicit super() example</h3>
          <pre><code>class A
{
  A()
  {
    System.out.println("default con in super class");
  }
}
class B extends A
{
  B(int x)
  {
    System.out.println("parameterized con in sub class");
  }
  public static void main(String[] args)
  {
    B b1=new B(7);
  }
}</code></pre>

          <h3>this() + super() flow</h3>
          <pre><code>class A
{
  A()
  {
    System.out.println("default con in super class");
  }
}
class B extends A
{
  B(int x)
  {
    this();
    System.out.println("parameterized con in sub class");
  }
  B()
  {
    System.out.println("default con in sub class");
  }
  public static void main(String[] args)
  {
    B b1=new B(7);
  }
}</code></pre>
        </details>
      </section>

      <section class="card" id="abstraction">
        <details>
          <summary>28.Abstraction</summary>

          <h3>Abstraction</h3>
          <ol>
            <li>Hiding unnecessary details and showing necessary details is called abstraction.</li>
            <li>Hides implementation code and shows only functionality to user.</li>
            <li>Abstraction can be achieved by:</li>
          </ol>
          <ol>
            <li>Abstract class</li>
            <li>Interfaces</li>
          </ol>

          <h3>Abstract class</h3>
          <ol>
            <li>Class defined with <code>abstract</code> keyword is called abstract class.</li>
            <li>Abstract class can contain both concrete and abstract methods.</li>
          </ol>
          <pre><code>abstract class A
{
}</code></pre>

          <h3>Concrete methods</h3>
          <ol>
            <li>Methods with body are concrete methods.</li>
            <li>Purpose: provide common functionality to implementation classes.</li>
          </ol>
          <pre><code>void m1()
{
}
static void m2()
{
}</code></pre>

          <h3>Abstract methods</h3>
          <ol>
            <li>Method declared with <code>abstract</code> keyword and without body.</li>
            <li>Purpose: force different implementation in child classes.</li>
            <li>Abstract methods can exist only in abstract classes (or interfaces).</li>
          </ol>
          <pre><code>abstract void m1();</code></pre>

          <h3>Important points on Abstraction</h3>
          <ol>
            <li>Abstract class cannot be instantiated.</li>
            <li>To perform abstraction with classes, inheritance is required.</li>
            <li>Abstract methods must be overridden in concrete child class.</li>
            <li>Abstract methods cannot be <code>private</code>, <code>static</code>, or <code>final</code>.</li>
            <li>Abstract class cannot be <code>final</code>.</li>
            <li>Concrete methods in abstract class can be static.</li>
            <li>Abstract class can have main method.</li>
            <li>Abstract class can have constructors.</li>
          </ol>

          <h3>Instantiation error example</h3>
          <pre><code>abstract class A
{
  void m1()
  {
    System.out.println("welcome to concrete");
  }
  abstract void m2();
}
class Test
{
  public static void main(String[] args)
  {
    // A a1=new A(); // error: A is abstract; cannot be instantiated
  }
}</code></pre>

          <h3>Must override abstract method</h3>
          <pre><code>abstract class A
{
  void m1()
  {
    System.out.println("welcome to concrete");
  }
  abstract void m2();
}
class Test extends A
{
  // if m2() not implemented => compile-time error
  void m2()
  {
    System.out.println("m2 is overridden in implementation Test class");
  }
  public static void main(String[] args)
  {
    Test t1=new Test();
    t1.m1();
    t1.m2();
  }
}</code></pre>

          <h3>Real-world style example</h3>
          <pre><code>abstract class RealMe
{
  void playYoutube()
  {
    System.out.println("Youtube is playing in Realme");
  }
  abstract void sendSms();
}
class Airtel extends RealMe
{
  void sendSms()
  {
    System.out.println("sending sms from Airtel");
  }
}
class Jio extends RealMe
{
  void sendSms()
  {
    System.out.println("sending sms from Jio");
  }
}
class User
{
  public static void main(String[] args)
  {
    RealMe b1=new Airtel();
    b1.playYoutube();
    b1.sendSms();

    RealMe b2=new Jio();
    b2.playYoutube();
    b2.sendSms();
  }
}</code></pre>

          <h3>Invalid combinations</h3>
          <pre><code>abstract class A
{
  // abstract private void m2(); // error
  // abstract final void m2();   // error
}
// final abstract class A {}      // error</code></pre>

          <h3>Static concrete method in abstract class (valid)</h3>
          <pre><code>abstract class A
{
  static void m1()
  {
    System.out.println("m1 in A");
  }
  abstract void m2();
}
class B extends A
{
  void m2()
  {
    System.out.println("m2 in B");
  }
  public static void main(String[] args)
  {
    A a1=new B();
    a1.m2();
    A.m1();
  }
}</code></pre>

          <h3>Main method in abstract class (valid)</h3>
          <pre><code>abstract class A
{
  public static void main(String[] args)
  {
    System.out.println("welcome to abstract class");
  }
}</code></pre>

          <h3>Constructor in abstract class (valid)</h3>
          <pre><code>abstract class Demo
{
  Demo()
  {
    System.out.println("constructors in abstract class");
  }
  void m1()
  {
    System.out.println("concrete without static in abstract class");
  }
  static void m2()
  {
    System.out.println("concrete with static in abstract class");
  }
  abstract void m3();
}
class B extends Demo
{
  void m3()
  {
    System.out.println("abstract method in implementation class");
  }
}
class Test
{
  public static void main(String[] args)
  {
    Demo d1=new B();
    d1.m1();
    Demo.m2();
    d1.m3();
  }
}</code></pre>
        </details>
      </section>

      <section class="card" id="interface-inner-main">
        <details>
          <summary>29.Interface, Inner Classes, and public static void main</summary>

          <h3>Interface</h3>
          <ol>
            <li>Interface is a collection of <code>public static final</code> variables and <code>public abstract</code> methods.</li>
            <li>For interface variables, <code>public static final</code> is implicit.</li>
            <li>For interface methods, <code>public abstract</code> is implicit (for abstract methods).</li>
            <li>To perform abstraction using interfaces, inheritance/implementation is required.</li>
            <li>One class can extend one class; one class can implement multiple interfaces; one interface can extend multiple interfaces.</li>
            <li>Interface cannot be instantiated.</li>
            <li>Interface abstract methods must be overridden with <code>public</code> access in implementation class.</li>
            <li>Interface abstract methods cannot be <code>static</code>, <code>private</code>, or <code>final</code>.</li>
            <li>Interface cannot be <code>final</code>.</li>
            <li>Constructors are not possible in interfaces.</li>
            <li>Interfaces support multiple inheritance (through type inheritance).</li>
          </ol>

          <h3>Abstract class vs Interface</h3>
          <table>
            <thead>
              <tr>
                <th>Abstract class</th>
                <th>Interface</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Contains concrete + abstract methods</td><td>Contains abstract methods (core model)</td></tr>
              <tr><td>Methods are not implicitly public abstract</td><td>Methods are implicitly public abstract</td></tr>
              <tr><td>Multiple inheritance not supported with classes</td><td>Multiple inheritance is supported</td></tr>
              <tr><td>Constructors allowed</td><td>Constructors not allowed</td></tr>
              <tr><td>Main method possible</td><td>Main method not regular pattern in interface notes context</td></tr>
              <tr><td>Class can extend only one abstract class</td><td>Class can implement multiple interfaces</td></tr>
            </tbody>
          </table>

          <h3>Implicit modifiers example</h3>
          <pre><code>interface Demo
{
  int a=12;      // public static final
  void m1();     // public abstract
}</code></pre>

          <h3>Instantiation not allowed</h3>
          <pre><code>interface Demo
{
  int a=12;
  void m1();
}
class B implements Demo
{
  public void m1()
  {
    System.out.println(a);
    System.out.println("welcome to interfaces");
  }
}
class Test
{
  public static void main(String[] args)
  {
    // Demo d1=new Demo(); // error
  }
}</code></pre>

          <h3>Override must be public</h3>
          <pre><code>interface Demo
{
  int a=12;
  void m1();
}
class B implements Demo
{
  public void m1()
  {
    System.out.println(a);
    System.out.println("welcome to interfaces");
  }
}
class Test
{
  public static void main(String[] args)
  {
    Demo d1=new B();
    d1.m1();
  }
}</code></pre>

          <h3>Single interface, multiple implementations</h3>
          <pre><code>interface Loan
{
  int itr=2;
  void getLoan();
}
class HomeLoan implements Loan
{
  public void getLoan()
  {
    System.out.println(itr+" ruppes interest for HomeLoan");
  }
}
class EducationLoan implements Loan
{
  public void getLoan()
  {
    System.out.println(itr+" ruppes interest for EducationLoan");
  }
}
class GoldLoan implements Loan
{
  public void getLoan()
  {
    System.out.println(itr+" ruppes interest for GoldLoan");
  }
}</code></pre>

          <h3>Class implements multiple interfaces</h3>
          <pre><code>interface Physics
{
  void getpyMarks();
}
interface Chemistry
{
  void getchMarks();
}
class Student implements Physics,Chemistry
{
  public void getpyMarks()
  {
    System.out.println("67 marks in physics");
  }
  public void getchMarks()
  {
    System.out.println("87 marks in chemistry");
  }
}
class User
{
  public static void main(String[] args)
  {
    Student p1=new Student();
    p1.getpyMarks();
    p1.getchMarks();
    Physics p2=new Student();
    p2.getpyMarks();
    Chemistry p3=new Student();
    p3.getchMarks();
  }
}</code></pre>

          <h3>Interface extends multiple interfaces</h3>
          <pre><code>interface A
{
  void m1();
}
interface B
{
  void m2();
}
interface C extends A,B
{
  void m3();
}
class D implements C
{
  public void m1(){ System.out.println("m1 in D"); }
  public void m2(){ System.out.println("m2 in D"); }
  public void m3(){ System.out.println("m3 in D"); }
}</code></pre>

          <h3>Inner classes</h3>
          <ol>
            <li>Defining one class inside another class is called inner class.</li>
            <li>Purpose: readable and maintainable grouping.</li>
            <li>Outer class private features can be accessed by inner class.</li>
            <li>Types:</li>
          </ol>
          <ol>
            <li>Instance inner class</li>
            <li>Static nested class</li>
            <li>Local class</li>
            <li>Anonymous class</li>
          </ol>

          <h3>1. Instance inner class</h3>
          <p>Defined as non-static class inside outer class.</p>
          <pre><code>class Outer
{
  void m2()
  {
    System.out.println("m2 in outer");
  }
  class Inner
  {
    void m1()
    {
      System.out.println("m1 in Inner");
    }
  }
  public static void main(String[] args)
  {
    Outer o1=new Outer();
    Outer.Inner i1=o1.new Inner();
    i1.m1();
    new Outer().new Inner().m1();
  }
}</code></pre>

          <pre><code>class Outer
{
  private int x=5;
  static int z=5;
  void m2()
  {
    System.out.println("m2 in outer");
  }
  class Inner
  {
    int y=7;
    void m1()
    {
      System.out.println(y);
      System.out.println(x);
      System.out.println(z);
      m2();
    }
  }
}</code></pre>

          <div class="warn">According to these notes style, main method is considered for outer class, not instance inner class.</div>

          <h3>2. Static nested class</h3>
          <p>Inner class defined with <code>static</code> keyword.</p>
          <p>Can access only static outer members directly.</p>
          <pre><code>class Outer
{
  static int y=9;
  static int z=17;
  static private int u=8;
  static class Inner
  {
    int x=7;
    void m2()
    {
      System.out.println(y);
      System.out.println(z);
      System.out.println(u);
      System.out.println(x);
      System.out.println("m2 in Inner");
    }
  }
  public static void main(String[] args)
  {
    new Outer.Inner().m2();
  }
}</code></pre>

          <h3>3. Local class</h3>
          <p>Class defined inside a method.</p>
          <pre><code>class Outer
{
  public static void main(String[] args)
  {
    class Inner
    {
      void m1()
      {
        System.out.println("m1 in Inner");
      }
    }
    Inner i1=new Inner();
    i1.m1();
  }
}</code></pre>

          <h3>4. Anonymous class</h3>
          <ol>
            <li>Anonymous class is local class without name.</li>
            <li>Often used with abstract class or interface implementations.</li>
            <li>Reduces extra implementation-class boilerplate.</li>
          </ol>
          <pre><code>abstract class A
{
  abstract void m1();
}
class Demo
{
  public static void main(String[] args)
  {
    A a1=new A()
    {
      void m1()
      {
        System.out.println("m1 in anon class");
      }
    };
    a1.m1();
  }
}</code></pre>

          <pre><code>interface A
{
  void m1();
}
class Demo
{
  public static void main(String[] args)
  {
    A a1=new A()
    {
      public void m1()
      {
        System.out.println("m1 in imple class");
      }
    };
    a1.m1();
  }
}</code></pre>

          <h3>Modifier note for inner/local/anonymous classes</h3>
          <ul>
            <li><code>private</code>, <code>protected</code>, <code>static</code> not allowed for top-level outer class.</li>
            <li><code>static</code>, <code>public</code>, <code>protected</code>, <code>private</code> are not regular modifiers for local/anonymous classes.</li>
            <li>All access modifiers are allowed in instance/static nested class members.</li>
          </ul>

          <h3>Explain <code>public static void main(String[] args)</code></h3>

          <h3>public</h3>
          <p><code>public</code> is access modifier; JVM can access main method from anywhere.</p>

          <h3>static</h3>
          <p><code>static</code> is non-access modifier; JVM can call main without object.</p>

          <h3>void</h3>
          <p>Main method returns nothing to JVM.</p>

          <h3>main</h3>
          <p>Method name configured as entry point by JVM.</p>

          <h3>String[] args</h3>
          <p>Formal parameter array to receive command-line arguments as strings by index.</p>

          <h3>Signature notes</h3>
          <ol>
            <li>Valid array declarations: <code>String[] args</code>, <code>String args[]</code>, <code>String... args</code>.</li>
            <li>Modifier order is flexible: <code>static public</code> or <code>public static</code>.</li>
            <li>Mandatory modifiers: <code>public static</code>.</li>
            <li>Optional modifiers: <code>final</code>, <code>synchronized</code>, <code>strictfp</code>.</li>
            <li>Main can be overloaded, but JVM looks for <code>main(String[] args)</code> signature.</li>
            <li>Main cannot be overridden because it is static.</li>
            <li>Var-args are allowed in main method.</li>
          </ol>

          <h3>Command-line argument example</h3>
          <pre><code>class Demo
{
  public static void main(String venky[])
  {
    String s=venky[0];
    System.out.println(s);
  }
}

// javac Demo.java
// java Demo Dhoni
// Output: Dhoni</code></pre>

          <h3>Main overloading example</h3>
          <pre><code>class Demo
{
  public static void main(String[] args)
  {
    System.out.println("string data");
  }
  public static void main(int[] args)
  {
    System.out.println("int data");
  }
}</code></pre>
        </details>
      </section>

      <section class="card" id="io-streams">
        <details>
          <summary>30.IO Streams, Dynamic Input, Serialization</summary>

          <h3>IO Streams</h3>
          <ol>
            <li>Stream is a medium or channel.</li>
            <li>Purpose: carry data between input devices, Java application, and output devices.</li>
            <li>Streams are present in <code>java.io</code> package.</li>
            <li>Streams are divided into 2 types: Byte Streams and Character Streams.</li>
          </ol>

          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Works with</th>
                <th>Main base classes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Byte Streams</td>
                <td>Binary data (text, audio, video, images, files)</td>
                <td><code>InputStream</code>, <code>OutputStream</code></td>
              </tr>
              <tr>
                <td>Character Streams</td>
                <td>Character/text data</td>
                <td><code>Reader</code>, <code>Writer</code></td>
              </tr>
            </tbody>
          </table>

          <h3>1.Byte Streams</h3>
          <p>Byte streams work with raw bytes.</p>

          <h3>InputStream</h3>
          <p>Used to read bytes into Java program.</p>
          <p>Examples: <code>FileInputStream</code>, <code>ObjectInputStream</code>, <code>DataInputStream</code>.</p>

          <h3>OutputStream</h3>
          <p>Used to write bytes from Java program.</p>
          <p>Examples: <code>FileOutputStream</code>, <code>ObjectOutputStream</code>, <code>DataOutputStream</code>.</p>

          <h3>2.Character Streams</h3>
          <p>Character streams work with characters (text).</p>

          <h3>Reader</h3>
          <p>Reads character data into Java application.</p>
          <p>Examples: <code>FileReader</code>, <code>BufferedReader</code>.</p>

          <h3>Writer</h3>
          <p>Writes character data from Java application.</p>
          <p>Examples: <code>FileWriter</code>, <code>BufferedWriter</code>, <code>PrintWriter</code>.</p>

          <h3>PrintWriter</h3>
          <ol>
            <li><code>PrintWriter</code> is predefined class.</li>
            <li>Converts primitive data into text format.</li>
          </ol>

          <table>
            <thead>
              <tr>
                <th>Method</th>
                <th>Use</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><code>print()</code></td><td>Writes data in same line</td></tr>
              <tr><td><code>println()</code></td><td>Writes data in new line</td></tr>
              <tr><td><code>printf()</code></td><td>Writes formatted output</td></tr>
            </tbody>
          </table>

          <h3>FileOutputStream write example</h3>
          <pre><code>import java.io.*;
class FileOutput
{
  public static void main(String[] args) throws Exception
  {
    FileOutputStream fos=new FileOutputStream("xyz.txt");
    String s1="virat";
    byte[] b=s1.getBytes();
    fos.write(b);
    fos.close();
  }
}</code></pre>

          <h3>Append mode in FileOutputStream</h3>
          <pre><code>FileOutputStream fos=new FileOutputStream("xyz.txt",true);
String s1="kohli";
byte[] b=s1.getBytes();
fos.write(b);
fos.close();</code></pre>

          <h3>FileInputStream read example</h3>
          <pre><code>import java.io.*;
class FileInput
{
  public static void main(String[] args) throws Exception
  {
    FileInputStream fis=new FileInputStream("xyz.txt");
    int size=fis.available();
    byte[] b=new byte[size];
    fis.read(b);
    String s=new String(b);
    System.out.println(s);
    fis.close();
  }
}</code></pre>

          <h3>FileWriter and FileReader examples</h3>
          <pre><code>import java.io.*;
class Demo
{
  public static void main(String[] args) throws Exception
  {
    FileWriter fw=new FileWriter("pqr.txt");
    String data="Hello everyone";
    fw.write(data);
    fw.close();
  }
}</code></pre>

          <pre><code>import java.io.*;
class Demo
{
  public static void main(String[] args) throws Exception
  {
    FileReader fr=new FileReader("pqr.txt");
    String data="";
    int av=fr.read();
    while(av!=-1)
    {
      data=data+(char)av;
      av=fr.read();
    }
    System.out.println(data);
    fr.close();
  }
}</code></pre>

          <h3>Copy image using byte streams</h3>
          <pre><code>import java.io.*;
class Demo
{
  public static void main(String[] args) throws Exception
  {
    FileInputStream fis=new FileInputStream("virat.jpg");
    int size=fis.available();
    byte[] b=new byte[size];
    fis.read(b);
    fis.close();

    FileOutputStream fos=new FileOutputStream("c:/fs/dhonifriend.jpg");
    fos.write(b);
    fos.close();
    System.out.println("Image is copied from virat.jpg to dhonifriend.jpg");
  }
}</code></pre>

          <h3>PrintWriter example</h3>
          <pre><code>import java.io.*;
class Demo
{
  public static void main(String[] args) throws Exception
  {
    PrintWriter pw=new PrintWriter("mno.txt");
    pw.print("virat");
    pw.print("kohli");
    pw.println("is champ");
    pw.println("in the world");

    int a=5;
    pw.printf("value of a is %d",a);
    pw.close();
  }
}</code></pre>

          <h3>Dynamic Input Approaches</h3>
          <p>Dynamic input means providing input at runtime through command prompt/console.</p>
          <p>Three common approaches: <code>BufferedReader</code>, <code>Scanner</code>, <code>Console</code>.</p>

          <table>
            <thead>
              <tr>
                <th>Approach</th>
                <th>Important methods</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BufferedReader</td>
                <td><code>readLine()</code>, <code>read()</code></td>
                <td>Usually reads string data; parse manually for numeric types</td>
              </tr>
              <tr>
                <td>Scanner</td>
                <td><code>nextInt()</code>, <code>nextFloat()</code>, <code>next()</code>, <code>nextLine()</code> etc.</td>
                <td>Easy for mixed types; not ideal for hidden password input</td>
              </tr>
              <tr>
                <td>Console</td>
                <td><code>readLine()</code>, <code>readPassword()</code></td>
                <td>Good for secure password input (hidden)</td>
              </tr>
            </tbody>
          </table>

          <h3>BufferedReader example</h3>
          <pre><code>import java.io.*;
class Demo
{
  public static void main(String[] args) throws Exception
  {
    BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
    System.out.println("enter a value:");
    String a=br.readLine();
    System.out.println("enter b value:");
    String b=br.readLine();
    System.out.println(a+b);
    int fn=Integer.parseInt(a);
    int sn=Integer.parseInt(b);
    System.out.println(fn+sn);
  }
}</code></pre>

          <h3>Scanner example</h3>
          <pre><code>import java.util.*;
class Demo
{
  public static void main(String[] args) throws Exception
  {
    Scanner sc=new Scanner(System.in);
    System.out.println("enter username:");
    String uname=sc.nextLine();
    System.out.println("enter password:");
    String pd=sc.next();
    System.out.println(uname);
    System.out.println(pd);
  }
}</code></pre>

          <h3>Console example</h3>
          <pre><code>import java.io.*;
class Demo
{
  public static void main(String[] args) throws Exception
  {
    Console c=System.console();
    System.out.println("enter username:");
    String uname=c.readLine();
    System.out.println("enter password:");
    char[] pwd=c.readPassword();
    String pd=new String(pwd);
    System.out.println(uname);
    System.out.println(pd);
  }
}</code></pre>

          <h3>Serialization and Deserialization</h3>
          <h3>Serialization</h3>
          <ol>
            <li>Converting an object into a series of bits.</li>
            <li>Class must implement <code>Serializable</code> interface.</li>
            <li>Used for file/network object transfer.</li>
          </ol>

          <h3>Deserialization</h3>
          <p>Converting series of bits back into an object.</p>

          <h3>Serializable</h3>
          <p><code>Serializable</code> is marker interface (no methods). It gives object serialization info to JVM.</p>

          <h3>Serialization + Deserialization example</h3>
          <pre><code>import java.io.*;
class Emp implements Serializable
{
  int eno;
  String ename;
}
class SerEx
{
  public static void main(String[] args) throws Exception
  {
    Emp e1=new Emp();
    e1.eno=101;
    e1.ename="Virat";

    FileOutputStream fs=new FileOutputStream("pqr.txt");
    ObjectOutputStream oos=new ObjectOutputStream(fs);
    oos.writeObject(e1);
    oos.close();
    fs.close();

    FileInputStream fis=new FileInputStream("pqr.txt");
    ObjectInputStream ois=new ObjectInputStream(fis);
    Emp e2=(Emp)ois.readObject();
    System.out.println(e2.eno+" "+e2.ename);
    ois.close();
    fis.close();
  }
}</code></pre>
        </details>
      </section>

      <section class="card" id="packages-import">
        <details>
          <summary>31.Packages and Import</summary>

          <h3>Packages</h3>
          <ol>
            <li>Package is a folder structure.</li>
            <li>Package is a collection of classes, interfaces, enums, annotations, errors, and exceptions.</li>
            <li>Packages are divided into 2 types:</li>
          </ol>
          <ol>
            <li>predefine packages</li>
            <li>userdefine packages</li>
          </ol>

          <h3>1.predefine packages</h3>
          <p>Packages already present in Java software (JDK), developed by Java developers.</p>
          <p><code>java.lang</code> is bydefault package in Java.</p>
          <p>Examples: <code>java.lang</code>, <code>java.util</code>, <code>java.io</code> ...</p>

          <h3>2.userdefine packages</h3>
          <p>Packages created by Java programmers (not pre-existing in JDK).</p>

          <h3>Package conventions (reverse domain)</h3>
          <pre><code>www.tcs.com            => domain name
com.tcs                => reverse domain
com.tcs.bank.withdraw

com.tcs     => domain
bank        => project
withdraw    => module

com.tcs.bank.withdraw  module1
com.tcs.bank.account   module2
com.tcs.bank.transfer  module3
com.tcs.bank.loans     module4</code></pre>

          <h3>Syntax</h3>
          <pre><code>package packagename;
class ClassName
{
}
interface InterfaceName
{
}
enum EnumName
{
}</code></pre>

          <h3>Advantages of packages</h3>
          <ol>
            <li>Parallel project development is possible.</li>
            <li>Code reusability across folders.</li>
            <li>Removes naming conflicts.</li>
            <li>Maintenance and readability are improved.</li>
          </ol>

          <h3>Basic package example</h3>
          <pre><code>package com.tcs.bank.account;
class Sample
{
  public static void main(String[] args)
  {
    System.out.println("welcome to packages");
  }
}
interface I1
{
}</code></pre>

          <h3>Compilation of package classes</h3>
          <pre><code>javac -d . Sample.java

Here:
-d  => directory option
.   => current directory</code></pre>

          <h3>Generated structure</h3>
          <pre><code>com
  |--tcs
      |--bank
          |--account
              |--I1.class
              |--Sample.class</code></pre>

          <h3>Execution of packages</h3>
          <pre><code>java fully.qualified.ClassName
java com.tcs.bank.account.Sample</code></pre>

          <h3>Another package example</h3>
          <pre><code>package com.tcs.bank.withdraw;
class Sample
{
  public static void main(String[] args)
  {
    System.out.println("packages easy");
  }
}

// javac -d . Sample.java
// java com.tcs.bank.withdraw.Sample</code></pre>

          <h3>Import</h3>
          <ol>
            <li><code>import</code> is a keyword in Java.</li>
            <li>Purpose: use classes from one package in another package.</li>
          </ol>

          <table>
            <thead>
              <tr>
                <th>Access Modifier</th>
                <th>Accessibility</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><code>public</code></td><td>Anywhere</td></tr>
              <tr><td><code>protected</code></td><td>Package and subclass in another package</td></tr>
              <tr><td>default</td><td>Package only</td></tr>
              <tr><td><code>private</code></td><td>Class only</td></tr>
            </tbody>
          </table>

          <h3>Using import statement</h3>
          <pre><code>package com.state.info;
public class Info
{
  public void apInfo()
  {
    System.out.println("jai ap");
  }
  public void tsInfo()
  {
    System.out.println("jai ts");
  }
}</code></pre>

          <pre><code>package com.state.requiredinfo;
import com.state.info.Info;

class Client
{
  public static void main(String[] args)
  {
    Info i1=new Info();
    i1.apInfo();
    i1.tsInfo();
  }
}</code></pre>

          <pre><code>// javac -d . Info.java
// javac -d . Client.java
// java com.state.requiredinfo.Client
// Output:
// jai ap
// jai ts</code></pre>

          <h3>Without import statement (fully qualified name)</h3>
          <pre><code>package com.state.requiredinfo;
class Client
{
  public static void main(String[] args)
  {
    com.state.info.Info i1=new com.state.info.Info();
    i1.apInfo();
    i1.tsInfo();
  }
}</code></pre>

          <p>So, without <code>import</code> also possible by using fully qualified class name.</p>
        </details>
      </section>

      <section class="card" id="multithreading">
        <details>
          <summary>32.Multitasking and Multithreading</summary>

          <h3>Topics covered</h3>
          <ol>
            <li>Multitasking Introduction</li>
            <li>Types of Multitasking</li>
            <li>Thread class and Runnable interface</li>
            <li>Getting and setting names for threads</li>
            <li>Priorities of Thread</li>
            <li><code>join()</code>, <code>yield()</code>, <code>sleep()</code></li>
            <li>Synchronization and Asynchronization</li>
            <li>Daemon Threads</li>
            <li>InterThread communication</li>
            <li>Deadlock and Starvation</li>
          </ol>

          <h3>Multitasking</h3>
          <ol>
            <li>Executing multiple tasks simultaneously/parallelly/concurrently.</li>
            <li>Multitasking is divided into 2 types: process-based and thread-based.</li>
          </ol>

          <h3>Types of multitasking</h3>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Meaning</th>
                <th>Behavior</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Process based tasking</td>
                <td>Each task is a separate process/program</td>
                <td>OS level, heavy weight, separate memory, expensive context switch</td>
              </tr>
              <tr>
                <td>Thread based tasking (Multithreading)</td>
                <td>Each task is a separate thread in same program</td>
                <td>Programmatic level, light weight, easy communication, cheaper switch</td>
              </tr>
            </tbody>
          </table>

          <p><strong>Purpose of multithreading:</strong> concurrent execution and faster overall execution.</p>

          <h3>Realtime applications</h3>
          <ol>
            <li>Video games</li>
            <li>Animation applications</li>
            <li>Multimedia/graphics applications</li>
          </ol>

          <h3>Thread basics</h3>
          <ol>
            <li>Thread is flow of control (piece of code).</li>
            <li>Predefined thread example: Main thread.</li>
            <li>User-defined threads are created by programmer.</li>
            <li>Java thread creation in 2 ways:</li>
          </ol>
          <ol>
            <li>Extending <code>Thread</code> class</li>
            <li>Implementing <code>Runnable</code> interface</li>
          </ol>

          <h3>Thread class and Runnable interface</h3>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Contains</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><code>Thread</code> class</td><td><code>start()</code>, <code>run()</code></td><td>No multiple class inheritance</td></tr>
              <tr><td><code>Runnable</code> interface</td><td><code>run()</code></td><td>Supports interface-based multiple inheritance pattern</td></tr>
            </tbody>
          </table>

          <h3><code>start()</code> vs <code>run()</code></h3>
          <ul>
            <li><code>start()</code> starts new thread. Thread is born and scheduler decides execution.</li>
            <li><code>run()</code> contains user logic. Direct call behaves like normal method (no new thread).</li>
          </ul>

          <h3>Example: extending Thread</h3>
          <pre><code>class AjayThread extends Thread
{
  public void run()
  {
    for(int i=1;i<=10;i++)
    {
      System.out.println("Userdefine Thread");
    }
  }
  public static void main(String[] args)
  {
    AjayThread a=new AjayThread();
    a.start();

    for(int i=1;i<=10;i++)
    {
      System.out.println("Predefine Thread");
    }
  }
}</code></pre>

          <h3>Example: implementing Runnable</h3>
          <pre><code>class UserDefineThread implements Runnable
{
  public void run()
  {
    System.out.println("userdefine thread");
  }
  public static void main(String[] args)
  {
    UserDefineThread u=new UserDefineThread();
    Thread t1=new Thread(u);
    t1.start();
  }
}</code></pre>

          <h3>Getting and setting thread names</h3>
          <p><code>getName()</code>, <code>setName()</code>, and static method <code>Thread.currentThread()</code>.</p>
          <pre><code>class VenkyThread extends Thread
{
  public void run()
  {
    System.out.println(Thread.currentThread().getName());
    Thread.currentThread().setName("ManjuThread");
    System.out.println(Thread.currentThread().getName());
  }
  public static void main(String[] args)
  {
    System.out.println(Thread.currentThread().getName());
    Thread.currentThread().setName("AjayThread");
    System.out.println(Thread.currentThread().getName());
    VenkyThread v=new VenkyThread();
    v.start();
  }
}</code></pre>

          <h3>Thread priorities</h3>
          <ol>
            <li>Range is <code>1</code> to <code>10</code>; default is <code>5</code>.</li>
            <li>Invalid values throw <code>IllegalArgumentException</code>.</li>
            <li>Use <code>getPriority()</code> and <code>setPriority()</code>.</li>
            <li>If main priority changes before child creation, child gets inherited priority.</li>
          </ol>

          <pre><code>class VenkyThread extends Thread
{
  public void run()
  {
    System.out.println(Thread.currentThread().getName());
    System.out.println(Thread.currentThread().getPriority());
  }
  public static void main(String[] args)
  {
    System.out.println(Thread.currentThread().getPriority()); // 5
    Thread.currentThread().setPriority(7);
    VenkyThread v=new VenkyThread();
    v.start(); // child gets 7
  }
}</code></pre>

          <h3><code>join()</code>, <code>yield()</code>, <code>sleep()</code></h3>
          <ul>
            <li><code>join()</code>: one thread waits until another completes.</li>
            <li><code>yield()</code>: current thread hints scheduler to give chance to others.</li>
            <li><code>sleep(ms)</code>: pauses current thread for given time.</li>
          </ul>
          <p><code>join()</code> and <code>sleep()</code> can throw <code>InterruptedException</code>.</p>

          <pre><code>class Demo extends Thread
{
  public void run()
  {
    for(int i=1;i<=5;i++)
    {
      System.out.println("Ajay thread");
      try
      {
        Thread.sleep(1000);
      }
      catch(InterruptedException e)
      {
      }
    }
  }
  public static void main(String[] args) throws InterruptedException
  {
    Demo d=new Demo();
    d.start();
    d.join(); // or d.join(3000)

    for(int i=1;i<=5;i++)
    {
      System.out.println("Mohan thread");
    }
  }
}</code></pre>

          <h3>Synchronization vs Asynchronization</h3>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Behavior</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Synchronization</td><td>Threads execute one-by-one for critical section</td><td>Data consistency</td></tr>
              <tr><td>Asynchronization</td><td>Threads run at same time</td><td>May cause data inconsistency</td></tr>
            </tbody>
          </table>

          <p>Synchronization can be applied to method or block using <code>synchronized</code>.</p>

          <pre><code>class ClassRoom
{
  synchronized void takeClass(String faculty)
  {
    for(int i=1;i<=5;i++)
    {
      System.out.println(i+" class is taking by : "+faculty);
    }
  }
}
class UserThread extends Thread
{
  ClassRoom c1;
  String faculty;
  UserThread(ClassRoom c1,String faculty)
  {
    this.c1=c1;
    this.faculty=faculty;
  }
  public void run()
  {
    c1.takeClass(faculty);
  }
}</code></pre>

          <pre><code>class ClassRoom
{
  void takeClass(String faculty)
  {
    System.out.println("1st 100 lines");
    synchronized(this)
    {
      for(int i=1;i<=5;i++)
      {
        System.out.println(i+" class is taking by : "+faculty);
      }
    }
    System.out.println("last 20 lines");
  }
}</code></pre>

          <h3>Daemon Thread</h3>
          <ol>
            <li>Daemon thread runs in background to support non-daemon threads.</li>
            <li>Main thread cannot be made daemon.</li>
            <li>User-defined child threads can be daemon.</li>
            <li>Examples: Garbage collector, Signal Dispatcher, Finalizer.</li>
          </ol>

          <p>Methods: <code>setDaemon(boolean)</code> and <code>isDaemon()</code>.</p>
          <pre><code>class UserDefineThread extends Thread
{
  public void run()
  {
    System.out.println("child thread");
    System.out.println(Thread.currentThread().isDaemon());
  }
  public static void main(String[] args)
  {
    UserDefineThread u1=new UserDefineThread();
    u1.setDaemon(true);
    u1.start();
    System.out.println("main thread");
  }
}</code></pre>

          <h3>InterThread communication</h3>
          <ol>
            <li>Communication between threads using <code>wait()</code>, <code>notify()</code>, <code>notifyAll()</code>.</li>
            <li>Applied on synchronized context/monitor objects.</li>
          </ol>
          <ul>
            <li><code>wait()</code>: current thread waits for update.</li>
            <li><code>notify()</code>: wakes one waiting thread.</li>
            <li><code>notifyAll()</code>: wakes all waiting threads.</li>
          </ul>

          <pre><code>class AjayThread extends Thread
{
  int sum=0;
  public void run()
  {
    synchronized(this)
    {
      for(int i=1;i<=100;i++)
      {
        sum=sum+i;
      }
      this.notify();
    }
  }
}
class Demo
{
  public static void main(String[] args) throws Exception
  {
    AjayThread a1=new AjayThread();
    a1.start();
    synchronized(a1)
    {
      a1.wait();
      System.out.println(a1.sum); // 5050
    }
  }
}</code></pre>

          <h3>Deadlock and Starvation</h3>
          <p><strong>Deadlock:</strong> Two threads wait forever for each other.</p>
          <p><strong>Starvation:</strong> A thread waits too long (or indefinitely) due to resource/scheduling unfairness.</p>

          <h3>Deadlock example</h3>
          <pre><code>class A
{
  public synchronized void d1(B b)
  {
    System.out.println("Thread1 starts execution of d1 method");
    try { Thread.sleep(2000); } catch(Exception e) {}
    b.last();
  }
  public synchronized void last()
  {
    System.out.println("Inside A last method");
  }
}
class B
{
  public synchronized void d2(A a)
  {
    System.out.println("Thread2 starts execution of d2 method");
    try { Thread.sleep(2000); } catch(Exception e) {}
    a.last();
  }
  public synchronized void last()
  {
    System.out.println("Inside B last method");
  }
}
class MyThread extends Thread
{
  A a=new A();
  B b=new B();
  public void m1()
  {
    this.start();
    a.d1(b);
  }
  public void run()
  {
    b.d2(a);
  }
}
class Demo
{
  public static void main(String[] args)
  {
    MyThread t=new MyThread();
    t.m1();
  }
}</code></pre>
        </details>
      </section>

      <section class="card" id="exception-handling">
        <details>
          <summary>33.Exception Handling</summary>

          <h3>Purpose of Exception Handling</h3>
          <ol>
            <li>To make robust applications.</li>
            <li>To convert abnormal termination into normal termination.</li>
            <li>To convert technical exceptions into user-friendly messages.</li>
          </ol>

          <h3>Throwable and Exception</h3>
          <p><code>Throwable</code> is the predefined root class for exception hierarchy (<code>Exception</code>, <code>RuntimeException</code>, etc).</p>
          <p>Exception is runtime problem object. It can be handled using <code>try/catch</code> or <code>throws</code>.</p>

          <h3>Java Exception Hierarchy Diagram</h3>
          <div class="diagram-wrap">
            <div class="exception-hierarchy">
              <div class="exception-root">
                <p class="exception-label">Root class</p>
                <div class="exception-node exception-node-root"><code>Throwable</code></div>
                <p class="exception-caption">Base type for everything that can be thrown in Java.</p>
              </div>

              <div class="exception-branches">
                <div class="exception-branch">
                  <div class="exception-node exception-node-exception"><code>Exception</code></div>
                  <p class="exception-branch-note">Application-level problems that can usually be handled.</p>
                  <div class="exception-panels">
                    <article class="exception-panel checked">
                      <h4>Checked Exceptions</h4>
                      <p>Checked by compiler. Must be handled or declared with <code>throws</code>.</p>
                      <ul>
                        <li><code>IOException</code></li>
                        <li><code>SQLException</code></li>
                        <li><code>ClassNotFoundException</code></li>
                        <li><code>InterruptedException</code></li>
                      </ul>
                    </article>

                    <article class="exception-panel unchecked">
                      <h4>Unchecked Exceptions</h4>
                      <p>Subclasses of <code>RuntimeException</code>. Not checked by compiler.</p>
                      <ul>
                        <li><code>ArithmeticException</code></li>
                        <li><code>NullPointerException</code></li>
                        <li><code>NumberFormatException</code></li>
                        <li><code>ArrayIndexOutOfBoundsException</code></li>
                      </ul>
                    </article>

                    <article class="exception-panel custom">
                      <h4>Custom Exceptions</h4>
                      <p>User-defined exceptions for business rules and domain validation.</p>
                      <ul>
                        <li><code>InvalidAgeException</code></li>
                        <li><code>InsufficientBalanceException</code></li>
                        <li><code>UserNotFoundException</code></li>
                      </ul>
                    </article>
                  </div>
                </div>

                <div class="exception-branch">
                  <div class="exception-node exception-node-error"><code>Error</code></div>
                  <p class="exception-branch-note">Serious JVM or environment failures that applications rarely recover from.</p>
                  <div class="exception-panels">
                    <article class="exception-panel error">
                      <h4>Virtual Machine Errors</h4>
                      <p>Usually caused by memory or stack exhaustion.</p>
                      <ul>
                        <li><code>OutOfMemoryError</code></li>
                        <li><code>StackOverflowError</code></li>
                      </ul>
                    </article>

                    <article class="exception-panel error">
                      <h4>Linkage / Loading Errors</h4>
                      <p>Class files are missing or incompatible at runtime.</p>
                      <ul>
                        <li><code>NoClassDefFoundError</code></li>
                        <li><code>UnsatisfiedLinkError</code></li>
                      </ul>
                    </article>

                    <article class="exception-panel error">
                      <h4>Other Serious Errors</h4>
                      <p>These indicate failures outside normal application flow.</p>
                      <ul>
                        <li><code>AssertionError</code></li>
                        <li><code>InternalError</code></li>
                      </ul>
                    </article>
                  </div>
                </div>
              </div>

              <p class="exception-footnote"><strong>Important:</strong> syntax mistakes like missing <code>;</code> or unbalanced braces are compile-time errors, but they are not part of Java's <code>Throwable</code> hierarchy.</p>
            </div>
          </div>

          <h3>Quick Tree View</h3>
          <div class="diagram-wrap">
            <div class="exception-mini-tree">
              <div class="exception-super-root"><code>Object</code></div>
              <p class="exception-super-arrow">&darr;</p>
              <div class="exception-node exception-node-root"><code>Throwable</code></div>

              <div class="exception-mini-grid">
                <article class="exception-mini-box exception">
                  <h4><code>Exception</code></h4>
                  <ul class="exception-mini-list">
                    <li><code>IOException</code></li>
                    <li><code>ClassNotFoundException</code></li>
                    <li><code>SQLException</code></li>
                    <li>
                      <code>RuntimeException</code>
                      <ul class="exception-mini-sublist">
                        <li><code>ArithmeticException</code></li>
                        <li><code>NullPointerException</code></li>
                        <li><code>NumberFormatException</code></li>
                        <li>
                          <code>IndexOutOfBoundsException</code>
                          <ul class="exception-mini-sublist">
                            <li><code>StringIndexOutOfBoundsException</code></li>
                            <li><code>ArrayIndexOutOfBoundsException</code></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </article>

                <article class="exception-mini-box error">
                  <h4><code>Error</code></h4>
                  <ul class="exception-mini-list">
                    <li><code>StackOverflowError</code></li>
                    <li><code>VirtualMachineError</code></li>
                    <li><code>OutOfMemoryError</code></li>
                  </ul>
                </article>
              </div>
            </div>
          </div>

          <h3>Exception vs Error</h3>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Why it happens</th>
                <th>Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Exception</td>
                <td>Usually invalid input/operation at runtime</td>
                <td><code>ArithmeticException</code>, <code>NumberFormatException</code></td>
              </tr>
              <tr>
                <td>Error</td>
                <td>System/resource level severe issues</td>
                <td><code>OutOfMemoryError</code>, <code>StackOverflowError</code></td>
              </tr>
            </tbody>
          </table>
          <p class="sub">Compile-time syntax mistakes belong to program errors classification, not to the Java exception hierarchy.</p>

          <h3>Types of Exceptions</h3>
          <h3>1.Checked Exceptions</h3>
          <ol>
            <li>Derived from <code>java.lang.Exception</code> (excluding runtime exceptions).</li>
            <li>Checked by compiler.</li>
            <li>Must be handled explicitly.</li>
          </ol>
          <p>Examples: <code>FileNotFoundException</code>, <code>ClassNotFoundException</code>, <code>InterruptedException</code>, <code>SQLException</code>.</p>

          <h3>2.Unchecked Exceptions</h3>
          <ol>
            <li>Derived from <code>java.lang.RuntimeException</code>.</li>
            <li>Not checked by compiler.</li>
            <li>Handling is optional (but recommended for user-friendly behavior).</li>
          </ol>
          <p>Examples: <code>ArithmeticException</code>, <code>NumberFormatException</code>, <code>NullPointerException</code>, <code>ArrayIndexOutOfBoundsException</code>, <code>StringIndexOutOfBoundsException</code>.</p>

          <h3>Predefined vs User-defined exceptions</h3>
          <ul>
            <li><strong>Predefined:</strong> already available in JDK (e.g., <code>ArithmeticException</code>).</li>
            <li><strong>User-defined/custom:</strong> created by programmer (e.g., <code>InvalidAgeException</code>).</li>
          </ul>

          <h3><code>ClassNotFoundException</code> vs <code>NoClassDefFoundError</code></h3>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>When it occurs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>ClassNotFoundException</code> (checked)</td>
                <td>Requested class cannot be found while loading by name.</td>
              </tr>
              <tr>
                <td><code>NoClassDefFoundError</code> (unchecked/error)</td>
                <td>Class was present at compile-time but missing at runtime.</td>
              </tr>
            </tbody>
          </table>

          <h3>Program errors classification</h3>
          <ol>
            <li>Compile time errors (syntax mistakes).</li>
            <li>Logical errors (wrong logic; program runs but output wrong).</li>
            <li>Runtime errors (exceptions while executing).</li>
          </ol>

          <h3><code>try</code>, <code>catch</code>, <code>finally</code></h3>
          <ul>
            <li><code>try</code>: risky code (exception can occur).</li>
            <li><code>catch</code>: handles exception and can provide friendly message.</li>
            <li><code>finally</code>: close-up activities (file/db/sql close), executes whether exception occurs or not.</li>
          </ul>

          <h3><code>throws</code> and <code>throw</code></h3>
          <table>
            <thead>
              <tr>
                <th>Keyword</th>
                <th>Use</th>
                <th>Where</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>throws</code></td>
                <td>Delegate exception handling responsibility to caller/JVM</td>
                <td>Method signature</td>
              </tr>
              <tr>
                <td><code>throw</code></td>
                <td>Explicitly throw one exception object (often custom)</td>
                <td>Method body</td>
              </tr>
            </tbody>
          </table>

          <h3>Difference: <code>final</code>, <code>finally</code>, <code>finalize()</code></h3>
          <ul>
            <li><code>final</code>: modifier for variable/method/class restrictions.</li>
            <li><code>finally</code>: block for cleanup code.</li>
            <li><code>finalize()</code>: method (legacy GC hook) called before object cleanup.</li>
          </ul>

          <h3>try-with-resources</h3>
          <ol>
            <li>Introduced from Java 1.7.</li>
            <li>Resources declared in <code>try(...)</code> are auto-closed.</li>
            <li>Reduces complexity compared with explicit close in <code>finally</code>.</li>
          </ol>

          <h3>Case I: cleanup with finally (explicit close)</h3>
          <pre><code>import java.io.*;
class Demo
{
  public static void main(String[] args)
  {
    FileInputStream fis=null;
    try
    {
      fis=new FileInputStream("virat.txt");
    }
    catch(Exception e)
    {
    }
    finally
    {
      try
      {
        if(fis!=null) fis.close();
      }
      catch(Exception e)
      {
        System.out.println("explicitly closed");
      }
    }
  }
}</code></pre>

          <h3>Case II: cleanup with try-with-resources (automatic close)</h3>
          <pre><code>import java.io.*;
class Demo
{
  public static void main(String[] args)
  {
    try(FileInputStream fis=new FileInputStream("virat.txt"))
    {
    }
    catch(Exception e)
    {
      System.out.println("automatic close");
    }
  }
}</code></pre>

          <h3>Valid/Invalid combinations</h3>
          <table>
            <thead>
              <tr>
                <th>try</th>
                <th>catch</th>
                <th>finally</th>
                <th>Valid?</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>1</td><td>1</td><td>Valid</td></tr>
              <tr><td>1</td><td>1</td><td>0</td><td>Valid</td></tr>
              <tr><td>1</td><td>multiple</td><td>1</td><td>Valid</td></tr>
              <tr><td>1</td><td>0</td><td>1</td><td>Valid</td></tr>
              <tr><td>1</td><td>0</td><td>0</td><td>Invalid</td></tr>
              <tr><td>0</td><td>1</td><td>1</td><td>Invalid</td></tr>
              <tr><td>0</td><td>0</td><td>1</td><td>Invalid</td></tr>
              <tr><td>1</td><td>0</td><td>multiple</td><td>Invalid</td></tr>
            </tbody>
          </table>

          <h3>Checked exception examples</h3>
          <h3><code>FileNotFoundException</code></h3>
          <pre><code>import java.io.*;
class Dhoni
{
  public static void main(String[] args)
  {
    try
    {
      FileInputStream fis=new FileInputStream("virat.txt");
    }
    catch(FileNotFoundException e)
    {
      System.out.println("file is not there but donot open");
    }
  }
}</code></pre>

          <h3><code>InterruptedException</code></h3>
          <pre><code>class Dhoni
{
  public static void main(String[] args)
  {
    try
    {
      Thread.sleep(100);
    }
    catch(InterruptedException e)
    {
      System.out.println("Thread is sleeping");
    }
  }
}</code></pre>

          <h3>Unchecked exception examples</h3>
          <h3><code>ArithmeticException</code></h3>
          <pre><code>try
{
  int a=15;
  int b=0;
  int c=a/b;
  System.out.println(c);
}
catch(ArithmeticException e)
{
  System.out.println("cannot divide by zero");
}</code></pre>

          <h3><code>NumberFormatException</code></h3>
          <pre><code>try
{
  String s="Bhavadeesh";
  int a=Integer.parseInt(s);
  System.out.println(a);
}
catch(NumberFormatException e)
{
  System.out.println("please enter only number");
}</code></pre>

          <h3><code>ArrayIndexOutOfBoundsException</code></h3>
          <pre><code>try
{
  int[] a={1,2,3};
  System.out.println(a[6]);
}
catch(ArrayIndexOutOfBoundsException e)
{
  System.out.println("index out of range");
}</code></pre>

          <h3><code>StringIndexOutOfBoundsException</code></h3>
          <pre><code>try
{
  String s="virat";
  char ch=s.charAt(12);
  System.out.println(ch);
}
catch(StringIndexOutOfBoundsException e)
{
  System.out.println("string index out of range");
}</code></pre>

          <h3><code>NullPointerException</code></h3>
          <pre><code>try
{
  String s=null;
  int l=s.length();
  System.out.println(l);
}
catch(NullPointerException e)
{
  System.out.println("string is null");
}</code></pre>

          <h3>Technical to user-friendly message (ATM pin example)</h3>
          <pre><code>import java.util.*;
class B
{
  public static void main(String[] args)
  {
    System.out.println("file opened");
    try
    {
      Scanner sc=new Scanner(System.in);
      System.out.println("enter pin");
      String pinnumber=sc.next();
      int pn=Integer.parseInt(pinnumber);
      System.out.println("Atm opened happy");
    }
    catch(NumberFormatException e)
    {
      System.out.println("uncle please donot enter pin in alphabets");
    }
    finally
    {
      System.out.println("file close");
    }
  }
}</code></pre>

          <h3>Delegation using <code>throws</code></h3>
          <pre><code>class Demo
{
  void m1() throws InterruptedException
  {
    System.out.println("Hi in m1");
    Thread.sleep(6000);
    System.out.println("Bye in m1");
  }
  void m2() throws InterruptedException
  {
    System.out.println("Hi in m2");
    m1();
  }
  void m3() throws InterruptedException
  {
    System.out.println("Hi in m3");
    m2();
  }
  public static void main(String[] args) throws InterruptedException
  {
    Demo d1=new Demo();
    d1.m3();
  }
}</code></pre>

          <h3>Custom exceptions using <code>throw</code></h3>
          <pre><code>class NotEligibleMarriageException extends Exception
{
  NotEligibleMarriageException(String msg)
  {
    super(msg);
  }
}
class Demo
{
  void status(int age) throws NotEligibleMarriageException
  {
    if(age>21)
    {
      System.out.println("Eligible for marriage happy");
    }
    else
    {
      throw new NotEligibleMarriageException("study first");
    }
  }
}</code></pre>

          <pre><code>class InvalidAgeException extends Exception
{
  InvalidAgeException(String msg)
  {
    super(msg);
  }
}
class Demo
{
  void checkVote(int age) throws InvalidAgeException
  {
    if(age>=18)
    {
      System.out.println("eligible for vote");
    }
    else
    {
      throw new InvalidAgeException("not eligible for vote");
    }
  }
}</code></pre>

          <h3>Try with multiple catches</h3>
          <pre><code>import java.util.*;
class Demo
{
  public static void main(String[] args)
  {
    try
    {
      Scanner sc=new Scanner(System.in);
      System.out.println("enter num:");
      String s=sc.next();
      int a=Integer.parseInt(s);
      int b=0;
      int c=a/b;
    }
    catch(NumberFormatException e)
    {
      System.out.println("NumberFormatException solved");
    }
    catch(ArithmeticException e)
    {
      System.out.println("ArithmeticException solved");
    }
    finally
    {
      System.out.println("1 try with multiple catch blocks");
    }
  }
}</code></pre>
        </details>
      </section>

      <section class="card" id="wrapper-classes">
        <details>
          <summary>34.Wrapper Classes</summary>

          <h3>Wrapper classes</h3>
          <ol>
            <li>8 primitive datatypes have 8 corresponding wrapper classes.</li>
            <li>Purpose: conversion between primitive type and object/reference type.</li>
          </ol>

          <table>
            <thead>
              <tr>
                <th>Primitive</th>
                <th>Wrapper</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>byte</td><td>Byte</td></tr>
              <tr><td>short</td><td>Short</td></tr>
              <tr><td>int</td><td>Integer</td></tr>
              <tr><td>long</td><td>Long</td></tr>
              <tr><td>float</td><td>Float</td></tr>
              <tr><td>double</td><td>Double</td></tr>
              <tr><td>char</td><td>Character</td></tr>
              <tr><td>boolean</td><td>Boolean</td></tr>
            </tbody>
          </table>

          <h3>Boxing (explicit)</h3>
          <p>Converting primitive datatype into reference/object type explicitly.</p>
          <pre><code>class Demo
{
  public static void main(String[] args)
  {
    int primitiveValue = 42;
    Integer boxedValue = Integer.valueOf(primitiveValue);
    System.out.println(boxedValue);
  }
}</code></pre>

          <h3>UnBoxing (explicit)</h3>
          <p>Converting reference/object type into primitive type explicitly.</p>
          <pre><code>class Demo
{
  public static void main(String[] args)
  {
    Integer boxedValue = Integer.valueOf(42);
    int primitiveValue = boxedValue.intValue();
    System.out.println(primitiveValue);

    Float f1 = Float.valueOf(1.2f);
    float f2 = f1.floatValue();
    System.out.println(f2);
  }
}</code></pre>

          <h3>AutoBoxing (implicit)</h3>
          <pre><code>int a=12;
Integer b=a;
System.out.println(b);

float x=1.3f;
Float y=x;
System.out.println(y);</code></pre>

          <h3>AutoUnBoxing (implicit)</h3>
          <pre><code>Integer a=Integer.valueOf(12);
int b=a;
System.out.println(b);

Float f1=Float.valueOf(1.3f);
float f2=f1;
System.out.println(f2);</code></pre>
        </details>
      </section>

      <section class="card" id="collections-framework">
        <details>
          <summary>35.Collections Framework</summary>

          <h3>Collections framework roadmap</h3>
          <ol>
            <li>Difference between Arrays and Collections</li>
            <li>Difference between collection and Collections</li>
            <li>Collection vs Map</li>
            <li>List, Set, Queue, Deque, Map interfaces and implementations</li>
            <li>Important differences: ArrayList/LinkedList/Vector/Stack</li>
            <li>Important differences: HashSet/LinkedHashSet/TreeSet</li>
            <li>Important differences: HashMap/LinkedHashMap/TreeMap/Hashtable/Properties</li>
            <li>FailFast vs FailSafe collections</li>
            <li>HashMap vs IdentityHashMap and WeakHashMap</li>
            <li>Comparable vs Comparator</li>
            <li>Cursors: Enumeration, Iterator, ListIterator</li>
          </ol>

          <h3>Arrays vs Collections</h3>
          <table>
            <thead>
              <tr>
                <th>Arrays</th>
                <th>Collections</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Fixed size</td><td>Growable size</td></tr>
              <tr><td>Mainly homogeneous data</td><td>Homogeneous or heterogeneous</td></tr>
              <tr><td>Limited operations</td><td>Rich predefined APIs</td></tr>
              <tr><td>Stores primitive + object</td><td>Stores object types</td></tr>
            </tbody>
          </table>

          <h3>collection vs Collections</h3>
          <table>
            <thead>
              <tr>
                <th>collection</th>
                <th>Collections</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Interface family (List, Set, Queue, Deque)</td><td>Utility class in <code>java.util</code></td></tr>
              <tr><td>Stores group of objects</td><td>Provides utility methods (<code>sort</code>, <code>reverse</code>, <code>max</code>, <code>min</code>, etc.)</td></tr>
            </tbody>
          </table>

          <h3>Collection vs Map</h3>
          <table>
            <thead>
              <tr>
                <th>Collection</th>
                <th>Map</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Stores elements</td><td>Stores key-value entries</td></tr>
              <tr><td>Mostly 1-dimensional data</td><td>2-dimensional key-value mapping</td></tr>
              <tr><td>Usually index/iterator traversal</td><td>Key-based access</td></tr>
              <tr><td>Duplicates depend on implementation</td><td>Keys unique, values can repeat</td></tr>
            </tbody>
          </table>

          <h3>Collection framework hierarchy diagram</h3>
          <div class="diagram-wrap">
            <div class="collection-legend">
              <span class="collection-legend-item"><span class="collection-legend-chip interface"></span>Interface</span>
              <span class="collection-legend-item"><span class="collection-legend-chip class"></span>Class</span>
              <span class="collection-legend-item"><span class="collection-legend-line"></span>extends</span>
              <span class="collection-legend-item"><span class="collection-legend-line dashed"></span>implements</span>
            </div>

            <svg class="collection-diagram-svg" viewBox="0 0 1120 660" role="img" aria-labelledby="collection-framework-title">
              <title id="collection-framework-title">Java collection framework hierarchy</title>

              <text class="note-label" x="70" y="32">Collection side</text>
              <text class="note-label" x="750" y="32">Map side</text>

              <path class="line-solid" d="M300 84 L300 110" />
              <path class="line-solid" d="M300 154 L300 205 M130 205 L470 205 M130 205 L130 240 M300 205 L300 240 M470 205 L470 240" />
              <path class="line-dashed" d="M130 284 L130 338 L90 338 L90 360 M90 338 L90 430 M90 338 L90 500" />
              <path class="line-solid" d="M90 544 L90 570" />
              <path class="line-solid" d="M300 284 L300 380" />
              <path class="line-dashed" d="M300 284 L300 310" />
              <path class="line-dashed" d="M300 424 L300 450" />
              <path class="line-dashed" d="M160 452 L205 452 L205 402 L230 402" />
              <path class="line-solid" d="M470 284 L470 500" />
              <path class="line-dashed" d="M470 284 L470 338 L630 338 L630 360" />
              <path class="line-solid" d="M630 404 L630 430" />
              <path class="line-dashed" d="M470 544 L470 570" />

              <path class="line-solid" d="M830 84 L830 190" />
              <path class="line-solid" d="M830 234 L830 340" />
              <path class="line-dashed" d="M830 108 L920 108 L920 382 M920 202 L950 202 M920 382 L950 382" />
              <path class="line-solid" d="M1020 224 L1020 270" />

              <g transform="translate(230 40)">
                <rect class="interface-node" width="140" height="44" rx="12" ry="12"></rect>
                <text class="node-label" x="70" y="22">Iterable</text>
              </g>

              <g transform="translate(230 110)">
                <rect class="interface-node" width="140" height="44" rx="12" ry="12"></rect>
                <text class="node-label" x="70" y="22">Collection</text>
              </g>

              <g transform="translate(60 240)">
                <rect class="interface-node" width="140" height="44" rx="12" ry="12"></rect>
                <text class="node-label" x="70" y="22">List</text>
              </g>

              <g transform="translate(230 240)">
                <rect class="interface-node" width="140" height="44" rx="12" ry="12"></rect>
                <text class="node-label" x="70" y="22">Queue</text>
              </g>

              <g transform="translate(400 240)">
                <rect class="interface-node" width="140" height="44" rx="12" ry="12"></rect>
                <text class="node-label" x="70" y="22">Set</text>
              </g>

              <g transform="translate(20 360)">
                <rect class="class-node" width="140" height="44" rx="12" ry="12"></rect>
                <text class="node-label" x="70" y="22">ArrayList</text>
              </g>

              <g transform="translate(20 430)">
                <rect class="class-node" width="140" height="44" rx="12" ry="12"></rect>
                <text class="node-label" x="70" y="22">LinkedList</text>
              </g>

              <g transform="translate(20 500)">
                <rect class="class-node" width="140" height="44" rx="12" ry="12"></rect>
                <text class="node-label" x="70" y="22">Vector</text>
              </g>

              <g transform="translate(20 570)">
                <rect class="class-node" width="140" height="44" rx="12" ry="12"></rect>
                <text class="node-label" x="70" y="22">Stack</text>
              </g>

              <g transform="translate(230 310)">
                <rect class="class-node" width="140" height="44" rx="12" ry="12"></rect>
                <text class="node-label" x="70" y="22">PriorityQueue</text>
              </g>

              <g transform="translate(230 380)">
                <rect class="interface-node" width="140" height="44" rx="12" ry="12"></rect>
                <text class="node-label" x="70" y="22">Deque</text>
              </g>

              <g transform="translate(230 450)">
                <rect class="class-node" width="140" height="44" rx="12" ry="12"></rect>
                <text class="node-label" x="70" y="22">ArrayDeque</text>
              </g>

              <g transform="translate(560 360)">
                <rect class="class-node" width="140" height="44" rx="12" ry="12"></rect>
                <text class="node-label" x="70" y="22">HashSet</text>
              </g>

              <g transform="translate(560 430)">
                <rect class="class-node" width="140" height="44" rx="12" ry="12"></rect>
                <text class="node-label" x="70" y="22">LinkedHashSet</text>
              </g>

              <g transform="translate(400 500)">
                <rect class="interface-node" width="140" height="44" rx="12" ry="12"></rect>
                <text class="node-label" x="70" y="22">SortedSet</text>
              </g>

              <g transform="translate(400 570)">
                <rect class="class-node" width="140" height="44" rx="12" ry="12"></rect>
                <text class="node-label" x="70" y="22">TreeSet</text>
              </g>

              <g transform="translate(760 40)">
                <rect class="interface-node" width="140" height="44" rx="12" ry="12"></rect>
                <text class="node-label" x="70" y="22">Map</text>
              </g>

              <g transform="translate(760 190)">
                <rect class="interface-node" width="140" height="44" rx="12" ry="12"></rect>
                <text class="node-label" x="70" y="22">SortedMap</text>
              </g>

              <g transform="translate(760 340)">
                <rect class="class-node" width="140" height="44" rx="12" ry="12"></rect>
                <text class="node-label" x="70" y="22">TreeMap</text>
              </g>

              <g transform="translate(950 180)">
                <rect class="class-node" width="140" height="44" rx="12" ry="12"></rect>
                <text class="node-label" x="70" y="22">HashMap</text>
              </g>

              <g transform="translate(950 270)">
                <rect class="class-node" width="140" height="44" rx="12" ry="12"></rect>
                <text class="node-label" x="70" y="22">LinkedHashMap</text>
              </g>

              <g transform="translate(950 360)">
                <rect class="class-node" width="140" height="44" rx="12" ry="12"></rect>
                <text class="node-label" x="70" y="22">Hashtable</text>
              </g>
            </svg>
          </div>

          <div class="tip">This is a simplified revision diagram. Interfaces like <code>NavigableSet</code> and <code>NavigableMap</code> are skipped so the most-used interview hierarchy stays easy to remember.</div>

          <h3>List interface</h3>
          <ol>
            <li>Allows duplicates.</li>
            <li>Maintains insertion order.</li>
            <li>Allows multiple null values.</li>
            <li>Implementations: <code>ArrayList</code>, <code>LinkedList</code>, <code>Vector</code>, <code>Stack</code>.</li>
          </ol>

          <h3>ArrayList overview</h3>
          <ul>
            <li>Growable array-backed structure; default capacity 10.</li>
            <li>Fast random access (index-based fetch).</li>
            <li>Not synchronized, not thread-safe.</li>
          </ul>

          <h3>Generics in collections</h3>
          <p>Generics provide type safety and reduce explicit type casting.</p>
          <pre><code>ArrayList<String> snames=new ArrayList<String>();
snames.add("venky");
snames.add("parithosh");
snames.add("mohan");
System.out.println(snames);</code></pre>

          <h3>Common List APIs</h3>
          <table>
            <thead>
              <tr>
                <th>Method</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><code>add()</code>, <code>addAll()</code></td><td>Insert elements</td></tr>
              <tr><td><code>get()</code>, <code>set()</code></td><td>Read/update by index</td></tr>
              <tr><td><code>size()</code></td><td>Total elements</td></tr>
              <tr><td><code>indexOf()</code>, <code>lastIndexOf()</code></td><td>Find index</td></tr>
              <tr><td><code>subList()</code>, <code>contains()</code></td><td>Slice/membership</td></tr>
              <tr><td><code>remove()</code>, <code>clear()</code>, <code>isEmpty()</code></td><td>Delete/clear checks</td></tr>
              <tr><td><code>Collections.sort()</code>, <code>reverse()</code>, <code>max()</code>, <code>min()</code>, <code>frequency()</code></td><td>Utility operations</td></tr>
              <tr><td><code>clone()</code></td><td>Shallow copy</td></tr>
              <tr><td><code>Arrays.asList()</code></td><td>Array to List conversion</td></tr>
            </tbody>
          </table>

          <h3>Shallow copy vs deep copy reference assignment</h3>
          <pre><code>ArrayList<String> al1=new ArrayList<String>();
al1.add("rohit");
al1.add("virat");
al1.add("gill");

ArrayList<String> al2=(ArrayList<String>)al1.clone(); // shallow copy
al2.set(2,"venky"); // al1 unchanged

ArrayList<String> al3=al1; // reference assignment
al3.set(2,"manju"); // al1 also changed</code></pre>

          <h3>LinkedList, Vector, Stack quick differences</h3>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Best use</th>
                <th>Sync/Thread safety</th>
                <th>Special behavior</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>LinkedList</td><td>Frequent insertion/deletion</td><td>Not synchronized</td><td>Doubly linked structure</td></tr>
              <tr><td>Vector</td><td>Legacy synchronized list</td><td>Synchronized, thread-safe</td><td>Legacy collection</td></tr>
              <tr><td>Stack</td><td>LIFO operations</td><td>Synchronized, thread-safe</td><td><code>push()</code>, <code>peek()</code>, <code>pop()</code></td></tr>
            </tbody>
          </table>

          <h3>Set interface</h3>
          <ol>
            <li>No duplicates.</li>
            <li>Typically not index-based.</li>
            <li>Implementations: <code>HashSet</code>, <code>LinkedHashSet</code>, <code>TreeSet</code>.</li>
          </ol>

          <h3>HashSet vs LinkedHashSet vs TreeSet</h3>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Order</th>
                <th>Null</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>HashSet</td><td>No insertion order</td><td>One null allowed</td><td>Hash table based</td></tr>
              <tr><td>LinkedHashSet</td><td>Maintains insertion order</td><td>One null allowed</td><td>Hash + linked list</td></tr>
              <tr><td>TreeSet</td><td>Sorted ascending</td><td>No null</td><td>Tree based, homogeneous comparable data</td></tr>
            </tbody>
          </table>

          <h3>Queue and Deque</h3>
          <table>
            <thead>
              <tr>
                <th>Interface</th>
                <th>Implementation</th>
                <th>Behavior</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Queue</td><td>PriorityQueue</td><td>Head-tail processing, no null, duplicates allowed</td></tr>
              <tr><td>Deque</td><td>ArrayDeque</td><td>Insert/delete at both ends, no null</td></tr>
            </tbody>
          </table>

          <h3>PriorityQueue methods</h3>
          <p><code>offer()</code> inserts, <code>peek()</code> reads head, <code>poll()</code> removes head.</p>
          <pre><code>PriorityQueue<Integer> p1=new PriorityQueue<Integer>();
p1.offer(3);
p1.offer(4);
p1.offer(2);
System.out.println(p1);
System.out.println(p1.peek());
p1.poll();
System.out.println(p1);</code></pre>

          <h3>Map interface</h3>
          <ol>
            <li>Stores key-value pairs (entries).</li>
            <li>Keys must be unique; values may duplicate.</li>
            <li>Implementations: <code>HashMap</code>, <code>LinkedHashMap</code>, <code>TreeMap</code>, <code>Hashtable</code>, <code>Properties</code>.</li>
          </ol>

          <h3>Map implementations difference</h3>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Order</th>
                <th>Null key/value</th>
                <th>Sync</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>HashMap</td><td>No insertion order</td><td>1 null key, multiple null values</td><td>Not synchronized</td></tr>
              <tr><td>LinkedHashMap</td><td>Maintains insertion order</td><td>1 null key, multiple null values</td><td>Not synchronized</td></tr>
              <tr><td>TreeMap</td><td>Sorted by key</td><td>No null key</td><td>Not synchronized</td></tr>
              <tr><td>Hashtable</td><td>No insertion order</td><td>No null key/value</td><td>Synchronized</td></tr>
              <tr><td>Properties</td><td>Hashtable subclass</td><td>Used for config key-value files</td><td>Typically synchronized via Hashtable</td></tr>
            </tbody>
          </table>

          <h3>Common Map APIs</h3>
          <p><code>put()</code>, <code>size()</code>, <code>get()</code>, <code>containsKey()</code>, <code>containsValue()</code>, <code>keySet()</code>, <code>values()</code>, <code>entrySet()</code>, <code>clear()</code>, <code>isEmpty()</code>.</p>
          <pre><code>HashMap<Integer,String> hm=new HashMap<Integer,String>();
hm.put(12,"venky");
hm.put(11,"Hemanth");
hm.put(10,"parithosh");
System.out.println(hm);
System.out.println(hm.size());
System.out.println(hm.get(12));
System.out.println(hm.containsKey(11));
System.out.println(hm.containsValue("Hemanth"));
System.out.println(hm.keySet());
System.out.println(hm.values());
System.out.println(hm.entrySet());</code></pre>

          <h3>Properties file use (avoid hardcoding)</h3>
          <pre><code>// db.properties
Username="Bhavadeesh"
Password="Bhavi123"</code></pre>
          <pre><code>import java.io.*;
import java.util.*;
class Demo
{
  public static void main(String[] args)
  {
    try
    {
      FileInputStream fis=new FileInputStream("db.properties");
      Properties p=new Properties();
      p.load(fis);
      String un=p.getProperty("Username");
      String pw=p.getProperty("Password");
      System.out.println(un);
      System.out.println(pw);
    }
    catch(Exception e)
    {
      System.out.println(e);
    }
  }
}</code></pre>

          <h3>FailFast vs FailSafe</h3>
          <p><strong>Fail-fast / non-concurrent collections:</strong> iterators work on the original collection. If the collection is structurally modified during traversal, they usually throw <code>ConcurrentModificationException</code>.</p>
          <p><strong>Fail-safe / concurrent collections:</strong> iterators work on a snapshot or concurrent view, so they do not throw <code>ConcurrentModificationException</code> during traversal.</p>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Iterator works on</th>
                <th>Behavior while modifying during traversal</th>
                <th>Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>FailFast</td><td>Original collection</td><td>Throws <code>ConcurrentModificationException</code></td><td>ArrayList, LinkedList, Vector, HashSet, LinkedHashSet, HashMap</td></tr>
              <tr><td>FailSafe</td><td>Snapshot or weakly consistent view</td><td>No CME; changes are handled through copy/concurrent structure</td><td>CopyOnWriteArrayList, ConcurrentHashMap, <code>ConcurrentHashMap.newKeySet()</code></td></tr>
            </tbody>
          </table>

          <div class="tip">Interview note: <code>Iterator.remove()</code> is allowed for fail-fast iterators. The exception usually happens when the collection is modified directly while traversal is still running.</div>

          <pre><code>ArrayList<Integer> al=new ArrayList<Integer>();
al.add(10); al.add(20); al.add(30);
for(Integer x:al)
{
  if(x==20)
  {
    al.add(99); // direct structural change during traversal
  }
}
System.out.println(al); // throws ConcurrentModificationException</code></pre>

          <pre><code>import java.util.concurrent.*;
class Demo
{
  public static void main(String[] args)
  {
    CopyOnWriteArrayList<Integer> al=new CopyOnWriteArrayList<Integer>();
    al.add(1); al.add(2); al.add(3); al.add(4);
    for(int rs:al)
    {
      if(rs==1)
      {
        al.add(5678);
      }
    }
    System.out.println(al);
  }
}</code></pre>

          <h3>HashMap vs IdentityHashMap</h3>
          <p>HashMap compares keys by <code>equals()</code>; IdentityHashMap compares by reference identity (<code>==</code>).</p>
          <pre><code>HashMap<String,Integer> hm=new HashMap<String,Integer>();
hm.put("ajay",200);
hm.put(new String("ajay"),600);
System.out.println(hm.size()); // 1 key replaced

IdentityHashMap<String,Integer> ihm=new IdentityHashMap<String,Integer>();
ihm.put("ajay",200);
ihm.put(new String("ajay"),600);
System.out.println(ihm.size()); // 2 different key objects</code></pre>

          <h3>HashMap vs WeakHashMap</h3>
          <p>WeakHashMap uses weak references for keys and entries can be garbage-collected when key has no strong reference.</p>

          <h3>Cursors in collections</h3>
          <div class="diagram-wrap">
            <div class="cursor-diagram">
              <div class="cursor-root">CURSORS</div>

              <div class="cursor-branches">
                <article class="cursor-branch">
                  <div class="cursor-card">
                    <h4>Enumeration</h4>
                    <p class="cursor-direction">Forward direction only</p>
                    <ul class="cursor-facts">
                      <li>Read-only cursor.</li>
                      <li>Used with legacy classes such as <code>Vector</code>, <code>Stack</code> and <code>Hashtable</code>.</li>
                      <li>Main methods: <code>hasMoreElements()</code> and <code>nextElement()</code>.</li>
                    </ul>
                  </div>
                </article>

                <article class="cursor-branch">
                  <div class="cursor-card">
                    <h4>Iterator</h4>
                    <p class="cursor-direction">Forward direction only</p>
                    <ul class="cursor-facts">
                      <li>Can read and remove data while traversing.</li>
                      <li>Applicable to almost all collection types such as <code>ArrayList</code>, <code>Vector</code> and <code>HashSet</code>.</li>
                      <li>Main methods: <code>hasNext()</code>, <code>next()</code> and <code>remove()</code>.</li>
                    </ul>
                  </div>
                </article>

                <article class="cursor-branch">
                  <div class="cursor-card">
                    <h4>ListIterator</h4>
                    <p class="cursor-direction">Forward and backward (bidirectional)</p>
                    <ul class="cursor-facts">
                      <li>Can read, remove, add and set data.</li>
                      <li>Applicable only to <code>List</code> implementations such as <code>ArrayList</code>, <code>LinkedList</code>, <code>Vector</code> and <code>Stack</code>.</li>
                      <li>Main methods: <code>hasPrevious()</code>, <code>previous()</code>, <code>add()</code> and <code>set()</code>.</li>
                    </ul>
                  </div>
                </article>
              </div>
            </div>
          </div>

          <div class="tip">Quick memory rule: <code>Enumeration</code> = read only, <code>Iterator</code> = read + remove, <code>ListIterator</code> = read + remove + add + set in both directions.</div>

          <table>
            <thead>
              <tr>
                <th>Cursor</th>
                <th>Applicable on</th>
                <th>Direction</th>
                <th>Capabilities</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Enumeration</td><td>Legacy collections / classes</td><td>Forward only</td><td>Read only</td></tr>
              <tr><td>Iterator</td><td>Most collection types</td><td>Forward only</td><td>Read + remove</td></tr>
              <tr><td>ListIterator</td><td>List only</td><td>Forward + backward</td><td>Read + remove + add + set</td></tr>
            </tbody>
          </table>

          <pre><code>Vector<String> v=new Vector<String>();
v.add("A");
v.add("B");
v.add("C");
Enumeration<String> e=v.elements();
while(e.hasMoreElements())
{
  System.out.println(e.nextElement());
}</code></pre>

          <pre><code>ArrayList<Integer> al=new ArrayList<Integer>();
al.add(1); al.add(2); al.add(3); al.add(4); al.add(5);
Iterator<Integer> i=al.iterator();
while(i.hasNext())
{
  Integer x=i.next();
  if(x%2!=0)
  {
    i.remove();
  }
}
System.out.println(al); // [2, 4]</code></pre>

          <pre><code>ArrayList<String> al=new ArrayList<String>();
al.add("Balakrishna");
al.add("venky");
al.add("nag");
al.add("chiru");
ListIterator<String> li=al.listIterator();
while(li.hasNext())
{
  String s=li.next();
  if(s.equals("venky"))
  {
    li.remove();
  }
  else if(s.equals("nag"))
  {
    li.add("chaitu");
  }
  else if(s.equals("chiru"))
  {
    li.set("charan");
  }
}
System.out.println(al);</code></pre>

          <h3>Comparable vs Comparator</h3>
          <table>
            <thead>
              <tr>
                <th>Comparable</th>
                <th>Comparator</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>In <code>java.lang</code></td><td>In <code>java.util</code></td></tr>
              <tr><td><code>compareTo(T o)</code></td><td><code>compare(T o1, T o2)</code></td></tr>
              <tr><td>Sorting logic inside same business class</td><td>Sorting logic in separate class</td></tr>
              <tr><td>Best for one natural order</td><td>Best for multiple sorting strategies</td></tr>
            </tbody>
          </table>

          <h3>Comparable example</h3>
          <pre><code>import java.util.*;
class Student implements Comparable<Student>
{
  int sno;
  String sname;
  Student(int sno,String sname)
  {
    this.sno=sno;
    this.sname=sname;
  }
  public int compareTo(Student s)
  {
    return this.sno-s.sno;
  }
  public String toString()
  {
    return sno+" "+sname;
  }
}
class Demo
{
  public static void main(String[] args)
  {
    ArrayList<Student> al=new ArrayList<Student>();
    al.add(new Student(121,"parithosh"));
    al.add(new Student(25,"venky"));
    al.add(new Student(32,"Manju"));
    Collections.sort(al);
    for(Student s:al)
    {
      System.out.println(s);
    }
  }
}</code></pre>

          <h3>Comparator example</h3>
          <pre><code>import java.util.*;
class Emp
{
  int eno;
  String ename;
  Emp(int eno,String ename)
  {
    this.eno=eno;
    this.ename=ename;
  }
  public String toString()
  {
    return eno+" "+ename;
  }
}
class Enamecom implements Comparator<Emp>
{
  public int compare(Emp e1,Emp e2)
  {
    return e1.ename.compareTo(e2.ename);
  }
}
class Demo
{
  public static void main(String[] args)
  {
    ArrayList<Emp> al=new ArrayList<Emp>();
    al.add(new Emp(65,"bhavi"));
    al.add(new Emp(45,"hari"));
    al.add(new Emp(75,"ravi"));
    Collections.sort(al,new Enamecom());
    for(Emp e:al)
    {
      System.out.println(e);
    }
  }
}</code></pre>
        </details>
      </section>
    </main>
  </div>

  <script>
    (function () {
      var searchInput = document.getElementById("searchInput");
      var expandBtn = document.getElementById("expandBtn");
      var collapseBtn = document.getElementById("collapseBtn");
      var cards = Array.prototype.slice.call(document.querySelectorAll("main .card"));
      var detailsList = cards
        .map(function (card) {
          return card.querySelector("details");
        })
        .filter(function (item) {
          return Boolean(item);
        });

      if (expandBtn) {
        expandBtn.addEventListener("click", function () {
          detailsList.forEach(function (d) {
            d.open = true;
          });
        });
      }

      if (collapseBtn) {
        collapseBtn.addEventListener("click", function () {
          detailsList.forEach(function (d) {
            d.open = false;
          });
        });
      }

      if (searchInput) {
        searchInput.addEventListener("input", function () {
          var query = searchInput.value.trim().toLowerCase();

          cards.forEach(function (card) {
            var keywords = card.getAttribute("data-keywords") || "";
            var text = (keywords + " " + card.textContent).toLowerCase();
            var isMatch = query === "" || text.indexOf(query) !== -1;
            card.style.display = isMatch ? "" : "none";
          });
        });
      }
    })();
  </script>
</body>
</html>
`;

export default noteSource;



