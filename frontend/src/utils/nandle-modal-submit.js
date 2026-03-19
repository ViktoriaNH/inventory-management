export const handleModalSubmit = (modalId, onSubmit) => {
  return (data, reset) => {
    onSubmit(data);
    reset();

    const modalElement = document.getElementById(modalId);
    const modalInstance = window.bootstrap.Modal.getInstance(modalElement);

    modalInstance.hide();
  };
};