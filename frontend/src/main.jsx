import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import { App } from "./App.jsx";
import { queryClient } from "./config/queryClient.js";
import { QueryClientProvider } from "@tanstack/react-query";
import { ToastProvider } from "./components/Toast/ToastProvider.jsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <ToastProvider>
          <App />
        </ToastProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </ClerkProvider>
    </StrictMode>
  </QueryClientProvider>,
);
