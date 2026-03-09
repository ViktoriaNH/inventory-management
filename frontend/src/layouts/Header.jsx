import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "../components/Button.jsx";
import { useAuth, useUser } from "@clerk/clerk-react";
import { MENU_ITEMS } from "../data/menu-items.js";
import { PATHS } from "../data/paths.js";
import { BurgerButton } from "../components/BurgerButton.jsx";

export const Header = () => {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const { isSignedIn } = useUser();

  const handleLogout = async () => {
    await signOut();
  };

  const toSignIn = () => {
    navigate("/sign-in");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-secondary-subtle px-1 px-sm-4 py-3 mb-4 w-100">
      <div className="container-fluid ">
        <Link
          to={PATHS.MAIN_PAGE}
          className="navbar-brand d-flex align-items-center fw-semibold me-5 fs-6 fs-md-3"
        >
          <i className="bi bi-box2-heart-fill me-2"></i>
          <span className="">Inventory Management</span>
        </Link>
        <BurgerButton />

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav me-auto">
            {MENU_ITEMS.map((item) => (
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
            />

            <Button text="Search" type="submit" />
          </form>

          {isSignedIn ?
            <Button
              text="Logout"
              onClick={handleLogout}
              className="mt-3 mt-lg-0"
            />
          : <Button text="Login" onClick={toSignIn} className="mt-3 mt-lg-0" />}
        </div>
      </div>
    </nav>
  );
};
