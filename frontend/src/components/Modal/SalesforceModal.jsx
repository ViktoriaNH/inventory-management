import { Modal } from "../../layouts/Modal";
import { SalesforceModalForm } from "./SalesforceModalForm";

export const SalesforceModal = ({ onSubmit }) => {
  return (
    <Modal id="crmModal" title="Create Salesforce account">
      <SalesforceModalForm onSubmit={onSubmit} />
    </Modal>
  );
};
