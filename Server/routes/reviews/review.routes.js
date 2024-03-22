import { Router } from "express";
import { verifyJWT } from "../../middlewares/auth.middleware.js";

import {
  reviewDonation,
  deleteReviewById,
  getAllReviews,
  getReviewById,
  getReviewByDonorId,
} from "../../controllers/review.controller.js";

const router = Router();

router.route("/review-donation").post(reviewDonation);
router.route("/delete-review/:id").get(deleteReviewById);
router.route("/getRiviewById/:id").get(getReviewById);
router.route("/getAllReviews").get(getAllReviews);
router.route("/getReviewByDonationId/:id").get(getReviewByDonorId);

export default router;
