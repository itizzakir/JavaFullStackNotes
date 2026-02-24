import { Link } from "react-router-dom";

export default function NoteCard({ note }) {
  return (
    <Link className="topic-card" to={`/notes/${note.id}`}>
      <span className="topic-title">{note.title}</span>
      <span className={`topic-status ${note.status.toLowerCase()}`}>{note.status}</span>
      <span className="topic-summary">{note.summary}</span>
      <span className="topic-link">Open Notes</span>
    </Link>
  );
}
