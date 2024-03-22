import { Router } from "express";
import { verifyJWT } from "../../middlewares/auth.middleware.js";

import { foodDonate } from "../../controllers/foodDonation.controller.js";

const router = Router();

router.route("/foodDonate").post(verifyJWT, foodDonate);

export default router;
