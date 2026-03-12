import { UserTable } from "../components/Table/UserTable.jsx";
import { useInventories } from "../hooks/useInventories.js";
import { useSelectInventory } from "../hooks/useSelectInventory.js";
import { renderQueryState } from "../utils/render-query-state.jsx";

export const InventoryTable = ({
  title,
  queryKey,
  fetch,
  columns,
  selectable = false,
}) => {
  const { data, isError, isPending } = useInventories(queryKey, fetch);

  const inventoriesIds = data?.map((inventory) => inventory.id) || [];

  const {
    allInventoriesSelected,
    toggleInventory,
    toggleAllInventories,
    selectedInventories,
  } = useSelectInventory(inventoriesIds);

  const queryState = renderQueryState({ data, isPending, isError });

  return (
    <div className="w-100">
      <h2 className="h2 mb-3 text-center">{title}</h2>

      {queryState ?
        queryState
      : <UserTable
          selectable={selectable}
          columns={columns}
          data={data}
          allInventoriesSelected={allInventoriesSelected}
          toggleInventory={toggleInventory}
          toggleAllInventories={toggleAllInventories}
          selectedInventories={selectedInventories}
        />
      }
    </div>
  );
};
// export const InventoryTable = ({ title, queryKey, fetch, columns, selectable = false}) => {
//   const { data, isError, isPending } = useInventories(queryKey, fetch);

//   const queryState = renderQueryState({ data, isPending, isError });

//   return (
//     <div className="w-100">
//       <h2 className="h2 mb-3 text-center">{title}</h2>

//       {queryState ? queryState : <UserTable selectable={selectable} columns={columns} data={data} />}
//     </div>
//   );
// };
