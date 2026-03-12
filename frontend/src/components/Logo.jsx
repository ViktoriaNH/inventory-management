const LOGO_TITLE = "Inventory Management";

export const Logo = () => {
  return (
    <div>
      <i className="bi bi-box2-heart-fill me-2 fs-1"></i>
      <span className="d-none d-sm-inline">{LOGO_TITLE}</span>
    </div>
  );
};
