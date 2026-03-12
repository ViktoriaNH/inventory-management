import { Checkbox } from "../Checkbox";

export const TableHeader = ({
  columns = [],
  selectable,
  isChecked,
  onChange
}) => {



  return (
    <thead>
      <tr>
        {selectable && (
          <th className='align-middle'>
            <Checkbox  isChecked={isChecked} onChange={onChange}/>
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
