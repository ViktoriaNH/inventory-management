import { Checkbox } from "../Checkbox";

export const TableHeader = ({
  columns = [],
  selectable,
  onChange,
  isChecked,
}) => {
  return (
    <thead>
      <tr>
        {selectable && (
          <th className="align-middle text-center">
            <Checkbox isChecked={isChecked} onChange={onChange} />
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
