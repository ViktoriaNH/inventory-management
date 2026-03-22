export const handleModalSubmit = (modalId, onSubmit) => {
  return async (data, reset) => {
    await onSubmit(data);

    const modalElement = document.getElementById(modalId);
    const modalInstance =
      window.bootstrap.Modal.getOrCreateInstance(modalElement);

    reset();
    modalInstance.hide();
  };
};
