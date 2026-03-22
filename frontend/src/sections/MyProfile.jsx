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
import { useState } from "react";

export const MyProfile = ({ queryKey, fetch }) => {
  const { data, isPending } = useInventories(queryKey, fetch);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { showToast } = useToast();
  const api = useApi();

  const queryState = renderQueryState({ data, isPending });

  const handleCrm = async (formData) => {
    try {
      await createSalesforceAccount(api, formData);

      showToast(ALERT_MESSAGES.SUCCESS_SALESFORCE);
    } catch (error) {
      console.error(error);
      showToast(ALERT_MESSAGES.ERROR_SALESFORCE);
      throw error;
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
            onClick={() => setIsModalOpen(true)}
          />

          {isModalOpen && (
            <SalesforceModal
              isOpen={isModalOpen}
              onSubmit={handleCrm}
              onClose={() => setIsModalOpen(false)}
            />
          )}
        </div>
      }
    </section>
  );
};
