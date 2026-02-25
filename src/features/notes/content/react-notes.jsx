const noteSource = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>React Notes | Modules + Basics + Components</title>
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
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: "Segoe UI", Tahoma, Arial, sans-serif;
      color: var(--text);
      line-height: 1.6;
      background:
        radial-gradient(1200px 500px at -10% -20%, #dff5ff 0%, transparent 50%),
        radial-gradient(900px 400px at 120% -20%, #dbf7f0 0%, transparent 45%),
        var(--bg);
    }

    .container {
      width: min(1150px, 95%);
      margin: 0 auto;
      padding: 16px 0 30px;
      display: grid;
      gap: 14px;
    }

    .hero {
      border-radius: 16px;
      padding: 18px;
      color: #fff;
      background: linear-gradient(135deg, #0d9488, #0891b2 45%, #2563eb);
      box-shadow: var(--shadow-lg);
    }

    .hero h1 {
      margin: 0;
      font-size: clamp(1.3rem, 2.4vw, 1.9rem);
    }

    .hero p {
      margin: 8px 0 0;
      opacity: 0.95;
      max-width: 860px;
    }

    .card {
      background: var(--surface);
      border: 1px solid var(--line);
      border-radius: var(--radius);
      padding: 14px;
      box-shadow: var(--shadow-sm);
    }

    details {
      border: 1px solid var(--line);
      border-radius: 10px;
      padding: 10px;
      background: #fff;
    }

    details + details {
      margin-top: 8px;
    }

    summary {
      cursor: pointer;
      font-weight: 700;
    }

    h2,
    h3 {
      margin: 10px 0 8px;
    }

    p {
      margin: 7px 0;
    }

    ul {
      margin: 8px 0;
      padding-left: 18px;
    }

    pre {
      margin: 8px 0;
      border-radius: 10px;
      overflow: auto;
      border: 1px solid #111827;
      background: var(--code-bg);
      color: var(--code-fg);
      padding: 12px;
      font-size: 0.86rem;
    }

    code {
      font-family: Consolas, "Courier New", monospace;
    }

    .two-col {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 10px;
    }

    .note {
      border-left: 4px solid var(--primary);
      border-radius: 8px;
      background: #ebfffc;
      padding: 8px 10px;
      margin: 8px 0;
    }

    .warning {
      border-left: 4px solid #f97316;
      border-radius: 8px;
      background: #fff7ed;
      padding: 8px 10px;
      margin: 8px 0;
    }

    .output {
      border: 1px solid #9ec4ff;
      border-radius: 10px;
      padding: 10px;
      min-height: 68px;
      background: #f4f8ff;
      color: #102845;
      font-family: Consolas, "Courier New", monospace;
      white-space: pre-line;
    }

    .btn-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin: 8px 0;
    }

    .btn {
      cursor: pointer;
      border: none;
      border-radius: 9px;
      padding: 8px 10px;
      background: #0e7490;
      color: #fff;
      font-weight: 700;
    }

    .btn:hover {
      background: #0b5a70;
    }

    .table-wrap {
      overflow-x: auto;
      border: 1px solid var(--line);
      border-radius: 10px;
      background: #fff;
      margin-top: 8px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      min-width: 720px;
    }

    th,
    td {
      border: 1px solid var(--line);
      text-align: left;
      vertical-align: top;
      padding: 8px;
    }

    th {
      background: #edf3ff;
      color: #18385f;
    }
  </style>
</head>
<body>
  <div class="container">
    <section class="hero">
      <h1>React Notes: Modules, JSX, Components, and Composition</h1>
      <p>
        This page includes your requested notes with proper examples:
        modules, React basics, JSX rules, class and functional components, and composition.
      </p>
    </section>

    <section class="card">
      <details open>
        <summary>1) What is a Module?</summary>
        <p>
          A module is a separate JavaScript file with its own scope. Variables and functions
          inside one module do not automatically become global in other files.
        </p>
        <ul>
          <li>A module is a file that contains related JavaScript code.</li>
          <li>Modules help split large application code into smaller organized files.</li>
          <li>Modules are used to exchange data/functions from one file to another.</li>
        </ul>
        <p>
          In real projects, modules improve readability, reusability, and team collaboration.
          One developer can work on one module without breaking another module.
        </p>
        <div class="note">
          <strong>Simple meaning:</strong> write in one file, reuse in another file.
        </div>
      </details>

      <details>
        <summary>2) Types of Modules</summary>
        <ul>
          <li><strong>CommonJS modules</strong> (mostly server-side Node.js style).</li>
          <li><strong>ES6 modules</strong> (modern browser + React + modern Node style).</li>
        </ul>
        <div class="note">
          <strong>Easy memory trick:</strong> old Node style = CommonJS, modern JS/React style = ES Modules.
        </div>
      </details>
    </section>

    <section class="card">
      <details>
        <summary>3) CommonJS Module (Server Side)</summary>
        <p>
          CommonJS uses <code>module.exports</code> and <code>require()</code>.
        </p>
        <ul>
          <li><code>module.exports</code> means "send from this file".</li>
          <li><code>require()</code> means "receive from another file".</li>
          <li>This is synchronous loading style and was standard in classic Node.js apps.</li>
        </ul>
        <div class="warning">
          In this project, <code>package.json</code> has <code>"type": "module"</code>,
          so CommonJS demo files should use <code>.cjs</code> extension.
        </div>
        <div class="two-col">
          <div>
            <h3><code>main.cjs</code></h3>
            <pre><code>const x = 10;
