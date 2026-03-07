import { UserTable } from "../components/UserTable";
import { fetchTopInventories } from "../api/inventory-api";
import { useQuery } from "@tanstack/react-query";
import { ALERT_MESSAGES } from "../data/alert-massages";
import { TOP_INVENTORIES_COLUMNS } from "../data/columns";
import { QUERY_KEYS } from "../data/query-keys";
import { showAlert } from "../helpers/show-alert";

export const TopInventories = () => {
  const { isPending, isError, data } = useQuery({
    queryKey: QUERY_KEYS.inventories.top,
    queryFn: fetchTopInventories,
  });

  if (isPending) {
    return showAlert(ALERT_MESSAGES.LOADING_INVENTORIES, "info");
  }
  if (isError) {
    return showAlert(ALERT_MESSAGES.FETCH_ERROR);
  }

  if (!data.length) {
    return showAlert(ALERT_MESSAGES.INFO_NO_INVENTORIES, "info");
  }

  return (
    <>
      <UserTable columns={TOP_INVENTORIES_COLUMNS} inventories={data} />
    </>
  );
};
