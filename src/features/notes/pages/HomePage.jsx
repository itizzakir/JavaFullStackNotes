import NotesGrid from "../components/NotesGrid";
import { notesCatalog } from "../data/notesCatalog";

export default function HomePage() {
  return (
    <section className="home-page">
      <header className="hero">
        <h1>Java Full Stack Notes</h1>
        <p>
          Pure React notes portal with route-based modules for HTML, JavaScript, Java, and React.
        </p>
      </header>
      <NotesGrid notes={notesCatalog} />
    </section>
  );
}