const arr = [1, 2, 3, 4, 5, 6];
const userDetails = {
  name: "X",
  age: 23,
  city: "hyd"
};

function test() {
  return "Hello";
}

module.exports = {
  x,
  arr,
  userDetails,
  test
};</code></pre>
          </div>
          <div>
            <h3><code>app.cjs</code></h3>
            <pre><code>const val = require("./main.cjs");

console.log(val.x);
console.log(val.arr);
console.log(val.userDetails);
console.log(val.test());</code></pre>
          </div>
        </div>
      </details>
    </section>

    <section class="card">
      <details open>
        <summary>4) ES6 Modules (Client Side / React)</summary>
        <ul>
          <li>Uses <code>export</code> (send) and <code>import</code> (receive).</li>
          <li>Two main export types: <strong>default export</strong> and <strong>named export</strong>.</li>
        </ul>
        <p>
          React apps generally use ES modules everywhere. Vite and modern bundlers read
          these imports and build optimized bundles for browser execution.
        </p>

        <details>
          <summary>4.1) Default Export</summary>
          <ul>
            <li>One file can have only one default export.</li>
            <li>Import name can be changed freely by the consumer module.</li>
          </ul>
          <pre><code>// main.js
const x = 1000;
export default x;

// app.js
import x from "./main.js";
console.log(x);</code></pre>
        </details>

        <details>
          <summary>4.2) Named Export</summary>
          <ul>
            <li>One file can export multiple named values.</li>
            <li>Imported names must match exported names (unless you alias with <code>as</code>).</li>
          </ul>
          <pre><code>// main.js
export const x = 10;
export const users = ["akash", "obaid", "Hussain", "Navya"];
export const obj = { a: 1, b: 2 };

// app.js
import { x, users, obj } from "./main.js";
console.log(x);
console.log(users);
console.log(obj);</code></pre>
        </details>

        <details>
          <summary>4.3) Default + Named Together</summary>
          <p>
            This pattern is common: export one primary value as default and additional helpers as named exports.
          </p>
          <pre><code>// main.js
const x = 10;
export default x;

const users = ["akash", "obaid", "Hussain", "Navya"];
function test(a, b) {
  return a + b;
}

export { users, test };

