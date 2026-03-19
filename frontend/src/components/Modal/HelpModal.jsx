import { Modal } from "../../layouts/Modal";
import { HelpModalForm } from "./HelpModalForm";

export const HelpModal = ({ onSubmit }) => {
  return (
    <Modal id="helpModal" title="Create support ticket">
      <HelpModalForm onSubmit={onSubmit} />
    </Modal>
  );
};
