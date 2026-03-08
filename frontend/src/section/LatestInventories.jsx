import { fetchLatestInventories } from "../api/inventory-api";
import { UserTable } from "../components/UserTable";
import { MAINPAGE_INVENTORIES_COLUMNS } from "../data/columns";
import { QUERY_KEYS } from "../data/query-keys";
import { showAlert } from "../helpers/show-alert";
import { useApi } from "../hooks/useApi";
import { useInventories } from "../hooks/useInventories";
import { ALERT_MESSAGES } from "../data/alert-messages";

export const LatestInventories = () => {
  const api = useApi();

  const { data, isPending, isError } = useInventories(
    QUERY_KEYS.inventories.latest,
    () => fetchLatestInventories(api),
  );

  if (isPending) {
    return showAlert(ALERT_MESSAGES.LOADING_INVENTORIES, "secondary");
  }
  if (isError) {
    return showAlert(ALERT_MESSAGES.FETCH_ERROR);
  }

  if (!data.length || data.length === 0) {
    return showAlert(ALERT_MESSAGES.INFO_NO_INVENTORIES, "light");
  }

  return (
    <div>
      <h1>Latest inventories</h1>
      <UserTable columns={MAINPAGE_INVENTORIES_COLUMNS} data={data} />
    </div>
  );
};
