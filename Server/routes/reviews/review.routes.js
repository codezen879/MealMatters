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

router.route("/review-donation").post(verifyJWT, reviewDonation);
router.route("/delete-review/:id").get(verifyJWT, deleteReviewById);
router.route("/getRiviewById/:id").get(verifyJWT, getReviewById);
router.route("/getAllReviews").get(verifyJWT, getAllReviews);
router.route("/getReviewByDonationId/:id").get(verifyJWT, getReviewByDonorId);

export default router;
