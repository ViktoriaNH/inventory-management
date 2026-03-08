import { UserTable } from "../components/UserTable";
import { ALERT_MESSAGES } from "../data/alert-messages";
import { MAINPAGE_INVENTORIES_COLUMNS } from "../data/columns";
import { showAlert } from "../helpers/show-alert";
import { useInventories } from "../hooks/useInventories";

export const InventoryTable = ({ title, queryKey, fetch }) => {
  const { data, isPending, isError } = useInventories(queryKey, fetch);

  if (isPending) {
    return showAlert(ALERT_MESSAGES.LOADING_INVENTORIES, "secondary");
  }
  if (isError) {
    return showAlert(ALERT_MESSAGES.FETCH_ERROR);
  }

  if (!data.length || data.length === 0) {
    return <p>{ALERT_MESSAGES.NO_INVENTORIES}</p>;
  }

  return (
    <div>
      <h2 className="h5 mb-3">{title}</h2>
      <UserTable columns={MAINPAGE_INVENTORIES_COLUMNS} data={data} />
    </div>
  );
};
