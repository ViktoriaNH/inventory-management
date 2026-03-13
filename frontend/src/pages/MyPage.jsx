import { fetchMyInventory } from "../api/inventory-api";
import { Toolbar } from "../components/Toolbar";
import { MYPAGE_INVENTORIES_COLUMNS } from "../data/columns";
import { SECTION_LABELS } from "../data/labels";
import { QUERY_KEYS } from "../data/queries";
import { useApi } from "../hooks/useApi";
import { Header } from "../layouts/Header";
import { InventoryTable } from "../sections/InventoryTable";

export const MyPage = () => {
  const api = useApi();

  return (
    <>
      <Header />
      <main className="container px-3 px-sm-4">
        <InventoryTable
          title={SECTION_LABELS.MY_INVENTORIES}
          toolbar={<Toolbar />}
          queryKey={QUERY_KEYS.inventories.my}
          fetch={() => fetchMyInventory(api)}
          columns={MYPAGE_INVENTORIES_COLUMNS}
          selectable
        />
      </main>
    </>
  );
};
