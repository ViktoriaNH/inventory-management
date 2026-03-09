import { useEffect } from "react";

export const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className="toast show align-items-center text-bg-dark"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="toast-body">{message}</div>
    </div>
  );
};
