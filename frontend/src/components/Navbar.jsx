import { NavLink } from "react-router-dom";
import { MENU_ITEMS } from "../data/menu-items";
import { useClerkAuthStatus } from "../hooks/useClerkAuthStatus";

export const Navbar = () => {
  const { isAuth } = useClerkAuthStatus();
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
    </div>
  );
};
