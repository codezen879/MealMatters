import { Router } from "express";

import {
  foodDonate,
  getNearByFood,
  getAllDonations,
  addToWaitingList,
  assignDonationToUser,
<<<<<<< HEAD
  getFoodDonationById,
=======
  getAllDonationsActive,
  getAllDonationsAccepted,
  getAllDonationsMissed
>>>>>>> 99d0dc42dce158c7cc33a657323422b132173028
} from "../../controllers/foodDonation.controller.js";

const router = Router();

router.route("/nearBy").post(getNearByFood);
router.route("/foodDonate").post(foodDonate);
router.route("/getAllDonations").get(getAllDonations);
<<<<<<< HEAD
router.route("/addToWaitingList/:donationId/:donorID").get(addToWaitingList);
=======
router.route("/getAllDonations/active").get(getAllDonationsActive);
router.route("/getAllDonations/accepted").get(getAllDonationsAccepted);
router.route("/getAllDonations/missed").get(getAllDonationsMissed);
router.route("/addToWaitingList/:donationId").get(addToWaitingList);
>>>>>>> 99d0dc42dce158c7cc33a657323422b132173028
router
  .route("/assignDonationToUser/:donationId/:userId")
  .get(assignDonationToUser);
router.route("/getDonationById/:id").get(getFoodDonationById);

export default router;
