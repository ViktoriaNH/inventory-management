import { CreateInventoryForm } from "../components/Form/CreateInventoryForm";
import { ALERT_MESSAGES } from "../data/alert-messages";
import { useClerkAuthStatus } from "../hooks/useClerkAuthStatus";
import { PageWrapper } from "../layouts/PageWrapper";

export const CreateInventory = () => {
  const { isAuth } = useClerkAuthStatus();

  return (
    <PageWrapper>
      {isAuth ?
        <CreateInventoryForm />
      : <p>{ALERT_MESSAGES.CANT_CREATE_INVENTORY}</p>}
    </PageWrapper>
  );
};
