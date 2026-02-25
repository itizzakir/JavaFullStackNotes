import { Link } from "react-router-dom";

export default function NoteCard({ note }) {
  const statusClass = note.status.toLowerCase().replace(/\s+/g, "-");

  if (note.status !== "Ready") {
    return (
      <article className="topic-card topic-card-disabled" aria-disabled="true">
        <span className="topic-title">{note.title}</span>
        <span className={`topic-status ${statusClass}`}>{note.status}</span>
        <span className="topic-summary">{note.summary}</span>
        <span className="topic-link">Notes coming soon</span>
      </article>
    );
  }

  return (
    <Link className="topic-card" to={`/notes/${note.id}`}>
      <span className="topic-title">{note.title}</span>
      <span className={`topic-status ${statusClass}`}>{note.status}</span>
      <span className="topic-summary">{note.summary}</span>
      <span className="topic-link">Open Notes</span>
    </Link>
  );
}
