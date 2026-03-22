import { Modal } from "bootstrap";

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
        },
        { once: true },
      );

      modalInstance.hide();
    } catch (error) {
      console.error(error);
    }
  };
};
