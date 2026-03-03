import { Router } from "express";
import { getTopInventoriesController } from "../controllers/get-top-inventory";

const router = Router();

router.get('/top', getTopInventoriesController());

export default router;