
import { Button } from "./Button";

export const ThemeButton = ({theme, onToggleTheme}) => {

  return (
    <Button
      onClick={onToggleTheme}
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
