import { useState } from "react";
import { ToastContext } from "./ToastContext";
import { ToastContainer } from "./ToastContainer";
import { Toast } from "./Toast";

export const ToastProvider = ({ children }) => {
  const [message, setMessage] = useState(null);

  const showToast = (text) => setMessage(text);
  const clearToast = () => setMessage(null);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      <ToastContainer>
        {message && <Toast message={message} onClose={clearToast} />}
      </ToastContainer>
    </ToastContext.Provider>
  );
}