import { Router } from "express";
import { requireAuth } from "@clerk/express";
import { syncUserController } from '../controllers/sync-user.js';

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
