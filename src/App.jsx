import "./App.css"

const noteCards = [
  {
    id: "html",
    title: "HTML Notes",
    file: "/html-notes.html",
    status: "Ready",
    summary: "Complete HTML + CSS notes with examples, demos, and revision sections."
  },
  {
    id: "javascript",
    title: "JavaScript Notes",
    file: "/javascript-notes.html",
    status: "Ready",
    summary: "Detailed JavaScript interview notes with outputs and practical snippets."
  },
  {
    id: "java",
    title: "Java Notes",
    file: "/java-notes.html",
    status: "Ready",
    summary: "Java section with matching design and starter structure for quick expansion."
  }
]

function App() {
  return (
    <div className="home-shell">
      <div className="home-wrap">
        <nav className="site-nav" aria-label="Primary">
          <a className="site-nav-link active" href="/">
            Home
          </a>
          <a className="site-nav-link" href="/html-notes.html">
            HTML
          </a>
          <a className="site-nav-link" href="/javascript-notes.html">
            JavaScript
          </a>
          <a className="site-nav-link" href="/java-notes.html">
            Java
          </a>
        </nav>

        <header className="hero">
          <h1>Java Full Stack Notes</h1>
          <p>Select a card to open notes. Navigation is available on every page.</p>
        </header>

        <main className="cards-grid">
          {noteCards.map((item) => (
            <a key={item.id} className="topic-card" href={item.file}>
              <span className="topic-title">{item.title}</span>
              <span className={`topic-status ${item.status.toLowerCase()}`}>{item.status}</span>
              <span className="topic-summary">{item.summary}</span>
              <span className="topic-link">Open Notes</span>
            </a>
          ))}
        </main>
      </div>
    </div>
  )
}

export default App
