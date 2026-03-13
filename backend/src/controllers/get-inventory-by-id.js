import { getInventoryById } from "../services/inventory.js";
import { handleError } from "../utils/handle-error.js";

export const getInventoryByIdController = async (req, res) => {
  const id  = req.params.inventoryId;

  try {
    const inventories = await getInventoryById(id);
    res.status(200).json(inventories);
  } catch (error) {
    handleError(res, error);
  }
};
