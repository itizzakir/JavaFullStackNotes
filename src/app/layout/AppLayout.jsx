import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../../shared/components/MainNavigation";
import { applyTheme, getInitialTheme, persistTheme } from "../../shared/theme/themePreference";

export default function AppLayout() {
  const [theme, setTheme] = useState(() => getInitialTheme());

  useEffect(() => {
    applyTheme(theme);
    persistTheme(theme);
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="app-shell">
      <div className="app-wrap">
        <MainNavigation onToggleTheme={handleThemeToggle} theme={theme} />
        <Outlet />
      </div>
    </div>
  );
}
