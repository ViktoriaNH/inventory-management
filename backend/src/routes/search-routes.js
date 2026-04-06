import { Router } from "express";
import { searchByTextController } from "../controllers/search-by-text.js";

const router = Router();

router.get("/", searchByTextController);

export default router;
