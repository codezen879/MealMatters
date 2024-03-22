import { Router } from "express";
import { verifyJWT } from "../../middlewares/auth.middleware.js";

import {
  foodDonate,
  getNearByFood,
  getAllDonations,
  addToWaitingList,
  assignDonationToUser,
} from "../../controllers/foodDonation.controller.js";

const router = Router();

router.route("/nearBy").post(getNearByFood);
router.route("/foodDonate").post(foodDonate);
router.route("/getAllDonations").get(getAllDonations);
router.route("/addToWaitingList/:donationId").get(addToWaitingList);
router
  .route("/assignDonationToUser/:donationId/:userId")
  .get(assignDonationToUser);

export default router;
