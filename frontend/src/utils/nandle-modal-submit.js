export const handleModalSubmit = (onClose, onSubmit) => {
  return async (data, reset) => {
    try {
      await onSubmit(data);
      reset();
      onClose();   
    } catch (error) {
      console.error(error);
    }
  };
};
