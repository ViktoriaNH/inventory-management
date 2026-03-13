import { deleteInventories } from "../services/inventory.js";
import { handleError } from "../utils/handle-error.js";

export const deleteInventoryController = async (req, res) => {
  try {
    const ids = req.body;

    const result = await deleteInventories(ids);

    return res.status(200).json(result);
  } catch (error) {
    handleError(res, error);
  }
};
