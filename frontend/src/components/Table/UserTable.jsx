import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";

export const UserTable = ({
  data = [],
  columns = [],
  selectable,
  allInventoriesSelected,
  toggleInventory,
  toggleAllInventories,
  selectedInventories = [],
  isDeleting,
}) => {
  return (
    <div className="table-responsive mt-1">
      <table className="table table-hover table-bordered mb-0">
        <TableHeader
          columns={columns}
          selectable={selectable}
          isChecked={allInventoriesSelected}
          onChange={(e) => toggleAllInventories(e.target.checked)}
          disabled={isDeleting}
        />
        <TableBody
          data={data}
          columns={columns}
          selectable={selectable}
          selectedInventories={selectedInventories}
          onChange={toggleInventory}
          disabled={isDeleting}
        />
      </table>
    </div>
  );
};
