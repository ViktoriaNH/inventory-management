import { ALERT_MESSAGES } from "../data/alert-messages";
import { showAlert } from "../helpers/show-alert";

export const renderQueryState = ({data, isPending, isError}) => {
  if (isPending) {
    return showAlert(ALERT_MESSAGES.LOADING_INVENTORIES, "secondary");
  }
  if (isError) {
    return showAlert(ALERT_MESSAGES.FETCH_ERROR);
  }

  if (!data?.length) {
    return showAlert(ALERT_MESSAGES.NO_INVENTORIES, 'light')
  }

  return null;
};
