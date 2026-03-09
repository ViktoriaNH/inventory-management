import { useContext } from "react";
import { ToastContext } from "../components/Toast/ToastContext";


export const useToast = () => {
  const context = useContext(ToastContext);

  return context;
};