// app.js
import x, { users, test } from "./main.js";
console.log(x);
console.log(users);
console.log(test(5, 3));</code></pre>
        </details>

        <details open>
          <summary>4.4) <code>as</code> Keyword (Your Example)</summary>
          <p>
            <code>as</code> lets you rename exports/imports to avoid name conflicts and improve readability.
          </p>
          <div class="two-col">
            <div>
              <h3><code>main.js</code></h3>
              <pre><code>let x = 10;
export default x;

let users = ["akash", "obaid", "Hussain", "Navya"];

function test(a, b) {
  return a + b;
}

export {
  users as y,
  test
};</code></pre>
            </div>
            <div>
              <h3><code>app.js</code></h3>
              <pre><code>import x, { y, test as demo } from "./main.js";

console.log(x);
console.log(y);
console.log(demo(5, 3));</code></pre>
            </div>
          </div>
          <div class="btn-row">
            <button class="btn" id="showDefault">Show Default Output</button>
            <button class="btn" id="showNamed">Show Named Output</button>
            <button class="btn" id="showBoth">Show Default + Named Output</button>
            <button class="btn" id="showAlias">Show Alias (as) Output</button>
          </div>
          <div class="output" id="moduleOutput">Click a button to see expected output.</div>
        </details>
      </details>
    </section>

    <section class="card">
      <details>
        <summary>5) CommonJS vs ES6 Modules (Quick Comparison)</summary>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>CommonJS</th>
                <th>ES6 Modules</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Export syntax</td>
                <td><code>module.exports = ...</code></td>
                <td><code>export</code>, <code>export default</code></td>
              </tr>
              <tr>
                <td>Import syntax</td>
                <td><code>require(...)</code></td>
                <td><code>import ... from ...</code></td>
              </tr>
              <tr>
                <td>Default in modern React</td>
                <td>No</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Typical usage</td>
                <td>Older Node.js style</td>
                <td>Browser, React, modern tooling</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="note">
          <strong>Interview answer:</strong> In modern React projects we prefer ES modules because they are
          standard JavaScript syntax and integrate cleanly with browser tooling.
        </div>
      </details>
    </section>

    <section class="card">
      <details open>
        <summary>6) React Installation (Vite + React)</summary>
        <ul>
          <li>Install Node.js first. Verify using <code>node -v</code>.</li>
          <li>Use Vite to create React app quickly.</li>
        </ul>
        <p>
          Vite provides fast startup and fast hot reload during development, which is why it is preferred now.
        </p>
        <pre><code>step 1: npm create vite@latest
step 2: enter project name
step 3: select framework -> React
step 4: select variant -> JavaScript
step 5: cd project-name
step 6: npm install
step 7: npm run dev</code></pre>
        <div class="note">
          <strong>Run command:</strong> <code>npm run dev</code>
        </div>
        <div class="warning">
          If install fails, check Node version first and then run <code>npm install</code> again.
        </div>
      </details>
    </section>

    <section class="card">
      <details>
        <summary>7) React Introduction</summary>
        <ul>
          <li>React JS is a JavaScript library used to build rich user interfaces.</li>
          <li>React is fast because of Virtual DOM updates.</li>
          <li>React follows component-based architecture.</li>
          <li>React follows uni-directional data flow.</li>
          <li>React is used to build single page applications (SPA).</li>
          <li>React supports both client-side rendering and server-side rendering.</li>
        </ul>
        <p>
          React is declarative: you describe what UI should look like for a state, React updates DOM efficiently.
          This improves maintainability compared with manual DOM manipulation.
        </p>
        <div class="note">
          <strong>Version idea:</strong> <code>major.minor.patch</code> (example <code>19.2.0</code>).
        </div>
      </details>
    </section>

    <section class="card">
      <details>
        <summary>8) SPA vs MPA</summary>
        <p>
          In SPA, routing is handled in JavaScript; in MPA, each route usually loads a new HTML page from server.
        </p>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Point</th>
                <th>SPA</th>
                <th>MPA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>HTML documents</td>
                <td>Usually one HTML shell</td>
                <td>Multiple HTML documents</td>
              </tr>
              <tr>
                <td>Navigation</td>
                <td>Without full page refresh</td>
                <td>With page refresh</td>
              </tr>
              <tr>
                <td>Performance feel</td>
                <td>Faster transitions</td>
                <td>Comparatively slower navigation</td>
              </tr>
              <tr>
                <td>Examples</td>
                <td>Netflix, Swiggy, Zomato</td>
                <td>Amazon, Flipkart</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="note">
          <strong>Rule:</strong> Most modern dashboards and app-like UIs prefer SPA. Content-heavy websites often combine MPA and SSR.
        </div>
      </details>
    </section>

    <section class="card">
      <details>
        <summary>9) React Project Folder Structure</summary>
        <p>
          <code>src</code> is the main working folder. Most app logic/components are written there.
        </p>
