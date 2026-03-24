import { CreateInventoryForm } from "../components/Form/CreateInventoryForm";
import { ALERT_MESSAGES } from "../data/alert-messages";
import { showAlert } from "../helpers/show-alert";
import { useClerkAuthStatus } from "../hooks/useClerkAuthStatus";
import { PageWrapper } from "../layouts/PageWrapper";

export const CreateInventory = () => {
  const { isAuth } = useClerkAuthStatus();
  const message = showAlert(ALERT_MESSAGES.NO_DATA, "light")

  return (
    <PageWrapper>
      {isAuth ?
        <CreateInventoryForm />
      : <p>{message}</p>}
    </PageWrapper>
  );
};
