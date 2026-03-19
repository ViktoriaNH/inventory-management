import { FormWrapper } from "../../layouts/FormWrapper";
import { Input } from "../Form/Input";
import { Select } from "../Form/Select";
import { Button } from "../Button";
import { SELECT_MODAL_OPTIONS } from "../../data/select-options";

export const HelpModalForm = ({ onSubmit }) => {
  const handleSubmit = (data, reset) => {
    onSubmit(data);

    reset();

    const modalElement = document.getElementById("helpModal");
    const modalInstance = window.bootstrap.Modal.getInstance(modalElement);

    modalInstance.hide();
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <div className="modal-body">
        <Input name="summary" label="Summary" required />

        <Select
          name="priority"
          label="Priority"
          required
          options={SELECT_MODAL_OPTIONS}
        />
      </div>

      <div className="modal-footer">
        <Button text="Cancel" data-bs-dismiss="modal" />
        <Button text="Submit Ticket" type="submit" />
      </div>
    </FormWrapper>
  );
};
