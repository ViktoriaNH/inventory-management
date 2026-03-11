import { getInventoryById } from "../services/inventory";
import { handleError } from "../utils/handle-error";

export const getInventoryByIdController = async (req, res) => {
  const { id } = req.params();
  try {
    const inventories = await getInventoryById(id);
    res.status(200).json(inventories);
  } catch (error) {
    handleError(res, error);
  }
};