<pre><code>src/
|-- App.jsx
|-- global.css
|-- main.jsx
|-- assets/
|   |-- react.svg
|-- components/
    |-- Footer.jsx
    |-- Header.jsx
    |-- Main.jsx
    |-- Side1.jsx
    |-- Side2.jsx</code></pre>
        <ul>
          <li><code>node_modules</code>: third-party libraries</li>
          <li><code>public</code>: static files</li>
          <li><code>src</code>: application source code</li>
          <li><code>package.json</code>: dependencies + scripts</li>
        </ul>
        <p>
          As project grows, keep feature-wise grouping (for example <code>features/auth</code>, <code>features/cart</code>)
          so files stay maintainable.
        </p>
      </details>
    </section>

    <section class="card">
      <details>
        <summary>10) Virtual DOM and Reconciliation</summary>
        <p>
          Virtual DOM is a lightweight in-memory representation of the UI.
          React compares updates in virtual DOM and syncs only necessary changes to real DOM.
        </p>
        <ul>
          <li>State/props change triggers new virtual tree generation.</li>
          <li>React runs diff algorithm against previous tree.</li>
          <li>Only changed nodes are patched in real DOM.</li>
        </ul>
        <div class="note">
          <strong>Reconciliation:</strong> process of updating real DOM using virtual DOM diff.
        </div>
      </details>
    </section>

    <section class="card">
      <details open>
        <summary>11) JSX Basics, Rules, and Expressions</summary>
        <p>
          JSX is syntax sugar. Browser does not understand JSX directly, so tooling compiles JSX into
          <code>React.createElement</code> calls before execution.
        </p>
        <details>
          <summary>11.1) JSX and React.createElement</summary>
          <pre><code>// Actual way (without JSX)
const ele = React.createElement(
  "div",
  { id: "demo" },
  React.createElement("h1", null, "header"),
  React.createElement("p", null, "paragraph")
);</code></pre>
          <pre><code>// JSX way
&lt;div id="demo"&gt;
  &lt;h1&gt;Header&lt;/h1&gt;
  &lt;p&gt;paragraph&lt;/p&gt;
