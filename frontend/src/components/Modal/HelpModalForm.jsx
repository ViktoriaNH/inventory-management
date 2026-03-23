import { FormWrapper } from "../../layouts/FormWrapper";
import { Input } from "../Form/Input";
import { Select } from "../Form/Select";
import { SELECT_MODAL_OPTIONS } from "../../data/select-options";
import { handleModalSubmit } from "../../utils/nandle-modal-submit";
import { ModalFooter } from "./ModalFooter";

export const HelpModalForm = ({ onSubmit, onClose }) => {
  const handleSubmit = handleModalSubmit(onClose, onSubmit);

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

      <ModalFooter onClose={onClose} />
    </FormWrapper>
  );
};