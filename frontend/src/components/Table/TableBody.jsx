import { renderCellValue } from "../../helpers/render-cell-value";
import { formatNestedValue } from "../../utils/format-nested-value";
import { Checkbox } from "../Checkbox";

export const TableBody = ({
  data = [],
  columns = [],
  selectable,
  // selectedInventories = [],
  // setSelectedInventories,
}) => {


  return (
    <tbody className="text-secondary fw-light">
      {data.map((row) => (
        <tr key={row.id}>
          {selectable && (
            <td className="text-center align-middle">
             <Checkbox />
            </td>
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
