import { SignIn, SignUp } from "@clerk/clerk-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSyncUser } from "./hooks/useUserSync";
import { CreateInventory } from "./pages/CreateInventory";
import { MainPage } from "./pages/MainPage";
import { PATHS } from "./data/paths";
import { MyPage } from "./pages/MyPage";
import { InventoryPage } from "./pages/InventoryPage";

export const App = () => {
  useSyncUser();
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.MAIN_PAGE} element={<MainPage />} />
        <Route
          path={PATHS.LOGIN}
          element={
            <div className="d-flex justify-content-center align-items-center min-vh-100">
              <SignIn />
            </div>
          }
        />
        <Route
          path={PATHS.REGISTER}
          element={
            <div className="d-flex justify-content-center align-items-center min-vh-100">
              <SignUp />
            </div>
          }
        />
        <Route path={PATHS.CREATE_INVENTORY} element={<CreateInventory />} />
        <Route path={PATHS.MY_PAGE} element={<MyPage />} />
        <Route path={PATHS.INVENTORY_PAGE} element={<InventoryPage />} />
      </Routes>
    </BrowserRouter>
  );
};
