import { Modal } from "../../layouts/Modal";
import { HelpModalForm } from "./HelpModalForm";

export const HelpModal = ({ isOpen, onSubmit, onClose }) => {
  return (
    <Modal isOpen={isOpen} title="Create support ticket" onClose={onClose}>
      <HelpModalForm onSubmit={onSubmit} onClose={onClose} />
    </Modal>
  );
};