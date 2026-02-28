const noteSource = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>React Notes (Organized)</title>
  <style>
    :root {
      --bg: #f4f7fb;
      --panel: #ffffff;
      --ink: #10243f;
      --line: #d7e0ef;
      --primary: #0f766e;
      --code-bg: #0f172a;
      --code-ink: #d9e6ff;
      --output-bg: #eef5ff;
      --output-line: #9ebdf2;
      --warn-bg: #fff7e6;
      --warn-line: #f59e0b;
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      color: var(--ink);
      font-family: "Segoe UI", Tahoma, Arial, sans-serif;
      line-height: 1.6;
      background:
        radial-gradient(900px 360px at -10% -10%, #dff4ff 0%, transparent 55%),
        radial-gradient(800px 340px at 110% -15%, #def8f0 0%, transparent 55%),
        var(--bg);
    }

    .container {
      width: min(1150px, 95%);
      margin: 0 auto;
      padding: 16px 0 28px;
      display: grid;
      gap: 12px;
    }

    .hero {
      padding: 18px;
      border-radius: 16px;
      color: #ffffff;
      background: linear-gradient(135deg, #0f766e, #0ea5a4 42%, #2563eb);
      box-shadow: 0 12px 28px rgba(15, 23, 42, 0.14);
    }

    .hero h1 {
      margin: 0;
      font-size: clamp(1.35rem, 2.2vw, 1.85rem);
    }

    .hero p {
      margin: 8px 0 0;
      max-width: 900px;
    }

    .mini-nav {
      margin-top: 12px;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .mini-nav a {
      text-decoration: none;
      color: #ffffff;
      border: 1px solid rgba(255, 255, 255, 0.6);
      border-radius: 999px;
      padding: 5px 10px;
      font-size: 0.86rem;
      background: rgba(255, 255, 255, 0.1);
    }

    .toolbar {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }

    .toolbar button {
      cursor: pointer;
      border: 1px solid #9dc8ff;
      background: #edf4ff;
      color: #0f3975;
      border-radius: 10px;
      padding: 7px 12px;
      font-weight: 700;
    }

    .toolbar button:hover {
      background: #deecff;
    }

    .card {
      background: var(--panel);
      border: 1px solid var(--line);
      border-radius: 14px;
      padding: 12px;
      box-shadow: 0 3px 10px rgba(15, 23, 42, 0.07);
    }

    .topic-details {
      border: 1px solid var(--line);
      border-radius: 12px;
      padding: 10px;
      background: #fff;
    }

    .topic-details + .topic-details {
      margin-top: 8px;
    }

    .topic-summary {
      cursor: pointer;
      font-size: clamp(1rem, 1.8vw, 1.3rem);
      font-weight: 700;
      list-style: none;
      position: relative;
      padding-right: 24px;
    }

    .topic-summary::-webkit-details-marker {
      display: none;
    }

    .topic-summary::after {
      content: "+";
      position: absolute;
      right: 0;
      top: 0;
      color: #19518e;
      font-weight: 800;
    }

    .topic-details[open] .topic-summary::after {
      content: "-";
    }

    h3 {
      margin: 10px 0 6px;
      font-size: 1rem;
    }

    p {
      margin: 7px 0;
    }

    ul {
      margin: 8px 0;
      padding-left: 18px;
    }

    li {
      margin: 4px 0;
    }

    .grid-two {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 10px;
    }

    pre {
      margin: 8px 0;
      border-radius: 10px;
      border: 1px solid #111827;
      padding: 12px;
      background: var(--code-bg);
      color: var(--code-ink);
      overflow: auto;
      font-size: 0.87rem;
    }

    code {
      font-family: Consolas, "Courier New", monospace;
    }

    .output {
      margin-top: 8px;
      border: 1px solid var(--output-line);
      border-radius: 10px;
      padding: 10px;
      background: var(--output-bg);
      white-space: pre-line;
      font-family: Consolas, "Courier New", monospace;
      color: #102845;
    }

    .note {
      margin-top: 8px;
      border-left: 4px solid var(--primary);
      background: #ecfffb;
      border-radius: 8px;
      padding: 8px 10px;
    }

    .warning {
      margin-top: 8px;
      border-left: 4px solid var(--warn-line);
      background: var(--warn-bg);
      border-radius: 8px;
      padding: 8px 10px;
    }

    .table-wrap {
      overflow-x: auto;
      margin-top: 8px;
      border: 1px solid var(--line);
      border-radius: 10px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      min-width: 640px;
      background: #ffffff;
    }

    th,
    td {
      border: 1px solid var(--line);
      text-align: left;
      vertical-align: top;
      padding: 8px;
    }

    th {
      background: #edf4ff;
      color: #1a3a61;
    }

    @media (max-width: 640px) {
      .container {
        width: 96%;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <section class="hero">
      <h1>React Notes (Organized + Collapsible)</h1>
      <p>
        Every topic is now inside HTML <code>&lt;details&gt;</code> and <code>&lt;summary&gt;</code> so you can expand and collapse each section.
      </p>
      <nav class="mini-nav">
        <a href="#modules">Modules</a>
        <a href="#setup">Setup</a>
        <a href="#react-basics">React Basics</a>
        <a href="#jsx">JSX</a>
        <a href="#components">Components</a>
        <a href="#composition">Composition</a>
        <a href="#props">Props</a>
        <a href="#children">Props Children</a>
        <a href="#drilling">Props Drilling</a>
      </nav>
    </section>

    <section class="card">
      <div class="toolbar">
        <button id="expandAllBtn" type="button">Expand All Topics</button>
        <button id="collapseAllBtn" type="button">Collapse All Topics</button>
      </div>
    </section>

    <section class="card" id="modules">
      <details class="topic-details" open>
        <summary class="topic-summary">1) Modules in JavaScript</summary>
        <ul>
          <li>Module means a separate JavaScript file that contains related code.</li>
          <li>Modules are used to share data/functions between files.</li>
          <li>Large applications are split into multiple modules for clean structure.</li>
        </ul>

        <div class="grid-two">
          <div>
            <h3>CommonJS Modules (Server Side)</h3>
            <ul>
              <li>Export: <code>module.exports</code></li>
              <li>Import: <code>require()</code></li>
            </ul>
            <pre><code>// main.cjs
const x = 10;
const arr = [1, 2, 3];
function test() {
  return "Hello";
}

module.exports = { x, arr, test };

// app.cjs
const data = require("./main.cjs");
console.log(data.x);
console.log(data.arr);
console.log(data.test());</code></pre>
            <div class="output">Expected Output:
10
[ 1, 2, 3 ]
Hello</div>
          </div>

          <div>
            <h3>ES6 Modules (Client Side / React)</h3>
            <ul>
              <li>Export: <code>export</code>, <code>export default</code></li>
              <li>Import: <code>import</code></li>
            </ul>
            <pre><code>// main.js
let x = 10;
export default x;

let users = ["akash", "obaid", "Hussain", "Navya"];
function test(a, b) {
  return a + b;
}

export { users as y, test };

// app.js
import x, { y, test as demo } from "./main.js";
console.log(x);
console.log(y);
console.log(demo(5, 3));</code></pre>
            <div class="output">Expected Output:
10
[ "akash", "obaid", "Hussain", "Navya" ]
8</div>
          </div>
        </div>

        <div class="note"><strong>Default export:</strong> one per file. <strong>Named export:</strong> many per file.</div>
      </details>
    </section>

    <section class="card" id="setup">
      <details class="topic-details">
        <summary class="topic-summary">2) React Installation (Vite + React)</summary>
        <ul>
          <li>Install Node.js and check version: <code>node -v</code></li>
          <li>Create app with Vite React template:</li>
        </ul>
        <pre><code>npm create vite@latest
# project name -> your choice
# framework -> React
# variant -> JavaScript
cd project-name
npm install
npm run dev</code></pre>
        <div class="note">Run command for app: <code>npm run dev</code></div>
      </details>
    </section>

    <section class="card" id="react-basics">
      <details class="topic-details">
        <summary class="topic-summary">3) React Basics</summary>
        <ul>
          <li>React is a JavaScript library for building rich UI.</li>
          <li>React uses Virtual DOM for fast updates.</li>
          <li>React follows component-based architecture.</li>
          <li>Data flow is unidirectional (parent to child).</li>
          <li>React is mainly used for Single Page Applications (SPA).</li>
        </ul>

        <h3>SPA vs MPA</h3>
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
                <td>HTML files</td>
                <td>Mostly one HTML file</td>
                <td>Multiple HTML files</td>
              </tr>
              <tr>
                <td>Navigation</td>
                <td>Without full refresh</td>
                <td>With full refresh</td>
              </tr>
              <tr>
                <td>Examples</td>
                <td>Netflix, Swiggy, Zomato</td>
                <td>Amazon, Flipkart</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>React Folder Structure (Basic)</h3>
        <pre><code>project/
|-- node_modules/
|-- public/
|-- src/
|   |-- main.jsx
|   |-- App.jsx
|   |-- global.css
|   |-- components/
|       |-- Header.jsx
|       |-- Main.jsx
|       |-- Side1.jsx
|       |-- Side2.jsx
|       |-- Footer.jsx
|-- package.json</code></pre>

        <h3>Virtual DOM + Reconciliation</h3>
        <p>Virtual DOM is an in-memory UI copy. React compares new and old virtual trees, then updates only changed parts in Real DOM. This process is called reconciliation.</p>
      </details>
    </section>

    <section class="card" id="jsx">
      <details class="topic-details">
        <summary class="topic-summary">4) JSX</summary>
        <ul>
          <li>JSX = JavaScript XML style syntax used in React.</li>
          <li>JSX is case-sensitive and recommended in React projects.</li>
        </ul>

        <h3>JSX vs React.createElement</h3>
        <pre><code>// Without JSX
let ele = React.createElement(
  "div",
  { id: "demo" },
  React.createElement("h1", null, "header"),
  React.createElement("p", null, "paragraph")
);

// With JSX
&lt;div id="demo"&gt;
  &lt;h1&gt;Header&lt;/h1&gt;
  &lt;p&gt;paragraph&lt;/p&gt;
&lt;/div&gt;</code></pre>

        <h3>Rules of JSX</h3>
        <ul>
          <li>Every tag must be closed: <code>&lt;h1&gt;&lt;/h1&gt;</code>, <code>&lt;img /&gt;</code>.</li>
          <li>Multiple elements must be wrapped in one parent.</li>
          <li>Use parentheses when returning multiline JSX.</li>
        </ul>

        <h3>JSX Expression + Comments</h3>
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
        <div class="output">Expected UI:
Sandeep
60</div>
      </details>
    </section>

    <section class="card" id="components">
      <details class="topic-details">
        <summary class="topic-summary">5) Components in React</summary>
        <ul>
          <li>Component is a reusable UI building block.</li>
          <li>Component file extension can be <code>.jsx</code> or <code>.js</code>.</li>
          <li>Component names must start with a capital letter.</li>
        </ul>

        <div class="grid-two">
          <div>
            <h3>Class Based Component (CBC)</h3>
            <pre><code>import React from "react";

class App extends React.Component {
  render() {
    return (
      &lt;div&gt;
        &lt;h1&gt;Class based component&lt;/h1&gt;
      &lt;/div&gt;
    );
  }
}

export default App;</code></pre>
          </div>
          <div>
            <h3>Functional Based Component (FBC)</h3>
            <pre><code>function App() {
  return (
    &lt;div&gt;
      &lt;h1&gt;Functional component&lt;/h1&gt;
    &lt;/div&gt;
  );
}

export default App;</code></pre>
          </div>
        </div>

        <h3>FBC vs CBC</h3>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Point</th>
                <th>FBC</th>
                <th>CBC</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Type</td>
                <td>JavaScript function</td>
                <td>ES6 class</td>
              </tr>
              <tr>
                <td>Render method</td>
                <td>Not required</td>
                <td>Required</td>
              </tr>
              <tr>
                <td>State handling</td>
                <td>Hooks (modern)</td>
                <td>this.state / setState</td>
              </tr>
              <tr>
                <td>Current usage</td>
                <td>Most common in modern React</td>
                <td>Legacy code + old projects</td>
              </tr>
            </tbody>
          </table>
        </div>
      </details>
    </section>

    <section class="card" id="composition">
      <details class="topic-details">
        <summary class="topic-summary">6) Component Composition (Your Shared Example)</summary>
        <p>Composition means combining small components to build a full UI.</p>

        <h3>main.jsx</h3>
        <pre><code>import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(&lt;App /&gt;);</code></pre>

        <h3>App.jsx</h3>
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

        <h3>global.css</h3>
        <pre><code>* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
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

        <h3>Component Files</h3>
        <pre><code>// Header.jsx
