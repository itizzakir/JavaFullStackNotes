export const THEME_STORAGE_KEY = "jfsn-theme";

const DARK_THEME = "dark";
const LIGHT_THEME = "light";

function isBrowser() {
  return typeof window !== "undefined";
}

function normalizeTheme(theme) {
  return theme === DARK_THEME ? DARK_THEME : LIGHT_THEME;
}

export function getStoredTheme() {
  if (!isBrowser()) {
    return null;
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (storedTheme === DARK_THEME || storedTheme === LIGHT_THEME) {
    return storedTheme;
  }

  return null;
}

export function getSystemTheme() {
  if (!isBrowser()) {
    return LIGHT_THEME;
  }

  const isDarkPreferred = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return isDarkPreferred ? DARK_THEME : LIGHT_THEME;
}

export function getInitialTheme() {
  return getStoredTheme() ?? getSystemTheme();
}

export function applyTheme(theme) {
  if (!isBrowser()) {
    return;
  }

  const normalizedTheme = normalizeTheme(theme);
  const root = document.documentElement;
  root.dataset.theme = normalizedTheme;
  root.style.colorScheme = normalizedTheme;
}

export function persistTheme(theme) {
  if (!isBrowser()) {
    return;
  }

  window.localStorage.setItem(THEME_STORAGE_KEY, normalizeTheme(theme));
}
