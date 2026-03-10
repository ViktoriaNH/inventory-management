import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export const renderCellValue = (row, column, value) => {
  return (
    column.type === "link" ?
      <Link className="link-dark text-decoration-none" to={column.getLink(row)}>
        {value}
      </Link>
    : column.type === "markdown" ?
      <div className="text-truncate">
        <ReactMarkdown>{value}</ReactMarkdown>
      </div>
    : value
  );
};
