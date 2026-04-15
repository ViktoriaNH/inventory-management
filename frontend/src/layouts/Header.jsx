import { Link, useNavigate } from "react-router-dom";
import { PATHS } from "../data/paths.js";
import { BurgerButton } from "../components/BurgerButton.jsx";
import { Logo } from "../components/Logo.jsx";
import { Navbar } from "../components/Navbar.jsx";
import { useAuth, useUser } from "@clerk/clerk-react";
import { ThemeButton } from "../components/ThemeButton.jsx";
import { Button } from "../components/Button.jsx";
import { Search } from "../components/Search.jsx";
import { useState } from "react";

export const Header = ({ theme, onToggleTheme }) => {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const { isSignedIn } = useUser();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLogout = async () => {
    await signOut();
  };

  const toSignIn = () => {
    navigate("/sign-in");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-secondary-subtle px-1 px-sm-4 py-2 mb-4 w-100">
      <div className="container-fluid ">
        <Link
          to={PATHS.MAIN_PAGE}
          className="navbar-brand d-flex align-items-center fw-semibold me-5"
        >
          <Logo />
        </Link>
        <BurgerButton onClick={toggleMenu} isOpen={isMenuOpen} />
        <Navbar isOpen={isMenuOpen}/>
        <div className="d-flex align-items-center gap-2">
          <Search />

          {isSignedIn ?
            <Button
              text="Logout"
              onClick={handleLogout}
              className="mt-3 mt-lg-0"
            />
          : <Button text="Login" onClick={toSignIn} className="mt-3 mt-lg-0" />}

          <ThemeButton theme={theme} onToggleTheme={onToggleTheme} />
        </div>
      </div>
    </nav>
  );
};