&lt;/div&gt;</code></pre>
        </details>

        <details>
          <summary>11.2) JSX Rules</summary>
          <ul>
            <li>Every JSX tag must be closed: <code>&lt;h1&gt;&lt;/h1&gt;</code>, <code>&lt;img /&gt;</code>.</li>
            <li>Multiple JSX elements must be wrapped in one parent element.</li>
            <li>Prefer wrapping return JSX in parentheses.</li>
            <li>Use <code>className</code> instead of <code>class</code> in JSX.</li>
            <li>Inline style uses object format, for example <code>style={{ color: "red" }}</code>.</li>
          </ul>
        </details>

        <details>
          <summary>11.3) JSX Expression and Comments</summary>
          <pre><code>function App() {
  let username = "Sandeep";
  return (
    &lt;div&gt;
      &lt;h1&gt;{username}&lt;/h1&gt;
      &lt;h2&gt;{10 + 10 * 5}&lt;/h2&gt;
      {/* multiline comment */}
    &lt;/div&gt;
  );
}</code></pre>
        </details>
        <div class="note">
          <strong>Interview point:</strong> anything inside <code>{ }</code> is JavaScript expression, not a full statement.
        </div>
      </details>
    </section>

    <section class="card">
      <details open>
        <summary>12) Components in React</summary>
        <p>
          A component is a reusable building block of UI. Components keep logic and UI for one section together.
        </p>
        <p>
          Components receive data via <code>props</code>. UI changes mostly come from
          state updates and parent-to-child data flow.
        </p>
        <details>
          <summary>12.1) Class Based Component (CBC)</summary>
          <p>
            Class components use <code>extends React.Component</code> and <code>render()</code>.
            Historically they were used for state and lifecycle methods.
          </p>
          <pre><code>import React from "react";

class Child extends React.Component {
  render() {
    return (
      &lt;div&gt;
        &lt;h1&gt;Class based component&lt;/h1&gt;
      &lt;/div&gt;
    );
  }
}

export default Child;</code></pre>
        </details>

        <details>
          <summary>12.2) Functional Based Component (FBC)</summary>
          <p>
            Functional components are now the standard style in modern React.
            With Hooks, they can manage state and side effects too.
          </p>
          <pre><code>function App() {
  return (
    &lt;div&gt;
      &lt;h1&gt;Functional component&lt;/h1&gt;
    &lt;/div&gt;
  );
}

export default App;</code></pre>
          <pre><code>const App = () => {
  return (
    &lt;div&gt;
      &lt;h1&gt;Arrow Functional component&lt;/h1&gt;
    &lt;/div&gt;
  );
};</code></pre>
        </details>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Class Component</th>
                <th>Functional Component</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Syntax</td>
                <td>ES6 class + render method</td>
                <td>JavaScript function</td>
              </tr>
              <tr>
                <td>State handling</td>
                <td><code>this.state</code>, <code>setState</code></td>
                <td>Hooks like <code>useState</code></td>
              </tr>
              <tr>
                <td>Current preference</td>
                <td>Legacy/less common for new code</td>
                <td>Preferred in modern React</td>
              </tr>
            </tbody>
          </table>
        </div>
      </details>
    </section>

    <section class="card">
      <details open>
        <summary>13) Component Composition Example (Your Files)</summary>
        <p>
          Component composition means calling one component inside another, for example <code>&lt;Header /&gt;</code> inside <code>App</code>.
        </p>
        <p>
          Composition helps split layout into reusable blocks. Here <code>App</code> is parent layout and
          <code>Header/Main/Side/Footer</code> are child modules.
        </p>
        <details>
          <summary><code>App.jsx</code></summary>
          <pre><code>import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Side1 from "./components/Side1";
import Side2 from "./components/Side2";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      &lt;div className="app"&gt;
        &lt;Header /&gt;
        &lt;Main /&gt;
        &lt;div className="side"&gt;
          &lt;Side1 /&gt;
          &lt;Side2 /&gt;
        &lt;/div&gt;
        &lt;Footer /&gt;
      &lt;/div&gt;
    );
  }
}

export default App;</code></pre>
        </details>

        <details>
          <summary><code>main.jsx</code></summary>
          <pre><code>import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(&lt;App /&gt;);</code></pre>
        </details>

        <details>
          <summary><code>global.css</code></summary>
          <pre><code>* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: azure;
}

.app {
  width: 100%;
  height: 100vh;
}

.header {
  width: 100%;
  height: 10vh;
  background-color: teal;
}

.main {
  height: 40vh;
  background-color: yellow;
}

.side {
  height: 40vh;
  background-color: thistle;
  display: flex;
}

