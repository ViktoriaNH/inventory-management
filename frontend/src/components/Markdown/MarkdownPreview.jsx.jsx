import removeMarkdown from "remove-markdown";

export const MarkdownPreview = ({ content, maxLength = 120 }) => {
  const text = removeMarkdown(content);

  const preview =
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  return (
    <span
      className="text-muted"
      style={{ cursor: "default" }}
    >
      {preview}
    </span>
  );
};