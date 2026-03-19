import { useNavigate } from "react-router-dom";
import { UserTable } from "../components/Table/UserTable.jsx";
import { useInventories } from "../hooks/useInventories.js";
import { useSelectInventory } from "../hooks/useSelectInventory.js";
import { renderQueryState } from "../utils/render-query-state.jsx";
import { PATHS } from "../data/paths.js";
import { useDeleteInventories } from "../hooks/useDeleteInventories.js";
import { deleteSelectedInventories } from "../helpers/delete-selected-inventories.js";

export const InventoryTable = ({
  title,
  queryKey,
  fetch,
  columns,
  selectable = false,
  toolbar,
}) => {
  const navigate = useNavigate();

  const { data, isError, isPending } = useInventories(queryKey, fetch);

  const inventoriesIds = data?.map((inventory) => inventory.id) || [];

  const {
    allInventoriesSelected,
    toggleInventory,
    toggleAllInventories,
    selectedInventories,
    clearSelectedInventories,
  } = useSelectInventory(inventoriesIds);

  const { mutateDeleteInventories, isPending: isDeleting } =
    useDeleteInventories();

  const addInventory = () => {
    navigate(PATHS.CREATE_INVENTORY);
  };

  const ACTIONS = {
    add: addInventory,
    delete: () =>
      deleteSelectedInventories(
        selectedInventories,
        mutateDeleteInventories,
        clearSelectedInventories,
      ),
  };

  const queryState = renderQueryState({ data, isPending, isError });

  return (
    <div className="w-100">
      <h2 className="h4 mb-3 text-center">{title}</h2>

      {toolbar &&
        toolbar({
          onAction: (actionId) => ACTIONS[actionId](),
          isDeleting,
        })}

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
          isDeleting={isDeleting}
        />
      }
    </div>
  );
};
