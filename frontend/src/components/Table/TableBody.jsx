import { formatCellValue } from "../../utils/format-cell-value";
import ReactMarkdown from "react-markdown";

export const TableBody = ({ data = [], columns = [] }) => {
  return (
    <tbody className="text-secondary fw-light">
      {data.map((row) => (
        <tr key={row.id}>
          {columns.map((column) => {
            const value = formatCellValue(row, column.field);

            return (
              <td className="align-middle" key={column.field}>
                {column.type === "markdown" ?
                  <ReactMarkdown>{value}</ReactMarkdown>
                : value}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};
