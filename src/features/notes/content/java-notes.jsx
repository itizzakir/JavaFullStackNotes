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

      <section class="card" id="keywords">
        <details>
          <summary>2.Keywords</summary>
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
          <summary>3.Keyword Groups (visual layout)</summary>
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
          <summary>4.Datatypes</summary>
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
          <summary>5.Datatypes Diagram (same idea as your reference)</summary>
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
          <summary>6.Integer Primitive Datatypes</summary>

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
          <summary>7.int datatype stores number format data</summary>
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
          <summary>8.Floating point values</summary>
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
          <summary>9.char and boolean</summary>
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
          <summary>10.Type conversions</summary>
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
          <summary>11.Operations</summary>
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



