import { THEME_STORAGE_KEY, THEMES } from "../data/themes";

export const loadTheme = () => {
  return localStorage.getItem(THEME_STORAGE_KEY);
};

export const saveTheme = (theme) => {
  localStorage.setItem(THEME_STORAGE_KEY, theme);
};
