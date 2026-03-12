import { useState } from "react";
import { fetchMyInventory } from "../api/inventory-api";
import { MYPAGE_INVENTORIES_COLUMNS } from "../data/columns";
import { SECTION_LABELS } from "../data/labels";
import { QUERY_KEYS } from "../data/queries";
import { useApi } from "../hooks/useApi";
import { Header } from "../layouts/Header";
import { InventoryTable } from "../section/InventoryTable";

export const MyPage = () => {
  const api = useApi();
  const [selectedInventories, setSelectedInventories] = useState([]);

  return (
    <>
      <Header />
      <main className="container px-3 px-sm-4">
        <InventoryTable
          title={SECTION_LABELS.MY_INVENTORIES}
          queryKey={QUERY_KEYS.inventories.my}
          fetch={() => fetchMyInventory(api)}
          columns={MYPAGE_INVENTORIES_COLUMNS}
          selectable
          selectedInventories={selectedInventories}
          setSelectedInventories={setSelectedInventories}
        />
      </main>
    </>
  );
};
