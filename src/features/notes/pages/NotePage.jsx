import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NoteDocument from "../components/NoteDocument";
import { getNoteById } from "../data/notesCatalog";
import { loadNoteDocument } from "../data/noteContentLoader";
import NotFoundPage from "./NotFoundPage";

function NoteState({ title, message }) {
  return (
    <section className="note-page">
      <header className="note-header">
        <h1>{title}</h1>
        <p>{message}</p>
      </header>
      <div className="note-state">{message}</div>
    </section>
  );
}

export default function NotePage() {
  const { noteId } = useParams();
  const note = useMemo(() => getNoteById(noteId), [noteId]);
  const [noteState, setNoteState] = useState({
    noteDocument: null,
    noteId: null,
    status: "idle"
  });

  useEffect(() => {
    let isActive = true;

    if (!note) {
      return () => {
        isActive = false;
      };
    }

    loadNoteDocument(note.id)
      .then((noteDocument) => {
        if (!isActive) {
          return;
        }

        if (!noteDocument) {
          setNoteState({
            noteDocument: null,
            noteId: note.id,
            status: "error"
          });
          return;
        }

        setNoteState({
          noteDocument,
          noteId: note.id,
          status: "ready"
        });
      })
      .catch(() => {
        if (!isActive) {
          return;
        }

        setNoteState({
          noteDocument: null,
          noteId: note.id,
          status: "error"
        });
      });

    return () => {
      isActive = false;
    };
  }, [note]);

  if (!note) {
    return <NotFoundPage />;
  }

  const isLoading = noteState.noteId !== note.id;

  if (isLoading || noteState.status === "idle") {
    return <NoteState message={`Loading ${note.title}...`} title={note.title} />;
  }

  if (noteState.status === "error") {
    return (
      <section className="note-page">
        <header className="note-header">
          <h1>{note.title}</h1>
          <p>The note content could not be loaded.</p>
        </header>
        <div className="note-state">
          <p>Try reloading the page.</p>
          <Link className="inline-link" to="/">
            Back to home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="note-page">
      <header className="note-header">
        <h1>{note.title}</h1>
        <p>{note.summary}</p>
      </header>
      <NoteDocument noteDocument={noteState.noteDocument} />
    </section>
  );
}
