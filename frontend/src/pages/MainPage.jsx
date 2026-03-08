import {
  fetchLatestInventories,
  fetchTopInventories,
} from "../api/inventory-api";
import { QUERY_KEYS } from "../data/query-keys";
import { SECTION_TITLE } from "../data/section-title";
import { useApi } from "../hooks/useApi";
import { Header } from "../layouts/Header";
import { InventoryTable } from "../section/InventoryTable";

export const MainPage = () => {
  const api = useApi();

  return (
    <>
      <Header />
      <main className="container p-1 d-flex flex-column flex-md-row justify-content-center gap-5">
        <InventoryTable
          title={SECTION_TITLE.TOP_INVENTORIES}
          queryKey={QUERY_KEYS.inventories.top}
          fetch={() => fetchTopInventories(api)}
        />

        <InventoryTable
          title={SECTION_TITLE.LATEST_INVENTORIES}
          queryKey={QUERY_KEYS.inventories.latest}
          fetch={() => fetchLatestInventories(api)}
        />
      </main>
    </>
  );
};
