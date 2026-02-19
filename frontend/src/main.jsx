import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App.jsx";

const PUBLISH_KEY = import.meta.env.VITE_CLERK_PUBLISH_KEY;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISH_KEY}>
      <App />
    </ClerkProvider>
  </StrictMode>,
);
