import { formatCellValue } from "../../utils/format-cell-value";
import { renderCellValue } from "../../helpers/render-cell-value";

export const TableBody = ({ data = [], columns = [] }) => {
  return (
    <tbody className="text-secondary fw-light">
      {data.map((row) => (
        <tr key={row.id}>
          {columns.map((column) => {
            const value = formatCellValue(row, column.field);

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
