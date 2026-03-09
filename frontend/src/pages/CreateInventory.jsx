import { CreateInventoryForm } from "../components/CreateInventoryForm";
import { Header } from "../layouts/Header";

export const CreateInventory = () => {
  return (
    <>
      <Header />
      <main className="container p-1 pb-5">
        <CreateInventoryForm />
      </main>
    </>
  );
};
