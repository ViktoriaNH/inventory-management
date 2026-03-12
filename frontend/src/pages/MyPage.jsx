import { fetchMyInventory } from "../api/inventory-api";
import { MYPAGE_INVENTORIES_COLUMNS } from "../data/columns";
import { SECTION_LABELS } from "../data/labels";
import { QUERY_KEYS } from "../data/queries";
import { useApi } from "../hooks/useApi";
import { Header } from "../layouts/Header";
import { InventoryTable } from "../section/InventoryTable";
import { useSelectInventory } from "../hooks/useSelectInventory";
import { useInventories } from "../hooks/useInventories";

export const MyPage = () => {
  const api = useApi();
  
  const { data, isError, isPending } = useInventories(
    QUERY_KEYS.inventories.my,
    () => fetchMyInventory(api),
  );

  const inventoriesIds = data.map((inventory) => inventory.id);

  const {
    allInventoriesSelected,
    toggleInventory,
    toggleAllInventories,
    selectedInventories,
  } = useSelectInventory(inventoriesIds);

  return (
    <>
      <Header />
      <main className="container px-3 px-sm-4">
        <InventoryTable
          title={SECTION_LABELS.MY_INVENTORIES}
          data={data}
          isPending={isPending}
          isError={isError}
          columns={MYPAGE_INVENTORIES_COLUMNS}
          allInventoriesSelected={allInventoriesSelected}
          toggleInventory={toggleInventory}
          toggleAllInventories={toggleAllInventories}
          selectedInventories={selectedInventories}
        />
      </main>
    </>
  );
};
