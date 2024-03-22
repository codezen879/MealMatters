import { FoodDonation } from "../models/foodDonation.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Location } from "../models/location.model.js";

const foodDonate = asyncHandler(async (req, res) => {
  const { donorID, foodType, foodDetails, quantity, expirationDate, location } = req.body;
  const { latitude, longitude, address } = location;

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
  });

  const location_id = locations._id.toString();

  const foodDonateDetail = await FoodDonation.create({
    donorID,
    foodType,
    foodDetails,
    quantity,
    expirationDate,
    location:location_id,
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

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  const earthRadius = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1); // deg2rad below
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = earthRadius * c; // Distance in km
  return distance;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

const getNearByFood = asyncHandler(async (req, res) => {
  let { lat1, lon1, distance } = req.body;
  distance = parseFloat(distance);
  lat1 = parseFloat(lat1);
  lon1 = parseFloat(lon1);
  let foodDonationData = await FoodDonation.find({ isActive: true });

  // const available = [];

  // Map each data element to a Promise
  const promises = foodDonationData.map(async (data) => {
    let k = data; // Create a copy of 'data' to avoid modifying the original object
    let area = await Location.findById(data.location);
    let lon2 = area.longitude;
    let lat2 = area.latitude;
    lat2 = parseFloat(lat2);
    lon2 = parseFloat(lon2);
    let d = getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2);
    if (d <= distance) {
      k.location = area; // Assign the 'area' object to the 'area' key in the 'k' object
      return k;
    }
});

// Wait for all promises to resolve
const result = await Promise.all(promises);

// Filter out undefined values and populate available array
const available = result.filter(item => item !== undefined);

console.log(available);


  return res
    .status(201)
    .json(
      new ApiResponse(
        200,
        available,
        "These Are The Available Donations!!",
        "true"
      )
    );
});

const addToWaitingList = asyncHandler(async (req, res) => {
  const { donationId } = req.params;
  const foodDonation = await FoodDonation.findById(donationId);

  if (!foodDonation) {
    return res
      .status(201)
      .json(new ApiResponse(400, {}, "Food Donation Not Found", "false"));
  }

  const addtoQue = await FoodDonation.findByIdAndUpdate(
    donationId,
    {
      $push: { waitingList: req.user._id },
    },
    { new: true }
  );

  if (!addtoQue) {
    return res
      .status(201)
      .json(new ApiResponse(400, {}, "Not Added in Que!!", "false"));
  }

  return res
    .status(201)
    .json(new ApiResponse(200, foodDonation, "Added in Que", "true"));
});

const assignDonationToUser = asyncHandler(async (req, res) => {
  const foodDonation = await FoodDonation.findById(req.params.donationId);
  if (!foodDonation) {
    return res
      .status(201)
      .json(new ApiResponse(400, {}, "Food Donation Not Found", "false"));
  }

  const userId = req.params.userId;

  if (!userId) {
    return res
      .status(201)
      .json(new ApiResponse(400, {}, "User Id Not Found", "false"));
  }

  const assign = await FoodDonation.findByIdAndUpdate(
    req.params.donationId,
    {
      $set: { assignedTo: userId },
    },
    { new: true }
  );

  if (!assign) {
    return res
      .status(201)
      .json(new ApiResponse(400, {}, "Not Assigned", "false"));
  }

  foodDonation.isActive = false; // Set isActive to false
  foodDonation.status = "Accepted"; // Set status to "Accepted"
  foodDonation.waitingList = [];
  await foodDonation.save({ validateBeforeSave: false });

  return res.status(201).json(new ApiResponse(200, assign, "Assigned", "true"));
});

const getAllDonations = asyncHandler(async (req, res) => {
  const foodDonation = await FoodDonation.find();

  if (!foodDonation) {
    return res
      .status(201)
      .json(new ApiResponse(400, {}, "No FOOd Donation", "false"));
  }

  return res
    .status(201)
    .json(new ApiResponse(200, foodDonation, "All Food Donations", "true"));
});

export {
  foodDonate,
  getNearByFood,
  addToWaitingList,
  assignDonationToUser,
  getAllDonations,
};
