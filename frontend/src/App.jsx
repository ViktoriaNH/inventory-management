import { SignIn, SignUp } from "@clerk/clerk-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CenteringWrapper } from "./layouts/CenteringWrapper";
import { useSyncUser } from "./hooks/useUserSync";
import { CreateInventory } from "./pages/CreateInventory";
import { MainPage } from "./pages/MainPage";
import { PATHS } from "./data/paths";
import { MyPage } from "./pages/MyPage";

export const App = () => {
  useSyncUser();

  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.MAIN_PAGE} element={<MainPage />} />
        <Route
          path={PATHS.LOGIN}
          element={
            <CenteringWrapper>
              <SignIn />
            </CenteringWrapper>
          }
        />
        <Route
          path={PATHS.REGISTER}
          element={
            <CenteringWrapper>
              <SignUp />
            </CenteringWrapper>
          }
        />
        <Route path={PATHS.CREATE_INVENTORY} element={<CreateInventory />} />
        <Route path={PATHS.MY_PAGE} element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};
