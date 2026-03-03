export const TableBody = ({ data = [], columns = []}) => {
  return (
    <tbody className="text-secondary fw-light">
      {data.map((row) => (
        <tr key={row.id} className="border-primary border-2">
          {columns.map((column) => (
            <td key={column.field} className="border-primary border-2">
              {row[column.field] ?? <span>No data</span>}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};