import { Router } from "express";
import { getTopInventoriesController } from "../controllers/get-top-inventory.js";
import { createInventoryController } from "../controllers/create-inventory.js";
import { getLatestInventoriesController } from "../controllers/get-latest-inventory.js";
import { getMyInventoryController } from "../controllers/get-my-inventory.js";
import { getInventoryByIdController} from '../controllers/get-inventory-by-id.js'
import { deleteInventoryControllel } from "../controllers/delete-inventory.js";


const router = Router();

router.get("/top", getTopInventoriesController);
router.get("/latest", getLatestInventoriesController);
router.get("/my", getMyInventoryController);
router.post("/create", createInventoryController);
router.get("/:inventoryId", getInventoryByIdController);
router.delete("/delete", deleteInventoryControllel);

export default router;