import React from "react";
class Header extends React.Component {
  render() {
    return &lt;div className="header"&gt;Header&lt;/div&gt;;
  }
}
export default Header;

// Main.jsx
import React from "react";
class Main extends React.Component {
  render() {
    return &lt;div className="main"&gt;Main&lt;/div&gt;;
  }
}
export default Main;

// Side1.jsx
import React from "react";
class Side1 extends React.Component {
  render() {
    return &lt;div className="side1"&gt;Side1&lt;/div&gt;;
  }
}
export default Side1;

// Side2.jsx
import React from "react";
class Side2 extends React.Component {
  render() {
    return &lt;div className="side2"&gt;Side2&lt;/div&gt;;
  }
}
export default Side2;

// Footer.jsx
import React from "react";
class Footer extends React.Component {
  render() {
    return &lt;div className="foot"&gt;Footer&lt;/div&gt;;
  }
}
export default Footer;</code></pre>

        <div class="output">Expected UI Layout:
Header
Main
Side1 | Side2
Footer</div>
      </details>
    </section>

    <section class="card" id="props">
      <details class="topic-details">
        <summary class="topic-summary">7) Props in React</summary>
        <ul>
          <li>Props are read-only object values passed from parent to child.</li>
          <li>Props flow is one-way: parent -> child.</li>
          <li>You can pass string, number, boolean, object, array, function.</li>
        </ul>

        <h3>Parent App (Class Example)</h3>
        <pre><code>import React from "react";
