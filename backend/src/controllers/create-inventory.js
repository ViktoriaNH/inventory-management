import { handleError } from "../helpers/handle-error.js";
import { createInventory } from "../services/inventory.js";
import { formInventoryData } from "../helpers/from-inventory-data.js";
import { validateInventoryData } from "../helpers/validate-inventory-data.js";
import { checkUserInDB } from "../helpers/check-user-in-db.js";

export const createInventoryController = async (req, res) => {
  
  try {
    const user = await checkUserInDB(req);

    validateInventoryData(req.body);

    const inventoryData = formInventoryData(req.body, user.id);

    const inventory = await createInventory(inventoryData);

    res.status(201).json(inventory);
  } catch (error) {
    handleError(res, error);
  }
};
