export const notesCatalog = Object.freeze([
  {
    id: "html",
    title: "HTML Notes",
    shortLabel: "HTML",
    status: "Ready",
    summary:
      "Complete HTML + CSS notes with examples, demos, and revision sections."
  },
  {
    id: "javascript",
    title: "JavaScript Notes",
    shortLabel: "JavaScript",
    status: "Ready",
    summary:
      "Detailed JavaScript interview notes with outputs and practical snippets."
  },
  {
    id: "java",
    title: "Java Notes",
    shortLabel: "Java",
    status: "Ready",
    summary: "Java section with matching design and starter structure for expansion."
  },
  {
    id: "react",
    title: "React Notes",
    shortLabel: "React",
    status: "Ready",
    summary:
      "React module notes with CommonJS vs ES modules and proper import/export examples."
  }
]);

const notesById = new Map(notesCatalog.map((note) => [note.id, note]));

export function getNoteById(noteId) {
  return notesById.get(noteId) ?? null;
}
