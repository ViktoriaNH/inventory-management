import { renderCellValue } from "../../helpers/render-cell-value";
import { formatNestedValue } from "../../utils/format-nested-value";

export const TableBody = ({ data = [], columns = [] }) => {
  return (
    <tbody className="text-secondary fw-light">
      {data.map((row) => (
        <tr key={row.id}>
          {columns.map((column) => {
            const value = formatNestedValue(row, column.field);

            return (
              <td
                className="align-middle"
                style={{ maxWidth: 0 }}
                key={column.field}
              >
                {renderCellValue(row, column, value)}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};
