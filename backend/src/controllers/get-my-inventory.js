import { checkUserInDB } from "../helpers/check-user-in-db.js";
import { handleError } from "../helpers/handle-error.js";
import { getMyInventories } from "../services/inventory.js";

export const getMyInventoryController = async (req, res) => {
  try {
    const user = await checkUserInDB(req);
    const inventories = await getMyInventories(user.id);

    res.status(200).json(inventories);
  } catch (error) {
    handleError(res, error);
  }
};
