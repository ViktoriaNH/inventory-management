import ReactMarkdown from "react-markdown";

export const TruncatedMarkdown = ({ content, lines = 3 }) => {
  return (
    <div
      style={{
        display: "-webkit-box",
        WebkitLineClamp: lines,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        fontSize: "0.9rem",
        lineHeight: "1.4",
      }}
      title={content}
    >
      <ReactMarkdown
        components={{
          h1: ({ children }) => <span>{children} </span>,
          h2: ({ children }) => <span>{children} </span>,
          h3: ({ children }) => <span>{children} </span>,
          p: ({ children }) => <span>{children} </span>,
          li: ({ children }) => <span>{children} </span>,
          ul: ({ children }) => <span>{children}</span>,
          ol: ({ children }) => <span>{children}</span>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
