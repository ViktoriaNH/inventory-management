import { Modal } from "../../layouts/Modal";
import { handleModalSubmit } from "../../utils/nandle-modal-submit";
import { SalesforceModalForm } from "./SalesforceModalForm";

export const SalesforceModal = ({ isOpen, onSubmit, onClose }) => {
  const handleSubmit = handleModalSubmit(onClose, onSubmit);

  return (
    <Modal isOpen={isOpen}>
      <SalesforceModalForm onSubmit={handleSubmit} onClose={onClose} />
    </Modal>
  );
};