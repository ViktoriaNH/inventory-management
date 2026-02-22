import { SignIn, SignUp } from "@clerk/clerk-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CenteringWrapper } from "./components/CenteringWrapper";
import { Dashboard } from "./pages/Dashboard";
import { useSyncUser } from "./hooks/useUserSync";

export const App = () => {
  useSyncUser();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/sign-in"
          element={
            <CenteringWrapper>
              <SignIn />
            </CenteringWrapper>
          }
        />
        <Route
          path="/sign-up"
          element={
            <CenteringWrapper>
              <SignUp />
            </CenteringWrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
