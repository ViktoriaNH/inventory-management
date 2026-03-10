import { fetchMyInventory } from "../api/inventory-api";
import { MYPAGE_INVENTORIES_COLUMNS } from "../data/columns";
import { QUERY_KEYS } from "../data/queries";
import { SECTION_TITLE } from "../data/section-title";
import { useApi } from "../hooks/useApi";
import { Header } from "../layouts/Header";
import { InventoryTable } from "../section/InventoryTable";

export const MyPage = () => {
  const api = useApi();

  return (
    <>
      <Header />
      <main className="container p-1">
        <InventoryTable
          title={SECTION_TITLE.MY_INVENTORIES}
          queryKey={QUERY_KEYS.inventories.my}
          fetch={() => fetchMyInventory(api)}
          columns={MYPAGE_INVENTORIES_COLUMNS}
        />
      </main>
    </>
  );
};
