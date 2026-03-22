import { Modal } from "bootstrap";

const removeModal = () => {
  document.querySelectorAll(".modal-backdrop").forEach((backdrop) => backdrop.remove());
  document.body.classList.remove("modal-open");
};

export const handleModalSubmit = (modalId, onSubmit) => {
  return async (data, reset) => {
    try {
      await onSubmit(data);

      const modalElement = document.getElementById(modalId);
      const modalInstance = Modal.getOrCreateInstance(modalElement);

      modalElement.addEventListener(
        "hidden.bs.modal",
        () => {
          reset();
          modalInstance.dispose();
          removeModal();
        },
        { once: true },
      );

      modalInstance.hide();
    } catch (error) {
      console.error(error);
    }
  };
};
