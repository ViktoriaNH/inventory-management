import { renderCellValue } from "../../helpers/render-cell-value";
import { formatNestedValue } from "../../utils/format-nested-value";

export const TableBody = ({ data = [], columns = [], selectable }) => {
  return (
    <tbody className="text-secondary fw-light">
      {data.map((row) => (
        <tr key={row.id}>
          {selectable && (
            <tr>
              <input type="checkbox" className="form-check-input" />
            </tr>
          )}
          {columns.map((column) => {
            const value = formatNestedValue(row, column.field);

            return (
              <td className="align-middle" key={column.field}>
                {renderCellValue(row, column, value)}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};
