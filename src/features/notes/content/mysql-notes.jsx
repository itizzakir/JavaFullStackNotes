const noteSource = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta
    name="description"
    content="Organized MySQL notes covering fundamentals, datatypes, operators, SQL sublanguages, constraints, joins, normalization, subqueries, objects, procedures, functions, cursors, and triggers."
  />
  <title>MySQL Notes | Organized Full Revision</title>
  <style>
    :root {
      --bg: #f6f5ef;
      --panel: #ffffff;
      --ink: #132238;
      --muted: #5d6a7c;
      --line: #d7dfeb;
      --primary: #0f766e;
      --primary-dark: #115e59;
      --accent: #b45309;
      --accent-soft: #fff7ed;
      --info-soft: #eef6ff;
      --shadow-sm: 0 4px 14px rgba(15, 23, 42, 0.07);
      --shadow-lg: 0 18px 36px rgba(15, 23, 42, 0.12);
      --radius: 18px;
      --code-bg: #102033;
      --code-ink: #dce9ff;
    }

    * {
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      margin: 0;
      color: var(--ink);
      font-family: "Trebuchet MS", "Segoe UI", Arial, sans-serif;
      line-height: 1.65;
      background:
        radial-gradient(1000px 420px at -10% -10%, #d9f6ef 0%, transparent 60%),
        radial-gradient(920px 360px at 110% -10%, #ffe7cf 0%, transparent 56%),
        linear-gradient(180deg, #fbfaf6 0%, #f3f6fb 100%);
    }

    .container {
      width: min(1180px, 94%);
      margin: 0 auto;
      padding: 18px 0 38px;
    }

    .hero {
      border-radius: 24px;
      padding: 24px;
      color: #fff;
      background:
        radial-gradient(circle at top right, rgba(255, 255, 255, 0.24), transparent 30%),
        linear-gradient(135deg, #065f46 0%, #0f766e 42%, #1d4ed8 100%);
      box-shadow: var(--shadow-lg);
      position: relative;
      overflow: hidden;
    }

    .hero::after {
      content: "";
      position: absolute;
      inset: auto -70px -90px auto;
      width: 240px;
      height: 240px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.12);
      filter: blur(10px);
      pointer-events: none;
    }

    .hero-kicker {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 0.84rem;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      padding: 6px 10px;
      border-radius: 999px;
      border: 1px solid rgba(255, 255, 255, 0.35);
      background: rgba(255, 255, 255, 0.12);
    }

    .hero h1 {
      margin: 14px 0 0;
      font-size: clamp(1.8rem, 3vw, 2.8rem);
      line-height: 1.1;
    }

    .hero p {
      margin: 10px 0 0;
      max-width: 930px;
      opacity: 0.97;
    }

    .hero-badges,
    .chip-row,
    .mini-nav {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .hero-badges {
      margin-top: 16px;
    }

    .hero-badges span,
    .chip-row span {
      padding: 5px 10px;
      border-radius: 999px;
      font-size: 0.82rem;
      font-weight: 800;
    }

    .hero-badges span {
      background: rgba(255, 255, 255, 0.12);
      border: 1px solid rgba(255, 255, 255, 0.25);
    }

    .chip-row {
      margin: 10px 0;
    }

    .chip-row span {
      border: 1px solid #d6e4ff;
      background: #f3f8ff;
      color: #1d4ed8;
    }

    .mini-nav {
      margin-top: 18px;
    }

    .mini-nav a {
      text-decoration: none;
      color: #fff;
      padding: 7px 11px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.32);
      font-size: 0.85rem;
      font-weight: 700;
    }

    .grid {
      display: grid;
      gap: 14px;
      margin-top: 14px;
    }

    .card,
    .mini-card,
    .compare-box {
      border: 1px solid var(--line);
      border-radius: var(--radius);
      background: rgba(255, 255, 255, 0.92);
      box-shadow: var(--shadow-sm);
      padding: 16px;
      backdrop-filter: blur(4px);
    }

    .mini-card,
    .compare-box {
      background: #fff;
      padding: 12px;
    }

    .toolbar {
      display: grid;
      grid-template-columns: 1fr auto auto;
      gap: 10px;
      align-items: center;
    }

    .toolbar input,
    .toolbar button {
      border: 1px solid var(--line);
      border-radius: 12px;
      padding: 11px 12px;
      font-size: 0.96rem;
      background: #fff;
    }

    .toolbar button {
      cursor: pointer;
      color: #fff;
      background: var(--primary);
      border-color: var(--primary);
      font-weight: 800;
    }

    .toolbar button.secondary {
      color: var(--primary-dark);
      background: #fff;
    }

    .status-line,
    .sub,
    .footnote {
      color: var(--muted);
    }

    .status-line {
      margin: 10px 0 0;
      font-size: 0.92rem;
      font-weight: 700;
    }

    .footnote {
      margin-top: 14px;
      font-size: 0.88rem;
    }

    .topic-details {
      border: 1px solid var(--line);
      border-radius: 14px;
      padding: 12px;
      background: linear-gradient(180deg, #ffffff 0%, #fbfdff 100%);
    }

    .topic-summary {
      cursor: pointer;
      list-style: none;
      margin: 0;
      position: relative;
      padding-right: 26px;
      font-size: clamp(1.05rem, 2vw, 1.26rem);
      font-weight: 800;
    }

    .topic-summary::-webkit-details-marker {
      display: none;
    }

    .topic-summary::after {
      content: "+";
      position: absolute;
      right: 0;
      top: 0;
      color: #0f3f7a;
      font-size: 1.2rem;
      line-height: 1;
    }

    .topic-details[open] .topic-summary::after {
      content: "-";
    }

    h2,
    h3,
    h4 {
      margin-bottom: 8px;
      color: #0f172a;
    }

    h3 {
      margin-top: 18px;
      font-size: 1.03rem;
    }

    h4 {
      margin-top: 16px;
      font-size: 0.95rem;
    }

    p {
      margin: 8px 0;
    }

    ul,
    ol {
      margin: 8px 0;
      padding-left: 22px;
    }

    li {
      margin: 4px 0;
    }

    .split {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 12px;
      align-items: start;
    }

    .note,
    .warn,
    .tip {
      margin-top: 10px;
      padding: 11px 12px;
      border-radius: 12px;
      font-size: 0.93rem;
    }

    .note {
      background: var(--info-soft);
      border: 1px solid #c7ddff;
      color: #154c87;
    }

    .tip {
      background: #effcf7;
      border: 1px solid #b8efdf;
      color: #115e59;
    }

    .warn {
      background: var(--accent-soft);
      border: 1px solid #fed7aa;
      color: #9a3412;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin: 10px 0;
      font-size: 0.93rem;
    }

    th,
    td {
      border: 1px solid var(--line);
      padding: 8px 10px;
      text-align: left;
      vertical-align: top;
    }

    th {
      background: #f8fafc;
    }

    pre {
      margin: 10px 0;
      overflow: auto;
      padding: 12px;
      border-radius: 14px;
      border: 1px solid #12253a;
      background: var(--code-bg);
      color: var(--code-ink);
      font-size: 0.86rem;
      line-height: 1.55;
    }

    code {
      font-family: Consolas, "Courier New", monospace;
    }

    .formula {
      border-left: 5px solid var(--accent);
      padding: 8px 12px;
      background: #fffaf5;
      border-radius: 0 12px 12px 0;
      margin: 10px 0;
      font-weight: 700;
      color: #7c2d12;
    }

    .checklist {
      display: grid;
      gap: 8px;
      margin-top: 12px;
    }

    .checklist div {
      padding: 10px 12px;
      border-radius: 12px;
      background: #fff;
      border: 1px solid var(--line);
      font-weight: 700;
    }

    .section-table td:first-child,
    .section-table th:first-child {
      width: 150px;
      white-space: nowrap;
    }

    .language-map {
      margin: 16px 0 18px;
      padding: 18px;
      border: 1px solid var(--line);
      border-radius: 20px;
      background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
      box-shadow: var(--shadow-sm);
    }

    .language-map__root {
      width: fit-content;
      margin: 0 auto;
      padding: 10px 22px;
      border: 3px solid #0f172a;
      border-radius: 16px;
      background: #fff;
      font-size: 1.05rem;
      font-weight: 800;
      color: #0f172a;
      position: relative;
      z-index: 1;
    }

    .language-map__grid {
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      gap: 14px;
      margin-top: 28px;
      position: relative;
    }

    .language-map__grid::before {
      content: "";
      position: absolute;
      top: 16px;
      left: 10%;
      right: 10%;
      height: 3px;
      border-radius: 999px;
      background: linear-gradient(90deg, #0f172a 0%, #1d4ed8 100%);
    }

    .language-map__item {
      position: relative;
      padding-top: 30px;
    }

    .language-map__item::before {
      content: "";
      position: absolute;
      top: -16px;
      left: 50%;
      width: 3px;
      height: 42px;
      border-radius: 999px;
      background: #0f172a;
      transform: translateX(-50%);
    }

    .language-map__node {
      min-height: 58px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 12px;
      border: 3px solid #0f172a;
      border-radius: 14px;
      background: #fff;
      color: #4f46e5;
      font-size: 1.12rem;
      font-weight: 900;
      text-align: center;
      position: relative;
      z-index: 1;
    }

    .language-map__item ol {
      margin: 12px 0 0;
      padding-left: 22px;
      color: #dc2626;
      font-weight: 700;
    }

    .language-map__item li::marker {
      color: #dc2626;
    }

    @media (max-width: 900px) {
      .toolbar,
      .split {
        grid-template-columns: 1fr;
      }

      .language-map__grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .language-map__grid::before {
        display: none;
      }

      .language-map__item::before {
        top: -10px;
        height: 26px;
      }
    }

    @media (max-width: 620px) {
      .container {
        width: min(96%, 100%);
      }

      .hero,
      .card {
        padding: 14px;
      }

      .mini-nav a {
        width: 100%;
        text-align: center;
      }

      .language-map {
        padding: 14px;
      }

      .language-map__grid {
        grid-template-columns: 1fr;
      }

      .language-map__item {
        padding-top: 22px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <section class="hero">
      <div class="hero-kicker">Database Notes</div>
      <h1>MySQL Notes</h1>
      <p>
        Organized classroom notes for MySQL fundamentals, datatypes, operators, SQL sublanguages, constraints,
        clauses, joins, normalization, subqueries, database objects, stored procedures, functions, cursors,
        and triggers. The original topic list is preserved, but the notes are cleaned up and expanded with safer examples.
      </p>
      <div class="hero-badges">
        <span>Full Coverage</span>
        <span>Examples Included</span>
        <span>Interview Revision Ready</span>
        <span>MySQL-Focused Corrections</span>
      </div>
      <nav class="mini-nav" aria-label="Topic navigation">
        <a href="#foundation">Foundations</a>
        <a href="#installation">Installation</a>
        <a href="#datatypes">Datatypes</a>
        <a href="#operators">Operators</a>
        <a href="#sql-sublanguages">SQL</a>
        <a href="#constraints">Constraints</a>
        <a href="#functions">Built-in Functions</a>
        <a href="#clauses">Clauses</a>
        <a href="#joins">Joins</a>
        <a href="#normalization">Normalization</a>
        <a href="#subqueries">Subqueries</a>
        <a href="#objects">Objects</a>
        <a href="#stored-procedures">Stored Procedures</a>
        <a href="#stored-functions">Functions</a>
        <a href="#cursors">Cursors</a>
        <a href="#triggers">Triggers</a>
      </nav>
    </section>

    <section class="card">
      <div class="toolbar">
        <input
          id="searchInput"
          type="text"
          placeholder="Search topic or keyword: datatype, join, subquery, trigger, procedure, aggregate, foreign key..."
        />
        <button id="expandAllBtn" type="button">Expand All</button>
        <button id="collapseAllBtn" type="button" class="secondary">Collapse All</button>
      </div>
      <p class="status-line" id="resultCount">16 sections shown</p>
    </section>

    <main class="grid">
      <section class="card topic-card" id="foundation" data-keywords="data information database mysql dbms rdbms ordbms oltp olap">
        <details class="topic-details" open>
          <summary class="topic-summary">1. Data, Information, Database, MySQL, DBMS, RDBMS, ORDBMS, OLTP, and OLAP</summary>

          <div class="split">
            <div class="mini-card">
              <h3>Data</h3>
              <ol>
                <li>Data is a collection of raw facts such as numbers, digits, symbols, and text.</li>
                <li>By itself, raw data does not always give a meaningful conclusion.</li>
              </ol>

              <h3>Information</h3>
              <ol>
                <li>Information is processed data.</li>
                <li>Information gives meaningful statements and helps in decision making.</li>
              </ol>
            </div>

            <div class="mini-card">
              <h3>Database</h3>
              <ol>
                <li>A database is software used to store interrelated data permanently.</li>
                <li>In relational databases, data is usually stored in the form of tables.</li>
                <li>A table is a collection of rows and columns.</li>
                <li>Rows are records and columns are fields.</li>
                <li>We communicate with the database by using SQL queries.</li>
              </ol>
            </div>
          </div>

          <h3>OLTP and OLAP</h3>
          <p>
            Your source note listed OLTP and OLAP near database basics. They are not datatypes. They describe two common
            database usage styles.
          </p>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Purpose</th>
                <th>Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>OLTP</td>
                <td>Online Transaction Processing, used for day-to-day transactions.</td>
                <td>Banking transactions, retail billing, inventory updates.</td>
              </tr>
              <tr>
                <td>OLAP</td>
                <td>Online Analytical Processing, used for historical analysis and reporting.</td>
                <td>Data warehouses, business intelligence, trend analysis.</td>
              </tr>
            </tbody>
          </table>

          <div class="split">
            <div class="mini-card">
              <h3>MySQL</h3>
              <ol>
                <li>MySQL is a database product and a relational database management system.</li>
                <li>Its purpose is to store interrelated data permanently.</li>
                <li>It is widely used with web applications because it is simple, fast, and SQL-based.</li>
              </ol>

              <h3>DBMS</h3>
              <ol>
                <li>DBMS stands for Database Management System.</li>
                <li>It is software used to create, store, and manage data.</li>
              </ol>
            </div>

            <div class="mini-card">
              <h3>RDBMS</h3>
              <ol>
                <li>RDBMS stands for Relational Database Management System.</li>
                <li>It is an enhanced form of DBMS in which data is stored in related tables.</li>
              </ol>

              <h3>ORDBMS</h3>
              <ol>
                <li>ORDBMS stands for Object Relational Database Management System.</li>
                <li>It combines relational database ideas with object-oriented concepts.</li>
              </ol>
            </div>
          </div>

          <h3>Difference between DBMS and RDBMS</h3>
          <table class="section-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Key</th>
                <th>DBMS</th>
                <th>RDBMS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Definition</td>
                <td>Database management system.</td>
                <td>Relational database management system.</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Data storage</td>
                <td>Data is often managed like files.</td>
                <td>Data is stored in tables.</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Data access</td>
                <td>Data elements are usually handled individually.</td>
                <td>Multiple related data elements can be accessed together.</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Relationship</td>
                <td>No strong table-to-table relationship model.</td>
                <td>Tables can be related through keys.</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Normalization</td>
                <td>Limited or not central.</td>
                <td>Normalization is a core design concept.</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Data quantity</td>
                <td>Usually smaller-scale systems.</td>
                <td>Suitable for larger and more structured systems.</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Redundancy</td>
                <td>Redundancy is common.</td>
                <td>Redundancy is reduced using keys, constraints, and normalization.</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Users</td>
                <td>Often designed for limited users.</td>
                <td>Supports multi-user access and concurrency.</td>
              </tr>
            </tbody>
          </table>

          <div class="tip">
            Memory hook: data is raw, information is processed, database stores the data, DBMS manages it, and RDBMS relates it.
          </div>
        </details>
      </section>

      <section class="card topic-card" id="installation" data-keywords="mysql installation download workbench shell server create database use show tables safe updates transaction">
        <details class="topic-details">
          <summary class="topic-summary">2. MySQL Installation and First Commands</summary>

          <h3>Windows installation flow from the source notes</h3>
          <ol>
            <li>Search for MySQL Community Downloads and download MySQL Installer for Windows.</li>
            <li>Open the installer and choose the custom setup option.</li>
            <li>Add MySQL Server, MySQL Workbench, and MySQL Shell to the install list.</li>
            <li>In the classroom note, the sample selection used MySQL Server 8.0.38 x64, Workbench 8.0.37 x64, and Shell 8.0.38 x64.</li>
            <li>Continue, execute the install, set the root password, then finish the configuration steps.</li>
          </ol>

          <div class="warn">
            Version numbers change over time. The note above preserves the original classroom example, but the syntax examples on this page are written to stay generally useful for common MySQL 8+ setups.
          </div>

          <h3>Quick start commands</h3>
          <pre><code>CREATE DATABASE bhavi;
USE bhavi;
SHOW TABLES;

SET SQL_SAFE_UPDATES = 0;
SET autocommit = 0;
START TRANSACTION;</code></pre>

          <ul>
            <li><code>CREATE DATABASE</code> creates a new database.</li>
            <li><code>USE</code> selects the database you want to work with.</li>
            <li><code>SHOW TABLES</code> lists all tables in the currently selected database.</li>
            <li><code>SET SQL_SAFE_UPDATES = 0</code> allows updates and deletes without strict safe-update rules.</li>
            <li><code>SET autocommit = 0</code> disables automatic commit so you can use transaction control.</li>
            <li><code>START TRANSACTION</code> begins a transaction block.</li>
          </ul>

          <h3>Example</h3>
          <pre><code>CREATE DATABASE college_db;
USE college_db;

CREATE TABLE student (
  sid INT PRIMARY KEY,
  sname VARCHAR(40)
);

SHOW TABLES;</code></pre>
        </details>
      </section>

      <section class="card topic-card" id="datatypes" data-keywords="datatypes numeric integer float double decimal date time datetime timestamp string char varchar blob enum set">
        <details class="topic-details">
          <summary class="topic-summary">3. Datatypes: Numeric, Date and Time, and String Types</summary>

          <h3>Definition</h3>
          <p>Datatypes determine what kind of values a column can store.</p>
          <div class="chip-row">
            <span>Numeric Types</span>
            <span>Date and Time Types</span>
            <span>String Types</span>
          </div>

          <h3>Numeric Types</h3>
          <p>Numeric types are mainly divided into integer types and floating-point or exact decimal types.</p>

          <h4>1. Integer types</h4>
          <p>Integer types store positive and negative whole numbers without decimal points.</p>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Bytes</th>
                <th>Signed Minimum</th>
                <th>Signed Maximum</th>
                <th>Unsigned Minimum</th>
                <th>Unsigned Maximum</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>TINYINT</td>
                <td>1</td>
                <td>-128</td>
                <td>127</td>
                <td>0</td>
                <td>255</td>
              </tr>
              <tr>
                <td>SMALLINT</td>
                <td>2</td>
                <td>-32768</td>
                <td>32767</td>
                <td>0</td>
                <td>65535</td>
              </tr>
              <tr>
                <td>MEDIUMINT</td>
                <td>3</td>
                <td>-8388608</td>
                <td>8388607</td>
                <td>0</td>
                <td>16777215</td>
              </tr>
              <tr>
                <td>INT</td>
                <td>4</td>
                <td>-2147483648</td>
                <td>2147483647</td>
                <td>0</td>
                <td>4294967295</td>
              </tr>
              <tr>
                <td>BIGINT</td>
                <td>8</td>
                <td>-9223372036854775808</td>
                <td>9223372036854775807</td>
                <td>0</td>
                <td>18446744073709551615</td>
              </tr>
            </tbody>
          </table>

          <pre><code>salary INT;
INSERT INTO emp VALUES (101, 'Anu', 30000);</code></pre>

          <h4>2. Floating-point and exact decimal types</h4>
          <p>
            Floating-point types can store decimal values. In practice, <code>DECIMAL</code> is preferred for money because it is exact,
            while <code>FLOAT</code> and <code>DOUBLE</code> are approximate.
          </p>
          <div class="formula">
            p = precision = total number of digits<br />
            s = scale = number of digits after the decimal point
          </div>

          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Bytes</th>
                <th>Approximate Range</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>FLOAT</td>
                <td>4</td>
                <td>-3.402823466 x 10^38 to 3.402823466 x 10^38</td>
              </tr>
              <tr>
                <td>DOUBLE</td>
                <td>8</td>
                <td>-1.7976931348623157 x 10^308 to 1.7976931348623157 x 10^308</td>
              </tr>
            </tbody>
          </table>

          <pre><code>salary DECIMAL(7,2);
-- Example stored value: 50000.00

price FLOAT(6,3);
-- 999.129 can be stored

amount DOUBLE(6,3);
-- 999.129 can be stored

SELECT CAST(999.0009 AS DECIMAL(6,3));
-- result: 999.001 after rounding

-- If the number does not fit the precision, MySQL raises an error in strict mode.</code></pre>

          <h3>Date and Time Types</h3>
          <p>Date and time types are used to store calendar values and clock values.</p>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Description</th>
                <th>Display Format</th>
                <th>Range</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>DATE</td>
                <td>Stores only date information.</td>
                <td>YYYY-MM-DD</td>
                <td>1000-01-01 to 9999-12-31</td>
              </tr>
              <tr>
                <td>TIME</td>
                <td>Stores only time information.</td>
                <td>HH:MM:SS</td>
                <td>-838:59:59 to 838:59:59</td>
              </tr>
              <tr>
                <td>DATETIME</td>
                <td>Stores both date and time.</td>
                <td>YYYY-MM-DD HH:MM:SS</td>
                <td>1000-01-01 00:00:00 to 9999-12-31 23:59:59</td>
              </tr>
              <tr>
                <td>TIMESTAMP</td>
                <td>Stores date and time, usually used for event tracking and automatic update columns.</td>
                <td>YYYY-MM-DD HH:MM:SS</td>
                <td>1970-01-01 00:00:01 UTC to 2038-01-19 03:14:07 UTC</td>
              </tr>
            </tbody>
          </table>

          <div class="note">
            TIMESTAMP values are timezone-aware in MySQL storage rules, while DATETIME is a calendar value without timezone conversion.
          </div>

          <h3>String Types</h3>
          <p>String types store character or binary data.</p>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Description</th>
                <th>Typical Limit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CHAR</td>
                <td>Recommended for fixed-length data.</td>
                <td>Up to 255 characters</td>
              </tr>
              <tr>
                <td>VARCHAR</td>
                <td>Recommended for variable-length data.</td>
                <td>Up to 65535 bytes depending on row size</td>
              </tr>
              <tr>
                <td>BLOB</td>
                <td>Binary Large Object for binary data such as images, audio, and video.</td>
                <td>Up to 65535 bytes for BLOB</td>
              </tr>
              <tr>
                <td>ENUM</td>
                <td>One value chosen from a predefined list.</td>
                <td>Up to 65535 distinct values</td>
              </tr>
              <tr>
                <td>SET</td>
                <td>Zero, one, or many values chosen from a predefined list.</td>
                <td>Up to 64 members in MySQL syntax</td>
              </tr>
            </tbody>
          </table>

          <pre><code>gender CHAR(1);
name VARCHAR(30);
profile_photo BLOB;
option_col ENUM('one', 'two', 'three');
skills SET('one', 'two', 'three');</code></pre>

          <div class="tip">
            Exam shortcut: use <code>CHAR</code> for fixed-size values like gender codes, <code>VARCHAR</code> for names,
            <code>DECIMAL</code> for money, and <code>TIMESTAMP</code> for row-tracking columns.
          </div>
        </details>
      </section>

      <section class="card topic-card" id="operators" data-keywords="operators arithmetic relational logical special set union union all intersect minus except in between like any all exists">
        <details class="topic-details">
          <summary class="topic-summary">4. Operators</summary>

          <p>Operators are symbols or keywords used to perform operations in SQL expressions.</p>
          <div class="chip-row">
            <span>Arithmetic</span>
            <span>Relational</span>
            <span>Logical</span>
            <span>Special</span>
            <span>Set Operators</span>
          </div>

          <h3>Arithmetic operators</h3>
          <p>Used for addition, subtraction, multiplication, division, and modulo.</p>
          <pre><code>SELECT 5 + 3;   -- 8
SELECT 5 - 3;   -- 2
SELECT 5 * 3;   -- 15
SELECT 20 / 2;  -- 10.0000
SELECT 20 % 2;  -- 0</code></pre>

          <h3>Relational operators</h3>
          <p>Used to compare values. The result is true or false, usually shown as 1 or 0 in MySQL.</p>
          <pre><code>SELECT 5 &gt; 3;   -- 1
SELECT 5 &lt; 3;   -- 0
SELECT 5 &gt;= 5;  -- 1
SELECT 5 &lt;= 5;  -- 1
SELECT 5 = 5;   -- 1
SELECT 5 = 3;   -- 0
SELECT 5 &lt;&gt; 3;  -- 1</code></pre>

          <h3>Logical operators</h3>
          <p>Used to combine multiple conditions.</p>
          <ul>
            <li><strong>AND</strong>: all conditions must be true.</li>
            <li><strong>OR</strong>: at least one condition must be true.</li>
            <li><strong>NOT</strong>: reverses a boolean condition.</li>
          </ul>
          <pre><code>SELECT ((5 &gt; 2) AND (6 &gt; 1));        -- 1
SELECT ((5 &gt; 2) AND (6 &gt; 11));       -- 0
SELECT ((5 &gt; 2) OR (6 &gt; 11));        -- 1
SELECT ((5 &gt; 12) OR (6 &gt; 11));       -- 0
SELECT NOT(0 &gt; 1);                   -- 1
SELECT NOT(1 &gt; 0);                   -- 0</code></pre>

          <h3>Special operators</h3>
          <p>These are frequently used in filtering conditions.</p>
          <pre><code>SELECT * FROM book WHERE bprice NOT BETWEEN 5000 AND 7000;
SELECT * FROM book WHERE bprice NOT IN (600, 1000);
SELECT * FROM book WHERE bprice IS NOT NULL;
SELECT * FROM book WHERE bname LIKE '%anan%';
SELECT * FROM book WHERE bprice &lt; ANY (
  SELECT bprice FROM book WHERE bname = 'java by ananth'
);
SELECT * FROM book WHERE bprice &lt; ALL (
  SELECT bprice FROM book WHERE bname = 'java by ananth'
);
SELECT * FROM book WHERE NOT EXISTS (
  SELECT bprice FROM book WHERE bname = 'java by ananth'
);</code></pre>

          <h3>Set operators</h3>
          <ul>
            <li><strong>UNION</strong>: removes duplicates and returns the remaining rows.</li>
            <li><strong>UNION ALL</strong>: returns all rows, including duplicates.</li>
            <li><strong>INTERSECT</strong>: returns common rows.</li>
            <li><strong>EXCEPT</strong> or source-note <strong>MINUS</strong>: returns rows from the first query that are not present in the second.</li>
          </ul>

          <pre><code>SELECT * FROM first
UNION
SELECT * FROM second;

SELECT * FROM first
UNION ALL
SELECT * FROM second;

SELECT sno, sname FROM first
INTERSECT
SELECT sno, sname FROM second;

SELECT sno, sname FROM first
EXCEPT
SELECT sno, sname FROM second;</code></pre>

          <div class="warn">
            MySQL classroom notes often mix Oracle-style terms here. <code>MINUS</code> is not MySQL syntax. In many MySQL setups,
            <code>UNION</code> and <code>UNION ALL</code> are the most widely taught set operators, while common-record and anti-record
            logic is often written with <code>IN</code>, <code>EXISTS</code>, or joins.
          </div>

          <pre><code>-- Common-record example using IN
SELECT sno, sname
FROM first
WHERE (sno, sname) IN (
  SELECT sno, sname FROM second
);

-- Anti-record example using NOT IN
SELECT sno, sname
FROM first
WHERE (sno, sname) NOT IN (
  SELECT sno, sname FROM second
);</code></pre>
        </details>
      </section>

      <section class="card topic-card" id="sql-sublanguages" data-keywords="sql ddl dml dql tcl dcl create alter drop truncate insert delete update select commit rollback savepoint grant revoke">
        <details class="topic-details">
          <summary class="topic-summary">5. SQL and Its Sublanguages</summary>

          <h3>SQL basics</h3>
          <ol>
            <li>SQL stands for Structured Query Language.</li>
            <li>SQL is used to communicate with a database and perform operations using queries.</li>
            <li>A query is a command or instruction given to the database.</li>
            <li>SQL keywords are generally case-insensitive.</li>
            <li>Statements normally end with a semicolon.</li>
          </ol>

          <div class="chip-row">
            <span>DDL</span>
            <span>DML</span>
            <span>DQL</span>
            <span>TCL</span>
            <span>DCL</span>
          </div>

          <div class="language-map" aria-label="SQL sublanguage diagram">
            <div class="language-map__root">Sub Languages</div>

            <div class="language-map__grid">
              <div class="language-map__item">
                <div class="language-map__node">DDL</div>
                <ol>
                  <li>CREATE</li>
                  <li>ALTER: add, drop, rename, modify</li>
                  <li>DROP</li>
                  <li>TRUNCATE</li>
                </ol>
              </div>

              <div class="language-map__item">
                <div class="language-map__node">DML</div>
                <ol>
                  <li>INSERT</li>
                  <li>UPDATE</li>
                  <li>DELETE</li>
                </ol>
              </div>

              <div class="language-map__item">
                <div class="language-map__node">DQL / DRL</div>
                <ol>
                  <li>SELECT</li>
                </ol>
              </div>

              <div class="language-map__item">
                <div class="language-map__node">TCL</div>
                <ol>
                  <li>COMMIT</li>
                  <li>ROLLBACK</li>
                  <li>SAVEPOINT</li>
                </ol>
              </div>

              <div class="language-map__item">
                <div class="language-map__node">DCL</div>
                <ol>
                  <li>GRANT</li>
                  <li>REVOKE</li>
                </ol>
              </div>
            </div>
          </div>

          <h3>1. DDL: Data Definition Language</h3>
          <p>DDL is used to define or change the structure of database objects.</p>

          <h4>CREATE</h4>
          <pre><code>CREATE TABLE students (
  std_id INT,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  date_of_birth DATE,
  major VARCHAR(50),
  cgpa DECIMAL(3,2)
);</code></pre>

          <h4>ALTER</h4>
          <pre><code>ALTER TABLE students ADD email VARCHAR(100);
ALTER TABLE students DROP COLUMN major;
ALTER TABLE students RENAME COLUMN date_of_birth TO dob;
ALTER TABLE students MODIFY cgpa DECIMAL(4,2);</code></pre>

          <h4>DROP</h4>
          <pre><code>DROP TABLE students;</code></pre>

          <h4>TRUNCATE</h4>
          <pre><code>TRUNCATE TABLE students;</code></pre>

          <h3>2. DML: Data Manipulation Language</h3>
          <p>DML is used to insert, update, and delete data.</p>

          <h4>INSERT</h4>
          <pre><code>INSERT INTO students
VALUES (101, 'Jyotsna', 'Chaudhari', '2001-09-30', 'IT', 9.66);</code></pre>

          <h4>DELETE</h4>
          <pre><code>DELETE FROM students;
DELETE FROM students WHERE std_id = 101;</code></pre>

          <h4>UPDATE</h4>
          <pre><code>UPDATE students SET major = 'CS';
UPDATE students SET major = 'AI' WHERE std_id = 101;</code></pre>

          <h4>Insert multiple rows at a time</h4>
          <pre><code>INSERT INTO employee
VALUES
  (101, 'Jyotsna', 'Chaudhari', '2001-09-30', 'IT', 9.86),
  (102, 'Priyanka', 'More', '2000-11-11', 'CS', 8.77),
  (103, 'Rohit', 'Chaudhari', '2004-01-28', 'EEE', 10.46),
  (104, 'Nilesh', 'Chaudhari', '2003-01-26', 'AI', 8.99);</code></pre>

          <div class="note">
            If you want to update or delete a specific row, use a <code>WHERE</code> condition. If you omit <code>WHERE</code>,
            all rows are affected.
          </div>

          <h3>3. DQL: Data Query Language</h3>
          <p>DQL is mainly represented by the <code>SELECT</code> statement.</p>
          <pre><code>SELECT eno, ename FROM employee;
SELECT ename FROM employee WHERE eno = 1;</code></pre>

          <h3>Difference between TRUNCATE, DROP, and DELETE</h3>
          <table>
            <thead>
              <tr>
                <th>Command</th>
                <th>Language Type</th>
                <th>Deletes Rows</th>
                <th>Deletes Structure</th>
                <th>WHERE Allowed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>TRUNCATE</td>
                <td>DDL</td>
                <td>All rows</td>
                <td>No</td>
                <td>No</td>
              </tr>
              <tr>
                <td>DROP</td>
                <td>DDL</td>
                <td>All rows</td>
                <td>Yes, whole table object</td>
                <td>No</td>
              </tr>
              <tr>
                <td>DELETE</td>
                <td>DML</td>
                <td>Specific or all rows</td>
                <td>No</td>
                <td>Yes</td>
              </tr>
            </tbody>
          </table>

          <h3>4. TCL: Transaction Control Language</h3>
          <p>TCL is used with transactions, especially after DML operations.</p>
          <pre><code>SET autocommit = 0;
START TRANSACTION;

UPDATE account SET balance = balance - 500 WHERE acc_no = 101;
UPDATE account SET balance = balance + 500 WHERE acc_no = 102;

SAVEPOINT after_transfer;

ROLLBACK TO after_transfer;
COMMIT;</code></pre>

          <ul>
            <li><code>COMMIT</code> saves changes permanently.</li>
            <li><code>ROLLBACK</code> returns to the previous state.</li>
            <li><code>SAVEPOINT</code> marks a named point inside a transaction.</li>
          </ul>

          <h3>5. DCL: Data Control Language</h3>
          <p>DCL is used to grant and revoke privileges.</p>
          <pre><code>CREATE USER 'bhavi'@'localhost' IDENTIFIED BY 'Password#123';
GRANT SELECT, UPDATE ON bhavi.emp TO 'bhavi'@'localhost';
REVOKE UPDATE ON bhavi.emp FROM 'bhavi'@'localhost';</code></pre>

          <div class="warn">
            In practice, <code>root</code> already has full privileges. Grant and revoke are usually used for application or named users, not for the root account itself.
          </div>
        </details>
      </section>

      <section class="card topic-card" id="constraints" data-keywords="constraints primary key not null unique check foreign key default auto increment parent child">
        <details class="topic-details">
          <summary class="topic-summary">6. Integrity Constraints</summary>

          <p>Integrity constraints are rules that prevent invalid data from being stored.</p>
          <div class="chip-row">
            <span>PRIMARY KEY</span>
            <span>NOT NULL</span>
            <span>UNIQUE</span>
            <span>CHECK</span>
            <span>FOREIGN KEY</span>
            <span>DEFAULT</span>
            <span>AUTO_INCREMENT</span>
          </div>

          <h3>1. PRIMARY KEY</h3>
          <ul>
            <li>A primary key is a combination of uniqueness and not-null behavior.</li>
            <li>Each table has at most one primary key constraint, but it can be made of one or more columns.</li>
            <li>All primary key values must be unique and cannot be null.</li>
          </ul>
          <pre><code>bno INT PRIMARY KEY</code></pre>

          <h3>2. NOT NULL</h3>
          <p>Prevents null values in a column.</p>
          <pre><code>bname VARCHAR(40) NOT NULL</code></pre>

          <h3>3. UNIQUE</h3>
          <p>Prevents duplicate values in a column.</p>
          <pre><code>email VARCHAR(40) UNIQUE</code></pre>

          <h3>4. CHECK</h3>
          <p>Used for validation rules.</p>
          <pre><code>sal DOUBLE(5,2) CHECK (sal &gt; 0)</code></pre>

          <h3>5. FOREIGN KEY</h3>
          <ol>
            <li>Used to establish a relationship between two tables.</li>
            <li>The referenced table is often called the parent table and the referencing table the child table.</li>
            <li>The parent table usually contains the primary key and the child table stores that value as a foreign key.</li>
            <li>Foreign keys can contain duplicates and sometimes nulls, depending on your design.</li>
            <li>Foreign key values must match a referenced primary or unique key value unless null is allowed.</li>
          </ol>
          <pre><code>CREATE TABLE bank (
  bno INT PRIMARY KEY,
  bname VARCHAR(30) NOT NULL,
  email VARCHAR(30) UNIQUE,
  bal INT CHECK (bal &gt; 1000)
);

CREATE TABLE emp (
  eid INT,
  ename VARCHAR(30),
  bno INT,
  FOREIGN KEY (bno) REFERENCES bank(bno)
);</code></pre>

          <h3>6. DEFAULT</h3>
          <p>Gives a default value when no value is supplied.</p>
          <pre><code>cname VARCHAR(40) DEFAULT 'Excelr'</code></pre>

          <h3>7. AUTO_INCREMENT</h3>
          <p>Automatically generates incremental values, commonly for primary keys.</p>
          <pre><code>CREATE TABLE bank1 (
  bno INT AUTO_INCREMENT PRIMARY KEY,
  bname VARCHAR(40) NOT NULL,
  email VARCHAR(40) UNIQUE,
  amt DOUBLE CHECK (amt &gt; 0),
  cname VARCHAR(40) DEFAULT 'Excelr'
);

INSERT INTO bank1 (bname, email, amt)
VALUES ('sbi', 'abc@gmail.com', 342.41);

CREATE TABLE bank2 (
  bno INT AUTO_INCREMENT PRIMARY KEY,
  bname VARCHAR(40) NOT NULL,
  email VARCHAR(40) UNIQUE,
  amt DOUBLE CHECK (amt &gt; 0),
  cname VARCHAR(40) DEFAULT 'Excelr'
) AUTO_INCREMENT = 200;

CREATE TABLE emp1 (
  eno INT AUTO_INCREMENT PRIMARY KEY,
  ename VARCHAR(40) NOT NULL,
  bno INT,
  FOREIGN KEY (bno) REFERENCES bank1(bno)
);</code></pre>

          <div class="tip">
            Quick memory trick: primary key identifies the row, foreign key connects the row, default fills the row, and auto_increment numbers the row.
          </div>
        </details>
      </section>

      <section class="card topic-card" id="functions" data-keywords="built in functions string functions numeric functions date functions aggregate functions count sum avg min max upper lower length trim instr substring concat abs sqrt mod power greatest least truncate current_date current_time now sysdate month year day">
        <details class="topic-details">
          <summary class="topic-summary">7. Built-in Functions in MySQL</summary>

          <p>Built-in functions are already available in MySQL and are commonly grouped into string, numeric, date, and aggregate functions.</p>

          <div class="split">
            <div class="compare-box">
              <h4>String functions</h4>
              <ul>
                <li><code>UPPER()</code>: converts text to uppercase.</li>
                <li><code>LOWER()</code>: converts text to lowercase.</li>
                <li><code>LENGTH()</code>: returns the number of bytes or characters depending on encoding context.</li>
                <li><code>TRIM()</code>: removes leading or trailing characters.</li>
                <li><code>INSTR()</code>: returns the position of a substring.</li>
                <li><code>SUBSTRING()</code>: returns a part of a string.</li>
                <li><code>CONCAT()</code>: joins strings together.</li>
              </ul>
            </div>

            <div class="compare-box">
              <h4>Numeric functions</h4>
              <ul>
                <li><code>ABS()</code>: absolute value.</li>
                <li><code>SQRT()</code>: square root.</li>
                <li><code>MOD()</code>: remainder.</li>
                <li><code>POWER()</code> or <code>POW()</code>: power of a number.</li>
                <li><code>TRUNCATE()</code>: truncates decimal places.</li>
                <li><code>GREATEST()</code>: largest value.</li>
                <li><code>LEAST()</code>: smallest value.</li>
              </ul>
            </div>
          </div>

          <div class="split">
            <div class="compare-box">
              <h4>Date functions</h4>
              <ul>
                <li><code>CURRENT_DATE()</code>: current date.</li>
                <li><code>CURRENT_TIME()</code>: current time.</li>
                <li><code>NOW()</code>: current date and time.</li>
                <li><code>SYSDATE()</code>: system date and time.</li>
                <li><code>MONTH()</code>: month value.</li>
                <li><code>YEAR()</code>: year value.</li>
                <li><code>DAY()</code>: day value.</li>
              </ul>
            </div>

            <div class="compare-box">
              <h4>Aggregate functions</h4>
              <ul>
                <li><code>COUNT()</code>: counts values.</li>
                <li><code>SUM()</code>: adds numeric values.</li>
                <li><code>AVG()</code>: average of numeric values.</li>
                <li><code>MIN()</code>: smallest value.</li>
                <li><code>MAX()</code>: largest value.</li>
              </ul>
            </div>
          </div>

          <h3>Examples</h3>
          <pre><code>SELECT UPPER('virat');                  -- VIRAT
SELECT LOWER('virat');                  -- virat
SELECT LENGTH('virat');                 -- 5
SELECT SUBSTRING('virat', 2, 2);        -- ir
SELECT CONCAT('virat', 'kohli');        -- viratkohli
SELECT TRIM('z' FROM 'zzoraclezz');     -- oracle
SELECT INSTR('zebraz', 'b');            -- 3

SELECT ABS(-66);                        -- 66
SELECT SQRT(25);                        -- 5
SELECT POW(2, 3);                       -- 8
SELECT MOD(10, 2);                      -- 0
SELECT GREATEST(1, 2, 3, 4, 5);         -- 5
SELECT LEAST(1, 2, 3, 4, 5);            -- 1
SELECT TRUNCATE(16.1234, 2);            -- 16.12
SELECT TRUNCATE(1678, -1);              -- 1670
SELECT TRUNCATE(1678, -2);              -- 1600
SELECT TRUNCATE(1678, -3);              -- 1000

SELECT CURRENT_DATE();                  -- returns today's date
SELECT CURRENT_TIME();                  -- returns the current time
SELECT NOW();                           -- returns current date and time
SELECT SYSDATE();                       -- returns system date and time
SELECT MONTH('2024-07-26');             -- 7
SELECT DAY('2024-07-26');               -- 26
SELECT YEAR('2024-07-26');              -- 2024

SELECT UPPER(ename) FROM emp;
SELECT * FROM emp WHERE LENGTH(ename) = 3;</code></pre>

          <h3>Aggregate function notes</h3>
          <ul>
            <li><code>COUNT(*)</code> counts rows, including rows where some column values may be null.</li>
            <li><code>COUNT(column_name)</code> counts non-null values in that column.</li>
            <li><code>COUNT(DISTINCT column_name)</code> counts non-null unique values.</li>
          </ul>

          <pre><code>SELECT COUNT(*) FROM bank;
SELECT COUNT(DISTINCT bal) FROM bank;
SELECT COUNT(bal) FROM bank;
SELECT SUM(bal) FROM bank;
SELECT MIN(bal) FROM bank;
SELECT MAX(bal) FROM bank;
SELECT AVG(bal) FROM bank;</code></pre>
        </details>
      </section>

      <section class="card topic-card" id="clauses" data-keywords="clauses where order by distinct group by having">
        <details class="topic-details">
          <summary class="topic-summary">8. Clauses</summary>

          <p>Clauses are conditional or structural parts of a SQL query.</p>

          <h3>WHERE</h3>
          <ul>
            <li>Used to fetch specific rows.</li>
            <li>Contains a condition.</li>
            <li>If the condition is true, the row is selected.</li>
          </ul>
          <pre><code>SELECT * FROM c WHERE price = 4000;</code></pre>

          <h3>ORDER BY</h3>
          <ul>
            <li>Used to sort data based on one or more columns.</li>
            <li>Default order is ascending.</li>
          </ul>
          <pre><code>SELECT * FROM c ORDER BY price ASC;
SELECT * FROM c ORDER BY price DESC;
SELECT * FROM c ORDER BY price;</code></pre>

          <h3>DISTINCT</h3>
          <p>Removes duplicate values and returns only unique values.</p>
          <pre><code>SELECT DISTINCT price FROM c;</code></pre>

          <h3>GROUP BY</h3>
          <p>Groups rows based on one or more columns. Commonly used with aggregate functions.</p>
          <pre><code>SELECT branch, COUNT(sid) FROM student GROUP BY branch;
SELECT gender, COUNT(sid) FROM student GROUP BY gender;</code></pre>

          <h3>HAVING</h3>
          <p>Filters grouped data after <code>GROUP BY</code>.</p>
          <pre><code>SELECT branch, COUNT(sid)
FROM student
GROUP BY branch
HAVING COUNT(sid) = 1;</code></pre>

          <div class="tip">
            Easy difference: <code>WHERE</code> filters rows before grouping, while <code>HAVING</code> filters groups after grouping.
          </div>
        </details>
      </section>

      <section class="card topic-card" id="joins" data-keywords="joins inner join left outer join right outer join full outer join self join theta join cross join cartesian product">
        <details class="topic-details">
          <summary class="topic-summary">9. Joins</summary>

          <ol>
            <li>Joining means combining data from two or more tables.</li>
            <li>Joins are used when related data is stored in separate tables.</li>
          </ol>

          <div class="chip-row">
            <span>Inner Join</span>
            <span>Left Outer Join</span>
            <span>Right Outer Join</span>
            <span>Full Outer Join</span>
            <span>Self Join</span>
            <span>Theta / Cross Join</span>
          </div>

          <h3>1. Inner join / equi join / natural style join</h3>
          <p>Returns rows that match in both tables based on a common field.</p>
          <pre><code>SELECT *
FROM s
INNER JOIN d ON s.depid = d.depid;</code></pre>

          <h3>2. Left outer join</h3>
          <p>Returns all rows from the left table and matching rows from the right table.</p>
          <pre><code>SELECT *
FROM s
LEFT OUTER JOIN d ON s.depid = d.depid;</code></pre>

          <h3>3. Right outer join</h3>
          <p>Returns all rows from the right table and matching rows from the left table.</p>
          <pre><code>SELECT *
FROM s
RIGHT OUTER JOIN d ON s.depid = d.depid;</code></pre>

          <h3>4. Full outer join</h3>
          <p>Returns all rows from both tables. In MySQL, this is usually simulated with a union of left and right joins.</p>
          <pre><code>SELECT *
FROM s
LEFT OUTER JOIN d ON s.depid = d.depid
UNION
SELECT *
FROM s
RIGHT OUTER JOIN d ON s.depid = d.depid;</code></pre>

          <h3>5. Self join</h3>
          <p>The same table is treated as if it were two tables by using aliases.</p>
          <pre><code>SELECT DISTINCT e.ename
FROM emp e
INNER JOIN emp m ON e.empid = m.mid;</code></pre>

          <h3>6. Theta join / cartesian join / cross join</h3>
          <ul>
            <li>Theta join uses a join condition such as <code>&gt;</code>, <code>&lt;</code>, or <code>&lt;&gt;</code>.</li>
            <li>Cross join returns a cartesian product of rows.</li>
          </ul>
          <pre><code>SELECT *
FROM j
CROSS JOIN c;

SELECT *
FROM j
JOIN c ON j.price &gt; c.price;</code></pre>

          <div class="note">
            Practical shortcut: use aliases like <code>e</code>, <code>m</code>, <code>s</code>, and <code>d</code> so your join queries stay short and readable.
          </div>
        </details>
      </section>

      <section class="card topic-card" id="normalization" data-keywords="normalization 1nf 2nf 3nf bcnf 4nf 5nf dependency full dependency partial dependency transitive dependency">
        <details class="topic-details">
          <summary class="topic-summary">10. Normalization</summary>

          <ol>
            <li>Normalization is the process of arranging data in a structured format.</li>
            <li>The main purpose is to reduce redundancy and improve consistency.</li>
          </ol>

          <h3>Normal forms</h3>
          <table>
            <thead>
              <tr>
                <th>Form</th>
                <th>Meaning</th>
                <th>Simple example idea</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1NF</td>
                <td>All attributes are atomic and there are no multi-valued columns.</td>
                <td>Store one phone number per row instead of a comma-separated list.</td>
              </tr>
              <tr>
                <td>2NF</td>
                <td>The table is in 1NF and has no partial dependency on part of a composite key.</td>
                <td>Move course_name out of a student_course table if it depends only on course_id.</td>
              </tr>
              <tr>
                <td>3NF</td>
                <td>The table is in 2NF and has no transitive dependency.</td>
                <td>Move department_name to a department table if it depends on department_id, not on student_id.</td>
              </tr>
              <tr>
                <td>BCNF</td>
                <td>Stronger than 3NF. Every determinant must be a candidate key.</td>
                <td>Useful when overlapping candidate keys create anomalies.</td>
              </tr>
              <tr>
                <td>4NF</td>
                <td>Removes multi-valued dependency problems.</td>
                <td>If a teacher can teach many subjects and many batches independently, split the design.</td>
              </tr>
              <tr>
                <td>5NF</td>
                <td>Removes join dependency problems.</td>
                <td>Used when information can be reconstructed only after decomposing several many-to-many relationships.</td>
              </tr>
            </tbody>
          </table>

          <h3>Dependency terms</h3>
          <ul>
            <li><strong>Full or functional dependency</strong>: a non-key column depends on the whole primary key.</li>
            <li><strong>Partial dependency</strong>: a non-key column depends on only part of a composite key.</li>
            <li><strong>Transitive dependency</strong>: a non-key column depends on another non-key column.</li>
          </ul>

          <div class="tip">
            One-line memory aid: 1NF removes repeating groups, 2NF removes partial dependency, 3NF removes transitive dependency, and BCNF tightens key rules.
          </div>
        </details>
      </section>

      <section class="card topic-card" id="subqueries" data-keywords="subqueries nested queries single row subquery multi row subquery correlated subquery inline views scalar subquery any all exists">
        <details class="topic-details">
          <summary class="topic-summary">11. Subqueries or Nested Queries</summary>

          <ol>
            <li>A subquery is a query written inside another query.</li>
            <li>The inner query is called the subquery and the outer query uses its result.</li>
          </ol>

          <div class="chip-row">
            <span>Single Row</span>
            <span>Multi Row</span>
            <span>Correlated</span>
            <span>Inline View</span>
            <span>Scalar</span>
          </div>

          <h3>1. Single-row subquery</h3>
          <ul>
            <li>Returns one value.</li>
            <li>Usually used with relational operators like <code>=</code>, <code>&gt;</code>, and <code>&lt;</code>.</li>
            <li>The inner query runs first, then the outer query uses that value.</li>
          </ul>
          <pre><code>SELECT *
FROM employee
WHERE esal = (
  SELECT MAX(esal) FROM employee
);</code></pre>

          <h3>2. Multi-row subquery</h3>
          <ul>
            <li>Returns multiple values.</li>
            <li>Usually used with <code>IN</code>, <code>NOT IN</code>, <code>ANY</code>, and <code>ALL</code>.</li>
          </ul>
          <pre><code>SELECT *
FROM employee
WHERE ename IN (
  SELECT ename
  FROM employee
  WHERE ename = 'jones' OR ename = 'scott'
);

SELECT *
FROM employee
WHERE esal &gt; ANY (
  SELECT esal
  FROM employee
  WHERE emp_name IN ('scott', 'allen')
);</code></pre>

          <h3>3. Correlated subquery</h3>
          <p>The outer query and inner query depend on each other. The outer row is checked one row at a time.</p>
          <pre><code>-- Source-style example often used to find the second highest salary
SELECT *
FROM employee e1
WHERE 1 = (
  SELECT COUNT(esal)
  FROM employee e2
  WHERE e2.esal &gt; e1.esal
);</code></pre>

          <h3>4. Inline view subquery</h3>
          <p>A subquery written inside the <code>FROM</code> clause is often called an inline view.</p>
          <pre><code>SELECT emp_id, emp_name, esal
FROM (
  SELECT emp_id, emp_name, esal, AVG(esal) OVER () AS avg_salary
  FROM employee
) AS inline_view
WHERE esal &gt; avg_salary;</code></pre>

          <div class="warn">
            If your MySQL environment does not use window functions in beginner examples, you can also compute average salary in a separate scalar subquery.
          </div>

          <h3>5. Scalar subquery</h3>
          <p>A scalar subquery appears in the <code>SELECT</code> clause and returns one value for each outer row.</p>
          <pre><code>SELECT *,
       (SELECT AVG(esal) FROM employee) AS avgsal
FROM employee;</code></pre>

          <div class="note">
            Execution memory rule: single-row and multi-row subqueries often run the inner query first, while correlated subqueries re-run the inner part for each outer row.
          </div>
        </details>
      </section>

      <section class="card topic-card" id="objects" data-keywords="mysql objects table view alias synonyms sequences indexes materialized views btree bitmap unique index table scan index scan">
        <details class="topic-details">
          <summary class="topic-summary">12. MySQL Objects: Tables, Views, Synonyms, Sequences, Indexes, and Materialized Views</summary>

          <h3>Overview from the source note</h3>
          <div class="checklist">
            <div>Tables</div>
            <div>Views</div>
            <div>Synonyms</div>
            <div>Sequences</div>
            <div>Indexes</div>
            <div>Materialized Views</div>
          </div>

          <h3>Tables</h3>
          <ol>
            <li>A table is a predefined database object.</li>
            <li>It stores data in rows and columns.</li>
            <li>Rows are records and columns are fields.</li>
          </ol>

          <h3>Views</h3>
          <ol>
            <li>A view is a virtual table created from a query.</li>
            <li>A view can be based on one table or multiple tables.</li>
            <li>If the underlying table data changes, the view reflects those changes.</li>
            <li>Some views are updatable, depending on the query used to create them.</li>
          </ol>

          <h4>Simple view</h4>
          <pre><code>CREATE VIEW civstudent AS
SELECT *
FROM student
WHERE branch = 'civil';</code></pre>

          <h4>Complex view</h4>
          <pre><code>CREATE VIEW studentcontact AS
SELECT student.sno,
       student.sname,
       contact.email,
       contact.mobile
FROM student
JOIN contact ON student.sno = contact.sno;</code></pre>

          <h3>Alias</h3>
          <p>An alias is another name for a table or column inside a query.</p>
          <pre><code>SELECT * FROM student AS virat;
SELECT sname AS javastudents FROM student;</code></pre>

          <h3>Synonyms</h3>
          <p>
            The source note included synonyms for comparison with other database systems. In standard MySQL, there is no native
            <code>CREATE SYNONYM</code> statement. Use aliases or views instead.
          </p>
          <pre><code>-- Oracle-style idea from classroom note:
-- CREATE SYNONYM e1 FOR EmployeeDetails;
-- MySQL alternative:
CREATE VIEW e1 AS
SELECT * FROM EmployeeDetails;</code></pre>

          <h3>Sequences</h3>
          <p>
            In many MySQL teaching setups, sequence-style numbering is done with <code>AUTO_INCREMENT</code>.
            Standalone sequence objects are not the common MySQL pattern taught alongside tables.
          </p>
          <pre><code>CREATE TABLE excelr (
  eno INT PRIMARY KEY AUTO_INCREMENT,
  ename VARCHAR(30),
  esal INT
);

INSERT INTO excelr (ename, esal)
VALUES ('srikar', 3000);

ALTER TABLE excelr AUTO_INCREMENT = 1000;

INSERT INTO excelr (ename, esal)
VALUES ('jashwa', 1000);</code></pre>

          <h3>Indexes</h3>
          <ol>
            <li>An index is a database object used to speed up data retrieval.</li>
            <li>Indexes are more helpful for read-heavy queries than for heavy insert or update workloads.</li>
          </ol>

          <h4>Simple B-tree index</h4>
          <pre><code>CREATE INDEX i1 ON Employee(esal);</code></pre>

          <h4>Composite B-tree index</h4>
          <pre><code>CREATE INDEX i2 ON Employee(esal, ename);</code></pre>

          <h4>Unique index</h4>
          <pre><code>CREATE UNIQUE INDEX e3 ON tcs(eno);</code></pre>

          <div class="warn">
            The raw note listed bitmap index. Bitmap indexes are common in some other database systems, but they are not the regular index type taught for standard MySQL tables. For MySQL beginner work, focus on normal indexes, composite indexes, and unique indexes.
          </div>

          <h4>Table scan vs index scan</h4>
          <ul>
            <li><strong>Table scan</strong>: MySQL checks rows by scanning the table.</li>
            <li><strong>Index scan</strong>: MySQL uses the index structure to narrow the search.</li>
            <li>Index scans are usually faster for lookup queries, but indexes add storage cost and write overhead.</li>
          </ul>

          <h3>Materialized views</h3>
          <p>
            A materialized view stores query results physically. Classic MySQL classroom setups usually simulate this behavior with a table,
            because a normal MySQL view is virtual.
          </p>
          <pre><code>CREATE TABLE materialized_view AS
SELECT *
FROM some_table
WHERE condition;</code></pre>

          <div class="tip">
            Practical rule: use a view when you want a live query result, and use a table created from a query when you want a stored snapshot.
          </div>
        </details>
      </section>

      <section class="card topic-card" id="stored-procedures" data-keywords="stored procedures delimiter call formal parameters actual arguments begin end procedure">
        <details class="topic-details">
          <summary class="topic-summary">13. Stored Procedures</summary>

          <ol>
            <li>A stored procedure is a collection of SQL statements stored in the database.</li>
            <li>Its purpose is to perform a task and improve code reuse.</li>
            <li>A stored procedure usually has three parts: heading, body, and calling statement.</li>
            <li>Formal parameters receive values. Actual arguments pass values during the call.</li>
          </ol>

          <h3>General syntax</h3>
          <pre><code>DELIMITER $$
CREATE PROCEDURE procedure_name (formal_parameters)
BEGIN
  -- group of statements
END $$
DELIMITER ;</code></pre>

          <h3>Example 1: Procedure without parameters</h3>
          <pre><code>DELIMITER $$
CREATE PROCEDURE empDetails()
BEGIN
  SELECT * FROM tcs;
END $$
DELIMITER ;

CALL empDetails();</code></pre>

          <h3>Example 2: Procedure with one parameter</h3>
          <pre><code>DELIMITER $$
CREATE PROCEDURE empDetails1(num INT)
BEGIN
  SELECT * FROM tcs WHERE eno = num;
END $$
DELIMITER ;

CALL empDetails1(103);</code></pre>

          <h3>Example 3: Local variable inside a procedure</h3>
          <pre><code>DELIMITER $$
CREATE PROCEDURE showdata()
BEGIN
  DECLARE x INT;
  SET x = 5;
  SELECT x AS result;
END $$
DELIMITER ;

CALL showdata();</code></pre>

          <h3>Example 4: Addition procedure</h3>
          <pre><code>DELIMITER $$
CREATE PROCEDURE addnum(p INT, q INT)
BEGIN
  DECLARE fn INT;
  DECLARE sn INT;
  DECLARE rn INT;

  SET fn = p;
  SET sn = q;
  SET rn = fn + sn;

  SELECT rn AS additionvalue;
END $$
DELIMITER ;

CALL addnum(10, 5);</code></pre>
        </details>
      </section>

      <section class="card topic-card" id="stored-functions" data-keywords="functions stored functions return deterministic no sql reads sql data procedure vs function error 1172">
        <details class="topic-details">
          <summary class="topic-summary">14. Functions</summary>

          <ol>
            <li>A function is a collection of statements stored in the database.</li>
            <li>Its purpose is to perform a task and return a single value.</li>
            <li>A function also has a heading, body, and calling style.</li>
          </ol>

          <div class="split">
            <div class="compare-box">
              <h4>Stored procedures</h4>
              <ul>
                <li>Recommended for DML work such as insert, update, or delete.</li>
                <li>Can return multiple values or result sets.</li>
              </ul>
            </div>

            <div class="compare-box">
              <h4>Functions</h4>
              <ul>
                <li>Recommended for calculations and reusable value-returning logic.</li>
                <li>Return a single value.</li>
              </ul>
            </div>
          </div>

          <h3>General syntax</h3>
          <pre><code>DELIMITER $$
CREATE FUNCTION function_name(formal_parameters)
RETURNS datatype
BEGIN
  -- group of statements
END $$
DELIMITER ;</code></pre>

          <h3>Example 1</h3>
          <pre><code>DELIMITER $$
CREATE FUNCTION first_fun()
RETURNS VARCHAR(20)
DETERMINISTIC
NO SQL
BEGIN
  RETURN 'virat';
END $$
DELIMITER ;

SELECT first_fun();</code></pre>

          <h3>Example 2</h3>
          <pre><code>DELIMITER $$
CREATE FUNCTION second_fun(a INT)
RETURNS INT
DETERMINISTIC
NO SQL
BEGIN
  RETURN a * a;
END $$
DELIMITER ;

SELECT second_fun(7);</code></pre>

          <h3>Example 3</h3>
          <pre><code>DELIMITER $$
CREATE FUNCTION third_fun(num INT)
RETURNS VARCHAR(40)
DETERMINISTIC
READS SQL DATA
BEGIN
  DECLARE empname VARCHAR(30);
  SELECT ename INTO empname
  FROM employee
  WHERE eid = num;
  RETURN empname;
END $$
DELIMITER ;

SELECT third_fun(107);</code></pre>

          <h3>Procedure comparison example from the source note</h3>
          <pre><code>DELIMITER $$
CREATE PROCEDURE empDetailsda(num INT)
BEGIN
  SELECT * FROM tcs WHERE eno &gt; num;
END $$
DELIMITER ;

CALL empDetailsda(5);</code></pre>

          <h3>Function returning more than one row causes an error</h3>
          <pre><code>DELIMITER $$
CREATE FUNCTION third_fun1(num INT)
RETURNS VARCHAR(40)
DETERMINISTIC
READS SQL DATA
BEGIN
  DECLARE empname VARCHAR(30);
  SELECT ename INTO empname
  FROM employee
  WHERE eid &gt; num;
  RETURN empname;
END $$
DELIMITER ;

SELECT third_fun1(5);
-- Error Code: 1172. Result consisted of more than one row</code></pre>

          <div class="warn">
            Important rule: a stored function must return exactly one value. If the inner <code>SELECT ... INTO</code> fetches more than one row, MySQL throws an error.
          </div>
        </details>
      </section>

      <section class="card topic-card" id="cursors" data-keywords="cursors declare cursor open fetch close continue handler not found">
        <details class="topic-details">
          <summary class="topic-summary">15. Cursors</summary>

          <ol>
            <li>A cursor is a MySQL program object used to process query results row by row.</li>
            <li>It is useful when you must handle one record at a time inside a stored program.</li>
          </ol>

          <h3>Typical cursor steps</h3>
          <ol>
            <li>Declare the cursor for a <code>SELECT</code> statement.</li>
            <li>Open the cursor.</li>
            <li>Declare a continue handler for the no-more-rows condition.</li>
            <li>Fetch rows into local variables.</li>
            <li>Close the cursor.</li>
          </ol>

          <pre><code>DELIMITER $$
CREATE PROCEDURE cursor_ex()
BEGIN
  DECLARE done BOOLEAN DEFAULT FALSE;
  DECLARE c_ename VARCHAR(20);
  DECLARE c_esal INT;

  DECLARE c1 CURSOR FOR
    SELECT ename, esal FROM employee;

  DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

  OPEN c1;

  read_loop: LOOP
    FETCH c1 INTO c_ename, c_esal;

    IF done THEN
      LEAVE read_loop;
    END IF;

    SELECT c_ename, c_esal;
  END LOOP;

  CLOSE c1;
END $$
DELIMITER ;

CALL cursor_ex();</code></pre>

          <div class="tip">
            Cursors are powerful, but try set-based SQL first. Use a cursor only when row-by-row logic is truly needed.
          </div>
        </details>
      </section>

      <section class="card topic-card" id="triggers" data-keywords="triggers before after insert update delete new old validation automatic">
        <details class="topic-details">
          <summary class="topic-summary">16. Triggers</summary>

          <ol>
            <li>A trigger is a collection of statements that runs automatically when an event occurs on a table.</li>
            <li>Triggers are often used for automatic validation, auditing, and default corrections.</li>
          </ol>

          <div class="split">
            <div class="compare-box">
              <h4>Before triggers</h4>
              <ul>
                <li>BEFORE INSERT</li>
                <li>BEFORE UPDATE</li>
                <li>BEFORE DELETE</li>
              </ul>
            </div>

            <div class="compare-box">
              <h4>After triggers</h4>
              <ul>
                <li>AFTER INSERT</li>
                <li>AFTER UPDATE</li>
                <li>AFTER DELETE</li>
              </ul>
            </div>
          </div>

          <h3>General syntax</h3>
          <pre><code>DELIMITER $$
CREATE TRIGGER trigger_name
event ON table_name
FOR EACH ROW
BEGIN
  -- statements
END $$
DELIMITER ;</code></pre>

          <h3>Example: BEFORE INSERT trigger</h3>
          <pre><code>DELIMITER $$
CREATE TRIGGER checkingsal
BEFORE INSERT ON employee
FOR EACH ROW
BEGIN
  IF NEW.esal &lt; 0 THEN
    SET NEW.esal = 0;
  END IF;
END $$
DELIMITER ;</code></pre>

          <h3>How to implement the trigger from the source note</h3>
          <ol>
            <li>Create the table first.</li>
            <li>Write the <code>BEFORE INSERT</code> trigger.</li>
            <li>Insert rows into the table.</li>
            <li>Select the table and verify the adjusted values.</li>
          </ol>

          <div class="note">
            In triggers, <code>NEW.column_name</code> refers to the incoming row value for insert or update. In delete triggers, you usually work with <code>OLD.column_name</code>.
          </div>
        </details>
      </section>
    </main>

    <p class="footnote">
      This page keeps the full topic coverage from the original classroom note set and adds a few MySQL-focused clarifications where Oracle-style terms were mixed into the content.
    </p>
  </div>

  <script>
    (function () {
      var searchInput = document.getElementById("searchInput");
      var expandAllBtn = document.getElementById("expandAllBtn");
      var collapseAllBtn = document.getElementById("collapseAllBtn");
      var resultCount = document.getElementById("resultCount");
      var topicCards = Array.prototype.slice.call(document.querySelectorAll(".topic-card"));
      var topicDetails = topicCards
        .map(function (card) {
          return card.querySelector(".topic-details");
        })
        .filter(function (item) {
          return Boolean(item);
        });

      function updateCount() {
        var visibleCards = topicCards.filter(function (card) {
          return card.style.display !== "none";
        }).length;
        if (resultCount) {
          resultCount.textContent = visibleCards + " sections shown";
        }
      }

      if (expandAllBtn) {
        expandAllBtn.addEventListener("click", function () {
          topicDetails.forEach(function (detail) {
            detail.open = true;
          });
        });
      }

      if (collapseAllBtn) {
        collapseAllBtn.addEventListener("click", function () {
          topicDetails.forEach(function (detail) {
            detail.open = false;
          });
        });
      }

      if (searchInput) {
        searchInput.addEventListener("input", function () {
          var query = searchInput.value.trim().toLowerCase();

          topicCards.forEach(function (card) {
            var keywords = card.getAttribute("data-keywords") || "";
            var combined = (keywords + " " + card.textContent).toLowerCase();
            var matched = query === "" || combined.indexOf(query) !== -1;
            card.style.display = matched ? "" : "none";

            if (matched && query !== "") {
              var detail = card.querySelector(".topic-details");
              if (detail) {
                detail.open = true;
              }
            }
          });

          updateCount();
        });
      }

      function openTopicFromHash() {
        var hashValue = window.location.hash;
        if (!hashValue) {
          return;
        }

        var section = document.querySelector(hashValue);
        if (!section) {
          return;
        }

        var detail = section.querySelector(".topic-details");
        if (detail) {
          detail.open = true;
        }
      }

      updateCount();
      window.addEventListener("hashchange", openTopicFromHash);
      openTopicFromHash();
    })();
  </script>
</body>
</html>
`;

export default noteSource;
