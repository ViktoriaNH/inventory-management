import { UserTable } from "../components/Table/UserTable.jsx";
import { useInventories } from "../hooks/useInventories";
import { renderQueryState } from "../utils/render-query-state.jsx";

export const InventoryTable = ({ title, queryKey, fetch, columns, selectable = false}) => {
  const { data, isError, isPending } = useInventories(queryKey, fetch);

  const queryState = renderQueryState({ data, isPending, isError });

  return (
    <div className="w-100">
      <h2 className="h2 mb-3 text-center">{title}</h2>

      {queryState ? queryState : <UserTable selectable={selectable} columns={columns} data={data} />}
    </div>
  );
};
