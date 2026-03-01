export const CenteringWrapper = ({ children }) => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      {children}
    </div>
  );
};
