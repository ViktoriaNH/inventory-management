import { SELECT_MODAL_OPTIONS } from "../data/select-options";
import { FormWrapper } from "../layouts/FormWrapper";
import { Button } from "./Button";
import { Input } from "./Form/Input";
import { Select } from "./Form/Select";

export const HelpModal = ({ onSubmit }) => {
  const handleSubmit = (data, reset) => {
    onSubmit(data);

    reset();

    const modalElement = document.getElementById("helpModal");
    const modalInstance = window.bootstrap.Modal.getInstance(modalElement);

    modalInstance.hide();
  };

  return (
    <div className="modal fade" id="helpModal" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Create Support Ticket</h5>
            <Button className="btn-close" data-bs-dismiss="modal" />
          </div>

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
        </div>
      </div>
    </div>
  );
};
