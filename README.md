# Java Full Stack Notes (Pure React)

This project is now a pure React + React Router app.  
All note modules are served through React routes and rendered inline in React (no iframe pages in `public/`).

## Tech stack

- React 19
- React Router DOM 7
- Vite 7
- ESLint 9

## Routes

- `/` -> Home
- `/notes/html` -> HTML Notes
- `/notes/javascript` -> JavaScript Notes
- `/notes/java` -> Java Notes

Legacy URLs still work through React redirects:

- `/html-notes.html` -> `/notes/html`
- `/javascript-notes.html` -> `/notes/javascript`
- `/java-notes.html` -> `/notes/java`
- `/notes.html` -> `/notes/javascript`

## Folder structure

```text
src/
|-- app/
|   |-- App.jsx
|   |-- layout/
|   |   `-- AppLayout.jsx
|   `-- router/
|       `-- appRouter.jsx
|-- features/
|   `-- notes/
|       |-- components/
|       |   |-- NoteCard.jsx
|       |   |-- NoteDocument.jsx
|       |   |-- NotesGrid.jsx
|       |-- content/
|       |   |-- html-notes.html
|       |   |-- javascript-notes.html
|       |   `-- java-notes.html
|       |-- data/
|       |   |-- noteContentLoader.js
|       |   `-- notesCatalog.js
|       |-- pages/
|       |   |-- HomePage.jsx
|       |   |-- NotePage.jsx
|       |   `-- NotFoundPage.jsx
|       `-- utils/
|           `-- parseNoteDocument.js
|-- shared/
|   |-- components/
|   |   `-- MainNavigation.jsx
|   `-- styles/
|       `-- globals.css
`-- main.jsx
```

## Run locally

```bash
npm install
npm run dev
```

## Validate

```bash
npm run lint
npm run build
```
