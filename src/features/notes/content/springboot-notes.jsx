const noteSource = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Spring Boot Notes (Skeleton)</title>
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
      width: min(1200px, 95%);
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
      max-width: 780px;
      font-size: 1rem;
      opacity: 0.94;
    }

    .topics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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
      font-size: 1.15rem;
      color: var(--ink);
    }

    .notes-area {
      min-height: 140px;
      border: 1px dashed var(--line);
      border-radius: 10px;
      background: #f9fbff;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6);
    }

    .notes-area::before {
      content: "";
      display: block;
      height: 100%;
      width: 100%;
      background: repeating-linear-gradient(
        to bottom,
        transparent 0,
        transparent 22px,
        rgba(14, 165, 233, 0.06) 22px,
        rgba(14, 165, 233, 0.06) 24px
      );
      border-radius: 10px;
    }

    @media (max-width: 640px) {
      .hero {
        padding: 16px;
      }
    }
  </style>
</head>
<body>
  <div class="page">
    <header class="hero">
      <p class="eyebrow">Spring Framework</p>
      <h1>Spring Boot Notes</h1>
      <p class="lede">Structure is ready. Add your own notes to each section whenever you like.</p>
    </header>

    <section class="topics-grid" aria-label="Spring topics">
      <article class="topic-card" id="spring-core">
        <header>
          <p class="eyebrow">Module 01</p>
          <h2>Spring Core</h2>
        </header>
        <div class="notes-area" aria-label="Spring Core notes area"></div>
      </article>

      <article class="topic-card" id="spring-boot-intro">
        <header>
          <p class="eyebrow">Module 02</p>
          <h2>Spring Boot Introduction</h2>
        </header>
        <div class="notes-area" aria-label="Spring Boot introduction notes area"></div>
      </article>

      <article class="topic-card" id="spring-data-jpa">
        <header>
          <p class="eyebrow">Module 03</p>
          <h2>Spring Data JPA</h2>
        </header>
        <div class="notes-area" aria-label="Spring Data JPA notes area"></div>
      </article>

      <article class="topic-card" id="spring-web-mvc">
        <header>
          <p class="eyebrow">Module 04</p>
          <h2>Spring Web MVC</h2>
        </header>
        <div class="notes-area" aria-label="Spring Web MVC notes area"></div>
      </article>

      <article class="topic-card" id="restful-services">
        <header>
          <p class="eyebrow">Module 05</p>
          <h2>RESTful Services</h2>
        </header>
        <div class="notes-area" aria-label="RESTful services notes area"></div>
      </article>

      <article class="topic-card" id="exceptions-security">
        <header>
          <p class="eyebrow">Module 06</p>
          <h2>Exceptions &amp; Spring Security</h2>
        </header>
        <div class="notes-area" aria-label="Exceptions and Spring Security notes area"></div>
      </article>

      <article class="topic-card" id="microservices">
        <header>
          <p class="eyebrow">Module 07</p>
          <h2>Microservices</h2>
        </header>
        <div class="notes-area" aria-label="Microservices notes area"></div>
      </article>

      <article class="topic-card" id="testing">
        <header>
          <p class="eyebrow">Module 08</p>
          <h2>JUnit &amp; Mockito</h2>
        </header>
        <div class="notes-area" aria-label="JUnit and Mockito notes area"></div>
      </article>
    </section>
  </div>
</body>
</html>
`;

export default noteSource;
