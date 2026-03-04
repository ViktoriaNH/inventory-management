import { useFormContext } from "react-hook-form";
import { FormInput } from "./FormInput";
import { FormWrapper } from "../layouts/FormWrapper";
import { Button } from "./Button";

export const CreateInventoryForm = () => {
  const { register, handleSubmit } = useFormContext();

  const handleCreate = () => {};

  return (
    <section className="container p-1">
      <h1 className="text-center">Create inventory</h1>

      <FormWrapper onSubmit={handleSubmit(handleCreate)}>
        <div className="d-flex flex-column gap-2">
          <FormInput name="title" label="Title" required />
          <FormInput name="description" label="Description" as="textarea" />

          <div>
            <label className="form-label">Category</label>
            <select
              className="form-select"
              {...register("categoryId", { required: true })}
              defaultValue=""
            >
              <option value="" disabled>
                Select category
              </option>
            </select>
          </div>

          <FormInput name="imgUrl" label="Image" />

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              {...register("isPublic")}
              id="isPublic"
            />
            <label className="form-check-label" htmlFor="isPublic">
              Public inventory
            </label>
          </div>
        </div>
        <Button type="submit" className="mt-3" text="Create" />
      </FormWrapper>
    </section>
  );
};