.side1 {
  flex-basis: 60%;
  background-color: blueviolet;
}

.side2 {
  flex-basis: 40%;
  background-color: rgb(68, 226, 24);
}

.foot {
  height: 10vh;
  background-color: tomato;
}</code></pre>
        </details>

        <details>
          <summary><code>components/Header.jsx</code></summary>
          <pre><code>import React from "react";

class Header extends React.Component {
  render() {
    return &lt;div className="header"&gt;Header&lt;/div&gt;;
  }
}

export default Header;</code></pre>
        </details>

        <details>
          <summary><code>components/Main.jsx</code></summary>
          <pre><code>import React from "react";

class Main extends React.Component {
  render() {
    return &lt;div className="main"&gt;Main&lt;/div&gt;;
  }
}

export default Main;</code></pre>
        </details>

        <details>
          <summary><code>components/Side1.jsx</code></summary>
          <pre><code>import React from "react";

class Side1 extends React.Component {
  render() {
    return &lt;div className="side1"&gt;Side1&lt;/div&gt;;
  }
}

export default Side1;</code></pre>
        </details>

        <details>
          <summary><code>components/Side2.jsx</code></summary>
          <pre><code>import React from "react";

class Side2 extends React.Component {
  render() {
    return &lt;div className="side2"&gt;Side2&lt;/div&gt;;
  }
}

export default Side2;</code></pre>
        </details>

        <details>
          <summary><code>components/Footer.jsx</code></summary>
          <pre><code>import React from "react";

class Footer extends React.Component {
  render() {
    return &lt;div className="foot"&gt;Footer&lt;/div&gt;;
  }
}

export default Footer;</code></pre>
        </details>

        <div class="btn-row">
          <button class="btn" id="showCompositionOutput">Show Composition Output</button>
        </div>
        <div class="output" id="compositionOutput">Click to view expected rendered layout order.</div>
        <div class="note">
          <strong>Best practice:</strong> keep each component focused on one responsibility, pass data through props,
          and avoid duplicating layout logic across files.
        </div>
      </details>
    </section>
  </div>

  <script>
    const moduleOutput = document.getElementById("moduleOutput");

    document.getElementById("showDefault").addEventListener("click", () => {
      moduleOutput.textContent = [
        "Default Export Output:",
        "import x from './main.js'",
        "console.log(x) -> 1000"
      ].join("\\n");
    });

    document.getElementById("showNamed").addEventListener("click", () => {
      moduleOutput.textContent = [
        "Named Export Output:",
        "x -> 10",
        "users -> ['akash', 'obaid', 'Hussain', 'Navya']",
        "obj -> { a: 1, b: 2 }"
      ].join("\\n");
    });

    document.getElementById("showBoth").addEventListener("click", () => {
      moduleOutput.textContent = [
        "Default + Named Output:",
        "x -> 10",
        "users -> ['akash', 'obaid', 'Hussain', 'Navya']",
        "test(5, 3) -> 8"
      ].join("\\n");
    });

    document.getElementById("showAlias").addEventListener("click", () => {
      moduleOutput.textContent = [
        "Alias (as keyword) Output:",
        "x -> 10",
        "y (aliased users) -> ['akash', 'obaid', 'Hussain', 'Navya']",
        "demo(5, 3) -> 8"
      ].join("\\n");
    });

    const showCompositionOutputBtn = document.getElementById("showCompositionOutput");
    const compositionOutput = document.getElementById("compositionOutput");

    if (showCompositionOutputBtn && compositionOutput) {
      showCompositionOutputBtn.addEventListener("click", () => {
        compositionOutput.textContent = [
          "Expected Render Order:",
          "1) Header",
          "2) Main",
          "3) Side1 + Side2 (row/flex layout)",
          "4) Footer"
        ].join("\\n");
      });
    }
  </script>
</body>
</html>
`;

export default noteSource;
