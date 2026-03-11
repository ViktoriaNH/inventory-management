import { MarkdownEditor } from "../components/MarkdownEditor";

export const InventorySettings = ({ data }) => {
  return (
    <section>
      <h1>{data.title}</h1>

      <MarkdownEditor value={data.description} />
    </section>
  );
};
