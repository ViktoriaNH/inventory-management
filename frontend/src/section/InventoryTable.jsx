import { UserTable } from "../components/UserTable";
import { MAINPAGE_INVENTORIES_COLUMNS } from "../data/columns";
import { useInventories } from "../hooks/useInventories";
import { renderQueryState } from "../utils/render-query-state.jsx";

export const InventoryTable = ({ title, queryKey, fetch }) => {
  const { data, isError, isPending } = useInventories(queryKey, fetch);

  const queryState = renderQueryState(data, isError, isPending);

  if (queryState) return queryState;

  return (
    <div className="w-100">
      <h2 className="h2 mb-3 text-center">{title}</h2>
      {queryState}

      {!queryState && (
        <UserTable columns={MAINPAGE_INVENTORIES_COLUMNS} data={data} />
      )}
    </div>
  );
};
