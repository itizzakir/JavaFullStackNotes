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

    .toolbar {
      margin: 14px 0 18px;
      display: grid;
      grid-template-columns: 1fr auto auto;
      gap: 10px;
    }

    .toolbar button {
      border: 1px solid var(--line);
      border-radius: 10px;
      padding: 10px 12px;
      font-size: 0.95rem;
      background: #fff;
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
    }

    ol,
    ul {
      margin: 8px 0;
      padding-left: 20px;
    }

    li {
      margin: 2px 0;
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

    .topic-sep {
      margin: 18px 0 10px;
      border: 0;
      border-top: 1px solid #e4ecf5;
    }

    @media (max-width: 1100px) {
      .keyword-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    @media (max-width: 700px) {
      .global-nav {
        position: static;
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
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

      .keyword-grid {
        grid-template-columns: 1fr;
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
    </header>

    <section class="toolbar">
      <button id="expandBtn" type="button">Expand All</button>
      <button id="collapseBtn" type="button" class="secondary">Collapse All</button>
    </section>

    <main class="grid">
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
          </div>
        </details>
      </section>
    </main>
  </div>

  <script>
    (function () {
      var expandBtn = document.getElementById("expandBtn");
      var collapseBtn = document.getElementById("collapseBtn");
      var detailsList = Array.prototype.slice.call(
        document.querySelectorAll("main .card > details")
      );

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
    })();
  </script>
</body>
</html>
`;

export default noteSource;



