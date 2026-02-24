import NoteCard from "./NoteCard";

export default function NotesGrid({ notes }) {
  return (
    <main className="cards-grid">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </main>
  );
}
