export const TableHeader = ({ columns = [] }) => {
  return (
    <thead className="bg-transparent">
      <tr className="border-primary border-2">
        {columns.map((column) => (
          <th
            key={column.field}
            scope="col"
            className="fw-bold bg-transparent border-primary border-2 text-muted"
          >
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};
