import { UserTable } from "../components/UserTable";
import { fetchTopInventories } from "../api/inventory-api";
import { useQuery } from "@tanstack/react-query";
import { Alert } from "../components/Alert";
import { ALERT_MESSAGES } from "../data/alert-massages";
import { TOP_INVENTORIES_COLUMNS } from "../data/columns";

export const TopInventories = () => {
  const { isPending, isError, data } = useQuery({
    queryKey: ["inventories", "top"],
    queryFn: fetchTopInventories,
  });

  if (isPending) {
    return <span>Loading inventories</span>;
  }
  if (isError) {
    return <Alert type="danger">{ALERT_MESSAGES.FETCH_ERROR}</Alert>;
  }

  if (!data.length) {
    return <Alert type="info">{ALERT_MESSAGES.INFO_NO_INVENTORIES}</Alert>;
  }

  return (
    <>
      <UserTable columns={TOP_INVENTORIES_COLUMNS} inventories={data} />
    </>
  );
};
