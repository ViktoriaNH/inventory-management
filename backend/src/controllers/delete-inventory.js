import { handleError } from "../utils/handle-error.js";

export const deleteInventoryController = (req, res) => {
  try {
    const inventoriesIds =
      selectedInventories?.map((inventory) => inventory.id) || [];
  } catch (error) {
    handleError(res, error);
  }
};
