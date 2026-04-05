import { MESSAGES } from "../data/messages";
import { showAlert } from "./show-alert";

  export const deleteSelectedInventories = (selectedInventories, mutateDeleteInventories, clearSelectedInventories) => {
    if (selectedInventories.length === 0) {
      showAlert(MESSAGES.INVENTORY.NO_SELECTED);
    } else {
      mutateDeleteInventories(selectedInventories, {
        onSuccess: () => {
          clearSelectedInventories();
        },
      });
    }
  };
