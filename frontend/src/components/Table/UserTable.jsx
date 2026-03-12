import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";

export const UserTable = ({
  data = [],
  columns = [],
  selectable,
  selectedInventories = [],
  setSelectedInventories,
}) => {
  return (
    <div className="table-responsive mt-1">
      <table className="table table-hover table-bordered border-dark mb-0">
        <TableHeader
        data={data}
          columns={columns}
          selectable={selectable}
          selectedInventories={selectedInventories}
          setSelectedInventories={setSelectedInventories}
        />
        <TableBody
          data={data}
          columns={columns}
          selectable={selectable}
          selectedInventories={selectedInventories}
          setSelectedInventories={setSelectedInventories}
        />
      </table>
    </div>
  );
};
