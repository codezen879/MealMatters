import { Router } from "express";
import { verifyJWT } from "../../middlewares/auth.middleware.js";

import { foodDonate, getNearByFood } from "../../controllers/foodDonation.controller.js";

const router = Router();


router.route("/nearBy").post(getNearByFood);
router.route("/foodDonate").post(verifyJWT, foodDonate);

export default router
