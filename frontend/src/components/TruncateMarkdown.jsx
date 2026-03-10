import ReactMarkdown from "react-markdown";

export const TruncatedMarkdown = ({ content, lines = 3 }) => {
  return (
    <div
      style={{
        display: "-webkit-box",
        WebkitLineClamp: lines,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      }}
    >
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};