import Child1 from "./propex/Child1";

class App extends React.Component {
  render() {
    return (
      &lt;div&gt;
        APP
        &lt;hr /&gt;
        &lt;Child1
          username="sandeep"
          age={22}
          isMarried={true}
          desig={["testing", "development"]}
          address={{ city: "Hyd", area: "Hafeezpet" }}
          sendfun={function () {
            alert("hello from parent component");
          }}
        /&gt;
      &lt;/div&gt;
    );
  }
}

export default App;</code></pre>

        <h3>Child1.jsx (Class Example)</h3>
        <pre><code>import React from "react";

class Child1 extends React.Component {
  render() {
    return (
      &lt;div&gt;
        Child1
        &lt;h1&gt;{this.props.username}&lt;/h1&gt;
        &lt;h2&gt;{this.props.age}&lt;/h2&gt;
        {this.props.isMarried ? &lt;h1&gt;Yes Married&lt;/h1&gt; : &lt;h1&gt;No not married&lt;/h1&gt;}
        {this.props.desig.map((des) =&gt; {
          return &lt;li&gt;{des}&lt;/li&gt;;
        })}
        &lt;h1&gt;{this.props.address.area}&lt;/h1&gt;
        &lt;button onClick={this.props.sendfun}&gt;click&lt;/button&gt;
      &lt;/div&gt;
    );
  }
}

