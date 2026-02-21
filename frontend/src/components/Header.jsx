import { useNavigate } from "react-router-dom";
import Button from "./Button.jsx";
import { useAuth } from "@clerk/clerk-react";

export const Header = () => {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const handleLogout = async () => {
    await signOut();

    navigate("/sign-in");
  };

  const handleLogin = async () => {
    navigate("/sign-in");
  };

  return (
    <header className="bg-secondary-subtle d-flex justify-content-between align-items-center px-5 py-3 mb-4 w-100">
      <h1 className="h5">
        <i className="bi bi-box2-heart-fill me-2"></i>
        Inventory Management
      </h1>

      <Button text="Login" variant="outline-dark" onClick={handleLogin} />
      <Button text="Logout" variant="outline-dark" onClick={handleLogout} />
    </header>
  );
};

