import { Input } from "./Input";
import { FormWrapper } from "../layouts/FormWrapper";
import { Button } from "./Button";
import { ALERT_MESSAGES } from "../data/alert-messages";
import { Checkbox } from "./Checkbox";
import { Select } from "./Select";
import { useCategories } from "../hooks/useCategories";
import { useCreateInventory } from "../hooks/useCreateInventory";
import { showAlert } from "../helpers/show-alert";

export const CreateInventoryForm = () => {
  const { data = [] } = useCategories();
  const { createInventory, isError } = useCreateInventory();
  
  return (
    <section className="container p-1">
      <h1 className="text-center">Create inventory</h1>

      {isError && showAlert(ALERT_MESSAGES.FETCH_ERROR)}

      <FormWrapper onSubmit={createInventory}>
        <div className="d-flex flex-column gap-2">
          <Input name="title" label="Title" required />
          <Input
            name="description"
            label="Description"
            as="textarea"
            required
          />

          <Select
            name="categoryId"
            label="Select category"
            options={data}
            required
          />

          <Input name="imgUrl" label="Image" />

          <Checkbox name="isPublic" label="Public inventory" />
        </div>
        <Button type="submit" className="mt-3" text="Create" />
      </FormWrapper>
    </section>
  );
};
