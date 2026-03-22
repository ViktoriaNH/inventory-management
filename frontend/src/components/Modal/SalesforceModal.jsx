import { Modal } from "../../layouts/Modal";
import { handleModalSubmit } from "../../utils/nandle-modal-submit";
import { SalesforceModalForm } from "./SalesforceModalForm";

export const SalesforceModal = ({ onSubmit, onClose }) => {
    const handleSubmit = handleModalSubmit(onClose, onSubmit);

  return (
    <Modal open onClose={onClose}>
      <SalesforceModalForm onSubmit={handleSubmit} />
    </Modal>
  );
};
