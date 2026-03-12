export const TableHeader = ({ columns = [], selectable }) => {
  return (
    <thead>
      <tr>
        {selectable && (
          <th className='text-center align-middle"'>
            <input type="checkbox" className="form-check-input border-dark" />
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
