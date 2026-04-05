import { Router } from "express";
import { searchByTextController } from "../controllers/search-by-text.js";

const router = Router();

router.get("/search", searchByTextController);

export default router;
