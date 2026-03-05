import { Input } from "./Input";
import { FormWrapper } from "../layouts/FormWrapper";
import { Button } from "./Button";
import { useMutation } from "@tanstack/react-query";
import { createInventory } from "../api/inventory-api";
import { Alert } from "../components/Alert";
import { ALERT_MESSAGES } from "../data/alert-massages";
import { Checkbox } from "./Checkbox";
import { Select } from "./Select";
import { queryClient } from "../config/queryClient";

export const CreateInventoryForm = () => {
  const mutation = useMutation({
    mutationFn: (formData) => {
      return createInventory(formData);
    },
// TODO: добавить оптом еще послендие инвентари 
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inventories", "my"] });
      queryClient.invalidateQueries({ queryKey: ["inventories", "top"] });
    },

    onError: (error) => {
      console.error(error);
    },
  });

  const handleCreate = (formData) => {
    mutation.mutate(formData);
  };

  return (
    <section className="container p-1">
      <h1 className="text-center">Create inventory</h1>

      {mutation.isError && <Alert>{ALERT_MESSAGES.FETCH_ERROR}</Alert>}

      <FormWrapper onSubmit={handleCreate}>
        <div className="d-flex flex-column gap-2">
          <Input name="title" label="Title" required />
          <Input
            name="description"
            label="Description"
            as="textarea"
            required
          />

          <Select name="categoryId" label="Select category" options required />

          // TODO: теги забыла добавить 

          <Input name="imgUrl" label="Image" />

          <Checkbox name="isPublic" label="Public inventory" />
        </div>
        <Button type="submit" className="mt-3" text="Create" />
      </FormWrapper>
    </section>
  );
};
