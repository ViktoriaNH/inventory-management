import { ALERT_MESSAGES } from "../data/alert-messages";
import { showAlert } from "../helpers/show-alert";

export const Test = () => {
  return showAlert(ALERT_MESSAGES.NO_DATA, "light");
};
