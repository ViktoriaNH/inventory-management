import { Checkbox } from "../Checkbox";

export const TableHeader = ({
  columns = [],
  selectable,
  // data = [],
  // selectedInventories = [],
  // setSelectedInventories,
}) => {


  return (
    <thead>
      <tr>
        {selectable && (
          <th className='text-center align-middle"'>
            <Checkbox />
          </th>
        )}
        {columns.map((column) => (
          <th key={column.field} scope="col" className="fw-bold text-muted">
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};
