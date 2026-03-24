import { CreateInventoryForm } from "../components/Form/CreateInventoryForm";
import { useClerkAuthStatus } from "../hooks/useClerkAuthStatus";
import { Header } from "../layouts/Header";
import { PageWrapper } from "../layouts/PageWrapper";

export const CreateInventory = () => {
  const { isAuth } = useClerkAuthStatus();

  if (!isAuth) return null;

  return (
    <PageWrapper>
      <CreateInventoryForm />
    </PageWrapper>
  );
};
