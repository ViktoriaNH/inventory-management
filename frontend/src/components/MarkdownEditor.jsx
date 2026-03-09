import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

export const MarkdownEditor = ({ value, onChange }) => {
  return (
    <SimpleMDE
      value={value}
      onChange={onChange}
    />
  );
};