import ReactMarkdown from "react-markdown";
import { INVENTORY_LABELS } from "../data/labels";
import { formatDate } from "../utils/format-date";
import { InventoryField } from "../components/InventoryField";

export const InventorySettings = ({ data }) => {
  const status = data.isPublic ? "public inventory" : "private inventory";

  const date = formatDate(data.createdAt);

  return (
    <section>
      <header>
        <h1>{data.title}</h1>
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
