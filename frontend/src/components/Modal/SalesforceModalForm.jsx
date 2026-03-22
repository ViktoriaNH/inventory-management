import { FormWrapper } from "../../layouts/FormWrapper";
import { Input } from "../Form/Input";
import { ModalFooter } from "./ModalFooter";

export const SalesforceModalForm = ({ onSubmit }) => {

  return (
    <FormWrapper onSubmit={onSubmit}>
      <div className="modal-body">
        <Input name="companyName" label="Company name" required />

        <Input name="firstName" label="First name" required />

        <Input name="lastName" label="Last name" required />
      </div>

      <ModalFooter />
    </FormWrapper>
  );
};
