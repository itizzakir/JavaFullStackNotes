import { parseNoteDocument } from "../utils/parseNoteDocument";

const noteModules = import.meta.glob("../content/*.html", {
  query: "?raw",
  import: "default"
});

const contentPathByNoteId = Object.freeze({
  html: "../content/html-notes.html",
  javascript: "../content/javascript-notes.html",
  java: "../content/java-notes.html"
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
