export const TableHeader = ({ columns = [], selectable }) => {
  return (
    <thead>
      <tr>
        {selectable && (
          <th>
            <input type="checkbox" className="form-check-input" />
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
