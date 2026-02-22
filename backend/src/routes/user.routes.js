import { Router } from "express";
import { syncUserController } from "./../controllers/syncUserController.js";
import { ClerkExpressWithAuth } from "@clerk/express";

const router = Router();

router.post("/", ClerkExpressWithAuth(), syncUserController);

export default router;
