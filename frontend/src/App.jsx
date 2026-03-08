import { SignIn, SignUp } from "@clerk/clerk-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CenteringWrapper } from "./layouts/CenteringWrapper";
import { useSyncUser } from "./hooks/useUserSync";
import { CreateInventory } from "./pages/CreateInventory";
import { MainPage } from "./pages/MainPage";


export const App = () => {
  useSyncUser();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
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
        <Route path="/inventory/create" element={<CreateInventory />} />
      </Routes>
    </BrowserRouter>
  );
};
