import { Router } from "express";
import {getTopInventoriesController }  from '../controllers/get-top-inventory.js'
import { createInventoryController } from "../controllers/create-inventory.js";


const router = Router();

router.get('/top', getTopInventoriesController);
router.get('/latest', getLatestInventoriesController);
router.post('/create', createInventoryController)

export default router;