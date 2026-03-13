import { handleError } from "../utils/handle-error.js";
import { getTopInventories } from "../services/inventory.js";

export const getTopInventoriesController = async (req, res) => {
  try {
    const inventories = await getTopInventories();

    res.status(200).json(inventories);
  } catch (error) {
     handleError(res, error);
  }
};