export default Child1;</code></pre>

        <div class="output">Expected UI:
Child1
sandeep
22
Yes Married
testing
development
Hafeezpet
[button: click -> alert "hello from parent component"]</div>
      </details>
    </section>

    <section class="card" id="children">
      <details class="topic-details">
        <summary class="topic-summary">8) Props Children</summary>
        <p><code>props.children</code> is the content written between opening and closing tags of a component.</p>

        <h3>App.jsx</h3>
        <pre><code>import React, { Component } from "react";
import Child1 from "./propex/Child1";
import PassAsAPropsChild from "./propex/PassAsAPropsChild";

class App extends Component {
  render() {
    return (
      &lt;div&gt;
        App
        &lt;hr /&gt;
        &lt;Child1 username="Lokesh"&gt;
          &lt;h1&gt;Content which passes as children for the props&lt;/h1&gt;
          &lt;p&gt;Lorem, ipsum.&lt;/p&gt;
          &lt;PassAsAPropsChild /&gt;
        &lt;/Child1&gt;
      &lt;/div&gt;
    );
  }
}
export default App;</code></pre>

        <h3>Child1.jsx</h3>
        <pre><code>import React, { Component } from "react";

class Child1 extends Component {
  render() {
    return (
      &lt;div&gt;
        Child1
        &lt;h1&gt;{this.props.username}&lt;/h1&gt;
        {this.props.children}
      &lt;/div&gt;
    );
  }
}
export default Child1;</code></pre>

        <h3>PassAsAPropsChild.jsx</h3>
        <pre><code>import React from "react";

