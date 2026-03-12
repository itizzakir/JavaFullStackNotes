const noteSource = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Spring Boot Notes | Spring Core Filled</title>
  <style>
    :root {
      --bg: #f5f7fb;
      --panel: #ffffff;
      --ink: #0f1b2d;
      --muted: #4b5563;
      --line: #d9e2ef;
      --accent: #0ea5e9;
      --accent-strong: #0b7fc5;
      --shadow: 0 14px 38px rgba(15, 27, 45, 0.12);
      --code-bg: #0f172a;
      --code-fg: #e2e8f0;
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: "Segoe UI", Tahoma, Arial, sans-serif;
      color: var(--ink);
      background:
        radial-gradient(900px 520px at -10% 0%, #e1f3ff 0%, transparent 60%),
        radial-gradient(820px 480px at 110% -8%, #d8f7ef 0%, transparent 55%),
        var(--bg);
    }

    a {
      color: inherit;
    }

    .page {
      width: min(1280px, 96%);
      margin: 0 auto;
      padding: 22px 0 32px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .hero {
      background: linear-gradient(135deg, #0ea5e9, #2563eb 50%, #0ea5e9);
      color: #fff;
      border-radius: 18px;
      padding: 18px 20px;
      box-shadow: var(--shadow);
    }

    .hero .eyebrow {
      letter-spacing: 0.08em;
      text-transform: uppercase;
      font-size: 0.78rem;
      margin: 0 0 4px 0;
      opacity: 0.9;
    }

    .hero h1 {
      margin: 0;
      font-size: clamp(1.6rem, 3vw, 2.2rem);
    }

    .hero .lede {
      margin: 8px 0 0 0;
      max-width: 960px;
      font-size: 1rem;
      opacity: 0.94;
    }

    .topics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 12px;
      align-items: start;
    }

    .topic-card {
      background: var(--panel);
      border: 1px solid var(--line);
      border-radius: 14px;
      padding: 14px;
      box-shadow: 0 8px 22px rgba(15, 27, 45, 0.08);
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .topic-card header {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .topic-card .eyebrow {
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-size: 0.75rem;
      color: var(--muted);
      margin: 0;
    }

    .topic-card h2 {
      margin: 0;
      font-size: 1.18rem;
      color: var(--ink);
    }

    .notes-area {
      min-height: 140px;
      border: 1px dashed var(--line);
      border-radius: 10px;
      background: #f9fbff;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6);
      position: relative;
      overflow: hidden;
    }

    .notes-area::before {
      content: "";
      position: absolute;
      inset: 0;
      background: repeating-linear-gradient(
        to bottom,
        transparent 0,
        transparent 22px,
        rgba(14, 165, 233, 0.06) 22px,
        rgba(14, 165, 233, 0.06) 24px
      );
      pointer-events: none;
    }

    .notes-area.filled {
      background: #ffffff;
      border: 1px solid var(--line);
      padding: 14px 14px 6px;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8);
      overflow-x: auto;
    }

    .notes-area.filled::before {
      display: none;
    }

    .notes-area.placeholder {
      display: grid;
      place-items: center;
      color: var(--muted);
      font-size: 0.95rem;
      padding: 18px;
    }

    .note-section {
      margin: 0 0 14px 0;
      padding-bottom: 10px;
      border-bottom: 1px solid var(--line);
    }

    .note-section:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }

    .section-label {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: #e0f2fe;
      color: #075985;
      padding: 4px 8px;
      border-radius: 999px;
      font-size: 0.8rem;
      font-weight: 600;
      letter-spacing: 0.01em;
    }

    .note-section h3 {
      margin: 6px 0 6px;
      font-size: 1.05rem;
    }

    .tight-list {
      margin: 6px 0 0;
      padding-left: 18px;
    }

    .tight-list li {
      margin-bottom: 4px;
    }

    .code-block {
      background: var(--code-bg);
      color: var(--code-fg);
      border-radius: 10px;
      padding: 12px 12px 10px;
      font-family: "JetBrains Mono", "SFMono-Regular", Consolas, Menlo, monospace;
      font-size: 0.9rem;
      line-height: 1.5;
      overflow-x: auto;
      margin: 8px 0;
      border: 1px solid rgba(255, 255, 255, 0.08);
    }

    .code-block code {
      white-space: pre;
    }

    .pill-list {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      padding: 0;
      margin: 6px 0;
      list-style: none;
    }

    .pill {
      background: #eef2ff;
      color: #312e81;
      border-radius: 999px;
      padding: 4px 10px;
      font-size: 0.83rem;
      border: 1px solid #cbd5ff;
    }

    .chip-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin-left: 8px;
      padding: 6px 10px;
      border-radius: 999px;
      background: #e0f2fe;
      border: 1px solid #bae6fd;
      color: #075985;
      font-weight: 600;
      text-decoration: none;
      box-shadow: 0 3px 8px rgba(14, 165, 233, 0.2);
      transition: transform 120ms ease, box-shadow 120ms ease;
    }

    .chip-link:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 12px rgba(14, 165, 233, 0.25);
    }

    .callout {
      margin: 8px 0;
      padding: 10px 12px;
      border-radius: 10px;
      border: 1px solid #cce7ff;
      background: #f1f8ff;
      color: #0f1b2d;
      font-size: 0.95rem;
    }

    .two-col {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 8px;
      margin: 8px 0;
    }

    @media (max-width: 640px) {
      .hero {
        padding: 16px;
      }

      .code-block {
        font-size: 0.85rem;
      }
    }
  </style>
</head>
<body>
  <div class="page">
    <header class="hero">
      <p class="eyebrow">Spring Framework</p>
      <h1>Spring Boot Notes</h1>
      <p class="lede">Spring Core is now populated with the provided notes and examples. Other cards stay ready for future fills.</p>
    </header>

    <section class="topics-grid" aria-label="Spring topics">
      <article class="topic-card" id="spring-core">
        <header>
          <p class="eyebrow">Module 01</p>
          <h2>Spring Core</h2>
        </header>
        <div class="notes-area placeholder" aria-label="Spring Core notes area">
          Spring Core notes live on their own page for easier reading.
          <a class="chip-link" href="/notes/springcore">Open Spring Core &rarr;</a>
        </div>
      </article>

      <article class="topic-card" id="spring-boot-intro">
        <header>
          <p class="eyebrow">Module 02</p>
          <h2>Spring Boot Introduction</h2>
        </header>
        <div class="notes-area placeholder" aria-label="Spring Boot introduction notes area">Add Boot-specific notes here when ready.</div>
      </article>

      <article class="topic-card" id="spring-data-jpa">
        <header>
          <p class="eyebrow">Module 03</p>
          <h2>Spring Data JPA</h2>
        </header>
        <div class="notes-area placeholder" aria-label="Spring Data JPA notes area">Prepared for repository patterns, entities, and queries.</div>
      </article>

      <article class="topic-card" id="spring-web-mvc">
        <header>
          <p class="eyebrow">Module 04</p>
          <h2>Spring Web MVC</h2>
        </header>
        <div class="notes-area placeholder" aria-label="Spring Web MVC notes area">Drop controller/view notes here.</div>
      </article>

      <article class="topic-card" id="restful-services">
        <header>
          <p class="eyebrow">Module 05</p>
          <h2>RESTful Services</h2>
        </header>
        <div class="notes-area placeholder" aria-label="RESTful services notes area">REST patterns and HTTP guidance pending.</div>
      </article>

      <article class="topic-card" id="exceptions-security">
        <header>
          <p class="eyebrow">Module 06</p>
          <h2>Exceptions &amp; Spring Security</h2>
        </header>
        <div class="notes-area placeholder" aria-label="Exceptions and Spring Security notes area">Security + error handling content goes here.</div>
      </article>

      <article class="topic-card" id="microservices">
        <header>
          <p class="eyebrow">Module 07</p>
          <h2>Microservices</h2>
        </header>
        <div class="notes-area placeholder" aria-label="Microservices notes area">Add microservices, circuit breakers, and observability notes.</div>
      </article>

      <article class="topic-card" id="testing">
        <header>
          <p class="eyebrow">Module 08</p>
          <h2>JUnit &amp; Mockito</h2>
        </header>
        <div class="notes-area placeholder" aria-label="JUnit and Mockito notes area">Testing strategies await content.</div>
      </article>
    </section>
  </div>
</body>
</html>
`;

export default noteSource;
