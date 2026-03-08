import { handleError } from "../helpers/handle-error";
import { getLatestInventories } from "../services/inventory";

export const getLatestController = async (req, res) => {
  try {
    const inventories = await getLatestInventories();

    res.status(200).json(inventories);
  } catch (error) {
    handleError(res, error);
  }
};
