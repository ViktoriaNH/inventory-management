import {
  fetchLatestInventories,
  fetchTopInventories,
} from "../api/inventory-api";
import { MAINPAGE_INVENTORIES_COLUMNS } from "../data/columns";
import { QUERY_KEYS } from "../data/queries";
import { SECTION_LABELS } from "../data/labels";
import { useApi } from "../hooks/useApi";
import { Header } from "../layouts/Header";
import { InventoryTable } from "../section/InventoryTable";

export const MainPage = () => {
  const api = useApi();

  return (
    <>
      <Header />
      <main className="container d-flex flex-column flex-xl-row justify-content-center gap-5">
        <InventoryTable
          title={SECTION_LABELS.TOP_INVENTORIES}
          queryKey={QUERY_KEYS.inventories.top}
          fetch={() => fetchTopInventories(api)}
          columns={MAINPAGE_INVENTORIES_COLUMNS}
        />
        <InventoryTable
          title={SECTION_LABELS.LATEST_INVENTORIES}
          queryKey={QUERY_KEYS.inventories.latest}
          fetch={() => fetchLatestInventories(api)}
          columns={MAINPAGE_INVENTORIES_COLUMNS}
        />
      </main>
    </>
  );
};
