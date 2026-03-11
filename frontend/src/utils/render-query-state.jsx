import { ALERT_MESSAGES } from "../data/alert-messages";
import { showAlert } from "../helpers/show-alert";

export const renderQueryState = ({ data, isPending, isError }) => {
  if (isPending) {
    return showAlert(ALERT_MESSAGES.LOADING_DATA, "secondary");
  }
  if (isError || !data) {
    return showAlert(ALERT_MESSAGES.FETCH_ERROR);
  }

  if (Object.keys(data).length === 0) {
    return showAlert(ALERT_MESSAGES.NO_INVENTORIES, "light");
  }

  return null;
};
