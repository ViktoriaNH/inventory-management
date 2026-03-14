import { ALERT_MESSAGES } from "../data/alert-messages";
import { showAlert } from "./show-alert";

  export const deleteSelectedInventories = (selectedInventories, mutateDeleteInventories, clearSelectedInventories) => {
    if (selectedInventories.length === 0) {
      showAlert(ALERT_MESSAGES.NO_SELECTED);
    } else {
      mutateDeleteInventories(selectedInventories, {
        onSuccess: () => {
          clearSelectedInventories();
        },
      });
    }
  };
