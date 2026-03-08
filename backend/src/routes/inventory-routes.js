import { Router } from "express";
import {getTopInventoriesController }  from '../controllers/get-top-inventory.js'
import { createInventoryController } from "../controllers/create-inventory.js";
import { getLatestInventoriesController } from "../controllers/get-latest-inventory.js";
import { getMyInventoryController } from "../controllers/get-my-inventory.js";


const router = Router();

router.get('/top', getTopInventoriesController);
router.get('/latest', getLatestInventoriesController);
router.get('/my', getMyInventoryController)
router.post('/create', createInventoryController)

export default router;