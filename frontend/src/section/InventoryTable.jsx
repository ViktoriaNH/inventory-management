import { UserTable } from "../components/UserTable";
import { ALERT_MESSAGES } from "../data/alert-messages";
import { MAINPAGE_INVENTORIES_COLUMNS } from "../data/columns";
import { showAlert } from "../helpers/show-alert";
import { useInventories } from "../hooks/useInventories";


export const InventoryTable = ({ title, queryKey, fetch }) => {
  const { data, isError, isPending } = useInventories(queryKey, fetch);

    // TODO: плохо, надо что-то с этим сделать

   if (isPending) {
      return showAlert(ALERT_MESSAGES.LOADING_INVENTORIES, "secondary");
    }
    if (isError) {
      return showAlert(ALERT_MESSAGES.FETCH_ERROR);
    }
  
    if (!data?.length) {
      return <p>{ALERT_MESSAGES.NO_INVENTORIES}</p>;
    }

  return (
    <div className="w-100">
      <h2 className="h2 mb-3 text-center">{title}</h2>
      <UserTable columns={MAINPAGE_INVENTORIES_COLUMNS} data={data} />
    </div>
  );
};
