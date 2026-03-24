import { CreateInventoryForm } from "../components/Form/CreateInventoryForm";
import { ALERT_MESSAGES } from "../data/alert-messages";
import { useClerkAuthStatus } from "../hooks/useClerkAuthStatus";
import { Header } from "../layouts/Header";
import { PageWrapper } from "../layouts/PageWrapper";

export const CreateInventory = () => {
  const { isAuth } = useClerkAuthStatus();

  if (!isAuth) return null;

  return (
    <PageWrapper>
      {isAuth ?
        <CreateInventoryForm />
      : <p>{ALERT_MESSAGES.CANT_CREATE_INVENTORY}</p>}
    </PageWrapper>
  );
};
