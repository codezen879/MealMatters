import { Router } from "express";
import { verifyJWT } from "../../middlewares/auth.middleware.js";

import {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
} from "../../controllers/user.controller.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);
router.route("/current-user").get(getCurrentUser);

export default router;
