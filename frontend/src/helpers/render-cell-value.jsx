import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export const renderCellValue = (row, column, value) => {
  return (
    column.type === "link" ? <Link to={column.getLink(row)}>{value}</Link>
    : column.type === "markdown" ? <ReactMarkdown>{value}</ReactMarkdown>
    : value
  );
};
