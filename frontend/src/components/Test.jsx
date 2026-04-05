import { MESSAGES } from "../data/messages";
import { showAlert } from "../helpers/show-alert";

export const Test = () => {
  return showAlert(MESSAGES.COMMON.DATA_NOT_FOUND, "light");
};
