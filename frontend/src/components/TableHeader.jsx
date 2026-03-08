export const TableHeader = ({ columns = [] }) => {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            key={column.field}
            scope="col"
            className="fw-bold text-muted"
          >
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};