const PassAsAPropsChild = () =&gt; {
  return (
    &lt;div&gt;
      &lt;h1 style={{ color: "red" }}&gt;Pass As A Props Child&lt;/h1&gt;
    &lt;/div&gt;
  );
};

export default PassAsAPropsChild;</code></pre>

        <div class="output">Expected UI:
Child1
Lokesh
Content which passes as children for the props
Lorem, ipsum.
Pass As A Props Child (red color)</div>
      </details>
    </section>

    <section class="card" id="drilling">
      <details class="topic-details">
        <summary class="topic-summary">9) Props Drilling</summary>
        <p>Props drilling means passing data through multiple intermediate components to reach a deep child.</p>

        <h3>App.jsx</h3>
        <pre><code>import React, { Component } from "react";
import PropDrill1 from "./propex/PropDrill1";

class App extends Component {
  render() {
    let company = "ExcelR";
    return (
      &lt;div&gt;
        App
        &lt;hr /&gt;
        &lt;PropDrill1 company={company} /&gt;
      &lt;/div&gt;
    );
  }
}

export default App;</code></pre>

        <h3>PropDrill1.jsx -> PropDrill2.jsx -> PropDrill3.jsx</h3>
        <pre><code>// PropDrill1.jsx
import React, { Component } from "react";
import PropDrill2 from "./PropDrill2";

class PropDrill1 extends Component {
  render() {
    return (
      &lt;div&gt;
        PropDrill1
        &lt;hr /&gt;
        &lt;PropDrill2 company={this.props.company} /&gt;
      &lt;/div&gt;
    );
  }
}
export default PropDrill1;

// PropDrill2.jsx
import React, { Component } from "react";
import PropDrill3 from "./PropDrill3";

class PropDrill2 extends Component {
  render() {
    return (
      &lt;div&gt;
        PropDrill2
        &lt;hr /&gt;
        &lt;PropDrill3 company={this.props.company} /&gt;
      &lt;/div&gt;
    );
  }
}
export default PropDrill2;

// PropDrill3.jsx
import React, { Component } from "react";

class PropDrill3 extends Component {
  render() {
    return (
      &lt;div&gt;
        PropDrill3
        &lt;h1&gt;{this.props.company}&lt;/h1&gt;
      &lt;/div&gt;
    );
  }
}
export default PropDrill3;</code></pre>

        <div class="output">Expected UI:
App
PropDrill1
PropDrill2
PropDrill3
ExcelR</div>

        <div class="warning"><strong>Note:</strong> Too much drilling is hard to maintain. Common alternatives: Context API, Redux, HOC patterns.</div>
      </details>
    </section>

    <section class="card">
      <details class="topic-details">
        <summary class="topic-summary">10) React Comment Syntax</summary>
        <pre><code>// JavaScript single-line comment (outside JSX)

{/* JSX multiline comment */}</code></pre>
        <div class="note">Inside JSX, comments must be wrapped in braces: <code>{/* ... */}</code></div>
      </details>
    </section>
  </div>

  <script>
    const expandAllBtn = document.getElementById("expandAllBtn");
    const collapseAllBtn = document.getElementById("collapseAllBtn");
    const topicDetails = Array.from(document.querySelectorAll(".topic-details"));

    if (expandAllBtn) {
      expandAllBtn.addEventListener("click", () => {
        topicDetails.forEach((item) => {
          item.open = true;
        });
      });
    }

    if (collapseAllBtn) {
      collapseAllBtn.addEventListener("click", () => {
        topicDetails.forEach((item) => {
          item.open = false;
        });
      });
    }

    function openTopicFromHash() {
      const hashValue = window.location.hash;
      if (!hashValue) {
        return;
      }
      const section = document.querySelector(hashValue);
      if (!section) {
        return;
      }
      const detail = section.querySelector(".topic-details");
      if (detail) {
        detail.open = true;
      }
    }

    window.addEventListener("hashchange", openTopicFromHash);
    openTopicFromHash();
  </script>
</body>
</html>
`;

export default noteSource;
