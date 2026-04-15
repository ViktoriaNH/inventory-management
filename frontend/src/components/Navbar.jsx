import { NavLink, useNavigate } from "react-router-dom";
import { MENU_ITEMS } from "../data/menu-items";
import { Button } from "./Button";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useClerkAuthStatus } from "../hooks/useClerkAuthStatus";
import { ThemeButton } from "./ThemeButton";
import { Search } from "./Search";

export const Navbar = ({ theme, onToggleTheme }) => {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const { isSignedIn } = useUser();
  const { isAuth } = useClerkAuthStatus();

  const handleLogout = async () => {
    await signOut();
  };

  const toSignIn = () => {
    navigate("/sign-in");
  };

  return (
    <div className="collapse navbar-collapse" id="mainNavbar">
      <ul className="navbar-nav me-auto">
        {MENU_ITEMS.filter((item) => !item.needAuth || isAuth).map((item) => (
          <li className="nav-item" key={item.id}>
            <NavLink className="nav-link" to={item.link}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

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
  );
};
