import { NavLink } from "react-router-dom";
import { notesCatalog } from "../../features/notes/data/notesCatalog";

function navLinkClassName({ isActive }) {
  return `site-nav-link${isActive ? " active" : ""}`;
}

export default function MainNavigation() {
  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <NavLink className={navLinkClassName} end to="/">
        Home
      </NavLink>
      {notesCatalog.map((note) => (
        <NavLink className={navLinkClassName} key={note.id} to={`/notes/${note.id}`}>
          {note.shortLabel}
        </NavLink>
      ))}
    </nav>
  );
}
