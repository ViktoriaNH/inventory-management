export const Alert = ({ type = "danger", children }) => {
  return (
    <div className={`alert alert-${type} text-center`} role="alert">
      {children}
    </div>
  );
};
