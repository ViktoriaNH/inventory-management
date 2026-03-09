export const ToastContainer = ({ children }) => {
  return (
    <div className="toast-container position-fixed top-0 start-50 translate-middle-x p-3">
      {children}
    </div>
  );
};