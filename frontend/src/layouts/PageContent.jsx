import { AdminPanel } from "../pages/AdminPanel";
import { InventoryView } from "../pages/InventoryView";
import { MyProfile } from "../pages/MyProfile";

export const PageContent = ({ mode }) => {
  const pages = {
    guest: <InventoryView />,
    user: <MyProfile />,
    admin: <AdminPanel />,
  };

  return pages[mode];
};
