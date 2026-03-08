import { parseNoteDocument } from "../utils/parseNoteDocument";

const noteModules = import.meta.glob("../content/*.jsx", { import: "default" });

const contentPathByNoteId = Object.freeze({
  html: "../content/html-notes.jsx",
  javascript: "../content/javascript-notes.jsx",
  java: "../content/java-notes.jsx",
  mysql: "../content/mysql-notes.jsx",
  react: "../content/react-notes.jsx"
});

export async function loadNoteDocument(noteId) {
  const contentPath = contentPathByNoteId[noteId];
  if (!contentPath) {
    return null;
  }

  const loader = noteModules[contentPath];
  if (!loader) {
    return null;
  }

  const rawSource = await loader();
  return parseNoteDocument(rawSource);
}
