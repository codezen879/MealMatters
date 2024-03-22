import { FoodDonation } from "../models/foodDonation.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Location } from "../models/location.model.js";
const foodDonate = asyncHandler(async (req, res) => {
  const {
    donorID,
    foodType,
    quantity,
    expirationDate,
    pickupAvailable,
    deliveryAvailable,
    status,
    location,
  } = req.body;
  const { latitude, longitude, address, city, state, country, postal_code } =
    location;

  // if (
  //   [
  //     donorID,
  //     foodType,
  //     quantity,
  //     expirationDate,
  //     pickupAvailable,
  //     deliveryAvailable,
  //     status,
  //   ].some((field) => field?.trim() === "")
  // ) {
  //   return res
  //     .status(201)
  //     .json(new ApiResponse(400, {}, "All fields are required", "false"));
  // }

  const locations = await Location.create({
    latitude,
    longitude,
    address,
    city,
    state,
    country,
    postal_code,
  });

  const location_id = locations._id.toString();

  const foodDonateDetail = await FoodDonation.create({
    donorID,
    foodType,
    quantity,
    expirationDate,
    pickupAvailable,
    deliveryAvailable,
    status,
    location: location_id,
  });

  if (!foodDonateDetail) {
    return res
      .status(201)
      .json(new ApiResponse(400, {}, "User Food Donation Failed", "false"));
  }

  return res
    .status(201)
    .json(
      new ApiResponse(
        200,
        foodDonateDetail,
        "Donation Details Registered Succesfully!!",
        "true"
      )
    );
});

export { foodDonate };
