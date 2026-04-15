export const BurgerButton = ({ onClick, isOpen }) => {
  return (
    <button
      className="navbar-toggler"
      type="button"
      aria-controls="mainNavbar"
      aria-expanded={isOpen}
      aria-label="Menu"
      onClick={onClick}
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  );
};