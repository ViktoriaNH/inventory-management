import { UserTable } from "../components/UserTable";
import { fetchTopInventories } from "../api/inventory-api";
import { TOP_INVENTORIES_COLUMNS } from "../data/columns";
import { QUERY_KEYS } from "../data/query-keys";
import { showAlert } from "../helpers/show-alert";
import { useApi } from "../hooks/useApi";
import { useInventories } from "../hooks/useInventories";

export const TopInventories = () => {
  const api = useApi();

  const data = useInventories(QUERY_KEYS.inventories.top, () =>
    fetchTopInventories(api),
  );

  return (
    <>
      <UserTable columns={TOP_INVENTORIES_COLUMNS} inventories={data} />
    </>
  );
};
