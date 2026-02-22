import { Router } from "express";
import { syncUserController } from "./../controllers/syncUserController.js";
import { requireAuth } from "@clerk/express";

const router = Router();

router.post("/", requireAuth(), syncUserController);

export default router;
