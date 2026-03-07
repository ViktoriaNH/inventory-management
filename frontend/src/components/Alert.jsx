export const Alert = ({ type = "danger", children }) => {
  return (
    <div className={`alert alert-${type}`} role="alert">
      {children}
    </div>
  );
};
