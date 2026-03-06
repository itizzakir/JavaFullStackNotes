import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./app/router/appRouter";
import "./shared/styles/globals.css";
import { applyTheme, getInitialTheme } from "./shared/theme/themePreference";

applyTheme(getInitialTheme());

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
