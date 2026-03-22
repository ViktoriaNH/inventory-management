import { Button } from "../components/Button";
import { InventoryField } from "../components/InventoryField";
import { MY_PROFILE_LABELS } from "../data/labels";
import { useInventories } from "../hooks/useInventories";
import { renderQueryState } from "../utils/render-query-state";
import { SalesforceModal } from "../components/Modal/SalesforceModal";
import { createSalesforceAccount } from "../api/salesforce-api";
import { useApi } from "../hooks/useApi";
import { useToast } from "../hooks/useToast";
import { ALERT_MESSAGES } from "../data/alert-messages";

export const MyProfile = ({ queryKey, fetch }) => {
  const { data, isPending } = useInventories(queryKey, fetch);
  const api = useApi();
  const { showToast } = useToast();

  const queryState = renderQueryState({ data, isPending });

  const handleCrm = async (formData) => {
    try {
      await createSalesforceAccount(api, formData);

      showToast({
        message: ALERT_MESSAGES.SUCCESS_SALESFORCE,
      });
    } catch (error) {
      console.error(error);
      showToast({
        message: ALERT_MESSAGES.ERROR_SALESFORCE,
      });
    }
  };

  return (
    <section>
      <h2 className="h4 mb-3">My profile</h2>
      {queryState ?
        queryState
      : <div>
          <div>
            <InventoryField label={MY_PROFILE_LABELS.USERNAME}>
              {data.name}
            </InventoryField>
            <InventoryField label={MY_PROFILE_LABELS.EMAIL}>
              {data.email}
            </InventoryField>
          </div>
          <Button
            text="Sync with Salesforce"
            data-bs-toggle="modal"
            data-bs-target="#crmModal"
          />
          <SalesforceModal onSubmit={handleCrm} />
        </div>
      }
    </section>
  );
};
