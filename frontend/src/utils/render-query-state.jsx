import { MESSAGES } from "../data/messages";
import { showAlert } from "../helpers/show-alert";

export const renderQueryState = ({ data, isPending, isError }) => {
  if (isPending) {
    return showAlert(MESSAGES.INVENTORY.LOADING, "secondary");
  }
  if (isError || !data) {
    return showAlert(MESSAGES.COMMON.FETCH_ERROR);
  }

  if (Object.keys(data).length === 0) {
    return showAlert(MESSAGES.INVENTORY.EMPTY, "light");
  }

  return null;
};
