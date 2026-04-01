import { useState, useEffect } from "react";
import { THEMES, DEFAULT_THEME } from "../data/themes";
import { loadTheme, saveTheme } from '../helpers/handle-theme';

export const useTheme = () => {
  const [theme, setTheme] = useState(() => loadTheme() || DEFAULT_THEME);

  const toggleTheme = () =>
    setTheme((prev) => (prev === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT));

  useEffect(() => {
    saveTheme(theme);
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  return { theme, toggleTheme };
};