import { SignIn, SignUp } from "@clerk/clerk-react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CenteringWrapper } from "./components/CenteringWrapper";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/sign-in" />} />
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
        {/* <Route path="/dashboard" element={<Dasboard />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
