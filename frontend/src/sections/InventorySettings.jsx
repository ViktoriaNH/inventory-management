import ReactMarkdown from "react-markdown";
import { INVENTORY_LABELS } from "../data/labels";
import { formatDate } from "../utils/format-date";
import { InventoryField } from "../components/InventoryField";

export const InventorySettings = ({ data }) => {
  const status = data.isPublic ? "Public inventory" : "Private inventory";

  const date = formatDate(data.createdAt);

  return (
    <section>
      <header className="d-flex flex-column justify-content-sm-center mb-4">
        <h3 className="mb-0">{data.title}</h3>
        <span>{status}</span>
      </header>

      <InventoryField label={INVENTORY_LABELS.CATEGORY}>
        {data.category.name}
      </InventoryField>

      <InventoryField label={INVENTORY_LABELS.CREATED_AT}>
        {date}
      </InventoryField>

      <InventoryField label={INVENTORY_LABELS.CREATOR}>
        {data.creator.name}
      </InventoryField>

      <InventoryField label={INVENTORY_LABELS.DESCRIPTION}>
        <ReactMarkdown>{data.description}</ReactMarkdown>
      </InventoryField>
    </section>
  );
};
