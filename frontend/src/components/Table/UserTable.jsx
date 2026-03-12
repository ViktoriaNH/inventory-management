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
}) => {
  return (
    <div className="table-responsive mt-1">
      <table className="table table-hover table-bordered border-dark mb-0">
        <TableHeader
          columns={columns}
          selectable={selectable}
          isChecked={allInventoriesSelected}
          onChange={toggleAllInventories}
        />
        <TableBody
          data={data}
          columns={columns}
          selectable={selectable}
          selectedInventories={selectedInventories}
          onChange={toggleInventory}
        />
      </table>
    </div>
  );
};
