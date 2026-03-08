import { UserTable } from "../components/UserTable";
import { fetchTopInventories } from "../api/inventory-api";
import { MAINPAGE_INVENTORIES_COLUMNS } from "../data/columns";
import { QUERY_KEYS } from "../data/query-keys";
import { showAlert } from "../helpers/show-alert";
import { useApi } from "../hooks/useApi";
import { useInventories } from "../hooks/useInventories";
import { ALERT_MESSAGES } from "../data/alert-messages";

export const TopInventories = () => {
  const api = useApi();

  const { data, isPending, isError } = useInventories(
    QUERY_KEYS.inventories.top,
    () => fetchTopInventories(api),
  );

  if (isPending) {
    return showAlert(ALERT_MESSAGES.LOADING_INVENTORIES, "info");
  }
  if (isError) {
    return showAlert(ALERT_MESSAGES.FETCH_ERROR);
  }

  if (!data.length || data.length === 0) {
    return showAlert(ALERT_MESSAGES.INFO_NO_INVENTORIES, "info");
  }

  return (
    <>
      <UserTable columns={MAINPAGE_INVENTORIES_COLUMNS} inventories={data} />
    </>
  );
};
