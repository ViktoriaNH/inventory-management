import TruncateMarkup from "react-truncate-markup";
import ReactMarkdown from "react-markdown";

export const TruncatedMarkdown = ({ content, lines }) => {
  return (
    <TruncateMarkup lines={lines}>
      <div>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </TruncateMarkup>
  );
};
