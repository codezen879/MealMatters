import { Router } from "express";
import { foodDonate } from "../../controllers/foodDonation.controller.js";

const router= Router();

router.route("/foodDonate").post(foodDonate);

export default router;
