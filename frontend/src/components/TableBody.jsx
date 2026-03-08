import { formatCellValue } from "../utils/format-cell-value";

export const TableBody = ({ data = [], columns = [] }) => {
  return (
    <tbody className="text-secondary fw-light">
      {data.map((row) => (
        <tr key={row.id} className="border-primary border-2">
          {columns.map((column) => {
            const value = formatCellValue(row, column.field);

            return (
              <td key={column.field} className="border-primary border-2">
                {value ?? <span>No data</span>}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};
