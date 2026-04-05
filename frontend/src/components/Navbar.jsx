import { NavLink, useNavigate } from "react-router-dom";
import { MENU_ITEMS } from "../data/menu-items";
import { Button } from "./Button";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useClerkAuthStatus } from "../hooks/useClerkAuthStatus";

export const Navbar = () => {
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

      <form className="d-flex me-3" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          autoComplete="off"
        />

        <Button text="Search" type="submit" />
      </form>

      {isSignedIn ?
        <Button text="Logout" onClick={handleLogout} className="mt-3 mt-lg-0" />
      : <Button text="Login" onClick={toSignIn} className="mt-3 mt-lg-0" />}
    </div>
  );
};
