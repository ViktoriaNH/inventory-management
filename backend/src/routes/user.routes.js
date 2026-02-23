import { Router } from "express";
import { syncUserController } from "./../controllers/syncUserController.js";
import { requireAuth } from "@clerk/express";

const router = Router();

router.post(
  "/",
  (req, res, next) => {
    console.log("BEFORE requireAuth", req.headers);
    next();
  },
  requireAuth(),
  syncUserController,
);

export default router;
