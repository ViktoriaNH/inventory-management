import { FormWrapper } from "../../layouts/FormWrapper";
import { handleModalSubmit } from "../../utils/nandle-modal-submit";
import { Input } from "../Form/Input";
import { ModalFooter } from "./ModalFooter";

export const SalesforceModalForm = ({ onSubmit }) => {
  const handleSubmit = handleModalSubmit("crmModal", onSubmit);

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <div className="modal-body">
        <Input name="companyName" label="Company name" required />

        <Input name="firstName" label="First name" required />

        <Input name="lastName" label="Last name" required />
      </div>

      <ModalFooter submitText="Create Account" />
    </FormWrapper>
  );
};
