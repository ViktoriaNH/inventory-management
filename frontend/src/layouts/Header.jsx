import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../components/Button.jsx";
import { useAuth, useUser } from "@clerk/clerk-react";
import { MENU_ITEMS } from "../data/menu-items.js";

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
    <header className="bg-secondary-subtle d-flex justify-content-between align-items-center px-5 py-3 mb-4 w-100">
      <h1 className="h5">
        <i className="bi bi-box2-heart-fill me-2"></i>
        Inventory Management
      </h1>

      <nav className="navbar-expand px-3">
        <ul className="navbar-nav d-flex align-items-center ">
          {MENU_ITEMS.map((item) => (
            <li className="nav-item mx-3" key={item.id}>
              <NavLink
                className="nav-link btn btn-sm btn-light border-0 p-2"
                to={item.link}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {isSignedIn && <Button text="Logout" onClick={handleLogout} />}

      {!isSignedIn && <Button text="Login" onClick={toSignIn} />}
    </header>
  );
};
