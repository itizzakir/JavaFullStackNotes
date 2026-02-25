import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./shared/styles/globals.css";
import { applyTheme, getInitialTheme } from "./shared/theme/themePreference";

applyTheme(getInitialTheme());

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
