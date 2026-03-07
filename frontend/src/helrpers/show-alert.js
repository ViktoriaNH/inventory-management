export const showAlert = (message, type = "danger") => {
  return <Alert type={type}>{message}</Alert>;
};
