# Java Full Stack Notes

A Vite + React learning-notes project with a card-based home page and dedicated notes pages for:

- HTML/CSS
- JavaScript
- Java

The home page is built with React. The notes are rich static HTML pages in `public/` with shared navigation and topic-wise learning flow.

## 1) Project Goal

Provide interview-friendly, notebook-style notes in one place with:

- Clear topic progression
- Quick revision sections
- Practical examples and outputs
- Visual diagrams and demo blocks
- Fast navigation between technologies

## 2) Current Pages

- Home: `/` (React app, card-based entry point)
- HTML Notes: `/html-notes.html`
- JavaScript Notes: `/javascript-notes.html`
- Java Notes: `/java-notes.html`
- Legacy mirror of JavaScript notes: `/notes.html`

## 3) Key Features

- Card-based home screen for quick module selection.
- Shared top navigation on all notes pages (`Home`, `HTML`, `JavaScript`, `Java`).
- Topic roadmap in hero section (HTML and JavaScript pages).
- Toolbar with `search`, `Expand All`, `Collapse All` (HTML and JavaScript pages).
- Section-level collapsible content (`details/summary`).
- Keyword-based filtering (`data-keywords`) for searchable topic cards.
- Property atlas and revision/quiz blocks in long-form notes pages.
- Java Notes page follows the same visual theme and is ready for full content expansion.

## 4) Tech Stack

- React 19
- Vite 7
- Plain HTML/CSS/JS for notes pages
- ESLint 9 for linting

## 5) Project Structure

```text
java-full-stack-notes/
|-- public/
|   |-- html-notes.html
|   |-- javascript-notes.html
|   |-- java-notes.html
|   |-- notes.html
|   `-- vite.svg
|-- src/
|   |-- App.jsx
|   |-- App.css
|   |-- main.jsx
|   |-- index.css
|   `-- assets/
|       `-- react.svg
|-- index.html
|-- package.json
|-- vite.config.js
|-- eslint.config.js
`-- README.md
```

## 6) Installation and Run

Prerequisites:

- Node.js 18+ (recommended latest LTS)
- npm

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

Run lint:

```bash
npm run lint
```

## 7) NPM Scripts

- `npm run dev` -> starts Vite dev server
- `npm run build` -> creates production bundle in `dist/`
- `npm run preview` -> previews built app
- `npm run lint` -> runs ESLint

## 8) How the App Works

Home page (`src/App.jsx`):

- Renders three cards: `HTML`, `JavaScript`, `Java`
- Each card links directly to the matching notes page in `public/`
- Includes same top nav links used across note pages

Notes pages (`public/*.html`):

- Full static content with custom CSS
- Shared site-level navigation
- Topic cards and structured learning flow
- Interactive snippets and output blocks

## 9) Notes Authoring Workflow

Use this whenever adding or updating notes.

1. Pick the target file in `public/`.
2. Add or edit a topic card block.
3. If searchable, add/update the card `data-keywords`.
4. Add the topic anchor in the hero roadmap (`href="#topic-id"`).
5. Keep IDs unique and meaningful.
6. Test search and expand/collapse behavior.
7. Run `npm run build` to verify no issues.

Recommended card pattern:

```html
<section class="card" id="topic-id" data-keywords="keyword1 keyword2 keyword3">
  <details>
    <summary>Topic Title</summary>
    <p>Content...</p>
  </details>
</section>
```

## 10) Sync Rule for `notes.html`

`public/notes.html` currently mirrors JavaScript notes.

If you update `public/javascript-notes.html`, sync it to `public/notes.html` to avoid drift.

PowerShell:

```powershell
Copy-Item -Force public\javascript-notes.html public\notes.html
```

## 11) Styling and Theme Notes

- CSS variables are defined at the top of each notes page (`:root`).
- Design is intentionally consistent across pages.
- Core visual blocks are gradient hero, card-based content, pill navigation/tags, and responsive layout.
- Keep new sections aligned with existing naming conventions: `hero`, `topic-nav`, `toolbar`, `grid`, `card`, `output`.

## 12) Deployment

This project can be deployed to any static host:

- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

Steps:

1. Run `npm run build`.
2. Deploy `dist/` output.
3. Ensure routes for static files (`/html-notes.html`, `/javascript-notes.html`, `/java-notes.html`) are publicly accessible.

## 13) Troubleshooting

- If styles look outdated, hard refresh browser cache.
- If links to notes fail, check that files are in `public/`.
- If search does not find new content, confirm `data-keywords` on the relevant card.
- If build fails, run `npm install` again and retry.

## 14) Future Improvements

- Expand Java notes to full topic depth like HTML/JavaScript pages.
- Add a generated table of contents from section IDs.
- Add lightweight tests for critical UI navigation links.
