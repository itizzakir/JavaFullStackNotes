import { Navigate, createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import HomePage from "../../features/notes/pages/HomePage";
import NotePage from "../../features/notes/pages/NotePage";
import NotFoundPage from "../../features/notes/pages/NotFoundPage";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "html-notes.html",
        element: <Navigate to="/notes/html" replace />
      },
      {
        path: "javascript-notes.html",
        element: <Navigate to="/notes/javascript" replace />
      },
      {
        path: "java-notes.html",
        element: <Navigate to="/notes/java" replace />
      },
      {
        path: "notes.html",
        element: <Navigate to="/notes/javascript" replace />
      },
      {
        path: "notes/:noteId",
        element: <NotePage />
      },
      {
        path: "notes",
        element: <Navigate to="/" replace />
      },
      {
        path: "*",
        element: <NotFoundPage />
      }
    ]
  }
]);
