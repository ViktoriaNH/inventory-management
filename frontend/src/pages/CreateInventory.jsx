import { CreateInventoryForm } from "../components/Form/CreateInventoryForm";
import { Header } from "../layouts/Header";

export const CreateInventory = () => {
  return (
    <>
      <Header />
      <main className="container px-3 px-sm-4 pb-5">
        <CreateInventoryForm />
      </main>
    </>
  );
};
