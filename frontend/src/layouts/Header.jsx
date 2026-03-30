import { Link } from "react-router-dom";
import { PATHS } from "../data/paths.js";
import { BurgerButton } from "../components/BurgerButton.jsx";
import { Logo } from "../components/Logo.jsx";
import { Navbar } from "../components/Navbar.jsx";
import { ThemeButton } from "../components/ThemeButton.jsx";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary-subtle px-1 px-sm-4 py-2 mb-4 w-100">
      <div className="container-fluid ">
        <Link
          to={PATHS.MAIN_PAGE}
          className="navbar-brand d-flex align-items-center fw-semibold me-5"
        >
          <Logo />
        </Link>
        <BurgerButton />
        <Navbar />
        <ThemeButton />
      </div>
    </nav>
  );
};
