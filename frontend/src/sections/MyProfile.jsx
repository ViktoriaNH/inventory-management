import { InventoryField } from "../components/InventoryField";
import { MY_PROFILE_LABELS } from "../data/labels";
import { useInventories } from "../hooks/useInventories";
import { renderQueryState } from "../utils/render-query-state";

export const MyProfile = ({ queryKey, fetch }) => {
  const { data, isPending } = useInventories(queryKey, fetch);

  const queryState = renderQueryState({ data, isPending });

  return (
    <section>
      <h2 className="h4 mb-3 text-center">My profile</h2>
      {queryState ?
        queryState
      : <div>
          <InventoryField label={MY_PROFILE_LABELS.USERNAME}>
            {data.name}
          </InventoryField>
          <InventoryField label={MY_PROFILE_LABELS.NAME}>
            {data.email}
          </InventoryField>
        </div>
      }
    </section>
  );
};
