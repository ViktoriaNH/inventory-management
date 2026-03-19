import { Router } from "express";
import { requireAuth } from "@clerk/express";
import { syncUserController } from "../controllers/sync-user.js";
import { getUserProfile } from "../controllers/get-user-profile.js";

const router = Router();

router.post(
  "/",
  (req, res, next) => {
    next();
  },
  requireAuth(),
  syncUserController,
);

router.get('/profile', getUserProfile)

export default router;
