import { Input } from "./Input";
import { FormWrapper } from "../../layouts/FormWrapper";
import { Button } from "../Button";
import { MESSAGES } from "../../data/messages";
import { Select } from "./Select";
import { useCategories } from "../../hooks/useCategories";
import { useCreateInventory } from "../../hooks/useCreateInventory";
import { showAlert } from "../../helpers/show-alert";
import { useState } from "react";
import { MarkdownEditor } from "../Markdown/MarkdownEditor";
import { Checkbox } from "../Checkbox";
import { Controller } from "react-hook-form";
import { TagInput } from "./TagInput";

export const CreateInventoryForm = () => {
  const { data = [] } = useCategories();
  const { createInventory, isError } = useCreateInventory();
  const [description, setDescription] = useState("");

  const handleCreateInventory = (formData, reset) => {
    createInventory(
      { ...formData, description },
      {
        onSuccess: () => {
          reset();
          setDescription("");
        },
      },
    );
  };

  return (
    <section>
      <h1 className="h4 mb-3">Create inventory</h1>

      {isError && showAlert(MESSAGES.COMMON.FETCH_ERROR)}

      <FormWrapper onSubmit={handleCreateInventory}>
        <div className="d-flex flex-column gap-2">
          <Input name="title" label="Title" required />

          <div>
            <label className="form-label">Description</label>
            <MarkdownEditor value={description} onChange={setDescription} />
          </div>

          <Select
            name="categoryId"
            label="Select category"
            options={data}
            required
          />

          <TagInput name="tags"/>
      
          <Controller
            name="isPublic"
            render={() => <Checkbox label="Public inventory" />}
          />
        </div>
        <Button type="submit" className="mt-3" text="Create" />
      </FormWrapper>
    </section>
  );
};
