import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { TruncatedMarkdown } from "../components/TruncateMarkdown";

export const renderCellValue = (row, column, value) => {
  return (
    column.type === "link" ?
      <Link className="link-dark text-decoration-none" to={column.getLink(row)}>
        {value}
      </Link>
    : column.type === "markdown" ?
      <div className="text-truncate">
        <div style={{ minWidth: "240px" }}>
          <TruncatedMarkdown content={value} lines={2} />
        </div>
      </div>
    : value
  );
};
