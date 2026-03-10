import { Link } from "react-router-dom";
import {
  MarkdownPreview,
} from "../components/MarkdownPreview.jsx";

export const renderCellValue = (row, column, value) => {
  return (
    column.type === "link" ?
      <Link className="link-dark text-decoration-none" to={column.getLink(row)}>
        {value}
      </Link>
    : column.type === "markdown" ? <MarkdownPreview content={value} />
    : value
  );
};
