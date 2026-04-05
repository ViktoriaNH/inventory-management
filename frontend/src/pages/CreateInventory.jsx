import { CreateInventoryForm } from "../components/Form/CreateInventoryForm";
import { MESSAGES } from "../data/messages";
import { showAlert } from "../helpers/show-alert";
import { useClerkAuthStatus } from "../hooks/useClerkAuthStatus";
import { PageWrapper } from "../layouts/PageWrapper";

export const CreateInventory = () => {
  const { isAuth } = useClerkAuthStatus();
  const message = showAlert(MESSAGES.COMMON.AUTH_REQUIRED, "light")

  return (
    <PageWrapper>
      {isAuth ?
        <CreateInventoryForm />
      : <p>{message}</p>}
    </PageWrapper>
  );
};
