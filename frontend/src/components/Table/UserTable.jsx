import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";

export const UserTable = ({
  data = [],
  columns = [],
  selectable,
  selectedInventories = [],
  setSelectedInventories,
}) => {
    const total = data.length;
  const allSelected = total > 0 && selectedInventories.length === total;


  const handleAllInventories = (e) => {
    if (e.target.checked) {
      const allInventoryIds = data.map((inventory) => inventory.id);
      setSelectedInventories(allInventoryIds);
    } else {
      setSelectedInventories([]);
    }
  };

    const handleInventory = (id) => {
    if (selectedInventories.includes(id)) {
      setSelectedInventories(selectedInventories.filter((uid) => uid !== id));
    } else {
      setSelectedInventories([...selectedInventories, id]);
    }
  };

  return (
    <div className="table-responsive mt-1">
      <table className="table table-hover table-bordered border-dark mb-0">
        <TableHeader
          data={data}
          columns={columns}
          selectable={selectable}
          selectedInventories={selectedInventories}
          setSelectedInventories={setSelectedInventories}
          isChecked={allSelected} onChange={handleAllInventories}

        />
        <TableBody
          data={data}
          columns={columns}
          selectable={selectable}
          selectedInventories={selectedInventories}
          setSelectedInventories={setSelectedInventories}
            onChange={handleInventory}
        />
      </table>
    </div>
  );
};
