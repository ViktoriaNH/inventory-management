import { useState, useEffect } from "react";
import { Button } from "./Button";

export const ThemeButton = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  const toggle = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <Button
      onClick={toggle}
      className=" ms-3"
      aria-label="Toggle theme"
      text={
        <i
          className={`bi ${theme === "light" ? "bi-moon-stars-fill" : "bi-sun-fill"}`}
        ></i>
      }
    />
  );
};
