import { Alert } from "../components/Alert";

export const showAlert = (message, type) => {
  return <Alert type={type}>{message}</Alert>;
};



  // if (isPending) {
  //   return showAlert(ALERT_MESSAGES.LOADING_INVENTORIES, "info");
  // }
  // if (isError) {
  //   return showAlert(ALERT_MESSAGES.FETCH_ERROR);
  // }

  // if (!data.length) {
  //   return showAlert(ALERT_MESSAGES.INFO_NO_INVENTORIES, "info");
  // }
