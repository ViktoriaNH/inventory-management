import { handleError } from "../utils/handle-error.js";
import { getLatestInventories } from "../services/inventory.js";

export const getLatestInventoriesController = async (req, res) => {
  try {
    const inventories = await getLatestInventories();

    res.status(200).json(inventories);
  } catch (error) {
    handleError(res, error);
  }
};
