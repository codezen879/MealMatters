import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Review } from "../models/review.model.js";
import { FoodDonation } from "../models/foodDonation.model.js";

const reviewDonation = asyncHandler(async (req, res) => {
  const { donorId, reviewedDonationID, reviewerUserID, rating, comment } =
    req.body;

  console.log(req.body);

  const review = await Review.create({
    donorId,
    reviewedDonationID,
    reviewerUserID,
    rating,
    comment,
  });

  let tD = await FoodDonation.findById(reviewedDonationID);
  console.log("-*-*-*-*-*", tD);

  if (!review) {
    return res
      .status(201)
      .json(new ApiResponse(400, {}, "Something went wrong", "false"));
  }

  return res
    .status(200)
    .json(new ApiResponse(200, review, "Review Added Successfully", "true"));
});

const deleteReviewById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res
      .status(201)
      .json(new ApiResponse(400, {}, "ID is required", "false"));
  }

  const reviewDeleted = await Review.findByIdAndDelete(id);

  if (!reviewDeleted) {
    return res
      .status(201)
      .json(
        new ApiResponse(
          400,
          {},
          "Something went wrong while deleting review",
          "false"
        )
      );
  }

  return res
    .status(200)
    .json(
      new ApiResponse(200, reviewDeleted, "Review Deleted Successfully", "true")
    );
});

const getAllReviews = asyncHandler(async (req, res) => {
  const allReviews = await Review.find();
  if (!allReviews) {
    return res
      .status(201)
      .json(new ApiResponse(400, {}, "Something went wrong", "false"));
  }

  return res
    .status(200)
    .json(
      new ApiResponse(200, allReviews, "Reviews Fetched Successfully", "true")
    );
});

const getReviewById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const review = await Review.findById(id);

  if (!review) {
    return res
      .status(201)
      .json(new ApiResponse(400, {}, "Review not found", "false"));
  }

  return res
    .status(200)
    .json(new ApiResponse(200, review, "Review Fetched Successfully", "true"));
});

const getReviewByDonorId = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const review = await Review.find({ donorId: id });

  if (!review) {
    return res
      .status(201)
      .json(new ApiResponse(400, {}, "Review not found", "false"));
  }

  return res
    .status(200)
    .json(new ApiResponse(200, review, "Review Fetched Successfully", "true"));
});

export {
  reviewDonation,
  deleteReviewById,
  getAllReviews,
  getReviewById,
  getReviewByDonorId,
};
